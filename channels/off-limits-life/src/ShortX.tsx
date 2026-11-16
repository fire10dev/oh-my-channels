/**
 * Shorts engine (9:16, 1080x1920): same rules as IX2 (one narration line = one shot, 1-word captions,
 * zoom-only camera, screen-space boil) but the world is framed for a vertical phone screen.
 * Short scripts live in src/data/sx-*.json and reuse the worlds of their long video:
 *  - world 'pole': shot.v / you / tod / plane -> SouthPole (IX002)
 *  - world 'sub' : shot.sc (scene id) + shot.view [cx, cy, z] -> Submarine (IX001)
 *  - world 'cruise' / 'bio' / 'rig' / 'sat': shot.v / you / plane -> CruiseShip (IX003) / Biosphere (IX006) / OilRig (IX004) / SatShip (IX005)
 * Safe area: YouTube Shorts UI covers ~the bottom 420 px and the right 140 px, so the caption sits at ~y 1240.
 */
import React, {useMemo} from 'react';
import {AbsoluteFill, Audio, Easing, interpolate, Sequence, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {BoilDefs, C, HAND, MARKER} from './ui';
import {Diagram, DiagramSpec} from './Diagram';
import {SouthPole, Tod, PlaneState, viewOf} from './worlds/SouthPole';
import {Submarine} from './worlds/Submarine';
import {CruiseShip, viewOf as cruiseView} from './worlds/CruiseShip';
import {Biosphere, viewOf as bioView} from './worlds/Biosphere2';
import {OilRig, viewOf as rigView} from './worlds/OilRig';
import {SatShip, viewOf as satView} from './worlds/SatShip';
import {WORLDS} from './worlds/registry';

type Shot = {
  s: string;
  v?: string;
  you?: string;
  tod?: Tod;
  plane?: string;
  sc?: string;
  view?: [number, number, number];
  d?: DiagramSpec;
  st?: [string, string];
  q?: string;
  fx?: string;
};
type Chapter = {id: string; hud: string; chip: string; tod: Tod; shots: Shot[]};
export type SXData = {title: string; hook: string; asof: string; world: string; long: string; chapters: Chapter[]};
type Seg = {type: 'card' | 'shot'; ch: number; i?: number; start: number; speech?: number; dur: number};
export type SXTimeline = {total: number; segs: Seg[]};
export type SXProps = {id: string; data: SXData; timeline: SXTimeline};

type Line = {start: number; speech: number; text: string};
type VShot = {from: number; frames: number; ch: Chapter; shot: Shot; lines: Line[]; k: number};

const W = 1080;
const H = 1920;
const TAIL = 0.6; // seconds held after the last line
/** Vertical zoom factor per world: >1 crops tighter than the landscape framing (16:9 width -> 9:16 width). */
const KZ: Record<string, number> = {sub: 1.15};
const MAX_MERGE = 3.6;
/** World focus sits above centre so the caption (y 1310) never covers the subject. */
const CY = 860;
const ZMIN = 1.75;

const buildShots = (data: SXData, tl: SXTimeline, fps: number): VShot[] => {
  const out: VShot[] = [];
  let prevKey = '';
  for (const g of tl.segs) {
    if (g.type !== 'shot') continue;
    const ch = data.chapters[g.ch];
    const sh = ch.shots[g.i!];
    const key = JSON.stringify([sh.v, sh.you, sh.tod, sh.plane, sh.sc, sh.view, sh.d]);
    const line = {start: g.start, speech: g.speech!, text: sh.s};
    const last = out[out.length - 1];
    if (last && key === prevKey && !sh.d && !sh.st && !sh.q && !last.shot.st && !last.shot.q && last.frames + g.dur < MAX_MERGE) {
      last.frames += g.dur;
      last.lines.push(line);
    } else {
      out.push({from: g.start, frames: g.dur, ch, shot: sh, lines: [line], k: out.length});
    }
    prevKey = key;
  }
  return out.map((s, i) => {
    const end = i === out.length - 1 ? tl.total + TAIL : out[i + 1].from;
    const startF = Math.round(s.from * fps);
    return {...s, from: startF, frames: Math.max(1, Math.round(end * fps) - startF)};
  });
};

export const sxFrames = (tl: SXTimeline, fps: number) => Math.round((tl.total + TAIL) * fps);

/** Same motion cycle as IX2 (push-in / punch-in / hold), no sideways drift on a narrow frame. */
const cam = (k: number, f: number, frames: number) => {
  const m = [1, 0, 3, 2, 1, 3, 0][k % 7];
  if (m === 0 || m === 2) return interpolate(f, [0, frames], [1, 1.06], {extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic)});
  if (m === 1) {
    const p = interpolate(f, [0, 7], [0, 1], {extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)});
    return 1 + 0.08 * p + interpolate(f, [7, frames], [0, 0.02], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  }
  return 1;
};

