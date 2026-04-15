import { useScrollReveal } from "../../hooks/useScrollReveal";

interface OpportunityCategory {
  name: string;
  dark?: boolean;
  items: { title: string; description: string }[];
}

interface InvestmentOpportunitiesProps {
  categories: OpportunityCategory[];
}

const InvestmentOpportunities = ({ categories }: InvestmentOpportunitiesProps) => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding" style={{ background: "linear-gradient(180deg, #EDE9E4 0%, #F5F3F0 100%)" }}>
      <div className="container-main" ref={ref}>
        <div className="text-center mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-4">Asset Classes</p>
          <h2 className="text-charcoal font-light" style={{ fontSize: "clamp(26px,4vw,38px)" }}>
            Wide Range of Investment Opportunities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          {categories.map((cat, ci) => (
            <div
              key={ci}
              className={`p-8 md:p-10 ${cat.dark ? "bg-navy" : "bg-white"}`}
              style={{ border: cat.dark ? "1px solid rgba(224,167,118,0.15)" : "1px solid rgba(0,0,0,0.06)" }}
            >
              <h3
                className={`font-light mb-8 ${cat.dark ? "text-gold" : "text-charcoal"}`}
                style={{ fontSize: "clamp(22px, 3vw, 28px)" }}
              >
                {cat.name}
              </h3>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                {cat.items.map((item, i) => (
                  <div key={i}>
                    <h4 className={`font-semibold text-sm mb-1 ${cat.dark ? "text-white" : "text-charcoal"}`}>
                      {item.title}
                    </h4>
                    <p className={`text-xs leading-relaxed ${cat.dark ? "text-white/50" : "text-slate"}`}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;
