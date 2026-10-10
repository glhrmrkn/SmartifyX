# STATE.md — schema (≤60 linhas)

```md
status: running | paused | done | error
task: <1 linha>
updated: <ISO UTC>
## Checkpoint
- last_file: <path:linha> | last_cmd: <cmd> (exit N)
## Checklist
- [x] feito · [ ] pendente (1 item por linha)
## Erro
- nenhum | <o quê> em <onde> às <quando>
## Next
- <próximo passo executável>
## Decisões
- <decisão>: <motivo> (1 linha cada)
```

Regras: status sempre atual; checklist fecha no `/checkpoint`; `updated` a cada escrita; sem segredo; sem prosa.
