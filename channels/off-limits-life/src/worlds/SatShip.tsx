import React from 'react';
import {C, Figure, Label, MARKER} from '../ui';
import type {Tod} from './SouthPole';

/** IX005 world: dive support vessel, side cutaway. Waterline y=560, seabed y~1250.
 *  On deck: saturation chamber (living + wet chamber, medical lock), life-support control room, galley; moonpool + bell; hyperbaric lifeboat.
 *  `plane` = state string: 'dock' (bell mated to chamber) · 'down' / 'up' (bell travelling) · default bell on the seabed
 *  · 'voice' · 'temp' · 'lock' · 'deco' (pressure gauge counting down) · 'open' (chamber door) · 'storm' · 'cut' (umbilical snapped)
 *  · 'alarm' · 'launch' (lifeboat in the water). Motion small and slow (teardown gate reads big motion as pan). */
const V: Record<string, [number, number, number]> = {
  wide: [1100, 640, 0.62],
  ship: [1100, 400, 1.1],
  sea: [1100, 700, 1.4],
  deck: [1250, 400, 4],
  galley: [390, 360, 4.5],
  chamber: [760, 340, 3.6],
  door: [560, 340, 5.5],
  bunk: [640, 362, 7],
  table: [810, 380, 7],
  shower: [955, 345, 6.5],
  toilet: [1040, 360, 7],
  lock: [1120, 345, 6.5],
  control: [1300, 345, 4.5],
  gauge: [1300, 320, 6.5],
  bell: [1550, 820, 1.7],
  moonpool: [1550, 420, 3],
  bellin: [1550, 1150, 6],
  seabed: [1620, 1180, 2.4],
  diver: [1660, 1190, 4.5],
  pipe: [1760, 1210, 3.5],
  lifeboat: [1790, 470, 3.2],
};
export const viewOf = (name: string, _tod: Tod): [number, number, number] => V[name] ?? V.wide;

const SKY: Record<Tod, [string, string]> = {
  day: ['#8ecae6', '#e0f1f8'],
  dusk: ['#5e548e', '#f4a261'],
  night: ['#070b1f', '#1b2a4a'],
  dawn: ['#3d405b', '#f2cc8f'],
};

const YOU: Record<string, [number, number, 'stand' | 'sit' | 'lie']> = {
  chamber: [760, 405, 'stand'],
  bunk: [640, 362, 'lie'],
  table: [830, 405, 'sit'],
  shower: [950, 405, 'stand'],
  bellin: [1545, 1170, 'stand'],
  diver: [1660, 1235, 'stand'],
  pipe: [1720, 1235, 'stand'],
  lifeboat: [1790, 360, 'sit'],
  deck: [1180, 420, 'stand'],
};

const Bell: React.FC<{x: number; y: number}> = ({x, y}) => (
  <g transform={`translate(${x} ${y})`}>
    <path d="M -46 34 L -46 -16 Q 0 -70 46 -16 L 46 34 Z" fill="#ffb703" stroke={C.ink} strokeWidth={6} />
    <circle cx={-16} cy={-6} r={11} fill="#8ecae6" stroke={C.ink} strokeWidth={4} />
    <circle cx={18} cy={-6} r={11} fill="#8ecae6" stroke={C.ink} strokeWidth={4} />
    <rect x={-24} y={22} width={48} height={12} fill="#495057" stroke={C.ink} strokeWidth={3} />
  </g>
);

