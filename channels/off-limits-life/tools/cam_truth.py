"""Ground-truth camera motion per shot for an IX2 engine long (mirrors buildShots + cam() in src/IX2*.tsx).

Used to score frame_teardown's push-in / pan measurement against what the engine actually rendered.
Usage: python3 tools/cam_truth.py src/data/ix005.json src/data/ix005.timeline.json [fps]
Prints JSON list: {from, frames, kind, k, scale, drift_px}
"""
import json
import sys

MAX_MERGE = 5.4


def truth(data: dict, tl: dict, fps: float = 30.0) -> list:
    out, prev, k = [], '', 0
    for g in tl['segs']:
        ch = data['chapters'][g['ch']]
        if g['type'] == 'card':
            out.append({'from': g['start'], 'dur': g['dur'], 'kind': 'card', 'k': k, 'st': False})
            k += 1
            prev = ''
            continue
        sh = ch['shots'][g['i']]
        key = json.dumps([sh.get('v'), sh.get('you'), sh.get('d'), sh.get('tod', ch.get('tod')), sh.get('plane')])
        last = out[-1] if out else None
        if last and key == prev and not sh.get('d') and not sh.get('st') and not last['st'] and last['dur'] + g['dur'] < MAX_MERGE:
            last['dur'] += g['dur']
        else:
            out.append({'from': g['start'], 'dur': g['dur'], 'kind': 'board' if sh.get('d') else 'world', 'k': k, 'st': bool(sh.get('st'))})
            k += 1
        prev = key
    res = []
    for i, s in enumerate(out):
        end = tl['total'] if i == len(out) - 1 else out[i + 1]['from']
        a, b = round(s['from'] * fps), round(end * fps)
        m = [0, 1, 3, 2, 3, 3, 1][s['k'] % 7]
        world = s['kind'] == 'world'
        scale = (1.055 if m in (0, 2) else 1.10 if m == 1 else 1.0) if world else 1.0
        drift = 180 if world and s['k'] % 25 == 12 else 0
        res.append({'from': a, 'frames': max(1, b - a), 'kind': s['kind'], 'k': s['k'], 'scale': scale, 'drift_px': drift})
    return res


if __name__ == '__main__':
    d, t = json.load(open(sys.argv[1])), json.load(open(sys.argv[2]))
    print(json.dumps(truth(d, t, float(sys.argv[3]) if len(sys.argv) > 3 else 30.0)))
