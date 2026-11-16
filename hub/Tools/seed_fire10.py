#!/usr/bin/env python3
"""Seed / refresh the YT Hub DB from what FIRE10 already has on disk. Safe to re-run:
rows are upserted by code and a stage never goes backwards.

  python3 Tools/seed_fire10.py [--db PATH]

Sources: inside-x/scripts (IX*.md publishing blocks, SHORTS-*.md, meta/*.json),
stickman-ab upload-metadata CSVs, and the URLs already published (from document/ notes).
"""
import argparse, json, re
from datetime import datetime
from pathlib import Path

import ythub
from ythub import fact, import_csv, set_video

ROOT = Path(__file__).resolve().parents[2]          # oh-my-channels
LEGACY = ROOT.parent                                 # FIRE10.DEV/REPO: old per-channel folders until moved
DOC = LEGACY / "document"                            # MEGABRAIN notes (symlink)


def _where(new, old):
    """A channel lives in channels/<slug> once moved, in its old folder until then."""
    return LEGACY / old if (LEGACY / old).exists() else ROOT / "channels" / new


IX = _where("off-limits-life", "inside-x")
STICK = _where("tiny-leg-theory", "stickman-ab")

OLL, TLT, LTCQ, RAE = "Off Limits Life", "Tiny Leg Theory", "Lý Thuyết Chân Que", "Rice and Empires"
CHANNELS = [
    (OLL, "@OffLimitsLife", "en"),
    (TLT, "@TinyLegTheory", "en"),
    (LTCQ, "@LyThuyetChanQue", "vi"),
    (RAE, "@RiceAndEmpires", "en"),
    ("VibeMusicMaker", "@Vibe.MusicMaker", "en"),
]

# Published so far (document/STATE.md + ai-video research notes, 2026-11-16).
LONG_URLS = {
    "IX001": "https://youtu.be/pX1CrKt3sYA", "IX002": "https://youtu.be/XDQW_jIndUA",
    "IX003": "https://youtu.be/g6ZwWRwhnjQ", "IX004": "https://youtu.be/F2GKDJ-aBiE",
    "IX005": "https://youtu.be/sDGshnNtnSM",
}
SHORT_URLS = {
    "sx-ix003-cabin": "https://youtube.com/shorts/ZrpsGpqR0V8",
    "sx-ix003-noday": "https://youtube.com/shorts/zwtrl0rT8dQ",
    "sx-ix004-huet": "https://youtube.com/shorts/l2UzaVGelZg",
    "sx-ix004-cabin": "https://youtube.com/shorts/JoTsQvCXS_0",
    "sx-ix005-voice": "https://youtube.com/shorts/Ot0W2djjJUE",
    "sx-ix005-lemons": "https://youtube.com/shorts/9gBTfghV5c4",
}
STICK_URLS = {
    TLT: {"s01": "https://youtube.com/shorts/QMERcvzxOnY", "s02": "https://youtube.com/shorts/8sHyK2s4DOI"},
    LTCQ: {
        "s01vi": "https://youtube.com/shorts/UT3Rb1rbE1g", "s02vi": "https://youtube.com/shorts/GmQ7YW5RpYs",
        "s03vi": "https://youtube.com/shorts/A6tRKNcknfU", "s04vi": "https://youtube.com/shorts/lc3uFu_aTRQ",
        "s05vi": "https://youtube.com/shorts/_QWxPH4XEf8", "s06vi": "https://youtube.com/shorts/8ebT0E058G4",
        "s07vi": "https://youtube.com/shorts/wMzIjHAt3BU", "s08vi": "https://youtube.com/shorts/5me9ATtaEpo",
    },
}
RAE_REPOS = [ROOT / "channels" / "rice-and-empires"]  # L005/L006 work lives on branches rice/long-L00N
# Not rendered and no link yet: how far each long got (HANDOFF.md of each checkout, 2026-11-16).
RAE_STAGE = {"L006": "assets"}
# Links on lines that don't name the code (HANDOFF.md:22 "PUBLIC https://youtu.be/r3jRw2oJc18" under L007).
RAE_URLS = {"L007": "https://youtu.be/r3jRw2oJc18",
            "L001": "https://youtu.be/fZFcYTAF4uA"}  # rice/video-long-001 HANDOFF.md:80


