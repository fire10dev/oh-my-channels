import React from 'react';
import {C, Figure, Label} from '../ui';
import type {Tod} from './SouthPole';

/** IX003 world: cruise ship side cutaway. Waterline y=640. Guest decks above (y 170..560), crew decks below (560..820).
 *  `plane` = state string: 'port' (dock + gangway) · 'alarm' (drill: red light + lifejackets) · 'party' (crew bar lights). */
const V: Record<string, [number, number, number]> = {
  wide: [1200, 470, 0.78],
  ship: [1200, 450, 1.05],
  sky: [1200, 180, 1.5],
  sea: [1200, 700, 1.6],
  pool: [1050, 215, 3.6],
  slide: [760, 200, 3.2],
  buffet: [1500, 330, 4.2],
  theater: [1000, 330, 4.2],
  balcony: [1750, 430, 3.6],
  bridge: [2120, 270, 3.6],
  lifeboat: [1280, 500, 4.2],
  stairs: [600, 600, 3.2],
  corridor: [1200, 600, 2.2],
  i95: [1200, 600, 4.4],
  cabin: [455, 690, 5.2],
  bunk: [430, 680, 8.5],
  shower: [622, 690, 6],
  mess: [810, 690, 5],
  galley: [1010, 690, 5],
  laundry: [1210, 690, 5.2],
  bar: [1410, 690, 5.2],
  gym: [1610, 690, 5.2],
  office: [1810, 690, 5.2],
  cabin2: [2010, 690, 5.2],
  engine: [1300, 785, 3.2],
  helipad: [2230, 455, 4],
  port: [-200, 520, 1.6],
};
export const viewOf = (name: string, _tod: Tod): [number, number, number] => V[name] ?? V.wide;

const SKY: Record<Tod, [string, string]> = {
  day: ['#5bc0eb', '#d8f3ff'],
  dusk: ['#5e548e', '#f4a261'],
  night: ['#070b1f', '#1b2a4a'],
  dawn: ['#2b2d42', '#f6bd60'],
};

/** Crew deck rooms (y 645..735), x start, width 200 except cabin+shower. */
const CREW: {id: string; x: number; w: number; bg: string; label: string}[] = [
  {id: 'cabin', x: 355, w: 200, bg: '#e8e1f5', label: 'CREW CABIN'},
  {id: 'shower', x: 555, w: 135, bg: '#d9f0f0', label: 'BATHROOM'},
  {id: 'mess', x: 690, w: 220, bg: '#fbe8c8', label: 'CREW MESS'},
  {id: 'galley', x: 910, w: 200, bg: '#f6e3e3', label: 'GALLEY'},
  {id: 'laundry', x: 1110, w: 200, bg: '#dceaf7', label: 'LAUNDRY'},
  {id: 'bar', x: 1310, w: 200, bg: '#2b2d42', label: 'CREW BAR'},
  {id: 'gym', x: 1510, w: 200, bg: '#e3f6d5', label: 'CREW GYM'},
  {id: 'office', x: 1710, w: 200, bg: '#efe9dc', label: 'CREW OFFICE'},
  {id: 'cabin2', x: 1910, w: 200, bg: '#ece6f7', label: 'CREW CABIN'},
];
const CY = 645;
const CH = 95;

const Bunk: React.FC<{x: number; y: number; frame: number; curtain?: boolean}> = ({x, y, frame, curtain}) => (
  <g>
    <rect x={x} y={y} width={110} height={16} rx={3} fill="#a8dadc" stroke={C.ink} strokeWidth={3} />
    <rect x={x + 4} y={y - 8} width={26} height={10} rx={4} fill="#fff" stroke={C.ink} strokeWidth={2} />
    <rect x={x} y={y + 16} width={110} height={10} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
    <rect x={x + 20} y={y + 18} width={24} height={6} fill="#c9a26b" stroke={C.ink} strokeWidth={1.5} />
    <rect x={x + 60} y={y + 18} width={24} height={6} fill="#c9a26b" stroke={C.ink} strokeWidth={1.5} />
    {curtain && <path d={`M ${x + 70} ${y - 30} q 10 15 0 30 q 12 -14 0 -30 Z`} fill="#e63946" opacity={0.85} stroke={C.ink} strokeWidth={2} />}
  </g>
);

