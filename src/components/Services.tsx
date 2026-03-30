import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import InfinitySymbol from "./InfinitySymbol";

const tabs = [
  {
    name: "Wealth Management",
    title: "Holistic solutions for preserving and growing wealth",
    desc: "We focus on long-term partnerships and mutual growth, offering tailored financial strategies to meet our clients' changing needs.",
    items: ["Portfolio management", "Investment strategies", "Alternative assets"],
  },
  {
    name: "Family Office",
    title: "Complete family office services and governance",
    desc: "Comprehensive management of family assets, governance structures, and succession planning across generations.",
    items: ["Family governance", "Succession planning", "Philanthropy advisory"],
  },
  {
    name: "Structuring & Tax",
    title: "Efficient wealth structuring and tax optimization",
    desc: "International tax planning and legal structuring to protect and optimize your wealth across jurisdictions.",
    items: ["Tax optimization", "Legal structuring", "Compliance advisory"],
  },
  {
    name: "Corporate Services",
    title: "Strategic corporate and business advisory",
    desc: "Expert guidance on corporate structures, M&A transactions, and strategic business initiatives.",
    items: ["M&A advisory", "Corporate restructuring", "Business strategy"],
  },
  {
    name: "Special Solutions",
    title: "Bespoke solutions for unique requirements",
    desc: "Custom-crafted solutions for complex situations that require innovative and creative approaches.",
    items: ["Art & collectibles", "Real estate advisory", "Lifestyle management"],
  },
];

