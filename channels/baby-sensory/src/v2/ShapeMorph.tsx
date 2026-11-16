// Hướng 3 — "Hình khối biến hình": khối hình học to, màu đậm; vòng tròn lăn vào → nhún → BIẾN thành gà con.
// Cơ chế: bất ngờ + "ú òa" theo câu nhạc, nền đổi màu bằng vòng loang (không chớp).
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Easing } from "remotion";

const C = { teal: "#0E8F8A", tomato: "#F2542D", sun: "#FFC20E", navy: "#1D2D50", cream: "#FFF4E0", pink: "#FF8FAB" };

export const ShapeMorph: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const roll = interpolate(f, [0, 40], [-500, 960], { extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const squash = f > 40 && f < 62 ? Math.sin(((f - 40) / 22) * Math.PI * 3) * 0.12 * (1 - (f - 40) / 22) : 0;
  const pop = spring({ frame: f - 62, fps, config: { damping: 9, stiffness: 160 } });
  const wipe = interpolate(f, [62, 92], [0, 1400], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.quad) });
  const hop = f > 95 ? Math.abs(Math.sin(((f - 95) / 14) * Math.PI)) : 0;
  const cy = 600 - hop * 110;
  const wing = f > 95 ? Math.sin(((f - 95) / 7) * Math.PI) * 25 : 0;
  return (
    <AbsoluteFill style={{ backgroundColor: C.teal }}>
      <svg viewBox="0 0 1920 1080" width="100%" height="100%">
        {/* vòng loang đổi nền */}
        <circle cx={960} cy={600} r={wipe} fill={C.navy} />
        {/* hình nền: tam giác & bán nguyệt to, chuyển động chậm */}
        <g opacity={0.9}>
          <path d={`M${150 + Math.sin(f / 30) * 20},980 L${420 + Math.sin(f / 30) * 20},560 L${690 + Math.sin(f / 30) * 20},980 Z`} fill={C.tomato} />
          <path d="M1380,980 A240,240 0 0 1 1860,980 Z" fill={C.pink} transform={`rotate(${Math.sin(f / 25) * 6},1620,980)`} />
        </g>
        <rect x={0} y={980} width={1920} height={100} fill={C.cream} />
        {/* mảnh vụn hình học bung ra khi biến hình */}
        {f > 62 && Array.from({ length: 14 }, (_, i) => {
          const a = (i / 14) * Math.PI * 2;
          const d = 180 + pop * 380;
          const o = interpolate(f, [62, 110], [1, 0], { extrapolateRight: "clamp" });
          const x = 960 + Math.cos(a) * d, y = 600 + Math.sin(a) * d;
          return i % 2 ? <circle key={i} cx={x} cy={y} r={22} fill={C.sun} opacity={o} /> : <path key={i} d={`M${x},${y - 26} l24,42 l-48,0 Z`} fill={C.cream} opacity={o} transform={`rotate(${f * 4},${x},${y})`} />;
        })}
        {/* nhân vật: vòng tròn → gà con */}
        <g transform={`translate(${roll},${cy})`}>
          {/* chân */}
          <g opacity={pop} stroke={C.tomato} strokeWidth={16} strokeLinecap="round" fill="none">
            <path d={`M-50,${180 * pop} l0,${80 * pop} l-30,0 M50,${180 * pop} l0,${80 * pop} l30,0`} />
          </g>
          {/* cánh bán nguyệt */}
          <path d="M-200,40 A70,70 0 0 1 -200,-100 Z" fill={C.tomato} transform={`translate(${-60 * pop + 60},0) scale(${pop}) rotate(${wing},-200,-30)`} />
          <path d="M200,40 A70,70 0 0 0 200,-100 Z" fill={C.tomato} transform={`translate(${60 * pop - 60},0) scale(${pop}) rotate(${-wing},200,-30)`} />
          <g transform={`rotate(${f < 40 ? (roll / 230) * 57 : 0}) scale(${1 + squash},${1 - squash})`}>
            <circle r={230} fill={C.sun} />
            {/* sọc để thấy đang lăn; biến mất khi thành gà */}
            <path d="M-230,0 A230,230 0 0 1 230,0 Z" fill="#FFD84D" opacity={1 - pop} />
          </g>
          {/* mào + mỏ + mắt bật ra */}
          <g transform={`scale(${pop})`}>
            <path d="M-40,-225 a30,30 0 0 1 40,-30 a30,30 0 0 1 40,30 Z" fill={C.tomato} />
            <path d="M-45,10 L0,70 L45,10 Z" fill={C.tomato} />
            <circle cx={-75} cy={-50} r={34} fill={C.navy} />
            <circle cx={75} cy={-50} r={34} fill={C.navy} />
            <circle cx={-63} cy={-62} r={11} fill="#fff" />
            <circle cx={87} cy={-62} r={11} fill="#fff" />
            <circle cx={-130} cy={30} r={26} fill={C.pink} opacity={0.8} />
            <circle cx={130} cy={30} r={26} fill={C.pink} opacity={0.8} />
          </g>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
