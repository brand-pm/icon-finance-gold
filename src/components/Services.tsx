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
            {/* Subtle radial glow behind the symbol */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(224,167,118,0.12)_0%,transparent_70%)]" />
            <svg
              viewBox="0 0 400 400"
              className="w-[75%] h-[75%] relative z-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="inf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E0A776" />
                  <stop offset="50%" stopColor="#C88E5E" />
                  <stop offset="100%" stopColor="#E0A776" />
                </linearGradient>
                <linearGradient id="inf-grad-light" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E0A776" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="#E0A776" stopOpacity="0.06" />
                  <stop offset="100%" stopColor="#E0A776" stopOpacity="0.15" />
                </linearGradient>
                <filter id="inf-glow">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Outer decorative ring */}
              <circle cx="200" cy="200" r="170" fill="none" stroke="#E0A776" strokeWidth="0.5" opacity="0.2" />
              <circle cx="200" cy="200" r="160" fill="none" stroke="#E0A776" strokeWidth="0.3" opacity="0.1" />

              {/* Corner accents */}
              {[0, 90, 180, 270].map((angle) => (
                <line
                  key={angle}
                  x1="200"
                  y1="30"
                  x2="200"
                  y2="45"
                  stroke="#E0A776"
                  strokeWidth="1"
                  opacity="0.3"
                  transform={`rotate(${angle} 200 200)`}
                />
              ))}

              {/* Main infinity — thick stroke with glow */}
              <path
                d="M200 200 C200 155, 260 130, 295 155 C330 180, 330 220, 295 245 C260 270, 200 245, 200 200 C200 155, 140 130, 105 155 C70 180, 70 220, 105 245 C140 270, 200 245, 200 200Z"
                fill="none"
                stroke="url(#inf-grad)"
                strokeWidth="2.5"
                filter="url(#inf-glow)"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Inner thinner infinity for depth */}
              <path
                d="M200 200 C200 162, 255 140, 285 160 C315 180, 315 220, 285 240 C255 260, 200 238, 200 200 C200 162, 145 140, 115 160 C85 180, 85 220, 115 240 C145 260, 200 238, 200 200Z"
                fill="url(#inf-grad-light)"
                stroke="url(#inf-grad)"
                strokeWidth="0.5"
                opacity="0.5"
              />

              {/* Center dot */}
              <circle cx="200" cy="200" r="3" fill="#E0A776" opacity="0.8" />
              <circle cx="200" cy="200" r="6" fill="none" stroke="#E0A776" strokeWidth="0.5" opacity="0.3" />

              {/* Small decorative diamonds at the widest points */}
              <rect x="63" y="197" width="6" height="6" transform="rotate(45 66 200)" fill="#E0A776" opacity="0.4" />
              <rect x="331" y="197" width="6" height="6" transform="rotate(45 334 200)" fill="#E0A776" opacity="0.4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
