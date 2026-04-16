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
    <section className="section-padding bg-offwhite">
      <div className="container-main" ref={ref}>
        <div className="text-center mb-16 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-4">Asset Classes</p>
          <h2 className="text-charcoal font-light" style={{ fontSize: "clamp(26px,4vw,38px)", maxWidth: "480px", margin: "0 auto" }}>
            Wide Range of Investment Opportunities
          </h2>
          <div className="gold-separator mt-8">
            <div className="dot" /><div className="dot-lg" /><div className="dot" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          {categories.map((cat, ci) => (
            <div
              key={ci}
              className={`h-full flex flex-col ${cat.dark ? "bg-navy" : "bg-white"}`}
              style={{ border: cat.dark ? "1px solid rgba(224,167,118,0.15)" : "1px solid rgba(0,0,0,0.06)", padding: "48px" }}
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
                    <h4 className={`text-sm mb-1 ${cat.dark ? "text-white" : "text-charcoal"}`} style={{ fontWeight: 400 }}>
                      {item.title}
                    </h4>
                    <p className={`leading-relaxed ${cat.dark ? "text-white/50" : ""}`} style={{ fontSize: "14px", color: cat.dark ? undefined : "#6B7280" }}>
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
