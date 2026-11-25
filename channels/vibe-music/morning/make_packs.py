#!/usr/bin/env python3
"""make_packs.py — Morning êm dịu packs (M01…), same pipeline as batch4.
Writes music_packs.md (one Flow Music message per pack), image_prompts.md, youtube_posts.md, songs.json.
Build/render: PACK_DIR=morning python batch4/build_scenes.py scenes … ; PACK_DIR=$PWD/morning batch4/render_1h.sh …"""
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
VIEWS = [
    "Wide establishing view: {s}. A character with headphones sits by the window, seen from the side, holding a warm mug.",
    "Over-the-shoulder view from behind a character with headphones, looking past them at the scene: {s}.",
    "Cozy medium view of a table corner with a warm mug, a small plant and a notebook; in the background {s}.",
    "Low-angle gentle view: {s}. A character with headphones stretches softly, lit by golden morning sun.",
    "Calm wide view from outside looking in: {s}. A character with headphones reads quietly, a small cat napping nearby.",
]
# pack: (name, scene, palette, [(title, sound, bpm, style, emoji) x5])
PACKS = [
 ("Gentle Morning",
  "a sunlit apartment corner at sunrise, a large window with sheer linen curtains, potted plants, a wooden desk with a steaming coffee mug and an open notebook",
  "soft sunrise gold, warm peach, creamy white and sage green", [
  ("Soft Sunrise Piano", "Gentle solo piano, soft felt tone, warm room reverb, light tape hiss, peaceful and hopeful, no drums", 72, "soft solo piano", "🎹"),
  ("First Coffee Lo-fi", "Morning lo-fi, mellow Rhodes chords, soft vinyl crackle, lazy brushed beat, warm round bass, cozy and unhurried", 78, "morning lo-fi", "☕"),
  ("Linen Curtains", "Soft acoustic fingerpicked guitar, warm cello pad, light shaker, airy and tender, slow steady groove", 80, "acoustic guitar", "🌿"),
  ("Dewdrop Garden", "Calm ambient morning, gentle celesta and music-box melody, soft evolving pads, faint birdsong texture, slow pulse, no drums", 70, "ambient celesta", "🌱"),
  ("Sunlit Balcony Bossa", "Gentle slow bossa nova, nylon-string guitar, soft brushed drums, warm upright bass, breathy flute melody, relaxed", 84, "slow bossa nova", "🌤️")]),
 ("Rainy Morning Cafe",
  "a quiet corner cafe on a rainy morning, raindrops on a big window, warm pendant lamps, a latte and croissant on a wooden table, wet street softly blurred outside",
  "warm amber, soft grey-blue, cream and muted teal", [
  ("Window Drops", "Soft jazz piano, light rain ambience, gentle upright bass, brushed snare, warm and cozy, slow swing", 76, "rainy jazz piano", "🌧️"),
  ("Latte Steam", "Rainy morning lo-fi, mellow Rhodes, vinyl crackle, soft rain texture, lazy boom bap beat, warm bass", 80, "rainy lo-fi", "☕"),
  ("Umbrella Stand", "Gentle acoustic guitar and soft piano duet, light rain ambience, warm and tender, no heavy drums", 74, "acoustic piano duet", "☂️"),
  ("Grey Sky Pastry", "Soft cafe bossa, nylon guitar, brushed drums, muted trumpet melody, light rain, relaxed and warm", 82, "cafe bossa", "🥐"),
  ("Slow Drizzle", "Calm ambient piano, long soft pads, rain on glass texture, gentle and slow, no drums", 66, "ambient rain piano", "🌦️")]),
 ("Seaside Sunrise",
  "a small seaside balcony at sunrise, a calm turquoise ocean and soft waves, white railing, a ceramic coffee cup, potted bougainvillea, gulls far in the pink sky",
  "pale pink, soft turquoise, warm sand and white", [
  ("Morning Tide", "Warm acoustic guitar, soft ocean wave ambience, light shaker, gentle bass, breezy and calm", 82, "seaside acoustic", "🌊"),
  ("Salt Air Bossa", "Gentle bossa nova, nylon guitar, soft flute, brushed drums, warm upright bass, sunny seaside mood", 86, "seaside bossa", "🐚"),
  ("Shell Collector", "Soft marimba and kalimba melody, airy pads, light hand percussion, peaceful and bright, slow groove", 78, "marimba chill", "🏖️"),
  ("Lighthouse Piano", "Gentle solo piano with soft wave ambience, warm reverb, hopeful and open, no drums", 70, "ocean piano", "🌅"),
  ("Pastel Shoreline", "Mellow chillhop, Rhodes chords, ukulele plucks, soft beat, gentle waves, warm and sunny", 84, "beach chillhop", "☀️")]),
 ("Forest Cabin Morning",
  "a cozy wooden cabin porch in a misty pine forest at sunrise, soft sun rays through the trees, a steaming kettle and tin mug on a small table, wildflowers",
  "misty green, warm honey, soft moss and pale gold", [
  ("Pine Mist", "Soft fingerpicked acoustic guitar, warm wooden flute, gentle forest birdsong, slow and peaceful, no drums", 72, "forest folk guitar", "🌲"),
  ("Kettle Whistle", "Warm indie folk instrumental, mandolin and acoustic guitar, soft brushed drums, cozy cabin morning", 84, "cozy indie folk", "🫖"),
  ("Mossy Trail", "Calm ambient guitar, soft pads, distant birds, gentle stream texture, slow pulse", 68, "ambient nature guitar", "🍃"),
  ("Cabin Window Piano", "Gentle piano with soft cello, warm room tone, tender and hopeful, slow and steady", 74, "piano and cello", "🪵"),
  ("Wildflower Path", "Light acoustic folk, ukulele and glockenspiel, soft claps, warm bass, bright but gentle", 88, "light acoustic folk", "🌼")]),
 ("Spring Blossom Morning",
  "a bright room with an open window full of pink cherry blossoms in the morning breeze, petals drifting in, a light wooden table with tea and a sketchbook",
  "blush pink, soft white, fresh mint and light gold", [
  ("Petal Drift", "Gentle piano and soft strings, airy and light, hopeful spring morning, no drums", 70, "piano and strings", "🌸"),
  ("Blossom Breeze", "Soft lo-fi with koto-like plucks, mellow keys, light vinyl texture, gentle beat, fresh and calm", 80, "spring lo-fi", "🍃"),
  ("Matcha Morning", "Calm ambient, soft bamboo flute, warm pads, gentle chimes, slow pulse, peaceful", 66, "zen ambient flute", "🍵"),
  ("Sketchbook Light", "Soft acoustic guitar and celesta, light shaker, tender and bright, slow steady groove", 78, "acoustic celesta", "✏️"),
  ("Pink Window Waltz", "Gentle slow waltz, piano and soft accordion, warm and nostalgic, light and airy", 84, "gentle waltz", "🌷")]),
 ("Snowy Winter Morning",
  "a warm cozy room on a snowy morning, frosty window with snow falling outside, a knitted blanket, a mug of cocoa, soft fairy lights and a small pine branch",
  "soft snow white, icy blue, warm caramel and cozy red", [
  ("First Snow Piano", "Gentle solo piano, soft felt tone, warm reverb, quiet snowy morning, peaceful and tender, no drums", 68, "winter piano", "❄️"),
  ("Cocoa Steam", "Cozy winter lo-fi, mellow Rhodes, soft sleigh-bell shimmer, vinyl crackle, lazy beat, warm bass", 78, "winter lo-fi", "☕"),
  ("Frosted Glass", "Calm ambient, celesta and music box, soft pads, gentle wind texture, slow and dreamy, no drums", 64, "winter ambient", "🌨️"),
  ("Knitted Blanket", "Warm acoustic guitar and soft cello, gentle brushes, cozy and tender, slow groove", 76, "cozy acoustic", "🧶"),
  ("Fireside Jazz", "Soft jazz trio, warm piano, brushed drums, upright bass, cozy fireside morning, relaxed swing", 82, "cozy jazz trio", "🔥")]),
 ("Lavender Field Morning",
  "a sunlit lavender field at dawn seen from an old stone farmhouse window, a basket of bread and a glass of milk on the sill, soft mist over the hills",
  "lavender purple, soft lilac, warm cream and pale gold", [
  ("Lavender Dawn", "Gentle piano and soft harp, airy pads, calm and hopeful, no drums", 70, "piano and harp", "💜"),
  ("Farmhouse Window", "Warm acoustic guitar, soft accordion, light brushes, rustic and calm, gentle groove", 80, "rustic acoustic", "🏡"),
  ("Honey Bread", "Mellow chillhop, warm Rhodes, soft upright bass, light beat, cozy and sunny", 82, "cozy chillhop", "🍯"),
  ("Hilltop Mist", "Calm ambient, soft strings and flute, slow evolving pads, distant birdsong, peaceful", 64, "ambient strings", "🌄"),
  ("Provence Bossa", "Light slow bossa, nylon guitar, soft clarinet melody, brushed drums, warm bass, relaxed", 86, "gentle bossa", "🌾")]),
]
HEAD = ("Create 5 separate instrumental songs for a 1-hour calm morning music video. No vocals, about 3 minutes each, "
        "soft and gentle energy that stays steady, with no long intro, no outro and no fade-out so each loops cleanly. "
        "One song per description.")
