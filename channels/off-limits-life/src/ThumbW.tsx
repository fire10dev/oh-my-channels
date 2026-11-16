import React from 'react';
import {AbsoluteFill} from 'remotion';
import {WORLDS} from './worlds/registry';
import {LUCKY, NUNITO, P, Peek} from './Brand2';
import type {Tod} from './worlds/SouthPole';

/** Thumbnail for IX007+ (same layout as ThumbIX006): world crop, big title, white chip, coral badge, PEEK in the corner. */
export type ThumbWProps = {world: string; view: string | [number, number, number]; tod?: Tod; you?: string; plane?: string; bg: string; big: string; chip: string; badge: string};
export const ThumbW: React.FC<ThumbWProps> = ({world, view, tod = 'day', you, plane, bg, big, chip, badge}) => {
  const {World, viewOf} = WORLDS[world];
  const [cx, cy, z] = typeof view === 'string' ? viewOf(view, tod) : view;
  return (
    <AbsoluteFill style={{background: bg}}>
      <svg width={1280} height={720} viewBox="0 0 1920 1080" style={{position: 'absolute'}}>
        <g transform={`translate(960 540) scale(${z}) translate(${-cx} ${-cy})`}>
          <World frame={40} tod={tod} you={you} plane={plane} dur={100} />
        </g>
      </svg>
      <div style={{position: 'absolute', left: 34, top: 44, fontFamily: LUCKY, fontSize: Math.min(120, Math.round(1250 / big.length)), lineHeight: 0.9, color: P.sun, WebkitTextStroke: `12px ${P.ink}`, paintOrder: 'stroke fill', textShadow: `8px 10px 0 ${P.ink}`, transform: 'rotate(-4deg)'}}>
        {big}
      </div>
      <div style={{position: 'absolute', left: 56, top: 196, fontFamily: NUNITO, fontWeight: 900, fontSize: 46, color: P.ink, background: P.white, border: `6px solid ${P.ink}`, borderRadius: 18, padding: '4px 22px', transform: 'rotate(-4deg)'}}>
        {chip}
      </div>
      <div style={{position: 'absolute', right: 40, top: 300, fontFamily: LUCKY, fontSize: 72, color: P.white, background: P.coral, border: `7px solid ${P.ink}`, borderRadius: 20, padding: '4px 22px', transform: 'rotate(5deg)', boxShadow: `6px 8px 0 ${P.ink}`}}>
        {badge}
      </div>
      <div style={{position: 'absolute', right: -10, bottom: -40, width: 230, height: 230, transform: 'rotate(8deg)'}}>
        <div style={{width: '100%', height: '100%', borderRadius: '50%', border: `8px solid ${P.ink}`, overflow: 'hidden'}}>
          <Peek />
        </div>
      </div>
    </AbsoluteFill>
  );
};
