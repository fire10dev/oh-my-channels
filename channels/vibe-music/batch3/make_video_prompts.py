"""Build the 15 Google Flow video prompts for batch 3 "Coding Focus" (one per song) -> video_prompts.md + prompts/<id>.txt"""
from pathlib import Path

HEAD = "Create a relaxing 10-second seamless-loop animation for a YouTube AI music channel called VIBE MUSIC AI MAKER."
CAMERA = "CAMERA: Completely static camera. No zoom, no pan, no tilt, no shake, no cuts."
LOOP = ("LOOP REQUIREMENTS: Perfectly seamless loop for an extended 1-hour YouTube music video. Keep character, "
        "objects, lighting and composition identical throughout. All motion moves in smooth cyclic paths and the "
        "final frame matches the first frame as closely as possible, with no jump, flicker or transition.")
# Screens in coding scenes must not show readable code: AI text renders as gibberish and looks fake.
RESTRICT = ("RESTRICTIONS: No dialogue, no subtitles, no text, no readable code, no letters on signs or screens "
            "(monitors show only soft abstract colored lines and shapes), no logos, no watermarks, no strobe or "
            "flashing lights, no fast animation, no camera movement, no character deformation.")

STYLE = {
    "D": "ART STYLE: Premium cozy lo-fi anime-inspired illustration, warm lamp light, soft grain, gentle textures, "
         "clean composition, calm and comforting.",
    "E": "ART STYLE: Premium anime-inspired retro-futuristic illustration, synthwave neon glow, cinematic depth, "
         "subtle bloom and scanline softness, crisp details, clean composition, cool and focused.",
    "F": "ART STYLE: Premium painterly anime-inspired illustration, soft diffused natural light, muted palette, "
         "airy atmosphere, minimal clean composition, serene and spacious.",
}

