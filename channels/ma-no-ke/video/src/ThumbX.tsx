// Thumbnail ghép 1280×720 (renderStill): nền crop + nhân vật cutout + chữ + phiếu in theo phối cảnh.
// Toạ độ crop/quad tính theo pixel ảnh gốc; cut/text tính theo khung composition (1280×720 hoặc 1080×1920 cho bìa short).
// bg.sw = bề rộng ảnh gốc (mặc định 2048; ảnh B dọc 1344). layers = ảnh phụ cắt vào ô box [x,y,w,h] (thumbnail ghép đôi). Không dùng chung với Story.tsx.
import React from 'react';
import {AbsoluteFill, Img, staticFile, useVideoConfig} from 'remotion';
import {loadFont} from '@remotion/google-fonts/BeVietnamPro';
import {loadFont as loadBangers} from '@remotion/google-fonts/Bangers';
import {loadFont as loadAnton} from '@remotion/google-fonts/Anton';

const {fontFamily} = loadFont('normal', {weights: ['700', '900'], subsets: ['vietnamese', 'latin']});
const FONTS: Record<string, string> = {
  bvp: fontFamily,
  bangers: loadBangers('normal', {weights: ['400'], subsets: ['vietnamese', 'latin']}).fontFamily,
  anton: loadAnton('normal', {weights: ['400'], subsets: ['vietnamese', 'latin']}).fontFamily,
};
const W0 = 1280, H0 = 720;
type P = [number, number];

export type ThumbXProps = {
  bg: {src: string; crop: [number, number, number]; sw?: number; filter?: string}; // x, y, width trong ảnh gốc
  layers?: {src: string; sw?: number; crop: [number, number, number]; box: [number, number, number, number]; filter?: string; border?: string}[];
  shade?: string;
  cuts?: {src: string; x: number; y: number; h: number; flip?: boolean; glow?: string}[];
  texts?: {t: string; x: number; y: number; size: number; color?: string; rot?: number; anchor?: 'l' | 'c' | 'r'; box?: string;
    font?: string; rough?: boolean; sw?: number; band?: string; under?: string; stamp?: string}[]; // stamp = màu con dấu (khung + chữ trên nền giấy ngà)
  card?: {quad: [P, P, P, P]; w: number; h: number; lines: {t: string; size: number; color: string; weight?: number}[]};
};

const stroke = (w: number, c: string) =>
  Array.from({length: 16}, (_, i) => {
    const a = (i / 16) * Math.PI * 2;
    return `${(Math.cos(a) * w).toFixed(1)}px ${(Math.sin(a) * w).toFixed(1)}px 0 ${c}`;
  }).join(',');

// Homography: hình chữ nhật w×h → tứ giác (TL, TR, BR, BL), xuất CSS matrix3d.
const quadMatrix = (w: number, h: number, q: [P, P, P, P]) => {
  const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = q;
  const sx = x0 - x1 + x2 - x3, sy = y0 - y1 + y2 - y3;
  const dx1 = x1 - x2, dx2 = x3 - x2, dy1 = y1 - y2, dy2 = y3 - y2;
  const den = dx1 * dy2 - dx2 * dy1;
  const g = (sx * dy2 - dx2 * sy) / den, hh = (dx1 * sy - sx * dy1) / den;
  const a = x1 - x0 + g * x1, b = x3 - x0 + hh * x3, d = y1 - y0 + g * y1, e = y3 - y0 + hh * y3;
  const m = [a / w, d / w, 0, g / w, b / h, e / h, 0, hh / h, 0, 0, 1, 0, x0, y0, 0, 1];
  return `matrix3d(${m.join(',')})`;
};