const WorldShot: React.FC<{v: VShot; world: SXData['world']}> = ({v, world}) => {
  const f = useCurrentFrame();
  const sh = v.shot;
  const tod = sh.tod ?? v.ch.tod;
  const view: Record<string, typeof viewOf> = {pole: viewOf, cruise: cruiseView, bio: bioView, rig: rigView, sat: satView};
  const Reg = WORLDS[world];
  const [cx, cy, z0] = world === 'sub' ? (sh.view ?? [960, 540, 1]) : (view[world] ?? Reg.viewOf)(sh.v ?? 'wide', tod);
  // wide landscape views leave black bands on a tall frame: never zoom out past ZMIN
  const z = Math.max(z0 * (KZ[world] ?? 1), ZMIN) * cam(v.k, f, v.frames);
  return (
    <AbsoluteFill style={{background: '#000'}}>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <BoilDefs id={`sb-${v.k}`} scale={1.4} />
        <g filter={`url(#sb-${v.k})`}>
          <g transform={`translate(${W / 2} ${CY}) scale(${z}) translate(${-cx} ${-cy})`}>
            {world === 'pole' && <SouthPole frame={f} tod={tod} you={sh.you} plane={sh.plane as PlaneState} dur={v.frames} />}
            {world === 'sub' && <Submarine frame={f} scene={sh.sc ?? ''} />}
            {world === 'cruise' && <CruiseShip frame={f} tod={tod} you={sh.you} plane={sh.plane} dur={v.frames} />}
            {world === 'bio' && <Biosphere frame={f} tod={tod} you={sh.you} plane={sh.plane} dur={v.frames} />}
            {world === 'rig' && <OilRig frame={f} tod={tod} you={sh.you} plane={sh.plane} dur={v.frames} />}
            {world === 'sat' && <SatShip frame={f} tod={tod} you={sh.you} plane={sh.plane} dur={v.frames} />}
            {Reg && <Reg.World frame={f} tod={tod} you={sh.you} plane={sh.plane} dur={v.frames} />}
          </g>
        </g>
      </svg>
    </AbsoluteFill>
  );
};

const vcard: React.CSSProperties = {
  background: C.cream,
  border: `7px solid ${C.ink}`,
  borderRadius: 26,
  boxShadow: '12px 14px 0 rgba(0,0,0,0.4)',
  textAlign: 'center',
};

