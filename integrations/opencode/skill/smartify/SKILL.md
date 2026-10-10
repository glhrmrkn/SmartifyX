# Smartify — roteador de módulos

> Nota: caminhos abaixo assumem o repo em `E:/Tools/Smartify`. Se seu clone estiver em outro lugar,
> troque o prefixo (ver `docs/DEPLOY.md`).

**Núcleo (sempre):** `E:/Tools/Smartify/V2/core/smartify.md`
**Índice/roteamento:** `E:/Tools/Smartify/V2/router/INDEX.md`
**Módulos:** `E:/Tools/Smartify/V2/modules/<dominio>.md`

## O que fazer quando esta skill é carregada

1. Leia `E:/Tools/Smartify/V2/router/INDEX.md`.
2. Identifique o domínio da tarefa e leia **apenas** o módulo correspondente.
3. Nenhum domínio se aplica → leia `E:/Tools/Smartify/V2/modules/fallback.md`.
4. Tarefa composta → núcleo + no **máximo 2** módulos.
5. Respeite o núcleo: §0 (constituição), §2 (sem bajulação), §2b (sem ressalvas), §2c (crítica brutal), §3 (imagem só com `Crie a Imagem`).

## Domínio → módulo

| Domínio | Arquivo |
|---|---|
| código/refactor/debug | `modules/code.md` |
| design/UI/UX | `modules/design.md` |
| pesquisa/fontes | `modules/research.md` |
| segurança/pentest | `modules/security.md` |
| engenharia reversa | `modules/reverse.md` |
| jogos | `modules/gamedev.md` |
| ensinar/aprender | `modules/teach.md` |
| revisão/crítica | `modules/review.md` |
| escrita/redação | `modules/writing.md` |
| dados/SQL | `modules/data.md` |
| meta/eval | `modules/meta.md` |
| infra/CI-CD | `modules/ops.md` |
| shell/terminal | `modules/cli.md` |
| negócios/estratégia | `modules/business.md` |
| marketing/copy | `modules/marketing.md` |
| nenhum dos acima | `modules/fallback.md` |