# v2.py NN slug — đọc stdin: dòng đầu = header v2 (nhiều dòng tới dòng '@@'), sau đó các cặp OLD\n%%\nNEW\n@@
import sys,re,glob
n,slug=sys.argv[1:3]
src=f"scripts/p{n}-{slug}-v1.md"; dst=src.replace("-v1.md","-v2.md")
t=open(src).read(); parts=sys.stdin.read().split("\n@@\n")
head=parts[0].strip()
for p in parts[1:]:
    if not p.strip(): continue
    o,nw=p.split("\n%%",1); o=o.strip("\n"); nw=nw.strip("\n")
    assert o in t, "MISS: "+o[:80]
    t=t.replace(o+"\n","",1) if not nw and o+"\n" in t else t.replace(o,nw,1)
t=re.sub(r"\(v1, 2026-11-21\)","(v2, 2026-11-21)",t,count=1)
lines=t.split("\n",2); t=lines[0]+"\n\n"+head+"\n"+("\n"+lines[2] if len(lines)>2 else "")
open(dst,"w").write(t); print("ok",dst)
