import React from 'react';
import {C, Figure, Label, MARKER} from '../ui';

export const Silo: React.FC<{frame: number; scene: string}> = ({frame, scene}) => {
  const night = scene === 'sleep' || scene === 'msg';
  const carY = scene === 'food' ? 230 + Math.min(1, Math.max(0, (frame - 30) / 90)) * 500 : 730;
  const blink = scene === 'msg' && Math.floor(frame / 6) % 2 === 0;
  return (
    <g>
      <defs>
        <linearGradient id="sky3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={night ? '#1b1f3b' : '#8ecae6'} />
          <stop offset="1" stopColor={night ? '#3d3f6b' : '#ffe8b0'} />
        </linearGradient>
        <linearGradient id="earth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8a5a3b" />
          <stop offset="1" stopColor="#3e2a1f" />
        </linearGradient>
      </defs>
      <rect x={-400} y={-400} width={2720} height={670} fill="url(#sky3)" />
      <rect x={-400} y={262} width={2720} height={1300} fill="url(#earth)" />
      {Array.from({length: 40}).map((_, i) => (
        <circle key={i} cx={(i * 263) % 1920} cy={320 + ((i * 151) % 740)} r={4 + (i % 4)} fill="#2e1f17" opacity={0.5} />
      ))}
      {/* wheat */}
      <rect x={-400} y={238} width={2720} height={28} fill="#e9c46a" stroke={C.ink} strokeWidth={5} />
      {Array.from({length: 120}).map((_, i) => (
        <line key={i} x1={-400 + i * 24} y1={240} x2={-396 + i * 24 + Math.sin((frame + i * 9) / 14) * 4} y2={214} stroke="#c9a227" strokeWidth={4} strokeLinecap="round" />
      ))}
      {/* facility building (cutaway) */}
      <polygon points="300,150 520,70 740,150" fill="#bc4749" stroke={C.ink} strokeWidth={6} />
      <rect x={320} y={150} width={400} height={92} fill={C.paper} stroke={C.ink} strokeWidth={6} />
      <rect x={350} y={190} width={70} height={14} fill="#6c757d" stroke={C.ink} strokeWidth={3} />
      <rect x={358} y={172} width={20} height={18} fill="#adb5bd" stroke={C.ink} strokeWidth={3} />
      <Figure x={440} y={240} s={0.55} hat="chef" shirt="#ffffff" />
      {scene === 'food' && frame < 40 && <rect x={470} y={196} width={30} height={14} rx={3} fill="#e9c46a" stroke={C.ink} strokeWidth={3} />}
      <Label x={520} y={140} t="LAUNCH CONTROL FACILITY" size={18} color={night ? '#fff' : C.navy} />
      {/* elevator shaft */}
      <rect x={560} y={242} width={70} height={490} fill="#2b2d42" stroke={C.ink} strokeWidth={5} />
      <rect x={566} y={carY - 40} width={58} height={40} fill="#adb5bd" stroke={C.ink} strokeWidth={4} />
      {scene === 'food' && <rect x={580} y={carY - 26} width={30} height={14} rx={3} fill="#e9c46a" stroke={C.ink} strokeWidth={3} />}
      <Label x={645} y={400} t="60 FT DOWN" size={22} color="#fff" anchor="start" />
      {/* capsule */}
      <rect x={220} y={730} width={790} height={230} rx={115} fill={C.steel} stroke={C.ink} strokeWidth={7} />
      <rect x={244} y={752} width={742} height={186} rx={93} fill={night ? '#d9d2c0' : C.paper} stroke={C.ink} strokeWidth={4} />
      {/* bed */}
      <rect x={300} y={880} width={140} height={22} rx={6} fill="#e0e7ec" stroke={C.ink} strokeWidth={4} />
      {scene === 'sleep' ? (
        <g>
          <Figure x={410} y={872} s={0.5} pose="lie" shirt="#457b9d" />
          <text x={330} y={840} fontFamily={MARKER} fontSize={26} fill={C.navy}>
            {['z', 'zZ', 'zZz'][Math.floor(frame / 15) % 3]}
          </text>
        </g>
      ) : null}
      {/* consoles */}
      <rect x={520} y={790} width={210} height={96} rx={8} fill="#5c677d" stroke={C.ink} strokeWidth={5} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={534 + i * 48} y={804} width={36} height={26} fill={i === 1 && blink ? C.red : '#2a9d8f'} stroke={C.ink} strokeWidth={3} />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle key={i} cx={540 + i * 34} cy={850} r={6} fill={i % 2 ? '#ffd166' : '#ef476f'} stroke={C.ink} strokeWidth={2} />
      ))}
      <Figure x={570} y={938} s={0.55} pose="sit" cap shirt="#1d3557" />
      {scene !== 'sleep' && <Figure x={670} y={938} s={0.55} pose="sit" shirt="#1d3557" />}
      <Label x={625} y={780} t="LAUNCH CONSOLE" size={16} />
      {/* toilet behind curtain */}
      <rect x={770} y={880} width={42} height={40} rx={8} fill="#ffffff" stroke={C.ink} strokeWidth={4} />
      <rect x={766} y={860} width={50} height={18} rx={4} fill="#ffffff" stroke={C.ink} strokeWidth={4} />
      <path d={`M 830 790 Q ${845 + Math.sin(frame / 10) * 4} 860 830 935`} stroke="#b56576" strokeWidth={12} fill="none" />
      <Label x={790} y={850} t="WC" size={16} />
      {/* blast door */}
      <circle cx={950} cy={845} r={74} fill="#8d99ae" stroke={C.ink} strokeWidth={7} />
      <circle cx={950} cy={845} r={52} fill="#adb5bd" stroke={C.ink} strokeWidth={4} />
      <line x1={910} y1={845} x2={990} y2={845} stroke={C.ink} strokeWidth={6} />
      <line x1={950} y1={805} x2={950} y2={885} stroke={C.ink} strokeWidth={6} />
      <Label x={950} y={945} t="BLAST DOOR" size={16} color="#fff" />
      {/* missile silo far away */}
      <line x1={1010} y1={845} x2={1440} y2={845} stroke="#ffd166" strokeWidth={4} strokeDasharray="14 10" />
      <Label x={1225} y={830} t="CABLE · MILES" size={18} color="#ffd166" />
      <rect x={1430} y={262} width={170} height={660} fill="#3a3a3a" stroke={C.ink} strokeWidth={6} />
      <path d="M 1475 900 L 1475 380 Q 1515 300 1555 380 L 1555 900 Z" fill="#f8f9fa" stroke={C.ink} strokeWidth={6} />
      <rect x={1475} y={600} width={80} height={14} fill={C.ink} />
      <rect x={1410} y={232} width={210} height={30} fill="#6c757d" stroke={C.ink} strokeWidth={5} />
      <Label x={1515} y={990} t="1 OF 10 MISSILES" size={22} color="#fff" />
    </g>
  );
};
