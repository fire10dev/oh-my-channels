# HANDOFF — state at 2026-11-08 12:00 (+07), branch `night/2026-11-07`

For a fresh Claude session (other account / other machine) continuing this work. Read `AGENTS.md` first (rules updated 2026-11-07 night).

## ▶ Resume when image quota is back (saved 2026-11-08 12:00 +07)
- Quota fact: one Google account ≈ **70 images / quota day** (34 × 2.1 2K + 36 × Lite 1K) ≈ 7 Shorts. Reset assumed 00:00 PT = **15:00 +07** (unverified).
- Queue: `tools/pending_images.json` — 26 images still needed: S009 img-02..08 (7), S010 img-00..09 (10), S011 img-00..08 (9); plus S006 img-02 redo (fake map text) and S007 hook image redo.
- How (no Playwright — Google blocks sign-in there): built-in browser → `aistudio.google.com/prompts/new_chat` → paste helpers from
  `tools/aistudio_helpers.js` (worker + `window.__export()`), receiver `tools/.venv/bin/python tools/receive_images.py` (127.0.0.1:8765 → `$TMPDIR/stage`).
  "Save in Google Drive" popup → *Cancel and use Temporary chat*. Quota hit shows as a toast "reached your quota for the day".
- Then one command per video: `tools/make_short.sh s009 S009-hoi-an` · `s010 S010-mekong-delta` · `s011 S011-dong-son-drums` · `s006 S006-chinese-rule`; check `shorts/out/*-sheet.jpg`.
- After that: S006 + S007 re-upload (owner OK needed), update the Published table.

## Overnight run 2026-11-07 → 08 (owner: "tự động hoàn toàn xuyên đêm, sáng duyệt và đăng")
Pipeline per video: research → script md (claim table + VI column) → `tools/codex_review.sh` (max 3 rounds, logs in `docs/reviews/`)
→ `tools/md2scenes.py` + `tools/say_sNNN.json` → Kokoro (speed 1.0) → AI Studio images → `tools/register.py` → Remotion render → loudnorm −14.

| Video | Script (Codex rounds) | Voice | Images | Render (`shorts/out/`, not in git) |
|---|---|---|---|---|
| S002 Mongols took Thăng Long 3× | v5, r0–r3 (r3 FAIL → hedged/cut) | 112 s, 150 wpm | Nano Banana 2.1 2K | `S002-mongols-thang-long.mp4` 114 s −14.2 LUFS |
| S003 Champa | v4, r1–r3 | 105 s | 2.1 2K | `S003-champa.mp4` 107 s −14.3 |
| S004 Trưng Sisters | v4, r1–r3 | 90 s | 2.1 2K (outro = hook flipped) | `S004-trung-sisters.mp4` 92 s −14.3 |
| S005 Angkor decline | v4, r1–r3 | 85 s | **Lite 1K** | `S005-angkor.mp4` 87 s −14.3 |
| S006 "1,000 years of Chinese rule" | v4, r1–r3 | 95 s | Lite 1K | `S006-chinese-rule.mp4` (img-02 has fake map text — regenerate) |
| S007 Quốc ngữ | v4, r1–r3 | 92 s | Lite 1K | `S007-quoc-ngu.mp4` 94 s −14.4 (hook image has pseudo Chinese characters) |
| S008 Tây Sơn / Quang Trung 1789 | v4, r1–r3 | 95 s | Lite 1K | `S008-quang-trung-1789.mp4` 96 s −14.3 (img-06/09 reused from S002) |
| S009 Hội An / Phố Hiến | v4, r1–r3 | 86 s | Lite 1K | **not rendered** — 2/9 images (quota) |
| S010 Mekong Delta | v4, r1–r3 | 94 s | Lite 1K | **not rendered** — 0/10 images (quota) |
| S011 Đông Sơn drums | v4, r1–r3 | 78 s | Lite 1K | **not rendered** — 0/9 images (quota) |
Image quota: Nano Banana 2.1 limited 23:59 and again 01:45 (after 2 images); Lite limited by 02:00. Still limited at 04:04 on both models → likely a daily quota. **Pending prompts: `tools/pending_images.json`** (27 images: S009 ×7, S010 ×10, S011 ×9, S006 img-02). Load as `window.__Q` with the helpers in `tools/aistudio_helpers.js`, then upload, `sips`, render S009–S011 (`npx remotion render src/index.ts S009 …` + loudnorm).

No script reached Codex PASS: after round 3 the remaining 🔴 were fixed by cutting or hedging (owner rule). The final wording was **not** re-reviewed.

## Published 2026-11-08 (owner OK in chat; 2 h apart, times +07)
Settings for all: title/description from script md §Publishing, not made for kids, "Sử dụng AI" = Không.
| Video | Link | Status |
|---|---|---|
| S002 Mongols | https://youtube.com/shorts/LPv0OPBbZI0 | Public ~07:05 |
| S003 Champa | https://youtube.com/shorts/Of8mS9mNRDY | Scheduled 09:00 |
| S004 Trưng Sisters | https://youtube.com/shorts/oViKnHeLCaM | Scheduled 11:00 |
| S005 Angkor | https://youtube.com/shorts/9eNezUNTubY | Scheduled 13:00 |
| S008 Quang Trung 1789 | https://youtube.com/shorts/9KENQcdwBMs | Scheduled 15:00 |
| S007 Quốc ngữ | (draft, untitled) | Uploaded as **draft only** — owner: wait for new hook image; re-render, then delete this draft and upload the new file |
S006 not uploaded (waits for img-02 regen). Pinned comments not posted yet.

## Known issues
- AI Studio **Nano Banana 2.1 rate-limited** at ~23:59 after ~32 images → S005+ use Nano Banana 2 Lite (1K only, softer when zoomed).
  Regenerate with 2.1 when quota resets if quality matters (prompts are in each script md / the `__runQueue` lists).
- Codex cites many books by page via Wikipedia footnotes (†) — not opened. Reviews flag this; owner spot-check per FACT-CHECK §5.
- TTS phonetics for Vietnamese names are approximations (`tools/say_sNNN.json`) — listen once.

## Needs the owner
- Review VI column + watch each mp4; upload only after OK (drag file into Studio). Title/description drafts are in each script md.
- Merge `night/2026-11-07` into `main`.

## Upload script (2026-11-08) — API version, untested end-to-end
`tools/upload/upload.mjs` (YouTube Data API v3; usage in README). Playwright variant dropped: Google blocks sign-in in automated Chrome. Dry-run parsing works; blocked on owner creating the OAuth client (`~/.cache/rice-youtube/client_secret.json`) + `auth`. Then test `S006 --private --confirm`. Test link: (pending)

## Long videos (owner 2026-11-08: "từ tư liệu đã có làm videos dài")
- `scripts/L001-vietnam-two-thousand-years-what-we-know.md` — 16:9, ~2,070 words ≈ 14 min, 11 chapters, chronological, built only from the
  reviewed Short lines (S002–S011) + 2 framing lines. Codex `docs/reviews/L001-r1..r3.md`; v4 wording not re-reviewed. Owner: review VI column.
- Next: build a 16:9 `LongVideo` composition (chapter cards, 9:16 images pillarboxed on blurred copy), TTS, render. Chapters 1/6/8 need S009–S011 images.
- Rebuild the narration table from the Shorts: `python3 tools/build_long.py . > rows.md` (row list + Codex fixes live in that file).
