#!/usr/bin/env python3
"""YT Hub CLI — the single source of truth for every channel's video state.
Agents use this instead of HANDOFF.md. Same SQLite DB as the YT Hub app.

Read (start of a session):
  ythub status [--channel NAME] [--json]        one line per video: stage + open tasks
  ythub show CODE [--channel NAME] [--json]     video + facts + open tasks + recent events + assets
  ythub next [--channel NAME] [--json]          open agent tasks
  ythub tasks [--owner user|agent] [--done]     task list

Write (after every step):
  ythub set CODE --channel NAME [--kind long|short] [--stage S] [--title …] [--description-file F] …
  ythub log CODE "render 9:01, -14.3 LUFS" [--kind render|review|upload|blocker|note]
  ythub fact CODE images 51/51
  ythub task add CODE "owner watches the render" --owner user     (CODE "-" + --channel = channel-level)
  ythub task done ID
  ythub channel NAME [--handle @x --lang en --repo channels/x]
  ythub import-csv FILE --channel NAME --kind short
  ythub asset add FILE --kind music [--license …] [--channel NAME]   ythub asset link CODE ID --role music
  ythub relocate OLD_PREFIX NEW_PREFIX            rewrite stored paths after moving folders

CODE may omit --channel when it is unique across channels. Actor = $YTHUB_ACTOR (default "cli").
DB: $YTHUB_DB or ~/Library/Application Support/YTHub/ythub.db
Stages: idea → script → assets → render → ready (done, not posted) → published
"""
import argparse, csv, json, os, sqlite3, sys
from datetime import datetime
from pathlib import Path

HUB = Path(__file__).resolve().parent.parent
ROOT = HUB.parent  # oh-my-channels
SCHEMA = HUB / "Resources" / "schema.sql"
MIGRATE = HUB / "Resources" / "migrate.sql"
DEFAULT_DB = Path.home() / "Library/Application Support/YTHub/ythub.db"
STAGES = ["idea", "script", "assets", "render", "ready", "published"]
EVENT_KINDS = ["note", "stage", "review", "render", "upload", "blocker", "migration"]
FIELDS = {  # CLI/CSV name -> column
    "title": "title", "description": "description", "tags": "tags", "pinned_comment": "pinned_comment",
    "url": "yt_url", "yt_url": "yt_url", "linked_url": "linked_url", "file": "file_path",
    "thumbnail": "thumb_path", "script": "script_path", "notes": "notes", "published_at": "published_at",
    "branch": "branch",
}


class HubError(Exception):
    pass


def connect(path=None):
    path = Path(path or os.environ.get("YTHUB_DB") or DEFAULT_DB)
    path.parent.mkdir(parents=True, exist_ok=True)
    con = sqlite3.connect(path)
    con.row_factory = sqlite3.Row
    con.executescript("PRAGMA foreign_keys=ON; PRAGMA journal_mode=WAL; PRAGMA busy_timeout=3000;")
    con.executescript(SCHEMA.read_text())
    for stmt in MIGRATE.read_text().split(";"):
        stmt = "\n".join(l for l in stmt.splitlines() if not l.strip().startswith("--")).strip()
        if stmt:
            try:
                con.execute(stmt)
            except sqlite3.OperationalError as e:  # "duplicate column" = already migrated
                if "duplicate column" not in str(e):
                    raise
    con.execute("INSERT OR REPLACE INTO setting(key, value) VALUES ('root', ?)", (str(ROOT),))
    con.commit()
    return con


def now():
    return datetime.now().strftime("%Y-%m-%d %H:%M")


def actor_default():
    return os.environ.get("YTHUB_ACTOR", "cli")


def channel_id(con, name, **fields):
    """Id of channel `name`, creating it; non-empty fields overwrite."""
    con.execute("INSERT OR IGNORE INTO channel(name) VALUES (?)", (name,))
    for col, val in fields.items():
        if val:
            con.execute(f"UPDATE channel SET {col}=? WHERE name=?", (val, name))
    con.commit()
    return con.execute("SELECT id FROM channel WHERE name=?", (name,)).fetchone()[0]


