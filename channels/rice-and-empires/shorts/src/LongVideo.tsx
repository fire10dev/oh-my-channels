// 16:9 long-video composition (L003+). Data: src/<vid>.json (tools/long_build.py) + src/<vid>.timeline.json (Kokoro).
// Segments: chapter cards (own time, music up) and narration rows (shots share the row time; music ducked).
import {loadFont as loadCinzel} from '@remotion/google-fonts/Cinzel';
import {loadFont as loadBVP} from '@remotion/google-fonts/BeVietnamPro';
import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Easing,
  Img,
  interpolate,
  OffthreadVideo,
  random,
  Sequence,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {BRAND} from './Brand';
import {RedRiverMap} from './LongMap';
import {FxLabel, FxShot, type Scene, type Shot as FxShotT} from './FxScene';

const {fontFamily: cinzel} = loadCinzel('normal', {weights: ['700', '900'], subsets: ['latin']});
const {fontFamily: body} = loadBVP('normal', {weights: ['500', '600'], subsets: ['latin', 'vietnamese']});

export const LFPS = 30;
const PAD = 0.45; // air after each narration row (s)
const CARD = 3.4; // chapter card (s)
const END = 5; // end card (s)
const XF = 12; // shot cross-fade (frames)

export type Shot =
  | {k: 'img' | 'tall' | 'clip'; src: string}
  | {k: 'map'; state: string}
  | {k: 'tl'; year: string};
export type Row = {id: string; ch: number; sub: string; say: string; shots: Shot[]; src: string | null; cardBefore: string | null; cardAfter: string | null};
// Per-row sound design + local motion (shorts/src/<vid>.sfx.json): times are seconds from the row start.
export type Cue = {src: string; at: number; dur: number; vol?: number; from?: number; fadeOut?: number};
// shots: recipe-v1 VFX per image shot (key = shot index in the row; times = seconds from that shot's start).
export type RowFx = {sfx?: Cue[]; fx?: ('embers' | 'shake')[]; shakeAt?: number[]; shots?: Record<string, Omit<FxShotT, 'img' | 'start'>>; label?: Scene['label']};
export type LongData = {
  chapters: string[];
  rows: Row[];
  music?: {src: string; fromCh: number; gain?: number}[];
  plx?: Record<string, string>; // image src -> parallax clip (tools/parallax_render.py)
  fx?: Record<string, RowFx>; // row id -> cues
};
export type Timed = {id: string; file: string; seconds: number};

type Seg =
  | {kind: 'card'; card: string; from: number; frames: number}
  | {kind: 'row'; row: Row; idx: number; vo: Timed; from: number; frames: number; voFrames: number};

export const segments = (d: LongData, t: Timed[]): Seg[] => {
  const out: Seg[] = [];
  let at = 0;
  const card = (c: string) => {
    const frames = Math.round((c === 'end' ? END : CARD) * LFPS);
    out.push({kind: 'card', card: c, from: at, frames});
    at += frames;
  };
  d.rows.forEach((row, idx) => {
    if (row.cardBefore) card(row.cardBefore);
    const vo = t[idx];
    const voFrames = Math.round(vo.seconds * LFPS);
    const frames = Math.round((vo.seconds + PAD) * LFPS);
    out.push({kind: 'row', row, idx, vo, from: at, frames, voFrames});
    at += frames;
    if (row.cardAfter) card(row.cardAfter);
  });
  return out;
};
export const longTotal = (d: LongData, t: Timed[]) => segments(d, t).reduce((a, s) => a + s.frames, 0);

const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
const CH_YEAR = [-111, -300, -111, 40, 187, 679, 905, 939];

