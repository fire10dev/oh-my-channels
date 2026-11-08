"""Build the 15 Google Flow video prompts for batch 2 (one per song) -> video_prompts.md + prompts/<id>.txt"""
from pathlib import Path

HEAD = "Create a relaxing 10-second seamless-loop animation for a YouTube AI music channel called VIBE MUSIC AI MAKER."
CAMERA = "CAMERA: Completely static camera. No zoom, no pan, no tilt, no shake, no cuts."
LOOP = ("LOOP REQUIREMENTS: Perfectly seamless loop for an extended 1-hour YouTube music video. Keep character, "
        "objects, lighting and composition identical throughout. All motion moves in smooth cyclic paths and the "
        "final frame matches the first frame as closely as possible, with no jump, flicker or transition.")
RESTRICT = ("RESTRICTIONS: No dialogue, no subtitles, no text, no letters on signs or screens, no logos, no watermarks, "
            "no strobe or flashing lights, no fast animation, no camera movement, no character deformation.")

STYLE = {
    "A": "ART STYLE: Premium anime-inspired digital illustration, vibrant neon and festival lighting, cinematic depth, "
         "subtle bloom, crisp details, clean composition. Energetic but smooth enough for long listening.",
    "B": "ART STYLE: Premium soft anime-inspired digital illustration, bright natural morning light, airy pastel "
         "palette, gentle textures, clean composition, fresh and comforting.",
    "C": "ART STYLE: Premium painterly anime-inspired illustration, moody warm lighting, rich shadows, soft haze, "
         "film-like grain, clean composition, intimate and elegant.",
}

