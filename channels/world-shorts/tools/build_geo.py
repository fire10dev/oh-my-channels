"""Cut Natural Earth to what one short needs -> engine/public/<id>/geo.json (lon/lat rings, simplified per zoom).
Usage: .venv/bin/python tools/build_geo.py scripts/<id>.json
Countries: every country touching any camera view (+margin) or named in hl/ghost. Optional per-script:
"admin1": ["USA"] (state outlines for those countries), "rivers": true, "cities": [names]."""
import json, math, sys
from pathlib import Path
import shapefile
from shapely.geometry import shape, box, mapping
from shapely.ops import unary_union

ROOT = Path(__file__).resolve().parents[1]
NE = ROOT.parents[1] / "shared/library/map/natural_earth_vector"
spec = json.loads(Path(sys.argv[1]).read_text())
vid = spec["id"]


def read(path, keyf):
    r = shapefile.Reader(str(path), encoding="utf-8")
    f = [x[0] for x in r.fields[1:]]
    for sr in r.iterShapeRecords():
        if sr.shape.shapeType == 0:  # NULL shape
            continue
        rec = dict(zip(f, sr.record))
        yield keyf(rec), rec, shape(sr.shape.__geo_interface__)


def lat2y(lat):
    lat = max(min(lat, 85), -85)
    return math.degrees(math.log(math.tan(math.pi / 4 + math.radians(lat) / 2)))


def view_box(c, margin=0.35):
    span = c["span"]; hy = span * 16 / 9 / 2  # 9:16 frame; mercator y-degrees
    cy = lat2y(c["lat"])
    def y2lat(y):
        return math.degrees(2 * math.atan(math.exp(math.radians(y))) - math.pi / 2)
    m = 1 + margin
    return box(c["lon"] - span / 2 * m, y2lat(cy - hy * m), c["lon"] + span / 2 * m, y2lat(cy + hy * m)), span


views, named = [], set()
for b in spec["beats"]:
    views.append(view_box(b["cam"]))
    for h in b.get("hl", []):
        if "a3" in h: named.add(h["a3"])
    if b.get("ghost"):
        named.add(b["ghost"]["a3"])
        views.append(view_box({"lon": b["ghost"]["to"][0], "lat": b["ghost"]["to"][1], "span": b["cam"]["span"]}))
minspan = min(s for _, s in views)
union = unary_union([v for v, _ in views])
res = "10m" if minspan < 12 else "50m"
tol = minspan / 1080 * 1.2


def rings(geom, t):
    g = geom.simplify(t, preserve_topology=True)
    polys = [g] if g.geom_type == "Polygon" else list(getattr(g, "geoms", []))
    out = []
    for p in polys:
        if p.is_empty or p.area < t * t * 4:
            continue
        out.append([[round(x, 3), round(y, 3)] for x, y in p.exterior.coords])
    return out


countries = {}
for a3, rec, g in read(NE / f"{res}_cultural/ne_{res}_admin_0_countries.shp", lambda r: r["ADM0_A3"]):
    if a3 in named or g.intersects(union):
        countries[a3] = {"name": rec["NAME_EN"] or rec["NAME"], "cont": rec["CONTINENT"], "rings": rings(g, tol if a3 not in named else tol * 0.7)}
out = {"countries": countries}

if spec.get("admin1"):
    want = set(spec["admin1"]); a1 = {}
    for key, rec, g in read(NE / "50m_cultural/ne_50m_admin_1_states_provinces.shp", lambda r: r["adm1_code"]):
        if rec["adm0_a3"] in want:
            a1[key] = {"name": rec["name"], "a3": rec["adm0_a3"], "rings": rings(g, tol)}
    out["admin1"] = a1
if spec.get("rivers"):
    rv = []
    for _, rec, g in read(NE / "50m_physical/ne_50m_rivers_lake_centerlines.shp", lambda r: r["name"]):
        if g.intersects(union):
            gs = [g] if g.geom_type == "LineString" else list(g.geoms)
            for ln in gs:
                ln = ln.simplify(tol)
                rv.append({"name": rec["name"], "pts": [[round(x, 3), round(y, 3)] for x, y in ln.coords]})
    out["rivers"] = rv

dst = ROOT / "engine/public" / vid
dst.mkdir(parents=True, exist_ok=True)
(dst / "geo.json").write_text(json.dumps(out, separators=(",", ":")))
n = sum(len(r) for c in countries.values() for r in c["rings"])
print(f"{vid}: geo {res} countries={len(countries)} pts={n} {(dst / 'geo.json').stat().st_size // 1024}KB")
