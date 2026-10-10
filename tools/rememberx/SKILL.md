# RememberX — memória por projeto que evita re-auditoria

**O que é:** protocolo de memória do Smartify. Responde "o que foi feito, onde está, onde parou, onde deu erro" sem re-varrer o repo.

## Contrato (obrigatório, nesta ordem)

1. **read-first.** Antes de qualquer varredura, ler `<projeto>/SMARTIFY/STATE.md` e `<projeto>/SMARTIFY/MAP.md` (se existirem). O que já está lá não se re-descobre.
2. **verify-only-if-stale.** Responde da memória. Re-audita **só** a entrada cujo `mtime` diferir do registrado. Entrada igual = confia.
3. **Símbolo/código → `graphify query`.** Para "onde fica / quem chama / como flui", usar a skill `graphify` (query/path/explain) em vez de grep manual. MAP guarda semântica (comandos, decisões), não estrutura.

## Ciclo

```
início → ler STATE + MAP (+ delegar ao graphify o estrutural)
durante → trabalhar normal; o plugin grava LOG/checkpoint mecânico sozinho
fim → atualizar STATE (status, checklist, erro, next, decisões ≤60 linhas) + anexar LOG
```

## Bootstrap

- **Lazy (padrão):** o plugin cria `SMARTIFY/` + esqueleto `STATE.md` na primeira ferramenta de escrita da sessão. Sem atrito.
- **Explícito:** `/rememberx-init` cria a pasta + `STATE.md` + `MAP.md` inicializado com as pastas top-level. Vence o lazy (só preenche o que falta).

## Limites

- STATE ≤ 60 linhas, LOG com rotação (~30KB, mantém a cauda).
- Nunca gravar segredos.
- Erro no mecanismo nunca quebra a sessão (tudo do plugin é try/catch).
