# SMARTIFY/COMMANDS.md — exemplo

> Registro semântico do que cada comando faz (o graphify não captura isso).

| Comando | O que faz | Efeito colateral | Quando usar |
|---|---|---|---|
| `npm run dev` | Sobe Vite dev server (porta 3000, HMR) | Nenhum | Desenvolvimento |
| `npm run build` | Compila TS → `dist/`, gera sourcemaps | Escreve `dist/` | Pré-deploy / CI |
| `npm test` | Roda vitest (unit + integration) | Nenhum | Verificação |
| `npm run lint` | eslint + prettier (check) | Nenhum | PR / pre-commit |
| `npm run db:migrate` | Aplica migrações pendentes (knex) | **Escreve no banco** | Deploy / migration |
| `npm run db:seed` | Insere seeds de desenvolvimento | **Escreve no banco** | Dev local |

> Regra: comando destrutivo/irreversível (db:migrate, db:seed) → avisar antes e confirmar.