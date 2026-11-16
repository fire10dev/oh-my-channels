import React from 'react';
import {C, Figure, Label, MARKER} from '../ui';

export const SatDiver: React.FC<{frame: number; scene: string}> = ({frame, scene}) => {
  const wave = (y: number, a: number, ph: number) => {
    let d = `M -400 ${y}`;
    for (let x = -400; x <= 2320; x += 40) d += ` L ${x} ${y + Math.sin((x + frame * 3 + ph) / 60) * a}`;
    return d;
  };
  const bellY = 860 + Math.sin(frame / 25) * 6;
  const lockOpen = scene === 'food' && frame > 40;
  return (
    <g>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9bd1e5" />
          <stop offset="1" stopColor="#e8f4f8" />
        </linearGradient>
        <linearGradient id="sea2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a6f97" />
          <stop offset="1" stopColor="#081c33" />
        </linearGradient>
      </defs>
      <rect x={-400} y={-400} width={2720} height={710} fill="url(#sky)" />
      <rect x={-400} y={300} width={2720} height={1200} fill="url(#sea2)" />
      <path d={wave(300, 5, 0) + ' L 2320 340 L -400 340 Z'} fill="#2a6f97" />
      {/* seabed + pipeline */}
      <path d="M -400 990 Q 300 960 900 985 T 2320 975 L 2320 1500 L -400 1500 Z" fill="#c2a878" stroke={C.ink} strokeWidth={6} />
      <rect x={700} y={958} width={800} height={22} rx={10} fill="#e9c46a" stroke={C.ink} strokeWidth={5} />
      <Label x={1450} y={1025} t="PIPELINE" size={22} />
      {/* depth ruler */}
      <line x1={1300} y1={320} x2={1300} y2={985} stroke="#ffffff" strokeWidth={4} strokeDasharray="10 10" opacity={0.8} />
      {[0, 25, 50, 75, 100].map((m) => (
        <g key={m}>
          <line x1={1288} y1={320 + m * 6.6} x2={1312} y2={320 + m * 6.6} stroke="#fff" strokeWidth={4} />
          <text x={1322} y={328 + m * 6.6} fontFamily={MARKER} fontSize={22} fill="#fff">
            -{m} m
          </text>
        </g>
      ))}
      {scene === 'leave' && (
        <g>
          <path d="M 1230 940 L 1230 380" stroke={C.orange} strokeWidth={10} markerEnd="" />
          <polygon points="1230,350 1210,390 1250,390" fill={C.orange} stroke={C.ink} strokeWidth={4} />
          <text x={1215} y={660} fontFamily={MARKER} fontSize={34} fill={C.orange} textAnchor="end" stroke={C.ink} strokeWidth={1.5}>
            SEVERAL DAYS
          </text>
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const y = 900 - ((frame * 2 + i * 70) % 500);
            return <circle key={i} cx={1100 + Math.sin((frame + i * 30) / 9) * 14} cy={y} r={7} fill="none" stroke="#fff" strokeWidth={3} />;
          })}
        </g>
      )}
      {/* ship hull */}
      <path d="M 160 280 L 1520 280 L 1460 360 L 240 360 Z" fill="#c1121f" stroke={C.ink} strokeWidth={7} />
      <rect x={160} y={262} width={1360} height={22} fill="#f1faee" stroke={C.ink} strokeWidth={5} />
      {/* bridge */}
      <rect x={1180} y={120} width={240} height={142} rx={8} fill="#f1faee" stroke={C.ink} strokeWidth={6} />
      {[1200, 1260, 1320, 1380].map((x) => (
        <rect key={x} x={x} y={140} width={40} height={28} fill="#457b9d" stroke={C.ink} strokeWidth={3} />
      ))}
      {/* crane + bell cable down moonpool */}
      <line x1={1100} y1={262} x2={1100} y2={60} stroke={C.ink} strokeWidth={10} />
      <line x1={1100} y1={70} x2={1160} y2={70} stroke={C.ink} strokeWidth={8} />
      <line x1={1100} y1={70} x2={1100} y2={bellY - 40} stroke="#222" strokeWidth={3} />
      <g transform={`translate(1100 ${bellY})`}>
        <path d="M -45 30 L -45 -20 Q 0 -70 45 -20 L 45 30 Z" fill="#ffb703" stroke={C.ink} strokeWidth={6} />
        <circle cx={0} cy={-6} r={12} fill="#8ecae6" stroke={C.ink} strokeWidth={4} />
      </g>
      <Label x={1170} y={bellY - 30} t="DIVING BELL" size={20} color="#fff" anchor="start" />
      <Figure x={980} y={958} s={0.5} shirt="#264653" />
      <Figure x={1180} y={958} s={0.5} shirt="#264653" flip />
      {/* saturation chamber complex on deck (cutaway) */}
      <rect x={400} y={190} width={330} height={110} rx={55} fill={C.steel} stroke={C.ink} strokeWidth={6} />
      <rect x={418} y={204} width={294} height={82} rx={41} fill={C.paper} stroke={C.ink} strokeWidth={4} />
      <rect x={445} y={262} width={80} height={10} fill="#a26b3c" stroke={C.ink} strokeWidth={3} />
      <Figure x={480} y={282} s={0.55} pose="sit" cap shirt="#e76f51" />
      <Figure x={580} y={282} s={0.55} shirt="#2a9d8f" />
      <Figure x={660} y={282} s={0.55} shirt="#e9c46a" flip />
      <Label x={565} y={182} t="LIVING CHAMBER" size={20} />
      {/* medical lock */}
      <rect x={730} y={232} width={40} height={20} fill={C.steelDark} stroke={C.ink} strokeWidth={4} />
      <rect x={768} y={210} width={70} height={66} rx={8} fill={C.steel} stroke={C.ink} strokeWidth={5} />
      <rect x={776} y={218} width={54} height={50} rx={5} fill={lockOpen ? '#ffe8a3' : C.paper} stroke={C.ink} strokeWidth={3} />
      <rect x={784 + (scene === 'food' ? Math.max(0, 30 - frame) : 0)} y={240} width={34} height={20} rx={4} fill="#e9c46a" stroke={C.ink} strokeWidth={3} />
      <Label x={803} y={200} t="FOOD LOCK" size={14} />
      <Figure x={880} y={262} s={0.55} shirt="#ffffff" />
      {/* hyperbaric lifeboat */}
      <line x1={1470} y1={262} x2={1470} y2={196} stroke={C.ink} strokeWidth={6} />
      <line x1={1470} y1={196} x2={1395} y2={196} stroke={C.ink} strokeWidth={6} />
      <rect x={1330} y={210} width={150} height={60} rx={30} fill="#f77f00" stroke={C.ink} strokeWidth={6} />
      <circle cx={1370} cy={240} r={11} fill="#8ecae6" stroke={C.ink} strokeWidth={3} />
      <Label x={1405} y={300} t="PRESSURIZED LIFEBOAT" size={14} color="#fff" />
      {scene === 'voice' && (
        <g>
          {[0, 1, 2].map((i) => {
            const r = ((frame * 1.5 + i * 14) % 42) + 6;
            return <circle key={i} cx={660} cy={232} r={r} fill="none" stroke={C.orange} strokeWidth={3} opacity={1 - r / 48} />;
          })}
        </g>
      )}
    </g>
  );
};
