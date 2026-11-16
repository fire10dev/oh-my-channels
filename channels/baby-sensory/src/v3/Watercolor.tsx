// Bản thử v3 "Vườn Màu Nước": công thức kênh thắng (FORMULA.md) + style riêng màu nước, pastel, dễ thương.
// 120 BPM, 16 ô = 32 s = 960 frame. Ô = 60 frame, phách = 15 frame.
import React from "react";
import { AbsoluteFill, Audio, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig, Easing } from "remotion";

const BEAT = 15, BAR = 60;
const P = { paper: "#FBF6EC", ink: "#5A4646", blush: "#F49AA8", dragon: "#FFA9C8", dragonDeep: "#E07AA2", leaf: "#A9D7A0", leafDeep: "#7DBB7A", star: "#FFE38F", starDeep: "#EDC25E", chom: "#FFA99B", chomDeep: "#E9796B", mang: "#CDB0F0", mangDeep: "#9E7CC4", wash1: "#F9D3DE", wash2: "#CFE6F2", wash3: "#D8EDC8", sun: "#FFE7A8" };

// ---------- màu nước ----------
const Filters: React.FC = () => (
  <defs>
    <filter id="wc" x="-15%" y="-15%" width="130%" height="130%">
      <feTurbulence type="fractalNoise" baseFrequency="0.022" numOctaves={3} seed={7} result="warp" />
      <feDisplacementMap in="SourceGraphic" in2="warp" scale={9} result="bleed" />
      <feGaussianBlur in="bleed" stdDeviation={0.9} result="soft" />
      {/* hạt màu (granulation) */}
      <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves={2} seed={3} result="g" />
      <feColorMatrix in="g" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0 0" result="white" />
      <feColorMatrix in="g" type="matrix" values="0.22 0 0 0 0.82  0.22 0 0 0 0.82  0.22 0 0 0 0.82  0 0 0 0 1" result="gray" />
      <feBlend in="soft" in2="gray" mode="multiply" result="gran0" />
      <feComposite in="gran0" in2="soft" operator="in" result="gran" />
      {/* mép đậm (nước khô dồn màu ra rìa) */}
      <feMorphology in="soft" operator="erode" radius={3} result="inner" />
      <feComposite in="soft" in2="inner" operator="out" result="rim" />
      <feColorMatrix in="rim" type="matrix" values="0.8 0 0 0 0  0 0.72 0 0 0  0 0 0.8 0 0  0 0 0 0.75 0" result="rimD" />
      <feMerge><feMergeNode in="gran" /><feMergeNode in="rimD" /></feMerge>
    </filter>
    <filter id="wash" x="-30%" y="-30%" width="160%" height="160%">
      <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves={3} seed={12} result="w" />
      <feDisplacementMap in="SourceGraphic" in2="w" scale={60} result="d" />
      <feGaussianBlur in="d" stdDeviation={6} />
    </filter>
    <filter id="paper">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={3} seed={1} result="n" />
      <feDiffuseLighting in="n" surfaceScale={1.2} lightingColor="#FFFDF8" result="l"><feDistantLight azimuth={120} elevation={60} /></feDiffuseLighting>
      <feColorMatrix in="l" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0 0.18" />
    </filter>
    <radialGradient id="gDragon" cx="0.35" cy="0.3" r="0.8"><stop offset="0" stopColor="#FFD3E3" /><stop offset="0.6" stopColor={P.dragon} /><stop offset="1" stopColor={P.dragonDeep} /></radialGradient>
    <radialGradient id="gStar" cx="0.35" cy="0.3" r="0.8"><stop offset="0" stopColor="#FFF3C4" /><stop offset="0.6" stopColor={P.star} /><stop offset="1" stopColor={P.starDeep} /></radialGradient>
    <radialGradient id="gChom" cx="0.35" cy="0.3" r="0.8"><stop offset="0" stopColor="#FFD6CC" /><stop offset="0.6" stopColor={P.chom} /><stop offset="1" stopColor={P.chomDeep} /></radialGradient>
    <radialGradient id="gMang" cx="0.35" cy="0.3" r="0.8"><stop offset="0" stopColor="#EADCFA" /><stop offset="0.6" stopColor={P.mang} /><stop offset="1" stopColor={P.mangDeep} /></radialGradient>
    <filter id="blushF"><feGaussianBlur stdDeviation={5} /></filter>
  </defs>
);

