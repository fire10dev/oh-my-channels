// Shorts cover 1080×1920: one payoff image + ≤ 5 big words in the upper third (bottom is covered by the Shorts UI).
// Words in Be Vietnam Pro (Cinzel digits misread), small Cinzel channel line.
import {loadFont as loadCinzel} from '@remotion/google-fonts/Cinzel';
import {loadFont as loadBVP} from '@remotion/google-fonts/BeVietnamPro';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {BRAND} from './Brand';

const {fontFamily: cinzel} = loadCinzel('normal', {weights: ['900'], subsets: ['latin']});
const {fontFamily: body} = loadBVP('normal', {weights: ['800'], subsets: ['latin', 'vietnamese']});

export const Cover: React.FC<{bg: string; big: string; x?: number; tag?: string}> = ({bg, big, x = 50, tag = 'CHAMPA'}) => (
  <AbsoluteFill style={{backgroundColor: BRAND.lacquer}}>
    <Img src={staticFile(bg)} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: `${x}% 50%`}} />
    <AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(13,10,7,0.92) 0%, rgba(13,10,7,0.7) 30%, rgba(13,10,7,0) 52%)'}} />
    <div style={{position: 'absolute', left: 70, right: 70, top: 260, textAlign: 'center'}}>
      <div style={{fontFamily: body, fontWeight: 800, fontSize: 132, lineHeight: 1.0, color: BRAND.goldLight, textShadow: '0 6px 28px rgba(0,0,0,0.95)'}}>{big}</div>
      <div style={{fontFamily: cinzel, fontWeight: 900, fontSize: 44, letterSpacing: 6, color: '#fff3d6', marginTop: 34, textShadow: '0 4px 16px rgba(0,0,0,0.9)'}}>{tag}</div>
    </div>
  </AbsoluteFill>
);
