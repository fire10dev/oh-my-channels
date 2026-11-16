import React from 'react';
import {C, Figure, Label} from '../ui';
import type {Tod} from './SouthPole';
import type {WorldProps} from './registry';

/** Nimitz-class aircraft carrier cutaway at sea. Waterline y=760.
 *  Flight deck y ~290 with F/A-18s, catapult, arresting wires, island tower;
 *  hangar bay y ~324..454; lower decks y ~468..722 (10 cutaway rooms).
 *  Pier at left (x<150); supply ship at right (x>2450) with RAS cables.
 *  `plane` state strings: 'launch' | 'trap' | 'curtain' | 'shower:on' | 'water:low' | 'ras' | 'trucks'. */
export const VIEWS: Record<string, [number, number, number]> = {
  wide: [1300, 520, 0.74], sea: [1300, 700, 0.40], deck: [1200, 260, 1.8], catapult: [1420, 260, 4.2],
  island: [2100, 200, 3.4], hangar: [1150, 390, 2.8], galley: [910, 528, 5.0], mess: [560, 528, 4.6],
  storeroom: [580, 662, 4.5], truck: [40, 680, 3.2], ras: [2520, 620, 2.7], berthing: [1920, 528, 4.0],
  rack: [1770, 528, 6.5], shower: [1220, 662, 5.2], laundry: [920, 662, 5.2], still: [1550, 662, 4.6],
  reactor: [1950, 662, 4.2], gym: [1510, 528, 5.0], store: [1210, 528, 5.5], clock: [680, 495, 7.5],
};

export const viewOf = (name: string, _tod: Tod): [number, number, number] => VIEWS[name] ?? VIEWS.wide;

const SKY: Record<Tod, [string, string]> = {
  day: ['#6ec3f4', '#d7eef7'], dusk: ['#4a3f6b', '#f4a261'], night: ['#070b1f', '#1b2a4a'], dawn: ['#2d3154', '#f6bd60'],
};

const ROOMS: {id: string; x: number; y: number; w: number; h: number; bg: string; label: string}[] = [
  {id: 'mess', x: 400, y: 468, w: 340, h: 120, bg: '#fbe8c8', label: 'MESS DECK'},
  {id: 'galley', x: 760, y: 468, w: 300, h: 120, bg: '#f1f3f5', label: 'GALLEY'},
  {id: 'store', x: 1080, y: 468, w: 260, h: 120, bg: '#fff1e6', label: 'SHIP STORE'},
  {id: 'gym', x: 1360, y: 468, w: 300, h: 120, bg: '#e8f4f8', label: 'FITNESS · GYM'},
  {id: 'berthing', x: 1680, y: 468, w: 480, h: 120, bg: '#e2ece9', label: 'BERTHING'},
  {id: 'storeroom', x: 400, y: 602, w: 360, h: 120, bg: '#ede0d4', label: 'PROVISIONS · FREEZER'},
  {id: 'laundry', x: 780, y: 602, w: 280, h: 120, bg: '#e0ecf8', label: 'LAUNDRY'},
  {id: 'shower', x: 1080, y: 602, w: 280, h: 120, bg: '#d8f3dc', label: 'SHOWER ROOM'},
  {id: 'still', x: 1380, y: 602, w: 340, h: 120, bg: '#dbe7e4', label: 'DISTILLING PLANT'},
  {id: 'reactor', x: 1740, y: 602, w: 420, h: 120, bg: '#f8edeb', label: 'REACTOR COMPARTMENT'},
];

const YOU: Record<string, [number, number, 'stand' | 'sit' | 'lie']> = {
  rack: [1755, 532, 'lie'], mess: [540, 580, 'sit'], shower: [1180, 715, 'stand'],
  storeroom: [620, 715, 'stand'], gym: [1470, 580, 'stand'], store: [1240, 580, 'stand'], deck: [320, 288, 'stand'],
};