/** Vertical re-layout of the landscape diagrams (flow / compare / note / big); other types fall back to the scaled landscape board. */
const BoardShot: React.FC<{d: DiagramSpec; frames: number}> = ({d, frames}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const pop = (i: number) => spring({frame: f - 4 - i * 7, fps, config: {damping: 14, stiffness: 160}});
  let body: React.ReactNode;
  if (d.type === 'flow') {
    body = d.steps.map((s, i) => (
      <React.Fragment key={s}>
        {i > 0 && <div style={{fontFamily: MARKER, fontSize: 60, color: C.orange, opacity: pop(i), lineHeight: 1}}>↓</div>}
        <div style={{...vcard, width: 720, padding: '18px 20px', fontFamily: MARKER, fontSize: 64, color: C.navy, background: i === d.steps.length - 1 ? '#ffe8a3' : C.cream, transform: `scale(${pop(i)})`}}>{s}</div>
      </React.Fragment>
    ));
  } else if (d.type === 'compare') {
    const side = (x: string[], i: number, col: string) => (
      <div style={{...vcard, width: 760, padding: '22px 20px', transform: `scale(${pop(i)})`}}>
        <div style={{fontFamily: HAND, fontSize: 52, color: C.navy}}>{x[0]}</div>
        <div style={{fontFamily: MARKER, fontSize: 120, color: col, lineHeight: 1.05}}>{x[1]}</div>
        <div style={{fontFamily: HAND, fontSize: 46, color: C.navy}}>{x[2]}</div>
      </div>
    );
    body = (
      <>
        {side(d.left, 0, C.red)}
        <div style={{fontFamily: MARKER, fontSize: 70, color: C.orange, opacity: pop(1)}}>VS</div>
        {side(d.right, 2, '#1d70a2')}
      </>
    );
  } else if (d.type === 'note') {
    body = (
      <div style={{...vcard, width: 860, padding: '40px 30px', transform: `scale(${pop(0)}) rotate(-2deg)`, position: 'relative'}}>
        <div style={{fontFamily: MARKER, fontSize: 96, color: C.red}}>{d.title}</div>
        {d.lines.map((l) => (
          <div key={l} style={{fontFamily: MARKER, fontSize: 66, color: C.navy, marginTop: 14}}>{l}</div>
        ))}
        {d.stamp && (
          <div style={{position: 'absolute', right: -20, bottom: -50, fontFamily: MARKER, fontSize: 80, color: C.red, border: `8px solid ${C.red}`, borderRadius: 16, padding: '0 24px', transform: `rotate(-12deg) scale(${pop(3)})`, background: 'rgba(255,255,255,0.6)'}}>
            {d.stamp}
          </div>
        )}
      </div>
    );
  } else if (d.type === 'big') {
    body = (
      <div style={{...vcard, width: 820, padding: '30px', transform: `scale(${pop(0)})`}}>
        <div style={{fontFamily: MARKER, fontSize: 220, color: C.red, lineHeight: 1}}>{d.big}</div>
        <div style={{fontFamily: HAND, fontSize: 54, color: C.navy}}>{d.small}</div>
      </div>
    );
  }
  const note = 'note' in d && d.type !== 'note' ? d.note : undefined;
  return (
    <AbsoluteFill
      style={{
        background: '#14213d',
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.05) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.05) 2px, transparent 2px)',
        backgroundSize: '64px 64px',
      }}
    >
      {body ? (
        <div style={{position: 'absolute', top: 400, bottom: 440, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18}}>
          {body}
          {note && <div style={{fontFamily: MARKER, fontSize: 54, color: C.cream, marginTop: 16, opacity: pop(4)}}>{note}</div>}
        </div>
      ) : (
        <div style={{position: 'absolute', left: 0, top: 560, width: 1920, height: 1080, transform: `scale(${W / 1920})`, transformOrigin: '0 0'}}>
          <Diagram d={d} start={0} dur={frames} />
        </div>
      )}
    </AbsoluteFill>
  );
};

const StatCardV: React.FC<{big: string; small: string}> = ({big, small}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const inn = spring({frame: frame - 8, fps, config: {damping: 16}});
  return (
    <div
      style={{
        position: 'absolute',
        left: 150,
        top: 380,
        width: 780,
        padding: '24px 30px',
        background: C.cream,
        border: `7px solid ${C.ink}`,
        borderRadius: 26,
        boxShadow: '12px 14px 0 rgba(0,0,0,0.35)',
        transform: `scale(${inn}) rotate(-1.5deg)`,
        textAlign: 'center',
      }}
    >
      <div style={{fontFamily: MARKER, fontSize: Math.min(170, 700 / (0.66 * Math.max(...big.split(/\s+/).map((w) => w.length)))), color: C.red, lineHeight: 1}}>{big}</div>
      <div style={{fontFamily: HAND, fontSize: 50, color: C.navy}}>{small}</div>
    </div>
  );
};

const QuoteV: React.FC<{text: string}> = ({text}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const inn = spring({frame: frame - 6, fps, config: {damping: 10}});
  return (
    <div style={{position: 'absolute', top: 420, width: '100%', textAlign: 'center', transform: `scale(${inn}) rotate(-3deg)`}}>
      <span
        style={{
          fontFamily: MARKER,
          fontSize: 130,
          color: C.orange,
          WebkitTextStroke: `12px ${C.ink}`,
          paintOrder: 'stroke fill',
          textShadow: '0 0 30px rgba(244,162,97,0.8)',
        }}
      >
        {text}
      </span>
    </div>
  );
};

