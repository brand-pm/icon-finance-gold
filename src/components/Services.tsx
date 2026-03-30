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
            <div className="dot" /><div className="dot" /><div className="dot" />
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-[25%_40%_35%] gap-8">
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

          {/* Image placeholder */}
          <div className="aspect-square bg-[#E8E4DE] w-full" />
        </div>
      </div>
    </section>
  );
};

export default Services;
