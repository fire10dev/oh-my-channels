import React from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Montserrat';
const {fontFamily} = loadFont('normal', {weights: ['800', '900'], subsets: ['latin', 'latin-ext']});

// Stylised globe: circle + meridians/parallels, one "highlighted country" blob, a latitude line.
const Globe: React.FC<{size: number}> = ({size}) => (
  <svg width={size} height={size} viewBox="-100 -100 200 200">
    <defs><clipPath id="c"><circle r={90} /></clipPath></defs>
    <circle r={90} fill="#13233b" stroke="#ff4d4d" strokeWidth={6} />
    <g clipPath="url(#c)" stroke="#2d4566" strokeWidth={2.2} fill="none">
      {[-60, -30, 0, 30, 60].map((y) => <ellipse key={y} cx={0} cy={y} rx={Math.sqrt(8100 - y * y)} ry={4} />)}
      {[20, 45, 70].map((rx) => <ellipse key={rx} cx={0} cy={0} rx={rx} ry={90} />)}
      <line x1={0} y1={-90} x2={0} y2={90} />
      <path d="M-55,-35 C-30,-55 5,-50 15,-30 C25,-10 5,5 -10,15 C-25,25 -45,10 -55,-5 Z" fill="#3b82f6" stroke="none" />
      <path d="M20,10 C40,0 62,10 60,35 C58,55 35,62 22,48 C12,38 10,20 20,10 Z" fill="#ff4d4d" stroke="none" />
      <line x1={-95} y1={-20} x2={95} y2={-20} stroke="#ffd23f" strokeWidth={5} />
    </g>
  </svg>
);

export const Logo: React.FC<{}> = () => (
  <AbsoluteFill style={{background: '#0a1424', alignItems: 'center', justifyContent: 'center'}}><Globe size={700} /></AbsoluteFill>
);

export const Banner: React.FC<{title: string; tag: string}> = ({title, tag}) => (
  <AbsoluteFill style={{background: 'radial-gradient(ellipse at 50% 50%, #12233d, #0a1424 70%)', fontFamily, alignItems: 'center', justifyContent: 'center'}}>
    {/* safe area 1546x423 centred */}
    <div style={{display: 'flex', alignItems: 'center', gap: 50}}>
      <Globe size={330} />
      <div>
        <div style={{fontSize: Math.min(150, Math.round(1100 / (title.length * 0.66))), fontWeight: 900, color: '#fff', letterSpacing: -3, lineHeight: 1}}>{title}</div>
        <div style={{fontSize: 52, fontWeight: 800, color: '#ffd23f', marginTop: 18}}>{tag}</div>
      </div>
    </div>
  </AbsoluteFill>
);
