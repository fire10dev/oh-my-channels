// Tự tổng hợp nhạc loop 10 giây cho 3 phương án phong cách (không sample, không soundfont).
// Chạy: node scripts/music.mjs  → public/music-a.wav, music-b.wav, music-c.wav
import fs from "node:fs";

const SR = 44100;
const LEN = 10; // giây — loop khớp đúng 10 s
const N = SR * LEN;

const midi = (m) => 440 * Math.pow(2, (m - 69) / 12);
// Thang ngũ cung trưởng (C D E G A) — hợp giai điệu dân gian VN
const NOTE = { C4: 60, D4: 62, E4: 64, G4: 67, A4: 69, C5: 72, D5: 74, E5: 76, G5: 79, A5: 81, C6: 84, G3: 55, A3: 57, C3: 48, G2: 43, A2: 45, F3: 53, F2: 41, E3: 52, D3: 50 };

// Cộng 1 nốt vào buffer; tràn quá cuối thì vòng về đầu ⇒ loop liền mạch.
function addVoice(buf, startSec, durSec, fn, gain, pan = 0) {
  const s0 = Math.round(startSec * SR);
  const n = Math.round(durSec * SR);
  const gl = gain * Math.cos(((pan + 1) * Math.PI) / 4);
  const gr = gain * Math.sin(((pan + 1) * Math.PI) / 4);
  for (let i = 0; i < n; i++) {
    const v = fn(i / SR);
    const k = ((s0 + i) % N) * 2;
    buf[k] += v * gl;
    buf[k + 1] += v * gr;
  }
}

// Nhạc cụ ------------------------------------------------------------
const attack = (t, a = 0.004) => (t < a ? t / a : 1);
const marimba = (f) => (t) =>
  attack(t) * (Math.sin(2 * Math.PI * f * t) * Math.exp(-t * 5) + 0.35 * Math.sin(2 * Math.PI * f * 3.93 * t) * Math.exp(-t * 18) + 0.1 * Math.sin(2 * Math.PI * f * 9.2 * t) * Math.exp(-t * 40));
// Đàn t'rưng: tre rỗng, partial lệch, tắt nhanh hơn marimba
const trung = (f) => (t) =>
  attack(t, 0.002) * (Math.sin(2 * Math.PI * f * t) * Math.exp(-t * 7) + 0.5 * Math.sin(2 * Math.PI * f * 2.76 * t) * Math.exp(-t * 14) + 0.2 * Math.sin(2 * Math.PI * f * 5.4 * t) * Math.exp(-t * 30));
const bell = (f) => (t) =>
  attack(t, 0.002) * (Math.sin(2 * Math.PI * f * t) * Math.exp(-t * 1.6) + 0.4 * Math.sin(2 * Math.PI * f * 2.76 * t) * Math.exp(-t * 3) + 0.2 * Math.sin(2 * Math.PI * f * 5.4 * t) * Math.exp(-t * 6));
