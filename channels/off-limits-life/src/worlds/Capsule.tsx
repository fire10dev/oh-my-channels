import React from 'react';
import {C, Figure, Label} from '../ui';
import type {Tod} from './SouthPole';
import type {WorldProps} from './registry';

/** IX Minuteman III Missile Alert Facility & Launch Control Capsule, Montana.
 *  Surface y 100..420: prairie, ranch MAF building + kitchen cutaway, USAF truck, missile silo.
 *  Underground y 420..1060: 60ft elevator shaft, blast door vestibule, shock-suspended capsule, silo tube + ICBM.
 *  `plane` state strings: 'door:shut' / 'door:open' · 'meal' (tray + chef) · 'alarm' (red strobes) · 'sleep' (officer in bunk). */
export const VIEWS: Record<string, [number, number, number]> = {
  wide: [1300, 560, 0.75], prairie: [800, 340, 1.8], house: [550, 340, 2.4], kitchen: [580, 350, 5.2],
  truck: [205, 380, 4.8], silo: [2250, 670, 1.5], shaft: [730, 630, 2.0], elevator: [730, 840, 4.8],
  door: [910, 840, 4.2], capsule: [1400, 850, 1.85], console: [1260, 850, 3.6], keys: [1320, 840, 5.0],
  bunk: [1700, 855, 4.8], toilet: [1820, 860, 5.2], wall: [1550, 810, 4.6], clock: [1475, 765, 6.2],
  meal: [1200, 865, 5.5],
};

export const viewOf = (name: string, _tod: Tod): [number, number, number] => VIEWS[name] ?? VIEWS.wide;

const SKY: Record<Tod, [string, string]> = {
  day: ['#6ec3f4', '#fde7c2'], dusk: ['#5e548e', '#f4a261'], night: ['#090d24', '#1f2a48'], dawn: ['#3a3d6b', '#f6bd60'],
};

const YOU_SPOTS: Record<string, [number, number, 'stand' | 'sit' | 'lie', boolean?]> = {
  elevator: [730, 875, 'stand'], capsule: [1060, 935, 'stand'], console: [1140, 935, 'sit'],
  bunk: [1690, 885, 'lie'], door: [870, 935, 'stand'], house: [310, 420, 'stand'], truck: [185, 405, 'sit'],
};

const Spring: React.FC<{x: number; y: number; h?: number}> = ({x, y, h = 42}) => (
  <path d={`M ${x} ${y} q -12 ${h * 0.25} 0 ${h * 0.5} q 12 ${h * 0.25} 0 ${h * 0.5}`} stroke="#8d99ae" strokeWidth={6} fill="none" strokeLinecap="round" />
);

