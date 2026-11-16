import React from 'react';
import {C, Figure, Label} from '../ui';
import type {Tod} from './SouthPole';
import type {WorldProps} from './registry';

/** Camera targets [cx, cy, zoom] in world coordinates (Bell Rock tower at x 1200; Arbroath x < 500; Flannan x > 1900). */
export const VIEWS: Record<string, [number, number, number]> = {
  wide: [1200, 520, 0.8], sea: [1200, 750, 1.4], rock: [1200, 720, 2.8],
  tower: [1200, 440, 1.4], section: [1200, 440, 1.4], store: [1200, 595, 4.6],
  kitchen: [1200, 505, 4.8], bedroom: [1200, 415, 4.8], bunk: [1225, 420, 7.5],
  lamp: [1200, 220, 5.5], clock: [1200, 260, 6.0], window: [1145, 410, 8.0],
  boat: [1460, 735, 3.6], calendar: [1246, 500, 8.5], signal: [280, 480, 2.2],
  flannan: [2240, 480, 1.8],
};

export const viewOf = (name: string, _tod: Tod): [number, number, number] => VIEWS[name] ?? VIEWS.wide;

const SKY: Record<Tod, [string, string]> = {
  day: ['#6ca0b8', '#e9ecef'], dusk: ['#433854', '#e27b58'],
  night: ['#070d1e', '#1c2844'], dawn: ['#283044', '#f4a261'],
};

const SEA: Record<Tod, [string, string, string]> = {
  day: ['#1d4e68', '#16384c', '#0f2634'], dusk: ['#223843', '#192b34', '#111d23'],
  night: ['#0d1b2a', '#0a1420', '#060d15'], dawn: ['#1b3a4b', '#132a36', '#0d1c24'],
};

const Keeper: React.FC<{
  spot: string; you?: string; x: number; y: number;
  pose?: 'stand' | 'sit' | 'lie'; flip?: boolean; s?: number;
}> = ({spot, you, x, y, pose = 'stand', flip = false, s = 0.85}) => {
  const isYou = you === spot;
  return <Figure x={x} y={y} s={isYou ? s * 1.05 : s} shirt={isYou ? C.red : '#1d3557'} cap pose={pose} flip={flip} />;
};

