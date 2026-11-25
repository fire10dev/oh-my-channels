import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {SH6, FPS, DURATION_S} from './SH6';
import {Story, Timeline} from './Story';
import {EPISODES} from './episodes';
import {Thumb} from './Thumb';
import {ThumbX, ThumbXProps} from './ThumbX';
import p02thumbs from './data/p02-thumbs.json';
import p01long from './data/p01-long.json';
import p02long from './data/p02-long.json';
import p03long from './data/p03-long.json';
import p04long from './data/p04-long.json';
import p04sh1 from './data/p04-sh1.json';
import p04sh2 from './data/p04-sh2.json';
import p04sh3 from './data/p04-sh3.json';
import p04sh4 from './data/p04-sh4.json';
import p04sh5 from './data/p04-sh5.json';
import p04sh6 from './data/p04-sh6.json';
import p04sh7 from './data/p04-sh7.json';
import p03sh1 from './data/p03-sh1.json';
import p03sh2 from './data/p03-sh2.json';
import p03sh3 from './data/p03-sh3.json';
import p03sh4 from './data/p03-sh4.json';
import p03sh5 from './data/p03-sh5.json';
import p03sh6 from './data/p03-sh6.json';
import p03sh7 from './data/p03-sh7.json';
import p04covers from './data/p04-covers.json';
import p04thumbs from './data/p04-thumbs.json';
import p03covers from './data/p03-covers.json';
import p03thumbs from './data/p03-thumbs.json';
import p02sh1 from './data/p02-sh1.json';
import p02sh2 from './data/p02-sh2.json';
import p02sh3 from './data/p02-sh3.json';
import p02sh4 from './data/p02-sh4.json';
import p02sh5 from './data/p02-sh5.json';
import p02sh6 from './data/p02-sh6.json';
import p02sh7 from './data/p02-sh7.json';
import sh1 from './data/p01-sh1.json';
import sh2 from './data/p01-sh2.json';
import sh3 from './data/p01-sh3.json';
import sh4 from './data/p01-sh4.json';
import sh5 from './data/p01-sh5.json';
import sh7 from './data/p01-sh7.json';

const L = p01long as unknown as Timeline;
const L2 = p02long as unknown as Timeline;
const L3 = p03long as unknown as Timeline;
const L4 = p04long as unknown as Timeline;
const SHORTS4 = {SH1: p04sh1, SH2: p04sh2, SH3: p04sh3, SH4: p04sh4, SH5: p04sh5, SH6: p04sh6, SH7: p04sh7} as unknown as Record<string, Timeline>;
const SHORTS2 = {SH1: p02sh1, SH2: p02sh2, SH3: p02sh3, SH4: p02sh4, SH5: p02sh5, SH6: p02sh6, SH7: p02sh7} as unknown as Record<string, Timeline>;
const SHORTS3 = {SH1: p03sh1, SH2: p03sh2, SH3: p03sh3, SH4: p03sh4, SH5: p03sh5, SH6: p03sh6, SH7: p03sh7} as unknown as Record<string, Timeline>;
const SHORTS = {SH1: sh1, SH2: sh2, SH3: sh3, SH4: sh4, SH5: sh5, SH7: sh7} as unknown as Record<string, Timeline>;
const Root: React.FC = () => (
  <>
    <Composition id="SH6" component={SH6} durationInFrames={DURATION_S * FPS} fps={FPS} width={1080} height={1920} />
    <Composition id="P01-LONG" component={Story} defaultProps={{tl: L}} durationInFrames={Math.ceil(L.duration * FPS)} fps={FPS} width={L.w} height={L.h} />
    <Composition id="P02-LONG" component={Story} defaultProps={{tl: L2}} durationInFrames={Math.ceil(L2.duration * FPS)} fps={FPS} width={L2.w} height={L2.h} />
    <Composition id="P03-LONG" component={Story} defaultProps={{tl: L3}} durationInFrames={Math.ceil(L3.duration * FPS)} fps={FPS} width={L3.w} height={L3.h} />
    <Composition id="P04-LONG" component={Story} defaultProps={{tl: L4}} durationInFrames={Math.ceil(L4.duration * FPS)} fps={FPS} width={L4.w} height={L4.h} />
    {EPISODES.map(({id, tl}) => (
      <Composition key={id} id={id} component={Story} defaultProps={{tl}} durationInFrames={Math.ceil(tl.duration * FPS)} fps={FPS} width={tl.w} height={tl.h} />
    ))}
    {Object.entries(SHORTS).map(([id, tl]) => (
      <Composition key={id} id={`P01-${id}`} component={Story} defaultProps={{tl}} durationInFrames={Math.ceil(tl.duration * FPS)} fps={FPS} width={tl.w} height={tl.h} />
    ))}
    {Object.entries(SHORTS2).map(([id, tl]) => (
      <Composition key={'p02' + id} id={`P02-${id}`} component={Story} defaultProps={{tl}} durationInFrames={Math.ceil(tl.duration * FPS)} fps={FPS} width={tl.w} height={tl.h} />
    ))}
    {Object.entries(SHORTS3).map(([id, tl]) => (
      <Composition key={'p03' + id} id={`P03-${id}`} component={Story} defaultProps={{tl}} durationInFrames={Math.ceil(tl.duration * FPS)} fps={FPS} width={tl.w} height={tl.h} />
    ))}
    {Object.entries(SHORTS4).map(([id, tl]) => (
      <Composition key={'p04' + id} id={`P04-${id}`} component={Story} defaultProps={{tl}} durationInFrames={Math.ceil(tl.duration * FPS)} fps={FPS} width={tl.w} height={tl.h} />
    ))}
    {Object.entries(p04covers as unknown as Record<string, ThumbXProps>).map(([id, p]) => (
      <Composition key={'p04c' + id} id={`P04-COVER-${id}`} component={ThumbX} defaultProps={p} durationInFrames={1} fps={FPS} width={1080} height={1920} />
    ))}
    {Object.entries(p04thumbs as unknown as Record<string, ThumbXProps>).map(([id, p]) => (
      <Composition key={'p04t' + id} id={`P04-THUMB-${id}`} component={ThumbX} defaultProps={p} durationInFrames={1} fps={FPS} width={1280} height={720} />
    ))}
    {Object.entries(p03covers as unknown as Record<string, ThumbXProps>).map(([id, p]) => (
      <Composition key={'p03c' + id} id={`P03-COVER-${id}`} component={ThumbX} defaultProps={p} durationInFrames={1} fps={FPS} width={1080} height={1920} />
    ))}
    {Object.entries(p03thumbs as unknown as Record<string, ThumbXProps>).map(([id, p]) => (
      <Composition key={'p03t' + id} id={`P03-THUMB-${id}`} component={ThumbX} defaultProps={p} durationInFrames={1} fps={FPS} width={1280} height={720} />
    ))}
    <Composition id="P02-THUMB" component={Thumb} defaultProps={{img: 'p02/img/N13.png', line1: 'CÓ MẶT', line2: '03:00'}} durationInFrames={1} fps={FPS} width={1280} height={720} />
    {Object.entries(p02thumbs as unknown as Record<string, ThumbXProps>).map(([id, p]) => (
      <Composition key={id} id={`P02-THUMB-${id}`} component={ThumbX} defaultProps={p} durationInFrames={1} fps={FPS} width={1280} height={720} />
    ))}
  </>
);
registerRoot(Root);
