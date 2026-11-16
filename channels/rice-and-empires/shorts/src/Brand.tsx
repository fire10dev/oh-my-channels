import {loadFont as loadCinzel} from '@remotion/google-fonts/Cinzel';
import {loadFont as loadBVP} from '@remotion/google-fonts/BeVietnamPro';
import {AbsoluteFill, Img, staticFile} from 'remotion';

const {fontFamily: cinzel} = loadCinzel('normal', {weights: ['700', '900'], subsets: ['latin']});
const {fontFamily: body} = loadBVP('normal', {weights: ['500', '600'], subsets: ['latin', 'vietnamese']});

// Brand constants: fixed across every video; only the illustration style rotates (lacquer / old map / watercolor).
export const BRAND = {
  lacquer: '#0d0a07',
  gold: '#d4a648',
  goldLight: '#f0cf7a',
  vermilion: '#b8321e',
  parchment: '#ead9b5',
  ink: '#2b1d10',
};

// Dong Son bronze drum sun: 14-ray star + rings. Pure SVG so it stays crisp at 98 px.
const DrumStar: React.FC<{size: number}> = ({size}) => {
  const c = 400;
  const rays = 14;
  const star = Array.from({length: rays * 2}, (_, i) => {
    const r = i % 2 === 0 ? 300 : 120;
    const a = (Math.PI * i) / rays - Math.PI / 2;
    return `${c + r * Math.cos(a)},${c + r * Math.sin(a)}`;
  }).join(' ');
  const dots = (radius: number, n: number, r: number) =>
    Array.from({length: n}, (_, i) => {
      const a = (2 * Math.PI * i) / n;
      return <circle key={`${radius}-${i}`} cx={c + radius * Math.cos(a)} cy={c + radius * Math.sin(a)} r={r} fill={BRAND.gold} />;
    });
  return (
    <svg width={size} height={size} viewBox="0 0 800 800">
      <defs>
        <radialGradient id="bg" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#2a1c10" />
          <stop offset="100%" stopColor={BRAND.lacquer} />
        </radialGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={BRAND.goldLight} />
          <stop offset="100%" stopColor="#a87a26" />
        </linearGradient>
      </defs>
      <rect width="800" height="800" fill="url(#bg)" />
      <circle cx={c} cy={c} r={372} fill="none" stroke="url(#gold)" strokeWidth={10} />
      <circle cx={c} cy={c} r={348} fill="none" stroke="url(#gold)" strokeWidth={3} />
      {dots(328, 56, 5)}
      <polygon points={star} fill="url(#gold)" />
      {/* Center boss: lacquer black, not red — red + gold star reads as a national flag (objective channel). */}
      <circle cx={c} cy={c} r={72} fill={BRAND.lacquer} stroke="url(#gold)" strokeWidth={10} />
      <circle cx={c} cy={c} r={40} fill="none" stroke="url(#gold)" strokeWidth={4} />
      {dots(208, 28, 6)}
    </svg>
  );
};

export const Avatar: React.FC = () => (
  <AbsoluteFill>
    <DrumStar size={800} />
  </AbsoluteFill>
);

const Slice: React.FC<{src: string; left: number; width: number; pos: string; mask: string}> = ({src, left, width, pos, mask}) => (
  <div style={{position: 'absolute', top: 0, left, width, height: 1440, WebkitMaskImage: mask, maskImage: mask}}>
    <Img src={staticFile(src)} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos}} />
  </div>
);

// 2560x1440. Visible on all devices: center 1546x423 (x 507–2053, y 508–931). Title sits inside it.
export const Banner: React.FC = () => (
  <AbsoluteFill style={{background: BRAND.lacquer}}>
    <Slice src="brand/lacquer.jpg" left={0} width={1050} pos="18% 50%" mask="linear-gradient(90deg, #000 78%, transparent 100%)" />
    <Slice src="brand/watercolor.jpg" left={1510} width={1050} pos="88% 50%" mask="linear-gradient(270deg, #000 78%, transparent 100%)" />
    <Slice
      src="brand/oldmap.jpg"
      left={700}
      width={1160}
      pos="50% 50%"
      mask="linear-gradient(90deg, transparent 0%, #000 16%, #000 84%, transparent 100%)"
    />
    <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center'}}>
      <div
        style={{
          padding: '34px 70px 30px',
          background: 'radial-gradient(ellipse at center, rgba(234,217,181,0.92) 0%, rgba(234,217,181,0.75) 60%, rgba(234,217,181,0) 100%)',
          textAlign: 'center',
        }}
      >
        <div style={{fontFamily: cinzel, fontWeight: 900, fontSize: 132, color: BRAND.ink, letterSpacing: 6, lineHeight: 1}}>
          RICE <span style={{color: BRAND.vermilion}}>&amp;</span> EMPIRES
        </div>
        <div style={{height: 4, width: 520, margin: '22px auto 18px', background: `linear-gradient(90deg, transparent, ${BRAND.gold}, transparent)`}} />
        <div style={{fontFamily: body, fontWeight: 600, fontSize: 40, color: BRAND.ink, letterSpacing: 1}}>
          The history of Vietnam &amp; Southeast Asia — told from every side
        </div>
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);

// Debug overlay: YouTube safe areas, only for previews.
export const BannerSafe: React.FC = () => (
  <AbsoluteFill>
    <Banner />
    <div style={{position: 'absolute', left: 0, top: 508, width: 2560, height: 423, outline: '4px dashed #0f0'}} />
    <div style={{position: 'absolute', left: 507, top: 508, width: 1546, height: 423, outline: '6px solid #f0f'}} />
  </AbsoluteFill>
);
