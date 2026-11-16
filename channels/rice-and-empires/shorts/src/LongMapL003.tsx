// Animated antique-style map of the Red River region (schematic coastline, not a modern political map: no modern borders).
// World coords: x = (lon − 100) · 100, y = (26 − lat) · 100. Each state = camera + layers that draw/fade in.
import React from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {BRAND} from './Brand';

const P = (lon: number, lat: number): [number, number] => [(lon - 100) * 100, (26 - lat) * 100];
const path = (pts: [number, number][]) => pts.map(([lo, la], i) => `${i ? 'L' : 'M'}${P(lo, la).join(',')}`).join(' ');
const smooth = (pts: [number, number][]) => {
  const q = pts.map(([lo, la]) => P(lo, la));
  let d = `M${q[0].join(',')}`;
  for (let i = 1; i < q.length; i++) {
    const [x0, y0] = q[i - 1];
    const [x1, y1] = q[i];
    d += ` Q${x0},${y0} ${(x0 + x1) / 2},${(y0 + y1) / 2}`;
  }
  return d + ` L${q[q.length - 1].join(',')}`;
};

// Mainland coast, Guangzhou → Gulf of Tonkin → central coast → Mekong → Gulf of Thailand (approximate).
const COAST: [number, number][] = [
  [118, 24.5], [116.5, 23.0], [114.5, 22.5], [113.6, 22.2], [112.5, 21.8], [111.2, 21.5], [110.4, 21.2], [110.2, 20.4], [109.9, 20.4],
  [109.7, 21.4], [108.6, 21.7], [107.8, 21.5], [107.2, 21.2], [106.8, 20.9], [106.5, 20.4], [106.1, 19.9], [105.8, 19.3], [105.7, 18.8],
  [106.2, 18.1], [106.6, 17.5], [107.2, 16.8], [108.2, 16.1], [108.8, 15.3], [109.2, 13.9], [109.3, 12.6], [109.2, 11.6], [108.7, 11.1],
  [107.6, 10.5], [106.8, 10.2], [106.4, 9.6], [105.4, 8.8], [104.9, 8.6], [104.8, 9.6], [104.6, 10.3], [103.9, 10.6], [103.3, 10.6],
  [102.9, 11.7], [102.3, 12.2], [101.2, 12.7], [100.9, 13.4], [100.0, 13.5],
];
const LAND = path([[100, 26.5], [118, 26.5], ...COAST, [100, 13.5]]) + ' Z';
const HAINAN = path([[108.6, 19.2], [109.4, 18.3], [110.4, 18.6], [111.0, 19.6], [110.6, 20.1], [109.7, 20.1], [108.7, 19.6]]) + ' Z';
const RED_RIVER: [number, number][] = [[101.9, 24.6], [102.8, 23.6], [103.9, 22.6], [104.4, 22.2], [104.9, 21.7], [105.4, 21.3], [105.85, 21.03], [106.05, 20.65], [106.6, 20.25]];
const BACH_DANG: [number, number][] = [[106.3, 21.15], [106.55, 21.0], [106.75, 20.92], [106.85, 20.8]];

type Cam = {lon: number; lat: number; w: number};
const CAMS: Record<string, [Cam, Cam]> = {
  draw: [{lon: 104.6, lat: 22.2, w: 640}, {lon: 105.6, lat: 21.0, w: 520}],
  nanyue: [{lon: 109.6, lat: 22.4, w: 1350}, {lon: 109.0, lat: 22.0, w: 1250}],
  han: [{lon: 106.3, lat: 19.6, w: 820}, {lon: 106.4, lat: 19.0, w: 900}],
  south: [{lon: 106.4, lat: 17.5, w: 1250}, {lon: 106.0, lat: 15.2, w: 1400}],
  annan: [{lon: 105.85, lat: 21.0, w: 520}, {lon: 105.85, lat: 21.0, w: 380}],
  nanzhao: [{lon: 103.2, lat: 23.3, w: 950}, {lon: 103.8, lat: 22.6, w: 900}],
  southernhan: [{lon: 109.6, lat: 22.2, w: 1350}, {lon: 109.2, lat: 21.9, w: 1250}],
  bachdang: [{lon: 106.9, lat: 20.8, w: 380}, {lon: 106.7, lat: 20.95, w: 260}],
  full: [{lon: 106.6, lat: 18.0, w: 1800}, {lon: 106.4, lat: 17.4, w: 2000}],
};

