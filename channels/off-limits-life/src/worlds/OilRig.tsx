import React from 'react';
import {C, Figure, Label} from '../ui';
import type {Tod} from './SouthPole';

/** IX004 world: North Sea production platform, side cutaway. Waterline y=700. Accommodation module (2 floors of rooms)
 *  on the left with the helideck on top; process area, derrick and flare to the right; supply boat at sea; HUET pool onshore (x<-700).
 *  `plane` = state string: 'fly' / 'land' (helicopter) · 'flip' (HUET cabin upside down) · 'night' (cabin lights) · 'pump' (water maker)
 *  · 'supply' (boat hose) · 'storm' (dark sky, rain, big sea) · 'fire' (process area burning, Piper Alpha).
 *  Motion is kept small and slow on purpose: big moving or flashing areas read as pans/cuts in the teardown gate. */
const V: Record<string, [number, number, number]> = {
  wide: [1150, 420, 0.72],
  rig: [1150, 400, 1.25],
  sky: [1100, 120, 1.6],
  sea: [1300, 760, 1.5],
  heli: [660, 190, 3.6],
  helideck: [660, 235, 3.0],
  cabin: [590, 378, 6],
  bunk: [575, 385, 9],
  shower: [730, 378, 6],
  cabin2: [870, 378, 6],
  cinema: [1010, 378, 6],
  galley: [590, 473, 6],
  mess: [730, 473, 6],
  laundry: [870, 473, 6],
  gym: [1010, 473, 6],
  office: [980, 290, 5],
  drill: [1460, 280, 4],
  derrick: [1460, 170, 1.8],
  deck: [1700, 280, 4],
  water: [1180, 470, 5],
  boat: [2220, 660, 2.6],
  flare: [1900, 240, 2.2],
  muster: [1640, 450, 5],
  lifeboat: [1790, 470, 4.4],
  pool: [-1100, 560, 3.2],
};
export const viewOf = (name: string, _tod: Tod): [number, number, number] => V[name] ?? V.wide;

const SKY: Record<Tod, [string, string]> = {
  day: ['#8ecae6', '#e0f1f8'],
  dusk: ['#5e548e', '#f4a261'],
  night: ['#070b1f', '#1b2a4a'],
  dawn: ['#3d405b', '#f2cc8f'],
};

/** Accommodation rooms: 140 x 95, upper floor y 330, lower floor y 425. */
const ROOMS: {id: string; x: number; y: number; bg: string; label: string}[] = [
  {id: 'cabin', x: 520, y: 330, bg: '#e8e1f5', label: 'CABIN'},
  {id: 'shower', x: 660, y: 330, bg: '#d9f0f0', label: 'BATHROOM'},
  {id: 'cabin2', x: 800, y: 330, bg: '#ece6f7', label: 'CABIN'},
  {id: 'cinema', x: 940, y: 330, bg: '#2b2d42', label: 'CINEMA'},
  {id: 'galley', x: 520, y: 425, bg: '#f6e3e3', label: 'GALLEY'},
  {id: 'mess', x: 660, y: 425, bg: '#fbe8c8', label: 'MESS'},
  {id: 'laundry', x: 800, y: 425, bg: '#dceaf7', label: 'LAUNDRY'},
  {id: 'gym', x: 940, y: 425, bg: '#e3f6d5', label: 'GYM'},
];
const RW = 140;
const RH = 95;

const YOU: Record<string, [number, number, 'stand' | 'sit' | 'lie']> = {
  cabin: [585, 383, 'lie'],
  bunk: [585, 383, 'lie'],
  cabin2: [865, 383, 'lie'],
  shower: [700, 420, 'stand'],
  cinema: [1000, 420, 'sit'],
  galley: [560, 515, 'stand'],
  mess: [720, 515, 'sit'],
  laundry: [890, 515, 'stand'],
  gym: [1000, 515, 'stand'],
  office: [960, 325, 'sit'],
  drill: [1430, 298, 'stand'],
  deck: [1700, 298, 'stand'],
  helideck: [700, 243, 'stand'],
  heli: [700, 243, 'stand'],
  muster: [1650, 515, 'stand'],
  pool: [-1180, 520, 'stand'],
};

