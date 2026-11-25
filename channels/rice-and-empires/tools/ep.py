"""Episode folders: map a video code (L009, L009-SH3, S013, l009, l009sh3) to its folder under episodes/.

Layout (one folder per LONG = one episode; standalone shorts in episodes/standalone-shorts/):
  episodes/Ep09-Nanyue/
    ep.json                 {"code": "L009", "vid": "l009", "name": "Nanyue"}
    long/                   script.md, plan.md, say.json, render/ (final mp4, preview, contact sheet)
    shorts/                 script.md, SH1/ … SH7/ (mp4, cover, sheet; build/ = TTS, symlinked from shorts/public/l009shN)
    assets/                 images + clips (symlinked from shorts/public/l009 — Remotion reads public/)
    metadata/               long.md, shorts.md, scheduler.md, thumbnails/, *-description.txt
    reviews/                fact-check + image reviews
  episodes/standalone-shorts/S013-Funan/   script.md, plan.md, say.json, assets/, render/, metadata/, reviews/

Usage: python3 tools/ep.py L009            → episodes/Ep09-Nanyue   (names `script`, `say` = the main script / TTS spellings)
       python3 tools/ep.py L009-SH3        → episodes/Ep09-Nanyue/shorts/SH3
       python3 tools/ep.py S013 script.md  → episodes/standalone-shorts/S013-Funan/script.md
"""
import json, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
EPS = ROOT / 'episodes'


def find(code: str) -> pathlib.Path:
    m = re.fullmatch(r'([LS]\d{3})(?:-?SH(\d+))?', code.upper())
    if not m:
        raise SystemExit(f'bad code {code!r}')
    base, sh = m.groups()
    for f in EPS.glob('**/ep.json'):
        if json.loads(f.read_text())['code'] == base:
            d = f.parent
            return d / 'shorts' / f'SH{sh}' if sh else d
    raise SystemExit(f'no episode folder for {base} (create episodes/EpNN-<Name>/ep.json)')


if __name__ == '__main__':
    p = find(sys.argv[1])
    rel = sys.argv[2] if len(sys.argv) > 2 else ''
    if rel == 'script':  # LONG script of an episode, or the script of a standalone short
        rel = 'long/script.md' if (p / 'long').is_dir() else 'script.md'
    if rel == 'say':
        rel = 'long/say.json' if (p / 'long').is_dir() else 'say.json'
    print(p / rel if rel else p)