def find_channel(con, name):
    row = con.execute("SELECT * FROM channel WHERE name=?", (name,)).fetchone()
    if row is None:
        raise HubError(f"no channel named {name!r}")
    return row


def find_video(con, code, channel=None):
    """The video `code` (in `channel`, or the only one with that code)."""
    q = "SELECT v.*, c.name AS channel FROM video v JOIN channel c ON c.id=v.channel_id WHERE v.code=?"
    rows = con.execute(q + (" AND c.name=?" if channel else ""), (code, channel) if channel else (code,)).fetchall()
    if not rows:
        raise HubError(f"no video {code!r}" + (f" in {channel!r}" if channel else ""))
    if len(rows) > 1:
        raise HubError(f"{code!r} is in several channels ({', '.join(r['channel'] for r in rows)}): pass --channel")
    return dict(rows[0])


def _event(con, channel_id_, video_id, message, kind="note", actor=None):
    cur = con.execute("INSERT INTO event(channel_id, video_id, actor, kind, message) VALUES (?,?,?,?,?)",
                      (channel_id_, video_id, actor or actor_default(), kind, message))
    return cur.lastrowid


def set_video(con, channel, code, kind=None, keep_higher=False, actor=None, **fields):
    """Create or update video `code` in `channel`. Empty values are ignored; keep_higher never moves
    the stage backwards. A stage change is logged as an event. Returns 'inserted'|'updated'."""
    cid = channel_id(con, channel)
    cols = {FIELDS.get(k, k): v for k, v in fields.items() if v}
    if cols.get("stage") == "published":
        cols.setdefault("published_at", None)  # filled below only if still empty
    row = con.execute("SELECT * FROM video WHERE channel_id=? AND code=?", (cid, code)).fetchone()
    if row is None:
        con.execute("INSERT INTO video(channel_id, code, kind) VALUES (?,?,?)", (cid, code, kind or "long"))
        row = con.execute("SELECT * FROM video WHERE channel_id=? AND code=?", (cid, code)).fetchone()
        result, old_stage = "inserted", None
    else:
        result, old_stage = "updated", row["stage"]
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
    if old_stage and cols.get("stage") and cols["stage"] != old_stage:
        _event(con, cid, row["id"], f"{old_stage} → {cols['stage']}", kind="stage", actor=actor)
    con.commit()
    return result


def log(con, code, message, kind="note", actor=None, channel=None):
    if kind not in EVENT_KINDS:
        raise HubError(f"kind must be one of {', '.join(EVENT_KINDS)}")
    if code:
        v = find_video(con, code, channel)
        eid = _event(con, v["channel_id"], v["id"], message, kind, actor)
    else:
        eid = _event(con, find_channel(con, channel)["id"], None, message, kind, actor)
    con.commit()
    return eid


def task_add(con, code, text, owner="agent", channel=None):
    if code:
        v = find_video(con, code, channel)
        cid, vid = v["channel_id"], v["id"]
    else:
        cid, vid = find_channel(con, channel)["id"], None
    cur = con.execute("INSERT INTO task(channel_id, video_id, owner, text) VALUES (?,?,?,?)", (cid, vid, owner, text))
    con.commit()
    return cur.lastrowid


def task_done(con, task_id, actor=None):
    cur = con.execute("UPDATE task SET status='done', done_at=?, done_by=? WHERE id=? AND status='open'",
                      (now(), actor or actor_default(), task_id))
    if cur.rowcount == 0:
        raise HubError(f"no open task #{task_id}")
    con.commit()