# id, title, bpm, scene, palette, motion
SONGS = [
    ("D1", "Midnight Commit", 78,
     "A cozy apartment desk at night. A character with headphones codes on an ultrawide monitor glowing with soft abstract colored lines. A cat sleeps beside the keyboard, a desk lamp glows warmly, and city lights sparkle through the window.",
     "deep navy, warm lamp amber, soft lavender and monitor teal",
     "The character types calmly, the cat breathes slowly with its tail twitching, steam rises from a mug, city lights twinkle, a small plant leaf sways gently."),
    ("D2", "Rubber Duck Debug", 82,
     "A bright bedroom desk in late-afternoon golden light. A character with headphones leans toward a laptop, thinking, with a small yellow rubber duck next to the keyboard. Potted plants, sticky notes without writing and a corkboard fill the wall.",
     "golden afternoon yellow, soft mint, peach and warm wood brown",
     "Sunbeams shimmer softly with floating dust motes, the character taps a pencil and nods gently, plant leaves sway in a light breeze from the window, the curtain moves slowly."),
    ("D3", "Rainy Refactor", 72,
     "A wooden desk by a large rain-streaked window in the evening. A character with headphones works on a laptop with a cup of tea; a warm desk lamp lights the room while the blue city outside is blurred by rain.",
     "rain blue, warm tea amber, soft grey and muted green",
     "Raindrops slide down the window in repeating paths, steam curls from the tea, the lamp glow breathes softly, the character types slowly, blurred lights outside shimmer."),
    ("D4", "Coffee & Compile", 88,
     "A sunny industrial co-working loft with tall windows. A character with headphones codes on a laptop at a long wooden table; an espresso machine and hanging plants are in the background.",
     "latte brown, sunny cream, sage green and soft sky blue",
     "Steam rises from the espresso machine and the coffee cup, hanging plants sway gently, sunlight patches drift slowly across the table, the character types and sips coffee in a calm cycle."),
    ("D5", "Late Night Deploy", 75,
     "A cozy attic room at night with a sloped ceiling and a skylight showing the moon. A character with headphones sits at a desk with two monitors glowing with soft abstract shapes, warm string lights along the beams.",
     "midnight purple, moonlight silver, warm string-light gold and soft pink",
     "String lights twinkle gently, the moon glows through the skylight with slowly drifting clouds, the character types steadily, a small rocket-shaped lamp pulses softly."),
    ("E1", "Terminal Glow", 100,
     "A dark cyberpunk apartment at night. A character in a hoodie with glowing headphones sits in front of three monitors showing soft abstract green and cyan light patterns. Through the window, neon signs without letters glow on rainy skyscrapers.",
     "terminal green, electric cyan, deep black-blue and neon magenta",
     "Monitor light patterns scroll smoothly in abstract shapes, neon signs outside hum and glow, light rain falls past the window, the character types with steady rhythm, cables glow faintly."),
    ("E2", "Neon Stack", 105,
     "A high-rise office desk at night overlooking a futuristic neon city grid. A character with headphones codes on a sleek laptop; floating holographic abstract blocks stack and rotate above the desk.",
     "hot pink, electric purple, cyan and sunset orange",
     "Holographic blocks rotate slowly and stack in a repeating cycle, city lights pulse softly in rhythm, flying vehicles glide far away on fixed paths, the character types confidently."),
    ("E3", "Cyber Grid", 95,
     "A futuristic workstation in front of a giant window showing a retro synthwave landscape: a glowing wireframe grid floor, neon mountains and a striped setting sun. A character with headphones works at a glowing keyboard.",
     "neon violet, sunset magenta, grid cyan and deep indigo",
     "The wireframe grid flows toward the horizon in a seamless repeating cycle, the sun's stripes shimmer softly, keyboard keys glow gently, the character nods to the beat."),
    ("E4", "Night Shift Hacker", 98,
     "A booth in a retro 24-hour diner at night. A character with headphones codes on a laptop with a milkshake and fries on the table. Outside the window, neon lights without letters reflect on a wet street.",
     "diner red, teal neon, warm chrome highlights and night blue",
     "Neon reflections ripple on the wet street, a ceiling fan turns slowly, the laptop glow flickers softly, the character types and sways slightly, cars' light trails pass in a steady loop."),
    ("E5", "Overclocked Dreams", 90,
     "An observation deck on a space station. A character with headphones floats slightly in a chair while coding on a transparent holographic laptop; the Earth and stars glow through a huge curved window.",
     "deep space blue, aurora teal, soft violet and starlight white",
     "Stars twinkle softly, the Earth rotates very slowly, aurora light ripples along the horizon, the character's hair floats gently in zero gravity, holographic shapes pulse calmly."),
    ("F1", "Flow State", 70,
     "A minimalist studio with a floor-to-ceiling window overlooking foggy mountains at dawn. A character with headphones sits at a clean white desk with a laptop and a single plant.",
     "fog white, soft sage, pale blue and warm dawn peach",
     "Fog drifts slowly across the mountains, the dawn light breathes softly, the plant sways barely, the character types calmly with slow breathing."),
    ("F2", "Quiet Server Room", 60,
     "A cozy corner inside a calm server room. Rows of server racks with tiny soft blue indicator lights fade into the background; a character with headphones sits in a beanbag with a laptop and a warm mug.",
     "cool server blue, soft teal, warm mug orange and dark slate",
     "Tiny indicator lights blink slowly and softly in calm patterns, cool air haze drifts, steam rises from the mug, the character breathes slowly while typing."),
    ("F3", "Deep Work Rain", 65,
     "A wooden cabin desk in a rainy pine forest. A character with headphones works on a laptop beside a crackling fireplace; rain falls on the big window and the forest is misty.",
     "forest green, fire amber, misty grey and warm wood",
     "Rain falls steadily on the window, fire flames flicker gently in the fireplace, mist drifts between the pines, the character turns a page and types slowly."),
    ("F4", "Binary Forest", 80,
     "A desk inside a glass greenhouse full of lush plants at dusk. A character with headphones codes on a laptop while fireflies glow among ferns and hanging vines.",
     "lush green, firefly yellow, dusk violet and soft teal",
     "Fireflies drift in slow looping paths, leaves and vines sway gently, a small water drip falls into a pot, the character types calmly."),
    ("F5", "Silent Algorithm", 76,
     "A traditional Japanese tatami room at night with sliding shoji doors open to a snowy garden. A character with headphones codes on a laptop at a low table with a cup of green tea and a paper lantern.",
     "snow white, ink blue, lantern warm orange and matcha green",
     "Snow falls slowly in the garden, the lantern glow breathes softly, steam rises from the tea, a bamboo branch sways lightly, the character types with quiet focus."),
]


def build(sid, title, bpm, scene, palette, motion):
    cat = sid[0]
    return " ".join([
        HEAD,
        f"SCENE: {scene}",
        f"COLOR PALETTE: {palette}. Soft gradients and a subtle ambient glow; avoid harsh contrast.",
        f"MOTION: Smooth, continuous movement that suits an instrumental track at {bpm} BPM. {motion}",
        f"MUSIC VISUALIZATION: Very subtle, smooth flowing audio waves along the bottom edge, softly glowing in {palette}. Minimal and unobtrusive.",
        CAMERA, LOOP, STYLE[cat], RESTRICT,
    ])


def main():
    out = Path(__file__).parent
    (out / "prompts").mkdir(exist_ok=True)
    md = ["# Video prompts — batch 3 Coding Focus (15 songs)\n"]
    for sid, title, bpm, scene, palette, motion in SONGS:
        p = build(sid, title, bpm, scene, palette, motion)
        (out / "prompts" / f"{sid}.txt").write_text(p)
        md.append(f"## {sid} {title} ({bpm} BPM)\n\n```\n{p}\n```\n")
    (out / "video_prompts.md").write_text("\n".join(md))
    print(f"{len(SONGS)} prompts, max {max(len(build(*s)) for s in SONGS)} chars")


if __name__ == "__main__":
    main()