// ---------- timeline ribbon ----------
const Y0 = -260;
const Y1 = 1000;
const yearLabel = (y: number) => (y < 0 ? `${-Math.round(y)} BC` : `AD ${Math.round(y)}`);
const Ribbon: React.FC<{year: number; from?: number; width: number; progress: number; draw?: boolean; big?: boolean}> = ({year, from, width, progress, draw, big}) => {
  const X = (y: number) => ((y - Y0) / (Y1 - Y0)) * width;
  const h = big ? 26 : 14;
  const cur = interpolate(progress, [0, 1], [from ?? year, year]);
  const ruleEnd = draw ? interpolate(progress, [0, 1], [-111, 939]) : 939;
  const seg = (a: number, b: number) => [Math.max(a, -111), Math.min(b, ruleEnd)] as const;
  const parts: [number, number][] = [seg(-111, 40), seg(43, 544), seg(602, 939)].filter(([a, b]) => b > a) as [number, number][];
  const fs = big ? 24 : 17;
  return (
    <svg width={width} height={big ? 150 : 90} style={{overflow: 'visible'}}>
      <line x1={0} x2={width} y1={40} y2={40} stroke={BRAND.gold} strokeOpacity={0.35} strokeWidth={2} />
      {parts.map(([a, b]) => (
        <rect key={a} x={X(a)} y={40 - h / 2} width={X(b) - X(a)} height={h} fill={BRAND.vermilion} opacity={0.9} rx={3} />
      ))}
      {[[40, 43, 'Trưng 40–43'], [544, 602, 'Vạn Xuân 544–602']].map(([a, b, l]) => (
        <g key={l as string} opacity={(b as number) <= ruleEnd + 1 ? 1 : 0}>
          <rect x={X(a as number) - 3} y={40 - h / 2 - 4} width={X(b as number) - X(a as number) + 6} height={h + 8} fill={BRAND.goldLight} rx={3} />
          <text x={X(a as number)} y={40 + h + 18} fill={BRAND.goldLight} fontFamily={body} fontSize={fs - 2} textAnchor="middle">{l}</text>
        </g>
      ))}
      {[-111, 939].map((y) => (
        <text key={y} x={X(y)} y={40 - h / 2 - 12} fill={BRAND.parchment} fontFamily={body} fontSize={fs} fontWeight={600} textAnchor="middle" opacity={y <= ruleEnd + 1 ? 1 : 0}>
          {yearLabel(y)}
        </text>
      ))}
      <g transform={`translate(${X(cur)},40)`}>
        <polygon points="0,-30 -11,-48 11,-48" fill={BRAND.goldLight} />
        <circle r={big ? 9 : 6} fill={BRAND.goldLight} stroke={BRAND.lacquer} strokeWidth={3} />
      </g>
    </svg>
  );
};

// ---------- shared layers ----------
const Grain: React.FC<{opacity?: number}> = ({opacity = 0.16}) => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{mixBlendMode: 'overlay', opacity, pointerEvents: 'none'}}>
      <svg width="100%" height="100%">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} seed={Math.floor(f / 2) % 50} />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </AbsoluteFill>
  );
};
const Vignette: React.FC = () => (
  <AbsoluteFill style={{background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(8,5,2,0.62) 100%)', pointerEvents: 'none'}} />
);
// Drifting dust + smoke: moves faster than the image underneath → reads as depth (2.5D parallax layer).
const Atmos: React.FC<{seed: number; smoke?: number}> = ({seed, smoke = 0.18}) => {
  const f = useCurrentFrame();
  const motes = Array.from({length: 26}, (_, i) => {
    const x = (random(`x${seed}${i}`) * 2200 + f * (0.6 + random(`v${seed}${i}`) * 1.4)) % 2200 - 140;
    const y = random(`y${seed}${i}`) * 1080 + Math.sin(f / 40 + i) * 18;
    const r = 1.5 + random(`r${seed}${i}`) * 3.5;
    return <circle key={i} cx={x} cy={y} r={r} fill={BRAND.goldLight} opacity={0.18 + random(`o${seed}${i}`) * 0.3} />;
  });
  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: -400 + ((f * (0.5 + i * 0.3) + i * 700 + seed * 97) % 2600),
            top: 520 + i * 140 - 300 + Math.sin(f / 70 + i) * 40,
            width: 900,
            height: 520,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(230,215,190,0.55), rgba(230,215,190,0) 70%)',
            filter: 'blur(40px)',
            opacity: smoke,
          }}
        />
      ))}
      <svg width={1920} height={1080} style={{position: 'absolute', filter: 'blur(0.6px)'}}>{motes}</svg>
    </AbsoluteFill>
  );
};

