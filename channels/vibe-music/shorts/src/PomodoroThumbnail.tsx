import {AbsoluteFill, Img, staticFile} from 'remotion';
import {FONT} from './tracks';

// 1280x720 thumbnail for the Pomodoro video, same layout family as ThumbCard plus a big timer.
export const PomodoroThumbnail: React.FC = () => {
  const accent = '#ffb347';
  return (
    <AbsoluteFill style={{backgroundColor: '#000', fontFamily: FONT, color: '#fff'}}>
      <Img src={staticFile('thumb/B2.jpg')} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      <AbsoluteFill style={{background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 52%, rgba(0,0,0,0.05) 80%)'}} />
      <div style={{position: 'absolute', left: 64, top: 0, bottom: 0, width: 760, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div style={{fontSize: 28, letterSpacing: 7, fontWeight: 700, color: accent}}>STUDY · CODE · FOCUS</div>
        <div style={{fontSize: 92, fontWeight: 900, lineHeight: 0.98, marginTop: 14}}>Pomodoro 25/5</div>
        <div style={{fontSize: 150, fontWeight: 900, lineHeight: 1, marginTop: 6, color: accent, fontVariantNumeric: 'tabular-nums'}}>25:00</div>
        <div style={{display: 'flex', gap: 14, marginTop: 22, alignItems: 'center'}}>
          <div style={{fontSize: 48, fontWeight: 900, padding: '10px 28px', borderRadius: 16, background: accent, color: '#111'}}>1 HOUR</div>
          <div style={{fontSize: 26, fontWeight: 700, padding: '12px 20px', borderRadius: 14, border: '2px solid rgba(255,255,255,0.7)'}}>
            LO-FI · NO VOCALS
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
