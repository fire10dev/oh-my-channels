import React from "react";

export const FPS = 30;
export const DUR = 300; // 10 s, loop khớp: frame 300 ≡ frame 0

// Pha nhịp: trả về 0..1 trong mỗi phách. bpm phải chia hết cho 10 s để loop liền.
export const beatPhase = (frame: number, bpm: number) => ((frame / FPS) * bpm) / 60 % 1;
export const beatIndex = (frame: number, bpm: number) => Math.floor(((frame / FPS) * bpm) / 60);

// Nảy co giãn (squash & stretch): cao nhất giữa phách, chạm đất đầu phách.
export const bounce = (phase: number) => {
  const h = Math.sin(Math.PI * phase); // 0 → 1 → 0
  const squash = Math.exp(-phase * 14) * 0.18; // vừa chạm đất thì bẹt
  return { y: -h, sx: 1 + squash, sy: 1 - squash + h * 0.06 };
};

// Dao động tuần hoàn khớp loop: số vòng nguyên trong 10 s.
export const loopSin = (frame: number, cycles: number, offset = 0) =>
  Math.sin((2 * Math.PI * cycles * frame) / DUR + offset);

// Chớp mắt: nhắm 4 frame, lệch theo seed
export const isBlink = (frame: number, seed: number) => {
  const p = (frame + seed * 37) % 100;
  return p < 4;
};

type FaceProps = { x?: number; y?: number; scale?: number; blink?: boolean; ink?: string; cheek?: string; mouth?: "smile" | "o" };
export const Face: React.FC<FaceProps> = ({ x = 0, y = 0, scale = 1, blink, ink = "#2B1D14", cheek = "#FF8FA3", mouth = "smile" }) => (
  <g transform={`translate(${x},${y}) scale(${scale})`}>
    {blink ? (
      <>
        <path d="M-26,-6 q8,6 16,0" stroke={ink} strokeWidth={5} fill="none" strokeLinecap="round" />
        <path d="M10,-6 q8,6 16,0" stroke={ink} strokeWidth={5} fill="none" strokeLinecap="round" />
      </>
    ) : (
      <>
        <ellipse cx={-18} cy={-8} rx={7} ry={9} fill={ink} />
        <ellipse cx={18} cy={-8} rx={7} ry={9} fill={ink} />
        <circle cx={-15} cy={-12} r={2.6} fill="#fff" />
        <circle cx={21} cy={-12} r={2.6} fill="#fff" />
      </>
    )}
    <ellipse cx={-32} cy={8} rx={9} ry={6} fill={cheek} opacity={0.75} />
    <ellipse cx={32} cy={8} rx={9} ry={6} fill={cheek} opacity={0.75} />
    {mouth === "smile" ? (
      <path d="M-11,8 q11,12 22,0" stroke={ink} strokeWidth={5} fill="none" strokeLinecap="round" />
    ) : (
      <ellipse cx={0} cy={12} rx={6} ry={7} fill={ink} />
    )}
  </g>
);

// Ngôi sao n cánh (dùng cho quả khế, sao)
export const starPath = (n: number, R: number, r: number, round = 0) => {
  const pts: string[] = [];
  for (let i = 0; i < n * 2; i++) {
    const a = (Math.PI * i) / n - Math.PI / 2;
    const rad = i % 2 === 0 ? R : r;
    pts.push(`${(Math.cos(a) * rad).toFixed(1)},${(Math.sin(a) * rad).toFixed(1)}`);
  }
  void round;
  return `M${pts.join(" L")} Z`;
};
