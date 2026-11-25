import React from 'react';
import {AbsoluteFill, Audio, Easing, interpolate, Sequence, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Montserrat';
import {Cam, H, lerpCam, linePath, moveRing, Pt, projector, ringPath, W} from './geo';

const {fontFamily} = loadFont('normal', {weights: ['600', '800', '900'], subsets: ['latin', 'latin-ext']});

export type Word = {w: string; t0: number; t1: number};
export type Beat = {
  start: number; dur: number; say: string; words: Word[]; cam: Cam;
  title?: string;
  hl?: {a3: string; color: string; label?: string; cont?: string}[];
  zone?: {pts: Pt[]; color?: string; label?: string};
  a1?: {code: string; color: string}[];
  pins?: {lon: number; lat: number; text: string; color?: string}[];
  big?: {value: string; label: string; color?: string};
  bars?: {items: {label: string; value: number; color?: string; note?: string}[]; unit?: string};
  line?: {pts: Pt[]; color?: string; label?: string; arrow?: boolean};
  ghost?: {a3: string; to: Pt; color?: string};
  river?: {name: string; color?: string};
};
export type Video = {
  id: string; fps: number; frames: number; brand: string; source: string; accent: string;
  beats: Beat[]; vo: string; locale?: string; music?: {file: string; vol: number}; sfx?: {file: string; at: number; vol?: number}[];
};
type Geo = {
  countries: Record<string, {name: string; cont?: string; rings: Pt[][]}>;
  admin1?: Record<string, {name: string; a3: string; rings: Pt[][]}>;
  rivers?: {name: string; pts: Pt[]}[];
};

const C = {ocean: '#0a1424', ocean2: '#0f1d33', land: '#1d2a3d', border: '#33475f', text: '#f4f6fb', sub: '#9fb0c8', yellow: '#ffd23f'};
const ease = Easing.bezier(0.65, 0, 0.35, 1);

const centroid = (rings: Pt[][]): Pt => {
  // centroid of the largest ring (by bbox area)
  let best = rings[0], ba = -1;
  for (const r of rings) {
    const xs = r.map((p) => p[0]), ys = r.map((p) => p[1]);
    const a = (Math.max(...xs) - Math.min(...xs)) * (Math.max(...ys) - Math.min(...ys));
    if (a > ba) { ba = a; best = r; }
  }
  const xs = best.map((p) => p[0]), ys = best.map((p) => p[1]);
  return [(Math.max(...xs) + Math.min(...xs)) / 2, (Math.max(...ys) + Math.min(...ys)) / 2];
};

const bboxCenter = (rings: Pt[][]): Pt => {
  let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
  for (const r of rings) for (const [x, y] of r) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  return [(x0 + x1) / 2, (y0 + y1) / 2];
};

const camAt = (beats: Beat[], t: number): Cam => {
  let i = 0;
  while (i < beats.length - 1 && t >= beats[i + 1].start) i++;
  const b = beats[i];
  const prev = i ? beats[i - 1].cam : b.cam;
  const move = Math.min(1.1, b.dur * 0.45);
  const k = ease(Math.min(1, Math.max(0, (t - b.start) / move)));
  const c = lerpCam(prev, b.cam, k);
  const drift = 1 - 0.06 * Math.min(1, Math.max(0, (t - b.start) / b.dur)); // slow push-in
  return {...c, span: c.span * drift};
};

const beatIndex = (beats: Beat[], t: number) => {
  let i = 0;
  while (i < beats.length - 1 && t >= beats[i + 1].start) i++;
  return i;
};

// Opacity of a highlight that belongs to beat i: fades in at its start, out when the next beat drops it.
const fadeFor = (beats: Beat[], t: number, has: (b: Beat) => boolean) => {
  let o = 0;
  beats.forEach((b, i) => {
    if (!has(b)) return;
    const end = i + 1 < beats.length ? beats[i + 1].start : 1e9;
    const keepNext = i + 1 < beats.length && has(beats[i + 1]);
    const hadPrev = i > 0 && has(beats[i - 1]);
    const inn = hadPrev ? 1 : Math.min(1, Math.max(0, (t - b.start - 0.15) / 0.45));
    const out = keepNext ? (t < end ? 1 : 0) : 1 - Math.min(1, Math.max(0, (t - end) / 0.35));
    if (t >= b.start) o = Math.max(o, inn * out);
  });
  return o;
};

const parseNum = (s: string) => {
  const m = s.match(/^([^0-9-]*)(-?[0-9]+)([^0-9.,]*)$/);
  if (!m) return null;
  const raw = m[2].replace(/,/g, '');
  return {pre: m[1], n: parseFloat(raw), dec: 0, post: m[3], comma: false};
};

const BigCard: React.FC<{b: NonNullable<Beat['big']>; local: number; fps: number; accent: string}> = ({b, local, fps, accent}) => {
  const s = spring({frame: local * fps, fps, config: {damping: 14, stiffness: 160}});
  const p = parseNum(b.value);
  const k = Math.min(1, local / 0.9);
  let val = b.value;
  if (p) {
    const v = p.n * Easing.out(Easing.cubic)(k);
    const str = p.dec ? v.toFixed(p.dec) : Math.round(v).toString();
    val = p.pre + (p.comma ? Number(str).toLocaleString('en-US', {minimumFractionDigits: p.dec, maximumFractionDigits: p.dec}) : str) + p.post;
  }
  return (
    <div style={{position: 'absolute', top: 330, left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', transform: `scale(${0.6 + 0.4 * s})`, opacity: s}}>
      <div style={{fontSize: 190, fontWeight: 900, color: b.color || accent, lineHeight: 1, textShadow: '0 8px 40px rgba(0,0,0,.75)', letterSpacing: -4}}>{val}</div>
      <div style={{marginTop: 14, fontSize: 46, fontWeight: 800, color: C.text, background: 'rgba(5,10,20,.72)', padding: '10px 26px', borderRadius: 16, maxWidth: 900, textAlign: 'center'}}>{b.label}</div>
    </div>
  );
};

const Bars: React.FC<{b: NonNullable<Beat['bars']>; local: number; accent: string; locale: string}> = ({b, local, accent, locale}) => {
  const max = Math.max(...b.items.map((i) => i.value));
  return (
    <div style={{position: 'absolute', top: 300, left: 70, right: 70, background: 'rgba(5,10,20,.82)', borderRadius: 28, padding: '34px 36px', border: `2px solid ${C.border}`}}>
      {b.items.map((it, i) => {
        const k = Easing.out(Easing.cubic)(Math.min(1, Math.max(0, (local - 0.15 - i * 0.18) / 0.8)));
        const v = it.value * k;
        return (
          <div key={i} style={{marginBottom: i < b.items.length - 1 ? 22 : 0}}>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 38, fontWeight: 800, color: C.text}}>
              <span>{it.label}</span>
              <span style={{color: it.color || accent}}>{it.note ?? (v >= 100 ? Math.round(v).toLocaleString(locale) : v.toLocaleString(locale, {minimumFractionDigits: 1, maximumFractionDigits: 1})) + (b.unit || '')}</span>
            </div>
            <div style={{height: 34, marginTop: 8, background: '#16233a', borderRadius: 10}}>
              <div style={{height: '100%', width: `${(v / max) * 100}%`, background: it.color || accent, borderRadius: 10}} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Captions: React.FC<{beat: Beat; t: number; accent: string}> = ({beat, t}) => {
  // groups of up to 3 words; show the group containing the current word
  const ws = beat.words;
  if (!ws.length) return null;
  const groups: Word[][] = [];
  for (let i = 0; i < ws.length; i += 3) groups.push(ws.slice(i, i + 3));
  let g = groups.findIndex((gr) => t < gr[gr.length - 1].t1 + 0.05);
  if (g < 0) g = groups.length - 1;
  const gr = groups[g];
  const pop = Math.min(1, Math.max(0, (t - gr[0].t0) / 0.12));
  return (
    <div style={{position: 'absolute', top: 1330, left: 50, right: 50, textAlign: 'center', transform: `scale(${0.9 + 0.1 * pop})`}}>
      {gr.map((w, i) => {
        const on = t >= w.t0 && t < w.t1 + 0.04;
        return (
          <span key={i} style={{fontSize: 84, fontWeight: 900, color: on ? C.yellow : C.text, textTransform: 'uppercase', margin: '0 12px', display: 'inline-block',
            WebkitTextStroke: '3px #000', paintOrder: 'stroke', textShadow: '0 6px 18px rgba(0,0,0,.9)', lineHeight: 1.15}}>{w.w}</span>
        );
      })}
    </div>
  );
};

export const MapShort: React.FC<{video: Video; geo: Geo}> = ({video, geo}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  const beats = React.useMemo(() => video.beats.map((b) => ({...b, hl: (b.hl || []).flatMap((h) => h.cont
    ? Object.entries(geo.countries).filter(([, c]) => c.cont === h.cont).map(([a3]) => ({a3, color: h.color}))
    : [h])})), [video, geo]);
  const bi = beatIndex(beats, t);
  const beat = beats[bi];
  const local = t - beat.start;
  const cam = camAt(beats, t);
  const proj = projector(cam);
  const accent = video.accent;

  // which countries are highlighted at time t (with color)
  const hlColor: Record<string, {color: string; o: number}> = {};
  const allHl = new Set<string>();
  beats.forEach((b) => (b.hl || []).forEach((h) => allHl.add(h.a3)));
  allHl.forEach((a3) => {
    const o = fadeFor(beats, t, (b) => !!(b.hl || []).find((h) => h.a3 === a3));
    if (o > 0) {
      const src = (beat.hl || []).find((h) => h.a3 === a3) || beats.slice(0, bi + 1).reverse().flatMap((b) => b.hl || []).find((h) => h.a3 === a3);
      hlColor[a3] = {color: src ? src.color : accent, o};
    }
  });
  const a1Color: Record<string, {color: string; o: number}> = {};
  const allA1 = new Set<string>();
  beats.forEach((b) => (b.a1 || []).forEach((h) => allA1.add(h.code)));
  allA1.forEach((code) => {
    const o = fadeFor(beats, t, (b) => !!(b.a1 || []).find((h) => h.code === code));
    if (o > 0) {
      const src = beats.slice(0, bi + 1).reverse().flatMap((b) => b.a1 || []).find((h) => h.code === code);
      a1Color[code] = {color: src ? src.color : accent, o};
    }
  });

  const strokeW = Math.max(1.2, Math.min(3, 60 / cam.span));
  const titleIn = beat.title ? spring({frame: local * fps, fps, config: {damping: 16}}) : 0;
  const progress = t / (video.frames / fps);

  return (
    <AbsoluteFill style={{background: `radial-gradient(ellipse at 50% 40%, ${C.ocean2}, ${C.ocean} 70%)`, fontFamily}}>
      <svg width={W} height={H} style={{position: 'absolute'}}>
        {/* graticule */}
        {Array.from({length: 37}, (_, i) => -180 + i * 10).map((lon) => (
          <path key={'g' + lon} d={linePath([[lon, -80], [lon, 80]], proj)} stroke="#13233b" strokeWidth={1} fill="none" />
        ))}
        {Array.from({length: 17}, (_, i) => -80 + i * 10).map((lat) => (
          <path key={'h' + lat} d={linePath(Array.from({length: 73}, (_, j) => [-180 + j * 5, lat] as Pt), proj)} stroke="#13233b" strokeWidth={1} fill="none" />
        ))}
        {Object.entries(geo.countries).map(([a3, c]) => {
          const h = hlColor[a3];
          return (
            <g key={a3}>
              <path d={c.rings.map((r) => ringPath(r, proj)).join('')} fill={C.land} stroke={C.border} strokeWidth={strokeW} strokeLinejoin="round" />
              {h ? <path d={c.rings.map((r) => ringPath(r, proj)).join('')} fill={h.color} fillOpacity={0.72 * h.o} stroke="#fff" strokeOpacity={0.6 * h.o} strokeWidth={strokeW * 1.3} /> : null}
            </g>
          );
        })}
        {geo.admin1 ? Object.entries(geo.admin1).map(([code, a]) => {
          const h = a1Color[code];
          return (
            <path key={code} d={a.rings.map((r) => ringPath(r, proj)).join('')} fill={h ? h.color : 'none'} fillOpacity={h ? 0.9 * h.o : 0}
              stroke={C.border} strokeOpacity={0.7} strokeWidth={strokeW * 0.6} />
          );
        }) : null}
        {beat.river && geo.rivers ? geo.rivers.filter((r) => (r.name || "").includes(beat.river!.name)).map((r, i) => {
          const k = Math.min(1, local / 1.6);
          return <path key={i} d={linePath(r.pts, proj)} stroke={beat.river!.color || '#3fb7ff'} strokeWidth={7} fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - k} />;
        }) : null}
        {beat.zone ? (() => {
          const k = Math.min(1, Math.max(0, (local - 0.2) / 0.6));
          return <path d={ringPath(beat.zone.pts, proj)} fill={beat.zone.color || accent} fillOpacity={0.55 * k} stroke={beat.zone.color || accent} strokeWidth={4} strokeOpacity={k} />;
        })() : null}
        {beat.line ? (() => {
          const k = Easing.inOut(Easing.cubic)(Math.min(1, Math.max(0, (local - 0.3) / 1.4)));
          const L = beat.line!;
          const n = L.pts.length;
          const [ax, ay] = proj(L.pts[n - 2]); const [bx, by] = proj(L.pts[n - 1]);
          const ang = (Math.atan2(by - ay, bx - ax) * 180) / Math.PI;
          const ak = Math.min(1, Math.max(0, (k - 0.85) / 0.15));
          return (
            <g>
              <path d={linePath(L.pts, proj)} stroke={L.color || accent} strokeWidth={8} fill="none" strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - k} />
              {L.arrow ? <path d="M0,0 L-34,-18 L-34,18 Z" fill={L.color || accent} transform={`translate(${bx},${by}) rotate(${ang}) scale(${ak})`} /> : null}
            </g>
          );
        })() : null}
        {beat.ghost && geo.countries[beat.ghost.a3] ? (() => {
          const g = beat.ghost!;
          const c = geo.countries[g.a3];
          const from = bboxCenter(c.rings);
          const settled = bi > 0 && beats[bi - 1].ghost?.a3 === g.a3; // same ghost as last beat: already in place
          const k = settled ? 1 : ease(Math.min(1, Math.max(0, (local - 0.4) / Math.max(1.2, beat.dur * 0.55))));
          const far = Math.abs(g.to[0] - from[0]) > cam.span * 0.8;
          const st: Pt = far ? [g.to[0], g.to[1] + cam.span * 0.55] : from; // far away: drop in from above
          const at: Pt = [st[0] + (g.to[0] - st[0]) * k, st[1] + (g.to[1] - st[1]) * k];
          const d = c.rings.map((r) => ringPath(moveRing(r, from, at), proj)).join('');
          return <path d={d} fill={g.color || accent} fillOpacity={0.85} stroke="#fff" strokeWidth={3} />;
        })() : null}
        {(beat.pins || []).map((p, i) => {
          const [x, y] = proj([p.lon, p.lat]);
          const s = spring({frame: (local - 0.25 - i * 0.2) * fps, fps, config: {damping: 12}});
          return (
            <g key={i} transform={`translate(${x},${y}) scale(${s})`}>
              <circle r={16} fill={p.color || C.yellow} stroke="#000" strokeWidth={4} />
            </g>
          );
        })}
      </svg>
      {(beat.pins || []).map((p, i) => {
        const [x, y] = proj([p.lon, p.lat]);
        const s = spring({frame: (local - 0.35 - i * 0.2) * fps, fps, config: {damping: 14}});
        return (
          <div key={i} style={{position: 'absolute', left: Math.min(Math.max(x, p.text.length * 11 + 40), W - p.text.length * 11 - 40), top: y - 92, transform: `translateX(-50%) scale(${s})`, background: 'rgba(5,10,20,.85)', color: C.text,
            fontSize: 38, fontWeight: 800, padding: '8px 18px', borderRadius: 12, whiteSpace: 'nowrap', border: `2px solid ${p.color || C.yellow}`}}>{p.text}</div>
        );
      })}
      {Object.entries(hlColor).map(([a3, h]) => {
        const lab = (beat.hl || []).find((x) => x.a3 === a3)?.label;
        if (!lab) return null;
        const [x, y] = proj(centroid(geo.countries[a3].rings));
        return (
          <div key={a3} style={{position: 'absolute', left: x, top: y, transform: 'translate(-50%,-50%)', opacity: h.o, fontSize: 44, fontWeight: 900, color: '#fff',
            WebkitTextStroke: '2px #000', paintOrder: 'stroke', textShadow: '0 4px 14px rgba(0,0,0,.9)', whiteSpace: 'nowrap'}}>{lab}</div>
        );
      })}
      {beat.line?.label ? (() => {
        const m = beat.line!.pts[Math.floor(beat.line!.pts.length / 2)];
        const [x, y] = proj(m);
        const o = Math.min(1, Math.max(0, (local - 0.9) / 0.4));
        return <div style={{position: 'absolute', left: Math.min(Math.max(x, 200), W - 200), top: y + 26, transform: 'translateX(-50%)', opacity: o, fontSize: 40, fontWeight: 900,
          color: beat.line!.color || accent, WebkitTextStroke: '2px #000', paintOrder: 'stroke', whiteSpace: 'nowrap'}}>{beat.line!.label}</div>;
      })() : null}
      {beat.big ? <BigCard b={beat.big} local={local} fps={fps} accent={accent} /> : null}
      {beat.bars ? <Bars b={beat.bars} local={local} accent={accent} locale={video.locale || 'en-US'} /> : null}
      {beat.title ? (
        <div style={{position: 'absolute', top: 150, left: 60, right: 60, textAlign: 'center', opacity: titleIn, transform: `translateY(${(1 - titleIn) * -30}px)`}}>
          <span style={{fontSize: 70, fontWeight: 900, color: '#fff', background: accent, padding: '8px 22px', borderRadius: 14, lineHeight: 1.35,
            boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone'}}>{beat.title}</span>
        </div>
      ) : null}
      <Captions beat={beat} t={t} accent={accent} />
      {/* top progress + brand, bottom source */}
      <div style={{position: 'absolute', top: 0, left: 0, height: 10, width: `${progress * 100}%`, background: accent}} />
      <div style={{position: 'absolute', top: 60, left: 0, right: 0, textAlign: 'center', fontSize: 30, fontWeight: 800, color: C.sub, letterSpacing: 6}}>{video.brand}</div>
      <div style={{position: 'absolute', bottom: 250, left: 60, right: 60, textAlign: 'center', fontSize: 26, fontWeight: 600, color: C.sub, opacity: 0.85}}>{video.source}</div>
      <Audio src={staticFile(`${video.id}/${video.vo}`)} />
      {video.music ? <Audio src={staticFile(video.music.file)} volume={(f) => video.music!.vol * interpolate(f, [video.frames - fps, video.frames], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} /> : null}
      {(video.sfx || []).map((s, i) => (
        <Sequence key={i} from={Math.round(s.at * fps)}>
          <Audio src={staticFile(s.file)} volume={s.vol ?? 0.35} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