const musicBox = (f) => (t) => attack(t, 0.002) * (Math.sin(2 * Math.PI * f * t) + 0.25 * Math.sin(2 * Math.PI * f * 3 * t) * Math.exp(-t * 4)) * Math.exp(-t * 1.8);
const softBass = (f) => (t) => attack(t, 0.01) * (Math.sin(2 * Math.PI * f * t) + 0.15 * Math.sin(4 * Math.PI * f * t)) * Math.exp(-t * 3);
const pad = (f, dur) => (t) => {
  const env = Math.min(1, t / 0.6) * Math.min(1, Math.max(0, (dur - t) / 0.8));
  return env * (Math.sin(2 * Math.PI * f * t) + 0.5 * Math.sin(2 * Math.PI * f * 1.003 * t) + 0.3 * Math.sin(2 * Math.PI * f * 2 * t));
};
// Ukulele: Karplus–Strong
function uke(f) {
  const p = Math.max(2, Math.round(SR / f));
  let rnd = 12345;
  const line = Float32Array.from({ length: p }, () => ((rnd = (rnd * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff) * 2 - 1);
  const out = new Float32Array(SR * 2);
  let idx = 0;
  for (let i = 0; i < out.length; i++) {
    const a = line[idx], b = line[(idx + 1) % p];
    const v = 0.996 * 0.5 * (a + b);
    out[i] = a;
    line[idx] = v;
    idx = (idx + 1) % p;
  }
  return (t) => out[Math.min(out.length - 1, Math.floor(t * SR))];
}
let seed = 7;
const noise = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296) * 2 - 1;
const shaker = () => (t) => noise() * Math.exp(-t * 60) * attack(t, 0.003);
const softKick = () => (t) => Math.sin(2 * Math.PI * (55 + 60 * Math.exp(-t * 30)) * t) * Math.exp(-t * 9);

// Viết WAV ---------------------------------------------------------------
function writeWav(path, buf) {
  // reverb đơn giản: vài delay tắt dần (cũng vòng loop)
  const rev = new Float32Array(buf.length);
  const taps = [[0.083, 0.22], [0.127, 0.16], [0.191, 0.11], [0.263, 0.07]];
  for (const [d, g] of taps) {
    const off = Math.round(d * SR) * 2;
    for (let i = 0; i < buf.length; i++) rev[(i + off) % buf.length] += buf[i] * g;
  }
  for (let i = 0; i < buf.length; i++) buf[i] += rev[i];
  let peak = 0;
  for (const v of buf) peak = Math.max(peak, Math.abs(v));
  const g = 0.6 / peak; // đỉnh ≈ -4,4 dBFS, giữ êm tai
  const data = Buffer.alloc(44 + buf.length * 2);
  data.write("RIFF", 0); data.writeUInt32LE(36 + buf.length * 2, 4); data.write("WAVE", 8);
  data.write("fmt ", 12); data.writeUInt32LE(16, 16); data.writeUInt16LE(1, 20); data.writeUInt16LE(2, 22);
  data.writeUInt32LE(SR, 24); data.writeUInt32LE(SR * 4, 28); data.writeUInt16LE(4, 32); data.writeUInt16LE(16, 34);
  data.write("data", 36); data.writeUInt32LE(buf.length * 2, 40);
  for (let i = 0; i < buf.length; i++) data.writeInt16LE(Math.round(Math.max(-1, Math.min(1, buf[i] * g)) * 32767), 44 + i * 2);
  fs.writeFileSync(path, data);
}

// Bản nhạc: [beat, tên nốt, độ dài (beat)] ---------------------------------
function play(buf, bpm, seq, inst, gain, pan) {
  const spb = 60 / bpm;
  for (const [b, n, d] of seq) addVoice(buf, b * spb, Math.max(d * spb, 1.5), inst(midi(NOTE[n]), d * spb), gain, pan);
}

// A — Vườn Nắng: 120 BPM, 5 ô nhịp 4/4 = 20 beat = 10 s. Marimba + t'rưng, nảy vui.
{
  const buf = new Float32Array(N * 2);
  const mel = [[0,"E5",1],[1,"G5",1],[2,"A5",0.5],[2.5,"G5",0.5],[3,"E5",1],[4,"D5",1],[5,"E5",1],[6,"G5",2],
    [8,"A5",1],[9,"G5",1],[10,"E5",0.5],[10.5,"D5",0.5],[11,"C5",1],[12,"D5",1],[13,"E5",1],[14,"D5",2],
    [16,"E5",0.5],[16.5,"G5",0.5],[17,"A5",1],[18,"G5",1],[19,"C6",1]];
  play(buf, 120, mel, marimba, 0.5, -0.15);
  const echo = mel.filter((_, i) => i % 3 === 0).map(([b, n, d]) => [b + 0.5, n, d]);
  play(buf, 120, echo, trung, 0.22, 0.4);
  const bass = []; const roots = ["C3","C3","A2","G2","C3"];
  roots.forEach((r, bar) => { bass.push([bar*4, r, 1], [bar*4+2, r, 1]); });
  play(buf, 120, bass, softBass, 0.5, 0);
  for (let b = 0; b < 20; b++) { addVoice(buf, b*0.5, 0.2, softKick(), b % 2 === 0 ? 0.25 : 0.0001, 0); addVoice(buf, b*0.5+0.25, 0.1, shaker(), 0.05, 0.3); }
  writeWav("public/music-a.wav", buf);
}

// B — Tương Phản Êm (0–6 tháng): 3/4, 108 BPM, 6 ô = 18 beat = 10 s. Hộp nhạc + chuông + pad.
{
  const buf = new Float32Array(N * 2);
  const mel = [[0,"C6",1],[1,"G5",1],[2,"E5",1],[3,"A5",2],[5,"G5",1],[6,"E5",1],[7,"D5",1],[8,"C5",1],
    [9,"D5",2],[11,"E5",1],[12,"G5",1],[13,"A5",1],[14,"G5",1],[15,"E5",2],[17,"D5",1]];
  play(buf, 108, mel, musicBox, 0.45, 0.1);
  play(buf, 108, [[0,"C4",1],[3,"A3",1],[6,"G3",1],[9,"F3",1],[12,"A3",1],[15,"G3",1]], bell, 0.2, -0.3);
  const spb = 60/108;
  [["C4",0],["A3",6],["F3",9],["G3",15]].forEach(([n,b],i,arr)=>{ const end = i<arr.length-1? arr[i+1][1] : 18; addVoice(buf, b*spb, (end-b)*spb+0.6, pad(midi(NOTE[n]),(end-b)*spb+0.6), 0.08, 0); });
  writeWav("public/music-b.wav", buf);
}

// C — Giấy Cắt: 96 BPM, 4 ô 4/4 = 16 beat = 10 s. Ukulele + glockenspiel, lắc lư.
{
  const buf = new Float32Array(N * 2);
  const chords = [["C4","E4","G4"],["A3","C4","E4"],["F3","A3","C4"],["G3","D4","G4"]];
  const strum = [0, 1, 1.5, 2.5, 3];
  chords.forEach((ch, bar) => strum.forEach((s) => ch.forEach((n, j) => addVoice(buf, (bar*4+s)*0.625 + j*0.012, 1.5, uke(midi(NOTE[n])), 0.16, -0.25))));
  const mel = [[0,"G5",1.5],[1.5,"E5",0.5],[2,"G5",1],[3,"A5",1],[4,"E5",2],[6,"D5",1],[7,"C5",1],
    [8,"A5",1.5],[9.5,"G5",0.5],[10,"E5",1],[11,"G5",1],[12,"D5",2],[14,"E5",1],[15,"G5",1]];
  play(buf, 96, mel, bell, 0.3, 0.25);
  play(buf, 96, [[0,"C3",2],[4,"A2",2],[8,"F2",2],[12,"G2",2]], softBass, 0.45, 0);
  for (let b = 0; b < 32; b++) addVoice(buf, b*0.3125, 0.1, shaker(), b%2? 0.035:0.02, 0.35);
  writeWav("public/music-c.wav", buf);
}
console.log("ok");
