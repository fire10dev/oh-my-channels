// Web-Mercator helpers. World units: x = lon degrees, y = mercator-degrees (north up => we flip in SVG).
export type Pt = [number, number];
export type Cam = {lon: number; lat: number; span: number};

export const mercY = (lat: number) => {
  const l = Math.max(Math.min(lat, 85), -85);
  return (Math.log(Math.tan(Math.PI / 4 + (l * Math.PI) / 360)) * 180) / Math.PI;
};
export const W = 1080;
export const H = 1920;

// Screen projection for a camera: span = visible longitude degrees across the 1080 px width.
export const projector = (c: Cam) => {
  const k = W / c.span;
  const cy = mercY(c.lat);
  return (p: Pt): Pt => [W / 2 + (p[0] - c.lon) * k, H / 2 - (mercY(p[1]) - cy) * k];
};

export const ringPath = (ring: Pt[], proj: (p: Pt) => Pt) => {
  let d = '';
  for (let i = 0; i < ring.length; i++) {
    const [x, y] = proj(ring[i]);
    d += (i ? 'L' : 'M') + x.toFixed(1) + ',' + y.toFixed(1);
  }
  return d + 'Z';
};
export const linePath = (pts: Pt[], proj: (p: Pt) => Pt) =>
  pts.map((p, i) => {
    const [x, y] = proj(p);
    return (i ? 'L' : 'M') + x.toFixed(1) + ',' + y.toFixed(1);
  }).join('');

// Camera interpolation: lon/lat linear, span in log space (feels like a real zoom).
export const lerpCam = (a: Cam, b: Cam, t: number): Cam => ({
  lon: a.lon + (b.lon - a.lon) * t,
  lat: a.lat + (b.lat - a.lat) * t,
  span: Math.exp(Math.log(a.span) + (Math.log(b.span) - Math.log(a.span)) * t),
});

// Move a shape to a new centre keeping true size: shift lat/lon, then mercator does the rest
// (approximation of thetruesize.com; good enough for shapes moved across latitudes).
export const moveRing = (ring: Pt[], from: Pt, to: Pt): Pt[] => {
  const dl = to[1] - from[1];
  const dx = to[0] - from[0];
  return ring.map(([lo, la]) => {
    // scale longitudinal extent by cos ratio so east-west width stays true on the sphere
    const cf = Math.cos((la * Math.PI) / 180);
    const ct = Math.cos(((la + dl) * Math.PI) / 180);
    const r = ct > 0.01 ? cf / ct : 1;
    return [to[0] + (lo - from[0]) * r + 0 * dx, la + dl];
  });
};