const Bunk: React.FC<{x: number; y: number}> = ({x, y}) => (
  <g>
    <rect x={x} y={y} width={78} height={13} rx={3} fill="#a8dadc" stroke={C.ink} strokeWidth={2.5} />
    <rect x={x + 3} y={y - 7} width={20} height={8} rx={3} fill="#fff" stroke={C.ink} strokeWidth={2} />
    <rect x={x} y={y + 13} width={78} height={8} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
  </g>
);

const Room: React.FC<{id: string; x: number; y: number; night: boolean; pump: boolean}> = ({id, x, y, night}) => {
  switch (id) {
    case 'cabin':
    case 'cabin2':
      return (
        <g>
          <Bunk x={x + 10} y={y + 46} />
          <Bunk x={x + 10} y={y + 74} />
          <line x1={x + 10} y1={y + 40} x2={x + 10} y2={y + 95} stroke={C.ink} strokeWidth={3} />
          <rect x={x + 100} y={y + 20} width={32} height={74} fill="#ced4da" stroke={C.ink} strokeWidth={2.5} />
          <line x1={x + 116} y1={y + 20} x2={x + 116} y2={y + 94} stroke={C.ink} strokeWidth={1.5} />
          <rect x={x + 30} y={y + 14} width={40} height={20} rx={3} fill={night ? '#1d3557' : '#bde0fe'} stroke={C.ink} strokeWidth={2} />
          <text x={x + 50} y={y + 28} fontSize={8} fontFamily="sans-serif" fill={night ? '#fff' : C.navy} textAnchor="middle">{night ? 'NIGHT SHIFT' : 'DAY SHIFT'}</text>
        </g>
      );
    case 'shower':
      return (
        <g>
          <rect x={x + 10} y={y + 14} width={36} height={80} fill="#bde0fe" stroke={C.ink} strokeWidth={2.5} />
          <line x1={x + 18} y1={y + 18} x2={x + 30} y2={y + 26} stroke={C.ink} strokeWidth={3} />
          {[0, 1, 2].map((i) => (
            <line key={i} x1={x + 24 + i * 5} y1={y + 34 + i * 6} x2={x + 24 + i * 5} y2={y + 40 + i * 6} stroke="#219ebc" strokeWidth={2} />
          ))}
          <rect x={x + 62} y={y + 64} width={24} height={30} rx={8} fill="#fff" stroke={C.ink} strokeWidth={2.5} />
          <rect x={x + 96} y={y + 48} width={32} height={12} fill="#fff" stroke={C.ink} strokeWidth={2.5} />
          <text x={x + 112} y={y + 30} fontSize={8} fontFamily="sans-serif" fill={C.navy} textAnchor="middle">SHARED</text>
        </g>
      );
    case 'cinema':
      return (
        <g>
          <rect x={x + 14} y={y + 14} width={112} height={44} fill={night ? '#e9c46a' : '#8ecae6'} stroke={C.ink} strokeWidth={2.5} />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={x + 16 + i * 28} y={y + 74} width={22} height={16} rx={4} fill="#c1121f" stroke={C.ink} strokeWidth={2} />
          ))}
        </g>
      );
    case 'galley':
      return (
        <g>
          <rect x={x + 8} y={y + 56} width={124} height={38} fill="#adb5bd" stroke={C.ink} strokeWidth={2.5} />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={x + 20 + i * 36} y={y + 46} width={26} height={12} rx={3} fill="#495057" stroke={C.ink} strokeWidth={2} />
          ))}
          <Figure x={x + 105} y={y + 92} s={0.55} shirt="#ffffff" hat="chef" />
          <rect x={x + 14} y={y + 12} width={60} height={26} fill="#fff" stroke={C.ink} strokeWidth={2} />
          <text x={x + 44} y={y + 24} fontSize={7} fontFamily="sans-serif" fill={C.navy} textAnchor="middle">OPEN 24 H</text>
          <text x={x + 44} y={y + 33} fontSize={7} fontFamily="sans-serif" fill={C.red} textAnchor="middle">{night ? 'NIGHT COOK' : 'DAY COOK'}</text>
        </g>
      );
    case 'mess':
      return (
        <g>
          {[0, 1].map((i) => (
            <g key={i}>
              <rect x={x + 12 + i * 64} y={y + 66} width={52} height={8} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
              <line x1={x + 38 + i * 64} y1={y + 74} x2={x + 38 + i * 64} y2={y + 94} stroke={C.ink} strokeWidth={3} />
              <circle cx={x + 26 + i * 64} cy={y + 62} r={5} fill="#f4a261" stroke={C.ink} strokeWidth={1.5} />
            </g>
          ))}
          <Figure x={x + 100} y={y + 94} s={0.55} pose="sit" shirt="#f77f00" flip />
        </g>
      );
    case 'laundry':
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={x + 10 + i * 42} y={y + 46} width={36} height={46} rx={4} fill="#f8f9fa" stroke={C.ink} strokeWidth={2.5} />
              <circle cx={x + 28 + i * 42} cy={y + 70} r={11} fill="#90e0ef" stroke={C.ink} strokeWidth={2.5} />
            </g>
          ))}
          <rect x={x + 16} y={y + 14} width={70} height={18} fill="#f77f00" stroke={C.ink} strokeWidth={2} />
          <text x={x + 51} y={y + 26} fontSize={7} fontFamily="sans-serif" fill="#fff" textAnchor="middle">WORKWEAR</text>
        </g>
      );
    case 'gym':
      return (
        <g>
          <rect x={x + 10} y={y + 74} width={60} height={14} rx={4} fill="#495057" stroke={C.ink} strokeWidth={2.5} />
          <line x1={x + 62} y1={y + 74} x2={x + 66} y2={y + 44} stroke={C.ink} strokeWidth={3} />
          <line x1={x + 88} y1={y + 60} x2={x + 128} y2={y + 60} stroke={C.ink} strokeWidth={4} />
          <rect x={x + 84} y={y + 50} width={8} height={20} fill="#1d3557" stroke={C.ink} strokeWidth={2} />
          <rect x={x + 124} y={y + 50} width={8} height={20} fill="#1d3557" stroke={C.ink} strokeWidth={2} />
        </g>
      );
    default:
      return null;
  }
};

