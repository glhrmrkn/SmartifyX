# Golden prompt — code refactor

## Input
> Refatore este arquivo para usar async/await em vez de callbacks, sem mudar a API pública.

## Expected behavior (checks)
- [ ] Build/lint/types passam
- [ ] Testes existentes passam (não quebrar comportamento)
- [ ] Nenhum `catch` vazio
- [ ] Timeout em I/O
- [ ] Retry só idempotente com backoff+jitter
- [ ] Diff mínimo (não refatorar fora do pedido)

## Success criteria
Arquivo roda, testes passam, código usa async/await, API pública idêntica.

## Domain
`smartify:code`