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
| 4 Images | Nano Banana 2.1 in **AI Studio playground** (free, web UI, Google login) — API image quota is 0 on free tier | `shorts/public/sNNN/img-*.jpg` |
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
- Remotion fonts download from Google Fonts at render time (needs network). Banner safe area: center 1546×423 of 2560×1440.

## 6. Done = 
A video is "done" when: claim table complete (FACT-CHECK §3), VI column reviewed by owner, render passes a frame check (no text cut off,
names spelled right), loudness ≈ −14 LUFS, description has sources list + AI note. Upload only after owner OK.
