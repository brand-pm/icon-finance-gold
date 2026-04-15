import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface OpportunityCategory {
  name: string;
  items: { title: string; description: string }[];
}

interface InvestmentOpportunitiesProps {
  categories: OpportunityCategory[];
}

const InvestmentOpportunities = ({ categories }: InvestmentOpportunitiesProps) => {
  const [active, setActive] = useState(0);
  const ref = useScrollReveal();

  return (
    <section className="section-padding" style={{ background: "linear-gradient(180deg, #EDE9E4 0%, #F5F3F0 100%)" }}>
      <div className="container-main" ref={ref}>
        <div className="text-center mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-4">Opportunities</p>
          <h2 className="text-charcoal font-light" style={{ fontSize: "clamp(26px,4vw,38px)" }}>
            Wide Range of Investment Opportunities
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-1 mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-3 text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                i === active
                  ? "bg-navy text-white"
                  : "text-charcoal hover:text-navy border border-black/10 bg-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }} key={active}>
          {categories[active].items.map((item, i) => (
            <div
              key={i}
              className={`p-6 transition-all duration-300 ${
                active === 1
                  ? "bg-navy hover:bg-navy/90"
                  : "bg-white hover:shadow-md"
              }`}
              style={{ border: active === 1 ? "1px solid rgba(224,167,118,0.15)" : "1px solid rgba(0,0,0,0.06)" }}
            >
              <span className={`font-light text-2xl mb-3 block ${active === 1 ? "text-gold" : "text-gold/40"}`}>0{i + 1}</span>
              <h4 className={`font-semibold text-sm mb-2 ${active === 1 ? "text-white" : "text-charcoal"}`}>{item.title}</h4>
              <p className={`text-xs leading-relaxed ${active === 1 ? "text-white/50" : "text-slate"}`}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;
