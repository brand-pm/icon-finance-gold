import { useState } from "react";

interface Strategy {
  name: string;
  description: string;
  items: string[];
}

interface InvestmentStrategiesProps {
  strategies: Strategy[];
}

const InvestmentStrategies = ({ strategies }: InvestmentStrategiesProps) => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-navy relative">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Strategies</p>
          <h2 className="text-white font-light" style={{ fontSize: "clamp(26px,4vw,38px)" }}>
            Our Investment Strategies
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-1 mb-12">
          {strategies.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-3 text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                i === active
                  ? "bg-gold text-navy"
                  : "text-white/50 hover:text-white border border-white/10"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto opacity-0 animate-fade-up" key={active}>
          <p className="text-white/70 text-base leading-relaxed mb-8">
            {strategies[active].description}
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {strategies[active].items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-gold text-xs mt-1">◆</span>
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentStrategies;
