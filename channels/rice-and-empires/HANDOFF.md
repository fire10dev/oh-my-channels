# HANDOFF — state at 2026-11-07 23:10 (+07)

For a fresh Claude session (other account / other machine) continuing this work. Read `AGENTS.md` first.

## Done
| What | Where | Proof |
|---|---|---|
| Niche chosen: objective VN + SEA history, English, foreign viewers | `docs/research/youtube-niche-vn-history-for-foreigners-2026-11.md` | owner decision 21:53 |
| Pipeline test S001 (Kokoro + Nano Banana 2.1 + Remotion) | `scripts/S001-*`, `shorts/src/ListShort.tsx` | render 33 s, −14.6 LUFS |
| Channel Rice & Empires @RiceAndEmpires (Brand Account) + branding | `shorts/src/Brand.tsx`, `shorts/public/brand/` | public page shows banner/avatar/description |
| First Short published (off-niche test) | https://youtube.com/shorts/v1DX0NAPdEg | Studio "Đã đăng video" 22:56 |
| S002 research round 1 + draft script + claim table | `scripts/S002-mongols-captured-thang-long-three-times.md` | DRAFT, grade B max |
| Fact-check process | `docs/FACT-CHECK.md` | — |

## Task queue (in order)
1. **S002 fact-check round 2** — lift claims C1–C16 to grade A with scholarly sources (Taylor 2013, Britannica, Lo Jung-pang, Yuanshi
   translations); resolve open questions in the table; rewrite narration lines whose claims stay B/C. Update the file, keep a changelog line.
2. **S002 production** (only after step 1): `shorts/src/s002.json` (+ register in `Root.tsx`), Kokoro voice, lacquer images
   (needs a Google login in a browser for AI Studio playground — if the machine has none, write the image prompts and stop that step),
   render, loudness, frame check. Output: `shorts/out/S002-*.mp4` + title/description/sources in the script file. **Do not upload.**
3. **Backlog scripts** (research + claim table + VI column, no production), rotating style map → watercolor → lacquer:
   S003 Champa: the kingdom that disappeared (map) · S004 Trưng Sisters — what we actually know (legend vs record) ·
   S005 Why Angkor declined (competing theories) · S006 1,000 years of Chinese rule — what it really meant · S007 Quốc ngữ: how Vietnam
   got a Latin alphabet · S008 Tây Sơn & Quang Trung 1789 · S009 Hội An / Phố Hiến trade ports · S010 How the Nguyễn mapped the south.
4. Morning report to owner (Vietnamese, 3 headings): what's done, what needs their review (VI columns), anything blocked.

## Needs the owner (do not do these yourself)
- Review VI columns of S002+ before production/publishing.
- Google logins (AI Studio, YouTube), uploads (drag file into Studio), any publish/delete/account change.
- Buying ElevenLabs (planned later; Kokoro is accepted for now).
- Merging `night/*` branches into `main`.

## Environment notes for a new machine
- Node + `npm ci --ignore-scripts` in `shorts/`; Python 3.12 + `uv` for `tools/.venv` (`kokoro soundfile`); `ffmpeg`.
- BGM/SFX already in repo (Mixkit free license): `shorts/public/s001/bgm.mp3`, `shorts/public/sfx/swoosh-quick.mp3`.
- `shorts/public/s001/vo-*.wav` are git-ignored: regenerate with `tools/tts_kokoro.py` before re-rendering S001.
- The owner's second brain (MEGABRAIN) is not in this repo; `docs/research/` holds the relevant snapshots. Paths like `/Users/luan/...`
  inside those notes refer to the owner's machine.
