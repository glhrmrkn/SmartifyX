// Smartify OpenCode plugin
// 1) Toasts: ativo / trabalhando / concluído / erro.
// 2) RememberX: bootstrap lazy de SMARTIFY/, checkpoint mecânico em STATE,
//    LOG rotativo, CHANGELOG por sessão, retomada task+next, reinjeção na compactação.
// Checkpoint nomeado (/checkpoint) é 100% manual — nenhum hook grava snapshot.
// Sem dependências externas (apenas builtins). Tudo em try/catch: erro aqui
// nunca quebra a sessão.
import { existsSync, appendFileSync, readFileSync, mkdirSync, writeFileSync, statSync } from "fs";
import { join } from "path";

const STATE_SKELETON = (task) =>
  `status: running
task: ${task || "—"}
updated: ${new Date().toISOString()}
## Checkpoint
- last_file: — | last_cmd: —
## Checklist
- (vazia)
## Erro
- nenhum
## Next
- —
## Decisões
- (nenhuma)
`;

const LOG_MAX = 30 * 1024;

export const SmartifyPlugin = async ({ client, directory }) => {
  let active = false;
  const stateDir = join(directory || ".", "SMARTIFY");
  const stateFile = join(stateDir, "STATE.md");
  const logFile = join(stateDir, "LOG.md");
  const changelogFile = join(stateDir, "CHANGELOG.md");

  const toast = (message, variant) => {
    try {
      const p = client?.tui?.showToast?.({ body: { message, variant } });
      if (p && typeof p.catch === "function") p.catch(() => {});
    } catch {}
  };

  // Bootstrap lazy: cria SMARTIFY/ + esqueleto STATE na 1ª escrita. Sem isso,
  // LOG/STATE nunca nascem (era o bug: só escrevia se a pasta já existisse).
  const ensureState = () => {
    try {
      if (!existsSync(stateDir)) mkdirSync(stateDir, { recursive: true });
      if (!existsSync(stateFile)) writeFileSync(stateFile, STATE_SKELETON(), "utf8");
    } catch {}
  };

  const readState = () => {
    try {
      return existsSync(stateFile) ? readFileSync(stateFile, "utf8") : "";
    } catch { return ""; }
  };

  // Checkpoint mecânico: atualiza last_file/last_cmd + updated. Semântica
  // (checklist, erro, next, decisões) é do modelo, não do plugin.
  const touchState = (field, value) => {
    try {
      if (!existsSync(stateFile)) return;
      let s = readState();
      s = s.replace(/^updated: .*$/m, `updated: ${new Date().toISOString()}`);
      if (field === "file") s = s.replace(/^(- last_file: ).*$/m, `$1${value} | last_cmd: —`);
      if (field === "cmd") s = s.replace(/^(.* \| last_cmd: ).*$/m, `$1${value}`);
      writeFileSync(stateFile, s, "utf8");
    } catch {}
  };

  const markStatus = (status, extra) => {
    try {
      if (!existsSync(stateFile)) return;
      let s = readState();
      s = s.replace(/^status: .*$/m, `status: ${status}`);
      s = s.replace(/^updated: .*$/m, `updated: ${new Date().toISOString()}`);
      if (status === "error" && extra) {
        s = s.replace(/^## Erro\n- .*$/m, `## Erro\n- ${extra}`);
      }
      writeFileSync(stateFile, s, "utf8");
    } catch {}
  };

  const log = (line) => {
    try {
      if (!existsSync(stateDir)) return;
      appendFileSync(logFile, line + "\n", "utf8");
      try {
        const st = statSync(logFile);
        if (st.size > LOG_MAX) {
          const tail = readFileSync(logFile, "utf8").split("\n").slice(-120).join("\n");
          writeFileSync(logFile, tail, "utf8");
        }
      } catch {}
    } catch {}
  };

  // Parse mínimo e tolerante do STATE (formato tools/rememberx/STATE.schema.md).
  const parseState = (s) => {
    const get = (re) => { const m = s.match(re); return m ? m[1].trim() : "—"; };
    return {
      status: get(/^status: (.*)$/m),
      task: get(/^task: (.*)$/m),
      next: (() => { const m = s.match(/^## Next\n- (.*)$/m); return m ? m[1].trim() : "—"; })(),
    };
  };

  return {
    event: async ({ event }) => {
      try {
        const t = event?.type;
        if (t === "session.created") {
          toast("⚡ Smartify ativo", "info");
          if (existsSync(stateFile)) { // retomada visível: mostra onde parou
            const { status, task, next } = parseState(readState());
            if (status === "paused" || status === "running" || status === "error") {
              toast(`Smartify: retomar "${task}" → ${next} [${status}]`, status === "error" ? "warning" : "info");
            }
          }
        }
        if (t === "session.idle") {
          try { // CHANGELOG da sessão: arquivos + comandos tocados
            if (existsSync(logFile)) {
              const lines = readFileSync(logFile, "utf8").trim().split("\n").filter(Boolean);
              const touched = [...new Set(lines.map((l) => {
                const m = l.match(/\[(write|edit|bash)\] (.*)$/);
                return m ? m[2].slice(0, 120) : null;
              }).filter(Boolean))];
              if (touched.length) {
                appendFileSync(changelogFile,
                  `\n## sessão ${new Date().toISOString().slice(0, 10)}\n` +
                  touched.map((x) => `- ${x}`).join("\n") + "\n", "utf8");
              }
            }
          } catch {}
          markStatus("done");
          toast("✓ Smartify concluído", "success");
        }
        if (t === "session.error") {
          try {
            const msg = String(event?.properties?.message || event?.message || "erro de sessão").slice(0, 160);
            markStatus("error", `${msg} às ${new Date().toISOString()}`);
          } catch {}
          toast("Smartify: erro registrado no STATE", "warning");
        }
      } catch {}
    },

    "tool.execute.before": async () => {
      try {
        if (!active) {
          active = true;
          toast("⚡ Smartify trabalhando", "info");
        }
      } catch {}
    },

    "tool.execute.after": async (input) => {
      try {
        const tool = input?.tool;
        if (tool !== "write" && tool !== "edit" && tool !== "bash") return;
        ensureState(); // bootstrap lazy: pasta + STATE nascem na 1ª escrita
        const detail = input?.args?.filePath || input?.args?.command || "";
        const now = new Date().toISOString();
        log(`- ${now} [${tool}] ${String(detail).slice(0, 160)}`);
        if (tool === "bash") {
          touchState("cmd", `${String(detail).slice(0, 120)}`);
        } else {
          touchState("file", String(detail).slice(0, 120));
        }
      } catch {}
    },

    "experimental.session.compacting": async (input, output) => {
      try {
        if (existsSync(stateFile) && output?.context) {
          output.context.push(
            "## SMARTIFY/STATE.md (contexto persistido — não re-auditar o que já está aqui)\n" +
              readState()
          );
        }
      } catch {}
    },
  };
};
