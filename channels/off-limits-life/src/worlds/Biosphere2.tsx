import React from 'react';
import {C, Figure, Label} from '../ui';
import type {Tod} from './SouthPole';

/** IX006 world (from the abandoned IX003 draft): Biosphere 2 cutaway (Oracle, Arizona). Ground y=640; glass x 330..2000; underground "technosphere" below.
 *  `plane` is reused as a state string: 'o2:20.9' gauge value · 'shut'/'open' airlock · 'pump' oxygen truck · 'bugs' swarm. */
const V: Record<string, [number, number, number]> = {
  wide: [1170, 470, 0.84],
  glass: [1170, 420, 1.35],
  sky: [1170, 230, 1.6],
  airlock: [352, 580, 4.6],
  habitat: [500, 470, 2.7],
  kitchen: [432, 392, 5.2],
  berth: [572, 392, 5.2],
  lab: [432, 502, 5.2],
  comms: [572, 502, 5.2],
  gauge: [650, 470, 8],
  farm: [830, 540, 3.1],
  goats: [745, 600, 5.6],
  crops: [880, 585, 5.4],
  fish: [965, 610, 6.5],
  rainforest: [1180, 420, 2.4],
  coffee: [1110, 585, 6.2],
  birds: [1220, 330, 5],
  ocean: [1475, 560, 3.1],
  coral: [1475, 615, 5.4],
  savanna: [1700, 560, 3.1],
  desert: [1880, 560, 3.1],
  ants: [1690, 628, 9],
  lung: [2170, 560, 2.6],
  lungw: [175, 575, 3],
  tech: [1170, 775, 2],
  concrete: [880, 700, 5.5],
  truck: [2420, 600, 3.2],
};
export const viewOf = (name: string, _tod: Tod): [number, number, number] => V[name] ?? V.wide;

const SKY: Record<Tod, [string, string]> = {
  day: ['#6ec3f4', '#fde7c2'],
  dusk: ['#5e548e', '#f4a261'],
  night: ['#0b1029', '#253760'],
  dawn: ['#3a3d6b', '#f6bd60'],
};

const ROOMS: {id: string; x: number; y: number; bg: string}[] = [
  {id: 'kitchen', x: 362, y: 337, bg: '#fbe8c8'},
  {id: 'berth', x: 502, y: 337, bg: '#e8e1f5'},
  {id: 'lab', x: 362, y: 447, bg: '#dceaf7'},
  {id: 'comms', x: 502, y: 447, bg: '#e3f6d5'},
];

const Glass: React.FC<{d: string}> = ({d}) => (
  <g>
    <path d={d} fill="#bfe9ff" fillOpacity={0.22} stroke={C.ink} strokeWidth={5} />
  </g>
);

const Grid: React.FC<{x: number; y: number; w: number; h: number; step?: number}> = ({x, y, w, h, step = 40}) => (
  <g stroke="#ffffff" strokeWidth={2} opacity={0.55}>
    {Array.from({length: Math.floor(w / step)}).map((_, i) => (
      <line key={`v${i}`} x1={x + (i + 1) * step} y1={y} x2={x + (i + 1) * step} y2={y + h} />
    ))}
    {Array.from({length: Math.floor(h / step)}).map((_, i) => (
      <line key={`h${i}`} x1={x} y1={y + (i + 1) * step} x2={x + w} y2={y + (i + 1) * step} />
    ))}
  </g>
);

const Tree: React.FC<{x: number; y: number; s?: number; c?: string; frame: number}> = ({x, y, s = 1, c = '#2a9d8f', frame}) => (
  <g transform={`translate(${x} ${y}) scale(${s}) rotate(${Math.sin((frame + x) / 25) * 1})`}>
    <rect x={-6} y={-70} width={12} height={70} fill="#8d6e4c" stroke={C.ink} strokeWidth={3} />
    <circle cx={0} cy={-84} r={34} fill={c} stroke={C.ink} strokeWidth={4} />
    <circle cx={-22} cy={-66} r={20} fill={c} stroke={C.ink} strokeWidth={4} />
    <circle cx={22} cy={-66} r={20} fill={c} stroke={C.ink} strokeWidth={4} />
  </g>
);

