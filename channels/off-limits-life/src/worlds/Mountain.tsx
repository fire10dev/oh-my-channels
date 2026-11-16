import React from 'react';
import {C, Figure, Label} from '../ui';
import type {WorldProps} from './registry';
import type {Tod} from './SouthPole';

/** IX world: Cheyenne Mountain Complex, Colorado. Granite mountain cutaway, blast doors, 3-storey bunker on giant coil springs. */
export const VIEWS: Record<string, [number, number, number]> = {
  wide: [1300, 550, 0.78], mountain: [480, 380, 1.4], gate: [260, 560, 3.8],
  tunnel: [490, 545, 3.2], door: [740, 545, 3.4], cave: [1400, 550, 1.3],
  springs: [1370, 780, 2.6], spring: [1160, 785, 5.5], gap: [875, 580, 3.6],
  command: [1155, 450, 4.8], dining: [1155, 565, 4.8], clinic: [1610, 565, 4.8],
  gym: [1380, 685, 4.8], hall: [1610, 450, 4.8], reservoir: [2220, 780, 2.7],
  power: [2220, 470, 2.8], radar: [750, 130, 3.8],
};

export const viewOf = (name: string, _tod: Tod): [number, number, number] => VIEWS[name] ?? VIEWS.wide;

const SKY: Record<Tod, [string, string]> = {
  day: ['#5aa9e6', '#cbe3fb'], dusk: ['#3a2e56', '#f4a261'],
  night: ['#0b1026', '#1d2a44'], dawn: ['#283618', '#f6bd60'],
};

const YOU: Record<string, [number, number, 'stand' | 'sit' | 'lie']> = {
  gate: [225, 595, 'stand'], tunnel: [450, 585, 'stand'], door: [710, 585, 'stand'],
  command: [1120, 470, 'sit'], dining: [1110, 600, 'sit'], gym: [1340, 715, 'stand'],
  clinic: [1680, 595, 'lie'], hall: [1540, 475, 'stand'], gap: [880, 630, 'stand'],
  springs: [1020, 745, 'stand'], spring: [1110, 785, 'stand'], reservoir: [2080, 720, 'stand'],
  power: [2080, 535, 'stand'], radar: [710, 160, 'stand'], mountain: [140, 600, 'stand'],
  cave: [900, 630, 'stand'], wide: [1300, 745, 'stand'],
};

const PineTree: React.FC<{x: number; y: number; s?: number; frame: number}> = ({x, y, s = 1, frame}) => (
  <g transform={`translate(${x} ${y}) scale(${s}) rotate(${Math.sin((frame + x) / 22) * 1.5})`}>
    <rect x={-3} y={-16} width={6} height={16} fill="#582f0e" stroke={C.ink} strokeWidth={2} />
    <polygon points="0,-65 -22,-20 22,-20" fill="#2d6a4f" stroke={C.ink} strokeWidth={2.5} />
    <polygon points="0,-50 -18,-12 18,-12" fill="#40916c" stroke={C.ink} strokeWidth={2.5} />
    <polygon points="0,-72 -14,-42 14,-42" fill="#52b788" stroke={C.ink} strokeWidth={2.5} />
  </g>
);

const SpringUnit: React.FC<{x: number; y: number; h?: number; compress?: number}> = ({x, y, h = 80, compress = 0}) => {
  const ch = Math.max(45, h + compress);
  const turns = 4;
  const step = ch / (turns * 2);
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={-20} y={-4} width={40} height={6} rx={2} fill="#495057" stroke={C.ink} strokeWidth={2.5} />
      <rect x={-20} y={ch - 2} width={40} height={8} rx={2} fill="#6c757d" stroke={C.ink} strokeWidth={2.5} />
      <path
        d={Array.from({length: turns}).map((_, i) => `M -16 ${i * step * 2 + step * 0.5} Q 22 ${i * step * 2 + step} -16 ${i * step * 2 + step * 2}`).join(' ')}
        fill="none" stroke="#e76f51" strokeWidth={8} strokeLinecap="round"
      />
      <path
        d={Array.from({length: turns}).map((_, i) => `M -16 ${i * step * 2 + step * 0.5} Q -22 ${i * step * 2} 16 ${i * step * 2 + step * 0.5}`).join(' ')}
        fill="none" stroke="#f4a261" strokeWidth={6} strokeLinecap="round"
      />
    </g>
  );
};

