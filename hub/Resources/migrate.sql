-- Columns added after v1, run one statement at a time ("duplicate column" = already applied). No semicolons in comments.
ALTER TABLE channel ADD COLUMN repo_path TEXT NOT NULL DEFAULT '';
ALTER TABLE channel ADD COLUMN yt_channel_id TEXT NOT NULL DEFAULT '';
ALTER TABLE video ADD COLUMN branch TEXT NOT NULL DEFAULT '';
