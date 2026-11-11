// YouTube thumbnail 1280×720 for long videos: one strong image + ≤ 4 big words. Digits in Be Vietnam Pro (Cinzel "1" reads as "I").
import {loadFont as loadCinzel} from '@remotion/google-fonts/Cinzel';
import {loadFont as loadBVP} from '@remotion/google-fonts/BeVietnamPro';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {BRAND} from './Brand';

const {fontFamily: cinzel} = loadCinzel('normal', {weights: ['900'], subsets: ['latin']});
const {fontFamily: body} = loadBVP('normal', {weights: ['800'], subsets: ['latin']});

export const Thumb: React.FC<{bg: string; big: string; line: string; tag: string}> = ({bg, big, line, tag}) => (
  <AbsoluteFill style={{backgroundColor: BRAND.lacquer}}>
    <Img src={staticFile(bg)} style={{width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.08) translateX(120px)'}} />
    <AbsoluteFill style={{background: 'linear-gradient(90deg, rgba(13,10,7,0.96) 0%, rgba(13,10,7,0.82) 38%, rgba(13,10,7,0) 70%)'}} />
    <div style={{position: 'absolute', left: 56, top: 150}}>
      <div style={{fontFamily: body, fontWeight: 800, fontSize: 176, lineHeight: 0.95, color: BRAND.goldLight, textShadow: '0 6px 24px rgba(0,0,0,0.9)'}}>{big}</div>
      <div style={{fontFamily: cinzel, fontWeight: 900, fontSize: 64, color: '#fff3d6', marginTop: 10, textShadow: '0 4px 16px rgba(0,0,0,0.9)'}}>{line}</div>
      <div style={{display: 'inline-block', marginTop: 28, padding: '10px 22px', background: BRAND.vermilion, color: '#fff', fontFamily: body, fontWeight: 800, fontSize: 38, borderRadius: 6}}>{tag}</div>
    </div>
  </AbsoluteFill>
);
