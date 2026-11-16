// Hướng 2 — "Tranh Đông Hồ": nền giấy điệp ánh nhũ, viền khắc gỗ đen, màu phẳng đỏ son/vàng hoè/xanh chàm.
// Cơ chế: con vật được "in" từng lớp màu như ép ván khắc, rồi sống dậy nhảy múa.
import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, Easing } from "remotion";

const C = { paper: "#EFE3C8", ink: "#1E1A16", son: "#B83A2E", hoe: "#E3B23C", cham: "#2E4C78", luc: "#4F7B3A", hong: "#E58A73" };

const Defs: React.FC = () => (
  <defs>
    {/* giấy điệp: vân xơ + hạt nhũ ánh trai */}
    <filter id="diep">
      <feTurbulence type="fractalNoise" baseFrequency="0.012 0.3" numOctaves={3} seed={11} />
      <feColorMatrix type="matrix" values="0 0 0 0 0.55  0 0 0 0 0.45  0 0 0 0 0.3  0 0 0 0.22 0" />
    </filter>
    <filter id="nhu">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={1} seed={5} />
      <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 9 -7.6" />
    </filter>
    {/* mực in ván gỗ: loang không đều */}
    <filter id="woodink" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.06 0.5" numOctaves={2} seed={8} result="n" />
      <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.4 2.1" result="m" />
      <feComposite in="SourceGraphic" in2="m" operator="in" />
    </filter>
  </defs>
);

// "In" 1 lớp: rơi xuống hơi lệch rồi khớp
const usePrint = (f: number, at: number) => {
  const t = interpolate(f, [at, at + 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.back(2)) });
  return { opacity: t > 0 ? 1 : 0, transform: `translate(${(1 - t) * 14}px, ${(1 - t) * -10}px) scale(${1 + (1 - t) * 0.06})` };
};

// Âm dương xoáy trên mình lợn (hoạ tiết dân gian)
const Swirl: React.FC<{ x: number; y: number; r: number }> = ({ x, y, r }) => (
  <g transform={`translate(${x},${y})`}>
    <circle r={r} fill="#F4EBDA" />
    <path d={`M0,${-r} A${r / 2},${r / 2} 0 0 1 0,0 A${r / 2},${r / 2} 0 0 0 0,${r} A${r},${r} 0 0 1 0,${-r} Z`} fill={C.ink} />
    <circle cy={-r / 2} r={r / 7} fill={C.ink} />
    <circle cy={r / 2} r={r / 7} fill="#F4EBDA" />
  </g>
);

const Pig: React.FC<{ f: number; t0: number; s?: number }> = ({ f, t0, s = 1 }) => {
  const L1 = usePrint(f, t0), L2 = usePrint(f, t0 + 14), K = usePrint(f, t0 + 28);
  const body = "M-230,40 C-240,-90 -120,-150 20,-140 C140,-135 230,-80 240,0 C250,60 220,110 160,120 L-170,120 C-220,115 -232,85 -230,40 Z";
  return (
    <g transform={`scale(${s})`}>
      <g style={L1}><path d={body} fill="#3A3330" filter="url(#woodink)" /></g>
      <g style={L2}>
        <Swirl x={-60} y={-20} r={52} />
        <Swirl x={110} y={10} r={38} />
        <path d="M200,-40 C270,-50 290,10 250,30 Z" fill={C.hong} />
        <ellipse cx={-130} cy={-95} rx={22} ry={12} fill={C.son} transform="rotate(-20,-130,-95)" />
      </g>
      <g style={K} stroke={C.ink} strokeWidth={10} fill="none" strokeLinejoin="round" strokeLinecap="round">
        <path d={body} />
        <path d="M-150,120 l0,60 M-60,120 l0,60 M60,120 l0,60 M150,120 l0,60" strokeWidth={22} />
        <path d="M-230,10 C-280,-10 -290,40 -255,50" />
        <path d="M170,-110 l30,-50 l25,60" fill={C.ink} />
        <circle cx={185} cy={-45} r={9} fill={C.ink} />
        <path d="M150,-10 q25,20 50,5" />
      </g>
    </g>
  );
};

