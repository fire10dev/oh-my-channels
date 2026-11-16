"""Reference band (p10-p90 over reference teardowns) + projected pacing of a script/timeline.
Usage: python3 tools/pace_check.py [TEARDOWN_DIR (default out/teardown)] -> TEARDOWN_DIR/ref-band.json"""
import json, glob, sys, numpy as np
D=sys.argv[1] if len(sys.argv)>1 else 'out/teardown'
rows=[]
for f in sorted(glob.glob(f'{D}/ref-*/summary.json')):
    s=json.load(open(f)); a=s['audio']; rows.append([s['cuts_per_min'],s['shot_median'],s['shot_p10'],s['shot_p90'],s['pct_push_in'],s['pct_static'],s['pct_pan_over_100px'],a['lufs_i'],a['lra']])
R=np.array(rows); names=['cuts_per_min','shot_median','shot_p10','shot_p90','pct_push_in','pct_static','pct_pan_over_100px','lufs_i','lra']
band={n:[round(float(np.percentile(R[:,i],10)),2),round(float(np.percentile(R[:,i],90)),2)] for i,n in enumerate(names)}
band['n_videos']=len(R)
json.dump(band,open(f'{D}/ref-band.json','w'),indent=1); print(json.dumps(band))
