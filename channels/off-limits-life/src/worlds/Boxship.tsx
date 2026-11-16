import React from 'react';
import {C, Figure, Label} from '../ui';
import type {Tod} from './SouthPole';
import type {WorldProps} from './registry';

/** Ultra-large container ship at sea. Cutaway accommodation tower (8 decks) at stern (x ~1780..2220),
 *  container stacks (x ~360..1760), engine room below, port quay with STS crane to left, Suez canal vignette at x <-300.
 *  `plane` state strings: 'shower:on' | 'crane' | 'storm' | 'roll' | 'phone' | 'skiff'. */
export const VIEWS: Record<string, [number, number, number]> = {
  wide: [1200, 560, 0.75], sea: [1250, 640, 0.66], stack: [1050, 520, 1.6], tower: [2000, 480, 1.8],
  bridge: [1980, 260, 4.8], cabin: [1890, 355, 5.2], shower: [2095, 355, 5.5], galley: [1890, 450, 5.0],
  mess: [2105, 450, 4.8], store: [1890, 545, 5.0], gym: [2105, 545, 5.0], engine: [2000, 790, 3.8],
  citadel: [1890, 638, 5.0], port: [120, 560, 1.8], gangway: [210, 705, 4.5], canal: [-550, 500, 2.8],
  clock: [2065, 248, 7.5],
};

export const viewOf = (name: string, _tod: Tod): [number, number, number] => VIEWS[name] ?? VIEWS.wide;

const SKY: Record<Tod, [string, string]> = {
  day: ['#4ea8de', '#caf0f8'], dusk: ['#3d348b', '#f4a261'], night: ['#070b19', '#1a233a'], dawn: ['#283044', '#f6bd60'],
};

const YOU: Record<string, [number, number, 'stand' | 'sit' | 'lie']> = {
  bridge: [1950, 295, 'stand'], cabin: [1860, 370, 'lie'], shower: [2065, 395, 'stand'], galley: [1880, 495, 'stand'],
  mess: [2090, 495, 'sit'], citadel: [1910, 685, 'sit'], gangway: [210, 705, 'stand'],
};

const BOX_COLORS = ['#d90429', '#0077b6', '#2a9d8f', '#e76f51', '#457b9d', '#264653', '#f4a261', '#4a4e69', '#6c757d', '#1d3557', '#ffb703', '#e07a5f'];
const TIERS = [4, 5, 6, 6, 6, 6, 6, 6, 6, 5, 5, 4];

const Container: React.FC<{x: number; y: number; w: number; h: number; c: string}> = ({x, y, w, h, c}) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx={2} fill={c} stroke={C.ink} strokeWidth={2.5} />
    {Array.from({length: 6}).map((_, i) => (
      <line key={i} x1={x + 14 + i * 14} y1={y + 3} x2={x + 14 + i * 14} y2={y + h - 3} stroke={C.ink} strokeWidth={1.5} opacity={0.4} />
    ))}
    <rect x={x + 2} y={y + 2} width={5} height={5} fill="#fff" opacity={0.6} /><rect x={x + w - 7} y={y + 2} width={5} height={5} fill="#fff" opacity={0.6} />
    <rect x={x + 2} y={y + h - 7} width={5} height={5} fill="#fff" opacity={0.6} /><rect x={x + w - 7} y={y + h - 7} width={5} height={5} fill="#fff" opacity={0.6} />
  </g>
);

const ShipClock: React.FC<{x: number; y: number; frame: number}> = ({x, y, frame}) => (
  <g transform={`translate(${x} ${y})`}>
    <circle r={26} fill="#d4a373" stroke={C.ink} strokeWidth={3} /><circle r={22} fill="#ffffff" stroke={C.ink} strokeWidth={2} />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((d) => (
      <line key={d} y1={-20} y2={d % 90 === 0 ? -14 : -17} stroke={C.ink} strokeWidth={d % 90 === 0 ? 2 : 1} transform={`rotate(${d})`} />
    ))}
    <line y2={-11} stroke={C.ink} strokeWidth={2.5} strokeLinecap="round" transform={`rotate(${((frame / 6) % 360)})`} />
    <line x2={13} stroke={C.ink} strokeWidth={2} strokeLinecap="round" transform={`rotate(${((frame / 72) % 360)})`} />
    <line y1={3} y2={-18} stroke={C.red} strokeWidth={1.2} transform={`rotate(${((frame * 6) % 360)})`} /><circle r={2.5} fill={C.red} />
    <Label x={0} y={-30} t="UTC / ZULU" size={7} />
  </g>
);

