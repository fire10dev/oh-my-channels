#!/usr/bin/env python3
"""publish_import.py PUBLISH.md --channel NAME [--apply] — đưa metadata đăng YouTube từ publish.md vào YT Hub.

publish.md (mẫu: channels/ma-no-ke/p01/publish.md) có:
  - khối "Cuối mỗi mô tả:" gồm các dòng "> …" (chân mô tả chung);
  - bảng | Giờ công chiếu (+07) | Mã | Tiêu đề | Mô tả (dòng đầu) |.
Mỗi dòng bảng → ythub set CODE: --title (tiêu đề YouTube), --description (dòng đầu + chân chung),
--notes "Lịch đăng: …" (giữ notes cũ), --linked-url (short → url của *-LONG cùng file nếu đã có).
Mặc định dry-run; --apply ghi qua CLI `ythub` (actor agent:publish-import).
"""
import argparse, os, re, sqlite3, subprocess, tempfile
from datetime import date
from pathlib import Path

DB = Path(os.environ.get('YTHUB_DB', Path.home() / 'Library/Application Support/YTHub/ythub.db'))


def when(s):
    m = re.search(r'(\d{1,2})/(\d{1,2})(?:\s+(\d{1,2}:\d{2}))?', s)
    if not m: return s.strip()
    d = date(date.today().year, int(m[2]), int(m[1]))
    rest = re.sub(r'^[^)]*?\d{1,2}/\d{1,2}(\s+\d{1,2}:\d{2})?', '', s).strip()
    return f"{d.isoformat()}{' ' + m[3] if m[3] else ''} +07{(' ' + rest) if rest else ''}"


def parse(md):
    footer, rows, in_footer = [], [], False
    for line in md.splitlines():
        if line.startswith('Cuối mỗi mô tả'): in_footer = True; continue
        if in_footer:
            if line.startswith('>'): footer.append(line.lstrip('> ').rstrip()); continue
            if line.strip(): in_footer = False
        cells = [c.strip() for c in line.strip().strip('|').split('|')]
        if line.startswith('|') and len(cells) >= 4 and re.match(r'^[A-Z]\d+-', cells[1]):
            rows.append({'when': cells[0], 'code': cells[1], 'title': cells[2], 'desc': cells[3]})
    return footer, rows


def main():
    ap = argparse.ArgumentParser(); ap.add_argument('publish_md'); ap.add_argument('--channel', required=True); ap.add_argument('--apply', action='store_true')
    a = ap.parse_args()
    src = Path(a.publish_md).resolve()
    footer, rows = parse(src.read_text())
    con = sqlite3.connect(DB)
    cur = {r[0]: r[1:] for r in con.execute(
        'select v.code, v.kind, v.notes, v.yt_url from video v join channel c on c.id = v.channel_id where c.name = ?', (a.channel,))}
    long_url = next((cur[r['code']][2] for r in rows if r['code'].endswith('LONG') and r['code'] in cur), '')
    print(f'{src.name}: {len(rows)} video, chân mô tả {len(footer)} dòng')
    for r in rows:
        if r['code'] not in cur: print(f"  ?? {r['code']} không có trong hub"); continue
        kind, notes, _ = cur[r['code']]
        sched = f"Lịch đăng: {when(r['when'])} ({src.parent.name}/{src.name})"
        new_notes = '\n'.join(l for l in [*(x for x in notes.splitlines() if not x.startswith('Lịch đăng:')), sched] if l)
        desc = r['desc'] + ('\n\n' + '\n'.join(footer) if footer else '')
        args = ['set', r['code'], '--channel', a.channel, '--title', r['title'], '--notes', new_notes]
        if kind == 'short' and long_url: args += ['--linked-url', long_url]
        print(f"  {r['code']}: {sched} | {r['title'][:60]}")
        if a.apply:
            with tempfile.NamedTemporaryFile('w', suffix='.txt', delete=False) as f: f.write(desc)
            subprocess.run(['ythub', *args, '--description-file', f.name], check=True, stdout=subprocess.DEVNULL,
                           env={**os.environ, 'YTHUB_ACTOR': 'agent:publish-import'})
            os.unlink(f.name)


if __name__ == '__main__':
    main()
