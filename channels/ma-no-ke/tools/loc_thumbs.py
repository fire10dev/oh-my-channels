# loc_thumbs.py LANG — thumbnail LONG + bìa short bản ngoại ngữ: lấy props ThumbX tiếng Việt đã duyệt, thay chữ theo bảng TXT,
#   tự thu cỡ chữ cho vừa khung → video/src/data/loc/<lang>/thumbs.json (id → {w,h,props}). Comp: <LANG>-THUMB-P0N, <LANG>-COVER-P0N-SHk.
import json, sys, copy, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent; D = ROOT / 'video' / 'src' / 'data'
TXT = {'en': {
  'P01': None,   # P01 tiếng Việt chưa có props ThumbX → dựng mới bên dưới
  'P02': ('p02-thumbs', 'U1', ['ROLL', 'CALL', 'WRONG GUY!']),
  'P03': ('p03-thumbs', 'T1', ['DON\'T', 'OPEN']),
  'P04': ('p04-thumbs', 'T1', ['WHO\'S', 'THAT?']),
  'P03-SH': ['GHOST FILE|MA XO', 'HOUSE|GHOST?', 'BRIBE|A GHOST?', 'ALTAR|TOURS?', '30 FEET|…?', 'WHO\'S|COUNTING?', 'WHOSE|JAR?'],
  'P04-SH': ['GHOST FILE|MA GIAU', 'HIDDEN BY|A GHOST?', 'PERFECT|KID HACK', 'LUCKY|TRAY?', 'CAMERA OFF|3 DAYS', '4 PEOPLE|3 CHEWING', '2 AM|POWER CUT'],
  'P01-T': ["MOM'S HEAD", 'IS IN THE', 'RICE COOKER'], 'COMP-T': ['GHOSTS', 'ROAST THE LIVING'],
}, 'es': {
  'P02': ('p02-thumbs', 'U1', ['PASE DE', 'LISTA', '¡EL EQUIVOCADO!']),
  'P03': ('p03-thumbs', 'T1', ['NO LO', 'ABRAS']),
  'P04': ('p04-thumbs', 'T1', ['¿QUIÉN', 'ES ESE?']),
  'P03-SH': ['EXPEDIENTE|MA XO', '¿FANTASMA|EN CASA?', '¿SOBORNAR|AL FANTASMA?', '¿TOURS AL|ALTAR?', '10 METROS|…?', '¿QUIÉN|CUENTA?', '¿DE QUIÉN|ES EL JARRO?'],
  'P04-SH': ['EXPEDIENTE|MA GIAU', '¿ESCONDIDO|POR UN FANTASMA?', 'EL HIJO|PERFECTO', '¿BANDEJA|DE LA SUERTE?', 'CÁMARA OFF|3 DÍAS', '4 PERSONAS|3 MASTICAN', '2 AM|SIN LUZ'],
  'P01-T': ['LA CABEZA', 'DE MAMÁ ESTÁ', 'EN LA ARROCERA'], 'COMP-T': ['FANTASMAS', 'CONTRA LOS VIVOS'],
}}
P01 = {'bg': {'src': 'p01/img/S27.png', 'crop': [520, 60, 1528], 'filter': 'brightness(1.1) contrast(1.08)'},   # nồi cơm bên trái, chữ bên phải (vách tre trống)
       'shade': 'linear-gradient(270deg, rgba(5,7,13,.92) 0%, rgba(5,7,13,.7) 32%, rgba(0,0,0,0) 52%)',
       'texts': [{'t': "MOM'S HEAD", 'x': 1250, 'y': 110, 'size': 120, 'font': 'bangers', 'rough': True, 'color': '#ffffff', 'rot': 3, 'anchor': 'r'},
                 {'t': 'IS IN THE', 'x': 1250, 'y': 265, 'size': 120, 'font': 'bangers', 'rough': True, 'color': '#ffe14a', 'rot': 2, 'anchor': 'r'},
                 {'t': 'RICE COOKER', 'x': 1250, 'y': 430, 'size': 110, 'font': 'bangers', 'rough': True, 'color': '#ffe14a', 'band': '#b3121b', 'rot': -2, 'anchor': 'r'}]}

COMP = {'bg': {'src': 'loc/en/img/B01.png', 'crop': [0, 200, 2048], 'filter': 'brightness(1.1) contrast(1.08)'},   # cả dàn ma, chữ dưới
        'shade': 'linear-gradient(0deg, rgba(5,7,13,.92) 0%, rgba(5,7,13,.6) 30%, rgba(0,0,0,0) 50%)',
        'texts': [{'t': 'GHOSTS', 'x': 640, 'y': 400, 'size': 150, 'font': 'bangers', 'rough': True, 'color': '#ffffff', 'rot': -2, 'anchor': 'c'},
                  {'t': 'ROAST THE LIVING', 'x': 640, 'y': 560, 'size': 110, 'font': 'bangers', 'rough': True, 'color': '#ffe14a', 'band': '#b3121b', 'rot': 1, 'anchor': 'c'}]}

def fit(t, maxw):   # Bangers ≈ 0.47 em/ký tự
    t['size'] = int(min(t['size'], maxw / (0.47 * max(len(t['t']), 1))))

def main(lang):
    T = TXT[lang]; out = {}
    for key, base, w in (('P01-T', P01, 560), ('COMP-T', COMP, 1200)):
        p = copy.deepcopy(base)
        for t, x in zip(p['texts'], T[key]): t['t'] = x; fit(t, w)
        out[f"{lang.upper()}-THUMB-{'P01' if key == 'P01-T' else 'COMP-01'}"] = {'w': 1280, 'h': 720, 'p': p}
    for ep in ('P02', 'P03', 'P04'):
        f, k, words = T[ep]; p = copy.deepcopy(json.load(open(D / f'{f}.json'))[k])
        for t, w in zip(p['texts'], words): t['t'] = w; fit(t, 1200 if t.get('anchor') == 'c' else 640)
        out[f'{lang.upper()}-THUMB-{ep}'] = {'w': 1280, 'h': 720, 'p': p}
    for ep in ('P03', 'P04'):
        C = json.load(open(D / f'{ep.lower()}-covers.json'))
        for i, pair in enumerate(T[f'{ep}-SH']):
            p = copy.deepcopy(C[f'SH{i+1}'])
            for t, w in zip(p['texts'], pair.split('|')): t['t'] = w; fit(t, 1000)
            out[f'{lang.upper()}-COVER-{ep}-SH{i+1}'] = {'w': 1080, 'h': 1920, 'p': p}
    (D / 'loc' / lang).mkdir(parents=True, exist_ok=True)
    json.dump(out, open(D / 'loc' / lang / 'thumbs.json', 'w'), ensure_ascii=False, indent=0); print(len(out), 'ảnh')
main(sys.argv[1])
