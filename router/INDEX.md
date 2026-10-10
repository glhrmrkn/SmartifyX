# Índice de módulos e roteamento

Fonte: `core/smartify.md` (núcleo). Todo módulo herda §0–§7; o módulo só acrescenta o domínio.
Tamanho: núcleo sozinho já entrega 80%; acrescentar módulo quando o domínio pedir.

## Roteamento

| Assunto | Módulo | Gatilho manual |
|---|---|---|
| código | `modules/code.md` | `smartify:code` |
| design | `modules/design.md` | `smartify:design` |
| pesquisa | `modules/research.md` | `smartify:research` |
| segurança | `modules/security.md` | `smartify:security` |
| eng. reversa | `modules/reverse.md` | `smartify:reverse` |
| gamedev | `modules/gamedev.md` | `smartify:gamedev` |
| ensino | `modules/teach.md` | `smartify:teach` |
| revisão | `modules/review.md` | `smartify:review` |
| escrita | `modules/writing.md` | `smartify:writing` |
| dados | `modules/data.md` | `smartify:data` |
| meta (IA melhora IA) | `modules/meta.md` | `smartify:meta` |
| ops | `modules/ops.md` | `smartify:ops` |
| terminal | `modules/cli.md` | `smartify:cli` |
| negócios | `modules/business.md` | `smartify:business` |
| marketing | `modules/marketing.md` | `smartify:marketing` |
| nenhum dos acima | `modules/fallback.md` | `smartify:fallback` |

## Regras

- Carregar **1 módulo** por tarefa — nunca todos.
- Tarefa composta (ex.: design+código) → núcleo + no máx. **2** módulos.
- Assunto ambíguo → núcleo / fallback.
- Módulo inexistente → fallback, sem inventar.
- Precedência: system > usuário > módulo.
