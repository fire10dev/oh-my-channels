// 8.8 s test of the "still image + stock VFX layers" recipe (L003 row 43, Bạch Đằng 938).
// Layers per shot: camera move on the painting -> fire clips screen-blended onto the burning ships (move with the image)
// -> smoke / mist -> embers on a faster parallax plane -> flicker glow -> vignette + grain. Overlays: public/vfx (Mixkit free licence).
import {loadFont as loadCinzel} from '@remotion/google-fonts/Cinzel';
import {loadFont as loadBVP} from '@remotion/google-fonts/BeVietnamPro';
import React from 'react';
import {AbsoluteFill, Audio, Easing, Img, interpolate, OffthreadVideo, Sequence, staticFile, useCurrentFrame} from 'remotion';

const {fontFamily: cinzel} = loadCinzel('normal', {weights: ['700'], subsets: ['latin']});
const {fontFamily: body} = loadBVP('normal', {weights: ['500'], subsets: ['latin', 'vietnamese']});

export const FX_FPS = 30;
export const FX_FRAMES = Math.round(8.8 * FX_FPS);
const CUT = Math.round(6.1 * FX_FPS); // pause after "...the attack collapsed."
const XF = 10; // crossfade frames
const s = (sec: number) => Math.round(sec * FX_FPS);
const ease = Easing.bezier(0.45, 0, 0.55, 1);

type Ov = {src: string; opacity: number; mask?: string; style?: React.CSSProperties; from?: number; rate?: number};

// NB: a transformed parent is its own stacking context -> give that parent mixBlendMode too, or the clip's black darkens the frame.
// Video overlay, screen-blended: black disappears, bright fire/smoke adds light.
const Overlay: React.FC<Ov> = ({src, opacity, mask, style, from = 0, rate = 1}) => (
  <AbsoluteFill style={{mixBlendMode: 'screen', opacity, WebkitMaskImage: mask, maskImage: mask, ...style}}>
    <OffthreadVideo src={staticFile(`vfx/${src}`)} muted startFrom={s(from)} playbackRate={rate}
      style={{width: '100%', height: '100%', objectFit: 'cover'}} />
  </AbsoluteFill>
);

// Smooth pseudo-random flicker in [0,1] (sum of incommensurate sines; no frame-to-frame jitter).
const flick = (f: number, k = 0) =>
  0.5 + 0.22 * Math.sin(f * 0.71 + k) + 0.18 * Math.sin(f * 1.37 + 2 * k) + 0.1 * Math.sin(f * 2.9 + 3 * k);

const Glow: React.FC<{x: string; y: string; r: string; color: string; amt: number; k?: number}> = ({x, y, r, color, amt, k = 0}) => {
  const f = useCurrentFrame();
  return <AbsoluteFill style={{mixBlendMode: 'screen', opacity: amt * flick(f, k),
    background: `radial-gradient(${r} at ${x} ${y}, ${color}, transparent 70%)`}} />;
};

const Grain: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{mixBlendMode: 'overlay', opacity: 0.18}}>
      <svg width="100%" height="100%">
        <filter id="g"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} seed={f % 12} /></filter>
        <rect width="100%" height="100%" filter="url(#g)" />
      </svg>
    </AbsoluteFill>
  );
};

const Vignette: React.FC = () => (
  <AbsoluteFill style={{background: 'radial-gradient(ellipse 75% 70% at 50% 48%, transparent 55%, rgba(0,0,0,0.62) 100%)'}} />
);

