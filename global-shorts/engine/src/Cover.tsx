// Shorts cover (1080x1920): a real frame of the short + big localised hook, OLL palette.
import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {LUCKY, NUNITO, P} from '../../../channels/off-limits-life/src/Brand2';

export type CoverProps = {img: string; big: string; small: string; tag: string};
export const CoverX: React.FC<CoverProps> = ({img, big, small, tag}) => {
  const lines = big.split('\n');
  const longest = Math.max(...lines.map((l) => l.length));
  const fs = Math.min(190, Math.round(1500 / Math.max(longest, 6)));
  return (
    <AbsoluteFill style={{background: '#000'}}>
      <Img src={staticFile(img)} style={{width: 1080, height: 1920, objectFit: 'cover'}} />
      <AbsoluteFill style={{background: 'linear-gradient(180deg, #14213d 0%, #14213d 21%, rgba(20,33,61,0.0) 34%, rgba(0,0,0,0) 72%, rgba(0,0,0,0.55) 100%)'}} />
      <div style={{position: 'absolute', left: 50, right: 50, top: 170, textAlign: 'center', fontFamily: LUCKY, fontSize: fs, lineHeight: 0.95, color: P.sun,
        WebkitTextStroke: `16px ${P.ink}`, paintOrder: 'stroke fill', textShadow: `10px 12px 0 ${P.ink}`, transform: 'rotate(-3deg)', textTransform: 'uppercase'}}>
        {lines.map((l, i) => <div key={i}>{l}</div>)}
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 170 + lines.length * fs + 60, textAlign: 'center'}}>
        <span style={{fontFamily: NUNITO, fontWeight: 900, fontSize: 58, color: P.ink, background: P.white, border: `7px solid ${P.ink}`, borderRadius: 20, padding: '6px 28px', display: 'inline-block', transform: 'rotate(-3deg)'}}>
          {small}
        </span>
      </div>
      <div style={{position: 'absolute', right: 60, bottom: 560, fontFamily: LUCKY, fontSize: 80, color: P.white, background: P.coral, border: `8px solid ${P.ink}`, borderRadius: 22, padding: '6px 26px', transform: 'rotate(5deg)', boxShadow: `8px 10px 0 ${P.ink}`}}>
        {tag}
      </div>
    </AbsoluteFill>
  );
};
