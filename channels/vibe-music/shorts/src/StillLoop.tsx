import {AbsoluteFill, Audio, Img, random, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {FlowWaves} from './FlowWaves';
import {FONT} from './tracks';

// Animated loop from ONE still image (Google Flow "Image" mode → Remotion). One render = one pass of the song
// (`roundFrames`); every ambient effect completes whole cycles per `loop` = roundFrames / k (~12 s), so the
// last frame flows into the first and stillloop_1h.sh can repeat the round with ffmpeg without a visual seam.
// Effect coordinates are in the source image's own pixels (srcW x srcH) and scale with it.

type Rect = {x: number; y: number; w: number; h: number};
type Pt = {x: number; y: number};
export type SceneEffects = {
  rain?: Rect[]; // glass panes: falling streaks + sliding droplets
  snow?: Rect[]; // areas with slow snowfall
  fireflies?: Rect[]; // drifting glowing dots
  glows?: (Pt & {r: number; color?: string})[]; // breathing light sources (lamps, lanterns, screens)
  dust?: (Pt & {r: number})[]; // floating motes around a light
  steam?: Pt[]; // rising wisps (cups, kettles)
  bokeh?: (Pt & {r: number; color: string})[]; // twinkling out-of-focus lights
};
export type Scene = {
  id: string;
  img: string; // path under public/
  srcW: number;
  srcH: number;
  crop?: Rect; // optional 16:9 crop in source pixels (default: whole image)
  audio: string; // path under public/, silence-trimmed
  roundFrames: number; // = song length in frames @ 30 fps
  title: string;
  subtitle: string;
  accent: string;
  waves: string[]; // palette for the Flow-style music waves, left to right
  effects: SceneEffects;
};

export const FPS = 30;
const TARGET_LOOP = 360; // aim for ~12 s ambient cycles
export const loopFrames = (roundFrames: number) => roundFrames / Math.max(1, Math.round(roundFrames / TARGET_LOOP));

const TAU = Math.PI * 2;
// t = frame / loop. Phase in [0,1) of something that completes `cycles` whole cycles per loop.
const phase = (t: number, cycles: number, offset = 0) => (((t * cycles + offset) % 1) + 1) % 1;
const wave = (t: number, cycles: number, offset = 0) => Math.sin(TAU * phase(t, cycles, offset));

const Clip: React.FC<{r: Rect; children: React.ReactNode}> = ({r, children}) => (
  <div style={{position: 'absolute', left: r.x, top: r.y, width: r.w, height: r.h, overflow: 'hidden'}}>{children}</div>
);

const Rain: React.FC<{t: number; win: Rect; seed: string}> = ({t, win, seed}) => {
  const n = Math.round((win.w * win.h) / 3800);
  return (
    <Clip r={win}>
      {Array.from({length: n}, (_, i) => {
        const r = (k: string) => random(`${seed}-${i}-${k}`);
        const len = 14 + r('len') * 38;
        const y = phase(t, 3 + Math.floor(r('speed') * 4), r('off')) * (win.h + len) - len;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: r('x') * win.w,
              top: y,
              width: 1.2,
              height: len,
              transform: 'rotate(6deg)',
              background: `linear-gradient(to bottom, rgba(220,235,255,0), rgba(220,235,255,${0.12 + r('o') * 0.22}))`,
            }}
          />
        );
      })}
      {Array.from({length: Math.max(3, Math.round(n / 7))}, (_, i) => {
        const r = (k: string) => random(`${seed}-d${i}-${k}`);
        const s = 3 + r('s') * 3;
        return (
          <div
            key={`d${i}`}
            style={{
              position: 'absolute',
              left: r('x') * win.w,
              top: phase(t, 1, r('off')) * (win.h + 20) - 10,
              width: s,
              height: s * 1.4,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.75), rgba(190,215,240,0.15))',
            }}
          />
        );
      })}
    </Clip>
  );
};

const Snow: React.FC<{t: number; area: Rect; seed: string}> = ({t, area, seed}) => (
  <Clip r={area}>
    {Array.from({length: Math.round((area.w * area.h) / 2500)}, (_, i) => {
      const r = (k: string) => random(`${seed}-${i}-${k}`);
      const s = 1.5 + r('s') * 3;
      return (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: r('x') * area.w + wave(t, 2, r('sw')) * 12,
            top: phase(t, 1 + Math.floor(r('v') * 2), r('off')) * (area.h + 10) - 5,
            width: s,
            height: s,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.85)',
            opacity: 0.5 + r('o') * 0.5,
          }}
        />
      );
    })}
  </Clip>
);

const Fireflies: React.FC<{t: number; area: Rect; seed: string}> = ({t, area, seed}) => (
  <Clip r={area}>
    {Array.from({length: Math.round((area.w * area.h) / 9000) + 6}, (_, i) => {
      const r = (k: string) => random(`${seed}-${i}-${k}`);
      return (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: r('x') * area.w + wave(t, 1, r('px')) * 25,
            top: r('y') * area.h + wave(t, 2, r('py')) * 15,
            width: 3,
            height: 3,
            borderRadius: '50%',
            background: 'rgba(255,240,150,1)',
            boxShadow: '0 0 8px 3px rgba(255,230,120,0.7)',
            opacity: Math.max(0, 0.15 + 0.85 * wave(t, 3, r('o'))),
          }}
        />
      );
    })}
  </Clip>
);

