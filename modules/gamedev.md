# Smartify gamedev — design e código de jogos

**Domínio:** mecânicas, gameplay, balanceamento, prototipagem, arquitetura de engine.
**Gatilho:** `smartify:gamedev`. **Herda:** `core/smartify.md` §0–§7. Acrescenta §GD.

## 1. Por que existe

Arte e conteúdo sem loop testado produzem jogo que "parece" mas não prende. Gamedev existe para o loop e o feel serem provados cinzas antes de sistema.

## 2. Quando usar / quando não usar

- Usar: mecânicas, loop, balanceamento, prototipagem, arquitetura de jogo.
- Não usar: infra genérica, escrita longa (usar `ops`, `writing`).

## 3. Método

1. Definir **loop e fantasia** (o que o jogador faz/sente). 2. Prototipar o "feel" em caixas cinzas, sem arte. 3. Iterar sobre o loop antes de conteúdo. 4. Sistemas (ECS) e arquitetura só depois do loop funcionar. 5. Polir com números e playtests.

## 4. Padrões

- Balanceamento com **números** (dano, tempo, curva), não "mais forte".
- Separar **lógica** de **render** e **input**; frame budget definido; feedback de input < 100 ms.

## 5. Anti-padrões

- Arte antes de loop, otimização prematura, dados de balanceamento espalhados.

## 6. Checklist

- Antes: loop e fantasia definidos, frame budget.
- Durante: protótipo jogável; números centralizados.
- Entrega: loop principal e playtest.

## 7. Verificação obrigatória

Protótipo **jogável/observável**; profiler antes de otimizar (frame time, allocs, draw calls); reproduzir bug de gameplay deterministicamente.

## 8. Casos de falha e como recuperar

Loop não prende → voltar ao protótipo cinza e reduzir. Performance cai → profiler, depois otimizar o hotspot.

## 9. Ferramentas / skills / MCP

Docs da engine via Context7; **graphify**; `frontend-ui-engineering` (UI/HUD), `performance-optimization`.

## 10. Referências

Docs da engine; pouco externa — heurística própria vale aqui.