const Jet: React.FC<{x: number; y: number; s?: number; flip?: boolean; flame?: boolean; folded?: boolean; hook?: boolean}> = ({x, y, s = 1, flip, flame, folded, hook}) => (
  <g transform={`translate(${x} ${y}) scale(${(flip ? -1 : 1) * s} ${s})`}>
    {flame && <polygon points="-60,-4 -98,-10 -82,-3 -115,0 -82,3 -98,10 -60,4" fill="#f77f00" stroke={C.ink} strokeWidth={2} />}
    <path d="M 65 0 Q 30 -12 -20 -12 L -60 -10 L -60 6 L -20 6 Q 30 6 65 0 Z" fill="#90a4ae" stroke={C.ink} strokeWidth={3} />
    <path d="M 12 -12 Q 28 -24 44 -12 Z" fill="#bde0fe" stroke={C.ink} strokeWidth={2.5} /><circle cx={28} cy={-13} r={3} fill="#1d3557" />
    <polygon points="-42,-10 -58,-38 -44,-38 -32,-10" fill="#78909c" stroke={C.ink} strokeWidth={2.5} /><polygon points="-50,-10 -64,-34 -52,-34 -40,-10" fill="#607d8b" stroke={C.ink} strokeWidth={2.5} />
    {folded ? <rect x={-20} y={-42} width={10} height={32} rx={2} fill="#78909c" stroke={C.ink} strokeWidth={2.5} /> : <polygon points="10,-6 -30,-6 -15,-2" fill="#607d8b" stroke={C.ink} strokeWidth={2} />}
    <line x1={32} y1={2} x2={30} y2={14} stroke={C.ink} strokeWidth={3} /><circle cx={30} cy={16} r={4.5} fill="#263238" stroke={C.ink} strokeWidth={2} />
    <line x1={-25} y1={4} x2={-27} y2={14} stroke={C.ink} strokeWidth={3} /><circle cx={-27} cy={16} r={5.5} fill="#263238" stroke={C.ink} strokeWidth={2} />
    {hook && <line x1={-55} y1={4} x2={-75} y2={16} stroke="#f77f00" strokeWidth={3} strokeLinecap="round" />}
  </g>
);

