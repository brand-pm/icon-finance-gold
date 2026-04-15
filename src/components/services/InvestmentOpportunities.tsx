import { useState } from "react";

interface OpportunityCategory {
  name: string;
  items: { title: string; description: string }[];
}

interface InvestmentOpportunitiesProps {
  categories: OpportunityCategory[];
}

const InvestmentOpportunities = ({ categories }: InvestmentOpportunitiesProps) => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-navy relative">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Opportunities</p>
          <h2 className="text-white font-light" style={{ fontSize: "clamp(26px,4vw,38px)" }}>
            Wide Range of Investment Opportunities
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-1 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-3 text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                i === active
                  ? "bg-gold text-navy"
                  : "text-white/50 hover:text-white border border-white/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 animate-fade-up" key={active}>
          {categories[active].items.map((item, i) => (
            <div
              key={i}
              className="p-6 transition-all duration-300 hover:border-gold/40"
              style={{ border: "1px solid rgba(224,167,118,0.15)", background: "rgba(255,255,255,0.03)" }}
            >
              <span className="text-gold font-light text-2xl mb-3 block">0{i + 1}</span>
              <h4 className="text-white font-semibold text-sm mb-2">{item.title}</h4>
              <p className="text-white/50 text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;
