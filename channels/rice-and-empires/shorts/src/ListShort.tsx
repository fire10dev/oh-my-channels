import {loadFont} from '@remotion/google-fonts/BeVietnamPro';
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  OffthreadVideo,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const {fontFamily} = loadFont('normal', {weights: ['600', '800'], subsets: ['latin', 'vietnamese']});

export type Scene = {id: string; say: string; title: string; sub?: string; img: string; clip?: string; clipSec?: number};
export type Timed = {id: string; file: string; seconds: number};

export const FPS = 30;
const XFADE = 6; // frames of image cross-fade
const PAD = 0.12; // seconds of air after each line
const TAIL = 0.6; // hold on last scene

export const layout = (timeline: Timed[]) => {
  let at = 0;
  return timeline.map((t, i) => {
    const frames = Math.round((t.seconds + PAD + (i === timeline.length - 1 ? TAIL : 0)) * FPS);
    const s = {from: at, frames};
    at += frames;
    return s;
  });
};
export const totalFrames = (timeline: Timed[]) => layout(timeline).reduce((a, s) => a + s.frames, 0);

// Optional mp4 clip plays first (slowed to fill up to the whole scene, rate ≥ 0.5), then fades into the still.
const Background: React.FC<{src: string; frames: number; fadeIn: boolean; clip?: string; clipSec?: number}> = ({src, frames, fadeIn, clip, clipSec}) => {
  const f = useCurrentFrame();
  const rate = clip && clipSec ? Math.min(1, Math.max(0.5, clipSec / (frames / FPS))) : 1;
  const clipFrames = clip && clipSec ? Math.min(frames + XFADE, Math.floor((clipSec / rate) * FPS) - 1) : 0;
  const clipOpacity = interpolate(f, [clipFrames - XFADE, clipFrames], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const scale = interpolate(f, [0, frames + XFADE], [1.1, 1.2]);
  const y = interpolate(f, [0, frames + XFADE], [0, -40]);
  const opacity = fadeIn ? interpolate(f, [0, XFADE], [0, 1], {extrapolateRight: 'clamp'}) : 1;
  return (
    <AbsoluteFill style={{opacity}}>
      <Img src={staticFile(src)} style={{width: '100%', height: '100%', objectFit: 'cover', transform: `translateY(${y}px) scale(${scale})`}} />
      {clip && clipFrames > 0 && (
        <Sequence durationInFrames={clipFrames} layout="none">
          <AbsoluteFill style={{opacity: clipOpacity}}>
            <OffthreadVideo src={staticFile(clip)} muted playbackRate={rate} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </AbsoluteFill>
        </Sequence>
      )}
      <AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(10,6,2,0.8) 0%, rgba(10,6,2,0.55) 13%, rgba(10,6,2,0) 24%, rgba(0,0,0,0) 85%, rgba(0,0,0,0.25) 100%)'}} />
    </AbsoluteFill>
  );
};

// Short caption chunks (≤ 6 words), timed by character share of the narration.
const chunks = (text: string): string[] => {
  const out: string[] = [];
  for (const part of text.split(/(?<=[.?!;:,])\s+/)) {
    const w = part.split(/\s+/).filter(Boolean);
    const n = Math.ceil(w.length / 6);
    const size = Math.ceil(w.length / n);
    for (let i = 0; i < w.length; i += size) out.push(w.slice(i, i + size).join(' '));
  }
  return out;
};

const Card: React.FC<{scene: Scene; index: number; count: number; numbered: boolean; frames: number}> = ({scene, index, count, numbered, frames}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const rise = spring({frame: f - 3, fps, config: {damping: 18}});
  const isHook = scene.id === 'hook';
  const isOutro = scene.id === 'outro';
  const num = numbered && !isHook && !isOutro ? index : null;
  const parts = scene.sub ? chunks(scene.sub) : [];
  const total = parts.reduce((t, c) => t + c.length + 4, 0);
  const speak = Math.max(1, frames - 6);
  let acc = 0;
  let cur = parts.length - 1;
  for (let i = 0; i < parts.length; i++) {
    acc += parts[i].length + 4;
    if (f < (acc / total) * speak) { cur = i; break; }
  }
  return (
    <AbsoluteFill style={{fontFamily, color: 'white', padding: '168px 90px 0', justifyContent: 'flex-start'}}>
      <div style={{fontSize: isHook ? 64 : 44, fontWeight: 800, lineHeight: 1.1, opacity: rise, color: isHook ? '#FFC83D' : 'white', textShadow: '0 3px 14px rgba(0,0,0,0.6)'}}>
        {num !== null && <span style={{color: '#FFC83D'}}>{num}/{count} · </span>}
        {scene.title}
      </div>
      {parts.length > 0 && (
        <div style={{fontSize: 40, lineHeight: 1.25, fontWeight: 600, marginTop: 14, color: 'rgba(255,255,255,0.95)', textShadow: '0 2px 10px rgba(0,0,0,0.7)'}}>
          {parts[cur]}
        </div>
      )}
    </AbsoluteFill>
  );
};

const Progress: React.FC<{active: number; count: number}> = ({active, count}) => (
  <AbsoluteFill style={{top: 130, height: 14, padding: '0 90px', flexDirection: 'row', gap: 10}}>
    {Array.from({length: count}, (_, i) => (
      <div key={i} style={{flex: 1, height: 10, borderRadius: 5, background: i < active ? '#FFC83D' : 'rgba(255,255,255,0.35)'}} />
    ))}
  </AbsoluteFill>
);

export const ListShort: React.FC<{scenes: Scene[]; timeline: Timed[]; dir: string; bgm?: string; numbered?: boolean; bgmVolume?: number; bgmEnv?: [number, number][]}> = ({
  scenes,
  timeline,
  dir,
  bgm,
  numbered = true,
  bgmVolume = 0.07,
  bgmEnv,
}) => {
  const slots = layout(timeline);
  const count = scenes.filter((s) => s.id !== 'hook' && s.id !== 'outro').length;
  return (
    <AbsoluteFill style={{background: '#120c06'}}>
      {scenes.map((s, i) => {
        const {from, frames} = slots[i];
        const start = i === 0 ? 0 : from - XFADE;
        return (
          <Sequence key={s.id} from={start} durationInFrames={frames + (i === 0 ? 0 : XFADE)} layout="none">
            <Background src={s.img} frames={frames} fadeIn={i > 0} clip={s.clip} clipSec={s.clipSec} />
          </Sequence>
        );
      })}
      {scenes.map((s, i) => {
        const {from, frames} = slots[i];
        return (
          <Sequence key={`c-${s.id}`} from={from} durationInFrames={frames}>
            <Card scene={s} index={i} count={count} numbered={numbered} frames={frames} />
            {s.id !== 'hook' && s.id !== 'outro' && <Progress active={i} count={count} />}
            <Audio src={staticFile(`${dir}/${timeline[i].file}`)} />
            {i > 0 && <Audio src={staticFile('sfx/swoosh-quick.mp3')} volume={0.25} />}
          </Sequence>
        );
      })}
      {bgm && (
        <Audio
          src={staticFile(bgm)}
          loop
          // bgmEnv: [seconds, volume] points, linear in between (e.g. duck a loud stretch of the track)
          volume={bgmEnv ? (f) => interpolate(f / FPS, bgmEnv.map((p) => p[0]), bgmEnv.map((p) => p[1]), {extrapolateRight: 'clamp'}) : bgmVolume}
        />
      )}
    </AbsoluteFill>
  );
};