const RoomInterior: React.FC<{id: string; x: number; y: number; frame: number; has: (k: string) => boolean}> = ({id, x, y, frame, has}) => {
  switch (id) {
    case 'mess':
      return (
        <g>
          {[0, 1].map((i) => (
            <g key={i} transform={`translate(${x + 25 + i * 110} ${y + 68})`}>
              <rect width={90} height={10} rx={2} fill="#8d6e4c" stroke={C.ink} strokeWidth={2.5} />
              <line x1={20} y1={10} x2={20} y2={35} stroke={C.ink} strokeWidth={3} /><line x1={70} y1={10} x2={70} y2={35} stroke={C.ink} strokeWidth={3} />
              <circle cx={-8} cy={18} r={6} fill="#adb5bd" stroke={C.ink} strokeWidth={2} /><circle cx={98} cy={18} r={6} fill="#adb5bd" stroke={C.ink} strokeWidth={2} />
              <rect x={30} y={-5} width={22} height={5} fill="#ced4da" stroke={C.ink} strokeWidth={1.5} /><circle cx={36} cy={-7} r={2} fill={C.red} /><circle cx={44} cy={-7} r={2} fill="#ffb703" />
            </g>
          ))}
          <rect x={x + 255} y={y + 60} width={75} height={42} fill="#adb5bd" stroke={C.ink} strokeWidth={2.5} /><rect x={x + 255} y={y + 44} width={75} height={16} fill="#bde0fe" opacity={0.65} stroke={C.ink} strokeWidth={2} />
          {['#f4a261', '#588157', '#e76f51'].map((c, i) => <rect key={i} x={x + 262 + i * 22} y={y + 62} width={18} height={10} rx={2} fill={c} stroke={C.ink} strokeWidth={1.5} />)}
          <Figure x={x + 70} y={y + 104} s={0.7} shirt="#1d3557" pose="sit" /><Figure x={x + 180} y={y + 104} s={0.7} shirt="#1d3557" pose="sit" flip /><Figure x={x + 280} y={y + 104} s={0.7} shirt="#1d3557" />
          <g transform="translate(680 495)">
            <circle r={18} fill="#fff" stroke={C.ink} strokeWidth={3} /><circle r={15} fill="none" stroke="#ced4da" strokeWidth={1} />
            {[0, 60, 120, 180, 240, 300].map((d) => <line key={d} y1={-14} y2={-11} stroke={C.ink} strokeWidth={1.5} transform={`rotate(${d})`} />)}
            <line y2={-8} stroke={C.ink} strokeWidth={2.5} strokeLinecap="round" transform={`rotate(${((frame / 6) % 360)})`} />
            <line x2={7} stroke={C.ink} strokeWidth={2} strokeLinecap="round" transform={`rotate(${((frame / 72) % 360)})`} />
            <line y1={2} y2={-12} stroke={C.red} strokeWidth={1.2} transform={`rotate(${((frame * 6) % 360)})`} />
            <circle r={2} fill={C.red} /><Label x={0} y={-21} t="ZULU TIME" size={7} />
          </g>
        </g>
      );
    case 'galley':
      return (
        <g>
          {[0, 1].map((i) => (
            <g key={i} transform={`translate(${x + 25 + i * 50} ${y + 54})`}>
              <rect width={40} height={48} rx={6} fill="#ced4da" stroke={C.ink} strokeWidth={2.5} /><rect x={-4} y={-4} width={48} height={6} rx={2} fill="#adb5bd" stroke={C.ink} strokeWidth={2} />
              {[0, 1, 2].map((s) => <path key={s} d={`M ${8 + s * 12} -6 q 4 -12 0 -22`} stroke="#fff" strokeWidth={2} fill="none" opacity={0.4 + 0.5 * Math.sin((frame + i * 8 + s * 6) / 5)} />)}
            </g>
          ))}
          <rect x={x + 130} y={y + 64} width={70} height={40} fill="#495057" stroke={C.ink} strokeWidth={2.5} /><rect x={x + 138} y={y + 56} width={30} height={8} rx={2} fill="#212529" stroke={C.ink} strokeWidth={1.5} />
          <ellipse cx={x + 185} cy={y + 60} rx={12} ry={4} fill="#6c757d" stroke={C.ink} strokeWidth={1.5} />
          <rect x={x + 215} y={y + 68} width={75} height={36} fill="#adb5bd" stroke={C.ink} strokeWidth={2.5} /><rect x={x + 225} y={y + 63} width={34} height={6} fill="#d4a373" stroke={C.ink} strokeWidth={1.5} />
          <Figure x={x + 115} y={y + 104} s={0.7} hat="chef" shirt="#fff" /><Figure x={x + 265} y={y + 104} s={0.7} hat="chef" shirt="#fff" flip />
        </g>
      );
    case 'store':
      return (
        <g>
          <rect x={x + 18} y={y + 34} width={135} height={70} fill="#6c757d" stroke={C.ink} strokeWidth={2.5} />
          {[0, 1, 2].map((r) => <line key={r} x1={x + 18} y1={y + 57 + r * 23} x2={x + 153} y2={y + 57 + r * 23} stroke={C.ink} strokeWidth={2} />)}
          {Array.from({length: 12}).map((_, i) => (
            <rect key={i} x={x + 24 + (i % 6) * 20} y={y + 40 + Math.floor(i / 6) * 23} width={14} height={14} rx={2} fill={['#e63946', '#ffd166', '#2a9d8f', '#457b9d', '#9b5de5'][i % 5]} stroke={C.ink} strokeWidth={1.5} />
          ))}
          <rect x={x + 170} y={y + 68} width={75} height={36} fill="#495057" stroke={C.ink} strokeWidth={2.5} /><rect x={x + 182} y={y + 54} width={24} height={14} rx={2} fill="#212529" stroke={C.ink} strokeWidth={2} />
          <Figure x={x + 225} y={y + 104} s={0.7} shirt="#1d3557" flip /><Figure x={x + 155} y={y + 104} s={0.7} shirt="#1d3557" />
        </g>
      );
    case 'gym':
      return (
        <g>
          <rect x={x + 20} y={y + 88} width={65} height={14} rx={3} fill="#343a40" stroke={C.ink} strokeWidth={2.5} /><line x1={x + 76} y1={y + 88} x2={x + 80} y2={y + 52} stroke={C.ink} strokeWidth={3} />
          <Figure x={x + 48} y={y + 86 + Math.abs(Math.sin(frame / 4)) * -4} s={0.7} shirt="#e63946" />
          <rect x={x + 110} y={y + 80} width={50} height={10} fill="#1d3557" stroke={C.ink} strokeWidth={2} />
          <line x1={x + 120} y1={y + 90} x2={x + 120} y2={y + 104} stroke={C.ink} strokeWidth={3} /><line x1={x + 150} y1={y + 90} x2={x + 150} y2={y + 104} stroke={C.ink} strokeWidth={3} />
          <line x1={x + 135} y1={y + 50} x2={x + 135} y2={y + 80} stroke="#adb5bd" strokeWidth={3.5} /><circle cx={x + 135} cy={y + 50} r={9} fill="#495057" stroke={C.ink} strokeWidth={2} />
          <rect x={x + 185} y={y + 60} width={95} height={44} fill="#495057" stroke={C.ink} strokeWidth={2.5} />
          {Array.from({length: 6}).map((_, i) => <rect key={i} x={x + 195 + i * 14} y={y + 70 + (i % 2) * 16} width={9} height={12} rx={2} fill="#ffb703" stroke={C.ink} strokeWidth={1.5} />)}
          <Figure x={x + 225} y={y + 104} s={0.7} shirt="#2a9d8f" />
        </g>
      );
    case 'berthing':
      return (
        <g>
          <g transform={`translate(${x + 20} ${y + 18})`}>
            {[0, 1, 2].map((t) => (
              <g key={t} transform={`translate(0 ${t * 28})`}>
                <rect width={80} height={24} rx={3} fill="#457b9d" stroke={C.ink} strokeWidth={2} />
                <rect x={2} y={2} width={20} height={10} rx={2} fill="#fff" stroke={C.ink} strokeWidth={1.5} />
                <rect x={35} width={45} height={24} fill="#1d3557" stroke={C.ink} strokeWidth={2} />
              </g>
            ))}
          </g>
          <g transform={`translate(${x + 120} ${y + 18})`}>
            <rect width={90} height={24} rx={3} fill="#457b9d" stroke={C.ink} strokeWidth={2} /><rect x={40} width={50} height={24} fill="#1d3557" stroke={C.ink} strokeWidth={2} />
            <rect y={56} width={90} height={24} rx={3} fill="#457b9d" stroke={C.ink} strokeWidth={2} /><rect x={10} y={56} width={55} height={24} fill="#1d3557" stroke={C.ink} strokeWidth={2} />
            <rect y={28} width={90} height={26} rx={3} fill="#a8dadc" stroke={C.ink} strokeWidth={2.5} />
            <rect x={2} y={30} width={22} height={12} rx={3} fill="#fff" stroke={C.ink} strokeWidth={1.5} />
            <circle cx={4} cy={24} r={3} fill="#ffe66d" /><polygon points="4,24 16,36 0,36" fill="#ffe66d" opacity={0.4} />
            <Figure x={38} y={48} s={0.65} shirt="#1d3557" pose="lie" />
            {has('curtain') ? (
              <g><rect y={28} width={90} height={26} fill="#1d3557" stroke={C.ink} strokeWidth={2} /><line x1={2} y1={53} x2={88} y2={53} stroke="#ffe66d" strokeWidth={2} opacity={0.8} /></g>
            ) : (
              <g><rect x={52} y={28} width={38} height={26} fill="#1d3557" stroke={C.ink} strokeWidth={2} /><line x1={52} y1={28} x2={52} y2={54} stroke={C.ink} strokeWidth={1.5} /></g>
            )}
          </g>
          <rect x={x + 230} y={y + 18} width={50} height={84} fill="#6c757d" stroke={C.ink} strokeWidth={2.5} /><line x1={x + 255} y1={y + 18} x2={x + 255} y2={y + 102} stroke={C.ink} strokeWidth={2} />
          <g transform={`translate(${x + 300} ${y + 18})`}>
            {[0, 1, 2].map((t) => (
              <g key={t} transform={`translate(0 ${t * 28})`}>
                <rect width={80} height={24} rx={3} fill="#457b9d" stroke={C.ink} strokeWidth={2} />
                <rect x={t === 1 ? 10 : 40} width={45} height={24} fill="#1d3557" stroke={C.ink} strokeWidth={2} />
              </g>
            ))}
          </g>
          <Figure x={x + 420} y={y + 104} s={0.7} shirt="#1d3557" flip />
        </g>
      );
    case 'storeroom':
      return (
        <g>
          <rect x={x + 14} y={y + 22} width={28} height={84} rx={3} fill="#ced4da" stroke={C.ink} strokeWidth={3} /><line x1={x + 36} y1={y + 55} x2={x + 36} y2={y + 75} stroke={C.ink} strokeWidth={3} />
          <rect x={x + 55} y={y + 60} width={45} height={44} fill="#c9a26b" stroke={C.ink} strokeWidth={2} /><rect x={x + 65} y={y + 36} width={35} height={24} fill="#ddb892" stroke={C.ink} strokeWidth={2} />
          <rect x={x + 115} y={y + 66} width={50} height={38} fill="#e9d8a6" stroke={C.ink} strokeWidth={2} /><Label x={x + 140} y={y + 88} t="CHICKEN" size={8} color="#9b2226" />
          <rect x={x + 180} y={y + 62} width={42} height={42} fill="#1d3557" stroke={C.ink} strokeWidth={2} /><Label x={x + 201} y={y + 85} t="MILK" size={8} color="#fff" />
          <rect x={x + 235} y={y + 66} width={46} height={38} fill="#588157" stroke={C.ink} strokeWidth={2} /><Label x={x + 258} y={y + 88} t="LETTUCE" size={8} color="#fff" />
          <Figure x={x + 315} y={y + 104} s={0.7} shirt="#1d3557" flip />
        </g>
      );
    case 'laundry':
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${x + 20 + i * 55} ${y + 45})`}>
              <rect width={48} height={58} rx={4} fill="#f8f9fa" stroke={C.ink} strokeWidth={2.5} /><circle cx={24} cy={30} r={16} fill="#bde0fe" stroke={C.ink} strokeWidth={2.5} />
              {!has('water:low') && <circle cx={24} cy={30} r={12} fill="none" stroke="#2a6f97" strokeWidth={2} strokeDasharray="6 6" />}
            </g>
          ))}
          {has('water:low') && (
            <g><rect x={x + 30} y={y + 22} width={130} height={18} rx={3} fill={C.red} stroke={C.ink} strokeWidth={2} /><Label x={x + 95} y={y + 35} t="STOPPED · WATER RATIONING" size={8} color="#fff" /></g>
          )}
          <rect x={x + 195} y={y + 65} width={45} height={38} rx={3} fill="#adb5bd" stroke={C.ink} strokeWidth={2} />
          <circle cx={x + 205} cy={y + 105} r={4} fill="#343a40" stroke={C.ink} strokeWidth={1.5} /><circle cx={x + 230} cy={y + 105} r={4} fill="#343a40" stroke={C.ink} strokeWidth={1.5} />
          <Figure x={x + 260} y={y + 104} s={0.7} shirt="#1d3557" />
        </g>
      );
    case 'shower':
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${x + 20 + i * 75} ${y + 25})`}>
              <rect width={68} height={80} fill="#bde0fe" opacity={0.3} stroke={C.ink} strokeWidth={2} /><line x1={34} y1={6} x2={34} y2={18} stroke={C.ink} strokeWidth={3} /><circle cx={34} cy={20} r={5} fill="#495057" stroke={C.ink} strokeWidth={2} />
              {has('shower:on') && i === 1 && [-6, 0, 6].map((dx, si) => <line key={si} x1={34 + dx} y1={26} x2={34 + dx * 1.5} y2={75} stroke="#48cae4" strokeWidth={2} strokeDasharray="4 4" />)}
            </g>
          ))}
          <rect x={x + 245} y={y + 40} width={25} height={35} fill="#fff" stroke={C.ink} strokeWidth={2} /><Figure x={x + 125} y={y + 104} s={0.7} shirt="#1d3557" />
        </g>
      );
    case 'still':
      return (
        <g>
          {[0, 1].map((i) => (
            <g key={i} transform={`translate(${x + 30 + i * 85} ${y + 35})`}>
              <rect width={65} height={70} rx={16} fill="#adb5bd" stroke={C.ink} strokeWidth={3} /><line x1={32} y1={0} x2={32} y2={70} stroke={C.ink} strokeWidth={2} strokeDasharray="4 4" />
            </g>
          ))}
          <path d={`M ${x + 20} ${y + 50} H ${x + 210} V ${y + 80} H ${x + 310}`} stroke="#457b9d" strokeWidth={5} fill="none" />
          <g transform={`translate(${x + 230} ${y + 60})`}>
            <circle r={20} fill="#fff" stroke={C.ink} strokeWidth={2.5} /><path d="M -14 0 A 14 14 0 0 1 14 0" fill="none" stroke="#2a9d8f" strokeWidth={3} /><path d="M -14 0 A 14 14 0 0 0 -8 11" fill="none" stroke={C.red} strokeWidth={3} />
            <line x1={0} y1={0} x2={has('water:low') ? -12 : 0} y2={has('water:low') ? 5 : -14} stroke={C.ink} strokeWidth={2.5} />
            {has('water:low') && <circle cx={0} cy={-28} r={7} fill={C.red} opacity={0.4 + 0.6 * Math.sin(frame / 4)} />}
          </g>
          <Figure x={x + 295} y={y + 104} s={0.7} shirt="#1d3557" />
        </g>
      );
    case 'reactor':
      return (
        <g>
          <rect x={x + 12} y={y + 18} width={26} height={88} fill="#ffb703" stroke={C.ink} strokeWidth={3} />
          {[0, 1].map((i) => {
            const vx = x + 85 + i * 135, vy = y + 36;
            return (
              <g key={i}>
                <rect x={vx} y={vy} width={80} height={68} rx={14} fill="#495057" stroke={C.ink} strokeWidth={3.5} /><rect x={vx + 20} y={vy - 16} width={40} height={16} fill="#6c757d" stroke={C.ink} strokeWidth={2.5} />
                <circle cx={vx + 40} cy={vy + 34} r={18} fill="#ffd166" stroke={C.ink} strokeWidth={2} /><circle cx={vx + 40} cy={vy + 34} r={4} fill={C.ink} />
                {[0, 120, 240].map((d) => <path key={d} d="M 0 0 L 8 -16 A 18 18 0 0 1 -8 -16 Z" transform={`translate(${vx + 40} ${vy + 34}) rotate(${d})`} fill={C.ink} />)}
              </g>
            );
          })}
          <rect x={x + 340} y={y + 60} width={65} height={44} fill="#212529" stroke={C.ink} strokeWidth={2.5} />
          {[0, 1, 2].map((l) => <circle key={l} cx={x + 355 + l * 15} cy={y + 72} r={3} fill="#52ffb8" />)}
          <Figure x={x + 370} y={y + 104} s={0.7} shirt="#1d3557" flip />
        </g>
      );
    default:
      return null;
  }
};