type Mood = "smile" | "wink" | "oh" | "happy";
const moodAt = (f: number): Mood => (["smile", "wink", "oh", "happy"] as Mood[])[Math.floor(f / (BAR * 2)) % 4];

const Face: React.FC<{ mood: Mood; s?: number; mirror?: boolean; blink?: boolean }> = ({ mood, s = 1, mirror, blink }) => {
  const eye = (x: number, closedStyle: "line" | "arc" | null) =>
    closedStyle === "arc" ? <path d={`M${x - 13},2 q13,-14 26,0`} stroke={P.ink} strokeWidth={6} fill="none" strokeLinecap="round" />
      : closedStyle === "line" ? <path d={`M${x - 12},0 q12,8 24,0`} stroke={P.ink} strokeWidth={6} fill="none" strokeLinecap="round" />
        : (<g><ellipse cx={x} cy={0} rx={14} ry={18} fill={P.ink} /><circle cx={x + 4} cy={-6} r={5} fill="#fff" /><circle cx={x - 4} cy={5} r={2.2} fill="#fff" opacity={0.8} /></g>);
  const winkSide = mirror ? -1 : 1;
  const L = mood === "happy" ? "arc" : blink ? "line" : mood === "wink" && winkSide < 0 ? "line" : null;
  const R = mood === "happy" ? "arc" : blink ? "line" : mood === "wink" && winkSide > 0 ? "line" : null;
  return (
    <g transform={`scale(${s})`}>
      {eye(-34, L)}{eye(34, R)}
      <ellipse cx={-62} cy={28} rx={20} ry={12} fill={P.blush} opacity={0.6} filter="url(#blushF)" />
      <ellipse cx={62} cy={28} rx={20} ry={12} fill={P.blush} opacity={0.6} filter="url(#blushF)" />
      {mood === "oh" ? <ellipse cx={0} cy={30} rx={10} ry={12} fill={P.ink} />
        : <path d={mood === "happy" ? "M-16,22 q16,22 32,0 z" : "M-14,22 q14,16 28,0"} stroke={P.ink} strokeWidth={6} fill={mood === "happy" ? "#E9798A" : "none"} strokeLinecap="round" strokeLinejoin="round" />}
    </g>
  );
};