export const SatShip: React.FC<{frame: number; tod: Tod; you?: string; plane?: string; dur: number}> = ({frame, tod, you, plane, dur}) => {
  const storm = plane === 'storm';
  const dark = tod === 'night' || storm;
  const [s0, s1] = storm ? (['#343a40', '#6c757d'] as [string, string]) : SKY[tod];
  const t = Math.min(1, frame / Math.max(1, dur));
  const bellY = plane === 'dock' ? 300 : plane === 'down' ? 640 + 360 * t : plane === 'up' ? 1000 - 360 * t : 1150;
  const bellX = plane === 'dock' ? 1550 : 1550;
  const depth = Math.round(120 - 100 * t);
  const swell = storm ? 18 : 6;
  let seaPath = `M -1200 560`;
  for (let x = -1200; x <= 3400; x += 80) seaPath += ` q 40 ${(x / 80) % 2 ? swell : -swell} 80 0`;
  return (
    <g>
      <defs>
        <linearGradient id="ss-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={s0} />
          <stop offset="1" stopColor={s1} />
        </linearGradient>
        <linearGradient id="ss-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={dark ? '#1d3557' : '#2a6f97'} />
          <stop offset="1" stopColor="#050f1f" />
        </linearGradient>
      </defs>
      <rect x={-1200} y={-700} width={4600} height={1260} fill="url(#ss-sky)" />
      {tod === 'night' && !storm && Array.from({length: 60}).map((_, i) => <circle key={i} cx={-1100 + ((i * 397) % 4400)} cy={-600 + ((i * 211) % 1000)} r={1.5 + (i % 3)} fill="#fff" opacity={0.6} />)}
      {!dark && <circle cx={260} cy={80} r={56} fill="#ffd23f" stroke={C.ink} strokeWidth={5} />}
      <rect x={-1200} y={560} width={4600} height={900} fill="url(#ss-sea)" />
      <path d={seaPath} stroke="#ffffff" strokeWidth={4} fill="none" opacity={0.5} />
      {/* seabed + pipeline */}
      <path d="M -1200 1260 Q 400 1230 1300 1255 T 3400 1245 L 3400 1500 L -1200 1500 Z" fill="#b08968" stroke={C.ink} strokeWidth={5} />
      <rect x={1300} y={1222} width={800} height={22} rx={10} fill="#e9c46a" stroke={C.ink} strokeWidth={5} />
      <rect x={1690} y={1196} width={60} height={30} fill="#adb5bd" stroke={C.ink} strokeWidth={4} />
      <Label x={1900} y={1290} t="PIPELINE · ~100 m DOWN" size={18} color="#fff" />
      {/* hull */}
      <path d="M 180 420 L 2060 420 L 1990 600 L 260 600 Z" fill="#c1121f" stroke={C.ink} strokeWidth={7} />
      <rect x={180} y={404} width={1880} height={20} fill="#f1faee" stroke={C.ink} strokeWidth={5} />
      {/* moonpool */}
      <rect x={1505} y={424} width={90} height={176} fill="#1d3557" stroke={C.ink} strokeWidth={4} />
      <Label x={1550} y={622} t="MOONPOOL" size={12} color="#fff" />
      {/* bell gantry + wire */}
      <path d="M 1490 404 L 1490 230 L 1610 230 L 1610 404" fill="none" stroke={C.ink} strokeWidth={8} />
      <line x1={1550} y1={232} x2={1550} y2={bellY - 40} stroke="#222" strokeWidth={3} />
      <Bell x={bellX} y={bellY} />
      <Label x={1640} y={bellY - 30} t="DIVING BELL" size={14} color={bellY > 560 ? '#fff' : C.ink} anchor="start" />
      {/* diver + umbilical on the seabed */}
      {bellY >= 1150 && (
        <g>
          {plane === 'cut' ? (
            <g>
              <path d="M 1580 1180 Q 1610 1150 1630 1170" stroke="#f77f00" strokeWidth={5} fill="none" />
              <path d="M 1655 1185 Q 1660 1200 1668 1200" stroke="#f77f00" strokeWidth={5} fill="none" />
            </g>
          ) : (
            <path d="M 1580 1180 Q 1620 1130 1662 1200" stroke="#f77f00" strokeWidth={5} fill="none" />
          )}
          {you !== 'diver' && you !== 'pipe' && <Figure x={1660} y={1235} s={0.55} shirt="#264653" />}
          <Label x={1640} y={1110} t="UMBILICAL" size={12} color="#ffd166" />
        </g>
      )}
      {/* galley */}
      <rect x={300} y={300} width={180} height={104} fill="#f6e3e3" stroke={C.ink} strokeWidth={5} />
      <rect x={312} y={350} width={156} height={34} fill="#adb5bd" stroke={C.ink} strokeWidth={3} />
      <Figure x={440} y={400} s={0.55} shirt="#ffffff" hat="chef" />
      <Label x={390} y={292} t="SHIP'S GALLEY" size={14} />
      {/* saturation chamber complex */}
      <rect x={520} y={276} width={640} height={128} rx={60} fill={C.steel} stroke={C.ink} strokeWidth={7} />
      <rect x={540} y={290} width={360} height={100} rx={44} fill="#fdf0d5" stroke={C.ink} strokeWidth={4} />
      <rect x={904} y={290} width={170} height={100} fill="#d9f0f0" stroke={C.ink} strokeWidth={4} />
      {/* bunks */}
      {[332, 362].map((by) => (
        <g key={by}>
          <rect x={585} y={by} width={110} height={13} rx={3} fill="#a8dadc" stroke={C.ink} strokeWidth={2.5} />
          <rect x={588} y={by - 7} width={22} height={8} rx={3} fill="#fff" stroke={C.ink} strokeWidth={2} />
        </g>
      ))}
      <path d="M 700 318 q 8 22 0 58" stroke={C.ink} strokeWidth={2} fill="#e63946" opacity={0.8} />
      {/* table */}
      <rect x={770} y={368} width={70} height={8} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
      <line x1={805} y1={376} x2={805} y2={404} stroke={C.ink} strokeWidth={3} />
      <circle cx={790} cy={364} r={5} fill="#f4a261" stroke={C.ink} strokeWidth={1.5} />
      {you !== 'chamber' && you !== 'table' && <Figure x={860} y={404} s={0.5} shirt="#2a9d8f" flip />}
      <Label x={720} y={268} t="LIVING CHAMBER" size={14} />
      {/* door (hatch) at the left end */}
      <circle cx={540} cy={340} r={30} fill={plane === 'open' ? '#fff3b0' : C.steelDark} stroke={C.ink} strokeWidth={5} />
      {plane !== 'open' && <circle cx={540} cy={340} r={12} fill="none" stroke={C.ink} strokeWidth={4} />}
      {plane === 'open' && <ellipse cx={500} cy={340} rx={10} ry={30} fill={C.steelDark} stroke={C.ink} strokeWidth={4} />}
      {/* wet chamber: shower + toilet */}
      <rect x={916} y={300} width={60} height={88} fill="#bde0fe" stroke={C.ink} strokeWidth={2.5} />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={936 + i * 8} y1={318 + i * 8} x2={936 + i * 8} y2={326 + i * 8} stroke="#219ebc" strokeWidth={2} />
      ))}
      <rect x={1026} y={358} width={28} height={30} rx={9} fill="#fff" stroke={C.ink} strokeWidth={2.5} />
      <rect x={1022} y={340} width={36} height={8} fill={C.steelDark} stroke={C.ink} strokeWidth={2} />
      <text x={1040} y={334} fontSize={7} fontFamily="sans-serif" fill={C.red} textAnchor="middle">VALVE LOCK</text>
      <path d="M 1040 388 L 1040 420" stroke={C.ink} strokeWidth={4} />
      <Label x={990} y={268} t="SHOWER · TOILET" size={12} />
      {/* medical / food lock */}
      <rect x={1088} y={312} width={64} height={64} rx={8} fill={C.steel} stroke={C.ink} strokeWidth={5} />
      <rect x={1096} y={320} width={48} height={48} rx={5} fill={plane === 'lock' ? '#ffe8a3' : C.paper} stroke={C.ink} strokeWidth={3} />
      <rect x={1104} y={336} width={32} height={18} rx={4} fill="#e9c46a" stroke={C.ink} strokeWidth={2.5} />
      <Label x={1120} y={304} t="FOOD LOCK" size={11} />
      {/* control room */}
      <rect x={1180} y={280} width={240} height={124} fill="#efe9dc" stroke={C.ink} strokeWidth={5} />
      <circle cx={1300} cy={318} r={26} fill="#fff" stroke={C.ink} strokeWidth={4} />
      <text x={1300} y={324} fontFamily={MARKER} fontSize={16} textAnchor="middle" fill={C.red}>{plane === 'deco' ? `${depth} m` : plane === 'temp' ? '90°F' : '120 m'}</text>
      <text x={1300} y={358} fontSize={8} fontFamily="sans-serif" textAnchor="middle" fill={C.navy}>{plane === 'deco' ? 'DECOMPRESSION' : plane === 'temp' ? 'CHAMBER TEMP' : 'CHAMBER DEPTH'}</text>
      <rect x={1200} y={300} width={50} height={36} fill="#14213d" stroke={C.ink} strokeWidth={2.5} />
      {plane === 'voice' && <text x={1225} y={324} fontSize={10} fontFamily="sans-serif" fill="#52ffb8" textAnchor="middle">UNSCRAMBLE</text>}
      <Figure x={1380} y={400} s={0.55} shirt="#ffffff" />
      <Label x={1300} y={272} t="LIFE SUPPORT" size={12} />
      {plane === 'voice' && (
        <g>
          {[0, 1, 2].map((i) => (
            <path key={i} d={`M ${790 + i * 14} 330 q 10 10 0 20`} stroke={C.orange} strokeWidth={3} fill="none" />
          ))}
          <text x={835} y={322} fontFamily={MARKER} fontSize={14} fill={C.orange}>eee!</text>
        </g>
      )}
      {/* hyperbaric lifeboat */}
      {plane === 'launch' ? (
        <g>
          <rect x={1720} y={520} width={150} height={56} rx={28} fill="#f77f00" stroke={C.ink} strokeWidth={6} />
          <circle cx={1760} cy={548} r={10} fill="#8ecae6" stroke={C.ink} strokeWidth={3} />
        </g>
      ) : (
        <g>
          <line x1={1880} y1={404} x2={1880} y2={300} stroke={C.ink} strokeWidth={6} />
          <line x1={1880} y1={300} x2={1800} y2={300} stroke={C.ink} strokeWidth={6} />
          <rect x={1720} y={320} width={150} height={60} rx={30} fill="#f77f00" stroke={C.ink} strokeWidth={6} />
          <circle cx={1760} cy={350} r={10} fill="#8ecae6" stroke={C.ink} strokeWidth={3} />
        </g>
      )}
      <Label x={1795} y={plane === 'launch' ? 600 : 400} t="HYPERBARIC LIFEBOAT" size={11} color={plane === 'launch' ? '#fff' : C.ink} />
      {/* bridge */}
      <rect x={1900} y={250} width={140} height={154} rx={8} fill="#f1faee" stroke={C.ink} strokeWidth={6} />
      {[1912, 1956, 2000].map((x) => (
        <rect key={x} x={x} y={268} width={30} height={24} fill="#457b9d" stroke={C.ink} strokeWidth={3} />
      ))}
      {plane === 'alarm' && <circle cx={1970} cy={240} r={10} fill="#e63946" stroke={C.ink} strokeWidth={3} opacity={0.7 + 0.3 * Math.sin(frame / 8)} />}
      {storm && (
        <g opacity={0.35}>
          {Array.from({length: 50}).map((_, i) => (
            <line key={i} x1={-500 + ((i * 173) % 3200)} y1={-300 + ((i * 97) % 800)} x2={-520 + ((i * 173) % 3200)} y2={-260 + ((i * 97) % 800)} stroke="#e9ecef" strokeWidth={3} />
          ))}
        </g>
      )}
      {you && YOU[you] && <Figure x={YOU[you][0]} y={YOU[you][1]} s={you === 'diver' || you === 'pipe' || you === 'bellin' ? 0.55 : 0.5} cap shirt="#f77f00" pose={YOU[you][2]} />}
      {dark && <rect x={-1200} y={-700} width={4600} height={2200} fill="#0b1026" opacity={0.12} />}
    </g>
  );
};
