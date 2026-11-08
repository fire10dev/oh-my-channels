# yt-channel-asia-history

**Agents start here: `AGENTS.md` → `HANDOFF.md` → `docs/FACT-CHECK.md`.** Channel: https://www.youtube.com/@RiceAndEmpires

English YouTube channel: objective history of Vietnam and Southeast Asia for foreign viewers.
Pipeline: Claude (script) → TTS (Kokoro now, ElevenLabs later) → images (Nano Banana 2.1, AI Studio playground) → Remotion render.

| Path | What |
|---|---|
| `scripts/` | One file per video: EN narration + VI review table |
| `shorts/` | Remotion project, 1080×1920 Shorts (`src/ListShort.tsx`, data `src/<id>.json`) |
| `shorts/public/<id>/` | Images + `timeline.json` (narration wav is git-ignored, regenerate) |
| `tools/tts_kokoro.py` | Per-scene narration + durations |
| `tools/receive_images.py` | 127.0.0.1-only receiver to pull playground images out of the built-in browser |

## Render S001
```bash
cd tools && uv venv -p 3.12 .venv && uv pip install -p .venv/bin/python kokoro soundfile
.venv/bin/python tts_kokoro.py ../shorts/src/s001.json ../shorts/public/s001 af_heart 1.2
cp ../shorts/public/s001/timeline.json ../shorts/src/s001.timeline.json
cd ../shorts && npm ci --ignore-scripts && npx remotion render src/index.ts S001 out/S001.mp4
```

Audio: `shorts/public/sfx/swoosh-quick.mp3`, `shorts/public/s001/bgm.mp3` (Cat Walk, Arulo) — Mixkit free license, from `~/Projects/video-kit/audio/ATTRIBUTION.md`.
Notes and decisions: MEGABRAIN `FIRE10/document/ai-video/research/` (`youtube-*`, `yt-short-pipeline-test-s001-*`).

## Upload a Short (YouTube Data API v3, no browser)
One-time (owner): Google Cloud → enable *YouTube Data API v3* → OAuth consent screen (External, add owner as test user) → Credentials → OAuth client ID, type **Desktop** →
save JSON as `~/.cache/rice-youtube/client_secret.json`, then `node tools/upload/upload.mjs auth` and pick the Brand Account *Rice & Empires*.
```
node tools/upload/upload.mjs S006 --private --confirm            # test: private
node tools/upload/upload.mjs S006 --at "2026-11-09 09:00" --confirm   # private + publishAt (+07)
node tools/upload/upload.mjs S006 --now --confirm                # public now
```
Without `--confirm` it is a dry run (parses script md, checks auth, uploads nothing). Title/description from `## Publishing` in `scripts/SNNN-*.md`; file `shorts/out/SNNN-*.mp4`.
Sets not-made-for-kids and `containsSyntheticMedia=false`. One `SUMMARY` line per run; details in `$TMPDIR/yt-upload.log`. Quota ≈ 1600 of 10 000 units/day (~6 uploads).
🟡 Unaudited API projects may force uploads to private — check the first test video. Owner OK in chat is required before `--confirm`.
