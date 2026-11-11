// Recipe-v1 VFX for the key L003 scenes (2026-11-11). Per row: `shots[i]` = FxShot params for the row's i-th shot
// (times in seconds from that shot's start), `sfx`/`label` = seconds from the row start. Rows 14/33/42 port the
// accepted pilots (fxPilots.ts) onto the row's own shot split. Clip IDs: see the MEGABRAIN pipeline note.
import type {RowFx} from './LongVideo';
import baseJson from './l003.fx.json';

const base = baseJson as Record<string, RowFx>;

const dust = (o = 0.3, from = 0) => ({src: '47285.mp4', opacity: o, from, fg: true});
const mist = (o = 0.3, from = 0) => ({src: '50957.mp4', opacity: o, from, mask: 'linear-gradient(to top, black 0%, black 25%, transparent 55%)'});
const smokeTop = (o = 0.3) => ({src: '8461.mp4', opacity: o, mask: 'linear-gradient(to bottom, black 0%, black 20%, transparent 55%)'});
const embers = (o = 0.2, from = 0) => ({src: '3460.mp4', opacity: o, from, fg: true});
const sparks = (o = 0.5, from = 0) => ({src: '3463.mp4', opacity: o, from, fg: true});
const fireAt = (src: string, x: number, y: number, w = 14, h = 22, o = 0.7, from = 0) =>
  ({src, opacity: o, from, mask: `radial-gradient(ellipse ${w}% ${h}% at ${x}% ${y}%, black 30%, transparent 100%)`});
const flame = (x: number, y: number, amt = 0.8, r = '12% 16%') => ({x: `${x}%`, y: `${y}%`, r, color: 'rgba(255,130,40,0.6)', amt});
const warm = (x: number, y: number, amt = 0.6, r = '30% 24%') => ({x: `${x}%`, y: `${y}%`, r, color: 'rgba(255,190,90,0.5)', amt, flicker: false});
const hit = (at: number) => ({src: 'sfxlib/woodhit.mp3', at, vol: 0.55, dur: 0.6});