STYLE = ("Premium anime-inspired cozy illustration, soft watercolor texture, warm morning light, gentle bloom and light rays, "
         "airy and low contrast, crisp details, clean composition, peaceful and fresh.")

songs, md, im, yp = [], [], [], []
md += ["# Morning êm dịu — packs M01–M%02d (5 bài/pack)" % len(PACKS), "",
       "Cùng định dạng `batch4/music_packs.md`: 1 pack = 1 phiên mới trên Flow Music. Đặt tên phiên = tên pack, dán nguyên khối rồi gửi.",
       "Id bài: M<pack>-<n>. Tải mp3 + ảnh vào Downloads. Sinh lại file: `python3 -I morning/make_packs.py`.",
       "Nghiên cứu + lý do: MEGABRAIN `ai-video/research/gentle-morning-pack-2026-11.md`.", ""]
im += ["# Google Flow image prompts — Morning (still-loop pipeline)", "",
       "Cùng khung prompt batch4, palette sáng ấm. 1 ảnh/bài, 16:9.", ""]
yp += ["# Morning — nội dung đăng (nháp, chưa có lịch)", "",
       "Studio: Nhạc · Không dành cho trẻ em · Sử dụng AI = Có · Playlist **Morning Vibes ☀️ Calm 1 Hour Instrumentals to Start Your Day** (`shorts/shorts_schedule.md:60`) · thumbnail cùng tên.",
       "Giờ đề xuất: **20:00 (+07)** = 08:00 sáng miền Đông Mỹ (EST).", ""]