export const Lighthouse: React.FC<WorldProps> = ({frame, tod, you, plane = '', dur}) => {
  const [s0, s1] = SKY[tod];
  const seaCols = SEA[tod];
  const p = (plane ?? '').split(' ');
  const has = (k: string) => p.includes(k);
  const light = has('light');
  const waves = has('waves');
  const curtain = has('curtain');
  const flags = has('flags');
  const trousers = has('trousers');
  const dress = has('dress');

  return (
    <g>
      <defs>
        <linearGradient id="lh-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={s0} />
          <stop offset="1" stopColor={s1} />
        </linearGradient>
      </defs>
      {/* Sky & celestial elements */}
      <rect x={-400} y={-300} width={3400} height={1050} fill="url(#lh-sky)" />
      {tod === 'night' &&
        Array.from({length: 40}).map((_, i) => (
          <circle key={i} cx={-300 + ((i * 137) % 3000)} cy={-150 + ((i * 97) % 650)} r={1.2 + (i % 2) * 0.8} fill="#ffffff" opacity={0.3 + 0.5 * Math.sin((frame + i * 11) / 12)} />
        ))}
      {tod !== 'night' && (
        <g opacity={0.65}>
          <ellipse cx={((frame * 0.4 + 400) % 3000) - 200} cy={160} rx={90} ry={25} fill="#f8f9fa" />
          <ellipse cx={((frame * 0.3 + 1400) % 3000) - 200} cy={120} rx={110} ry={30} fill="#f8f9fa" />
          <ellipse cx={((frame * 0.5 + 2200) % 3000) - 200} cy={190} rx={80} ry={22} fill="#f8f9fa" />
        </g>
      )}
      {[0, 1, 2].map((i) => {
        const gx = 700 + i * 260 + Math.sin((frame + i * 30) / 20) * 40;
        const gy = 200 + i * 50 + Math.cos((frame + i * 25) / 15) * 15;
        const wing = Math.sin((frame + i * 10) / 5) * 4;
        return <path key={i} d={`M ${gx - 10} ${gy + wing} Q ${gx - 5} ${gy - 5} ${gx} ${gy} Q ${gx + 5} ${gy - 5} ${gx + 10} ${gy + wing}`} stroke={C.ink} strokeWidth={2} fill="none" />;
      })}
      {/* Ocean waters */}
      <rect x={-400} y={710} width={3400} height={700} fill={seaCols[0]} />
      <rect x={-400} y={760} width={3400} height={650} fill={seaCols[1]} />
      <rect x={-400} y={830} width={3400} height={580} fill={seaCols[2]} />
      {Array.from({length: 16}).map((_, i) => {
        const wx = -300 + i * 190 + ((frame * 0.8) % 190);
        const wy = 712 + (i % 3) * 6;
        return <path key={i} d={`M ${wx} ${wy} q 45 ${-6 + Math.sin((frame + i * 20) / 10) * 3} 90 0 t 90 0`} stroke="#ffffff" strokeWidth={2.5} fill="none" opacity={0.65} />;
      })}

      {/* ARBROATH SHORE (x < 500) */}
      <g>
        <path d="M -400 720 L 520 720 L 520 650 L 400 650 Q 250 635 100 650 L -400 650 Z" fill="#588157" stroke={C.ink} strokeWidth={4} />
        <rect x={440} y={650} width={80} height={70} fill="#5c677d" stroke={C.ink} strokeWidth={3} />
        <rect x={95} y={530} width={135} height={120} fill="#f4f1de" stroke={C.ink} strokeWidth={4} />
        <polygon points="90,530 162,475 235,530" fill="#343a40" stroke={C.ink} strokeWidth={4} />
        <rect x={120} y={465} width={14} height={25} fill="#b5838d" stroke={C.ink} strokeWidth={2} />
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={127 + Math.sin((frame + i * 15) / 8) * 8} cy={455 - ((frame + i * 20) % 50)} r={4 + i * 2} fill="#ced4da" opacity={0.6} />
        ))}
        <rect x={152} y={580} width={22} height={40} fill="#2a9d8f" stroke={C.ink} strokeWidth={2.5} />
        <rect x={230} y={370} width={85} height={280} fill="#b5838d" stroke={C.ink} strokeWidth={4} />
        <path d="M 225 370 h 95 v -14 h -18 v 10 h -16 v -10 h -18 v 10 h -16 v -10 h -17 v 14 Z" fill="#b5838d" stroke={C.ink} strokeWidth={3} />
        <line x1={272} y1={170} x2={272} y2={370} stroke="#6f4e37" strokeWidth={5} />
        <line x1={245} y1={220} x2={305} y2={220} stroke="#6f4e37" strokeWidth={3} />
        <circle cx={272} cy={flags ? 195 : 345} r={13} fill="#d4a373" stroke={C.ink} strokeWidth={3.5} />
        <ellipse cx={268} cy={(flags ? 195 : 345) - 4} rx={4} ry={2.5} fill="#fff" opacity={0.6} />
        {flags && (
          <g>
            <path d={`M 290 205 Q 302 ${203 + Math.sin(frame / 5) * 3} 315 207 L 315 219 Q 302 ${217 + Math.sin(frame / 5) * 3} 290 217 Z`} fill="#e63946" stroke={C.ink} strokeWidth={2} />
            <path d={`M 290 221 Q 302 ${219 + Math.sin(frame / 5 + 1) * 3} 315 223 L 315 235 Q 302 ${233 + Math.sin(frame / 5 + 1) * 3} 290 233 Z`} fill="#457b9d" stroke={C.ink} strokeWidth={2} />
            <path d={`M 290 237 Q 302 ${235 + Math.sin(frame / 5 + 2) * 3} 315 239 L 290 249 Z`} fill="#f4a261" stroke={C.ink} strokeWidth={2} />
          </g>
        )}
        {trousers && (
          <g transform={`translate(290 225) rotate(${Math.sin(frame / 4) * 6})`}>
            <path d={`M 0 0 L 22 2 L 20 10 L 15 ${26 + Math.sin(frame / 3) * 4} L 10 ${26 + Math.sin(frame / 3) * 4} L 11 10 L 6 ${26 + Math.cos(frame / 3) * 4} L 1 ${26 + Math.cos(frame / 3) * 4} L 0 10 Z`} fill="#1d3557" stroke={C.ink} strokeWidth={2.5} />
          </g>
        )}
        {dress && (
          <g transform={`translate(290 225) rotate(${Math.sin(frame / 4) * 6})`}>
            <path d={`M 4 0 L 16 0 L 14 8 L 24 ${26 + Math.sin(frame / 3) * 5} L 0 ${26 + Math.cos(frame / 3) * 5} L 6 8 Z`} fill="#e63946" stroke={C.ink} strokeWidth={2.5} />
          </g>
        )}
        <Figure x={160} y={650} shirt="#457b9d" s={0.8} />
        <Figure x={345} y={655} shirt="#e76f51" s={0.65} />
        <Figure x={380} y={658} shirt="#2a9d8f" s={0.6} />
        <circle cx={360} cy={652} r={8} fill="none" stroke="#8d6e4c" strokeWidth={2} />
        <Label x={275} y={395} t="ARBROATH SIGNAL" size={13} />
      </g>

      {/* BELL ROCK CUTAWAY TOWER (Center x 1200) */}
      <path d="M 1090 720 Q 1120 480 1133 280 L 1115 265 L 1285 265 L 1267 280 Q 1280 480 1310 720 Z" fill="#b8afa5" stroke={C.ink} strokeWidth={5} />
      {[320, 365, 410, 455, 500, 545, 590, 635].map((yPos) => (
        <g key={yPos}>
          <line x1={1110} y1={yPos} x2={1144} y2={yPos} stroke="#8c827a" strokeWidth={2.5} />
          <line x1={1256} y1={yPos} x2={1290} y2={yPos} stroke="#8c827a" strokeWidth={2.5} />
        </g>
      ))}

      {/* Solid Stone Base & Entrance */}
      <polygon points="1108,640 1292,640 1310,720 1090,720" fill="#b8afa5" stroke={C.ink} strokeWidth={4} />
      {[660, 680, 700].map((yPos) => (
        <g key={yPos}>
          <line x1={1100} y1={yPos} x2={1300} y2={yPos} stroke="#8c827a" strokeWidth={2} />
          <path d={`M 1195 ${yPos - 4} L 1205 ${yPos - 4} L 1208 ${yPos} L 1192 ${yPos} Z`} fill="#8c827a" />
        </g>
      ))}
      <rect x={1146} y={655} width={26} height={50} rx={4} fill="#5c4033" stroke={C.ink} strokeWidth={3} />
      {[665, 680, 695].map((dy) => <circle key={dy} cx={1152} cy={dy} r={1.5} fill="#d4a373" />)}
      <line x1={1145} y1={665} x2={1140} y2={745} stroke="#b07d4b" strokeWidth={3} />
      <line x1={1153} y1={665} x2={1148} y2={745} stroke="#b07d4b" strokeWidth={3} />
      {Array.from({length: 9}).map((_, i) => (
        <line key={i} x1={1144 - i * 0.5} y1={672 + i * 8} x2={1152 - i * 0.5} y2={672 + i * 8} stroke="#b07d4b" strokeWidth={2} />
      ))}

      {/* Level 1: Store Room */}
      <rect x={1138} y={555} width={124} height={80} fill="#eae4d8" stroke={C.ink} strokeWidth={3.5} />
      <rect x={1142} y={610} width={20} height={25} rx={3} fill="#8d6e4c" stroke={C.ink} strokeWidth={2.5} />
      <line x1={1142} y1={616} x2={1162} y2={616} stroke="#343a40" strokeWidth={1.5} />
      <line x1={1142} y1={628} x2={1162} y2={628} stroke="#343a40" strokeWidth={1.5} />
      <text x={1152} y={624} fontSize={5.5} fill="#fff" textAnchor="middle" fontFamily="sans-serif">OIL</text>
      <rect x={1165} y={614} width={18} height={21} rx={3} fill="#a47148" stroke={C.ink} strokeWidth={2.5} />
      <line x1={1165} y1={620} x2={1183} y2={620} stroke="#343a40" strokeWidth={1.5} />
      <rect x={1186} y={611} width={20} height={24} rx={3} fill="#6f4e37" stroke={C.ink} strokeWidth={2.5} />
      <line x1={1186} y1={618} x2={1206} y2={618} stroke="#343a40" strokeWidth={1.5} />
      <line x1={1186} y1={629} x2={1206} y2={629} stroke="#343a40" strokeWidth={1.5} />
      <text x={1196} y={625} fontSize={5} fill="#fff" textAnchor="middle" fontFamily="sans-serif">H2O</text>
      <line x1={1183} y1={596} x2={1180} y2={635} stroke="#d4a373" strokeWidth={2.5} strokeLinecap="round" />
      {[0, 1, 2, 3, 4].map((i) => <line key={i} x1={1181} y1={602 + i * 6} x2={1184} y2={602 + i * 6} stroke={C.ink} strokeWidth={1} />)}
      <ellipse cx={1212} cy={627} rx={7} ry={8} fill="#c4a482" stroke={C.ink} strokeWidth={2} />
      <ellipse cx={1222} cy={626} rx={8} ry={9} fill="#c4a482" stroke={C.ink} strokeWidth={2} />
      <path d="M 1228 625 L 1238 625 L 1236 635 L 1228 635 Z" fill="#2b2d42" stroke={C.ink} strokeWidth={2} />
      <circle cx={1232} cy={624} r={2} fill="#111" />
      <circle cx={1235} cy={624} r={1.5} fill="#111" />
      <rect x={1244} y={623} width={15} height={12} rx={2} fill="#ffffff" stroke={C.ink} strokeWidth={2} />
      <path d="M 1243 621 L 1260 621" stroke="#6f4e37" strokeWidth={3} strokeLinecap="round" />
      <line x1={1257} y1={616} x2={1257} y2={621} stroke="#c59b27" strokeWidth={2} />
      <circle cx={1257} cy={615} r={1.8} fill="#c59b27" />
      <path d="M 1251 635 Q 1251 645 1258 650" stroke="#6b7b86" strokeWidth={2.5} fill="none" />
      <Keeper spot="store" you={you} x={1175} y={630} s={0.85} />
      <Label x={1200} y={570} t="STORE ROOM" size={12} />

      {/* Level 2: Kitchen */}
      <rect x={1140} y={465} width={120} height={80} fill="#fdf0d5" stroke={C.ink} strokeWidth={3.5} />
      <rect x={1144} y={510} width={24} height={35} rx={3} fill="#2b2d42" stroke={C.ink} strokeWidth={2.5} />
      <rect x={1147} y={514} width={18} height={14} fill="#1b1c24" stroke={C.ink} strokeWidth={1.5} />
      <line x1={1148} y1={535} x2={1164} y2={535} stroke="#e76f51" strokeWidth={2} opacity={0.6 + 0.4 * Math.sin(frame / 6)} />
      <path d="M 1156 510 L 1156 490 L 1146 480" stroke="#3d405b" strokeWidth={3.5} fill="none" strokeLinecap="round" />
      <ellipse cx={1154} cy={508} rx={6} ry={4} fill="#d4a373" stroke={C.ink} strokeWidth={1.5} />
      <path d={`M 1150 504 Q ${1146 + Math.sin(frame / 5) * 3} 496 1150 488`} stroke="#ffffff" strokeWidth={2} fill="none" opacity={0.7} />
      <rect x={1186} y={524} width={38} height={6} rx={2} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
      <line x1={1192} y1={530} x2={1190} y2={545} stroke={C.ink} strokeWidth={2} />
      <line x1={1218} y1={530} x2={1220} y2={545} stroke={C.ink} strokeWidth={2} />
      <ellipse cx={1198} cy={523} rx={3} ry={2} fill="#fff" stroke={C.ink} strokeWidth={1} />
      <ellipse cx={1210} cy={523} rx={4} ry={2.5} fill="#c4a482" stroke={C.ink} strokeWidth={1} />
      {[1178, 1206, 1230].map((sx) => (
        <g key={sx}>
          <rect x={sx - 5} y={533} width={10} height={3} rx={1} fill="#8d6e4c" stroke={C.ink} strokeWidth={1.5} />
          <line x1={sx - 3} y1={536} x2={sx - 4} y2={545} stroke={C.ink} strokeWidth={1.5} />
          <line x1={sx + 3} y1={536} x2={sx + 4} y2={545} stroke={C.ink} strokeWidth={1.5} />
        </g>
      ))}
      <line x1={1180} y1={486} x2={1225} y2={486} stroke="#6f4e37" strokeWidth={2.5} />
      {['#2a9d8f', '#e76f51', '#e9c46a', '#457b9d'].map((col, i) => (
        <rect key={i} x={1184 + i * 10} y={476} width={7} height={10} rx={1} fill={col} stroke={C.ink} strokeWidth={1.2} />
      ))}
      <rect x={1180} y={495} width={18} height={14} rx={1.5} fill="#343a40" stroke="#8d6e4c" strokeWidth={2} />
      <line x1={1184} y1={500} x2={1194} y2={500} stroke="#f8f9fa" strokeWidth={1} />
      <line x1={1184} y1={504} x2={1192} y2={504} stroke="#f8f9fa" strokeWidth={1} />
      {/* Calendar vignette */}
      <rect x={1235} y={485} width={22} height={28} rx={2} fill="#fffef0" stroke={C.ink} strokeWidth={1.8} />
      <rect x={1235} y={485} width={22} height={7} fill="#b7094c" />
      <text x={1246} y={490.5} fontSize={4.5} fill="#ffffff" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">DEC 1900</text>
      {Array.from({length: 4}).map((_, r) =>
        Array.from({length: 5}).map((__, c) => <rect key={`${r}-${c}`} x={1237 + c * 3.8} y={494 + r * 3.4} width={2.8} height={2.4} fill="#e9ecef" />)
      )}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <line key={i} x1={1237 + (i % 5) * 3.8} y1={494 + Math.floor(i / 5) * 3.4} x2={1239.8 + (i % 5) * 3.8} y2={496.4 + Math.floor(i / 5) * 3.4} stroke="#e63946" strokeWidth={0.8} />
      ))}
      <line x1={1234} y1={486} x2={1232} y2={498} stroke={C.ink} strokeWidth={0.7} />
      <rect x={1231} y={498} width={2} height={8} fill="#e63946" />
      <Keeper spot="kitchen" you={you} x={1165} y={542} s={0.85} />
      <Label x={1200} y={476} t="KITCHEN" size={12} />

      {/* Level 3: Bedroom */}
      <rect x={1142} y={375} width={116} height={80} fill="#dfcca8" stroke={C.ink} strokeWidth={3.5} />
      <path d="M 1128 396 L 1144 402 L 1144 424 L 1128 428 Z" fill="#b8afa5" stroke={C.ink} strokeWidth={2} />
      <rect x={1132} y={400} width={10} height={22} rx={4} fill={SKY[tod][0]} stroke="#b07d4b" strokeWidth={2} />
      <line x1={1132} y1={411} x2={1142} y2={411} stroke="#b07d4b" strokeWidth={1.5} />
      <line x1={1137} y1={400} x2={1137} y2={422} stroke="#b07d4b" strokeWidth={1.5} />
      <rect x={1134} y={422} width={12} height={3} rx={1} fill="#d4a373" stroke={C.ink} strokeWidth={1} />
      <Keeper spot="window" you={you} x={1148} y={450} flip s={0.85} />
      <rect x={1180} y={378} width={68} height={18} rx={3} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
      <rect x={1184} y={381} width={14} height={8} rx={2} fill="#fff" stroke={C.ink} strokeWidth={1.2} />
      <rect x={1196} y={382} width={48} height={12} rx={2} fill="#457b9d" stroke={C.ink} strokeWidth={1.5} />
      <rect x={1180} y={434} width={70} height={18} rx={3} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
      <rect x={1184} y={437} width={14} height={8} rx={2} fill="#fff" stroke={C.ink} strokeWidth={1.2} />
      <rect x={1196} y={438} width={50} height={12} rx={2} fill="#2a9d8f" stroke={C.ink} strokeWidth={1.5} />
      <rect x={1178} y={404} width={74} height={24} rx={3} fill="#8d6e4c" stroke={C.ink} strokeWidth={2.5} />
      <rect x={1184} y={408} width={16} height={9} rx={3} fill="#fff" stroke={C.ink} strokeWidth={1.5} />
      <rect x={1198} y={409} width={50} height={16} rx={3} fill="#1d3557" stroke={C.ink} strokeWidth={2} />
      <line x1={1206} y1={409} x2={1206} y2={425} stroke="#e63946" strokeWidth={2} />
      <circle cx={1173} cy={414} r={3} fill="#e9c46a" stroke={C.ink} strokeWidth={1} />
      <Keeper spot="bunk" you={you} x={1220} y={422} pose="lie" s={0.8} />
      {curtain ? (
        <g>
          <rect x={1178} y={404} width={74} height={24} fill="#800e13" stroke={C.ink} strokeWidth={2} />
          {[0, 1, 2, 3, 4, 5].map((i) => <line key={i} x1={1182 + i * 13} y1={404} x2={1182 + i * 13} y2={428} stroke="#4a0404" strokeWidth={1.5} />)}
          {you === 'bunk' && <circle cx={1238} cy={412} r={4} fill={C.red} stroke={C.ink} strokeWidth={1.5} />}
        </g>
      ) : (
        <g>
          <path d="M 1245 404 Q 1240 415 1252 428 L 1254 404 Z" fill="#800e13" stroke={C.ink} strokeWidth={1.5} />
          <line x1={1242} y1={416} x2={1252} y2={416} stroke="#ffd166" strokeWidth={2.5} />
        </g>
      )}
      <Label x={1200} y={386} t="BEDROOM" size={12} />

      {/* Level 4: Library / Log Room */}
      <rect x={1144} y={285} width={112} height={80} fill="#d6ccc2" stroke={C.ink} strokeWidth={3.5} />
      <rect x={1146} y={298} width={34} height={46} fill="#6f4e37" stroke={C.ink} strokeWidth={2.5} />
      <line x1={1146} y1={320} x2={1180} y2={320} stroke="#543d2b" strokeWidth={2} />
      {['#6f1d1b', '#283618', '#1b4965', '#d4a373'].map((col, i) => (
        <rect key={i} x={1150 + i * 7} y={304} width={5} height={16} fill={col} stroke={C.ink} strokeWidth={1} />
      ))}
      <rect x={1184} y={332} width={46} height={6} rx={2} fill="#8d6e4c" stroke={C.ink} strokeWidth={2} />
      <line x1={1188} y1={338} x2={1186} y2={365} stroke={C.ink} strokeWidth={2} />
      <line x1={1224} y1={338} x2={1226} y2={365} stroke={C.ink} strokeWidth={2} />
      <polygon points="1192,332 1204,328 1216,332 1204,334" fill="#fdfbf7" stroke={C.ink} strokeWidth={1.5} />
      <line x1={1204} y1={328} x2={1204} y2={334} stroke="#6f4e37" strokeWidth={1} />
      <circle cx={1220} cy={330} r={2.5} fill="#c59b27" stroke={C.ink} strokeWidth={1} />
      <line x1={1220} y1={330} x2={1224} y2={323} stroke="#ffffff" strokeWidth={1.5} />
      <rect x={1242} y={298} width={6} height={38} rx={2} fill="#6f4e37" stroke={C.ink} strokeWidth={1.5} />
      <line x1={1245} y1={304} x2={1245} y2={330} stroke="#d4a373" strokeWidth={2} />
      <line x1={1205} y1={285} x2={1205} y2={320 + Math.sin(frame / 40) * 8} stroke="#d4a373" strokeWidth={1.5} />
      <rect x={1200} y={320 + Math.sin(frame / 40) * 8} width={10} height={22} rx={3} fill="#6b7b86" stroke={C.ink} strokeWidth={2} />
      <Label x={1200} y={296} t="LIBRARY & LOG" size={12} />

      {/* Level 5: Lantern Room & Gallery */}
      <rect x={1145} y={252} width={110} height={20} fill="#343a40" stroke={C.ink} strokeWidth={3} />
      <rect x={1192} y={242} width={16} height={14} fill="#c59b27" stroke={C.ink} strokeWidth={2} />
      <circle cx={1196} cy={248} r={5} fill="none" stroke="#e9c46a" strokeWidth={2} strokeDasharray="2 2" transform={`rotate(${frame * 4} 1196 248)`} />
      <circle cx={1204} cy={248} r={4} fill="none" stroke="#e9c46a" strokeWidth={2} strokeDasharray="2 2" transform={`rotate(${-frame * 5.5} 1204 248)`} />
      <rect x={1148} y={190} width={104} height={62} fill="#bfe9ff" fillOpacity={0.25} stroke={C.ink} strokeWidth={3} />
      <line x1={1148} y1={252} x2={1200} y2={190} stroke="#b07d4b" strokeWidth={2.5} />
      <line x1={1200} y1={252} x2={1252} y2={190} stroke="#b07d4b" strokeWidth={2.5} />
      <line x1={1200} y1={190} x2={1252} y2={252} stroke="#b07d4b" strokeWidth={2.5} />
      <line x1={1148} y1={190} x2={1200} y2={252} stroke="#b07d4b" strokeWidth={2.5} />
      <rect x={1184} y={204} width={32} height={36} rx={3} fill="none" stroke="#d4a373" strokeWidth={3} />
      <ellipse cx={1200} cy={222} rx={12} ry={15} fill="#a8dadc" fillOpacity={0.5} stroke="#c59b27" strokeWidth={2} />
      <ellipse cx={1200} cy={222} rx={6} ry={8} fill="#ffffff" fillOpacity={0.7} stroke="#c59b27" strokeWidth={1.5} />
      <circle cx={1200} cy={222} r={3.5 + Math.sin(frame * 0.4) * 0.8} fill="#ffd166" />
      {light && (
        <g transform={`rotate(${(frame * 1.5) % 360} 1200 222)`}>
          <polygon points="1200,222 2600,100 2600,344" fill="#fff3b0" opacity={0.42} />
          <polygon points="1200,222 -200,100 -200,344" fill="#fff3b0" opacity={0.42} />
          <circle cx={1200} cy={222} r={32} fill="#ffe6a7" opacity={0.45} />
        </g>
      )}
      <Keeper spot="lamp" you={you} x={1218} y={252} flip s={0.78} />
      <line x1={1115} y1={264} x2={1285} y2={264} stroke={C.ink} strokeWidth={4} />
      <line x1={1115} y1={240} x2={1285} y2={240} stroke={C.ink} strokeWidth={3} />
      {Array.from({length: 12}).map((_, i) => (
        <line key={i} x1={1120 + i * 14} y1={240} x2={1120 + i * 14} y2={264} stroke={C.ink} strokeWidth={2} />
      ))}
      <g transform={`translate(1118 238) rotate(${Math.sin(frame / 12) * 6})`}>
        <path d="M -6 0 L 6 0 L 8 10 L -8 10 Z" fill="#d4a373" stroke={C.ink} strokeWidth={2} />
        <circle cx={0} cy={12} r={2} fill="#343a40" />
      </g>
      <path d="M 1145 190 Q 1200 152 1255 190 Z" fill="#407b6c" stroke={C.ink} strokeWidth={4} />
      <line x1={1200} y1={152} x2={1200} y2={136} stroke={C.ink} strokeWidth={3} />
      <circle cx={1200} cy={148} r={3.5} fill="#c59b27" stroke={C.ink} strokeWidth={2} />
      <Label x={1200} y={170} t="BELL ROCK LANTERN" size={13} />

      {/* Reef & Waves */}
      <path d="M 960 740 Q 1060 710 1160 714 Q 1200 708 1260 714 Q 1350 710 1440 745 Q 1200 765 960 740 Z" fill="#24252a" stroke={C.ink} strokeWidth={4} />
      <ellipse cx={1040} cy={730} rx={18} ry={5} fill="#384935" />
      <ellipse cx={1330} cy={730} rx={22} ry={6} fill="#384935" />
      {waves ? (
        <g>
          <path d={`M 980 740 Q 1070 ${640 + Math.sin(frame / 4) * 20} 1140 665 Q 1160 ${625 + Math.cos(frame / 3) * 15} 1200 675 Q 1230 ${635 + Math.sin(frame / 5) * 20} 1280 665 Q 1360 ${650 + Math.cos(frame / 4) * 20} 1430 740 Z`} fill="#ffffff" opacity={0.88} stroke={C.ink} strokeWidth={3} />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <circle key={i} cx={1060 + i * 40 + Math.sin((frame + i) / 4) * 12} cy={660 - ((frame * 3 + i * 22) % 75)} r={2.5 + (i % 3)} fill="#ffffff" stroke={C.ink} strokeWidth={1.5} />
          ))}
        </g>
      ) : (
        <path d={`M 990 735 Q 1100 ${722 + Math.sin(frame / 6) * 4} 1200 726 Q 1300 ${722 + Math.cos(frame / 6) * 4} 1410 735`} fill="none" stroke="#ffffff" strokeWidth={3} opacity={0.7} />
      )}

      {/* Relief Boat near rock */}
      <g transform={`translate(1460 735) rotate(${Math.sin(frame / 10) * 3})`}>
        <path d="M -50 -5 Q 0 16 55 -6 Q 5 7 -50 -5 Z" fill="#8d6e4c" stroke={C.ink} strokeWidth={3} />
        <line x1={-50} y1={-5} x2={55} y2={-6} stroke="#343a40" strokeWidth={2} />
        <line x1={-15} y1={-12} x2={-35} y2={18} stroke="#d4a373" strokeWidth={2.5} />
        <line x1={15} y1={-12} x2={-5} y2={18} stroke="#d4a373" strokeWidth={2.5} />
        <Figure x={-20} y={-4} shirt="#1d3557" cap s={0.75} />
        <Figure x={10} y={-4} shirt="#1d3557" cap s={0.75} />
        <rect x={26} y={-8} width={12} height={10} rx={2} fill="#a47148" stroke={C.ink} strokeWidth={1.5} />
      </g>
      <Label x={1460} y={762} t="RELIEF BOAT" size={12} />

      {/* FLANNAN ISLES VIGNETTE (x > 1900) */}
      <g>
        <g transform={`translate(0 ${Math.sin(frame / 8) * 2})`}>
          <path d="M 1930 715 Q 1990 726 2060 710 Q 2070 700 2050 695 L 1940 695 Z" fill="#1f2421" stroke={C.ink} strokeWidth={3} />
          <rect x={1980} y={680} width={28} height={15} fill="#ffffff" stroke={C.ink} strokeWidth={2} />
          <rect x={2014} y={668} width={10} height={27} fill="#f4a261" stroke={C.ink} strokeWidth={2} />
          <rect x={2014} y={668} width={10} height={6} fill="#111" />
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={2005 - i * 16 - ((frame * 2) % 40)} cy={660 - i * 4} r={5 + i * 3} fill="#8d99ae" opacity={0.6} />
          ))}
        </g>
        <path d="M 2050 720 Q 2100 580 2150 480 Q 2200 420 2300 365 Q 2420 365 2520 480 Q 2560 620 2580 720 Z" fill="#2b2d42" stroke={C.ink} strokeWidth={4} />
        <path d="M 2200 375 Q 2300 360 2440 375 L 2440 365 Q 2300 350 2200 365 Z" fill="#406a3d" stroke={C.ink} strokeWidth={3} />
        <polygon points="2315,365 2320,285 2340,285 2345,365" fill="#f8f9fa" stroke={C.ink} strokeWidth={3.5} />
        <rect x={2320} y={268} width={20} height={17} fill="#16161d" stroke={C.ink} strokeWidth={3} />
        <path d="M 2318 268 Q 2330 254 2342 268 Z" fill="#c59b27" stroke={C.ink} strokeWidth={2.5} />
        <rect x={2175} y={530} width={70} height={16} fill="#5c677d" stroke={C.ink} strokeWidth={3} />
        <path d="M 2180 530 Q 2195 505 2210 528 Q 2225 545 2240 515 Q 2255 505 2265 528" fill="none" stroke="#b07d4b" strokeWidth={3.5} strokeLinecap="round" />
        <Keeper spot="flannan" you={you} x={2220} y={528} s={0.85} />
        <Label x={2240} y={240} t="FLANNAN ISLES" size={14} />
        <Label x={2210} y={560} t="EAST LANDING" size={11} />
      </g>

      {tod === 'night' && <rect x={-400} y={-400} width={3400} height={2000} fill="#050a18" opacity={0.2} pointerEvents="none" />}
    </g>
  );
};
