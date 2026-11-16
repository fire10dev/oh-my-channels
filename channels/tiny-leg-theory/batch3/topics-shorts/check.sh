python3 -I - "$1" <<'P'
import json,sys
j=json.load(open(sys.argv[1])); ex={m.lower() for m in json.load(open('/Users/nino/Projects/FIRE10.DEV/REPO/stickman-ab/batch3/existing-mechanisms.json'))}
e=[]
if len(j)!=100: e.append(f"need 100 items, got {len(j)}")
for i,x in enumerate(j):
  want=f"s{131+i}"
  if x.get("id")!=want: e.append(f"item {i}: id must be {want}")
  if x.get("mascot")!=("pen" if (131+i)%2 else "buff"): e.append(f"{want}: mascot must be {'pen' if (131+i)%2 else 'buff'}")
  if x.get("mechanism","").lower() in ex: e.append(f"{want}: mechanism already used: {x['mechanism']}")
  if len(x.get("title",""))>45: e.append(f"{want}: title > 45 chars")
m=[x.get("mechanism","").lower() for x in j]
d={k for k in m if m.count(k)>1}
if d: e.append(f"duplicate mechanisms: {sorted(d)}")
print("\n".join(e) or "OK"); sys.exit(1 if e else 0)
P
