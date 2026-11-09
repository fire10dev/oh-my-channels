import React from 'react';
import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {loadFont as loadMarker} from '@remotion/google-fonts/PermanentMarker';
import {loadFont as loadHand} from '@remotion/google-fonts/PatrickHand';

export const MARKER = loadMarker().fontFamily;
export const HAND = loadHand().fontFamily;

export const C = {
  ink: '#16161d',
  navy: '#22223b',
  cream: '#f9e4c5',
  paper: '#f4ecdc',
  red: '#e63946',
  orange: '#f4a261',
  mint: '#a8dadc',
  steel: '#6b7b86',
  steelDark: '#4a5660',
  white: '#ffffff',
};

export const ease = Easing.inOut(Easing.cubic);

/** Line boil: noise seed changes every 4 frames (measured on the reference channel). */
export const BoilDefs: React.FC<{id: string; scale: number}> = ({id, scale}) => {
  const frame = useCurrentFrame();
  return (
    <defs>
      <filter id={id} x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves={2} seed={Math.floor(frame / 4)} />
        <feDisplacementMap in="SourceGraphic" scale={scale} xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  );
};

/** Stick figure: round white head, rectangle body, stick limbs. Origin = feet. */
export const Figure: React.FC<{
  x: number;
  y: number;
  s?: number;
  pose?: 'stand' | 'sit' | 'lie';
  cap?: boolean;
  shirt?: string;
  hat?: 'chef';
  flip?: boolean;
}> = ({x, y, s = 1, pose = 'stand', cap = false, shirt = '#457b9d', hat, flip}) => {
  const sw = 4;
  const body = (
    <g>
      {pose === 'sit' ? (
        <g stroke={C.ink} strokeWidth={sw} strokeLinecap="round" fill="none">
          <line x1={-6} y1={-30} x2={12} y2={-30} />
          <line x1={12} y1={-30} x2={12} y2={-4} />
          <line x1={6} y1={-30} x2={22} y2={-30} />
          <line x1={22} y1={-30} x2={22} y2={-4} />
        </g>
      ) : (
        <g stroke={C.ink} strokeWidth={sw} strokeLinecap="round">
          <line x1={-6} y1={-28} x2={-8} y2={0} />
          <line x1={6} y1={-28} x2={8} y2={0} />
        </g>
      )}
      <rect x={-13} y={-58} width={26} height={32} rx={7} fill={shirt} stroke={C.ink} strokeWidth={sw} />
      <g stroke={C.ink} strokeWidth={sw} strokeLinecap="round">
        <line x1={-13} y1={-52} x2={-22} y2={-34} />
        <line x1={13} y1={-52} x2={22} y2={-34} />
      </g>
      <circle cx={0} cy={-76} r={17} fill={C.white} stroke={C.ink} strokeWidth={sw} />
      <ellipse cx={-6} cy={-82} rx={5} ry={3} fill="#ffffff" opacity={0.9} />
      <circle cx={-5} cy={-77} r={2.4} fill={C.ink} />
      <circle cx={6} cy={-77} r={2.4} fill={C.ink} />
      <path d="M -5 -68 Q 0 -65 5 -68" stroke={C.ink} strokeWidth={2.5} fill="none" strokeLinecap="round" />
      {cap && (
        <g>
          <path d="M -17 -82 Q 0 -102 17 -82 Z" fill={C.red} stroke={C.ink} strokeWidth={3.5} />
          <path d="M 12 -84 L 28 -82" stroke={C.ink} strokeWidth={5} strokeLinecap="round" />
        </g>
      )}
      {hat === 'chef' && (
        <g>
          <rect x={-13} y={-104} width={26} height={14} fill="#fff" stroke={C.ink} strokeWidth={3} />
          <circle cx={-8} cy={-106} r={8} fill="#fff" stroke={C.ink} strokeWidth={3} />
          <circle cx={8} cy={-106} r={8} fill="#fff" stroke={C.ink} strokeWidth={3} />
        </g>
      )}
    </g>
  );
  const rot = pose === 'lie' ? -90 : 0;
  return (
    <g transform={`translate(${x} ${y}) scale(${(flip ? -1 : 1) * s} ${s}) rotate(${rot})`}>{body}</g>
  );
};

export const Label: React.FC<{x: number; y: number; t: string; size?: number; color?: string; anchor?: 'middle' | 'start'}> = ({
  x,
  y,
  t,
  size = 14,
  color = C.navy,
  anchor = 'middle',
}) => (
  <text x={x} y={y} fontFamily={MARKER} fontSize={size} fill={color} textAnchor={anchor} letterSpacing={0.5}>
    {t}
  </text>
);

/** Top-left HUD: chalkboard day badge + clock chip. */
export const Hud: React.FC<{day: string; clock: string}> = ({day, clock}) => (
  <div style={{position: 'absolute', left: 48, top: 40, display: 'flex', gap: 14, alignItems: 'center'}}>
    <div
      style={{
        background: '#2f3e36',
        border: '8px solid #8d6e4c',
        borderRadius: 10,
        padding: '6px 22px',
        color: '#f1f1e6',
        fontFamily: MARKER,
        fontSize: 46,
        boxShadow: '0 6px 0 rgba(0,0,0,0.25)',
      }}
    >
      {day}
    </div>
    <div
      style={{
        background: C.cream,
        border: `4px solid ${C.ink}`,
        borderRadius: 30,
        padding: '4px 18px',
        fontFamily: HAND,
        fontSize: 34,
        color: C.navy,
      }}
    >
      {clock}
    </div>
  </div>
);

