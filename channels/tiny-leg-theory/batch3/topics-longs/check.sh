python3 -I - "$1" <<'P'
import json,sys
j=json.load(open(sys.argv[1])); e=[]
if len(j)!=50: e.append(f"need 50 items, got {len(j)}")
for i,x in enumerate(j):
  want=f"L{8+i}"
  if x.get("id")!=want: e.append(f"item {i}: id must be {want}")
  if len(x.get("mechanisms",[]))<7: e.append(f"{want}: needs 8 mechanisms")
  if len(x.get("title",""))>70: e.append(f"{want}: title > 70 chars")
print("\n".join(e) or "OK"); sys.exit(1 if e else 0)
P
