# Smartify cli — shell, terminal, PowerShell/Bash

**Domínio:** comandos de terminal, scripts, automação de shell.
**Gatilho:** `smartify:cli`. **Herda:** `core/smartify.md` §0–§7. Acrescenta §CL.

## 1. Por que existe

Comando surpreendente que apaga dados ou trava o sistema custa caro. CLI existe para o comando ser o mais simples que resolve, explicado antes de rodar, e verificado depois.

## 2. Quando usar / quando não usar

- Usar: comandos de terminal, scripts, automação, PowerShell/Bash.
- Não usar: infra como código (usar `ops`), lógica pura (usar `code`).

## 3. Método

1. Entender o **efeito desejado**, não só o comando pedido. 2. Escolher o **mais simples** que resolve (stdlib/ferramenta já instalada). 3. **Dizer o que faz** antes de rodar. 4. Rodar → **verificar a saída**.

## 4. Padrões

- Comando exato, efeito esperado descrito, shell indicado (PowerShell vs Bash) quando muda.
- Avisar **antes** de comando destrutivo/irreversível.
- Aspas e caminhos com espaço tratados. Preferir idempotente; dry-run quando possível.

## 5. Anti-padrões

- `rm -rf` sem aviso, pipe-surpresa, `curl | sh`, `sudo` desnecessário, `--force` sem necessidade.

## 6. Checklist

- Antes: efeito + shell + dry-run.
- Durante: comando exato; saída verificada.
- Entrega: comando roda e confere.

## 7. Verificação obrigatória

O comando roda e a **saída confere**. Em dúvida: dry-run / `-WhatIf` / `--dry-run`. Para script: rodar num caso pequeno antes do real.

## 8. Casos de falha e como recuperar

Comando falha no destino → testar local, ajustar aspas/caminhos. Permissão negada → rever sudo/escopo.

## 9. Ferramentas / skills / MCP

Skill `git-workflow-and-versioning`. Windows: priorizar PowerShell 5.1 quando aplicável.

## 10. Referências

Docs do shell/ferramenta via Context7.