// ---------- dàn nhân vật (asset riêng) ----------
const Dragon: React.FC<{ mood: Mood; blink: boolean }> = ({ mood, blink }) => {
  // vảy thanh long: lá cong ra ngoài, gốc hồng, đầu xanh
  const bracts = [[-100, -125, -40], [100, -125, 40], [-128, 10, -70], [128, 10, 70], [-105, 125, -115], [105, 125, 115], [-60, -60, -20], [60, -60, 20], [-75, 60, -60], [75, 60, 60], [0, 150, 180]];
  return (
    <g>
      <g filter="url(#wc)">
        <path d="M0,-215 C-30,-260 -10,-290 0,-300 C20,-275 30,-250 0,-215 Z" fill={P.leafDeep} />
        <ellipse rx={150} ry={200} fill="url(#gDragon)" />
        {bracts.map(([x, y, a], i) => (
          <g key={i} transform={`translate(${x},${y}) rotate(${a})`}>
            <path d="M0,0 C22,-20 18,-55 0,-78 C-18,-55 -22,-20 0,0 Z" fill={P.dragonDeep} opacity={0.8} />
            <path d="M0,-40 C10,-50 8,-66 0,-78 C-8,-66 -10,-50 0,-40 Z" fill={P.leaf} />
          </g>
        ))}
        <ellipse cx={-55} cy={-95} rx={45} ry={30} fill="#FFFFFF" opacity={0.45} />
      </g>
      <g transform="translate(0,20)"><Face mood={mood} blink={blink} s={1.45} /></g>
    </g>
  );
};
const Star: React.FC<{ mood: Mood; mirror?: boolean; blink: boolean }> = ({ mood, mirror, blink }) => {
  const pts = Array.from({ length: 10 }, (_, i) => { const a = (Math.PI * i) / 5 - Math.PI / 2, r = i % 2 ? 62 : 128; return `${(Math.cos(a) * r).toFixed(1)},${(Math.sin(a) * r).toFixed(1)}`; }).join(" ");
  return (
    <g>
      <g filter="url(#wc)"><polygon points={pts} fill="url(#gStar)" stroke="url(#gStar)" strokeWidth={34} strokeLinejoin="round" /><circle cx={-30} cy={-40} r={26} fill="#fff" opacity={0.35} /></g>
      <g transform="translate(0,14)"><Face mood={mood} mirror={mirror} blink={blink} s={1.0} /></g>
    </g>
  );
};
const Chom: React.FC<{ mood: Mood; mirror?: boolean; blink: boolean; f: number }> = ({ mood, mirror, blink, f }) => (
  <g>
    <g filter="url(#wc)">
      {Array.from({ length: 18 }, (_, i) => { const a = (i / 18) * Math.PI * 2, w = Math.sin(f / 6 + i) * 6; return <path key={i} d={`M${Math.cos(a) * 95},${Math.sin(a) * 95} q${Math.cos(a + 0.7) * 26 + w},${Math.sin(a + 0.7) * 26} ${Math.cos(a) * 42},${Math.sin(a) * 42}`} stroke={i % 2 ? P.leafDeep : P.chomDeep} strokeWidth={12} fill="none" strokeLinecap="round" />; })}
      <circle r={110} fill="url(#gChom)" /><circle cx={-34} cy={-40} r={28} fill="#fff" opacity={0.35} />
    </g>
    <g transform="translate(0,6)"><Face mood={mood} mirror={mirror} blink={blink} s={1.0} /></g>
  </g>
);
const Mang: React.FC<{ mood: Mood; mirror?: boolean; blink: boolean }> = ({ mood, mirror, blink }) => (
  <g>
    <g filter="url(#wc)">
      <circle r={118} fill="url(#gMang)" />
      {Array.from({ length: 4 }, (_, i) => <ellipse key={i} rx={22} ry={48} fill={P.leaf} transform={`translate(0,-112) rotate(${i * 45 - 67}) translate(0,-30)`} />)}
      <rect x={-8} y={-190} width={16} height={46} rx={8} fill={P.leafDeep} />
      <circle cx={-38} cy={-36} r={30} fill="#fff" opacity={0.3} />
    </g>
    <g transform="translate(0,14)"><Face mood={mood} mirror={mirror} blink={blink} s={1.0} /></g>
  </g>
);

// ---------- dàn dựng theo công thức ----------
type Kind = "star" | "chom" | "mang";
const PAIRS: { kind: Kind; from: number; to: number }[] = [
  { kind: "star", from: 2 * BAR, to: 6 * BAR },
  { kind: "chom", from: 6 * BAR, to: 10 * BAR },
  { kind: "mang", from: 10 * BAR, to: 14 * BAR },
];
const renderSide = (k: Kind, mood: Mood, mirror: boolean, blink: boolean, f: number) =>
  k === "star" ? <Star mood={mood} mirror={mirror} blink={blink} /> : k === "chom" ? <Chom mood={mood} mirror={mirror} blink={blink} f={f} /> : <Mang mood={mood} mirror={mirror} blink={blink} />;