def tasks(con, channel=None, owner=None, status="open", video_id=None):
    q = ("SELECT t.*, c.name AS channel, v.code AS code FROM task t JOIN channel c ON c.id=t.channel_id "
         "LEFT JOIN video v ON v.id=t.video_id WHERE t.status=?")
    args = [status]
    for col, val in (("c.name", channel), ("t.owner", owner), ("t.video_id", video_id)):
        if val is not None:
            q += f" AND {col}=?"
            args.append(val)
    return [dict(r) for r in con.execute(q + " ORDER BY t.id", args)]


def fact(con, code, key, value, channel=None):
    v = find_video(con, code, channel)
    con.execute("INSERT INTO fact(video_id, key, value) VALUES (?,?,?) ON CONFLICT(video_id, key) "
                "DO UPDATE SET value=excluded.value, updated_at=strftime('%Y-%m-%d %H:%M','now','localtime')",
                (v["id"], key, value))
    con.commit()


def show(con, code, channel=None, events=20):
    v = find_video(con, code, channel)
    v["facts"] = {r["key"]: r["value"] for r in con.execute("SELECT key, value FROM fact WHERE video_id=? ORDER BY key", (v["id"],))}
    v["tasks"] = tasks(con, video_id=v["id"])
    v["events"] = [dict(r) for r in con.execute(
        "SELECT id, at, actor, kind, message FROM event WHERE video_id=? ORDER BY at DESC, id DESC LIMIT ?", (v["id"], events))]
    v["assets"] = [dict(r) for r in con.execute(
        "SELECT a.*, va.role FROM video_asset va JOIN asset a ON a.id=va.asset_id WHERE va.video_id=?", (v["id"],))]
    return v


def status(con, channel=None):
    q = ("SELECT c.name AS channel, v.code, v.kind, v.stage, v.title, v.yt_url, "
         "(SELECT count(*) FROM task t WHERE t.video_id=v.id AND t.status='open' AND t.owner='user') AS user_tasks, "
         "(SELECT count(*) FROM task t WHERE t.video_id=v.id AND t.status='open' AND t.owner='agent') AS agent_tasks "
         "FROM video v JOIN channel c ON c.id=v.channel_id WHERE (?1 IS NULL OR c.name=?1) ORDER BY c.name, v.kind, v.code")
    return [dict(r) for r in con.execute(q, (channel,))]


def relocate(con, old, new):
    """Rewrite every stored path that starts with `old`. Returns the number of values changed."""
    old, new = old.rstrip("/"), new.rstrip("/")
    n = 0
    for table, cols in (("video", ("file_path", "thumb_path", "script_path")), ("channel", ("repo_path",)), ("asset", ("path",))):
        for col in cols:
            cur = con.execute(f"UPDATE {table} SET {col} = ? || substr({col}, ?) WHERE {col} = ? OR {col} LIKE ?",
                              (new, len(old) + 1, old, old + "/%"))
            n += cur.rowcount
    con.commit()
    return n


def asset_add(con, path, kind="other", channel=None, license="", source="", notes=""):
    """Register a media file (path stored relative to the repo root when inside it). Idempotent."""
    p = Path(path).resolve()
    try:
        stored = str(p.relative_to(ROOT))
    except ValueError:
        stored = str(p)
    cid = find_channel(con, channel)["id"] if channel else None
    con.execute("INSERT OR IGNORE INTO asset(path, kind, channel_id, bytes, source, license, notes) VALUES (?,?,?,?,?,?,?)",
                (stored, kind, cid, p.stat().st_size if p.exists() else 0, source, license, notes))
    for col, val in (("license", license), ("source", source), ("notes", notes)):
        if val:
            con.execute(f"UPDATE asset SET {col}=? WHERE path=?", (val, stored))
    con.commit()
    return con.execute("SELECT id FROM asset WHERE path=?", (stored,)).fetchone()[0]


def asset_link(con, code, asset_id, role="", channel=None):
    v = find_video(con, code, channel)
    con.execute("INSERT OR IGNORE INTO video_asset(video_id, asset_id, role) VALUES (?,?,?)", (v["id"], asset_id, role))
    con.commit()


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
    channel_id(con, channel)
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