def field(text, name):
    m = re.search(rf"\*\*{name}:\*\*\s*(.+)", text)
    return m.group(1).strip() if m else ""


def fenced_after(text, marker):
    i = text.find(marker)
    m = re.search(r"```\n(.*?)\n```", text[i:], re.S) if i >= 0 else None
    return m.group(1).strip() if m else ""


def stage_for(url, file):
    return "published" if url else "ready" if file and Path(file).exists() else "render"


def fill_links(text):
    return re.sub(r"<(IX\d{3}) link>", lambda m: LONG_URLS.get(m.group(1), m.group(0)), text)


def seed_off_limits(con):
    n = 0
    meta = {p.stem: json.loads(p.read_text()) for p in (IX / "scripts/meta").glob("IX*.json")}
    for md in sorted((IX / "scripts").glob("IX[0-9][0-9][0-9]-*.md")):
        code, slug = md.stem[:5], md.stem[6:]
        text = md.read_text()
        up = IX / "out/upload"
        file = up / ("3-video-IX001.mp4" if code == "IX001" else f"{code}-{slug}.mp4")
        thumb = up / ("4-thumbnail-IX001.jpg" if code == "IX001" else f"Thumb-{code}.jpg")
        m = meta.get(code, {})
        url = LONG_URLS.get(code, "")
        set_video(con, OLL, code, kind="long", keep_higher=True, stage=stage_for(url, file),
                  title=field(text, "Title") or m.get("title", ""), tags=field(text, "Tags") or m.get("tags", ""),
                  description=fenced_after(text, "**Description:**"), pinned_comment=m.get("comment", ""),
                  url=url, file=str(file) if file.exists() else "", thumbnail=str(thumb) if thumb.exists() else "",
                  script=str(md))
        n += 1
        for sx in m.get("shorts", []):  # IX007+: shorts only listed in meta json
            scode = sx[0]
            sfile = up / f"Short-{scode}.mp4"
            set_video(con, OLL, scode, kind="short", keep_higher=True, stage=stage_for("", sfile), title=f"{sx[1]} #shorts",
                      file=str(sfile) if sfile.exists() else "", linked_url=url, notes=f"Related video = {code}")
            n += 1

    for md in sorted((IX / "scripts").glob("SHORTS-*.md")):
        for block in re.split(r"\n(?=## \d+\. )", md.read_text())[1:]:
            head = block.splitlines()[0]
            scode = re.search(r"(sx-ix\d{3}-[\w-]+)", head).group(1)
            long_code = "IX" + scode[5:8]
            url = SHORT_URLS.get(scode) or (re.search(r"https://youtube\.com/shorts/[\w-]{11}", head) or [""])[0]
            sfile = IX / "out/upload" / f"Short-{scode}.mp4"
            set_video(con, OLL, scode, kind="short", keep_higher=True, stage=stage_for(url, sfile),
                      title=field(block, "Title"), tags=field(block, "Tags"),
                      description=fill_links(fenced_after(block, "```")) if "```" in block else "",
                      url=url, linked_url=LONG_URLS.get(long_code, ""), file=str(sfile) if sfile.exists() else "",
                      script=str(md), notes=f"Related video = {long_code}")
            n += 1
    return n


def seed_stickman(con):
    out = []
    for name, suffix in ((TLT, ""), (LTCQ, "-vi")):
        for f in ("upload-metadata", "upload-metadata-batch2", "upload-metadata-batch3"):
            csv = STICK / "shorts" / f"{f}{suffix}.csv"
            if csv.exists():
                out.append((csv.name, import_csv(con, csv, name, "short")))
        csv = STICK / "long" / f"upload-metadata-long{suffix or '-en'}.csv"
        if csv.exists():
            out.append((csv.name, import_csv(con, csv, name, "long")))
        for code, url in STICK_URLS[name].items():
            set_video(con, name, code, stage="published", url=url)
    return out


def rae_urls():
    """Code → link from every HANDOFF.md and the yt-* research notes (tables and prose)."""
    urls = dict(RAE_URLS)
    pat = re.compile(r"\b([SL]0\d{2})\b[^\n]*?(https://(?:youtu\.be|youtube\.com/shorts)/[\w-]{11})")
    files = [r / "HANDOFF.md" for r in RAE_REPOS] + sorted((DOC / "ai-video/research").glob("yt-*.md"))
    for f in files:
        if f.exists():
            for code, url in pat.findall(f.read_text()):
                urls.setdefault(code, url)
    return urls


