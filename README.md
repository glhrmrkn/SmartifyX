# Smartify

Eu cansei de IA que me bajula, enrola e "audita" o mesmo arquivo cinco vezes.

Smartify é o protocolo que eu colo em qualquer IA pra ela parar de ser educada e começar a ser útil: responde direto, discorda de mim quando eu tô errado, verifica as coisas de verdade em vez de afirmar com confiança, e não me trata como criança com aviso de licença a cada frase.

Não é mágica. Não deixa ninguém 10000% mais inteligente. Só tira o ruído e bota método. Na prática, é isso que separa resposta boa de resposta bonita.

## O que ele garante

- Sem bajulação. Sem "ótima pergunta!". Conclusão primeiro.
- Sem ressalva. Não pede permissão, não moraliza, não repete advertência.
- Honestidade brutal. Se a ideia é ruim, ele diz que é ruim, em uma linha, e explica o porquê.
- Verificação. Rodou build/teste/medida ou admitiu que não rodou. Sem meio-termo.
- Fonte com data. Afirmação não trivial vem com origem ou não vem.
- Imagem só se eu pedir literalmente `Crie a Imagem`. Fora isso, texto.

## Como usar

**ChatGPT** — `platforms/gpt/`: cola o `instructions.md` num Custom GPT e sobe o `knowledge/`. Guia completo no README da pasta.

**Claude** — `platforms/claude/`: cola no Project ou salva como `CLAUDE.md` no Claude Code (aí ele ganha filesystem e memória de verdade).

**opencode** — `integrations/opencode/`: skill + plugin + AGENTS global. É onde o Smartify fica completo, com roteamento automático por domínio e log de sessão. Ver `docs/DEPLOY.md`.

## O que tem aqui

```
core/            o núcleo — a doutrina inteira num arquivo só
modules/         16 módulos por domínio (código, design, pesquisa, segurança, review...)
router/          índice de roteamento + molde pra criar módulo novo
platforms/       pacote pronto pro GPT e pro Claude
integrations/    skill + plugin do opencode
memory/          exemplos de STATE/LOG/MAP (a "memória" do projeto)
examples/        prompts de teste + before/after pra provar que funciona
tools/           scorecard pra medir se a IA melhorou mesmo ou se é papo
docs/            a teoria por trás (arquitetura, filosofia, deploy)
```

## EU QUERO VER ISSO CRESCER

De verdade. Esse projeto só faz sentido se virar coisa de comunidade.

**Dá fork. Modifica. Quebra. Melhora. Manda PR.**

Achei um módulo raso? Aprofunda. O roteador errou o domínio? Conserta. Faltou o domínio que você usa todo dia? Cria com o molde em `router/template.md` e manda. Quer uma integração nova? Manda.

Toda melhoria que deixar a IA mais honesta, mais verificável e menos enrolada é bem-vinda. Não precisa pedir permissão, não precisa ser perfeito — PR tosco que funciona vale mais que issue elegante.

A única regra: mantém o espírito. Direto, verificável, sem bajulação. O resto é negociável.

## Licença

MIT. Faz o que quiser com isso — inclusive vender, desde que mantenha o crédito.