// ---------- shots ----------
const MOVES = [
  {s: [1.08, 1.2], x: [0, 0], y: [0, -20]},
  {s: [1.22, 1.1], x: [0, 0], y: [-10, 10]},
  {s: [1.16, 1.16], x: [-60, 60], y: [0, 0]},
  {s: [1.16, 1.16], x: [60, -60], y: [0, 0]},
  {s: [1.1, 1.18], x: [-30, 20], y: [20, -10]},
];
const ImgShot: React.FC<{src: string; frames: number; n: number}> = ({src, frames, n}) => {
  const f = useCurrentFrame();
  const m = MOVES[n % MOVES.length];
  const p = interpolate(f, [0, frames], [0, 1], {extrapolateRight: 'clamp', easing: Easing.inOut(Easing.sin)});
  return (
    <AbsoluteFill style={{backgroundColor: BRAND.lacquer}}>
      <Img
        src={staticFile(src)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `translate(${interpolate(p, [0, 1], m.x)}px, ${interpolate(p, [0, 1], m.y)}px) scale(${interpolate(p, [0, 1], m.s)})`,
        }}
      />
    </AbsoluteFill>
  );
};
// 2.5D parallax: pre-rendered by tools/parallax_render.py — every pixel shifts by an amount that follows a smoothly
// blurred depth map (Depth Anything V2 Small, local), so objects never tear (hard depth layers did, 2026-11-11).
// Each clip is one full camera move of PLX_FRAMES; it is time-stretched to the shot length.
const PLX_FRAMES = 300;
const PlxShot: React.FC<{clip: string; frames: number}> = ({clip, frames}) => (
  <AbsoluteFill style={{backgroundColor: BRAND.lacquer}}>
    <OffthreadVideo muted src={staticFile(clip)} playbackRate={PLX_FRAMES / frames} style={{width: '100%', height: '100%'}} />
  </AbsoluteFill>
);
// Rising sparks for burning scenes (deterministic: random() is seeded).
const Embers: React.FC<{seed: number}> = ({seed}) => {
  const f = useCurrentFrame();
  const sparks = Array.from({length: 110}, (_, i) => {
    const life = 60 + random(`l${seed}${i}`) * 90;
    const t = ((f + random(`t${seed}${i}`) * life) % life) / life;
    const x = random(`x${seed}${i}`) * 1920 + Math.sin(t * 6 + i) * 30 + t * 80;
    const y = 1100 - t * (500 + random(`h${seed}${i}`) * 700);
    const r = 2 + random(`r${seed}${i}`) * 4.5;
    return <circle key={i} cx={x} cy={y} r={r * (1 - t * 0.6)} fill={i % 3 ? '#ffb347' : '#ffe08a'} opacity={(1 - t) * (0.5 + 0.5 * Math.sin(f / 3 + i))} />;
  });
  return (
    <AbsoluteFill style={{pointerEvents: 'none', mixBlendMode: 'screen'}}>
      <AbsoluteFill style={{background: `radial-gradient(ellipse at 50% 100%, rgba(255,120,30,${0.26 + 0.08 * Math.sin(f / 5)}), rgba(0,0,0,0) 60%)`}} />
      <svg width={1920} height={1080} style={{position: 'absolute', filter: 'blur(0.6px) drop-shadow(0 0 6px #ff9a3c)'}}>{sparks}</svg>
    </AbsoluteFill>
  );
};
const TallShot: React.FC<{src: string; frames: number; n: number}> = ({src, frames, n}) => {
  const f = useCurrentFrame();
  const p = interpolate(f, [0, frames], [0, 1], {extrapolateRight: 'clamp'});
  const side = n % 2 === 0 ? 1 : -1;
  return (
    <AbsoluteFill style={{backgroundColor: BRAND.lacquer}}>
      <Img src={staticFile(src)} style={{width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(38px) brightness(0.45) sepia(0.4)', transform: `scale(${1.25 + p * 0.08})`}} />
      <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
        <div
          style={{
            height: 940,
            aspectRatio: '9 / 16',
            overflow: 'hidden',
            border: `3px solid ${BRAND.gold}`,
            boxShadow: '0 30px 80px rgba(0,0,0,0.7)',
            transform: `translateX(${side * interpolate(p, [0, 1], [-30, 30])}px) rotate(${side * 0.6}deg)`,
          }}
        >
          <Img src={staticFile(src)} style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${1.02 + p * 0.08})`}} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
const ClipShot: React.FC<{src: string; frames: number}> = ({src, frames}) => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{backgroundColor: BRAND.lacquer}}>
      <OffthreadVideo muted src={staticFile(src)} style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${interpolate(f, [0, frames], [1.02, 1.08])})`}} />
    </AbsoluteFill>
  );
};
const Parchment: React.FC = () => (
  <AbsoluteFill style={{background: `radial-gradient(ellipse at 50% 45%, #f1e2c0 0%, ${BRAND.parchment} 45%, #b99a68 100%)`}} />
);
const TimelineShot: React.FC<{year: string; frames: number}> = ({year, frames}) => {
  const f = useCurrentFrame();
  const full = year === 'full';
  const y = full ? 939 : Number(year);
  const p = interpolate(f, [6, Math.min(frames - 6, full ? 110 : 45)], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)});
  const shown = full ? interpolate(p, [0, 1], [-111, 939]) : interpolate(p, [0, 1], [y - 60, y]);
  return (
    <AbsoluteFill style={{background: `radial-gradient(ellipse at 50% 40%, #2a1c10 0%, ${BRAND.lacquer} 75%)`}}>
      <div style={{position: 'absolute', top: 250, width: '100%', textAlign: 'center', fontFamily: body, fontWeight: 600, fontSize: 150, color: BRAND.goldLight, letterSpacing: 2}}>
        {yearLabel(shown)}
      </div>
      <div style={{position: 'absolute', top: 470, width: '100%', textAlign: 'center', fontFamily: body, fontSize: 30, color: BRAND.parchment, opacity: 0.8}}>
        Chinese rule over the Red River region, as traditionally dated
      </div>
      <div style={{position: 'absolute', left: 160, top: 620}}>
        <Ribbon width={1600} year={full ? 939 : y} from={full ? -111 : y - 60} progress={p} draw={full} big />
      </div>
    </AbsoluteFill>
  );
};