const rows: Record<string, RowFx> = {
  // Hook: the delta map breathes.
  '01': {shots: {'1': {z: [1.04, 1.14], x: [10, -15], origin: '45% 50%', ovs: [mist(0.22), dust(0.3)]}},
    sfx: [{src: 'sfxlib/wind.mp3', at: 4.0, dur: 4.1, vol: 0.14, from: 30, fadeOut: 1}]},
  // Bronze culture: drum glints, casting fire, boats.
  '05': {shots: {
    '0': {z: [1.0, 1.12], origin: '50% 50%', glows: [warm(50, 50, 0.7, '22% 28%')], ovs: [dust(0.25)]},
    '1': {z: [1.05, 1.16], x: [0, -20], origin: '30% 40%', ovs: [fireAt('3758.mp4', 26, 30, 10, 18, 0.65), fireAt('3754.mp4', 88, 42, 8, 14, 0.5, 1),
      sparks(0.45)], glows: [flame(26, 32), flame(88, 45, 0.6, '8% 12%')]},
    '2': {z: [1.03, 1.12], x: [15, -15], origin: '50% 55%', ovs: [mist(0.2), dust(0.2)]}},
    sfx: [{src: 'sfxlib/fire.mp3', at: 3.3, dur: 3.4, vol: 0.25, fadeOut: 0.8}, {src: 'sfxlib/crackle.mp3', at: 3.3, dur: 3.4, vol: 0.3, from: 20, fadeOut: 0.8}]},
  // Zhao Tuo at sunset.
  '07': {shots: {'0': {z: [1.04, 1.15], x: [-15, 10], origin: '70% 40%', glows: [warm(86, 12, 0.7, '18% 16%')], ovs: [mist(0.25), dust(0.3)]}}},
  // Trưng sisters (pilot Uprising).
  '14': {label: {title: 'THE TRƯNG SISTERS', sub: 'Jiaozhi · 40 CE', at: 4.0, until: 7.4},
    shots: {
      '1': {z: [1.16, 1.24], x: [-20, 10], origin: '50% 55%', glows: [warm(50, 28, 0.8, '40% 30%')],
        ovs: [{src: '8461.mp4', opacity: 0.35, mask: 'linear-gradient(to top, black 0%, black 30%, transparent 60%)'}, dust(0.7)]},
      '2': {z: [1.3, 1.12], origin: '50% 50%', hits: [0.45], ovs: [mist(0.3), dust(0.8, 4), embers(0.18)]}},
    sfx: [{src: 'sfxlib/meadow.mp3', at: 3.7, dur: 4, vol: 0.18, from: 10, fadeOut: 1}, {src: 'sfxlib/whoosh.mp3', at: 3.5, dur: 1.5, vol: 0.35},
      {src: 'sfxlib/braam.mp3', at: 7.7, dur: 3.5, vol: 0.4, fadeOut: 1.2}, {src: 'sfxlib/boom.mp3', at: 7.9, dur: 3, vol: 0.35, fadeOut: 1}]},
  // Ma Yuan's army: jungle mist, marching column.
  '17': {shots: {
    '0': {z: [1.03, 1.14], x: [20, -20], origin: '50% 55%', ovs: [mist(0.35), dust(0.25)]},
    '1': {z: [1.05, 1.15], x: [-20, 15], origin: '50% 50%', ovs: [dust(0.55, 3), mist(0.2, 6)]}},
    sfx: [{src: 'sfxlib/braamdark.mp3', at: 8.1, dur: 5, vol: 0.35, fadeOut: 1.5}]},
  // Records written by lamplight.
  '18': {shots: {'1': {z: [1.04, 1.14], origin: '72% 30%', glows: [flame(73, 22, 0.7, '10% 14%')],
    ovs: [{src: '1967.mp4', opacity: 0.25, mask: 'radial-gradient(ellipse 12% 30% at 73% 10%, black 20%, transparent 100%)'}, dust(0.2)]}},
    sfx: [{src: 'sfxlib/pages.mp3', at: 4.2, dur: 3, vol: 0.35}]},
  // Liang strikes back: burning fort.
  '28': {shots: {
    '0': {z: [1.04, 1.16], x: [0, -25], origin: '78% 30%', hits: [0.5],
      ovs: [fireAt('3758.mp4', 82, 22, 16, 22, 0.7), {src: '1960.mp4', opacity: 0.22, rise: 0.6, mask: 'radial-gradient(ellipse 30% 40% at 80% 10%, black 20%, transparent 100%)'},
        sparks(0.5), embers(0.18, 3)], glows: [flame(82, 25, 0.9, '22% 26%')]},
    '1': {z: [1.03, 1.12], x: [15, -10], origin: '50% 60%', ovs: [mist(0.4), {src: '1967.mp4', opacity: 0.2}]}},
    sfx: [{src: 'sfxlib/braamdark.mp3', at: 0.2, dur: 5, vol: 0.35, fadeOut: 1.5}, {src: 'sfxlib/boom.mp3', at: 0.5, dur: 2.5, vol: 0.3, fadeOut: 1},
      {src: 'sfxlib/fire.mp3', at: 0, dur: 7.4, vol: 0.25, fadeOut: 1.2}, {src: 'sfxlib/crackle.mp3', at: 0, dur: 7.4, vol: 0.25, from: 20, fadeOut: 1.2}]},
  // Tang-era revolts: torches in the night.
  '32': {shots: {'0': {z: [1.04, 1.15], x: [-10, 15], origin: '30% 35%',
    glows: [flame(14, 22, 0.8, '8% 12%'), flame(28, 20, 0.8, '8% 12%'), flame(42, 26, 0.7, '8% 12%')], ovs: [smokeTop(0.3), sparks(0.4)]}},
    sfx: [{src: 'sfxlib/crackle.mp3', at: 0, dur: 8.3, vol: 0.22, from: 10, fadeOut: 1}]},
  // Nanzhao takes the capital (pilot Invasion).
  '33': {shots: {
    '1': {z: [1.1, 1.18], origin: '58% 48%', hits: [1.67], ovs: [dust(0.25)],
      route: {d: 'M560 150 C 700 330, 900 420, 1060 520 S 1300 640, 1380 690', at: 0.57, dur: 1.1,
        label: {text: 'NANZHAO', x: 330, y: 150, at: 0.1}, pin: {x: 1380, y: 690, text: 'Protectorate capital'}}},
    '2': {z: [1.05, 1.17], x: [10, -25], origin: '75% 50%', hits: [0.87],
      ovs: [{src: '3758.mp4', opacity: 0.7, from: 2, mask: 'radial-gradient(ellipse 14% 22% at 86% 45%, black 30%, transparent 100%)', x: 0, y: -60},
        {src: '1960.mp4', opacity: 0.22, rise: 0.8, mask: 'radial-gradient(ellipse 30% 40% at 78% 15%, black 20%, transparent 100%)'},
        sparks(0.6), embers(0.2, 4)],
      glows: [{x: '86%', y: '48%', r: '24% 30%', color: 'rgba(255,110,30,0.6)', amt: 0.9}, warm(66, 17, 0.5, '12% 14%')]}},
    sfx: [{src: 'sfxlib/braamdark.mp3', at: 0.1, dur: 6, vol: 0.4, fadeOut: 1.5}, {src: 'sfxlib/whoosh.mp3', at: 4.0, dur: 1.5, vol: 0.45},
      {src: 'sfxlib/boom.mp3', at: 5.1, dur: 2.5, vol: 0.3, fadeOut: 1}, {src: 'sfxlib/fire.mp3', at: 5.9, dur: 4.3, vol: 0.3, fadeOut: 1},
      {src: 'sfxlib/crackle.mp3', at: 5.9, dur: 4.3, vol: 0.3, from: 20, fadeOut: 1}, {src: 'sfxlib/debris.mp3', at: 7.65, dur: 2.3, vol: 0.45}]},
  // Mutiny: burning gate.
  '35': {shots: {'0': {z: [1.04, 1.15], x: [0, -15], origin: '50% 30%',
    ovs: [fireAt('3754.mp4', 45, 24, 12, 18, 0.6), fireAt('3759.mp4', 86, 30, 10, 18, 0.5, 1), {src: '45298.mp4', opacity: 0.2, mask: 'linear-gradient(to bottom, black 0%, transparent 45%)'},
      embers(0.2)], glows: [flame(45, 26, 0.8, '14% 18%'), flame(86, 32, 0.6, '10% 14%')]}},
    sfx: [{src: 'sfxlib/fire.mp3', at: 0, dur: 5, vol: 0.25, fadeOut: 1}]},
  // Ngô Quyền marches: river mist.
  '40': {shots: {'0': {z: [1.03, 1.14], x: [-15, 15], origin: '60% 55%', ovs: [mist(0.4), dust(0.3)]}},
    sfx: [{src: 'sfxlib/lap.mp3', at: 0, dur: 3.9, vol: 0.2, from: 5, fadeOut: 1}]},
  // Bạch Đằng stakes (pilot Stakes); replaces the row's older cue list.
  '42': {label: {title: 'BẠCH ĐẰNG RIVER', sub: '938 CE · stakes in the riverbed', at: 0.3, until: 4.9},
    shots: {
      '0': {z: [1.03, 1.12], x: [20, -15], origin: '62% 55%', hits: [2.1, 2.9, 3.7], glows: [warm(52, 14, 0.7, '22% 18%')],
        ovs: [{src: '50957.mp4', opacity: 0.32, mask: 'linear-gradient(to top, black 0%, black 25%, transparent 55%)'}, dust(0.4)]},
      '1': {z: [1.0, 1.06], origin: '50% 60%', tide: {at: 1.53, dur: 1.6, fromY: 780, toY: 470, label: 'HIGH TIDE'}}},
    sfx: [{src: 'sfxlib/lap.mp3', at: 0, dur: 7.7, vol: 0.28, from: 5, fadeOut: 1}, hit(2.1), hit(2.9), hit(3.7), hit(4.5),
      {src: 'sfxlib/waves.mp3', at: 5.1, dur: 2.6, vol: 0.3, from: 12, fadeOut: 1}, {src: 'sfxlib/whoosh.mp3', at: 3.7, dur: 1.5, vol: 0.3}]},
  // The trap springs: spray on the stakes, burning wrecks.
  '43': {...base['43'], shots: {
    '0': {z: [1.05, 1.16], origin: '50% 60%', hits: [1.0], ovs: [mist(0.35), dust(0.35)]},
    '2': {z: [1.04, 1.14], x: [10, -15], origin: '30% 60%', ovs: [fireAt('3759.mp4', 25, 62, 14, 20, 0.6), {src: '1960.mp4', opacity: 0.2, rise: 0.6,
      mask: 'radial-gradient(ellipse 30% 40% at 30% 30%, black 20%, transparent 100%)'}, embers(0.2)], glows: [flame(25, 62, 0.8, '16% 18%')]}}},
  // The Ming return.
  '50': {shots: {'0': {z: [1.03, 1.13], x: [15, -15], origin: '50% 50%', ovs: [mist(0.35), dust(0.25)]}},
    sfx: [{src: 'sfxlib/braamdark.mp3', at: 0.2, dur: 4.5, vol: 0.28, fadeOut: 1.5}]},
  // Outro: lamp over the scroll.
  '55': {shots: {'0': {z: [1.02, 1.12], origin: '60% 45%', glows: [flame(95, 25, 0.7, '10% 16%')], ovs: [smokeTop(0.2), dust(0.25)]}}},
};

export const l003Vfx: Record<string, RowFx> = {...base, ...rows};
