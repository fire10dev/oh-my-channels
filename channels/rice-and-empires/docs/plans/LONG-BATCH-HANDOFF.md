# HANDOFF — long-video batch L004–L007 (Vietnam × China)

Written 2026-11-10 06:10 (+07) for the owner. Hand each video to its own agent session, using one prompt per session (prompts below).

## Why this batch
- S006 "1,000 years of Chinese rule" got 666 views in 48 h, 92% of them from the Shorts feed. The other 10 Shorts got 0–56 views.
- Owner's reading: China ruling Vietnam is a sensitive topic, and that makes people curious.
- So the next long videos all sit on the Vietnam–China axis, in chronological order after L003.

| ID | Topic | Built on | Plan file |
|---|---|---|---|
| L004 | The Mongols vs Đại Việt, 1258–1288 | S002 (claims C1–C16) | `docs/plans/L004-mongols-dai-viet.md` |
| L005 | The Ming occupation and Lê Lợi, 1407–1428 | L003 C25 (new research) | `docs/plans/L005-ming-occupation-le-loi.md` |
| L006 | 1789: Quang Trung vs the Qing | S008 (claims C1–C9) | `docs/plans/L006-quang-trung-qing-1789.md` |
| L007 | "Emperor at home, vassal abroad": 900 years of tribute diplomacy | L003, S002, S008 (new research) | `docs/plans/L007-tribute-diplomacy.md` |
| L008 | Champa: the kingdom that became part of Vietnam (grand → regret → bright ending; added 2026-11-11) | S003 (C1–C10) + new research | `docs/plans/L008-champa-long.md` |

## Shared rules for every session (also in each prompt)

### Read first
1. `AGENTS.md`
2. `HANDOFF.md`
3. `docs/FACT-CHECK.md`
4. The video's plan file
5. `scripts/L003-a-thousand-years-of-chinese-rule-long.md`: format reference (claim table, row table `| NN | ch | EN | claims | shots | VI |`, shots syntax, §Images, §Publishing).

### Branch
- The LongVideo tooling (`LongVideo.tsx`, `LongMap.tsx`, `Thumb.tsx`, `tools/long_*.py|sh`) exists only on `night/2026-11-09` until the owner merges it.
- Base branch is the owner's call (default: `night/2026-11-09`). Each video gets its own branch `long/L00N`.
- Commit and push only that branch. Never push `main`.

### History
- No narration line without a claim row. Every claim needs ≥ 2 sources and a grade (FACT-CHECK §3).
- Numbers always come as a range plus who says so.
- Every video shows ≥ 2 perspectives: a Chinese record, a Vietnamese chronicle, and a modern historian.
- `tools/codex_review.sh` max 3 rounds; any 🔴 left after that gets cut or hedged.
- The outlines in the plan files are **research targets, not verified facts**. Anything that cannot be sourced is cut.

### Length
- ~8–10 min, ~1,200–1,450 words, Kokoro af_heart speed 1.0.
- 50–60 rows, 8 chapters, one shot every 4–6 s.

### Visuals
- **New images: 45–55** (L003 needed 70 and stalled at 24).
- Reuse Short images (`sN:NN`) and motion shots (`MAP:`, `TL:`, `CARD:`) for the rest.
- AI Studio: Nano Banana 2.1, 16:9, 2K, Thinking = **Minimal** (High timed out).
- **Run one video's images at a time:** all sessions share one Google quota.

### Clips
- ≤ 3 Flow clips per video, following AGENTS §5 "Flow clips": make the start image in Flow (0 credits), then Video → Frames (24 credits per 8 s).
- Call `performance.setResourceTimingBufferSize(5000)` *before* generating, or the file cannot be downloaded.

### Map
- `LongMap.tsx` only has L003 states (`draw`, `nanyue`, `han`, `south`, `bachdang`, `annan`).
- Add the states the plan lists. Keep them generic so later videos can reuse them.

### Music
- YouTube Audio Library, epic/cinematic; the owner downloads the tracks.
- Until then use `tools/make_epic_bed.sh`. No AI music.

### Done
Done means all of:
- script md with claims, VI column, shots and §Publishing;
- Codex logs written;
- TTS done;
- images done, or a list of the missing ones in `.placeholders`;
- render, if `.placeholders` is empty;
- an L00N section in `HANDOFF.md`;
- branch pushed;
- MEGABRAIN note written.

### Never
- Upload, publish, or change YouTube/Google settings.
- Enter passwords.
- Touch the clipboard.
- Use subagents.

## Session prompts (copy one per session)

Each prompt is the same except the ID and plan file.

```
Make long video L004 for Rice & Empires. Repo: /Users/nino/Projects/FIRE10.DEV/REPO/yt-channel-asia-history.
Read first: AGENTS.md, HANDOFF.md, docs/FACT-CHECK.md, docs/plans/LONG-BATCH-HANDOFF.md (shared rules), docs/plans/L004-mongols-dai-viet.md (this video),
and scripts/L003-a-thousand-years-of-chinese-rule-long.md (format reference).
Branch: create long/L004 from night/2026-11-09 (or from main if the owner has merged it). Commit/push only that branch.
Do, in order: claim table → script v1 (EN + VI + say + shots) → Codex ≤3 rounds → long_build.py + Kokoro TTS → map states → images (45–55, AI Studio Thinking=Minimal)
→ ≤3 Flow clips → render when .placeholders is empty → loudnorm −14 → thumbnail → §Publishing → HANDOFF.md L004 section → push → MEGABRAIN note.
Unattended overnight is OK. No upload, no passwords, no clipboard, no subagents, no invented history.
Reply to the owner in Vietnamese with the 3 headings.
```

For the other videos, replace `L004` and the plan file:
- `L005` + `docs/plans/L005-ming-occupation-le-loi.md`
- `L006` + `docs/plans/L006-quang-trung-qing-1789.md`
- `L007` + `docs/plans/L007-tribute-diplomacy.md`
- `L008` + `docs/plans/L008-champa-long.md` (tone rules in the plan are part of the task)

## Order and timing
- Run **one session per night**, in the order L004 → L007: images are the bottleneck and the quota is shared.
- Two sessions can overlap only if one has finished its images.

## Owner decisions still open
1. Base branch for the batch: merge `night/2026-11-09` into `main` first (recommended), or branch from the night branch.
2. Music: download 2–3 Audio Library tracks once and reuse them across the batch (rotate per video).