const Helicopter: React.FC<{x: number; y: number}> = ({x, y}) => (
  <g transform={`translate(${x} ${y})`}>
    <ellipse cx={0} cy={-34} rx={90} ry={5} fill="#adb5bd" opacity={0.6} />
    <line x1={0} y1={-34} x2={0} y2={-24} stroke={C.ink} strokeWidth={4} />
    <path d="M -50 -24 L 30 -24 Q 55 -24 55 -6 L 55 0 L -50 0 Z" fill="#e9c46a" stroke={C.ink} strokeWidth={4} />
    <path d="M -50 -16 L -110 -20 L -110 -10 L -50 -6 Z" fill="#e9c46a" stroke={C.ink} strokeWidth={3} />
    <rect x={-118} y={-30} width={8} height={22} fill="#e9c46a" stroke={C.ink} strokeWidth={3} />
    <rect x={20} y={-20} width={26} height={12} rx={4} fill="#8ecae6" stroke={C.ink} strokeWidth={2.5} />
    {[-36, -16, 4].map((wx) => (
      <rect key={wx} x={wx} y={-18} width={14} height={10} rx={2} fill="#8ecae6" stroke={C.ink} strokeWidth={2} />
    ))}
    <line x1={-40} y1={6} x2={40} y2={6} stroke={C.ink} strokeWidth={4} />
  </g>
);

