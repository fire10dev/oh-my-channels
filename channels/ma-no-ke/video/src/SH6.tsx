// SH6 "Mở nhẹ thôi con" — animatic 9:16 từ ảnh ep01 có sẵn (không vẽ mới).
import React from 'react';
import {AbsoluteFill, Audio, Img, Sequence, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig, Easing} from 'remotion';
import {loadFont} from '@remotion/google-fonts/BeVietnamPro';

const {fontFamily} = loadFont('normal', {weights: ['800'], subsets: ['vietnamese', 'latin']});
export const FPS = 30;
const W = 1080, H = 1920;
const f = (s: number) => Math.round(s * FPS);
const P = (p: string) => staticFile('sh6/' + p);

// ---------- dữ liệu ----------
type Line = {i: number; t: number; dur: number; text: string};
const DUR: Record<number, number> = {1: 1.736, 2: 5.881, 3: 6.572, 4: 3.488, 5: 5.741, 6: 2.824, 7: 4.619, 8: 3.659, 9: 3.824, 10: 6.408};
const TEXT: Record<number, string> = {
  1: 'Mở nhẹ thôi con. Nóng.',
  2: 'Khoan. Bảy giờ sáng. Ba trăm nghìn người đang xem. Và cái đầu của một bà cụ, nằm trong nồi cơm điện.',
  3: 'Đêm qua, con trai tôi lỡ đắp chăn kín cổ tôi. Mà ma lai bị đắp chăn lên cổ, thì cái đầu không về được.',
  4: 'Nên tôi trốn vào chỗ tối nhất, ấm nhất, tròn vừa một cái đầu.',
  5: 'Sáng ra, thằng Tùng làm đúng cái việc sáng nào nó cũng làm. Mở nồi, vo gạo. Ngay trước ống kính.',
  6: 'Nó đứng đơ. Ba trăm nghìn người, gõ cùng một câu.',
  7: 'Tùng! Ai dạy mày trùm kín chăn người già thế hả! Mẹ mày ngạt thở bây giờ!',
  8: 'Bà Hạnh giật phăng cái chăn. Gió lùa vào cổ. Vút một cái.',
  9: 'Đầu tôi về chỗ cũ. Thằng Tùng ngất. Ba trăm nghìn người, vỗ tay.',
  10: 'Vì sao đầu bà ấy lại ở trong nồi cơm? Bản đầy đủ ở video liên quan. Đăng ký đi, mai tao kể tiếp.',
};
const L = (i: number, t: number, file = i): Line & {file: number} => ({i, t, dur: DUR[file], text: TEXT[file], file});
const LINES = [L(1, 0.9), L(2, 4.4), L(3, 10.7), L(4, 17.6), L(5, 21.6), L(1, 27.95), L(6, 30.2), L(7, 34.5), L(8, 39.4), L(9, 43.4), L(10, 48.2)];

