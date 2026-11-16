import React from 'react';
import {Composition} from 'remotion';
import {InsideX, Props, sceneFrames} from './InsideX';
import {Banner, Logo} from './Brand';
import {FunBanner, FunLogo} from './Brand2';
import {ThumbIX001} from './Thumb';
import {ThumbIX002} from './ThumbIX002';
import {ThumbIX003} from './ThumbIX003';
import {ThumbIX006} from './ThumbIX006';
import {ThumbIX004} from './ThumbIX004';
import {ThumbIX005} from './ThumbIX005';
import sub from './data/sub.json';
import subT from './data/sub.timeline.json';
import sat from './data/sat.json';
import satT from './data/sat.timeline.json';
import silo from './data/silo.json';
import ix001 from './data/ix001.json';
import ix001T from './data/ix001.timeline.json';
import siloT from './data/silo.timeline.json';

import {IX2, IX2Data, IX2Timeline, ix2Frames} from './IX2';
import ix002 from './data/ix002.json';
import ix002T from './data/ix002.timeline.json';
import {IX2IX003} from './IX2IX003';
import {IX2IX004} from './IX2IX004';
import {IX2IX005} from './IX2IX005';
import ix005 from './data/ix005.json';
import ix005T from './data/ix005.timeline.json';
import ix004 from './data/ix004.json';
import ix004T from './data/ix004.timeline.json';
import {IX006, IX006Data, IX006Timeline, ix006Frames} from './IX2-IX006';
import ix006 from './data/ix006.json';
import ix006T from './data/ix006.timeline.json';
import ix003 from './data/ix003.json';
import ix003T from './data/ix003.timeline.json';
import {ShortX, SXData, SXTimeline, sxFrames} from './ShortX';
import sxWell from './data/sx-ix002-well.json';
import sxWellT from './data/sx-ix002-well.timeline.json';
import sx300 from './data/sx-ix002-300club.json';
import sx300T from './data/sx-ix002-300club.timeline.json';
import sxRack from './data/sx-ix001-hotrack.json';
import sxRackT from './data/sx-ix001-hotrack.timeline.json';
import sxFlush from './data/sx-ix001-noflush.json';
import sxFlushT from './data/sx-ix001-noflush.timeline.json';
import sxCabin from './data/sx-ix003-cabin.json';
import sxCabinT from './data/sx-ix003-cabin.timeline.json';
import sxNoday from './data/sx-ix003-noday.json';
import sxNodayT from './data/sx-ix003-noday.timeline.json';
import sxOxy from './data/sx-ix006-oxygen.json';
import sxOxyT from './data/sx-ix006-oxygen.timeline.json';
import sxHungry from './data/sx-ix006-hungry.json';
import sxHungryT from './data/sx-ix006-hungry.timeline.json';
import sxHuet from './data/sx-ix004-huet.json';
import sxHuetT from './data/sx-ix004-huet.timeline.json';
import sxRigCabin from './data/sx-ix004-cabin.json';
import sxRigCabinT from './data/sx-ix004-cabin.timeline.json';
import sxVoice from './data/sx-ix005-voice.json';
import sxVoiceT from './data/sx-ix005-voice.timeline.json';
import sxLemons from './data/sx-ix005-lemons.json';
import sxLemonsT from './data/sx-ix005-lemons.timeline.json';

import sx7w from './data/sx-ix007-window.json';
import sx7wT from './data/sx-ix007-window.timeline.json';
import sx7s from './data/sx-ix007-slot.json';
import sx7sT from './data/sx-ix007-slot.timeline.json';

