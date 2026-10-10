# manifest.json — schema (1 por checkpoint, em SMARTIFY/checkpoints/<nome>/)

```json
{
  "name": "<nome da versão>",
  "date": "<ISO UTC>",
  "task": "<tarefa concluída, 1 linha>",
  "session": "<id da sessão>",
  "files": ["<path relativo 1>", "<path relativo 2>"],
  "note": "<o que esta versão conclui>"
}
```

Só arquivos listados em `files` podem ser restaurados.
