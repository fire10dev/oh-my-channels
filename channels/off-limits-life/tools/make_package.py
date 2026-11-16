"""Publishing package scripts/<ID>-<slug>.md from a meta JSON + the long's data/timeline (chapter times come from the timeline).
Usage: python3 tools/make_package.py META.json   (META: id, vid, slug, title, intro, asof_line, tags, music, sources[], comment, shorts[[id,title,hook]])"""
import json, sys
m = json.load(open(sys.argv[1]))
d = json.load(open(f"src/data/{m['vid']}.json")); t = json.load(open(f"src/data/{m['vid']}.timeline.json"))
ts = lambda s: f"{int(s // 60)}:{int(s % 60):02d}"
ch, seen = [], set()
for g in t['segs']:
    c = d['chapters'][g['ch']]
    if g['ch'] in seen: continue
    seen.add(g['ch'])
    name = c['card'][1].title() if c.get('card') else m.get('hook_chapter', 'Intro')
    ch.append(f"{ts(0 if not ch else g['start'])} {name}")
dur = ts(t['total'] + 2)
src = '\n'.join(f"- {s}" for s in m['sources'])
desc = f"""{m['intro']}

{m['asof_line']}

Chapters
{chr(10).join(ch)}

Sources (accessed 2026-11-15)
{src}

Illustrations are code-animated; the narration voice is AI-generated. Spotted an error? Tell us in the comments and we'll pin the correction.

Music: {m['music']} (YouTube Audio Library).

{m.get('hashtags', '#offlimitslife')}"""
shorts = '\n'.join(f"- `out/upload/Short-{s[0]}.mp4` · **{s[1]}** · overlay hook \"{s[2]}\"" for s in m.get('shorts', []))
out = f"""# {m['id']} — {m['title']}

Status: script + TTS + bed done 2026-11-15/16; engine `src/IX2W.tsx` world `{d.get('world', '')}`, composition `{m['id']}-{m['slug']}`. Narration source `scripts/{m['id']}-{m['slug']}.txt` ({sum(len(c['shots']) for c in d['chapters'])} lines, {dur}).

## Publishing
- File: `out/upload/{m['id']}-{m['slug']}.mp4` · Thumbnail: `out/upload/Thumb-{m['id']}.jpg`
- **Title:** {m['title']}
- **Altered/synthetic content:** No. AI voice disclosed. Not made for kids.
- **Tags:** {m['tags']}
- **Music:** {m['music']} (YouTube Audio Library).

**Description:**
```
{desc}
```
- **Pinned comment (draft):** "{m['comment']}"

## Shorts (post after the long is public; set Related video = this long; replace <{m['id']} link>)
{shorts}
Short description template:
```
<title>. Full video: <{m['id']} link>
{m['asof_line']} Illustrations are code-animated; narration voice is AI-generated.
#shorts {m.get('hashtags', '#offlimitslife')}
```
"""
open(f"scripts/{m['id']}-{m['slug']}.md", 'w').write(out); print(f"scripts/{m['id']}-{m['slug']}.md", dur, len(ch), 'chapters')
