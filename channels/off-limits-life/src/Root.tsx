import React from 'react';
import {Composition} from 'remotion';
import {InsideX, Props, sceneFrames} from './InsideX';
import {Banner, Logo} from './Brand';
import {FunBanner, FunLogo} from './Brand2';
import {ThumbIX001} from './Thumb';
import sub from './data/sub.json';
import subT from './data/sub.timeline.json';
import sat from './data/sat.json';
import satT from './data/sat.timeline.json';
import silo from './data/silo.json';
import ix001 from './data/ix001.json';
import ix001T from './data/ix001.timeline.json';
import siloT from './data/silo.timeline.json';

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
    <Composition id="Thumb-IX001-A" component={ThumbIX001} durationInFrames={1} fps={FPS} width={1280} height={720} defaultProps={{v: 'A' as const}} />
    <Composition id="Thumb-IX001-B" component={ThumbIX001} durationInFrames={1} fps={FPS} width={1280} height={720} defaultProps={{v: 'B' as const}} />
  </>
);