const Goat: React.FC<{x: number; y: number; frame: number; flip?: boolean}> = ({x, y, frame, flip}) => (
  <g transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1)`}>
    <rect x={-22} y={-30} width={40} height={20} rx={9} fill="#f1ede4" stroke={C.ink} strokeWidth={3} />
    {[-16, -6, 6, 14].map((lx) => (
      <line key={lx} x1={lx} y1={-12} x2={lx} y2={0} stroke={C.ink} strokeWidth={3} />
    ))}
    <g transform={`rotate(${Math.sin(frame / 8) * 6} 20 -30)`}>
      <ellipse cx={26} cy={-36} rx={9} ry={7} fill="#f1ede4" stroke={C.ink} strokeWidth={3} />
      <path d="M 24 -42 l -4 -10 M 30 -42 l 2 -10" stroke={C.ink} strokeWidth={2.5} />
      <circle cx={29} cy={-37} r={1.6} fill={C.ink} />
    </g>
  </g>
);

const Chicken: React.FC<{x: number; y: number; frame: number}> = ({x, y, frame}) => (
  <g transform={`translate(${x} ${y + (Math.floor(frame / 6 + x) % 2) * -2})`}>
    <ellipse cx={0} cy={-9} rx={9} ry={7} fill="#fff" stroke={C.ink} strokeWidth={2.5} />
    <circle cx={7} cy={-16} r={4.5} fill="#fff" stroke={C.ink} strokeWidth={2.5} />
    <path d="M 7 -21 l 2 -4 l 2 4" fill={C.red} />
    <path d="M 11 -16 l 4 1 l -4 1" fill="#f4a261" />
  </g>
);

const Interior: React.FC<{id: string; x: number; y: number; frame: number}> = ({id, x, y, frame}) => {
  switch (id) {
    case 'kitchen':
      return (
        <g>
          <rect x={x + 10} y={y + 70} width={70} height={36} fill="#adb5bd" stroke={C.ink} strokeWidth={3} />
          <ellipse cx={x + 45} cy={y + 64} rx={20} ry={8} fill="#6c757d" stroke={C.ink} strokeWidth={3} />
          {[0, 1, 2].map((i) => (
            <path key={i} d={`M ${x + 38 + i * 8} ${y + 54} q 4 -8 0 -16`} stroke="#fff" strokeWidth={2} fill="none" opacity={0.5 + 0.5 * Math.sin((frame + i * 9) / 6)} />
          ))}
          <rect x={x + 92} y={y + 18} width={38} height={26} fill="#fff" stroke={C.ink} strokeWidth={2} />
          <text x={x + 111} y={y + 30} fontSize={7} textAnchor="middle" fontFamily="sans-serif" fill={C.ink}>MENU</text>
          <text x={x + 111} y={y + 40} fontSize={6} textAnchor="middle" fontFamily="sans-serif" fill={C.red}>SWEET POTATO</text>
          {[0, 1, 2].map((i) => (
            <ellipse key={i} cx={x + 98 + i * 14} cy={y + 96} rx={6} ry={4} fill="#e76f51" stroke={C.ink} strokeWidth={2} />
          ))}
        </g>
      );
    case 'berth':
      return (
        <g>
          <rect x={x + 14} y={y + 76} width={92} height={22} rx={4} fill="#a8dadc" stroke={C.ink} strokeWidth={3} />
          <rect x={x + 16} y={y + 68} width={26} height={12} rx={4} fill="#fff" stroke={C.ink} strokeWidth={2} />
          <rect x={x + 100} y={y + 18} width={28} height={34} fill="#14213d" stroke={C.ink} strokeWidth={3} />
          <circle cx={x + 114} cy={y + 30} r={5} fill="#ffd23f" />
        </g>
      );
    case 'lab':
      return (
        <g>
          <rect x={x + 8} y={y + 62} width={124} height={10} fill="#8d99ae" stroke={C.ink} strokeWidth={3} />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={x + 18 + i * 26} y={y + 36} width={12} height={26} rx={4} fill={['#4cc9f0', '#f72585', '#b5e48c', '#ffd23f'][i]} stroke={C.ink} strokeWidth={2} />
          ))}
          <rect x={x + 86} y={y + 12} width={42} height={30} fill="#0b3954" stroke={C.ink} strokeWidth={3} />
          <polyline points={`${x + 90},${y + 34} ${x + 100},${y + 24} ${x + 110},${y + 30} ${x + 124},${y + 18}`} stroke="#52ffb8" strokeWidth={2} fill="none" />
        </g>
      );
    case 'comms':
      return (
        <g>
          <rect x={x + 14} y={y + 34} width={54} height={38} fill="#2b2d42" stroke={C.ink} strokeWidth={3} />
          <rect x={x + 20} y={y + 40} width={42} height={24} fill="#90e0ef" opacity={0.6 + 0.4 * Math.sin(frame / 7)} />
          <rect x={x + 10} y={y + 72} width={110} height={8} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
          <rect x={x + 82} y={y + 40} width={36} height={22} rx={3} fill="#ffd23f" stroke={C.ink} strokeWidth={2} />
          <text x={x + 100} y={y + 55} fontSize={8} textAnchor="middle" fontFamily="sans-serif" fill={C.ink}>FAX</text>
        </g>
      );
    default:
      return null;
  }
};

const youSpot: Record<string, [number, number, 'stand' | 'sit' | 'lie']> = {
  kitchen: [400, 447, 'stand'],
  berth: [560, 414, 'lie'],
  lab: [470, 557, 'stand'],
  comms: [540, 557, 'sit'],
  airlock: [300, 640, 'stand'],
  farm: [840, 640, 'stand'],
  goats: [720, 640, 'stand'],
  crops: [900, 640, 'stand'],
  fish: [935, 640, 'stand'],
  coffee: [1135, 640, 'stand'],
  ocean: [1430, 640, 'stand'],
  ants: [1660, 640, 'stand'],
  lung: [2120, 640, 'stand'],
  tech: [1100, 840, 'stand'],
  gauge: [620, 557, 'stand'],
};

export const Biosphere: React.FC<{frame: number; tod: Tod; you?: string; plane?: string; dur: number}> = ({frame, tod, you, plane, dur}) => {
  const [s0, s1] = SKY[tod];
  const t = Math.min(1, frame / Math.max(1, dur));
  const dark = tod === 'night';
  const o2 = plane?.startsWith('o2:') ? plane.slice(3) : '20.9';
  const o2n = parseFloat(o2);
  const lungLift = Math.sin(frame / 40) * 5; // small: big moving areas read as pan in the teardown gate
  return (
    <g>
      <defs>
        <linearGradient id="b2-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={s0} />
          <stop offset="1" stopColor={s1} />
        </linearGradient>
        <linearGradient id="b2-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#48cae4" />
          <stop offset="1" stopColor="#0077b6" />
        </linearGradient>
      </defs>
      <rect x={-900} y={-700} width={4200} height={1400} fill="url(#b2-sky)" />
      {dark &&
        Array.from({length: 70}).map((_, i) => (
          <circle key={i} cx={-800 + ((i * 397) % 4000)} cy={-600 + ((i * 211) % 1000)} r={1.5 + (i % 3)} fill="#fff" opacity={0.4 + 0.4 * Math.sin((frame + i * 13) / 14)} />
        ))}
      {!dark && plane !== 'eclipse' && <circle cx={tod === 'day' ? 1900 : tod === 'dusk' ? 2300 : 200} cy={tod === 'day' ? 120 : 520} r={56} fill="#ffd23f" stroke={C.ink} strokeWidth={5} />}
      {plane === 'eclipse' && (
        <g>
          <circle cx={1170} cy={150} r={70} fill="#ffd23f" stroke={C.ink} strokeWidth={5} />
          <circle cx={1170 + 80 - 70 * t} cy={150} r={68} fill="#22223b" stroke={C.ink} strokeWidth={4} />
        </g>
      )}
      {/* Santa Catalina mountains */}
      <path d="M -900 640 L -500 420 L -260 520 L 60 360 L 420 540 L 700 470 L 1100 600 L 1500 440 L 1900 560 L 2300 380 L 2700 520 L 3300 640 Z" fill={dark ? '#3d405b' : '#b5838d'} opacity={0.75} />
      {/* desert ground + underground */}
      <rect x={-900} y={640} width={4200} height={700} fill="#c9a26b" />
      <rect x={-900} y={636} width={4200} height={14} fill="#e0bf86" />
      {[[-600, 630], [-300, 625], [2600, 630], [2900, 628]].map(([cx, cy], i) => (
        <g key={i} transform={`translate(${cx} ${cy})`}>
          <rect x={-6} y={-60} width={12} height={60} rx={6} fill="#52796f" stroke={C.ink} strokeWidth={3} />
          <path d="M -6 -36 h -12 v -16 M 6 -28 h 12 v -18" stroke="#52796f" strokeWidth={9} fill="none" strokeLinecap="round" />
        </g>
      ))}
      {/* technosphere basement */}
      <rect x={330} y={655} width={1680} height={230} fill="#6c757d" stroke={C.ink} strokeWidth={5} />
      <rect x={330} y={655} width={1680} height={22} fill="#adb5bd" stroke={C.ink} strokeWidth={4} />
      <Label x={880} y={700} t="CONCRETE" size={18} color="#f8f9fa" />
      <Label x={880} y={672} t="STAINLESS STEEL LINER" size={12} color="#22223b" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i} transform={`translate(${470 + i * 260} 790)`}>
          <circle r={34} fill="#adb5bd" stroke={C.ink} strokeWidth={4} />
          <g transform={`rotate(${frame * 9 + i * 20})`}>
            {[0, 120, 240].map((a) => (
              <path key={a} d="M 0 0 L 26 -8 L 26 8 Z" transform={`rotate(${a})`} fill="#495057" />
            ))}
          </g>
        </g>
      ))}
      <path d="M 340 740 H 2000" stroke="#e76f51" strokeWidth={9} />
      <path d="M 340 758 H 2000" stroke="#219ebc" strokeWidth={9} />
      <Label x={1170} y={870} t="TECHNOSPHERE · PUMPS · FANS · PIPES" size={20} color="#f8f9fa" />
      {/* tunnels to the lungs */}
      <rect x={180} y={700} width={150} height={26} fill="#8d99ae" stroke={C.ink} strokeWidth={4} />
      <rect x={2010} y={700} width={150} height={26} fill="#8d99ae" stroke={C.ink} strokeWidth={4} />
      {/* lungs */}
      {[175, 2170].map((lx) => (
        <g key={lx}>
          <path d={`M ${lx - 140} 640 Q ${lx - 140} ${470} ${lx} ${460} Q ${lx + 140} ${470} ${lx + 140} 640 Z`} fill="#e9ecef" stroke={C.ink} strokeWidth={5} />
          <ellipse cx={lx} cy={560 - lungLift} rx={118} ry={16} fill="#ced4da" stroke={C.ink} strokeWidth={4} />
          <line x1={lx} y1={560 - lungLift} x2={lx} y2={640} stroke={C.ink} strokeWidth={3} strokeDasharray="6 6" />
          <Label x={lx} y={500} t="LUNG" size={22} />
        </g>
      ))}
      {/* habitat tower */}
      <rect x={350} y={250} width={300} height={390} fill="#f8f9fa" stroke={C.ink} strokeWidth={5} />
      <path d="M 350 250 Q 500 170 650 250 Z" fill="#dee2e6" stroke={C.ink} strokeWidth={5} />
      {ROOMS.map((r) => (
        <rect key={r.id} x={r.x} y={r.y} width={136} height={108} fill={r.bg} stroke={C.ink} strokeWidth={4} />
      ))}
      {ROOMS.map((r) => (
        <Interior key={r.id} id={r.id} x={r.x} y={r.y} frame={frame} />
      ))}
      <rect x={362} y={560} width={276} height={78} fill="#e9ecef" stroke={C.ink} strokeWidth={4} />
      <Label x={500} y={600} t="HABITAT" size={20} />
      {/* airlock door */}
      <rect x={330} y={570} width={40} height={70} rx={6} fill={plane === 'open' ? '#14213d' : '#ffd23f'} stroke={C.ink} strokeWidth={4} />
      <circle cx={350} cy={605} r={9} fill="#fff" stroke={C.ink} strokeWidth={3} transform={`rotate(${plane === 'shut' ? t * 270 : 0} 350 605)`} />
      <line x1={342} y1={605} x2={358} y2={605} stroke={C.ink} strokeWidth={3} transform={`rotate(${plane === 'shut' ? t * 270 : 0} 350 605)`} />
      {/* oxygen gauge on the habitat wall */}
      <g>
        <rect x={622} y={438} width={58} height={70} rx={8} fill={C.cream} stroke={C.ink} strokeWidth={4} />
        <text x={651} y={458} fontSize={11} textAnchor="middle" fontFamily="sans-serif" fill={C.navy}>OXYGEN</text>
        <text x={651} y={482} fontSize={17} fontWeight={700} textAnchor="middle" fontFamily="sans-serif" fill={o2n < 18 ? C.red : '#2a9d8f'}>
          {o2}%
        </text>
        <rect x={630} y={490} width={42} height={8} fill="#e9ecef" stroke={C.ink} strokeWidth={1.5} />
        <rect x={630} y={490} width={42 * Math.max(0, Math.min(1, (o2n - 12) / 9))} height={8} fill={o2n < 18 ? C.red : '#2a9d8f'} />
      </g>
      {/* agriculture vault */}
      <Glass d="M 650 640 L 650 470 Q 830 400 1010 470 L 1010 640 Z" />
      <Grid x={655} y={470} w={350} h={170} />
      {Array.from({length: 7}).map((_, i) => (
        <g key={i} transform={`translate(${830 + i * 22} 630)`}>
          <path d={`M 0 0 q -6 -20 0 -34 q 6 14 0 34`} fill="#55a630" stroke={C.ink} strokeWidth={2} />
          <path d={`M 0 -8 q -12 -8 -14 -18 M 0 -14 q 12 -6 14 -16`} stroke="#55a630" strokeWidth={4} fill="none" />
        </g>
      ))}
      <rect x={815} y={628} width={170} height={12} fill="#7f5539" />
      <Goat x={735} y={640} frame={frame} />
      <Goat x={772} y={640} frame={frame + 30} flip />
      <Chicken x={700} y={640} frame={frame} />
      <Chicken x={712} y={640} frame={frame + 3} />
      <rect x={945} y={590} width={50} height={36} fill="#48cae4" stroke={C.ink} strokeWidth={3} opacity={0.85} />
      <path d={`M ${955 + Math.sin(frame / 10) * 8} 608 q 8 -6 16 0 q -8 6 -16 0 l -6 -5 v 10 Z`} fill="#adb5bd" stroke={C.ink} strokeWidth={1.5} />
      <Label x={830} y={490} t="FARM" size={22} />
      {/* rainforest pyramid */}
      <Glass d="M 1010 640 L 1010 470 L 1060 470 L 1060 360 L 1110 360 L 1110 260 L 1180 170 L 1250 260 L 1250 360 L 1300 360 L 1300 470 L 1350 470 L 1350 640 Z" />
      <Tree x={1060} y={640} s={1.2} frame={frame} />
      <Tree x={1180} y={640} s={2.2} c="#2d6a4f" frame={frame} />
      <Tree x={1300} y={640} s={1.4} c="#40916c" frame={frame} />
      <g transform="translate(1110 640)">
        <rect x={-3} y={-50} width={6} height={50} fill="#8d6e4c" />
        <circle cx={0} cy={-56} r={18} fill="#52b788" stroke={C.ink} strokeWidth={3} />
        {[-8, 0, 8].map((cx) => (
          <circle key={cx} cx={cx} cy={-52 + (cx % 3)} r={3.5} fill={C.red} stroke={C.ink} strokeWidth={1} />
        ))}
        <Label x={0} y={-82} t="COFFEE" size={12} />
      </g>
      {plane !== 'bugs' && (
        <g transform={`translate(${1220 + Math.sin(frame / 7) * 20} ${330 + Math.cos(frame / 5) * 8})`}>
          <ellipse rx={8} ry={4} fill="#2a9d8f" stroke={C.ink} strokeWidth={2} />
          <path d={`M -2 -2 l -6 ${-8 * Math.abs(Math.sin(frame))} M 2 -2 l 6 ${-8 * Math.abs(Math.sin(frame + 1))}`} stroke={C.ink} strokeWidth={2} />
          <path d="M 8 0 l 12 -2" stroke={C.ink} strokeWidth={2} />
        </g>
      )}
      <Label x={1180} y={250} t="RAINFOREST" size={18} />
      {/* ocean */}
      <Glass d="M 1350 640 L 1350 470 L 1600 470 L 1600 640 Z" />
      <rect x={1353} y={540} width={244} height={98} fill="url(#b2-sea)" opacity={0.9} />
      <path d={`M 1353 540 q 30 ${-8 + Math.sin(frame / 8) * 4} 61 0 t 61 0 t 61 0 t 61 0`} stroke="#fff" strokeWidth={3} fill="none" />
      {[1400, 1460, 1520].map((cx, i) => (
        <path key={cx} d={`M ${cx} 638 q -10 -24 0 -40 q 10 16 20 -4 q 4 24 -6 44`} fill={['#ff6b6b', '#f4a261', '#c77dff'][i]} stroke={C.ink} strokeWidth={2} />
      ))}
      <Label x={1475} y={500} t="OCEAN · REEF" size={18} />
      {/* savanna + marsh + desert, stepped */}
      <Glass d="M 1600 640 L 1600 450 L 1800 500 L 1800 640 Z" />
      <Glass d="M 1800 640 L 1800 500 L 2000 540 L 2000 640 Z" />
      {Array.from({length: 9}).map((_, i) => (
        <path key={i} d={`M ${1615 + i * 20} 640 l 4 -26 l 4 26`} fill="#e9c46a" stroke={C.ink} strokeWidth={1.5} />
      ))}
      {[1840, 1900, 1960].map((cx) => (
        <g key={cx} transform={`translate(${cx} 640)`}>
          <rect x={-5} y={-36} width={10} height={36} rx={5} fill="#52796f" stroke={C.ink} strokeWidth={2.5} />
        </g>
      ))}
      <Label x={1700} y={520} t="SAVANNA" size={16} />
      <Label x={1900} y={560} t="DESERT" size={16} />
      {plane === 'bugs' &&
        Array.from({length: 60}).map((_, i) => {
          const ax = 640 + ((i * 97 + frame * (2 + (i % 3))) % 1400);
          return <ellipse key={i} cx={ax} cy={634 - (i % 4) * 3} rx={i % 5 === 0 ? 7 : 4} ry={i % 5 === 0 ? 4 : 2.5} fill={i % 5 === 0 ? '#7f5539' : '#1d1a31'} />;
        })}
      {plane === 'bugs' &&
        Array.from({length: 12}).map((_, i) => (
          <ellipse key={`k${i}`} cx={370 + ((i * 53 + frame * (1 + (i % 2))) % 120)} cy={438 - (i % 3) * 22} rx={5} ry={3} fill="#7f5539" stroke={C.ink} strokeWidth={1} />
        ))}
      {/* crew */}
      <Figure x={440} y={447} s={0.8} hat="chef" shirt="#ffffff" flip />
      <Figure x={410} y={557} s={0.8} shirt="#457b9d" />
      <Figure x={870} y={640} s={0.85} shirt="#2a9d8f" />
      <Figure x={1250} y={640} s={0.85} shirt="#f1c0a0" flip />
      <Figure x={1500} y={640} s={0.85} shirt="#ffb703" />
      <Figure x={1250} y={840} s={0.85} shirt="#8d99ae" flip />
      {you && youSpot[you] && <Figure x={youSpot[you][0]} y={youSpot[you][1]} s={0.95} cap shirt={C.red} pose={youSpot[you][2]} />}
      {/* oxygen truck outside */}
      {plane === 'pump' && (
        <g>
          <g transform="translate(2420 640)">
            <rect x={-110} y={-70} width={150} height={56} rx={8} fill="#e9ecef" stroke={C.ink} strokeWidth={4} />
            <text x={-35} y={-36} fontSize={18} textAnchor="middle" fontFamily="sans-serif" fill={C.ink}>LIQUID O2</text>
            <rect x={40} y={-60} width={60} height={46} rx={6} fill={C.red} stroke={C.ink} strokeWidth={4} />
            {[-80, 0, 70].map((wx) => (
              <circle key={wx} cx={wx} cy={-10} r={14} fill="#343a40" stroke={C.ink} strokeWidth={3} />
            ))}
          </g>
          <path d="M 2310 610 Q 2290 690 2160 700" stroke="#219ebc" strokeWidth={8} fill="none" />
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={2300 - ((frame * 3 + i * 40) % 140)} cy={640 + ((frame * 3 + i * 40) % 140) / 2.5} r={5} fill="#90e0ef" />
          ))}
        </g>
      )}
      {dark && <rect x={-900} y={-700} width={4200} height={2100} fill="#0b1026" opacity={0.15} />}
    </g>
  );
};
