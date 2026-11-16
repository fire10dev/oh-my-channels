#!/usr/bin/env python3
"""YT Hub CLI — same SQLite DB as the app, for scripts and AI agents.

  ythub.py channel "Off Limits Life" --handle @OffLimitsLife --lang en
  ythub.py import-csv upload-metadata.csv --channel "Tiny Leg Theory" --kind short
  ythub.py set IX006 --channel "Off Limits Life" --kind long --stage render
  ythub.py set s03 --channel "Tiny Leg Theory" --stage published --url https://youtube.com/shorts/...
  ythub.py list [--channel NAME] [--stage ready]

DB: $YTHUB_DB or ~/Library/Application Support/YTHub/ythub.db
CSV columns (any subset): id|code, title, description, tags, file, thumbnail, url, linked_url, stage
"""
import argparse, csv, os, sqlite3, sys
from datetime import datetime
from pathlib import Path

SCHEMA = Path(__file__).resolve().parent.parent / "Resources" / "schema.sql"
DEFAULT_DB = Path.home() / "Library/Application Support/YTHub/ythub.db"
STAGES = ["idea", "script", "assets", "render", "ready", "published"]
FIELDS = {  # CLI/CSV name -> column
    "title": "title", "description": "description", "tags": "tags", "pinned_comment": "pinned_comment",
    "url": "yt_url", "yt_url": "yt_url", "linked_url": "linked_url", "file": "file_path",
    "thumbnail": "thumb_path", "script": "script_path", "notes": "notes", "published_at": "published_at",
}


def connect(path=None):
    path = Path(path or os.environ.get("YTHUB_DB") or DEFAULT_DB)
    path.parent.mkdir(parents=True, exist_ok=True)
    con = sqlite3.connect(path)
    con.row_factory = sqlite3.Row
    con.executescript("PRAGMA foreign_keys=ON; PRAGMA journal_mode=WAL; PRAGMA busy_timeout=3000;")
    con.executescript(SCHEMA.read_text())
    return con


def now():
    return datetime.now().strftime("%Y-%m-%d %H:%M")


def channel_id(con, name, **fields):
    """Id of channel `name`, creating it; non-empty fields overwrite."""
    con.execute("INSERT OR IGNORE INTO channel(name) VALUES (?)", (name,))
    for col, val in fields.items():
        if val:
            con.execute(f"UPDATE channel SET {col}=? WHERE name=?", (val, name))
    con.commit()
    return con.execute("SELECT id FROM channel WHERE name=?", (name,)).fetchone()[0]


def set_video(con, channel, code, kind=None, keep_higher=False, **fields):
    """Create or update video `code` in `channel`. Empty values are ignored; keep_higher never moves
    the stage backwards. Returns 'inserted'|'updated'."""
    cid = channel_id(con, channel)
    cols = {FIELDS.get(k, k): v for k, v in fields.items() if v}
    if cols.get("stage") == "published":
        cols.setdefault("published_at", None)  # filled below only if still empty
    row = con.execute("SELECT * FROM video WHERE channel_id=? AND code=?", (cid, code)).fetchone()
    if row is None:
        con.execute("INSERT INTO video(channel_id, code, kind) VALUES (?,?,?)", (cid, code, kind or "long"))
        row = con.execute("SELECT * FROM video WHERE channel_id=? AND code=?", (cid, code)).fetchone()
        result = "inserted"
    else:
        result = "updated"
        if kind:
            cols["kind"] = kind
        if keep_higher and "stage" in cols and STAGES.index(row["stage"]) > STAGES.index(cols["stage"]):
            del cols["stage"]
            cols.pop("published_at", None)
    if "published_at" in cols and cols["published_at"] is None:
        cols["published_at"] = row["published_at"] or now()
    if cols:
        sets = ", ".join(f"{c}=?" for c in cols)
        con.execute(f"UPDATE video SET {sets}, updated_at=datetime('now') WHERE id=?", (*cols.values(), row["id"]))
    con.commit()
    return result


def _resolve(file, base):
    """CSV paths are relative to the CSV's folder or its parent (stickman-ab mixes both)."""
    if not file or os.path.isabs(file):
        return file
    for d in (base, base.parent):
        if (d / file).exists():
            return str(d / file)
    return str(base / file)


def import_csv(con, csv_path, channel, kind):
    """Upsert every row by code. Stage: url → published; never downgraded; file on disk → ready, else render."""
    csv_path = Path(csv_path).resolve()
    cid = channel_id(con, channel)
    ins = upd = 0
    with open(csv_path, newline="", encoding="utf-8-sig") as f:
        for r in csv.DictReader(f):
            code = (r.get("code") or r.get("id") or "").strip()
            if not code:
                continue
            fields = {k: (r.get(k) or "").strip() for k in FIELDS if k in r}
            for k in ("file", "thumbnail"):
                if k in fields:
                    fields[k] = _resolve(fields[k], csv_path.parent)
            stage = (r.get("stage") or "").strip()
            if not stage:
                if fields.get("url"):
                    stage = "published"
                else:
                    stage = "ready" if fields.get("file") and Path(fields["file"]).exists() else "render"
            if set_video(con, channel, code, kind=kind, stage=stage, keep_higher=not r.get("stage"), **fields) == "inserted":
                ins += 1
            else:
                upd += 1
    return ins, upd


def main(argv=None):
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--db")
    sub = p.add_subparsers(dest="cmd", required=True)
    c = sub.add_parser("channel"); c.add_argument("name")
    for k in ("handle", "url", "lang", "notes"):
        c.add_argument(f"--{k}")
    i = sub.add_parser("import-csv"); i.add_argument("csv"); i.add_argument("--channel", required=True)
    i.add_argument("--kind", choices=["long", "short"], required=True)
    s = sub.add_parser("set"); s.add_argument("code"); s.add_argument("--channel", required=True)
    s.add_argument("--kind", choices=["long", "short"]); s.add_argument("--stage", choices=STAGES)
    for k in FIELDS:
        s.add_argument(f"--{k.replace('_', '-')}", dest=k)
    l = sub.add_parser("list"); l.add_argument("--channel"); l.add_argument("--stage", choices=STAGES)
    a = p.parse_args(argv)
    con = connect(a.db)

    if a.cmd == "channel":
        print(channel_id(con, a.name, handle=a.handle, url=a.url, lang=a.lang, notes=a.notes))
    elif a.cmd == "import-csv":
        ins, upd = import_csv(con, a.csv, a.channel, a.kind)
        print(f"{a.channel}: +{ins} mới, {upd} cập nhật")
    elif a.cmd == "set":
        fields = {k: getattr(a, k) for k in FIELDS}
        print(set_video(con, a.channel, a.code, kind=a.kind, stage=a.stage, **fields))
    elif a.cmd == "list":
        q = ("SELECT c.name ch, v.code, v.kind, v.stage, v.title, v.yt_url FROM video v "
             "JOIN channel c ON c.id=v.channel_id WHERE (?1 IS NULL OR c.name=?1) AND (?2 IS NULL OR v.stage=?2) "
             "ORDER BY c.name, v.kind, v.code")
        for r in con.execute(q, (a.channel, a.stage)):
            print(" | ".join(str(r[k] or "") for k in r.keys()))


if __name__ == "__main__":
    sys.exit(main())
