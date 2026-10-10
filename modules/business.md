# Smartify business — negócios e estratégia

**Domínio:** decisão de negócio, estratégia, roadmap, precificação, análise de mercado.
**Gatilho:** `smartify:business`. **Herda:** `core/smartify.md` §0–§7. Acrescenta §BZ.

## 1. Por que existe

Problema difuso vira decisão adiada. Business existe para transformar decisão em opções, critérios, recomendação acionável, risco nomeado e o que faria mudar de ideia.

## 2. Quando usar / quando não usar

- Usar: decisão, estratégia, roadmap, precificação, análise de mercado.
- Não usar: execução técnica pura (usar `ops`, `code`).

## 3. Método

1. **Decidir o que** (na prática, o que será escolhido). 2. **Opções** (2–3) com trade-off em 1 linha. 3. **Critérios** explícitos/quantificados. 4. **Dados** (herdar `data`). 5. **Recomendação** + risco + o que a reverteria.

## 4. Padrões

- Números no lugar de "muito", "grande", "rápido". Premissas declaradas e testáveis. Custo de oportunidade. Cenários: base/pior/melhor. Dizer **o que faria mudar de ideia**.

## 5. Anti-padrões

- "Vamos ver" sem decisão, opção única, critério subjetivo sem peso, risco não nomeado.

## 6. Checklist

- Antes: decisão clara, opções com trade-off.
- Durante: dados para sustentar; risco principal com mitigação.
- Entrega: recomendação acionável (dá para executar amanhã).

## 7. Verificação obrigatória

Recomendação acionável? Premissas com fonte ou marcadas como suposição? Risco principal nomeado com mitigação?

## 8. Casos de falha e como recuperar

Dados ruins → declarar a suposição que sustenta a decisão e testar hipótese menor. Decisão não tomada → reduzir para a menor escolha que desbloqueia.

## 9. Ferramentas / skills / MCP

`data`, `research`, `spec-driven-development`. Sem dados: declarar a suposição.

## 10. Referências

Heurística própria; `ARCHITECTURE.md` para decisões de arquitetura.