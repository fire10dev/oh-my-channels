// Hướng 1 — "Phấn sáp của Pen": Pen vẽ, nét mực rung (line boil) + tô sáp lem viền.
// Cơ chế: nét vẽ tự hiện → tô màu → con vật sống dậy và nhảy cùng Pen.
import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, Easing } from "remotion";

const INK = "#2A2320";
const PAPER = "#FBF6EA";

// Mỗi 4 frame đổi seed ⇒ nét "sống" như hoạt hình vẽ tay
const Defs: React.FC<{ seed: number }> = ({ seed }) => (
  <defs>
    <filter id="boil">
      <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves={2} seed={seed} />
      <feDisplacementMap in="SourceGraphic" scale={6} />
    </filter>
    <filter id="crayon" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="1.4 0.12" numOctaves={2} seed={seed} result="n" />
      <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 2.2 -0.55" result="mask" />
      <feComposite in="SourceGraphic" in2="mask" operator="in" result="tex" />
      <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves={1} seed={seed + 3} result="w" />
      <feDisplacementMap in="tex" in2="w" scale={14} />
    </filter>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} seed={2} />
      <feColorMatrix type="matrix" values="0 0 0 0 0.45  0 0 0 0 0.38  0 0 0 0 0.3  0 0 0 0.16 0" />
    </filter>
  </defs>
);

// Con mèo vẽ 1 nét (path), tô sáp cam
const CAT = "M-120,60 C-140,-20 -110,-90 -80,-110 L-60,-170 L-20,-115 C10,-122 40,-122 70,-115 L110,-170 L125,-105 C160,-70 165,10 130,60 C100,105 -90,110 -120,60 Z";

export const PenCrayon: React.FC = () => {
  const f = useCurrentFrame();
  const seed = Math.floor(f / 4);
  const draw = interpolate(f, [10, 70], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) });
  const fill = interpolate(f, [70, 100], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const alive = f > 105;
  const hop = alive ? Math.abs(Math.sin(((f - 105) / 15) * Math.PI)) : 0;
  const penBob = Math.sin((f / 15) * Math.PI) * 8;
  return (
    <AbsoluteFill style={{ backgroundColor: PAPER }}>
      <svg viewBox="0 0 1920 1080" width="100%" height="100%">
        <Defs seed={seed} />
        <rect width={1920} height={1080} filter="url(#grain)" />
        {/* mặt trời sáp vàng góc trên */}
        <g filter="url(#crayon)"><circle cx={1640} cy={200} r={120} fill="#FFC531" /></g>
        <g filter="url(#boil)" stroke={INK} strokeWidth={6} fill="none" strokeLinecap="round">
          <circle cx={1640} cy={200} r={120} />
          {Array.from({ length: 10 }, (_, i) => {
            const a = (i / 10) * Math.PI * 2 + f / 60;
            return <line key={i} x1={1640 + Math.cos(a) * 150} y1={200 + Math.sin(a) * 150} x2={1640 + Math.cos(a) * 200} y2={200 + Math.sin(a) * 200} />;
          })}
          {/* đường đất vẽ tay */}
          <path d="M60,900 C400,880 700,915 1000,895 S1600,880 1860,905" />
        </g>
        {/* cỏ sáp xanh */}
        <g filter="url(#crayon)"><path d="M40,905 C400,885 700,920 1000,900 S1600,885 1880,910 L1880,1000 L40,1000 Z" fill="#7CCB5B" /></g>
        {/* Mèo: tô sáp (lem ra ngoài viền 1 chút) + nét mực vẽ dần */}
        <g transform={`translate(1060,${760 - hop * 120}) rotate(${alive ? Math.sin(f / 6) * 6 : 0})`}>
          <g filter="url(#crayon)" opacity={fill}>
            <path d={CAT} fill="#FF8A3D" transform="translate(8,6) scale(1.04)" />
            <path d="M-60,-20 l50,-6 M-50,20 l40,0 M60,-20 l-50,-6" stroke="#E0621B" strokeWidth={18} />
          </g>
          <g filter="url(#boil)" stroke={INK} strokeWidth={9} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d={CAT} pathLength={1} strokeDasharray="1 1" strokeDashoffset={draw} />
            {fill > 0.5 && (
              <>
                {alive ? <circle cx={-35} cy={-40} r={14} fill={INK} /> : <path d="M-50,-40 q15,-10 30,0" />}
                {alive ? <circle cx={45} cy={-40} r={14} fill={INK} /> : <path d="M30,-40 q15,-10 30,0" />}
                <path d="M-10,0 q15,18 30,0" />
                <path d="M-150,10 l-50,-10 M-150,30 l-50,10 M160,10 l50,-10 M160,30 l50,10" strokeWidth={6} />
              </>
            )}
          </g>
        </g>
        {/* Pen: ảnh gốc, lắc lư theo nhịp */}
        <g transform={`translate(330,${330 + penBob}) rotate(${Math.sin(f / 10) * 3})`}>
          <image href={staticFile("pen/pen_front.png")} x={0} y={0} width={290} height={605} />
        </g>
        {/* bút sáp đang vẽ: theo đầu nét */}
        {draw > 0.02 && draw < 0.98 && (
          <g transform={`translate(${1060 + 140 * Math.cos(draw * 6.28)},${700 + 90 * Math.sin(draw * 6.28)}) rotate(35)`}>
            <rect x={-14} y={-90} width={28} height={110} rx={6} fill="#FF8A3D" stroke={INK} strokeWidth={5} />
            <path d="M-14,20 L0,48 L14,20 Z" fill="#E0621B" stroke={INK} strokeWidth={5} />
          </g>
        )}
      </svg>
      {/* chữ viết tay nhỏ: tiếng mèo */}
      {alive && (
        <div style={{ position: "absolute", left: 1230, top: 470 - hop * 120, fontFamily: "Chalkboard SE, Comic Sans MS", fontSize: 72, color: INK, transform: "rotate(-8deg)" }}>meo!</div>
      )}
      <Img src={staticFile("pen/pen_front.png")} style={{ display: "none" }} />
    </AbsoluteFill>
  );
};
