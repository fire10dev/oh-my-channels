// Data-driven "still image + stock VFX layers" scene (recipe v1, see FxSample.tsx for the hand-built first sample).
// A scene = narration wav + shots. Each shot: eased camera move on the painting, overlay clips (screen blend) on the image
// plane (ride with the camera) or on a faster foreground plane (parallax), flicker glows, hit beats (punch-in + shake + flash),
// and optional drawn extras (map route, tide). Audio: VO + music bed + timed SFX. Overlays live in public/vfx (Mixkit licence).
import {loadFont as loadCinzel} from '@remotion/google-fonts/Cinzel';
import {loadFont as loadBVP} from '@remotion/google-fonts/BeVietnamPro';
import {evolvePath, getLength, getPointAtLength, getTangentAtLength} from '@remotion/paths';
import React from 'react';
import {AbsoluteFill, Audio, Easing, Img, interpolate, OffthreadVideo, Sequence, staticFile, useCurrentFrame} from 'remotion';

const {fontFamily: cinzel} = loadCinzel('normal', {weights: ['700'], subsets: ['latin']});
const {fontFamily: body} = loadBVP('normal', {weights: ['500', '600'], subsets: ['latin', 'vietnamese']});

export const FPS = 30;
const s = (sec: number) => Math.round(sec * FPS);
const ease = Easing.bezier(0.45, 0, 0.55, 1);
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const XF = 10;

export type Ov = {
  src: string; opacity: number; from?: number; rate?: number; mask?: string;
  x?: number; y?: number; scale?: number; rise?: number; // px offset, scale, upward drift px/frame
  fg?: boolean; // foreground plane (moves 1.8x camera drift)
};
export type Glow = {x: string; y: string; r: string; color: string; amt: number; k?: number; flicker?: boolean};
export type Route = {d: string; at: number; dur: number; color?: string; label?: {text: string; x: number; y: number; at: number};
  pin?: {x: number; y: number; text: string}};
export type Tide = {at: number; dur: number; fromY: number; toY: number; label?: string};
export type Shot = {
  img: string; start: number; // seconds into the scene
  z: [number, number]; x?: [number, number]; y?: [number, number]; origin?: string;
  ovs?: Ov[]; glows?: Glow[]; hits?: number[]; // hit times in scene seconds
  route?: Route; tide?: Tide; darken?: number;
};
export type Sfx = {src: string; at: number; vol: number; from?: number; dur?: number; fadeOut?: number};
export type Scene = {
  vo: string; voAt?: number; dur: number; shots: Shot[]; sfx: Sfx[];
  music: {src: string; from: number; vol: number};
  label?: {title: string; sub: string; at: number; until: number};
};

const OvLayer: React.FC<{o: Ov; f: number}> = ({o, f}) => (
  <AbsoluteFill style={{mixBlendMode: 'screen', opacity: o.opacity, WebkitMaskImage: o.mask, maskImage: o.mask,
    transform: `translate(${o.x ?? 0}px, ${(o.y ?? 0) - (o.rise ?? 0) * f}px) scale(${o.scale ?? 1})`}}>
    <OffthreadVideo src={staticFile(`vfx/${o.src}`)} muted startFrom={s(o.from ?? 0)} playbackRate={o.rate ?? 1}
      style={{width: '100%', height: '100%', objectFit: 'cover'}} />
  </AbsoluteFill>
);

const flick = (f: number, k = 0) =>
  0.5 + 0.22 * Math.sin(f * 0.71 + k) + 0.18 * Math.sin(f * 1.37 + 2 * k) + 0.1 * Math.sin(f * 2.9 + 3 * k);

const GlowLayer: React.FC<{g: Glow; f: number}> = ({g, f}) => (
  <AbsoluteFill style={{mixBlendMode: 'screen', opacity: g.amt * (g.flicker === false ? 0.75 + 0.1 * Math.sin(f * 0.08) : flick(f, g.k)),
    background: `radial-gradient(${g.r} at ${g.x} ${g.y}, ${g.color}, transparent 70%)`}} />
);

