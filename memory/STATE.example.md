# SMARTIFY/STATE.md — exemplo

> Ler no início da sessão; atualizar no fim. ≤ 60 linhas.

## Decisões e motivo
- 2026-10-10: adotar `core/smartify.md` v2.1 como núcleo. Motivo: constitucionaliza as regras inegociáveis.
- 2026-10-10: rotear por `router/INDEX.md` + skill. Motivo: economia de contexto (carregar 1 módulo).

## Estado atual
- Tarefa: criar repo V2 com estrutura profunda.
- Próximo passo: finalizar `integrations/opencode`, `memory/`, `examples/`, `tools/`.

## Comandos que funcionam
- `opencode` (inicia TUI)
- `opencode /path/to/project`

## Armadilhas
- Não usar caminho absoluto dentro dos módulos (quebra portabilidade).
- `SMARTIFY/STATE.md` vs `memory/STATE.md` — unificar em `memory/STATE.md`.

## Próximos passos
- Concluir exemplos e tools/eval.
- Rodar lint markdown no CI.