const Crane: React.FC<{x: number; frame: number; active: boolean}> = ({x, frame, active}) => {
  const tx = active ? x + 160 + Math.sin(frame / 35) * 120 : x + 220;
  const hy = active ? 470 + Math.cos(frame / 35) * 50 : 470;
  return (
    <g>
      <polygon points={`${x},720 ${x + 20},720 ${x + 50},340 ${x + 30},340`} fill="#e63946" stroke={C.ink} strokeWidth={3} />
      <polygon points={`${x + 130},720 ${x + 150},720 ${x + 120},340 ${x + 100},340`} fill="#e63946" stroke={C.ink} strokeWidth={3} />
      <line x1={x + 10} y1={530} x2={x + 140} y2={530} stroke={C.ink} strokeWidth={4} /><line x1={x + 10} y1={530} x2={x + 110} y2={340} stroke={C.ink} strokeWidth={3} />
      <line x1={x + 140} y1={530} x2={x + 40} y2={340} stroke={C.ink} strokeWidth={3} />
      <rect x={x + 25} y={280} width={100} height={60} fill="#f8f9fa" stroke={C.ink} strokeWidth={3} />
      <polygon points={`${x + 35},280 ${x + 75},200 ${x + 115},280`} fill="#e63946" stroke={C.ink} strokeWidth={3} />
      <rect x={x - 80} y={328} width={560} height={18} fill="#e63946" stroke={C.ink} strokeWidth={3} />
      <line x1={x + 75} y1={200} x2={x + 460} y2={328} stroke={C.ink} strokeWidth={2.5} /><line x1={x + 75} y1={200} x2={x - 60} y2={328} stroke={C.ink} strokeWidth={2.5} />
      <rect x={tx - 18} y={342} width={36} height={12} fill="#343a40" stroke={C.ink} strokeWidth={2} />
      <line x1={tx - 14} y1={354} x2={tx - 28} y2={hy} stroke={C.ink} strokeWidth={1.5} /><line x1={tx + 14} y1={354} x2={tx + 28} y2={hy} stroke={C.ink} strokeWidth={1.5} />
      <rect x={tx - 35} y={hy} width={70} height={8} fill="#ffd166" stroke={C.ink} strokeWidth={2} /><Container x={tx - 40} y={hy + 8} w={80} h={26} c="#0077b6" />
    </g>
  );
};

const SuezCanal: React.FC<{x: number; y: number}> = ({x, y}) => (
  <g transform={`translate(${x} ${y})`}>
    <rect x={-280} y={-160} width={560} height={320} rx={16} fill="#edd892" stroke={C.ink} strokeWidth={4} />
    <path d="M -280 -40 Q 0 -20 280 -40 L 280 60 Q 0 80 -280 60 Z" fill="#0096c7" stroke={C.ink} strokeWidth={3} />
    <path d="M -260 -110 Q -180 -130 -100 -100 T 80 -120 T 260 -90" stroke="#ddb892" strokeWidth={5} fill="none" />
    <path d="M -260 110 Q -160 90 -60 120 T 160 100 T 260 130" stroke="#ddb892" strokeWidth={5} fill="none" />
    <g transform="translate(10 10) rotate(-22)">
      <polygon points="-170,-26 130,-26 180,0 130,26 -170,26" fill="#2d6a4f" stroke={C.ink} strokeWidth={3.5} /><circle cx={180} cy={0} r={14} fill="#c1121f" stroke={C.ink} strokeWidth={2.5} />
      {Array.from({length: 8}).map((_, i) => (
        <rect key={i} x={-140 + i * 34} y={-18} width={28} height={36} fill={['#d90429', '#0077b6', '#f77f00', '#ffb703', '#4a4e69'][i % 5]} stroke={C.ink} strokeWidth={1.5} />
      ))}
      <rect x={90} y={-22} width={24} height={44} fill="#f8f9fa" stroke={C.ink} strokeWidth={2} />
      <text x={-20} y={4} fontFamily="sans-serif" fontSize={11} fontWeight={900} fill="#ffffff" textAnchor="middle" letterSpacing={2}>EVER GIVEN</text>
    </g>
    <g transform="translate(195 -30)">
      <rect x={-14} y={-4} width={28} height={10} rx={2} fill="#343a40" stroke={C.ink} strokeWidth={1.5} /><rect x={-10} y={-16} width={20} height={12} fill="#ffb703" stroke={C.ink} strokeWidth={2} />
      <polyline points="-2,-12 -18,-24 -32,-8 -40,-2" stroke="#ffb703" strokeWidth={4} fill="none" strokeLinecap="round" /><path d="M -44 -6 L -36 0 L -42 6 Z" fill="#343a40" stroke={C.ink} strokeWidth={1.5} /><ellipse cx={-38} cy={4} rx={12} ry={5} fill="#b08968" />
    </g>
    <Figure x={160} y={-26} s={0.4} shirt="#f77f00" /><Label x={0} y={-130} t="SUEZ CANAL · KM 151" size={13} color="#6b705c" /><Label x={0} y={145} t="EVER GIVEN · MARCH 2021" size={12} color="#6b705c" />
  </g>
);

