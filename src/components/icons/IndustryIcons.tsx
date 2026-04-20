/**
 * Custom Icon Finance industry icons.
 * Thin-line (stroke 1.25), in brand style — diamonds, elegant geometry,
 * matching the gold separators used across the site.
 *
 * All icons accept standard SVG props (size, className, etc.) and inherit
 * `currentColor` so they tint with `text-gold`, `text-white`, etc.
 */
import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const Base = ({
  size = 36,
  strokeWidth = 1.25,
  children,
  ...props
}: IconProps & { children: React.ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

/* 1. Entrepreneurs & Founders — diamond inscribed in shield-arch (vision + venture) */
export const IconEntrepreneur = (props: IconProps) => (
  <Base {...props}>
    {/* arched container */}
    <path d="M24 5 L40 12 V24 C40 33 33 40 24 43 C15 40 8 33 8 24 V12 Z" />
    {/* central diamond */}
    <path d="M24 16 L31 24 L24 32 L17 24 Z" />
    {/* inner accent dot */}
    <circle cx="24" cy="24" r="1.4" fill="currentColor" stroke="none" />
  </Base>
);

/* 2. Multi-Generational Families — three connected diamonds (generations) */
export const IconFamilies = (props: IconProps) => (
  <Base {...props}>
    {/* left small diamond */}
    <path d="M11 24 L15 20 L19 24 L15 28 Z" />
    {/* center large diamond */}
    <path d="M17 24 L24 17 L31 24 L24 31 Z" />
    {/* right small diamond */}
    <path d="M29 24 L33 20 L37 24 L33 28 Z" />
    {/* connecting baseline */}
    <path d="M6 38 L42 38" opacity="0.5" />
  </Base>
);

/* 3. International Clients — meridian globe with diamond pin */
export const IconInternational = (props: IconProps) => (
  <Base {...props}>
    <circle cx="24" cy="24" r="16" />
    {/* meridians */}
    <ellipse cx="24" cy="24" rx="7" ry="16" />
    <path d="M8 24 H40" />
    <path d="M10 16 H38" opacity="0.7" />
    <path d="M10 32 H38" opacity="0.7" />
    {/* compass diamond at center */}
    <path d="M24 21 L27 24 L24 27 L21 24 Z" fill="currentColor" stroke="none" />
  </Base>
);

/* 4. Post-Exit Principals — open doorway / archway with rising diamond */
export const IconPostExit = (props: IconProps) => (
  <Base {...props}>
    {/* archway frame */}
    <path d="M10 42 V20 C10 13 16 8 24 8 C32 8 38 13 38 20 V42" />
    <path d="M10 42 H38" />
    {/* horizon line inside arch */}
    <path d="M14 30 H34" opacity="0.4" />
    {/* rising diamond — capital deployed */}
    <path d="M24 18 L28 22 L24 26 L20 22 Z" />
    {/* upward stem */}
    <path d="M24 26 V34" opacity="0.6" />
  </Base>
);

/* 5. Philanthropists — heart formed by two diamonds (giving + structure) */
export const IconPhilanthropy = (props: IconProps) => (
  <Base {...props}>
    {/* left diamond petal */}
    <path d="M24 36 L10 22 L17 15 L24 22 Z" />
    {/* right diamond petal */}
    <path d="M24 36 L38 22 L31 15 L24 22 Z" />
    {/* center seam */}
    <path d="M24 22 V36" opacity="0.4" />
  </Base>
);

/* 6. Corporate & Institutional — three columns under classic pediment */
export const IconCorporate = (props: IconProps) => (
  <Base {...props}>
    {/* pediment / roof */}
    <path d="M6 16 L24 7 L42 16" />
    <path d="M6 16 H42" />
    {/* three columns */}
    <path d="M11 16 V36" />
    <path d="M11 36 H17 V16" />
    <path d="M21 16 V36" />
    <path d="M21 36 H27 V16" />
    <path d="M31 16 V36" />
    <path d="M31 36 H37 V16" />
    {/* base */}
    <path d="M6 40 H42" />
    {/* small diamond key */}
    <path d="M24 11 L26 13 L24 15 L22 13 Z" fill="currentColor" stroke="none" />
  </Base>
);

export const IndustryIcons = [
  IconEntrepreneur,
  IconFamilies,
  IconInternational,
  IconPostExit,
  IconPhilanthropy,
  IconCorporate,
];