const Room: React.FC<{id: string; x: number; frame: number; state?: string}> = ({id, x, frame, state}) => {
  const y = CY;
  switch (id) {
    case 'cabin':
    case 'cabin2':
      return (
        <g>
          <Bunk x={x + 12} y={y + 40} frame={frame} curtain />
          <Bunk x={x + 12} y={y + 72} frame={frame} />
          <line x1={x + 12} y1={y + 36} x2={x + 12} y2={y + 95} stroke={C.ink} strokeWidth={3} />
          <rect x={x + 135} y={y + 14} width={50} height={78} fill="#ced4da" stroke={C.ink} strokeWidth={3} />
          <line x1={x + 160} y1={y + 14} x2={x + 160} y2={y + 92} stroke={C.ink} strokeWidth={2} />
          <rect x={x + 136} y={y + 6} width={28} height={18} fill="#14213d" stroke={C.ink} strokeWidth={2} />
          <rect x={x + 139} y={y + 9} width={22} height={12} fill="#90e0ef" opacity={0.5 + 0.4 * Math.sin(frame / 9)} />
          <text x={x + 60} y={y + 18} fontSize={9} fontFamily="sans-serif" fill={C.navy} textAnchor="middle">NO WINDOW</text>
        </g>
      );
    case 'shower':
      return (
        <g>
          <rect x={x + 10} y={y + 14} width={40} height={78} fill="#bde0fe" stroke={C.ink} strokeWidth={3} />
          <path d={`M ${x + 48} ${y + 14} q -6 40 0 78`} stroke={C.ink} strokeWidth={2} fill="#ffafcc" opacity={0.7} />
          <line x1={x + 18} y1={y + 18} x2={x + 30} y2={y + 26} stroke={C.ink} strokeWidth={3} />
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1={x + 24 + i * 4} y1={y + 30 + ((frame + i * 9) % 40)} x2={x + 24 + i * 4} y2={y + 33 + ((frame + i * 9) % 40)} stroke="#219ebc" strokeWidth={2} />
          ))}
          <rect x={x + 62} y={y + 62} width={26} height={30} rx={8} fill="#fff" stroke={C.ink} strokeWidth={3} />
          <rect x={x + 96} y={y + 50} width={30} height={14} fill="#fff" stroke={C.ink} strokeWidth={3} />
          <rect x={x + 100} y={y + 20} width={22} height={24} fill="#dee2e6" stroke={C.ink} strokeWidth={2} />
        </g>
      );
    case 'mess':
      return (
        <g>
          <rect x={x + 10} y={y + 26} width={90} height={20} fill="#adb5bd" stroke={C.ink} strokeWidth={3} />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={x + 14 + i * 22} y={y + 30} width={18} height={10} rx={3} fill={['#e76f51', '#f4a261', '#2a9d8f', '#ffd166'][i]} stroke={C.ink} strokeWidth={1.5} />
          ))}
          {[0, 1].map((i) => (
            <path key={i} d={`M ${x + 30 + i * 40} ${y + 24} q 4 -8 0 -16`} stroke="#fff" strokeWidth={2} fill="none" opacity={0.4 + 0.5 * Math.sin((frame + i * 9) / 6)} />
          ))}
          <rect x={x + 112} y={y + 66} width={100} height={8} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
          <rect x={x + 12} y={y + 66} width={90} height={8} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
          <rect x={x + 120} y={y + 10} width={80} height={30} fill="#fff" stroke={C.ink} strokeWidth={2} />
          <text x={x + 160} y={y + 22} fontSize={8} textAnchor="middle" fontFamily="sans-serif" fill={C.ink}>BREAKFAST 05:30</text>
          <text x={x + 160} y={y + 34} fontSize={8} textAnchor="middle" fontFamily="sans-serif" fill={C.red}>DINNER 16:30</text>
        </g>
      );
    case 'galley':
      return (
        <g>
          <rect x={x + 10} y={y + 56} width={180} height={36} fill="#adb5bd" stroke={C.ink} strokeWidth={3} />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x={x + 22 + i * 42} y={y + 36} width={30} height={20} rx={4} fill="#6c757d" stroke={C.ink} strokeWidth={2} />
              <path d={`M ${x + 37 + i * 42} ${y + 32} q 4 -8 0 -16`} stroke="#fff" strokeWidth={2} fill="none" opacity={0.5 + 0.4 * Math.sin((frame + i * 7) / 5)} />
            </g>
          ))}
        </g>
      );
    case 'laundry':
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={x + 14 + i * 60} y={y + 36} width={50} height={56} rx={5} fill="#f8f9fa" stroke={C.ink} strokeWidth={3} />
              <circle cx={x + 39 + i * 60} cy={y + 66} r={16} fill="#90e0ef" stroke={C.ink} strokeWidth={3} />
              <circle cx={x + 39 + i * 60 + Math.cos(frame / 3 + i) * 7} cy={y + 66 + Math.sin(frame / 3 + i) * 7} r={4} fill={['#e63946', '#ffd166', '#fff'][i]} />
            </g>
          ))}
          <line x1={x + 10} y1={y + 18} x2={x + 190} y2={y + 18} stroke={C.ink} strokeWidth={2} />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={x + 24 + i * 40} y={y + 18} width={20} height={14} fill={['#fff', '#14213d', '#fff', '#14213d'][i]} stroke={C.ink} strokeWidth={1.5} />
          ))}
        </g>
      );
    case 'bar':
      return (
        <g>
          {[0, 1, 2, 3, 4].map((i) => (
            <circle key={i} cx={x + 20 + i * 40} cy={y + 14} r={5} fill={['#f72585', '#ffd23f', '#4cc9f0', '#52ffb8', '#ff6b6b'][i]} opacity={state === 'party' ? 0.6 + 0.3 * Math.sin(frame / 8 + i) : 0.6} />
          ))}
          <rect x={x + 10} y={y + 60} width={110} height={32} fill="#8d6e4c" stroke={C.ink} strokeWidth={3} />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={x + 22 + i * 30} y={y + 46} width={10} height={14} rx={2} fill="#ffd166" stroke={C.ink} strokeWidth={1.5} />
          ))}
          <rect x={x + 140} y={y + 30} width={50} height={30} fill="#fff" stroke={C.ink} strokeWidth={2} />
          <text x={x + 165} y={y + 44} fontSize={8} textAnchor="middle" fontFamily="sans-serif" fill={C.ink}>CREW SHOP</text>
          <text x={x + 165} y={y + 54} fontSize={7} textAnchor="middle" fontFamily="sans-serif" fill={C.red}>CREW CARD ONLY</text>
        </g>
      );
    case 'gym':
      return (
        <g>
          <rect x={x + 16} y={y + 70} width={80} height={14} rx={6} fill="#495057" stroke={C.ink} strokeWidth={3} />
          <line x1={x + 90} y1={y + 70} x2={x + 96} y2={y + 34} stroke={C.ink} strokeWidth={4} />
          <line x1={x + 120} y1={y + 60} x2={x + 180} y2={y + 60} stroke={C.ink} strokeWidth={5} />
          <circle cx={x + 120} cy={y + 60} r={12} fill="#343a40" />
          <circle cx={x + 180} cy={y + 60} r={12} fill="#343a40" />
        </g>
      );
    case 'office':
      return (
        <g>
          <rect x={x + 14} y={y + 16} width={120} height={56} fill="#fff" stroke={C.ink} strokeWidth={3} />
          <text x={x + 74} y={y + 30} fontSize={9} textAnchor="middle" fontFamily="sans-serif" fill={C.ink}>CREW NOTICES</text>
          <text x={x + 74} y={y + 44} fontSize={8} textAnchor="middle" fontFamily="sans-serif" fill={C.red}>DRILL · 14:00</text>
          <text x={x + 74} y={y + 56} fontSize={8} textAnchor="middle" fontFamily="sans-serif" fill={C.navy}>REST HOURS LOG</text>
          <rect x={x + 150} y={y + 30} width={36} height={60} fill="#ffb703" stroke={C.ink} strokeWidth={3} />
          <text x={x + 168} y={y + 64} fontSize={8} textAnchor="middle" fontFamily="sans-serif" fill={C.ink}>LIFE</text>
          <text x={x + 168} y={y + 74} fontSize={8} textAnchor="middle" fontFamily="sans-serif" fill={C.ink}>JACKETS</text>
        </g>
      );
    default:
      return null;
  }
};

