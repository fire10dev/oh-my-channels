# analyze.py — bảng tổng hợp mỗi kênh + view tương đối theo nhóm thời lượng short (view / trung vị kênh)
import json, glob, re, statistics as st, collections
S = [json.loads(l) for l in open('raw/shorts-full.jsonl')]
part = re.compile(r'(phần|part|tập|ep\.?|episode)\s*\d|\d+\s*/\s*\d+', re.I)
link = re.compile(r'(youtu\.?be|youtube\.com/watch|full|bản đầy đủ|xem tiếp|link)', re.I)
by = collections.defaultdict(list)
for s in S:
    if s['dur']: by[s['ch']].append(s)
print('| Kênh | Sub | n short | Short trung vị (s) | p25–p75 (s) | View short trung vị | % đánh số phần | % mô tả có link/full | Video dài trung vị (phút) | View video dài trung vị |')
print('|---|---|---|---|---|---|---|---|---|---|')
rows = []
for c, L in by.items():
    d = sorted(x['dur'] for x in L); v = [x['views'] or 0 for x in L]
    q = st.quantiles(d, n=4) if len(d) > 2 else [d[0], 0, d[-1]]
    V = [json.loads(l) for l in open(f'raw/{c}-videos.jsonl')]
    vd = [x['duration'] for x in V if x['duration']]; vv = [x['view_count'] or 0 for x in V]
    rows.append((c, L[0]['subs'] or 0, len(L), st.median(d), f'{q[0]:.0f}–{q[2]:.0f}', int(st.median(v)),
                 round(100 * sum(bool(part.search(x['title'])) for x in L) / len(L)),
                 round(100 * sum(bool(link.search(x['desc'])) for x in L) / len(L)),
                 round(st.median(vd) / 60, 1) if vd else '-', int(st.median(vv)) if vv else '-'))
for r in sorted(rows, key=lambda r: -r[1]):
    print('| ' + ' | '.join(f'{x:,}' if isinstance(x, int) else str(x) for x in r) + ' |')
# view tương đối theo nhóm thời lượng
B = [(0, 30), (30, 45), (45, 60), (60, 90), (90, 181)]
rel = collections.defaultdict(list)
for c, L in by.items():
    if len(L) < 8: continue
    m = st.median([x['views'] or 0 for x in L]) or 1
    for x in L:
        for a, b in B:
            if a <= x['dur'] < b: rel[(a, b)].append((x['views'] or 0) / m)
print('\n| Thời lượng short | n | View / trung vị kênh (trung vị) | % short vượt 2× trung vị kênh |\n|---|---|---|---|')
for a, b in B:
    r = rel[(a, b)]
    if r: print(f'| {a}–{b} s | {len(r)} | {st.median(r):.2f}× | {100*sum(x>2 for x in r)/len(r):.0f}% |')
print('\nTổng short có duration:', sum(len(L) for L in by.values()))
