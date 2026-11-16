import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {FONT} from './tracks';

// Transparent 1-fps overlay for a 1-hour Pomodoro video: 2 × (25 min focus + 5 min break).
// pomodoro.sh renders it as a PNG sequence and lays it over the looped scene + music.
export const POMO = {focus: 25 * 60, rest: 5 * 60, rounds: 2};

const phaseAt = (t: number) => {
  const cycle = POMO.focus + POMO.rest;
  const round = Math.floor(t / cycle);
  const inCycle = t % cycle;
  const focus = inCycle < POMO.focus;
  const length = focus ? POMO.focus : POMO.rest;
  const elapsed = focus ? inCycle : inCycle - POMO.focus;
  return {round, focus, length, remaining: length - elapsed, progress: elapsed / length};
};

const mmss = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

export const PomodoroOverlay: React.FC<{accent: string; trackName: string}> = ({accent, trackName}) => {
  const t = useCurrentFrame();
  const p = phaseAt(t);
  const color = p.focus ? accent : '#8fe3b0';
  return (
    <AbsoluteFill style={{fontFamily: FONT, color: '#fff'}}>
      <AbsoluteFill
        style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0) 16%, rgba(0,0,0,0) 84%, rgba(0,0,0,0.45))'}}
      />
      <div style={{position: 'absolute', top: 48, left: 64, fontSize: 24, letterSpacing: 6, fontWeight: 700, textShadow: '0 2px 10px rgba(0,0,0,0.6)'}}>
        VIBE MUSIC AI MAKER · <span style={{color: accent}}>POMODORO 25/5</span>
      </div>
      <div
        style={{
          position: 'absolute',
          left: '34%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 640,
          padding: '36px 48px 40px',
          borderRadius: 36,
          background: 'rgba(10,10,18,0.5)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.16)',
          textAlign: 'center',
        }}
      >
        <div style={{fontSize: 34, fontWeight: 800, letterSpacing: 8, color}}>
          {p.focus ? `FOCUS · ${p.round + 1}/${POMO.rounds}` : 'BREAK · STRETCH'}
        </div>
        <div style={{fontSize: 200, fontWeight: 800, lineHeight: 1.05, marginTop: 6, fontVariantNumeric: 'tabular-nums'}}>{mmss(p.remaining)}</div>
        <div style={{height: 10, borderRadius: 5, background: 'rgba(255,255,255,0.18)', marginTop: 14, overflow: 'hidden'}}>
          <div style={{height: '100%', width: `${p.progress * 100}%`, background: color}} />
        </div>
      </div>
      <div style={{position: 'absolute', bottom: 52, left: 0, right: 0, textAlign: 'center', fontSize: 26, fontWeight: 600, opacity: 0.85, textShadow: '0 2px 10px rgba(0,0,0,0.6)'}}>
        {trackName}
      </div>
    </AbsoluteFill>
  );
};