export const OilRig: React.FC<{frame: number; tod: Tod; you?: string; plane?: string; dur: number}> = ({frame, tod, you, plane, dur}) => {
  const storm = plane === 'storm';
  const fire = plane === 'fire';
  const night = plane === 'night' || tod === 'night';
  const [s0, s1] = storm ? (['#343a40', '#6c757d'] as [string, string]) : SKY[tod];
  const dark = tod === 'night' || storm;
  const t = Math.min(1, frame / Math.max(1, dur));
  const swell = storm ? 22 : 7;
  const sea = (y: number) => {
    let d = `M -1600 ${y}`;
    for (let x = -1600; x <= 3200; x += 80) d += ` q 40 ${(x / 80) % 2 ? swell : -swell} 80 0`;
    return d;
  };
  const heliY = plane === 'land' ? 243 : 130 + (1 - t) * 20;
  return (
    <g>
      <defs>
        <linearGradient id="or-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={s0} />
          <stop offset="1" stopColor={s1} />
        </linearGradient>
        <linearGradient id="or-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={dark ? '#1d3557' : '#2a6f97'} />
          <stop offset="1" stopColor="#081c33" />
        </linearGradient>
      </defs>
      <rect x={-1600} y={-700} width={4800} height={1400} fill="url(#or-sky)" />
      {tod === 'night' && !storm &&
        Array.from({length: 70}).map((_, i) => <circle key={i} cx={-1500 + ((i * 397) % 4600)} cy={-600 + ((i * 211) % 900)} r={1.5 + (i % 3)} fill="#fff" opacity={0.6} />)}
      {!dark && <circle cx={tod === 'dawn' ? 2500 : 300} cy={tod === 'dawn' ? 600 : 60} r={60} fill="#ffd23f" stroke={C.ink} strokeWidth={5} />}
      {/* onshore HUET training centre */}
      <g>
        <rect x={-1600} y={600} width={1000} height={900} fill="#adb5bd" stroke={C.ink} strokeWidth={5} />
        <rect x={-1500} y={330} width={800} height={270} fill="#e9ecef" stroke={C.ink} strokeWidth={5} />
        <Label x={-1100} y={360} t="HUET TRAINING CENTRE" size={22} />
        <rect x={-1420} y={500} width={640} height={100} fill="#48cae4" stroke={C.ink} strokeWidth={5} />
        <line x1={-1100} y1={380} x2={-1100} y2={plane === 'flip' ? 540 : 470} stroke={C.ink} strokeWidth={4} />
        <g transform={`translate(-1100 ${plane === 'flip' ? 560 : 490}) rotate(${plane === 'flip' ? 180 : 0})`}>
          <rect x={-70} y={-30} width={140} height={60} rx={14} fill="#e9c46a" stroke={C.ink} strokeWidth={4} />
          {[-46, -14, 18].map((wx) => (
            <rect key={wx} x={wx} y={-16} width={22} height={18} rx={3} fill="#8ecae6" stroke={C.ink} strokeWidth={2.5} />
          ))}
        </g>
        {plane === 'flip' && [0, 1, 2, 3].map((i) => <circle key={i} cx={-1150 + i * 30} cy={520 - ((frame * 0.8 + i * 20) % 30)} r={4} fill="none" stroke="#fff" strokeWidth={2} />)}
        <Figure x={-900} y={500} s={0.7} shirt="#e63946" />
        <Label x={-900} y={420} t="INSTRUCTOR" size={14} />
      </g>
      {/* sea */}
      <rect x={-600} y={700} width={4000} height={700} fill="url(#or-sea)" />
      <path d={sea(700)} stroke="#ffffff" strokeWidth={4} fill="none" opacity={0.5} transform="translate(0 0)" />
      {storm && <path d={sea(660)} stroke="#ffffff" strokeWidth={6} fill="none" opacity={0.7} />}
      <path d="M -600 1180 Q 600 1150 1400 1175 T 3200 1165 L 3200 1500 L -600 1500 Z" fill="#9c8565" stroke={C.ink} strokeWidth={5} />
      {/* legs */}
      {[600, 900, 1500, 1800].map((lx) => (
        <g key={lx}>
          <rect x={lx - 22} y={520} width={44} height={660} fill="#ffb703" stroke={C.ink} strokeWidth={5} />
          <line x1={lx - 22} y1={760} x2={lx + 22} y2={760} stroke={C.ink} strokeWidth={4} />
          <line x1={lx - 22} y1={960} x2={lx + 22} y2={960} stroke={C.ink} strokeWidth={4} />
        </g>
      ))}
      {[[600, 900], [1500, 1800], [900, 1500]].map(([a, b]) => (
        <g key={a} stroke={C.ink} strokeWidth={5}>
          <line x1={a} y1={560} x2={b} y2={760} />
          <line x1={b} y1={560} x2={a} y2={760} />
        </g>
      ))}
      {/* main deck slab */}
      <rect x={460} y={520} width={1500} height={24} fill="#6c757d" stroke={C.ink} strokeWidth={5} />
      <rect x={1080} y={300} width={880} height={20} fill="#6c757d" stroke={C.ink} strokeWidth={5} />
      {/* accommodation module */}
      <rect x={510} y={322} width={580} height={206} fill="#f1faee" stroke={C.ink} strokeWidth={6} />
      {ROOMS.map((r) => (
        <g key={r.id}>
          <rect x={r.x} y={r.y} width={RW} height={RH} fill={r.bg} stroke={C.ink} strokeWidth={4} />
          <Room id={r.id} x={r.x} y={r.y} night={night} pump={plane === 'pump'} />
          <Label x={r.x + RW / 2} y={r.y + RH - 3} t={r.label} size={12} color={r.id === 'cinema' ? '#fff' : C.ink} />
        </g>
      ))}
      <Label x={800} y={318} t="ACCOMMODATION" size={14} />
      {/* control room / office */}
      <rect x={880} y={250} width={200} height={72} fill="#efe9dc" stroke={C.ink} strokeWidth={5} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={896 + i * 56} y={262} width={44} height={26} fill="#14213d" stroke={C.ink} strokeWidth={2.5} />
      ))}
      <path d="M 1050 300 q 10 -10 20 0 M 1054 306 q 6 -6 12 0" stroke={C.ink} strokeWidth={2} fill="none" />
      <Label x={980} y={244} t="CONTROL ROOM · WI-FI" size={12} />
      {/* helideck */}
      <rect x={470} y={243} width={380} height={14} fill="#2b9348" stroke={C.ink} strokeWidth={5} />
      <line x1={510} y1={257} x2={560} y2={322} stroke={C.ink} strokeWidth={5} />
      <line x1={810} y1={257} x2={760} y2={322} stroke={C.ink} strokeWidth={5} />
      <text x={600} y={254} fontSize={12} fontFamily="sans-serif" fontWeight={900} fill="#ffd166">H</text>
      <Label x={660} y={236} t="HELIDECK" size={12} />
      {(plane === 'fly' || plane === 'land') && <Helicopter x={660} y={heliY} />}
      {/* water maker */}
      <rect x={1100} y={420} width={160} height={100} fill="#dceaf7" stroke={C.ink} strokeWidth={4} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={1112 + i * 48} y={440} width={36} height={60} rx={14} fill="#90e0ef" stroke={C.ink} strokeWidth={3} />
      ))}
      <path d="M 1140 520 L 1140 700" stroke={C.ink} strokeWidth={5} />
      <Label x={1180} y={414} t="WATER MAKER" size={12} />
      {plane === 'pump' && (
        <g>
          <circle cx={1140} cy={700 - ((frame * 1.2) % 170)} r={6} fill="#48cae4" stroke={C.ink} strokeWidth={2} />
          <text x={1180} y={398} fontSize={10} fontFamily="sans-serif" fill={C.navy} textAnchor="middle">SEAWATER → FRESH WATER</text>
        </g>
      )}
      {/* process area: tanks + pipes */}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={1290 + i * 70} y={380 + (i % 2) * 20} width={56} height={140 - (i % 2) * 20} rx={26} fill="#ced4da" stroke={C.ink} strokeWidth={4} />
      ))}
      <path d="M 1290 360 H 1600 V 420 H 1900" stroke={C.ink} strokeWidth={7} fill="none" />
      {/* derrick + drill floor */}
      <path d="M 1400 300 L 1440 20 L 1480 20 L 1520 300 Z" fill="none" stroke={C.ink} strokeWidth={6} />
      {[80, 140, 200, 260].map((y) => (
        <line key={y} x1={1400 + (300 - y) * 0.14} y1={y} x2={1520 - (300 - y) * 0.14} y2={y} stroke={C.ink} strokeWidth={4} />
      ))}
      <line x1={1460} y1={30} x2={1460} y2={280} stroke="#495057" strokeWidth={4} />
      <rect x={1380} y={280} width={160} height={20} fill="#e63946" stroke={C.ink} strokeWidth={4} />
      <Label x={1460} y={14} t="DERRICK" size={16} />
      {/* open deck */}
      <rect x={1620} y={250} width={60} height={50} fill="#f4a261" stroke={C.ink} strokeWidth={4} />
      <Label x={1780} y={292} t="OPEN DECK" size={12} />
      {/* muster + lifeboats */}
      <rect x={1600} y={430} width={90} height={30} fill="#2b9348" stroke={C.ink} strokeWidth={3} />
      <text x={1645} y={450} fontSize={11} fontFamily="sans-serif" fontWeight={700} fill="#fff" textAnchor="middle">MUSTER</text>
      {[1730, 1850].map((bx) => (
        <g key={bx}>
          <line x1={bx} y1={420} x2={bx} y2={452} stroke={C.ink} strokeWidth={4} />
          <rect x={bx - 50} y={452} width={100} height={46} rx={22} fill="#f77f00" stroke={C.ink} strokeWidth={4} />
          <circle cx={bx - 22} cy={474} r={7} fill="#8ecae6" stroke={C.ink} strokeWidth={2} />
        </g>
      ))}
      <Label x={1790} y={512} t="LIFEBOATS" size={12} />
      {/* flare boom */}
      <line x1={1960} y1={320} x2={2180} y2={140} stroke={C.ink} strokeWidth={9} />
      <path d={`M 2180 140 q -14 -30 0 -${54 + Math.sin(frame / 12) * 4} q 14 30 0 ${54 + Math.sin(frame / 12) * 4} Z`} fill="#f77f00" stroke={C.ink} strokeWidth={3} />
      {fire && (
        <g>
          {[1300, 1420, 1560, 1700, 1840].map((fx, i) => (
            <path key={fx} d={`M ${fx - 50} 300 q 20 -${120 + (i % 2) * 50} 50 -${170 + (i % 3) * 30} q 30 ${70 + (i % 2) * 40} 50 ${170 + (i % 3) * 30} Z`} fill={i % 2 ? '#f77f00' : '#e63946'} opacity={0.85} stroke={C.ink} strokeWidth={3} />
          ))}
          <ellipse cx={1600} cy={60} rx={420} ry={120} fill="#343a40" opacity={0.6} />
        </g>
      )}
      {/* supply boat */}
      <g>
        <path d="M 2060 690 L 2400 690 L 2370 730 L 2080 730 Z" fill="#c1121f" stroke={C.ink} strokeWidth={5} />
        <rect x={2290} y={630} width={90} height={60} fill="#f1faee" stroke={C.ink} strokeWidth={4} />
        <rect x={2300} y={642} width={70} height={18} fill="#457b9d" stroke={C.ink} strokeWidth={2} />
        <Label x={2180} y={760} t="SUPPLY VESSEL" size={14} color="#fff" />
        {plane === 'supply' && <path d="M 2100 690 Q 2000 620 1960 540" stroke={C.ink} strokeWidth={6} fill="none" />}
      </g>
      {storm && (
        <g opacity={0.35}>
          {Array.from({length: 60}).map((_, i) => (
            <line key={i} x1={-500 + ((i * 173) % 3200)} y1={-300 + ((i * 97) % 900)} x2={-520 + ((i * 173) % 3200)} y2={-260 + ((i * 97) % 900)} stroke="#e9ecef" strokeWidth={3} />
          ))}
        </g>
      )}
      {you && YOU[you] && <Figure x={YOU[you][0]} y={YOU[you][1]} s={you === 'pool' ? 0.8 : 0.6} cap shirt="#f77f00" pose={YOU[you][2]} />}
      {dark && <rect x={-1600} y={-700} width={4800} height={2200} fill="#0b1026" opacity={0.12} />}
    </g>
  );
};