import sx8c from './data/sx-ix008-cot.json';
import sx8cT from './data/sx-ix008-cot.timeline.json';
import sx8p from './data/sx-ix008-packs.json';
import sx8pT from './data/sx-ix008-packs.timeline.json';
import sx9m from './data/sx-ix009-meals.json';
import sx9mT from './data/sx-ix009-meals.timeline.json';
import sx9b from './data/sx-ix009-berthing.json';
import sx9bT from './data/sx-ix009-berthing.timeline.json';
import sx10d from './data/sx-ix010-door.json';
import sx10dT from './data/sx-ix010-door.timeline.json';
import sx10c from './data/sx-ix010-chef.json';
import sx10cT from './data/sx-ix010-chef.timeline.json';
import sx11b from './data/sx-ix011-bears.json';
import sx11bT from './data/sx-ix011-bears.timeline.json';
import sx11n from './data/sx-ix011-night.json';
import sx11nT from './data/sx-ix011-night.timeline.json';
import sx12s from './data/sx-ix012-smoke.json';
import sx12sT from './data/sx-ix012-smoke.timeline.json';
import sx12r from './data/sx-ix012-rooms.json';
import sx12rT from './data/sx-ix012-rooms.timeline.json';
import sx13c from './data/sx-ix013-citadel.json';
import sx13cT from './data/sx-ix013-citadel.timeline.json';
import sx13s from './data/sx-ix013-stuck.json';
import sx13sT from './data/sx-ix013-stuck.timeline.json';
import sx14s from './data/sx-ix014-springs.json';
import sx14sT from './data/sx-ix014-springs.timeline.json';
import sx14c from './data/sx-ix014-sealed.json';
import sx14cT from './data/sx-ix014-sealed.timeline.json';
import sx15b from './data/sx-ix015-bunks.json';
import sx15bT from './data/sx-ix015-bunks.timeline.json';
import sx15f from './data/sx-ix015-flannan.json';
import sx15fT from './data/sx-ix015-flannan.timeline.json';
import sx16h from './data/sx-ix016-hourly.json';
import sx16hT from './data/sx-ix016-hourly.timeline.json';
import sx16w from './data/sx-ix016-wind.json';
import sx16wT from './data/sx-ix016-wind.timeline.json';
const shorts: {id: string; data: unknown; tl: unknown}[] = [
  {id: 'sx-ix014-springs', data: sx14s, tl: sx14sT},
  {id: 'sx-ix014-sealed', data: sx14c, tl: sx14cT},
  {id: 'sx-ix015-bunks', data: sx15b, tl: sx15bT},
  {id: 'sx-ix015-flannan', data: sx15f, tl: sx15fT},
  {id: 'sx-ix016-hourly', data: sx16h, tl: sx16hT},
  {id: 'sx-ix016-wind', data: sx16w, tl: sx16wT},
  {id: 'sx-ix012-smoke', data: sx12s, tl: sx12sT},
  {id: 'sx-ix012-rooms', data: sx12r, tl: sx12rT},
  {id: 'sx-ix013-citadel', data: sx13c, tl: sx13cT},
  {id: 'sx-ix013-stuck', data: sx13s, tl: sx13sT},
  {id: 'sx-ix010-door', data: sx10d, tl: sx10dT},
  {id: 'sx-ix010-chef', data: sx10c, tl: sx10cT},
  {id: 'sx-ix011-bears', data: sx11b, tl: sx11bT},
  {id: 'sx-ix011-night', data: sx11n, tl: sx11nT},
  {id: 'sx-ix009-meals', data: sx9m, tl: sx9mT},
  {id: 'sx-ix009-berthing', data: sx9b, tl: sx9bT},
  {id: 'sx-ix008-cot', data: sx8c, tl: sx8cT},
  {id: 'sx-ix008-packs', data: sx8p, tl: sx8pT},
  {id: 'sx-ix007-window', data: sx7w, tl: sx7wT},
  {id: 'sx-ix007-slot', data: sx7s, tl: sx7sT},
  {id: 'sx-ix002-well', data: sxWell, tl: sxWellT},
  {id: 'sx-ix002-300club', data: sx300, tl: sx300T},
  {id: 'sx-ix001-hotrack', data: sxRack, tl: sxRackT},
  {id: 'sx-ix001-noflush', data: sxFlush, tl: sxFlushT},
  {id: 'sx-ix003-cabin', data: sxCabin, tl: sxCabinT},
  {id: 'sx-ix003-noday', data: sxNoday, tl: sxNodayT},
  {id: 'sx-ix006-oxygen', data: sxOxy, tl: sxOxyT},
  {id: 'sx-ix006-hungry', data: sxHungry, tl: sxHungryT},
  {id: 'sx-ix004-huet', data: sxHuet, tl: sxHuetT},
  {id: 'sx-ix004-cabin', data: sxRigCabin, tl: sxRigCabinT},
  {id: 'sx-ix005-voice', data: sxVoice, tl: sxVoiceT},
  {id: 'sx-ix005-lemons', data: sxLemons, tl: sxLemonsT},
];

import {IX2W, ix2wFrames} from './IX2W';
import {ThumbW} from './ThumbW';
import {WorldViews} from './WorldViews';
import {WORLDS} from './worlds/registry';
import {LONGS_W} from './longsW';

const FPS = 30;
const items: {id: string; props: Props}[] = [
  {id: 'IX-T1-submarine', props: {topic: 'sub', scenes: sub.scenes as Props['scenes'], timeline: subT}},
  {id: 'IX-T2-satdiver', props: {topic: 'sat', scenes: sat.scenes as Props['scenes'], timeline: satT}},
  {id: 'IX001-submarine', props: {topic: 'ix001', scenes: ix001.scenes as Props['scenes'], timeline: ix001T, asof: ix001.asof}},
  {id: 'IX-T3-silo', props: {topic: 'silo', scenes: silo.scenes as Props['scenes'], timeline: siloT}},
];

