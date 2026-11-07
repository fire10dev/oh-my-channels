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