# ---- CLI --------------------------------------------------------------------------------------

def _print(rows, as_json, fmt):
    if as_json:
        print(json.dumps(rows, ensure_ascii=False, indent=1))
    else:
        for r in rows if isinstance(rows, list) else [rows]:
            print(fmt(r))


def _show_text(v):
    out = [f"{v['channel']} · {v['code']} · {v['kind']} · {v['stage']}" + (f" · {v['branch']}" if v.get("branch") else ""),
           f"title: {v['title']}"]
    for k in ("yt_url", "linked_url", "file_path", "thumb_path", "script_path", "published_at"):
        if v[k]:
            out.append(f"{k}: {v[k]}")
    if v["notes"]:
        out.append(f"notes: {v['notes']}")
    if v["facts"]:
        out.append("facts: " + ", ".join(f"{k}={val}" for k, val in v["facts"].items()))
    for t in v["tasks"]:
        out.append(f"task #{t['id']} [{t['owner']}] {t['text']}")
    for a in v["assets"]:
        out.append(f"asset #{a['id']} {a['role'] or a['kind']}: {a['path']}" + (f" ({a['license']})" if a["license"] else ""))
    for e in v["events"]:
        out.append(f"{e['at']} {e['kind']:<9} {e['actor']:<14} {e['message']}")
    return "\n".join(out)


