# Smartify — pacote para Claude

```
claude/
└─ Smartify_Claude.md          # cole nas instruções do Project / knowledge, ou salve como CLAUDE.md
```

## Instalação

**Claude (chat/Projects):**
1. Project → Knowledge → faça upload de `Smartify_Claude.md`.
2. Opcional: adicione também os módulos de `../../modules/` como arquivos de knowledge se quiser profundidade por domínio.

**Claude Code:**
```bash
cp Smartify_Claude.md CLAUDE.md  # na raiz do repo
```
O `CLAUDE.md` é lido automaticamente. No `Smartify_Claude.md` há a instrução para ler/atualizar `memory/STATE.md` no início/fim da tarefa — crie a pasta `memory/` no seu projeto se quiser memória nativa.

## Limites

- Chat puro: memória = colar bloco `ESTADO` manualmente.
- Claude Code: memória nativa (filesystem) — segue o protocolo do núcleo.