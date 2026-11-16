import React from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont as loadLuckiest} from '@remotion/google-fonts/LuckiestGuy';
import {loadFont as loadNunito} from '@remotion/google-fonts/Nunito';

export const LUCKY = loadLuckiest().fontFamily;
export const NUNITO = loadNunito().fontFamily;

/** Playful palette: sunny yellow, coral, teal, ink. */
export const P = {
  sun: '#ffd23f',
  coral: '#ff6b6b',
  teal: '#2ec4b6',
  sky: '#4cc9f0',
  ink: '#1d1a31',
  white: '#ffffff',
  cream: '#fff6e0',
};

export type Fun = 'PEEK' | 'EYES' | 'OEYE' | 'DUCK';

const Eye: React.FC<{cx: number; cy: number; r: number; look?: [number, number]}> = ({cx, cy, r, look = [0.35, 0.1]}) => (
  <g>
    <circle cx={cx} cy={cy} r={r} fill={P.white} stroke={P.ink} strokeWidth={r * 0.16} />
    <circle cx={cx + r * look[0]} cy={cy + r * look[1]} r={r * 0.48} fill={P.ink} />
    <circle cx={cx + r * look[0] - r * 0.18} cy={cy + r * look[1] - r * 0.2} r={r * 0.16} fill={P.white} />
  </g>
);

/** A: teal blob mascot peeking over a KEEP OUT sign, fingers on the edge. */
export const Peek: React.FC = () => (
  <svg viewBox="0 0 400 400" width="100%" height="100%">
    <circle cx="200" cy="200" r="200" fill={P.sun} />
    <g transform="rotate(-6 200 200)">
      {/* blob head */}
      <path d="M 95 230 Q 90 95 200 92 Q 310 95 305 230 Z" fill={P.teal} stroke={P.ink} strokeWidth="12" strokeLinejoin="round" />
      <path d="M 150 104 Q 160 70 178 96" fill={P.teal} stroke={P.ink} strokeWidth="10" strokeLinecap="round" />
      <Eye cx={160} cy={170} r={36} look={[0.4, 0.15]} />
      <Eye cx={242} cy={170} r={36} look={[0.4, 0.15]} />
      {/* sign */}
      <rect x="60" y="222" width="280" height="110" rx="18" fill={P.coral} stroke={P.ink} strokeWidth="12" />
      <text x="200" y="298" textAnchor="middle" fontFamily={LUCKY} fontSize="58" fill={P.white} stroke={P.ink} strokeWidth="3">
        KEEP OUT
      </text>
      {/* fingers */}
      {[110, 136, 264, 290].map((x) => (
        <rect key={x} x={x - 11} y={206} width="22" height="34" rx="11" fill={P.teal} stroke={P.ink} strokeWidth="9" />
      ))}
    </g>
  </svg>
);

/** B: a coral door cracked open; two big curious eyes glow in the dark gap. */
const Eyes: React.FC = () => (
  <svg viewBox="0 0 400 400" width="100%" height="100%">
    <circle cx="200" cy="200" r="200" fill={P.teal} />
    <rect x="105" y="70" width="190" height="270" rx="14" fill={P.ink} stroke={P.ink} strokeWidth="12" />
    {/* eyes in the gap */}
    <Eye cx={232} cy={176} r={30} look={[-0.45, 0.05]} />
    <Eye cx={270} cy={176} r={30} look={[-0.45, 0.05]} />
    {/* door swung partly open, covering left part */}
    <polygon points="105,70 205,86 205,326 105,340" fill={P.coral} stroke={P.ink} strokeWidth="12" strokeLinejoin="round" />
    <circle cx="190" cy="210" r="11" fill={P.sun} stroke={P.ink} strokeWidth="6" />
    <rect x="128" y="120" width="56" height="64" rx="8" fill="none" stroke={P.ink} strokeWidth="7" opacity="0.5" />
    <rect x="128" y="214" width="56" height="80" rx="8" fill="none" stroke={P.ink} strokeWidth="7" opacity="0.5" />
    {/* sparkle */}
    <path d="M 320 92 l 8 20 l 20 8 l -20 8 l -8 20 l -8 -20 l -20 -8 l 20 -8 z" fill={P.sun} stroke={P.ink} strokeWidth="5" strokeLinejoin="round" />
  </svg>
);

