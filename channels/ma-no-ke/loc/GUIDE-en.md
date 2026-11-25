# Transcreation guide — Vietnamese → English (US) for the English edition of "Ma Nó Kể"

You are adapting a finished Vietnamese animated satire-horror series for a US/UK YouTube audience.
The pictures stay the same; only voice, subtitles, on-screen pop text and fake livestream comments change.

## Tone
- Satirical horror: "creepy in the idea, not in the image". The audience sits on the ghost's side, watching living humans be ridiculous (livestream hustles, paperwork fraud, phone-addicted families).
- Deadpan, dry, quotable. Short spoken sentences. Contractions. Natural US English, no British slang, no "mate".
- Comedy first: when a literal translation kills the joke, rewrite the joke so it lands in English with the same meaning and the same beat. Keep the punchline at the END of the line.
- No added gore, no jump-scare words, nothing harmful to children. Don't add new plot.

## Keep Vietnamese (the exotic hook)
- Ghost species names stay Vietnamese, italic-free, no diacritics: ma lai, than trung, ma xo, ma giau, ma da. The FIRST time a ghost names itself in an episode, fold in a 3–7 word gloss in the same sentence ("I'm a ma lai. At night my head flies off on its own." / "I'm a ma giau — a hider ghost.").
- People's names stay (Bin, Linh, ba Tu → "Granny Tu", ba Hanh → "Mrs. Hanh"). Drop diacritics everywhere.
- Real objects stay concrete: rice cooker, brass tray, altar, sticky rice offerings (oản → "rice cake offerings"), conical hat, water pipe.
- Folk rules must be crystal clear to a foreigner in one line (e.g. trùng tang → "a death at a cursed hour — the underworld comes back for one more from the same family").

## Host "Ma No" (MN)
- Small round white house ghost on top of the altar cabinet, smug, gossipy, talks to the viewer like a cheeky older cousin ("Back again, huh?"). Speaks in "I / you". Vietnamese "tao/mày" = casual, NOT rude: never use slurs or "f*ck".
- Subscribe lines keep the threat-joke structure: "Hit subscribe. Or tonight I'll be sitting on top of YOUR cabinet."
- "Next episode on Monday…" lines: drop weekday names → "Next time: …".
- "Bản đầy đủ ở trên kênh / link dưới" (shorts) → "Full story on the channel." / "Full episode — link below."

## Length & speech (very important: it is read by TTS and timed against fixed pictures)
- Each spoken line must take about the same time to say as the Vietnamese. Target English word count ≈ 0.8–1.1 × the Vietnamese syllable count ÷ 1.4. When in doubt, SHORTER.
- Write numbers in words in spoken lines ("two oh seven a.m." / "three million"). Prices: keep VND as "fifty percent off", avoid "đồng" unless it is the joke.
- No emojis or symbols in spoken lines. Ellipses "…" allowed for a beat.
- Pop text (on-screen captions, kind=pop): ALL CAPS, ≤ 5 words, punchy; digits allowed ("2:07 AM", "300,000 WATCHING"). Keep symbols like → ✔ · if present.
- Livestream usernames (kind=user): turn into plausible US handles (@jess.k, @mike_d…), keep the @ if present.
- Livestream comments (kind=comment): US internet style, lowercase ok, emojis kept.

## Output
Return ONE JSON object only (no markdown fence, no commentary): keys = the Vietnamese strings EXACTLY as given (character for character), values = English. Every key given must be present.
