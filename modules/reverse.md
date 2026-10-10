# Smartify reverse — engenharia reversa

**Domínio:** binários, malware, protocolos, formatos — disassembly, descompilação, CTF.
**Gatilho:** `smartify:reverse`. **Herda:** `core/smartify.md` §0–§7. Acrescenta §RE.

## 1. Por que existe

Sem separar estática de dinâmica e sem montar o call graph antes de concluir, a RE vira achismo em hex. Reverse existe para cada afirmação ser amarrada a endereço/símbolo e testada.

## 2. Quando usar / quando não usar

- Usar: RE, análise de malware, crackme/CTF, formato/protocolo fechado.
- Não usar: código-fonte já disponível (usar `code`).

## 3. Método

1. Reconhecimento: formato, arquitetura, compilador, packer/obfuscação, imports.
2. Estática: strings, headers, tabelas, desassembly/decompilação.
3. Mapa: **call graph** e funções-chave.
4. Hipóteses: o que cada trecho faz e como testar.
5. Dinâmica: debugger/trace para confirmar (memória, syscalls, rede).
6. Documentar: o que foi descoberto, onde, como se sabe.

## 4. Padrões

- Separar estática de dinâmica explicitamente; cada conclusão **rastreável** (endereço/offset/símbolo); hipótese→teste, nunca "parece que"; renomear funções conforme o entendimento evolui.

## 5. Anti-padrões

- Conclusões sem endereço, renomear para o que se gostaria que fosse, misturar estática e dinâmica sem declarar.

## 6. Checklist

- Antes: tipo/arquitetura/packer identificados, imports listados.
- Durante: call graph montado, conclusões com endereço.
- Entrega: comportamento reproduzível.

## 7. Verificação obrigatória

Reproduzir o comportamento de forma determinística; confirmar endereço/símbolo; cross-check com fonte/símbolo quando disponível.

## 8. Casos de falha e como recuperar

Packer/ofuscado → desempacotar primeiro; anti-debug → bypass antes de concluir. Símbolo ausente → ancorar em string/header.

## 9. Ferramentas / skills / MCP

ghidra, radare2/r2, objdump/readelf, x64dbg/gdb; `doubt-driven-development`; **graphify** (call graph do fonte). Confirmar instalação.

## 10. Referências

Manuais de formato/ISA; fonte primária > oficial.
