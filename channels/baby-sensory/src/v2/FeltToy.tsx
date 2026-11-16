// Hướng 4 — "Đồ chơi len/gỗ": nhân vật vải nỉ có đường may, khối gỗ có vân, nền vải lanh.
// Cơ chế: khối gỗ rơi xếp chồng → tấm nỉ che gấu → gấu ló ra "ú òa".
// Bản thật sẽ dùng ảnh nỉ/gỗ chụp hoặc tạo bằng Muse; đây là xấp xỉ bằng filter SVG.
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Easing } from "remotion";

const C = { linen: "#EDE4D3", bear: "#B9825A", bearIn: "#E8C3A0", red: "#D9534F", blue: "#5B8DB8", green: "#79A86B", yellow: "#E9B949", thread: "#FFF8EC", wood: "#D8A86A", dark: "#3B2B22" };

const Defs: React.FC = () => (
  <defs>
    <filter id="felt" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves={2} seed={3} result="w" />
      <feDisplacementMap in="SourceGraphic" in2="w" scale={5} result="edge" />
      <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves={4} seed={9} result="fib" />
      <feDiffuseLighting in="fib" surfaceScale={1.6} lightingColor="#fff" result="lit"><feDistantLight azimuth={225} elevation={55} /></feDiffuseLighting>
      <feComposite in="lit" in2="edge" operator="in" result="litc" />
      <feBlend in="edge" in2="litc" mode="multiply" result="tex" />
      <feDropShadow in="tex" dx={0} dy={10} stdDeviation={8} floodColor="#3B2B22" floodOpacity={0.3} />
    </filter>
    <filter id="wood" x="-5%" y="-5%" width="110%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.006 0.09" numOctaves={3} seed={21} result="g" />
      <feColorMatrix in="g" type="matrix" values="0 0 0 0 0.45  0 0 0 0 0.28  0 0 0 0 0.14  0 0 0 0.55 0" result="grain" />
      <feComposite in="grain" in2="SourceGraphic" operator="in" result="gr" />
      <feMerge result="m"><feMergeNode in="SourceGraphic" /><feMergeNode in="gr" /></feMerge>
      <feDropShadow in="m" dx={0} dy={8} stdDeviation={5} floodColor="#3B2B22" floodOpacity={0.35} />
    </filter>
    <pattern id="linen" width={8} height={8} patternUnits="userSpaceOnUse">
      <rect width={8} height={8} fill={C.linen} />
      <path d="M0,4 h8 M4,0 v8" stroke="#D9CDB6" strokeWidth={1.4} />
    </pattern>
  </defs>
);

const Stitch: React.FC<{ d: string }> = ({ d }) => <path d={d} fill="none" stroke={C.thread} strokeWidth={4} strokeDasharray="12 9" strokeLinecap="round" opacity={0.9} />;

const Block: React.FC<{ x: number; y: number; color: string; letter: string }> = ({ x, y, color, letter }) => (
  <g transform={`translate(${x},${y})`}>
    <g filter="url(#wood)">
      <rect x={-90} y={-90} width={180} height={180} rx={16} fill={C.wood} />
      <rect x={-62} y={-62} width={124} height={124} rx={10} fill={color} />
    </g>
    <text x={0} y={34} textAnchor="middle" fontSize={96} fontWeight={800} fontFamily="Georgia" fill={C.thread}>{letter}</text>
  </g>
);

export const FeltToy: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const drop = (at: number) => spring({ frame: f - at, fps, config: { damping: 11, stiffness: 140 } });
  const cover = interpolate(f, [70, 95, 110, 122], [-1700, 0, 0, 1100], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) });
  const peek = f >= 110;
  const wig = peek ? Math.sin((f - 110) / 4) * 6 * Math.max(0, 1 - (f - 110) / 50) : 0;
  return (
    <AbsoluteFill>
      <svg viewBox="0 0 1920 1080" width="100%" height="100%">
        <Defs />
        <rect width={1920} height={1080} fill="url(#linen)" />
        {/* bàn gỗ */}
        <g filter="url(#wood)"><rect x={-20} y={880} width={1960} height={220} fill={C.wood} /></g>
        {/* khối gỗ xếp chồng */}
        {[{ x: 300, y: 790, c: C.red, l: "A", t: 0 }, { x: 490, y: 790, c: C.blue, l: "B", t: 12 }, { x: 395, y: 600, c: C.yellow, l: "C", t: 24 }].map((b) => (
          <g key={b.l} opacity={f >= b.t ? 1 : 0}><Block x={b.x} y={b.y - (1 - drop(b.t)) * 700} color={b.c} letter={b.l} /></g>
        ))}
        {/* gấu nỉ */}
        <g transform={`translate(1150,620) rotate(${wig})`}>
          <g filter="url(#felt)">
            <circle cx={-150} cy={-170} r={70} fill={C.bear} />
            <circle cx={150} cy={-170} r={70} fill={C.bear} />
            <ellipse rx={230} ry={210} fill={C.bear} />
            <circle cx={-150} cy={-170} r={36} fill={C.bearIn} />
            <circle cx={150} cy={-170} r={36} fill={C.bearIn} />
            <ellipse cy={60} rx={100} ry={80} fill={C.bearIn} />
            <ellipse cy={25} rx={34} ry={24} fill={C.dark} />
            {peek ? (<><circle cx={-75} cy={-40} r={24} fill={C.dark} /><circle cx={75} cy={-40} r={24} fill={C.dark} /></>) : (<><ellipse cx={-75} cy={-40} rx={22} ry={18} fill={C.dark} /><ellipse cx={75} cy={-40} rx={22} ry={18} fill={C.dark} /></>)}
            {peek ? <ellipse cy={95} rx={30} ry={26} fill={C.red} /> : <path d="M-25,80 q25,22 50,0" stroke={C.dark} strokeWidth={9} fill="none" />}
            <circle cx={-150} cy={45} r={30} fill="#E58C8A" opacity={0.7} />
            <circle cx={150} cy={45} r={30} fill="#E58C8A" opacity={0.7} />
          </g>
          <Stitch d="M-215,0 A215,195 0 1 1 215,0 A215,195 0 1 1 -215,0" />
          <Stitch d="M-86,60 A86,66 0 1 1 86,60 A86,66 0 1 1 -86,60" />
        </g>
        {/* tấm nỉ xanh che (ú…) rồi rút ra (…òa!) */}
        <g transform={`translate(${1150 + cover},620)`}>
          <g filter="url(#felt)"><path d="M-330,-300 C-200,-330 200,-330 330,-300 L340,320 C150,340 -150,340 -340,320 Z" fill={C.green} /></g>
          <Stitch d="M-300,-270 C-200,-295 200,-295 300,-270 L310,290 C150,305 -150,305 -310,290 Z" />
          {[[-160, -120], [80, -60], [-40, 120], [180, 160]].map(([x, y], i) => (
            <g key={i} filter="url(#felt)"><path d={`M${x},${y - 28} l9,19 l21,3 l-15,14 l4,21 l-19,-10 l-19,10 l4,-21 l-15,-14 l21,-3 Z`} fill={C.yellow} /></g>
          ))}
        </g>
      </svg>
    </AbsoluteFill>
  );
};