// Red-ink route drawn over a map (coordinates in 1920x1080 image space, so it rides with the camera).
const RouteLayer: React.FC<{r: Route; f: number}> = ({r, f}) => {
  const p = interpolate(f, [s(r.at), s(r.at + r.dur)], [0, 1], {...clamp, easing: Easing.inOut(Easing.cubic)});
  const {strokeDasharray, strokeDashoffset} = evolvePath(p, r.d);
  const c = r.color ?? '#9e1b14';
  const la = r.label ? interpolate(f, [s(r.label.at), s(r.label.at + 0.5)], [0, 1], clamp) : 0;
  const pinA = interpolate(f, [s(r.at + r.dur), s(r.at + r.dur + 0.3)], [0, 1], clamp);
  const pulse = 1 + 0.35 * ((f - s(r.at + r.dur)) % 30) / 30;
  const L = getLength(r.d), at = Math.max(1, L * p);
  const tip = getPointAtLength(r.d, at)!, tg = getTangentAtLength(r.d, at)!;
  const ang = (Math.atan2(tg.y, tg.x) * 180) / Math.PI;
  return (
    <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
      <path d={r.d} fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth={22} strokeLinecap="round"
        strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset} transform="translate(4,5)" />
      <path d={r.d} fill="none" stroke={c} strokeWidth={16} strokeLinecap="round" strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset} />
      {p > 0.02 && <polygon points="16,0 -26,-22 -26,22" fill={c} stroke="#f5e6c8" strokeWidth={3}
        transform={`translate(${tip.x},${tip.y}) rotate(${ang})`} />}
      {r.label && <text x={r.label.x} y={r.label.y} opacity={la} fill="#5a120c" fontFamily={cinzel} fontSize={58} letterSpacing={6}
        stroke="rgba(245,230,200,0.85)" strokeWidth={8} paintOrder="stroke">{r.label.text}</text>}
      {r.pin && <g opacity={pinA}>
        <circle cx={r.pin.x} cy={r.pin.y} r={22 * pulse} fill="none" stroke={c} strokeWidth={4} opacity={2 - pulse * 1.4} />
        <circle cx={r.pin.x} cy={r.pin.y} r={13} fill={c} stroke="#f5e6c8" strokeWidth={4} />
        <text x={r.pin.x - 32} y={r.pin.y + 50} textAnchor="end" fill="#3a0c08" fontFamily={body} fontWeight={600} fontSize={36}
          stroke="rgba(245,230,200,0.9)" strokeWidth={7} paintOrder="stroke">{r.pin.text}</text>
      </g>}
    </svg>
  );
};

// Rising water band over a cross-section diagram (multiply tint + wavy surface line).
const TideLayer: React.FC<{t: Tide; f: number}> = ({t, f}) => {
  const p = interpolate(f, [s(t.at), s(t.at + t.dur)], [0, 1], {...clamp, easing: Easing.inOut(Easing.quad)});
  const y = t.fromY + (t.toY - t.fromY) * p;
  let d = `M0 ${y}`;
  for (let x = 0; x <= 1920; x += 40) d += ` L${x} ${y + 7 * Math.sin(x / 70 + f / 6)}`;
  const la = interpolate(f, [s(t.at + 0.2), s(t.at + 0.6)], [0, 1], clamp);
  return (
    <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
      <path d={`${d} L1920 1080 L0 1080 Z`} fill="rgba(40,95,140,0.38)" style={{mixBlendMode: 'multiply'}} />
      <path d={d} fill="none" stroke="rgba(235,245,255,0.85)" strokeWidth={4} />
      {t.label && <text x={1500} y={y - 22} opacity={la} fill="#1d3f5c" fontFamily={body} fontWeight={600} fontSize={38}
        stroke="rgba(245,235,210,0.9)" strokeWidth={7} paintOrder="stroke">{t.label}</text>}
    </svg>
  );
};

export const FxShot: React.FC<{sh: Shot; len: number}> = ({sh, len}) => {
  const f = useCurrentFrame();
  const t0 = s(sh.start);
  const k = (a: [number, number] | undefined) => (a ? interpolate(f, [0, len], a, {...clamp, easing: ease}) : 0);
  const z = k(sh.z), px = k(sh.x), py = k(sh.y);
  let punch = 0, shake = 0;
  for (const h of sh.hits ?? []) {
    const hf = s(h) - t0;
    punch += interpolate(f, [hf, hf + 4, hf + 22], [0, 0.03, 0.01], clamp);
    if (f >= hf && f < hf + 12) shake = Math.max(shake, (1 - (f - hf) / 12) * 8);
  }
  const sx = Math.sin(f * 3.1) * shake, sy = Math.cos(f * 2.3) * shake * 0.6;
  const flash = Math.max(0, ...(sh.hits ?? []).map((h) => interpolate(f - (s(h) - t0), [0, 2, 10], [0, 0.18, 0], clamp)));
  const img = (sh.ovs ?? []).filter((o) => !o.fg), fg = (sh.ovs ?? []).filter((o) => o.fg);
  return (
    <AbsoluteFill style={{backgroundColor: 'black'}}>
      <AbsoluteFill style={{transform: `translate(${px + sx}px, ${py + sy}px) scale(${z + punch})`, transformOrigin: sh.origin ?? '50% 50%'}}>
        <Img src={staticFile(sh.img)} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        {sh.darken ? <AbsoluteFill style={{backgroundColor: `rgba(0,0,0,${sh.darken})`}} /> : null}
        {sh.tide && <TideLayer t={{...sh.tide, at: sh.tide.at - sh.start}} f={f} />}
        {img.map((o, i) => <OvLayer key={i} o={o} f={f} />)}
        {(sh.glows ?? []).map((g, i) => <GlowLayer key={i} g={g} f={f} />)}
        {sh.route && <RouteLayer r={{...sh.route, at: sh.route.at - sh.start,
          label: sh.route.label && {...sh.route.label, at: sh.route.label.at - sh.start}}} f={f} />}
      </AbsoluteFill>
      {fg.length > 0 && (
        // transformed parent = own stacking context -> it must carry the blend mode itself
        <AbsoluteFill style={{mixBlendMode: 'screen', transform: `translate(${px * 1.8 + sx * 1.5}px, ${py * 1.8 + sy * 1.5}px) scale(1.1)`}}>
          {fg.map((o, i) => <OvLayer key={i} o={o} f={f} />)}
        </AbsoluteFill>
      )}
      <AbsoluteFill style={{backgroundColor: '#ffb070', mixBlendMode: 'screen', opacity: flash}} />
    </AbsoluteFill>
  );
};

