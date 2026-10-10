# SMARTIFY/MAP.md — exemplo

> Mapa de decisão, não lista de arquivos. O graphify já cuida da estrutura. Aqui fica o que o graphify não vê: semântica de comandos, convenções do time.

## Convenções de caminho
- `src/` → código fonte (TS/JS)
- `tests/` → testes (unit/integration)
- `infra/` → infra como código

## Comandos do projeto
- `npm run dev` → sobe servidor de dev (porta 3000)
- `npm test` → roda testes (vitest)
- `npm run lint` → eslint + prettier

## Como responder "onde fica X"
1. Se for símbolo/código → delegar ao `graphify query "X"`.
2. Se for comando → consultar esta seção (acima).
3. Se for decisão/arquitetura → ler `STATE.md` + `core/smartify.md`.

## Impressão digital (staleness)
Cada entrada abaixo tem `sha` do arquivo (ou `mtime`). Se igual → responder daqui; se mudou → re-auditar só aquela entrada.

| Conceito | Arquivo-chave | SHA / mtime |
|---|---|---|
| configuração de lint | `.eslintrc.cjs` | a1b2c3d |
| schema do banco | `infra/schema.sql` | e4f5g6h |