const Skiff: React.FC<{x: number; y: number; frame: number; active: boolean}> = ({x, y, frame, active}) => (
  <g transform={`translate(${x + (active ? Math.sin(frame / 6) * 15 : 0)} ${y + Math.sin(frame / 5) * 4})`}>
    <path d={`M -10 14 Q ${-60 - (active ? 40 : 0)} ${16 + Math.sin(frame / 4) * 4} ${-120 - (active ? 60 : 0)} 10`} stroke="#ffffff" strokeWidth={active ? 4 : 2} fill="none" opacity={0.8} />
    <path d={`M -5 18 Q ${-50 - (active ? 30 : 0)} ${22 + Math.cos(frame / 4) * 4} ${-90 - (active ? 40 : 0)} 20`} stroke="#90e0ef" strokeWidth={2} fill="none" opacity={0.6} />
    <rect x={-18} y={-4} width={8} height={20} fill="#212529" stroke={C.ink} strokeWidth={2} /><polygon points="-16,4 46,4 58,16 -12,16" fill="#8d6e4c" stroke={C.ink} strokeWidth={2.5} />
    <Figure x={-2} y={6} s={0.45} shirt="#1d3557" /><Figure x={20} y={6} s={0.45} shirt="#e63946" /><Figure x={38} y={6} s={0.45} shirt="#343a40" />
    <line x1={42} y1={2} x2={56} y2={-12} stroke="#ced4da" strokeWidth={2} strokeLinecap="round" /><Label x={20} y={-8} t="PIRATE SKIFF" size={8} color={C.red} />
  </g>
);

