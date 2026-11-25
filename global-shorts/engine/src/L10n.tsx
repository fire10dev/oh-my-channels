// Replaces hard-coded English world labels (SVG <text>/HTML text nodes) with a localised dictionary after every render.
import React, {useLayoutEffect, useRef} from 'react';
import {useCurrentFrame} from 'remotion';
export const L10n: React.FC<{dict?: Record<string, string>; children: React.ReactNode}> = ({dict, children}) => {
  const ref = useRef<HTMLDivElement>(null);
  useCurrentFrame(); // re-render (and re-apply) on every frame
  useLayoutEffect(() => {
    if (!dict || !ref.current) return;
    const w = document.createTreeWalker(ref.current, NodeFilter.SHOW_TEXT);
    for (let n = w.nextNode(); n; n = w.nextNode()) {
      const t = n.nodeValue?.trim();
      if (!t || dict[t] === undefined) continue;
      const nv = dict[t];
      n.nodeValue = n.nodeValue!.replace(t, nv);
      // longer translation: shrink the label so it keeps the original footprint (max 45% smaller)
      const el = n.parentElement;
      if (el && nv.length > t.length * 1.15) {
        const fs = parseFloat(getComputedStyle(el).fontSize);
        if (fs) el.style.fontSize = `${fs * Math.max(0.55, (t.length / nv.length) * 1.12)}px`;
      }
    }
  });
  return <div ref={ref} style={{position: 'absolute', inset: 0}}>{children}</div>;
};
