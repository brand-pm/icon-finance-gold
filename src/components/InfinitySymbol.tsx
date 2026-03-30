import { useMemo } from "react";

/**
 * Generates a lemniscate of Bernoulli (∞) as an SVG path.
 * Parametric: x = a*cos(t)/(1+sin²(t)), y = a*sin(t)*cos(t)/(1+sin²(t))
 * We offset the path vertically to create a ribbon with top/bottom edges.
 */
function lemniscatePath(
  cx: number,
  cy: number,
  a: number,
  offsetY: number,
  steps = 200
): string {
  const points: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const sinT = Math.sin(t);
    const cosT = Math.cos(t);
    const denom = 1 + sinT * sinT;
    const x = cx + (a * cosT) / denom;
    const y = cy + (a * sinT * cosT) / denom + offsetY;
    points.push([x, y]);
  }
  return points.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(" ") + "Z";
}

/** Single centerline lemniscate path (not closed) for stroke effects */
function lemniscateStroke(
  cx: number,
  cy: number,
  a: number,
  steps = 200
): string {
  const points: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const sinT = Math.sin(t);
    const cosT = Math.cos(t);
    const denom = 1 + sinT * sinT;
    const x = cx + (a * cosT) / denom;
    const y = cy + (a * sinT * cosT) / denom;
    points.push([x, y]);
  }
  return points.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(" ");
}

const InfinitySymbol = () => {
  const cx = 250;
  const cy = 250;
  const size = 150;

  const paths = useMemo(() => ({
    // Ribbon top edge
    top: lemniscatePath(cx, cy, size, -12),
    // Ribbon bottom edge
    bottom: lemniscatePath(cx, cy, size, 12),
    // Center stroke
    center: lemniscateStroke(cx, cy, size),
    // Outer glow stroke (slightly larger)
    outer: lemniscateStroke(cx, cy, size + 8),
    // Inner detail stroke
    inner: lemniscateStroke(cx, cy, size - 8),
  }), []);

  return (
    <div className="aspect-square bg-[#E8E4DE] w-full flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_48%,rgba(224,167,118,0.15)_0%,transparent_65%)]" />
      <svg
        viewBox="0 0 500 500"
        className="w-[85%] h-[85%] relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Ribbon fill gradient — top-lit gold */}
          <linearGradient id="inf-ribbon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F0C9A0" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#E0A776" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#C88E5E" stopOpacity="0.12" />
          </linearGradient>
          {/* Bright edge gradient */}
          <linearGradient id="inf-edge-hi" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F0C9A0" />
            <stop offset="50%" stopColor="#E0A776" />
            <stop offset="100%" stopColor="#F0C9A0" />
          </linearGradient>
          {/* Shadow underneath */}
          <filter id="inf-shadow3">
            <feDropShadow dx="4" dy="8" stdDeviation="14" floodColor="#33363D" floodOpacity="0.18" />
          </filter>
          {/* Glow filter */}
          <filter id="inf-glow3">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g transform="rotate(-10 250 250)" filter="url(#inf-shadow3)">
          {/* Filled ribbon — created by combining top and bottom edge paths */}
          {/* We use the main stroke with large width + semi-transparent fill for the ribbon body */}
          <path
            d={paths.center}
            fill="none"
            stroke="url(#inf-ribbon)"
            strokeWidth="28"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Bright outer edge */}
          <path
            d={paths.center}
            fill="none"
            stroke="url(#inf-edge-hi)"
            strokeWidth="28"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.12"
          />

          {/* Top highlight line */}
          <path
            d={paths.outer}
            fill="none"
            stroke="#F0C9A0"
            strokeWidth="1"
            opacity="0.5"
            filter="url(#inf-glow3)"
          />

          {/* Center bright line */}
          <path
            d={paths.center}
            fill="none"
            stroke="#E0A776"
            strokeWidth="1.5"
            opacity="0.8"
            filter="url(#inf-glow3)"
          />

          {/* Inner subtle line */}
          <path
            d={paths.inner}
            fill="none"
            stroke="#C88E5E"
            strokeWidth="0.8"
            opacity="0.35"
          />
        </g>

        {/* Decorative ring */}
        <circle cx="250" cy="250" r="215" fill="none" stroke="#E0A776" strokeWidth="0.4" opacity="0.12" />
      </svg>
    </div>
  );
};

export default InfinitySymbol;
