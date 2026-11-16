#!/usr/bin/env python3
"""PreToolUse hook (Write/Edit/MultiEdit): state lives in YT Hub, so block HANDOFF.md / STATE.md in this repo."""
import json, sys
from pathlib import Path

data = json.load(sys.stdin)
path = (data.get("tool_input") or {}).get("file_path", "")
if Path(path).name in ("HANDOFF.md", "STATE.md") and "/docs/archive/" not in path:
    print("oh-my-channels: không viết HANDOFF.md/STATE.md — ghi trạng thái bằng `ythub set/log/fact/task` "
          "(xem AGENTS.md ở gốc repo).", file=sys.stderr)
    sys.exit(2)
