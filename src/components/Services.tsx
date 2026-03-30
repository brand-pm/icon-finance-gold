import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(224,167,118,0.08)_0%,transparent_70%)]" />
            <svg
              viewBox="0 0 500 500"
              className="w-[80%] h-[80%] relative z-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gold gradient top-lit */}
                <linearGradient id="inf-top" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E0A776" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#C88E5E" stopOpacity="0.08" />
                </linearGradient>
                {/* Gold gradient bottom-lit for 3D feel */}
                <linearGradient id="inf-bot" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C88E5E" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#E0A776" stopOpacity="0.25" />
                </linearGradient>
                {/* Edge highlight */}
                <linearGradient id="inf-edge" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E0A776" stopOpacity="0.9" />
                  <stop offset="40%" stopColor="#C88E5E" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#E0A776" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="inf-edge2" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E0A776" stopOpacity="0.3" />
                  <stop offset="60%" stopColor="#C88E5E" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#E0A776" stopOpacity="0.9" />
                </linearGradient>
                {/* Shadow */}
                <filter id="inf-shadow">
                  <feDropShadow dx="4" dy="6" stdDeviation="8" floodColor="#33363D" floodOpacity="0.12" />
                </filter>
                {/* Soft inner glow */}
                <filter id="inf-inner-glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g transform="rotate(-12 250 250)" filter="url(#inf-shadow)">
                {/* Back ribbon — bottom half of the twist, behind the cross */}
                <path
                  d="M250 230
                     C250 180, 175 140, 130 160
                     C85 180, 75 230, 100 260
                     C125 290, 180 280, 210 260
                     L250 230Z"
                  fill="url(#inf-bot)"
                  stroke="url(#inf-edge2)"
                  strokeWidth="1"
                />
                <path
                  d="M250 270
                     C250 320, 325 360, 370 340
                     C415 320, 425 270, 400 240
                     C375 210, 320 220, 290 240
                     L250 270Z"
                  fill="url(#inf-bot)"
                  stroke="url(#inf-edge2)"
                  strokeWidth="1"
                />

                {/* Front ribbon — top half, over the cross */}
                <path
                  d="M250 270
                     C250 320, 175 360, 130 340
                     C85 320, 75 270, 100 240
                     C125 210, 180 220, 210 240
                     L250 270Z"
                  fill="url(#inf-top)"
                  stroke="url(#inf-edge)"
                  strokeWidth="1.2"
                />
                <path
                  d="M250 230
                     C250 180, 325 140, 370 160
                     C415 180, 425 230, 400 260
                     C375 290, 320 280, 290 260
                     L250 230Z"
                  fill="url(#inf-top)"
                  stroke="url(#inf-edge)"
                  strokeWidth="1.2"
                />

                {/* Center cross highlight */}
                <ellipse cx="250" cy="250" rx="8" ry="22" fill="#E0A776" opacity="0.08" />

                {/* Specular edge highlights — thin bright lines on top edges */}
                <path
                  d="M250 270
                     C250 320, 175 360, 130 340
                     C85 320, 75 270, 100 240"
                  fill="none"
                  stroke="#E0A776"
                  strokeWidth="0.5"
                  opacity="0.5"
                  filter="url(#inf-inner-glow)"
                />
                <path
                  d="M250 230
                     C250 180, 325 140, 370 160
                     C415 180, 425 230, 400 260"
                  fill="none"
                  stroke="#E0A776"
                  strokeWidth="0.5"
                  opacity="0.5"
                  filter="url(#inf-inner-glow)"
                />
              </g>

              {/* Subtle decorative elements */}
              <circle cx="250" cy="250" r="190" fill="none" stroke="#E0A776" strokeWidth="0.3" opacity="0.12" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
