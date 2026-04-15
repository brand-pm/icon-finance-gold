import { useScrollReveal } from "../../hooks/useScrollReveal";

interface StatItem {
  value: string;
  label: string;
}

interface ResultsStatsProps {
  items: StatItem[];
}

const ResultsStats = ({ items }: ResultsStatsProps) => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-navy relative">
      <div className="container-main" ref={ref}>
        <div className="text-center mb-16 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-4">Track Record</p>
          <h2 className="text-white font-light" style={{ fontSize: "clamp(26px,4vw,38px)" }}>
            Our Results Speak for Themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px opacity-0 animate-fade-up" style={{ background: "rgba(224,167,118,0.15)", animationDelay: "0.2s" }}>
          {items.map((item, i) => (
            <div key={i} className="bg-navy p-10 text-center">
              <div className="text-gold font-light mb-2" style={{ fontSize: "clamp(32px,5vw,48px)" }}>
                {item.value}
              </div>
              <div className="text-white/50 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsStats;
