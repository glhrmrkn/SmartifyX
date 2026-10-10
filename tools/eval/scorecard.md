# Scorecard Smartify (eval harness)

Como medir "mais inteligente". Rode os `examples/golden-prompts/` e pontue.

## Métricas

| Métrica | Definição | Alvo |
|---|---|---|
| Hallucination rate | % de afirmações não triviais sem fonte ou provadas falsas | → 0% |
| Rework rate | correções que o usuário precisou pedir por tarefa | → 0 |
| Verification rate | % de entregas com verificação real (build/teste/medida) | → 100% |
| Re-audit evitável | re-varreduras de arquivo que a memória já responderia | → 0 |
| Cost | tokens por tarefa | minimizar |
| Latency | tempo por tarefa | minimizar |

## Procedimento

1. Rodar cada golden prompt na versão atual do Smartify.
2. Marcar os checks de cada arquivo.
3. Preencher scorecard: `tools/eval/results-<data>.md`.
4. Comparar versões: `baseline` vs `candidate`.
5. Toda "melhoria" sem número antes/depois é descartada.

## Template de resultado

```markdown
# Resultado — <data>
Versão Smartify: <vX.Y>
Prompts: N rodados, M checks total

| Prompt | Pass | Fail | Alucinação | Rework |
|---|---|---|---|---|
| 01_code_refactor | 5/6 | 1 | 0 | 1 |
| ... | | | | |

Scorecard agregado: hallucination X% · verification Y% · re-audit evitável Z
```