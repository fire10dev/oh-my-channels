import React from 'react';
import {C, Figure, Label} from '../ui';
import type {Tod} from './SouthPole';
import type {WorldProps} from './registry';

/** Mount Washington Summit Observatory (6,288 ft, NH) - Home of the World's Worst Weather.
 *  Sherman Adams concrete summit building cutaway, 100 ft instrument tower, observation deck,
 *  Auto Road switchbacks with snowcat, and 1934 vintage 231 mph chain-anchored stage office hut.
 */
export const VIEWS: Record<string, [number, number, number]> = {
  wide: [1300, 520, 0.78], mountain: [900, 620, 1.05], road: [420, 750, 2.3],
  snowcat: [480, 715, 4.6], building: [1500, 390, 1.6], deck: [1260, 330, 4.2],
  tower: [1440, 140, 4.2], rime: [1440, 115, 6.2], office: [1260, 460, 4.8],
  kitchen: [1530, 460, 4.8], bunk: [1805, 460, 4.8], window: [1175, 430, 5.5],
  sky: [1300, 160, 1.4], clock: [1365, 415, 8.5],
};

export const viewOf = (name: string, _tod: Tod): [number, number, number] => VIEWS[name] ?? VIEWS.wide;

const SKY: Record<Tod, [string, string]> = {
  day: ['#4a7c9f', '#c0d6df'],
  dusk: ['#3b3355', '#d47355'],
  night: ['#090d1f', '#19233c'],
  dawn: ['#282c4f', '#e59866'],
};

const Rime: React.FC<{x: number; y: number; s?: number; thick?: boolean}> = ({x, y, s = 1, thick}) => (
  <path
    transform={`translate(${x} ${y}) scale(${s})`}
    d="M 0 -7 L -22 -5 L -7 -2 L -30 0 L -7 2 L -24 5 L 0 7 Z"
    fill="#f0f8ff"
    stroke={C.ink}
    strokeWidth={thick ? 2.5 : 1.5}
  />
);

const Pine: React.FC<{x: number; y: number; s?: number}> = ({x, y, s = 1}) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <polygon points="0,-45 -14,-15 14,-15" fill="#2d5a3f" stroke={C.ink} strokeWidth={2.5} />
    <polygon points="0,-25 -18,0 18,0" fill="#204b32" stroke={C.ink} strokeWidth={2.5} />
    <rect x={-3} y={0} width={6} height={10} fill="#5c4033" stroke={C.ink} strokeWidth={2} />
  </g>
);

const Boulder: React.FC<{x: number; y: number; rx: number; ry: number; c?: string; rime?: boolean}> = ({x, y, rx, ry, c = '#7d8590', rime}) => (
  <g transform={`translate(${x} ${y})`}>
    <ellipse rx={rx} ry={ry} fill={c} stroke={C.ink} strokeWidth={3} />
    {rime && <path d={`M ${-rx} 0 Q 0 ${-ry - 4} ${rx} 0 Q 0 ${-ry + 4} ${-rx} 0 Z`} fill="#f0f8ff" stroke={C.ink} strokeWidth={1.5} />}
  </g>
);

