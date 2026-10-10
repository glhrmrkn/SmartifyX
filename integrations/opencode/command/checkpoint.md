---
description: Cria um checkpoint manual (versão concluída) do projeto atual
---

Siga a sequência de checkpoint do Smartify em `E:/Tools/Smartify/V2/tools/checkpoint/SKILL.md`.

Nome da versão: "$ARGUMENTS"

Regras: 100% manual, só em versão concluída, nada automático. Se o nome estiver vazio, pare e peça.

Passos:
1. Ler `SMARTIFY/LOG.md` e listar os arquivos tocados desde o último checkpoint.
2. Copiar para `SMARTIFY/checkpoints/<nome>/` + `manifest.json` (schema em `tools/checkpoint/manifest.schema.md`).
3. Fechar a checklist no `STATE.md`.
4. Escrever 1 entrada no `CHANGELOG.md` (schema em `tools/checkpoint/CHANGELOG.schema.md`).
5. Responder o resumo: versão, arquivos, checklist fechada.

Nunca grave segredos.
