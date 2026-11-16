import React from 'react';
import {C, Figure, Label} from '../ui';
import type {Tod} from './SouthPole';
import type {WorldProps} from './registry';

/** IX world: MOSAiC expedition, German research icebreaker Polarstern frozen into Arctic sea ice.
 *  x 250..1150: Polarstern (red hull, white superstructure, mast with crow's nest, cutaway interior).
 *  x 1150..2100: Ice Camp (met city, ocean city, rov city, dark zone, tripwire fence).
 *  x 2200..2750: Russian resupply icebreaker breaking through sea ice.
 *  x 2420..2940, y -240..240: Inset Arctic transpolar drift map.
 */
export const VIEWS: Record<string, [number, number, number]> = {
  wide: [1350, 480, 0.72], ship: [680, 470, 1.3],
  mess: [530, 565, 5.0], cabin: [530, 445, 5.0], lab: [710, 445, 5.0], lounge: [710, 565, 5.0],
  heli: [340, 390, 3.2], crow: [860, 150, 4.2], camp: [1560, 570, 1.7],
  rov: [1710, 620, 4.8], hole: [1490, 620, 4.5], dark: [1940, 600, 4.4],
  guard: [1200, 600, 5.2], fence: [1230, 600, 3.6], bear: [1060, 600, 4.6],
  ice: [1750, 560, 1.4], sky: [1100, 200, 1.6], crack: [1420, 630, 3.5],
  melt: [1340, 625, 4.2], supply: [2420, 540, 1.7], map: [2680, 0, 2.0],
};

export const viewOf = (name: string, _tod: Tod): [number, number, number] => VIEWS[name] ?? VIEWS.wide;

const SKY: Record<Tod, [string, string]> = {
  day: ['#68b5e8', '#fdf0d5'],
  dusk: ['#472d62', '#f4a261'],
  night: ['#060919', '#162238'],
  dawn: ['#282c4f', '#f9c74f'],
};

const Heli: React.FC<{x: number; y: number}> = ({x, y}) => (
  <g transform={`translate(${x} ${y})`}>
    <line x1={-38} y1={8} x2={38} y2={8} stroke={C.ink} strokeWidth={3.5} strokeLinecap="round" />
    <line x1={-22} y1={0} x2={-22} y2={8} stroke={C.ink} strokeWidth={3} />
    <line x1={18} y1={0} x2={18} y2={8} stroke={C.ink} strokeWidth={3} />
    <path d="M -46 -18 L 18 -18 Q 48 -18 48 0 L -46 0 Z" fill={C.red} stroke={C.ink} strokeWidth={3.5} />
    <path d="M -46 -12 L -98 -6 L -98 0 L -46 0 Z" fill={C.red} stroke={C.ink} strokeWidth={3} />
    <rect x={12} y={-14} width={26} height={12} rx={3} fill="#bde0fe" stroke={C.ink} strokeWidth={2} />
    <ellipse cx={0} cy={-24} rx={84} ry={4} fill="#adb5bd" opacity={0.6} />
    <line x1={0} y1={-24} x2={0} y2={-18} stroke={C.ink} strokeWidth={3.5} />
  </g>
);

const Bear: React.FC<{x: number; y: number; frame: number; walking?: boolean}> = ({x, y, frame, walking}) => {
  const sw = walking ? Math.sin(frame / 5) * 8 : 0;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={12 + sw} y={-10} width={10} height={20} rx={4} fill="#e5e0d8" stroke={C.ink} strokeWidth={3} />
      <rect x={-26 - sw} y={-10} width={10} height={20} rx={4} fill="#e5e0d8" stroke={C.ink} strokeWidth={3} />
      <ellipse cx={0} cy={-22} rx={36} ry={20} fill="#fbfaf6" stroke={C.ink} strokeWidth={3.5} />
      <circle cx={-34} cy={-26} r={14} fill="#fbfaf6" stroke={C.ink} strokeWidth={3} />
      <ellipse cx={-46} cy={-22} rx={8} ry={6} fill="#fbfaf6" stroke={C.ink} strokeWidth={2} />
      <circle cx={-52} cy={-23} r={3} fill={C.ink} />
      <circle cx={-36} cy={-30} r={2} fill={C.ink} />
      <circle cx={-30} cy={-38} r={4} fill="#fbfaf6" stroke={C.ink} strokeWidth={2} />
      <rect x={20 - sw} y={-8} width={11} height={20} rx={4} fill="#fbfaf6" stroke={C.ink} strokeWidth={3.5} />
      <rect x={-18 + sw} y={-8} width={11} height={20} rx={4} fill="#fbfaf6" stroke={C.ink} strokeWidth={3.5} />
    </g>
  );
};

