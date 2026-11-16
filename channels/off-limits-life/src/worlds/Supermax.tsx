import React from 'react';
import {C, Figure, Label} from '../ui';
import type {Tod} from './SouthPole';
import type {WorldProps} from './registry';

/** IX008 world: ADX Florence Federal Supermax (Fremont County, Colorado).
 *  Left x 0..1100: Exterior desert compound, Rockies, razor fences, tower, bus, outdoor rec cage.
 *  Right x 1120..2560: Cutaway housing unit, control booth, range corridor, detailed cell, indoor gym, visiting.
 */
export const VIEWS: Record<string, [number, number, number]> = {
  wide: [1300, 550, 0.8],
  mountains: [520, 280, 1.8],
  fence: [370, 460, 3.2],
  tower: [480, 320, 2.6],
  bus: [170, 500, 3.4],
  block: [1880, 680, 1.25],
  control: [1360, 440, 3.4],
  clock: [1370, 385, 7.0],
  range: [1530, 740, 2.4],
  cart: [1410, 770, 4.0],
  door: [1890, 720, 4.2],
  slot: [1872, 725, 8.5],
  cell: [2210, 700, 2.8],
  bed: [2390, 800, 5.0],
  desk: [2180, 800, 5.2],
  toilet: [2040, 780, 5.5],
  shower: [1975, 755, 3.6],
  tv: [2240, 640, 6.5],
  window: [2485, 625, 5.2],
  rec: [950, 440, 2.7],
  sky: [950, 310, 4.8],
  gym: [1380, 975, 3.2],
  visit: [1710, 975, 3.2],
};

export const viewOf = (name: string, _tod: Tod): [number, number, number] => VIEWS[name] ?? VIEWS.wide;

const SKY: Record<Tod, [string, string]> = {
  day: ['#4ea8de', '#fde7c2'],
  dusk: ['#480ca8', '#f77f00'],
  night: ['#050814', '#192231'],
  dawn: ['#2b2d42', '#f4a261'],
};

const YOU_SPOTS: Record<string, [number, number, 'stand' | 'sit' | 'lie']> = {
  cell: [2100, 860, 'stand'],
  bed: [2330, 792, 'lie'],
  desk: [2180, 860, 'sit'],
  window: [2460, 860, 'stand'],
  shower: [1960, 860, 'stand'],
  rec: [950, 540, 'stand'],
  gym: [1380, 1060, 'stand'],
  visit: [1770, 1060, 'sit'],
  bus: [170, 540, 'stand'],
  range: [1470, 860, 'stand'],
};

