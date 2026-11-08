import {AbsoluteFill, Audio, Img, Loop, OffthreadVideo, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {FlowWaves} from './FlowWaves';
import {ACCENT, FONT, MOOD, trackById} from './tracks';
import {Visualizer} from './Visualizer';
import data from './variants.json';

// Extra Shorts cut from the same 30 tracks (make_variants.py): a different 20 s hook per variant and a
// layout unlike the original "16:9 card" Short, so each upload looks and sounds different.
//   full   — the loop fills the 9:16 frame and pans slowly across the 16:9 scene
//   detail — zoomed-in crop of one part of the scene, caption in a glass box, Flow-style waves
//   still  — the track's still frame with a slow Ken Burns, big waves, "now playing" card
export type Variant = {vid: string; id: string; n: number; hookStart: number; layout: 'full' | 'detail' | 'still'; caption: string; pan: number};
export const VARIANTS = data as Variant[];

export const PALETTE: Record<string, string[]> = {
  A: ['#ff4fd8', '#8a5cff', '#3ad7ff'],
  B: ['#ffb347', '#ffd9a0', '#ff8a65'],
  C: ['#5ec8ff', '#2b6cb0', '#c49bff'],
  D: ['#ffb86b', '#f7d9a8', '#c58b5a'],
  E: ['#3dffb5', '#00c2ff', '#ff4fd8'],
  F: ['#9ecbff', '#d6e8ff', '#7fb8a6'],
};

const shadow = '0 4px 24px rgba(0,0,0,0.75)';

export const ShortVariant: React.FC<{vid: string}> = ({vid}) => {
  const v = VARIANTS.find((x) => x.vid === vid)!;
  const track = trackById(v.id);
  const g = v.id[0];
  const accent = ACCENT[g];
  const frame = useCurrentFrame();
  const {fps, durationInFrames, width} = useVideoConfig();
  const hook = staticFile(`hook2/${vid}.wav`);
  const bg = staticFile(`bg/${v.id}.mp4`);
  const still = staticFile(`${'DEF'.includes(g) ? 'thumb3' : 'thumb'}/${v.id}.jpg`);
  const loopFrames = Math.round(track.bgDuration * fps);
  const t = frame / durationInFrames;

  const fadeIn = interpolate(frame, [0, 8], [0, 1], {extrapolateRight: 'clamp'});
  const capIn = interpolate(frame, [6, 22], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const capRise = interpolate(frame, [6, 22], [30, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  let scene: React.ReactNode;
  if (v.layout === 'full') {
    const x = v.pan > 0 ? 25 + 50 * t : 75 - 50 * t;
    scene = (
      <Loop durationInFrames={loopFrames}>
        <OffthreadVideo src={bg} muted style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: `${x}% 50%`}} />
      </Loop>
    );
  } else if (v.layout === 'detail') {
    const zoom = interpolate(frame, [0, durationInFrames], [1.35, 1.55]);
    const x = v.pan > 0 ? 30 : 70;
    scene = (
      <AbsoluteFill style={{transform: `scale(${zoom})`, transformOrigin: `${x}% 55%`}}>
        <Loop durationInFrames={loopFrames}>
          <OffthreadVideo src={bg} muted style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: `${x}% 50%`}} />
        </Loop>
      </AbsoluteFill>
    );
  } else {
    const zoom = interpolate(frame, [0, durationInFrames], [1.08, 1.25]);
    const x = v.pan > 0 ? 35 + 20 * t : 65 - 20 * t;
    scene = (
      <AbsoluteFill style={{transform: `scale(${zoom})`}}>
        <Img src={still} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: `${x}% 50%`}} />
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill style={{backgroundColor: '#000', fontFamily: FONT, color: '#fff', opacity: fadeIn}}>
      <Audio src={hook} />
      {scene}
      <AbsoluteFill
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0) 30%), linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0) 45%)',
        }}
      />

      <div style={{position: 'absolute', top: 150, left: 70, right: 70, fontSize: 26, letterSpacing: 5, fontWeight: 700, color: accent, textShadow: shadow}}>
        VIBE MUSIC AI MAKER · {MOOD[g].toUpperCase()}
      </div>

      {v.layout === 'detail' ? (
        <div
          style={{
            position: 'absolute',
            top: 760,
            left: 70,
            right: 70,
            padding: '40px 46px',
            borderRadius: 36,
            background: 'rgba(10,10,18,0.5)',
            backdropFilter: 'blur(16px)',
            border: `2px solid ${accent}66`,
            fontSize: 66,
            fontWeight: 800,
            lineHeight: 1.12,
            textAlign: 'center',
            opacity: capIn,
            transform: `translateY(${capRise}px)`,
          }}
        >
          {v.caption}
        </div>
      ) : (
        <div
          style={{
            position: 'absolute',
            top: 230,
            left: 70,
            right: 70,
            fontSize: 74,
            fontWeight: 900,
            lineHeight: 1.08,
            textShadow: shadow,
            opacity: capIn,
            transform: `translateY(${capRise}px)`,
          }}
        >
          {v.caption}
        </div>
      )}

      {v.layout === 'still' ? (
        <div style={{position: 'absolute', left: 0, bottom: 0}}>
          <FlowWaves src={hook} colors={PALETTE[g]} width={width} height={520} loop={durationInFrames} />
        </div>
      ) : v.layout === 'detail' ? (
        <div style={{position: 'absolute', left: 0, bottom: 0, opacity: 0.85}}>
          <FlowWaves src={hook} colors={PALETTE[g]} width={width} height={300} loop={durationInFrames} />
        </div>
      ) : (
        <div style={{position: 'absolute', left: 70, bottom: 250}}>
          <Visualizer src={hook} color={accent} width={width - 140} height={110} bars={40} />
        </div>
      )}

      <div style={{position: 'absolute', left: 70, right: 70, bottom: v.layout === 'full' ? 390 : 420}}>
        <div style={{fontSize: 24, letterSpacing: 4, fontWeight: 700, opacity: 0.85, textShadow: shadow}}>NOW PLAYING</div>
        <div style={{fontSize: 64, fontWeight: 800, marginTop: 8, textShadow: shadow}}>{track.headline}</div>
        <div style={{fontSize: 30, opacity: 0.85, marginTop: 8, textShadow: shadow}}>
          {track.bpm} BPM · {track.style}
        </div>
      </div>

      <div style={{position: 'absolute', bottom: 120, left: 0, right: 0, display: 'flex', justifyContent: 'center'}}>
        <div style={{fontSize: 40, fontWeight: 800, padding: '20px 42px', borderRadius: 999, background: accent, color: '#111'}}>
          ▶ FULL 1 HOUR ON THE CHANNEL
        </div>
      </div>

      <div style={{position: 'absolute', bottom: 0, left: 0, height: 10, width: `${t * 100}%`, background: accent}} />
    </AbsoluteFill>
  );
};