export const Capsule: React.FC<WorldProps> = ({frame, tod, you, plane, dur: _dur}) => {
  const [s0, s1] = SKY[tod];
  const dark = tod === 'night';
  const has = (k: string) => Boolean(plane && plane.split(' ').includes(k));
  const doorOpen = has('door:open');
  const isMeal = has('meal');
  const isAlarm = has('alarm');
  const isSleep = has('sleep');
  const alarmBlink = Math.floor(frame / 6) % 2 === 0;
  const secAngle = (frame * 6) % 360;

  return (
    <g>
      <defs>
        <linearGradient id="cap-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={s0} /><stop offset="1" stopColor={s1} />
        </linearGradient>
      </defs>

      {/* Sky & Montana hills */}
      <rect x={-1600} y={-1400} width={5800} height={1820} fill="url(#cap-sky)" />
      {dark && Array.from({length: 45}).map((_, i) => (
        <circle key={i} cx={(i * 83) % 2800} cy={(i * 47) % 340} r={1.2 + (i % 2)} fill="#fff" opacity={0.3 + 0.5 * Math.sin((frame + i * 7) / 9)} />
      ))}
      {!dark && <circle cx={tod === 'day' ? 1200 : tod === 'dusk' ? 2100 : 300} cy={tod === 'day' ? 100 : 360} r={44} fill="#ffd166" stroke={C.ink} strokeWidth={4} />}
      <path d="M -400 420 L -100 320 Q 300 240 700 340 T 1500 290 T 2300 330 L 3000 420 Z" fill={dark ? '#1a2238' : '#c89f6d'} stroke={C.ink} strokeWidth={4} />
      <path d="M -400 420 L 100 360 Q 500 330 900 380 T 1800 350 T 2600 370 L 3000 420 Z" fill={dark ? '#222b42' : '#dfb15b'} stroke={C.ink} strokeWidth={4} />

      {/* Earth & bedrock everywhere below ground */}
      <rect x={-400} y={420} width={3400} height={780} fill="#5e4838" />
      {[490, 600, 720, 860, 980].map((ly) => (
        <line key={ly} x1={-400} y1={ly} x2={3000} y2={ly} stroke="#4d3a2c" strokeWidth={5} strokeDasharray="60 30 120 40" opacity={0.65} />
      ))}

      {/* Prairie surface grass & swaying tufts */}
      <rect x={-400} y={414} width={3400} height={12} fill="#e5be66" />
      <line x1={-400} y1={420} x2={3000} y2={420} stroke={C.ink} strokeWidth={5} />
      {Array.from({length: 26}).map((_, i) => {
        const gx = 40 + i * 105;
        const sw = Math.sin((frame + i * 14) / 18) * 3;
        return <path key={i} d={`M ${gx} 420 q ${sw} -16 ${sw * 1.5} -26 M ${gx + 5} 420 q ${sw} -12 ${sw * 1.2} -20`} stroke="#8f7134" strokeWidth={2.5} fill="none" />;
      })}

      {/* Perimeter fence */}
      {[50, 150, 300, 440, 780, 890, 2020, 2460].map((fx) => (
        <g key={fx}>
          <line x1={fx} y1={420} x2={fx} y2={355} stroke={C.ink} strokeWidth={3} />
          <line x1={fx - 15} y1={360} x2={fx + 95} y2={360} stroke="#94a3b8" strokeWidth={1.5} />
          <line x1={fx - 15} y1={385} x2={fx + 95} y2={385} stroke="#94a3b8" strokeWidth={1.5} />
        </g>
      ))}
      <Label x={430} y={382} t="RESTRICTED AREA · US AIR FORCE" size={8} color={C.red} />

      {/* Missile Alert Facility (MAF) ranch building */}
      <rect x={350} y={260} width={420} height={160} fill="#dee2e6" stroke={C.ink} strokeWidth={5} />
      <polygon points="330,260 560,195 790,260" fill="#5c4d3c" stroke={C.ink} strokeWidth={5} />
      {/* Roof antennas & satellite dome */}
      <line x1={420} y1={235} x2={420} y2={140} stroke={C.ink} strokeWidth={3.5} />
      <line x1={400} y1={160} x2={440} y2={160} stroke={C.ink} strokeWidth={2.5} />
      <line x1={680} y1={230} x2={680} y2={120} stroke={C.ink} strokeWidth={3.5} />
      <line x1={665} y1={145} x2={695} y2={145} stroke={C.ink} strokeWidth={2.5} />
      <circle cx={490} cy={225} r={17} fill="#f8f9fa" stroke={C.ink} strokeWidth={3} />
      <path d="M 480 235 L 500 235" stroke={C.ink} strokeWidth={3} />

      {/* MAF Kitchen cutaway */}
      <rect x={495} y={265} width={180} height={155} fill="#fdf0d5" stroke={C.ink} strokeWidth={4} />
      <rect x={500} y={370} width={170} height={50} fill="#adb5bd" stroke={C.ink} strokeWidth={3} />
      {/* Stove, hood & steam */}
      <rect x={530} y={350} width={48} height={70} fill="#495057" stroke={C.ink} strokeWidth={3} />
      <ellipse cx={554} cy={348} rx={16} ry={5} fill="#343a40" stroke={C.ink} strokeWidth={2} />
      <rect x={534} y={270} width={40} height={42} fill="#6c757d" stroke={C.ink} strokeWidth={2.5} />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M ${546 + i * 8} 342 Q ${550 + Math.sin((frame + i * 9) / 6) * 4} 326 ${546 + i * 8} 314`} stroke="#ffffff" strokeWidth={2} fill="none" opacity={0.5 + 0.5 * Math.sin((frame + i * 8) / 5)} />
      ))}
      {/* Refrigerator & coffee maker */}
      <rect x={635} y={290} width={36} height={130} fill="#e9ecef" stroke={C.ink} strokeWidth={3} />
      <line x1={635} y1={340} x2={671} y2={340} stroke={C.ink} strokeWidth={2} />
      <rect x={590} y={345} width={22} height={25} fill="#212529" stroke={C.ink} strokeWidth={2} />
      <ellipse cx={601} cy={360} rx={7} ry={6} fill="#6f4e37" />
      <Label x={585} y={288} t="MAF GALLEY" size={10} color={C.navy} />
      {/* Chef at stove */}
      <Figure x={565} y={418} s={0.85} shirt={you === 'chef' ? C.red : '#ffffff'} hat="chef" flip />

      {/* MAF dayroom / security side */}
      <rect x={360} y={290} width={70} height={45} fill={dark ? '#ffd166' : '#bee1e6'} stroke={C.ink} strokeWidth={3} />
      <line x1={395} y1={290} x2={395} y2={335} stroke={C.ink} strokeWidth={2} />
      <rect x={365} y={375} width={75} height={45} fill="#8d6e4c" stroke={C.ink} strokeWidth={3} />
      <Figure x={315 + Math.sin(frame / 25) * 22} y={420} s={0.82} shirt="#556b2f" flip={Math.cos(frame / 25) < 0} />

      {/* USAF Pickup Truck */}
      <g transform="translate(140 365)">
        <path d="M 0 35 L 12 18 L 48 18 L 65 0 L 105 0 L 115 18 L 138 18 L 140 40 L 0 40 Z" fill="#f8f9fa" stroke={C.ink} strokeWidth={3.5} />
        <line x1={2} y1={28} x2={138} y2={28} stroke="#003049" strokeWidth={4} />
        <rect x={68} y={4} width={42} height={14} rx={2} fill="#90e0ef" stroke={C.ink} strokeWidth={2} />
        <circle cx={35} cy={43} r={13} fill="#343a40" stroke={C.ink} strokeWidth={3} /><circle cx={35} cy={43} r={5} fill="#ced4da" />
        <circle cx={115} cy={43} r={13} fill="#343a40" stroke={C.ink} strokeWidth={3} /><circle cx={115} cy={43} r={5} fill="#ced4da" />
        <rect x={82} y={-4} width={16} height={4} fill={C.red} stroke={C.ink} strokeWidth={1} />
        {dark && <polygon points="0,26 -90,14 -90,48 0,38" fill="#fef08a" opacity={0.25} />}
        {you === 'truck' && <Figure x={85} y={38} s={0.75} pose="sit" shirt={C.red} cap />}
      </g>

      {/* 60ft Elevator Shaft */}
      <rect x={692} y={380} width={76} height={505} fill="#343a40" stroke={C.ink} strokeWidth={4} />
      <line x1={700} y1={380} x2={700} y2={885} stroke="#64748b" strokeWidth={3} />
      <line x1={760} y1={380} x2={760} y2={885} stroke="#64748b" strokeWidth={3} />
      <line x1={730} y1={380} x2={730} y2={818} stroke="#94a3b8" strokeWidth={2.5} />
      {[500, 620, 740].map((dy) => (
        <Label key={dy} x={730} y={dy} t={`${dy === 500 ? '-20 FT' : dy === 620 ? '-40 FT' : '-60 FT'}`} size={9} color="#94a3b8" />
      ))}
      {/* Elevator Car */}
      <g transform="translate(698 815)">
        <rect x={0} y={0} width={64} height={68} fill="#475569" stroke={C.ink} strokeWidth={3} />
        <rect x={6} y={6} width={52} height={56} fill="#ffd166" opacity={0.3} />
        <line x1={6} y1={6} x2={58} y2={62} stroke={C.ink} strokeWidth={1.5} opacity={0.5} />
        <line x1={58} y1={6} x2={6} y2={62} stroke={C.ink} strokeWidth={1.5} opacity={0.5} />
        <rect x={2} y={0} width={60} height={6} fill="#f59e0b" /><rect x={2} y={62} width={60} height={6} fill="#f59e0b" />
        <circle cx={32} cy={8} r={3} fill="#fff" />
      </g>

      {/* Silo Surface Lid & Underground Cutaway */}
      <rect x={2070} y={405} width={360} height={16} fill="#64748b" stroke={C.ink} strokeWidth={4} />
      <line x1={2070} y1={413} x2={2430} y2={413} stroke="#f59e0b" strokeWidth={2} strokeDasharray="16 16" />
      {/* Silo Antenna & Alarm Strobe */}
      <line x1={2080} y1={405} x2={2080} y2={350} stroke={C.ink} strokeWidth={3} />
      <circle cx={2080} cy={346} r={7} fill={isAlarm ? (alarmBlink ? C.red : '#450a0a') : '#450a0a'} stroke={C.ink} strokeWidth={2} />
      {/* Underground Silo Tube */}
      <rect x={2150} y={420} width={200} height={620} fill="#1e293b" stroke={C.ink} strokeWidth={5} />
      <rect x={2150} y={420} width={14} height={620} fill="#475569" /><rect x={2336} y={420} width={14} height={620} fill="#475569" />
      {/* Umbilical booms */}
      {[560, 680, 810].map((uy) => (
        <path key={uy} d={`M 2164 ${uy} Q 2200 ${uy + 6} 2234 ${uy}`} stroke="#f59e0b" strokeWidth={3} fill="none" />
      ))}
      {/* Minuteman III ICBM */}
      <g>
        <polygon points="2250,480 2237,538 2263,538" fill="#1e293b" stroke={C.ink} strokeWidth={2.5} />
        <rect x={2236} y={538} width={28} height={36} fill="#e2e8f0" stroke={C.ink} strokeWidth={2.5} />
        <rect x={2234} y={574} width={32} height={106} fill="#ffffff" stroke={C.ink} strokeWidth={2.5} />
        <circle cx={2250} cy={626} r={7} fill="#1d3557" />
        <polygon points="2250,621 2252,629 2245,624 2255,624 2248,629" fill="#ffffff" />
        <rect x={2233} y={680} width={34} height={10} fill="#0f172a" stroke={C.ink} strokeWidth={2} />
        <rect x={2231} y={690} width={38} height={120} fill="#f1f5f9" stroke={C.ink} strokeWidth={2.5} />
        <rect x={2229} y={810} width={42} height={10} fill="#0f172a" stroke={C.ink} strokeWidth={2} />
        <rect x={2227} y={820} width={46} height={120} fill="#ffffff" stroke={C.ink} strokeWidth={2.5} />
        <Label x={2250} y={880} t="USAF" size={10} color={C.navy} />
        {[-14, -5, 5, 14].map((nx) => (
          <polygon key={nx} points={`${2250 + nx - 4},940 ${2250 + nx + 4},940 ${2250 + nx + 6},955 ${2250 + nx - 6},955`} fill="#334155" stroke={C.ink} strokeWidth={1.5} />
        ))}
        <rect x={2210} y={955} width={80} height={18} fill="#475569" stroke={C.ink} strokeWidth={3} />
        <Label x={2250} y={464} t="SILO · MINUTEMAN III" size={12} color="#ffd166" />
      </g>

      {/* Blast Door Vestibule & 8-Ton Blast Door */}
      <rect x={768} y={740} width={154} height={200} fill="#475569" stroke={C.ink} strokeWidth={4} />
      <ellipse cx={840} cy={744} rx={16} ry={6} fill="#fde047" opacity={0.6} />
      {doorOpen ? (
        <g>
          <path d="M 906 750 L 852 768 L 852 928 L 906 940 Z" fill="#64748b" stroke={C.ink} strokeWidth={4} />
          {[780, 830, 880, 915].map((py) => (
            <rect key={py} x={846} y={py} width={8} height={8} fill="#cbd5e1" stroke={C.ink} strokeWidth={1.5} />
          ))}
          <Label x={876} y={850} t="OPEN" size={10} color="#22c55e" />
        </g>
      ) : (
        <g>
          <rect x={896} y={748} width={24} height={192} rx={7} fill="#64748b" stroke={C.ink} strokeWidth={4} />
          {[775, 815, 875, 915].map((py) => (
            <rect key={py} x={890} y={py} width={36} height={9} rx={2} fill="#cbd5e1" stroke={C.ink} strokeWidth={2} />
          ))}
          <path d="M 900 764 L 916 776 M 900 776 L 916 788" stroke="#f59e0b" strokeWidth={3} strokeLinecap="round" />
          <Label x={908} y={808} t="8 TON" size={8} color="#ffd166" />
          <circle cx={908} cy={845} r={14} fill="#334155" stroke={C.ink} strokeWidth={3} />
          <line x1={894} y1={845} x2={922} y2={845} stroke={C.ink} strokeWidth={3} />
          <line x1={908} y1={831} x2={908} y2={859} stroke={C.ink} strokeWidth={3} />
          <circle cx={908} cy={845} r={4} fill="#cbd5e1" stroke={C.ink} strokeWidth={2} />
          <Label x={908} y={896} t="BLAST" size={8} color="#ffd166" /><Label x={908} y={908} t="DOOR" size={8} color="#ffd166" />
        </g>
      )}

      {/* Underground Launch Control Capsule (LCC) Outer Shell & Shock Springs */}
      <rect x={920} y={705} width={980} height={255} rx={42} fill="#1e293b" stroke={C.ink} strokeWidth={5} />
      {[1050, 1300, 1550, 1800].map((sx) => (
        <React.Fragment key={sx}><Spring x={sx} y={662} h={43} /><Spring x={sx} y={960} h={43} /></React.Fragment>
      ))}

      {/* Capsule Interior Room */}
      <rect x={930} y={735} width={960} height={205} fill="#334155" stroke={C.ink} strokeWidth={4} />
      <rect x={930} y={935} width={960} height={15} fill="#1e293b" stroke={C.ink} strokeWidth={3} />
      <rect x={942} y={760} width={12} height={45} rx={5} fill="#059669" stroke={C.ink} strokeWidth={2} />
      <rect x={942} y={815} width={12} height={35} rx={4} fill={C.red} stroke={C.ink} strokeWidth={2} />

      {/* Consoles & Command Center */}
      <rect x={1030} y={745} width={410} height={190} fill="#1e293b" stroke={C.ink} strokeWidth={4} />
      {[0, 1, 2, 3].map((b) => (
        <rect key={b} x={1035 + b * 102} y={750} width={98} height={130} fill="#0f172a" stroke={C.ink} strokeWidth={2.5} />
      ))}
      {Array.from({length: 18}).map((_, i) => {
        const col = ['#22c55e', '#f59e0b', '#ef4444', '#ffffff'][i % 4];
        const on = (frame + i * 7) % 20 > 6;
        return <rect key={i} x={1045 + (i % 6) * 15} y={765 + Math.floor(i / 6) * 14} width={9} height={8} rx={2} fill={on ? col : '#334155'} stroke={C.ink} strokeWidth={1} />;
      })}
      {/* Radar CRT Screen & sweep */}
      <circle cx={1185} cy={805} r={24} fill="#052e16" stroke="#22c55e" strokeWidth={2} />
      <circle cx={1185} cy={805} r={14} fill="none" stroke="#22c55e" strokeWidth={1} strokeDasharray="3 3" />
      <line x1={1185} y1={805} x2={1185 + 23 * Math.cos((frame * 4 * Math.PI) / 180)} y2={805 + 23 * Math.sin((frame * 4 * Math.PI) / 180)} stroke="#86efac" strokeWidth={2} />
      {/* Console Warning Beacons */}
      {[1090, 1240, 1370].map((bx) => (
        <circle key={bx} cx={bx} cy={742} r={7} fill={isAlarm ? (alarmBlink ? C.red : '#450a0a') : '#450a0a'} stroke={C.ink} strokeWidth={2} />
      ))}

      {/* Two Launch Key Switches (spaced far apart) */}
      {[1240, 1400].map((kx, i) => (
        <g key={i}>
          <rect x={kx - 18} y={824} width={36} height={34} rx={4} fill="#b91c1c" stroke={C.ink} strokeWidth={2.5} />
          <circle cx={kx} cy={841} r={10} fill="#94a3b8" stroke={C.ink} strokeWidth={2} />
          <rect x={kx - 2} y={835} width={4} height={12} fill="#f59e0b" stroke={C.ink} strokeWidth={1.2} />
          <path d={`M ${kx - 12} 824 L ${kx - 6} 812 L ${kx + 6} 812 L ${kx + 12} 824 Z`} fill="#ef4444" stroke={C.ink} strokeWidth={1.5} />
          <path d={`M ${kx} 845 q ${Math.sin(frame / 8 + i) * 3} 12 2 18`} stroke={C.red} strokeWidth={2.5} fill="none" strokeLinecap="round" />
        </g>
      ))}
      <Label x={1320} y={818} t="LAUNCH KEYS" size={11} color={C.red} />
      <Label x={1320} y={835} t="TWO-MAN RULE" size={8} color="#f8f9fa" />

      {/* Console Desk & Red Swivel Chairs on rails */}
      <rect x={1030} y={880} width={410} height={15} fill="#475569" stroke={C.ink} strokeWidth={2.5} />
      <line x1={1080} y1={938} x2={1420} y2={938} stroke="#64748b" strokeWidth={4} />
      {[1140, 1370].map((cx) => (
        <g key={cx}>
          <rect x={cx - 16} y={895} width={32} height={28} rx={6} fill="#b91c1c" stroke={C.ink} strokeWidth={3} />
          <line x1={cx} y1={923} x2={cx} y2={938} stroke={C.ink} strokeWidth={4} />
          <rect x={cx - 12} y={934} width={24} height={4} rx={2} fill="#334155" stroke={C.ink} strokeWidth={2} />
        </g>
      ))}

      {/* Meal Tray on Console */}
      {isMeal && (
        <g>
          <rect x={1175} y={872} width={50} height={8} rx={2} fill="#cbd5e1" stroke={C.ink} strokeWidth={1.5} />
          <ellipse cx={1188} cy={868} rx={9} ry={5} fill="#d4a373" stroke={C.ink} strokeWidth={1.2} />
          <rect x={1180} y={868} width={16} height={2} fill="#2a9d8f" /><rect x={1180} y={870} width={16} height={2} fill="#780000" />
          <rect x={1202} y={862} width={10} height={12} rx={2} fill={C.red} stroke={C.ink} strokeWidth={1} />
          {[0, 2, 4, 6].map((fx) => (
            <line key={fx} x1={1204 + fx} y1={863} x2={1203 + fx} y2={854} stroke="#ffd166" strokeWidth={2} />
          ))}
          <rect x={1215} y={860} width={8} height={14} fill="#f8f9fa" stroke={C.ink} strokeWidth={1} />
          <line x1={1219} y1={860} x2={1223} y2={852} stroke={C.red} strokeWidth={1.5} />
          <Figure x={1170} y={935} s={0.85} shirt="#ffffff" hat="chef" flip />
        </g>
      )}

      {/* 24-Hour Military Wall Clock */}
      <circle cx={1475} cy={765} r={24} fill="#f8f9fa" stroke={C.ink} strokeWidth={3.5} />
      {Array.from({length: 12}).map((_, i) => (
        <line
          key={i}
          x1={1475 + 18 * Math.sin((i * 30 * Math.PI) / 180)}
          y1={765 - 18 * Math.cos((i * 30 * Math.PI) / 180)}
          x2={1475 + 22 * Math.sin((i * 30 * Math.PI) / 180)}
          y2={765 - 22 * Math.cos((i * 30 * Math.PI) / 180)}
          stroke={C.ink}
          strokeWidth={i % 3 === 0 ? 2 : 1}
        />
      ))}
      <line x1={1475} y1={765} x2={1485} y2={760} stroke={C.ink} strokeWidth={2.5} strokeLinecap="round" />
      <line x1={1475} y1={765} x2={1475} y2={748} stroke={C.ink} strokeWidth={2} strokeLinecap="round" />
      <line x1={1475} y1={765} x2={1475 + 17 * Math.sin((secAngle * Math.PI) / 180)} y2={765 - 17 * Math.cos((secAngle * Math.PI) / 180)} stroke={C.red} strokeWidth={1.5} />
      <circle cx={1475} cy={765} r={2.5} fill={C.red} />
      <Label x={1475} y={740} t="ZULU TIME" size={8} color={C.navy} />

      {/* Wall covered with notes, drawings & stickers */}
      <rect x={1510} y={748} width={118} height={155} fill="#d4a373" stroke={C.ink} strokeWidth={3} />
      <rect x={1516} y={754} width={24} height={22} fill="#fef08a" stroke={C.ink} strokeWidth={1.2} />
      <rect x={1545} y={758} width={26} height={26} fill="#fbcfe8" stroke={C.ink} strokeWidth={1.2} />
      <circle cx={1588} cy={768} r={10} fill="#93c5fd" stroke={C.ink} strokeWidth={1.2} />
      <rect x={1522} y={785} width={30} height={26} fill="#bbf7d0" stroke={C.ink} strokeWidth={1.2} />
      <rect x={1560} y={790} width={34} height={24} fill="#fed7aa" stroke={C.ink} strokeWidth={1.2} />
      <rect x={1530} y={820} width={36} height={44} fill="#ffffff" stroke={C.ink} strokeWidth={1.5} />
      {[828, 836, 844, 852].map((ly) => (
        <line key={ly} x1={1535} y1={ly} x2={1560} y2={ly} stroke="#94a3b8" strokeWidth={1.5} />
      ))}
      <circle cx={1585} cy={835} r={12} fill="#fde047" stroke={C.ink} strokeWidth={1.5} />
      <path d="M 1579 837 Q 1585 843 1591 837" stroke={C.ink} strokeWidth={1.5} fill="none" />
      <circle cx={1581} cy={832} r={1.5} fill={C.ink} /><circle cx={1589} cy={832} r={1.5} fill={C.ink} />
      <Label x={1570} y={890} t="CREW WALL" size={9} color={C.navy} />

      {/* Crew Bunk Sleeping Area */}
      <g transform="translate(1645 870)">
        <rect x={0} y={8} width={110} height={14} rx={3} fill="#475569" stroke={C.ink} strokeWidth={2.5} />
        <line x1={4} y1={22} x2={4} y2={65} stroke={C.ink} strokeWidth={3} /><line x1={106} y1={22} x2={106} y2={65} stroke={C.ink} strokeWidth={3} />
        <rect x={2} y={0} width={85} height={16} rx={3} fill="#556b2f" stroke={C.ink} strokeWidth={2} />
        <ellipse cx={96} cy={6} rx={12} ry={6} fill="#ffffff" stroke={C.ink} strokeWidth={2} />
        <path d="M 108 -30 q -10 0 -12 12" stroke={C.ink} strokeWidth={2} fill="none" />
        <circle cx={96} cy={-18} r={3} fill="#ffd166" />
      </g>
      <line x1={1640} y1={742} x2={1758} y2={742} stroke={C.ink} strokeWidth={2.5} />
      <path d="M 1642 742 q 4 50 2 100" stroke="#64748b" strokeWidth={8} fill="none" />
      {/* Officer asleep in bunk */}
      {isSleep && you !== 'bunk' && <Figure x={1690} y={885} s={0.82} pose="lie" shirt="#556b2f" />}

      {/* Stainless Steel Toilet in Closet */}
      <rect x={1765} y={740} width={105} height={195} fill="#1e293b" stroke={C.ink} strokeWidth={3.5} />
      <rect x={1795} y={885} width={34} height={48} rx={6} fill="#94a3b8" stroke={C.ink} strokeWidth={2.5} />
      <ellipse cx={1812} cy={885} rx={16} ry={7} fill="#e2e8f0" stroke={C.ink} strokeWidth={2} />
      <rect x={1810} y={830} width={26} height={55} fill="#cbd5e1" stroke={C.ink} strokeWidth={2.5} />
      <path d="M 1823 830 v -8 h -6" stroke={C.ink} strokeWidth={2.5} fill="none" />
      <path d="M 1805 885 v -35 h 8" stroke={C.ink} strokeWidth={3} fill="none" />
      <rect x={1775} y={870} width={12} height={10} rx={3} fill="#fff" stroke={C.ink} strokeWidth={1.5} />
      <rect x={1812} y={775} width={20} height={28} rx={3} fill="#e0f2fe" stroke={C.ink} strokeWidth={2} />
      <Label x={1815} y={758} t="HEAD" size={9} color="#94a3b8" />

      {/* Officers on duty */}
      {you !== 'console' && <Figure x={1140} y={935} s={0.85} pose="sit" shirt="#556b2f" />}
      {!isSleep && <Figure x={1370} y={935} s={0.85} pose="sit" shirt="#556b2f" flip />}

      {/* Viewer Character (`you`) */}
      {you && you !== 'chef' && YOU_SPOTS[you] && (
        <Figure x={YOU_SPOTS[you][0]} y={YOU_SPOTS[you][1]} s={0.85} pose={YOU_SPOTS[you][2]} shirt={C.red} cap flip={YOU_SPOTS[you][3]} />
      )}
    </g>
  );
};