export const Boxship: React.FC<WorldProps> = ({frame, tod, you, plane}) => {
  const has = (k: string) => (plane ?? '').split(' ').includes(k);
  const showerOn = has('shower:on');
  const craneMoving = has('crane');
  const storm = has('storm');
  const roll = has('roll');
  const phone = has('phone');
  const skiff = has('skiff');

  const [s0, s1] = storm ? (['#212529', '#495057'] as [string, string]) : SKY[tod];
  const dark = tod === 'night' || storm;
  const swell = storm ? 22 : 7;
  const shipRoll = storm ? Math.sin(frame / 18) * 3.5 : roll ? Math.sin(frame / 22) * 2.5 : 0;

  const seaPath = (baseY: number) => {
    let d = `M -1600 ${baseY}`;
    for (let px = -1600; px <= 3200; px += 80) d += ` q 40 ${(px / 80) % 2 ? swell : -swell} 80 0`;
    return `${d} L 3200 1500 L -1600 1500 Z`;
  };

  return (
    <g>
      <defs>
        <linearGradient id="bs-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={s0} /><stop offset="1" stopColor={s1} /></linearGradient>
        <linearGradient id="bs-sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={dark ? '#0c1b33' : '#0077b6'} /><stop offset="1" stopColor="#03045e" /></linearGradient>
      </defs>

      {/* Sky & celestial body */}
      <rect x={-1600} y={-700} width={4800} height={1500} fill="url(#bs-sky)" />
      {tod === 'night' && !storm && Array.from({length: 60}).map((_, i) => (
        <circle key={i} cx={-1200 + ((i * 311) % 4400)} cy={-500 + ((i * 173) % 1100)} r={1.5 + (i % 2)} fill="#fff" opacity={0.3 + 0.4 * Math.sin((frame + i * 11) / 12)} />
      ))}
      {!dark && <circle cx={tod === 'day' ? 1500 : tod === 'dusk' ? 2200 : 300} cy={tod === 'day' ? 120 : 540} r={52} fill="#ffd166" stroke={C.ink} strokeWidth={4} />}

      {/* Suez Canal vignette */}
      <SuezCanal x={-550} y={500} />

      {/* Ocean deep water */}
      <path d={seaPath(760)} fill="url(#bs-sea)" stroke={C.ink} strokeWidth={4} />

      {/* Port Quay at left */}
      <rect x={-400} y={720} width={640} height={240} fill="#adb5bd" stroke={C.ink} strokeWidth={5} />
      <line x1={-400} y1={720} x2={240} y2={720} stroke={C.ink} strokeWidth={6} />
      {Array.from({length: 16}).map((_, i) => <rect key={i} x={-400 + i * 40} y={720} width={20} height={8} fill="#ffd166" />)}
      {[-120, 60, 160].map((bx) => (
        <g key={bx} transform={`translate(${bx} 720)`}>
          <rect x={-8} y={-14} width={16} height={14} fill="#212529" stroke={C.ink} strokeWidth={2.5} />
          <ellipse cx={0} cy={-14} rx={12} ry={5} fill="#495057" stroke={C.ink} strokeWidth={2} />
        </g>
      ))}
      <Crane x={-40} frame={frame} active={craneMoving} /><Label x={60} y={755} t="BERTH 4 · PORT TERMINAL" size={12} color="#212529" />

      {/* Ship group (tilts in storm/roll) */}
      <g transform={`rotate(${shipRoll} 1250 760)`}>
        {/* Lower Hull (Antifouling Red) & Upper Hull (Navy / Black) */}
        <path d="M 140 760 Q 130 840 280 880 L 2260 880 Q 2340 850 2340 760 Z" fill="#9e2a2b" stroke={C.ink} strokeWidth={5} />
        <circle cx={140} cy={820} r={28} fill="#9e2a2b" stroke={C.ink} strokeWidth={4} />
        <polygon points="210,670 2240,670 2240,760 140,760" fill="#1b2a47" stroke={C.ink} strokeWidth={5} />
        <line x1={140} y1={760} x2={2340} y2={760} stroke="#ffffff" strokeWidth={3} />
        <text x={340} y={740} fontFamily="sans-serif" fontSize={18} fontWeight={900} fill="#ffffff" letterSpacing={4}>PACIFIC VOYAGER</text>
        <rect x={220} y={650} width={50} height={20} fill="#6c757d" stroke={C.ink} strokeWidth={3} /><circle cx={245} cy={660} r={6} fill="#495057" stroke={C.ink} strokeWidth={2} />

        {/* Stern Propeller & Rudder */}
        <g transform="translate(2320 840)">
          <line x1={-30} y1={0} x2={10} y2={0} stroke="#ced4da" strokeWidth={6} />
          <g transform={`rotate(${(frame * 12) % 360})`}>
            {[0, 60, 120, 180, 240, 300].map((a) => (
              <ellipse key={a} cx={16} cy={0} rx={14} ry={6} fill="#d4a373" stroke={C.ink} strokeWidth={2} transform={`rotate(${a})`} />
            ))}
          </g>
        </g>
        <polygon points="2345,780 2375,780 2365,880 2345,880" fill="#495057" stroke={C.ink} strokeWidth={4} />

        {/* Container Stacks */}
        {TIERS.map((tierCount, bi) => {
          const bx = 360 + bi * 115;
          return (
            <g key={bi}>
              <line x1={bx + 104} y1={670} x2={bx + 104} y2={670 - tierCount * 34} stroke="#ced4da" strokeWidth={2} />
              {Array.from({length: tierCount}).map((_, ti) => {
                const by = 670 - (ti + 1) * 34;
                const c = BOX_COLORS[(bi * 7 + ti * 5) % BOX_COLORS.length];
                return <Container key={ti} x={bx} y={by} w={102} h={32} c={c} />;
              })}
              {tierCount >= 3 && (
                <g stroke="#adb5bd" strokeWidth={2} opacity={0.7}>
                  <line x1={bx} y1={670} x2={bx + 102} y2={670 - 68} /><line x1={bx + 102} y1={670} x2={bx} y2={670 - 68} />
                </g>
              )}
            </g>
          );
        })}

        {/* Accommodation Tower (x ~1780..2220) */}
        <rect x={1780} y={220} width={440} height={470} fill="#f8f9fa" stroke={C.ink} strokeWidth={5} />
        {[295, 395, 495, 595].map((dy) => <line key={dy} x1={1780} y1={dy} x2={2220} y2={dy} stroke={C.ink} strokeWidth={4} />)}
        <line x1={1980} y1={220} x2={1980} y2={140} stroke={C.ink} strokeWidth={4} /><line x1={1950} y1={170} x2={2010} y2={170} stroke={C.ink} strokeWidth={3} />
        <ellipse cx={1980} cy={140} rx={22} ry={4} fill="#e9ecef" stroke={C.ink} strokeWidth={2.5} transform={`rotate(${(frame * 8) % 360} 1980 140)`} />
        <circle cx={2030} cy={205} r={14} fill="#ffffff" stroke={C.ink} strokeWidth={3} />

        {/* Funnel & Lifeboat */}
        <polygon points="2205,220 2255,220 2265,490 2205,490" fill="#1b2a47" stroke={C.ink} strokeWidth={4} />
        <rect x={2205} y={260} width={55} height={24} fill="#2a9d8f" stroke={C.ink} strokeWidth={2} />
        {Array.from({length: 3}).map((_, i) => (
          <circle key={i} cx={2235 + ((frame * 2 + i * 30) % 70)} cy={200 - ((frame * 2 + i * 30) % 70) * 0.7} r={8 + i * 4} fill="#ced4da" opacity={0.4} />
        ))}
        <line x1={2215} y1={510} x2={2265} y2={560} stroke={C.ink} strokeWidth={4} />
        <polygon points="2220,512 2252,544 2240,554 2210,522" fill="#f77f00" stroke={C.ink} strokeWidth={2.5} />

        {/* Deck 7: Bridge (y 220..295) */}
        <polygon points="1760,220 2240,220 2220,295 1780,295" fill="#e9ecef" stroke={C.ink} strokeWidth={4} />
        <rect x={1775} y={226} width={430} height={32} rx={3} fill="#bde0fe" opacity={0.7} stroke={C.ink} strokeWidth={2.5} />
        {Array.from({length: 9}).map((_, i) => <line key={i} x1={1775 + (i + 1) * 43} y1={226} x2={1775 + (i + 1) * 43} y2={258} stroke={C.ink} strokeWidth={2} />)}
        <rect x={1925} y={268} width={50} height={27} fill="#343a40" stroke={C.ink} strokeWidth={2} /><circle cx={1940} cy={274} r={6} fill="none" stroke="#ced4da" strokeWidth={2} />
        <rect x={1985} y={265} width={26} height={18} rx={2} fill="#06d6a0" stroke={C.ink} strokeWidth={1.5} />
        <line x1={1998} y1={274} x2={1998 + Math.cos(frame / 6) * 10} y2={274 + Math.sin(frame / 6) * 8} stroke="#118ab2" strokeWidth={2} />
        <rect x={2015} y={265} width={26} height={18} rx={2} fill="#3a86ff" stroke={C.ink} strokeWidth={1.5} />
        <g transform="translate(1795 268)"><line x1={0} y1={0} x2={0} y2={27} stroke={C.ink} strokeWidth={3} /><rect x={-6} y={-8} width={12} height={8} fill="#495057" stroke={C.ink} strokeWidth={1.5} /></g>
        <ShipClock x={2065} y={248} frame={frame} /><Label x={1860} y={242} t="BRIDGE" size={10} color="#212529" />
        {you !== 'bridge' && <Figure x={1950} y={295} s={0.7} shirt="#1d3557" />}

        {/* Deck 6: Cabin & Bathroom (y 300..395) */}
        <rect x={1785} y={300} width={220} height={95} fill="#fdf0d5" stroke={C.ink} strokeWidth={3} />
        <rect x={1795} y={355} width={85} height={35} rx={3} fill="#a8dadc" stroke={C.ink} strokeWidth={2} />
        <rect x={1798} y={350} width={22} height={12} rx={2} fill="#ffffff" stroke={C.ink} strokeWidth={1.5} /><rect x={1795} y={368} width={85} height={14} rx={2} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
        <circle cx={1840} cy={328} r={14} fill="#8ecae6" stroke="#8d6e4c" strokeWidth={3} />
        <rect x={1925} y={365} width={55} height={6} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
        <line x1={1935} y1={371} x2={1935} y2={395} stroke={C.ink} strokeWidth={2} /><line x1={1970} y1={371} x2={1970} y2={395} stroke={C.ink} strokeWidth={2} />
        <rect x={1940} y={345} width={24} height={18} rx={2} fill="#bde0fe" stroke={C.ink} strokeWidth={1.5} />
        {phone && (
          <g>
            <circle cx={1952} cy={354} r={18} fill="#48cae4" opacity={0.35 + 0.15 * Math.sin(frame / 5)} /><circle cx={1952} cy={352} r={4} fill="#d90429" />
          </g>
        )}
        <Label x={1890} y={320} t="CREW CABIN" size={9} />
        {you !== 'cabin' && <Figure x={1860} y={370} s={0.65} shirt="#f4a261" pose="lie" />}

        {/* Bathroom */}
        <rect x={2005} y={300} width={210} height={95} fill="#e0fbfc" stroke={C.ink} strokeWidth={3} />
        <rect x={2020} y={312} width={55} height={83} fill="#bde0fe" opacity={0.35} stroke={C.ink} strokeWidth={2} />
        <line x1={2028} y1={322} x2={2038} y2={326} stroke={C.ink} strokeWidth={3} />
        {showerOn && (
          <g>
            {[0, 1, 2, 3].map((si) => (
              <line key={si} x1={2038} y1={326} x2={2040 + si * 8} y2={390} stroke="#0077b6" strokeWidth={2} strokeDasharray="4 4" strokeDashoffset={frame * 3} />
            ))}
            <circle cx={2050} cy={345} r={12} fill="#ffffff" opacity={0.4 + 0.3 * Math.sin(frame / 6)} />
          </g>
        )}
        <rect x={2095} y={352} width={34} height={22} rx={4} fill="#ffffff" stroke={C.ink} strokeWidth={2} /><rect x={2165} y={358} width={24} height={34} rx={6} fill="#ffffff" stroke={C.ink} strokeWidth={2} />
        <Label x={2110} y={320} t="BATHROOM" size={9} />
        {you !== 'shower' && <Figure x={2065} y={395} s={0.65} shirt="#457b9d" />}

        {/* Deck 5: Galley & Mess (y 400..495) */}
        <rect x={1785} y={400} width={210} height={95} fill="#e9ecef" stroke={C.ink} strokeWidth={3} />
        <rect x={1805} y={448} width={70} height={47} fill="#adb5bd" stroke={C.ink} strokeWidth={2.5} /><line x1={1805} y1={442} x2={1875} y2={442} stroke={C.ink} strokeWidth={2.5} />
        {[0, 1].map((pi) => <rect key={pi} x={1812 + pi * 32} y={446} width={26} height={20} rx={3} fill="#ced4da" stroke={C.ink} strokeWidth={2} />)}
        {[0, 1].map((si) => <path key={si} d={`M ${1825 + si * 32} 440 q 6 -10 0 -22`} stroke="#ffffff" strokeWidth={2} fill="none" opacity={0.4 + 0.5 * Math.sin((frame + si * 9) / 6)} />)}
        <rect x={1910} y={455} width={70} height={40} fill="#6c757d" stroke={C.ink} strokeWidth={2} /><Label x={1860} y={415} t="GALLEY" size={9} />
        {you !== 'galley' && <Figure x={1880} y={495} s={0.7} shirt="#ffffff" hat="chef" />}

        {/* Mess */}
        <rect x={1995} y={400} width={220} height={95} fill="#faedcd" stroke={C.ink} strokeWidth={3} />
        <rect x={2030} y={462} width={110} height={10} rx={2} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
        <line x1={2055} y1={472} x2={2055} y2={495} stroke={C.ink} strokeWidth={3} /><line x1={2115} y1={472} x2={2115} y2={495} stroke={C.ink} strokeWidth={3} />
        <circle cx={2035} cy={475} r={7} fill="#ced4da" stroke={C.ink} strokeWidth={2} /><circle cx={2135} cy={475} r={7} fill="#ced4da" stroke={C.ink} strokeWidth={2} />
        <rect x={2165} y={420} width={38} height={28} rx={2} fill="#343a40" stroke={C.ink} strokeWidth={2} /><rect x={2169} y={424} width={30} height={20} fill="#90e0ef" opacity={0.8} />
        <Label x={2105} y={415} t="MESS ROOM" size={9} />
        {you !== 'mess' && <Figure x={2090} y={495} s={0.7} shirt="#f4a261" pose="sit" />}

        {/* Deck 4: Provisions & Gym (y 500..595) */}
        <rect x={1785} y={500} width={210} height={95} fill="#ede0d4" stroke={C.ink} strokeWidth={3} />
        <rect x={1800} y={512} width={90} height={80} fill="#d5bdaf" stroke={C.ink} strokeWidth={2} />
        <line x1={1800} y1={538} x2={1890} y2={538} stroke={C.ink} strokeWidth={2} /><line x1={1800} y1={566} x2={1890} y2={566} stroke={C.ink} strokeWidth={2} />
        {Array.from({length: 6}).map((_, i) => <ellipse key={i} cx={1815 + (i % 3) * 26} cy={580} rx={10} ry={6} fill="#f4f1de" stroke={C.ink} strokeWidth={1.5} />)}
        {Array.from({length: 8}).map((_, i) => <rect key={i} x={1808 + (i % 4) * 20} y={544 + Math.floor(i / 4) * -26} width={14} height={16} rx={2} fill={['#e63946', '#ffb703', '#2a9d8f', '#457b9d'][i % 4]} stroke={C.ink} strokeWidth={1} />)}
        <rect x={1925} y={512} width={60} height={80} fill="#ced4da" stroke={C.ink} strokeWidth={2.5} /><circle cx={1940} cy={545} r={6} fill="#ffffff" stroke={C.ink} strokeWidth={1.5} /><Label x={1860} y={515} t="PROVISIONS" size={9} />

        {/* Gym */}
        <rect x={1995} y={500} width={220} height={95} fill="#d8e2dc" stroke={C.ink} strokeWidth={3} />
        <rect x={2020} y={575} width={55} height={12} rx={2} fill="#343a40" stroke={C.ink} strokeWidth={2} /><line x1={2068} y1={575} x2={2072} y2={545} stroke={C.ink} strokeWidth={3} />
        <Figure x={2048} y={572 + Math.abs(Math.sin(frame / 4)) * -4} s={0.65} shirt="#e63946" />
        <rect x={2100} y={566} width={45} height={8} fill="#1d3557" stroke={C.ink} strokeWidth={2} /><line x1={2122} y1={574} x2={2122} y2={595} stroke={C.ink} strokeWidth={3} />
        <line x1={2095} y1={552} x2={2150} y2={552} stroke="#adb5bd" strokeWidth={3} /><circle cx={2095} cy={552} r={7} fill="#212529" stroke={C.ink} strokeWidth={2} /><circle cx={2150} cy={552} r={7} fill="#212529" stroke={C.ink} strokeWidth={2} />
        <Label x={2105} y={515} t="GYM" size={9} />

        {/* Deck 3: Citadel & Office (y 600..690) */}
        <rect x={1785} y={600} width={210} height={90} fill="#495057" stroke={C.ink} strokeWidth={3} />
        <rect x={1788} y={608} width={24} height={80} fill="#6c757d" stroke={C.ink} strokeWidth={3} /><circle cx={1800} cy={648} r={8} fill="none" stroke="#ffd166" strokeWidth={3} />
        <rect x={1825} y={660} width={38} height={28} rx={2} fill="#48cae4" stroke={C.ink} strokeWidth={1.5} /><rect x={1868} y={664} width={32} height={24} rx={2} fill="#d4a373" stroke={C.ink} strokeWidth={1.5} />
        <rect x={1945} y={645} width={40} height={42} fill="#212529" stroke={C.ink} strokeWidth={2} /><circle cx={1955} cy={655} r={3} fill="#e63946" />
        <Label x={1890} y={616} t="CITADEL · SAFE ROOM" size={9} color="#ffd166" />
        {you !== 'citadel' && <Figure x={1910} y={688} s={0.65} shirt="#f4a261" pose="sit" />}

        {/* Ship Office */}
        <rect x={1995} y={600} width={220} height={90} fill="#ced4da" stroke={C.ink} strokeWidth={3} />
        <rect x={2015} y={650} width={60} height={38} fill="#495057" stroke={C.ink} strokeWidth={2} />
        <rect x={2120} y={635} width={40} height={53} fill="#f77f00" stroke={C.ink} strokeWidth={2} /><Label x={2105} y={616} t="SHIP OFFICE" size={9} />

        {/* Decks 1-2: Engine Room (y 695..890) */}
        <rect x={1780} y={695} width={435} height={185} fill="#2b2d42" stroke={C.ink} strokeWidth={4} />
        <rect x={1840} y={735} width={220} height={145} fill="#3d405b" stroke={C.ink} strokeWidth={3.5} />
        {Array.from({length: 6}).map((_, i) => (
          <g key={i} transform={`translate(${1855 + i * 34} 735)`}>
            <rect x={0} y={-14} width={24} height={14} fill="#6c757d" stroke={C.ink} strokeWidth={2} /><line x1={12} y1={0} x2={12} y2={45} stroke="#ffd166" strokeWidth={2.5} />
          </g>
        ))}
        <ellipse cx={1830} cy={740} rx={22} ry={16} fill="#495057" stroke={C.ink} strokeWidth={2.5} />
        <line x1={1780} y1={765} x2={2215} y2={765} stroke="#ffd166" strokeWidth={4} /><line x1={1780} y1={830} x2={2215} y2={830} stroke="#ffd166" strokeWidth={4} />
        <path d="M 1795 700 V 870" stroke="#f77f00" strokeWidth={6} fill="none" /><path d="M 1810 700 V 870" stroke="#2a9d8f" strokeWidth={6} fill="none" />
        <path d="M 2150 700 V 870" stroke="#0077b6" strokeWidth={6} fill="none" /><path d="M 2170 700 V 870" stroke="#ced4da" strokeWidth={7} fill="none" />
        <line x1={2060} y1={840} x2={2215} y2={840} stroke="#ced4da" strokeWidth={10} /><Label x={1955} y={715} t="MAIN ENGINE" size={9} color="#ffd166" />
        <Figure x={1980} y={765} s={0.7} shirt="#f4a261" />

        {/* Sloping Gangway down to Quay */}
        <g transform="translate(145 675)">
          <line x1={130} y1={0} x2={0} y2={45} stroke="#adb5bd" strokeWidth={6} strokeLinecap="round" />
          <line x1={130} y1={-12} x2={0} y2={33} stroke="#adb5bd" strokeWidth={3} /><path d="M 130 5 L 0 50 L 0 60 L 130 15 Z" fill="#2a9d8f" opacity={0.4} />
          {Array.from({length: 8}).map((_, i) => <line key={i} x1={15 + i * 14} y1={40 - i * 4.5} x2={15 + i * 14} y2={52 - i * 4.5} stroke={C.ink} strokeWidth={2} />)}
          {you === 'gangway' && <rect x={75} y={16} width={14} height={8} rx={2} fill="#d90429" stroke={C.ink} strokeWidth={1.5} />}
        </g>

        {/* You figure placement on ship */}
        {you && YOU[you] && <Figure x={YOU[you][0]} y={YOU[you][1]} s={0.75} cap shirt={C.red} pose={YOU[you][2]} />}
      </g>

      {/* Skiff at Sea (approaching ship on right) */}
      <Skiff x={2460} y={770} frame={frame} active={skiff} />

      {/* Storm Rain streaks */}
      {storm && Array.from({length: 45}).map((_, i) => (
        <line
          key={i}
          x1={-300 + ((i * 83 + frame * 20) % 3200)}
          y1={-100 + ((i * 59 + frame * 28) % 1100)}
          x2={-325 + ((i * 83 + frame * 20) % 3200)}
          y2={-60 + ((i * 59 + frame * 28) % 1100)}
          stroke="#a8dadc"
          strokeWidth={2}
          opacity={0.45}
        />
      ))}
    </g>
  );
};