type Crop = {cx: number; cy: number; w: number};
type Shot = {
  img: string; sw: number; sh: number; t0: number; t1: number; a: Crop; b?: Crop;
  shake?: number; flash?: boolean; blur?: number; dark?: number;
};
const S = 2048, SH = 1152;
const full = (cx: number): Crop => ({cx, cy: SH / 2, w: 648});
const SHOTS: Shot[] = [
  {img: 'img/S28.png', sw: S, sh: SH, t0: 0, t1: 0.9, a: {cx: 1620, cy: 760, w: 520}, b: {cx: 1620, cy: 760, w: 470}},
  {img: 'img/B03.png', sw: 1344, sh: 1792, t0: 0.9, t1: 3.3, a: {cx: 672, cy: 896, w: 1008}, b: {cx: 690, cy: 800, w: 820}, flash: true, shake: 6},
  {img: 'img/S29.png', sw: S, sh: SH, t0: 3.3, t1: 4.4, a: {cx: 1480, cy: 430, w: 560}, b: {cx: 1480, cy: 420, w: 500}, shake: 4},
  {img: 'img/S26.png', sw: S, sh: SH, t0: 4.4, t1: 6.6, a: {cx: 950, cy: 560, w: 700}, b: {cx: 940, cy: 520, w: 600}},
  {img: 'img/S29.png', sw: S, sh: SH, t0: 6.6, t1: 10.5, a: full(720), b: {cx: 700, cy: 560, w: 540}},
  {img: 'img/S24.png', sw: S, sh: SH, t0: 10.5, t1: 14.6, a: full(560), b: full(1480)},
  {img: 'img/S18.png', sw: S, sh: SH, t0: 14.6, t1: 17.4, a: full(820), b: {cx: 800, cy: 600, w: 560}, dark: 0.15},
  {img: 'img/S18.png', sw: S, sh: SH, t0: 17.4, t1: 19.6, a: full(1500), blur: 10, dark: 0.5},
  {img: 'img/S27.png', sw: S, sh: SH, t0: 19.6, t1: 21.6, a: full(960), b: {cx: 950, cy: 520, w: 540}},
  {img: 'img/S28.png', sw: S, sh: SH, t0: 21.6, t1: 24.2, a: full(1050), b: full(1150)},
  {img: 'img/S28.png', sw: S, sh: SH, t0: 24.2, t1: 27.8, a: {cx: 1500, cy: 700, w: 700}, b: {cx: 1560, cy: 760, w: 480}},
  {img: 'img/B03.png', sw: 1344, sh: 1792, t0: 27.8, t1: 30.0, a: {cx: 690, cy: 800, w: 820}, b: {cx: 700, cy: 760, w: 760}, flash: true, shake: 10},
  {img: 'img/S29.png', sw: S, sh: SH, t0: 30.0, t1: 34.4, a: {cx: 1480, cy: 440, w: 620}, b: {cx: 1480, cy: 420, w: 520}},
  {img: 'img/S30.png', sw: S, sh: SH, t0: 34.4, t1: 36.9, a: full(520), b: {cx: 520, cy: 540, w: 560}, shake: 12},
  {img: 'img/S30.png', sw: S, sh: SH, t0: 36.9, t1: 39.4, a: full(900), b: full(1600)},
  {img: 'img/S30.png', sw: S, sh: SH, t0: 39.4, t1: 41.4, a: {cx: 1300, cy: 700, w: 600}, b: {cx: 1280, cy: 740, w: 520}},
  {img: 'img/S30.png', sw: S, sh: SH, t0: 41.4, t1: 43.2, a: full(1300), blur: 12, dark: 0.35},
  {img: 'img/S31.png', sw: S, sh: SH, t0: 43.2, t1: 45.5, a: full(470), b: {cx: 460, cy: 520, w: 560}},
  {img: 'img/S31.png', sw: S, sh: SH, t0: 45.5, t1: 48.2, a: {cx: 1450, cy: 720, w: 760}, b: {cx: 1450, cy: 720, w: 640}, shake: 5},
  {img: 'img/S27.png', sw: S, sh: SH, t0: 48.2, t1: 56, a: full(950), blur: 16, dark: 0.5},
];

type Cut = {img: string; t0: number; t1: number; from: [number, number, number]; to: [number, number, number]; size: number; bob?: boolean};
// [x, y, scale] — x,y là vị trí góc trái-trên của ảnh 2048×1152 trong khung, đơn vị px khung
const CUTS: Cut[] = [
  {img: 'img/cut_S11.png', t0: 17.4, t1: 19.6, from: [-250, 300, 1.3], to: [-1750, 520, 1.3], size: 2048},
  {img: 'img/cut_S11.png', t0: 41.4, t1: 43.2, from: [-1900, 150, 1.3], to: [-750, 650, 1.3], size: 2048},
  {img: 'img/cut_B02.png', t0: 48.2, t1: 56, from: [-32, 1920, 0.86], to: [-32, 560, 0.86], size: 1344, bob: true},
];

type Pop = {t0: number; t1: number; text: string; y: number; color?: string; size?: number};
const POPS: Pop[] = [
  {t0: 3.35, t1: 4.4, text: '300.000 NGƯỜI ĐANG XEM', y: 260, color: '#ffd84a', size: 66},
  {t0: 15.4, t1: 17.4, text: 'ĐẦU KHÔNG VỀ ĐƯỢC', y: 300, color: '#ff5a4a', size: 96},
  {t0: 21.7, t1: 24.2, text: '7:00 SÁNG', y: 300, color: '#ffd84a', size: 110},
  {t0: 50.6, t1: 56, text: 'XEM BẢN ĐẦY ĐỦ ↓', y: 230, color: '#ffd84a', size: 76},
  {t0: 52.8, t1: 56, text: 'ĐĂNG KÝ', y: 350, color: '#ffffff', size: 110},
];
const COMMENTS = [
  {t: 31.6, u: '@hoa.nguyen92', c: 'FILTER GÌ VẬY AD???'},
  {t: 32.2, u: '@tuan_bds', c: 'xin tên app!!!'},
  {t: 32.7, u: '@meow.meow', c: 'kỹ xảo đỉnh thật sự'},
  {t: 33.2, u: '@linh.tv', c: 'bà cụ diễn sâu quá'},
  {t: 33.6, u: '@khoa2k', c: 'ad ơi tutorial đi'},
];
const LIVE = [[0, 4.4], [21.6, 34.4]];