export const ThumbX: React.FC<ThumbXProps> = ({bg, shade, layers = [], cuts = [], texts = [], card}) => {
  const {width: W} = useVideoConfig();
  const [cx, cy, cw] = bg.crop;
  const s = W / cw;
  const toT = ([x, y]: P): P => [(x - cx) * s, (y - cy) * s];
  return (
    <AbsoluteFill style={{background: '#000', fontFamily, overflow: 'hidden'}}>
      <svg width="0" height="0" style={{position: 'absolute'}}>
        <filter id="rough" x="-10%" y="-20%" width="120%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="9" xChannelSelector="R" yChannelSelector="G" result="d" />
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="7" result="s" />
          <feColorMatrix in="s" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -9 6.4" result="holes" />
          <feComposite in="d" in2="holes" operator="in" />
        </filter>
        <filter id="roughSoft" x="-10%" y="-20%" width="120%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="7" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="roughBand" x="-5%" y="-30%" width="110%" height="160%">
          <feTurbulence type="fractalNoise" baseFrequency="0.02 0.12" numOctaves="3" seed="5" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="22" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <Img src={staticFile(bg.src)} style={{position: 'absolute', left: -cx * s, top: -cy * s, width: (bg.sw ?? 2048) * s, filter: bg.filter}} />
      {layers.map((l, i) => {
        const [lx, ly, lw] = l.crop, [bx, by, bw, bh] = l.box, k = bw / lw;
        return (
          <div key={'l' + i} style={{position: 'absolute', left: bx, top: by, width: bw, height: bh, overflow: 'hidden', boxShadow: l.border}}>
            <Img src={staticFile(l.src)} style={{position: 'absolute', left: -lx * k, top: -ly * k, width: (l.sw ?? 2048) * k, filter: l.filter}} />
          </div>
        );
      })}
      {card && (
        <div style={{position: 'absolute', left: 0, top: 0, width: card.w, height: card.h, transformOrigin: '0 0',
          transform: quadMatrix(card.w, card.h, card.quad.map(toT) as [P, P, P, P]),
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10}}>
          {card.lines.map((l, i) => (
            <div key={i} style={{fontSize: l.size, fontWeight: l.weight ?? 900, color: l.color, lineHeight: 1, whiteSpace: 'nowrap'}}>{l.t}</div>
          ))}
        </div>
      )}
      {shade && <AbsoluteFill style={{background: shade}} />}
      {cuts.map((c, i) => (
        <Img key={i} src={staticFile(c.src)} style={{position: 'absolute', left: c.x, top: c.y, height: c.h,
          transform: c.flip ? 'scaleX(-1)' : undefined, filter: `drop-shadow(0 0 18px ${c.glow ?? 'rgba(0,0,0,.8)'})`}} />
      ))}
      {texts.map((t, i) => {
        const pos: React.CSSProperties = {position: 'absolute', top: t.y, left: t.anchor === 'r' ? undefined : t.x, right: t.anchor === 'r' ? W - t.x : undefined,
          transform: `${t.anchor === 'c' ? 'translateX(-50%) ' : ''}rotate(${t.rot ?? 0}deg)`, whiteSpace: 'nowrap'};
        const font = FONTS[t.font ?? 'bvp'];
        const txt: React.CSSProperties = {fontFamily: font, fontSize: t.size, fontWeight: t.font ? 400 : 900, lineHeight: 1, color: t.color ?? '#ffe14a',
          letterSpacing: t.font ? 0 : -2, filter: t.rough ? 'url(#rough)' : undefined};
        if (t.band) return (
          <div key={i} style={pos}>
            <div style={{position: 'absolute', inset: '-4px -30px -10px -30px', background: '#000', filter: 'url(#roughBand)'}} />
            <div style={{position: 'absolute', inset: '4px -22px -2px -22px', background: t.band, filter: 'url(#roughBand)'}} />
            {t.under && <div style={{position: 'absolute', left: -10, right: 30, bottom: -26, height: 16, background: t.under, transform: 'rotate(-1.5deg)', filter: 'url(#roughBand)'}} />}
            <div style={{...txt, filter: t.rough ? 'url(#roughSoft)' : undefined, position: 'relative', padding: `${Math.round(t.size * 0.3)}px 8px 0`}}>{t.t}</div>
          </div>
        );
        if (t.stamp) return (
          <div key={i} style={{...pos, ...txt, color: t.stamp, border: `${Math.round(t.size * 0.09)}px solid ${t.stamp}`, borderRadius: 10,
            padding: `${Math.round(t.size * 0.12)}px ${Math.round(t.size * 0.22)}px 0`, background: 'rgba(250,236,200,.92)', boxShadow: '0 6px 14px rgba(0,0,0,.55)'}}>{t.t}</div>
        );
        if (t.box) return (
          <div key={i} style={{...pos, ...txt, background: t.box, padding: '6px 26px 12px', borderRadius: 6, boxShadow: '0 0 0 5px #000, 0 10px 24px rgba(0,0,0,.6)'}}>{t.t}</div>
        );
        return (
          <div key={i} style={pos}>
            <div style={{...txt, textShadow: `${stroke(t.sw ?? 7, '#000')}, 0 10px 18px rgba(0,0,0,.6)`}}>{t.t}</div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
export const THUMB_W = W0, THUMB_H = H0;
