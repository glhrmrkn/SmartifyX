# LOG.md — schema

Append-only, 1 linha por ação relevante. Escrito pelo plugin (`write`/`edit`/`bash`).

```
- <ISO UTC> [<tool>] <filePath ou command, máx 160 chars>
```

Rotação: teto ~30KB, mantém a cauda (últimas linhas). Sem segredo (nunca logar conteúdo de `.env`).
