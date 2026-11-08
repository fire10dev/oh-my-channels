import {AbsoluteFill, Audio, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {FlowWaves} from './FlowWaves';
import {FONT} from './tracks';
import data from './shortsG.json';

// Batch-4 Shorts (batch4/make_shorts.py): the song's still image cropped to 9:16 with a slow pan + zoom,
// the loudest 20 s of the song (public/hookG/<id>.wav), Flow-style waves and a "full 1 hour" pill.
export type ShortGData = {id: string; title: string; bpm: number; style: string; pack: string; caption: string;
  img: string; accent: string; waves: string[]; pan: number};
export const SHORTS_G = data as ShortGData[];

const shadow = '0 4px 24px rgba(0,0,0,0.75)';

export const ShortG: React.FC<{id: string}> = ({id}) => {
  const s = SHORTS_G.find((x) => x.id === id)!;
  const frame = useCurrentFrame();
  const {durationInFrames, width} = useVideoConfig();
  const t = frame / durationInFrames;
  const hook = staticFile(`hookG/${id}.wav`);
  const zoom = interpolate(frame, [0, durationInFrames], [1.06, 1.2]);
  const x = s.pan > 0 ? 62 + 18 * t : 80 - 18 * t; // characters sit in the right half of the 16:9 image
  const fadeIn = interpolate(frame, [0, 8], [0, 1], {extrapolateRight: 'clamp'});
  const capIn = interpolate(frame, [6, 22], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const capRise = interpolate(frame, [6, 22], [30, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{backgroundColor: '#000', fontFamily: FONT, color: '#fff', opacity: fadeIn}}>
      <Audio src={hook} />
      <AbsoluteFill style={{transform: `scale(${zoom})`}}>
        <Img src={staticFile(s.img)} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: `${x}% 50%`}} />
      </AbsoluteFill>
      <AbsoluteFill
        style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0) 30%), linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0) 45%)'}}
      />
      <div style={{position: 'absolute', top: 150, left: 70, right: 70, fontSize: 26, letterSpacing: 5, fontWeight: 700, color: s.accent, textShadow: shadow}}>
        VIBE MUSIC AI MAKER · {s.pack.toUpperCase()}
      </div>
      <div style={{position: 'absolute', top: 230, left: 70, right: 70, fontSize: 74, fontWeight: 900, lineHeight: 1.08, textShadow: shadow,
        opacity: capIn, transform: `translateY(${capRise}px)`}}>
        {s.caption}
      </div>
      <div style={{position: 'absolute', left: 0, bottom: 0}}>
        <FlowWaves src={hook} colors={s.waves} width={width} height={520} loop={durationInFrames} />
      </div>
      <div style={{position: 'absolute', left: 70, right: 70, bottom: 420}}>
        <div style={{fontSize: 24, letterSpacing: 4, fontWeight: 700, opacity: 0.85, textShadow: shadow}}>NOW PLAYING</div>
        <div style={{fontSize: 64, fontWeight: 800, marginTop: 8, textShadow: shadow}}>{s.title}</div>
        <div style={{fontSize: 30, opacity: 0.85, marginTop: 8, textShadow: shadow}}>{s.bpm} BPM · {s.style}</div>
      </div>
      <div style={{position: 'absolute', bottom: 120, left: 0, right: 0, display: 'flex', justifyContent: 'center'}}>
        <div style={{fontSize: 40, fontWeight: 800, padding: '20px 42px', borderRadius: 999, background: s.accent, color: '#111'}}>
          ▶ FULL 1 HOUR ON THE CHANNEL
        </div>
      </div>
      <div style={{position: 'absolute', bottom: 0, left: 0, height: 10, width: `${t * 100}%`, background: s.accent}} />
    </AbsoluteFill>
  );
};
