#!/bin/bash
# Render the UI offscreen to PNG with the real DB: ./Tools/snapshot.sh out.png [dark|light] [w] [h]
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BIN="$(mktemp -d)/snapshot"
swiftc -O -target "$(uname -m)-apple-macosx15.0" -o "$BIN" \
  "$ROOT"/Sources/YTHub/{Model,Store,Theme,AppModel,Views,Board,Studio,StudioUI,Project,StudioView}.swift "$ROOT/Tools/Snapshot/main.swift"
YTHUB_SCHEMA="$ROOT/Resources/schema.sql" "$BIN" "$@"
