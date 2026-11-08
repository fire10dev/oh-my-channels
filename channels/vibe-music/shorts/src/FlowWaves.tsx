import {useWindowedAudioData, visualizeAudio} from '@remotion/media-utils';
import {useCurrentFrame, useVideoConfig} from 'remotion';

// Soft layered "hills" along the bottom edge, in the style of the waves Google Flow paints into its clips:
// translucent pastel fills with a horizontal colour gradient and a thin glowing rim. Each layer's height
// follows one frequency band of the music (bass / low-mid / mid / high); horizontal drift completes whole
// cycles per `loop` frames so the shapes themselves stay seamless.
type Props = {
  src: string;
  colors: string[]; // 3-5 palette colours, left to right
  width: number;
  height: number; // max wave height in px
  loop: number;
};

const TAU = Math.PI * 2;
const SMOOTH_FRAMES = 6; // average spectrum over the last N frames so hills swell instead of jitter
const BANDS: [number, number][] = [
  [1, 4], // bass
  [4, 10], // low-mid
  [10, 22], // mid
  [22, 48], // high
];
// Per layer: humps across the width, drift cycles per loop, base height share, audio share, opacity.
const LAYERS = [
  {humps: 1.2, drift: 1, base: 0.5, gain: 0.5, alpha: 0.72, shift: 0},
  {humps: 1.7, drift: -1, base: 0.42, gain: 0.5, alpha: 0.78, shift: 1},
  {humps: 2.3, drift: 2, base: 0.32, gain: 0.45, alpha: 0.82, shift: 2},
  {humps: 3.0, drift: -2, base: 0.22, gain: 0.4, alpha: 0.88, shift: 3},
];

const useBandLevels = (src: string) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const {audioData, dataOffsetInSeconds} = useWindowedAudioData({src, frame, fps, windowInSeconds: 10});
  if (!audioData) {
    return BANDS.map(() => 0);
  }
  const acc = BANDS.map(() => 0);
  for (let k = 0; k < SMOOTH_FRAMES; k++) {
    const spectrum = visualizeAudio({
      fps,
      frame: Math.max(0, frame - k),
      audioData,
      numberOfSamples: 128,
      optimizeFor: 'speed',
      dataOffsetInSeconds,
    });
    BANDS.forEach(([a, b], i) => {
      const slice = spectrum.slice(a, b);
      acc[i] += slice.reduce((s, v) => s + v, 0) / slice.length;
    });
  }
  // sqrt + gain lifts quiet bands; clamp to 1.
  return acc.map((v, i) => Math.min(1, Math.sqrt(v / SMOOTH_FRAMES) * (1.6 + i * 0.5)));
};

export const FlowWaves: React.FC<Props> = ({src, colors, width, height, loop}) => {
  const frame = useCurrentFrame();
  const levels = useBandLevels(src);
  const steps = 64;

  const path = (l: (typeof LAYERS)[number], level: number) => {
    const phase = TAU * ((frame / loop) * l.drift);
    const amp = height * (l.base + l.gain * level);
    const pts: string[] = [];
    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * width;
      const u = x / width;
      // Two sines → irregular, organic hills; always >= 0 so the wave never dips below the edge.
      const shape = 0.5 + 0.32 * Math.sin(TAU * u * l.humps + phase) + 0.18 * Math.sin(TAU * u * l.humps * 1.9 - phase * 1.3 + 1.7);
      const y = height - amp * Math.max(0.05, shape);
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    const top = `M${pts.join(' L')}`;
    return {fill: `M0,${height} L${pts.join(' L')} L${width},${height} Z`, rim: top};
  };

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{display: 'block', overflow: 'visible'}}>
      <defs>
        {LAYERS.map((l, i) => {
          const c = colors.map((_, k) => colors[(k + l.shift) % colors.length]);
          return (
            <linearGradient key={i} id={`fw-g${i}`} x1="0" y1="0" x2="1" y2="0">
              {c.map((col, k) => (
                <stop key={k} offset={`${(k / (c.length - 1)) * 100}%`} stopColor={col} />
              ))}
            </linearGradient>
          );
        })}
        <filter id="fw-glow" x="-5%" y="-50%" width="110%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {LAYERS.map((l, i) => {
        const d = path(l, levels[i]);
        return (
          <g key={i}>
            <path d={d.fill} fill={`url(#fw-g${i})`} opacity={l.alpha} />
            <path d={d.rim} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth={1.6} filter="url(#fw-glow)" opacity={0.6} />
          </g>
        );
      })}
    </svg>
  );
};
