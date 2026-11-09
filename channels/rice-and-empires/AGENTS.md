# AGENTS.md — Rice & Empires (yt-channel-asia-history)

Read this file, then `HANDOFF.md` (current state + task queue), then `docs/FACT-CHECK.md` before writing any script.
Background research and decisions: `docs/research/` (snapshots from the owner's second brain; dated 2026-11-07).

## 1. What this is
- English YouTube channel **Rice & Empires** — `@RiceAndEmpires`, channel ID `UCXbGfWFVpLWxtpJk5CmgmCg`,
  Brand Account under Google `raiangich@gmail.com`. https://www.youtube.com/@RiceAndEmpires
- Niche (owner decision 2026-11-07): **objective history of Vietnam + Southeast Asia, for foreign viewers** (not for Vietnamese viewers).
  Why this niche and not "Vietnam only": `docs/research/youtube-niche-vn-history-for-foreigners-2026-11.md`.
- Owner: Luân. Writes Vietnamese, **not fluent in English** → every script has a Vietnamese review column; explain things in Vietnamese.
- Published so far: 1 Short (test, travel tips, off-niche) https://youtube.com/shorts/v1DX0NAPdEg.

## 2. Working rules (owner's standing rules — follow exactly)
- **Language**: reply to the owner in Vietnamese. Every final reply has 3 headings:
  `**Tóm tắt vừa làm:**` (actions only) · `**Giải thích kết quả:**` (verdict first, table if comparing, caveats tagged 🔴/🟠/🟡) ·
  `**Next steps:**` (numbered; mark what needs owner approval). Short beats complete.
- **Git**: commit/push **only when the owner asks**. Commit subject short, one line, what + why. No `Co-Authored-By: Claude` trailer.
  If the owner told you to run unattended (e.g. overnight), work on branch `night/<YYYY-MM-DD>` cut from `main`, commit there, push that branch,
  **never push to `main`**; the owner merges.
- **Never touch the clipboard**: no pbcopy/pbpaste, no copy buttons/icons, no cmd+c/v. Unlabeled icon next to a URL/ID = assume copy button, don't click.
- **Never publish, upload, delete, or change account settings** on YouTube/Google without the owner's explicit OK in chat.
  Never enter passwords; Google re-auth (passkey/password) is the owner's job.
- **Never delete a YouTube channel.** To retire one, use *Hide channel*. (Incident 2026-11-07: deleting the personal channel's YouTube
  content also deleted the Brand Account "Rice & Empires"; restored via `myaccount.google.com/brandaccounts?sf=1`. See research note §2e.)
- **No invented history.** `docs/FACT-CHECK.md` is mandatory: claim table with sources *before* narration. Unsure → mark it, don't smooth it over.
- Prefer local tools; scratch files in a temp dir, not in the repo. Do not commit `shorts/out/` (renders) or narration wav (regenerated).
- **Heavy output never goes to git** (owner 2026-11-07): images/audio/video for S002+ live in git-ignored `shorts/public/sNNN/`,
  `shorts/public/bgm/`, `shorts/out/`. Git gets only md, json, code, review logs. Image prompts are kept in the script md.
- **Overnight runs** (owner 2026-11-07): no subagents; no wasted tokens; work sequentially until 5h limit / owner says stop / queue done.
  Claude directs; Codex (`tools/codex_review.sh <script> <round>`) only fact-checks, **max 3 rounds**; 🔴 left after round 3 → cut or hedge.
- **Length & pace**: Shorts length follows content (≤ 3 min = YouTube Shorts limit). Kokoro speed 1.0, target ≤ 160 wpm, never rushed.

## 3. Brand (fixed) vs style (rotates)
- Fixed: name, avatar (Dong Son drum star, gold on lacquer black — **no red center**: red + gold star reads as a national flag),
  fonts Cinzel (titles) + Be Vietnam Pro (body), colors in `shorts/src/Brand.tsx` → `BRAND`.
- Rotating illustration style, one per video, in order: **lacquer painting (sơn mài)** → **antique map / parchment** → **watercolor & ink**.
  Last used: watercolor (S001). Next: **lacquer** (S002).
- Illustrations must look like artwork, never like fake historical photos (see FACT-CHECK §5).

## 4. Pipeline (works end-to-end, verified 2026-11-07)
| Step | Tool | Output |
|---|---|---|
| 1 Research + claim table | web search, scholarly sources | `scripts/SNNN-*.md` §Claims |
| 2 Script | EN narration + VI review column, `say` column for TTS spelling | `scripts/SNNN-*.md`, `shorts/src/sNNN.json` |
| 3 Voice | Kokoro (free, Apache-2.0) `tools/tts_kokoro.py`, voice `af_heart`, speed 1.1–1.2. ElevenLabs later (owner will buy) | `shorts/public/sNNN/vo-*.wav` + `timeline.json` |
| 4 Images | `tools/imagegen/gen.mjs` (Playwright: AI Studio → Gemini → Flow, same Google account) — API image quota is 0 on free tier. 🔴 2026-11-08: Google blocks sign-in in the Playwright Chrome → not usable yet; fallback = AI Studio worker in the built-in browser (`tools/aistudio_helpers.js`) | `$TMPDIR/stage/sNNN-img-*.jpg` → `make_short.sh` |
| 5 Render | Remotion 4.0.535, `shorts/src/ListShort.tsx` (Shorts 1080×1920) | `shorts/out/*.mp4` |
| 6 Loudness | `ffmpeg -af loudnorm=I=-14:TP=-1.5:LRA=11` | final mp4 |
| 7 Upload | owner drags file into Studio upload dialog; agent fills title/description/settings | public video |

Commands: see `README.md`. Scene length = narration length + 0.12 s. Copy `public/sNNN/timeline.json` to `src/sNNN.timeline.json` before render.
Register each video in `shorts/src/Root.tsx`.

## 5. Gotchas already paid for (don't relearn them)
- **Vietnamese names in TTS**: put phonetic spelling in `say` ("sin chow" for Xin chào), keep real spelling in on-screen text.
- **AI Studio playground**: one image per message (asking for 4 gives one 2×2 grid). Wait for a turn to finish before typing the next
  prompt (otherwise two prompts merge). Set Aspect ratio + Resolution in Run settings (2K/4K available). Default has Google Search grounding on.
- **Getting images out of the built-in browser**: Download button gives no file; `fetch` to localhost is blocked by CSP; `window.open`
  replaces the tab. What works: collect blobs in the page (`window.__store`, keyed by prompt text — the chat list is virtualized, scroll
  through it), then **form POST multipart** to `tools/receive_images.py` (binds 127.0.0.1 only; needs Python ≤ 3.12 for `cgi`).
  Stop the receiver afterwards.
- **Chrome extension upload limit 10 MB** → video upload = owner drags the file. Thumbnails/banners < 10 MB upload fine via `file_upload`.
- **YouTube "Sử dụng AI" question** asks only about *realistic* content (real people, real-event footage, realistic fake scenes, AI music).
  Stylized illustrations + non-impersonating TTS → answer "Không", and state "Illustrations and narration are AI-assisted." in the description.
- **Brand channel creation**: use "+ Tạo kênh" on `/channel_switcher` (dialog with name + handle). Opening `/create_channel?...` directly
  may auto-create a personal channel.
- **Caption style** (owner 2026-11-08): captions at the TOP (progress bar 130 px, text 168 px), small (title 44 px, line 40 px),
  narration shown as ≤ 6-word chunks timed by character share — never the full sentence; dark band only top 24%. Image must stay visible.
- **Long videos (16:9, L003+)**: script table `| NN | ch | EN | claims | shots | VI |` → `tools/long_build.py` → `shorts/src/<vid>.json`
  (+ `.scenes.json` for Kokoro) → `LongVideo` composition (`shorts/src/LongVideo.tsx`, map `LongMap.tsx`, thumbnail `Thumb.tsx`).
  Chapter times for the description: `tools/long_chapters.py <vid>`. Missing images → copy a placeholder and list it in `public/<vid>/.placeholders`;
  `tools/long_import.sh <vid>` replaces them. Never render the final while `.placeholders` is non-empty.
- **Cinzel digits**: "111" renders like "III" → numbers/years in Be Vietnam Pro, Cinzel only for words.
- **AI Studio speed** (2026-11-09): Nano Banana 2.1 with Thinking "High" took 2–4 min/image and often timed out; Thinking "Minimal" ≈ 30 s/image.
- **Flow clips** (2026-11-09): Flow cannot read our local images (CSP blocks 127.0.0.1; no file upload tool) → generate the start image in Flow
  (Image mode, Nano Banana 2.1 = 0 credits), then Video → Frames → Start = that image (Omni 1.2 Flash, 720p, 8 s = 24 credits).
  Get the file: right after it finishes, `performance.getEntriesByType('resource')` shows `https://flow-content.google/video/<uuid>?Expires…&Signature…`
  (signed, `curl` works without cookies). Call `performance.setResourceTimingBufferSize(5000)` first: once the 250-entry buffer is full the URL is
  never recorded, and later views load the video via `/asb/…` (needs login → not downloadable). The Download button gives no file.
- **Image source rotation** (owner rule): AI Studio → Gemini → Flow (→ Codex/ChatGPT if needed). When one source is slow, rate-limited or
  signed out, **switch at once — do not stop and ask**. 2026-11-10: AI Studio got signed out; Flow made 38 images in ~15 min.
- **Flow images in the built-in browser (works, 2026-11-10)**: the prompt box is ProseMirror → `focus()` + `execCommand('insertText')`.
  The send button ignores synthetic clicks → use a trusted click (`computer` click on the `Start generation` ref). After that, grid tiles
  `flow-image-tile` hold a title (`flow-tile-hover-footer span`, generated from the prompt → map title ↔ prompt) and a signed `flow-content` src.
  Load it with `crossOrigin='anonymous'` → canvas → JPEG blob (CORS is allowed; 1376×768) → IndexedDB → one form POST to `receive_images.py`.
  Sending more than ~8 prompts back to back → some fail with "unusual activity"; leave ~5 s between prompts and resend the failed ones.
  Settings: always check that the chip shows `Nano Banana 2.1 … x1` (image, 0 credits). Video mode costs 24 credits per prompt.
- Remotion fonts download from Google Fonts at render time (needs network). Banner safe area: center 1546×423 of 2560×1440.

## 6. Done = 
A video is "done" when: claim table complete (FACT-CHECK §3), VI column reviewed by owner, render passes a frame check (no text cut off,
names spelled right), loudness ≈ −14 LUFS, description has sources list + AI note. Upload only after owner OK.

## 7. Token budget (owner 2026-11-08: one night cost 10% of the weekly quota)
Measured on the 2026-11-07 night (356 calls, all Opus): average context ~300k tokens per call → ~104M cache-read tokens.
Browser automation 39%, Bash 37%. Cost scales with context length × number of calls, so:
- **One video per session.** Start a fresh session per video (state lives in `HANDOFF.md` + script md), not one all-night session.
- **Images run outside Claude**: `node tools/imagegen/gen.mjs run <queue.json> $TMPDIR/stage` (AI Studio → Gemini → Flow failover,
  one-time `node tools/imagegen/gen.mjs login`, profile in `~/.cache/rice-imagegen-profile`). Run it in the background; read only its SUMMARY line.
  Do not drive AI Studio by hand in the built-in browser.
- **Render = one call**: `tools/make_short.sh <vid> <out-name> [--tts]` (import staged images → render → loudnorm → contact sheet, ≤ 4 lines).
- **Codex**: `tools/codex_review.sh` prints only VERDICT + 🔴/🟠 lines; open the review file only when a fix needs its evidence.
- Never print big JSON/files into the context (use `wc`, `head`, `rg`); `get_page_text` with small `max_chars`; no screenshots unless checking visuals.
- Use a cheaper model (Sonnet) for mechanical sessions: commit, render, image runs. Opus for research + script writing.
