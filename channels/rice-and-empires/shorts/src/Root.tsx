import {Composition, Still} from 'remotion';
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
