import {AbsoluteFill, Audio, Loop, OffthreadVideo, Sequence, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {ACCENT, FONT, MOOD, Track, trackById} from './tracks';
import {Visualizer} from './Visualizer';

// Must match the acrossfade duration used by build_mix_audio.sh.
export const CROSSFADE = 3;

export const mixGroup = (group: string) => ['1', '2', '3', '4', '5'].map((n) => trackById(`${group}${n}`));

// Start time (s) of each song inside one round; songs overlap by CROSSFADE.
export const mixTimeline = (tracks: Track[]) => {
  let t = 0;
  return tracks.map((track) => {
    const start = t;
    t += track.duration - CROSSFADE;
    return {track, start};
  });
};

export const mixRoundSeconds = (tracks: Track[]) =>
  tracks.reduce((sum, t) => sum + t.duration, 0) - CROSSFADE * (tracks.length - 1);

const NowPlaying: React.FC<{track: Track; index: number; total: number; next?: Track; accent: string; frames: number}> = ({
  track,
  index,
  total,
  next,
  accent,
  frames,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const xf = CROSSFADE * fps;
  const opacity = interpolate(frame, [0, xf, frames - xf, frames], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const progress = Math.min(1, frame / frames);
  return (
    <div
      style={{
        position: 'absolute',
        left: 64,
        bottom: 64,
        width: 640,
        padding: '28px 34px',
        borderRadius: 28,
        background: 'rgba(10,10,18,0.55)',
        backdropFilter: 'blur(14px)',
        border: '1px solid rgba(255,255,255,0.14)',
        opacity,
      }}
    >
      <div style={{fontSize: 20, letterSpacing: 5, fontWeight: 700, color: accent}}>
        NOW PLAYING · {index + 1}/{total}
      </div>
      <div style={{fontSize: 44, fontWeight: 800, marginTop: 10}}>{track.headline}</div>
      <div style={{fontSize: 22, opacity: 0.8, marginTop: 6}}>
        {track.bpm} BPM · {track.style}
      </div>
      <div style={{height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.18)', marginTop: 20, overflow: 'hidden'}}>
        <div style={{height: '100%', width: `${progress * 100}%`, background: accent}} />
      </div>
      {next ? <div style={{fontSize: 20, opacity: 0.65, marginTop: 14}}>Up next: {next.name}</div> : null}
    </div>
  );
};

// One full round of a 5-song mood mix: scene per song with crossfades, now-playing card, spectrum.
// build_mix.sh loops the rendered round to one hour.
export const Mix: React.FC<{group: string}> = ({group}) => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const tracks = mixGroup(group);
  const timeline = mixTimeline(tracks);
  const accent = ACCENT[group];
  const audio = staticFile(`mix/${group}.wav`);
  const xf = CROSSFADE * fps;
  const fadeEdges = interpolate(frame, [0, fps, durationInFrames - 1.5 * fps, durationInFrames], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{backgroundColor: '#000', fontFamily: FONT, color: '#fff'}}>
      <Audio src={audio} />
      <AbsoluteFill style={{opacity: fadeEdges}}>
        {timeline.map(({track, start}, i) => {
          const from = Math.round(start * fps);
          const frames = Math.round(track.duration * fps);
          return (
            <Sequence key={track.id} from={from} durationInFrames={frames}>
              <Scene id={track.id} fadeIn={i === 0 ? 0 : xf} loopFrames={Math.round(track.bgDuration * fps)} />
            </Sequence>
          );
        })}
        <AbsoluteFill
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0) 45%), linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0) 18%)',
          }}
        />

        <div style={{position: 'absolute', top: 52, left: 64, fontSize: 22, letterSpacing: 6, fontWeight: 700, textShadow: '0 2px 10px rgba(0,0,0,0.6)'}}>
          VIBE MUSIC AI MAKER · <span style={{color: accent}}>{MOOD[group].toUpperCase()} MIX</span>
        </div>

        {timeline.map(({track, start}, i) => (
          <Sequence key={`np-${track.id}`} from={Math.round(start * fps)} durationInFrames={Math.round(track.duration * fps)}>
            <NowPlaying
              track={track}
              index={i}
              total={tracks.length}
              next={tracks[i + 1]}
              accent={accent}
              frames={Math.round(track.duration * fps)}
            />
          </Sequence>
        ))}

        <div style={{position: 'absolute', right: 64, bottom: 64, opacity: 0.85}}>
          <Visualizer src={audio} color={accent} width={560} height={110} bars={32} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const Scene: React.FC<{id: string; fadeIn: number; loopFrames: number}> = ({id, fadeIn, loopFrames}) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn === 0 ? 1 : interpolate(frame, [0, fadeIn], [0, 1], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{opacity}}>
      <Loop durationInFrames={loopFrames}>
        <OffthreadVideo src={staticFile(`bg/${id}.mp4`)} muted style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </Loop>
    </AbsoluteFill>
  );
};
