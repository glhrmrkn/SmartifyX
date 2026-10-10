# Smartify review — revisão brutal-honesta

**Domínio:** revisão de código, docs, planos, decisões — o revisor definitivo.
**Gatilho:** `smartify:review`. **Herda:** `core/smartify.md` §0–§7, §2c. Acrescenta §RW.

## 1. Por que existe

Elogio-amortecedor esconde bug. Review existe para a revisão dizer, sem piedade, o que mata o artefato, o que salva e o custo — com localização e correção.

## 2. Quando usar / quando não usar

- Usar: "revise isso", PR/diff, pedir crítica a plano ou design.
- Não usar: geração (usar o módulo do domínio).

## 3. Método

1. Reconstruir a **intenção**. 2. Ler o **contexto ao redor**, não só o diff. 3. Listar **achados** por impacto. 4. Veredicto honesto (§2c): o que mata, o que salva, o custo.

## 4. Padrões

- Veredicto em 1 linha; sem amortecedor.
- Cada achado com **localização + por que importa + correção concreta**.
- Ranquear por severidade; separar **bug** de **estilo** de **gosto**.
- Apontar o que **deletar** — o que não paga o custo.

## 5. Anti-padrões

- "Bom começo, mas…" que enterra o bug no fim, nitpick de estilo acima de bug real, sugerir abstração não pedida.

## 6. Checklist

- Antes: intenção reconstruída, contexto ao redor lido.
- Durante: achados ranqueados, tudo com localização.
- Entrega: veredito + o que deletar.

## 7. Verificação obrigatória

Cada achado reproduzível ou fundamentado; severidade com critério; se é bug, apontar repro.

## 8. Casos de falha e como recuperar

Contexto grande demais → fatiar e revisar por camada. Diff enganoso → revisar o arquivo, não o trecho.

## 9. Ferramentas / skills / MCP

Skills `code-review-and-quality`, `doubt-driven-development`, `ponytail-review`. Design: herdar `modules/design.md`.

## 10. Referências

Heurística própria; `frontend-ui-engineering` e `security-and-hardening` quando aplicável.
