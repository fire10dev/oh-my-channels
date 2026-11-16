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