export const Summit: React.FC<WorldProps> = ({frame, tod, you, plane, dur}) => {
  const [s0, s1] = SKY[tod];
  const dark = tod === 'night';
  const has = (k: string) => Boolean(plane?.split(' ').includes(k));
  const [wind, rime, fog, snow, lightning, clouds] = ['wind', 'rime', 'fog', 'snow', 'lightning', 'clouds'].map(has);
  const flash = lightning && (frame % 46 < 4 || frame % 83 < 3);

  // Clock hand angles for 1365, 415 wall clock
  const secAngle = ((frame % 60) / 60) * 360;
  const minAngle = (((frame / 60) % 60) / 60) * 360;
  const hrAngle = (((frame / 3600) % 12) / 12) * 360 + minAngle / 12;

  // Anemometer spin and wind gusts
  const spin = frame * (wind ? 35 : 18);
  const flagW = wind ? 60 : 54;
  const flagFlutter = Math.sin(frame * 0.9) * (wind ? 4 : 2);

  return (
    <g>
      <defs>
        <linearGradient id="summit-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={flash ? '#e2e8f0' : s0} />
          <stop offset="1" stopColor={flash ? '#ffffff' : s1} />
        </linearGradient>
      </defs>

      {/* Sky backdrop */}
      <rect x={-600} y={-400} width={3800} height={1600} fill="url(#summit-sky)" />

      {/* Night stars */}
      {dark &&
        Array.from({length: 65}).map((_, i) => (
          <circle key={i} cx={-400 + ((i * 389) % 3400)} cy={-300 + ((i * 197) % 750)} r={1.2 + (i % 3) * 0.6} fill="#ffffff" opacity={0.3 + 0.5 * Math.sin((frame + i * 11) / 13)} />
        ))}

      {/* Fast moving alpine clouds */}
      {(clouds || wind) &&
        [0, 1, 2, 3, 4].map((i) => {
          const cx = ((i * 620 + frame * (wind ? 12 : 5)) % 3400) - 400;
          return (
            <g key={i} transform={`translate(${cx} ${90 + (i % 3) * 55})`} opacity={0.85}>
              <ellipse rx={170 + (i % 3) * 35} ry={48} fill="#f8fafc" stroke={C.ink} strokeWidth={3} />
              <ellipse cx={-40} cy={-12} rx={95} ry={38} fill="#f8fafc" stroke={C.ink} strokeWidth={3} />
              <ellipse cx={50} cy={-8} rx={110} ry={42} fill="#f8fafc" stroke={C.ink} strokeWidth={3} />
            </g>
          );
        })}

      {/* Lightning bolt */}
      {flash && (
        <g>
          <polyline points="1380,-120 1410,40 1370,110 1440,190 1410,260 1460,340" stroke="#fef08a" strokeWidth={6} fill="none" />
          <polyline points="1380,-120 1410,40 1370,110 1440,190 1410,260 1460,340" stroke="#ffffff" strokeWidth={3} fill="none" />
        </g>
      )}

      {/* Presidential Range distant silhouettes (Mt Adams, Jefferson, Clay) */}
      <path d="M -500 800 L -200 620 L 100 680 L 400 520 L 750 630 L 1100 480 L 1400 590 L 1750 490 L 2100 640 L 2500 550 L 3000 820 L 3000 1200 L -500 1200 Z" fill={dark ? '#141a2e' : '#64748b'} opacity={0.8} />
      <path d="M -400 900 L -100 750 L 220 810 L 580 660 L 920 740 L 1300 610 L 1650 710 L 2050 630 L 2450 750 L 2900 950 L 2900 1200 L -400 1200 Z" fill={dark ? '#1c2438' : '#526173'} />

      {/* Mount Washington main cone & rockpile felsenmeer */}
      <path d="M -300 1100 L 0 960 L 280 880 L 600 760 L 880 640 L 1080 540 L 1960 540 L 2220 630 L 2520 830 L 2900 1100 Z" fill="#6c757d" stroke={C.ink} strokeWidth={5} />

      {/* Lower elevation pine forest (Balsam fir / red spruce) */}
      {[-120, -50, 20, 80, 150, 220, 260, 2350, 2430, 2510, 2590, 2670].map((px, i) => (
        <Pine key={i} x={px} y={930 + (i % 4) * 35} s={1.1 + (i % 3) * 0.2} />
      ))}
      {/* Alpine krummholz (stunted wind-twisted trees) */}
      {[310, 380, 520, 590, 2180, 2260].map((kx, i) => (
        <Pine key={kx} x={kx} y={770 + (i % 3) * 25} s={0.65} />
      ))}

      {/* Rocky summit boulders (the Rockpile) & AMC Cairns */}
      {[
        [680, 680, 36, 18], [750, 640, 44, 22], [820, 600, 38, 20], [920, 580, 48, 24],
        [1010, 560, 52, 26], [1990, 560, 46, 22], [2080, 600, 42, 20], [2160, 650, 50, 25],
        [720, 530, 34, 18], [800, 535, 40, 20], [970, 535, 44, 22], [1040, 535, 38, 18],
      ].map(([bx, by, rx, ry], i) => (
        <Boulder key={i} x={bx} y={by} rx={rx} ry={ry} c={i % 2 === 0 ? '#78828f' : '#8a94a2'} rime={rime} />
      ))}
      {/* AMC hiking trail cairn */}
      <g transform="translate(1000 525)">
        <polygon points="-16,0 16,0 12,-12 -12,-12" fill="#adb5bd" stroke={C.ink} strokeWidth={2.5} />
        <polygon points="-12,-12 12,-12 8,-24 -8,-24" fill="#8d99ae" stroke={C.ink} strokeWidth={2.5} />
        <polygon points="-7,-24 7,-24 0,-34" fill="#ced4da" stroke={C.ink} strokeWidth={2.5} />
        {rime && <Rime x={-8} y={-24} s={0.7} />}
      </g>

      {/* Mount Washington Auto Road switchbacks */}
      <path d="M -50 1020 L 460 920 Q 520 905 480 870 L 190 790 Q 140 775 190 745 L 680 660 Q 730 645 680 615 L 490 550 L 780 540" fill="none" stroke="#8d8778" strokeWidth={34} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M -50 1020 L 460 920 Q 520 905 480 870 L 190 790 Q 140 775 190 745 L 680 660 Q 730 645 680 615 L 490 550 L 780 540" fill="none" stroke={C.ink} strokeWidth={40} strokeLinecap="round" strokeLinejoin="round" opacity={0.25} />
      <Label x={220} y={970} t="AUTO ROAD · 7.6 MI" size={14} color="#f4ecdc" />
      <Label x={240} y={815} t="5,000 FT" size={12} color="#f4ecdc" />
      <Label x={650} y={635} t="SWITCHBACK 4" size={12} color="#f4ecdc" />

      {/* Red Tracked Snowcat on Auto Road */}
      <g transform="translate(480 715)">
        <rect x={-55} y={15} width={110} height={20} rx={10} fill="#212529" stroke={C.ink} strokeWidth={3.5} />
        {[-38, -13, 13, 38].map((wx) => (
          <circle key={wx} cx={wx} cy={25} r={7.5} fill="#adb5bd" stroke={C.ink} strokeWidth={2} />
        ))}
        <path d="M -50 15 L -50 -26 L 5 -26 L 42 -4 L 52 15 Z" fill={C.red} stroke={C.ink} strokeWidth={3.5} />
        <rect x={-32} y={-21} width={26} height={15} rx={2} fill="#bde0fe" stroke={C.ink} strokeWidth={2} />
        <polygon points="0,-21 34,-4 5,-4" fill="#bde0fe" stroke={C.ink} strokeWidth={2} />
        {you === 'snowcat' ? <Figure x={-10} y={-4} s={0.65} pose="sit" shirt={C.red} cap /> : <Figure x={-10} y={-4} s={0.65} pose="sit" shirt="#f4a261" />}
        <polygon points="50,6 68,0 68,28 50,25" fill="#495057" stroke={C.ink} strokeWidth={3} />
        <circle cx={-12} cy={-30} r={4.5} fill={frame % 16 < 8 ? '#ffb703' : '#fb8500'} stroke={C.ink} strokeWidth={1.5} />
        <line x1={-38} y1={-26} x2={-45 + Math.sin(frame / 6) * 5} y2={-55} stroke={C.ink} strokeWidth={2} />
        <Label x={-2} y={10} t="MWO SNOWCAT" size={8} color="#ffffff" />
      </g>

      {/* 1930s Vintage Vignette (Stage Office Hut - 231 MPH World Record, April 12, 1934) */}
      <g transform="translate(850 500)">
        <rect x={-55} y={-10} width={110} height={50} fill="#8d7355" stroke={C.ink} strokeWidth={4} />
        {[-32, -10, 12, 34].map((px) => (
          <line key={px} x1={px} y1={-10} x2={px} y2={40} stroke="#5c4d3c" strokeWidth={1.5} />
        ))}
        <polygon points="-65,-10 0,-45 65,-10" fill="#5c4d3c" stroke={C.ink} strokeWidth={4} />
        <line x1={-72} y1={36} x2={-20} y2={-35} stroke={C.ink} strokeWidth={4} strokeDasharray="5 3" />
        <line x1={-20} y1={-35} x2={-10} y2={40} stroke={C.ink} strokeWidth={4} strokeDasharray="5 3" />
        <line x1={0} y1={40} x2={20} y2={-35} stroke={C.ink} strokeWidth={4} strokeDasharray="5 3" />
        <line x1={20} y1={-35} x2={72} y2={36} stroke={C.ink} strokeWidth={4} strokeDasharray="5 3" />
        <rect x={-40} y={4} width={22} height={20} fill="#ffeaa7" stroke={C.ink} strokeWidth={2.5} />
        <line x1={-29} y1={4} x2={-29} y2={24} stroke={C.ink} strokeWidth={1.5} />
        <line x1={-40} y1={14} x2={-18} y2={14} stroke={C.ink} strokeWidth={1.5} />
        <line x1={0} y1={-45} x2={0} y2={-75} stroke={C.ink} strokeWidth={3} />
        <line x1={-14} y1={-75} x2={14} y2={-75} stroke={C.ink} strokeWidth={2} transform={`rotate(${spin * 1.3} 0 -75)`} />
        <circle cx={-14} cy={-75} r={3.5} fill="#ced4da" stroke={C.ink} strokeWidth={1.5} />
        <circle cx={14} cy={-75} r={3.5} fill="#ced4da" stroke={C.ink} strokeWidth={1.5} />
        <Label x={0} y={-14} t="1934 · 231 MPH" size={10} color="#f4ecdc" />
        <Figure x={-32} y={40} s={0.75} shirt="#3d405b" cap />
        <Figure x={15} y={40} s={0.75} shirt="#495057" flip />
        <Figure x={45} y={40} s={0.72} shirt="#2b2d42" />
        {rime && <Rime x={-60} y={-10} s={1.1} thick />}
      </g>

      {/* Concrete Summit Observatory Building (Sherman Adams cutaway) */}
      <rect x={1080} y={350} width={880} height={200} fill="#adb5bd" stroke={C.ink} strokeWidth={5} />
      <rect x={1080} y={350} width={880} height={25} fill="#6c757d" stroke={C.ink} strokeWidth={4} />

      {/* Observation Deck (x 1100 to 1390, y 350) */}
      <rect x={1100} y={345} width={290} height={14} fill="#ced4da" stroke={C.ink} strokeWidth={4} />
      <line x1={1100} y1={316} x2={1390} y2={316} stroke={C.ink} strokeWidth={3.5} />
      <line x1={1100} y1={330} x2={1390} y2={330} stroke={C.ink} strokeWidth={2.5} />
      {[1105, 1155, 1205, 1255, 1305, 1355, 1390].map((rx) => (
        <line key={rx} x1={rx} y1={316} x2={rx} y2={345} stroke={C.ink} strokeWidth={3.5} />
      ))}
      <line x1={1115} y1={345} x2={1115} y2={270} stroke={C.ink} strokeWidth={4} />
      <circle cx={1115} cy={268} r={3.5} fill="#ffd166" />
      <path d={`M 1115 272 L ${1115 + flagW} ${272 + flagFlutter} L ${1115 + flagW} ${296 + flagFlutter} L 1115 296 Z`} fill={C.red} stroke={C.ink} strokeWidth={2} />
      <rect x={1115} y={272} width={20} height={13} fill="#1d3557" />
      <rect x={1370} y={305} width={22} height={42} rx={3} fill="#495057" stroke={C.ink} strokeWidth={3} />
      <circle cx={1381} cy={324} r={4.5} fill="#e9ecef" stroke={C.ink} strokeWidth={1.5} />
      <line x1={1205} y1={316} x2={1205} y2={290} stroke={C.ink} strokeWidth={2.5} />
      <circle cx={1205} cy={287} r={4} fill="#ced4da" stroke={C.ink} strokeWidth={2} />
      <Label x={1260} y={306} t="OBSERVATION DECK" size={13} color="#ffffff" />
      {you === 'deck' ? (
        <g transform={`translate(1260 345) rotate(${wind ? 24 : 12}) translate(-1260 -345)`}>
          <Figure x={1260} y={345} s={0.88} shirt={C.red} cap />
        </g>
      ) : (
        <g transform={`translate(1260 345) rotate(${wind ? 20 : 10}) translate(-1260 -345)`}>
          <Figure x={1260} y={345} s={0.88} shirt="#f4a261" />
        </g>
      )}

      {/* Tall Steel Lattice Instrument Tower (~100 ft, x 1410 to 1470, y 80 to 350) */}
      <rect x={1415} y={315} width={50} height={35} fill="#6c757d" stroke={C.ink} strokeWidth={4} />
      <line x1={1422} y1={315} x2={1428} y2={100} stroke={C.ink} strokeWidth={5} />
      <line x1={1458} y1={315} x2={1452} y2={100} stroke={C.ink} strokeWidth={5} />
      {[105, 135, 165, 195, 225, 255, 285].map((ly) => (
        <g key={ly}>
          <line x1={1426} y1={ly} x2={1454} y2={ly + 30} stroke={C.ink} strokeWidth={2.5} />
          <line x1={1454} y1={ly} x2={1426} y2={ly + 30} stroke={C.ink} strokeWidth={2.5} />
          <line x1={1426} y1={ly} x2={1454} y2={ly} stroke={C.ink} strokeWidth={2.5} />
        </g>
      ))}
      {[115, 130, 145, 160, 175, 190, 205, 220, 235, 250, 265, 280, 295].map((ry) => (
        <line key={ry} x1={1435} y1={ry} x2={1445} y2={ry} stroke={C.ink} strokeWidth={2.5} />
      ))}
      <rect x={1410} y={96} width={60} height={8} fill="#495057" stroke={C.ink} strokeWidth={3} />
      <line x1={1410} y1={82} x2={1470} y2={82} stroke={C.ink} strokeWidth={3} />
      <line x1={1410} y1={82} x2={1410} y2={96} stroke={C.ink} strokeWidth={2.5} />
      <line x1={1470} y1={82} x2={1470} y2={96} stroke={C.ink} strokeWidth={2.5} />
      <line x1={1440} y1={96} x2={1440} y2={55} stroke={C.ink} strokeWidth={4} />
      <g transform="translate(1440 60)">
        <line x1={-16} y1={0} x2={16} y2={0} stroke={C.ink} strokeWidth={2.5} transform={`rotate(${spin})`} />
        <circle cx={-16} cy={0} r={4.5} fill="#adb5bd" stroke={C.ink} strokeWidth={2} transform={`rotate(${spin})`} />
        <circle cx={16} cy={0} r={4.5} fill="#adb5bd" stroke={C.ink} strokeWidth={2} transform={`rotate(${spin})`} />
      </g>
      <line x1={1416} y1={76} x2={1440} y2={76} stroke={C.ink} strokeWidth={4} />
      <line x1={1418} y1={74} x2={1438} y2={74} stroke={C.red} strokeWidth={1.5} />
      <g transform="translate(1440 88)">
        <polygon points="-24,0 -12,-4 -12,4" fill="#2b2d42" stroke={C.ink} strokeWidth={2} />
        <line x1={-12} y1={0} x2={16} y2={0} stroke={C.ink} strokeWidth={3} />
        <polygon points="12,-8 22,0 12,8" fill="#e63946" stroke={C.ink} strokeWidth={2} />
      </g>
      {you === 'tower' ? (
        <g>
          <Figure x={1445} y={200} s={0.82} shirt={C.red} cap />
          <line x1={1458} y1={178} x2={1474} y2={168} stroke={C.ink} strokeWidth={3} strokeLinecap="round" />
          <rect x={1470} y={160} width={10} height={16} rx={2} fill="#8d6e4c" stroke={C.ink} strokeWidth={2.5} />
        </g>
      ) : (
        <Figure x={1445} y={240} s={0.8} shirt="#457b9d" />
      )}

      {/* Thick feathery rime ice on tower and instruments */}
      <g>
        {[
          [1418, 60, 1.5], [1416, 76, 1.6], [1410, 96, 1.8], [1422, 135, 1.3],
          [1424, 195, 1.3], [1426, 255, 1.3], [1105, 316, 1.4], [1155, 316, 1.3], [1205, 287, 1.2],
        ].map(([rx, ry, rs], i) => (
          <Rime key={i} x={rx} y={ry} s={rs} thick={rime} />
        ))}
      </g>

      {/* Interior Cutaway Rooms (x 1100 to 1940, y 375 to 540) */}

      {/* ROOM 1: Weather Office (x 1100 to 1380, y 375 to 540) */}
      <rect x={1100} y={375} width={280} height={165} fill="#dceaf7" stroke={C.ink} strokeWidth={4} />
      <rect x={1100} y={530} width={280} height={10} fill="#495057" />
      <rect x={1115} y={395} width={110} height={75} fill="#3a506b" stroke={C.ink} strokeWidth={4} />
      <rect x={1120} y={400} width={100} height={65} fill="#5c758a" />
      {[0, 1, 2, 3, 4, 5].map((wi) => (
        <line key={wi} x1={1122 + ((wi * 22 + frame * 8) % 95)} y1={404 + ((wi * 12 + frame * 3) % 55)} x2={1112 + ((wi * 22 + frame * 8) % 95)} y2={408 + ((wi * 12 + frame * 3) % 55)} stroke="#ffffff" strokeWidth={2.5} strokeLinecap="round" />
      ))}
      <line x1={1170} y1={400} x2={1170} y2={465} stroke={C.ink} strokeWidth={3} />
      <line x1={1120} y1={432} x2={1220} y2={432} stroke={C.ink} strokeWidth={3} />
      <polygon points="1120,400 1135,400 1120,415" fill="#f0f8ff" />
      <polygon points="1220,400 1205,400 1220,415" fill="#f0f8ff" />
      <rect x={1235} y={485} width={105} height={12} fill="#8d6e4c" stroke={C.ink} strokeWidth={3} />
      <rect x={1240} y={442} width={42} height={32} rx={3} fill="#212529" stroke={C.ink} strokeWidth={2.5} />
      <rect x={1244} y={446} width={34} height={24} fill="#0d1b2a" />
      <text x={1261} y={458} fontSize={7} fontWeight="bold" fontFamily="sans-serif" fill="#52ffb8" textAnchor="middle">112 MPH</text>
      <text x={1261} y={466} fontSize={5.5} fontFamily="sans-serif" fill="#f4a261" textAnchor="middle">GUST 141</text>
      <rect x={1288} y={442} width={42} height={32} rx={3} fill="#212529" stroke={C.ink} strokeWidth={2.5} />
      <circle cx={1309} cy={458} r={12} fill="#051923" stroke="#006466" strokeWidth={1} />
      <line x1={1309} y1={458} x2={1318} y2={451} stroke="#52ffb8" strokeWidth={1.5} transform={`rotate(${frame * 7} 1309 458)`} />
      <rect x={1340} y={405} width={6} height={70} fill="#d4af37" stroke={C.ink} strokeWidth={2} />
      <line x1={1343} y1={420} x2={1343} y2={470} stroke="#f8f9fa" strokeWidth={2} />
      <rect x={1248} y={481} width={26} height={6} rx={1} fill="#f4ecdc" stroke={C.ink} strokeWidth={1.5} />
      {/* Wall Clock (x 1365, y 415) */}
      <g transform="translate(1365 415)">
        <circle r={22} fill="#ffffff" stroke={C.ink} strokeWidth={3.5} />
        <circle r={19} fill="none" stroke="#adb5bd" strokeWidth={1} />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
          <line key={a} x1={0} y1={-18} x2={0} y2={a % 90 === 0 ? -14 : -16} stroke={C.ink} strokeWidth={a % 90 === 0 ? 2.5 : 1.2} transform={`rotate(${a})`} />
        ))}
        <text y={7} fontSize={5} fontFamily="sans-serif" textAnchor="middle" fill="#6c757d" fontWeight="bold">MWO</text>
        <line x1={0} y1={0} x2={0} y2={-10} stroke={C.ink} strokeWidth={3} strokeLinecap="round" transform={`rotate(${hrAngle})`} />
        <line x1={0} y1={0} x2={0} y2={-15} stroke={C.ink} strokeWidth={2.2} strokeLinecap="round" transform={`rotate(${minAngle})`} />
        <line x1={0} y1={2} x2={0} y2={-17} stroke={C.red} strokeWidth={1.4} transform={`rotate(${secAngle})`} />
        <circle r={2} fill={C.red} />
      </g>
      <Label x={1200} y={390} t="WEATHER OFFICE" size={13} />
      {you === 'office' ? <Figure x={1255} y={535} s={0.85} pose="sit" shirt={C.red} cap /> : <Figure x={1255} y={535} s={0.85} pose="sit" shirt="#457b9d" />}
      <Figure x={1305} y={535} s={0.85} pose="stand" shirt="#2a9d8f" flip />

      {/* ROOM 2: Kitchen & Galley (x 1380 to 1660, y 375 to 540) */}
      <rect x={1380} y={375} width={280} height={165} fill="#fbe8c8" stroke={C.ink} strokeWidth={4} />
      <rect x={1380} y={530} width={280} height={10} fill="#c1664e" />
      <rect x={1390} y={415} width={38} height={115} rx={4} fill="#f8f9fa" stroke={C.ink} strokeWidth={3} />
      <line x1={1390} y1={460} x2={1428} y2={460} stroke={C.ink} strokeWidth={2} />
      <rect x={1420} y={435} width={3} height={16} fill="#adb5bd" />
      <rect x={1420} y={475} width={3} height={20} fill="#adb5bd" />
      <rect x={1396} y={424} width={18} height={10} fill="#e9ecef" stroke={C.ink} strokeWidth={1} />
      <polygon points="1440,442 1495,442 1485,418 1450,418" fill="#ced4da" stroke={C.ink} strokeWidth={2.5} />
      <rect x={1442} y={468} width={52} height={62} fill="#495057" stroke={C.ink} strokeWidth={3} />
      <rect x={1454} y={455} width={28} height={15} rx={2} fill="#6c757d" stroke={C.ink} strokeWidth={2.5} />
      {[0, 1, 2].map((si) => (
        <path key={si} d={`M ${1460 + si * 8} 450 q ${Math.sin((frame + si * 8) / 4) * 4} -8 0 -16`} stroke="#ffffff" strokeWidth={2} fill="none" opacity={0.65} />
      ))}
      <rect x={1515} y={485} width={115} height={10} rx={2} fill="#b08968" stroke={C.ink} strokeWidth={3} />
      <line x1={1530} y1={495} x2={1530} y2={530} stroke={C.ink} strokeWidth={3} />
      <line x1={1615} y1={495} x2={1615} y2={530} stroke={C.ink} strokeWidth={3} />
      <rect x={1545} y={475} width={10} height={10} rx={2} fill="#e63946" stroke={C.ink} strokeWidth={1.5} />
      <rect x={1565} y={475} width={14} height={10} rx={2} fill="#2a9d8f" stroke={C.ink} strokeWidth={1.5} />
      <rect x={1605} y={462} width={16} height={23} rx={2} fill="#212529" stroke={C.ink} strokeWidth={2} />
      <Label x={1520} y={390} t="SUMMIT GALLEY" size={13} />
      <Figure x={1475} y={535} s={0.85} shirt="#ffffff" hat="chef" flip />
      {you === 'kitchen' && <Figure x={1540} y={535} s={0.85} shirt={C.red} cap />}

      {/* ROOM 3: Bunk Room (x 1660 to 1940, y 375 to 540) */}
      <rect x={1660} y={375} width={280} height={165} fill="#e8e1f5" stroke={C.ink} strokeWidth={4} />
      <rect x={1660} y={530} width={280} height={10} fill="#4a5568" />
      <rect x={1670} y={415} width={38} height={115} fill="#8d7355" stroke={C.ink} strokeWidth={2.5} />
      <rect x={1676} y={430} width={10} height={28} rx={3} fill={C.red} stroke={C.ink} strokeWidth={2} />
      <rect x={1692} y={430} width={10} height={28} rx={3} fill="#ffb703" stroke={C.ink} strokeWidth={2} />
      <g transform="translate(1720 420)">
        <rect x={0} y={0} width={8} height={110} fill="#5c4033" stroke={C.ink} strokeWidth={2.5} />
        <rect x={132} y={0} width={8} height={110} fill="#5c4033" stroke={C.ink} strokeWidth={2.5} />
        <rect x={8} y={22} width={124} height={15} rx={3} fill="#264653" stroke={C.ink} strokeWidth={2.5} />
        <rect x={12} y={15} width={24} height={10} rx={3} fill="#ffffff" stroke={C.ink} strokeWidth={1.5} />
        <line x1={38} y1={18} x2={132} y2={18} stroke={C.ink} strokeWidth={2.5} />
        <rect x={8} y={80} width={124} height={15} rx={3} fill="#3a5a40" stroke={C.ink} strokeWidth={2.5} />
        <rect x={12} y={73} width={24} height={10} rx={3} fill="#ffffff" stroke={C.ink} strokeWidth={1.5} />
        {[30, 50, 70, 90].map((ly) => (
          <line key={ly} x1={120} y1={ly} x2={132} y2={ly} stroke={C.ink} strokeWidth={2.5} />
        ))}
      </g>
      <g transform={`translate(${1905 + (wind ? Math.sin(frame * 1.8) * 1.5 : 0)} 410)`}>
        <rect x={0} y={0} width={26} height={50} fill="#495057" stroke={C.ink} strokeWidth={3} />
        <rect x={4} y={4} width={18} height={42} fill="#778da9" />
        <line x1={13} y1={4} x2={13} y2={46} stroke={C.ink} strokeWidth={2} />
        <line x1={4} y1={25} x2={22} y2={25} stroke={C.ink} strokeWidth={2} />
        <polygon points="4,4 12,4 4,12" fill="#f0f8ff" />
      </g>
      <rect x={1875} y={490} width={18} height={40} fill="#7f5539" stroke={C.ink} strokeWidth={2} />
      <polygon points="1872,490 1896,490 1890,475 1878,475" fill="#ffe3a8" stroke={C.ink} strokeWidth={2} />
      <Label x={1795} y={390} t="BUNK ROOM" size={13} />
      {you === 'bunk' ? <Figure x={1750} y={512} s={0.82} pose="lie" shirt={C.red} cap /> : <Figure x={1750} y={454} s={0.82} pose="lie" shirt="#6c757d" />}

      {/* Atmospheric plane effects */}
      {fog && <rect x={-600} y={-400} width={3800} height={1600} fill="#cbd5e1" opacity={0.65} />}
      {wind &&
        Array.from({length: 45}).map((_, i) => (
          <line key={i} x1={((i * 61 + frame * 42) % 3200) - 400} y1={50 + (i * 23) % 750} x2={((i * 61 + frame * 42) % 3200) - 475} y2={58 + (i * 23) % 750} stroke="#ffffff" strokeWidth={2.4} strokeDasharray="40 15" opacity={0.6} />
        ))}
      {snow &&
        Array.from({length: 90}).map((_, i) => (
          <line key={i} x1={((i * 37 - frame * 36) % 3200 + 3200) % 3200 - 400} y1={(i * 19 + frame * 14) % 1150} x2={((i * 37 - frame * 36) % 3200 + 3200) % 3200 - 424} y2={((i * 19 + frame * 14) % 1150) + 7} stroke="#ffffff" strokeWidth={3} strokeLinecap="round" opacity={0.85} />
        ))}
      {dark && <rect x={-600} y={-400} width={3800} height={1600} fill="#090d1f" opacity={0.18} />}
    </g>
  );
};
