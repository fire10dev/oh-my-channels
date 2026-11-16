"""Batch 3 "Coding Focus" YouTube posts (title / description / tags) -> youtube_posts_batch3.txt, same layout as batch 2."""
from pathlib import Path

PLAYLIST = {"D": "Lo-fi Coding Beats", "E": "Synthwave Night Coding", "F": "Deep Focus Ambient"}
HASH = {
    "D": "#lofi #codingmusic #lofihiphop #studymusic #aimusic",
    "E": "#synthwave #codingmusic #retrowave #focusmusic #aimusic",
    "F": "#ambient #deepfocus #codingmusic #studymusic #aimusic",
}

# id, name, emoji, title tail, bpm, one-line hook, sound paragraph, style, scene emoji, scene, good for, tags
POSTS = [
    ("D1", "Midnight Commit", "🌙", "Late-Night Lo-fi Hip Hop | Beats to Code To", 78,
     "1 hour of late-night lo-fi hip hop for that last push before the commit.",
     "Dusty Rhodes chords, soft boom bap drums, a warm sub bass and gentle vinyl crackle at 78 BPM. Calm, steady and loop-friendly, so it stays in the background while you stay in the code.",
     "lo-fi hip hop · Rhodes · instrumental", "🐈", "night apartment desk, ultrawide monitor and a sleeping cat",
     "late-night coding · studying · reading",
     "midnight commit, lofi hip hop, lofi for coding, late night lofi, beats to code to, rhodes lofi, 78 bpm, coding music, study beats, ai music"),
    ("D2", "Rubber Duck Debug", "🦆", "Playful Lo-fi Chillhop | Music for Debugging & Problem Solving", 82,
     "1 hour of light, curious chillhop for talking your bug through with the duck.",
     "Muted electric guitar licks, soft kalimba, swung lazy drums and a round bassline at 82 BPM. Playful enough to keep you awake, soft enough to think over.",
     "lo-fi chillhop · guitar · kalimba · instrumental", "☀️", "golden-hour bedroom desk with a yellow rubber duck",
     "debugging · problem solving · homework · afternoon work",
     "rubber duck debugging, lofi chillhop, lofi for coding, debugging music, kalimba lofi, afternoon lofi, 82 bpm, study music, focus music, ai music"),
    ("D3", "Rainy Refactor", "🌧️", "Lo-fi Jazzhop with Rain | Cozy Coding & Study Music", 72,
     "1 hour of rainy-evening jazzhop for slow, careful refactoring.",
     "Warm felt piano chords, brushed hi-hats, a mellow upright bass and soft rain ambience at 72 BPM. Cozy, unhurried and easy to listen to for a long session.",
     "lo-fi jazzhop · felt piano · rain · instrumental", "☔", "desk by a rain-streaked window, tea and a warm lamp",
     "coding · studying · reading · relaxing on a rainy day",
     "rainy refactor, lofi jazzhop, rain lofi, lofi with rain, cozy coding music, felt piano lofi, 72 bpm, study music, rainy day music, ai music"),
    ("D4", "Coffee & Compile", "☕", "Daytime Chillhop | Jazzy Lo-fi for Productive Work", 88,
     "1 hour of bright, jazzy chillhop for a productive daytime session.",
     "Mellow jazz guitar, upright bass, a crisp snare and soft organ pads at 88 BPM. Relaxed but awake — like the second coffee kicking in while the build runs.",
     "chillhop · jazz guitar · instrumental", "🪴", "sunny co-working loft with an espresso machine and hanging plants",
     "work from home · coding · studying · cafe vibes",
     "coffee and compile, chillhop, jazzy lofi, cafe music, lofi for work, coding music, 88 bpm, work from home music, productive music, ai music"),
    ("D5", "Late Night Deploy", "🚀", "Dreamy Lo-fi Beats | Night Coding & Deep Focus", 75,
     "1 hour of dreamy lo-fi beats for the quiet hours after everyone else logs off.",
     "Soft analog synth pads, warm sidechained chords, a deep sub bass and tape saturation at 75 BPM. Steady and floating, built to keep the night calm.",
     "lo-fi beats · analog synth · instrumental", "🌕", "attic room under a moonlit skylight with string lights",
     "night coding · deep focus · studying · winding down",
     "late night deploy, lofi beats, dreamy lofi, night coding music, synth lofi, lofi for focus, 75 bpm, study beats, deep focus, ai music"),
    ("E1", "Terminal Glow", "🖥️", "Dark Chill Synthwave | Night Coding Music", 100,
     "1 hour of dark, hypnotic synthwave for late-night terminal sessions.",
     "A pulsing analog bass arpeggio, gated-reverb drums and cold shimmering pads at 100 BPM. Driving but never harsh — a steady pulse to lock into.",
     "dark synthwave · analog arps · instrumental", "🌃", "cyberpunk apartment with three glowing monitors and neon rain outside",
     "night coding · hacking on side projects · gaming · driving",
     "terminal glow, dark synthwave, chill synthwave, night coding music, cyberpunk music, programming music, 100 bpm, focus music, retrowave, ai music"),
    ("E2", "Neon Stack", "🌆", "Retro Synthwave | Productive Coding Music", 105,
     "1 hour of bright retro synthwave for shipping features.",
     "A driving sequenced bassline, bright polysynth chords and punchy 80s drums at 105 BPM. Confident, steady momentum for the part of the day when things finally click.",
     "retro synthwave · polysynth · instrumental", "🏙️", "high-rise desk over a neon city grid with floating holographic blocks",
     "coding · productive work · workouts · night drives",
     "neon stack, retro synthwave, synthwave for coding, 80s synth music, productive music, coding music, 105 bpm, outrun, retrowave, ai music"),
    ("E3", "Cyber Grid", "🌐", "Midtempo Cyberpunk Electronica | Deep Coding Focus", 95,
     "1 hour of midtempo cyberpunk electronica for long, immersive sessions.",
     "Deep pulsing bass, metallic textures, soft glitch percussion and wide atmospheric pads at 95 BPM. Immersive and steady — background that stays out of the way.",
     "cyberpunk electronica · midtempo · instrumental", "🌅", "futuristic workstation facing a synthwave grid and striped sun",
     "deep work · coding · gaming · night focus",
     "cyber grid, cyberpunk music, midtempo electronica, synthwave grid, coding music, deep focus music, 95 bpm, programming music, sci-fi ambience, ai music"),
    ("E4", "Night Shift Hacker", "🍔", "Chillwave Outrun | Late-Night City Coding", 98,
     "1 hour of nostalgic chillwave for the night shift.",
     "Chorus-drenched clean guitar, warm analog pads and a laid-back drum-machine groove at 98 BPM. Late-night city mood, easy to leave running for hours.",
     "chillwave · outrun · instrumental", "🌧️", "retro 24-hour diner booth, laptop and a milkshake, neon on wet streets",
     "night coding · studying late · night drives · chilling",
     "night shift hacker, chillwave, outrun, synthwave guitar, late night music, coding music, 98 bpm, retrowave, night city music, ai music"),
    ("E5", "Overclocked Dreams", "🛰️", "Dreamwave | Calm Synthwave for Focus", 90,
     "1 hour of floating dreamwave for calm, focused work.",
     "Lush evolving pads, slow glassy arpeggios and soft electronic drums at 90 BPM. Spacious and calm while still keeping a gentle pulse.",
     "dreamwave · synth pads · instrumental", "🌍", "space-station observation deck with the Earth and an aurora",
     "focus · coding · reading · relaxing",
     "overclocked dreams, dreamwave, calm synthwave, space music, coding music, focus music, 90 bpm, chill synth, ambient synthwave, ai music"),
    ("F1", "Flow State", "🏔️", "Minimal Ambient Electronica | Deep Focus Music for Coding", 70,
     "1 hour of minimal ambient electronica to get into — and stay in — flow.",
     "Slowly evolving warm pads, a soft rhythmic pulse and subtle granular textures at 70 BPM, with no sudden changes. Designed to disappear into the background.",
     "ambient electronica · minimal · instrumental", "🌫️", "minimalist studio facing foggy mountains at dawn",
     "deep work · coding · writing · studying",
     "flow state, ambient electronica, deep focus music, minimal ambient, coding music, concentration music, 70 bpm, study music, work music, ai music"),
    ("F2", "Quiet Server Room", "🗄️", "Ambient Drone & Piano | Calm Concentration Music", 60,
     "1 hour of quiet ambient drone with gentle piano for calm concentration.",
     "A soft low hum, gentle piano notes and airy reverb at 60 BPM, with no drums. Slow, meditative and steady.",
     "ambient drone · piano · no drums · instrumental", "💙", "cozy beanbag corner in a calm server room with soft blue lights",
     "deep work · reading · studying · meditation",
     "quiet server room, ambient drone, ambient piano, calm music, concentration music, no drums, 60 bpm, deep focus, study music, ai music"),
    ("F3", "Deep Work Rain", "🌲", "Ambient Piano with Rain | Peaceful Focus Music", 65,
     "1 hour of sparse ambient piano and soft rain for peaceful deep work.",
     "Calm piano, warm string pads and a soft rain texture at 65 BPM, with no drums. Very spacious — focus without the silence.",
     "ambient piano · rain · strings · instrumental", "🔥", "wooden cabin desk by a fireplace in a rainy pine forest",
     "deep work · studying · reading · sleep and relaxing",
     "deep work rain, ambient piano, piano with rain, rain sounds music, peaceful focus, study music, 65 bpm, calm piano, cabin ambience, ai music"),
    ("F4", "Binary Forest", "🌿", "Organic Downtempo | Kalimba Focus Music", 80,
     "1 hour of organic downtempo with kalimba and marimba for grounded focus.",
     "Kalimba and soft marimba patterns, gentle hand percussion, nature textures and a warm bass at 80 BPM. Earthy and steady, like working in a greenhouse at dusk.",
     "organic downtempo · kalimba · marimba · instrumental", "✨", "greenhouse desk among ferns and fireflies at dusk",
     "coding · studying · creative work · relaxing",
     "binary forest, organic downtempo, kalimba music, marimba, nature music, focus music, 80 bpm, coding music, study music, ai music"),
    ("F5", "Silent Algorithm", "❄️", "Minimal Electronic Ambient | Precise Deep Work Music", 76,
     "1 hour of minimal electronic ambient for clean, precise thinking.",
     "Soft clicky microbeats, a deep round bass and a repeating hypnotic synth motif at 76 BPM. Clean and quiet, built for long stretches of deep work.",
     "minimal electronic · microbeats · instrumental", "🏮", "tatami room with a paper lantern, open to a snowy garden",
     "deep work · coding · math & logic · studying",
     "silent algorithm, minimal electronic, ambient microbeats, deep work music, coding music, minimal ambient, 76 bpm, focus music, study music, ai music"),
]


