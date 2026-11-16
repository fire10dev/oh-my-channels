import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {WORLDS} from './worlds/registry';

/** Review sheet for a new world: frame k = view k (name in the corner). tools/world_sheet.sh tiles them. */
export const WorldViews: React.FC<{world: string; plane?: string; you?: string}> = ({world, plane, you}) => {
  const k = useCurrentFrame();
  const {World, views} = WORLDS[world];
  const name = Object.keys(views)[k];
  const [cx, cy, z] = views[name];
  return (
    <AbsoluteFill style={{background: '#000'}}>
      <svg width={1920} height={1080} viewBox="0 0 1920 1080">
        <g transform={`translate(960 540) scale(${z}) translate(${-cx} ${-cy})`}>
          <World frame={40} tod="day" you={you ?? name} plane={plane} dur={100} />
        </g>
      </svg>
      <div style={{position: 'absolute', left: 20, top: 10, fontSize: 90, color: '#ff0', fontFamily: 'sans-serif', textShadow: '0 0 8px #000'}}>{name}</div>
    </AbsoluteFill>
  );
};
