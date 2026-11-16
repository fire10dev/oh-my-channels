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
