# HANDOFF — state at 2026-11-08 02:25 (+07), branch `night/2026-11-07`

For a fresh Claude session (other account / other machine) continuing this work. Read `AGENTS.md` first (rules updated 2026-11-07 night).

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
Image quota: Nano Banana 2.1 limited 23:59 and again 01:45 (after 2 images); Lite limited by 02:00. Retry images for S009–S011 when quota resets (prompts: `__Q` lists in this run, or each script md §Images).

No script reached Codex PASS: after round 3 the remaining 🔴 were fixed by cutting or hedging (owner rule). The final wording was **not** re-reviewed.

## Known issues
- AI Studio **Nano Banana 2.1 rate-limited** at ~23:59 after ~32 images → S005+ use Nano Banana 2 Lite (1K only, softer when zoomed).
  Regenerate with 2.1 when quota resets if quality matters (prompts are in each script md / the `__runQueue` lists).
- Codex cites many books by page via Wikipedia footnotes (†) — not opened. Reviews flag this; owner spot-check per FACT-CHECK §5.
- TTS phonetics for Vietnamese names are approximations (`tools/say_sNNN.json`) — listen once.

## Needs the owner
- Review VI column + watch each mp4; upload only after OK (drag file into Studio). Title/description drafts are in each script md.
- Merge `night/2026-11-07` into `main`.