const ShotView: React.FC<{shot: Shot; frames: number; n: number; plx?: Record<string, string>; vfx?: Omit<FxShotT, 'img' | 'start'>}> = ({shot, frames, n, plx, vfx}) => {
  if (shot.k === 'img' && vfx) return <FxShot sh={{...vfx, img: shot.src, start: 0}} len={frames} />;
  if (shot.k === 'img' && plx?.[shot.src]) return <PlxShot clip={plx[shot.src]} frames={frames} />;
  if (shot.k === 'img') return <ImgShot src={shot.src} frames={frames} n={n} />;
  if (shot.k === 'tall') return <TallShot src={shot.src} frames={frames} n={n} />;
  if (shot.k === 'clip') return <ClipShot src={shot.src} frames={frames} />;
  if (shot.k === 'tl') return <TimelineShot year={shot.year} frames={frames} />;
  return (
    <AbsoluteFill>
      <Parchment />
      <RedRiverMap state={(shot as {k: 'map'; state: string}).state} frames={frames} cinzel={cinzel} body={body} />
    </AbsoluteFill>
  );
};

// ---------- overlays ----------
const chunks = (text: string) => {
  const w = text.split(/\s+/);
  const out: string[] = [];
  let cur: string[] = [];
  w.forEach((x) => {
    cur.push(x);
    if (cur.length >= 6 || /[.,;:?!]$/.test(x) && cur.length >= 3) {
      out.push(cur.join(' '));
      cur = [];
    }
  });
  if (cur.length) out.push(cur.join(' '));
  return out;
};
const Captions: React.FC<{text: string; frames: number}> = ({text, frames}) => {
  const f = useCurrentFrame();
  const cs = chunks(text);
  const total = cs.reduce((a, c) => a + c.length, 0);
  let acc = 0;
  let cur = cs[cs.length - 1];
  for (const c of cs) {
    const end = ((acc + c.length) / total) * frames;
    if (f < end) {
      cur = c;
      break;
    }
    acc += c.length;
  }
  return (
    <div style={{position: 'absolute', bottom: 70, width: '100%', textAlign: 'center'}}>
      <span
        style={{
          fontFamily: body,
          fontWeight: 600,
          fontSize: 42,
          color: '#fff8e6',
          padding: '6px 20px',
          background: 'rgba(13,10,7,0.45)',
          borderRadius: 8,
          textShadow: '0 2px 8px rgba(0,0,0,0.9)',
        }}
      >
        {cur}
      </span>
    </div>
  );
};
const LowerThird: React.FC<{text: string; frames: number}> = ({text, frames}) => {
  const f = useCurrentFrame();
  const inP = interpolate(f, [0, 14], [0, 1], {extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)});
  const out = interpolate(f, [frames - 12, frames], [1, 0], {extrapolateLeft: 'clamp'});
  return (
    <div style={{position: 'absolute', left: 80, top: 760, opacity: out, transform: `translateX(${(1 - inP) * -60}px)`}}>
      <div style={{width: 340 * inP, height: 3, background: BRAND.gold}} />
      <div style={{fontFamily: cinzel, fontWeight: 700, fontSize: 20, color: BRAND.gold, letterSpacing: 3, marginTop: 10}}>SOURCE / NOTE</div>
      <div style={{fontFamily: body, fontWeight: 600, fontSize: 32, color: '#fff8e6', textShadow: '0 2px 8px rgba(0,0,0,0.9)', marginTop: 4}}>{text}</div>
    </div>
  );
};
const ChapterTag: React.FC<{ch: number; title: string}> = ({ch, title}) => (
  <div style={{position: 'absolute', left: 60, top: 44, fontFamily: cinzel, fontWeight: 700, fontSize: 22, color: BRAND.goldLight, opacity: 0.85, letterSpacing: 2, textShadow: '0 2px 6px rgba(0,0,0,0.9)'}}>
    {ch > 0 ? `${ROMAN[ch]} · ` : ''}
    {title}
  </div>
);

