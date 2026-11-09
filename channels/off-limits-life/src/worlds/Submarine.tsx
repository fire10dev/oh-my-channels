import React from 'react';
import {C, Figure, Label, MARKER} from '../ui';

const Bubbles: React.FC<{frame: number; x0: number; x1: number; y0: number; y1: number; n: number; seed: number; r?: number}> = ({
  frame,
  x0,
  x1,
  y0,
  y1,
  n,
  seed,
  r = 5,
}) => {
  const out = [];
  for (let i = 0; i < n; i++) {
    const rx = ((i * 73 + seed * 31) % 100) / 100;
    const sp = 0.6 + (((i * 37 + seed) % 10) / 10) * 0.8;
    const y = y1 - (((frame * sp * 2 + i * 97) % (y1 - y0)));
    const x = x0 + rx * (x1 - x0) + Math.sin((frame + i * 20) / 12) * 4;
    out.push(<circle key={i} cx={x} cy={y} r={r * (0.6 + rx * 0.6)} fill="none" stroke="#cfefff" strokeWidth={2} opacity={0.7} />);
  }
  return <g>{out}</g>;
};

export const Submarine: React.FC<{frame: number; scene: string}> = ({frame, scene}) => {
  const hull = C.steel;
  const wall = (x: number, y0 = 432, y1 = 668) => <line x1={x} y1={y0} x2={x} y2={y1} stroke={C.ink} strokeWidth={5} />;
  const drip = (x: number) =>
    [0, 1, 2, 3].map((i) => {
      const y = 588 + ((frame * 3 + i * 14) % 52);
      return <line key={i} x1={x - 6 + i * 4} y1={y} x2={x - 6 + i * 4} y2={y + 6} stroke="#4cc9f0" strokeWidth={3} strokeLinecap="round" />;
    });
  const showerOn = scene === 'shower' ? Math.floor(frame / 30) % 3 !== 1 : true;
  return (
    <g>
      <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b5876" />
          <stop offset="1" stopColor="#0b1d33" />
        </linearGradient>
      </defs>
      <rect x={-400} y={-400} width={2720} height={1880} fill="url(#sea)" />
      {[0, 1, 2, 3].map((i) => (
        <polygon key={i} points={`${200 + i * 420},-100 ${300 + i * 420},-100 ${120 + i * 420},1100 ${40 + i * 420},1100`} fill="#ffffff" opacity={0.035} />
      ))}
      <Bubbles frame={frame} x0={0} x1={1920} y0={0} y1={1080} n={26} seed={3} r={6} />
      {/* tail + propeller */}
      <polygon points="150,550 70,470 70,630" fill={C.steelDark} stroke={C.ink} strokeWidth={6} />
      <rect x={40} y={520} width={22} height={60} rx={8} fill="#c9a227" stroke={C.ink} strokeWidth={5} />
      {/* sail */}
      <rect x={430} y={300} width={230} height={120} rx={22} fill={hull} stroke={C.ink} strokeWidth={6} />
      <rect x={400} y={340} width={290} height={14} rx={6} fill={C.steelDark} stroke={C.ink} strokeWidth={4} />
      <line x1={560} y1={300} x2={560} y2={240} stroke={C.ink} strokeWidth={6} />
      <rect x={548} y={230} width={34} height={14} fill={C.ink} />
      {/* hull */}
      <rect x={140} y={400} width={1640} height={300} rx={150} fill={hull} stroke={C.ink} strokeWidth={7} />
      <rect x={190} y={430} width={1540} height={240} rx={112} fill={C.paper} stroke={C.ink} strokeWidth={5} />
      <line x1={200} y1={550} x2={1720} y2={550} stroke={C.ink} strokeWidth={5} />
      {wall(260)}
      {wall(450)}
      {wall(650)}
      {wall(950)}
      {wall(1400)}
      {/* reactor */}
      <rect x={262} y={432} width={186} height={116} fill="#fff4c2" />
      <circle cx={355} cy={492} r={34} fill="#ffd166" stroke={C.ink} strokeWidth={5} />
      <path d="M355 470 l10 18 h-20 z M335 502 l20 0 l-10 16z" fill={C.ink} opacity={0.7} />
      <Label x={355} y={452} t="REACTOR" />
      {/* control */}
      <line x1={560} y1={432} x2={560} y2={520} stroke={C.ink} strokeWidth={6} />
      <rect x={470} y={470} width={50} height={36} fill="#2a9d8f" stroke={C.ink} strokeWidth={4} />
      <rect x={600} y={470} width={40} height={36} fill="#2a9d8f" stroke={C.ink} strokeWidth={4} />
      <Figure x={540} y={548} s={0.62} shirt="#1d3557" />
      <Figure x={610} y={548} s={0.62} shirt="#1d3557" flip />
      <Label x={550} y={452} t="CONTROL" />
      {/* mess */}
      <rect x={700} y={515} width={200} height={10} fill="#a26b3c" stroke={C.ink} strokeWidth={4} />
      <line x1={720} y1={525} x2={720} y2={548} stroke={C.ink} strokeWidth={4} />
      <line x1={880} y1={525} x2={880} y2={548} stroke={C.ink} strokeWidth={4} />
      {[730, 790, 850].map((x, i) => (
        <g key={x}>
          <rect x={x - 14} y={505} width={28} height={10} fill="#e9c46a" stroke={C.ink} strokeWidth={3} />
          <Figure x={x} y={548} s={0.55} pose="sit" cap={i === 1} shirt={i === 1 ? '#457b9d' : '#1d3557'} />
        </g>
      ))}
      {scene === 'food' && (
        <g>
          {[0, 1, 2].map((i) => (
            <rect key={i} x={905 + i * 0} y={448 + i * 22} width={36} height={18} rx={3} fill={i === 0 ? '#ffffff' : '#b7b7a4'} stroke={C.ink} strokeWidth={3} />
          ))}
          <Label x={923} y={515} t="CANNED" size={9} />
        </g>
      )}
      <Label x={800} y={452} t="MESS" />
      {/* missile tubes */}
      {[990, 1040, 1090, 1140, 1190, 1240, 1290, 1340].map((x) => (
        <rect key={x} x={x - 16} y={438} width={32} height={226} rx={14} fill="#d8dee3" stroke={C.ink} strokeWidth={4} />
      ))}
      <Label x={1175} y={460} t="MISSILE TUBES" size={16} />
      {/* torpedo / sonar */}
      {[470, 500, 530].map((y) => (
        <rect key={y} x={1430} y={y} width={180} height={18} rx={9} fill="#9aa5ad" stroke={C.ink} strokeWidth={3} />
      ))}
      <Label x={1530} y={452} t="TORPEDO ROOM" />
      {/* lower deck: O2 generator */}
      <rect x={290} y={575} width={70} height={80} rx={8} fill="#8ecae6" stroke={C.ink} strokeWidth={4} />
      <path d="M360 600 h40 v-20" stroke={C.ink} strokeWidth={5} fill="none" />
      <Bubbles frame={frame} x0={300} x1={350} y0={580} y1={650} n={6} seed={9} r={4} />
      <Label x={380} y={640} t="O₂ GEN" size={15} />
      {/* showers */}
      <line x1={525} y1={552} x2={525} y2={668} stroke={C.ink} strokeWidth={4} />
      {[488, 562].map((x) => (
        <g key={x}>
          <rect x={x - 14} y={572} width={28} height={10} fill={C.steelDark} stroke={C.ink} strokeWidth={3} />
          {showerOn && drip(x)}
        </g>
      ))}
      <Figure x={488} y={666} s={0.6} cap shirt="#ffffff" />
      <Label x={525} y={566} t="SHOWERS" size={12} />
      {scene === 'shower' && (
        <text x={562} y={630} fontFamily={MARKER} fontSize={16} fill={C.red} textAnchor="middle">
          {showerOn ? 'ON' : 'OFF'}
        </text>
      )}
      {/* berthing: racks 3 high */}
      {[690, 790, 890].map((x, ci) =>
        [0, 1, 2].map((r) => (
          <g key={`${x}-${r}`}>
            <rect x={x - 42} y={572 + r * 32} width={84} height={26} fill="#e0e7ec" stroke={C.ink} strokeWidth={3.5} />
            {(ci + r) % 2 === 0 && <Figure x={x + 22} y={585 + r * 32} s={0.3} pose="lie" cap={ci === 1 && r === 0} shirt="#457b9d" />}
          </g>
        )),
      )}
      <Label x={790} y={566} t="BERTHING" />
      {/* lower bow: sickbay + trash disposal unit */}
      <line x1={1520} y1={552} x2={1520} y2={668} stroke={C.ink} strokeWidth={4} />
      <rect x={1420} y={630} width={84} height={18} rx={5} fill="#ffffff" stroke={C.ink} strokeWidth={3.5} />
      <rect x={1438} y={575} width={28} height={28} fill="#ffffff" stroke={C.ink} strokeWidth={3} />
      <rect x={1448} y={579} width={8} height={20} fill={C.red} />
      <rect x={1442} y={585} width={20} height={8} fill={C.red} />
      <Figure x={1490} y={666} s={0.55} shirt="#ffffff" flip />
      <Label x={1465} y={566} t="SICKBAY" size={12} />
      <rect x={1560} y={575} width={40} height={93} fill="#9aa5ad" stroke={C.ink} strokeWidth={4} />
      <line x1={1580} y1={668} x2={1580} y2={712} stroke={C.ink} strokeWidth={10} />
      {(scene === 'trash1' || scene === 'trash2') && (
        <g>
          {[0, 1, 2].map((i) => {
            const y = 720 + ((frame * 2 + i * 120) % 360);
            return <rect key={i} x={1568} y={y} width={24} height={30} rx={4} fill="#adb5bd" stroke={C.ink} strokeWidth={3} />;
          })}
        </g>
      )}
      <Label x={1580} y={566} t="TDU" size={12} />
      {scene.startsWith('fire') && (
        <g>
          {Array.from({length: 9}).map((_, i) => {
            const t = (frame + i * 17) % 90;
            return <circle key={i} cx={470 + ((i * 41) % 170) + t * 0.4} cy={530 - t * 0.9} r={14 + t * 0.25} fill="#6c757d" opacity={0.45 * (1 - t / 90)} />;
          })}
          <line x1={520} y1={470} x2={452} y2={470} stroke={C.ink} strokeWidth={3} />
          <line x1={612} y1={470} x2={648} y2={470} stroke={C.ink} strokeWidth={3} />
          <circle cx={540} cy={500} r={6} fill={C.ink} />
          <circle cx={610} cy={500} r={6} fill={C.ink} />
          <rect x={448} y={462} width={10} height={16} fill={C.orange} stroke={C.ink} strokeWidth={2} />
          <rect x={642} y={462} width={10} height={16} fill={C.orange} stroke={C.ink} strokeWidth={2} />
        </g>
      )}
    </g>
  );
};
