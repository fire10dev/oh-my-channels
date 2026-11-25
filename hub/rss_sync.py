#!/usr/bin/env python3
"""rss_sync.py [--apply] [--channel NAME] — đối chiếu RSS YouTube của từng kênh (channel.yt_channel_id) với YT Hub.

RSS chỉ chứa ~15 video CÔNG KHAI mới nhất. Với mỗi video trong RSS:
  - khớp video hub theo id trong yt_url (sửa nếu sai hoa/thường), nếu không có thì theo tiêu đề y hệt;
  - chưa published → stage published + published_at (giờ +07) + yt_url nếu trống;
  - ghi fact `views` (lượt xem lúc fetch).
Mặc định chỉ in (dry-run); --apply mới ghi qua CLI `ythub` (có nhật ký, actor agent:rss-sync).
"""
import argparse, os, sqlite3, subprocess, urllib.request, xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from pathlib import Path

NS = {'a': 'http://www.w3.org/2005/Atom', 'yt': 'http://www.youtube.com/xml/schemas/2015', 'media': 'http://search.yahoo.com/mrss/'}
DB = Path(os.environ.get('YTHUB_DB', Path.home() / 'Library/Application Support/YTHub/ythub.db'))
ICT = timezone(timedelta(hours=7))


def fetch(cid):
    req = urllib.request.Request(f'https://www.youtube.com/feeds/videos.xml?channel_id={cid}', headers={'User-Agent': 'Mozilla/5.0'})
    root = ET.fromstring(urllib.request.urlopen(req, timeout=20).read())
    for e in root.findall('a:entry', NS):
        st = e.find('media:group/media:community/media:statistics', NS)
        yield {'id': e.find('yt:videoId', NS).text, 'title': e.find('a:title', NS).text.strip(),
               'published': datetime.fromisoformat(e.find('a:published', NS).text).astimezone(ICT).strftime('%Y-%m-%d %H:%M'),
               'views': st.get('views') if st is not None else None}


def ythub(*args, apply):
    cmd = ['ythub', *args]
    if apply:
        subprocess.run(cmd, check=True, env={**os.environ, 'YTHUB_ACTOR': 'agent:rss-sync'}, stdout=subprocess.DEVNULL)
    print('   ' + ('' if apply else '(dry) ') + ' '.join(cmd[1:]))


def main():
    ap = argparse.ArgumentParser(); ap.add_argument('--apply', action='store_true'); ap.add_argument('--channel')
    a = ap.parse_args()
    con = sqlite3.connect(DB)
    q = "select id, name, yt_channel_id from channel where yt_channel_id != ''" + (' and name = ?' if a.channel else '')
    for ch_id, name, cid in con.execute(q, (a.channel,) if a.channel else ()).fetchall():
        vids = con.execute('select code, kind, stage, yt_url, title, published_at from video where channel_id = ?', (ch_id,)).fetchall()
        entries = list(fetch(cid))
        print(f'== {name}: {len(entries)} video công khai trong RSS')
        for e in entries:
            m = [v for v in vids if e['id'] in v[3]] or [v for v in vids if e['id'].lower() in v[3].lower()] or [v for v in vids if v[4].strip() == e['title']]
            if not m:
                print(f"  ?? {e['id']} không có trong hub: {e['title'][:70]}"); continue
            code, kind, stage, url, _, pub = m[0]
            want = f"https://youtube.com/shorts/{e['id']}" if kind == 'short' else f"https://youtu.be/{e['id']}"
            args = []
            if stage != 'published': args += ['--stage', 'published']
            if not pub: args += ['--published-at', e['published']]
            if e['id'] not in url: args += ['--yt-url', want]
            if args or e['views']:
                print(f"  {code} ({stage}) {e['id']} views={e['views']}")
            if args: ythub('set', code, '--channel', name, *args, apply=a.apply)
            if e['views']: ythub('fact', code, 'views', e['views'], '--channel', name, apply=a.apply)


if __name__ == '__main__':
    main()