export const Watercolor: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ph = (f % BEAT) / BEAT; // pha phách
  const sway = Math.sin(((f / BEAT) * Math.PI)); // đổi hướng mỗi phách
  const dip = Math.exp(-((f % BAR) / BEAT) * 3) * 0.05; // nhún đầu ô
  const blink = (f % 97) < 4;
  const mood = moodAt(f);

  const heroIn = spring({ frame: f - 10, fps, config: { damping: 12, stiffness: 90 } });
  const heroY = interpolate(heroIn, [0, 1], [1300, 470]);
  const finale = f >= 14 * BAR;

  return (
    <AbsoluteFill style={{ backgroundColor: P.paper }}>
      <Audio src={staticFile("music-v3.wav")} />
      <svg viewBox="0 0 1920 1080" width="100%" height="100%">
        <Filters />
        {/* nền: các vệt loang lớn, thở chậm */}
        <g filter="url(#wash)" opacity={0.6}>
          <circle cx={360 + 20 * Math.sin(f / 90)} cy={260} r={330} fill={P.wash1} />
          <circle cx={1580} cy={300 + 20 * Math.sin(f / 80)} r={360} fill={P.wash2} />
          <ellipse cx={960} cy={1080} rx={1200} ry={250} fill={P.wash3} />
        </g>
        <g filter="url(#wc)" opacity={0.9}>
          <circle cx={1620} cy={190} r={90 + 4 * Math.sin(f / 20)} fill={P.sun} />
        </g>
        {/* hạt màu bay lên chậm */}
        {Array.from({ length: 16 }, (_, i) => {
          const x = (i * 131) % 1920, sp = 0.6 + (i % 5) * 0.15, y = 1120 - ((f * sp + i * 97) % 1200);
          return <circle key={i} cx={x + 18 * Math.sin(f / 40 + i)} cy={y} r={6 + (i % 4) * 3} fill={[P.wash1, P.wash2, P.star, P.mang][i % 4]} opacity={0.7} filter="url(#wc)" />;
        })}
        {/* cặp vai phụ đối xứng: lướt vào từ hai bên, nhảy 4 ô, lướt ra */}
        {PAIRS.map((p) => {
          if (f < p.from - 5 || f > p.to + 5) return null;
          const tin = spring({ frame: f - p.from, fps, config: { damping: 13, stiffness: 110 } });
          const tout = interpolate(f, [p.to - 22, p.to], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.in(Easing.cubic) });
          const off = (1 - tin) * 900 + tout * 900;
          return [-1, 1].map((side) => (
            <g key={p.kind + side} transform={`translate(${960 + side * (520 + off)},${640 - Math.abs(Math.sin(ph * Math.PI)) * 18}) rotate(${side * -8 * sway}) scale(${1 + dip},${1 - dip})`}>
              {renderSide(p.kind, mood, side < 0, blink, f)}
            </g>
          ));
        })}
        {/* finale: cả 3 cặp nhỏ xếp hàng dưới, nhún lệch phách */}
        {finale && (["star", "chom", "mang"] as Kind[]).flatMap((k, i) => [-1, 1].map((side) => {
          const t = spring({ frame: f - 14 * BAR - i * 6, fps, config: { damping: 12, stiffness: 120 } });
          const x = 960 + side * (330 + i * 210);
          const hop = Math.abs(Math.sin(((f / BEAT) + i * 0.33) * Math.PI)) * 30;
          return <g key={k + side} transform={`translate(${x},${interpolate(t, [0, 1], [1300, 830]) - hop}) scale(0.62) rotate(${side * -6 * sway})`}>{renderSide(k, mood, side < 0, blink, f)}</g>;
        }))}
        {/* vai chính giữa */}
        <g transform={`translate(960,${heroY - (finale ? 60 : 0)}) rotate(${6 * sway}) scale(${(finale ? 0.85 : 1) * (1 + dip)},${(finale ? 0.85 : 1) * (1 - dip)})`}>
          <Dragon mood={mood} blink={blink} />
        </g>
        <rect width={1920} height={1080} filter="url(#paper)" />
      </svg>
    </AbsoluteFill>
  );
};