export const Carrier: React.FC<WorldProps> = ({frame, tod, you, plane}) => {
  const [s0, s1] = SKY[tod];
  const dark = tod === 'night';
  const has = (k: string) => Boolean(plane && plane.split(' ').includes(k));
  const launchPos = 1260 + ((frame * 8) % 400);

  const wave = (baseY: number, speed: number, amp: number) => {
    let d = `M -600 ${baseY}`;
    for (let x = -600; x <= 3200; x += 100) d += ` q 50 ${Math.sin((frame * speed + x) / 70) * amp} 100 0`;
    return d;
  };

  return (
    <g>
      <defs>
        <linearGradient id="cr-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={s0} /><stop offset="1" stopColor={s1} /></linearGradient>
      </defs>
      <rect x={-600} y={-600} width={3800} height={1360} fill="url(#cr-sky)" />
      {dark && Array.from({length: 60}).map((_, i) => (
        <circle key={i} cx={-500 + ((i * 397) % 3600)} cy={-500 + ((i * 211) % 900)} r={1.5 + (i % 3)} fill="#fff" opacity={0.6 + 0.4 * Math.sin((frame + i * 11) / 10)} />
      ))}
      {!dark && <circle cx={tod === 'dawn' ? 2400 : 380} cy={tod === 'dawn' ? 560 : 120} r={50} fill="#ffd23f" stroke={C.ink} strokeWidth={5} />}

      {/* Ocean */}
      <rect x={-600} y={760} width={3800} height={700} fill={dark ? '#0d1b2a' : '#1d3557'} />
      <path d={wave(760, 0.05, 5)} stroke="#fff" strokeWidth={3} fill="none" opacity={0.6} />
      <path d={wave(780, 0.08, 6)} stroke="#48cae4" strokeWidth={2} fill="none" opacity={0.4} />

      {/* Pier & homeport at x < 150 */}
      <g>
        <rect x={-300} y={690} width={450} height={180} fill="#6c757d" stroke={C.ink} strokeWidth={4} /><line x1={-300} y1={690} x2={150} y2={690} stroke={C.ink} strokeWidth={5} />
        {[20, 110].map((bx) => <rect key={bx} x={bx} y={678} width={12} height={12} rx={2} fill="#212529" stroke={C.ink} strokeWidth={2} />)}
        <line x1={115} y1={684} x2={220} y2={740} stroke="#f4a261" strokeWidth={4} />
        <g transform="translate(10 690)">
          <rect x={-40} y={-48} width={40} height={48} rx={4} fill="#e63946" stroke={C.ink} strokeWidth={3} /><rect x={-135} y={-58} width={92} height={58} rx={3} fill="#f8f9fa" stroke={C.ink} strokeWidth={3} />
          {[-120, -60, -10].map((wx) => <circle key={wx} cx={wx} cy={0} r={8} fill="#212529" stroke={C.ink} strokeWidth={2} />)}
        </g>
        {has('trucks') && (
          <g transform="translate(-140 690)">
            <rect x={-40} y={-48} width={40} height={48} rx={4} fill="#2a9d8f" stroke={C.ink} strokeWidth={3} /><rect x={-135} y={-58} width={92} height={58} rx={3} fill="#ffd166" stroke={C.ink} strokeWidth={3} />
            {[-120, -60, -10].map((wx) => <circle key={wx} cx={wx} cy={0} r={8} fill="#212529" stroke={C.ink} strokeWidth={2} />)}
          </g>
        )}
        <g transform="translate(50 690)">
          <line x1={-15} y1={0} x2={0} y2={-90} stroke="#ffb703" strokeWidth={5} /><line x1={15} y1={0} x2={0} y2={-90} stroke="#ffb703" strokeWidth={5} />
          <rect x={-20} y={-115} width={40} height={25} fill="#ffb703" stroke={C.ink} strokeWidth={3} /><line x1={0} y1={-115} x2={75} y2={-175} stroke="#ffb703" strokeWidth={5} />
          <line x1={75} y1={-175} x2={75 + Math.sin(frame / 20) * 4} y2={-110} stroke={C.ink} strokeWidth={2} /><rect x={65 + Math.sin(frame / 20) * 4} y={-110} width={20} height={16} fill="#c9a26b" stroke={C.ink} strokeWidth={2} />
        </g>
        <Figure x={40 + Math.sin(frame / 25) * 35} y={690} s={0.7} shirt="#1d3557" flip={Math.cos(frame / 25) < 0} /><Label x={-20} y={650} t="PIER 14 · HOMEPORT" size={12} color="#f8f9fa" />
      </g>

      {/* Supply ship & RAS at x > 2450 */}
      <g>
        <path d="M 2480 760 L 2530 680 L 2850 680 L 2850 760 Z" fill="#495057" stroke={C.ink} strokeWidth={4} />
        <rect x={2680} y={620} width={120} height={60} fill="#6c757d" stroke={C.ink} strokeWidth={3} /><line x1={2700} y1={620} x2={2700} y2={560} stroke={C.ink} strokeWidth={4} />
        <line x1={2360} y1={520} x2={2600} y2={620} stroke={C.ink} strokeWidth={3.5} /><line x1={2360} y1={530} x2={2600} y2={630} stroke={C.ink} strokeWidth={2} />
        {has('ras') && (
          <g transform={`translate(${2600 - ((frame * 2.5) % 220)} ${620 - (((frame * 2.5) % 220) / 220) * 100})`}>
            <circle r={4} fill={C.ink} /><line y2={14} stroke={C.ink} strokeWidth={2} /><rect x={-10} y={14} width={20} height={16} rx={2} fill="#ddb892" stroke={C.ink} strokeWidth={2} />
          </g>
        )}
        <Label x={2680} y={740} t="USNS ARCTIC · T-AOE 8" size={13} color="#fff" />
      </g>

      {/* Carrier Hull & Cutaway */}
      <g>
        <path d="M 200 760 Q 230 840 380 840 H 2250 Q 2400 840 2430 760 Z" fill="#9b2226" stroke={C.ink} strokeWidth={5} />
        <circle cx={250} cy={825} r={14} fill="#ffb703" stroke={C.ink} strokeWidth={3} />
        <path d="M 180 300 L 210 760 H 2430 L 2440 300 Z" fill="#78909c" stroke={C.ink} strokeWidth={6} />
        <rect x={390} y={316} width={1780} height={416} fill="#495057" stroke={C.ink} strokeWidth={5} />
        {/* Hangar Bay */}
        <rect x={400} y={324} width={1760} height={130} fill="#dee2e6" stroke={C.ink} strokeWidth={4} />
        <line x1={400} y1={338} x2={2160} y2={338} stroke="#ffb703" strokeWidth={4} strokeDasharray="14 14" />
        <Jet x={600} y={438} s={0.8} folded /><Jet x={900} y={438} s={0.8} folded /><Jet x={1750} y={438} s={0.8} folded />
        <rect x={1280} y={426} width={50} height={24} rx={3} fill="#ffd166" stroke={C.ink} strokeWidth={2.5} /><circle cx={1292} cy={450} r={6} fill="#263238" stroke={C.ink} strokeWidth={2} /><circle cx={1318} cy={450} r={6} fill="#263238" stroke={C.ink} strokeWidth={2} />
        <rect x={1460} y={436} width={40} height={14} fill="#52796f" stroke={C.ink} strokeWidth={2} />
        <Figure x={1120} y={454} s={0.7} shirt="#1d3557" /><Figure x={1420} y={454} s={0.7} shirt="#1d3557" flip /><Label x={1150} y={350} t="HANGAR BAY" size={16} />

        {/* 10 Cutaway Rooms */}
        {ROOMS.map((r) => (
          <g key={r.id}>
            <rect x={r.x} y={r.y} width={r.w} height={r.h} fill={r.bg} stroke={C.ink} strokeWidth={4} />
            <RoomInterior id={r.id} x={r.x} y={r.y} frame={frame} has={has} />
            <Label x={r.x + r.w / 2} y={r.y + 16} t={r.label} size={11} color={C.navy} />
          </g>
        ))}

        {/* Flight Deck */}
        <rect x={160} y={288} width={2270} height={14} fill="#212529" stroke={C.ink} strokeWidth={4} />
        <line x1={160} y1={294} x2={2430} y2={294} stroke="#fff" strokeWidth={2} strokeDasharray="30 20" />
        {[470, 510, 550, 590].map((wx) => <line key={wx} x1={wx} y1={289} x2={wx + 30} y2={289} stroke="#adb5bd" strokeWidth={3} />)}
        {has('trap') ? (
          <g><Jet x={530} y={274} s={0.9} hook /><polyline points="470,290 510,284 570,290" stroke="#f4a261" strokeWidth={3.5} fill="none" /><circle cx={545} cy={290} r={8} fill="#fff" opacity={0.7} /></g>
        ) : (
          <Jet x={750} y={274} s={0.9} />
        )}

        {/* Catapult */}
        <line x1={1220} y1={290} x2={1680} y2={290} stroke="#495057" strokeWidth={4} />
        <polygon points="1190,290 1205,264 1215,264 1200,290" fill="#ced4da" stroke={C.ink} strokeWidth={2.5} />
        {has('launch') ? (
          <g><Jet x={launchPos} y={274} s={0.9} flame />{[0, 1, 2, 3].map((i) => <ellipse key={i} cx={1230 + i * 40} cy={280 - i * 6} rx={18 + i * 6} ry={10 + i * 3} fill="#fff" opacity={0.7 - i * 0.12} stroke={C.ink} strokeWidth={1.5} />)}</g>
        ) : (
          <g><Jet x={1260} y={274} s={0.9} /><path d="M 1240 288 q 6 -10 2 -20" stroke="#fff" strokeWidth={2} fill="none" opacity={0.6} /></g>
        )}

        {/* Flight deck crew jerseys */}
        <Figure x={1230} y={288} s={0.7} shirt="#ffd166" pose="sit" /><Figure x={1360} y={288} s={0.7} shirt="#2a9d8f" /><Figure x={1080} y={288} s={0.7} shirt="#e63946" /><Figure x={950} y={288} s={0.7} shirt="#7209b7" />

        {/* Island Tower */}
        <g>
          <rect x={2020} y={160} width={180} height={128} fill="#78909c" stroke={C.ink} strokeWidth={4} />
          <polygon points="2020,165 2045,145 2085,145 2085,165" fill="#bde0fe" stroke={C.ink} strokeWidth={2.5} /><rect x={2095} y={170} width={90} height={16} rx={2} fill="#bde0fe" stroke={C.ink} strokeWidth={2.5} />
          <Label x={2065} y={242} t="68" size={38} color="#fff" />
          <line x1={2110} y1={160} x2={2110} y2={85} stroke={C.ink} strokeWidth={4} /><polygon points="2100,160 2120,160 2110,110" fill="none" stroke={C.ink} strokeWidth={2.5} />
          <rect x={2090} y={85} width={40} height={10} rx={2} fill="#ffb703" stroke={C.ink} strokeWidth={2} transform={`rotate(${Math.sin(frame / 12) * 25} 2110 90)`} />
          <circle cx={2110} cy={78} r={7} fill="#fff" stroke={C.ink} strokeWidth={2} /><circle cx={2110} cy={68} r={4} fill={C.red} opacity={0.4 + 0.6 * Math.sin(frame / 8)} />
        </g>
      </g>

      {/* Viewer avatar "you" */}
      {you && YOU[you] && (
        <g>
          <Figure x={YOU[you][0]} y={YOU[you][1]} s={you === 'rack' ? 0.75 : 0.85} cap shirt={C.red} pose={YOU[you][2]} flip={you === 'deck'} />
          {you === 'storeroom' && <rect x={605} y={678} width={24} height={20} fill="#d4a373" stroke={C.ink} strokeWidth={2} />}
        </g>
      )}
      {dark && <rect x={-600} y={-600} width={3800} height={2100} fill="#070b1f" opacity={0.15} />}
    </g>
  );
};