const Grain: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{mixBlendMode: 'overlay', opacity: 0.16}}>
      <svg width="100%" height="100%">
        <filter id="g"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} seed={f % 12} /></filter>
        <rect width="100%" height="100%" filter="url(#g)" />
      </svg>
    </AbsoluteFill>
  );
};

export const FxLabel: React.FC<{l: NonNullable<Scene['label']>; top?: boolean}> = ({l, top}) => {
  const f = useCurrentFrame();
  const a = interpolate(f, [s(l.at), s(l.at + 0.5), s(l.until - 0.5), s(l.until)], [0, 1, 1, 0], clamp);
  const w = interpolate(f, [s(l.at), s(l.at + 0.8)], [0, 340], {...clamp, easing: Easing.out(Easing.cubic)});
  return (
    <>
      <AbsoluteFill style={{opacity: a * 0.85, background: `radial-gradient(ellipse 38% 26% at 18% ${top ? 18 : 86}%, rgba(0,0,0,0.75), transparent 100%)`}} />
      <div style={{position: 'absolute', left: 90, ...(top ? {top: 100} : {bottom: 110}), opacity: a, color: '#f3e3b5', textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>
        <div style={{fontFamily: cinzel, fontSize: 54, letterSpacing: 4}}>{l.title}</div>
        <div style={{height: 2, width: w, background: 'linear-gradient(90deg, #d9a441, transparent)', margin: '10px 0'}} />
        <div style={{fontFamily: body, fontSize: 30, opacity: 0.9}}>{l.sub}</div>
      </div>
    </>
  );
};

export const sceneFrames = (sc: Scene) => s(sc.dur);

export const FxScene: React.FC<{scene: Scene}> = ({scene}) => {
  const f = useCurrentFrame();
  const total = s(scene.dur);
  const fade = interpolate(f, [0, 8, total - 10, total], [0, 1, 1, 0], clamp);
  return (
    <AbsoluteFill style={{backgroundColor: 'black'}}>
      <AbsoluteFill style={{opacity: fade}}>
        {scene.shots.map((sh, i) => {
          const from = s(sh.start);
          const end = i + 1 < scene.shots.length ? s(scene.shots[i + 1].start) + XF : total;
          return (
            <Sequence key={i} from={from} durationInFrames={end - from}>
              <AbsoluteFill style={{opacity: i === 0 ? 1 : interpolate(f - from, [0, XF], [0, 1], clamp)}}>
                <FxShot sh={sh} len={end - from} />
              </AbsoluteFill>
            </Sequence>
          );
        })}
        <AbsoluteFill style={{background: 'radial-gradient(ellipse 75% 70% at 50% 48%, transparent 55%, rgba(0,0,0,0.6) 100%)'}} />
        <Grain />
        {scene.label && <FxLabel l={scene.label} />}
      </AbsoluteFill>
      <Sequence from={s(scene.voAt ?? 0.2)}><Audio src={staticFile(scene.vo)} /></Sequence>
      <Audio src={staticFile(scene.music.src)} startFrom={s(scene.music.from)}
        volume={(fr) => scene.music.vol * interpolate(fr, [0, 15, total - 20, total], [0, 1, 1, 0], clamp)} />
      {scene.sfx.map((x, i) => (
        <Sequence key={i} from={s(x.at)} durationInFrames={x.dur ? s(x.dur) : undefined}>
          <Audio src={staticFile(x.src)} startFrom={s(x.from ?? 0)}
            volume={(fr) => x.vol * (x.fadeOut && x.dur ? interpolate(fr, [s(x.dur - x.fadeOut), s(x.dur)], [1, 0], clamp) : 1)} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