// ---------- chapter card ----------
const DrumStar: React.FC<{size: number; rot: number}> = ({size, rot}) => {
  const c = 400;
  const star = Array.from({length: 28}, (_, i) => {
    const r = i % 2 === 0 ? 300 : 120;
    const a = (Math.PI * i) / 14 - Math.PI / 2;
    return `${c + r * Math.cos(a)},${c + r * Math.sin(a)}`;
  }).join(' ');
  return (
    <svg width={size} height={size} viewBox="0 0 800 800" style={{transform: `rotate(${rot}deg)`}}>
      <circle cx={c} cy={c} r={372} fill="none" stroke={BRAND.gold} strokeWidth={8} />
      <circle cx={c} cy={c} r={348} fill="none" stroke={BRAND.gold} strokeWidth={3} />
      <polygon points={star} fill={BRAND.gold} />
      <circle cx={c} cy={c} r={72} fill={BRAND.lacquer} stroke={BRAND.gold} strokeWidth={8} />
    </svg>
  );
};
const ChapterCard: React.FC<{card: string; title: string; frames: number}> = ({card, title, frames}) => {
  const f = useCurrentFrame();
  const end = card === 'end';
  const ch = end ? 0 : Number(card);
  const reveal = interpolate(f, [0, 22], [0, 140], {extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)});
  const fadeOut = interpolate(f, [frames - 10, frames], [1, 0], {extrapolateLeft: 'clamp'});
  const tIn = interpolate(f, [8, 26], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{backgroundColor: BRAND.lacquer, opacity: fadeOut}}>
      <AbsoluteFill style={{background: 'radial-gradient(ellipse at 30% 50%, #3a2614 0%, #0d0a07 65%)', clipPath: `circle(${reveal}% at 30% 50%)`}}>
        <div style={{position: 'absolute', left: 260, top: 290, opacity: 0.9}}>
          <DrumStar size={500} rot={f * 0.25} />
        </div>
        <div style={{position: 'absolute', left: 860, top: end ? 380 : 330, width: 960, opacity: tIn, transform: `translateY(${(1 - tIn) * 20}px)`}}>
          {!end && (
            <div style={{fontFamily: cinzel, fontWeight: 700, fontSize: 34, color: BRAND.gold, letterSpacing: 8}}>{ch === 0 ? 'PROLOGUE' : `CHAPTER ${ROMAN[ch]}`}</div>
          )}
          <div style={{fontFamily: cinzel, fontWeight: 900, fontSize: end ? 92 : 84, color: BRAND.goldLight, lineHeight: 1.1, marginTop: 14}}>{end ? 'RICE & EMPIRES' : title}</div>
          <div style={{width: 300 * tIn, height: 3, background: BRAND.vermilion, marginTop: 26}} />
          {end && <div style={{fontFamily: body, fontSize: 34, color: BRAND.parchment, marginTop: 22}}>Sources in the description · corrections welcome</div>}
        </div>
        {!end && (
          <div style={{position: 'absolute', left: 260, top: 900, opacity: tIn}}>
            <Ribbon width={1400} year={CH_YEAR[ch] ?? 939} from={-111} progress={interpolate(f, [10, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} />
          </div>
        )}
      </AbsoluteFill>
      <Atmos seed={ch + 50} smoke={0.12} />
      <Grain opacity={0.12} />
    </AbsoluteFill>
  );
};

