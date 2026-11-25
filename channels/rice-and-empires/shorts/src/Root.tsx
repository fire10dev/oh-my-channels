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
import l009 from './l009.json';
import l009t from './l009.timeline.json';
import s012 from './s012.json';
import s012t from './s012.timeline.json';

import l008sh1 from './l008sh1.json';
import l008sh1t from './l008sh1.timeline.json';

import l008sh2 from './l008sh2.json';
import l008sh2t from './l008sh2.timeline.json';

import l008sh3 from './l008sh3.json';
import l008sh3t from './l008sh3.timeline.json';

import l008sh4 from './l008sh4.json';
import l008sh4t from './l008sh4.timeline.json';

import l008sh5 from './l008sh5.json';
import l008sh5t from './l008sh5.timeline.json';

import l008sh6 from './l008sh6.json';
import l008sh6t from './l008sh6.timeline.json';

import l008sh7 from './l008sh7.json';
import l008sh7t from './l008sh7.timeline.json';

import {Cover} from './Cover';

import s013 from './s013.json';
import s013t from './s013.timeline.json';
import s013m from './s013.music.json';

import l009sh1 from './l009sh1.json';
import l009sh1t from './l009sh1.timeline.json';

import l009sh2 from './l009sh2.json';
import l009sh2t from './l009sh2.timeline.json';

import l009sh3 from './l009sh3.json';
import l009sh3t from './l009sh3.timeline.json';

import l009sh4 from './l009sh4.json';
import l009sh4t from './l009sh4.timeline.json';

import l009sh5 from './l009sh5.json';
import l009sh5t from './l009sh5.timeline.json';

import l009sh6 from './l009sh6.json';
import l009sh6t from './l009sh6.timeline.json';

