import React from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont as loadAnton} from '@remotion/google-fonts/Anton';
import {loadFont as loadManrope} from '@remotion/google-fonts/Manrope';

const ANTON = loadAnton().fontFamily;
const MANROPE = loadManrope().fontFamily;

export const BR = {
  bg: '#0e1726',
  bg2: '#16233a',
  line: '#2b3d5c',
  amber: '#ffb000',
  bone: '#f2ebdd',
  red: '#e63946',
};

export type BrandId = 'OLL' | 'UQ' | 'DOOR' | 'KEY' | 'TAPE';
const NAME: Record<BrandId, [string, string]> = {
  OLL: ['OFF LIMITS', 'LIFE'],
  UQ: ['UNSEEN', 'QUARTERS'],
  DOOR: ['OFF LIMITS', 'LIFE'],
  KEY: ['OFF LIMITS', 'LIFE'],
  TAPE: ['OFF LIMITS', 'LIFE'],
};
const TAG = 'How people live where you can’t go';

/** Hatch wheel mark (Off Limits Life): wheel + hazard arc. */
const HatchMark: React.FC<{size: number}> = ({size}) => {
  const spokes = [0, 60, 120, 180, 240, 300];
  return (
    <svg width={size} height={size} viewBox="0 0 400 400">
      <defs>
        <pattern id="haz" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="40" height="40" fill={BR.amber} />
          <rect width="20" height="40" fill={BR.bg} />
        </pattern>
        <clipPath id="lower">
          <rect x="0" y="230" width="400" height="170" />
        </clipPath>
      </defs>
      <circle cx="200" cy="200" r="196" fill={BR.bg} />
      <circle cx="200" cy="200" r="168" fill="none" stroke={BR.amber} strokeWidth="30" />
      <circle cx="200" cy="200" r="112" fill="none" stroke={BR.bone} strokeWidth="22" />
      {spokes.map((a) => (
        <line
          key={a}
          x1="200"
          y1="200"
          x2={200 + 112 * Math.cos((a * Math.PI) / 180)}
          y2={200 + 112 * Math.sin((a * Math.PI) / 180)}
          stroke={BR.bone}
          strokeWidth="20"
          strokeLinecap="round"
        />
      ))}
      <circle cx="200" cy="200" r="34" fill={BR.bone} />
      <circle cx="200" cy="200" r="14" fill={BR.bg} />
    </svg>
  );
};

/** Porthole mark (Unseen Quarters): riveted porthole with a warm-lit bunk inside. */
const PortholeMark: React.FC<{size: number}> = ({size}) => {
  const rivets = Array.from({length: 12}, (_, i) => (i * 30 * Math.PI) / 180);
  return (
    <svg width={size} height={size} viewBox="0 0 400 400">
      <circle cx="200" cy="200" r="196" fill={BR.bg} />
      <circle cx="200" cy="200" r="160" fill="#596b80" />
      <circle cx="200" cy="200" r="118" fill="#1a2740" />
      {rivets.map((a, i) => (
        <circle key={i} cx={200 + 140 * Math.cos(a)} cy={200 + 140 * Math.sin(a)} r="9" fill={BR.bone} />
      ))}
      <clipPath id="glass">
        <circle cx="200" cy="200" r="118" />
      </clipPath>
      <g clipPath="url(#glass)">
        <rect x="100" y="170" width="200" height="34" rx="6" fill={BR.amber} />
        <rect x="100" y="222" width="200" height="34" rx="6" fill="#c98a00" />
        <rect x="100" y="118" width="200" height="34" rx="6" fill="#c98a00" opacity={0.6} />
        <circle cx="128" cy="187" r="13" fill={BR.bone} />
        <path d="M 150 110 L 300 290" stroke="#ffffff" strokeWidth="18" opacity={0.08} />
      </g>
      <circle cx="200" cy="200" r="118" fill="none" stroke={BR.bone} strokeWidth="8" />
    </svg>
  );
};

