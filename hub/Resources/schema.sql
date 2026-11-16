-- YT Hub schema. Shared by the app (Store.swift) and the CLI (Tools/ythub.py).
-- stage: idea → script → assets → render → ready (xong, chưa đăng) → published (đã đăng)
CREATE TABLE IF NOT EXISTS channel (
  id     INTEGER PRIMARY KEY,
  name   TEXT NOT NULL UNIQUE,
  handle TEXT NOT NULL DEFAULT '',
  url    TEXT NOT NULL DEFAULT '',
  lang   TEXT NOT NULL DEFAULT '',
  notes  TEXT NOT NULL DEFAULT '',
  sort   INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS video (
  id             INTEGER PRIMARY KEY,
  channel_id     INTEGER NOT NULL REFERENCES channel(id) ON DELETE CASCADE,
  code           TEXT,                       -- NULL when empty, so UNIQUE ignores it
  kind           TEXT NOT NULL DEFAULT 'long' CHECK (kind IN ('long','short')),
  stage          TEXT NOT NULL DEFAULT 'idea'
                 CHECK (stage IN ('idea','script','assets','render','ready','published')),
  title          TEXT NOT NULL DEFAULT '',
  description    TEXT NOT NULL DEFAULT '',
  tags           TEXT NOT NULL DEFAULT '',
  pinned_comment TEXT NOT NULL DEFAULT '',
  yt_url         TEXT NOT NULL DEFAULT '',
  linked_url     TEXT NOT NULL DEFAULT '',   -- short → its long (Related video); long → anything related
  file_path      TEXT NOT NULL DEFAULT '',
  thumb_path     TEXT NOT NULL DEFAULT '',
  script_path    TEXT NOT NULL DEFAULT '',
  notes          TEXT NOT NULL DEFAULT '',
  published_at   TEXT NOT NULL DEFAULT '',
  updated_at     TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (channel_id, code)
);
CREATE INDEX IF NOT EXISTS video_channel ON video(channel_id);

-- v2: state that used to live in HANDOFF.md. Every change is an event; work left is a task.
CREATE TABLE IF NOT EXISTS event (
  id         INTEGER PRIMARY KEY,
  channel_id INTEGER NOT NULL REFERENCES channel(id) ON DELETE CASCADE,
  video_id   INTEGER REFERENCES video(id) ON DELETE CASCADE,   -- NULL = channel-level
  at         TEXT NOT NULL DEFAULT (strftime('%Y-%m-%d %H:%M', 'now', 'localtime')),
  actor      TEXT NOT NULL DEFAULT '',                         -- user | agent:<session> | cli | migration
  kind       TEXT NOT NULL DEFAULT 'note'
             CHECK (kind IN ('note','stage','review','render','upload','blocker','migration')),
  message    TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS event_video ON event(video_id, at);
CREATE TABLE IF NOT EXISTS task (
  id         INTEGER PRIMARY KEY,
  channel_id INTEGER NOT NULL REFERENCES channel(id) ON DELETE CASCADE,
  video_id   INTEGER REFERENCES video(id) ON DELETE CASCADE,
  owner      TEXT NOT NULL DEFAULT 'agent' CHECK (owner IN ('user','agent')),
  text       TEXT NOT NULL,
  status     TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open','done')),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%d %H:%M', 'now', 'localtime')),
  done_at    TEXT NOT NULL DEFAULT '',
  done_by    TEXT NOT NULL DEFAULT ''
);
CREATE INDEX IF NOT EXISTS task_open ON task(status, owner);
-- machine-readable checklist: images=51/51, tts=481s, review=PASS r4, lufs=-14.3
CREATE TABLE IF NOT EXISTS fact (
  video_id   INTEGER NOT NULL REFERENCES video(id) ON DELETE CASCADE,
  key        TEXT NOT NULL,
  value      TEXT NOT NULL,
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%d %H:%M', 'now', 'localtime')),
  PRIMARY KEY (video_id, key)
);
-- media registry; path is relative to the repo root (setting 'root')
CREATE TABLE IF NOT EXISTS asset (
  id         INTEGER PRIMARY KEY,
  path       TEXT NOT NULL UNIQUE,
  kind       TEXT NOT NULL DEFAULT 'other',   -- render | thumb | music | sfx | image | clip | voice | font | other
  channel_id INTEGER REFERENCES channel(id) ON DELETE SET NULL,   -- NULL = shared by every channel
  bytes      INTEGER NOT NULL DEFAULT 0,
  source     TEXT NOT NULL DEFAULT '',
  license    TEXT NOT NULL DEFAULT '',
  notes      TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%d %H:%M', 'now', 'localtime'))
);
CREATE TABLE IF NOT EXISTS video_asset (
  video_id INTEGER NOT NULL REFERENCES video(id) ON DELETE CASCADE,
  asset_id INTEGER NOT NULL REFERENCES asset(id) ON DELETE CASCADE,
  role     TEXT NOT NULL DEFAULT '',
  PRIMARY KEY (video_id, asset_id, role)
);
CREATE TABLE IF NOT EXISTS setting (
  key   TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