type Lbl = {lon: number; lat: number; t: string; big?: boolean; color?: string; at?: number};
const LABELS: Record<string, Lbl[]> = {
  draw: [{lon: 104.2, lat: 21.75, t: 'Red River', at: 0.35}, {lon: 105.78, lat: 19.83, t: 'Đông Sơn', at: 0.6}],
  nanyue: [{lon: 113.26, lat: 23.13, t: 'Panyu (Guangzhou)', big: true, at: 0.1}, {lon: 108.4, lat: 23.7, t: 'NANYUE', big: true, color: BRAND.vermilion, at: 0.5}, {lon: 105.85, lat: 21.03, t: 'Red River delta', at: 0.7}],
  han: [{lon: 105.85, lat: 21.03, t: 'Jiaozhi', big: true, at: 0.15}, {lon: 105.7, lat: 19.8, t: 'Jiuzhen', big: true, at: 0.35}, {lon: 107.2, lat: 16.7, t: 'Rinan', big: true, at: 0.55}],
  south: [{lon: 105.85, lat: 21.03, t: 'Han commanderies', color: BRAND.vermilion, at: 0.1}, {lon: 108.3, lat: 14.5, t: 'Linyi → Champa (later)', big: true, at: 0.4}, {lon: 105.6, lat: 10.4, t: 'Funan', big: true, at: 0.6}],
  annan: [{lon: 105.85, lat: 21.03, t: 'Annan seat (near today’s Hanoi)', big: true, at: 0.2}],
  nanzhao: [{lon: 100.4, lat: 25.3, t: 'NANZHAO (Yunnan)', big: true, color: BRAND.vermilion, at: 0.05}, {lon: 105.85, lat: 21.03, t: 'Annan', big: true, at: 0.6}],
  southernhan: [{lon: 113.26, lat: 23.13, t: 'SOUTHERN HAN', big: true, color: BRAND.vermilion, at: 0.1}, {lon: 105.85, lat: 21.03, t: 'Jinghai / Tĩnh Hải', big: true, at: 0.5}],
  bachdang: [{lon: 106.55, lat: 21.12, t: 'Bạch Đằng River', big: true, at: 0.15}, {lon: 107.15, lat: 20.55, t: 'Southern Han fleet', color: BRAND.vermilion, at: 0.45}],
  full: [{lon: 105.85, lat: 21.03, t: 'Red River region', big: true, color: BRAND.vermilion, at: 0.15}, {lon: 108.3, lat: 14.2, t: 'Champa', at: 0.45}, {lon: 105.2, lat: 12.6, t: 'Funan / Khmer lands', at: 0.6}],
};
// Arrows (from → to), drawn as brush strokes.
const ARROWS: Record<string, [number, number][][]> = {
  nanyue: [[[112.8, 22.9], [110.0, 22.6], [107.2, 21.6], [106.1, 21.1]]],
  nanzhao: [[[100.6, 25.1], [102.4, 23.9], [104.3, 22.3], [105.6, 21.2]]],
  southernhan: [[[112.8, 22.8], [110.6, 21.0], [108.2, 20.6], [107.0, 20.8]]],
  bachdang: [[[107.6, 20.35], [107.2, 20.6], [106.9, 20.85]]],
};
// Tinted zones: [lon, lat, radius°]
const ZONES: Record<string, [number, number, number][]> = {
  nanyue: [[112.0, 23.2, 2.4], [108.8, 22.6, 2.2], [105.9, 21.0, 1.3]],
  han: [[105.9, 21.0, 1.1], [105.7, 19.8, 0.9], [107.0, 17.0, 1.0]],
  south: [[105.9, 21.0, 1.1], [105.7, 19.8, 0.9], [107.0, 17.0, 0.9]],
  annan: [[105.85, 21.0, 0.9]],
  southernhan: [[112.5, 23.2, 2.4], [109.5, 22.6, 1.8]],
  full: [[105.9, 21.0, 1.3], [105.8, 19.5, 1.0], [107.0, 17.2, 0.9]],
};

