// SINH TỰ ĐỘNG bởi tools/ep_build.py — đừng sửa tay.
import {Timeline} from './Story';
import ep05_long from './data/ep05-long.json';
import ep05_sh1 from './data/ep05-sh1.json';
import ep05_sh2 from './data/ep05-sh2.json';
import ep05_sh3 from './data/ep05-sh3.json';
import ep05_sh4 from './data/ep05-sh4.json';
import ep05_sh5 from './data/ep05-sh5.json';
import ep05_sh6 from './data/ep05-sh6.json';
import ep05_sh7 from './data/ep05-sh7.json';
export const EPISODES: {id: string; tl: Timeline}[] = [
  {id: 'EP05-LONG', tl: ep05_long as unknown as Timeline},
  {id: 'EP05-SH1', tl: ep05_sh1 as unknown as Timeline},
  {id: 'EP05-SH2', tl: ep05_sh2 as unknown as Timeline},
  {id: 'EP05-SH3', tl: ep05_sh3 as unknown as Timeline},
  {id: 'EP05-SH4', tl: ep05_sh4 as unknown as Timeline},
  {id: 'EP05-SH5', tl: ep05_sh5 as unknown as Timeline},
  {id: 'EP05-SH6', tl: ep05_sh6 as unknown as Timeline},
  {id: 'EP05-SH7', tl: ep05_sh7 as unknown as Timeline}
];
