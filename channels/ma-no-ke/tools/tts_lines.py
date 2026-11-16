# tts_lines.py LINES.json OUTDIR  — VieNeu, mỗi câu 1 wav, chạy lại được (bỏ qua file đã có)
import json,sys,pathlib,time
from vieneu import Vieneu
VOICE={'MN':'Thiện Minh','BT':'Ngọc Linh','TUNG':'Thanh Bình','HANH':'Quỳnh Anh'}
L=json.load(open(sys.argv[1])); out=pathlib.Path(sys.argv[2]); out.mkdir(parents=True,exist_ok=True)
v=Vieneu(); t0=time.time(); n=0
for it in L:
    if it['voice']=='SFX': continue
    f=out/f"{it['i']:03d}.wav"
    if f.exists() and f.stat().st_size>1000: continue
    try:
        v.save(v.infer(it['text'],voice=VOICE[it['voice']]),str(f)); n+=1
    except Exception as e: print('ERR',it['i'],e,flush=True)
    if n%20==0: print(f"{n} câu, {time.time()-t0:.0f}s",flush=True)
print('XONG',n,f"{time.time()-t0:.0f}s",flush=True)
