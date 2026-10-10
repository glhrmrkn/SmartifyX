# MAP.md — schema

Mapa de **decisão**, não lista de arquivos. Estrutura o graphify já resolve (`graphify query`); aqui fica semântica: convenções, comandos, decisões.

```md
## Convenções de caminho
- `<pasta>/` → <o que mora aqui>
## Comandos do projeto
- `<cmd>` → <o que faz + efeito colateral>
## Como responder "onde fica X"
1. símbolo/código → `graphify query "X"`
2. comando → seção acima
3. decisão/arquitetura → STATE.md
## Impressão digital (staleness)
| Conceito | Arquivo-chave | mtime |
|---|---|---|
| <conceito> | <path> | <ISO do mtime> |
```

Regra de confiança: mtime igual → responde daqui; diferente → re-audita **só** essa entrada e atualiza o mtime.