export const Mountain: React.FC<WorldProps> = ({frame, tod, you, plane, dur: _dur}) => {
  const states = (plane ?? '').split(' ');
  const isDoorShut = states.includes('door:shut');
  const shake = states.includes('shake');
  const alarm = states.includes('alarm');

  const [s0, s1] = SKY[tod];
  const dark = tod === 'night';
  const shakeY = shake ? Math.sin(frame * 1.8) * 5 : 0;
  const radarRot = Math.sin(frame / 28) * 8;
  const genVib = Math.sin(frame * 2.8) * 1.2;

  return (
    <g>
      <defs>
        <linearGradient id="mt-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={s0} />
          <stop offset="1" stopColor={s1} />
        </linearGradient>
      </defs>

      {/* Sky background & celestial bodies */}
      <rect x={-1400} y={-900} width={5400} height={1600} fill="url(#mt-sky)" />
      <rect x={-1400} y={700} width={5400} height={1200} fill="#7d6b63" />
      {dark && Array.from({length: 40}).map((_, i) => (
        <circle key={i} cx={-200 + ((i * 127) % 1100)} cy={-50 + ((i * 79) % 350)} r={1 + (i % 2)} fill="#fff" opacity={0.5 + 0.4 * Math.sin((frame + i * 11) / 10)} />
      ))}
      {dark ? (
        <path d="M 180 80 A 24 24 0 1 0 215 115 A 28 28 0 1 1 180 80 Z" fill="#fdf0d5" />
      ) : (
        <circle cx={tod === 'day' ? 260 : tod === 'dusk' ? 120 : 380} cy={tod === 'day' ? 100 : 280} r={32} fill="#ffe49e" stroke={C.ink} strokeWidth={4} />
      )}

      {/* Mountain granite rock mass */}
      <path
        d="M -200 650 L 0 620 L 160 530 L 320 440 L 460 320 L 620 220 L 750 145 L 860 210 L 980 280 L 1200 240 L 1450 250 L 1750 280 L 2100 260 L 2400 300 L 2700 360 L 2700 1150 L -200 1150 Z"
        fill="#9c8986" stroke={C.ink} strokeWidth={5}
      />
      {/* Snow caps & pine trees on exterior ridge */}
      <path d="M 700 170 L 750 145 L 800 175 L 830 160 L 870 210 L 840 220 L 780 190 L 730 210 Z" fill="#ffffff" stroke={C.ink} strokeWidth={3} />
      <path d="M 590 235 L 620 220 L 650 240 L 630 255 Z" fill="#ffffff" stroke={C.ink} strokeWidth={2.5} />
      {[[-120, 650, 0.9], [-40, 635, 1], [40, 580, 1.1], [100, 550, 0.85], [170, 500, 0.9], [220, 460, 1.1], [350, 390, 1], [480, 310, 1.2], [540, 270, 0.8], [610, 230, 0.9], [860, 230, 1], [910, 260, 1.1]].map(([tx, ty, ts], i) => (
        <PineTree key={i} x={tx} y={ty} s={ts} frame={frame} />
      ))}

      {/* Summit radar & sensors */}
      <g transform="translate(750 145)">
        <polygon points="-24,0 -16,-60 16,-60 24,0" fill="#495057" stroke={C.ink} strokeWidth={3} />
        <g transform={`translate(0 -60) rotate(${radarRot})`}>
          <path d="M -30 -15 Q 0 16 30 -15" fill="#ced4da" stroke={C.ink} strokeWidth={3.5} />
          <line x1={0} y1={0} x2={0} y2={-26} stroke={C.ink} strokeWidth={3} />
          <circle cx={0} cy={-26} r={4} fill="#495057" stroke={C.ink} strokeWidth={2} />
        </g>
        <circle cx={0} cy={-90} r={4.5} fill={Math.floor(frame / 16) % 2 === 0 ? C.red : '#550000'} stroke={C.ink} strokeWidth={2} />
        <circle cx={-60} cy={-12} r={22} fill="#f8f9fa" stroke={C.ink} strokeWidth={3} />
        <line x1={-82} y1={-12} x2={-38} y2={-12} stroke="#adb5bd" strokeWidth={1.5} />
        <line x1={-60} y1={-34} x2={-60} y2={10} stroke="#adb5bd" strokeWidth={1.5} />
        <Label x={0} y={22} t="SUMMIT SENSORS" size={11} color="#f8f9fa" />
      </g>

      {/* Mountain access road */}
      <path d="M -200 650 L 80 625 L 260 595" stroke="#3d405b" strokeWidth={24} strokeLinecap="round" />
      <path d="M -200 650 L 80 625 L 260 595" stroke="#ffd166" strokeWidth={2.5} strokeDasharray="14 14" fill="none" />

      {/* Tunnel portal & gate booth */}
      <rect x={260} y={480} width={70} height={118} rx={6} fill="#ced4da" stroke={C.ink} strokeWidth={4} />
      <path d="M 270 595 V 530 Q 295 510 320 530 V 595 Z" fill="#2b2d42" stroke={C.ink} strokeWidth={3.5} />
      <rect x={185} y={530} width={50} height={65} rx={4} fill="#adb5bd" stroke={C.ink} strokeWidth={3.5} />
      <rect x={192} y={540} width={22} height={20} fill="#caf0f8" stroke={C.ink} strokeWidth={2} />
      <circle cx={195} cy={524} r={5} fill="#ffd166" stroke={C.ink} strokeWidth={2} />
      <circle cx={230} cy={522} r={2.5} fill={Math.floor(frame / 12) % 2 === 0 ? C.red : '#550000'} />
      <rect x={235} y={570} width={8} height={25} fill="#495057" stroke={C.ink} strokeWidth={2} />
      <line x1={240} y1={574} x2={295} y2={574} stroke="#e63946" strokeWidth={5} strokeDasharray="8 8" />
      <Label x={295} y={498} t="CHEYENNE MOUNTAIN" size={10} color="#1d3557" />
      <Label x={295} y={512} t="US SPACE FORCE" size={9} color={C.red} />

      {/* Vehicular tunnel */}
      <rect x={320} y={500} width={360} height={96} fill="#343a40" stroke={C.ink} strokeWidth={4} />
      <line x1={320} y1={595} x2={680} y2={595} stroke="#1f2421" strokeWidth={4} />
      <line x1={320} y1={555} x2={680} y2={555} stroke="#ffd166" strokeWidth={2} strokeDasharray="16 12" />
      <line x1={320} y1={512} x2={680} y2={512} stroke="#adb5bd" strokeWidth={6} />
      {[380, 480, 580].map((lx) => (
        <g key={lx}>
          <path d={`M ${lx - 22} 595 L ${lx - 6} 516 L ${lx + 6} 516 L ${lx + 22} 595 Z`} fill="#ffea00" opacity={0.12} />
          <rect x={lx - 6} y={512} width={12} height={5} rx={2} fill="#ffd166" stroke={C.ink} strokeWidth={1.5} />
        </g>
      ))}
      <Label x={490} y={528} t="NORTH PORTAL TUNNEL" size={11} color="#f8f9fa" />

      {/* Blast doors vestibule */}
      <rect x={680} y={470} width={150} height={135} fill="#495057" stroke={C.ink} strokeWidth={4} />
      <line x1={740} y1={470} x2={740} y2={605} stroke="#ffd166" strokeWidth={6} strokeDasharray="12 12" />
      <g transform={`translate(${isDoorShut ? 740 : 695} 505)`}>
        <rect x={0} y={0} width={isDoorShut ? 46 : 40} height={90} rx={10} fill="#6b7b86" stroke={C.ink} strokeWidth={4} />
        <circle cx={isDoorShut ? 23 : 20} cy={45} r={8} fill="#4a5660" stroke={C.ink} strokeWidth={2} />
        <rect x={-8} y={20} width={8} height={12} fill="#adb5bd" stroke={C.ink} strokeWidth={2} />
        <rect x={-8} y={58} width={8} height={12} fill="#adb5bd" stroke={C.ink} strokeWidth={2} />
        <line x1={-35} y1={45} x2={-8} y2={45} stroke="#ced4da" strokeWidth={8} strokeLinecap="round" />
      </g>
      <Label x={755} y={488} t={isDoorShut ? 'BLAST DOOR 1 · SEALED' : 'BLAST DOOR 1 · OPEN'} size={11} color={isDoorShut ? C.red : '#2a9d8f'} />

      {/* Main carved cave chamber & clearance gap */}
      <path d="M 825 845 L 825 360 Q 920 310 1150 295 Q 1450 285 1750 310 Q 1860 340 1860 845 Z" fill="#1e1e24" stroke={C.ink} strokeWidth={5} />
      {[380, 480, 580, 680, 780].map((ry) => (
        <g key={ry}>
          <rect x={835} y={ry} width={10} height={10} fill="#6c757d" stroke={C.ink} strokeWidth={2} />
          <circle cx={840} cy={ry + 5} r={2} fill="#adb5bd" />
          <rect x={1840} y={ry} width={10} height={10} fill="#6c757d" stroke={C.ink} strokeWidth={2} />
          <circle cx={1845} cy={ry + 5} r={2} fill="#adb5bd" />
        </g>
      ))}
      <rect x={830} y={635} width={100} height={8} fill="#6c757d" stroke={C.ink} strokeWidth={2.5} />
      <line x1={830} y1={610} x2={930} y2={610} stroke="#ffd166" strokeWidth={3} />
      <line x1={860} y1={610} x2={860} y2={635} stroke="#ffd166" strokeWidth={2.5} />
      <line x1={895} y1={610} x2={895} y2={635} stroke="#ffd166" strokeWidth={2.5} />
      <Label x={880} y={565} t="18-IN GAP" size={10} color="#f4a261" />
      <Label x={880} y={580} t="DO NOT OBSTRUCT" size={8} color="#adb5bd" />

      {/* Bedrock foundation & row of giant coil springs */}
      <rect x={840} y={840} width={1010} height={80} fill="#495057" stroke={C.ink} strokeWidth={4} />
      {[965, 1040, 1115, 1190, 1265, 1340, 1415, 1490, 1565, 1640, 1715, 1790].map((sx) => (
        <SpringUnit key={sx} x={sx} y={755 + shakeY} h={82 - shakeY} compress={shakeY} />
      ))}
      <rect x={1120} y={824} width={80} height={16} rx={3} fill="#212529" stroke={C.ink} strokeWidth={2} />
      <Label x={1160} y={836} t="1,000+ LB SPRING" size={9} color="#f8f9fa" />

      {/* Dust motes when shaking */}
      {shake && Array.from({length: 28}).map((_, i) => (
        <circle key={i} cx={920 + ((i * 67 + frame * 3) % 920)} cy={340 + ((i * 43 + frame * 5) % 470)} r={1.5 + (i % 2)} fill="#e0bf86" opacity={0.65} />
      ))}

      {/* 3-Storey Steel Bunker Building */}
      <g transform={`translate(0 ${shakeY})`}>
        <rect x={930} y={390} width={900} height={355} rx={4} fill="#cad2c5" stroke={C.ink} strokeWidth={5} />
        <line x1={930} y1={505} x2={1830} y2={505} stroke={C.ink} strokeWidth={5} />
        <line x1={930} y1={625} x2={1830} y2={625} stroke={C.ink} strokeWidth={5} />
        <line x1={1385} y1={390} x2={1385} y2={625} stroke={C.ink} strokeWidth={4} />

        {/* Level 1 Left: Command Center */}
        <rect x={935} y={395} width={445} height={105} fill="#111625" stroke={C.ink} strokeWidth={3} />
        <rect x={1010} y={405} width={300} height={42} rx={3} fill="#1b2a4a" stroke={C.ink} strokeWidth={2.5} />
        <path d="M 1030 435 L 1050 425 L 1090 416 L 1150 416 L 1200 422 L 1220 435 L 1190 442 L 1140 442 L 1080 438 Z" fill="#223a5e" stroke="#48cae4" strokeWidth={2} />
        <path d="M 1240 416 Q 1160 422 1090 432" stroke={alarm ? C.red : '#52b788'} strokeWidth={2.5} strokeDasharray="5 3" fill="none" />
        <circle cx={1090} cy={432} r={3} fill={alarm ? C.red : '#52b788'} />
        <rect x={1316} y={408} width={56} height={22} rx={3} fill={alarm ? C.red : '#2a9d8f'} stroke={C.ink} strokeWidth={2} />
        <Label x={1344} y={423} t={alarm ? 'ALERT' : 'NORMAL'} size={10} color="#fff" />
        <rect x={970} y={472} width={370} height={24} rx={3} fill="#212529" stroke={C.ink} strokeWidth={2} />
        {[985, 1050, 1115, 1180, 1245, 1310].map((cx, i) => (
          <rect key={cx} x={cx} y={464} width={28} height={16} rx={2} fill={alarm ? '#e63946' : i % 2 ? '#48cae4' : '#52b788'} opacity={0.8} />
        ))}
        <circle cx={955} cy={405} r={6} fill={alarm ? C.red : '#550000'} stroke={C.ink} strokeWidth={1.5} />
        <circle cx={1365} cy={405} r={6} fill={alarm ? C.red : '#550000'} stroke={C.ink} strokeWidth={1.5} />
        {/* soft pulse, never a hard strobe (full-panel blink read as 0.2 s cuts and is a photosensitivity risk) */}
        {alarm && <rect x={935} y={395} width={445} height={105} fill={C.red} opacity={0.06 + 0.05 * Math.sin(frame / 9)} />}
        <Label x={1155} y={415} t="NORAD COMBAT OPERATIONS" size={11} color="#90e0ef" />

        {/* Level 1 Right: Hallway with doors */}
        <rect x={1390} y={395} width={435} height={105} fill="#f8f9fa" stroke={C.ink} strokeWidth={3} />
        <rect x={1435} y={425} width={46} height={75} fill="#dee2e6" stroke={C.ink} strokeWidth={2.5} />
        <Label x={1458} y={442} t="BARBER" size={9} color={C.navy} />
        <rect x={1418} y={438} width={10} height={34} rx={3} fill="#fff" stroke={C.ink} strokeWidth={1.5} />
        <line x1={1419} y1={444 + ((frame * 2) % 10)} x2={1427} y2={450 + ((frame * 2) % 10)} stroke={C.red} strokeWidth={2} />
        <rect x={1565} y={425} width={46} height={75} fill="#dee2e6" stroke={C.ink} strokeWidth={2.5} />
        <Label x={1588} y={442} t="STORE" size={9} color={C.navy} />
        <rect x={1695} y={425} width={46} height={75} fill="#dee2e6" stroke={C.ink} strokeWidth={2.5} />
        <path d="M 1718 434 V 448 M 1712 438 H 1724" stroke="#8d6e4c" strokeWidth={2.5} strokeLinecap="round" />
        <Label x={1718} y={458} t="CHAPEL" size={9} color={C.navy} />
        <Label x={1610} y={412} t="SUPPORT CORRIDOR" size={10} color="#6c757d" />

        {/* Level 2 Left: Dining Facility */}
        <rect x={935} y={510} width={445} height={110} fill="#fdf0d5" stroke={C.ink} strokeWidth={3} />
        <rect x={955} y={570} width={110} height={46} fill="#ced4da" stroke={C.ink} strokeWidth={2.5} />
        <rect x={965} y={560} width={90} height={10} fill="#a8dadc" opacity={0.6} stroke={C.ink} strokeWidth={1.5} />
        {[0, 1].map((i) => (
          <path key={i} d={`M ${985 + i * 25} 558 q 3 -8 0 -14`} stroke="#adb5bd" strokeWidth={2} fill="none" opacity={0.4 + 0.4 * Math.sin((frame + i * 9) / 5)} />
        ))}
        <rect x={1135} y={582} width={70} height={26} rx={3} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
        <rect x={1245} y={582} width={70} height={26} rx={3} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
        <Label x={1155} y={528} t="MOUNTAIN DINING FACILITY" size={11} color="#7f5539" />

        {/* Level 2 Right: Medical Clinic */}
        <rect x={1390} y={510} width={435} height={110} fill="#e8f8f5" stroke={C.ink} strokeWidth={3} />
        <rect x={1420} y={540} width={42} height={46} rx={3} fill="#fff" stroke={C.ink} strokeWidth={2.5} />
        <path d="M 1441 550 V 576 M 1428 563 H 1454" stroke={C.red} strokeWidth={6} strokeLinecap="round" />
        <rect x={1640} y={582} width={85} height={28} rx={4} fill="#a8dadc" stroke={C.ink} strokeWidth={2.5} />
        <rect x={1644} y={574} width={22} height={12} rx={3} fill="#fff" stroke={C.ink} strokeWidth={1.5} />
        <rect x={1605} y={550} width={26} height={20} rx={2} fill="#212529" stroke={C.ink} strokeWidth={1.5} />
        <polyline points="1608,560 1614,560 1617,554 1620,566 1623,560 1628,560" stroke="#52ffb8" strokeWidth={1.5} fill="none" />
        <line x1={1738} y1={545} x2={1738} y2={610} stroke={C.ink} strokeWidth={2} />
        <circle cx={1738} cy={550} r={4} fill="#e63946" />
        <Label x={1610} y={528} t="MEDICAL CLINIC" size={11} color="#1d3557" />

        {/* Level 3: Bunker Gym & Vaults */}
        <rect x={935} y={630} width={890} height={110} fill="#dee2e6" stroke={C.ink} strokeWidth={3} />
        <line x1={1170} y1={630} x2={1170} y2={740} stroke={C.ink} strokeWidth={3} />
        <line x1={1590} y1={630} x2={1590} y2={740} stroke={C.ink} strokeWidth={3} />
        <rect x={960} y={655} width={180} height={75} fill="#212529" stroke={C.ink} strokeWidth={2.5} />
        {[975, 1030, 1085].map((rx) => (
          <circle key={rx} cx={rx} cy={670} r={3} fill={Math.floor(frame / 8 + rx) % 2 === 0 ? '#52ffb8' : '#ffd166'} />
        ))}
        <Label x={1050} y={646} t="COMMS VAULT" size={10} color="#495057" />
        <rect x={1175} y={705} width={410} height={35} fill="#343a40" />
        <line x1={1220} y1={710} x2={1260} y2={685} stroke={C.ink} strokeWidth={3} />
        <rect x={1215} y={710} width={50} height={12} rx={2} fill="#6c757d" stroke={C.ink} strokeWidth={2} />
        {[0, 1, 2].map((i) => (
          <line key={i} x1={1225 + ((i * 12 + frame * 3) % 36)} y1={712} x2={1229 + ((i * 12 + frame * 3) % 36)} y2={720} stroke="#adb5bd" strokeWidth={2} />
        ))}
        <rect x={1320} y={712} width={55} height={10} fill="#e63946" stroke={C.ink} strokeWidth={2} />
        <line x1={1310} y1={696} x2={1385} y2={696} stroke="#ced4da" strokeWidth={4} />
        <rect x={1312} y={688} width={6} height={16} rx={2} fill="#212529" stroke={C.ink} strokeWidth={1.5} />
        <rect x={1376} y={688} width={6} height={16} rx={2} fill="#212529" stroke={C.ink} strokeWidth={1.5} />
        <rect x={1450} y={685} width={90} height={35} fill="#495057" stroke={C.ink} strokeWidth={2} />
        <Label x={1380} y={646} t="FITNESS CENTER" size={11} color="#2b2d42" />
        <rect x={1620} y={665} width={160} height={65} fill="#b08968" stroke={C.ink} strokeWidth={2.5} />
        <Label x={1700} y={646} t="LOGISTICS" size={10} color="#495057" />
      </g>

      {/* Diesel Generator Room */}
      <path d="M 1940 590 L 1940 370 Q 2230 330 2520 370 L 2520 590 Z" fill="#212529" stroke={C.ink} strokeWidth={4} />
      <path d="M 2070 370 V 430 M 2350 370 V 430" stroke="#ced4da" strokeWidth={14} strokeLinecap="round" />
      {[2050, 2330].map((gx, i) => (
        <g key={gx} transform={`translate(${gx} ${480 + (i === 0 ? genVib : -genVib)})`}>
          <rect x={-70} y={-35} width={140} height={70} rx={6} fill="#ffb703" stroke={C.ink} strokeWidth={4} />
          <rect x={35} y={-25} width={45} height={50} rx={4} fill="#343a40" stroke={C.ink} strokeWidth={3} />
          {[-45, -15, 15].map((cx) => (
            <rect key={cx} x={cx} y={-45} width={18} height={14} fill="#495057" stroke={C.ink} strokeWidth={2} />
          ))}
        </g>
      ))}
      <rect x={2170} y={450} width={45} height={60} fill="#495057" stroke={C.ink} strokeWidth={2.5} />
      <circle cx={2192} cy={468} r={8} fill="#212529" stroke="#52ffb8" strokeWidth={2} />
      <Label x={2230} y={382} t="EMERGENCY GENERATOR PLANT" size={13} color="#f8f9fa" />
      <Label x={2230} y={400} t="DIESEL GENERATORS" size={10} color="#ffd166" />

      {/* Underground Water Reservoirs */}
      <path d="M 1940 940 L 1940 660 Q 2230 625 2520 660 L 2520 940 Z" fill="#161a1d" stroke={C.ink} strokeWidth={4} />
      <path
        d={`M 1940 760 Q 2085 ${756 + Math.sin(frame / 10) * 4} 2230 760 T 2520 760 L 2520 940 L 1940 940 Z`}
        fill="#0077b6" stroke={C.ink} strokeWidth={3}
      />
      <path d={`M 1940 760 Q 2085 ${756 + Math.sin(frame / 10) * 4} 2230 760 T 2520 760`} fill="none" stroke="#48cae4" strokeWidth={3.5} />
      <path d="M 2050 660 V 820" stroke="#2a9d8f" strokeWidth={12} strokeLinecap="round" />
      <circle cx={2050} cy={700} r={10} fill="#e63946" stroke={C.ink} strokeWidth={2} />
      <path d="M 2380 660 V 840" stroke="#2a9d8f" strokeWidth={12} strokeLinecap="round" />
      <circle cx={2380} cy={710} r={10} fill="#e63946" stroke={C.ink} strokeWidth={2} />
      <line x1={1940} y1={710} x2={2520} y2={710} stroke="#adb5bd" strokeWidth={3} />
      <line x1={2490} y1={800} x2={2515} y2={800} stroke="#fff" strokeWidth={2} />
      <Label x={2470} y={804} t="30 FT" size={8} color="#caf0f8" />
      <line x1={2490} y1={860} x2={2515} y2={860} stroke="#fff" strokeWidth={2} />
      <Label x={2470} y={864} t="20 FT" size={8} color="#caf0f8" />
      <Label x={2230} y={655} t="UNDERGROUND RESERVOIR" size={13} color="#f8f9fa" />
      <Label x={2230} y={673} t="DRINKING WATER RESERVOIR" size={10} color="#90e0ef" />

      {/* Personnel in camo/blue uniforms */}
      <Figure x={250} y={595} s={0.8} shirt="#1d3557" />
      <Figure x={520} y={585} s={0.8} shirt="#2b4c7e" flip />
      <Figure x={880} y={635} s={0.8} shirt="#1d3557" />
      <g transform={`translate(0 ${shakeY})`}>
        <Figure x={1030} y={470} s={0.7} shirt="#1d3557" pose="sit" />
        <Figure x={1240} y={470} s={0.7} shirt="#457b9d" pose="sit" flip />
        <Figure x={1010} y={595} s={0.7} shirt="#ffffff" hat="chef" />
        <Figure x={1220} y={600} s={0.7} shirt="#1d3557" pose="sit" flip />
        <Figure x={1480} y={595} s={0.75} shirt="#ffffff" />
        <Figure x={1460} y={715} s={0.75} shirt="#adb5bd" />
        <Figure x={1520} y={475} s={0.75} shirt="#2b4c7e" />
        <Figure x={1670} y={475} s={0.75} shirt="#52796f" flip />
      </g>
      <Figure x={2280} y={540} s={0.8} shirt="#1d3557" />
      <Figure x={2160} y={710} s={0.8} shirt="#457b9d" />

      {/* Viewer figure `you` */}
      {you && YOU[you] && (
        <Figure
          x={YOU[you][0]}
          y={YOU[you][1] + (['command', 'dining', 'gym', 'clinic', 'hall', 'springs'].includes(you) ? shakeY : 0)}
          s={['command', 'dining', 'gym', 'clinic', 'hall', 'spring'].includes(you) ? 0.75 : 0.85}
          cap shirt={C.red} pose={YOU[you][2]}
        />
      )}

      {/* Night ambient wash */}
      {dark && <rect x={-400} y={-400} width={3400} height={1600} fill="#0b1026" opacity={0.16} pointerEvents="none" />}
    </g>
  );
};
