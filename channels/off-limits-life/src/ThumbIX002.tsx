import React from 'react';
import {AbsoluteFill} from 'remotion';
import {SouthPole} from './worlds/SouthPole';
import {LUCKY, NUNITO, P, Peek} from './Brand2';

/** IX002 thumbnail: station cutaway at night (aurora), big "8 MONTHS", PEEK in the corner like every OLL thumbnail. */
export const ThumbIX002: React.FC = () => {
  const [cx, cy, z] = [1060, 400, 1.75];
  return (
    <AbsoluteFill style={{background: '#070b1f'}}>
      <svg width={1280} height={720} viewBox="0 0 1920 1080" style={{position: 'absolute'}}>
        <g transform={`translate(960 540) scale(${z}) translate(${-cx} ${-cy})`}>
          <SouthPole frame={40} tod="night" you="comms" dur={100} />
        </g>
      </svg>
      <div style={{position: 'absolute', left: 34, top: 34, fontFamily: LUCKY, fontSize: 150, lineHeight: 0.9, color: P.sun, WebkitTextStroke: `12px ${P.ink}`, paintOrder: 'stroke fill', textShadow: `8px 10px 0 ${P.ink}`, transform: 'rotate(-4deg)'}}>
        8 MONTHS
      </div>
      <div style={{position: 'absolute', left: 56, top: 196, fontFamily: NUNITO, fontWeight: 900, fontSize: 46, color: P.ink, background: P.white, border: `6px solid ${P.ink}`, borderRadius: 18, padding: '4px 22px', transform: 'rotate(-4deg)'}}>
        NO FLIGHTS · NO SUN
      </div>
      <div style={{position: 'absolute', right: 40, top: 40, fontFamily: LUCKY, fontSize: 72, color: P.white, background: P.coral, border: `7px solid ${P.ink}`, borderRadius: 20, padding: '4px 22px', transform: 'rotate(5deg)', boxShadow: `6px 8px 0 ${P.ink}`}}>
        -80°C
      </div>
      <div style={{position: 'absolute', right: -10, bottom: -40, width: 230, height: 230, transform: 'rotate(8deg)'}}>
        <div style={{width: '100%', height: '100%', borderRadius: '50%', border: `8px solid ${P.ink}`, overflow: 'hidden'}}>
          <Peek />
        </div>
      </div>
    </AbsoluteFill>
  );
};
