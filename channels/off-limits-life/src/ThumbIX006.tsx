import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Biosphere} from './worlds/Biosphere2';
import {LUCKY, NUNITO, P, Peek} from './Brand2';

/** IX006 thumbnail: glass domes + habitat, oxygen gauge at 14.5%, big "SEALED 2 YEARS", PEEK in the corner like every OLL thumbnail. */
export const ThumbIX006: React.FC = () => {
  const [cx, cy, z] = [900, 470, 1.55];
  return (
    <AbsoluteFill style={{background: '#5bc0eb'}}>
      <svg width={1280} height={720} viewBox="0 0 1920 1080" style={{position: 'absolute'}}>
        <g transform={`translate(960 540) scale(${z}) translate(${-cx} ${-cy})`}>
          <Biosphere frame={40} tod="day" you="gauge" plane="o2:14.5" dur={100} />
        </g>
      </svg>
      <div style={{position: 'absolute', left: 34, top: 44, fontFamily: LUCKY, fontSize: 120, lineHeight: 0.9, color: P.sun, WebkitTextStroke: `12px ${P.ink}`, paintOrder: 'stroke fill', textShadow: `8px 10px 0 ${P.ink}`, transform: 'rotate(-4deg)'}}>
        SEALED 2 YEARS
      </div>
      <div style={{position: 'absolute', left: 56, top: 196, fontFamily: NUNITO, fontWeight: 900, fontSize: 46, color: P.ink, background: P.white, border: `6px solid ${P.ink}`, borderRadius: 18, padding: '4px 22px', transform: 'rotate(-4deg)'}}>
        8 PEOPLE · NO WAY OUT
      </div>
      <div style={{position: 'absolute', right: 40, top: 40, fontFamily: LUCKY, fontSize: 72, color: P.white, background: P.coral, border: `7px solid ${P.ink}`, borderRadius: 20, padding: '4px 22px', transform: 'rotate(5deg)', boxShadow: `6px 8px 0 ${P.ink}`}}>
        O₂ 14.5%
      </div>
      <div style={{position: 'absolute', right: -10, bottom: -40, width: 230, height: 230, transform: 'rotate(8deg)'}}>
        <div style={{width: '100%', height: '100%', borderRadius: '50%', border: `8px solid ${P.ink}`, overflow: 'hidden'}}>
          <Peek />
        </div>
      </div>
    </AbsoluteFill>
  );
};
