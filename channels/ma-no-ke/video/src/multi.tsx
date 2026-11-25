// SINH TỰ ĐỘNG bởi tools/multi.py build — đừng sửa tay
import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {Story, Timeline} from './Story';
import t0 from './data/multi/p01-long-en.json';
import t1 from './data/multi/p01-long-es.json';
import t2 from './data/multi/p01-long-fr.json';
import t3 from './data/multi/p01-sh1-en.json';
import t4 from './data/multi/p01-sh1-es.json';
import t5 from './data/multi/p01-sh1-fr.json';
import t6 from './data/multi/p01-sh2-en.json';
import t7 from './data/multi/p01-sh2-es.json';
import t8 from './data/multi/p01-sh2-fr.json';
import t9 from './data/multi/p01-sh3-en.json';
import t10 from './data/multi/p01-sh3-es.json';
import t11 from './data/multi/p01-sh3-fr.json';
import t12 from './data/multi/p01-sh4-en.json';
import t13 from './data/multi/p01-sh4-es.json';
import t14 from './data/multi/p01-sh4-fr.json';
import t15 from './data/multi/p01-sh5-en.json';
import t16 from './data/multi/p01-sh5-es.json';
import t17 from './data/multi/p01-sh5-fr.json';
import t18 from './data/multi/p01-sh7-en.json';
import t19 from './data/multi/p01-sh7-es.json';
import t20 from './data/multi/p01-sh7-fr.json';
const FPS = 30;
const C: React.FC<{id: string; tl: Timeline}> = ({id, tl}) => (
  <Composition id={id} component={Story} defaultProps={{tl}} durationInFrames={Math.ceil(tl.duration * FPS)} fps={FPS} width={tl.w} height={tl.h} />
);
const Root: React.FC = () => (
  <>
    <C id="MULTI-P01-LONG-EN" tl={t0 as unknown as Timeline} />
    <C id="MULTI-P01-LONG-ES" tl={t1 as unknown as Timeline} />
    <C id="MULTI-P01-LONG-FR" tl={t2 as unknown as Timeline} />
    <C id="MULTI-P01-SH1-EN" tl={t3 as unknown as Timeline} />
    <C id="MULTI-P01-SH1-ES" tl={t4 as unknown as Timeline} />
    <C id="MULTI-P01-SH1-FR" tl={t5 as unknown as Timeline} />
    <C id="MULTI-P01-SH2-EN" tl={t6 as unknown as Timeline} />
    <C id="MULTI-P01-SH2-ES" tl={t7 as unknown as Timeline} />
    <C id="MULTI-P01-SH2-FR" tl={t8 as unknown as Timeline} />
    <C id="MULTI-P01-SH3-EN" tl={t9 as unknown as Timeline} />
    <C id="MULTI-P01-SH3-ES" tl={t10 as unknown as Timeline} />
    <C id="MULTI-P01-SH3-FR" tl={t11 as unknown as Timeline} />
    <C id="MULTI-P01-SH4-EN" tl={t12 as unknown as Timeline} />
    <C id="MULTI-P01-SH4-ES" tl={t13 as unknown as Timeline} />
    <C id="MULTI-P01-SH4-FR" tl={t14 as unknown as Timeline} />
    <C id="MULTI-P01-SH5-EN" tl={t15 as unknown as Timeline} />
    <C id="MULTI-P01-SH5-ES" tl={t16 as unknown as Timeline} />
    <C id="MULTI-P01-SH5-FR" tl={t17 as unknown as Timeline} />
    <C id="MULTI-P01-SH7-EN" tl={t18 as unknown as Timeline} />
    <C id="MULTI-P01-SH7-ES" tl={t19 as unknown as Timeline} />
    <C id="MULTI-P01-SH7-FR" tl={t20 as unknown as Timeline} />
  </>
);
registerRoot(Root);
