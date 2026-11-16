import data from './tracks.json';

export type Track = {
  id: string;
  name: string;
  duration: number;
  hookStart: number;
  bgDuration: number;
  bpm: number;
  title: string;
  headline: string;
  tagline: string;
  style: string;
};

export const TRACKS = data as Track[];
export const trackById = (id: string) => TRACKS.find((t) => t.id === id)!;

// One accent per mood group: A = 2013 EDM, B = Morning, C = Jazz bar; batch 3: D = Lo-fi, E = Synthwave, F = Ambient
export const ACCENT: Record<string, string> = {A: '#ff4fd8', B: '#ffb347', C: '#5ec8ff', D: '#ffb86b', E: '#3dffb5', F: '#9ecbff'};
export const MOOD: Record<string, string> = {
  A: '2013 Festival EDM',
  B: 'Morning Vibes',
  C: 'Late-Night Jazz Bar',
  D: 'Lo-fi Coding',
  E: 'Synthwave Night Coding',
  F: 'Deep Focus Ambient',
};

export const FONT = '"SF Pro Display", "Helvetica Neue", Arial, sans-serif';
