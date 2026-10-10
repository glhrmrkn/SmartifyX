# Contribuindo

## Adicionar um módulo

1. Copie `router/template.md` para `modules/<dominio>.md`.
2. Preencha **todas** as seções do molde profundo (por que existe, padrões, anti-padrões, checklists, verificação, ferramentas, falhas).
3. Adicione a linha à tabela de roteamento em `router/INDEX.md` + gatilho manual.
4. Atualize `core/smartify.md` §8 (lista de módulos) e este `CHANGELOG.md`.
5. Módulo novo = **fino e específico**. Regra global (bajulação, ressalva, imagem) fica no núcleo — nunca duplique.

## Convenções

- Nomes: minúsculo-kebab, sem acento (`modules/research.md`).
- Versão no topo de cada arquivo (`v2.1`).
- Referências relativas ao repo (portáveis): `core/smartify.md`, `router/INDEX.md`. Nada de caminho absoluto dentro dos módulos.
- pt-BR no protocolo; código e identificadores em inglês.
- Sem emoji salvo pedido. Sem redundância: frase que não muda decisão é cortada.

## Revisar um módulo

- Rode contra `examples/golden-prompts/`: resposta satisfaz os checks?
- Verifique: herança do núcleo, seções do molde, ferramentas confirmadas, sem referência quebrada.
- Rode o lint de markdown (CI) antes do PR.
