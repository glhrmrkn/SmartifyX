---
name: smartify
description: Roteador de módulos do protocolo Smartify. Use em qualquer tarefa de domínio (código, design, pesquisa, segurança, eng. reversa, gamedev, ensino, revisão, escrita, dados, meta, ops, cli, negócios, marketing) quando o Smartify estiver ativo — lê o índice e carrega SOMENTE o módulo certo. Invoque "/smartify check" para auto-diagnóstico da instalação.
---

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
6. **RememberX:** com `SMARTIFY/` no projeto, ler `STATE.md`+`MAP.md` primeiro (read-first) e responder da memória; símbolo de código → skill `graphify`.
7. **Checkpoint:** só manual via `/checkpoint "<nome>"` (sequência em `tools/checkpoint/SKILL.md`). Restore: confirmação sempre.

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

## Modo `check` (auto-diagnóstico)

Se a invocação tiver o argumento `check` (ex.: `/smartify check`), **não** roteie domínio
nem leia módulo. Apenas verifique cada item abaixo e responda em tabela (OK/FALHA), sem inventar:

| # | Item | Verificação |
|---|---|---|
| 1 | Núcleo | existe `E:/Tools/Smartify/V2/core/smartify.md` |
| 2 | Índice | existe `E:/Tools/Smartify/V2/router/INDEX.md` |
| 3 | Módulos | contagem de `*.md` em `E:/Tools/Smartify/V2/modules/` (esperado **16**) |
| 4 | Ferramentas | existem `V2/tools/rememberx/` e `V2/tools/checkpoint/` |
| 5 | Skill viva | esta skill carregou (frontmatter `name: smartify` válido) |

Encerre com uma linha: `Smartify: OK` ou `Smartify: FALHA — <item que falhou>`.
