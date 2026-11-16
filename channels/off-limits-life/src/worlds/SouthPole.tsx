import React from 'react';
import {C, Figure, Label} from '../ui';

export type Tod = 'day' | 'dusk' | 'night' | 'dawn';
export type PlaneState = 'leave' | 'arrive' | 'parked' | undefined;

/** Camera targets [cx, cy, zoom] in world coordinates (station cutaway spans x 380..1500). */
const V: Record<string, [number, number, number]> = {
  wide: [960, 560, 1],
  station: [940, 470, 1.55],
  galley: [490, 392, 5.2],
  greenhouse: [710, 392, 5.2],
  berth: [930, 392, 5.2],
  comms: [1150, 392, 5.2],
  sauna: [1380, 392, 5.2],
  freezer: [490, 502, 5.2],
  bath: [710, 502, 5.2],
  berth2: [930, 502, 5.2],
  medical: [1150, 502, 5.2],
  hall: [1380, 502, 5.2],
  egg: [462, 418, 10],
  flag: [520, 250, 3.6],
  power: [1700, 575, 3],
  tanks: [1960, 600, 3.2],
  rodwell: [1700, 790, 2.1],
  bulb: [1700, 930, 3.4],
  sewer: [1430, 990, 3.6],
  underground: [1560, 880, 1.7],
  ice: [960, 820, 1.35],
  pole: [250, 585, 3.4],
  thermo: [318, 545, 6],
  skiway: [-420, 590, 2.6],
  traverse: [-1000, 600, 2.6],
  telescope: [2420, 560, 2.8],
  cache: [2780, 610, 3.6],
  sky: [960, 260, 1.6],
};
const SUN: Record<Tod, [number, number]> = {day: [1500, 180], dusk: [1500, 625], night: [1500, 900], dawn: [420, 632]};
export const viewOf = (name: string, tod: Tod): [number, number, number] => {
  if (name === 'sun') {
    const [x, y] = SUN[tod];
    return [x, Math.min(y + 40, 600), 2.4];
  }
  return V[name] ?? V.wide;
};

const SKY: Record<Tod, [string, string]> = {
  day: ['#7ec4e8', '#d7eef7'],
  dusk: ['#5e548e', '#f4a261'],
  night: ['#070b1f', '#1b2a4a'],
  dawn: ['#2b2d42', '#f6bd60'],
};

const ROOM_Y = {up: [335, 445], low: [445, 555]} as const;
const ROOMS: {id: string; x: number; f: 'up' | 'low'; bg: string}[] = [
  {id: 'galley', x: 380, f: 'up', bg: '#fbe8c8'},
  {id: 'greenhouse', x: 600, f: 'up', bg: '#e3f6d5'},
  {id: 'berth', x: 820, f: 'up', bg: '#e8e1f5'},
  {id: 'comms', x: 1040, f: 'up', bg: '#dceaf7'},
  {id: 'sauna', x: 1260, f: 'up', bg: '#f2c89b'},
  {id: 'freezer', x: 380, f: 'low', bg: '#d6ecf5'},
  {id: 'bath', x: 600, f: 'low', bg: '#d9f0f0'},
  {id: 'berth2', x: 820, f: 'low', bg: '#ece6f7'},
  {id: 'medical', x: 1040, f: 'low', bg: '#f6e3e3'},
  {id: 'hall', x: 1260, f: 'low', bg: '#efe9dc'},
];
const ROOM_W = 220;
const roomOf = (id: string) => ROOMS.find((r) => r.id === id);

