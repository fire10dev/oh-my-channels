// SINH TỰ ĐỘNG bởi tools/loc.py timeline es — đừng sửa tay
import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {Story, Timeline} from './Story';
import {ThumbX, ThumbXProps} from './ThumbX';
import t0 from './data/loc/es/p01-long.json';
import t1 from './data/loc/es/p01-sh1.json';
import t2 from './data/loc/es/p01-sh2.json';
import t3 from './data/loc/es/p01-sh3.json';
import t4 from './data/loc/es/p01-sh4.json';
import t5 from './data/loc/es/p01-sh5.json';
import t6 from './data/loc/es/p01-sh7.json';
import t7 from './data/loc/es/p02-long.json';
import t8 from './data/loc/es/p02-sh1.json';
import t9 from './data/loc/es/p02-sh2.json';
import t10 from './data/loc/es/p02-sh3.json';
import t11 from './data/loc/es/p02-sh4.json';
import t12 from './data/loc/es/p02-sh5.json';
import t13 from './data/loc/es/p02-sh6.json';
import t14 from './data/loc/es/p02-sh7.json';
import t15 from './data/loc/es/p03-long.json';
import t16 from './data/loc/es/p03-sh1.json';
import t17 from './data/loc/es/p03-sh2.json';
import t18 from './data/loc/es/p03-sh3.json';
import t19 from './data/loc/es/p03-sh4.json';
import t20 from './data/loc/es/p03-sh5.json';
import t21 from './data/loc/es/p03-sh6.json';
import t22 from './data/loc/es/p03-sh7.json';
import t23 from './data/loc/es/p04-long.json';
import t24 from './data/loc/es/p04-sh1.json';
import t25 from './data/loc/es/p04-sh2.json';
import t26 from './data/loc/es/p04-sh3.json';
import t27 from './data/loc/es/p04-sh4.json';
import t28 from './data/loc/es/p04-sh5.json';
import t29 from './data/loc/es/p04-sh6.json';
import t30 from './data/loc/es/p04-sh7.json';
import thumbs from './data/loc/es/thumbs.json';
const FPS = 30;
const C: React.FC<{id: string; tl: Timeline}> = ({id, tl}) => (
  <Composition id={id} component={Story} defaultProps={{tl}} durationInFrames={Math.ceil(tl.duration * FPS)} fps={FPS} width={tl.w} height={tl.h} />
);
const Root: React.FC = () => (
  <>
    <C id="ES-P01-LONG" tl={t0 as unknown as Timeline} />
    <C id="ES-P01-SH1" tl={t1 as unknown as Timeline} />
    <C id="ES-P01-SH2" tl={t2 as unknown as Timeline} />
    <C id="ES-P01-SH3" tl={t3 as unknown as Timeline} />
    <C id="ES-P01-SH4" tl={t4 as unknown as Timeline} />
    <C id="ES-P01-SH5" tl={t5 as unknown as Timeline} />
    <C id="ES-P01-SH7" tl={t6 as unknown as Timeline} />
    <C id="ES-P02-LONG" tl={t7 as unknown as Timeline} />
    <C id="ES-P02-SH1" tl={t8 as unknown as Timeline} />
    <C id="ES-P02-SH2" tl={t9 as unknown as Timeline} />
    <C id="ES-P02-SH3" tl={t10 as unknown as Timeline} />
    <C id="ES-P02-SH4" tl={t11 as unknown as Timeline} />
    <C id="ES-P02-SH5" tl={t12 as unknown as Timeline} />
    <C id="ES-P02-SH6" tl={t13 as unknown as Timeline} />
    <C id="ES-P02-SH7" tl={t14 as unknown as Timeline} />
    <C id="ES-P03-LONG" tl={t15 as unknown as Timeline} />
    <C id="ES-P03-SH1" tl={t16 as unknown as Timeline} />
    <C id="ES-P03-SH2" tl={t17 as unknown as Timeline} />
    <C id="ES-P03-SH3" tl={t18 as unknown as Timeline} />
    <C id="ES-P03-SH4" tl={t19 as unknown as Timeline} />
    <C id="ES-P03-SH5" tl={t20 as unknown as Timeline} />
    <C id="ES-P03-SH6" tl={t21 as unknown as Timeline} />
    <C id="ES-P03-SH7" tl={t22 as unknown as Timeline} />
    <C id="ES-P04-LONG" tl={t23 as unknown as Timeline} />
    <C id="ES-P04-SH1" tl={t24 as unknown as Timeline} />
    <C id="ES-P04-SH2" tl={t25 as unknown as Timeline} />
    <C id="ES-P04-SH3" tl={t26 as unknown as Timeline} />
    <C id="ES-P04-SH4" tl={t27 as unknown as Timeline} />
    <C id="ES-P04-SH5" tl={t28 as unknown as Timeline} />
    <C id="ES-P04-SH6" tl={t29 as unknown as Timeline} />
    <C id="ES-P04-SH7" tl={t30 as unknown as Timeline} />
    {Object.entries(thumbs as unknown as Record<string, {w: number; h: number; p: ThumbXProps}>).map(([id, x]) => (
      <Composition key={id} id={id} component={ThumbX} defaultProps={x.p} durationInFrames={1} fps={FPS} width={x.w} height={x.h} />
    ))}
  </>
);
registerRoot(Root);
