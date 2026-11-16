// Phương án A — "Vườn Nắng": 6–24 tháng. Nền kem, viền nâu đậm, màu phẳng tươi,
// dàn trái cây Việt (khế, thanh long, măng cụt, chôm chôm) nảy đúng phách 120 BPM.
import React from "react";
import { AbsoluteFill, Audio, staticFile, useCurrentFrame } from "remotion";
import { Face, beatPhase, bounce, isBlink, loopSin, starPath } from "./lib";

const INK = "#3B2A20";
const C = { bg: "#FFF3D6", sun: "#FFD45C", ground: "#9BD67A", ground2: "#7CC25E", star: "#F4D23A", dragon: "#F25C8A", dragonTip: "#7BC043", mang: "#6B3D7A", cap: "#4E9A3A", chom: "#E8413A" };
const BPM = 120;
const SW = 7; // độ dày viền cố định

const Khe: React.FC<{ blink: boolean }> = ({ blink }) => (
  <g>
    <path d={starPath(5, 120, 70)} fill={C.star} stroke={INK} strokeWidth={SW} strokeLinejoin="round" />
    <Face y={10} blink={blink} />
  </g>
);
const ThanhLong: React.FC<{ blink: boolean }> = ({ blink }) => (
  <g>
    {[-60, -20, 20, 60].map((a, i) => (
      <path key={i} d="M0,-40 q18,-40 0,-80 q-18,40 0,80" transform={`rotate(${a}) translate(0,-50)`} fill={C.dragonTip} stroke={INK} strokeWidth={SW - 2} strokeLinejoin="round" />
    ))}
    <ellipse rx={95} ry={115} fill={C.dragon} stroke={INK} strokeWidth={SW} />
    <Face y={10} blink={blink} cheek="#FFC2D4" />
  </g>
);
const MangCut: React.FC<{ blink: boolean }> = ({ blink }) => (
  <g>
    <circle r={105} fill={C.mang} stroke={INK} strokeWidth={SW} />
    <path d={starPath(4, 62, 26)} transform="translate(0,-100)" fill={C.cap} stroke={INK} strokeWidth={SW - 2} strokeLinejoin="round" />
    <Face y={15} blink={blink} ink="#FFF3D6" cheek="#FF9EC0" />
  </g>
);
const ChomChom: React.FC<{ blink: boolean; wiggle: number }> = ({ blink, wiggle }) => (
  <g>
    {Array.from({ length: 22 }, (_, i) => {
      const a = (i / 22) * Math.PI * 2;
      const len = 30 + 6 * Math.sin(i * 1.7 + wiggle);
      return (
        <path key={i} d={`M${Math.cos(a) * 92},${Math.sin(a) * 92} q${Math.cos(a + 0.6) * len * 0.6},${Math.sin(a + 0.6) * len * 0.6} ${Math.cos(a) * len},${Math.sin(a) * len}`}
          stroke={C.cap} strokeWidth={8} fill="none" strokeLinecap="round" transform={`translate(${Math.cos(a) * 0},0)`} />
      );
    })}
    <circle r={98} fill={C.chom} stroke={INK} strokeWidth={SW} />
    <Face y={10} blink={blink} cheek="#FFB0A8" />
  </g>
);

export const StyleA: React.FC = () => {
  const f = useCurrentFrame();
  const cast = [
    { el: (b: boolean) => <Khe blink={b} />, x: 330, off: 0 },
    { el: (b: boolean) => <ThanhLong blink={b} />, x: 750, off: 0.5 },
    { el: (b: boolean) => <MangCut blink={b} />, x: 1170, off: 0 },
    { el: (b: boolean) => <ChomChom blink={b} wiggle={f / 4} />, x: 1590, off: 0.5 },
  ];
  return (
    <AbsoluteFill style={{ backgroundColor: C.bg }}>
      <Audio src={staticFile("music-a.wav")} />
      <svg viewBox="0 0 1920 1080" width="100%" height="100%">
        {/* tia nắng quay chậm: 1 vòng / 10 s ⇒ loop khớp */}
        <g transform={`translate(960,250) rotate(${(f / 300) * 30})`}>
          {Array.from({ length: 12 }, (_, i) => (
            <path key={i} d="M-60,0 L0,-900 L60,0 Z" transform={`rotate(${i * 30})`} fill={C.sun} opacity={0.22} />
          ))}
        </g>
        <circle cx={960} cy={250} r={110 + 6 * loopSin(f, 5)} fill={C.sun} stroke={INK} strokeWidth={SW} />
        <Face x={960} y={255} scale={1.1} blink={isBlink(f, 9)} />
        {/* mặt đất 2 lớp, gợn lăn */}
        <path d={`M-20,820 L0,820 ${Array.from({ length: 9 }, (_, i) => `Q${i * 240 + 120},${790 + 18 * loopSin(f, 2, i)} ${(i + 1) * 240},820`).join(" ")} L1920,1080 L0,1080 Z`} fill={C.ground} stroke={INK} strokeWidth={SW} />
        <path d="M0,940 Q480,900 960,940 T1920,940 L1920,1080 L0,1080 Z" fill={C.ground2} />
        {cast.map((c, i) => {
          const ph = (beatPhase(f, BPM) + c.off) % 1;
          const b = bounce(ph);
          const tilt = 8 * loopSin(f, 10, i);
          return (
            <g key={i} transform={`translate(${c.x},${700 + b.y * 90})`}>
              <ellipse cx={0} cy={140 - b.y * 90} rx={90 - Math.abs(b.y) * 30} ry={14} fill={INK} opacity={0.15} />
              <g transform={`rotate(${tilt}) scale(${b.sx},${b.sy})`}>{c.el(isBlink(f, i))}</g>
            </g>
          );
        })}
      </svg>
    </AbsoluteFill>
  );
};
