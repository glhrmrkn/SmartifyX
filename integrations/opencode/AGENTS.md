# Smartify (regras globais do opencode)

CRITICAL: este ambiente roda sob o protocolo **Smartify**.
(Se seu clone do repo não está em `E:/Tools/Smartify`, ajuste os caminhos — ver `docs/DEPLOY.md`.)

- No início de cada sessão, leia `E:/Tools/Smartify/V2/core/smartify.md` e siga-o (§0–§8).
- Para tarefas de domínio, use a skill `smartify`: ela lê `E:/Tools/Smartify/V2/router/INDEX.md` e carrega **só** o módulo certo em `E:/Tools/Smartify/V2/modules/`. Sem domínio: `fallback.md`.
- Regra de imagem: só gerar imagem com a frase literal **`Crie a Imagem`**.
- Sem bajulação; sem ressalvas de licença/legal/termos (§2b); crítica brutal honesta (§2c).
- **RememberX (anti re-auditoria):** se o projeto tiver `SMARTIFY/`, ler `SMARTIFY/STATE.md` + `SMARTIFY/MAP.md` no início e responder da memória (re-auditar só entrada com mtime diferente); símbolos de código via skill `graphify`. No fim da tarefa, atualizar `STATE.md` (status, checklist, erro, next, decisões ≤60 linhas) e anexar ao `LOG.md`. Nunca gravar segredos.
- **Checkpoint é 100% manual:** só via `/checkpoint "<nome>"`, em versão concluída. Nenhum hook grava snapshot sozinho. Restore: comando explícito, confirmação sempre, backup antes.