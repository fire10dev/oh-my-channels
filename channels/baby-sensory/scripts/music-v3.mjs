// Nhạc bản thử v3 "Vườn Màu Nước": disco-pop dễ thương, 120 BPM, 16 ô = 32 s, không lời.
// Cấu trúc theo công thức: ô 1–2 intro (chuông 3 nốt + hợp âm), 3–14 đầy đủ (hook 2 ô lặp),
// 15–16 tất cả cùng nhảy. Tiếng "pop" ở ô 3, 7, 11 khi cặp nhân vật vào.
// Chạy: node scripts/music-v3.mjs → public/music-v3.wav
import fs from "node:fs";

const SR = 44100, BPM = 120, SPB = 60 / BPM, BARS = 16, LEN = BARS * 4 * SPB, N = Math.round(SR * LEN);
const buf = new Float32Array(N * 2);
const midi = (m) => 440 * Math.pow(2, (m - 69) / 12);
const n2m = (s) => { const t = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }; return 12 * (parseInt(s.slice(-1)) + 1) + t[s[0]] + (s[1] === "#" ? 1 : 0); };

let seed = 3; const noise = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296) * 2 - 1;
function add(t0, dur, fn, gain, pan = 0) {
  const s0 = Math.round(t0 * SR), n = Math.round(dur * SR);
  const gl = gain * Math.cos(((pan + 1) * Math.PI) / 4), gr = gain * Math.sin(((pan + 1) * Math.PI) / 4);
  for (let i = 0; i < n; i++) { const k = s0 + i; if (k >= N) break; const v = fn(i / SR); buf[k * 2] += v * gl; buf[k * 2 + 1] += v * gr; }
}
const att = (t, a = 0.004) => (t < a ? t / a : 1);
const S = (f, t) => Math.sin(2 * Math.PI * f * t);
// nhạc cụ
const kick = () => (t) => S(50 + 90 * Math.exp(-t * 35), t) * Math.exp(-t * 8) * att(t, 0.002);
const clap = () => { let lp = 0; return (t) => { lp += 0.35 * (noise() - lp); const e = Math.exp(-t * 28) + 0.5 * Math.exp(-Math.max(0, t - 0.012) * 40) * (t > 0.012 ? 1 : 0); return (noise() - lp) * e; }; };
const hat = () => (t) => { const x = noise(); return x * Math.exp(-t * 90); };
const bass = (f) => (t) => att(t, 0.006) * (S(f, t) + 0.3 * S(2 * f, t) + 0.12 * S(3 * f, t)) * Math.exp(-t * 7);
const ep = (f) => (t) => att(t, 0.003) * (S(f, t) + 0.35 * S(2 * f, t) * Math.exp(-t * 6) + 0.15 * S(4.01 * f, t) * Math.exp(-t * 12)) * Math.exp(-t * 3.2) * (1 + 0.15 * S(5, t));
const flute = (f, d) => (t) => { const env = Math.min(1, t / 0.03) * Math.min(1, Math.max(0, (d - t) / 0.06)); const vib = 1 + 0.004 * S(5.5, t) * Math.min(1, t / 0.25); return env * (S(f * vib, t) + 0.18 * S(2 * f * vib, t) + 0.04 * noise()); };
const marimba = (f) => (t) => att(t) * (S(f, t) * Math.exp(-t * 6) + 0.3 * S(3.93 * f, t) * Math.exp(-t * 20));
const bell = (f) => (t) => att(t, 0.002) * (S(f, t) * Math.exp(-t * 1.5) + 0.4 * S(2.76 * f, t) * Math.exp(-t * 3) + 0.2 * S(5.4 * f, t) * Math.exp(-t * 6));
const pop = () => (t) => S(400 + 1400 * t * 8, t) * Math.exp(-t * 30) * att(t, 0.001);

const beat = (b) => b * SPB; // b tính từ 0
const chords = [["C3", "E4", "G4", "C5"], ["A2", "E4", "A4", "C5"], ["F2", "F4", "A4", "C5"], ["G2", "D4", "G4", "B4"]];

