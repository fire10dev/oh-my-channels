import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Submarine} from './worlds/Submarine';
import {LUCKY, NUNITO, P, Peek} from './Brand2';

type V = 'A' | 'B';
const cam: Record<V, [number, number, number]> = {A: [740, 600, 2.15], B: [960, 520, 1.05]};

export const ThumbIX001: React.FC<{v: V}> = ({v}) => {
  const [cx, cy, z] = cam[v];
  return (
    <AbsoluteFill style={{background: '#0b1d33'}}>
      <svg width={1280} height={720} viewBox="0 0 1920 1080" style={{position: 'absolute'}}>
        <g transform={`translate(960 540) scale(${z}) translate(${-cx} ${-cy})`}>
          <Submarine frame={0} scene="sleep1" />
        </g>
      </svg>
      <AbsoluteFill style={{background: 'linear-gradient(90deg, rgba(11,29,51,0.0) 40%, rgba(11,29,51,0.0) 100%)'}} />
      {v === 'A' ? (
        <>
          <div style={{position: 'absolute', left: 36, top: 24, fontFamily: LUCKY, fontSize: 170, lineHeight: 0.9, color: P.sun, WebkitTextStroke: `12px ${P.ink}`, paintOrder: 'stroke fill', textShadow: `8px 10px 0 ${P.ink}`, transform: 'rotate(-4deg)'}}>
            77 DAYS
          </div>
          <div style={{position: 'absolute', left: 60, top: 210, fontFamily: NUNITO, fontWeight: 900, fontSize: 46, color: P.ink, background: P.white, border: `6px solid ${P.ink}`, borderRadius: 18, padding: '4px 22px', transform: 'rotate(-4deg)'}}>
            NO SUN · NO PHONE
          </div>
          <div style={{position: 'absolute', left: 600, top: 236, fontFamily: LUCKY, fontSize: 64, color: P.white, background: P.coral, border: `7px solid ${P.ink}`, borderRadius: 20, padding: '4px 22px', transform: 'rotate(5deg)', boxShadow: `6px 8px 0 ${P.ink}`}}>
            YOUR BED ↓
          </div>
        </>
      ) : (
        <>
          <div style={{position: 'absolute', left: 0, right: 0, top: 30, textAlign: 'center', fontFamily: LUCKY, fontSize: 120, lineHeight: 0.95, color: P.white, WebkitTextStroke: `11px ${P.ink}`, paintOrder: 'stroke fill', textShadow: `7px 9px 0 ${P.ink}`}}>
            159 PEOPLE · <span style={{color: P.sun}}>NO EXIT</span>
          </div>
          <div style={{position: 'absolute', left: 0, right: 0, bottom: 40, textAlign: 'center'}}>
            <span style={{fontFamily: LUCKY, fontSize: 70, color: P.white, background: P.coral, border: `7px solid ${P.ink}`, borderRadius: 20, padding: '4px 26px', boxShadow: `6px 8px 0 ${P.ink}`}}>
              77 DAYS UNDERWATER
            </span>
          </div>
        </>
      )}
      <div style={{position: 'absolute', right: -10, bottom: -40, width: 230, height: 230, transform: 'rotate(8deg)'}}>
        <div style={{width: '100%', height: '100%', borderRadius: '50%', border: `8px solid ${P.ink}`, overflow: 'hidden'}}>
          <Peek />
        </div>
      </div>
    </AbsoluteFill>
  );
};
