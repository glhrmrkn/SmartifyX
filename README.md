# Smartify

A protocol that makes an AI answer directly, verify its claims, disagree when you're wrong, and stop padding responses with flattery and disclaimers. One core doctrine plus 16 domain modules. Installs into opencode, ChatGPT (Custom GPT), and Claude.

## Guarantees

- No flattery, no preamble, no restating the request. Conclusion first.
- No unrequested disclaimers (license, legal, terms). No moralizing.
- Verified over asserted: build/test/measure run, or said plainly that it wasn't.
- Non-trivial claims carry a source and a date. Model memory is treated as a hypothesis.
- Pushes back on a wrong premise in one line, before executing.
- Generates an image only on the literal phrase `Crie a Imagem`.
- Smallest change that satisfies the request. No unrequested refactors.

## Install

### opencode (full setup: routing, session memory, plugin)

Config dir: `~/.config/opencode/` on macOS/Linux, `%USERPROFILE%\.config\opencode\` on Windows. Clone the repo somewhere and run the steps from the repo root.

**1. Skill (domain router)**

```bash
mkdir -p ~/.config/opencode/skills
cp -R integrations/opencode/skill/smartify ~/.config/opencode/skills/smartify
```

**2. Plugin (toasts + per-session `SMARTIFY/STATE.md` and `LOG.md`)**

```bash
mkdir -p ~/.config/opencode/plugins/smartify
cp integrations/opencode/plugins/smartify/smartify.js ~/.config/opencode/plugins/smartify/
```

Register it in `~/.config/opencode/opencode.json`. Path specs resolve relative to the config file:

```json
{
  "plugin": ["./plugins/smartify/smartify.js"]
}
```

Alternative: drop the file at `plugins/smartify.js` (no subfolder) and opencode auto-discovers it — no config edit.

**3. Commands `/checkpoint` and `/remember`**

```bash
mkdir -p ~/.config/opencode/command
cp integrations/opencode/command/*.md ~/.config/opencode/command/
```

**4. Global rules**

```bash
cp integrations/opencode/AGENTS.md ~/.config/opencode/AGENTS.md
```

**5. Point the files at your clone**

The skill, the two commands, and `AGENTS.md` ship with the path `E:/Tools/Smartify` hardcoded. Do one of:

- Clone the repo to `E:/Tools/Smartify` (Windows) and skip this step, or
- Replace the path in `skills/smartify/SKILL.md`, `command/*.md`, and `AGENTS.md`:

```bash
# macOS/Linux
grep -rl "E:/Tools/Smartify" \
  ~/.config/opencode/skills/smartify \
  ~/.config/opencode/command \
  ~/.config/opencode/AGENTS.md \
  | xargs sed -i 's#E:/Tools/Smartify#/path/to/Smartify#g'
```

```powershell
# Windows (PowerShell) — preserves UTF-8 without BOM
Get-ChildItem "$HOME\.config\opencode\skills\smartify", "$HOME\.config\opencode\command", "$HOME\.config\opencode\AGENTS.md" -Recurse -File | ForEach-Object {
  $t = [IO.File]::ReadAllText($_.FullName)
  [IO.File]::WriteAllText($_.FullName, $t.Replace('E:/Tools/Smartify', 'C:/path/to/Smartify'), (New-Object Text.UTF8Encoding $false))
}
```

**6. Restart opencode**

On the next session you get the toast `⚡ Smartify ativo`. Verify with `/smartify check` (prints OK/FAIL per component) or type `/` to see `/checkpoint` and `/remember`.

### ChatGPT (Custom GPT)

1. ChatGPT → Explore GPTs → Create → Configure.
2. Instructions: paste `platforms/gpt/instructions.md`.
3. Knowledge: upload `platforms/gpt/knowledge/Smartify_modes.md`.
4. Capabilities: Web Browsing ON, Image generation OFF, Code Interpreter optional.
5. Name, description, and starters: `platforms/gpt/gpt.config.json`.
6. Save (private).

Limit: a Custom GPT can't read local files. Session memory is the `ESTADO` block you paste back on reopen.

### Claude

- **Projects (chat):** upload `platforms/claude/Smartify_Claude.md` as project knowledge. Optionally add modules from `modules/`.
- **Claude Code:** copy it to `CLAUDE.md` at your project root. It reads and updates `memory/STATE.md` for native memory.

## Layout

```
core/            the doctrine, one file
modules/         16 per-domain modules
router/          routing index + module template
platforms/       ready packages for GPT and Claude
integrations/    opencode skill, plugin, commands, AGENTS.md
memory/          example STATE / LOG / MAP / COMMANDS
examples/        test prompts and before/after
tools/           checkpoint, rememberx, eval scorecard
docs/            architecture, philosophy, deploy
```

## Routing

`router/INDEX.md` maps a task to one domain module: `code`, `design`, `research`, `security`, `reverse`, `gamedev`, `teach`, `review`, `writing`, `data`, `meta`, `ops`, `cli`, `business`, `marketing`, or `fallback`. The core alone covers most tasks; load a module only when the domain needs it, and at most two at once.

## License

MIT.
