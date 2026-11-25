// Thumbnail tĩnh 1280×720 (renderStill). Không dùng chung code với Story.tsx.
import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {loadFont} from '@remotion/google-fonts/BeVietnamPro';

const {fontFamily} = loadFont('normal', {weights: ['900'], subsets: ['vietnamese', 'latin']});

export type ThumbProps = {img: string; line1: string; line2: string};

const stroke = (w: number, c: string) =>
  Array.from({length: 16}, (_, i) => {
    const a = (i / 16) * Math.PI * 2;
    return `${(Math.cos(a) * w).toFixed(1)}px ${(Math.sin(a) * w).toFixed(1)}px 0 ${c}`;
  }).join(',');

export const Thumb: React.FC<ThumbProps> = ({img, line1, line2}) => (
  <AbsoluteFill style={{background: '#000', fontFamily}}>
    <Img src={staticFile(img)} style={{position: 'absolute', width: 1280, height: 720, objectFit: 'cover'}} />
    <AbsoluteFill style={{background: 'linear-gradient(90deg, rgba(0,0,0,0) 45%, rgba(5,5,25,.55) 70%, rgba(5,5,25,.7) 100%)'}} />
    <div style={{position: 'absolute', right: 40, top: 70, width: 560, textAlign: 'center'}}>
      <div style={{fontSize: 112, fontWeight: 900, lineHeight: 1.05, color: '#ffe14a', letterSpacing: -2,
        textShadow: `${stroke(7, '#000')}, 0 10px 18px rgba(0,0,0,.6)`}}>{line1}</div>
      <div style={{display: 'inline-block', marginTop: 44, transform: 'rotate(-4deg)', background: '#f4efe2',
        padding: '4px 34px 10px', borderRadius: 6, boxShadow: '0 10px 24px rgba(0,0,0,.6), 0 0 0 5px #000'}}>
        <div style={{fontSize: 128, fontWeight: 900, lineHeight: 1, color: '#d4161c', fontVariantNumeric: 'tabular-nums', letterSpacing: 2}}>{line2}</div>
      </div>
    </div>
  </AbsoluteFill>
);