type Sfx = {t: number; file: string; vol?: number; dur?: number};
const SFX: Sfx[] = [
  {t: 0.4, file: 'lid', vol: 0.9}, {t: 3.3, file: 'pop', vol: 0.7}, {t: 4.35, file: 'braam', vol: 0.45, dur: 3},
  {t: 15.3, file: 'pop', vol: 0.6}, {t: 17.45, file: 'wind', vol: 0.7}, {t: 19.7, file: 'lid', vol: 0.6},
  {t: 21.65, file: 'pop', vol: 0.5}, {t: 27.75, file: 'lid', vol: 1}, {t: 41.4, file: 'whoosh', vol: 0.9},
  {t: 42.95, file: 'snap', vol: 0.8, dur: 1.2}, {t: 45.55, file: 'bassdown', vol: 0.7, dur: 2},
  {t: 46.9, file: 'cheer', vol: 0.45, dur: 2.6}, {t: 55.0, file: 'coc', vol: 1},
  ...COMMENTS.map((c) => ({t: c.t, file: 'pop', vol: 0.45})),
];
export const DURATION_S = 56;

// ---------- thành phần ----------
const ShotView: React.FC<{s: Shot}> = ({s}) => {
  const fr = useCurrentFrame();
  const n = f(s.t1 - s.t0);
  const p = interpolate(fr, [0, n], [0, 1], {extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic)});
  const b = s.b ?? s.a;
  const cx = s.a.cx + (b.cx - s.a.cx) * p, cy = s.a.cy + (b.cy - s.a.cy) * p, w = s.a.w + (b.w - s.a.w) * p;
  const h = (w * H) / W;
  const x = Math.min(Math.max(cx - w / 2, 0), s.sw - w), y = Math.min(Math.max(cy - h / 2, 0), s.sh - h);
  const k = W / w;
  const amp = s.shake ? s.shake * Math.max(0, 1 - fr / 12) : 0;
  const dx = amp * Math.sin(fr * 2.7), dy = amp * Math.cos(fr * 3.3);
  const flash = s.flash ? interpolate(fr, [0, 6], [0.85, 0], {extrapolateRight: 'clamp'}) : 0;
  return (
    <AbsoluteFill style={{overflow: 'hidden', background: '#0b0f1e'}}>
      <Img src={P(s.img)} style={{position: 'absolute', width: s.sw * k, height: s.sh * k, left: -x * k + dx, top: -y * k + dy,
        filter: s.blur ? `blur(${s.blur}px)` : undefined}} />
      {s.dark ? <AbsoluteFill style={{background: `rgba(5,8,20,${s.dark})`}} /> : null}
      {flash ? <AbsoluteFill style={{background: `rgba(255,255,255,${flash})`}} /> : null}
    </AbsoluteFill>
  );
};

const CutView: React.FC<{c: Cut}> = ({c}) => {
  const fr = useCurrentFrame();
  const n = f(c.t1 - c.t0);
  const p = c.bob
    ? spring({frame: fr, fps: FPS, config: {damping: 11, stiffness: 90}})
    : interpolate(fr, [0, n], [0, 1], {extrapolateRight: 'clamp', easing: Easing.inOut(Easing.quad)});
  const x = c.from[0] + (c.to[0] - c.from[0]) * p, y = c.from[1] + (c.to[1] - c.from[1]) * p, sc = c.from[2];
  const bob = c.bob ? Math.sin(fr / 9) * 10 : Math.sin(fr / 3) * 14;
  return <Img src={P(c.img)} style={{position: 'absolute', left: x, top: y + bob, width: c.size * sc, filter: 'drop-shadow(0 18px 30px rgba(0,0,0,.55))'}} />;
};

const stroke = (px: number) => ({WebkitTextStroke: `${px}px #000`, paintOrder: 'stroke fill' as const});

const PopView: React.FC<{p: Pop}> = ({p}) => {
  const fr = useCurrentFrame();
  const sc = spring({frame: fr, fps: FPS, config: {damping: 9, stiffness: 160}});
  return (
    <div style={{position: 'absolute', top: p.y, width: W, textAlign: 'center', fontFamily, fontWeight: 800, fontSize: p.size ?? 90,
      color: p.color ?? '#fff', transform: `scale(${sc}) rotate(${(1 - sc) * -6}deg)`, lineHeight: 1.05, ...stroke(14), padding: '0 40px', boxSizing: 'border-box'}}>
      {p.text}
    </div>
  );
};