def rae_publishing(text):
    """Title / Description from a script's '## Publishing' section."""
    i = text.find("## Publishing")
    sec = text[i:] if i >= 0 else ""
    m = re.search(r"Title[^:\n]*:\s*\*\*(.+?)\*\*", sec)
    title = m.group(1).strip() if m else ""
    # quoted ("…" ending a line) or fenced (```…```)
    m = re.search(r'Description[^:\n]*:\s*(?:"(.*?)"[ \t]*$|```\w*\n(.*?)\n```)', sec, re.S | re.M)
    desc = (m.group(1) or m.group(2) or "").strip() if m else ""
    if m and m.group(1):  # quoted text is hard-wrapped markdown: rejoin lines that end mid-sentence
        desc = re.sub(r"(?<![.!?)\"\n])\n(?=[^\s\d#])", " ", desc)  # keep blank lines, chapters, tags
    upload = re.search(r"`shorts/out/([\w.-]+\.mp4)`", sec)  # the cut the script says to upload
    return title, desc, (upload.group(1) if upload else "")


def rae_render(repo, code):
    """Newest final render / thumbnail in shorts/out (skips raw and sample cuts)."""
    out = repo / "shorts/out"
    vids = [f for f in out.glob(f"{code}-*.mp4") if not re.search(r"-(raw|sample)", f.name)] if out.exists() else []
    vid = max(vids, key=lambda f: f.stat().st_mtime) if vids else None
    thumb = out / f"{code}-thumb.jpg"
    return (str(vid) if vid else ""), (str(thumb) if thumb.exists() else "")


def seed_rice(con):
    urls = rae_urls()
    scripts = {}
    for repo in RAE_REPOS:
        own = re.search(r"-(L\d{3})$", repo.name)  # a worktree only owns its own video
        for md in sorted((repo / "scripts").glob("[SL]0[0-9][0-9]-*.md")):
            code = md.name[:4]
            if (own and code != own.group(1)) or (not own and code in scripts):
                continue
            scripts[code] = (repo, md)
    for code, (repo, md) in sorted(scripts.items()):
        text = md.read_text()
        title, desc, upload = rae_publishing(text)
        if not title:  # fall back to the H1 without the "(Short 9:16 …)" tail
            h1 = text.splitlines()[0]
            title = re.sub(r"\s*\((?:Short|long)[^)]*\)\s*$", "", h1.split("—", 1)[-1]).strip()
        file, thumb = rae_render(repo, code)
        if upload and (repo / "shorts/out" / upload).exists():
            file = str(repo / "shorts/out" / upload)
        url = urls.get(code, "")
        stage = "published" if url else "ready" if file else RAE_STAGE.get(code, "script")
        status = re.search(r"^Status:\s*(.+)$", text, re.M)
        set_video(con, RAE, code, kind="short" if code[0] == "S" else "long", keep_higher=True, stage=stage,
                  title=title, description=desc, url=url, file=file, thumbnail=thumb, script=str(md),
                  notes=status.group(1).replace("**", "").strip() if status else "")
    return len(scripts)


VIBE = _where("vibe-music", "MusicMaker")
VMM = "VibeMusicMaker"


def _sched(ddmm_hhmm):
    """'08/11 10:00' (2026, +07) → ('2026-11-08 10:00', passed?)."""
    m = re.match(r"(\d{2})/(\d{2})\s+~?(\d{1,2}):(\d{2})", ddmm_hhmm.strip())
    if not m:
        return "", True
    d, mo, h, mi = m.groups()
    at = f"2026-{mo}-{d} {int(h):02d}:{mi}"
    return at, at <= datetime.now().strftime("%Y-%m-%d %H:%M")