const youSpot: Record<string, [number, number, 'stand' | 'sit' | 'lie']> = {
  cabin: [445, 708, 'lie'],
  bunk: [445, 708, 'lie'],
  cabin2: [2000, 708, 'lie'],
  shower: [612, 737, 'stand'],
  mess: [790, 737, 'sit'],
  galley: [1000, 737, 'stand'],
  laundry: [1260, 737, 'stand'],
  bar: [1460, 737, 'stand'],
  gym: [1580, 737, 'stand'],
  office: [1880, 737, 'stand'],
  corridor: [1150, 610, 'stand'],
  i95: [1180, 610, 'stand'],
  stairs: [600, 610, 'stand'],
  pool: [1100, 250, 'stand'],
  buffet: [1530, 375, 'stand'],
  theater: [960, 375, 'stand'],
  lifeboat: [1240, 520, 'stand'],
  engine: [1260, 815, 'stand'],
  helipad: [2210, 470, 'stand'],
  bridge: [2120, 300, 'stand'],
  port: [-180, 560, 'stand'],
};

const Guest: React.FC<{x: number; y: number; c: string; frame: number; flip?: boolean}> = ({x, y, c, frame, flip}) => (
  <g transform={`translate(0 ${Math.sin((frame + x) / 9) * -0.8})`}>
    <Figure x={x} y={y} s={0.7} shirt={c} flip={flip} />
  </g>
);

