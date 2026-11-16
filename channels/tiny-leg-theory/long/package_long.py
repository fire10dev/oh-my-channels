"""Thumbnails (1280x720) + upload metadata CSV for every long in final/.  tts-vi/.venv/bin/python long/package_long.py (needs Pillow)"""
import csv, json, re, pathlib
from PIL import Image, ImageDraw, ImageFont

R = pathlib.Path(__file__).resolve().parent
AB = R.parent
THUMB = {  # big thumbnail words (2 lines max)
    "L1-en": "WHY YOU\nPUT IT OFF", "L1-vi": "VÌ SAO\nCỨ ĐỂ MAI?",
    "L2-en": "YOUR PHONE\nWINS?", "L2-vi": "ĐIỆN THOẠI\nTHẮNG BẠN?",
    "L3-en": "HABITS\nTHAT STICK", "L3-vi": "THÓI QUEN\nBỀN LÂU",
    "L4-en": "STUDY\nSMARTER", "L4-vi": "HỌC LÀ\nNHỚ LÂU",
    "L5-en": "MONEY\nBRAIN TRAPS", "L5-vi": "BẪY TIỀN\nCỦA NÃO",
    "L6-en": "PEOPLE ARE\nCONFUSING", "L6-vi": "NGƯỜI KHÁC\nKHÓ HIỂU?",
    "L7-en": "STOP\nOVERTHINKING", "L7-vi": "THÔI\nNGHĨ MÃI",
}
POSE = {"L1": ("panic", "point_viewer"), "L2": ("phone_grin", "arms_crossed_no"), "L3": ("small_step", "celebrate"),
        "L4": ("reading", "point_viewer"), "L5": ("wallet_worry", "arms_crossed_no"), "L6": ("nervous_wave", "point_viewer"),
        "L7": ("worried_heart", "meditating")}
TAGS = {"en": "#psychology #selfimprovement #habits #productivity #tinylegtheory",
        "vi": "#tamly #thoiquen #phattrienbanthan #lythuyetchanque"}


def art(who, pose):
    d = AB / "b1-v3" / ("art-A" if who == "pen" else "art-J")
    return Image.open(next(d.glob(f"*_{pose}.png"))).convert("RGBA")


def two_lines(s):  # batch 3+: thumbnail words = "thumb" field, else the intro's on-screen hook
    t = s.get("thumb") or s["chapters"][0]["lines"][0]["text"]
    w = t.split(); k = min(range(1, max(len(w), 2)), key=lambda i: abs(len(" ".join(w[:i])) - len(" ".join(w[i:]))))
    return " ".join(w[:k]) + "\n" + " ".join(w[k:]) if len(w) > 1 else t


def thumb(lid, dst):
    L, lang = lid.split("-")
    im = Image.new("RGB", (1280, 720), "#FBF7EE")
    for who, pose, cx in (("pen", POSE.get(L, ("think", "point_viewer"))[0], 830), ("buff", POSE.get(L, ("think", "point_viewer"))[1], 1085)):
        a = art(who, pose); a.thumbnail((420 if who == "buff" else 360, 640))
        im.paste(a, (cx - a.width // 2, 700 - a.height), a)
    font = str(AB / ("shorts/fonts/PatrickHand-Regular.ttf" if lang == "vi" else "b1-v3/J/chalkboard-1.ttf"))
    d = ImageDraw.Draw(im); text = THUMB.get(lid) or two_lines(json.load(open(R / "scripts" / f"{lid}.json"))); size = 150
    while size > 60:
        f = ImageFont.truetype(font, size)
        if max(d.textlength(t, font=f) for t in text.split("\n")) <= 640: break
        size -= 6
    d.multiline_text((50, 360), text, font=f, fill="#1E1E1E", anchor="lm", spacing=10, stroke_width=3, stroke_fill="#1E1E1E")
    im.save(dst, quality=92)


def main():
    rows = {"en": [], "vi": []}
    for f in sorted(R.glob("final/L*-*.mp4")):
        lid = re.match(r"(L\d-(?:en|vi))", f.name).group(1); lang = lid[-2:]
        s = json.load(open(R / "scripts" / f"{lid}.json"))
        tp = R / "final" / f"{lid}.thumb.jpg"; thumb(lid, tp)
        ch = [re.sub(r"^(\d+:\d\d) (\d+\.\s*)?", r"\1 ", l) for l in (R / "final" / f"{lid}.chapters.txt").read_text().splitlines()]
        ch = [re.sub(r"^(\d+:\d\d) (\w)", lambda m: f"{m.group(1)} {m.group(2).upper()}", l) for l in ch]
        if lang == "vi": ch = [l.replace(" Intro", " Mở đầu").replace(" Recap", " Tóm tắt") for l in ch]
        note = ("Giải thích đơn giản hoá, không phải lời khuyên y tế hay chuyên môn." if lang == "vi"
                else "Simplified explainer, not medical or professional advice.")
        head = "Mục lục:" if lang == "vi" else "Chapters:"
        desc = f"{s['description']}\n\n{head}\n" + "\n".join(ch) + f"\n\n{note}\n\n{TAGS[lang]}"
        rows[lang].append({"id": lid, "title": s["title"], "description": desc,
                           "file": f"long/final/{f.name}", "thumbnail": f"long/final/{tp.name}"})
    for lang in rows:
        with open(R / f"upload-metadata-long-{lang}.csv", "w", newline="") as fh:
            w = csv.DictWriter(fh, ["id", "title", "description", "file", "thumbnail"]); w.writeheader(); w.writerows(rows[lang])
        print(lang, len(rows[lang]), "rows")


if __name__ == "__main__":
    main()
