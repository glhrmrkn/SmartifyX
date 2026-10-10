---
description: Atualiza manualmente o RememberX (STATE/MAP) do projeto atual
---

Atualize o RememberX do projeto atual seguindo `E:/Tools/Smartify/V2/tools/rememberx/SKILL.md`.

Nota do usuário: "$ARGUMENTS"

Passos:
1. Se `SMARTIFY/` não existir, crie `STATE.md` + `MAP.md` (bootstrap explícito; schemas em `tools/rememberx/`), com as pastas top-level no MAP.
2. Read-first: leia `SMARTIFY/STATE.md` + `SMARTIFY/MAP.md` antes de qualquer varredura.
3. Atualize `STATE.md` (status, task, checkpoint last_file/last_cmd, checklist, erro, next, decisões) — **≤60 linhas**.
4. Anexe o resumo ao `LOG.md` (rotação ~30KB).
5. Estrutura/símbolos de código → skill `graphify`, não grep manual.

Nunca grave segredos.