/** Persistent hook title + "as of" line at the top (above the Shorts UI). */
const TopBar: React.FC<{hook: string; asof: string}> = ({hook, asof}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const pop = spring({frame, fps, config: {damping: 13, stiffness: 170}});
  return (
    <div style={{position: 'absolute', top: 150, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14}}>
      <div
        style={{
          fontFamily: MARKER,
          fontSize: 74,
          color: C.navy,
          background: C.cream,
          border: `7px solid ${C.ink}`,
          borderRadius: 22,
          padding: '8px 34px',
          maxWidth: 900,
          textAlign: 'center',
          lineHeight: 1.05,
          boxShadow: '10px 12px 0 rgba(0,0,0,0.4)',
          transform: `scale(${0.6 + 0.4 * pop}) rotate(-1.5deg)`,
        }}
      >
        {hook}
      </div>
      <div style={{fontFamily: HAND, fontSize: 32, color: '#fff', background: 'rgba(0,0,0,0.55)', borderRadius: 20, padding: '2px 18px'}}>{asof}</div>
    </div>
  );
};

const Captions: React.FC<{lines: Line[]; hide: [number, number][]}> = ({lines, hide}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  if (hide.some(([a, b]) => t >= a && t < b)) return null;
  const line = lines.find((l) => t >= l.start && t < l.start + l.speech);
  if (!line) return null;
  const words = line.text.split(/\s+/);
  const total = words.reduce((a, w) => a + w.length + 1, 0);
  let acc = line.start;
  let word = words[words.length - 1];
  for (const w of words) {
    acc += ((w.length + 1) / total) * line.speech;
    if (t < acc) {
      word = w;
      break;
    }
  }
  const clean = word.replace(/[,.:;!?"]+$/g, '').replace(/^"/, '');
  return (
    <div style={{position: 'absolute', top: 1310, width: '100%', textAlign: 'center'}}>
      <span
        style={{
          fontFamily: MARKER,
          fontSize: clean.length > 9 ? 112 : 136,
          color: C.white,
          WebkitTextStroke: `16px ${C.navy}`,
          paintOrder: 'stroke fill',
          textTransform: 'uppercase',
          letterSpacing: 3,
        }}
      >
        {clean}
      </span>
    </div>
  );
};

const FX: Record<string, {file: string; vol: number}> = {
  plane: {file: 'sfx/ix2-plane.mp3', vol: 0.32},
  wind: {file: 'sfx/ix2-wind.mp3', vol: 0.4},
  bubbles: {file: 'sfx/ix2-bubbles.mp3', vol: 0.4},
};

export const ShortX: React.FC<SXProps> = ({id, data, timeline}) => {
  const {fps} = useVideoConfig();
  const shots = useMemo(() => buildShots(data, timeline, fps), [data, timeline, fps]);
  const lines = shots.flatMap((s) => s.lines);
  // boards carry their own big text: hide the word caption there
  const hide: [number, number][] = shots.filter((s) => s.shot.d).map((s) => [s.from / fps, (s.from + s.frames) / fps]);
  return (
    <AbsoluteFill style={{background: '#000'}}>
      {shots.map((v) => (
        <Sequence key={v.k} from={v.from} durationInFrames={v.frames}>
          {v.shot.d ? <BoardShot d={v.shot.d} frames={v.frames} /> : <WorldShot v={v} world={data.world} />}
          <AbsoluteFill style={{background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.35) 100%)'}} />
          {v.shot.st && <StatCardV big={v.shot.st[0]} small={v.shot.st[1]} />}
          {v.shot.q && <QuoteV text={v.shot.q} />}
          {v.shot.d && <Audio src={staticFile('sfx/ix2-whoosh.mp3')} volume={0.2} />}
          {(v.shot.st || v.shot.q) && (
            <Sequence from={8}>
              <Audio src={staticFile('sfx/ix2-pop.mp3')} volume={0.35} />
            </Sequence>
          )}
          {v.shot.fx && FX[v.shot.fx] && <Audio src={staticFile(FX[v.shot.fx].file)} volume={FX[v.shot.fx].vol} />}
        </Sequence>
      ))}
      <TopBar hook={data.hook} asof={data.asof} />
      <Captions lines={lines} hide={hide} />
      <Audio src={staticFile(`${id}/narration.wav`)} />
      <Audio src={staticFile(`${id}/bed-mix.mp3`)} />
    </AbsoluteFill>
  );
};