def main(argv=None):
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--db")
    p.add_argument("--json", action="store_true", help="machine-readable output")
    sub = p.add_subparsers(dest="cmd", required=True)

    c = sub.add_parser("channel"); c.add_argument("name")
    for k in ("handle", "url", "lang", "notes", "repo"):
        c.add_argument(f"--{k}")
    i = sub.add_parser("import-csv"); i.add_argument("csv"); i.add_argument("--channel", required=True)
    i.add_argument("--kind", choices=["long", "short"], required=True)
    s = sub.add_parser("set"); s.add_argument("code"); s.add_argument("--channel", required=True)
    s.add_argument("--kind", choices=["long", "short"]); s.add_argument("--stage", choices=STAGES)
    s.add_argument("--description-file", help="read the description from this file")
    for k in FIELDS:
        if k != "description":
            s.add_argument(f"--{k.replace('_', '-')}", dest=k)
    s.add_argument("--description")
    st = sub.add_parser("status"); st.add_argument("--channel")
    sh = sub.add_parser("show"); sh.add_argument("code"); sh.add_argument("--channel")
    sh.add_argument("--events", type=int, default=20)
    lg = sub.add_parser("log"); lg.add_argument("code", help='video code, or "-" for the channel')
    lg.add_argument("message"); lg.add_argument("--kind", default="note", choices=EVENT_KINDS); lg.add_argument("--channel")
    fc = sub.add_parser("fact"); fc.add_argument("code"); fc.add_argument("key"); fc.add_argument("value")
    fc.add_argument("--channel")
    tk = sub.add_parser("task"); tsub = tk.add_subparsers(dest="tcmd", required=True)
    ta = tsub.add_parser("add"); ta.add_argument("code", help='video code, or "-" for the channel'); ta.add_argument("text")
    ta.add_argument("--owner", choices=["user", "agent"], default="agent"); ta.add_argument("--channel")
    td = tsub.add_parser("done"); td.add_argument("id", type=int)
    tl = sub.add_parser("tasks"); tl.add_argument("--channel"); tl.add_argument("--owner", choices=["user", "agent"])
    tl.add_argument("--done", action="store_true")
    nx = sub.add_parser("next"); nx.add_argument("--channel")
    a = sub.add_parser("asset"); asub = a.add_subparsers(dest="acmd", required=True)
    aa = asub.add_parser("add"); aa.add_argument("file"); aa.add_argument("--kind", default="other")
    aa.add_argument("--channel"); aa.add_argument("--license", default=""); aa.add_argument("--source", default="")
    al = asub.add_parser("link"); al.add_argument("code"); al.add_argument("id", type=int); al.add_argument("--role", default="")
    al.add_argument("--channel")
    als = asub.add_parser("list"); als.add_argument("--kind"); als.add_argument("--channel")
    rl = sub.add_parser("relocate"); rl.add_argument("old"); rl.add_argument("new")
    ls = sub.add_parser("list"); ls.add_argument("--channel"); ls.add_argument("--stage", choices=STAGES)

    a_ = p.parse_args(argv)
    con = connect(a_.db)
    code = lambda c: None if c == "-" else c
    try:
        if a_.cmd == "channel":
            print(channel_id(con, a_.name, handle=a_.handle, url=a_.url, lang=a_.lang, notes=a_.notes, repo_path=a_.repo))
        elif a_.cmd == "import-csv":
            ins, upd = import_csv(con, a_.csv, a_.channel, a_.kind)
            print(f"{a_.channel}: +{ins} mới, {upd} cập nhật")
        elif a_.cmd == "set":
            fields = {k: getattr(a_, k, None) for k in FIELDS}
            if a_.description_file:
                fields["description"] = Path(a_.description_file).read_text().strip()
            print(set_video(con, a_.channel, a_.code, kind=a_.kind, stage=a_.stage, **fields))
        elif a_.cmd in ("status", "list"):
            rows = status(con, a_.channel)
            if a_.cmd == "list" and a_.stage:
                rows = [r for r in rows if r["stage"] == a_.stage]
            _print(rows, a_.json, lambda r: f"{r['channel']} | {r['code']} | {r['kind']} | {r['stage']} | {r['title'][:70]}"
                   + (f" | user:{r['user_tasks']}" if r["user_tasks"] else "") + (f" | agent:{r['agent_tasks']}" if r["agent_tasks"] else ""))
        elif a_.cmd == "show":
            _print(show(con, a_.code, a_.channel, a_.events), a_.json, _show_text)
        elif a_.cmd == "log":
            print(log(con, code(a_.code), a_.message, a_.kind, channel=a_.channel))
        elif a_.cmd == "fact":
            fact(con, a_.code, a_.key, a_.value, a_.channel)
        elif a_.cmd == "task" and a_.tcmd == "add":
            print(task_add(con, code(a_.code), a_.text, a_.owner, a_.channel))
        elif a_.cmd == "task" and a_.tcmd == "done":
            task_done(con, a_.id)
        elif a_.cmd in ("tasks", "next"):
            rows = tasks(con, a_.channel, owner="agent" if a_.cmd == "next" else a_.owner,
                         status="done" if getattr(a_, "done", False) else "open")
            _print(rows, a_.json, lambda t: f"#{t['id']} [{t['owner']}] {t['channel']} {t['code'] or '-'}: {t['text']}")
        elif a_.cmd == "asset" and a_.acmd == "add":
            print(asset_add(con, a_.file, a_.kind, a_.channel, a_.license, a_.source))
        elif a_.cmd == "asset" and a_.acmd == "link":
            asset_link(con, a_.code, a_.id, a_.role, a_.channel)
        elif a_.cmd == "asset" and a_.acmd == "list":
            q = ("SELECT a.id, a.kind, a.path, a.bytes, a.license, c.name AS channel FROM asset a LEFT JOIN channel c "
                 "ON c.id=a.channel_id WHERE (?1 IS NULL OR a.kind=?1) AND (?2 IS NULL OR c.name=?2) ORDER BY a.kind, a.path")
            _print([dict(r) for r in con.execute(q, (a_.kind, a_.channel))], a_.json,
                   lambda r: f"#{r['id']} {r['kind']} {r['path']}" + (f" ({r['license']})" if r["license"] else ""))
        elif a_.cmd == "relocate":
            print(relocate(con, a_.old, a_.new))
    except (HubError, sqlite3.IntegrityError) as e:
        print(f"ythub: {e}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