const Rooster: React.FC<{ f: number; t0: number }> = ({ f, t0 }) => {
  const L1 = usePrint(f, t0), L2 = usePrint(f, t0 + 12), K = usePrint(f, t0 + 24);
  return (
    <g>
      <g style={L1}>
        <path d="M-100,40 C-120,-60 -20,-90 30,-60 C40,-130 120,-140 130,-70 C140,-10 100,60 30,80 C-40,95 -95,80 -100,40 Z" fill={C.hoe} filter="url(#woodink)" />
        {[0, 1, 2, 3].map((i) => (
          <path key={i} d={`M-90,${-10 + i * 18} C-200,${-150 + i * 30} -230,${-60 + i * 40} -170,${40 + i * 15}`} stroke={[C.cham, C.luc, C.son, C.cham][i]} strokeWidth={30} fill="none" strokeLinecap="round" filter="url(#woodink)" />
        ))}
      </g>
      <g style={L2}>
        <path d="M70,-130 q15,-40 30,-5 q15,-35 30,5 q20,-25 20,15 Z" fill={C.son} />
        <path d="M128,-80 l45,12 l-45,14 Z" fill={C.hoe} />
        <path d="M110,-50 q15,30 -5,45 q-15,-25 5,-45 Z" fill={C.son} />
        <path d="M-40,0 C0,-30 50,-10 60,30 C20,50 -20,40 -40,0 Z" fill={C.son} />
      </g>
      <g style={K} stroke={C.ink} strokeWidth={8} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-100,40 C-120,-60 -20,-90 30,-60 C40,-130 120,-140 130,-70 C140,-10 100,60 30,80 C-40,95 -95,80 -100,40 Z" />
        <circle cx={100} cy={-85} r={7} fill={C.ink} />
        <path d="M0,85 l-10,70 l-25,10 M40,80 l10,75 l25,8" strokeWidth={10} />
      </g>
    </g>
  );
};

export const DongHo: React.FC = () => {
  const f = useCurrentFrame();
  const dance = f > 70 ? f - 70 : 0;
  const step = Math.sin((dance / 15) * Math.PI);
  return (
    <AbsoluteFill style={{ backgroundColor: C.paper }}>
      <svg viewBox="0 0 1920 1080" width="100%" height="100%">
        <Defs />
        <rect width={1920} height={1080} filter="url(#diep)" />
        <rect width={1920} height={1080} filter="url(#nhu)" opacity={0.5 + 0.3 * Math.sin(f / 9)} />
        {/* khung tranh in */}
        <rect x={60} y={60} width={1800} height={960} fill="none" stroke={C.ink} strokeWidth={14} />
        <rect x={84} y={84} width={1752} height={912} fill="none" stroke={C.son} strokeWidth={6} />
        {/* mây cuộn dân gian */}
        <g stroke={C.cham} strokeWidth={9} fill="none" strokeLinecap="round" opacity={0.85} transform={`translate(${Math.sin(f / 40) * 20},0)`}>
          <path d="M260,230 c0,-50 70,-50 70,0 c0,-40 60,-40 60,5 c35,0 35,45 0,45 l-130,0 c-35,0 -35,-50 0,-50" />
          <path d="M1380,200 c0,-50 70,-50 70,0 c0,-40 60,-40 60,5 c35,0 35,45 0,45 l-130,0 c-35,0 -35,-50 0,-50" />
        </g>
        <g transform={`translate(760,${640 - Math.abs(step) * 40}) rotate(${step * 4})`}>
          <Pig f={f} t0={4} />
        </g>
        <g transform={`translate(1420,${700 - Math.abs(Math.sin((dance / 15) * Math.PI + 1)) * 50}) rotate(${-step * 6})`}>
          <Rooster f={f} t0={30} />
        </g>
        {/* lợn con */}
        <g transform={`translate(320,${820 - Math.abs(Math.sin((dance / 10) * Math.PI)) * 50})`}>
          <Pig f={f} t0={44} s={0.42} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
