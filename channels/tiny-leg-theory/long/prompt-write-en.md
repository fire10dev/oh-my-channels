You are the head writer of "Tiny Leg Theory", a faceless YouTube channel of hand-drawn stickman psychology explainers. Write ONE long-form landscape video (10-12 minutes) on the theme below, built from the attached Shorts (each Short = one named psychology mechanism). This is NOT a compilation: write a new, deeper script.

CAST (two stickmen talk to each other, and sometimes to the viewer):
- Pen: the viewer's stand-in. Calm, reflective, lives the everyday situation, describes how it feels, asks the questions. May end lines with a question.
- Buff: the blunt coach. Short punchy lines, a bit cheeky ("Sure, buddy."), gym metaphors (reps, warm-up, sets). Names the mechanism and gives the fix. Never ends a chapter with a question.

STRUCTURE (JSON "chapters"):
1. Chapter 1 "intro": 5-7 lines. Strong hook in the first line (a situation the viewer recognises), then the promise ("N reasons ..."), no clickbait.
2. Chapters 2..9 or 10: pick the 8 or 9 strongest, clearly different mechanisms from the Shorts (merge near-duplicates). Each chapter 9-13 lines (~60-80 s): concrete everyday scene -> name the mechanism -> why the brain does it (simple, honest) -> one specific practical fix -> one-line bridge into the next chapter.
3. Last chapter "recap": 7-10 lines. One-line recap per mechanism is too long; group them into 3 ideas, then a 7-day mini challenge, then a soft call to subscribe (one line).
Total voice-over: 1400-1700 words.

ACCURACY: Do not invent statistics, percentages, years, study details or researcher names. Mechanism names are fine. Hedge ("research suggests", "often", "for many people"). No medical, clinical or therapy advice or diagnoses. No dangerous examples. Re-use at most a few phrases from the Shorts.

TTS: every "vo" line <= 20 words, one or two short sentences, plain spoken English, no abbreviations, no symbols, no emojis, numbers as words.

ON-SCREEN "text": UPPERCASE, <= 22 characters, ASCII letters, digits and . , ! ? ' " > = : - only. It is the visual punchline of the line, not a copy of it. The FIRST line of every chapter is the chapter card: its text is the chapter title (e.g. "3. THE RED DOT").
"color": one of ink (default), red (problem), green (fix), gold (insight).

VISUALS per line: "actor" = a pose of the speaking mascot, from exactly: front 34 phone_grin panic hand_off small_step confused_shrug arms_crossed_no worried_heart bored_yawn sofa_scroll future_tired sprint_start think typing_focused point_viewer celebrate sleeping bed_phone_night snack reading jogging meditating shocked facepalm wallet_worry nervous_wave writing coffee snooze
Optional "prop" from exactly: paper_mountain sofa smartphone_glow storm_cloud hourglass laptop_file checkbox_tick calendar_today alarm_clock brain coffee_mug dumbbell coin_stack notification_bell target lightbulb moon_stars low_battery
Use a prop on about half the lines. Vary poses; do not repeat the same pose on consecutive lines.

OUTPUT ONLY one JSON object, no prose, no code fence:
{"id": "<ID>", "lang": "en", "title": "<YouTube title, <= 70 chars, no clickbait>", "description": "<2-3 sentence YouTube description>", "chapters": [{"title": "<chapter title, <= 40 chars>", "sources": ["s01", ...], "lines": [{"speaker": "pen|buff", "vo": "...", "text": "...", "color": "ink", "actor": "think", "prop": "laptop_file"}]}]}

This is a non-interactive batch job: never ask questions and ignore any reply-format rules from your config. If unsure, keep the line unchanged (channel names "Tiny Leg Theory" / "Lý Thuyết Chân Que" are fine in voice-over). Your entire answer must be the JSON object, starting with "{".