// ---------- row ----------
const Shake: React.FC<{at: number[]; children: React.ReactNode}> = ({at, children}) => {
  const f = useCurrentFrame();
  const k = at.reduce((acc, s) => Math.max(acc, interpolate(f - s * LFPS, [0, 2, 14], [0, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})), 0);
  return <AbsoluteFill style={{transform: `translate(${Math.sin(f * 2.3) * 14 * k}px, ${Math.cos(f * 3.1) * 10 * k}px)`}}>{children}</AbsoluteFill>;
};
const RowView: React.FC<{seg: Extract<Seg, {kind: 'row'}>; vid: string; title: string; first: boolean; plx?: Record<string, string>; fx?: RowFx}> = ({
  seg,
  vid,
  title,
  first,
  plx,
  fx,
}) => {
  const n = seg.row.shots.length;
  const per = seg.frames / n;
  const has = (k: 'embers' | 'shake') => fx?.fx?.includes(k);
  return (
    <AbsoluteFill>
      <Shake at={has('shake') ? fx?.shakeAt ?? [] : []}>
        {seg.row.shots.map((s, i) => {
          const from = Math.round(i * per);
          const dur = Math.round((i + 1) * per) - from;
          return (
            <Sequence key={i} from={from} durationInFrames={dur + (i < n - 1 ? XF : XF)} layout="none">
              <Fader fadeIn={!(first && i === 0)}>
                <ShotView shot={s} frames={dur + XF} n={Number(seg.row.id) * 3 + i} plx={plx} vfx={fx?.shots?.[String(i)]} />
              </Fader>
            </Sequence>
          );
        })}
      </Shake>
      {has('embers') && <Embers seed={Number(seg.row.id)} />}
      {(fx?.sfx ?? []).map((c, i) => {
        const len = Math.round(c.dur * LFPS);
        const fo = Math.round((c.fadeOut ?? 0.4) * LFPS);
        return (
          <Sequence key={`s${i}`} from={Math.round(c.at * LFPS)} durationInFrames={len} layout="none">
            <Audio
              src={staticFile(c.src)}
              startFrom={Math.round((c.from ?? 0) * LFPS)}
              volume={(t) => (c.vol ?? 0.5) * Math.min(interpolate(t, [0, 6], [0, 1], {extrapolateRight: 'clamp'}), interpolate(t, [len - fo, len], [1, 0], {extrapolateLeft: 'clamp'}))}
            />
          </Sequence>
        );
      })}
      <Atmos seed={Number(seg.row.id)} smoke={0.1} />
      <Vignette />
      <Grain />
      <ChapterTag ch={seg.row.ch} title={title} />
      {fx?.label && <FxLabel l={fx.label} top />}
      {seg.row.src && (
        <Sequence from={Math.round(per * 0.5)} durationInFrames={Math.min(150, seg.frames - Math.round(per * 0.5))} layout="none">
          <LowerThird text={seg.row.src} frames={Math.min(150, seg.frames - Math.round(per * 0.5))} />
        </Sequence>
      )}
      <Sequence durationInFrames={seg.voFrames} layout="none">
        <Captions text={seg.row.sub} frames={seg.voFrames} />
      </Sequence>
      <Audio src={staticFile(`${vid}/${seg.vo.file}`)} />
    </AbsoluteFill>
  );
};
const Fader: React.FC<{fadeIn: boolean; children: React.ReactNode}> = ({fadeIn, children}) => {
  const f = useCurrentFrame();
  return <AbsoluteFill style={{opacity: fadeIn ? interpolate(f, [0, XF], [0, 1], {extrapolateRight: 'clamp'}) : 1}}>{children}</AbsoluteFill>;
};