/** Narration caption: ≤3 words at a time, timed by character share of the line. */
export const Caption: React.FC<{text: string; seconds: number}> = ({text, seconds}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const words = text.split(/\s+/);
  const chunks: string[] = [];
  let cur: string[] = [];
  for (const w of words) {
    cur.push(w);
    if (cur.length >= 3 || /[.,:!?]$/.test(w)) {
      chunks.push(cur.join(' '));
      cur = [];
    }
  }
  if (cur.length) chunks.push(cur.join(' '));
  const total = chunks.reduce((a, c) => a + c.length + 2, 0);
  const t = frame / fps;
  let acc = 0;
  let idx = chunks.length - 1;
  for (let i = 0; i < chunks.length; i++) {
    acc += ((chunks[i].length + 2) / total) * seconds;
    if (t < acc) {
      idx = i;
      break;
    }
  }
  const txt = chunks[idx].replace(/[,:]$/, '');
  return (
    <div style={{position: 'absolute', bottom: 120, width: '100%', textAlign: 'center'}}>
      <span
        style={{
          fontFamily: MARKER,
          fontSize: 76,
          color: C.white,
          WebkitTextStroke: `10px ${C.navy}`,
          paintOrder: 'stroke fill',
          textTransform: 'uppercase',
          letterSpacing: 2,
        }}
      >
        {txt}
      </span>
    </div>
  );
};

/** Chapter card shown at the start of a problem scene. */
export const ChapterCard: React.FC<{kicker: string; title: string; frames: number}> = ({kicker, title, frames}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  if (frame >= frames) return null;
  const pop = spring({frame, fps, config: {damping: 14, stiffness: 180}});
  return (
    <AbsoluteFill style={{background: '#1b1b26', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{fontFamily: HAND, fontSize: 54, color: C.orange, letterSpacing: 6}}>{kicker}</div>
      <div
        style={{
          fontFamily: MARKER,
          fontSize: 170,
          color: C.cream,
          transform: `scale(${0.6 + 0.4 * pop}) rotate(${-2 + 2 * pop}deg)`,
        }}
      >
        {title}
      </div>
    </AbsoluteFill>
  );
};

export const StatCard: React.FC<{big: string; small: string}> = ({big, small}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const inn = spring({frame: frame - 10, fps, config: {damping: 16}});
  return (
    <div
      style={{
        position: 'absolute',
        right: 70,
        top: 150,
        width: 520,
        padding: '26px 30px',
        background: C.cream,
        border: `6px solid ${C.ink}`,
        borderRadius: 22,
        boxShadow: '10px 12px 0 rgba(0,0,0,0.35)',
        transform: `translateX(${(1 - inn) * 700}px) rotate(1.5deg)`,
        textAlign: 'center',
      }}
    >
      <div style={{fontFamily: MARKER, fontSize: 150, color: C.red, lineHeight: 1}}>{big}</div>
      <div style={{fontFamily: HAND, fontSize: 44, color: C.navy}}>{small}</div>
    </div>
  );
};

export const Quote: React.FC<{text: string}> = ({text}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const inn = spring({frame: frame - 18, fps, config: {damping: 10}});
  const blink = Math.floor(frame / 8) % 2 === 0 ? 1 : 0.75;
  return (
    <div style={{position: 'absolute', top: 170, width: '100%', textAlign: 'center', transform: `scale(${inn})`}}>
      <span
        style={{
          fontFamily: MARKER,
          fontSize: 92,
          color: C.orange,
          fontStyle: 'italic',
          display: 'inline-block',
          transform: 'skewX(-8deg)',
          WebkitTextStroke: `8px ${C.ink}`,
          paintOrder: 'stroke fill',
          textShadow: `0 0 30px rgba(244,162,97,${0.8 * blink})`,
        }}
      >
        {text}
      </span>
    </div>
  );
};

/** Film grain (changes every frame) + soft vignette. */
export const Finish: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      <svg width="1920" height="1080" style={{position: 'absolute', opacity: 0.07, mixBlendMode: 'multiply'}}>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={1} seed={frame % 50} />
        </filter>
        <rect width="1920" height="1080" filter="url(#grain)" />
      </svg>
      <AbsoluteFill style={{background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.38) 100%)'}} />
    </AbsoluteFill>
  );
};

export const camAt = (
  frame: number,
  dur: number,
  from: [number, number, number],
  to: [number, number, number],
  moveFrames = 22,
) => {
  const k = interpolate(frame, [0, moveFrames], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});
  const push = interpolate(frame, [0, dur], [1, 1.05], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});
  const cx = from[0] + (to[0] - from[0]) * k;
  const cy = from[1] + (to[1] - from[1]) * k;
  const z = (from[2] + (to[2] - from[2]) * k) * push;
  return {cx, cy, z};
};
