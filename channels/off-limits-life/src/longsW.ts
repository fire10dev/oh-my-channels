import type {IX2WData, IX2WTimeline} from './IX2W';
import type {ThumbWProps} from './ThumbW';
import ix007 from './data/ix007.json';
import ix007T from './data/ix007.timeline.json';
import ix008 from './data/ix008.json';
import ix008T from './data/ix008.timeline.json';
import ix009 from './data/ix009.json';
import ix009T from './data/ix009.timeline.json';
import ix010 from './data/ix010.json';
import ix010T from './data/ix010.timeline.json';
import ix011 from './data/ix011.json';
import ix011T from './data/ix011.timeline.json';
import ix012 from './data/ix012.json';
import ix012T from './data/ix012.timeline.json';
import ix013 from './data/ix013.json';
import ix013T from './data/ix013.timeline.json';
import ix014 from './data/ix014.json';
import ix014T from './data/ix014.timeline.json';
import ix015 from './data/ix015.json';
import ix015T from './data/ix015.timeline.json';
import ix016 from './data/ix016.json';
import ix016T from './data/ix016.timeline.json';

/** Longs on the shared engine (IX007+): composition id, data id, world key, thumbnail. Add one entry per video. */
export type LongW = {comp: string; id: string; world: string; data: IX2WData; tl: IX2WTimeline; thumb: ThumbWProps};
export const LONGS_W: LongW[] = [
  {
    comp: 'IX007-supermax', id: 'ix007', world: 'supermax', data: ix007 as unknown as IX2WData, tl: ix007T as IX2WTimeline,
    thumb: {world: 'supermax', view: [2150, 700, 2.2], you: 'cell', bg: '#d9dde3', big: '22+ HOURS ALONE', chip: "AMERICA'S ONLY FEDERAL SUPERMAX", badge: '4" WINDOW'},
  },
  {
    comp: 'IX008-b2-44h', id: 'ix008', world: 'bomber', data: ix008 as unknown as IX2WData, tl: ix008T as IX2WTimeline,
    thumb: {world: 'bomber', view: 'cockpit', you: 'cot', plane: 'packs:30', tod: 'night', bg: '#22223b', big: '44 HOURS NONSTOP', chip: '2 PILOTS · 1 TINY TOILET', badge: 'NO SHOWER'},
  },
  {
    comp: 'IX009-carrier', id: 'ix009', world: 'carrier', data: ix009 as unknown as IX2WData, tl: ix009T as IX2WTimeline,
    thumb: {world: 'carrier', view: 'berthing', you: 'rack', plane: 'curtain', tod: 'night', bg: '#1d3557', big: '100 IN 1 ROOM', chip: '5,000 SAILORS · 15,000 MEALS A DAY', badge: 'JETS OVERHEAD'},
  },
  {
    comp: 'IX010-missile-capsule', id: 'ix010', world: 'capsule', data: ix010 as unknown as IX2WData, tl: ix010T as IX2WTimeline,
    thumb: {world: 'capsule', view: 'capsule', you: 'console', plane: 'door:open', bg: '#3a3a3a', big: '60 FT UNDER', chip: '24 HOURS · 2 OFFICERS · 1 BED', badge: '8-TON DOOR'},
  },
  {
    comp: 'IX011-mosaic', id: 'ix011', world: 'polar', data: ix011 as unknown as IX2WData, tl: ix011T as IX2WTimeline,
    thumb: {world: 'polar', view: 'guard', you: 'guard', plane: 'bear', tod: 'night', bg: '#0b1029', big: 'FROZEN IN 1 YEAR', chip: 'SHIP LOCKED IN ARCTIC ICE', badge: '150 DAYS NIGHT'},
  },
  {
    comp: 'IX012-conclave', id: 'ix012', world: 'conclave', data: ix012 as unknown as IX2WData, tl: ix012T as IX2WTimeline,
    thumb: {world: 'conclave', view: 'chimney', plane: 'smoke:white', tod: 'dusk', bg: '#5e548e', big: 'LOCKED IN', chip: '133 CARDINALS · NO PHONES · 1 NAME', badge: 'WHITE SMOKE'},
  },
  {
    comp: 'IX013-container-ship', id: 'ix013', world: 'boxship', data: ix013 as unknown as IX2WData, tl: ix013T as IX2WTimeline,
    thumb: {world: 'boxship', view: 'tower', you: 'cabin', plane: 'phone', tod: 'night', bg: '#1d3557', big: '9 MONTHS AT SEA', chip: '25 CREW · 400 M SHIP', badge: 'SHORE LEAVE? RARE'},
  },
  {
    comp: 'IX014-cheyenne', id: 'ix014', world: 'mountain', data: ix014 as unknown as IX2WData, tl: ix014T as IX2WTimeline,
    thumb: {world: 'mountain', view: 'springs', plane: 'shake', bg: '#6c757d', big: 'INSIDE THE MOUNTAIN', chip: 'NUCLEAR-PROOF BUNKER · ON SPRINGS', badge: '25-TON DOOR'},
  },
  {
    comp: 'IX015-lighthouse', id: 'ix015', world: 'lighthouse', data: ix015 as unknown as IX2WData, tl: ix015T as IX2WTimeline,
    thumb: {world: 'lighthouse', view: 'section', plane: 'light waves', tod: 'night', bg: '#14213d', big: '3 MEN, 1 ROCK', chip: 'NO SHOWER · NO TOILET TILL 1964', badge: '11 MI OUT'},
  },
  {
    comp: 'IX016-mount-washington', id: 'ix016', world: 'summit', data: ix016 as unknown as IX2WData, tl: ix016T as IX2WTimeline,
    thumb: {world: 'summit', view: 'deck', you: 'deck', plane: 'wind rime', bg: '#adb5bd', big: '231 MPH WIND', chip: "THE \"WORLD'S WORST WEATHER\"", badge: 'EVERY HOUR'},
  },
];
