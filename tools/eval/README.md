# tools/eval

Harness de avaliação do Smartify (módulo `meta` em ação).

## Uso

1. Rode cada `examples/golden-prompts/*.md` contra a versão do Smartify em teste.
2. Marque os checks (`pass`/`fail`).
3. Preencha `scorecard.md` (resultados por data).
4. Compare `baseline` vs `candidate` antes de declarar ganho.

## Regras

- Golden set cresce com o tempo (novo bug → novo golden prompt).
- Poucas variáveis por mudança.
- Variance: repetir a execução antes de declarar ganho.