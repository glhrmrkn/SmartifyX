# Deploy

## GPT (Custom GPT)

1. Create GPT → Configure: cole `platforms/gpt/instructions.md` em *Instructions*.
2. Suba `platforms/gpt/knowledge/` em *Knowledge*.
3. Capabilities: **Web Browsing ON**, **Image generation OFF**, siga `platforms/gpt/gpt.config.json`.
4. Instructions tem ~3.8k chars (limite ~8k).

## Claude

Project → instruções/knowledge do projeto, ou `CLAUDE.md` no Claude Code.
Fonte: `platforms/claude/`. Veja o README local.

## opencode (completo, onde nasce a automação)

```bash
# skill router (sempre leia router/INDEX.md, carregue só 1 módulo)
cp -R integrations/opencode/skill/smartify ~/.config/opencode/skills/smartify
# plugin (toasts + LOG/STATE)
mkdir -p ~/.config/opencode/plugins/smartify
cp integrations/opencode/plugins/smartify/smartify.js ~/.config/opencode/plugins/smartify/
# em opencode.json/.jsonc, adicione o caminho do plugin em "plugin": [...]
# AGENTS global
cp integrations/opencode/AGENTS.md ~/.config/opencode/AGENTS.md
```

Reinicie o opencode. Na próxima sessão: toast `⚡ Smartify ativo`. Qualquer domínio é roteado pela skill; código/design roteiam automático pela descrição.

Memória por projeto: `memory/` traz `STATE/LOG/MAP/COMMANDS` de exemplo; em cada repo crie `SMARTIFY/{STATE,LOG,MAP,COMMANDS}.md` e deixe o plugin mantendo `LOG`/`STATE` (compactação).
