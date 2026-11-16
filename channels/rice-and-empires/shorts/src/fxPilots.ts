// Pilot scenes for recipe v1 (L003 rows 14, 33, 42). Times in seconds; VO starts at 0.2 s.
// Narration pause times from `ffmpeg -af silencedetect=n=-35dB:d=0.15` on the row's vo wav (+0.2 offset).
import type {Scene} from './FxScene';

const hit = (at: number) => ({src: 'sfxlib/woodhit.mp3', at, vol: 0.55, from: 0, dur: 0.6});

// Row 14 — "That changed around the year 40 … Trưng Trắc … rose against him with her sister, Trưng Nhị."
export const pilotUprising: Scene = {
  vo: 'l003/vo-13.wav', dur: 11.4,
  music: {src: 'bgm/sb-the-rise.mp3', from: 40, vol: 0.18},
  label: {title: 'THE TRƯNG SISTERS', sub: 'Jiaozhi · 40 CE', at: 5.7, until: 10.6},
  shots: [
    {img: 'l003/img-16.jpg', start: 0, z: [1.16, 1.23], x: [-20, 10], origin: '50% 55%',
      glows: [{x: '50%', y: '28%', r: '40% 30%', color: 'rgba(255,190,90,0.55)', amt: 0.8, flicker: false}],
      ovs: [{src: '8461.mp4', opacity: 0.35, mask: 'linear-gradient(to top, black 0%, black 30%, transparent 60%)'},
        {src: '47285.mp4', opacity: 0.7, fg: true}]},
    {img: 'l003/img-15.jpg', start: 2.5, z: [1.06, 1.2], x: [0, -20], origin: '40% 58%', darken: 0.12,
      ovs: [{src: '47285.mp4', opacity: 0.4, from: 3, fg: true}]},
    {img: 'l003/img-16.jpg', start: 5.5, z: [1.55, 1.2], x: [0, 0], origin: '30% 45%', hits: [8.15],
      glows: [{x: '50%', y: '28%', r: '40% 30%', color: 'rgba(255,190,90,0.55)', amt: 0.8, flicker: false}],
      ovs: [{src: '8461.mp4', opacity: 0.4, from: 5, mask: 'linear-gradient(to top, black 0%, black 30%, transparent 60%)'},
        {src: '47285.mp4', opacity: 0.8, from: 4, fg: true}, {src: '3460.mp4', opacity: 0.18, fg: true}]},
  ],
  sfx: [
    {src: 'sfxlib/meadow.mp3', at: 0, vol: 0.22, from: 10, dur: 11.4, fadeOut: 1},
    {src: 'sfxlib/whoosh.mp3', at: 2.3, vol: 0.35},
    {src: 'sfxlib/whoosh.mp3', at: 5.3, vol: 0.35},
    {src: 'sfxlib/braam.mp3', at: 7.9, vol: 0.4, dur: 3.5, fadeOut: 1.2},
    {src: 'sfxlib/boom.mp3', at: 8.1, vol: 0.35, dur: 3, fadeOut: 1},
  ],
};

// Row 33 — "Then came an outside threat. Nanzhao … invaded, and in 863 its forces took the protectorate's capital."
export const pilotInvasion: Scene = {
  vo: 'l003/vo-32.wav', dur: 10.4,
  music: {src: 'bgm/sb-march-of-midnight.mp3', from: 20, vol: 0.18},
  shots: [
    {img: 'l003/img-39.jpg', start: 0, z: [1.1, 1.2], origin: '58% 48%', hits: [5.3],
      route: {d: 'M560 150 C 700 330, 900 420, 1060 520 S 1300 640, 1380 690', at: 4.2, dur: 1.1,
        label: {text: 'NANZHAO', x: 330, y: 150, at: 2.5}, pin: {x: 1380, y: 690, text: 'Protectorate capital'}},
      ovs: [{src: '47285.mp4', opacity: 0.25, fg: true}]},
    {img: 'l003/img-40.jpg', start: 6.4, z: [1.05, 1.17], x: [10, -25], origin: '75% 50%', hits: [7.9],
      ovs: [
        {src: '3758.mp4', opacity: 0.7, from: 2, mask: 'radial-gradient(ellipse 14% 22% at 86% 45%, black 30%, transparent 100%)', x: 0, y: -60},
        {src: '1960.mp4', opacity: 0.22, rise: 0.8, mask: 'radial-gradient(ellipse 30% 40% at 78% 15%, black 20%, transparent 100%)'},
        {src: '3463.mp4', opacity: 0.6, fg: true}, {src: '3460.mp4', opacity: 0.2, from: 4, fg: true}],
      glows: [{x: '86%', y: '48%', r: '24% 30%', color: 'rgba(255,110,30,0.6)', amt: 0.9},
        {x: '66%', y: '17%', r: '12% 14%', color: 'rgba(255,240,200,0.5)', amt: 0.6, flicker: false}]},
  ],
  sfx: [
    {src: 'sfxlib/braamdark.mp3', at: 0.3, vol: 0.4},
    {src: 'sfxlib/whoosh.mp3', at: 4.2, vol: 0.45},
    {src: 'sfxlib/boom.mp3', at: 5.3, vol: 0.3, dur: 2.5, fadeOut: 1},
    {src: 'sfxlib/fire.mp3', at: 6.1, vol: 0.3, dur: 4.3, fadeOut: 1},
    {src: 'sfxlib/crackle.mp3', at: 6.1, vol: 0.3, from: 20, dur: 4.3, fadeOut: 1},
    {src: 'sfxlib/debris.mp3', at: 7.85, vol: 0.45},
    {src: 'sfxlib/wind.mp3', at: 0, vol: 0.12, from: 30, dur: 10.4, fadeOut: 1},
  ],
};

// Row 42 — "According to the accounts, Ngô Quyền had iron-tipped stakes driven into the riverbed, hidden under the high tide."
export const pilotStakes: Scene = {
  vo: 'l003/vo-41.wav', dur: 8.0,
  music: {src: 'bgm/sb-the-fury.mp3', from: 60, vol: 0.15},
  label: {title: 'BẠCH ĐẰNG RIVER', sub: '938 CE · stakes in the riverbed', at: 0.5, until: 5.1},
  shots: [
    {img: 'l003/img-53.jpg', start: 0, z: [1.03, 1.14], x: [20, -15], origin: '62% 55%', hits: [2.3, 3.1, 3.9, 4.7],
      glows: [{x: '52%', y: '14%', r: '22% 18%', color: 'rgba(255,170,80,0.5)', amt: 0.7, flicker: false}],
      ovs: [{src: '50957.mp4', opacity: 0.32, mask: 'linear-gradient(to top, black 0%, black 25%, transparent 55%)'},
        {src: '47285.mp4', opacity: 0.4, fg: true}]},
    {img: 'l003/img-54.jpg', start: 5.4, z: [1.0, 1.06], origin: '50% 60%',
      tide: {at: 5.6, dur: 1.6, fromY: 780, toY: 470, label: 'HIGH TIDE'}},
  ],
  sfx: [
    {src: 'sfxlib/lap.mp3', at: 0, vol: 0.28, from: 5, dur: 8, fadeOut: 1},
    hit(2.3), hit(3.1), hit(3.9), hit(4.7),
    {src: 'sfxlib/waves.mp3', at: 5.3, vol: 0.3, from: 12, dur: 2.7, fadeOut: 1},
    {src: 'sfxlib/whoosh.mp3', at: 5.2, vol: 0.3},
  ],
};
