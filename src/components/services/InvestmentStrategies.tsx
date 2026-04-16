import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

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
  const ref = useScrollReveal();

  return (
    <section className="section-padding" style={{ background: "linear-gradient(180deg, #F5F3F0 0%, #EDE9E4 100%)" }}>
      <div className="container-main" ref={ref}>
        <div className="text-center mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-4">Strategies</p>
          <h2 className="text-charcoal font-light" style={{ fontSize: "clamp(26px,4vw,38px)" }}>
            Our Investment Strategies
          </h2>
          <div className="gold-separator mt-6">
            <div className="dot" /><div className="dot-lg" /><div className="dot" />
          </div>
        </div>

        {/* Layout: left tabs + right content */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {/* Left — tab list */}
          <div className="flex flex-col">
            {strategies.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left px-5 py-4 text-sm font-medium transition-all duration-300 border-l-2 ${
                  i === active
                    ? "border-l-gold text-charcoal bg-white/80"
                    : "border-l-transparent text-slate hover:text-charcoal hover:bg-white/40"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          {/* Right — content */}
          <div className="bg-white p-8 lg:p-10" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
            <h3 className="text-charcoal font-semibold text-lg mb-4">{strategies[active].name}</h3>
            <p className="text-slate text-sm leading-relaxed mb-6">
              {strategies[active].description}
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {strategies[active].items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-gold text-xs mt-1">◆</span>
                  <span className="text-charcoal text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentStrategies;
