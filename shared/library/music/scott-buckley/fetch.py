"""Download Scott Buckley CC BY 4.0 tracks listed in tracks.tsv (slug, mp3 path or URL, title) and write LICENSES.csv rows.
Every track page checked 2026-11-11: 'licensed under a Creative Commons Attribution 4.0 International License'."""
import csv, pathlib, time, urllib.request
D = pathlib.Path(__file__).resolve().parent
BASE = "https://www.scottbuckley.com.au/library/wp-content/uploads/"
rows = [l.split("\t") for l in (D / "tracks.tsv").read_text().splitlines() if l.strip()]
out = []
for slug, src, title in rows:
    url = src if src.startswith("http") else BASE + src
    url = url.replace("http://", "https://")
    f = D / "mp3" / f"{slug}.mp3"
    f.parent.mkdir(exist_ok=True)
    if not f.exists() or f.stat().st_size < 10000:
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "rice-lib-fetch/1.0 (personal research)"})
            f.write_bytes(urllib.request.urlopen(req, timeout=120).read())
            time.sleep(0.5)
        except Exception as e:
            print("FAIL", slug, e); continue
    t = title or slug.replace("-", " ").title()
    out.append([f"music/scott-buckley/mp3/{slug}.mp3", f"https://www.scottbuckley.com.au/library/{slug}/", "CC BY 4.0", "yes",
                f"'{t}' by Scott Buckley - released under CC-BY 4.0. www.scottbuckley.com.au"])
with open(D / "LICENSES.part.csv", "w", newline="") as fh:
    csv.writer(fh).writerows(out)
print("SB_DONE", len(out), "of", len(rows))
