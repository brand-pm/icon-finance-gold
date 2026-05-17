/**
 * Icon Finance industry icons — golden glass 3D style.
 *
 * Stylized to match the warm gold/copper aesthetic of the services
 * symbol images on the homepage. Each icon uses inline linear &
 * radial gradients for glass depth, white highlight strokes for
 * gloss, and an outer gold drop-shadow glow so the marks read
 * cleanly on the navy industries surface.
 *
 * All icons accept standard SVG props (size, className, etc.).
 * Colors are baked into the SVG gradients (gold palette) rather
 * than `currentColor` because the glass effect needs multi-stop
 * gradients — className is still useful for sizing/positioning.
 */
import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

/** Shared gradient palette */
const GOLD_LIGHT = "#F4D5A8";
const GOLD_MID = "#E0A776";
const GOLD_DEEP = "#A06940";
const GOLD_SHADOW = "#5C3A1F";

interface DefsProps {
  id: string;
}

const GlassDefs = ({ id }: DefsProps) => (
  <defs>
    {/* main golden glass body */}
    <linearGradient id={`${id}-body`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor={GOLD_LIGHT} />
      <stop offset="45%" stopColor={GOLD_MID} />
      <stop offset="100%" stopColor={GOLD_DEEP} />
    </linearGradient>
    {/* glossy top highlight overlay */}
    <linearGradient id={`${id}-gloss`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
      <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.05" />
      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
    </linearGradient>
    {/* deep edge / shadow */}
    <linearGradient id={`${id}-edge`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor={GOLD_LIGHT} stopOpacity="0.9" />
      <stop offset="100%" stopColor={GOLD_SHADOW} stopOpacity="0.85" />
    </linearGradient>
    {/* outer gold glow — readable on navy */}
    <filter id={`${id}-glow`} x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="2.2" result="b" />
      <feFlood floodColor={GOLD_MID} floodOpacity="0.55" result="c" />
      <feComposite in="c" in2="b" operator="in" result="g" />
      <feMerge>
        <feMergeNode in="g" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    {/* inner soft shadow for depth */}
    <radialGradient id={`${id}-depth`} cx="50%" cy="35%" r="65%">
      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15" />
      <stop offset="100%" stopColor={GOLD_SHADOW} stopOpacity="0.4" />
    </radialGradient>
  </defs>
);

const Base = ({
  size = 44,
  children,
  ...props
}: IconProps & { children: React.ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

/* 1. Entrepreneurs & Founders — faceted gem / cornerstone diamond */
export const IconEntrepreneur = (props: IconProps) => {
  const id = "ic-ent";
  return (
    <Base {...props}>
      <GlassDefs id={id} />
      <g filter={`url(#${id}-glow)`}>
        {/* faceted diamond body */}
        <path d="M32 6 L52 24 L32 58 L12 24 Z" fill={`url(#${id}-body)`} />
        {/* table top */}
        <path d="M32 6 L52 24 L42 24 L32 14 L22 24 L12 24 Z" fill={`url(#${id}-gloss)`} />
        {/* facet lines */}
        <path d="M32 14 L42 24 L32 58 L22 24 Z" fill={`url(#${id}-depth)`} opacity="0.7" />
        <path d="M32 14 L32 58" stroke={GOLD_LIGHT} strokeWidth="0.6" opacity="0.6" />
        <path d="M22 24 L42 24" stroke={GOLD_SHADOW} strokeWidth="0.6" opacity="0.5" />
        {/* sparkle highlight */}
        <path d="M28 18 L30 22 L28 26 L26 22 Z" fill="#FFFFFF" opacity="0.55" />
      </g>
    </Base>
  );
};

/* 2. Multi-Generational Families — three interlocking glass rings (generations) */
export const IconFamilies = (props: IconProps) => {
  const id = "ic-fam";
  return (
    <Base {...props}>
      <GlassDefs id={id} />
      <g filter={`url(#${id}-glow)`}>
        {/* outer ring */}
        <circle cx="20" cy="32" r="12" stroke={`url(#${id}-body)`} strokeWidth="3.2" fill="none" />
        <circle cx="44" cy="32" r="12" stroke={`url(#${id}-body)`} strokeWidth="3.2" fill="none" />
        <circle cx="32" cy="20" r="12" stroke={`url(#${id}-edge)`} strokeWidth="3.2" fill="none" />
        {/* gloss arcs */}
        <path d="M14 26 A12 12 0 0 1 26 22" stroke="#FFFFFF" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" fill="none" />
        <path d="M38 26 A12 12 0 0 1 50 22" stroke="#FFFFFF" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" fill="none" />
        <path d="M26 14 A12 12 0 0 1 38 14" stroke="#FFFFFF" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" fill="none" />
      </g>
    </Base>
  );
};

/* 3. International Clients — meridian glass globe with orbit */
export const IconInternational = (props: IconProps) => {
  const id = "ic-int";
  return (
    <Base {...props}>
      <GlassDefs id={id} />
      <g filter={`url(#${id}-glow)`}>
        {/* sphere */}
        <circle cx="32" cy="32" r="20" fill={`url(#${id}-body)`} />
        <circle cx="32" cy="32" r="20" fill={`url(#${id}-depth)`} />
        {/* meridians */}
        <ellipse cx="32" cy="32" rx="9" ry="20" stroke={GOLD_SHADOW} strokeWidth="0.8" opacity="0.7" fill="none" />
        <path d="M12 32 H52" stroke={GOLD_SHADOW} strokeWidth="0.8" opacity="0.7" />
        <path d="M14 22 H50" stroke={GOLD_SHADOW} strokeWidth="0.6" opacity="0.5" />
        <path d="M14 42 H50" stroke={GOLD_SHADOW} strokeWidth="0.6" opacity="0.5" />
        {/* gloss */}
        <ellipse cx="25" cy="22" rx="9" ry="5" fill="#FFFFFF" opacity="0.4" />
        {/* orbit ring */}
        <ellipse cx="32" cy="32" rx="26" ry="6" stroke={`url(#${id}-edge)`} strokeWidth="1.2" fill="none" opacity="0.85" transform="rotate(-18 32 32)" />
      </g>
    </Base>
  );
};

/* 4. Post-Exit Principals — open arched gateway with rising gem */
export const IconPostExit = (props: IconProps) => {
  const id = "ic-pex";
  return (
    <Base {...props}>
      <GlassDefs id={id} />
      <g filter={`url(#${id}-glow)`}>
        {/* arch body */}
        <path d="M12 56 V26 C12 16 21 8 32 8 C43 8 52 16 52 26 V56 Z" fill={`url(#${id}-body)`} />
        {/* inner negative arch */}
        <path d="M20 56 V28 C20 21 25 16 32 16 C39 16 44 21 44 28 V56 Z" fill="#0F162D" />
        {/* gloss edge */}
        <path d="M12 26 C12 16 21 8 32 8" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.6" fill="none" />
        {/* rising diamond inside arch */}
        <path d="M32 30 L38 36 L32 42 L26 36 Z" fill={`url(#${id}-edge)`} />
        <path d="M32 30 L38 36 L32 36 Z" fill="#FFFFFF" opacity="0.45" />
        {/* base ground line */}
        <path d="M10 56 H54" stroke={GOLD_DEEP} strokeWidth="1.2" />
      </g>
    </Base>
  );
};

/* 5. Philanthropists — heart of two faceted diamonds */
export const IconPhilanthropy = (props: IconProps) => {
  const id = "ic-phi";
  return (
    <Base {...props}>
      <GlassDefs id={id} />
      <g filter={`url(#${id}-glow)`}>
        {/* left lobe */}
        <path d="M32 54 L10 30 L20 16 L32 28 Z" fill={`url(#${id}-body)`} />
        {/* right lobe */}
        <path d="M32 54 L54 30 L44 16 L32 28 Z" fill={`url(#${id}-edge)`} />
        {/* center facet */}
        <path d="M32 28 L32 54" stroke={GOLD_SHADOW} strokeWidth="0.7" opacity="0.6" />
        {/* highlights */}
        <path d="M20 16 L14 26" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.55" />
        <path d="M44 16 L50 26" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.35" />
        {/* sparkle */}
        <circle cx="22" cy="22" r="1.4" fill="#FFFFFF" opacity="0.7" />
      </g>
    </Base>
  );
};

/* 6. Corporate & Institutional — classical glass pillars under pediment */
export const IconCorporate = (props: IconProps) => {
  const id = "ic-cor";
  return (
    <Base {...props}>
      <GlassDefs id={id} />
      <g filter={`url(#${id}-glow)`}>
        {/* pediment */}
        <path d="M6 22 L32 8 L58 22 Z" fill={`url(#${id}-body)`} />
        <path d="M6 22 L32 8 L32 14 Z" fill="#FFFFFF" opacity="0.35" />
        {/* architrave */}
        <rect x="8" y="22" width="48" height="4" fill={`url(#${id}-edge)`} />
        {/* columns */}
        {[12, 25, 38].map((x, i) => (
          <g key={i}>
            <rect x={x} y="28" width="8" height="22" fill={`url(#${id}-body)`} />
            <rect x={x + 1} y="28" width="1.5" height="22" fill="#FFFFFF" opacity="0.45" />
            <rect x={x + 5.5} y="28" width="1" height="22" fill={GOLD_SHADOW} opacity="0.5" />
          </g>
        ))}
        {/* base */}
        <rect x="6" y="50" width="52" height="5" fill={`url(#${id}-edge)`} />
        {/* keystone diamond */}
        <path d="M32 14 L34 17 L32 20 L30 17 Z" fill="#FFFFFF" opacity="0.7" />
      </g>
    </Base>
  );
};

export const IndustryIcons = [
  IconEntrepreneur,
  IconFamilies,
  IconInternational,
  IconPostExit,
  IconPhilanthropy,
  IconCorporate,
];
