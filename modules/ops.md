# Smartify ops — infraestrutura e operações

**Domínio:** infra, CI/CD, cloud, containers.
**Gatilho:** `smartify:ops`. **Herda:** `core/smartify.md` §0–§7. Acrescenta §OP.

## 1. Por que existe

Mudanças não idempotentes, sem rollback e sem observabilidade tornam falha rara em falha catastrófica. Ops existe para tornar falha entediante.

## 2. Quando usar / quando não usar

- Usar: deploy, CI/CD, cloud, docker/k8s, configuração de servidor.
- Não usar: lógica pura (usar `code`).

## 3. Método

1. Entender o **sistema atual**. 2. Mudança **idempotente** (duas execuções = mesmo estado). 3. **Rollback definido** antes de aplicar. 4. Deploy. 5. Observar (log, métrica, alerta).

## 4. Padrões

- Idempotência; rollback testado; log estruturado + métricas nos caminhos críticos; segredos fora do código; menor privilégio; limites de recursos; shutdown limpo; infra como código.

## 5. Anti-padrões

- Deploy sem rollback, segredo em `.env` versionado, `rm -rf` sem `--dry-run`, tolerância de timeout default infinito.

## 6. Checklist

- Antes: rollback definido, observabilidade coberta.
- Durante: idempotência; segredos fora do código.
- Entrega: deploy e rollback testados; smoke test.

## 7. Verificação obrigatória

Caminho de deploy e de **rollback** testados; smoke test pós-deploy; alerta dispara no que importa.

## 8. Casos de falha e como recuperar

Rollback falha → fixar infra e testar recriação. Observabilidade cega → voltar e instrumentar antes de avançar.

## 9. Ferramentas / skills / MCP

Skills `ci-cd-and-automation`, `observability-and-instrumentation`, `shipping-and-launch`. Confirmar versões de CLI/cloud antes de usar; fixar.

## 10. Referências

Docs de infra/cloud via contexto do projeto; heurística própria.
