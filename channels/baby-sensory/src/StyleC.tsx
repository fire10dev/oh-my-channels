// Phương án C — "Giấy Cắt": 6–24 tháng, êm hơn A. Màu pastel, lớp giấy có bóng đổ + vân giấy,
// con vật quê (vịt, cá, chim) lắc lư theo 96 BPM (16 phách / 10 s).
import React from "react";
import { AbsoluteFill, Audio, staticFile, useCurrentFrame } from "remotion";
import { Face, isBlink, loopSin } from "./lib";

const P = { sky: "#CFEAE6", cloud: "#FFFDF7", hill1: "#B9DDA0", hill2: "#8FC79A", hill3: "#6FB38C", pond: "#8CC8E8", duck: "#FFD866", beak: "#FF9A3D", fish: "#FF8A80", bird: "#B39DDB", sun: "#FFC9A8", ink: "#4A3B52" };

const Paper: React.FC<{ children: React.ReactNode }> = ({ children }) => <g filter="url(#paper)">{children}</g>;

const Duck: React.FC<{ blink: boolean }> = ({ blink }) => (
  <g>
    <path d="M-150,20 C-150,-60 -40,-70 20,-30 C40,-120 170,-120 170,-30 C170,30 120,60 60,70 L-100,70 C-140,70 -150,50 -150,20 Z" fill={P.duck} />
    <path d="M160,-40 q55,5 60,25 q-30,15 -60,5 Z" fill={P.beak} />
    <path d="M-80,10 q60,-40 110,10 q-60,25 -110,-10 Z" fill="#FFC94A" />
    <Face x={105} y={-45} scale={1.05} blink={blink} ink={P.ink} />
  </g>
);
const Fish: React.FC<{ blink: boolean; tail: number }> = ({ blink, tail }) => (
  <g>
    <path d={`M-90,0 L-150,${-45 + tail} L-150,${45 + tail} Z`} fill={P.fish} />
    <ellipse rx={100} ry={62} fill={P.fish} />
    <path d="M-20,-60 q30,-40 60,0 Z" fill="#FF6F61" />
    <Face x={35} y={-5} scale={0.7} blink={blink} ink={P.ink} mouth="o" />
  </g>
);
const Bird: React.FC<{ wing: number }> = ({ wing }) => (
  <g>
    <ellipse rx={70} ry={50} fill={P.bird} />
    <path d={`M-10,-10 q-40,${-60 * wing} -90,${-20 * wing} q40,30 90,20 Z`} fill="#9575CD" />
    <path d="M65,-5 l30,8 l-30,8 Z" fill={P.beak} />
    <circle cx={35} cy={-15} r={7} fill={P.ink} />
  </g>
);
const Cloud: React.FC<{ x: number; y: number; s: number }> = ({ x, y, s }) => (
  <path transform={`translate(${x},${y}) scale(${s})`} d="M-120,30 C-150,30 -150,-20 -110,-20 C-100,-70 -20,-70 0,-35 C30,-80 110,-60 100,-10 C150,-10 150,30 110,30 Z" fill={P.cloud} />
);

export const StyleC: React.FC = () => {
  const f = useCurrentFrame();
  const sway = loopSin(f, 8); // 1 lần lắc / 2 phách
  const cloudShift = (f / 300) * 1920; // trôi đúng 1 màn hình / 10 s, 2 bản sao ⇒ liền mạch
  return (
    <AbsoluteFill style={{ backgroundColor: P.sky }}>
      <Audio src={staticFile("music-c.wav")} />
      <svg viewBox="0 0 1920 1080" width="100%" height="100%">
        <defs>
          <filter id="paper" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} seed={4} result="n" />
            <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.9 0.55" result="grain" />
            <feComposite in="grain" in2="SourceGraphic" operator="in" result="g2" />
            <feMerge result="tex"><feMergeNode in="SourceGraphic" /><feMergeNode in="g2" /></feMerge>
            <feDropShadow in="tex" dx={0} dy={8} stdDeviation={6} floodColor="#2E2440" floodOpacity={0.22} />
          </filter>
        </defs>
        <Paper>
          <circle cx={1600} cy={190} r={110 + 5 * loopSin(f, 4)} fill={P.sun} />
        </Paper>
        <g transform={`translate(${-cloudShift},0)`}>
          {[0, 1920].map((dx) => (
            <Paper key={dx}>
              <Cloud x={300 + dx} y={170} s={1} />
              <Cloud x={980 + dx} y={260} s={0.8} />
              <Cloud x={1500 + dx} y={120} s={0.6} />
            </Paper>
          ))}
        </g>
        {/* chim bay vòng cung, vỗ cánh theo phách */}
        <g transform={`translate(${960 + 600 * Math.sin((2 * Math.PI * f) / 300)},${330 + 60 * Math.sin((4 * Math.PI * f) / 300)}) scale(${Math.cos((2 * Math.PI * f) / 300) >= 0 ? 1 : -1},1)`}>
          <Paper><Bird wing={0.5 + 0.5 * loopSin(f, 16)} /></Paper>
        </g>
        <Paper><path d="M0,640 C300,520 600,560 900,620 C1200,680 1500,540 1920,600 L1920,1080 L0,1080 Z" fill={P.hill1} /></Paper>
        <Paper><path d="M0,760 C400,680 800,720 1100,770 C1400,820 1700,700 1920,740 L1920,1080 L0,1080 Z" fill={P.hill2} /></Paper>
        <Paper><ellipse cx={1320} cy={930} rx={520} ry={130} fill={P.pond} /></Paper>
        {/* cá nhảy lên khỏi ao 2 lần / 10 s */}
        {(() => {
          const t = (f % 150) / 150;
          const up = t < 0.5 ? Math.sin(Math.PI * t * 2) : 0;
          return (
            <g transform={`translate(${1150 + 340 * t},${960 - 230 * up}) rotate(${-40 + 80 * t})`}>
              <Paper><Fish blink={isBlink(f, 5)} tail={14 * loopSin(f, 16)} /></Paper>
            </g>
          );
        })()}
        <Paper><path d="M0,880 C300,840 500,860 700,900 C800,925 840,1000 880,1080 L0,1080 Z" fill={P.hill3} /></Paper>
        {/* vịt lắc lư bên trái */}
        <g transform={`translate(${430 + 30 * sway},${800 - 22 * Math.abs(loopSin(f, 8))}) rotate(${7 * sway})`}>
          <Paper><Duck blink={isBlink(f, 1)} /></Paper>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
