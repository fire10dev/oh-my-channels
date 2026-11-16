import json, subprocess

with open('longs/L16-vi/r0.json.tmp') as f:
    d = json.load(f)

# Let's inspect chapter lines and word lengths
for ci, c in enumerate(d['chapters']):
    print(f"--- Chapter {ci}: {c['title']} ({len(c['lines'])} lines) ---")
    for li, l in enumerate(c['lines']):
        w = len(l['vo'].split())
        print(f"  [{l['speaker']}] ({w}w): {l['vo']}")

