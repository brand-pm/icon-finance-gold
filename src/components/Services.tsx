import { useState } from "react";
import { Link } from "react-router-dom";
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
    link: "/services/wealth-management",
  },
  {
    name: "Family Office",
    title: "Complete family office services and governance",
    desc: "Comprehensive management of family assets, governance structures, and succession planning across generations.",
    items: ["Family governance", "Succession planning", "Philanthropy advisory"],
    image: familyImg,
    alt: "Family tree — multi-generational wealth stewardship",
    link: "#",
  },
  {
    name: "Structuring & Tax",
    title: "Efficient wealth structuring and tax optimization",
    desc: "International tax planning and legal structuring to protect and optimize your wealth across jurisdictions.",
    items: ["Tax optimization", "Legal structuring", "Compliance advisory"],
    image: structuringImg,
    alt: "Shield with scales — legal protection and balance",
    link: "#",
  },
  {
    name: "Corporate Services",
    title: "Strategic corporate and business advisory",
    desc: "Expert guidance on corporate structures, M&A transactions, and strategic business initiatives.",
    items: ["M&A advisory", "Corporate restructuring", "Business strategy"],
    image: corporateImg,
    alt: "Classical column — corporate strength and foundation",
    link: "#",
  },
  {
    name: "Special Solutions",
    title: "Bespoke solutions for unique requirements",
    desc: "Custom-crafted solutions for complex situations that require innovative and creative approaches.",
    items: ["Art & collectibles", "Real estate advisory", "Lifestyle management"],
    image: specialImg,
    alt: "Diamond — bespoke luxury solutions",
    link: "#",
  },
];

const Services = () => {
  const [active, setActive] = useState(0);
  const ref = useScrollReveal();

  return (
    <section id="services" className="section-padding relative marble-texture">
      <div className="container-main" ref={ref}>
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

        <div className="services-shell grid lg:grid-cols-[220px_1fr_420px] gap-0">
          <div className="services-tabs-panel py-6 px-2 lg:border-r lg:border-border/70">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`services-tab-button ${
                  i === active ? "services-tab-button--active" : "services-tab-button--inactive"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span className={`services-tab-marker ${i === active ? "opacity-100" : "opacity-0"}`}>◆</span>
                  {tab.name}
                </span>
                <span className={`services-tab-chevron ${i === active ? "opacity-100" : "opacity-0"}`}>›</span>
              </button>
            ))}
          </div>

          <div
            className="opacity-0 animate-fade-up flex flex-col justify-center px-8 py-10 md:px-10 lg:px-12"
            key={active}
            style={{ animationDelay: "0.1s" }}
          >
            <h3
              className="text-charcoal font-light mb-5"
              style={{ fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.2 }}
            >
              {tabs[active].title}
            </h3>
            <p className="text-slate text-[15px] leading-[1.75] mb-10 max-w-[720px]">
              {tabs[active].desc}
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-6 mb-10">
              {tabs[active].items.map((item, i) => (
                <div key={i} className="flex flex-col gap-1.5 min-w-[150px]">
                  <span className="text-gold font-light text-2xl">0{i + 1}</span>
                  <span className="text-charcoal text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to={tabs[active].link}
              className="btn-gold px-8 py-3 inline-block text-[12px] self-start"
            >
              Learn more
            </Link>
          </div>

          <div className="services-image-panel flex items-center justify-center overflow-hidden">
            <img
              key={active}
              src={tabs[active].image}
              alt={tabs[active].alt}
              loading="lazy"
              width={1024}
              height={1024}
              className="service-symbol-image animate-scale-in"
              style={{ animation: "scale-in 0.5s ease-out forwards" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