const Plane: React.FC<{x: number; y: number; s?: number; flip?: boolean; frame: number}> = ({x, y, s = 1, flip, frame}) => {
  const spin = (frame * 2) % 2 === 0 ? 1 : 0.4;
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <path d="M -110 0 Q -100 -26 -40 -28 L 90 -26 Q 120 -24 130 -8 Q 120 6 90 6 L -100 6 Z" fill="#dfe6ea" stroke={C.ink} strokeWidth={4} />
      <path d="M 80 -26 L 118 -64 L 132 -64 L 118 -22 Z" fill={C.red} stroke={C.ink} strokeWidth={4} />
      <rect x={-30} y={-36} width={120} height={10} rx={4} fill="#b8c4cc" stroke={C.ink} strokeWidth={3} />
      {[-20, 10, 40, 70].map((px) => (
        <ellipse key={px} cx={px} cy={-31} rx={3} ry={16 * spin} fill={C.ink} opacity={0.6} />
      ))}
      <circle cx={-80} cy={-10} r={6} fill="#9ad1f5" stroke={C.ink} strokeWidth={2.5} />
      {[-60, -30, 0, 30, 60].map((wx) => (
        <circle key={wx} cx={wx} cy={-12} r={3.5} fill="#9ad1f5" stroke={C.ink} strokeWidth={2} />
      ))}
      <path d="M -70 12 L 70 12" stroke={C.ink} strokeWidth={5} strokeLinecap="round" />
      <line x1={-40} y1={6} x2={-40} y2={12} stroke={C.ink} strokeWidth={3} />
      <line x1={40} y1={6} x2={40} y2={12} stroke={C.ink} strokeWidth={3} />
    </g>
  );
};

const Steam: React.FC<{x: number; y: number; frame: number; n?: number; color?: string}> = ({x, y, frame, n = 3, color = '#ffffff'}) => (
  <g>
    {Array.from({length: n}).map((_, i) => {
      const t = ((frame + i * 17) % 50) / 50;
      return <circle key={i} cx={x + Math.sin((frame + i * 30) / 9) * 5 + i * 6} cy={y - t * 34} r={4 + t * 6} fill={color} opacity={0.8 * (1 - t)} />;
    })}
  </g>
);

