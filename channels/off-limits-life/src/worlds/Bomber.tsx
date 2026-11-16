import React from 'react';
import {C, Figure, Label} from '../ui';
import type {Tod} from './SouthPole';
import type {WorldProps} from './registry';

/** IX world: B-2 Spirit Stealth Bomber long-duration mission (Whiteman AFB -> Diego Garcia).
 *  x 0..620: Whiteman AFB (hangar, taxiway, physiology sleep prep room).
 *  x 620..1440: Sky & KC-135 aerial refueling tanker formation over ocean.
 *  x 1440..2320: Massive B-2 crew compartment cutaway (cockpit, cot, toilet, galley, piddle packs).
 *  x 2320..2600: Diego Garcia coral island runway.
 *  `plane` state strings: 'refuel' | 'sleep' | 'packs:N' | 'storm' | 'microwave:on' | 'land'. */
export const VIEWS: Record<string, [number, number, number]> = {
  wide: [1300, 540, 0.74],
  base: [250, 600, 2.2],
  hangar: [140, 620, 4.0],
  runway: [440, 710, 3.2],
  physio: [130, 410, 5.0],
  sky: [900, 400, 2.4],
  tanker: [1060, 280, 2.0],
  boom: [980, 280, 5.0],
  ocean: [950, 860, 2.0],
  cockpit: [1880, 590, 1.8],
  seats: [1675, 580, 4.0],
  panel: [1610, 500, 5.0],
  window: [1515, 425, 5.2],
  cot: [1920, 725, 4.5],
  toilet: [2220, 730, 5.0],
  packs: [2090, 745, 6.0],
  microwave: [2100, 460, 6.0],
  food: [2175, 465, 5.5],
  water: [2110, 540, 6.5],
  clock: [1640, 440, 7.5],
  island: [2500, 730, 5.0],
};

export const viewOf = (name: string, _tod: Tod): [number, number, number] => VIEWS[name] ?? VIEWS.wide;

const SKY: Record<Tod, [string, string]> = {
  day: ['#6ec3f4', '#cbe7f8'],
  dusk: ['#4a3f6b', '#f4a261'],
  night: ['#0b1026', '#1e2942'],
  dawn: ['#2d3154', '#f6bd60'],
};

