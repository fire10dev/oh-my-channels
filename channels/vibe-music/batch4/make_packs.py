#!/usr/bin/env python3
"""make_packs.py — 100 Synthwave Night Coding songs in 20 packs of 5 (same style as batch3 E / Flow session
"Night Coding Synthwave"). Writes music_packs.md (one paste-ready Flow Music message per pack) + songs.json."""
import json
from pathlib import Path

TAIL = "instrumental, no vocals"
# pack: (name, scene for the image prompt, palette, [(title, sound, bpm) x5])
PACKS = [
 ("Midnight Terminal", "a dark apartment desk with three monitors glowing, city skyline through the window", "deep navy, cyan and magenta", [
  ("Root Access", "Dark chill synthwave, pulsing analog bass arpeggio, gated reverb drums, cold pads, hypnotic focus", 100),
  ("Kernel Panic Calm", "Minimal darksynth, deep sub bass pulse, soft snare, icy pads, tense but controlled", 96),
  ("Sudo Night", "Retro synthwave, warm polysynth chords, steady four-on-the-floor kick, shimmering arps", 102),
  ("Cursor Blink", "Chill synthwave, slow sequenced bass, soft gated drums, glassy bell arps", 92),
  ("Merge at Midnight", "Midtempo synthwave, rolling bassline, wide analog pads, crisp 80s claps", 98)]),
 ("Neon Highway", "a retro sports car driving on an empty neon highway at night toward a purple sun", "hot pink, purple and orange", [
  ("Overdrive Loop", "Outrun synthwave, driving sequenced bass, punchy gated drums, bright lead pads", 108),
  ("Exit 1986", "Retro outrun, galloping bassline, big polysynth stabs, steady momentum", 110),
  ("Tail Lights", "Chill outrun, chorus guitar, warm pads, laid-back drum machine", 100),
  ("Cruise Control", "Smooth synthwave, steady bass arpeggio, soft toms, dreamy pads", 104),
  ("Horizon Grid", "Bright synthwave, sparkling arps, driving kick, wide strings pad", 106)]),
 ("Cyber Rain", "a rainy neon street seen through a wet window from a hacker's room", "teal, violet and rain blue", [
  ("Wet Neon", "Rainy chill synthwave, soft rain ambience, deep bass pulse, gated snare, misty pads", 94),
  ("Puddle Reflections", "Dreamy synthwave, glassy arpeggios, soft drums, rain texture, calm focus", 90),
  ("Acid Drizzle", "Midtempo cyberpunk, rubbery analog bass, glitch hats, rain ambience", 96),
  ("Umbrella Protocol", "Chillwave, warm chorus pads, slow drum machine, light rain", 88),
  ("Storm Compile", "Dark synthwave, thunder-like toms, pulsing bass, cold pads, steady drive", 100)]),
 ("Retro Arcade", "a dim retro arcade full of glowing cabinets and a coder at a laptop", "electric blue, pink and yellow", [
  ("Insert Coin", "Chiptune synthwave, 8-bit arps over analog bass, punchy drums, playful focus", 110),
  ("High Score Mode", "Upbeat retro synthwave, square-wave leads, gated snare, steady groove", 112),
  ("Pixel Drift", "Chill chipwave, soft 8-bit bells, warm pads, relaxed beat", 96),
  ("Continue Screen", "Midtempo synthwave, arcade bleeps, deep bass, wide pads", 100),
  ("Level Select", "Bright synthwave, bouncing bass arpeggio, sparkling chip arps", 106)]),
 ("Server Room", "a cold server room with blinking blue rack lights and a lone engineer", "ice blue, steel grey and red", [
  ("Rack Hum", "Minimal dark synthwave, low drone, steady pulse bass, soft industrial percussion", 92),
  ("Cold Boot", "Darksynth, cold arpeggio, gated toms, metallic textures, focused", 98),
  ("Fan Noise", "Ambient synthwave, airy pads, soft white-noise texture, slow pulse", 84),
  ("Uptime", "Steady synthwave, sequenced bass, tight drums, clean pads", 100),
  ("Failover", "Midtempo darkwave, driving bass, gated snare, tense pads", 102)]),
 ("Chillwave Sunset", "a rooftop at dusk with palm trees, a laptop and a pink-orange sunset over the sea", "sunset orange, pink and lavender", [
  ("Golden Hour Build", "Chillwave, warm tape pads, chorus guitar, soft drum machine", 92),
  ("Palm Shadows", "Dreamy chillwave, washed-out synths, lazy beat, warm bass", 88),
  ("Pastel Commit", "Soft synthwave, gentle arps, warm pads, relaxed groove", 94),
  ("Low Tide Logic", "Chillwave, airy pads, slow bass, light shaker, calm", 85),
  ("Afterglow Patch", "Sunset synthwave, mellow lead pads, steady kick, warm chords", 96)]),
 ("Orbital Station", "a space station window with Earth below and a glowing control desk", "deep space blue, cyan and white", [
  ("Zero Gravity Code", "Space synthwave, floating pads, slow arps, soft electronic drums", 90),
  ("Docking Sequence", "Cinematic synthwave, pulsing bass, wide strings, steady drums", 98),
  ("Starlight Stack", "Dreamwave, shimmering arps, lush pads, gentle beat", 92),
  ("Orbit Debug", "Midtempo space synth, deep bass, sparse percussion, cosmic pads", 95),
  ("Satellite Sync", "Bright space synthwave, sequenced arps, crisp drums", 102)]),
 ("Tokyo Night", "a narrow neon Tokyo-style street at night seen from a small studio apartment", "neon red, cyan and warm amber", [
  ("Shibuya Shift", "City pop synthwave, slap bass, bright electric piano, tight drums", 104),
  ("Konbini 2AM", "Chill synthwave, warm Rhodes, soft drum machine, neon pads", 92),
  ("Last Train Home", "Nostalgic synthwave, chorus guitar, steady bass, soft toms", 98),
  ("Neon Alley Loop", "Midtempo synthwave, funky bass, gated claps, glossy pads", 100),
  ("Rooftop Ramen", "Laid-back chillwave, mellow keys, warm bass, light beat", 90)]),
 ("Cyberpunk Alley", "a cyberpunk alley with holographic signs and a hacker on a crate with a laptop", "acid green, magenta and black", [
  ("Black Ice", "Dark cyberpunk synth, heavy pulsing bass, metallic percussion, cold pads", 98),
  ("Chrome Veins", "Midtempo cyberpunk, distorted bass, glitch hats, wide pads", 95),
  ("Netrunner", "Driving darksynth, sequenced bass, gated drums, tense arps", 104),
  ("Hologram Market", "Cyberpunk electronica, plucky arps, deep bass, crowd-like texture", 96),
  ("Firewall Breach", "Dark synthwave, pounding kick, aggressive bass arp, steady", 106)]),
 ("Dreamwave Clouds", "a bedroom desk floating among pink clouds under a starry sky", "lilac, baby blue and soft pink", [
  ("Cloud Cache", "Dreamwave, lush evolving pads, slow glassy arpeggios, soft drums", 88),
  ("Soft Reboot", "Dreamy synthwave, warm pads, gentle bass, airy bells", 86),
  ("Lucid Loop", "Floating chillwave, chorus keys, soft beat, calm focus", 90),
  ("Pillow Server", "Ambient dreamwave, slow pads, distant arps, very soft drums", 82),
  ("Moonlit Merge", "Dreamwave, shimmering arps, warm sub bass, slow groove", 92)]),
 ("Vapor Mall", "an empty 80s shopping mall at night with fountains and neon storefronts", "teal, pink and marble white", [
  ("Food Court Focus", "Vaporwave synth, slowed smooth jazz keys, soft beat, warm pads", 84),
  ("Escalator Dreams", "Mallsoft synthwave, airy pads, gentle bass, reverb drums", 88),
  ("Fountain Loop", "Chill vaporwave, glassy keys, water texture, slow groove", 82),
  ("Neon Arcade Plaza", "Retro synthwave, bright pads, light funk bass, steady drums", 98),
  ("Closing Time Code", "Dreamy vapor synth, slow chords, soft kick, calm", 86)]),
 ("Laser Grid", "a retro 80s computer lab with a glowing laser grid floor", "laser red, purple and cyan", [
  ("Vector Drive", "Italo synthwave, octave bass, bright arps, driving drums", 112),
  ("Laser Lines", "Retro synthwave, sequenced bass, synth brass stabs, gated snare", 108),
  ("Wireframe", "Minimal synthwave, clean arpeggio, steady kick, cold pads", 100),
  ("Polygon Pulse", "Upbeat synthwave, bouncy bass, sparkling arps, claps", 110),
  ("Grid Runner", "Driving outrun, rolling bass, big pads, steady momentum", 106)]),
 ("Night Train", "a quiet night train cabin with a laptop and neon city lights streaking past", "midnight blue, amber and neon pink", [
  ("Window Seat", "Chill synthwave, rhythmic bass like rails, soft pads, gentle drums", 96),
  ("Express Line", "Driving synthwave, steady pulse bass, crisp hats, wide pads", 104),
  ("Tunnel Lights", "Midtempo synthwave, flickering arps, deep bass, soft toms", 98),
  ("Sleeper Car", "Dreamy chillwave, slow pads, soft beat, warm bass", 86),
  ("Terminal Station", "Nostalgic synthwave, chorus guitar, steady drums, warm chords", 100)]),
 ("Hacker Den", "a cluttered hacker den lit only by green and purple monitors", "phosphor green, purple and black", [
  ("Shell Script", "Darkwave synth, steady bass pulse, cold arps, tight snare", 100),
  ("Packet Sniffer", "Minimal darksynth, ticking hats, deep bass, eerie pads", 96),
  ("Green Phosphor", "Retro synthwave, analog bass, CRT hum texture, warm pads", 94),
  ("Zero Day Calm", "Dark chill synthwave, slow pulse, soft gated drums, cold shimmer", 92),
  ("Backdoor Groove", "Midtempo synthwave, funky bass, glossy pads, steady beat", 102)]),
 ("Ocean Drive Night", "a seaside boulevard at night with a convertible, palm trees and a neon hotel", "aqua, flamingo pink and navy", [
  ("Miami Compile", "Retro synthwave, sax-like synth lead pads, punchy drums, warm bass", 104),
  ("Boardwalk Neon", "Chill outrun, chorus guitar, steady drum machine, warm pads", 100),
  ("Midnight Marina", "Smooth synthwave, slap bass, glossy keys, relaxed beat", 96),
  ("Pink Palms", "Chillwave, airy pads, soft bass, light percussion", 90),
  ("Coastal Cache", "Bright synthwave, rolling arps, steady kick, sparkling pads", 106)]),
 ("Neon Rooftop", "a rooftop at night with a laptop, string lights and a glowing city skyline", "neon purple, gold and night blue", [
  ("Skyline Sprint", "Driving synthwave, pulsing bass, bright polysynth, gated drums", 108),
  ("Antenna Glow", "Chill synthwave, soft arps, warm pads, slow drums", 92),
  ("Fire Escape", "Midtempo synthwave, deep bass, crisp claps, moody pads", 98),
  ("Billboard Hum", "Retro synthwave, steady bass arp, warm chords, light toms", 100),
  ("Midnight Standup", "Upbeat synthwave, bouncy bass, bright pads, positive drive", 104)]),
 ("Ice Cold Code", "a minimalist white-blue room with frost on the window and a single glowing monitor", "ice white, pale cyan and silver", [
  ("Frost Byte", "Cold synthwave, crystalline arps, deep sub, soft gated drums", 96),
  ("Glacier Stack", "Minimal ambient synth, slow pads, gentle pulse, airy", 84),
  ("Polar Night", "Dark chill synthwave, icy pads, slow bass, sparse drums", 90),
  ("Snow Crash", "Midtempo synthwave, crunchy bass, cold bells, steady beat", 100),
  ("Cryo Sleep", "Dreamwave, frozen pads, soft arps, very soft drums", 82)]),
 ("Mainframe 1984", "a 1980s mainframe room with tape drives, CRT terminals and a coder in a hoodie", "amber, olive and dark teal", [
  ("Punch Card", "Retro synthwave, analog sequencer bass, vintage drum machine, warm pads", 102),
  ("Tape Drive", "Midtempo synthwave, steady pulse, tape-saturated chords, soft toms", 96),
  ("Amber Screen", "Chill retro synth, warm arps, soft bass, gentle beat", 92),
  ("Batch Job", "Driving synthwave, sequenced bass, gated snare, bright pads", 106),
  ("Core Memory", "Nostalgic synthwave, chorus pads, slow bass, warm drums", 94)]),
 ("Rainy Neon Cafe", "a small late-night cafe with rain on the glass, neon sign glow and a laptop", "coffee brown, neon pink and rain blue", [
  ("Espresso Arp", "Lo-fi synthwave, dusty drums, warm analog bass, soft arps", 88),
  ("Latte Loop", "Chillwave, warm keys, vinyl texture, relaxed beat", 86),
  ("Neon Barista", "Chill synthwave, soft Rhodes, steady bass, gated snare", 92),
  ("Rain on Glass", "Dreamy lo-fi synthwave, rain ambience, slow pads, soft drums", 84),
  ("Closing Shift", "Mellow synthwave, warm chords, gentle bass, light toms", 90)]),
 ("Dawn Deploy", "a desk by a window at dawn with the neon city fading into a pink-blue sunrise", "dawn pink, sky blue and gold", [
  ("First Light Push", "Bright synthwave, uplifting pads, steady arps, punchy drums", 104),
  ("Sunrise Release", "Positive synthwave, warm bass, sparkling arps, driving kick", 106),
  ("Morning Merge", "Chill synthwave, soft pads, light beat, warm chords", 94),
  ("Coffee Cooldown", "Chillwave, airy keys, gentle bass, soft drums", 90),
  ("Green Build", "Upbeat synthwave, bouncy bass arp, bright polysynth, claps", 108)]),
]