const Services = () => {
  const [active, setActive] = useState(0);
  const ref = useScrollReveal();

  return (
    <section id="services" className="section-padding bg-offwhite marble-texture relative">
      <div className="container-main" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <p className="eyebrow mb-4">Our Services</p>
          <h2
            className="text-charcoal font-light mb-4"
            style={{ fontSize: "clamp(28px,5vw,42px)" }}
          >
            Comprehensive Solutions for Your Capital
          </h2>
          <p className="text-slate text-base max-w-[520px] mx-auto mb-6">
            Tailored wealth management services designed around your unique goals and circumstances
          </p>
          <div className="gold-separator">
            <div className="dot" /><div className="dot-lg" /><div className="dot" />
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-[25%_40%_35%] gap-8 relative z-10 bg-offwhite">
          {/* Tabs */}
          <div className="flex lg:flex-col gap-2">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left px-4 py-3 text-sm transition-all duration-300 flex items-center justify-between ${
                  i === active
                    ? "border-l-2 border-gold text-charcoal font-semibold bg-white shadow-sm"
                    : "text-slate hover:text-charcoal"
                }`}
              >
                {tab.name}
                {i === active && <span className="text-gold">›</span>}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="opacity-0 animate-fade-up" key={active} style={{ animationDelay: "0.1s" }}>
            <h3 className="text-charcoal text-[28px] font-light mb-4">{tabs[active].title}</h3>
            <p className="text-slate text-base leading-[1.7] mb-8">{tabs[active].desc}</p>
            <div className="flex gap-6 mb-8">
              {tabs[active].items.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-gold font-medium text-sm">0{i + 1}</span>
                  <span className="text-charcoal text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-gold px-6 py-3 inline-block text-[12px]">Learn more</a>
          </div>

          {/* Infinity symbol artwork */}
          <div className="aspect-square bg-[#E8E4DE] w-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_48%,rgba(224,167,118,0.15)_0%,transparent_65%)]" />
            <svg
              viewBox="0 0 500 500"
              className="w-[82%] h-[82%] relative z-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Lit face — top surface catching light */}
                <linearGradient id="inf-face-lit" x1="0" y1="0" x2="0.3" y2="1">
                  <stop offset="0%" stopColor="#E0A776" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#D4975F" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#C88E5E" stopOpacity="0.2" />
                </linearGradient>
                {/* Shadow face — bottom/back surface */}
                <linearGradient id="inf-face-dark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9A7150" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#E0A776" stopOpacity="0.5" />
                </linearGradient>
                {/* Bright edge — top highlight stroke */}
                <linearGradient id="inf-bright" x1="0" y1="0" x2="1" y2="0.5">
                  <stop offset="0%" stopColor="#F0C9A0" stopOpacity="1" />
                  <stop offset="50%" stopColor="#E0A776" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#C88E5E" stopOpacity="0.4" />
                </linearGradient>
                {/* Dim edge — back/shadow stroke */}
                <linearGradient id="inf-dim" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C88E5E" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#E0A776" stopOpacity="0.7" />
                </linearGradient>
                {/* Drop shadow */}
                <filter id="inf-drop">
                  <feDropShadow dx="6" dy="10" stdDeviation="12" floodColor="#33363D" floodOpacity="0.2" />
                </filter>
                {/* Glow for specular highlights */}
                <filter id="inf-glow2">
                  <feGaussianBlur stdDeviation="2" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              <g transform="rotate(-15 250 250)" filter="url(#inf-drop)">

                {/* === BACK RIBBON (behind the cross) === */}
                {/* Left-back lobe */}
                <path
                  d="M250 225
                     C245 170, 165 125, 115 150
                     C65 175, 55 235, 90 270
                     C120 300, 190 285, 220 260
                     L250 225Z"
                  fill="url(#inf-face-dark)"
                  stroke="url(#inf-dim)"
                  strokeWidth="1.5"
                />
                {/* Right-back lobe */}
                <path
                  d="M250 275
                     C255 330, 335 375, 385 350
                     C435 325, 445 265, 410 230
                     C380 200, 310 215, 280 240
                     L250 275Z"
                  fill="url(#inf-face-dark)"
                  stroke="url(#inf-dim)"
                  strokeWidth="1.5"
                />

                {/* === FRONT RIBBON (over the cross) === */}
                {/* Left-front lobe */}
                <path
                  d="M250 275
                     C245 330, 165 375, 115 350
                     C65 325, 55 265, 90 230
                     C120 200, 190 215, 220 240
                     L250 275Z"
                  fill="url(#inf-face-lit)"
                  stroke="url(#inf-bright)"
                  strokeWidth="1.8"
                />
                {/* Right-front lobe */}
                <path
                  d="M250 225
                     C255 170, 335 125, 385 150
                     C435 175, 445 235, 410 270
                     C380 300, 310 285, 280 260
                     L250 225Z"
                  fill="url(#inf-face-lit)"
                  stroke="url(#inf-bright)"
                  strokeWidth="1.8"
                />

                {/* === SPECULAR HIGHLIGHTS === */}
                {/* Top-edge bright line — left front */}
                <path
                  d="M250 275
                     C245 330, 165 375, 115 350
                     C65 325, 55 265, 90 230"
                  fill="none"
                  stroke="#F0C9A0"
                  strokeWidth="0.8"
                  opacity="0.7"
                  filter="url(#inf-glow2)"
                />
                {/* Top-edge bright line — right front */}
                <path
                  d="M250 225
                     C255 170, 335 125, 385 150
                     C435 175, 445 235, 410 270"
                  fill="none"
                  stroke="#F0C9A0"
                  strokeWidth="0.8"
                  opacity="0.7"
                  filter="url(#inf-glow2)"
                />

                {/* Center twist glow */}
                <ellipse cx="250" cy="250" rx="12" ry="28" fill="#E0A776" opacity="0.12" />
                <ellipse cx="250" cy="250" rx="4" ry="10" fill="#F0C9A0" opacity="0.2" />
              </g>

              {/* Decorative outer ring */}
              <circle cx="250" cy="250" r="210" fill="none" stroke="#E0A776" strokeWidth="0.4" opacity="0.15" />
              <circle cx="250" cy="250" r="220" fill="none" stroke="#E0A776" strokeWidth="0.2" opacity="0.08" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
