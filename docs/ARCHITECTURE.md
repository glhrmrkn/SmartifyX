# Arquitetura Smartify

## O problema

IA genérica: bajulação, hedge, alucinação, re-auditoria, texto longo que esconde pouco. "QI 500 milhões" é enquadramento de tom — define postura, não capacidade. O teto é o modelo.

## As 4 ideias

1. **Capacidade > proibição** — definir o que fazer, não empilhar "não faça".
2. **Enforcement > instrução** — regra que importa vira código (plugin/tool) que executa, não texto que a IA "deve lembrar".
3. **Verificação > assertividade** — fato / inferência / suposição marcados; afirmação não trivial com fonte + data.
4. **Medição > mais texto** — alucinação, retrabalho, custo. Sem número não há "mais inteligente".

Constituição (3–5 inegociáveis) × heurística (o resto é julgamento).

## Como funciona

```
você pede algo
 → núcleo (core/smartify.md) — identidade, comunicação, método, pesquisa, imagem, memória
 → router (router/INDEX.md) — carrega só o módulo do domínio (modules/<módulo>.md)
 → nenhum domínio → modules/fallback.md
```

Núcleo herda sempre; módulo acrescenta o que é do domínio. Nunca carregar todos.

## Como evita re-auditoria

| Camada | O que faz | Mata o quê |
|---|---|---|
| Estável no contexto | AGENTS/núcleo com convenções/comandos | re-descobrir o permanente |
| Mapa sob demanda | MAP.md / graphify (`query`/`explain`/`path`) | varrer o repo inteiro |
| Automação | plugin grava LOG; compactação preserva STATE | esquecer o que já foi feito |
| Impressão digital | entrada com sha/mtime; igual → não reler | auditoria infinita |

## Onde isso roda

| Ambiente | Doutrina | Memória | Plugin |
|---|---|---|---|
| opencode | sempre-on (AGENTS/núcleo) | nativa por projeto | toast + LOG/STATE |
| GPT | instructions + knowledge | colar bloco ESTADO | — |
| Claude | Project knowledge / CLAUDE.md | nativa no Claude Code | — |