const MapPanel: React.FC<{x: number; y: number}> = ({x, y}) => (
  <g transform={`translate(${x} ${y})`}>
    <rect x={-260} y={-240} width={520} height={480} rx={16} fill="#fcf8ed" stroke={C.ink} strokeWidth={6} />
    <Label x={0} y={-205} t="MOSAiC DRIFT TRACK" size={17} color={C.navy} />
    <circle cx={0} cy={5} r={165} fill="#e2eff7" stroke={C.ink} strokeWidth={3.5} />
    <circle cx={0} cy={5} r={115} fill="none" stroke="#90b4ce" strokeWidth={1.5} strokeDasharray="4 4" />
    <circle cx={0} cy={5} r={60} fill="none" stroke="#90b4ce" strokeWidth={1.5} strokeDasharray="4 4" />
    <line x1={-165} y1={5} x2={165} y2={5} stroke="#90b4ce" strokeWidth={1} />
    <line x1={0} y1={-160} x2={0} y2={170} stroke="#90b4ce" strokeWidth={1} />
    <path d="M -120 50 Q -90 100 -50 135 Q -90 145 -130 105 Z" fill="#b7c9b8" stroke={C.ink} strokeWidth={2} />
    <ellipse cx={-65} cy={-25} rx={12} ry={15} fill="#b7c9b8" stroke={C.ink} strokeWidth={1.5} />
    <path d="M 50 135 Q 110 85 155 10 Q 165 65 140 140 Z" fill="#b7c9b8" stroke={C.ink} strokeWidth={2} />
    <path d="M 130 45 Q 90 5 50 -10 T 5 5 T -30 -25 T -75 -60" fill="none" stroke={C.red} strokeWidth={3.5} strokeDasharray="6 4" />
    <circle cx={0} cy={5} r={4.5} fill={C.red} stroke={C.ink} strokeWidth={1.5} />
    <Label x={0} y={-7} t="NORTH POLE 90°N" size={10} color={C.red} />
    <circle cx={5} cy={5} r={7} fill="#ffd166" stroke={C.ink} strokeWidth={2.5} />
    <rect x={-235} y={150} width={210} height={65} rx={6} fill="#ffffff" stroke={C.ink} strokeWidth={2} />
    <Label x={-225} y={170} t="MOSAiC DRIFT" size={10} anchor="start" />
    <Label x={-225} y={188} t="2019–2020" size={9} color={C.steelDark} anchor="start" />
    <Label x={-225} y={204} t="3,400 KM ZIGZAG" size={9} color={C.steelDark} anchor="start" />
    <g transform="translate(210 180)">
      <line x1={0} y1={-20} x2={0} y2={20} stroke={C.ink} strokeWidth={2} />
      <line x1={-20} y1={0} x2={20} y2={0} stroke={C.ink} strokeWidth={2} />
      <polygon points="0,-22 4,-8 -4,-8" fill={C.red} />
      <text x={0} y={-26} fontSize={8} textAnchor="middle" fontFamily="sans-serif" fontWeight={700}>N</text>
    </g>
  </g>
);

