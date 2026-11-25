# L003 plan — "1,000 years of Chinese rule" long video (from S006)

Owner request 2026-11-09 22:46 (+07): "lên plan làm Long từ short này". Length chosen: **~8–10 min**.
Why this topic: S006 = 666 views in 48 h, 92% from Shorts feed. The other 10 Shorts got 0–56 views.
Owner's view: China ruling Vietnam is a sensitive topic and makes people curious.

## Target
| Item | Value |
|---|---|
| Format | 16:9, 1920×1080, 30 fps, ~8–10 min (~1,250–1,450 words at ~150 wpm) |
| Style | Antique map / parchment (same as S006) + lacquer for battle/ceremony scenes |
| Pace | One visual change every 4–6 s (≈ 110–130 shots); never a static frame > 8 s |
| Visuals | ~70 new AI images + 9 from S006 (reframed) + **≤ 3 AI video clips** (Flow/Veo or Gemini) + Remotion motion assets |
| Music | Epic/heroic bed under narration (ducked), louder stings on chapter cards and battles |
| Output | `shorts/out/L003-chinese-rule.mp4`, −14 LUFS, + thumbnail 1280×720 |

## Chapters (draft — claims must come before narration, FACT-CHECK §3)
| # | Chapter | ~time | Core content (reuse S006 C1–C8, add new claims) |
|---|---|---|---|
| 0 | Cold open | 0:30 | "1,000 years" — the number every Vietnamese knows; what it hides |
| 1 | Before the Han | 1:00 | Red River cultures, Đông Sơn, Nanyue; legend vs record (mark legends) |
| 2 | 111 BC: conquest | 1:00 | Han takes Nanyue; Jiaozhi commanderies; only the north, not today's Vietnam |
| 3 | The Trưng revolt (40–43) | 1:15 | Revolt, Ma Yuan, what sources actually say (reuse S004 lines) |
| 4 | The long middle | 1:30 | Shi Xie, local elites, Lý Bôn's Vạn Xuân 544–602; other revolts only if sourced |
| 5 | Tang Annam | 1:00 | Protectorate of Annam, Nanzhao war 860s, Gao Pian |
| 6 | Breaking away | 1:30 | Khúc family 905, Dương Đình Nghệ, Ngô Quyền, Bạch Đằng 938 → 939 |
| 7 | What it really meant | 1:15 | Script and language, identity, the scholars' debate (Taylor / Kelley / Churchman), outro |

## Motion assets to build in Remotion (new `LongVideo` composition, reusable for later long videos)
- **Animated map**: Red River delta drawn on (SVG path stroke), commandery borders fade in, "Chinese control" tint grows/shrinks per era.
- **Timeline ribbon** 111 BC → 939 with the breaks (40–43, 544–602) cut out; it reappears in every chapter so viewers keep their place.
- **Chapter cards**: Cinzel title, year, drum-star wipe, music sting.
- **Parallax** (2.5D): split key images into fore/back layers (AI-generated separately or masked), move at different speeds.
- **Overlays**: paper grain, ink-bleed transitions, drifting smoke/dust, candle flicker for night scenes.
- **Lower-thirds** for sources ("Taylor 1983", "Kelley 2005") and for disputed points ("Sources disagree").
- **Counters/labels**: year counter rolling between eras; names in the right spelling (Trưng, Lý Bôn, Ngô Quyền).
- **Captions**: small, ≤ 6 words, bottom third (16:9 version of the 2026-11-08 caption rule).

## AI video clips (max 3, image-to-video from our own images)
1. Cold open: river mouth with wooden stakes and ships at dusk, slow push-in (Bạch Đằng mood).
2. Ch.2: Han army column crossing a mountain pass, drawn as a moving map vignette.
3. Ch.6: Bạch Đằng battle, tide falling and ships caught on the stakes.
Tool order: Google Flow (Veo) → Gemini. 5–8 s each; slowed or looped with crossfade in Remotion if needed.

## Music
- First choice: **YouTube Audio Library** (free, safe for monetization), epic/cinematic tracks, 2–3 tracks across chapters.
- AI music is avoided: per AGENTS §5 it changes the "Sử dụng AI" answer.
- Mix: music −22 to −26 LU under voice (ducking), stings at chapter cards; final loudnorm −14.

## Pipeline + order (overnight, branch `night/<date>` cut from `main`, AGENTS §2/§7)
| Step | Who / tool | Done when |
|---|---|---|
| 1 Claim table (S006 C1–C8 + new) | Claude, web research | every line has a source |
| 2 Script v1 + VI column + shot list (one shot per 4–6 s) | Claude | `scripts/L003-*.md` |
| 3 Codex review ≤ 3 rounds | `tools/codex_review.sh` | 🔴 fixed, cut, or hedged |
| 4 TTS | Kokoro af_heart 1.0, `say_l003.json` | wavs + timeline |
| 5 Images (~70, 16:9) | `tools/imagegen/gen.mjs` / AI Studio worker | staged in `$TMPDIR/stage` |
| 6 Video clips ×3 | Flow → Gemini in browser | mp4 in `shorts/public/l003/` |
| 7 `LongVideo` composition + assets | Remotion | preview frames checked |
| 8 Music | Audio Library tracks (downloaded by owner) | `shorts/public/bgm/` |
| 9 Render + loudnorm + contact sheet | `make_short.sh`-style script | mp4 −14 LUFS |
| 10 Thumbnail + title/description | Claude | in script md §Publishing |
Steps 5–6 run in the background while 7 is built.

## Risks
- 🔴 **Image quota**: Nano Banana 2.1 stopped after ~32 images/night (2026-11-07). 70 images may take 2 nights. Fallbacks: Lite 1K for less important shots, reuse S002/S004 images, more motion assets per image.
- 🔴 `gen.mjs` sign-in is blocked in Playwright Chrome (AGENTS §4). Images and clips are therefore made in the browser by Claude, which costs more tokens.
- 🟠 Flow/Veo credits on the account are unknown; if they run out → Gemini → fewer clips (parallax instead).
- 🟠 Sensitive topic: comments may fight. Keep the S006 tone: objective, sourced, "historians debate".
- 🟡 Chapters 4–5 need new sources (Shi Xie, Tang Annam, Nanzhao); no invented history — cut if unsourced.

## Needs owner before the night run
1. OK this plan (chapters, ~8–10 min, style).
2. Pick or download 2–3 epic tracks from YouTube Audio Library (or allow Claude to download them).
3. OK using Flow/Gemini credits for 3 clips.
Morning after: review VI column, watch mp4, then upload (owner drags file).
