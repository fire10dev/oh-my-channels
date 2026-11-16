import {Composition, Still} from 'remotion';
import {FX_FPS, FX_FRAMES, FxSample} from './FxSample';
import {FPS as SC_FPS, FxScene, sceneFrames} from './FxScene';
import {pilotInvasion, pilotStakes, pilotUprising} from './fxPilots';
import {LongVideo as LongVideoL003, longTotal as longTotalL003} from './LongVideoL003';
import {Avatar, Banner, BannerSafe} from './Brand';
import {FPS, ListShort, totalFrames} from './ListShort';
import s001 from './s001.json';
import s001t from './s001.timeline.json';
import s002 from './s002.json';
import s002t from './s002.timeline.json';
import s003 from './s003.json';
import s003t from './s003.timeline.json';

import s004 from './s004.json';
import s004t from './s004.timeline.json';

import s005 from './s005.json';
import s005t from './s005.timeline.json';

import s006 from './s006.json';
import s006t from './s006.timeline.json';

import s007 from './s007.json';
import s007t from './s007.timeline.json';

import s008 from './s008.json';
import s008t from './s008.timeline.json';

import s009 from './s009.json';
import s009t from './s009.timeline.json';

import s010 from './s010.json';
import s010t from './s010.timeline.json';

import s011 from './s011.json';
import s011t from './s011.timeline.json';

import {LFPS, LongVideo, longTotal} from './LongVideo';
import {Thumb} from './Thumb';
import l003 from './l003.json';
import l003t from './l003.timeline.json';
import l003fx from './l003.fx.json';
import l003plx from './l003.plx.json';
import {l003Vfx} from './l003.vfx';

// L003 has its own composition (LongVideoL003: parallax + VFX, as published). L007+ use LongVideo.
const SAMPLE_IDS = ['41', '42', '43', '44'];
const l003SampleRows = (l003 as any).rows
  .filter((r: any) => SAMPLE_IDS.includes(r.id))
  .map((r: any) => (r.id === '43' ? {...r, shots: r.shots.filter((x: any) => x.k !== 'clip')} : {...r, cardBefore: null, cardAfter: null}));
const l003Sample = {...(l003 as any), rows: l003SampleRows, plx: l003plx, fx: l003fx, music: [{src: 'bgm/sb-the-fury.mp3', fromCh: 6, gain: 1.6}]};
const l003SampleT = (l003t as any[]).filter((t, i) => SAMPLE_IDS.includes((l003 as any).rows[i].id));
import l007 from './l007.json';
import l007t from './l007.timeline.json';
import l008 from './l008.json';
import l008t from './l008.timeline.json';
import s012 from './s012.json';
import s012t from './s012.timeline.json';