const Cutaway: React.FC<{frame: number; dark: boolean; you?: string}> = ({frame, dark, you}) => {
  const pa = (frame * 12 * Math.PI) / 180;
  return (
    <g>
      <rect x={440} y={390} width={370} height={220} fill="#f8f9fa" stroke={C.ink} strokeWidth={6} />
      <line x1={440} y1={500} x2={810} y2={500} stroke={C.ink} strokeWidth={5} />
      <line x1={625} y1={390} x2={625} y2={610} stroke={C.ink} strokeWidth={5} />

      {/* Cabin */}
      <rect x={445} y={395} width={175} height={100} fill="#eae4f2" />
      <circle cx={478} cy={432} r={16} fill={dark ? '#0c162c' : '#a8dadc'} stroke={C.ink} strokeWidth={3} />
      <line x1={462} y1={432} x2={494} y2={432} stroke={C.ink} strokeWidth={2} />
      <rect x={520} y={418} width={72} height={14} rx={3} fill="#e63946" stroke={C.ink} strokeWidth={2} />
      <rect x={520} y={412} width={18} height={8} rx={2} fill="#ffffff" stroke={C.ink} strokeWidth={1.5} />
      <rect x={520} y={458} width={72} height={14} rx={3} fill="#457b9d" stroke={C.ink} strokeWidth={2} />
      <rect x={520} y={452} width={18} height={8} rx={2} fill="#ffffff" stroke={C.ink} strokeWidth={1.5} />
      <line x1={535} y1={410} x2={535} y2={490} stroke={C.ink} strokeWidth={2.5} />
      {[430, 450, 470].map((ly) => <line key={ly} x1={530} y1={ly} x2={540} y2={ly} stroke={C.ink} strokeWidth={2} />)}
      <rect x={465} y={470} width={40} height={20} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
      {you === 'cabin' ? <Figure x={555} y={468} s={0.7} shirt={C.red} pose="lie" /> : <Figure x={555} y={428} s={0.7} shirt="#457b9d" pose="lie" />}
      <Label x={530} y={408} t="CABIN" size={11} />

      {/* Lab */}
      <rect x={630} y={395} width={175} height={100} fill="#dceaf7" />
      <rect x={638} y={462} width={105} height={8} fill="#8d99ae" stroke={C.ink} strokeWidth={2.5} />
      <path d="M 650 462 v -16 h 8 v 4 h -4 v 12 Z M 658 444 l 8 -8" stroke={C.ink} strokeWidth={3} fill="none" />
      <rect x={672} y={426} width={45} height={5} fill="#495057" />
      {['#4cc9f0', '#52b788', '#ffd166', '#e76f51'].map((c, i) => (
        <rect key={i} x={675 + i * 10} y={414} width={7} height={12} rx={2} fill={c} stroke={C.ink} strokeWidth={1} />
      ))}
      <rect x={748} y={410} width={45} height={80} rx={4} fill="#ced4da" stroke={C.ink} strokeWidth={3} />
      <rect x={754} y={416} width={33} height={66} rx={2} fill="#bde0fe" stroke={C.ink} strokeWidth={2} opacity={0.8} />
      <line x1={762} y1={422} x2={762} y2={476} stroke="#ffffff" strokeWidth={5} strokeLinecap="round" />
      <line x1={776} y1={422} x2={776} y2={476} stroke="#ffffff" strokeWidth={5} strokeLinecap="round" />
      <text x={770} y={491} fontSize={7} fill={C.red} textAnchor="middle" fontFamily="sans-serif">-20°C</text>
      {you === 'lab' ? <Figure x={685} y={488} s={0.7} shirt={C.red} cap /> : <Figure x={685} y={488} s={0.7} shirt="#f8f9fa" />}
      <Label x={710} y={408} t="LAB · CORES" size={11} />

      {/* Mess */}
      <rect x={445} y={505} width={175} height={100} fill="#fbe8c8" />
      <rect x={455} y={550} width={45} height={42} fill="#adb5bd" stroke={C.ink} strokeWidth={2.5} />
      <Figure x={475} y={590} s={0.65} hat="chef" shirt="#ffffff" flip />
      <rect x={488} y={560} width={26} height={8} rx={2} fill="#8d6e4c" stroke={C.ink} strokeWidth={1.5} />
      {[0, 1, 2].map((i) => <ellipse key={i} cx={493 + i * 8} cy={558} rx={3} ry={2} fill="#e9c46a" stroke={C.ink} strokeWidth={1} />)}
      {[0, 1].map((i) => <path key={i} d={`M ${464 + i * 8} 544 q 3 -6 0 -12`} stroke="#ffffff" strokeWidth={1.5} fill="none" opacity={0.6} />)}
      <rect x={524} y={562} width={76} height={8} fill="#8d6e4c" stroke={C.ink} strokeWidth={2.5} />
      <line x1={534} y1={570} x2={534} y2={592} stroke={C.ink} strokeWidth={2} />
      <line x1={590} y1={570} x2={590} y2={592} stroke={C.ink} strokeWidth={2} />
      <circle cx={545} cy={558} r={3} fill="#ffffff" stroke={C.ink} strokeWidth={1} />
      <circle cx={570} cy={558} r={3} fill="#ffffff" stroke={C.ink} strokeWidth={1} />
      {you === 'mess' ? <Figure x={555} y={592} s={0.65} pose="sit" shirt={C.red} cap /> : <Figure x={555} y={592} s={0.65} pose="sit" shirt="#f77f00" />}
      <Label x={530} y={518} t="MESS · BREAD" size={11} />

      {/* Lounge & Gym */}
      <rect x={630} y={505} width={175} height={100} fill="#e3f2e1" />
      <rect x={642} y={560} width={50} height={24} rx={6} fill="#264653" stroke={C.ink} strokeWidth={3} />
      <rect x={696} y={572} width={28} height={10} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
      <rect x={700} y={568} width={18} height={4} fill="#ffd166" stroke={C.ink} strokeWidth={1} />
      <rect x={644} y={516} width={45} height={22} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
      <line x1={755} y1={590} x2={770} y2={565} stroke={C.ink} strokeWidth={3.5} />
      <path d="M 770 565 l 6 -10 h 8" stroke={C.ink} strokeWidth={3} fill="none" />
      <ellipse cx={758} cy={563} rx={6} ry={3} fill="#1d3557" stroke={C.ink} strokeWidth={2} />
      <circle cx={772} cy={582} r={10} fill="#adb5bd" stroke={C.ink} strokeWidth={2.5} />
      <line x1={772 - Math.cos(pa) * 8} y1={582 - Math.sin(pa) * 8} x2={772 + Math.cos(pa) * 8} y2={582 + Math.sin(pa) * 8} stroke={C.ink} strokeWidth={2} />
      {you === 'lounge' ? <Figure x={666} y={592} s={0.65} pose="sit" shirt={C.red} /> : <Figure x={666} y={592} s={0.65} pose="sit" shirt="#2a9d8f" />}
      <Label x={710} y={518} t="LOUNGE & GYM" size={11} />
    </g>
  );
};

