#!/usr/bin/env bash
# Independent fact-check review of one script by Codex (read-only, live web search).
# Usage: tools/codex_review.sh scripts/S002-*.md <round>
# Output: docs/reviews/<id>-r<round>.md (committed; log stays in $TMPDIR). Exit 0 always; read the VERDICT line.
# Owner rule: Claude directs, Codex only checks historical facts, max 3 rounds per script.
set -euo pipefail
script="${1:?script path}"
repo="$(cd "$(dirname "$0")/.." && pwd)"
id="$(basename "$script" | cut -d- -f1)"
round="${2:?round number 1-3}"
mkdir -p "$repo/docs/reviews"
out="$repo/docs/reviews/$id-r$round.md"
log="${TMPDIR:-/tmp}/codex-review-$id-r$round.log"

read -r -d '' PROMPT <<EOF || true
You are an adversarial history fact-checker for a YouTube Shorts channel about Vietnam and Southeast Asian history.
Read docs/FACT-CHECK.md (the rules) and then $script (the script: narration table + claim table).
Do NOT edit any file. Use web search to verify.

Check, in this order:
1. For every claim row: open at least the 2 strongest cited URLs and confirm the page really supports the claim as worded.
   Flag: source does not say it, source is weak/forbidden per FACT-CHECK §2, grade too high for the evidence, a better source contradicts it.
2. For every narration line: does it say more than its claims support (dates, numbers, names, causal words, side-taking words)?
3. Numbers: each has a range + attribution? Dates: day/month only if grade A?
4. At least two perspectives present? Anything that reads as nationalist textbook framing?
5. Names: correct spelling/diacritics on screen; TTS 'say' spellings plausible.

Output markdown only, exactly this structure:
VERDICT: PASS | FAIL   (FAIL if any 🔴)
## Issues
| Sev | Where (claim/line) | Problem | Evidence (URL + what it says) | Fix (exact replacement wording) |
Sev = 🔴 factually wrong or unsupported · 🟠 overstated/grade too high · 🟡 wording/style.
## Sources checked
One line per URL: ok / does-not-support / unreachable.
Be concise. No praise. If you could not reach a source, say so instead of guessing.
EOF

codex --search exec -s read-only --ephemeral -C "$repo" -o "$out" "$PROMPT" </dev/null >/dev/null 2>"$log" || true
echo "$out"
head -1 "$out" 2>/dev/null || echo "VERDICT: ERROR (see $log)"
