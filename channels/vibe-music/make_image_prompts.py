"""make_image_prompts.py <batch_dir>
Turns a batch's video-prompt data (SONGS + STYLE in <batch_dir>/make_video_prompts.py) into Google Flow
*image* prompts for the still-loop pipeline -> <batch_dir>/image_prompts.md + image_prompts/<id>.txt.
Motion and on-screen waves are left out: Remotion (shorts/src/StillLoop.tsx) adds them.
"""
import importlib.util
import sys
from pathlib import Path

HEAD = "A single still illustration for a 1-hour YouTube music video by VIBE MUSIC AI MAKER, 16:9 widescreen, high resolution."
# Remotion animates these, so ask Flow for clear, separate areas it can place effects on.
LAYOUT = ("COMPOSITION: Wide, calm composition with the main character in the right half and open space on the left. "
          "Keep any windows, lamps, cups and light sources clearly visible and not covered. "
          "Keep the bottom 15% of the frame simple and darker (no important details there) because music waves are added later. "
          "Leave the top-left corner uncluttered for a title.")
RESTRICT = ("RESTRICTIONS: No text, no readable code, no letters on signs or screens (screens show only soft abstract colored "
            "lines and shapes), no logos, no watermarks, no audio waves or visualizer, no borders, no frames, no motion blur.")


def load(batch: Path):
    spec = importlib.util.spec_from_file_location("vp", batch / "make_video_prompts.py")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.SONGS, mod.STYLE


def build(scene, palette, style):
    return " ".join([
        HEAD,
        f"SCENE: {scene}",
        f"COLOR PALETTE: {palette}. Soft gradients and gentle ambient light; avoid harsh contrast.",
        LAYOUT,
        style,
        RESTRICT,
    ])


def main():
    batch = Path(sys.argv[1]).resolve()
    songs, style = load(batch)
    (batch / "image_prompts").mkdir(exist_ok=True)
    md = [f"# Flow image prompts — {batch.name} (still-loop pipeline)\n"]
    for sid, title, bpm, scene, palette, _motion in songs:
        p = build(scene, palette, style[sid[0]])
        (batch / "image_prompts" / f"{sid}.txt").write_text(p)
        md.append(f"## {sid} {title} ({bpm} BPM)\n\n```\n{p}\n```\n")
    (batch / "image_prompts.md").write_text("\n".join(md))
    print(f"{len(songs)} image prompts -> {batch / 'image_prompts.md'}")


if __name__ == "__main__":
    main()
