# HANDOFF — state at 2026-11-08 15:15 (+07), merged into `main` (L007 section: 2026-11-10 07:00)

For a fresh Claude session (other account / other machine) continuing this work. Read `AGENTS.md` first (rules updated 2026-11-07 night).

## Next: long-video batch L004–L007 (Vietnam × China)
Plans and the copy-paste session prompts live in `docs/plans/LONG-BATCH-HANDOFF.md`. Run one video per session and one session per night.

## L007 long video "Emperor at home, vassal abroad" — 2026-11-10 morning (branch `long/L007`, NOT rendered)
State 07:00 (+07), unattended run:
- ✅ Script `scripts/L007-emperor-at-home-vassal-abroad-long.md` v4: 56 rows, 1,182 words, C1–C27, Codex r1–r3 (`docs/reviews/L007-r1..r3.md`; r3 FAIL 4 🔴 → all hedged/cut with Codex's wording, not re-reviewed). §Publishing draft (title, chapters, sources) done.
- ✅ Kokoro TTS (`tools/say_l007.json`): 471 s narration → video ≈ 8:48. `shorts/src/l007.json|scenes|timeline.json` built. Composition `L007` + still `L007Thumb` in `Root.tsx`; 30 s test render OK.
- ✅ Map states (generic, additive) in `LongMap.tsx`: `song_lie` (1075–76 Lý offensive), `asia_tributaries` (Korea/Ryukyu/Vietnam → Chinese court), `tribute_route` (dotted Thăng Long → Lạng Sơn → Nanning → Beijing); new wide East-Asia layer (`WIDE`, `ROUTES`).
- ✅ Timeline ribbon is now configurable: optional `shorts/src/<vid>.tl.json` (`TLCfg` in `LongVideo.tsx`, read by `long_build.py`); L003 keeps the default. ⚠️ L006 added a similar `<vid>.ribbon.json` on its branch → pick one when merging.
- ✅ `gen.mjs`: `IMG_AR=16:9` env option (default stays 9:16).
- ✅ Thumbnail `shorts/out/L007-thumb.jpg` (git-ignored), **temporary bg** = crop of S002 img-02 (envoys). Swap to `img-02` (mirrored king) when it exists: copy to `shorts/public/l007/thumb-bg.jpg`, `npx remotion still src/index.ts L007Thumb out/L007-thumb.jpg`.
- 🔴 Images: 0/49 new images. gen.mjs ran 06:25–06:58 (+07) twice: AI Studio settings panel never loads (`AR=undefined`, `locator.fill` timeout → likely signed out), Gemini returns FAIL, Flow `New project` button times out → all 3 sources dead (same as L006). Not retried in the built-in browser (token budget, AGENTS §7). Queue `tools/queue_l007.json` (49), prompts `shorts/src/l007.images.json`; placeholders = list in `shorts/public/l007/.placeholders` (git-ignored; same 49 names as the queue).
- ❌ Flow clips: none (Flow unreachable). Music: reuses `bgm/l003-bed-*.mp3` via `shorts/src/l007.music.json` until the owner picks Audio Library tracks.

- 2026-11-14 14:55 (+07) HYBRID flow (as L008, no browser): tone check OK (1075 / "When It Failed" stay short, no fix). 3 clips wired (`CLIP:1` row 01, `CLIP:2` row 28, `CLIP:3` row 50; fallback = `clip-N.jpg`). Prompts for 49 images + 3 clips: `shorts/public/l007/PROMPTS.md` (import line at top; owner saves to `~/Downloads/l007/`). `long_import.sh` / `codex_image_review.sh` / clip fallback ported from L008. Waiting for the owner's files.
- 2026-11-15 10:10 (+07): owner zip `~/Downloads/l007-fixed.zip` → `~/Downloads/l007/` → imported 55/55 (0 placeholders). Review Claude + Codex r1 = FAIL: redo img-55, img-60 (must), img-13/57/32 (should), img-45/66 (optional); clip-3 redo (owner). Full prompts: `docs/reviews/L007-img-claude.md`. Music = Scott Buckley ×3 (`l007.music.json`, credit in §Publishing). Thumbnail with real img-02 rendered. Not rendered yet.
- 2026-11-15 12:20 (+07): redo2 (9 files) imported, review r2 PASS (Codex r2 FAIL overruled, see `docs/reviews/L007-img-claude.md`). Rendered `shorts/out/L007-tribute.mp4` 8:49, −14.3 LUFS, frame sheet OK. §Publishing chapters match. Waiting: owner watch + VI review + upload OK. Nothing committed.
- 2026-11-15 13:30 (+07): **PUBLIC** https://youtu.be/r3jRw2oJc18 (owner OK "Public ngay"; Chrome profile YT). Content ID claim on 'Shadows And Dust' (no block; CC-BY dispute = owner's call). Category still default 'Travel & Events'. Pinned comment not posted.

### Remaining (in order)
1. Images: `cd tools/imagegen && IMG_AR=16:9 node gen.mjs run ../queue_l007.json $TMPDIR/stage-l007` (one video at a time; owner re-login with `node gen.mjs login` if signed out) → `tools/long_import.sh l007` → `.placeholders` empty.
2. Render: `cd shorts && npx remotion render src/index.ts L007 out/L007-raw.mp4` → `ffmpeg -i out/L007-raw.mp4 -af loudnorm=I=-14:TP=-1.5:LRA=11 -c:v copy out/L007-tribute.mp4` + contact sheet.
3. Thumbnail with the real `img-02`. 4. Owner: VI column review, listen to names (`tools/say_l007.json`), music, upload.

### Owner morning review
- VI column of the 56 rows + claim table C1–C27. Open points: who coined "nội đế ngoại vương" (not found → attributed to "one recent study", Varnay); Vietnam's tribute frequency not stated (no good source); Song "King of Annam" title year (1164 vs 1174) left out.
- Title: plan said "900 Years"; draft uses "for Centuries" (tribute was not continuous).

## L003 long video "1,000 years of Chinese rule" — overnight 2026-11-09 → 10 (branch `night/2026-11-09`, NOT rendered)
State 00:35 (+07), stopped at the usage limit:
- ✅ Script `scripts/L003-a-thousand-years-of-chinese-rule-long.md` v4: 55 lines, 1,215 words, C1–C27, Codex r1–r3 (r3 FAIL → fixed/hedged, not re-reviewed).
- ✅ Kokoro TTS: `shorts/public/l003/vo-*.wav` (git-ignored), 491 s of narration → video ≈ 9:08. Chapters: `python3 tools/long_chapters.py l003`.
- ✅ `LongVideo` 16:9 composition (`shorts/src/LongVideo.tsx`, `LongMap.tsx`), id `L003`: animated map, timeline ribbon, chapter cards, dust/smoke/grain, source lower-thirds, captions ≤ 6 words, ducked music. Test render of the first 30 s is OK.
- ✅ 3 Flow clips `shorts/public/l003/clip-1..3.mp4`. Credits: 4 generations = 96 credits. The Han-army clip could not be downloaded; clip-2 is a delta map that was generated by mistake in Video mode. Thumbnail: `shorts/out/L003-thumb.jpg`.
- 🔴 Images: 24/70 in `shorts/public/l003/` (img-01..25, some missing) + img-71. 46 are still **placeholders** (`shorts/public/l003/.placeholders`). AI Studio stalled at ~00:15: the Run button no longer responds to the worker (`ms-run-button`, disabled).
- 🔴 Music: YouTube Audio Library not downloaded (the built-in browser account has no channel; Claude in Chrome asks which of 2 browsers to use). Placeholder: `tools/make_epic_bed.sh` (synthesized with ffmpeg) → `bgm/l003-bed-*.mp3`.
- 🟡 img-25 may be a late image belonging to img-24; check it against the prompt.

## L004 "Mongols vs Đại Việt" — script only (2026-11-10 06:55 +07, branch `long/L004`, not committed)
- ✅ `scripts/L004-mongols-dai-viet-long.md` v4: 56 rows, 1,107 words, C1–C30, Codex r1–r3 (r3 FAIL → fixed/hedged, not re-reviewed). `tools/say_l004.json`.
- New primary sources read directly: *Yuanshi* ch. 209 and *Toàn thư* ch. 5 on zh.wikisource (quotes in the claim table).
- Next (media session, Sonnet): `long_build.py` + Kokoro → map states `mongol_1258`, `yuan_1285`, `supply_1288` → images (60 drafted; trim to ≤ 55) → clips 1, 3 → render.
- Owner: read the VI column + claim table first.

## L003 long video "1,000 years of Chinese rule" — RENDERED 2026-11-10 06:40 (+07), branch `night/2026-11-09`
- ✅ `shorts/out/L003-chinese-rule.mp4` (git-ignored): 9:08, 1920×1080, −14.3 LUFS. Contact sheet `shorts/out/L003-chinese-rule-sheet.jpg`. Thumbnail `shorts/out/L003-thumb.jpg`.
- Script v4 `scripts/L003-a-thousand-years-of-chinese-rule-long.md`: 55 lines, 1,215 words, C1–C27. Codex r1–r3 did not PASS (r3 issues fixed/hedged, not re-reviewed).
- Images 70/70: img-01..25 (except 06, 07) from AI Studio Nano Banana 2.1 2K; 06, 07, 26–69 from Flow Nano Banana 2.1 (1376×768, 0 credits); img-71 = Flow start image.
  AI Studio was signed out at ~06:00, so the work switched to Flow (AGENTS §5: rotation rule, Flow image pipeline).
- Clips: 3 Flow clips (96 credits over 4 generations, one of them created by mistake in Video mode). The Han-army clip was not downloadable.
- 🔴 Music is still the **placeholder** made by `tools/make_epic_bed.sh` (ffmpeg drum/drone, not AI). To swap: put 2–3 Audio Library tracks in `shorts/public/bgm/`,
  edit `shorts/src/l003.music.json`, run `python3 tools/long_build.py scripts/L003-*.md l003 tools/say_l003.json`, re-render (~9 min) + loudnorm.
- Fixed after the first render: the timeline card showed "AD 111" for 111 BC (shot code is now `TL:-111`).
- 🟡 img-25 may be a late image belonging to img-24's prompt. It looks fine in the contact sheet.

### Owner review before upload
1. Watch the mp4 and read the script's VI column + claims C1–C27.
2. Listen to the Vietnamese names (`tools/say_l003.json`).
3. Music: choose Audio Library tracks, or OK the placeholder.
4. Upload is the owner's job (drag the file); title/description/chapters are in the script md §Publishing.

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