songs, md = [], ["# Batch 4 — 100 Synthwave Night Coding (20 pack × 5)", "",
    "Mỗi pack = 1 phiên mới trên Flow Music. Đặt tên phiên = tên pack, dán nguyên khối text rồi bấm gửi.",
    "Xong pack nào thì đánh [x]. Id bài: G<pack>-<n>, ví dụ G01-1.", ""]
assert len(PACKS) == 20 and all(len(p[3]) == 5 for p in PACKS)
for pi, (pack, scene, palette, items) in enumerate(PACKS, 1):
    parts = []
    for n, (title, sound, bpm) in enumerate(items, 1):
        sid = f"G{pi:02d}-{n}"
        prompt = f"{sound}, {TAIL}, {bpm} bpm"
        songs.append({"id": sid, "pack": pi, "pack_name": pack, "title": title, "bpm": bpm, "prompt": prompt,
                      "scene": scene, "palette": palette})
        parts.append(f"({n}) {title}: {prompt}.")
    msg = (f"Create 5 separate instrumental synthwave songs for a 1-hour night coding focus video. "
           "No vocals, about 3 minutes each, steady energy with no long intro, no outro and no fade-out so each loops "
           "cleanly. One song per description. " + " ".join(parts))
    md += [f"## [ ] Pack {pi:02d} — {pack}", "", "```text", msg, "```", ""]
assert len({s["title"] for s in songs}) == 100, "duplicate titles"
Path("songs.json").write_text(json.dumps(songs, ensure_ascii=False, indent=1))
Path("music_packs.md").write_text("\n".join(md))
print(len(songs), "songs,", len(PACKS), "packs")