export const RemotionRoot: React.FC = () => (
  <>
    <Still id="Avatar" component={Avatar} width={800} height={800} />
    <Still id="Banner" component={Banner} width={2560} height={1440} />
    <Still id="BannerSafe" component={BannerSafe} width={2560} height={1440} />
    <Composition
      id="S001"
      component={ListShort}
      defaultProps={{scenes: s001, timeline: s001t, dir: 's001', bgm: 's001/bgm.mp3'}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(s001t)}
    />
    <Composition
      id="S002"
      component={ListShort}
      defaultProps={{scenes: s002, timeline: s002t, dir: 's002', bgm: 'bgm/ambient.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(s002t)}
    />
    <Composition
      id="S003"
      component={ListShort}
      defaultProps={{scenes: s003, timeline: s003t, dir: 's003', bgm: 'bgm/ambient.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(s003t)}
    />
    <Composition
      id="S004"
      component={ListShort}
      defaultProps={{scenes: s004, timeline: s004t, dir: 's004', bgm: 'bgm/ambient.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(s004t)}
    />
    <Composition
      id="S005"
      component={ListShort}
      defaultProps={{scenes: s005, timeline: s005t, dir: 's005', bgm: 'bgm/ambient.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(s005t)}
    />
    <Composition
      id="S006"
      component={ListShort}
      defaultProps={{scenes: s006, timeline: s006t, dir: 's006', bgm: 'bgm/ambient.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(s006t)}
    />
    <Composition
      id="S007"
      component={ListShort}
      defaultProps={{scenes: s007, timeline: s007t, dir: 's007', bgm: 'bgm/ambient.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(s007t)}
    />
    <Composition
      id="S008"
      component={ListShort}
      defaultProps={{scenes: s008, timeline: s008t, dir: 's008', bgm: 'bgm/ambient.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(s008t)}
    />
    <Composition
      id="S009"
      component={ListShort}
      defaultProps={{scenes: s009, timeline: s009t, dir: 's009', bgm: 'bgm/ambient.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(s009t)}
    />
    <Composition
      id="S010"
      component={ListShort}
      defaultProps={{scenes: s010, timeline: s010t, dir: 's010', bgm: 'bgm/ambient.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(s010t)}
    />
    <Composition
      id="S011"
      component={ListShort}
      defaultProps={{scenes: s011, timeline: s011t, dir: 's011', bgm: 'bgm/ambient.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(s011t)}
    />
    <Still id="L008Thumb" component={Thumb} width={1280} height={720} defaultProps={{bg: 'l008/img-01.jpg', big: '1,000 YEARS', line: 'OF CHAMPA', tag: 'Where did it go?'}} />
    <Still id="L003Thumb" component={Thumb} width={1280} height={720} defaultProps={{bg: 'l003/thumb-bg.jpg', big: '1,000 YEARS', line: 'OF CHINESE RULE?', tag: 'What the sources say'}} />
    <Composition id="PilotUprising" component={FxScene} defaultProps={{scene: pilotUprising}} fps={SC_FPS} width={1920} height={1080} durationInFrames={sceneFrames(pilotUprising)} />
    <Composition id="PilotInvasion" component={FxScene} defaultProps={{scene: pilotInvasion}} fps={SC_FPS} width={1920} height={1080} durationInFrames={sceneFrames(pilotInvasion)} />
    <Composition id="PilotStakes" component={FxScene} defaultProps={{scene: pilotStakes}} fps={SC_FPS} width={1920} height={1080} durationInFrames={sceneFrames(pilotStakes)} />
    <Composition id="FxSample" component={FxSample} fps={FX_FPS} width={1920} height={1080} durationInFrames={FX_FRAMES} />
    <Composition
      id="L003Sample"
      component={LongVideoL003}
      defaultProps={{data: l003Sample as any, timeline: l003SampleT, vid: 'l003'}}
      fps={LFPS}
      width={1920}
      height={1080}
      durationInFrames={longTotalL003(l003Sample as any, l003SampleT)}
    />
    <Composition
      id="L003"
      component={LongVideoL003}
      defaultProps={{data: {...(l003 as any), fx: l003Vfx}, timeline: l003t, vid: 'l003'}}
      width={1920}
      height={1080}
      fps={LFPS}
      durationInFrames={longTotalL003(l003 as any, l003t)}
    />
    <Still id="L007Thumb" component={Thumb} width={1280} height={720} defaultProps={{bg: 'l007/thumb-bg.jpg', big: 'EMPEROR', line: 'AT HOME. VASSAL ABROAD.', tag: 'Tribute diplomacy, 939–1885'}} />
    <Composition
      id="L007"
      component={LongVideo}
      defaultProps={{data: l007 as any, timeline: l007t, vid: 'l007'}}
      width={1920}
      height={1080}
      fps={LFPS}
      durationInFrames={longTotal(l007 as any, l007t)}
    />
    <Composition
      id="L008"
      component={LongVideo}
      defaultProps={{data: l008 as any, timeline: l008t, vid: 'l008'}}
      width={1920}
      height={1080}
      fps={LFPS}
      durationInFrames={longTotal(l008 as any, l008t)}
    />
    <Composition
      id="S012"
      component={ListShort}
      defaultProps={{scenes: s012, timeline: s012t, dir: 's012', bgm: 'bgm/ambient.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(s012t)}
    />
  </>
);
