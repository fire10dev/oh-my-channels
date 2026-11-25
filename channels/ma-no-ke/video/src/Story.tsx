// Engine dựng chung đọc timeline JSON (tools/build_p01_long.py) — 16:9 hoặc 9:16.
import React from 'react';
import {AbsoluteFill, Audio, Img, Sequence, interpolate, spring, staticFile, useCurrentFrame, Easing} from 'remotion';
import {loadFont} from '@remotion/google-fonts/BeVietnamPro';

const {fontFamily} = loadFont('normal', {weights: ['800'], subsets: ['vietnamese', 'latin']});
export const FPS = 30;
const f = (s: number) => Math.round(s * FPS);

type Crop = [number, number, number];
type Shot = {img: string; sw: number; sh: number; t0: number; t1: number; a: Crop; b: Crop; shake?: number; flash?: number; blur?: number; dark?: number};
type Cut = {img: string; size: number; t0: number; t1: number; from: Crop; to: Crop; bob: boolean; wob?: number}; // wob: biên độ lắc nhẹ (px) cho nhân vật đứng; không có = hành vi cũ
type Pop = {t0: number; t1: number; text: string; color: string};
type Sfx = {t: number; src: string; vol: number; dur?: number};
type Sub = {t: number; dur: number; text: string};
type Com = {t: number; u: string; c: string; end: number};
export type Timeline = {
  w: number; h: number; duration: number; shots: Shot[]; cuts: Cut[]; pops: Pop[]; sfx: Sfx[]; subs: Sub[]; comments: Com[];
  voice: {t: number; src: string}[]; mutes: [number, number][]; live: [number, number][]; music: {src: string; len: number; vol: number};
};

const ShotView: React.FC<{s: Shot; W: number; H: number}> = ({s, W, H}) => {
  const fr = useCurrentFrame();
  const p = interpolate(fr, [0, f(s.t1 - s.t0)], [0, 1], {extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic)});
  const cx = s.a[0] + (s.b[0] - s.a[0]) * p, cy = s.a[1] + (s.b[1] - s.a[1]) * p;
  let w = s.a[2] + (s.b[2] - s.a[2]) * p;
  w = Math.min(w, s.sw, (s.sh * W) / H);
  const h = (w * H) / W, k = W / w;
  const x = Math.min(Math.max(cx - w / 2, 0), s.sw - w), y = Math.min(Math.max(cy - h / 2, 0), s.sh - h);
  const amp = s.shake ? s.shake * Math.max(0, 1 - fr / 12) : 0;
  const flash = s.flash ? interpolate(fr, [0, 6], [0.85, 0], {extrapolateRight: 'clamp'}) : 0;
  return (
    <AbsoluteFill style={{overflow: 'hidden', background: '#0b0f1e'}}>
      <Img src={staticFile(s.img)} style={{position: 'absolute', width: s.sw * k, height: s.sh * k, left: -x * k + amp * Math.sin(fr * 2.7), top: -y * k + amp * Math.cos(fr * 3.3),
        filter: s.blur ? `blur(${s.blur}px)` : undefined}} />
      {s.dark ? <AbsoluteFill style={{background: `rgba(5,8,20,${s.dark})`}} /> : null}
      {flash ? <AbsoluteFill style={{background: `rgba(255,255,255,${flash})`}} /> : null}
    </AbsoluteFill>
  );
};

const CutView: React.FC<{c: Cut}> = ({c}) => {
  const fr = useCurrentFrame();
  const p = c.bob ? spring({frame: fr, fps: FPS, config: {damping: 11, stiffness: 90}})
    : interpolate(fr, [0, f(c.t1 - c.t0)], [0, 1], {extrapolateRight: 'clamp', easing: Easing.inOut(Easing.quad)});
  const x = c.from[0] + (c.to[0] - c.from[0]) * p, y = c.from[1] + (c.to[1] - c.from[1]) * p;
  const bob = c.wob !== undefined ? Math.sin(fr / 9) * c.wob : c.bob ? Math.sin(fr / 9) * 8 : Math.sin(fr / 3) * 12;
  return <Img src={staticFile(c.img)} style={{position: 'absolute', left: x, top: y + bob, width: c.size * c.from[2], filter: 'drop-shadow(0 18px 30px rgba(0,0,0,.55))'}} />;
};

const stroke = (px: number) => ({WebkitTextStroke: `${px}px #000`, paintOrder: 'stroke fill' as const});

const PopView: React.FC<{p: Pop; W: number; size: number; top: number}> = ({p, W, size, top}) => {
  const fr = useCurrentFrame();
  const sc = spring({frame: fr, fps: FPS, config: {damping: 9, stiffness: 160}});
  return (
    <div style={{position: 'absolute', top, width: W, padding: '0 80px', boxSizing: 'border-box', textAlign: 'center', fontFamily, fontWeight: 800, fontSize: size,
      color: p.color, transform: `scale(${sc}) rotate(${(1 - sc) * -5}deg)`, lineHeight: 1.08, ...stroke(12)}}>{p.text}</div>
  );
};

