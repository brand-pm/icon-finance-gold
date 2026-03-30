import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import infinityImg from "../assets/infinity-symbol.png";
import familyImg from "../assets/family-office-symbol.png";
import structuringImg from "../assets/structuring-tax-symbol.png";
import corporateImg from "../assets/corporate-services-symbol.png";
import specialImg from "../assets/special-solutions-symbol.png";

const tabs = [
  {
    name: "Wealth Management",
    title: "Holistic solutions for preserving and growing wealth",
    desc: "We focus on long-term partnerships and mutual growth, offering tailored financial strategies to meet our clients' changing needs.",
    items: ["Portfolio management", "Investment strategies", "Alternative assets"],
    image: infinityImg,
    alt: "Infinity symbol — wealth preservation across generations",
  },
  {
    name: "Family Office",
    title: "Complete family office services and governance",
    desc: "Comprehensive management of family assets, governance structures, and succession planning across generations.",
    items: ["Family governance", "Succession planning", "Philanthropy advisory"],
    image: familyImg,
    alt: "Family tree — multi-generational wealth stewardship",
  },
  {
    name: "Structuring & Tax",
    title: "Efficient wealth structuring and tax optimization",
    desc: "International tax planning and legal structuring to protect and optimize your wealth across jurisdictions.",
    items: ["Tax optimization", "Legal structuring", "Compliance advisory"],
    image: structuringImg,
    alt: "Shield with scales — legal protection and balance",
  },
  {
    name: "Corporate Services",
    title: "Strategic corporate and business advisory",
    desc: "Expert guidance on corporate structures, M&A transactions, and strategic business initiatives.",
    items: ["M&A advisory", "Corporate restructuring", "Business strategy"],
    image: corporateImg,
    alt: "Classical column — corporate strength and foundation",
  },
  {
    name: "Special Solutions",
    title: "Bespoke solutions for unique requirements",
    desc: "Custom-crafted solutions for complex situations that require innovative and creative approaches.",
    items: ["Art & collectibles", "Real estate advisory", "Lifestyle management"],
    image: specialImg,
    alt: "Diamond — bespoke luxury solutions",
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
            A tailored approach to wealth management that reflects your goals and international opportunities
          </p>
          <div className="gold-separator">
            <div className="dot" /><div className="dot-lg" /><div className="dot" />
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-[240px_1fr_320px] gap-12 relative z-10">
          {/* Tabs — card style */}
          <div className="bg-white shadow-md p-2 self-start">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left px-4 py-4 text-sm transition-all duration-300 flex items-center justify-between ${
                  i === active
                    ? "text-charcoal font-semibold"
                    : "text-slate hover:text-charcoal"
                } ${i < tabs.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <span className="flex items-center gap-2">
                  {i === active && <span className="text-gold text-[8px]">◆</span>}
                  {tab.name}
                </span>
                {i === active && <span className="text-gold text-lg">›</span>}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="opacity-0 animate-fade-up flex flex-col justify-center" key={active} style={{ animationDelay: "0.1s" }}>
            <h3 className="text-charcoal font-light mb-5" style={{ fontSize: "clamp(24px,3.5vw,36px)", lineHeight: 1.2 }}>
              {tabs[active].title}
            </h3>
            <p className="text-slate text-base leading-[1.7] mb-10">{tabs[active].desc}</p>
            <div className="flex gap-12 mb-10">
              {tabs[active].items.map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-gold font-light text-2xl">0{i + 1}</span>
                  <span className="text-charcoal text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-gold px-8 py-3 inline-block text-[12px] self-start">Learn more</a>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src={tabs[active].image}
              alt={tabs[active].alt}
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
