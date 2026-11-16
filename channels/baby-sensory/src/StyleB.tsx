// Phương án B — "Tương Phản Êm": 0–6 tháng. Nền TRẮNG (khác nền đen của đối thủ),
// chỉ đen–trắng–đỏ, hình to, chuyển động chậm theo ô nhịp 3/4 (108 BPM, 6 ô / 10 s).
import React from "react";
import { AbsoluteFill, Audio, staticFile, useCurrentFrame } from "remotion";
import { Face, isBlink, loopSin, starPath } from "./lib";

const K = "#111111";
const W = "#FFFFFF";
const R = "#E63946";

const Moon: React.FC<{ blink: boolean }> = ({ blink }) => (
  <g>
    <circle r={170} fill={W} stroke={K} strokeWidth={16} />
    <Face scale={3} y={10} blink={blink} ink={K} cheek={R} />
  </g>
);

const CheckerBall: React.FC<{ rot: number }> = ({ rot }) => (
  <g transform={`rotate(${rot})`}>
    <defs>
      <clipPath id="ballClip"><circle r={95} /></clipPath>
    </defs>
    <g clipPath="url(#ballClip)">
      <rect x={-100} y={-100} width={200} height={200} fill={W} />
      {Array.from({ length: 16 }, (_, i) => {
        const cx = (i % 4) - 2, cy = Math.floor(i / 4) - 2;
        return (cx + cy) % 2 === 0 ? <rect key={i} x={cx * 50} y={cy * 50} width={50} height={50} fill={K} /> : null;
      })}
    </g>
    <circle r={95} fill="none" stroke={K} strokeWidth={10} />
  </g>
);

export const StyleB: React.FC = () => {
  const f = useCurrentFrame();
  const bars = 6; // 6 ô nhịp trong 10 s
  const barPulse = 0.5 + 0.5 * loopSin(f, bars, -Math.PI / 2); // 0..1 mỗi ô
  return (
    <AbsoluteFill style={{ backgroundColor: W }}>
      <Audio src={staticFile("music-b.wav")} volume={0.55} />
      <svg viewBox="0 0 1920 1080" width="100%" height="100%">
        {/* vòng đồng tâm quay rất chậm sau mặt trăng */}
        <g transform={`translate(960,540) rotate(${(f / 300) * 60})`}>
          {Array.from({ length: 4 }, (_, i) => (
            <circle key={i} r={280 + i * 120} fill="none" stroke={K} strokeWidth={30} strokeDasharray={i % 2 ? "90 80" : "none"} />
          ))}
        </g>
        {/* nhân vật: Trăng Bông, trôi trái–phải 1 vòng/10 s */}
        <g transform={`translate(${960 + 40 * loopSin(f, 1)},${540 + 18 * loopSin(f, 2)}) rotate(${4 * loopSin(f, 1)})`}>
          <Moon blink={isBlink(f, 3)} />
        </g>
        {/* bóng ca-rô bay vòng tròn quanh màn hình (1 vòng/10 s) */}
        <g transform={`translate(${960 + 720 * Math.cos((2 * Math.PI * f) / 300)},${540 + 330 * Math.sin((2 * Math.PI * f) / 300)})`}>
          <CheckerBall rot={f * 1.2} />
        </g>
        {/* tim đỏ đập nhẹ theo ô nhịp */}
        <g transform={`translate(1650,170) scale(${1 + 0.12 * barPulse})`}>
          <path d="M0,40 C-90,-20 -60,-100 0,-55 C60,-100 90,-20 0,40 Z" transform="scale(1.4)" fill={R} stroke={K} strokeWidth={8} />
        </g>
        <g transform={`translate(270,900) rotate(${-(f / 300) * 72}) scale(${1 + 0.1 * (1 - barPulse)})`}>
          <path d={starPath(5, 110, 50)} fill={K} />
          <circle r={26} fill={R} />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