/** Door ajar: dark wall, door opened a crack, a wedge of warm light spills across the floor. */
const DoorMark: React.FC<{size: number}> = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 400 400">
    <defs>
      <linearGradient id="beam" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffd36b" stopOpacity="1" />
        <stop offset="1" stopColor="#ffb000" stopOpacity="0" />
      </linearGradient>
      <radialGradient id="glowD" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#fff1c1" />
        <stop offset="1" stopColor="#ffb000" />
      </radialGradient>
      <clipPath id="circD"><circle cx="200" cy="200" r="196" /></clipPath>
    </defs>
    <g clipPath="url(#circD)">
      <rect width="400" height="400" fill="#0b1220" />
      <rect y="300" width="400" height="100" fill="#121c30" />
      {/* light wedge on the floor */}
      <polygon points="205,300 245,300 400,400 330,400" fill="url(#beam)" opacity="0.9" />
      {/* door frame */}
      <rect x="140" y="90" width="120" height="210" fill="url(#glowD)" />
      {/* the door itself, swung inward: a dark trapezoid covering most of the opening */}
      <polygon points="140,90 222,104 222,288 140,300" fill="#1b2740" stroke="#0b1220" strokeWidth="4" />
      <circle cx="210" cy="198" r="6" fill="#ffb000" />
      <rect x="132" y="82" width="136" height="226" fill="none" stroke="#f2ebdd" strokeWidth="10" />
    </g>
    <circle cx="200" cy="200" r="190" fill="none" stroke="#ffb000" strokeWidth="12" />
  </svg>
);

/** Keyhole: a glowing keyhole you can peek through; inside, a lit room. */
const KeyMark: React.FC<{size: number}> = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 400 400">
    <defs>
      <radialGradient id="glowK" cx="0.5" cy="0.4" r="0.6">
        <stop offset="0" stopColor="#fff4cf" />
        <stop offset="0.55" stopColor="#ffc233" />
        <stop offset="1" stopColor="#e07a00" />
      </radialGradient>
      <clipPath id="hole">
        <circle cx="200" cy="160" r="70" />
        <polygon points="160,190 240,190 268,330 132,330" />
      </clipPath>
    </defs>
    <circle cx="200" cy="200" r="196" fill="#0b1220" />
    <circle cx="200" cy="200" r="182" fill="none" stroke="#1f2d47" strokeWidth="6" />
    <g clipPath="url(#hole)">
      <rect width="400" height="400" fill="url(#glowK)" />
      {/* tiny room seen through the keyhole: a bunk and a silhouette */}
      <rect x="120" y="250" width="160" height="16" fill="#7a3d00" opacity="0.55" />
      <circle cx="226" cy="214" r="15" fill="#2b1600" opacity="0.75" />
      <rect x="214" y="230" width="24" height="44" rx="8" fill="#2b1600" opacity="0.75" />
    </g>
    <circle cx="200" cy="160" r="70" fill="none" stroke="#f2ebdd" strokeWidth="0" />
    {/* glow halo */}
    <circle cx="200" cy="200" r="196" fill="none" stroke="#ffb000" strokeWidth="10" />
  </svg>
);

/** Hazard tape X over a lit window. */
const TapeMark: React.FC<{size: number}> = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 400 400">
    <defs>
      <pattern id="hz2" width="44" height="44" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="44" height="44" fill="#ffb000" />
        <rect width="22" height="44" fill="#0b1220" />
      </pattern>
      <radialGradient id="glowT" cx="0.5" cy="0.5" r="0.6">
        <stop offset="0" stopColor="#fff1c1" />
        <stop offset="1" stopColor="#ffb000" />
      </radialGradient>
      <clipPath id="circT"><circle cx="200" cy="200" r="196" /></clipPath>
    </defs>
    <g clipPath="url(#circT)">
      <rect width="400" height="400" fill="#0b1220" />
      <rect x="120" y="110" width="160" height="180" rx="10" fill="url(#glowT)" />
      <line x1="200" y1="110" x2="200" y2="290" stroke="#0b1220" strokeWidth="10" />
      <line x1="120" y1="200" x2="280" y2="200" stroke="#0b1220" strokeWidth="10" />
      <rect x="-40" y="170" width="480" height="58" fill="url(#hz2)" stroke="#0b1220" strokeWidth="6" transform="rotate(-28 200 200)" />
      <rect x="-40" y="170" width="480" height="58" fill="url(#hz2)" stroke="#0b1220" strokeWidth="6" transform="rotate(28 200 200)" />
    </g>
    <circle cx="200" cy="200" r="190" fill="none" stroke="#f2ebdd" strokeWidth="10" />
  </svg>
);