def seed_vibe(con):
    """1-hour videos, Shorts and mixes from batch*/schedule_log.md (the channel's own source of truth)."""
    n = 0
    rows = {}  # code -> (title, id, when); later rows win (batch 2 re-uploads after verification)
    b2 = (VIBE / "batch2/schedule_log.md").read_text()
    for code, title, vid, rest in re.findall(r"^\|\s*\d+\s*\|\s*([A-C]\d)\s+(.+?)\s*\(youtu\.be/([\w-]{11})\)\s*\|(.*)$", b2, re.M):
        rows[code] = (title, vid, rest.split("|")[-2] if rest.count("|") >= 2 else rest)
    b3 = (VIBE / "batch3/schedule_log.md").read_text()
    for code, title, vid, when in re.findall(r"^\|\s*\d+\s*\|\s*([D-F]\d)\s+(.+?)\s*\|\s*([\w-]{11})\s*\|\s*(.+?)\s*\|", b3, re.M):
        rows[code] = (title, vid, when)
    b4 = (VIBE / "batch4/schedule_log.md").read_text()
    long_part, _, short_part = b4.partition("## Short batch 4")
    for code, title, vid, when in re.findall(r"^\|\s*(G\d{2}-\d)\s*\|\s*(.+?)\s*\|\s*([\w-]{11})\s*\|\s*(.+?)\s*\|", long_part, re.M):
        rows[code] = (title, vid, when)
    urls = {}
    for code, (title, vid, when) in rows.items():
        at, passed = _sched(when)
        urls[code] = f"https://youtu.be/{vid}"
        set_video(con, VMM, code, kind="long", keep_higher=True, stage="published" if passed else "ready",
                  title=f"{title} — 1 Hour", url=urls[code], published_at=at if passed else "",
                  notes="" if passed else f"Đã lên lịch trên Studio: {at} (+07)")
        if not passed:
            fact(con, code, "scheduled", at, channel=VMM)
        n += 1
    for code, sid, rel in re.findall(r"^\|\s*(G\d{2}-\d)\s*\|\s*([\w-]{11})\s*\|\s*(.+?)\s*\|", short_part, re.M):
        scode = f"{code}-S"
        set_video(con, VMM, scode, kind="short", keep_higher=True, stage="published",
                  title=f"{rows[code][0]} #shorts" if code in rows else "", url=f"https://youtube.com/shorts/{sid}",
                  linked_url=urls.get(code, ""), notes=f"Related video: {rel}")
        fact(con, scode, "related_video", "✅" if rel.startswith("✅") else "chưa gắn", channel=VMM)
        n += 1
    m = re.search(r"^Mix:(.+)$", short_part, re.M)
    for code, title, vid in re.findall(r"(P\d{2})\s+(.+?)\s+`([\w-]{11})`", m.group(1) if m else ""):
        set_video(con, VMM, code, kind="long", keep_higher=True, stage="published",
                  title=f"{title} — 1 Hour Mix", url=f"https://youtu.be/{vid}")
        n += 1
    return n


LIBRARY = ROOT / "shared" / "library"
LIB_KIND = {"music": "music", "sfx": "sfx", "artifact": "image", "map": "map", "vfx": "vfx"}


def seed_library(con):
    """Register the shared media library (shared/library/LICENSES.csv) as assets usable by every channel."""
    import csv
    n = 0
    with open(LIBRARY / "LICENSES.csv", newline="", encoding="utf-8") as f:
        for r in csv.DictReader(f):
            attribution = (r.get("attribution_line") or "").strip()
            ythub.asset_add(con, LIBRARY / r["file"], kind=LIB_KIND.get(r["file"].split("/")[0], "other"),
                            license=r["license"] + (" · ghi công bắt buộc" if r.get("attribution_required") == "yes" else ""),
                            source=r["source_url"], notes=attribution)
            n += 1
    return n


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--db")
    con = ythub.connect(p.parse_args().db)
    for name, handle, lang in CHANNELS:
        ythub.channel_id(con, name, handle=handle, lang=lang, url=f"https://www.youtube.com/{handle}")
    print(f"{OLL}: {seed_off_limits(con)} video")
    for csv, (ins, upd) in seed_stickman(con):
        print(f"{csv}: +{ins} mới, {upd} cập nhật")
    print(f"{RAE}: {seed_rice(con)} video")
    print(f"{VMM}: {seed_vibe(con)} video")
    print(f"shared library: {seed_library(con)} asset")
    for r in con.execute("SELECT c.name, v.stage, count(*) n FROM video v JOIN channel c ON c.id=v.channel_id "
                         "GROUP BY 1, 2 ORDER BY 1, 2"):
        print(f"  {r['name']:<22} {r['stage']:<10} {r['n']}")


if __name__ == "__main__":
    main()
