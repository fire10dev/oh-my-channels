import {AbsoluteFill, Img, staticFile} from 'remotion';
import {ACCENT, FONT, MOOD} from './tracks';
import {mixGroup} from './Mix';

// 1280x720 thumbnail: five scene stills as columns, mood name + "1 HOUR MIX" badge.
export const MixThumbnail: React.FC<{group: string}> = ({group}) => {
  const tracks = mixGroup(group);
  const accent = ACCENT[group];
  return (
    <AbsoluteFill style={{backgroundColor: '#000', fontFamily: FONT, color: '#fff'}}>
      <AbsoluteFill style={{flexDirection: 'row'}}>
        {tracks.map((t) => (
          <Img key={t.id} src={staticFile(`${'DEF'.includes(group) ? 'thumb3' : 'thumb'}/${t.id}.jpg`)} style={{width: `${100 / tracks.length}%`, minWidth: 0, height: '100%', objectFit: 'cover'}} />
        ))}
      </AbsoluteFill>
      <AbsoluteFill style={{background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.1) 100%)'}} />
      <div style={{position: 'absolute', left: 64, top: 150}}>
        <div style={{fontSize: 30, letterSpacing: 8, fontWeight: 700, color: accent}}>5 SONGS · INSTRUMENTAL</div>
        <div style={{fontSize: 110, fontWeight: 900, lineHeight: 0.95, marginTop: 18, maxWidth: 760}}>{MOOD[group]}</div>
        <div
          style={{
            display: 'inline-block',
            marginTop: 34,
            fontSize: 52,
            fontWeight: 900,
            padding: '14px 34px',
            borderRadius: 18,
            background: accent,
            color: '#111',
          }}
        >
          1 HOUR MIX
        </div>
      </div>
    </AbsoluteFill>
  );
};