export const CruiseShip: React.FC<{frame: number; tod: Tod; you?: string; plane?: string; dur: number}> = ({frame, tod, you, plane, dur}) => {
  const [s0, s1] = SKY[tod];
  const dark = tod === 'night';
  const alarm = plane === 'alarm';
  const port = plane === 'port';
  // keep motion tiny: the teardown gate reads whole-frame bob/flash as pan or cuts
  const bob = port ? 0 : Math.sin(frame / 20) * 0.6;
  return (
    <g>
      <defs>
        <linearGradient id="cs-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={s0} />
          <stop offset="1" stopColor={s1} />
        </linearGradient>
        <linearGradient id="cs-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={dark ? '#1d3557' : '#219ebc'} />
          <stop offset="1" stopColor={dark ? '#0b1026' : '#023047'} />
        </linearGradient>
      </defs>
      <rect x={-1200} y={-700} width={4800} height={1400} fill="url(#cs-sky)" />
      {dark &&
        Array.from({length: 80}).map((_, i) => (
          <circle key={i} cx={-1100 + ((i * 397) % 4600)} cy={-600 + ((i * 211) % 1000)} r={1.5 + (i % 3)} fill="#fff" opacity={0.4 + 0.4 * Math.sin((frame + i * 13) / 14)} />
        ))}
      {!dark && <circle cx={tod === 'day' ? 300 : 2600} cy={tod === 'day' ? 40 : 560} r={60} fill="#ffd23f" stroke={C.ink} strokeWidth={5} />}
      <rect x={-1200} y={640} width={4800} height={700} fill="url(#cs-sea)" />
      {/* port: quay + palm + gangway */}
      {port && (
        <g>
          <rect x={-1200} y={560} width={1200} height={80} fill="#adb5bd" stroke={C.ink} strokeWidth={5} />
          {[-1000, -700, -420].map((bx, i) => (
            <rect key={bx} x={bx} y={440 - i * 30} width={120} height={120 + i * 30} fill={['#ffafcc', '#ffd166', '#a8dadc'][i]} stroke={C.ink} strokeWidth={4} />
          ))}
          <g transform="translate(-150 560)">
            <rect x={-5} y={-110} width={10} height={110} fill="#8d6e4c" stroke={C.ink} strokeWidth={3} />
            <path d="M 0 -110 q -40 -10 -60 10 M 0 -110 q 40 -10 60 10 M 0 -110 q -20 -30 -50 -30 M 0 -110 q 20 -30 50 -30" stroke="#2a9d8f" strokeWidth={10} fill="none" strokeLinecap="round" />
          </g>
          <path d="M -40 560 L 340 600" stroke={C.ink} strokeWidth={8} />
        </g>
      )}
      <g transform={`translate(0 ${bob})`}>
        {/* hull */}
        <path d="M 260 560 L 2300 560 L 2420 470 L 2420 560 Q 2380 760 2200 830 L 380 830 Q 300 760 260 560 Z" fill="#f8f9fa" stroke={C.ink} strokeWidth={6} />
        <path d="M 290 640 L 2370 640 Q 2340 770 2200 830 L 380 830 Q 320 760 290 640 Z" fill="#1d3557" stroke={C.ink} strokeWidth={5} />
        {/* superstructure: guest decks */}
        <rect x={420} y={250} width={1800} height={310} fill="#ffffff" stroke={C.ink} strokeWidth={6} />
        {Array.from({length: 4}).map((_, r) => (
          <g key={r}>
            {Array.from({length: 30}).map((__, i) => (
              <rect key={i} x={440 + i * 59} y={400 + r * 38} width={40} height={22} rx={4} fill={dark ? (i * 7 + r) % 3 ? '#ffd166' : '#495057' : '#90e0ef'} stroke={C.ink} strokeWidth={2} />
            ))}
          </g>
        ))}
        {/* theater + buffet windows */}
        <rect x={860} y={300} width={300} height={90} fill="#5a189a" stroke={C.ink} strokeWidth={4} />
        <path d="M 880 390 Q 1010 330 1140 390" fill="#e63946" stroke={C.ink} strokeWidth={3} />
        <Label x={1010} y={320} t="THEATER" size={16} color="#ffd23f" />
        <rect x={1360} y={300} width={300} height={90} fill="#fbe8c8" stroke={C.ink} strokeWidth={4} />
        {[0, 1, 2, 3, 4].map((i) => (
          <ellipse key={i} cx={1390 + i * 60} cy={360} rx={22} ry={8} fill={['#e76f51', '#ffd166', '#2a9d8f', '#f4a261', '#ff6b6b'][i]} stroke={C.ink} strokeWidth={2} />
        ))}
        <Label x={1510} y={320} t="BUFFET" size={16} />
        <Guest x={1450} y={390} c="#ffafcc" frame={frame} />
        <Guest x={1580} y={390} c="#90e0ef" frame={frame} flip />
        <Guest x={950} y={390} c="#ffd166" frame={frame} />
        <Guest x={1070} y={390} c="#b5e48c" frame={frame} flip />
        {/* balconies */}
        {Array.from({length: 8}).map((_, i) => (
          <rect key={i} x={1680 + i * 64} y={300} width={56} height={90} fill="#caf0f8" stroke={C.ink} strokeWidth={3} />
        ))}
        <Label x={1930} y={292} t="BALCONY CABINS" size={14} />
        {/* lifeboats */}
        {[700, 1000, 1300, 1600, 1900].map((lx) => (
          <g key={lx}>
            <rect x={lx - 60} y={500} width={140} height={44} rx={22} fill="#ff8800" stroke={C.ink} strokeWidth={4} />
            <rect x={lx - 40} y={490} width={100} height={14} rx={6} fill="#fff" stroke={C.ink} strokeWidth={3} />
          </g>
        ))}
        {/* top deck: pool + slide + funnel */}
        <rect x={420} y={230} width={1800} height={22} fill="#e9c46a" stroke={C.ink} strokeWidth={4} />
        <rect x={980} y={200} width={180} height={36} rx={6} fill="#4cc9f0" stroke={C.ink} strokeWidth={4} />
        <path d={`M 990 210 q 22 ${-6 + Math.sin(frame / 6) * 3} 44 0 t 44 0 t 44 0 t 44 0`} stroke="#fff" strokeWidth={3} fill="none" />
        <Guest x={1020} y={232} c="#ffafcc" frame={frame} />
        <Guest x={1130} y={232} c="#ffd166" frame={frame + 20} flip />
        <path d="M 640 230 L 640 110 L 700 110 Q 860 120 800 170 Q 700 220 900 230" stroke="#f72585" strokeWidth={22} fill="none" strokeLinecap="round" />
        <path d="M 640 230 L 640 110 L 700 110 Q 860 120 800 170 Q 700 220 900 230" stroke="#ffd23f" strokeWidth={8} fill="none" strokeDasharray="10 14" />
        <circle cx={800 + Math.cos(frame / 12) * 14} cy={150 + Math.sin(frame / 12) * 7} r={10} fill="#ffafcc" stroke={C.ink} strokeWidth={3} />
        <path d="M 1500 230 L 1520 110 L 1640 110 L 1660 230 Z" fill="#e63946" stroke={C.ink} strokeWidth={5} />
        <rect x={1520} y={110} width={120} height={22} fill="#14213d" />
        {/* bridge */}
        <rect x={2060} y={250} width={160} height={50} fill="#dee2e6" stroke={C.ink} strokeWidth={4} />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={2072 + i * 36} y={262} width={28} height={18} fill="#14213d" stroke={C.ink} strokeWidth={2} />
        ))}
        <Label x={2140} y={244} t="BRIDGE" size={14} />
        {/* helipad / crew deck at the bow */}
        <rect x={2160} y={460} width={140} height={14} fill="#ffd23f" stroke={C.ink} strokeWidth={3} />
        <Label x={2230} y={455} t="CREW DECK" size={12} />
        {/* the line: guests above, crew below */}
        <rect x={290} y={560} width={2080} height={10} fill="#e63946" stroke={C.ink} strokeWidth={3} />
        <Label x={360} y={590} t="CREW ONLY ↓" size={16} color="#e63946" anchor="start" />
        {/* stairs */}
        <path d="M 560 570 l 20 0 l 0 20 l 20 0 l 0 20 l 20 0 l 0 20 l 20 0" stroke={C.ink} strokeWidth={4} fill="none" />
        {/* I-95 corridor */}
        <rect x={355} y={600} width={1755} height={40} fill="#e9ecef" stroke={C.ink} strokeWidth={4} />
        {Array.from({length: 18}).map((_, i) => (
          <rect key={i} x={380 + i * 96} y={604} width={40} height={6} fill="#ffd166" opacity={0.8} />
        ))}
        <Label x={1600} y={630} t="I-95 · CREW CORRIDOR" size={16} />
        <Figure x={1050} y={638} s={0.7} shirt="#14213d" />
        <Figure x={1380} y={638} s={0.7} shirt="#ffffff" flip />
        {/* crew rooms */}
        {CREW.map((r) => (
          <rect key={r.id} x={r.x} y={CY} width={r.w} height={CH} fill={r.bg} stroke={C.ink} strokeWidth={4} />
        ))}
        {CREW.map((r) => (
          <Room key={r.id} id={r.id} x={r.x} frame={frame} state={plane} />
        ))}
        {CREW.map((r) => (
          <Label key={`l${r.id}`} x={r.x + r.w / 2} y={CY + CH - 4} t={r.label} size={11} color={r.id === 'bar' ? '#ffd23f' : C.navy} />
        ))}
        {/* engine room */}
        <rect x={420} y={745} width={1700} height={70} fill="#6c757d" stroke={C.ink} strokeWidth={4} />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={600 + i * 340} y={755} width={200} height={50} rx={8} fill="#adb5bd" stroke={C.ink} strokeWidth={3} />
            {[0, 1, 2, 3].map((p) => (
              <rect key={p} x={620 + i * 340 + p * 44} y={748 - Math.abs(Math.sin((frame + p * 5) / 3)) * 6} width={20} height={14} fill="#495057" stroke={C.ink} strokeWidth={2} />
            ))}
          </g>
        ))}
        <Label x={1270} y={808} t="ENGINE ROOM" size={14} color="#f8f9fa" />
        {/* crew in rooms */}
        <Figure x={850} y={737} s={0.75} shirt="#ffffff" flip />
        <Figure x={1040} y={737} s={0.75} hat="chef" shirt="#ffffff" />
        <Figure x={1360} y={737} s={0.75} shirt="#2a9d8f" />
        <Figure x={1650} y={737} s={0.75} shirt="#ffb703" flip />
        {alarm && (
          <g>
            {[800, 1100, 1450, 1800].map((ax) => (
              <circle key={ax} cx={ax} cy={590} r={8} fill="#e63946" stroke={C.ink} strokeWidth={2} opacity={0.65 + 0.35 * Math.sin(frame / 6)} />
            ))}
          </g>
        )}
        {/* YOU */}
        {you && youSpot[you] && <Figure x={youSpot[you][0]} y={youSpot[you][1]} s={0.95} cap shirt={alarm ? '#ff8800' : C.red} pose={youSpot[you][2]} />}
      </g>
      {/* waterline in front */}
      <path d={`M -1200 ${642 + bob} ${Array.from({length: 48}).map((_, i) => `q 50 ${i % 2 ? 8 : -8} 100 0`).join(' ')}`} transform={`translate(${-(frame * 0.4) % 200} 0)`} stroke="#ffffff" strokeWidth={4} fill="none" opacity={0.45} />
      {!port && <path d={`M 2420 ${600 + bob} q 120 20 260 -10`} stroke="#fff" strokeWidth={6} fill="none" opacity={0.6 + 0.3 * Math.sin(frame / 5)} />}
      {dark && <rect x={-1200} y={-700} width={4800} height={2100} fill="#0b1026" opacity={0.12} />}
    </g>
  );
};