const Comments: React.FC = () => {
  const fr = useCurrentFrame();
  const t = fr / FPS + 30.0;
  const shown = COMMENTS.filter((c) => c.t <= t);
  return (
    <div style={{position: 'absolute', left: 50, top: 760, width: 760, display: 'flex', flexDirection: 'column', gap: 18}}>
      {shown.map((c) => {
        const a = interpolate(t - c.t, [0, 0.18], [0, 1], {extrapolateRight: 'clamp'});
        return (
          <div key={c.u} style={{opacity: a, transform: `translateX(${(1 - a) * -60}px)`, background: 'rgba(10,10,20,.72)', borderRadius: 28, padding: '16px 26px', fontFamily}}>
            <div style={{color: '#9fd3ff', fontSize: 30, fontWeight: 800}}>{c.u}</div>
            <div style={{color: '#fff', fontSize: 46, fontWeight: 800}}>{c.c}</div>
          </div>
        );
      })}
    </div>
  );
};

const LiveBadge: React.FC = () => {
  const fr = useCurrentFrame();
  return (
    <div style={{position: 'absolute', top: 120, left: 60, display: 'flex', alignItems: 'center', gap: 14, background: '#e5252a', borderRadius: 14, padding: '8px 22px', fontFamily, fontWeight: 800, fontSize: 40, color: '#fff'}}>
      <div style={{width: 20, height: 20, borderRadius: 10, background: '#fff', opacity: Math.floor(fr / 15) % 2 ? 0.35 : 1}} />
      LIVE
    </div>
  );
};

// Phụ đề: tách câu theo dấu câu, chia thời gian theo số ký tự
const subChunks = (l: Line) => {
  const parts = l.text.split(/(?<=[.,!?])\s+/).filter(Boolean);
  const tot = parts.reduce((a, s) => a + s.length, 0);
  let acc = 0;
  return parts.map((s) => {
    const a = l.t + (acc / tot) * l.dur; acc += s.length;
    return {s, t0: a, t1: l.t + (acc / tot) * l.dur};
  });
};
const Sub: React.FC<{s: string}> = ({s}) => {
  const fr = useCurrentFrame();
  const sc = interpolate(fr, [0, 4], [0.9, 1], {extrapolateRight: 'clamp'});
  return (
    <div style={{position: 'absolute', top: 1430, width: W, padding: '0 70px', boxSizing: 'border-box', textAlign: 'center', fontFamily, fontWeight: 800,
      fontSize: 66, lineHeight: 1.18, color: '#fff', transform: `scale(${sc})`, ...stroke(12)}}>{s}</div>
  );
};

export const SH6: React.FC = () => {
  const music = (fr: number) => {
    const t = fr / FPS;
    if (t > 27.5 && t < 30.2) return 0; // lặng trước cú lật
    if (t > 55.5) return interpolate(t, [55.5, 56], [0.16, 0], {extrapolateRight: 'clamp'});
    return 0.16;
  };
  return (
    <AbsoluteFill style={{background: '#0b0f1e'}}>
      {SHOTS.map((s, k) => (
        <Sequence key={'s' + k} from={f(s.t0)} durationInFrames={f(s.t1) - f(s.t0)}><ShotView s={s} /></Sequence>
      ))}
      {CUTS.map((c, k) => (
        <Sequence key={'c' + k} from={f(c.t0)} durationInFrames={f(c.t1) - f(c.t0)}><CutView c={c} /></Sequence>
      ))}
      {LIVE.map(([a, b], k) => <Sequence key={'l' + k} from={f(a)} durationInFrames={f(b) - f(a)}><LiveBadge /></Sequence>)}
      <Sequence from={f(30.0)} durationInFrames={f(4.4)}><Comments /></Sequence>
      {POPS.map((p, k) => <Sequence key={'p' + k} from={f(p.t0)} durationInFrames={f(p.t1) - f(p.t0)}><PopView p={p} /></Sequence>)}
      {LINES.flatMap((l, k) => subChunks(l).map((c, j) => (
        <Sequence key={`sub${k}-${j}`} from={f(c.t0)} durationInFrames={Math.max(1, f(c.t1) - f(c.t0))}><Sub s={c.s} /></Sequence>
      )))}
      {LINES.map((l, k) => (
        <Sequence key={'v' + k} from={f(l.t)}><Audio src={P(`vo/${String(l.file).padStart(3, '0')}.wav`)} /></Sequence>
      ))}
      {SFX.map((s, k) => (
        <Sequence key={'x' + k} from={f(s.t)} durationInFrames={s.dur ? f(s.dur) : undefined}><Audio src={P(`sfx/${s.file}.wav`)} volume={s.vol ?? 1} /></Sequence>
      ))}
      <Audio src={P('music.wav')} volume={music} />
    </AbsoluteFill>
  );
};
