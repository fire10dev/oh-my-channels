import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {BoilDefs, camAt, Caption, ChapterCard, Finish, HAND, Hud, Quote, StatCard} from './ui';
import {Diagram, DiagramSpec} from './Diagram';
import {Submarine} from './worlds/Submarine';
import {SatDiver} from './worlds/SatDiver';
import {Silo} from './worlds/Silo';

export type Scene = {
  id: string;
  say: string;
  hud: string;
  clock: string;
  view: [number, number, number];
  card?: {kicker: string; title: string};
  stat?: {big: string; small: string};
  quote?: string;
  diagram?: DiagramSpec;
};
export type Timeline = {id: string; file: string; seconds: number}[];
export type Props = {topic: 'sub' | 'sat' | 'silo' | 'ix001'; scenes: Scene[]; timeline: Timeline; asof?: string};

export const PAD = 0.5;
export const CARD = 26;
export const sceneFrames = (sec: number, fps: number) => Math.ceil((sec + PAD) * fps);

const World: React.FC<{topic: Props['topic']; frame: number; scene: string}> = ({topic, frame, scene}) => {
  if (topic === 'sub' || topic === 'ix001') return <Submarine frame={frame} scene={scene} />;
  if (topic === 'sat') return <SatDiver frame={frame} scene={scene} />;
  return <Silo frame={frame} scene={scene} />;
};

const Shot: React.FC<{topic: Props['topic']; s: Scene; prev: Scene['view']; dur: number; seconds: number; file: string}> = ({
  topic,
  s,
  prev,
  dur,
  seconds,
  file,
}) => {
  const frame = useCurrentFrame();
  const camStart = s.card ? CARD : 0;
  const {cx, cy, z} = camAt(Math.max(0, frame - camStart), dur - camStart, s.card ? s.view : prev, s.view);
  return (
    <AbsoluteFill style={{background: '#000'}}>
      <svg width={1920} height={1080} viewBox="0 0 1920 1080">
        <BoilDefs id={`boil-${s.id}`} scale={1.4} />
        {/* Boil in screen space: a filter inside the zoomed group is rasterised at 1x and upscaled -> jaggies. */}
        <g filter={`url(#boil-${s.id})`}>
          <g transform={`translate(960 540) scale(${z}) translate(${-cx} ${-cy})`}>
            <World topic={topic} frame={frame} scene={s.id} />
          </g>
        </g>
      </svg>
      {s.diagram?.type !== 'brand' && <Hud day={s.hud} clock={s.clock} />}
      {s.diagram && <Diagram d={s.diagram} start={s.card ? CARD : 0} dur={dur} />}
      {s.stat && <StatCard big={s.stat.big} small={s.stat.small} />}
      {s.quote && <Quote text={s.quote} />}
      <Caption text={s.say} seconds={seconds} />
      {s.card && <ChapterCard kicker={s.card.kicker} title={s.card.title} frames={CARD} />}
      <Audio src={staticFile(`${topic}/${file}`)} />
      {s.card && <Audio src={staticFile('sfx/swoosh-quick.mp3')} volume={0.35} />}
    </AbsoluteFill>
  );
};

export const InsideX: React.FC<Props> = ({topic, scenes, timeline, asof}) => {
  const {fps} = useVideoConfig();
  let from = 0;
  return (
    <AbsoluteFill style={{background: '#000'}}>
      {scenes.map((s, i) => {
        const t = timeline[i];
        const dur = sceneFrames(t.seconds, fps);
        const start = from;
        from += dur;
        const prev = i === 0 ? s.view : scenes[i - 1].view;
        return (
          <Sequence key={s.id} from={start} durationInFrames={dur}>
            <Shot topic={topic} s={s} prev={prev} dur={dur} seconds={t.seconds} file={t.file} />
          </Sequence>
        );
      })}
      <Audio src={staticFile('bgm/ambient.mp3')} volume={0.22} loop />
      {(topic === 'sub' || topic === 'ix001') && <Audio src={staticFile('bgm/sonar.mp3')} volume={0.18} loop />}
      <Finish />
      {asof && (
        <div style={{position: 'absolute', right: 40, bottom: 28, fontFamily: HAND, fontSize: 28, color: '#ffffff', opacity: 0.75, textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>
          {asof}
        </div>
      )}
    </AbsoluteFill>
  );
};