export const Polar: React.FC<WorldProps> = ({frame, tod, you, plane}) => {
  const [s0, s1] = SKY[tod];
  const dark = tod === 'night';
  const planes = new Set((plane ?? '').split(' '));
  const hasBear = planes.has('bear');
  const hasFlare = planes.has('flare');
  const hasCrack = planes.has('crack');
  const hasSupply = planes.has('supply');
  const hasMelt = planes.has('melt') || tod === 'day';
  const ctdY = 620 + Math.sin(frame / 15) * 8;

  return (
    <g>
      <defs>
        <linearGradient id="pol-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={s0} />
          <stop offset="1" stopColor={s1} />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect x={-500} y={-350} width={3700} height={1000} fill="url(#pol-sky)" />
      {dark &&
        Array.from({length: 80}).map((_, i) => (
          <circle key={i} cx={-400 + ((i * 397) % 3500)} cy={-300 + ((i * 197) % 750)} r={1.5 + (i % 3)} fill="#ffffff" opacity={0.35 + 0.45 * Math.sin((frame + i * 11) / 10)} />
        ))}
      {dark && (
        <g>
          <path d="M 1340 70 A 24 24 0 1 0 1370 114 A 20 20 0 1 1 1340 70 Z" fill="#fff9db" stroke={C.ink} strokeWidth={2} />
          <path d={`M -300 ${220 + Math.sin(frame / 20) * 15} Q 400 ${140 + Math.cos(frame / 25) * 20} 1100 ${190 + Math.sin(frame / 18) * 15} T 2400 ${160 + Math.sin(frame / 22) * 20}`} stroke="#52ffb8" strokeWidth={40} fill="none" opacity={0.32} />
          <path d={`M -200 ${250 + Math.cos(frame / 18) * 15} Q 600 ${170 + Math.sin(frame / 22) * 20} 1300 ${220 + Math.cos(frame / 16) * 18} T 2500 ${190 + Math.cos(frame / 20) * 15}`} stroke="#2a9d8f" strokeWidth={55} fill="none" opacity={0.24} />
        </g>
      )}
      {!dark && <circle cx={1600} cy={530} r={48} fill="#ffd166" stroke={C.ink} strokeWidth={5} />}

      {/* Ocean below ice (y 760..1300) */}
      <rect x={-500} y={760} width={3700} height={540} fill="#050d1a" stroke={C.ink} strokeWidth={4} />

      {/* Sea Ice Sheet (y 640..760) */}
      <rect x={-500} y={640} width={3700} height={120} fill="#dbe7f5" stroke={C.ink} strokeWidth={4} />
      <rect x={-500} y={636} width={3700} height={8} fill="#f4f9fd" />
      {[[-300, 638], [120, 638], [980, 638], [1130, 638], [1370, 638], [1620, 638], [1860, 638], [2140, 638]].map(([rx, ry], i) => (
        <polygon key={i} points={`${rx - 25},${ry} ${rx - 5},${ry - 12 - (i % 3) * 4} ${rx + 15},${ry - 6} ${rx + 30},${ry}`} fill="#e2edf8" stroke={C.ink} strokeWidth={2.5} />
      ))}

      {/* Russian Resupply Icebreaker (x > 2200) */}
      <g>
        <polygon points="2220,620 2360,620 2540,620 2580,680 2540,780 2270,780 2220,670" fill="#212529" stroke={C.ink} strokeWidth={5} />
        <rect x={2330} y={500} width={180} height={120} fill="#f8f9fa" stroke={C.ink} strokeWidth={4} />
        <rect x={2360} y={440} width={120} height={60} fill="#f77f00" stroke={C.ink} strokeWidth={4} />
        <rect x={2390} y={390} width={40} height={50} fill="#d90429" stroke={C.ink} strokeWidth={3} />
        <line x1={2390} y1={410} x2={2430} y2={410} stroke="#ffffff" strokeWidth={5} />
        <line x1={2390} y1={420} x2={2430} y2={420} stroke="#003566" strokeWidth={5} />
        {[0, 1, 2].map((i) => <circle key={i} cx={2410 + Math.sin((frame + i * 15) / 10) * 10} cy={380 - ((frame * 1.5 + i * 25) % 80)} r={8 + i * 4} fill="#495057" opacity={0.4} />)}
        <polygon points="2180,640 2215,622 2235,635 2200,648" fill="#f8f9fa" stroke={C.ink} strokeWidth={2.5} />
        <polygon points="2205,644 2240,630 2255,646 2220,654" fill="#dbe7f5" stroke={C.ink} strokeWidth={2.5} />
        <Label x={2420} y={540} t="RESUPPLY VESSEL" size={13} color="#212529" />
        {hasSupply && (
          <g>
            <rect x={2160} y={620} width={24} height={18} fill="#f4a261" stroke={C.ink} strokeWidth={2} />
            <rect x={2188} y={620} width={24} height={18} fill="#e76f51" stroke={C.ink} strokeWidth={2} />
            <circle cx={2172} cy={612} r={6} fill="#f77f00" stroke={C.ink} strokeWidth={2} />
            <circle cx={2184} cy={612} r={6} fill="#f77f00" stroke={C.ink} strokeWidth={2} />
            <line x1={2350} y1={440} x2={2200} y2={560} stroke="#ffb703" strokeWidth={5} />
            <line x1={2200} y1={560} x2={2200} y2={620} stroke={C.ink} strokeWidth={2} />
            <Figure x={2145} y={638} s={0.7} shirt="#1d3557" cap />
          </g>
        )}
      </g>

      {/* Polarstern (x 250..1150) */}
      <polygon points="250,420 420,420 420,490 1020,490 1140,530 1120,640 1130,760 1040,800 340,800 270,760 250,640" fill="#d90429" stroke={C.ink} strokeWidth={6} />
      <line x1={255} y1={640} x2={1120} y2={640} stroke="#ffffff" strokeWidth={6} />
      <circle cx={1115} cy={750} r={22} fill="#a7001e" stroke={C.ink} strokeWidth={3} />
      <circle cx={295} cy={770} r={16} fill="#f4a261" stroke={C.ink} strokeWidth={3} />
      <rect x={268} y={745} width={14} height={45} rx={3} fill="#495057" stroke={C.ink} strokeWidth={3} />
      <Label x={1080} y={560} t="POLARSTERN" size={13} color="#ffffff" />
      <polygon points="420,420 420,380 770,380 770,310 820,280 940,280 970,380 970,490 420,490" fill="#f8f9fa" stroke={C.ink} strokeWidth={5} />
      <polygon points="830,290 935,290 945,325 825,325" fill="#8ecae6" stroke={C.ink} strokeWidth={3} />
      {[855, 880, 910].map((wx) => <line key={wx} x1={wx} y1={290} x2={wx} y2={325} stroke={C.ink} strokeWidth={2} />)}
      <line x1={880} y1={280} x2={880} y2={260} stroke={C.ink} strokeWidth={3} />
      <line x1={880 - Math.cos(frame * 0.1) * 16} y1={260} x2={880 + Math.cos(frame * 0.1) * 16} y2={260} stroke={C.ink} strokeWidth={3.5} />
      <rect x={655} y={285} width={50} height={95} fill="#003566" stroke={C.ink} strokeWidth={4} />
      <rect x={655} y={320} width={50} height={18} fill="#ffffff" />
      {[0, 1, 2].map((i) => <circle key={i} cx={680 + Math.sin((frame + i * 15) / 10) * 8} cy={275 - ((frame * 1.5 + i * 25) % 65)} r={6 + i * 3} fill="#ffffff" opacity={0.5} />)}
      <line x1={850} y1={280} x2={850} y2={110} stroke={C.ink} strokeWidth={6} />
      {[150, 190, 230].map((my) => <line key={my} x1={840} y1={my} x2={860} y2={my} stroke={C.ink} strokeWidth={3} />)}
      <rect x={835} y={135} width={30} height={36} rx={6} fill="#f8f9fa" stroke={C.ink} strokeWidth={3.5} />
      <circle cx={850} cy={152} r={8} fill="#90e0ef" stroke={C.ink} strokeWidth={2} />
      <Figure x={850} y={136} s={0.42} shirt={C.red} cap />
      <circle cx={850} cy={108} r={5} fill={Math.floor(frame / 12) % 2 ? C.red : '#4a0000'} stroke={C.ink} strokeWidth={1.5} />
      <Label x={850} y={96} t="CROW'S NEST" size={9} />
      <rect x={240} y={392} width={180} height={12} fill="#2a9d8f" stroke={C.ink} strokeWidth={4} />
      <line x1={240} y1={385} x2={420} y2={385} stroke={C.ink} strokeWidth={2} strokeDasharray="5 5" />
      <Heli x={340} y={384} />
      <Label x={340} y={415} t="HELIDECK" size={10} color="#ffffff" />
      <line x1={415} y1={385} x2={375} y2={295} stroke="#ffb703" strokeWidth={6} />
      <line x1={375} y1={295} x2={375} y2={340} stroke={C.ink} strokeWidth={2} />
      <line x1={980} y1={480} x2={1060} y2={420} stroke="#ffb703" strokeWidth={7} />
      <line x1={1060} y1={420} x2={1060} y2={510} stroke={C.ink} strokeWidth={2.5} />
      <line x1={990} y1={580} x2={1070} y2={640} stroke={C.ink} strokeWidth={4} />
      <line x1={990} y1={570} x2={1070} y2={630} stroke={C.ink} strokeWidth={2.5} />

      {/* Cutaway of Ship's Interior */}
      <Cutaway frame={frame} dark={dark} you={you} />

      {/* Snaking Power Cables */}
      <path d="M 1040 640 Q 1140 645 1250 639 T 1460 641 T 1710 640 T 1940 641" stroke="#22223b" strokeWidth={4} fill="none" />

      {/* Tripwire Fence & Flare */}
      {[1160, 1270, 1460, 1690, 1910, 2070].map((px) => (
        <g key={px}>
          <line x1={px} y1={612} x2={px} y2={640} stroke={C.ink} strokeWidth={3} />
          <circle cx={px} cy={612} r={3} fill="#ffd166" />
        </g>
      ))}
      <line x1={1160} y1={622} x2={2070} y2={622} stroke={C.ink} strokeWidth={2} strokeDasharray="5 4" />
      <Label x={1230} y={605} t="TRIPWIRE" size={9} />
      {hasFlare && (
        <g>
          <circle cx={1160} cy={280} r={75} fill={C.red} opacity={0.25} />
          <circle cx={1160} cy={280} r={14} fill="#ffe66d" stroke={C.ink} strokeWidth={3} />
          <path d="M 1160 294 Q 1150 440 1160 620" stroke={C.red} strokeWidth={4} strokeDasharray="8 6" fill="none" />
          <Label x={1160} y={250} t="TRIPWIRE FLARE!" size={13} color={C.red} />
        </g>
      )}

      {/* Bear Guard */}
      <Figure x={1200} y={640} s={0.8} shirt={you === 'guard' ? C.red : '#d90429'} cap />
      <line x1={1206} y1={605} x2={1218} y2={565} stroke={C.ink} strokeWidth={3.5} strokeLinecap="round" />
      <rect x={1190} y={578} width={12} height={7} rx={2} fill="#343a40" stroke={C.ink} strokeWidth={1.5} />
      <Label x={1200} y={555} t="BEAR GUARD" size={11} />

      {/* Polar Bear */}
      <Bear x={1060} y={638} frame={frame} walking={hasBear} />
      <Label x={1060} y={575} t="POLAR BEAR" size={11} color={C.navy} />

      {/* Met City & Weather Mast */}
      <g transform={hasCrack ? 'rotate(5 1270 640)' : ''}>
        <rect x={1265} y={590} width={65} height={50} rx={5} fill="#f77f00" stroke={C.ink} strokeWidth={3.5} />
        <rect x={1280} y={600} width={16} height={16} fill={dark ? '#ffd166' : '#8ecae6'} stroke={C.ink} strokeWidth={2} />
        <Label x={1297} y={625} t="MET CITY" size={10} color="#ffffff" />
        <line x1={1245} y1={640} x2={1245} y2={470} stroke={C.ink} strokeWidth={4} />
        {[510, 550, 590].map((wy) => <line key={wy} x1={1235} y1={wy} x2={1255} y2={wy} stroke={C.ink} strokeWidth={2.5} />)}
        <line x1={1245 - Math.cos(frame * 0.2) * 14} y1={470} x2={1245 + Math.cos(frame * 0.2) * 14} y2={470} stroke={C.ink} strokeWidth={3} />
        <circle cx={1245 - Math.cos(frame * 0.2) * 14} cy={470} r={3} fill="#d90429" />
        <circle cx={1245 + Math.cos(frame * 0.2) * 14} cy={470} r={3} fill="#d90429" />
      </g>

      {/* Ocean City */}
      <g transform={hasCrack ? 'rotate(-6 1480 640)' : ''}>
        <ellipse cx={1490} cy={640} rx={28} ry={8} fill="#050d1a" stroke={C.ink} strokeWidth={3} />
        <line x1={1460} y1={640} x2={1490} y2={550} stroke="#ffb703" strokeWidth={4} />
        <line x1={1520} y1={640} x2={1490} y2={550} stroke="#ffb703" strokeWidth={4} />
        <line x1={1490} y1={640} x2={1490} y2={550} stroke="#ffb703" strokeWidth={3} />
        <line x1={1490} y1={550} x2={1490} y2={ctdY} stroke="#ced4da" strokeWidth={2} />
        <rect x={1482} y={ctdY} width={16} height={20} rx={3} fill="#6c757d" stroke={C.ink} strokeWidth={2} />
        <polygon points="1420,640 1445,595 1470,640" fill="#2a9d8f" stroke={C.ink} strokeWidth={3} />
        <Label x={1490} y={535} t="OCEAN CITY" size={11} />
      </g>

      {/* ROV City */}
      <rect x={1650} y={590} width={60} height={50} rx={5} fill="#52b788" stroke={C.ink} strokeWidth={3.5} />
      <Label x={1680} y={615} t="ROV CITY" size={10} color="#ffffff" />
      <ellipse cx={1740} cy={640} rx={24} ry={7} fill="#050d1a" stroke={C.ink} strokeWidth={3} />
      <rect x={1715} y={618} width={38} height={20} rx={4} fill="#ffd166" stroke={C.ink} strokeWidth={3} />
      <circle cx={1715} cy={628} r={5} fill="#48cae4" />
      <path d="M 1710 625 Q 1725 610 1740 640" stroke="#f77f00" strokeWidth={3} fill="none" />
      <Label x={1735} y={600} t="ROV" size={9} />

      {/* Dark Zone */}
      {[1880, 1950, 2020].map((dx) => (
        <g key={dx}>
          <line x1={dx} y1={610} x2={dx} y2={640} stroke={C.ink} strokeWidth={2.5} />
          <polygon points={`${dx},610 ${dx + 8},614 ${dx},618`} fill={C.red} />
        </g>
      ))}
      <line x1={1880} y1={615} x2={2020} y2={615} stroke={C.red} strokeWidth={1.5} strokeDasharray="4 4" />
      <polygon points="1950,560 1890,640 2010,640" fill="#e63946" opacity={0.28} />
      <line x1={1950} y1={560} x2={1950} y2={640} stroke={C.ink} strokeWidth={3} />
      <circle cx={1950} cy={560} r={8} fill={C.red} stroke={C.ink} strokeWidth={2.5} />
      <Label x={1950} y={532} t="DARK ZONE" size={11} color={C.red} />
      <Label x={1950} y={548} t="INFRARED ONLY" size={8} color={C.red} />

      {/* Ice Crack / Open Lead */}
      {hasCrack && (
        <g>
          <polygon points="1390,638 1435,638 1425,760 1380,760" fill="#040b17" stroke={C.ink} strokeWidth={4} />
          <polygon points="1395,648 1410,642 1420,654 1405,658" fill="#ffffff" stroke={C.ink} strokeWidth={1.5} />
          <line x1={1380} y1={637} x2={1445} y2={637} stroke="#8d6e4c" strokeWidth={5} />
          <Label x={1412} y={620} t="OPEN LEAD" size={10} color={C.red} />
        </g>
      )}

      {/* Melt Ponds */}
      {hasMelt && (
        <g>
          <ellipse cx={1335} cy={639} rx={32} ry={5} fill="#48cae4" stroke={C.ink} strokeWidth={2} />
          <ellipse cx={1610} cy={639} rx={26} ry={4} fill="#48cae4" stroke={C.ink} strokeWidth={2} />
          <Label x={1335} y={628} t="MELT POND" size={9} color="#0077b6" />
        </g>
      )}

      {/* Camp figure */}
      <Figure x={1360} y={640} s={0.8} shirt={you === 'camp' ? C.red : '#f77f00'} cap />

      {/* Inset Arctic Map Panel */}
      <MapPanel x={2680} y={0} />

      {/* Night overall subtle tint */}
      {dark && <rect x={-500} y={-350} width={3700} height={1650} fill="#060919" opacity={0.16} pointerEvents="none" />}
    </g>
  );
};
