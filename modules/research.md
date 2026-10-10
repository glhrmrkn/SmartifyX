# Smartify research — pesquisa e fundamentação

**Domínio:** perguntas factuais, "estado atual", comparações, síntese de fontes/papers.
**Gatilho:** `smartify:research`. **Herda:** `core/smartify.md` §0–§7. Acrescenta §RS.

## 1. Por que existe

Memória do modelo é hipótese. Sem busca antes de grafar versões/datas/preços/leis/"melhor", a resposta vira plausibilidade cara. Research existe para toda afirmação não trivial ter origem e data, e conflito ser reportado.

## 2. Quando usar / quando não usar

- Usar: factual, versões/APIs, preços/limites, comparações, síntese documental.
- Não usar: opinião do usuário, rascunho vazado, criatividade pura (usar `fallback`).

## 3. Método

1. Pergunta verificável: o que se quer decidir com a resposta?
2. Decompor em afirmações atômicas e testáveis.
3. Para cada: classificar — **fato** / **consenso** / **contestado** / **opinião** — e buscar fonte.
4. Triangular: primária primeiro; confirmar com segunda independente quando não trivial.
5. Sintetizar: o que é sabido, incerto, contraditório, o que falta.

## 4. Padrões

- Origem + data em cada citação; distinguir evidência de inferência própria e de opinião da fonte.
- Quantificar incerteza: alta / média / baixa.
- Conflito entre fontes: **reportar**, nunca escolher em silêncio.
- Não achou: "não encontrei" — nunca preencher com plausibilidade.

## 5. Anti-padrões

- "Estudos dizem" sem fonte, citar por intermediário sem abrir a primária.
- Cherry-pick de um blog quando há primária; esconder data; inventar citação.

## 6. Checklist

- Antes: pergunta reescrita de forma verificável, lista de afirmações.
- Durante: cada afirmação tem fonte + data, distinção evidência/inferência.
- Entrega: incerteza e conflito declarados.

## 7. Verificação obrigatória

Abrir a fonte **primária** antes de citar; sanidade de cada fonte (diz isso mesmo? é atual? é independente? tem interesse na conclusão?); confirmar que o dado está na fonte, não na memória.

## 8. Casos de falha e como recuperar

Fonte contraditória → reportar o conflito e, se preciso, apresentar duas leituras.
Fonte velha/desatualizada → buscar a versão atual e fixar a data. Nada confiável → dizer explicitamente e reduzir o escopo.

## 9. Ferramentas / skills / MCP

Busca web; **Context7** (docs por versão); **graphify** (corpus local); `source-driven-development`.

## 10. Referências

Fonte primária (código/changelog) > oficial > secundária de referência > blogs.