export const Supermax: React.FC<WorldProps> = ({frame, tod, you, plane, dur: _dur}) => {
  const [s0, s1] = SKY[tod];
  const dark = tod === 'night';
  const has = (k: string) => Boolean(plane && plane.includes(k));

  return (
    <g>
      <defs>
        <linearGradient id="sm-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={s0} />
          <stop offset="1" stopColor={s1} />
        </linearGradient>
      </defs>

      {/* Sky backdrop */}
      <rect x={-400} y={-400} width={3800} height={940} fill="url(#sm-sky)" />
      {/* earth everywhere below ground so no view shows black */}
      <rect x={-400} y={540} width={3800} height={1100} fill="#8a6f52" />
      {dark &&
        Array.from({length: 45}).map((_, i) => (
          <circle key={i} cx={(i * 79) % 1150} cy={(i * 43) % 360} r={1.2 + (i % 2)} fill="#fff" opacity={0.3 + 0.5 * Math.sin((frame + i * 7) / 10)} />
        ))}
      {!dark && <circle cx={tod === 'day' ? 700 : 200} cy={tod === 'day' ? 140 : 420} r={46} fill="#ffd166" stroke={C.ink} strokeWidth={4} />}

      {/* Colorado Rockies Mountains */}
      <path d="M -100 540 L -60 420 L 50 260 L 140 340 L 250 200 L 370 320 L 500 180 L 620 300 L 750 220 L 890 350 L 1020 240 L 1150 540 Z" fill={dark ? '#222638' : '#6d597a'} stroke={C.ink} strokeWidth={4} />
      <polygon points="50,260 25,300 45,295 55,305 75,295" fill="#f8f9fa" />
      <polygon points="250,200 210,250 240,240 260,255 290,245" fill="#f8f9fa" />
      <polygon points="500,180 460,230 490,225 515,240 545,225" fill="#f8f9fa" />
      <polygon points="750,220 720,260 745,255 765,265 785,250" fill="#f8f9fa" />
      <polygon points="1020,240 990,280 1015,275 1035,285 1055,270" fill="#f8f9fa" />

      {/* Exterior desert ground */}
      <rect x={-100} y={540} width={1250} height={560} fill="#c4a47c" stroke={C.ink} strokeWidth={4} />
      <line x1={-100} y1={540} x2={1150} y2={540} stroke={C.ink} strokeWidth={5} />
      {[60, 280, 680, 780].map((rx) => (
        <g key={rx} transform={`translate(${rx} 540)`}>
          <ellipse cx={0} cy={-7} rx={13} ry={7} fill="#7f8358" stroke={C.ink} strokeWidth={2} />
        </g>
      ))}

      {/* Double razor-wire security fence */}
      {[340, 400].map((fx) => (
        <g key={fx}>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line key={i} x1={fx - 120 + i * 40} y1={360} x2={fx - 120 + i * 40} y2={540} stroke="#495057" strokeWidth={3.5} />
          ))}
          <rect x={fx - 130} y={360} width={260} height={180} fill="#fff" fillOpacity={0.06} stroke={C.ink} strokeWidth={2.5} />
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1={fx - 130} y1={370 + i * 36} x2={fx + 130} y2={370 + i * 36} stroke="#6c757d" strokeWidth={1.5} />
          ))}
          {Array.from({length: 12}).map((_, i) => (
            <circle key={i} cx={fx - 120 + i * 22} cy={352} r={14} fill="none" stroke="#adb5bd" strokeWidth={2.5} />
          ))}
        </g>
      ))}
      <rect x={352} y={424} width={36} height={20} rx={2} fill="#ffd166" stroke={C.ink} strokeWidth={1.5} />
      <Label x={370} y={438} t="RESTRICTED" size={6} color={C.red} />

      {/* Prison bus at gate */}
      <rect x={260} y={460} width={10} height={80} fill="#495057" stroke={C.ink} strokeWidth={3} />
      <line x1={260} y1={500} x2={190} y2={500} stroke={C.red} strokeWidth={5} />
      <g transform="translate(170 540)">
        <rect x={-75} y={-64} width={140} height={52} rx={6} fill="#f8f9fa" stroke={C.ink} strokeWidth={3.5} />
        <rect x={-75} y={-36} width={140} height={10} fill="#1d3557" />
        {[-60, -36, -12, 12, 36].map((wx) => (
          <g key={wx}>
            <rect x={wx} y={-56} width={16} height={14} rx={2} fill="#343a40" stroke={C.ink} strokeWidth={2} />
            <line x1={wx + 8} y1={-56} x2={wx + 8} y2={-42} stroke="#ced4da" strokeWidth={1.5} />
          </g>
        ))}
        <circle cx={-45} cy={-6} r={13} fill="#212529" stroke={C.ink} strokeWidth={3} />
        <circle cx={40} cy={-6} r={13} fill="#212529" stroke={C.ink} strokeWidth={3} />
        <circle cx={-45} cy={-6} r={5} fill="#adb5bd" />
        <circle cx={40} cy={-6} r={5} fill="#adb5bd" />
        <Label x={-5} y={-28} t="U.S. MARSHALS" size={8} color="#f8f9fa" />
      </g>

      {/* Guard Tower */}
      <g transform="translate(480 540)">
        <polygon points="-24,0 -16,-270 16,-270 24,0" fill="#6c757d" stroke={C.ink} strokeWidth={4} />
        {[-70, -135, -200].map((ly) => (
          <line key={ly} x1={-20} y1={ly} x2={20} y2={ly} stroke={C.ink} strokeWidth={2.5} />
        ))}
        <polygon points="-42,-270 -48,-330 48,-330 42,-270" fill="#495057" stroke={C.ink} strokeWidth={4} />
        <polygon points="-44,-315 -38,-275 38,-275 44,-315" fill="#2b2d42" stroke={C.ink} strokeWidth={2} />
        <circle cx={Math.sin(frame / 25) * 3} cy={-295} r={7} fill="#fff" stroke={C.ink} strokeWidth={2} />
        <circle cx={-36} cy={-268} r={7} fill="#ffd166" stroke={C.ink} strokeWidth={2} />
        <polygon points={`-36,-268 ${-220 + Math.sin(frame / 35) * 25},0 ${-120 + Math.sin(frame / 35) * 25},0`} fill="#ffd166" opacity={dark ? 0.22 : 0.08} />
        <line x1={0} y1={-330} x2={0} y2={-362} stroke={C.ink} strokeWidth={3} />
        <circle cx={0} cy={-364} r={3} fill={C.red} />
      </g>

      {/* Outdoor Rec Cage ("Dog Run") */}
      <g>
        <rect x={830} y={320} width={240} height={220} fill="#adb5bd" stroke={C.ink} strokeWidth={5} />
        <line x1={830} y1={390} x2={1070} y2={390} stroke="#6c757d" strokeWidth={2} />
        <line x1={830} y1={460} x2={1070} y2={460} stroke="#6c757d" strokeWidth={2} />
        <line x1={950} y1={320} x2={950} y2={540} stroke="#6c757d" strokeWidth={2} />
        <rect x={830} y={310} width={240} height={16} fill="#6c757d" stroke={C.ink} strokeWidth={3.5} />
        {Array.from({length: 13}).map((_, i) => (
          <line key={i} x1={845 + i * 17} y1={310} x2={845 + i * 17} y2={326} stroke="#fff" strokeWidth={2} />
        ))}
        <rect x={820} y={310} width={18} height={230} fill="#495057" stroke={C.ink} strokeWidth={4} />
        <rect x={1062} y={310} width={18} height={230} fill="#495057" stroke={C.ink} strokeWidth={4} />
        <rect x={850} y={430} width={6} height={60} fill="#343a40" stroke={C.ink} strokeWidth={2} />
        <line x1={850} y1={440} x2={885} y2={440} stroke="#343a40" strokeWidth={4} strokeLinecap="round" />
        <Label x={950} y={355} t="REC PEN (DOG RUN)" size={11} color="#343a40" />
      </g>

      {/* Cutaway housing complex bunker */}
      <rect x={1120} y={240} width={1580} height={900} fill="#6c757d" stroke={C.ink} strokeWidth={6} />
      <polygon points="1070,540 1120,240 2550,240 2560,540" fill="#9c6644" stroke={C.ink} strokeWidth={4} opacity={0.5} />
      <rect x={1120} y={240} width={1430} height={25} fill="#495057" stroke={C.ink} strokeWidth={4} />
      <Label x={1840} y={258} t="HOUSING UNIT H · ADX FLORENCE" size={13} color="#f8f9fa" />

      {/* Sally Port Entrance */}
      <rect x={1140} y={330} width={120} height={210} fill="#dee2e6" stroke={C.ink} strokeWidth={4} />
      <rect x={1145} y={380} width={22} height={155} fill="#495057" stroke={C.ink} strokeWidth={3} />
      <rect x={1233} y={380} width={22} height={155} fill="#495057" stroke={C.ink} strokeWidth={3} />
      <Label x={1200} y={360} t="SALLY PORT" size={10} color={C.navy} />

      {/* Control Room & Wall Clock */}
      <rect x={1260} y={330} width={220} height={210} fill="#ced4da" stroke={C.ink} strokeWidth={4} />
      <rect x={1270} y={340} width={200} height={70} fill="#1d3557" stroke={C.ink} strokeWidth={3} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${1280 + i * 48} 348)`}>
          <rect x={0} y={0} width={42} height={32} fill="#0d1b2a" stroke="#415a77" strokeWidth={2} />
          <line x1={6} y1={12} x2={36} y2={12} stroke="#778da9" strokeWidth={1} />
          <line x1={6} y1={20} x2={26} y2={20} stroke="#778da9" strokeWidth={1} />
          <circle cx={35} cy={6} r={2} fill={frame % 30 < 15 ? C.red : '#2ec4b6'} />
        </g>
      ))}
      <g transform="translate(1370 385)">
        <circle r={24} fill="#fff" stroke={C.ink} strokeWidth={3.5} />
        {[0, 90, 180, 270].map((deg) => (
          <line key={deg} x1={0} y1={-21} x2={0} y2={-17} stroke={C.ink} strokeWidth={2} transform={`rotate(${deg})`} />
        ))}
        <line x1={0} y1={0} x2={0} y2={-11} stroke={C.ink} strokeWidth={3} strokeLinecap="round" transform="rotate(70)" />
        <line x1={0} y1={0} x2={0} y2={-16} stroke={C.ink} strokeWidth={2} strokeLinecap="round" transform="rotate(220)" />
        <line x1={0} y1={3} x2={0} y2={-18} stroke={C.red} strokeWidth={1.5} strokeLinecap="round" transform={`rotate(${(frame * 6) % 360})`} />
        <circle r={2.5} fill={C.ink} />
      </g>
      <rect x={1270} y={460} width={130} height={50} fill="#495057" stroke={C.ink} strokeWidth={3} />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={1290 + i * 20} cy={480} r={4} fill={['#ffd166', '#06d6a0', '#ef476f'][i]} />
      ))}
      <Figure x={1430} y={510} s={0.8} pose="sit" shirt="#22223b" flip />
      <Label x={1360} y={435} t="CENTRAL CONTROL" size={9} color="#f8f9fa" />

      {/* Upper Catwalk */}
      <rect x={1480} y={330} width={360} height={210} fill="#e9ecef" stroke={C.ink} strokeWidth={4} />
      <rect x={1480} y={510} width={360} height={30} fill="#6c757d" stroke={C.ink} strokeWidth={3} />
      <line x1={1480} y1={465} x2={1840} y2={465} stroke={C.ink} strokeWidth={3} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1={1500 + i * 60} y1={465} x2={1500 + i * 60} y2={510} stroke={C.ink} strokeWidth={2.5} />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${1520 + i * 105} 370)`}>
          <rect x={0} y={0} width={65} height={135} fill="#495057" stroke={C.ink} strokeWidth={3} />
          <rect x={22} y={20} width={20} height={30} fill="#8ecae6" stroke={C.ink} strokeWidth={2} />
          <rect x={12} y={75} width={40} height={8} fill="#212529" stroke={C.ink} strokeWidth={1.5} />
        </g>
      ))}

      {/* Lower Range Corridor */}
      <rect x={1140} y={560} width={710} height={300} fill="#dee2e6" stroke={C.ink} strokeWidth={5} />
      <rect x={1140} y={845} width={710} height={15} fill="#ced4da" stroke={C.ink} strokeWidth={3} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${1220 + i * 160} 560)`}>
          <rect x={0} y={0} width={80} height={10} fill="#f8f9fa" stroke={C.ink} strokeWidth={2} />
          <polygon points="0,10 80,10 95,200 -15,200" fill="#fff" opacity={0.07} />
        </g>
      ))}
      <g transform="translate(1530 568)">
        <rect x={-8} y={-8} width={16} height={8} fill="#343a40" />
        <circle cx={0} cy={4} r={8} fill={C.red} stroke={C.ink} strokeWidth={1.5} />
        {has('lockdown') && <circle cx={0} cy={4} r={35} fill={C.red} opacity={0.4 + 0.3 * Math.sin(frame * 0.7)} />}
      </g>
      {[0, 1].map((i) => (
        <g key={i} transform={`translate(${1200 + i * 140} 650)`}>
          <rect x={0} y={0} width={75} height={195} fill="#495057" stroke={C.ink} strokeWidth={3.5} />
          <rect x={26} y={24} width={22} height={36} fill="#8ecae6" stroke={C.ink} strokeWidth={2} />
          <rect x={14} y={110} width={46} height={10} fill="#212529" stroke={C.ink} strokeWidth={2} />
        </g>
      ))}
      <g transform={`translate(${1400 + Math.sin(frame / 20) * 8} 860)`}>
        <rect x={-35} y={-60} width={68} height={50} rx={4} fill="#b0bec5" stroke={C.ink} strokeWidth={3} />
        <line x1={-35} y1={-35} x2={33} y2={-35} stroke={C.ink} strokeWidth={2} />
        {[-26, 4].map((tx) => (
          <rect key={tx} x={tx} y={-52} width={24} height={12} rx={2} fill="#e76f51" stroke={C.ink} strokeWidth={1.5} />
        ))}
        {[-26, 4].map((tx) => (
          <rect key={tx} x={tx} y={-28} width={24} height={12} rx={2} fill="#2a9d8f" stroke={C.ink} strokeWidth={1.5} />
        ))}
        <path d="M -35 -50 L -48 -50 L -48 -20" stroke={C.ink} strokeWidth={3} fill="none" />
        <circle cx={-25} cy={-5} r={6} fill="#212529" stroke={C.ink} strokeWidth={2} />
        <circle cx={25} cy={-5} r={6} fill="#212529" stroke={C.ink} strokeWidth={2} />
        <Figure x={-65} y={0} s={0.82} shirt="#22223b" />
      </g>
      <Label x={1600} y={600} t="UNIT H · RANGE CORRIDOR" size={13} color="#495057" />

      {/* Featured Supermax Cell */}
      <rect x={1850} y={520} width={680} height={340} fill="#e9ecef" stroke={C.ink} strokeWidth={5} />
      <line x1={1850} y1={680} x2={2530} y2={680} stroke="#ced4da" strokeWidth={2} />
      <line x1={2000} y1={520} x2={2000} y2={860} stroke="#ced4da" strokeWidth={2} />
      <line x1={2280} y1={520} x2={2280} y2={860} stroke="#ced4da" strokeWidth={2} />
      <rect x={1850} y={845} width={680} height={15} fill="#ced4da" stroke={C.ink} strokeWidth={2.5} />

      {/* Cell Sally Port Door & Slot */}
      <rect x={1850} y={540} width={30} height={305} fill="#495057" stroke={C.ink} strokeWidth={3.5} />
      <rect x={1855} y={580} width={18} height={35} fill="#8ecae6" stroke={C.ink} strokeWidth={2} />
      <rect x={1910} y={540} width={16} height={305} fill="none" stroke={C.ink} strokeWidth={3} />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line key={i} x1={1918} y1={550 + i * 36} x2={1918} y2={575 + i * 36} stroke="#343a40" strokeWidth={3} />
      ))}
      <g transform="translate(1870 725)">
        <rect x={-20} y={-10} width={40} height={20} rx={2} fill="#212529" stroke={C.ink} strokeWidth={2.5} />
        <rect x={-16} y={-6} width={32} height={12} fill="#343a40" />
        {has('tray') && (
          <g transform="translate(-14 1)">
            <rect x={-26} y={-9} width={52} height={16} rx={2} fill="#dee2e6" stroke={C.ink} strokeWidth={2} />
            <rect x={-22} y={-6} width={14} height={10} rx={1} fill="#f4a261" stroke={C.ink} strokeWidth={1} />
            <rect x={-6} y={-6} width={12} height={10} rx={1} fill="#06d6a0" stroke={C.ink} strokeWidth={1} />
            <rect x={8} y={-6} width={14} height={10} rx={1} fill="#ffd166" stroke={C.ink} strokeWidth={1} />
          </g>
        )}
        {has('cuffs') && (
          <g transform="translate(0 3)">
            <rect x={-14} y={-6} width={10} height={14} rx={3} fill="#f1c0a0" stroke={C.ink} strokeWidth={1.5} />
            <rect x={4} y={-6} width={10} height={14} rx={3} fill="#f1c0a0" stroke={C.ink} strokeWidth={1.5} />
            <rect x={-6} y={-2} width={12} height={4} fill="#ced4da" stroke={C.ink} strokeWidth={1.5} />
          </g>
        )}
      </g>

      {/* Shower Stall */}
      <rect x={1935} y={540} width={70} height={305} fill="#d8f3dc" stroke={C.ink} strokeWidth={3} />
      <rect x={1998} y={830} width={8} height={25} fill="#6c757d" stroke={C.ink} strokeWidth={2} />
      <polygon points="1936,600 1952,606 1936,612" fill="#adb5bd" stroke={C.ink} strokeWidth={2} />
      <circle cx={1944} cy={670} r={5} fill={C.red} stroke={C.ink} strokeWidth={2} />
      <ellipse cx={1968} cy={850} rx={12} ry={4} fill="#495057" stroke={C.ink} strokeWidth={1.5} />
      {has('shower:on') && (
        <g>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line key={i} x1={1946 + i * 9} y1={612} x2={1944 + i * 10} y2={840} stroke="#48cae4" strokeWidth={3} strokeDasharray="14 10" strokeDashoffset={-frame * 9 - i * 7} />
          ))}
        </g>
      )}

      {/* Combi Toilet-Sink Unit */}
      <g transform="translate(2045 860)">
        <rect x={-26} y={-130} width={52} height={130} rx={4} fill="#b0bec5" stroke={C.ink} strokeWidth={3} />
        <ellipse cx={0} cy={-112} rx={20} ry={8} fill="#cfd8dc" stroke={C.ink} strokeWidth={2} />
        <circle cx={0} cy={-124} r={3.5} fill="#78909c" />
        <circle cx={-14} cy={-124} r={2.5} fill="#455a64" />
        <circle cx={14} cy={-124} r={2.5} fill="#455a64" />
        <ellipse cx={0} cy={-50} rx={22} ry={12} fill="#cfd8dc" stroke={C.ink} strokeWidth={2.5} />
        <ellipse cx={0} cy={-50} rx={14} ry={7} fill="#90a4ae" stroke={C.ink} strokeWidth={1.5} />
        <line x1={-26} y1={-20} x2={26} y2={-20} stroke="#78909c" strokeWidth={2} />
      </g>

      {/* Concrete Desk & Stool */}
      <g transform="translate(2190 860)">
        <rect x={-55} y={-75} width={110} height={16} rx={3} fill="#adb5bd" stroke={C.ink} strokeWidth={3} />
        <polygon points="-55,-59 -40,-35 -40,-59" fill="#8d99ae" stroke={C.ink} strokeWidth={2} />
        <rect x={-14} y={-45} width={28} height={45} rx={2} fill="#adb5bd" stroke={C.ink} strokeWidth={3} />
        <ellipse cx={0} cy={-45} rx={18} ry={6} fill="#ced4da" stroke={C.ink} strokeWidth={2.5} />
        <rect x={-35} y={-83} width={28} height={8} fill="#fefae0" stroke={C.ink} strokeWidth={1.5} />
        <line x1={-30} y1={-79} x2={-12} y2={-79} stroke="#495057" strokeWidth={1} />
      </g>

      {/* Small B&W TV on Concrete Shelf */}
      <g transform="translate(2245 660)">
        <rect x={-32} y={5} width={64} height={12} rx={2} fill="#adb5bd" stroke={C.ink} strokeWidth={2.5} />
        <rect x={-26} y={-42} width={52} height={46} rx={4} fill="#212529" stroke={C.ink} strokeWidth={3} />
        <rect x={-28} y={-44} width={56} height={50} rx={6} fill="#a8dadc" fillOpacity={0.15} stroke="#6c757d" strokeWidth={1.5} />
        <rect x={-21} y={-37} width={35} height={28} rx={3} fill={has('tv:on') ? '#caf0f8' : '#14213d'} stroke={C.ink} strokeWidth={2} />
        {has('tv:on') && (
          <g>
            <line x1={-18} y1={-28} x2={10} y2={-28} stroke="#03045e" strokeWidth={1.5} opacity={0.6 + 0.4 * Math.sin(frame * 1.5)} />
            <line x1={-18} y1={-20} x2={10} y2={-20} stroke="#03045e" strokeWidth={1.5} opacity={0.6 + 0.4 * Math.sin(frame * 1.5 + 1)} />
            <polygon points="14,-23 200,-50 200,160 14,0" fill="#90e0ef" opacity={0.12 + 0.06 * Math.sin(frame * 1.2)} />
          </g>
        )}
        <circle cx={18} cy={-30} r={2.5} fill="#ced4da" />
        <circle cx={18} cy={-20} r={2.5} fill="#ced4da" />
      </g>

      {/* Concrete Bed Slab */}
      <g transform="translate(2405 860)">
        <rect x={-115} y={-60} width={230} height={60} fill="#adb5bd" stroke={C.ink} strokeWidth={3.5} />
        <line x1={-115} y1={-30} x2={115} y2={-30} stroke="#8d99ae" strokeWidth={2} />
        <rect x={-112} y={-76} width={224} height={16} rx={4} fill="#457b9d" stroke={C.ink} strokeWidth={2.5} />
        <ellipse cx={-85} cy={-82} rx={22} ry={7} fill="#f8f9fa" stroke={C.ink} strokeWidth={2} />
        <rect x={40} y={-84} width={65} height={12} rx={3} fill="#6c757d" stroke={C.ink} strokeWidth={2} />
        <line x1={40} y1={-78} x2={105} y2={-78} stroke="#ffd166" strokeWidth={2} />
      </g>

      {/* 4-inch Slit Window */}
      <g transform="translate(2490 620)">
        <polygon points="-25,-75 25,-75 25,75 -25,75 -15,65 -15,-65" fill="#ced4da" stroke={C.ink} strokeWidth={3} />
        <rect x={-5} y={-68} width={18} height={136} fill="url(#sm-sky)" stroke={C.ink} strokeWidth={3} />
        <line x1={4} y1={-68} x2={4} y2={68} stroke="#212529" strokeWidth={3} />
        <line x1={-5} y1={0} x2={13} y2={0} stroke="#212529" strokeWidth={2} />
      </g>

      <rect x={2160} y={520} width={80} height={12} fill="#f8f9fa" stroke={C.ink} strokeWidth={2} />
      {has('dark') && (
        <g>
          <rect x={1910} y={520} width={620} height={340} fill="#050814" opacity={0.65} />
          <circle cx={2200} cy={526} r={3} fill="#48cae4" />
        </g>
      )}
      <Label x={2210} y={550} t="CELL 101 · 7 x 12 FT" size={12} color="#6c757d" />

      {/* Facilities: Gym & Visiting */}
      <rect x={1120} y={860} width={1430} height={20} fill="#495057" stroke={C.ink} strokeWidth={4} />

      {/* Indoor Rec Room (Gym) */}
      <rect x={1140} y={880} width={380} height={200} fill="#dee2e6" stroke={C.ink} strokeWidth={4} />
      <line x1={1140} y1={970} x2={1520} y2={970} stroke="#ced4da" strokeWidth={2} />
      <g transform="translate(1380 950)">
        <rect x={-45} y={-8} width={10} height={25} fill="#212529" stroke={C.ink} strokeWidth={2} />
        <rect x={35} y={-8} width={10} height={25} fill="#212529" stroke={C.ink} strokeWidth={2} />
        <line x1={-50} y1={0} x2={50} y2={0} stroke="#212529" strokeWidth={5} strokeLinecap="round" />
      </g>
      <line x1={1180} y1={1040} x2={1480} y2={1040} stroke="#fff" strokeWidth={4} strokeDasharray="16 12" />
      <Label x={1380} y={915} t="INDOOR REC ROOM (EMPTY CONCRETE)" size={10} color="#495057" />

      {/* Non-Contact Video / Visiting Booth */}
      <rect x={1540} y={880} width={320} height={200} fill="#e9ecef" stroke={C.ink} strokeWidth={4} />
      <line x1={1700} y1={880} x2={1700} y2={1080} stroke="#1d3557" strokeWidth={7} />
      <rect x={1696} y={930} width={8} height={100} fill="#a8dadc" fillOpacity={0.4} stroke={C.ink} strokeWidth={2} />
      <g transform="translate(1630 1060)">
        <rect x={-8} y={-35} width={16} height={35} fill="#495057" stroke={C.ink} strokeWidth={2} />
        <ellipse cx={0} cy={-35} rx={18} ry={6} fill="#adb5bd" stroke={C.ink} strokeWidth={2} />
      </g>
      <g transform="translate(1770 1060)">
        <rect x={-8} y={-35} width={16} height={35} fill="#495057" stroke={C.ink} strokeWidth={2} />
        <ellipse cx={0} cy={-35} rx={18} ry={6} fill="#adb5bd" stroke={C.ink} strokeWidth={2} />
      </g>
      <g transform="translate(1670 960)">
        <rect x={-10} y={-20} width={18} height={32} rx={2} fill="#ced4da" stroke={C.ink} strokeWidth={2} />
        <path d="M 0 5 Q -10 25 -10 10" stroke={C.ink} strokeWidth={2} fill="none" />
        <rect x={-16} y={-10} width={8} height={24} rx={3} fill="#212529" />
      </g>
      <g transform="translate(1730 960)">
        <rect x={-8} y={-20} width={18} height={32} rx={2} fill="#ced4da" stroke={C.ink} strokeWidth={2} />
        <path d="M 0 5 Q 10 25 10 10" stroke={C.ink} strokeWidth={2} fill="none" />
        <rect x={8} y={-10} width={8} height={24} rx={3} fill="#212529" />
      </g>
      <rect x={1790} y={930} width={45} height={35} rx={3} fill="#1d3557" stroke={C.ink} strokeWidth={2.5} />
      <rect x={1795} y={935} width={35} height={25} rx={2} fill="#457b9d" />
      <Label x={1700} y={905} t="NON-CONTACT VISITING BOOTH" size={9} color="#495057" />

      {/* Utility run */}
      <rect x={1880} y={880} width={660} height={200} fill="#343a40" stroke={C.ink} strokeWidth={4} />
      <line x1={1880} y1={920} x2={2540} y2={920} stroke="#e76f51" strokeWidth={6} />
      <line x1={1880} y1={940} x2={2540} y2={940} stroke="#48cae4" strokeWidth={6} />
      <line x1={1880} y1={960} x2={2540} y2={960} stroke="#adb5bd" strokeWidth={10} />
      <Label x={2210} y={1020} t="UTILITY RUN · PLUMBING · SECURITY CHASE" size={12} color="#ced4da" />

      {/* Viewer character "you" */}
      {you && YOU_SPOTS[you] && (
        <Figure
          x={YOU_SPOTS[you][0]}
          y={YOU_SPOTS[you][1]}
          s={0.9}
          pose={YOU_SPOTS[you][2]}
          shirt={C.red}
          cap
        />
      )}
      {you === 'range' && <Figure x={1520} y={860} s={0.88} shirt="#22223b" flip />}

      {/* Snow effect outside */}
      {has('snow') &&
        Array.from({length: 50}).map((_, i) => (
          <circle key={i} cx={(i * 53 + frame * 2) % 1150} cy={(i * 37 + frame * 4) % 550} r={1.5 + (i % 3)} fill="#fff" opacity={0.8} />
        ))}

      {dark && <rect x={-200} y={-400} width={3000} height={1600} fill="#050814" opacity={0.18} pointerEvents="none" />}
    </g>
  );
};
