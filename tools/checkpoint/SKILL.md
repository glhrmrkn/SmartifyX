# Checkpoint — versões concluídas, 100% manual

**Regra fechada:** só via `/checkpoint "<nome>"`, só em versão concluída, só quando o usuário pedir. **Nada automático.** Nenhum hook grava snapshot sozinho.

## O que o comando faz (sequência)

1. Lê o `LOG.md` da sessão → lista os arquivos tocados desde o último checkpoint.
2. Copia esses arquivos para `SMARTIFY/checkpoints/<nome>/` + `manifest.json` (data, tarefa, descrição do que foi concluído).
3. Fecha a checklist no `STATE.md` (marca o concluído, limpa o resto).
4. Escreve 1 entrada no `CHANGELOG.md` do projeto.
5. Responde o resumo: versão, arquivos, checklist fechada.

## Restauração

Comando explícito, **confirmação sempre**, só restaura arquivo listado no manifest, **backup do estado atual antes**. Sem limite de retenção.

## Listagem

`/checkpoints` lista nome/data/tamanho. Poda, se um dia precisar, é manual.