const Mark: React.FC<{id: BrandId; size: number}> = ({id, size}) =>
  id === 'OLL' ? <HatchMark size={size} /> : id === 'UQ' ? <PortholeMark size={size} /> : id === 'DOOR' ? <DoorMark size={size} /> : id === 'KEY' ? <KeyMark size={size} /> : <TapeMark size={size} />;

export const Logo: React.FC<{id: BrandId}> = ({id}) => (
  <AbsoluteFill style={{background: BR.bg, alignItems: 'center', justifyContent: 'center'}}>
    <Mark id={id} size={800} />
  </AbsoluteFill>
);

/** Thin line-art silhouettes of closed worlds for the banner background. */
const Silhouettes: React.FC = () => (
  <svg width={2560} height={1440} viewBox="0 0 2560 1440" style={{position: 'absolute'}}>
    <defs>
      <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
        <path d="M 64 0 L 0 0 0 64" fill="none" stroke={BR.line} strokeWidth="1.5" />
      </pattern>
    </defs>
    <rect width="2560" height="1440" fill="url(#grid)" opacity={0.55} />
    <g fill="none" stroke="#3f5880" strokeWidth="5" strokeLinejoin="round" opacity={0.9}>
      {/* submarine, left */}
      <rect x="80" y="980" width="760" height="150" rx="75" />
      <rect x="300" y="910" width="120" height="72" rx="14" />
      <line x1="180" y1="1055" x2="740" y2="1055" />
      {[260, 380, 500, 620].map((x) => (
        <line key={x} x1={x} y1="995" x2={x} y2="1115" />
      ))}
      {/* oil rig, right */}
      <g transform="translate(140 230)">
      <rect x="1900" y="760" width="420" height="70" />
      <line x1="1950" y1="830" x2="1930" y2="1200" />
      <line x1="2270" y1="830" x2="2290" y2="1200" />
      <line x1="1950" y1="900" x2="2270" y2="1000" />
      <line x1="2270" y1="900" x2="1950" y2="1000" />
      <path d="M 2100 760 L 2150 520 L 2200 760" />
      <rect x="1960" y="690" width="140" height="70" />
      </g>
      {/* antarctic station, top-left */}
      <path d="M 160 420 L 520 420 L 520 340 Q 340 260 160 340 Z" />
      <line x1="200" y1="420" x2="200" y2="470" />
      <line x1="480" y1="420" x2="480" y2="470" />
      {/* prison block, top-right */}
      <rect x="2000" y="250" width="360" height="200" />
      {[2040, 2090, 2140, 2190, 2240, 2290, 2340].map((x) => (
        <line key={x} x1={x} y1="290" x2={x} y2="410" />
      ))}
      {/* water line */}
      <path d="M 0 960 Q 160 940 320 960 T 640 960 T 960 960" opacity={0.6} />
    </g>
  </svg>
);

export const Banner: React.FC<{id: BrandId}> = ({id}) => {
  const [a, b] = NAME[id];
  return (
    <AbsoluteFill style={{background: `radial-gradient(ellipse at center, ${BR.bg2} 0%, ${BR.bg} 70%)`}}>
      <Silhouettes />
      {/* safe area 1546×423 centered */}
      <div
        style={{
          position: 'absolute',
          left: (2560 - 1546) / 2,
          top: (1440 - 423) / 2,
          width: 1546,
          height: 423,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 56,
        }}
      >
        <Mark id={id} size={300} />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{fontFamily: ANTON, fontSize: 168, lineHeight: 0.95, color: BR.bone, letterSpacing: 4}}>
            {a} <span style={{color: BR.amber}}>{b}</span>
          </div>
          <div style={{fontFamily: MANROPE, fontWeight: 600, fontSize: 52, color: '#b8c4d6', marginTop: 18, letterSpacing: 1}}>{TAG}</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
