import {AbsoluteFill, Img, staticFile} from 'remotion';
import {ACCENT, FONT, MOOD, trackById} from './tracks';

type CardProps = {img: string; mood: string; name: string; genre: string; bpm: number; accent: string};

// 1280x720 thumbnail card: scene frame, mood label, song name, genre, "1 HOUR" badge.
// Same visual language as MixThumbnail so the channel grid reads as one series.
export const ThumbCard: React.FC<CardProps> = ({img, mood, name, genre, bpm, accent}) => (
  <AbsoluteFill style={{backgroundColor: '#000', fontFamily: FONT, color: '#fff'}}>
    <Img src={staticFile(img)} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
    <AbsoluteFill
      style={{background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 48%, rgba(0,0,0,0) 75%)'}}
    />
    <div style={{position: 'absolute', left: 64, top: 0, bottom: 0, width: 720, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <div style={{fontSize: 28, letterSpacing: 7, fontWeight: 700, color: accent}}>{mood.toUpperCase()}</div>
      <div style={{fontSize: name.length > 14 ? 92 : 108, fontWeight: 900, lineHeight: 0.98, marginTop: 16, textShadow: '0 4px 24px rgba(0,0,0,0.5)'}}>
        {name}
      </div>
      <div style={{fontSize: 34, fontWeight: 600, marginTop: 18, opacity: 0.92}}>{genre}</div>
      <div style={{display: 'flex', gap: 14, marginTop: 30, alignItems: 'center'}}>
        <div style={{fontSize: 48, fontWeight: 900, padding: '10px 28px', borderRadius: 16, background: accent, color: '#111'}}>1 HOUR</div>
        <div style={{fontSize: 26, fontWeight: 700, padding: '12px 20px', borderRadius: 14, border: '2px solid rgba(255,255,255,0.7)'}}>
          {bpm} BPM · NO VOCALS
        </div>
      </div>
    </div>
  </AbsoluteFill>
);

export const TrackThumbnail: React.FC<{id: string}> = ({id}) => {
  const track = trackById(id);
  return (
    <ThumbCard
      img={`thumb/${id}.jpg`}
      mood={MOOD[id[0]]}
      name={track.headline.replace(/\s*\p{Extended_Pictographic}️?$/u, '')}
      genre={track.tagline.split('|')[0].trim()}
      bpm={track.bpm}
      accent={ACCENT[id[0]]}
    />
  );
};

// Batch 1 videos (before tracks.json existed): cozy piano / kawaii lo-fi.
export const BATCH1: (Omit<CardProps, 'mood' | 'accent'> & {key: string})[] = [
  {key: 'breezy', img: 'thumb1/breezy.jpg', name: 'Breezy Bounce', genre: 'Upbeat Cute Piano & Synth', bpm: 122},
  {key: 'matcha_cloud', img: 'thumb1/matcha_cloud.jpg', name: 'Matcha Cloud', genre: 'Cozy Kawaii Piano', bpm: 80},
  {key: 'matcha_cloud_ii', img: 'thumb1/matcha_cloud_ii.jpg', name: 'Matcha Cloud II', genre: 'Cozy Felt Piano', bpm: 80},
  {key: 'zen_garden_rain', img: 'thumb1/zen_garden_rain.jpg', name: 'Zen Garden Rain', genre: 'Peaceful Piano for Focus', bpm: 82},
  {key: 'velvet_steam', img: 'thumb1/velvet_steam.jpg', name: 'Velvet Steam', genre: 'Kawaii Lo-fi Piano', bpm: 78},
  {key: 'quiet_morning_light', img: 'thumb1/quiet_morning_light.jpg', name: 'Quiet Morning Light', genre: 'Warm Morning Piano', bpm: 80},
];
export const COZY = {mood: 'Cozy Piano Study', accent: '#c4a8ff'};

// Batch 3 "Coding Focus": D lo-fi, E synthwave, F ambient. Frame = batch3/out/<id> thumbnail.jpg copied to thumb3/.
export const BATCH3_GROUP: Record<string, {mood: string; accent: string}> = {
  D: {mood: 'Lo-fi Coding', accent: '#ffb86b'},
  E: {mood: 'Synthwave Night Coding', accent: '#3dffb5'},
  F: {mood: 'Deep Focus Ambient', accent: '#9ecbff'},
};
export const BATCH3: (Omit<CardProps, 'img' | 'mood' | 'accent'> & {id: string})[] = [
  {id: 'D1', name: 'Midnight Commit', genre: 'Late-Night Lo-fi Hip Hop', bpm: 78},
  {id: 'D2', name: 'Rubber Duck Debug', genre: 'Playful Lo-fi Chillhop', bpm: 82},
  {id: 'D3', name: 'Rainy Refactor', genre: 'Lo-fi Jazzhop with Rain', bpm: 72},
  {id: 'D4', name: 'Coffee & Compile', genre: 'Jazzy Daytime Chillhop', bpm: 88},
  {id: 'D5', name: 'Late Night Deploy', genre: 'Dreamy Lo-fi Beats', bpm: 75},
  {id: 'E1', name: 'Terminal Glow', genre: 'Dark Chill Synthwave', bpm: 100},
  {id: 'E2', name: 'Neon Stack', genre: 'Retro Synthwave', bpm: 105},
  {id: 'E3', name: 'Cyber Grid', genre: 'Midtempo Cyberpunk', bpm: 95},
  {id: 'E4', name: 'Night Shift Hacker', genre: 'Chillwave Outrun', bpm: 98},
  {id: 'E5', name: 'Overclocked Dreams', genre: 'Calm Dreamwave', bpm: 90},
  {id: 'F1', name: 'Flow State', genre: 'Minimal Ambient Electronica', bpm: 70},
  {id: 'F2', name: 'Quiet Server Room', genre: 'Ambient Drone & Piano', bpm: 60},
  {id: 'F3', name: 'Deep Work Rain', genre: 'Ambient Piano with Rain', bpm: 65},
  {id: 'F4', name: 'Binary Forest', genre: 'Organic Downtempo', bpm: 80},
  {id: 'F5', name: 'Silent Algorithm', genre: 'Minimal Electronic Ambient', bpm: 76},
];
