"""Build YouTube channel art (avatar, banner, watermark) for EN + VI channels.

Run:  uv run --with pillow python shorts/channel/make_channel_art.py
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]          # stickman-ab/
OUT = Path(__file__).resolve().parent
FONT = ROOT / "shorts/fonts/PatrickHand-Regular.ttf"
LOGO = ROOT / "shorts/logo/logo_L1.png"
BUFF = ROOT / "b1-v3/art-J"
PEN = ROOT / "b1-v3/art-A"

CREAM = (252, 240, 215)
INK = (34, 30, 28)
ORANGE = (232, 140, 52)
SOFT = (110, 98, 88)

W, H = 2560, 1440
SAFE_W, SAFE_H = 1546, 423
SX, SY = (W - SAFE_W) // 2, (H - SAFE_H) // 2      # 507, 508

CHANNELS = {
    "en": dict(title="Tiny Leg Theory",
               tag="Why your brain does that. Explained by stick figures."),
    "vi": dict(title="Lý Thuyết Chân Que",
               tag="Sao não mình lại thế? Người que giải thích trong 1 phút."),
}


def load(p, h):
    im = Image.open(p).convert("RGBA")
    im = im.crop(im.getbbox())
    return im.resize((round(im.width * h / im.height), h), Image.LANCZOS)


def fit_font(draw, text, max_w, size):
    while size > 20:
        f = ImageFont.truetype(str(FONT), size)
        if draw.textlength(text, font=f) <= max_w:
            return f
        size -= 4
    return f


def banner(lang, cfg, guides=False):
    im = Image.new("RGB", (W, H), CREAM)
    d = ImageDraw.Draw(im)

    # soft orange sun behind the title (echoes the avatar's orange circle)
    cx, cy = W // 2, H // 2
    d.ellipse((cx - 300, cy - 300, cx + 300, cy + 300), fill=(247, 226, 190))

    # props outside the safe area: visible on desktop/TV, cropped on mobile
    props = [(BUFF / "q09_alarm_clock.png", 180, (130, 590)),
             (BUFF / "q03_smartphone_glow.png", 190, (330, 725)),
             (BUFF / "q10_brain.png", 170, (2240, 590)),
             (BUFF / "q16_lightbulb.png", 180, (2120, 735)),
             (BUFF / "q05_hourglass.png", 150, (40, 765)),
             (BUFF / "q15_target.png", 150, (2380, 765))]
    for p, h, (x, y) in props:
        pr = load(p, h)
        a = pr.getchannel("A").point(lambda v: v * 0.55)
        pr.putalpha(a)
        im.paste(pr, (x, y), pr)

    # mascots inside the safe area
    buff = load(BUFF / "t14_point_viewer.png", 400)
    pen = load(PEN / "a12_think.png", 400)
    im.paste(buff, (SX + 10, SY + SAFE_H - buff.height - 6), buff)
    im.paste(pen, (SX + SAFE_W - pen.width - 30, SY + SAFE_H - pen.height - 6), pen)

    # text block between mascots
    left = SX + 10 + buff.width + 30
    right = SX + SAFE_W - pen.width - 60
    tw = right - left
    tcx = (left + right) // 2
    ft = fit_font(d, cfg["title"], tw, 170)
    fs = fit_font(d, cfg["tag"], tw, 60)
    d.text((tcx, cy - 40), cfg["title"], font=ft, fill=INK, anchor="ms")
    d.line((tcx - 200, cy + 5, tcx + 200, cy + 5), fill=ORANGE, width=8)
    # wrap tagline into max 2 lines
    words, lines, cur = cfg["tag"].split(), [], ""
    for w_ in words:
        t = (cur + " " + w_).strip()
        if d.textlength(t, font=fs) > tw and cur:
            lines.append(cur); cur = w_
        else:
            cur = t
    lines.append(cur)
    for i, ln in enumerate(lines):
        d.text((tcx, cy + 75 + i * 66), ln, font=fs, fill=SOFT, anchor="ms")

    out = OUT / f"banner_{lang}_2560x1440.png"
    im.save(out, optimize=True)
    if guides:
        g = im.copy(); gd = ImageDraw.Draw(g)
        gd.rectangle((SX, SY, SX + SAFE_W, SY + SAFE_H), outline=(255, 0, 0), width=4)
        gd.rectangle((0, SY, W, SY + SAFE_H), outline=(0, 120, 255), width=4)
        g.resize((1280, 720)).save(OUT / f"banner_{lang}_guides_preview.png")
    return out


def avatar():
    im = Image.open(LOGO).convert("RGB").resize((800, 800), Image.LANCZOS)
    im.save(OUT / "avatar_800.png", optimize=True)


def watermark():
    im = Image.open(LOGO).convert("RGBA").resize((600, 600), Image.LANCZOS)
    mask = Image.new("L", (600, 600), 0)
    ImageDraw.Draw(mask).ellipse((4, 4, 596, 596), fill=255)
    im.putalpha(mask)
    im.resize((150, 150), Image.LANCZOS).save(OUT / "watermark_150.png", optimize=True)


if __name__ == "__main__":
    avatar()
    watermark()
    for lang, cfg in CHANNELS.items():
        print(banner(lang, cfg, guides=True))
