"""SONGS/STYLE for ../make_image_prompts.py — 100 batch-4 songs; 5 framings per pack so a pack's images differ."""
import json
from pathlib import Path

STYLE = {"G": "ART STYLE: Premium anime-inspired retro-futuristic illustration, synthwave neon glow, cinematic depth, "
              "subtle bloom and scanline softness, crisp details, clean composition, cool and focused."}
SHOTS = [
    "Wide establishing view: {scene}. A character with headphones sits at a desk, seen from the side.",
    "Over-the-shoulder view from behind a character with headphones, looking past them at the scene: {scene}.",
    "Cozy medium view of a cluttered desk corner with a glowing laptop, a mug and small gadgets; in the background {scene}.",
    "Low-angle cinematic view: {scene}. A character with headphones leans back and thinks, lit by screen glow.",
    "Calm late-night view through a large window: {scene}. A character with headphones types quietly, a small cat or plant nearby.",
]
SONGS = []
for s in json.loads((Path(__file__).parent / "songs.json").read_text()):
    n = int(s["id"].split("-")[1])
    mood = s["prompt"].split(",")[0]
    scene = SHOTS[n - 1].format(scene=s["scene"]) + f" Mood: {mood.lower()}."
    SONGS.append((s["id"], s["title"], s["bpm"], scene, s["palette"], ""))
