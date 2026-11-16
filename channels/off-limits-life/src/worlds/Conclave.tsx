import React from 'react';
import {C, Figure, Label} from '../ui';
import type {Tod} from './SouthPole';
import type {WorldProps} from './registry';

/** Papal Conclave world (Vatican City cutaway: Casa Santa Marta, Vatican Gardens, Sistine Chapel, St. Peter's Square). */
export const VIEWS: Record<string, [number, number, number]> = {
  wide: [1300, 480, 0.74], house: [460, 490, 1.65], room: [210, 305, 4.8], bath: [430, 305, 5.0],
  dining: [270, 620, 3.6], kitchen: [650, 620, 3.6], lots: [590, 465, 5.2], staff: [230, 465, 4.2],
  sweep: [390, 465, 4.6], bus: [1080, 680, 3.0], garden: [1100, 580, 2.0], cots: [230, 735, 4.4],
  chapel: [1750, 480, 1.8], doors: [1400, 650, 4.0], ballot: [1700, 650, 5.4], urn: [2020, 600, 4.6],
  stove: [1530, 640, 4.0], chimney: [1530, 125, 4.4], clock: [150, 255, 6.8], square: [2360, 690, 2.6],
  balcony: [2360, 340, 4.0],
};

export const viewOf = (name: string, _tod: Tod): [number, number, number] => VIEWS[name] ?? VIEWS.wide;

const SKY: Record<Tod, [string, string]> = {
  day: ['#68b5e8', '#e9f5fc'], dusk: ['#4a4e69', '#f4a261'], night: ['#0b132b', '#1c2541'], dawn: ['#3d405b', '#f2cc8f'],
};

const YOU: Record<string, [number, number, 'stand' | 'sit' | 'lie']> = {
  chapel: [1620, 524, 'sit'], room: [220, 368, 'stand'], bath: [450, 368, 'stand'],
  dining: [220, 652, 'sit'], urn: [1970, 665, 'stand'], garden: [1040, 740, 'stand'],
};

