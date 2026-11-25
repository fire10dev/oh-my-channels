#!/bin/zsh
# llm.sh "prompt" — gọi LLM ngoài (không tốn token Claude). LLM=codex (mặc định) | agy. Codex hết quota → LLM=agy.
if [[ ${LLM:-codex} == agy ]]; then agy --mode plan --disable-slash-commands -p "$1" < /dev/null
else codex exec --skip-git-repo-check -s read-only "$1" < /dev/null; fi
