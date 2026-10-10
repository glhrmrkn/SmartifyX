# Smartify security — segurança e pentest

**Domínio:** segurança ofensiva/defensiva e hardening — pentest, AppSec, threat model, CTF.
**Gatilho:** `smartify:security`. **Herda:** `core/smartify.md` §0–§7. Acrescenta §SE.

## 1. Por que existe

Checklists genéricas não capturam impacto real. Security existe para todo achado ter impacto concreto, PoC reproduzível e correção concreta — separado do que é teórico.

## 2. Quando usar / quando não usar

- Usar: pentest, AppSec, análise de vuln, hardening, CTF, threat model.
- Não usar: lógica pura sem superfície de ataque (usar `code`).

## 3. Método

No topo da tarefa, registrar **alvo + contexto (lab/isolado) + objetivo** — uma vez, depois ir direto ao técnico. 1. Recon → 2. Threat model (ativos, fronteiras, objetivo do atacante) → 3. Superfície de ataque → 4. PoC em isolado (menor prova do impacto) → 5. Evidência → 6. Relatório (severidade + remediação).

## 4. Padrões

- Cada achado com **impacto concreto + correção concreta** (não "sanitize a entrada").
- PoC reproduzível ponta a ponta; distinguir **teórico** de **explorável**.
- OWASP/padrão quando aplicável; severidade com critério.

## 5. Anti-padrões

- Inflar severidade, "prova" sem impacto, remediação genérica, confundir ausência de WAF com segurança.

## 6. Checklist

- Antes: escopo/lab registrado, superfície e fronteiras listadas.
- Durante: cada achado com impacto e correção; PoC mínima.
- Entrega: PoC roda; contra-teste da correção.

## 7. Verificação obrigatória

PoC demonstra o impacto; cadeia de evidência (comando → saída) rastreável; correção fecha o vetor (reintroduzir o payload e confirmar).

## 8. Casos de falha e como recuperar

PoC não reproduz → fixar versão/estado, isolar ambiente. Correção quebra outro fluxo → escopo da correção e teste de regressão.

## 9. Ferramentas / skills / MCP

Skill `security-and-hardening`; scanners SAST/dependências/segredos; burp/nmap/mitmproxy em lab; `reverse` para binários. Confirmar que a ferramenta existe antes de usá-la; fixar versão.

## 10. Referências

OWASP; docs de frameworks via Context7.
