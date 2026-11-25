# Transcreation guide — Vietnamese → Spanish (neutral Latin American) for the Spanish edition of "Ma Nó Kể"

You are adapting a finished Vietnamese animated satire-horror series for a Latin American + US Hispanic YouTube audience (neutral Spanish: "ustedes", no "vosotros", no Spain-only slang, no Mexican-only slang).
The pictures stay the same; only voice, subtitles, on-screen pop text and fake livestream comments change.

## Tone
- Satirical horror: "creepy in the idea, not in the image". The audience sits on the ghost's side, watching living humans be ridiculous (livestream hustles, paperwork fraud, phone-addicted families).
- Deadpan, dry, quotable. Short spoken sentences. Contractions. Natural neutral Latin American Spanish, tú with the viewer.
- Comedy first: when a literal translation kills the joke, rewrite the joke so it lands in English with the same meaning and the same beat. Keep the punchline at the END of the line.
- No added gore, no jump-scare words, nothing harmful to children. Don't add new plot.

## Keep Vietnamese (the exotic hook)
- Ghost species names stay Vietnamese, italic-free, no diacritics: ma lai, than trung, ma xo, ma giau, ma da. The FIRST time a ghost names itself in an episode, fold in a 3–7 word gloss in the same sentence ("I'm a ma lai. At night my head flies off on its own." / "I'm a ma giau — a hider ghost.").
- People's names stay (Bin, Linh, ba Tu → "Granny Tu", ba Hanh → "Mrs. Hanh"). Drop diacritics everywhere.
- Real objects stay concrete: rice cooker, brass tray, altar, sticky rice offerings (oản → "rice cake offerings"), conical hat, water pipe.
- Folk rules must be crystal clear to a foreigner in one line (e.g. trùng tang → "a death at a cursed hour — the underworld comes back for one more from the same family").

## Host "Ma No" (MN)
- Small round white house ghost on top of the altar cabinet, smug, gossipy, talks to the viewer like a cheeky older cousin ("¿Otra vez por aquí?"). Speaks with tú. Vietnamese "tao/mày" = casual, NOT rude: no swear words.
- Subscribe lines keep the threat-joke structure: "Suscríbete. Si no, esta noche me siento encima de TU armario."
- "Next episode on Monday…" lines: drop weekday names → "Next time: …".
- "Bản đầy đủ ở trên kênh / link dưới" (shorts) → "Historia completa en el canal." / "Episodio completo: enlace abajo."

## Length & speech (very important: it is read by TTS and timed against fixed pictures)
- Each spoken line must take about the same time to say as the Vietnamese. Spanish runs long: keep each line no longer than the approved English version below; cut filler words. When in doubt, SHORTER.
- Write numbers in words in spoken lines ("dos y siete de la madrugada" / "tres millones"). Prices: keep VND as "fifty percent off", avoid "đồng" unless it is the joke.
- No emojis or symbols in spoken lines. Ellipses "…" allowed for a beat.
- Pop text (on-screen captions, kind=pop): ALL CAPS, ≤ 5 words, punchy; digits allowed ("2:07 AM", "300.000 VIENDO"). Keep symbols like → ✔ · if present.
- Livestream usernames (kind=user): turn into plausible Latin American handles (@vale.mx, @juanc_23…), keep the @ if present.
- Livestream comments (kind=comment): Latin American internet style, lowercase ok, emojis kept.

## Output
Return ONE JSON object only (no markdown fence, no commentary): keys = the Vietnamese strings EXACTLY as given (character for character), values = Spanish. Every key given must be present.

## Spanish specifics
- Translate from the APPROVED ENGLISH VERSION given below (it already solved the jokes and the length); use the Vietnamese only to check meaning.
- Ghost names stay Vietnamese (ma lai, than trung, ma xo, ma giau, ma da) with the same short gloss in Spanish.
- "Ma No" the host = "el fantasma chismoso de la casa" when described.