const Comment: React.FC<{c: Com; idx: number; top: number}> = ({c, idx, top}) => {
  const fr = useCurrentFrame();
  const a = interpolate(fr, [0, 5], [0, 1], {extrapolateRight: 'clamp'});
  return (
    <div style={{position: 'absolute', right: 60, top: top + idx * 120, width: 620, opacity: a, transform: `translateX(${(1 - a) * 60}px)`,
      background: 'rgba(10,10,20,.75)', borderRadius: 24, padding: '12px 24px', fontFamily}}>
      <div style={{color: '#9fd3ff', fontSize: 24, fontWeight: 800}}>{c.u}</div>
      <div style={{color: '#fff', fontSize: 38, fontWeight: 800}}>{c.c}</div>
    </div>
  );
};

const Live: React.FC<{top: number}> = ({top}) => {
  const fr = useCurrentFrame();
  return (
    <div style={{position: 'absolute', top, left: 50, display: 'flex', alignItems: 'center', gap: 12, background: '#e5252a', borderRadius: 12, padding: '6px 18px', fontFamily, fontWeight: 800, fontSize: 32, color: '#fff'}}>
      <div style={{width: 16, height: 16, borderRadius: 8, background: '#fff', opacity: Math.floor(fr / 15) % 2 ? 0.35 : 1}} />LIVE
    </div>
  );
};

const chunks = (s: Sub) => {
  const parts = s.text.split(/(?<=[.,!?:])\s+/).filter(Boolean);
  const tot = parts.reduce((a, x) => a + x.length, 0);
  let acc = 0;
  return parts.map((x) => {const a = s.t + (acc / tot) * s.dur; acc += x.length; return {x, t0: a, t1: s.t + (acc / tot) * s.dur};});
};
const SubView: React.FC<{x: string; W: number; top: number; size: number}> = ({x, W, top, size}) => {
  const fr = useCurrentFrame();
  const sc = interpolate(fr, [0, 4], [0.92, 1], {extrapolateRight: 'clamp'});
  return <div style={{position: 'absolute', top, width: W, padding: '0 120px', boxSizing: 'border-box', textAlign: 'center', fontFamily, fontWeight: 800,
    fontSize: size, lineHeight: 1.18, color: '#fff', transform: `scale(${sc})`, ...stroke(10)}}>{x}</div>;
};

export const Story: React.FC<{tl: Timeline}> = ({tl}) => {
  const {w: W, h: H} = tl;
  const wide = W > H;
  const musicVol = (t: number) => {
    for (const [a, b] of tl.mutes) if (t > a && t < b) return interpolate(Math.min(t - a, b - t), [0, 0.4], [0, tl.music.vol * 0.15], {extrapolateRight: 'clamp'});
    if (t > tl.duration - 1.5) return interpolate(t, [tl.duration - 1.5, tl.duration], [tl.music.vol, 0], {extrapolateRight: 'clamp'});
    return tl.music.vol;
  };
  const loops = Math.ceil(tl.duration / tl.music.len);
  return (
    <AbsoluteFill style={{background: '#0b0f1e'}}>
      {tl.shots.map((s, k) => <Sequence key={'s' + k} from={f(s.t0)} durationInFrames={Math.max(1, f(s.t1) - f(s.t0))}><ShotView s={s} W={W} H={H} /></Sequence>)}
      {tl.cuts.map((c, k) => <Sequence key={'c' + k} from={f(c.t0)} durationInFrames={Math.max(1, f(c.t1) - f(c.t0))}><CutView c={c} /></Sequence>)}
      {tl.live.map(([a, b], k) => <Sequence key={'l' + k} from={f(a)} durationInFrames={Math.max(1, f(b) - f(a))}><Live top={wide ? 40 : 200} /></Sequence>)}
      {tl.comments.map((c, k) => {
        const idx = tl.comments.filter((o, j) => j < k && o.end === c.end).length;
        return <Sequence key={'m' + k} from={f(c.t)} durationInFrames={Math.max(1, f(c.end) - f(c.t))}><Comment c={c} idx={idx} top={wide ? 220 : 1000} /></Sequence>;
      })}
      {tl.pops.map((p, k) => <Sequence key={'p' + k} from={f(p.t0)} durationInFrames={Math.max(1, f(p.t1) - f(p.t0))}><PopView p={p} W={W} size={wide ? 84 : 68} top={wide ? 70 : 300} /></Sequence>)}
      {tl.subs.flatMap((s, k) => chunks(s).map((c, j) => (
        <Sequence key={`u${k}-${j}`} from={f(c.t0)} durationInFrames={Math.max(1, f(c.t1) - f(c.t0))}>
          <SubView x={c.x} W={W} top={wide ? H - 210 : 1430} size={wide ? 56 : 66} />
        </Sequence>
      )))}
      {tl.voice.map((v, k) => <Sequence key={'v' + k} from={f(v.t)}><Audio src={staticFile(v.src)} /></Sequence>)}
      {tl.sfx.map((s, k) => <Sequence key={'x' + k} from={f(s.t)} durationInFrames={s.dur ? f(s.dur) : undefined}><Audio src={staticFile(s.src)} volume={s.vol} /></Sequence>)}
      {Array.from({length: loops}, (_, k) => (
        <Sequence key={'mu' + k} from={f(k * tl.music.len)} durationInFrames={f(tl.music.len)}>
          <Audio src={staticFile(tl.music.src)} volume={(fr) => musicVol(k * tl.music.len + fr / FPS)} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