for pi, (pack, scene, palette, items) in enumerate(PACKS, 1):
    done = "x" if pi == 1 else " "
    parts = []
    for i, (t, snd, bpm, style, emo) in enumerate(items, 1):
        sid = f"M{pi:02d}-{i}"
        prompt = f"{snd}, instrumental, no vocals, {bpm} bpm"
        parts.append(f"({i}) {t}: {prompt}.")
        songs.append({"id": sid, "pack": pi, "pack_name": pack, "title": t, "bpm": bpm, "prompt": prompt, "scene": scene,
                      "palette": palette, "style": style, "emoji": emo, "subtitle": pack})
        im += [f"## {sid} {t} ({bpm} BPM)", "", "```",
               "A single still illustration for a 1-hour YouTube music video by VIBE MUSIC AI MAKER, 16:9 widescreen, high resolution. "
               f"SCENE: {VIEWS[i - 1].format(s=scene)} Mood: {style}, calm morning. COLOR PALETTE: {palette}. "
               "Soft gradients and gentle natural light; no neon, avoid harsh contrast. COMPOSITION: Wide, calm composition with the main character in the right half and open space on the left. "
               "Keep any windows, lamps, cups and light sources clearly visible and not covered. Keep the bottom 15% of the frame simple and slightly darker (no important details there) because music waves are added later. "
               f"Leave the top-left corner uncluttered for a title. ART STYLE: {STYLE} RESTRICTIONS: No text, no letters on signs, books or screens, "
               "no logos, no watermarks, no audio waves or visualizer, no borders, no frames, no motion blur.", "```", ""]
        sound = snd[0].upper() + snd[1:]
        yp += [f"## {sid} {t}", f"- File: `morning/out/{sid} {t} 1 Hour.mp4` + `… thumbnail.jpg`", "", "**Title**", "```text",
               f"{t} {emo} 1 Hour {style.title()} | {pack} Music for Coffee & Study", "```", "**Description**", "```text",
               f"{t} {emo} 1 hour of gentle {style} for slow, peaceful mornings.", "",
               f"{sound} at {bpm} BPM. Soft, steady energy, no vocals, made to ease you into the day.", "",
               f"🎹 Style: {style} · instrumental", f"⏱️ Tempo: {bpm} BPM", f"🌅 Scene: {scene}", "",
               "☀️ Good for: slow mornings · morning coffee · journaling · study & focus", "",
               "🔔 Subscribe to VIBE MUSIC AI MAKER for more calm, cozy AI-made instrumentals.",
               "👍 Tell us in the comments how your morning is going!",
               "🎵 Music and visuals created with AI by VIBE MUSIC AI MAKER.", "",
               "#morningmusic #calmmusic #studymusic #relaxingmusic #aimusic", "```", "**Tags**", "```text",
               f"{t.lower()}, {style}, {pack.lower()}, morning music, calm morning music, gentle morning music, morning coffee music, "
               f"relaxing music, study music, {bpm} bpm, 1 hour music, ai music", "```", ""]
    md += [f"## [{done}] Pack M{pi:02d} — {pack}", "", "```text", HEAD + " " + " ".join(parts), "```", ""]
    yp += [f"## Mix PM{pi:02d} — {pack}", "```text", f"{pack} ☀️ 1 Hour Mix | Calm Morning Instrumentals to Start Your Day", "```", ""]
yp += ["## Short (20 giây/bài) — M<pack>-<n>-S", "```text", "<Title> <emoji> Calm morning music ☀️ #shorts #morningmusic", "```",
       "Related video = bản 1 giờ của chính bài đó.", ""]
(HERE / "songs.json").write_text(json.dumps(songs, ensure_ascii=False, indent=1))
(HERE / "music_packs.md").write_text("\n".join(md))
(HERE / "image_prompts.md").write_text("\n".join(im))
(HERE / "youtube_posts.md").write_text("\n".join(yp))
print(len(songs), "songs,", len(PACKS), "packs")
for s in songs:
    t = f"{s['title']} {s['emoji']} 1 Hour {s['style'].title()} | {s['pack_name']} Music for Coffee & Study"
    if len(t) > 100:
        print("TITLE TOO LONG", len(t), t)
