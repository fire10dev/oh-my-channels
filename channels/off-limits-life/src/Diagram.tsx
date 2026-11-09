import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, HAND, MARKER} from './ui';
import {LUCKY, NUNITO, P, Peek} from './Brand2';

export type DiagramSpec =
  | {type: 'note'; title: string; lines: string[]; stamp?: string}
  | {type: 'compare'; left: string[]; right: string[]; note?: string}
  | {type: 'flow'; steps: string[]; note?: string}
  | {type: 'calendar'; days: number; fresh: number; label: string}
  | {type: 'meter'; fromv: number; tov: number; label: string}
  | {type: 'big'; big: string; small: string}
  | {type: 'brand'; tag: string};

const Board: React.FC<{children: React.ReactNode}> = ({children}) => (
  <AbsoluteFill
    style={{
      background: '#14213d',
      backgroundImage:
        'linear-gradient(rgba(255,255,255,0.05) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.05) 2px, transparent 2px)',
      backgroundSize: '64px 64px',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {children}
  </AbsoluteFill>
);

const card: React.CSSProperties = {
  background: C.cream,
  border: `7px solid ${C.ink}`,
  borderRadius: 26,
  boxShadow: '14px 16px 0 rgba(0,0,0,0.4)',
};

export const Diagram: React.FC<{d: DiagramSpec; start: number; dur: number}> = ({d, start, dur}) => {
  const f = useCurrentFrame() - start;
  const {fps} = useVideoConfig();
  if (f < 0) return null;
  const pop = (delay: number) => spring({frame: f - delay, fps, config: {damping: 14, stiffness: 160}});
  const span = Math.max(30, dur - start - 30);

  if (d.type === 'note') {
    const p = pop(0);
    return (
      <Board>
        <div style={{...card, width: 1100, padding: '50px 70px 150px', transform: `scale(${0.8 + 0.2 * p}) rotate(-1.5deg)`, position: 'relative'}}>
          <div style={{fontFamily: MARKER, fontSize: 92, color: C.red}}>{d.title}</div>
          {d.lines.map((l, i) => (
            <div key={i} style={{fontFamily: HAND, fontSize: 64, color: C.navy, opacity: pop(8 + i * 10), lineHeight: 1.25}}>
              {l}
            </div>
          ))}
          {d.stamp && (
            <div
              style={{
                position: 'absolute',
                right: 50,
                bottom: 30,
                fontFamily: MARKER,
                fontSize: 64,
                color: C.red,
                border: `8px solid ${C.red}`,
                borderRadius: 14,
                padding: '4px 24px',
                transform: `rotate(-12deg) scale(${1.6 - 0.6 * pop(30)})`,
                opacity: pop(30),
              }}
            >
              {d.stamp}
            </div>
          )}
        </div>
      </Board>
    );
  }

  if (d.type === 'compare') {
    const col = (c: string[], delay: number, color: string) => (
      <div style={{...card, width: 640, padding: '40px 30px', textAlign: 'center', transform: `translateY(${(1 - pop(delay)) * 400}px)`}}>
        <div style={{fontFamily: HAND, fontSize: 52, color: C.navy}}>{c[0]}</div>
        <div style={{fontFamily: MARKER, fontSize: 96, color, lineHeight: 1.05}}>{c[1]}</div>
        <div style={{fontFamily: HAND, fontSize: 58, color: C.navy}}>{c[2]}</div>
      </div>
    );
    return (
      <Board>
        <div style={{display: 'flex', gap: 80, alignItems: 'center'}}>
          {col(d.left, 0, '#457b9d')}
          <div style={{fontFamily: MARKER, fontSize: 110, color: C.orange, opacity: pop(10)}}>→</div>
          {col(d.right, 14, '#e9a400')}
        </div>
        {d.note && (
          <div style={{position: 'absolute', top: 170, fontFamily: HAND, fontSize: 48, color: '#cdd6e4', opacity: pop(24)}}>{d.note}</div>
        )}
      </Board>
    );
  }

  if (d.type === 'flow') {
    const n = d.steps.length;
    const per = span / n;
    return (
      <Board>
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
          {d.steps.map((s, i) => {
            const p = pop(i * per * 0.75);
            return (
              <React.Fragment key={i}>
                {i > 0 && <div style={{fontFamily: MARKER, fontSize: 70, color: C.orange, opacity: p, flexShrink: 0}}>→</div>}
                <div
                  style={{
                    ...card,
                    width: 330,
                    minHeight: 190,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontFamily: MARKER,
                    fontSize: 40,
                    color: C.navy,
                    padding: 16,
                    transform: `scale(${p})`,
                    background: i === n - 1 ? '#ffe8a3' : C.cream,
                  }}
                >
                  {s}
                </div>
              </React.Fragment>
            );
          })}
        </div>
        {d.note && (
          <div style={{position: 'absolute', top: 190, fontFamily: HAND, fontSize: 52, color: '#cdd6e4', opacity: pop(n * per * 0.75)}}>{d.note}</div>
        )}
      </Board>
    );
  }

  if (d.type === 'calendar') {
    const shown = Math.floor(interpolate(f, [0, span], [0, d.days], {extrapolateRight: 'clamp'}));
    return (
      <Board>
        <div style={{...card, padding: '34px 40px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(11, 96px)', gap: 12}}>
            {Array.from({length: d.days}).map((_, i) => {
              const on = i < shown;
              const fresh = i < d.fresh;
              return (
                <div
                  key={i}
                  style={{
                    height: 62,
                    borderRadius: 10,
                    border: `4px solid ${C.ink}`,
                    background: !on ? '#f6efe2' : fresh ? '#90be6d' : '#b8b8aa',
                    fontFamily: HAND,
                    fontSize: 30,
                    color: C.navy,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {on ? (fresh ? '🥗' : i + 1) : i + 1}
                </div>
              );
            })}
          </div>
          <div style={{display: 'flex', gap: 40, marginTop: 22, fontFamily: HAND, fontSize: 44, color: C.navy}}>
            <span>🟩 fresh</span>
            <span>⬜ frozen · canned · powdered</span>
          </div>
        </div>
        <div style={{position: 'absolute', top: 70, fontFamily: MARKER, fontSize: 60, color: C.cream}}>{d.label}</div>
      </Board>
    );
  }

  if (d.type === 'meter') {
    const v = interpolate(f, [20, Math.min(span, 120)], [d.fromv, d.tov], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
    return (
      <Board>
        <div style={{...card, width: 1300, padding: '50px 60px'}}>
          <div style={{fontFamily: HAND, fontSize: 56, color: C.navy, marginBottom: 26}}>{d.label}</div>
          <div style={{height: 110, border: `7px solid ${C.ink}`, borderRadius: 60, background: '#f6efe2', overflow: 'hidden'}}>
            <div style={{width: `${(v / 50) * 100}%`, height: '100%', background: C.red}} />
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 16}}>
            <span style={{fontFamily: MARKER, fontSize: 60, color: C.navy}}>start of patrol {d.fromv}%</span>
            <span style={{fontFamily: MARKER, fontSize: 96, color: C.red}}>{Math.round(v)}%</span>
          </div>
        </div>
      </Board>
    );
  }

  if (d.type === 'brand') {
    const rise = pop(0);
    const bob = Math.sin(f / 9) * 6;
    const sub = pop(40);
    return (
      <AbsoluteFill style={{background: P.sun, alignItems: 'center', justifyContent: 'center'}}>
        {Array.from({length: 30}).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: (i * 263) % 1920,
              top: ((i * 151) % 1080) + Math.sin((f + i * 12) / 20) * 10,
              fontFamily: LUCKY,
              fontSize: 60 + (i % 3) * 16,
              color: [P.coral, P.teal, P.sky, P.white][i % 4],
              opacity: 0.5,
              WebkitTextStroke: `3px ${P.ink}`,
              transform: `rotate(${((i * 47) % 50) - 25}deg)`,
            }}
          >
            {['?', '!', '★', '?'][i % 4]}
          </div>
        ))}
        <div style={{display: 'flex', alignItems: 'center', gap: 60, transform: `translateY(${(1 - rise) * 600 + bob}px)`}}>
          <div style={{width: 420, height: 420, borderRadius: '50%', border: `12px solid ${P.ink}`, boxShadow: `12px 14px 0 ${P.ink}`, overflow: 'hidden'}}>
            <Peek />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', transform: 'rotate(-3deg)'}}>
            <div style={{fontFamily: LUCKY, fontSize: 150, lineHeight: 0.95, color: P.white, WebkitTextStroke: `12px ${P.ink}`, paintOrder: 'stroke fill', textShadow: `9px 11px 0 ${P.ink}`}}>
              OFF LIMITS <span style={{color: P.coral}}>LIFE</span>
            </div>
            <div style={{fontFamily: NUNITO, fontWeight: 900, fontSize: 48, color: P.ink, marginTop: 18, background: P.white, border: `6px solid ${P.ink}`, borderRadius: 40, padding: '6px 28px', alignSelf: 'flex-start'}}>
              {d.tag}
            </div>
            <div style={{fontFamily: LUCKY, fontSize: 70, color: P.white, background: P.coral, border: `8px solid ${P.ink}`, borderRadius: 24, padding: '10px 40px', marginTop: 30, alignSelf: 'flex-start', transform: `scale(${sub})`, boxShadow: `8px 10px 0 ${P.ink}`}}>
              SUBSCRIBE
            </div>
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  // big
  const p = pop(0);
  return (
    <Board>
      <div style={{textAlign: 'center', transform: `scale(${0.6 + 0.4 * p})`}}>
        <div style={{fontFamily: MARKER, fontSize: d.big.length > 5 ? 170 : 380, color: C.orange, lineHeight: 1, WebkitTextStroke: `12px ${C.ink}`, paintOrder: 'stroke fill'}}>
          {d.big}
        </div>
        <div style={{fontFamily: HAND, fontSize: 70, color: C.cream}}>{d.small}</div>
      </div>
    </Board>
  );
};
