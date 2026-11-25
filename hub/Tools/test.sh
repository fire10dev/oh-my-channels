#!/bin/bash
# Headless tests for Model + Store (no UI).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$(mktemp -d)/YTHubTests"
swiftc -O -target "$(uname -m)-apple-macosx14.0" -o "$OUT" \
  "$ROOT/Sources/YTHub/Model.swift" "$ROOT/Sources/YTHub/Store.swift" "$ROOT/Sources/YTHub/Studio.swift" "$ROOT/Sources/YTHub/Project.swift" "$ROOT/Tests/main.swift"
"$OUT" "$ROOT/Resources/schema.sql" "$ROOT/Resources/migrate.sql"
python3 -m unittest discover -s "$ROOT/Tools" -p 'test_*.py' -q
