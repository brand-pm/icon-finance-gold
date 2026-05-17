/**
 * Infinity (∞) icon — golden glass material.
 * Shares the same GlassDefs / material tokens as IndustryIcons.
 * Reusable anywhere the brand infinity mark is needed.
 *
 * Material parameters are driven by CSS variables in :root
 * (see --glass-* tokens in src/index.css).
 */
import * as React from "react";
import { GlassDefs } from "./IndustryIcons";

type Props = React.SVGProps<SVGSVGElement> & {
  width?: number;
  height?: number;
};

export const InfinityGlassIcon = ({
  width = 32,
  height = 16,
  ...props
}: Props) => {
  const id = "ic-inf";
  const d =
    "M24 0C28.4183 0 32.0009 3.58171 32.001 8C32.001 12.4184 28.4184 16 24 16C21.018 15.9999 18.4193 14.3675 17.0439 11.9482L19.2949 8.95508C19.7377 11.1484 21.6762 12.7996 24 12.7998C26.651 12.7998 28.8008 10.651 28.8008 8C28.8007 5.34905 26.651 3.2002 24 3.2002C22.3479 3.20032 20.8908 4.03495 20.0273 5.30566L20.0283 5.30664L20.0205 5.31641C20.0048 5.33967 19.9909 5.36414 19.9756 5.3877L16.3223 10.2461C16.3214 10.2431 16.3202 10.2403 16.3193 10.2373L14.5498 12.5898C13.1027 14.6512 10.7099 16 8 16C3.58171 15.9999 0 12.4183 0 8C7.51989e-05 3.58176 3.58176 7.52011e-05 8 0C9.25291 0 10.4387 0.287239 11.4941 0.800781L9.50781 3.44238C9.0336 3.28559 8.5268 3.2002 8 3.2002C5.3491 3.20027 3.20027 5.3491 3.2002 8C3.2002 10.651 5.34905 12.7997 8 12.7998C9.42991 12.7998 10.7125 12.1736 11.5918 11.1816L11.5947 11.1836L11.6201 11.1484C11.7707 10.9754 11.9093 10.7921 12.0342 10.5986L15.6777 5.75391C15.6786 5.75687 15.6798 5.75973 15.6807 5.7627L17.4297 3.43652C18.8747 1.35984 21.2783 0.000127604 24 0Z";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 16"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <GlassDefs id={id} />
      <g filter={`url(#${id}-glow)`}>
        <path d={d} fill={`url(#${id}-body)`} />
        <path d={d} fill={`url(#${id}-depth)`} />
        <path d={d} fill={`url(#${id}-rim)`} />
        <path d={d} fill={`url(#${id}-gloss)`} opacity="0.7" />
        <path d={d} fill={`url(#${id}-spec)`} />
      </g>
    </svg>
  );
};

export default InfinityGlassIcon;
