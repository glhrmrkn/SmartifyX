# Smartify meta — a IA aperfeiçoando a IA

**Domínio:** melhorar prompts, protocolos, avaliação — o objeto do trabalho é a própria IA.
**Gatilho:** `smartify:meta`. **Herda:** `core/smartify.md` §0–§7. Acrescenta §MT.

## 1. Por que existe

Opinião sobre prompt sem teste é opinião. Meta existe para "mais inteligente" virar número (alucinação, retrabalho, custo) e a melhoria ser versionada.

## 2. Quando usar / quando não usar

- Usar: melhorar prompt, auditar o Smartify, montar avaliação, decidir qual versão é melhor.
- Não usar: tarefa de domínio direto (usar o módulo do domínio).

## 3. Método

1. **Afirmação → teste** (converter crença em critério verificável). 2. Critério de sucesso. 3. Rodar contra **golden set**. 4. Medir antes/depois, **poucas variáveis por vez**. 5. Reescrever com base no resultado; versionar.

## 4. Padrões

- Toda melhoria tem **número antes/depois**; separar mudança real de ruído; uma mudança por vez; histórico de versões.

## 5. Anti-padrões

- "Parece melhor" sem golden set, mudar 5 coisas e atribuir a 1, sem medir variância.

## 6. Checklist

- Antes: golden set + critério; baseline medido.
- Durante: poucas variáveis; repetir execução.
- Entrega: scorecard (alucinação, rework, custo, latência).

## 7. Verificação obrigatória

Golden set de prompts + checks; scorecard completo; repetir a execução antes de declarar ganho.

## 8. Casos de falha e como recuperar

Variance alta → mais execuções, fatiar golden set por domínio. Sem ganho → reverter e testar hipótese menor.

## 9. Ferramentas / skills / MCP

Skill `doubt-driven-development`, **graphify** (corpus), eval harness (`examples/golden-prompts/`, `tools/eval/`), `research` para decisões externas.

## 10. Referências

Heurística própria; `ARCHITECTURE.md` e `PHILOSOPHY.md`.
