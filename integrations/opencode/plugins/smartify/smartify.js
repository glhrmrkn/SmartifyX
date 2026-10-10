// Smartify OpenCode plugin
// 1) Avisa na TUI que o Smartify está ativo/trabalhando/concluído (toast).
// 2) Memória leve por projeto: loga atividade e reinjeta STATE.md na compactação.
// Sem dependências externas (apenas builtins) para carregar sempre. Tudo em try/catch:
// um erro aqui nunca deve quebrar a sessão.
import { existsSync, appendFileSync, readFileSync } from "fs";
import { join } from "path";

export const SmartifyPlugin = async ({ client, directory }) => {
  let active = false;
  const stateDir = join(directory || ".", "SMARTIFY");

  const toast = (message, variant) => {
    try {
      const p = client?.tui?.showToast?.({ body: { message, variant } });
      if (p && typeof p.catch === "function") p.catch(() => {});
    } catch {}
  };

  // Só grava em projetos Smartify (que já têm a pasta SMARTIFY/), para não poluir repos aleatórios.
  const log = (line) => {
    try {
      if (!existsSync(stateDir)) return;
      appendFileSync(join(stateDir, "LOG.md"), line + "\n", "utf8");
    } catch {}
  };

  return {
    event: async ({ event }) => {
      try {
        const t = event?.type;
        if (t === "session.created") toast("⚡ Smartify ativo", "info");
        if (t === "session.idle") toast("✓ Smartify concluído", "success");
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
        if (tool === "write" || tool === "edit" || tool === "bash") {
          const detail = input?.args?.filePath || input?.args?.command || "";
          log(`- ${new Date().toISOString()} [${tool}] ${String(detail).slice(0, 160)}`);
        }
      } catch {}
    },

    "experimental.session.compacting": async (input, output) => {
      try {
        const p = join(stateDir, "STATE.md");
        if (existsSync(p) && output?.context) {
          output.context.push(
            "## SMARTIFY/STATE.md (contexto persistido — não re-auditar o que já está aqui)\n" +
              readFileSync(p, "utf8")
          );
        }
      } catch {}
    },
  };
};