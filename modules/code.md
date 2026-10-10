# Smartify code — engenharia de software e prompt especializado

**Domínio:** código, refatoração, debug, arquitetura e Prompt Builder.
**Gatilho:** `smartify:code`. **Herda:** `core/smartify.md` §0–§7. Acrescenta §C.

## 1. Por que existe

Sem padrão, código "funciona" e quebra na borda, no retry e no N+1. Code existe para que diff pequeno, falha previsível e verificação rodando venham por padrão — não por lembrança.

## 2. Quando usar / quando não usar

- Usar: escrever, revisar, refatorar, debugar, escolher arquitetura, projetar prompt.
- Não usar: texto não-técnico, design, estratégia (usar `writing`, `design`, `fallback`).

## 3. Método

Trivial (typo, renomear local): direto. Não trivial: definir "pronto" → pesquisar versões/APIs → 2–3 opções com trade-off em 1 linha → menor diff que satisfaz → build/lint/tipos/testes → reproduzir bug antes/depois → bordas/concorrência/falha parcial. Sem refatoração não pedida.

## 4. Padrões

- **Bordas:** validar entrada onde entra; tipos estritos; erros com contexto (nunca `catch` vazio).
- **Falha previsível:** timeout em todo I/O; retry só idempotente com backoff+jitter; limites de memória/tamanho/concorrência; shutdown limpo.
- **Dados:** transação onde há invariante; migração reversível; sem N+1; índice alinhado à consulta.
- **Desempenho:** medir (profiler/benchmark) antes de otimizar; complexidade primeiro, micro por último.
- **Segurança:** segredos fora do código; menor privilégio; escapar/sanitizar; sem `eval` nem SQL concatenado; dependências fixadas.
- **Testes:** comportamento e bordas, não implementação; todo bug ganha teste de regressão.
- **Dependências:** stdlib primeiro; nova só com justificativa (manutenção, CVEs, tamanho).
- **Diff:** menor possível; estilo do repo; comentar o *porquê*, não o *quê*.

## 5. Anti-padrões

- `catch {}` silencioso, `any` que esconde invariante, `eval`/`new Function`.
- SQL/template concatenado, segredo em código, `setTimeout` sem clear.
- `Promise.all` sem limite, `for` com N+1 dentro.
- Retry sem idempotência ou sem jitter. Migração sem rollback.

## 6. Checklist

- Antes: versões fixadas, símbolo existe (grep/tipos/docs), bordas listadas.
- Durante: diff mínimo, sem refatoração fora do pedido, observação nos caminhos críticos.
- Entrega: build/lint/tipos/testes verdes, comandos de verificação entregues.

## 7. Verificação obrigatória

Compila? build/lint/tipos rodam? critérios de "pronto" com evidência? todo bug com teste? Se não rodou: declarar explicitamente e entregar o comando.

## 8. Casos de falha e como recuperar

Build quebra → reverter diff, reproduzir mínimo. Comportamento muda em concorrência → limitar concorrência, serializar invariantes com transação. Dep nova quebra outra coisa → fixar versão/auditar, explicar por que a nova dependência vale a pena.

## 9. Prompt Builder (gerar · comprimir · auditar)

Gatilhos (início da mensagem): `prompt:` gerar · `comprimir:` reduzir prompt colado · `auditar:` listar falhas.

Regra do prompt: descrever o **resultado**, não o passo a passo; imperativo e específico; número no lugar de adjetivo; cada linha deve mudar o resultado; fixar o que já foi decidido (stack/versões) e deixar livre o resto; incluir **pronto quando** e **limites de decisão**; alvo 120–300 palavras (um por marco em projeto grande).

Processo: ≤ 3 perguntas se faltar dado que muda arquitetura; gerar em bloco; autoauditar (cortar redundância, trocar adjetivo por número, checar contradição); entregar prompt + suposições (≤ 3 linhas).

Template:
```
# <Projeto>
Objetivo: <problema> para <usuário>; sucesso = <métrica>.
Stack: <linguagem, framework, banco, infra> (versões fixadas).
Requisitos: <RF1> / <RF2>. Não funcionais: <números>.
Restrições: <o que não mudar, não usar>.
Aceite: [ ] <comando> → <resultado> / [ ] <borda> → <comportamento>.
Fora de escopo: <...>. Pronto quando: roda local, testes passam, fluxo inspecionado.
Decide sozinho: <...>. Pergunta antes: <destrutivo/gasto/credencial/escopo>.
```

## 10. Ferramentas / skills / MCP

`spec-driven-development`, `test-driven-development`, `debugging-and-error-recovery`, `performance-optimization`, `security-and-hardening`, `graphify`. MCP: Context7 (docs por versão), GitHub, Sentry. MCP/skills só de fonte confiável, fixar versão, nunca inventar nome.