export const Bomber: React.FC<WorldProps> = ({frame, tod, you, plane}) => {
  const [s0, s1] = SKY[tod];
  const dark = tod === 'night';
  const has = (k: string) => Boolean(plane && plane.split(' ').includes(k));
  const storm = has('storm');
  const refuel = has('refuel');
  const microOn = has('microwave:on');
  const landed = has('land');
  const packsMatch = plane?.match(/packs:(\d+)/);
  const numPacks = packsMatch ? Math.max(2, Math.min(40, parseInt(packsMatch[1], 10))) : 8;

  // Idle animations
  const guardX = 260 + Math.sin(frame / 26) * 35;
  const guardFlip = Math.cos(frame / 26) < 0;
  const palmSway = Math.sin(frame / 22) * 3;
  const mfdFlicker = 0.88 + 0.12 * Math.sin(frame / 6);
  const lightning = storm && frame % 28 < 4;
  const secStr = (frame % 60).toString().padStart(2, '0');

  return (
    <g>
      <defs>
        <linearGradient id="b-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={storm ? '#2b303c' : s0} />
          <stop offset="1" stopColor={storm ? '#475569' : s1} />
        </linearGradient>
      </defs>

      {/* Sky backdrop */}
      <rect x={-400} y={-300} width={3400} height={1500} fill="url(#b-sky)" />
      {dark && !storm && Array.from({length: 65}).map((_, i) => (
        <circle key={i} cx={-200 + ((i * 397) % 3000)} cy={-100 + ((i * 193) % 850)} r={1.5 + (i % 2)} fill="#ffffff" opacity={0.3 + 0.5 * Math.sin((frame + i * 11) / 12)} />
      ))}

      {/* High-altitude ocean far below */}
      <rect x={-400} y={740} width={3800} height={700} fill={storm ? '#132840' : '#1d4e89'} stroke={C.ink} strokeWidth={4} />
      {[0, 1, 2, 3].map((r) => (
        <path key={r} d={`M 620 ${780 + r * 65} q 40 ${-6 + Math.sin((frame + r * 15) / 10) * 3} 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0`} stroke="#93c5fd" strokeWidth={2.5} fill="none" opacity={0.45} />
      ))}
      {[850, 1150, 1450, 1750].map((cx, i) => (
        <ellipse key={i} cx={cx + Math.sin((frame + i * 30) / 40) * 15} cy={820 + (i % 3) * 45} rx={55} ry={16} fill="#ffffff" opacity={0.35} />
      ))}

      {/* Storm clouds & lightning */}
      {storm && (
        <g>
          {[720, 920, 1120, 1300].map((cx, i) => (
            <ellipse key={i} cx={cx} cy={220 + (i % 2) * 40} rx={110} ry={50} fill="#1e2530" opacity={0.9} />
          ))}
          {lightning && <polyline points="890,190 870,260 905,270 860,360" stroke="#fef08a" strokeWidth={5} fill="none" strokeLinecap="round" />}
        </g>
      )}

      {/* SECTION A: WHITEMAN AIR FORCE BASE, MISSOURI */}
      <rect x={-400} y={690} width={1020} height={420} fill="#46583b" />
      <rect x={-50} y={700} width={670} height={90} fill="#64748b" stroke={C.ink} strokeWidth={4} />
      <line x1={-50} y1={745} x2={620} y2={745} stroke="#f59e0b" strokeWidth={5} strokeDasharray="25 15" />
      {[50, 170, 290, 410, 530].map((lx) => (
        <circle key={lx} cx={lx} cy={703} r={4} fill="#60a5fa" stroke={C.ink} strokeWidth={1.5} />
      ))}

      {/* Hangar */}
      <path d="M 30 700 V 580 Q 140 500 250 580 V 700 Z" fill="#334155" stroke={C.ink} strokeWidth={5} />
      <rect x={55} y={560} width={170} height={140} fill="#0f172a" />
      <path d="M 140 580 L 190 670 H 90 Z" fill="#1e293b" stroke={C.ink} strokeWidth={3} />
      <Label x={140} y={545} t="WHITEMAN AFB" size={13} color="#f8fafc" />
      <Label x={140} y={565} t="509th BOMB WING" size={8} color="#94a3b8" />

      {/* Sleep Prep Physiology Room */}
      <rect x={40} y={330} width={180} height={165} rx={6} fill="#d1d5db" stroke={C.ink} strokeWidth={5} />
      <rect x={50} y={340} width={160} height={145} fill="#e2e8f0" stroke={C.ink} strokeWidth={3} />
      <Label x={130} y={358} t="PHYSIOLOGY · REST LAB" size={9} color={C.navy} />
      {/* Bed & Eye Mask */}
      <rect x={58} y={424} width={76} height={24} rx={4} fill="#1e3a5f" stroke={C.ink} strokeWidth={2.5} />
      <rect x={60} y={415} width={22} height={12} rx={3} fill="#ffffff" stroke={C.ink} strokeWidth={2} />
      <ellipse cx={71} cy={420} rx={6} ry={3} fill="#0f172a" />
      <line x1={65} y1={420} x2={77} y2={420} stroke="#0f172a" strokeWidth={1.5} />
      {/* Vitals monitor desk & clock */}
      <rect x={145} y={415} width={55} height={33} fill="#94a3b8" stroke={C.ink} strokeWidth={2} />
      <rect x={152} y={382} width={42} height={28} rx={3} fill="#0f172a" stroke={C.ink} strokeWidth={2} />
      <polyline points="156,396 166,396 170,388 174,402 178,396 190,396" stroke="#22c55e" strokeWidth={2} fill="none" />
      <rect x={100} y={370} width={42} height={18} rx={3} fill="#1e293b" stroke={C.ink} strokeWidth={1.5} />
      <text x={121} y={383} fontFamily="monospace" fontSize={11} fill="#ef4444" textAnchor="middle" fontWeight="bold">03:00</text>
      <Figure x={175} y={448} s={0.7} shirt="#ffffff" />
      {you === 'physio' && (
        <g>
          <Figure x={95} y={438} s={0.7} pose="lie" shirt={C.red} cap />
          <ellipse cx={95} cy={424} rx={6} ry={3} fill="#0f172a" />
        </g>
      )}

      {/* Taxiing B-2 on Whiteman runway */}
      <g transform="translate(440 710)">
        <path d="M 0 -35 L 75 10 L 60 14 L 40 10 L 25 15 L 0 5 L -25 15 L -40 10 L -60 14 L -75 10 Z" fill="#1e232a" stroke={C.ink} strokeWidth={3.5} />
        {[-35, 0, 35].map((wx) => (
          <g key={wx}>
            <line x1={wx} y1={8} x2={wx} y2={22} stroke={C.ink} strokeWidth={3} />
            <circle cx={wx} cy={22} r={5} fill="#0f172a" stroke={C.ink} strokeWidth={2} />
          </g>
        ))}
      </g>
      <Figure x={guardX} y={700} s={0.75} shirt="#283618" cap flip={guardFlip} />
      {you === 'base' && <Figure x={340} y={700} s={0.8} shirt={C.red} cap />}

      {/* SECTION B: SKY, FLYING B-2 & KC-135 TANKER */}
      <g transform="translate(1080 140)">
        <path d="M 230 20 Q 255 20 248 10 Q 210 -15 70 -15 L -20 -20 L -35 -40 L -48 -40 L -30 0 L -15 20 Q 70 35 210 35 Q 240 35 230 20 Z" fill="#cbd5e1" stroke={C.ink} strokeWidth={4} />
        <path d="M -20 -20 L -45 -65 L -30 -65 L 5 -20 Z" fill="#94a3b8" stroke={C.ink} strokeWidth={3} />
        <rect x={-36} y={-58} width={18} height={7} fill="#1d4ed8" />
        <rect x={-36} y={-54} width={18} height={2} fill="#facc15" />
        <rect x={60} y={25} width={36} height={14} rx={5} fill="#64748b" stroke={C.ink} strokeWidth={2.5} />
        <rect x={125} y={22} width={36} height={14} rx={5} fill="#64748b" stroke={C.ink} strokeWidth={2.5} />
        <Label x={130} y={12} t="US AIR FORCE · KC-135" size={10} color="#1e293b" />
        <circle cx={-18} cy={20} r={6} fill="#475569" stroke={C.ink} strokeWidth={2} />
      </g>

      {/* Refueling Boom */}
      {refuel ? (
        <g>
          <line x1={1062} y1={160} x2={920} y2={375} stroke="#64748b" strokeWidth={5} strokeLinecap="round" />
          <line x1={1062} y1={160} x2={920} y2={375} stroke={C.ink} strokeWidth={2} strokeDasharray="10 5" />
          <path d="M 995 260 L 980 250 M 995 260 L 1012 254" stroke={C.ink} strokeWidth={4} strokeLinecap="round" />
          {[0, 1, 2, 3].map((i) => {
            const f = ((frame * 4 + i * 25) % 100) / 100;
            return <circle key={i} cx={1062 + (920 - 1062) * f} cy={160 + (375 - 160) * f} r={3.5} fill="#38bdf8" />;
          })}
        </g>
      ) : (
        <g>
          <line x1={1062} y1={160} x2={1005} y2={235} stroke="#64748b" strokeWidth={5} strokeLinecap="round" />
          <path d="M 1018 215 L 1005 208 M 1018 215 L 1030 211" stroke={C.ink} strokeWidth={3.5} strokeLinecap="round" />
        </g>
      )}

      {/* Flying B-2 Spirit */}
      <g transform="translate(920 375)">
        <path d="M 0 -65 L 160 35 L 130 50 L 100 40 L 70 55 L 40 40 L 0 60 L -40 40 L -70 55 L -100 40 L -130 50 L -160 35 Z" fill="#242730" stroke={C.ink} strokeWidth={5} />
        <polygon points="-8,-5 0,-15 8,-5" fill="#f8fafc" />
        <rect x={-5} y={-4} width={10} height={12} fill="#475569" stroke={C.ink} strokeWidth={1.5} />
        <ellipse cx={0} cy={-42} rx={12} ry={18} fill="#ffd166" fillOpacity={0.65} stroke={C.ink} strokeWidth={2.5} />
        <Label x={0} y={85} t="B-2 SPIRIT · STEALTH BOMBER" size={12} color="#cbd5e1" />
      </g>

      {/* SECTION C: HUGE B-2 CREW COMPARTMENT CUTAWAY (MAIN SET) */}
      <g transform="translate(1450 350)">
        <rect x={0} y={0} width={860} height={435} rx={16} fill="#262c37" stroke={C.ink} strokeWidth={6} />
        <rect x={12} y={12} width={836} height={411} rx={10} fill="#3f4756" />
        <rect x={12} y={415} width={836} height={15} fill="#181c24" stroke={C.ink} strokeWidth={3} />

        {/* 1. Cockpit Windscreen & HUD */}
        <polygon points="20,120 45,30 115,30 105,120" fill={storm ? '#334155' : s0} stroke={C.ink} strokeWidth={4} />
        <rect x={65} y={65} width={34} height={42} rx={2} fill="#22c55e" fillOpacity={0.25} stroke="#22c55e" strokeWidth={2} />
        <circle cx={82} cy={86} r={4} fill="none" stroke="#22c55e" strokeWidth={1.5} />
        <line x1={72} y1={76} x2={92} y2={76} stroke="#22c55e" strokeWidth={1.5} />
        <line x1={74} y1={96} x2={90} y2={96} stroke="#22c55e" strokeWidth={1.5} />

        {/* 2. Instrument Panel & MFDs */}
        <rect x={105} y={105} width={135} height={130} rx={4} fill="#111827" stroke={C.ink} strokeWidth={3} />
        <g opacity={mfdFlicker}>
          <rect x={115} y={115} width={36} height={30} fill="#38bdf8" stroke={C.ink} strokeWidth={2} />
          <rect x={115} y={130} width={36} height={15} fill="#78350f" />
          <line x1={115} y1={130} x2={151} y2={130} stroke="#ffffff" strokeWidth={1.5} />
          <rect x={160} y={115} width={36} height={30} fill="#030712" stroke={C.ink} strokeWidth={2} />
          {[0, 1, 2, 3].map((ei) => <rect key={ei} x={164 + ei * 7} y={122} width={4} height={18} fill="#22c55e" />)}
          <rect x={115} y={155} width={36} height={30} fill="#030712" stroke={C.ink} strokeWidth={2} />
          <circle cx={133} cy={170} r={10} fill="none" stroke="#22c55e" strokeWidth={1} />
          <polygon points="133,165 137,173 129,173" fill="#22c55e" />
          <rect x={160} y={155} width={36} height={30} fill="#030712" stroke={C.ink} strokeWidth={2} />
          <polyline points="164,178 174,168 184,174 192,160" stroke="#f59e0b" strokeWidth={1.5} fill="none" />
        </g>
        <rect x={205} y={115} width={28} height={70} fill="#1f2937" stroke={C.ink} strokeWidth={2} />
        {[0, 1, 2, 3, 4, 5].map((ai) => (
          <circle key={ai} cx={212 + (ai % 2) * 12} cy={122 + Math.floor(ai / 2) * 14} r={3} fill={ai === 0 ? '#ef4444' : ai === 3 ? '#eab308' : '#22c55e'} />
        ))}
        <rect x={125} y={200} width={70} height={25} fill="#374151" stroke={C.ink} strokeWidth={2} />
        {[0, 1, 2, 3].map((ti) => (
          <line key={ti} x1={138 + ti * 12} y1={208} x2={138 + ti * 12} y2={195} stroke="#d1d5db" strokeWidth={3} strokeLinecap="round" />
        ))}
        <rect x={155} y={80} width={70} height={20} rx={3} fill="#030712" stroke={C.ink} strokeWidth={2} />
        <text x={190} y={94} fontFamily="monospace" fontSize={10} fill="#22c55e" textAnchor="middle" fontWeight="bold">34:18:{secStr}</text>
        <Label x={190} y={74} t="MISSION TIMER" size={7} color="#94a3b8" />

        {/* 3. Two ACES II Ejection Seats */}
        {[165, 285].map((sx, idx) => (
          <g key={sx}>
            <rect x={sx - 20} y={170} width={40} height={130} rx={5} fill="#18181b" stroke={C.ink} strokeWidth={3} />
            <rect x={sx - 15} y={135} width={30} height={35} rx={4} fill="#27272a" stroke={C.ink} strokeWidth={2.5} />
            <polygon points={`${sx - 8},145 ${sx + 8},145 ${sx},158`} fill={C.red} />
            <path d={`M ${sx - 8} 305 Q ${sx} 318 ${sx + 8} 305`} stroke="#eab308" strokeWidth={3.5} fill="none" />
            <rect x={sx - 16} y={245} width={32} height={20} rx={3} fill="#e5e7eb" stroke={C.ink} strokeWidth={1.5} opacity={0.6} />
            {idx === 1 ? (
              <Figure x={sx} y={315} s={0.82} pose="sit" shirt="#3d5a45" cap />
            ) : you === 'seats' || you === 'window' ? (
              <Figure x={sx} y={315} s={0.82} pose="sit" shirt={C.red} cap />
            ) : (
              <Figure x={sx} y={315} s={0.82} pose="sit" shirt="#3d5a45" cap />
            )}
          </g>
        ))}

        {/* 4. Floor space behind seats: Green Army Cot & Sleeping Bag */}
        <line x1={375} y1={415} x2={410} y2={370} stroke="#94a3b8" strokeWidth={3} />
        <line x1={410} y1={415} x2={375} y2={370} stroke="#94a3b8" strokeWidth={3} />
        <line x1={530} y1={415} x2={565} y2={370} stroke="#94a3b8" strokeWidth={3} />
        <line x1={565} y1={415} x2={530} y2={370} stroke="#94a3b8" strokeWidth={3} />
        <rect x={365} y={364} width={215} height={10} rx={3} fill="#4b5320" stroke={C.ink} strokeWidth={2.5} />
        <rect x={370} y={342} width={180} height={25} rx={8} fill="#283618" stroke={C.ink} strokeWidth={2.5} />
        <rect x={374} y={334} width={34} height={16} rx={5} fill="#ffffff" stroke={C.ink} strokeWidth={2} />
        <ellipse cx={391} cy={342} rx={6} ry={3} fill="#0f172a" />
        <Label x={470} y={395} t="FOLDING ARMY COT" size={9} color="#cbd5e1" />
        {you === 'cot' ? (
          <Figure x={460} y={360} s={0.8} pose="lie" shirt={C.red} cap />
        ) : has('sleep') ? (
          <Figure x={460} y={360} s={0.8} pose="lie" shirt="#3d5a45" cap />
        ) : null}

        {/* 5. Pile of Yellow Piddle Packs */}
        <g>
          {Array.from({length: numPacks}).map((_, pi) => {
            const px = 590 + (pi % 5) * 22 + (Math.floor(pi / 5) % 2) * 10;
            const py = 412 - Math.floor(pi / 5) * 8;
            return (
              <g key={pi} transform={`translate(${px} ${py})`}>
                <rect x={-9} y={-6} width={18} height={12} rx={2} fill="#fde047" stroke={C.ink} strokeWidth={1.5} opacity={0.88} />
                <rect x={-5} y={-3} width={10} height={6} fill="#fef08a" />
                <line x1={-9} y1={-4} x2={9} y2={-4} stroke="#ca8a04" strokeWidth={1} />
              </g>
            );
          })}
          <Label x={640} y={426} t="PIDDLE PACKS" size={8} color="#94a3b8" />
        </g>

        {/* 6. Galley Shelf: Microwave, Food Cooler, Water Bottles */}
        <rect x={610} y={140} width={155} height={10} fill="#64748b" stroke={C.ink} strokeWidth={2.5} />
        <rect x={615} y={80} width={66} height={58} rx={4} fill="#334155" stroke={C.ink} strokeWidth={3} />
        <rect x={621} y={90} width={38} height={38} rx={2} fill={microOn ? '#fde047' : '#0f172a'} stroke={C.ink} strokeWidth={2} />
        <rect x={663} y={90} width={14} height={10} rx={1} fill="#030712" />
        <text x={670} y={98} fontFamily="monospace" fontSize={6} fill="#22c55e" textAnchor="middle">{microOn ? '00:42' : '12:00'}</text>
        {microOn && <path d={`M 640 75 q ${Math.sin(frame / 4) * 6} -10 0 -20`} stroke="#ffffff" strokeWidth={2.5} fill="none" opacity={0.8} />}
        <Label x={648} y={72} t="MICROWAVE" size={8} color="#cbd5e1" />

        {/* Cooler & Snacks */}
        <rect x={690} y={95} width={62} height={43} rx={4} fill="#0284c7" stroke={C.ink} strokeWidth={2.5} />
        <rect x={695} y={88} width={22} height={12} rx={2} fill="#e2e8f0" stroke={C.ink} strokeWidth={1.5} />
        <rect x={720} y={86} width={18} height={14} rx={2} fill="#ef4444" stroke={C.ink} strokeWidth={1.5} />
        <rect x={758} y={92} width={13} height={46} rx={3} fill="#dc2626" stroke={C.ink} strokeWidth={2} />
        <rect x={760} y={88} width={9} height={5} fill="#d1d5db" stroke={C.ink} strokeWidth={1.5} />
        <Label x={722} y={150} t="RATIONS · COOLER" size={8} color="#94a3b8" />

        {/* Water Bottles Shelf */}
        <rect x={610} y={200} width={100} height={8} fill="#64748b" stroke={C.ink} strokeWidth={2} />
        {[0, 1, 2, 3, 4, 5].map((wi) => (
          <g key={wi} transform={`translate(${618 + wi * 15} 180)`}>
            <rect x={-5} y={0} width={10} height={20} rx={2} fill="#38bdf8" stroke={C.ink} strokeWidth={1.5} opacity={0.85} />
            <rect x={-3} y={-4} width={6} height={4} fill="#ffffff" stroke={C.ink} strokeWidth={1} />
          </g>
        ))}
        <Label x={660} y={218} t="WATER" size={8} color="#94a3b8" />
        {you === 'food' && (
          <g>
            <Figure x={660} y={315} s={0.8} shirt={C.red} cap />
            <rect x={648} y={284} width={10} height={7} rx={1} fill="#e2e8f0" stroke={C.ink} strokeWidth={1} />
          </g>
        )}

        {/* 7. Chemical Toilet Box */}
        <rect x={725} y={350} width={76} height={65} rx={6} fill="#e2e8f0" stroke={C.ink} strokeWidth={3} />
        <rect x={720} y={338} width={86} height={14} rx={4} fill="#cbd5e1" stroke={C.ink} strokeWidth={2.5} />
        <line x1={758} y1={355} x2={768} y2={355} stroke={C.ink} strokeWidth={2} />
        <circle cx={812} cy={328} r={8} fill="#ffffff" stroke={C.ink} strokeWidth={1.5} />
        <line x1={804} y1={328} x2={804} y2={342} stroke="#ffffff" strokeWidth={2} />
        <line x1={700} y1={290} x2={810} y2={290} stroke="#94a3b8" strokeWidth={2} />
        <path d="M 705 290 Q 700 350 710 415" stroke="#2d6a4f" strokeWidth={12} fill="none" opacity={0.7} />
        <Label x={763} y={390} t="TOILET" size={9} color={C.navy} />
        {you === 'toilet' && <Figure x={705} y={415} s={0.8} shirt={C.red} cap />}
      </g>

      {/* SECTION D: DIEGO GARCIA ATOLL & RUNWAY (x: 2320..2600) */}
      <rect x={2320} y={730} width={280} height={370} fill="#0d9488" stroke={C.ink} strokeWidth={4} />
      <path d="M 2340 750 Q 2450 710 2600 720 L 2600 830 L 2340 830 Z" fill="#fde68a" stroke={C.ink} strokeWidth={3} />
      <rect x={2360} y={710} width={240} height={40} fill="#334155" stroke={C.ink} strokeWidth={3} />
      <line x1={2360} y1={730} x2={2600} y2={730} stroke="#ffffff" strokeWidth={4} strokeDasharray="18 12" />
      <Label x={2580} y={736} t="13" size={12} color="#ffffff" />
      {[2355, 2415].map((tx, ti) => (
        <g key={tx} transform={`translate(${tx} 720)`}>
          <path d={`M 0 0 Q ${10 + ti * 5} -35 ${15 + ti * 8} -70`} stroke="#78350f" strokeWidth={8} fill="none" strokeLinecap="round" />
          <g transform={`translate(${15 + ti * 8} -70) rotate(${palmSway})`}>
            {[-45, 0, 45, 90, 135, 180, 225].map((ang) => (
              <path key={ang} d="M 0 0 Q 15 -10 32 0" transform={`rotate(${ang})`} stroke="#16a34a" strokeWidth={5} fill="none" strokeLinecap="round" />
            ))}
          </g>
        </g>
      ))}
      <Label x={2480} y={685} t="DIEGO GARCIA" size={13} color="#f8fafc" />
      <Label x={2480} y={700} t="INDIAN OCEAN · FORWARD LOCATION" size={7} color="#cbd5e1" />

      {/* Landed B-2 on island runway */}
      {landed && (
        <g transform="translate(2470 725)">
          <path d="M 0 -22 L 50 6 L 40 10 L 25 6 L 15 10 L 0 3 L -15 10 L -25 6 L -40 10 L -50 6 Z" fill="#1e232a" stroke={C.ink} strokeWidth={2.5} />
          <line x1={-50} y1={6} x2={-80} y2={4} stroke="#cbd5e1" strokeWidth={1.5} />
          <line x1={-50} y1={6} x2={-80} y2={10} stroke="#cbd5e1" strokeWidth={1.5} />
          <ellipse cx={-92} cy={7} rx={16} ry={9} fill="#ea580c" stroke={C.ink} strokeWidth={2} />
        </g>
      )}
    </g>
  );
};