for (let bar = 0; bar < BARS; bar++) {
  const b0 = bar * 4, ch = chords[bar % 4];
  const intro = bar < 2, outro = bar >= 14;
  // trống
  for (let q = 0; q < 4; q++) {
    if (!intro) add(beat(b0 + q), 0.4, kick(), 0.55);
    add(beat(b0 + q + 0.5), 0.08, hat(), intro ? 0.06 : 0.1, 0.3);
    if (!intro && (q === 1 || q === 3)) add(beat(b0 + q), 0.25, clap(), 0.22, -0.1);
  }
  for (let s = 0; s < 16; s++) if (!intro && s % 2 === 1) add(beat(b0 + s / 4), 0.04, hat(), 0.035, -0.4);
  // bass quãng 8 kiểu disco (móc 8 phách)
  const r = midi(n2m(ch[0]));
  for (let e = 0; e < 8; e++) if (!intro) add(beat(b0 + e / 2), 0.35, bass(e % 2 ? r * 2 : r), 0.42);
  // hợp âm EP: phách 1 + nghịch phách 2.5, 4
  for (const at of [0, 1.5, 3]) for (const nn of ch.slice(1)) add(beat(b0 + at), 1.4, ep(midi(n2m(nn))), 0.07, 0.15);
}
// hook 2 ô (8 phách) — ngũ cung C, lặp ô 3–14, ô 15–16 lên quãng 8 với chuông
const hook = [[0, "E5", 0.5], [0.5, "G5", 0.5], [1, "A5", 1], [2, "G5", 0.5], [2.5, "E5", 0.5], [3, "D5", 1], [4, "E5", 0.5], [4.5, "G5", 0.5], [5, "C6", 0.75], [5.75, "A5", 0.25], [6, "G5", 1.5]];
const hook2 = [[0, "E5", 0.5], [0.5, "G5", 0.5], [1, "A5", 1], [2, "C6", 0.5], [2.5, "A5", 0.5], [3, "G5", 1], [4, "E5", 0.5], [4.5, "D5", 0.5], [5, "C5", 1], [6, "D5", 0.5], [6.5, "E5", 1.5]];
for (let bar = 2; bar < 16; bar += 2) {
  const h = (bar / 2) % 2 ? hook2 : hook;
  for (const [b, nn, d] of h) {
    const f = midi(n2m(nn));
    if (bar < 14) { add(beat(bar * 4 + b), d * SPB + 0.1, flute(f, d * SPB + 0.1), 0.2, -0.1); add(beat(bar * 4 + b), 0.8, marimba(f), 0.14, 0.25); }
    else { add(beat(bar * 4 + b), 1.6, bell(f * 2), 0.12, 0.2); add(beat(bar * 4 + b), d * SPB + 0.1, flute(f, d * SPB + 0.1), 0.22, -0.1); }
  }
}
// âm hiệu 3 nốt + pop khi cặp vào
[["C6", 0], ["E6", 0.5], ["G6", 1]].forEach(([nn, b]) => add(beat(b), 2, bell(midi(n2m(nn))), 0.2, 0));
for (const bar of [0, 2, 6, 10, 14]) add(beat(bar * 4) + (bar === 0 ? 0.0 : 0), 0.2, pop(), 0.15, bar % 4 ? 0.4 : -0.4);

// reverb nhẹ + chuẩn hoá đỉnh, độ to chỉnh lại bằng ffmpeg sau
const rev = new Float32Array(buf.length);
for (const [d, g] of [[0.071, 0.18], [0.113, 0.13], [0.167, 0.09], [0.241, 0.06]]) { const off = Math.round(d * SR) * 2; for (let i = 0; i + off < buf.length; i++) rev[i + off] += buf[i] * g; }
let peak = 0; for (let i = 0; i < buf.length; i++) { buf[i] += rev[i]; peak = Math.max(peak, Math.abs(buf[i])); }
const g = 0.89 / peak, out = Buffer.alloc(44 + buf.length * 2);
out.write("RIFF", 0); out.writeUInt32LE(36 + buf.length * 2, 4); out.write("WAVEfmt ", 8); out.writeUInt32LE(16, 16); out.writeUInt16LE(1, 20); out.writeUInt16LE(2, 22);
out.writeUInt32LE(SR, 24); out.writeUInt32LE(SR * 4, 28); out.writeUInt16LE(4, 32); out.writeUInt16LE(16, 34); out.write("data", 36); out.writeUInt32LE(buf.length * 2, 40);
for (let i = 0; i < buf.length; i++) out.writeInt16LE(Math.round(Math.max(-1, Math.min(1, buf[i] * g)) * 32767), 44 + i * 2);
fs.writeFileSync("public/music-v3-raw.wav", out);
console.log("len", LEN, "s");
