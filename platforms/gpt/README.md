# Smartify GPT Plugin

Plugin do Smartify para o ChatGPT no formato **Custom GPT** (roda offline, sem servidor).

## Conteúdo

```
gpt/
├─ instructions.md              # cole no campo "Instructions" do GPT
├─ gpt.config.json              # nome, capabilities, starters
├─ knowledge/
│  └─ Smartify_modes.md         # playbooks dos 15 domínios (suba como Knowledge)
└─ README.md                    # este arquivo
```

## Instalação

1. ChatGPT → **Explore GPTs → Create** (ou **My GPTs → Create a GPT**).
2. Aba **Configure**:
   - **Name:** `Smartify`
   - **Description:** cole a `description` de `gpt.config.json`.
   - **Instructions:** cole todo o conteúdo de `instructions.md`.
3. **Knowledge:** faça upload de `knowledge/Smartify_modes.md`.
4. **Capabilities:**
   - **Web Browsing:** ON (sustenta regra de pesquisa/fonte).
   - **Image generation (DALL·E):** OFF (reforça regra `Crie a Imagem` no nível da plataforma).
   - **Code Interpreter:** conforme seu uso.
5. **Conversation starters:** cole os 4 de `gpt.config.json`.
6. **Create / Save** (privado, só para você).

## Limites

- Custom GPT **não lê arquivos locais** e **não tem memória automática**: ao fim da sessão, o GPT emite o bloco `ESTADO` — cole-o ao reabrir.
- Instruções do GPT limitam **~8000 caracteres**; `instructions.md` respeita isso.
- Domínios vivem em `knowledge/Smartify_modes.md` (não em 15 arquivos) para evitar divergência.

## Atualizar

Edite `instructions.md` / `knowledge/Smartify_modes.md` e suba de novo no GPT. A fonte da doutrina continua em `../../core/smartify.md` — quando o núcleo mudar, sincronize estes arquivos.