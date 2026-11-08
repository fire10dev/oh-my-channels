import {AbsoluteFill, Audio, Loop, OffthreadVideo, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {ACCENT, FONT, MOOD, trackById} from './tracks';
import {Visualizer} from './Visualizer';

// 1080x1920 teaser: blurred scene behind, the 16:9 loop as a card, spectrum, call to the 1-hour video.
export const Short: React.FC<{id: string}> = ({id}) => {
  const track = trackById(id);
  const frame = useCurrentFrame();
  const {fps, durationInFrames, width} = useVideoConfig();
  const accent = ACCENT[id[0]];
  const loopFrames = Math.round(track.bgDuration * fps);
  const bg = staticFile(`bg/${id}.mp4`);
  const hook = staticFile(`hook/${id}.wav`);

  const fadeIn = interpolate(frame, [0, 8], [0, 1], {extrapolateRight: 'clamp'});
  const zoom = interpolate(frame, [0, durationInFrames], [1, 1.07]);
  const rise = interpolate(frame, [0, 18], [40, 0], {extrapolateRight: 'clamp'});
  const progress = frame / durationInFrames;
  const cardW = width - 160;
  const cardH = Math.round((cardW * 9) / 16);

  return (
    <AbsoluteFill style={{backgroundColor: '#000', fontFamily: FONT, color: '#fff', opacity: fadeIn}}>
      <Audio src={hook} />
      <AbsoluteFill style={{transform: 'scale(1.25)', filter: 'blur(38px) brightness(0.42) saturate(1.2)'}}>
        <Loop durationInFrames={loopFrames}>
          <OffthreadVideo src={bg} muted style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </Loop>
      </AbsoluteFill>

      <div style={{position: 'absolute', top: 170, left: 80, right: 120, transform: `translateY(${rise}px)`}}>
        <div style={{fontSize: 26, letterSpacing: 5, fontWeight: 700, color: accent}}>VIBE MUSIC AI MAKER · {MOOD[id[0]].toUpperCase()}</div>
        <div style={{fontSize: 92, fontWeight: 800, lineHeight: 1.05, marginTop: 22}}>{track.headline}</div>
        <div style={{fontSize: 40, lineHeight: 1.3, marginTop: 22, opacity: 0.88}}>{track.tagline}</div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: 620,
          left: 80,
          width: cardW,
          height: cardH,
          borderRadius: 40,
          overflow: 'hidden',
          boxShadow: `0 30px 90px rgba(0,0,0,0.6), 0 0 0 3px ${accent}55`,
        }}
      >
        <Loop durationInFrames={loopFrames}>
          <OffthreadVideo src={bg} muted style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${zoom})`}} />
        </Loop>
      </div>

      <div style={{position: 'absolute', top: 620 + cardH + 50, left: 80}}>
        <Visualizer src={hook} color={accent} width={cardW} height={170} bars={32} mirror />
      </div>

      <div style={{position: 'absolute', bottom: 360, left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22}}>
        <div style={{fontSize: 44, fontWeight: 800, padding: '22px 46px', borderRadius: 999, background: accent, color: '#111'}}>
          ▶ FULL 1 HOUR ON THE CHANNEL
        </div>
        <div style={{fontSize: 32, opacity: 0.8}}>
          {track.bpm} BPM · {track.style}
        </div>
      </div>

      <div style={{position: 'absolute', bottom: 0, left: 0, height: 10, width: `${progress * 100}%`, background: accent}} />
    </AbsoluteFill>
  );
};
