import os, sqlite3, tempfile, unittest
from pathlib import Path

import ythub


class CliTest(unittest.TestCase):
    def setUp(self):
        self.dir = Path(tempfile.mkdtemp()).resolve()
        self.con = ythub.connect(str(self.dir / "t.db"))
        (self.dir / "final").mkdir()
        (self.dir / "final" / "s01.mp4").write_bytes(b"x")
        self.csv = self.dir / "meta.csv"
        self.csv.write_text(
            'id,title,description,file\n'
            's01,"Why, you ""wait""","line1\nline2",final/s01.mp4\n'
            's02,Two,desc,final/missing.mp4\n', encoding="utf-8")

    def video(self, code):
        return self.con.execute("SELECT * FROM video WHERE code=?", (code,)).fetchone()

    def test_import_csv(self):
        self.assertEqual(ythub.import_csv(self.con, self.csv, "Tiny Leg Theory", "short"), (2, 0))
        s01, s02 = self.video("s01"), self.video("s02")
        self.assertEqual(s01["title"], 'Why, you "wait"')
        self.assertEqual(s01["description"], "line1\nline2")
        self.assertEqual(s01["kind"], "short")
        self.assertEqual(s01["file_path"], str(self.dir / "final" / "s01.mp4"))
        self.assertEqual(s01["stage"], "ready")      # file exists
        self.assertEqual(s02["stage"], "render")     # file not rendered yet

    def test_reimport_keeps_published(self):
        ythub.import_csv(self.con, self.csv, "C", "short")
        ythub.set_video(self.con, "C", "s01", stage="published", yt_url="https://youtube.com/shorts/x")
        self.assertEqual(ythub.import_csv(self.con, self.csv, "C", "short"), (0, 2))
        s01 = self.video("s01")
        self.assertEqual((s01["stage"], s01["yt_url"]), ("published", "https://youtube.com/shorts/x"))
        self.assertNotEqual(s01["published_at"], "")

    def test_set_creates_and_url_column(self):
        ythub.set_video(self.con, "Off Limits Life", "IX006", kind="long", stage="script", title="T")
        self.assertEqual(self.video("IX006")["stage"], "script")
        self.csv.write_text("code,title,url\nIX007,Seven,https://youtu.be/abc\n", encoding="utf-8")
        ythub.import_csv(self.con, self.csv, "Off Limits Life", "long")
        self.assertEqual(self.video("IX007")["stage"], "published")

    def test_keep_higher(self):
        ythub.set_video(self.con, "C", "x", stage="published")
        ythub.set_video(self.con, "C", "x", stage="render", title="T", keep_higher=True)
        self.assertEqual((self.video("x")["stage"], self.video("x")["title"]), ("published", "T"))
        ythub.set_video(self.con, "C", "x", stage="render")
        self.assertEqual(self.video("x")["stage"], "render")

    def test_bad_stage_rejected(self):
        with self.assertRaises(sqlite3.IntegrityError):
            ythub.set_video(self.con, "C", "x", stage="bogus")


if __name__ == "__main__":
    unittest.main()


class V2Test(unittest.TestCase):
    """State that used to live in HANDOFF.md: events, tasks, facts, assets."""

    def setUp(self):
        self.dir = Path(tempfile.mkdtemp()).resolve()
        self.con = ythub.connect(str(self.dir / "t.db"))
        ythub.set_video(self.con, "Rice", "L008", kind="long", stage="render")
        ythub.set_video(self.con, "Rice", "S001", kind="short", stage="script")

    def test_migrate_twice_is_harmless(self):
        ythub.connect(str(self.dir / "t.db"))
        cols = [r[1] for r in self.con.execute("PRAGMA table_info(video)")]
        self.assertIn("branch", cols)

    def test_stage_change_logs_event(self):
        ythub.set_video(self.con, "Rice", "L008", stage="ready", actor="agent:x")
        ev = ythub.show(self.con, "L008")["events"]
        self.assertEqual((ev[0]["kind"], ev[0]["actor"], ev[0]["message"]), ("stage", "agent:x", "render → ready"))
        ythub.set_video(self.con, "Rice", "L008", stage="ready", title="T")  # same stage: no new event
        self.assertEqual(len(ythub.show(self.con, "L008")["events"]), 1)

    def test_find_video_without_channel(self):
        self.assertEqual(ythub.find_video(self.con, "L008")["code"], "L008")
        ythub.set_video(self.con, "Other", "L008")
        with self.assertRaises(ythub.HubError):
            ythub.find_video(self.con, "L008")          # ambiguous
        self.assertEqual(ythub.find_video(self.con, "L008", "Other")["code"], "L008")
        with self.assertRaises(ythub.HubError):
            ythub.find_video(self.con, "NOPE")

    def test_log_task_fact_show(self):
        ythub.log(self.con, "L008", "render 9:01, -14.3 LUFS", kind="render", actor="cli")
        tid = ythub.task_add(self.con, "L008", "xem bản render rồi duyệt đăng", owner="user")
        ythub.task_add(self.con, "L008", "upload", owner="agent")
        ythub.fact(self.con, "L008", "images", "51/51")
        ythub.fact(self.con, "L008", "images", "55/55")   # overwrite
        s = ythub.show(self.con, "L008")
        self.assertEqual(s["facts"], {"images": "55/55"})
        self.assertEqual([t["text"] for t in s["tasks"]], ["xem bản render rồi duyệt đăng", "upload"])
        self.assertEqual(s["events"][0]["kind"], "render")
        ythub.task_done(self.con, tid, actor="user")
        self.assertEqual([t["owner"] for t in ythub.tasks(self.con)], ["agent"])
        self.assertEqual(ythub.tasks(self.con, owner="user", status="done")[0]["done_by"], "user")

    def test_channel_level_task_and_status(self):
        ythub.task_add(self.con, None, "chọn nhạc cho kênh", owner="user", channel="Rice")
        rows = {r["code"]: r for r in ythub.status(self.con, "Rice")}
        self.assertEqual(rows["L008"]["stage"], "render")
        self.assertEqual(ythub.tasks(self.con, owner="user")[0]["code"], None)

    def test_relocate(self):
        ythub.set_video(self.con, "Rice", "L008", file="/old/repo/x/out/L008.mp4", script="/old/repo/x/s.md")
        self.assertEqual(ythub.relocate(self.con, "/old/repo/x", "/new/ch"), 2)
        v = ythub.find_video(self.con, "L008")
        self.assertEqual((v["file_path"], v["script_path"]), ("/new/ch/out/L008.mp4", "/new/ch/s.md"))

    def test_asset_registry(self):
        f = self.dir / "song.mp3"
        f.write_bytes(b"abc")
        aid = ythub.asset_add(self.con, f, kind="music", license="CC-BY 4.0 Scott Buckley")
        self.assertEqual(ythub.asset_add(self.con, f, kind="music"), aid)        # same path → same asset
        ythub.asset_link(self.con, "L008", aid, role="music")
        a = ythub.show(self.con, "L008")["assets"][0]
        self.assertEqual((a["kind"], a["role"], a["bytes"], a["license"]), ("music", "music", 3, "CC-BY 4.0 Scott Buckley"))
