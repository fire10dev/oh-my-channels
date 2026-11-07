"""Register shorts/src/<vid>.json as Composition <ID> in Root.tsx (idempotent). Usage: python3 tools/register.py s004"""
import sys, pathlib
vid = sys.argv[1]; ID = vid.upper(); p = pathlib.Path('shorts/src/Root.tsx'); s = p.read_text()
if f'id="{ID}"' in s: sys.exit(print('already'))
imp = f"import {vid} from './{vid}.json';\nimport {vid}t from './{vid}.timeline.json';\n"
s = s.replace("\nexport const RemotionRoot", "\n" + imp.rstrip('\n') + "\n\nexport const RemotionRoot", 1) if imp not in s else s
blk = f"""    <Composition
      id="{ID}"
      component={{ListShort}}
      defaultProps={{{{scenes: {vid}, timeline: {vid}t, dir: '{vid}', bgm: 'bgm/ambient.mp3', bgmVolume: 0.12, numbered: false}}}}
      width={{1080}}
      height={{1920}}
      fps={{FPS}}
      durationInFrames={{totalFrames({vid}t)}}
    />
  </>"""
p.write_text(s.replace("  </>", blk, 1)); print('registered', ID)