const Interior: React.FC<{id: string; x: number; y0: number; frame: number; tod: Tod}> = ({id, x, y0, frame}) => {
  const fl = y0 + 110; // floor line
  switch (id) {
    case 'galley':
      return (
        <g>
          <rect x={x + 14} y={fl - 42} width={90} height={42} fill="#c9ccd1" stroke={C.ink} strokeWidth={3} />
          <rect x={x + 22} y={fl - 52} width={34} height={10} rx={3} fill="#3a3a44" />
          <ellipse cx={x + 82} cy={fl - 46} rx={20} ry={6} fill="#2b2b33" stroke={C.ink} strokeWidth={2.5} />
          <ellipse cx={x + 82} cy={fl - 48} rx={7} ry={4} fill="#fff" stroke={C.ink} strokeWidth={1.5} />
          <circle cx={x + 82} cy={fl - 48} r={2.6} fill="#ffb703" />
          <Steam x={x + 36} y={fl - 56} frame={frame} />
          <rect x={x + 130} y={fl - 30} width={76} height={8} fill="#a26b3c" stroke={C.ink} strokeWidth={3} />
          <line x1={x + 138} y1={fl - 22} x2={x + 138} y2={fl} stroke={C.ink} strokeWidth={3} />
          <line x1={x + 198} y1={fl - 22} x2={x + 198} y2={fl} stroke={C.ink} strokeWidth={3} />
          <Label x={x + 110} y={y0 + 24} t="GALLEY" size={15} />
        </g>
      );
    case 'greenhouse': {
      const glow = 0.55 + 0.1 * Math.sin(frame / 10);
      return (
        <g>
          <rect x={x + 4} y={y0 + 4} width={ROOM_W - 8} height={20} fill="#ff4fd8" opacity={0.25 * glow} />
          {[x + 30, x + 90, x + 150].map((lx) => (
            <rect key={lx} x={lx} y={y0 + 8} width={44} height={8} rx={3} fill="#ff7ae5" stroke={C.ink} strokeWidth={2.5} opacity={glow + 0.3} />
          ))}
          {[fl - 50, fl - 8].map((sy) => (
            <g key={sy}>
              <rect x={x + 16} y={sy} width={188} height={6} fill="#8d6e4c" stroke={C.ink} strokeWidth={2.5} />
              {Array.from({length: 8}).map((_, i) => (
                <path key={i} d={`M ${x + 26 + i * 23} ${sy} q -8 -16 0 -22 q 8 6 0 22`} fill="#52b788" stroke={C.ink} strokeWidth={2} />
              ))}
            </g>
          ))}
          {Array.from({length: 5}).map((_, i) => {
            const t = ((frame + i * 23) % 70) / 70;
            return <circle key={i} cx={x + 30 + i * 40} cy={fl - 60 - t * 30} r={2.2} fill="#4cc9f0" opacity={0.6 * (1 - t)} />;
          })}
          <Label x={x + 110} y={y0 + 36} t="GREENHOUSE" size={15} color="#2d6a4f" />
        </g>
      );
    }
    case 'berth':
    case 'berth2':
      return (
        <g>
          <rect x={x + 20} y={fl - 30} width={130} height={22} rx={5} fill="#7b6fd0" stroke={C.ink} strokeWidth={3} />
          <rect x={x + 22} y={fl - 40} width={34} height={14} rx={6} fill="#fff" stroke={C.ink} strokeWidth={2.5} />
          <line x1={x + 26} y1={fl - 8} x2={x + 26} y2={fl} stroke={C.ink} strokeWidth={3} />
          <line x1={x + 144} y1={fl - 8} x2={x + 144} y2={fl} stroke={C.ink} strokeWidth={3} />
          <rect x={x + 170} y={fl - 38} width={28} height={38} fill="#a26b3c" stroke={C.ink} strokeWidth={3} />
          <circle cx={x + 184} cy={fl - 52} r={9} fill="#ffe8a3" stroke={C.ink} strokeWidth={2.5} />
          <rect x={x + 150} y={y0 + 18} width={44} height={22} rx={4} fill="#22223b" stroke={C.ink} strokeWidth={2.5} />
          <text x={x + 172} y={y0 + 35} fontSize={14} fill="#90ee90" textAnchor="middle" fontFamily="monospace">
            {`${String(3 + (Math.floor(frame / 60) % 3)).padStart(2, '0')}:17`}
          </text>
        </g>
      );
    case 'comms': {
      const bars = Math.floor(frame / 12) % 4;
      return (
        <g>
          <rect x={x + 40} y={fl - 34} width={140} height={10} fill="#a26b3c" stroke={C.ink} strokeWidth={3} />
          <rect x={x + 70} y={fl - 82} width={80} height={48} rx={5} fill="#22223b" stroke={C.ink} strokeWidth={3} />
          <rect x={x + 80} y={fl - 50} width={60} height={7} fill="#444" />
          <rect x={x + 80} y={fl - 50} width={(frame % 240) / 4} height={7} fill="#4cc9f0" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={x + 186 + i * 8} y={y0 + 34 - i * 7} width={5} height={8 + i * 7} fill={i < bars ? C.ink : '#bbb'} />
          ))}
          <Label x={x + 110} y={y0 + 24} t="SCIENCE / COMMS" size={13} />
        </g>
      );
    }
    case 'sauna':
      return (
        <g>
          {Array.from({length: 9}).map((_, i) => (
            <line key={i} x1={x + i * 25} y1={y0} x2={x + i * 25} y2={fl} stroke="#b07a48" strokeWidth={2} />
          ))}
          <rect x={x + 30} y={fl - 30} width={160} height={10} fill="#8d5a2b" stroke={C.ink} strokeWidth={3} />
          {[0, 1, 2, 3].map((i) => (
            <path key={i} d={`M ${x + 40 + i * 45} ${fl - 40} q 6 -10 0 -20 q -6 -10 0 -20`} stroke="#ffffff" strokeWidth={3} fill="none" opacity={0.5 + 0.4 * Math.sin((frame + i * 9) / 7)} />
          ))}
          <rect x={x + 186} y={y0 + 14} width={16} height={44} rx={8} fill="#fff" stroke={C.ink} strokeWidth={2.5} />
          <rect x={x + 191} y={y0 + 22} width={6} height={30} fill={C.red} />
          <Label x={x + 92} y={y0 + 24} t="SAUNA 200°F" size={15} color="#7f4f24" />
        </g>
      );
    case 'freezer':
      return (
        <g>
          {[0, 1].map((r) =>
            [0, 1, 2, 3].map((c) => (
              <rect key={`${r}${c}`} x={x + 16 + c * 48} y={fl - 44 - r * 40} width={42} height={34} fill={r ? '#cfe8ef' : '#e8d5b7'} stroke={C.ink} strokeWidth={2.5} />
            )),
          )}
          <Label x={x + 110} y={y0 + 22} t="FROZEN · BULK" size={14} color="#1d3557" />
          {Array.from({length: 6}).map((_, i) => (
            <text key={i} x={x + 20 + i * 36} y={y0 + 46 + ((frame + i * 13) % 30)} fontSize={12} fill="#ffffff" opacity={0.8}>
              *
            </text>
          ))}
        </g>
      );
    case 'bath': {
      const on = Math.floor(frame / 45) % 2 === 0;
      const left = Math.max(0, 120 - Math.floor(frame / 30));
      return (
        <g>
          <rect x={x + 30} y={y0 + 10} width={90} height={100} fill="#bfe3ea" stroke={C.ink} strokeWidth={3} />
          <path d={`M ${x + 75} ${y0 + 14} l 0 12 l 16 0`} stroke={C.ink} strokeWidth={4} fill="none" />
          <ellipse cx={x + 95} cy={y0 + 30} rx={12} ry={5} fill="#9aa5ad" stroke={C.ink} strokeWidth={2.5} />
          {on &&
            Array.from({length: 6}).map((_, i) => {
              const yy = y0 + 38 + ((frame * 4 + i * 13) % 60);
              return <line key={i} x1={x + 86 + i * 4} y1={yy} x2={x + 86 + i * 4} y2={yy + 7} stroke="#219ebc" strokeWidth={2.5} strokeLinecap="round" />;
            })}
          <rect x={x + 140} y={y0 + 16} width={64} height={30} rx={6} fill="#22223b" stroke={C.ink} strokeWidth={3} />
          <text x={x + 172} y={y0 + 38} fontSize={18} fill={left < 30 ? '#ff6b6b' : '#90ee90'} textAnchor="middle" fontFamily="monospace">
            {`${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`}
          </text>
          <rect x={x + 150} y={fl - 40} width={40} height={40} rx={6} fill="#fff" stroke={C.ink} strokeWidth={3} />
        </g>
      );
    }
    case 'medical':
      return (
        <g>
          <rect x={x + 30} y={fl - 30} width={120} height={14} rx={4} fill="#fff" stroke={C.ink} strokeWidth={3} />
          <line x1={x + 40} y1={fl - 16} x2={x + 40} y2={fl} stroke={C.ink} strokeWidth={3} />
          <line x1={x + 140} y1={fl - 16} x2={x + 140} y2={fl} stroke={C.ink} strokeWidth={3} />
          <rect x={x + 166} y={y0 + 20} width={40} height={40} rx={6} fill="#fff" stroke={C.ink} strokeWidth={3} />
          <path d={`M ${x + 186} ${y0 + 28} v 24 M ${x + 174} ${y0 + 40} h 24`} stroke={C.red} strokeWidth={7} />
          <polyline
            points={Array.from({length: 12})
              .map((_, i) => `${x + 40 + i * 9},${y0 + 40 + ((i + Math.floor(frame / 3)) % 6 === 0 ? -12 : 0)}`)
              .join(' ')}
            fill="none"
            stroke="#2a9d8f"
            strokeWidth={3}
          />
          <Label x={x + 70} y={y0 + 22} t="MEDICAL" size={15} color={C.red} />
        </g>
      );
    case 'hall':
      return (
        <g>
          <rect x={x + 150} y={y0 + 20} width={56} height={90} rx={4} fill="#9aa5ad" stroke={C.ink} strokeWidth={4} />
          <circle cx={x + 196} cy={y0 + 68} r={4} fill={C.ink} />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <path d={`M ${x + 30 + i * 36} ${y0 + 26} l -10 40 l 22 0 Z`} fill={C.red} stroke={C.ink} strokeWidth={2.5} />
              <rect x={x + 18 + i * 36} y={fl - 12} width={22} height={12} rx={3} fill="#3a3a44" />
            </g>
          ))}
          <Label x={x + 70} y={y0 + 18} t="EXIT" size={14} />
        </g>
      );
    default:
      return null;
  }
};