// Shot A: img-55, fleet impaled and burning. Slow push-in toward the ships, a punch-in + shake on "caught on the stakes".
const ShotA: React.FC = () => {
  const f = useCurrentFrame();
  const hit = s(4.55);
  const push = interpolate(f, [0, CUT + XF], [1.02, 1.13], {extrapolateRight: 'clamp', easing: ease});
  const punch = interpolate(f, [hit, hit + 4, hit + 22], [0, 0.035, 0.012], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const shake = f >= hit && f < hit + 12 ? (1 - (f - hit) / 12) * 9 : 0;
  const sx = Math.sin(f * 3.1) * shake, sy = Math.cos(f * 2.3) * shake * 0.6;
  const panX = interpolate(f, [0, CUT + XF], [30, -10], {easing: ease}); // px, drift toward the ships
  const panY = interpolate(f, [0, CUT + XF], [10, -8], {easing: ease});
  const cam = `translate(${panX + sx}px, ${panY + sy}px) scale(${push + punch})`;
  // Foreground plane moves 1.8x the camera drift -> parallax without cutting the painting.
  const fg = `translate(${panX * 1.8 + sx * 1.5}px, ${panY * 1.8 + sy * 1.5 - f * 0.6}px) scale(1.1)`;
  return (
    <AbsoluteFill style={{backgroundColor: 'black'}}>
      <AbsoluteFill style={{transform: cam, transformOrigin: '48% 42%'}}>
        <Img src={staticFile('l003/img-55.jpg')} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        {/* real flames on the burning sails (they ride with the painting) */}
        <Overlay src="3759.mp4" opacity={0.75} from={2}
          mask="radial-gradient(ellipse 26% 30% at 47% 34%, black 35%, transparent 100%)"
          style={{transform: 'translate(-60px,-210px) scale(0.75)'}} />
        <Overlay src="3758.mp4" opacity={0.55} from={5}
          mask="radial-gradient(ellipse 16% 20% at 36% 30%, black 30%, transparent 100%)"
          style={{transform: 'translate(-260px,-250px) scale(0.6)'}} />
        <Glow x="45%" y="35%" r="38% 34%" color="rgba(255,120,30,0.55)" amt={0.9} />
        {/* smoke rolling off the fleet into the sky */}
        <Overlay src="45298.mp4" opacity={0.28} rate={0.8}
          mask="linear-gradient(to bottom, black 0%, black 35%, transparent 60%)"
          style={{transform: `translateY(${-f * 0.8}px) scale(1.2)`}} />
      </AbsoluteFill>
      {/* foreground embers + sparks, faster plane */}
      <AbsoluteFill style={{transform: fg, mixBlendMode: 'screen'}}>
        <Overlay src="3460.mp4" opacity={0.3} />
        <Overlay src="3463.mp4" opacity={0.7} from={3} />
      </AbsoluteFill>
      {/* impact flash */}
      <AbsoluteFill style={{backgroundColor: '#ffb070', mixBlendMode: 'screen',
        opacity: interpolate(f, [hit, hit + 2, hit + 10], [0, 0.2, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}} />
    </AbsoluteFill>
  );
};

// Shot B: img-56, wreck burning in the evening water; Vietnamese boats close in. Slow pull-back + drift right.
const ShotB: React.FC = () => {
  const f = useCurrentFrame();
  const len = FX_FRAMES - CUT;
  const z = interpolate(f, [0, len], [1.14, 1.06], {easing: ease});
  const x = interpolate(f, [0, len], [-30, 25], {easing: ease});
  return (
    <AbsoluteFill style={{backgroundColor: 'black'}}>
      <AbsoluteFill style={{transform: `translateX(${x}px) scale(${z})`, transformOrigin: '30% 60%'}}>
        <Img src={staticFile('l003/img-56.jpg')} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        <Overlay src="3754.mp4" opacity={0.6} from={3}
          mask="radial-gradient(ellipse 14% 18% at 24% 60%, black 30%, transparent 100%)"
          style={{transform: 'translate(-480px,40px) scale(0.55)'}} />
        <Glow x="24%" y="66%" r="26% 30%" color="rgba(255,110,25,0.6)" amt={0.8} k={2} />
        <Overlay src="1967.mp4" opacity={0.35} from={6}
          mask="linear-gradient(to bottom, black 0%, black 50%, transparent 75%)"
          style={{transform: `translate(-420px, ${-60 - f * 0.9}px) scale(0.9)`}} />
        {/* low mist over the river */}
        <Overlay src="50957.mp4" opacity={0.32}
          mask="linear-gradient(to top, black 0%, black 25%, transparent 55%)" />
      </AbsoluteFill>
      <AbsoluteFill style={{transform: `translate(${x * 1.8}px, ${-f * 0.5}px) scale(1.1)`, mixBlendMode: 'screen'}}>
        <Overlay src="3460.mp4" opacity={0.25} from={7} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const Label: React.FC = () => {
  const f = useCurrentFrame();
  const a = interpolate(f, [s(0.4), s(0.9), s(5.4), s(5.9)], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const w = interpolate(f, [s(0.4), s(1.2)], [0, 340], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)});
  return (
    <>
    <AbsoluteFill style={{opacity: a * 0.85, background: 'radial-gradient(ellipse 38% 26% at 18% 86%, rgba(0,0,0,0.75), transparent 100%)'}} />
    <div style={{position: 'absolute', left: 90, bottom: 110, opacity: a, color: '#f3e3b5', textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>
      <div style={{fontFamily: cinzel, fontSize: 54, letterSpacing: 4}}>BẠCH ĐẰNG RIVER</div>
      <div style={{height: 2, width: w, background: 'linear-gradient(90deg, #d9a441, transparent)', margin: '10px 0'}} />
      <div style={{fontFamily: body, fontSize: 30, opacity: 0.9}}>938 CE · the stake trap</div>
    </div>
    </>
  );
};

export const FxSample: React.FC = () => {
  const f = useCurrentFrame();
  const fadeIn = interpolate(f, [0, 8], [0, 1], {extrapolateRight: 'clamp'});
  const fadeOut = interpolate(f, [FX_FRAMES - 10, FX_FRAMES], [1, 0], {extrapolateLeft: 'clamp'});
  return (
    <AbsoluteFill style={{backgroundColor: 'black'}}>
      <AbsoluteFill style={{opacity: fadeIn * fadeOut}}>
        <Sequence durationInFrames={CUT + XF}><ShotA /></Sequence>
        <Sequence from={CUT}>
          <AbsoluteFill style={{opacity: interpolate(f, [CUT, CUT + XF], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
            <ShotB />
          </AbsoluteFill>
        </Sequence>
        <Vignette />
        <Grain />
        <Label />
      </AbsoluteFill>
      {/* audio: narration, music bed, then layered SFX on the beats of the narration */}
      <Audio src={staticFile('l003/vo-42.wav')} volume={1} />
      <Audio src={staticFile('bgm/sb-the-fury.mp3')} startFrom={s(95)}
        volume={(fr) => 0.16 * interpolate(fr, [0, 15, FX_FRAMES - 20, FX_FRAMES], [0, 1, 1, 0], {extrapolateRight: 'clamp'})} />
      <Audio src={staticFile('sfxlib/fire.mp3')} volume={(fr) => interpolate(fr, [0, 20, CUT, FX_FRAMES], [0, 0.32, 0.32, 0.18])} />
      <Audio src={staticFile('sfxlib/crackle.mp3')} startFrom={s(20)} volume={0.32} />
      <Audio src={staticFile('sfxlib/waves.mp3')} startFrom={s(30)} volume={0.14} />
      <Sequence from={s(4.5)}><Audio src={staticFile('sfxlib/shiphit.mp3')} volume={0.6} /></Sequence>
      <Sequence from={s(4.6)}><Audio src={staticFile('sfxlib/debris.mp3')} volume={0.45} /></Sequence>
      <Sequence from={s(5.9)}><Audio src={staticFile('sfxlib/boom.mp3')} startFrom={s(4)} volume={(fr) => interpolate(fr, [0, 60, 80], [0.5, 0.3, 0], {extrapolateRight: 'clamp'})} /></Sequence>
    </AbsoluteFill>
  );
};