def post(p):
    sid, name, emo, tail, bpm, hook, sound, style, scene_emo, scene, good, tags = p
    return f"""################################################################
{sid} · {name.upper()} ({bpm} BPM)
################################################################
TITLE:
{name} {emo} 1 Hour {tail}

DESCRIPTION:
{name} {emo} {hook}

{sound}

🎹 Style: {style}
⏱️ Tempo: {bpm} BPM
{scene_emo} Scene: {scene}

🎧 Good for: {good}

🔔 Subscribe to VIBE MUSIC AI MAKER for more AI-made instrumental mixes.
🎵 Music and visuals created with AI by VIBE MUSIC AI MAKER.

{HASH[sid[0]]}

TAGS:
{tags}
"""


def main():
    head = ("Batch 3 — 15 video Coding Focus (VIBE MUSIC AI MAKER) · 2026-10-29\n"
            "Chung cho cả 15: Danh mục = Nhạc · Không dành cho trẻ em · \"Có, đã dùng AI\"\n"
            f"Playlist: \"{PLAYLIST['D']}\" (D1–D5) · \"{PLAYLIST['E']}\" (E1–E5) · \"{PLAYLIST['F']}\" (F1–F5)\n")
    out = Path(__file__).parent / "youtube_posts_batch3.txt"
    out.write_text(head + "\n" + "\n".join(post(p) for p in POSTS))
    longest = max(len(f"{p[1]} {p[2]} 1 Hour {p[3]}") for p in POSTS)
    print(f"{len(POSTS)} posts, longest title {longest} chars (YouTube limit 100)")


if __name__ == "__main__":
    main()
