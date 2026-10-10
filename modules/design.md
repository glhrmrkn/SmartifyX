# Smartify design — UI/UX e front-end

**Domínio:** telas, componentes, design system, identidade visual.
**Gatilho:** `smartify:design`. **Herda:** `core/smartify.md` §0–§7. Acrescenta §D.

## 1. Por que existe

Design "bonito" que não aguenta estados reais (vazio, erro, loading) e não passa por navegador real quebra no primeiro uso. Design existe para que o produto entregue pareça e funcione como produto real.

## 2. Quando usar / quando não usar

- Usar: telas, componentes, design system, identidade, UX.
- Não usar: lógica pura, escrita longa, dados (usar `code`, `writing`, `data`).

## 3. Método

Tarefa trivial (ajuste de cor/espaço): direto. Não trivial:
1. Contexto: público, objetivo de negócio, tom, plataforma.
2. Sistema: tokens (cor, tipografia, espaçamento, raio, sombra, movimento), grade, escala.
3. Construir: hierarquia visual explícita, grid consistente, escala 4/8px.
4. Verificar em tela real (DevTools/Playwright). 5. Autorevisão: contraste, foco, estados, responsivo.

## 4. Padrões

- Hierarquia: um foco primário por tela. Tamanho/peso/cor/espaço define leitura.
- Tipografia: escala modular, ≤ 2 famílias, line-height 1.4–1.6, medida 45–75 cols.
- Cor: WCAG AA (4.5:1 normal, 3:1 grande/UI); nunca sinalizar estado só por cor; papéis (superfície, texto, primária, feedback).
- Espaçamento: escala consistente; respiro em vez de bordas; proximidade agrupa.
- Layout: grid e breakpoints definidos; sem overflow; alvo de toque ≥ 44px.
- Estados obrigatórios: hover, focus visível, active, disabled, vazio, carregando, erro, sucesso.
- Acessibilidade: HTML semântico, rótulos, teclado, `aria` só quando HTML não basta.
- Movimento: com propósito, 150–300 ms, easing consistente.

## 5. Anti-padrões

- Valor mágico solto, 4 tamanhos de radius aleatórios, 6 pesos de fonte.
- Texto em imagem, contraste sem medir, `div` onde seria `button`.
- Lorem ipsum entregue como final, sem estado vazio/erro.

## 6. Checklist

- Antes: breakpoints, tokens, papéis de cor.
- Durante: estados implementados; `prefers-reduced-motion` respeitado.
- Entrega: console sem erro; foco por teclado; responsivo verificado.

## 7. Verificação obrigatória

Navegador real (DevTools/Playwright): DOM, console, rede; contraste medido; estados vazio/erro; eixos principais nos breakpoints. Sem navegador: declarar "não verificado visualmente" e entregar a lista.

## 8. Casos de falha e como recuperar

Sem contraste → ajustar papéis, não cor solta. Layout quebra no mobile → voltar ao grid e à escala. Foco invisível → estilo de focus dedicado.

## 9. Ferramentas / skills / MCP

Skills `frontend-ui-engineering`, `browser-testing-with-devtools`, `performance-optimization` (Core Web Vitals).
MCP: Figma (tokens), Chrome DevTools, Playwright. Fixar versão; revisar permissões.

## 10. Referências

WCAG; docs de frameworks via Context7.
