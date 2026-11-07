import {loadFont} from '@remotion/google-fonts/BeVietnamPro';
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const {fontFamily} = loadFont('normal', {weights: ['600', '800'], subsets: ['latin', 'vietnamese']});

export type Scene = {id: string; say: string; title: string; sub?: string; img: string};
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

const Background: React.FC<{src: string; frames: number; fadeIn: boolean}> = ({src, frames, fadeIn}) => {
  const f = useCurrentFrame();
  const scale = interpolate(f, [0, frames + XFADE], [1.1, 1.2]);
  const y = interpolate(f, [0, frames + XFADE], [0, -40]);
  const opacity = fadeIn ? interpolate(f, [0, XFADE], [0, 1], {extrapolateRight: 'clamp'}) : 1;
  return (
    <AbsoluteFill style={{opacity}}>
      <Img src={staticFile(src)} style={{width: '100%', height: '100%', objectFit: 'cover', transform: `translateY(${y}px) scale(${scale})`}} />
      <AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 38%, rgba(10,6,2,0.55) 52%, rgba(10,6,2,0.86) 70%, rgba(10,6,2,0.92) 100%)'}} />
    </AbsoluteFill>
  );
};

const Card: React.FC<{scene: Scene; index: number; count: number; numbered: boolean}> = ({scene, index, count, numbered}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const pop = spring({frame: f - 2, fps, config: {damping: 12, stiffness: 160}});
  const rise = spring({frame: f - 5, fps, config: {damping: 18}});
  const isHook = scene.id === 'hook';
  const isOutro = scene.id === 'outro';
  const num = numbered && !isHook && !isOutro ? index : null;
  const long = (scene.sub?.length ?? 0) > 90; // narrative captions: smaller text
  return (
    <AbsoluteFill style={{fontFamily, color: 'white', padding: '0 90px', justifyContent: 'flex-end', paddingBottom: 470}}>
      {num !== null && (
        <div style={{fontSize: 210, fontWeight: 800, color: '#FFC83D', lineHeight: 1, transform: `scale(${pop})`, transformOrigin: 'left bottom', textShadow: '0 6px 24px rgba(0,0,0,0.5)'}}>
          {num}
          <span style={{fontSize: 70, color: 'rgba(255,255,255,0.75)'}}> / {count}</span>
        </div>
      )}
      <div
        style={{
          fontSize: isHook ? (Math.max(...scene.title.split(' ').map((w) => w.length)) > 7 ? 120 : 170) : 92,
          fontWeight: 800,
          lineHeight: 1.05,
          marginTop: 14,
          opacity: rise,
          transform: `translateY(${(1 - rise) * 60}px)`,
          textShadow: '0 4px 20px rgba(0,0,0,0.6)',
          color: isHook ? '#FFC83D' : 'white',
        }}
      >
        {scene.title}
      </div>
      {scene.sub && (
        <div style={{fontSize: long ? 50 : 56, lineHeight: 1.25, fontWeight: 600, marginTop: 18, opacity: rise, color: 'rgba(255,255,255,0.9)', textShadow: '0 3px 14px rgba(0,0,0,0.6)'}}>
          {scene.sub}
        </div>
      )}
    </AbsoluteFill>
  );
};

const Progress: React.FC<{active: number; count: number}> = ({active, count}) => (
  <AbsoluteFill style={{top: 250, height: 14, padding: '0 90px', flexDirection: 'row', gap: 10}}>
    {Array.from({length: count}, (_, i) => (
      <div key={i} style={{flex: 1, height: 10, borderRadius: 5, background: i < active ? '#FFC83D' : 'rgba(255,255,255,0.35)'}} />
    ))}
  </AbsoluteFill>
);

export const ListShort: React.FC<{scenes: Scene[]; timeline: Timed[]; dir: string; bgm?: string; numbered?: boolean; bgmVolume?: number}> = ({
  scenes,
  timeline,
  dir,
  bgm,
  numbered = true,
  bgmVolume = 0.07,
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
            <Background src={s.img} frames={frames} fadeIn={i > 0} />
          </Sequence>
        );
      })}
      {scenes.map((s, i) => {
        const {from, frames} = slots[i];
        return (
          <Sequence key={`c-${s.id}`} from={from} durationInFrames={frames}>
            <Card scene={s} index={i} count={count} numbered={numbered} />
            {s.id !== 'hook' && s.id !== 'outro' && <Progress active={i} count={count} />}
            <Audio src={staticFile(`${dir}/${timeline[i].file}`)} />
            {i > 0 && <Audio src={staticFile('sfx/swoosh-quick.mp3')} volume={0.25} />}
          </Sequence>
        );
      })}
      {bgm && <Audio src={staticFile(bgm)} volume={bgmVolume} loop />}
    </AbsoluteFill>
  );
};