import l009sh7 from './l009sh7.json';
import l009sh7t from './l009sh7.timeline.json';

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
    <Still id="L009SH1Cover" component={Cover} width={1080} height={1920} defaultProps={{bg: 'l009/img-03.jpg', big: 'KING OR EMPEROR?', tag: 'NANYUE'}} />
    <Still id="L009SH2Cover" component={Cover} width={1080} height={1920} defaultProps={{bg: 'l009/img-13.jpg', big: 'I AM KING HERE', tag: 'NANYUE'}} />
    <Still id="L009SH3Cover" component={Cover} width={1080} height={1920} defaultProps={{bg: 'l009/img-22.jpg', big: 'EMPEROR AT HOME', tag: 'NANYUE'}} />
    <Still id="L009SH4Cover" component={Cover} width={1080} height={1920} defaultProps={{bg: 'l009/img-24.jpg', big: 'LEGEND VS DIG', tag: 'NANYUE'}} />
    <Still id="L009SH5Cover" component={Cover} width={1080} height={1920} defaultProps={{bg: 'l009/img-35.jpg', big: '111 BC', tag: 'NANYUE'}} />
    <Still id="L009SH6Cover" component={Cover} width={1080} height={1920} defaultProps={{bg: 'l009/img-38.jpg', big: 'HERO OR INVADER?', tag: 'NANYUE'}} />
    <Still id="L009SH7Cover" component={Cover} width={1080} height={1920} defaultProps={{bg: 'l009/img-10.jpg', big: 'CHINESE OR VIETNAMESE?', tag: 'NANYUE'}} />
    <Still id="L009Thumb" component={Thumb} width={1280} height={720} defaultProps={{bg: 'l009/thumb-a.jpg', big: 'WHOSE\nKINGDOM?', bigSize: 112, shift: 330, line: 'NANYUE', tag: 'China or Vietnam?'}} />
    <Still id="L009ThumbB" component={Thumb} width={1280} height={720} defaultProps={{bg: 'l009/thumb-b.jpg', big: 'WHOSE\nKINGDOM?', bigSize: 128, line: 'NANYUE', tag: 'China or Vietnam?'}} />
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
      id="L009"
      component={LongVideo}
      defaultProps={{data: l009 as any, timeline: l009t, vid: 'l009'}}
      width={1920}
      height={1080}
      fps={LFPS}
      durationInFrames={longTotal(l009 as any, l009t)}
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
    <Composition
      id="L008SH1"
      component={ListShort}
      defaultProps={{scenes: l008sh1, timeline: l008sh1t, dir: 'l008sh1', bgm: 'bgm/l008-grand.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(l008sh1t)}
    />
    <Composition
      id="L008SH2"
      component={ListShort}
      defaultProps={{scenes: l008sh2, timeline: l008sh2t, dir: 'l008sh2', bgm: 'bgm/l008-grand.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(l008sh2t)}
    />
    <Composition
      id="L008SH3"
      component={ListShort}
      defaultProps={{scenes: l008sh3, timeline: l008sh3t, dir: 'l008sh3', bgm: 'bgm/l008-grand.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(l008sh3t)}
    />
    <Composition
      id="L008SH4"
      component={ListShort}
      defaultProps={{scenes: l008sh4, timeline: l008sh4t, dir: 'l008sh4', bgm: 'bgm/l008-warm.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(l008sh4t)}
    />
    <Composition
      id="L008SH5"
      component={ListShort}
      defaultProps={{scenes: l008sh5, timeline: l008sh5t, dir: 'l008sh5', bgm: 'bgm/l008-sad.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(l008sh5t)}
    />
    <Composition
      id="L008SH6"
      component={ListShort}
      defaultProps={{scenes: l008sh6, timeline: l008sh6t, dir: 'l008sh6', bgm: 'bgm/l008-sad.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(l008sh6t)}
    />
    <Composition
      id="L008SH7"
      component={ListShort}
      defaultProps={{scenes: l008sh7, timeline: l008sh7t, dir: 'l008sh7', bgm: 'bgm/l008-grand.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(l008sh7t)}
    />
    <Still id="L008CoverSH1" component={Cover} width={1080} height={1920} defaultProps={{bg: 'l008/img-17.jpg', big: 'A RICE CALLED CHAMPA'}} />
    <Still id="L008CoverSH2" component={Cover} width={1080} height={1920} defaultProps={{bg: 'l008/img-04.jpg', big: 'NOT VIETNAMESE'}} />
    <Still id="L008CoverSH3" component={Cover} width={1080} height={1920} defaultProps={{bg: 'l008/img-24.jpg', big: 'NAME UNKNOWN'}} />
    <Still id="L008CoverSH4" component={Cover} width={1080} height={1920} defaultProps={{bg: 'l008/img-43.jpg', big: 'SAME TOWERS, TWO NAMES'}} />
    <Still id="L008CoverSH5" component={Cover} width={1080} height={1920} defaultProps={{bg: 'l008/img-35.jpg', big: 'CHAM RULERS UNTIL 1832'}} />
    <Still id="L008CoverSH6" component={Cover} width={1080} height={1920} defaultProps={{bg: 'l008/img-30.jpg', big: 'THE SOURCES DISAGREE'}} />
    <Still id="L008CoverSH7" component={Cover} width={1080} height={1920} defaultProps={{bg: 'l008/img-01.jpg', big: 'WHO BUILT THESE?'}} />
    <Composition
      id="S013"
      component={ListShort}
      defaultProps={{scenes: s013, timeline: s013t, dir: 's013', bgm: s013m.src, bgmEnv: s013m.env as [number, number][], numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(s013t)}
    />
    <Still id="S013Cover" component={Cover} defaultProps={{bg: 's013/img-01.jpg', big: 'A ROMAN EMPEROR?', tag: 'FUNAN'}} width={1080} height={1920} />
    <Composition
      id="L009SH1"
      component={ListShort}
      defaultProps={{scenes: l009sh1, timeline: l009sh1t, dir: 'l009sh1', bgm: 'bgm/l009-mystery.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(l009sh1t)}
    />
    <Composition
      id="L009SH2"
      component={ListShort}
      defaultProps={{scenes: l009sh2, timeline: l009sh2t, dir: 'l009sh2', bgm: 'bgm/l009-mystery.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(l009sh2t)}
    />
    <Composition
      id="L009SH3"
      component={ListShort}
      defaultProps={{scenes: l009sh3, timeline: l009sh3t, dir: 'l009sh3', bgm: 'bgm/l009-legend.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(l009sh3t)}
    />
    <Composition
      id="L009SH4"
      component={ListShort}
      defaultProps={{scenes: l009sh4, timeline: l009sh4t, dir: 'l009sh4', bgm: 'bgm/l009-legend.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(l009sh4t)}
    />
    <Composition
      id="L009SH5"
      component={ListShort}
      defaultProps={{scenes: l009sh5, timeline: l009sh5t, dir: 'l009sh5', bgm: 'bgm/l009-legend.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(l009sh5t)}
    />
    <Composition
      id="L009SH6"
      component={ListShort}
      defaultProps={{scenes: l009sh6, timeline: l009sh6t, dir: 'l009sh6', bgm: 'bgm/l009-reflect.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(l009sh6t)}
    />
    <Composition
      id="L009SH7"
      component={ListShort}
      defaultProps={{scenes: l009sh7, timeline: l009sh7t, dir: 'l009sh7', bgm: 'bgm/l009-mystery.mp3', bgmVolume: 0.12, numbered: false}}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={totalFrames(l009sh7t)}
    />
  </>
);
