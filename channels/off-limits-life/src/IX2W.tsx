/**
 * Shared engine v2 (IX007+; world chosen by props.world from src/worlds/registry.ts, no per-video copy): one narration line = one shot, hard cuts, camera only zooms.
 * Pacing rules come from the reference teardown (MEGABRAIN remotion-teardown-nobody-gets-in-2026-11.md):
 *  - consecutive lines with the same framing merge into one shot (max 5.4 s)
 *  - motion cycle per shot: push-in 4% · hold · punch-in (7 frames) · hold
 *  - caption = 1 word at a time, timed inside each line's own audio
 *  - line boil in screen space (filter outside the camera transform: IX001 jaggies fix)
 */
import React, {useMemo} from 'react';
import {AbsoluteFill, Audio, Easing, interpolate, Sequence, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {BoilDefs, C, ChapterCard, Finish, HAND, Hud, MARKER, StatCard} from './ui';
import {Diagram, DiagramSpec} from './Diagram';
import type {Tod} from './worlds/SouthPole';
import {WORLDS} from './worlds/registry';

type Months = {type: 'months'; label: string; from: number; to: number};
type Shot = {s: string; v?: string; d?: DiagramSpec | Months; st?: [string, string]; you?: string; tod?: Tod; fx?: string; plane?: string};
type Chapter = {id: string; hud: string; chip: string; tod: Tod; card?: [string, string]; shots: Shot[]};
export type IX2WData = {title: string; asof: string; chapters: Chapter[]};
type Seg = {type: 'card' | 'shot'; ch: number; i?: number; start: number; speech?: number; dur: number};
export type IX2WTimeline = {total: number; segs: Seg[]};
export type IX2WProps = {id: string; world: string; data: IX2WData; timeline: IX2WTimeline};

type Line = {start: number; speech: number; text: string};
type VShot = {from: number; frames: number; kind: 'card' | 'world' | 'board'; ch: Chapter; shot?: Shot; lines: Line[]; k: number; rep?: number};

const MAX_MERGE = 5.4;
// no still chapter cards: still cards were the only static shots in IX002-IX006 (teardown v2, band <=1.63%)

export const buildShots = (data: IX2WData, tl: IX2WTimeline, fps: number): VShot[] => {
  const out: VShot[] = [];
  let prevKey = '';
  let k = 0;
  for (const g of tl.segs) {
    const ch = data.chapters[g.ch];
    if (g.type === 'card') {
      out.push({from: g.start, frames: g.dur, kind: 'card', ch, lines: [], k: k++});
      prevKey = '';
      continue;
    }
    const sh = ch.shots[g.i!];
    const tod = sh.tod ?? ch.tod;
    const key = JSON.stringify([sh.v, sh.you, sh.d, tod, sh.plane]);
    const line = {start: g.start, speech: g.speech!, text: sh.s};
    const last = out[out.length - 1];
    if (last && key === prevKey && !sh.d && !sh.st && !last.shot?.st && last.frames + g.dur < MAX_MERGE) {
      last.frames += g.dur;
      last.lines.push(line);
    } else {
      // same view as the previous world shot -> count repeats; WorldShot re-frames them so the cut is visible
      const rep = last?.kind === 'world' && !sh.d && last.shot?.v === sh.v ? (last.rep ?? 0) + 1 : 0;
      out.push({from: g.start, frames: g.dur, kind: sh.d ? 'board' : 'world', ch, shot: sh, lines: [line], k: k++, rep});
    }
    prevKey = key;
  }
  // seconds -> frames, contiguous
  let acc = 0;
  return out.map((s, i) => {
    const end = i === out.length - 1 ? tl.total : out[i + 1].from;
    const startF = Math.round(s.from * fps);
    const endF = Math.round(end * fps);
    acc = endF;
    return {...s, from: startF, frames: Math.max(1, endF - startF)};
  });
};

export const ix2wFrames = (tl: IX2WTimeline, fps: number) => Math.round(tl.total * fps) + 2 * fps;

const MonthsBoard: React.FC<{d: Months; dur: number}> = ({d, dur}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const names = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const shown = interpolate(f, [4, Math.max(10, dur - 12)], [0, d.to - d.from + 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const pop = spring({frame: f, fps, config: {damping: 14, stiffness: 160}});
  return (
    <AbsoluteFill style={{background: '#14213d', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{fontFamily: MARKER, fontSize: 84, color: C.cream, marginBottom: 40, transform: `scale(${0.7 + 0.3 * pop})`}}>{d.label}</div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(6, 230px)', gap: 22}}>
        {names.map((n, i) => {
          const inRange = i >= d.from && i <= d.to;
          const on = inRange && i - d.from < shown;
          return (
            <div
              key={n}
              style={{
                height: 130,
                borderRadius: 18,
                border: `6px solid ${C.ink}`,
                background: on ? C.red : C.cream,
                color: on ? C.white : C.navy,
                fontFamily: MARKER,
                fontSize: 60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '8px 10px 0 rgba(0,0,0,0.4)',
                transform: on ? `rotate(${(i % 2 ? 1 : -1) * 2}deg)` : undefined,
              }}
            >
              {on ? '✕' : n}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/** Camera motion cycle tuned against the reference teardown band:
 *  push-in 5.5% · punch-in · push-in · hold; every 20th shot drifts sideways (reference pans 2-8% of shots). */
const cam = (k: number, f: number, frames: number) => {
  const m = [0, 1, 3, 2, 3, 3, 1][k % 7]; // 0/2 push, 1 punch, 3 hold  => ~57% zooming shots
  const drift = k % 25 === 12 ? interpolate(f, [0, frames], [-90, 90], {extrapolateRight: 'clamp', easing: Easing.inOut(Easing.sin)}) : 0;
  let scale = 1;
  if (m === 0 || m === 2) scale = interpolate(f, [0, frames], [1, 1.055], {extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic)});
  if (m === 1) {
    const p = interpolate(f, [0, 7], [0, 1], {extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)});
    scale = 1 + 0.08 * p + interpolate(f, [7, frames], [0, 0.02], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  }
  return {scale, drift};
};

const REFRAME: [number, number][] = [[1, 0], [1.45, -0.18], [1.2, 0.2], [1.7, 0.1]];

const WorldShot: React.FC<{v: VShot; world: string}> = ({v, world}) => {
  const {World, viewOf} = WORLDS[world];
  const f = useCurrentFrame();
  const sh = v.shot!;
  const tod = sh.tod ?? v.ch.tod;
  const [vx, vy, vz] = viewOf(sh.v ?? 'wide', tod);
  // cut-in on repeated views: tighter framing shifted left/right, so consecutive shots of one view never look identical
  const [fz, fx] = REFRAME[(v.rep ?? 0) % REFRAME.length];
  const z0 = vz * fz;
  const cx = vx + (fx * 960) / z0;
  const cy = vy;
  const {scale, drift} = cam(v.k, f, v.frames);
  const z = z0 * scale;
  return (
    <AbsoluteFill style={{background: '#000'}}>
      <svg width={1920} height={1080} viewBox="0 0 1920 1080">
        <BoilDefs id={`b-${v.k}`} scale={1.4} />
        <g filter={`url(#b-${v.k})`}>
          <g transform={`translate(960 540) scale(${z}) translate(${-cx - drift / z} ${-cy})`}>
            <World frame={f} tod={tod} you={sh.you} plane={sh.plane} dur={v.frames} />
          </g>
        </g>
      </svg>
      <Hud day={v.ch.hud} clock={v.ch.chip} />
      {sh.st && <StatCard big={sh.st[0]} small={sh.st[1]} />}
    </AbsoluteFill>
  );
};

const BoardShot: React.FC<{v: VShot}> = ({v}) => {
  const d = v.shot!.d!;
  if (d.type === 'months') return <MonthsBoard d={d as Months} dur={v.frames} />;
  return <Diagram d={d as DiagramSpec} start={0} dur={v.frames} />;
};

/** One word at a time; word timing = character share inside the line's own audio. */
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
    <div style={{position: 'absolute', bottom: 150, width: '100%', textAlign: 'center'}}>
      <span
        style={{
          fontFamily: MARKER,
          fontSize: 110,
          color: C.white,
          WebkitTextStroke: `14px ${C.navy}`,
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

export const IX2W: React.FC<IX2WProps> = ({id, world, data, timeline}) => {
  const {fps} = useVideoConfig();
  const shots = useMemo(() => buildShots(data, timeline, fps), [data, timeline, fps]);
  const lines = shots.flatMap((s) => s.lines);
  const hide: [number, number][] = shots
    .filter((s) => s.kind === 'card' || (s.shot?.d as DiagramSpec | undefined)?.type === 'brand')
    .map((s) => [s.from / fps, (s.from + s.frames) / fps]);
  const endF = Math.round(timeline.total * fps);
  return (
    <AbsoluteFill style={{background: '#000'}}>
      {shots.map((v) => (
        <Sequence key={v.k} from={v.from} durationInFrames={v.frames}>
          {v.kind === 'card' && <ChapterCard kicker={v.ch.card![0]} title={v.ch.card![1]} frames={v.frames} />}
          <Finish />
          {v.kind === 'card' && <Audio src={staticFile('sfx/ix2-whoosh.mp3')} volume={0.35} />}
          {v.kind === 'world' && <WorldShot v={v} world={world} />}
          {v.kind === 'board' && <BoardShot v={v} />}
          {v.kind === 'board' && <Audio src={staticFile('sfx/ix2-whoosh.mp3')} volume={0.2} />}
          {v.shot?.st && (
            <Sequence from={10}>
              <Audio src={staticFile('sfx/ix2-pop.mp3')} volume={0.35} />
            </Sequence>
          )}
          {v.shot?.fx && FX[v.shot.fx] && <Audio src={staticFile(FX[v.shot.fx].file)} volume={FX[v.shot.fx].vol} />}
        </Sequence>
      ))}
      <Sequence from={endF} durationInFrames={2 * fps}>
        <Diagram d={{type: 'brand', tag: 'How people live where you can’t go'}} start={-60} dur={2 * fps + 60} />
      </Sequence>
      <Captions lines={lines} hide={hide} />
      <Audio src={staticFile(`${id}/narration.wav`)} />
      {/* music bed pre-mixed by tools/make_bed.py (swells on cards/boards); a frame-wise volume callback overflows ffmpeg */}
      <Audio src={staticFile(`${id}/bed-mix.mp3`)} />
      <div style={{position: 'absolute', right: 40, bottom: 28, fontFamily: HAND, fontSize: 28, color: '#ffffff', opacity: 0.75, textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>
        {data.asof}
      </div>
    </AbsoluteFill>
  );
};