const youSpot: Record<string, [number, number, 'stand' | 'sit' | 'lie']> = {
  galley: [500, 445, 'stand'],
  greenhouse: [700, 445, 'stand'],
  berth: [905, 412, 'lie'],
  comms: [1180, 445, 'stand'],
  sauna: [1330, 412, 'sit'],
  freezer: [470, 555, 'stand'],
  bath: [670, 555, 'stand'],
  medical: [1110, 522, 'lie'],
  hall: [1330, 555, 'stand'],
  pole: [300, 640, 'stand'],
};

export const SouthPole: React.FC<{frame: number; tod: Tod; you?: string; plane?: PlaneState; dur: number}> = ({frame, tod, you, plane, dur}) => {
  const [s0, s1] = SKY[tod];
  const [sx, sy] = SUN[tod];
  const t = Math.min(1, frame / Math.max(1, dur));
  const dark = tod === 'night' || tod === 'dusk';
  return (
    <g>
      <defs>
        <linearGradient id="sp-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={s0} />
          <stop offset="1" stopColor={s1} />
        </linearGradient>
        <linearGradient id="sp-ice" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfe5f0" />
          <stop offset="1" stopColor="#7fa8c4" />
        </linearGradient>
        <radialGradient id="sp-sun">
          <stop offset="0" stopColor="#fff3b0" />
          <stop offset="1" stopColor="#ffb703" stopOpacity={0} />
        </radialGradient>
      </defs>
      <rect x={-1600} y={-600} width={5200} height={1240} fill="url(#sp-sky)" />
      {(tod === 'night' || tod === 'dusk') &&
        Array.from({length: 90}).map((_, i) => (
          <circle key={i} cx={-1500 + ((i * 397) % 5000)} cy={-500 + ((i * 211) % 1050)} r={1.5 + (i % 3)} fill="#fff" opacity={tod === 'night' ? 0.5 + 0.5 * Math.sin((frame + i * 11) / 15) : 0.25} />
        ))}
      {tod === 'night' &&
        [0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M -800 ${120 + i * 50} Q 200 ${10 + i * 40 + Math.sin((frame + i * 40) / 30) * 30} 960 ${110 + i * 40} T 2800 ${80 + i * 40}`}
            stroke={['#52ffb8', '#7bdff2', '#b8f2e6'][i]}
            strokeWidth={26 - i * 7}
            fill="none"
            opacity={0.18}
            strokeLinecap="round"
          />
        ))}
      {tod !== 'night' && (
        <g>
          <circle cx={sx} cy={sy} r={150} fill="url(#sp-sun)" opacity={0.8} />
          <circle cx={sx} cy={sy} r={52} fill="#ffd23f" stroke={C.ink} strokeWidth={5} />
        </g>
      )}
      {/* ice: surface + cross-section */}
      <rect x={-1600} y={640} width={5200} height={900} fill="url(#sp-ice)" />
      <rect x={-1600} y={636} width={5200} height={30} fill={dark ? '#cfd8e6' : '#f7fbfd'} />
      {Array.from({length: 9}).map((_, i) => (
        <path key={i} d={`M -1600 ${720 + i * 70} Q 0 ${712 + i * 70} 1400 ${724 + i * 70} T 3600 ${716 + i * 70}`} stroke="#ffffff" strokeWidth={2} fill="none" opacity={0.35} />
      ))}
      {/* skiway + flags */}
      {Array.from({length: 12}).map((_, i) => (
        <g key={i}>
          <line x1={-1300 + i * 90} y1={640} x2={-1300 + i * 90} y2={612} stroke={C.ink} strokeWidth={3} />
          <path d={`M ${-1300 + i * 90} 612 l 16 6 l -16 6 Z`} fill={i % 2 ? C.red : '#2a9d8f'} />
        </g>
      ))}
      {/* traverse: tractors + fuel sleds */}
      <g transform="translate(-1150 640)">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${i * 120 + (frame % 300) * 0.15} 0)`}>
            {i === 0 ? (
              <g>
                <rect x={-40} y={-50} width={80} height={36} rx={6} fill="#e76f51" stroke={C.ink} strokeWidth={4} />
                <rect x={-20} y={-74} width={40} height={26} rx={4} fill="#ffd166" stroke={C.ink} strokeWidth={4} />
                <rect x={-46} y={-16} width={92} height={16} rx={8} fill="#3a3a44" stroke={C.ink} strokeWidth={3} />
              </g>
            ) : (
              <g>
                <ellipse cx={0} cy={-22} rx={50} ry={20} fill="#495057" stroke={C.ink} strokeWidth={4} />
                <text x={0} y={-16} fontSize={14} fill="#fff" textAnchor="middle" fontFamily="sans-serif">FUEL</text>
                <line x1={-50} y1={-2} x2={50} y2={-2} stroke={C.ink} strokeWidth={4} />
              </g>
            )}
          </g>
        ))}
      </g>
      {/* parked plane */}
      {plane === 'parked' && <Plane x={-420} y={622} s={1.1} frame={frame} />}
      {/* ceremonial pole + thermometer sign */}
      <g>
        <rect x={244} y={560} width={12} height={80} fill="#fff" stroke={C.ink} strokeWidth={3} />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={244} y={566 + i * 18} width={12} height={8} fill={C.red} />
        ))}
        <circle cx={250} cy={552} r={12} fill="#cfd8dc" stroke={C.ink} strokeWidth={3} />
        <circle cx={246} cy={548} r={4} fill="#fff" />
        <rect x={300} y={520} width={36} height={58} rx={6} fill={C.cream} stroke={C.ink} strokeWidth={3} />
        <rect x={314} y={528} width={8} height={36} rx={4} fill="#fff" stroke={C.ink} strokeWidth={2} />
        <rect x={315} y={556} width={6} height={8} fill="#219ebc" />
        <text x={318} y={574} fontSize={8} textAnchor="middle" fill={C.navy} fontFamily="sans-serif">
          {dark ? '-80°' : '-28°'}
        </text>
        <line x1={318} y1={578} x2={318} y2={640} stroke={C.ink} strokeWidth={3} />
      </g>
      {/* station on stilts */}
      <g>
        {Array.from({length: 9}).map((_, i) => (
          <rect key={i} x={410 + i * 130} y={566} width={14} height={74} fill="#5c6b73" stroke={C.ink} strokeWidth={3} />
        ))}
        <path d="M 370 555 L 1510 555 L 1490 576 L 390 576 Z" fill="#6c8aa3" stroke={C.ink} strokeWidth={5} />
        <rect x={370} y={318} width={1140} height={20} fill="#3d5a73" stroke={C.ink} strokeWidth={5} />
        {ROOMS.map((r) => (
          <rect key={r.id} x={r.x} y={ROOM_Y[r.f][0]} width={ROOM_W} height={110} fill={dark ? r.bg : r.bg} stroke={C.ink} strokeWidth={4} />
        ))}
        {ROOMS.map((r) => (
          <Interior key={r.id} id={r.id} x={r.x} y0={ROOM_Y[r.f][0]} frame={frame} tod={tod} />
        ))}
        <rect x={380} y={335} width={1120} height={220} fill="none" stroke={C.ink} strokeWidth={6} />
        {/* flag + antenna */}
        <line x1={520} y1={318} x2={520} y2={220} stroke={C.ink} strokeWidth={4} />
        <path d={`M 520 222 q 24 ${-6 + Math.sin(frame / 6) * 4} 48 0 l 0 30 q -24 ${6 + Math.sin(frame / 6) * 4} -48 0 Z`} fill="#3d5a80" stroke={C.ink} strokeWidth={3} />
        <text x={544} y={244} fontSize={12} fill="#fff" textAnchor="middle" fontFamily="sans-serif">NSF</text>
        <line x1={1440} y1={318} x2={1440} y2={250} stroke={C.ink} strokeWidth={4} />
        <circle cx={1440} cy={246} r={10} fill="#fff" stroke={C.ink} strokeWidth={3} />
        {/* other crew */}
        <Figure x={555} y={445} s={0.85} hat="chef" shirt="#ffffff" flip />
        <Figure x={1095} y={445} s={0.85} shirt="#457b9d" />
        <Figure x={1205} y={555} s={0.85} shirt="#2a9d8f" />
        <Figure x={1440} y={445} s={0.85} pose="sit" shirt="#f1c0a0" flip />
      </g>
      {/* power plant + fuel tanks */}
      <g>
        <path d="M 1580 640 L 1580 560 Q 1700 500 1820 560 L 1820 640 Z" fill="#8d99ae" stroke={C.ink} strokeWidth={5} />
        <rect x={1740} y={470} width={22} height={70} fill="#6c757d" stroke={C.ink} strokeWidth={4} />
        <Steam x={1748} y={466} frame={frame} n={4} color="#e9ecef" />
        {[1610, 1680].map((gx) => (
          <rect key={gx} x={gx} y={590} width={56} height={40} rx={5} fill="#f4a261" stroke={C.ink} strokeWidth={3} />
        ))}
        <Label x={1700} y={580} t="POWER PLANT" size={14} />
        <Figure x={1780} y={640} s={0.85} shirt="#ffb703" flip />
        {[1880, 1960, 2040].map((tx) => (
          <g key={tx}>
            <ellipse cx={tx} cy={612} rx={36} ry={28} fill="#adb5bd" stroke={C.ink} strokeWidth={4} />
            <text x={tx} y={618} fontSize={12} textAnchor="middle" fill={C.ink} fontFamily="sans-serif">FUEL</text>
          </g>
        ))}
      </g>
      {/* telescope + food cache */}
      <g>
        <rect x={2340} y={580} width={160} height={60} fill="#e9ecef" stroke={C.ink} strokeWidth={4} />
        <path d="M 2370 580 Q 2420 470 2500 520 Z" fill="#dee2e6" stroke={C.ink} strokeWidth={4} />
        <line x1={2420} y1={540} x2={2470} y2={500} stroke={C.ink} strokeWidth={4} />
        {[0, 1, 2].map((i) => (
          <rect key={i} x={2730 + i * 34} y={606 - (i % 2) * 30} width={32} height={30} fill="#e8d5b7" stroke={C.ink} strokeWidth={3} />
        ))}
        <rect x={2760} y={546} width={40} height={30} fill="#f7c6d9" stroke={C.ink} strokeWidth={3} />
        <text x={2780} y={566} fontSize={9} textAnchor="middle" fill={C.ink} fontFamily="sans-serif">ICE CREAM</text>
      </g>
      {/* underground: glycol pipe, Rodwell, old Rodwell (sewage) */}
      <g>
        <path d="M 1700 640 L 1700 880" stroke="#e76f51" strokeWidth={10} />
        <path d="M 1716 640 L 1716 880" stroke="#219ebc" strokeWidth={10} />
        <ellipse cx={1700} cy={930} rx={120} ry={70} fill="#4cc9f0" stroke={C.ink} strokeWidth={5} />
        {[0, 1, 2].map((i) => (
          <ellipse key={i} cx={1700} cy={930} rx={30 + (((frame + i * 20) % 60) / 60) * 80} ry={10 + (((frame + i * 20) % 60) / 60) * 40} fill="none" stroke="#fff" strokeWidth={2} opacity={1 - ((frame + i * 20) % 60) / 60} />
        ))}
        <Label x={1700} y={1030} t="RODWELL" size={20} color="#023047" />
        <path d="M 1420 640 L 1420 940" stroke="#8d6e4c" strokeWidth={8} strokeDasharray="12 8" />
        <ellipse cx={1430} cy={990} rx={80} ry={50} fill="#8f8c4b" stroke={C.ink} strokeWidth={5} />
        <Label x={1430} y={1070} t="OLD RODWELL = SEWAGE" size={15} color="#3a3a1a" />
      </g>
      {/* YOU */}
      {you && you !== 'run' && youSpot[you] && (
        <Figure x={youSpot[you][0]} y={youSpot[you][1]} s={0.95} cap shirt={C.red} pose={youSpot[you][2]} />
      )}
      {you === 'run' && (
        <g>
          <Figure x={200 + t * 140} y={640 + Math.abs(Math.sin(frame / 3)) * -8} s={0.95} cap shirt="#f1c0a0" />
          <Steam x={200 + t * 140} y={560} frame={frame} n={5} />
        </g>
      )}
      {/* flying plane */}
      {plane === 'leave' && <Plane x={1250 - t * 700} y={420 - t * 260} s={0.8 - t * 0.3} frame={frame} flip />}
      {plane === 'arrive' && <Plane x={1300 - t * 600} y={120 + t * 230} s={0.5 + t * 0.3} frame={frame} flip />}
      {dark && <rect x={-1600} y={-600} width={5200} height={2200} fill="#0b1026" opacity={tod === 'night' ? 0.12 : 0.06} />}
    </g>
  );
};
