# split_script.py SCRIPT.md SCENES.json OUT.json -> danh sách câu {i,voice,text,scene}
import re,json,sys
src,scn,out=sys.argv[1:4]
V={'MN':'MN','BT':'BT','NV — Tùng':'TUNG','NV — bà Hạnh':'HANH'}
voice='MN'; items=[]
for line in open(src).read().splitlines():
    s=line.strip()
    if not s or s.startswith(('#','>','---')): continue
    if s=='*CỘC!*': items.append({'voice':'SFX','text':'CỘC'}); continue
    m=re.match(r'\*\*\[([^\]]+)\]\*\*\s*(.*)',s)
    if m: voice=V[m.group(1)]; s=m.group(2)
    s=re.sub(r'\*\([^)]*\)\*','',s).replace('*','').strip()
    if not s: continue
    for sent in re.findall(r'[^.!?…]+(?:\.\.\.|[.!?…]+)?["”]?',s):
        sent=sent.strip()
        if len(sent)>1: items.append({'voice':voice,'text':sent})
scenes=json.load(open(scn)); sc=0
cues=[re.sub(r'[^\w ]','',c['cue']).lower() for c in scenes]
for it in items:
    norm=re.sub(r'[^\w ]','',it['text']).lower()
    if sc+1<len(cues) and cues[sc+1] and cues[sc+1][:25] in norm: sc+=1
    it['scene']=scenes[sc]['n']
for i,it in enumerate(items): it['i']=i
json.dump(items,open(out,'w'),ensure_ascii=False,indent=0)
from collections import Counter
print(len(items),'câu; cảnh khớp tới', items[-1]['scene'], Counter(x['voice'] for x in items))