export const RedRiverMap: React.FC<{state: string; frames: number; cinzel: string; body: string}> = ({state, frames, cinzel, body}) => {
  const f = useCurrentFrame();
  const p = interpolate(f, [0, frames], [0, 1], {extrapolateRight: 'clamp'});
  const ease = Easing.inOut(Easing.sin)(p);
  const [c0, c1] = CAMS[state] ?? CAMS.full;
  const cam = {lon: c0.lon + (c1.lon - c0.lon) * ease, lat: c0.lat + (c1.lat - c0.lat) * ease, w: c0.w + (c1.w - c0.w) * ease};
  const [cx, cy] = P(cam.lon, cam.lat);
  const h = (cam.w * 9) / 16;
  const k = cam.w / 1920; // world units per screen px → keep strokes/labels constant on screen
  const reveal = (at = 0) => interpolate(p, [at, at + 0.12], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const riverDraw = state === 'draw' ? interpolate(p, [0.05, 0.55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}) : 1;
  const pulse = 0.5 + 0.5 * Math.sin(f / 6);
  return (
    <svg width={1920} height={1080} viewBox={`${cx - cam.w / 2} ${cy - h / 2} ${cam.w} ${h}`} style={{position: 'absolute'}}>
      <defs>
        <filter id="rough"><feTurbulence baseFrequency="0.04" numOctaves={2} seed={3} /><feDisplacementMap in="SourceGraphic" scale={6 * k} /></filter>
        <pattern id="hatch" width={14 * k} height={14 * k} patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <line x1={0} y1={0} x2={0} y2={14 * k} stroke="#7a6040" strokeWidth={1.2 * k} strokeOpacity={0.55} />
        </pattern>
        <radialGradient id="zone"><stop offset="0%" stopColor={BRAND.vermilion} stopOpacity={0.42} /><stop offset="100%" stopColor={BRAND.vermilion} stopOpacity={0} /></radialGradient>
      </defs>
      {/* sea hatching */}
      <rect x={-500} y={-500} width={3000} height={3000} fill="#c9b98f" />
      <rect x={-500} y={-500} width={3000} height={3000} fill="url(#hatch)" />
      <path d={LAND} fill="#f0e2c0" stroke={BRAND.ink} strokeWidth={3 * k} filter="url(#rough)" />
      <path d={HAINAN} fill="#f0e2c0" stroke={BRAND.ink} strokeWidth={3 * k} filter="url(#rough)" />
      {/* mountains (decorative ^ marks in the north-west) */}
      {Array.from({length: 22}, (_, i) => {
        const [x, y] = P(100.6 + (i % 6) * 0.75 + (i % 2) * 0.3, 25.6 - Math.floor(i / 6) * 0.8 - (i % 3) * 0.15);
        const s = 22 * k;
        return <path key={i} d={`M${x - s},${y + s * 0.6} L${x},${y - s * 0.6} L${x + s},${y + s * 0.6}`} fill="none" stroke="#6b5233" strokeWidth={1.8 * k} opacity={0.6} />;
      })}
      {(ZONES[state] ?? []).map(([lo, la, r], i) => {
        const [x, y] = P(lo, la);
        return <circle key={i} cx={x} cy={y} r={r * 100 * interpolate(p, [0.05 + i * 0.12, 0.35 + i * 0.12], [0.2, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} fill="url(#zone)" />;
      })}
      <path d={smooth(RED_RIVER)} fill="none" stroke="#3f6f86" strokeWidth={5 * k} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - riverDraw} />
      {state === 'bachdang' && <path d={smooth(BACH_DANG)} fill="none" stroke="#3f6f86" strokeWidth={6 * k} strokeLinecap="round" />}
      {state === 'bachdang' &&
        Array.from({length: 9}, (_, i) => {
          const [x, y] = P(106.62 + i * 0.022, 20.97 - i * 0.012);
          return <line key={i} x1={x} y1={y - 8 * k} x2={x} y2={y + 8 * k} stroke={BRAND.ink} strokeWidth={2.5 * k} opacity={reveal(0.55)} />;
        })}
      {(ARROWS[state] ?? []).map((a, i) => {
        const d = interpolate(p, [0.2, 0.7], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
        const end = P(...(a[a.length - 1] as [number, number]));
        return (
          <g key={i}>
            <path d={smooth(a)} fill="none" stroke={BRAND.vermilion} strokeWidth={7 * k} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - d} opacity={0.85} />
            <circle cx={end[0]} cy={end[1]} r={9 * k} fill={BRAND.vermilion} opacity={d > 0.95 ? 1 : 0} />
          </g>
        );
      })}
      {(LABELS[state] ?? []).map((l, i) => {
        const [x, y] = P(l.lon, l.lat);
        const o = reveal(l.at);
        const fs = (l.big ? 40 : 32) * k;
        return (
          <g key={i} opacity={o}>
            <circle cx={x} cy={y} r={(state === 'annan' ? 9 + pulse * 6 : 7) * k} fill={l.color ?? BRAND.ink} />
            <text x={l.lon > 111 ? x - 16 * k : x + 16 * k} y={y - 14 * k} textAnchor={l.lon > 111 ? 'end' : 'start'} fontFamily={l.big ? cinzel : body} fontWeight={700} fontSize={fs} fill={l.color ?? BRAND.ink} stroke="#efe0bc" strokeWidth={6 * k} paintOrder="stroke">
              {l.t}
            </text>
          </g>
        );
      })}
      {/* compass rose */}
      <g transform={`translate(${cx + cam.w / 2 - 130 * k},${cy - h / 2 + 140 * k}) scale(${k})`} opacity={0.75}>
        <circle r={70} fill="none" stroke={BRAND.ink} strokeWidth={2} />
        <polygon points="0,-90 12,0 0,90 -12,0" fill={BRAND.ink} />
        <polygon points="-90,0 0,12 90,0 0,-12" fill="#8a6a3f" />
        <text y={-100} textAnchor="middle" fontFamily={cinzel} fontSize={30} fill={BRAND.ink}>N</text>
      </g>
    </svg>
  );
};
