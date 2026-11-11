# HANDOFF — state at 2026-11-08 15:15 (+07), merged into `main`

For a fresh Claude session (other account / other machine) continuing this work. Read `AGENTS.md` first (rules updated 2026-11-07 night).

## S012 "Vietnam: who chose the name?" (2026-11-11 15:10 +07, branch `short/S012`, worktree `../yt-channel-asia-history-S012`, committed + pushed)
- Plan `docs/plans/S012-the-name-vietnam-1804.md` · script `scripts/S012-the-name-vietnam-1804.md` v4 (C2–C11, 254 words) · `tools/say_s012.json`.
- Main source: Trần Thị Xuân 2024 (Thang Long J. Sci., Qing Grand Council archives + *Đại Nam thực lục*), read in full from the PDF.
- Codex: r1 PASS → r2 FAIL (could not open the PDF; wording made safer) → r3 FAIL 1 🔴 C8 → hedged ("A 2024 study … finds"). v4 not re-reviewed.
- Voice Kokoro 93.7 s (~163 wpm, slightly over target). Images 11/11 Flow Nano Banana 2.1, 9:16 768×1376, 0 credits
  (`tools/imagegen/gen.mjs` got 0/11: AI Studio/Gemini/Flow selectors time out in the Playwright profile).
- Render `shorts/out/S012-name-vietnam.mp4` (git-ignored). ✅ Owner OK 2026-11-11 15:18; **published Public 15:40 (+07): https://youtube.com/shorts/i7YEHQAu2zA**
  (not for kids, "Sử dụng AI" = Không; owner dragged the file in Chrome profile "YT"). Comment posted 15:45 as the channel ("Which name did you know first…"), **not pinned**:
  pinning asks for channel verification in Studio (owner's job, phone). After verifying: ⋮ on the comment → Ghim.

## ✅ Batch S002–S011 closed (2026-11-08 16:55 +07)
All 10 history Shorts are public or scheduled (table below). Leftovers, not blocking: pinned comments; Codex fixes found in L001 for S004/S011
wording (already published, fix only via Corrections section + pinned comment); upload API (`tools/upload/upload.mjs`) still needs the owner's OAuth client.
Next batch: start a fresh session per video (AGENTS §7). Long videos L001/L002 are drafts (no 16:9 composition yet).

## Overnight run 2026-11-07 → 08 (owner: "tự động hoàn toàn xuyên đêm, sáng duyệt và đăng")
Pipeline per video: research → script md (claim table + VI column) → `tools/codex_review.sh` (max 3 rounds, logs in `docs/reviews/`)
→ `tools/md2scenes.py` + `tools/say_sNNN.json` → Kokoro (speed 1.0) → AI Studio images → `tools/register.py` → Remotion render → loudnorm −14.

| Video | Script (Codex rounds) | Voice | Images | Render (`shorts/out/`, not in git) |
|---|---|---|---|---|
| S002 Mongols took Thăng Long 3× | v5, r0–r3 (r3 FAIL → hedged/cut) | 112 s, 150 wpm | Nano Banana 2.1 2K | `S002-mongols-thang-long.mp4` 114 s −14.2 LUFS |
| S003 Champa | v4, r1–r3 | 105 s | 2.1 2K | `S003-champa.mp4` 107 s −14.3 |
| S004 Trưng Sisters | v4, r1–r3 | 90 s | 2.1 2K (outro = hook flipped) | `S004-trung-sisters.mp4` 92 s −14.3 |
| S005 Angkor decline | v4, r1–r3 | 85 s | **Lite 1K** | `S005-angkor.mp4` 87 s −14.3 |
| S006 "1,000 years of Chinese rule" | v4, r1–r3 | 95 s | Lite 1K | `S006-chinese-rule.mp4` 97 s −14.2, re-rendered 16:25 with new img-02 (2.1 2K) + new captions |
| S007 Quốc ngữ | v4, r1–r3 | 92 s | Lite 1K + new 2.1 hook | `S007-quoc-ngu.mp4` 94 s −14.4, re-rendered 16:35 (new hook, new captions) |
| S008 Tây Sơn / Quang Trung 1789 | v4, r1–r3 | 95 s | Lite 1K | `S008-quang-trung-1789.mp4` 96 s −14.3 (img-06/09 reused from S002) |
| S009 Hội An / Phố Hiến | v4, r1–r3 | 86 s | 2.1 2K (img-00/01 2K night) | `S009-hoi-an.mp4` 88 s −14.2 (new captions) |
| S010 Mekong Delta | v4, r1–r3 | 94 s | 2.1 2K | `S010-mekong-delta.mp4` 96 s −14.3 (new captions) |
| S011 Đông Sơn drums | v4, r1–r3 | 78 s | 2.1 2K | `S011-dong-son-drums.mp4` 80 s −14.4 (new captions) |
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
| S007 Quốc ngữ (re-render, new hook) | https://youtube.com/shorts/BxNNkeErLII | Scheduled 19:00 (old draft no longer in Studio) |
| S006 "1,000 years of Chinese rule" | https://youtube.com/shorts/TnweYt2aK5A | Scheduled 17:00 |
| S009 Hội An / Phố Hiến | https://youtube.com/shorts/vntG_p4F0Us | Scheduled 21:00 |
| S010 Mekong Delta | https://youtube.com/shorts/H3CJOOVtNEQ | Scheduled 23:00 |
| S011 Đông Sơn drums | https://youtube.com/shorts/ycLVE_TdzQc | Scheduled 2026-11-09 01:00 |
Uploaded 16:40–16:55 via Claude in Chrome profile "YT" (owner dragged files). Pinned comments not posted yet.

## Known issues
- AI Studio **Nano Banana 2.1 rate-limited** at ~23:59 after ~32 images → S005+ use Nano Banana 2 Lite (1K only, softer when zoomed).
  Regenerate with 2.1 when quota resets if quality matters (prompts are in each script md / the `__runQueue` lists).
- Codex cites many books by page via Wikipedia footnotes (†) — not opened. Reviews flag this; owner spot-check per FACT-CHECK §5.
- TTS phonetics for Vietnamese names are approximations (`tools/say_sNNN.json`) — listen once.

## Needs the owner
- Review VI column + watch each mp4; upload only after OK (drag file into Studio). Title/description drafts are in each script md.

## Upload script (2026-11-08) — API version, untested end-to-end
`tools/upload/upload.mjs` (YouTube Data API v3; usage in README). Playwright variant dropped: Google blocks sign-in in automated Chrome. Dry-run parsing works; blocked on owner creating the OAuth client (`~/.cache/rice-youtube/client_secret.json`) + `auth`. Then test `S006 --private --confirm`. Test link: (pending)

## Long videos (owner 2026-11-08: "từ tư liệu đã có làm videos dài")
- `scripts/L001-vietnam-two-thousand-years-what-we-know.md` — 16:9, ~2,070 words ≈ 14 min, 11 chapters, chronological, built only from the
  reviewed Short lines (S002–S011) + 2 framing lines. Codex `docs/reviews/L001-r1..r3.md`; v4 wording not re-reviewed. Owner: review VI column.
- Next: build a 16:9 `LongVideo` composition (chapter cards, 9:16 images pillarboxed on blurred copy), TTS, render. Chapters 1/6/8 need S009–S011 images.
- Rebuild the narration table from the Shorts: `python3 tools/build_long.py . > rows.md` (row list + Codex fixes live in that file).