/** C: big "O" turned into a curious eye with a raised brow; sticker style. */
const OEye: React.FC = () => (
  <svg viewBox="0 0 400 400" width="100%" height="100%">
    <circle cx="200" cy="200" r="200" fill={P.coral} />
    <g transform="rotate(-8 200 200)">
      <circle cx="200" cy="215" r="128" fill={P.white} stroke={P.ink} strokeWidth="16" />
      <circle cx="240" cy="226" r="62" fill={P.ink} />
      <circle cx="218" cy="200" r="20" fill={P.white} />
      <path d="M 92 76 Q 190 20 300 84" fill="none" stroke={P.ink} strokeWidth="22" strokeLinecap="round" />
      <rect x="250" y="300" width="120" height="44" rx="10" fill={P.sun} stroke={P.ink} strokeWidth="9" transform="rotate(14 310 322)" />
      <text x="310" y="333" textAnchor="middle" fontFamily={LUCKY} fontSize="30" fill={P.ink} transform="rotate(14 310 322)">
        PEEK!
      </text>
    </g>
  </svg>
);

/** D: grinning mascot ducking under a caution tape. */
const Duck: React.FC = () => (
  <svg viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <pattern id="tape2" width="56" height="56" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="56" height="56" fill={P.sun} />
        <rect width="28" height="56" fill={P.ink} />
      </pattern>
      <clipPath id="cD">
        <circle cx="200" cy="200" r="200" />
      </clipPath>
    </defs>
    <g clipPath="url(#cD)">
      <rect width="400" height="400" fill={P.sky} />
      {/* body */}
      <path d="M 120 420 Q 110 250 210 240 Q 310 250 300 420 Z" fill={P.coral} stroke={P.ink} strokeWidth="12" />
      {/* head */}
      <circle cx="210" cy="215" r="88" fill={P.sun} stroke={P.ink} strokeWidth="12" />
      <Eye cx={180} cy={200} r={24} look={[0.45, -0.2]} />
      <Eye cx={242} cy={200} r={24} look={[0.45, -0.2]} />
      <path d="M 178 250 Q 215 284 252 248" fill={P.white} stroke={P.ink} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      {/* tape above head */}
      <rect x="-40" y="98" width="480" height="54" fill="url(#tape2)" stroke={P.ink} strokeWidth="10" transform="rotate(-10 200 125)" />
      {/* hand lifting tape */}
      <circle cx="292" cy="140" r="24" fill={P.sun} stroke={P.ink} strokeWidth="10" />
    </g>
    <circle cx="200" cy="200" r="194" fill="none" stroke={P.ink} strokeWidth="12" />
  </svg>
);

const FunMark: React.FC<{id: Fun}> = ({id}) => (id === 'PEEK' ? <Peek /> : id === 'EYES' ? <Eyes /> : id === 'OEYE' ? <OEye /> : <Duck />);

export const FunLogo: React.FC<{id: Fun}> = ({id}) => (
  <AbsoluteFill style={{background: P.cream}}>
    <FunMark id={id} />
  </AbsoluteFill>
);

export const FunBanner: React.FC<{id: Fun}> = ({id}) => (
  <AbsoluteFill style={{background: P.sun, overflow: 'hidden'}}>
    {/* confetti of tiny doors, keys, question marks */}
    {Array.from({length: 46}).map((_, i) => {
      const x = (i * 211) % 2560;
      const y = (i * 137) % 1440;
      const r = ((i * 47) % 50) - 25;
      const c = [P.coral, P.teal, P.sky, P.white][i % 4];
      return (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: x,
            top: y,
            fontFamily: LUCKY,
            fontSize: 70 + (i % 3) * 20,
            color: c,
            opacity: 0.55,
            transform: `rotate(${r}deg)`,
            WebkitTextStroke: `4px ${P.ink}`,
          }}
        >
          {['?', '!', '★', '?'][i % 4]}
        </div>
      );
    })}
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
        gap: 50,
      }}
    >
      <div style={{width: 340, height: 340, borderRadius: '50%', border: `10px solid ${P.ink}`, boxShadow: `10px 12px 0 ${P.ink}`, overflow: 'hidden', flexShrink: 0}}>
        <FunMark id={id} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', transform: 'rotate(-3deg)'}}>
        <div
          style={{
            fontFamily: LUCKY,
            fontSize: 170,
            lineHeight: 0.95,
            color: P.white,
            WebkitTextStroke: `14px ${P.ink}`,
            paintOrder: 'stroke fill',
            textShadow: `10px 12px 0 ${P.ink}`,
          }}
        >
          OFF LIMITS <span style={{color: P.coral}}>LIFE</span>
        </div>
        <div
          style={{
            fontFamily: NUNITO,
            fontWeight: 900,
            fontSize: 54,
            color: P.ink,
            marginTop: 22,
            background: P.white,
            border: `6px solid ${P.ink}`,
            borderRadius: 40,
            padding: '6px 30px',
            alignSelf: 'flex-start',
          }}
        >
          How people live where you can’t go
        </div>
      </div>
    </div>
  </AbsoluteFill>
);