// ---------- main ----------
export const LongVideo: React.FC<{data: LongData; timeline: Timed[]; vid: string}> = ({data, timeline, vid}) => {
  const segs = segments(data, timeline);
  const total = segs.reduce((a, s) => a + s.frames, 0);
  const cards = segs.filter((s) => s.kind === 'card').map((s) => [s.from, s.from + s.frames]);
  const chStart = (ch: number) => {
    const s = segs.find((x) => (x.kind === 'row' && x.row.ch === ch) || (x.kind === 'card' && x.card === String(ch)));
    return s ? s.from : total;
  };
  const music = data.music ?? [];
  return (
    <AbsoluteFill style={{backgroundColor: BRAND.lacquer}}>
      {segs.map((s, i) =>
        s.kind === 'card' ? (
          <Sequence key={i} from={s.from} durationInFrames={s.frames + XF}>
            <ChapterCard card={s.card} title={s.card === 'end' ? '' : data.chapters[Number(s.card)]} frames={s.frames + XF} />
            <Audio src={staticFile('sfx/swoosh-quick.mp3')} volume={0.5} />
          </Sequence>
        ) : (
          <Sequence key={i} from={s.from} durationInFrames={s.frames + XF}>
            <RowView seg={s} vid={vid} title={data.chapters[s.row.ch]} first={i === 0} plx={data.plx} fx={data.fx?.[s.row.id]} />
          </Sequence>
        ),
      )}
      {music.map((m, i) => {
        const from = chStart(m.fromCh);
        const to = i + 1 < music.length ? chStart(music[i + 1].fromCh) : total;
        const g = m.gain ?? 1;
        return (
          <Sequence key={`m${i}`} from={from} durationInFrames={to - from}>
            <Audio
              src={staticFile(m.src)}
              loop
              volume={(f) => {
                const t = f + from;
                // Duck under the voice; lift on chapter cards (15-frame ramps); fade at section edges.
                const near = cards.reduce((acc, [a, b]) => Math.max(acc, interpolate(t, [a - 15, a, b - 10, b + 15], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})), 0);
                const edge = Math.min(interpolate(f, [0, 30], [0, 1], {extrapolateRight: 'clamp'}), interpolate(f, [to - from - 45, to - from], [1, 0], {extrapolateLeft: 'clamp'}));
                return g * edge * (0.075 + near * 0.27);
              }}
            />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
