import React from 'react';
import {AbsoluteFill} from 'remotion';
import {OilRig} from './worlds/OilRig';
import {LUCKY, NUNITO, P, Peek} from './Brand2';

/** IX004 thumbnail: rig cutaway at dusk, big STEEL ISLAND, PEEK in the corner like every OLL thumbnail. */
export const ThumbIX004: React.FC = () => {
  const [cx, cy, z] = [760, 380, 1.9];
  return (
    <AbsoluteFill style={{background: '#8ecae6'}}>
      <svg width={1280} height={720} viewBox="0 0 1920 1080" style={{position: 'absolute'}}>
        <g transform={`translate(960 540) scale(${z}) translate(${-cx} ${-cy})`}>
          <OilRig frame={40} tod="dusk" you="cabin" plane="night" dur={100} />
        </g>
      </svg>
      <div style={{position: 'absolute', left: 34, top: 44, fontFamily: LUCKY, fontSize: 128, lineHeight: 0.9, color: P.sun, WebkitTextStroke: `12px ${P.ink}`, paintOrder: 'stroke fill', textShadow: `8px 10px 0 ${P.ink}`, transform: 'rotate(-4deg)'}}>
        STEEL ISLAND
      </div>
      <div style={{position: 'absolute', left: 56, top: 196, fontFamily: NUNITO, fontWeight: 900, fontSize: 46, color: P.ink, background: P.white, border: `6px solid ${P.ink}`, borderRadius: 18, padding: '4px 22px', transform: 'rotate(-4deg)'}}>
        12 H SHIFTS · 2 WEEKS ON
      </div>
      <div style={{position: 'absolute', right: 40, top: 40, fontFamily: LUCKY, fontSize: 72, color: P.white, background: P.coral, border: `7px solid ${P.ink}`, borderRadius: 20, padding: '4px 22px', transform: 'rotate(5deg)', boxShadow: `6px 8px 0 ${P.ink}`}}>
        NORTH SEA
      </div>
      <div style={{position: 'absolute', right: -10, bottom: -40, width: 230, height: 230, transform: 'rotate(8deg)'}}>
        <div style={{width: '100%', height: '100%', borderRadius: '50%', border: `8px solid ${P.ink}`, overflow: 'hidden'}}>
          <Peek />
        </div>
      </div>
    </AbsoluteFill>
  );
};
