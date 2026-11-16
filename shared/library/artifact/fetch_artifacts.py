"""Download CC0 / public-domain artifact images relevant to Vietnam + neighbours from The Met and Art Institute of Chicago.
Usage: python3 fetch_artifacts.py   (writes met/, aic/, and manifest.jsonl next to this file; resumable)
"""
import json, pathlib, time, urllib.parse, urllib.request

ROOT = pathlib.Path(__file__).resolve().parent
UA = {"User-Agent": "rice-lib-fetch/1.0 (personal research)"}
MAN = ROOT / "manifest.jsonl"
seen = set()
if MAN.exists():
    for l in MAN.read_text().splitlines():
        r = json.loads(l); seen.add((r["src"], str(r["id"])))

MET_Q = ["Vietnam", "Champa", "Cham", "Dong Son", "Khmer", "Cambodia", "Annam", "Tonkin",
         "Han dynasty", "Tang dynasty", "Yuan dynasty", "Ming dynasty", "bronze drum", "Funan", "Thailand", "Laos"]
AIC_Q = ["Vietnam", "Champa", "Khmer", "Cambodia", "Han dynasty", "Tang dynasty", "Yuan dynasty", "Ming dynasty",
         "bronze drum", "Dong Son", "Thailand"]
CAP = 250  # objects per query


def get(url, tries=4):
    url = urllib.parse.quote(url, safe=":/?&=%,+")  # Met image paths can contain en dashes
    for k in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
                return r.read()
        except Exception as e:
            if k == tries - 1:
                print("FAIL", url, e)
                return None
            time.sleep(2 * (k + 1))


def save(src, oid, url, meta):
    if (src, str(oid)) in seen or not url:
        return
    out = ROOT / src / f"{src}-{oid}.jpg"
    out.parent.mkdir(exist_ok=True)
    if not out.exists():
        data = get(url)
        if not data:
            return
        out.write_bytes(data)
    meta.update(src=src, id=oid, file=str(out.relative_to(ROOT)), image_url=url)
    with MAN.open("a") as f:
        f.write(json.dumps(meta, ensure_ascii=False) + "\n")
    seen.add((src, str(oid)))


def met():
    for q in MET_Q:
        ids, off = [], 0
        while len(ids) < CAP * 2:  # v1/search retired 2026-10-01 -> v1.1 paginated
            res = json.loads(get("https://collectionapi.metmuseum.org/public/collection/v1.1/search?hasImages=true&limit=100&offset="
                                 + str(off) + "&q=" + urllib.parse.quote(q)) or b"{}")
            page = res.get("objectIDs") or []
            ids += page; off += 100
            if len(page) < 100 or off >= res.get("total", 0):
                break
        n = 0
        for oid in ids:
            if n >= CAP:
                break
            if ("met", str(oid)) in seen:
                n += 1; continue
            o = json.loads(get(f"https://collectionapi.metmuseum.org/public/collection/v1/objects/{oid}") or b"{}")
            time.sleep(0.05)
            if not o.get("isPublicDomain") or not o.get("primaryImage"):
                continue
            save("met", oid, o["primaryImage"], {
                "query": q, "title": o.get("title"), "date": o.get("objectDate"), "culture": o.get("culture"),
                "period": o.get("period"), "dynasty": o.get("dynasty"), "country": o.get("country"),
                "medium": o.get("medium"), "page": o.get("objectURL"), "license": "CC0 (Met Open Access)"})
            n += 1
        print("met", q, n, flush=True)


def aic():
    for q in AIC_Q:
        page, n = 1, 0
        while n < CAP:
            url = ("https://api.artic.edu/api/v1/artworks/search?" + urllib.parse.urlencode({
                "q": q, "query[term][is_public_domain]": "true", "limit": 100, "page": page,
                "fields": "id,title,image_id,date_display,place_of_origin,medium_display,style_title,is_public_domain"}))
            res = json.loads(get(url) or b"{}")
            data = res.get("data") or []
            if not data:
                break
            for o in data:
                if n >= CAP:
                    break
                if not o.get("image_id") or not o.get("is_public_domain"):
                    continue
                save("aic", o["id"], f"https://www.artic.edu/iiif/2/{o['image_id']}/full/1686,/0/default.jpg", {
                    "query": q, "title": o.get("title"), "date": o.get("date_display"), "culture": o.get("place_of_origin"),
                    "style": o.get("style_title"), "medium": o.get("medium_display"),
                    "page": f"https://www.artic.edu/artworks/{o['id']}", "license": "CC0 (AIC public domain)"})
                n += 1
                time.sleep(0.2)
            page += 1
        print("aic", q, n, flush=True)


met()
# aic(): api.artic.edu + IIIF images sit behind a Cloudflare bot check for scripts (403, 2026-11-11) -> skipped
print("ARTIFACTS_DONE", len(seen))
