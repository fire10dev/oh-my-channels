import {useWindowedAudioData, visualizeAudio} from '@remotion/media-utils';
import {useCurrentFrame, useVideoConfig} from 'remotion';

// Spectrum bars driven by the audio file. Must sit at composition top level so useCurrentFrame()
// matches the audio's own timeline.
export const Visualizer: React.FC<{
  src: string;
  color: string;
  width: number;
  height: number;
  bars?: number;
  mirror?: boolean;
}> = ({src, color, width, height, bars = 48, mirror = false}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const {audioData, dataOffsetInSeconds} = useWindowedAudioData({src, frame, fps, windowInSeconds: 10});
  if (!audioData) {
    return null;
  }
  const spectrum = visualizeAudio({
    fps,
    frame,
    audioData,
    numberOfSamples: 128,
    optimizeFor: 'speed',
    dataOffsetInSeconds,
  });
  // Low/mid bins carry the music; sqrt lifts quiet bins so the bars stay lively.
  const values = spectrum.slice(1, bars + 1).map((v) => Math.min(1, Math.sqrt(v) * 1.7));
  const ordered = mirror ? [...values.slice().reverse(), ...values] : values;
  const gap = 6;
  const barW = (width - gap * (ordered.length - 1)) / ordered.length;

  return (
    <div style={{width, height, display: 'flex', alignItems: 'flex-end', gap}}>
      {ordered.map((v, i) => (
        <div
          key={i}
          style={{
            width: barW,
            height: Math.max(6, v * height),
            borderRadius: barW / 2,
            background: `linear-gradient(to top, ${color}, rgba(255,255,255,0.95))`,
            opacity: 0.9,
          }}
        />
      ))}
    </div>
  );
};