# id, title, bpm, scene, palette, motion, visualizer colours
SONGS = [
    ("A1", "Neon Skyline 2013", 128,
     "A character wearing glowing headphones sits on a rooftop ledge overlooking a futuristic city at night. Far away, a huge festival stage lights the skyline; slow laser beams sweep across the clouds.",
     "electric blue, magenta, violet and white highlights",
     "Laser beams sweep slowly back and forth, city windows twinkle softly, the character's hair and hoodie strings move in a light breeze, stage lights pulse gently in time with a 128 BPM beat."),
    ("A2", "Mainstage Rush", 128,
     "View from a grassy hill toward a giant outdoor festival main stage at night. Silhouettes of a crowd sway with raised hands; large LED screens show abstract geometric shapes. A character with headphones stands in the foreground, seen from behind.",
     "deep purple, cyan, hot pink and golden light",
     "Crowd silhouettes sway in rhythm, confetti drifts slowly through the air, stage light beams rotate gently, LED shapes morph smoothly, all pulsing softly at 128 BPM."),
    ("A3", "Voltage Drive", 128,
     "A sleek retro-futuristic sports car parked on a wet neon-lit city street at night. A character wearing headphones sits in the driver's seat, one hand on the wheel. Neon tubes of abstract shapes glow on the buildings.",
     "electric cyan, neon magenta, chrome and deep navy",
     "Neon tubes hum and glow softly, reflections ripple on the wet asphalt, light drizzle falls, the car's underglow breathes slowly, small electric sparks flicker gently along a neon sign."),
    ("A4", "Midnight Highway", 126,
     "Interior view from the passenger seat of a car cruising on an empty highway at night. The dashboard glows softly; a character with headphones drives calmly. Streetlights and distant city lights glide past through the windshield.",
     "midnight blue, amber streetlight orange, soft teal dashboard glow",
     "Streetlights pass overhead at a steady rhythm, lane markings flow toward the viewer in a repeating cycle, dashboard lights glow gently, the character breathes calmly. Camera fixed inside the car."),
    ("A5", "Summer Anthem Piano", 128,
     "A beach boardwalk at golden sunset with a small festival setup: string lights, palm trees and a glowing stage in the distance. A character with headphones sits on the railing, smiling, facing the sea.",
     "warm sunset orange, coral pink, turquoise sea and golden light",
     "Waves roll in and out, palm leaves sway, string lights twinkle softly, warm stage lights pulse gently at 128 BPM, the character's hair moves in the sea breeze."),
    ("B1", "Sunrise Coffee", 90,
     "A cozy kitchen corner at sunrise. A character with headphones sits by a large window holding a steaming coffee mug; an acoustic guitar leans against the wall and a small piano is beside the window. Soft golden light floods in.",
     "honey gold, warm cream, soft peach and sage green",
     "Steam rises gently from the mug, sunbeams shimmer with floating dust motes, plant leaves on the sill sway slightly, the character breathes calmly."),
    ("B2", "Window Seat Lo-fi", 85,
     "A morning cafe window seat. A character with headphones works on a laptop with a latte beside it, coding calmly. Outside the window, a quiet city street in soft morning light with trees.",
     "warm beige, soft teal, latte brown and morning sky blue",
     "Steam curls from the latte, the character types gently, tree leaves outside sway, a few pedestrians and bicycles pass slowly in the distance in a looping cycle, soft light shimmers on the table."),
    ("B3", "Little Morning Walk", 100,
     "A fresh green park on a bright morning. A character with headphones sits on a wooden bench holding a ukulele, a tote bag beside them. A winding path, flowering bushes and tall trees fill the scene.",
     "fresh leaf green, sky blue, sunny yellow and soft pink blossoms",
     "Leaves and petals drift down slowly, small birds hop on the path, tree branches sway, the character taps a foot gently, sunlight flickers softly through the leaves."),
    ("B4", "Sunny Commute", 100,
     "A window seat on a quiet seaside tram in the morning. A character with headphones looks out the window; outside, a sunny coastal town with white houses, palm trees and the sea glides past.",
     "sea turquoise, white, sunny yellow and soft coral",
     "The coastal scenery slides past the window in a smooth repeating cycle, sunlight flickers across the seat, the character's hair moves slightly, the tram sways very gently."),
    ("B5", "Breakfast Bossa", 95,
     "A sunny breakfast terrace above the Mediterranean sea. A table with croissants, orange juice and coffee; a nylon-string guitar rests on a chair. A character with headphones reads a book, relaxed.",
     "Mediterranean blue, lemon yellow, terracotta and white",
     "Sea glitter sparkles softly, a light breeze moves the tablecloth edge and bougainvillea flowers, steam rises from the coffee, the character turns a page slowly."),
    ("C1", "Whiskey After Midnight", 70,
     "A dim late-night jazz lounge. In the foreground, a glass of whiskey with ice on a polished bar counter. In the background, a saxophonist silhouette on a small stage under a warm spotlight. A character with headphones sits at the bar, eyes closed.",
     "deep amber, whiskey gold, smoky brown and dark burgundy",
     "Soft haze drifts slowly through the spotlight, ice glints in the glass, the saxophonist sways gently, candle flames flicker softly, the character breathes calmly."),
    ("C2", "Red Wine Trio", 92,
     "An elegant wine bar in the evening. A glass of red wine and a candle on a small marble table in the foreground. In the background, a jazz piano trio (piano, upright bass, drums) plays softly under warm lights.",
     "wine red, warm gold, dark wood brown and soft cream",
     "Candle flame flickers softly, the wine surface shimmers, the pianist's hands and the bassist sway gently in a looping motion, warm bokeh lights glow softly."),
    ("C3", "Rainy Neon Lounge", 80,
     "A window booth in a jazz lounge on a rainy night. Rain streaks run down the glass; blurred neon city lights glow outside. A muted trumpet and a cocktail rest on the table; a character with headphones gazes out the window.",
     "rain blue, neon pink, teal and warm lamp amber",
     "Raindrops slide down the window in repeating paths, neon bokeh glows softly, steam-like haze drifts, the table lamp glows steadily, the character breathes calmly."),
    ("C4", "Speakeasy Blue", 66,
     "A hidden 1920s-style speakeasy bathed in blue haze. A Hammond organ and a guitarist silhouette on a tiny stage; leather chairs and a whiskey glass in the foreground. A character with headphones leans back in a chair.",
     "deep blue, smoky teal, brass gold and dark leather brown",
     "Blue haze swirls slowly, stage light glints on the organ, the guitarist sways gently, the whiskey glass catches soft reflections, the character breathes calmly."),
    ("C5", "Terrace Bossa Jazz", 100,
     "A rooftop terrace at sunset overlooking a city skyline. A glass of white wine and a nylon-string guitar beside a lounge chair; string lights overhead. A character with headphones relaxes in the chair.",
     "sunset peach, lavender sky, warm gold and soft green plants",
     "String lights glow softly, potted plants sway in a light breeze, the sky's colours shift very slightly and return, city lights twinkle, the character breathes calmly."),
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
    md = ["# Video prompts — batch 2 (15 songs)\n"]
    for sid, title, bpm, scene, palette, motion in SONGS:
        p = build(sid, title, bpm, scene, palette, motion)
        (out / "prompts" / f"{sid}.txt").write_text(p)
        md.append(f"## {sid} {title} ({bpm} BPM)\n\n```\n{p}\n```\n")
    (out / "video_prompts.md").write_text("\n".join(md))
    print(f"{len(SONGS)} prompts, max {max(len(build(*s)) for s in SONGS)} chars")


if __name__ == "__main__":
    main()