const SwissGuard: React.FC<{x: number; y: number; frame: number; flip?: boolean}> = ({x, y, frame, flip}) => (
  <g transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1)`}>
    <line x1={-14} y1={-68} x2={-14} y2={0} stroke="#4a5568" strokeWidth={3} />
    <path d="M -14 -68 L -14 -82 L -11 -68 Z M -14 -62 L -23 -66 L -20 -58 Z" fill="#e2e8f0" stroke={C.ink} strokeWidth={1.5} />
    <rect x={-8} y={-42} width={16} height={24} rx={3} fill="#1d3557" stroke={C.ink} strokeWidth={2.5} />
    <line x1={-3} y1={-42} x2={-3} y2={-18} stroke="#e63946" strokeWidth={2.5} /><line x1={3} y1={-42} x2={3} y2={-18} stroke="#f4a261" strokeWidth={2.5} />
    <line x1={-4} y1={-18} x2={-4} y2={0} stroke="#1d3557" strokeWidth={3} /><line x1={4} y1={-18} x2={4} y2={0} stroke="#e63946" strokeWidth={3} />
    <circle cx={0} cy={-50} r={9} fill="#fff" stroke={C.ink} strokeWidth={2.5} /><ellipse cx={0} cy={-58} rx={10} ry={4} fill="#1d3557" stroke={C.ink} strokeWidth={2} />
    <path d={`M 0 -58 Q ${-4 + Math.sin(frame / 12) * 2} -68 -1 -72 Q 4 -68 1 -58`} fill="#e63946" stroke={C.ink} strokeWidth={1.5} />
  </g>
);

const Cardinal: React.FC<{x: number; y: number; s?: number; pose?: 'stand' | 'sit' | 'lie'; flip?: boolean}> = ({x, y, s = 0.8, pose = 'stand', flip}) => (
  <g>
    <Figure x={x} y={y} s={s} pose={pose} shirt="#c1121f" flip={flip} />
    <path d={`M ${x - 14 * s} ${y - 82 * s} Q ${x} ${y - 96 * s} ${x + 14 * s} ${y - 82 * s} Z`} fill="#c1121f" stroke={C.ink} strokeWidth={2.5 * s} />
  </g>
);

const Cypress: React.FC<{x: number; y: number; h?: number; frame: number}> = ({x, y, h = 120, frame}) => (
  <g transform={`translate(${x} ${y}) rotate(${Math.sin((frame + x) / 30) * 1.5})`}>
    <line x1={0} y1={0} x2={0} y2={-15} stroke="#3e2723" strokeWidth={5} />
    <path d={`M -14 -15 Q -18 ${-h / 2} 0 ${-h} Q 18 ${-h / 2} 14 -15 Z`} fill="#1b4332" stroke={C.ink} strokeWidth={3} />
  </g>
);

const StonePine: React.FC<{x: number; y: number; frame: number}> = ({x, y, frame}) => (
  <g transform={`translate(${x} ${y}) rotate(${Math.sin((frame + x) / 35) * 1.2})`}>
    <path d="M -4 0 L -2 -90 L 2 -90 L 4 0 Z" fill="#4e342e" stroke={C.ink} strokeWidth={2.5} />
    <ellipse cx={0} cy={-100} rx={44} ry={22} fill="#2d6a4f" stroke={C.ink} strokeWidth={3.5} />
  </g>
);

const Clock: React.FC<{x: number; y: number; frame: number}> = ({x, y, frame}) => (
  <g transform={`translate(${x} ${y})`}>
    <circle r={18} fill="#ffffff" stroke={C.ink} strokeWidth={3} />
    {[0, 90, 180, 270].map((deg) => <line key={deg} x1={0} y1={-16} x2={0} y2={-12} stroke={C.ink} strokeWidth={2} transform={`rotate(${deg})`} />)}
    <line x1={0} y1={0} x2={7} y2={-6} stroke={C.ink} strokeWidth={2.5} strokeLinecap="round" />
    <line x1={0} y1={0} x2={-2} y2={-11} stroke={C.ink} strokeWidth={2} strokeLinecap="round" />
    <line x1={0} y1={0} x2={0} y2={-13} stroke={C.red} strokeWidth={1.5} strokeLinecap="round" transform={`rotate(${(frame * 6) % 360})`} />
  </g>
);

export const Conclave: React.FC<WorldProps> = ({frame, tod, you, plane, dur}) => {
  const [s0, s1] = SKY[tod];
  const dark = tod === 'night';
  const pList = (plane ?? '').split(' ');
  const has = (key: string) => pList.includes(key);

  return (
    <g>
      <defs>
        <linearGradient id="conc-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={s0} /><stop offset="1" stopColor={s1} />
        </linearGradient>
      </defs>
      <rect x={-500} y={-300} width={3600} height={1100} fill="url(#conc-sky)" />
      {dark && Array.from({length: 60}).map((_, i) => (
        <circle key={i} cx={-400 + ((i * 389) % 3400)} cy={-200 + ((i * 179) % 650)} r={1.5 + (i % 2)} fill="#fff" opacity={0.4 + 0.4 * Math.sin((frame + i * 11) / 10)} />
      ))}
      {!dark && <circle cx={tod === 'dawn' ? 350 : tod === 'dusk' ? 2200 : 1250} cy={tod === 'day' ? 120 : 250} r={50} fill="#ffd166" stroke={C.ink} strokeWidth={4} />}
      <rect x={-500} y={770} width={3600} height={350} fill="#c8bca2" /><line x1={-500} y1={770} x2={3100} y2={770} stroke={C.ink} strokeWidth={5} />

      {/* ================= LEFT: CASA SANTA MARTA ================= */}
      <polygon points="50,190 460,135 870,190" fill="#c8bca2" stroke={C.ink} strokeWidth={5} />
      <rect x={60} y={190} width={800} height={580} fill="#f5eedc" stroke={C.ink} strokeWidth={5} />
      {[375, 537, 694].map((sy) => <rect key={sy} x={60} y={sy} width={800} height={12} fill="#dfd3b9" stroke={C.ink} strokeWidth={3} />)}

      {/* Floor 3: Bedroom */}
      <rect x={70} y={200} width={295} height={175} fill="#ede0d4" stroke={C.ink} strokeWidth={3} /><Clock x={150} y={255} frame={frame} />
      <rect x={90} y={320} width={90} height={48} rx={3} fill="#8d6e4c" stroke={C.ink} strokeWidth={2.5} /><rect x={92} y={312} width={26} height={12} rx={3} fill="#ffffff" stroke={C.ink} strokeWidth={1.5} />
      <rect x={118} y={324} width={60} height={42} rx={2} fill="#c1121f" stroke={C.ink} strokeWidth={2} /><rect x={185} y={328} width={28} height={40} rx={2} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
      <rect x={189} y={320} width={20} height={8} rx={2} fill="#212529" stroke={C.ink} strokeWidth={1.5} /><path d="M 186 318 Q 199 310 212 318" stroke="#212529" strokeWidth={3} fill="none" strokeLinecap="round" />
      <rect x={235} y={295} width={48} height={73} rx={2} fill="#a68a64" stroke={C.ink} strokeWidth={2.5} />
      {[315, 335, 355].map((ly) => <line key={ly} x1={240} y1={ly} x2={278} y2={ly} stroke={C.ink} strokeWidth={1.5} />)}
      <g transform="translate(315 368)">
        <line x1={0} y1={0} x2={0} y2={-80} stroke="#8d6e4c" strokeWidth={3} /><path d="M -16 -80 Q 0 -90 16 -80" stroke="#8d6e4c" strokeWidth={3} fill="none" />
        <path d="M -14 -78 L -18 -28 L 18 -28 L 14 -78 Z" fill="#c1121f" stroke={C.ink} strokeWidth={2} /><line x1={0} y1={-78} x2={0} y2={-28} stroke="#ffffff" strokeWidth={1.5} />
      </g>
      <Label x={210} y={225} t="SUITE" size={12} />

      {/* Floor 3: Bathroom */}
      <rect x={365} y={200} width={130} height={175} fill="#e2ece9" stroke={C.ink} strokeWidth={3} />
      <rect x={378} y={242} width={48} height={126} fill="#bfe9ff" fillOpacity={0.3} stroke={C.ink} strokeWidth={2.5} />
      <line x1={378} y1={252} x2={392} y2={252} stroke="#6c757d" strokeWidth={3} /><ellipse cx={394} cy={254} rx={6} ry={3} fill="#adb5bd" stroke={C.ink} strokeWidth={1.5} />
      {[0, 1, 2].map((i) => <line key={i} x1={390 + i * 4} y1={260 + ((frame * 3 + i * 16) % 90)} x2={390 + i * 4} y2={268 + ((frame * 3 + i * 16) % 90)} stroke="#0077b6" strokeWidth={1.5} strokeLinecap="round" />)}
      <rect x={440} y={260} width={34} height={46} rx={3} fill="#e2eafc" stroke={C.ink} strokeWidth={2} /><rect x={436} y={316} width={42} height={20} rx={6} fill="#ffffff" stroke={C.ink} strokeWidth={2.5} /><line x1={457} y1={310} x2={457} y2={316} stroke="#6c757d" strokeWidth={3} />
      <Label x={430} y={225} t="BATH" size={12} />

      {/* Floor 3: Corridor & Sealed Door */}
      <rect x={495} y={200} width={355} height={175} fill="#f4ebd9" stroke={C.ink} strokeWidth={3} />
      <g transform="translate(650 250)">
        <rect x={-32} y={0} width={64} height={118} fill="#583119" stroke={C.ink} strokeWidth={3} />
        {[-22, 6].map((px) => <g key={px}><rect x={px} y={10} width={16} height={42} fill="#432311" stroke={C.ink} strokeWidth={1.5} /><rect x={px} y={62} width={16} height={44} fill="#432311" stroke={C.ink} strokeWidth={1.5} /></g>)}
        <line x1={-32} y1={30} x2={32} y2={70} stroke="#c1121f" strokeWidth={6} /><line x1={-32} y1={70} x2={32} y2={30} stroke="#c1121f" strokeWidth={6} />
        <g transform="translate(0 50)">
          {has('sealed') && <circle r={22} fill="none" stroke="#ff4d6d" strokeWidth={3} opacity={0.5 + 0.4 * Math.sin(frame / 6)} />}
          <circle r={14} fill="#c1121f" stroke={C.ink} strokeWidth={2.5} /><path d="M -5 -5 L 5 5 M -5 5 L 5 -5" stroke="#ffffff" strokeWidth={2} />
        </g>
        <Label x={0} y={-10} t="SEALED · FRANCIS" size={10} />
      </g>

      {/* Floor 2: Staff Oath */}
      <rect x={70} y={387} width={285} height={150} fill="#e9ecef" stroke={C.ink} strokeWidth={3} /><Label x={212} y={415} t="STAFF OATH OF SECRECY" size={11} />
      <g transform="translate(212 505)">
        <Figure x={-75} y={0} s={0.72} hat="chef" shirt="#ffffff" /><Figure x={-25} y={0} s={0.72} shirt="#6c757d" />
        <Figure x={25} y={0} s={0.72} shirt="#e0f2fe" /><Figure x={75} y={0} s={0.72} shirt="#1d3557" />
        {[-75, -25, 25, 75].map((fx) => <line key={fx} x1={fx + 9} y1={-35} x2={fx + 18} y2={-52} stroke={C.ink} strokeWidth={3} strokeLinecap="round" />)}
      </g>

      {/* Floor 2: Electronic Sweep */}
      <rect x={355} y={387} width={150} height={150} fill="#dee2e6" stroke={C.ink} strokeWidth={3} /><Label x={430} y={415} t="RF SWEEP" size={10} />
      <g transform="translate(420 505)">
        <Figure x={-15} y={0} s={0.72} shirt="#334155" /><line x1={-4} y1={-36} x2={16} y2={-48} stroke={C.ink} strokeWidth={2.5} strokeLinecap="round" />
        <rect x={14} y={-52} width={12} height={8} rx={2} fill="#1e293b" stroke={C.ink} strokeWidth={1.5} /><line x1={26} y1={-48} x2={34} y2={-48} stroke="#475569" strokeWidth={2} />
        {has('sweep') && [0, 1, 2].map((i) => {
          const r = 8 + ((frame * 2 + i * 14) % 36);
          return <path key={i} d={`M ${34 + r * 0.7} ${-48 - r * 0.7} A ${r} ${r} 0 0 1 ${34 + r * 0.7} ${-48 + r * 0.7}`} stroke="#06d6a0" strokeWidth={2} fill="none" opacity={Math.max(0, 1 - r / 36)} />;
        })}
      </g>

      {/* Floor 2: Lots Bowl */}
      <rect x={505} y={387} width={345} height={150} fill="#f3ead8" stroke={C.ink} strokeWidth={3} />
      <g transform="translate(630 465)">
        <rect x={-45} y={15} width={90} height={10} fill="#7f5539" stroke={C.ink} strokeWidth={2.5} /><line x1={-35} y1={25} x2={-35} y2={50} stroke={C.ink} strokeWidth={3} /><line x1={35} y1={25} x2={35} y2={50} stroke={C.ink} strokeWidth={3} />
        <path d="M -24 15 Q -28 -12 0 -12 Q 28 -12 24 15 Z" fill="#d4af37" stroke={C.ink} strokeWidth={2.5} />
        {[-12, -4, 4, 12].map((lx, i) => <rect key={i} x={lx - 4} y={-8 + (i % 2) * 3} width={8} height={10} rx={1} fill="#ffffff" stroke={C.ink} strokeWidth={1.2} transform={`rotate(${(i - 1.5) * 12} ${lx} -4)`} />)}
        {has('lots') && <g transform={`translate(4 ${-10 + Math.sin(frame / 6) * 4})`}><path d="M 0 -35 L 0 -14 L 6 -14 L 6 -35 Z" fill="#c1121f" stroke={C.ink} strokeWidth={2} /><circle cx={3} cy={-10} r={5} fill="#fcd5ce" stroke={C.ink} strokeWidth={1.5} /><rect x={0} y={-14} width={7} height={10} rx={1} fill="#ffffff" stroke={C.ink} strokeWidth={1} /></g>}
        <Label x={0} y={42} t="SCRUTINEERS LOTS" size={10} />
      </g>

      {/* Floor 1: Dining */}
      <rect x={70} y={549} width={405} height={145} fill="#faedcd" stroke={C.ink} strokeWidth={3} />
      <g transform="translate(270 620)">
        <rect x={-170} y={-5} width={340} height={38} rx={3} fill="#ffffff" stroke={C.ink} strokeWidth={3} />
        {[-130, -70, -10, 50, 110].map((dx) => <g key={dx} transform={`translate(${dx} -5)`}><ellipse cx={0} cy={0} rx={12} ry={4} fill="#f8f9fa" stroke={C.ink} strokeWidth={1.5} /><circle cx={-18} cy={-2} r={3} fill="#e63946" stroke={C.ink} strokeWidth={1} /></g>)}
        <Cardinal x={-110} y={32} s={0.75} pose="sit" /><Cardinal x={10} y={32} s={0.75} pose="sit" flip /><Cardinal x={100} y={32} s={0.75} pose="sit" />
        <Figure x={-45} y={30} s={0.75} shirt="#6c757d" /><ellipse cx={-32} cy={-12} rx={12} ry={4} fill="#adb5bd" stroke={C.ink} strokeWidth={1.5} /><path d="M -40 -12 Q -32 -22 -24 -12 Z" fill="#ced4da" stroke={C.ink} strokeWidth={1.5} />
        <Label x={0} y={-22} t="REFECTORY" size={12} />
      </g>

      {/* Floor 1: Kitchen */}
      <rect x={475} y={549} width={375} height={145} fill="#e9ecef" stroke={C.ink} strokeWidth={3} />
      <g transform="translate(650 620)">
        <rect x={-140} y={-4} width={280} height={40} fill="#adb5bd" stroke={C.ink} strokeWidth={3} /><rect x={-60} y={-14} width={120} height={10} fill="#495057" stroke={C.ink} strokeWidth={2} />
        {[-35, 25].map((px, i) => (
          <g key={px} transform={`translate(${px} -14)`}>
            <rect x={-14} y={-18} width={28} height={18} rx={2} fill="#dee2e6" stroke={C.ink} strokeWidth={2} />
            {[0, 1].map((s) => <path key={s} d={`M ${-5 + s * 10} -20 Q ${-2 + s * 10 + Math.sin((frame + i * 10 + s * 6) / 5) * 5} -32 ${-5 + s * 10} -42`} stroke="#ffffff" strokeWidth={2} fill="none" opacity={0.7} />)}
          </g>
        ))}
        <Figure x={-100} y={30} s={0.75} hat="chef" shirt="#ffffff" /><Figure x={90} y={30} s={0.75} hat="chef" shirt="#ffffff" flip /><Label x={0} y={32} t="CUCINA" size={12} color={C.ink} />
      </g>

      {/* Basement: Cots */}
      <rect x={70} y={706} width={395} height={64} fill="#d8c8b0" stroke={C.ink} strokeWidth={3} />
      <g transform="translate(260 735)">
        <Label x={0} y={-16} t="HISTORIC COTS (PRE-1996)" size={9} color="#5e503f" />
        {[-120, -40, 40, 120].map((cx) => (
          <g key={cx} transform={`translate(${cx} 14)`}>
            <rect x={-26} y={-10} width={52} height={10} rx={2} fill="#6c757d" stroke={C.ink} strokeWidth={2} /><rect x={-24} y={-15} width={14} height={6} rx={2} fill="#ffffff" stroke={C.ink} strokeWidth={1.5} />
            <line x1={-24} y1={0} x2={-24} y2={14} stroke={C.ink} strokeWidth={2.5} /><line x1={24} y1={0} x2={24} y2={14} stroke={C.ink} strokeWidth={2.5} />
          </g>
        ))}
      </g>
      <rect x={465} y={706} width={385} height={64} fill="#b08968" stroke={C.ink} strokeWidth={3} /><Label x={650} y={742} t="SANTA MARTA FOUNDATIONS" size={11} color="#f8f9fa" />

      {/* ================= MIDDLE: VATICAN GARDENS ================= */}
      <path d="M 860 770 L 860 560 Q 1100 520 1360 560 L 1360 770 Z" fill="#386641" stroke={C.ink} strokeWidth={4} />
      <path d="M 860 700 Q 1110 650 1360 710" stroke="#e9d8a6" strokeWidth={38} fill="none" strokeLinecap="round" />
      <path d="M 860 700 Q 1110 650 1360 710" stroke={C.ink} strokeWidth={4} fill="none" strokeLinecap="round" strokeDasharray="8 6" />
      <Cypress x={920} y={640} h={130} frame={frame} /><Cypress x={1170} y={620} h={110} frame={frame + 12} /><Cypress x={1320} y={630} h={140} frame={frame + 24} /><StonePine x={1240} y={640} frame={frame} />
      <g transform="translate(1010 670)">
        <line x1={0} y1={0} x2={0} y2={-50} stroke="#212529" strokeWidth={3} /><ellipse cx={0} cy={-54} rx={6} ry={6} fill="#ffd166" stroke={C.ink} strokeWidth={2} />
        {dark && <circle cx={0} cy={-54} r={28} fill="#ffd166" opacity={0.3} />}
      </g>
      {/* Minibus */}
      {(() => {
        const bx = has('bus') ? 950 + ((frame * 2.5) % 280) : 1080;
        return (
          <g transform={`translate(${bx} 680)`}>
            <rect x={-65} y={-42} width={130} height={42} rx={9} fill="#ffffff" stroke={C.ink} strokeWidth={3.5} />
            {[-58, -26, 8, 42].map((wx, i) => <rect key={wx} x={wx} y={-36} width={i === 3 ? 18 : 26} height={18} rx={3} fill="#bde0fe" stroke={C.ink} strokeWidth={2} />)}
            <line x1={-65} y1={-12} x2={65} y2={-12} stroke="#f4a261" strokeWidth={3} />
            {[-40, 40].map((wx) => <g key={wx} transform={`translate(${wx} 0)`}><circle r={10} fill="#212529" stroke={C.ink} strokeWidth={2.5} /><circle r={4} fill="#dee2e6" /></g>)}
            <Label x={10} y={-2} t="VATICANO" size={7} />
          </g>
        );
      })()}

      {/* ================= RIGHT: SISTINE CHAPEL ================= */}
      <polygon points="1350,150 1740,105 2130,150" fill="#7a3424" stroke={C.ink} strokeWidth={5} />
      <rect x={1360} y={150} width={760} height={620} fill="#9d4b38" stroke={C.ink} strokeWidth={5} />
      {/* Chimney */}
      <line x1={1530} y1={150} x2={1530} y2={85} stroke="#212529" strokeWidth={6} /><polygon points="1520,85 1530,76 1540,85" fill="#212529" stroke={C.ink} strokeWidth={1.5} />
      {has('smoke:white') && Array.from({length: 8}).map((_, i) => {
        const age = (frame * 1.5 + i * 16) % 120;
        return <circle key={i} cx={1530 + Math.sin(age / 12) * 18 + age * 0.45} cy={85 - age * 0.9} r={8 + age * 0.22} fill="#ffffff" stroke={C.ink} strokeWidth={2} opacity={Math.max(0, 1 - age / 120) * 0.9} />;
      })}
      {has('smoke:black') && Array.from({length: 8}).map((_, i) => {
        const age = (frame * 1.5 + i * 16) % 120;
        return <circle key={i} cx={1530 + Math.sin(age / 12) * 18 + age * 0.45} cy={85 - age * 0.9} r={8 + age * 0.22} fill="#1a1a1a" stroke={C.ink} strokeWidth={2} opacity={Math.max(0, 1 - age / 120) * 0.92} />;
      })}

      {/* Sistine Doors & Swiss Guards */}
      <g transform="translate(1400 650)">
        <rect x={-32} y={-80} width={64} height={150} fill="#5c3d2e" stroke={C.ink} strokeWidth={4} /><line x1={0} y1={-80} x2={0} y2={70} stroke={C.ink} strokeWidth={3} />
        {[-22, 10].map((px) => (
          <g key={px}>
            <rect x={px} y={-65} width={16} height={35} fill="#43281c" stroke={C.ink} strokeWidth={1.5} /><rect x={px} y={-15} width={16} height={35} fill="#43281c" stroke={C.ink} strokeWidth={1.5} /><rect x={px} y={30} width={16} height={32} fill="#43281c" stroke={C.ink} strokeWidth={1.5} />
          </g>
        ))}
        {has('doors:shut') && <rect x={-38} y={-4} width={76} height={14} rx={2} fill="#3d261d" stroke={C.ink} strokeWidth={2.5} />}
        <SwissGuard x={-45} y={65} frame={frame} /><SwissGuard x={45} y={65} frame={frame + 15} flip /><Label x={0} y={-90} t="EXTRA OMNES" size={11} color="#f8f9fa" />
      </g>

      {/* Sistine Interior Cutaway */}
      <rect x={1450} y={170} width={660} height={600} fill="#f4ebd9" stroke={C.ink} strokeWidth={5} />
      <g transform="translate(1850 360)">
        <rect x={120} y={-160} width={135} height={260} fill="#1d3557" stroke={C.ink} strokeWidth={3} />
        <rect x={130} y={-150} width={40} height={70} fill="#457b9d" opacity={0.85} /><rect x={180} y={-140} width={35} height={55} fill="#d4a373" opacity={0.85} /><rect x={220} y={-150} width={30} height={65} fill="#e76f51" opacity={0.85} />
        <ellipse cx={190} cy={-60} rx={45} ry={35} fill="#f4a261" opacity={0.75} /><rect x={135} y={-20} width={50} height={80} fill="#2a9d8f" opacity={0.85} /><rect x={195} y={-15} width={55} height={75} fill="#c1121f" opacity={0.75} />
        <Label x={187} y={-170} t="FRESCO" size={11} color="#f8f9fa" />
      </g>

      {/* Cardinals Seated at Desks */}
      <g transform="translate(1650 500)">
        <rect x={-170} y={-10} width={340} height={30} fill="#8d0801" stroke={C.ink} strokeWidth={3} /><line x1={-170} y1={-10} x2={170} y2={-10} stroke="#f4f1de" strokeWidth={3} />
        <Cardinal x={-130} y={24} pose="sit" /><Cardinal x={-50} y={24} pose="sit" flip /><Cardinal x={40} y={24} pose="sit" /><Cardinal x={120} y={24} pose="sit" flip />
        <Label x={0} y={-18} t="CONCLAVE CHAPEL" size={12} color="#f8f9fa" />
      </g>

      {/* Cast-iron Stove */}
      <line x1={1530} y1={170} x2={1530} y2={620} stroke="#212529" strokeWidth={10} /><line x1={1530} y1={170} x2={1530} y2={620} stroke="#495057" strokeWidth={6} />
      <rect x={1505} y={620} width={50} height={70} rx={12} fill="#212529" stroke={C.ink} strokeWidth={4} /><rect x={1514} y={644} width={32} height={28} rx={5} fill="#111111" stroke={C.ink} strokeWidth={2.5} />
      <g transform="translate(1530 666)">
        <path d={`M -10 4 Q -6 ${-6 - (has('fire') ? (frame % 5) * 2 : 0)} 0 ${-12 - (has('fire') ? (frame % 7) * 2 : 0)} Q 6 ${-6 - (has('fire') ? (frame % 4) * 2 : 0)} 10 4 Z`} fill={has('fire') ? '#e63946' : '#9d0208'} />
        <path d={`M -6 4 Q -3 ${-4 - (has('fire') ? (frame % 4) : 0)} 0 ${-8 - (has('fire') ? (frame % 6) : 0)} Q 3 ${-4} 6 4 Z`} fill={has('fire') ? '#f4a261' : '#e85d04'} />
      </g>
      <line x1={1512} y1={690} x2={1506} y2={705} stroke={C.ink} strokeWidth={4} strokeLinecap="round" /><line x1={1548} y1={690} x2={1554} y2={705} stroke={C.ink} strokeWidth={4} strokeLinecap="round" />
      <Label x={1530} y={722} t="STOVE" size={11} color="#f8f9fa" />

      {/* Ballot Table Close-up */}
      <g transform="translate(1700 648)">
        <rect x={-55} y={-25} width={110} height={50} rx={4} fill="#2d6a4f" stroke={C.ink} strokeWidth={2.5} /><rect x={-40} y={-18} width={80} height={36} rx={2} fill="#fffdfa" stroke={C.ink} strokeWidth={2} />
        <Label x={0} y={-4} t="ELIGO IN SUMMUM PONTIFICEM" size={5.5} color={C.navy} />
        <line x1={-25} y1={8} x2={25} y2={8} stroke="#8d99ae" strokeWidth={1.5} strokeDasharray="3 2" /><line x1={36} y1={-12} x2={46} y2={10} stroke="#8d6e4c" strokeWidth={2.5} strokeLinecap="round" /><circle cx={42} cy={-16} r={3} fill="#2b2d42" />
      </g>

      {/* Altar & Gold/Silver Urn */}
      <rect x={1960} y={610} width={120} height={60} fill="#efe7d3" stroke={C.ink} strokeWidth={3.5} /><rect x={1960} y={610} width={120} height={14} fill="#c1121f" stroke={C.ink} strokeWidth={2} />
      {[1975, 2065].map((cx) => (
        <g key={cx}><line x1={cx} y1={610} x2={cx} y2={580} stroke="#d4af37" strokeWidth={3} /><ellipse cx={cx} cy={576} rx={3} ry={5} fill="#ffd166" opacity={0.8 + 0.2 * Math.sin((frame + cx) / 4)} /></g>
      ))}
      <g transform="translate(2020 600)">
        <path d="M -16 0 L -12 -24 L 12 -24 L 16 0 Z" fill="#d4af37" stroke={C.ink} strokeWidth={2.5} /><ellipse cx={0} cy={-24} rx={14} ry={6} fill="#e0e0e0" stroke={C.ink} strokeWidth={2} />
        <path d="M -14 -24 Q 0 -36 14 -24 Z" fill="#d4af37" stroke={C.ink} strokeWidth={2} /><line x1={-5} y1={-30} x2={5} y2={-30} stroke={C.ink} strokeWidth={2} /><rect x={-3} y={-34} width={6} height={7} fill="#ffffff" stroke={C.ink} strokeWidth={1} />
      </g>
      <Cardinal x={1990} y={665} flip /><Label x={2020} y={686} t="SCRUTINY URN" size={12} color="#f8f9fa" />

      {/* ================= FAR RIGHT: ST. PETER'S SQUARE & BALCONY ================= */}
      <rect x={2120} y={140} width={480} height={630} fill="#ded1b6" stroke={C.ink} strokeWidth={5} />
      {[2170, 2250, 2470, 2550].map((cx) => <rect key={cx} x={cx - 15} y={160} width={30} height={460} fill="#d5c7aa" stroke={C.ink} strokeWidth={3} />)}
      {/* Central Balcony */}
      <g transform="translate(2360 340)">
        <rect x={-80} y={-60} width={160} height={130} rx={4} fill="#ded1b6" stroke={C.ink} strokeWidth={4} /><rect x={-50} y={-45} width={100} height={100} rx={30} fill="#1d2d44" stroke={C.ink} strokeWidth={3} />
        <path d="M -52 15 L 52 15 L 48 55 Q 0 65 -48 55 Z" fill="#9a031e" stroke={C.ink} strokeWidth={3} /><line x1={-48} y1={55} x2={48} y2={55} stroke="#ffd166" strokeWidth={3} />
        <Figure x={0} y={15} s={0.7} shirt="#ffffff" /><ellipse cx={0} cy={-34} rx={5} ry={2.2} fill="#ffffff" stroke={C.ink} strokeWidth={1.5} /><line x1={9} y1={-8} x2={18} y2={-24} stroke={C.ink} strokeWidth={2.5} strokeLinecap="round" />
        <Label x={0} y={80} t="HABEMUS PAPAM" size={13} color={C.navy} />
      </g>

      {/* St Peter's Square & Crowd */}
      <g transform="translate(2360 690)">
        <rect x={-200} y={-50} width={400} height={110} rx={12} fill="#dfd3b9" stroke={C.ink} strokeWidth={3.5} /><Label x={0} y={-32} t="PIAZZA SAN PIETRO" size={13} color="#4a5568" />
        {Array.from({length: 42}).map((_, i) => {
          const cx = -180 + (i % 14) * 27 + ((i * 17) % 9);
          const cy = -10 + Math.floor(i / 14) * 24 + ((i * 7) % 6);
          const col = ['#264653', '#2a9d8f', '#e76f51', '#f4a261', '#457b9d', '#e63946', '#6d597a'][i % 7];
          const armWave = has('crowd') ? Math.sin((frame + i * 5) / 4) * 6 : 0;
          return (
            <g key={i} transform={`translate(${cx} ${cy})`}>
              <circle cx={0} cy={-12} r={4.5} fill="#ffe5d9" stroke={C.ink} strokeWidth={1.5} /><rect x={-5} y={-7} width={10} height={14} rx={2} fill={col} stroke={C.ink} strokeWidth={1.5} />
              {has('crowd') && (
                <g>
                  <line x1={-5} y1={-4} x2={-9} y2={-16 + armWave} stroke={C.ink} strokeWidth={1.8} strokeLinecap="round" /><line x1={5} y1={-4} x2={9} y2={-16 - armWave} stroke={C.ink} strokeWidth={1.8} strokeLinecap="round" />
                  {i % 5 === 0 && (
                    <g transform={`translate(9 ${-16 - armWave})`}>
                      <line x1={0} y1={0} x2={0} y2={-12} stroke="#333" strokeWidth={1} /><rect x={0} y={-12} width={10} height={7} fill={i % 10 === 0 ? '#ffd166' : '#e63946'} stroke={C.ink} strokeWidth={0.8} />
                    </g>
                  )}
                </g>
              )}
            </g>
          );
        })}
      </g>

      {/* ================= YOU FIGURE ================= */}
      {you && YOU[you] && <Figure x={YOU[you][0]} y={YOU[you][1]} s={0.88} cap shirt={C.red} pose={YOU[you][2]} />}
      {dark && <rect x={-500} y={-300} width={3600} height={1400} fill="#0b132b" opacity={0.18} pointerEvents="none" />}
    </g>
  );
};