const Glow: React.FC<{t: number; g: Pt & {r: number; color?: string}; i: number}> = ({t, g, i}) => (
  <div
    style={{
      position: 'absolute',
      left: g.x - g.r,
      top: g.y - g.r,
      width: g.r * 2,
      height: g.r * 2,
      borderRadius: '50%',
      background: `radial-gradient(circle, ${g.color ?? 'rgba(255,214,150,0.55)'}, rgba(255,190,110,0.12) 45%, rgba(0,0,0,0) 70%)`,
      opacity: 0.55 + 0.08 * wave(t, 4, i * 0.21) + 0.04 * wave(t, 9, 0.3 + i * 0.1),
      mixBlendMode: 'screen',
    }}
  />
);

const Dust: React.FC<{t: number; d: Pt & {r: number}; seed: string}> = ({t, d, seed}) => (
  <>
    {Array.from({length: 22}, (_, i) => {
      const r = (k: string) => random(`${seed}-${i}-${k}`);
      const ang = r('a') * TAU;
      const dist = d.r * (0.3 + r('d') * 0.9);
      return (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: d.x + Math.cos(ang) * dist + wave(t, 1, r('px')) * 18,
            top: d.y + 60 + Math.sin(ang) * dist * 0.8 + wave(t, 2, r('py')) * 10,
            width: 2.5,
            height: 2.5,
            borderRadius: '50%',
            background: 'rgba(255,230,180,1)',
            opacity: Math.max(0, (0.35 + 0.35 * wave(t, 3, r('o'))) * (0.4 + r('b') * 0.6)),
            boxShadow: '0 0 4px rgba(255,220,160,0.9)',
          }}
        />
      );
    })}
  </>
);

const Steam: React.FC<{t: number; p: Pt}> = ({t, p}) => (
  <>
    {Array.from({length: 5}, (_, i) => {
      const ph = phase(t, 2, i / 5);
      const size = 16 + ph * 34;
      return (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: p.x - size / 2 + Math.sin(TAU * (ph * 1.5 + i * 0.3)) * 10,
            top: p.y - ph * 110 - size / 2,
            width: size,
            height: size,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.9), rgba(255,255,255,0))',
            opacity: Math.sin(Math.PI * ph) * 0.28,
            filter: 'blur(6px)',
          }}
        />
      );
    })}
  </>
);

export const StillLoop: React.FC<Scene> = (p) => {
  const f = useCurrentFrame();
  const {width} = useVideoConfig();
  const t = f / loopFrames(p.roundFrames);
  const crop = p.crop ?? {x: 0, y: 0, w: p.srcW, h: p.srcH};
  const s = width / crop.w;
  const fx = p.effects;
  // Very slow "breathing" camera: 1 in-out per ambient loop, max 2 %.
  const zoom = 1.01 + 0.01 * wave(t, 1);

  return (
    <AbsoluteFill style={{backgroundColor: '#000', overflow: 'hidden', fontFamily: FONT}}>
      <AbsoluteFill style={{transform: `scale(${zoom})`, transformOrigin: '55% 45%'}}>
        <div
          style={{
            position: 'absolute',
            left: -crop.x * s,
            top: -crop.y * s,
            width: p.srcW,
            height: p.srcH,
            transform: `scale(${s})`,
            transformOrigin: '0 0',
          }}
        >
          <Img src={staticFile(p.img)} style={{position: 'absolute', width: p.srcW, height: p.srcH}} />
          {fx.rain?.map((w, i) => <Rain key={`r${i}`} t={t} win={w} seed={`rain${i}`} />)}
          {fx.snow?.map((a, i) => <Snow key={`s${i}`} t={t} area={a} seed={`snow${i}`} />)}
          {fx.bokeh?.map((b, i) => (
            <div
              key={`b${i}`}
              style={{
                position: 'absolute',
                left: b.x - b.r,
                top: b.y - b.r,
                width: b.r * 2,
                height: b.r * 2,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${b.color}, rgba(0,0,0,0))`,
                opacity: 0.25 + 0.25 * wave(t, 2 + (i % 3), i * 0.17),
                mixBlendMode: 'screen',
              }}
            />
          ))}
          {fx.glows?.map((g, i) => <Glow key={`g${i}`} t={t} g={g} i={i} />)}
          {fx.dust?.map((d, i) => <Dust key={`d${i}`} t={t} d={d} seed={`dust${i}`} />)}
          {fx.fireflies?.map((a, i) => <Fireflies key={`ff${i}`} t={t} area={a} seed={`ff${i}`} />)}
          {fx.steam?.map((pt, i) => <Steam key={`st${i}`} t={t} p={pt} />)}
        </div>
      </AbsoluteFill>

      <div style={{position: 'absolute', left: 64, top: 52, color: '#fff', textShadow: '0 2px 12px rgba(0,0,0,0.6)'}}>
        <div style={{fontSize: 22, letterSpacing: 6, fontWeight: 700, color: p.accent}}>{p.subtitle.toUpperCase()}</div>
        <div style={{fontSize: 44, fontWeight: 800, marginTop: 4}}>{p.title}</div>
      </div>
      {/* Flow-style waves follow the music; one round = one song pass, so they line up again after each loop. */}
      <div style={{position: 'absolute', left: 0, bottom: 0}}>
        <FlowWaves src={staticFile(p.audio)} colors={p.waves} width={width} height={170} loop={loopFrames(p.roundFrames)} />
      </div>
      <Audio src={staticFile(p.audio)} />
    </AbsoluteFill>
  );
};