export const RemotionRoot: React.FC = () => (
  <>
    {items.map(({id, props}) => (
      <Composition
        key={id}
        id={id}
        component={InsideX}
        durationInFrames={props.timeline.reduce((a, t) => a + sceneFrames(t.seconds, FPS), 0)}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={props}
      />
    ))}
    {(['OLL', 'UQ', 'DOOR', 'KEY', 'TAPE'] as const).map((b) => (
      <React.Fragment key={b}>
        <Composition id={`Logo-${b}`} component={Logo} durationInFrames={1} fps={FPS} width={800} height={800} defaultProps={{id: b}} />
        <Composition id={`Banner-${b}`} component={Banner} durationInFrames={1} fps={FPS} width={2560} height={1440} defaultProps={{id: b}} />
      </React.Fragment>
    ))}
    {(['PEEK', 'EYES', 'OEYE', 'DUCK'] as const).map((b) => (
      <React.Fragment key={b}>
        <Composition id={`Fun-${b}`} component={FunLogo} durationInFrames={1} fps={FPS} width={800} height={800} defaultProps={{id: b}} />
        <Composition id={`FunBanner-${b}`} component={FunBanner} durationInFrames={1} fps={FPS} width={2560} height={1440} defaultProps={{id: b}} />
      </React.Fragment>
    ))}
    <Composition
      id="IX002-south-pole"
      component={IX2}
      durationInFrames={ix2Frames(ix002T as IX2Timeline, FPS)}
      fps={FPS}
      width={1920}
      height={1080}
      defaultProps={{id: 'ix002', data: ix002 as unknown as IX2Data, timeline: ix002T as IX2Timeline}}
    />
    {shorts.map(({id, data, tl}) => (
      <Composition
        key={id}
        id={id}
        component={ShortX}
        durationInFrames={sxFrames(tl as SXTimeline, FPS)}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{id, data: data as SXData, timeline: tl as SXTimeline}}
      />
    ))}
    <Composition
      id="IX003-cruise-crew"
      component={IX2IX003}
      durationInFrames={ix2Frames(ix003T as IX2Timeline, FPS)}
      fps={FPS}
      width={1920}
      height={1080}
      defaultProps={{id: 'ix003', data: ix003 as unknown as IX2Data, timeline: ix003T as IX2Timeline}}
    />
    <Composition
      id="IX004-oil-rig"
      component={IX2IX004}
      durationInFrames={ix2Frames(ix004T as IX2Timeline, FPS)}
      fps={FPS}
      width={1920}
      height={1080}
      defaultProps={{id: 'ix004', data: ix004 as unknown as IX2Data, timeline: ix004T as IX2Timeline}}
    />
    <Composition
      id="IX005-sat-divers"
      component={IX2IX005}
      durationInFrames={ix2Frames(ix005T as IX2Timeline, FPS)}
      fps={FPS}
      width={1920}
      height={1080}
      defaultProps={{id: 'ix005', data: ix005 as unknown as IX2Data, timeline: ix005T as IX2Timeline}}
    />
    <Composition
      id="IX006-biosphere2"
      component={IX006}
      durationInFrames={ix006Frames(ix006T as IX006Timeline, FPS)}
      fps={FPS}
      width={1920}
      height={1080}
      defaultProps={{id: 'ix006', data: ix006 as unknown as IX006Data, timeline: ix006T as IX006Timeline}}
    />
    <Composition id="Thumb-IX002" component={ThumbIX002} durationInFrames={1} fps={FPS} width={1280} height={720} />
    <Composition id="Thumb-IX003" component={ThumbIX003} durationInFrames={1} fps={FPS} width={1280} height={720} />
    <Composition id="Thumb-IX006" component={ThumbIX006} durationInFrames={1} fps={FPS} width={1280} height={720} />
    <Composition id="Thumb-IX004" component={ThumbIX004} durationInFrames={1} fps={FPS} width={1280} height={720} />
    <Composition id="Thumb-IX005" component={ThumbIX005} durationInFrames={1} fps={FPS} width={1280} height={720} />
    {LONGS_W.map((l) => (
      <React.Fragment key={l.comp}>
        <Composition id={l.comp} component={IX2W} durationInFrames={ix2wFrames(l.tl, FPS)} fps={FPS} width={1920} height={1080} defaultProps={{id: l.id, world: l.world, data: l.data, timeline: l.tl}} />
        <Composition id={`Thumb-${l.comp.split('-')[0]}`} component={ThumbW} durationInFrames={1} fps={FPS} width={1280} height={720} defaultProps={l.thumb} />
      </React.Fragment>
    ))}
    {Object.entries(WORLDS).map(([k, w]) => (
      <Composition key={k} id={`WV-${k}`} component={WorldViews} durationInFrames={Object.keys(w.views).length} fps={FPS} width={1920} height={1080} defaultProps={{world: k}} />
    ))}
    <Composition id="Thumb-IX001-A" component={ThumbIX001} durationInFrames={1} fps={FPS} width={1280} height={720} defaultProps={{v: 'A' as const}} />
    <Composition id="Thumb-IX001-B" component={ThumbIX001} durationInFrames={1} fps={FPS} width={1280} height={720} defaultProps={{v: 'B' as const}} />
  </>
);
