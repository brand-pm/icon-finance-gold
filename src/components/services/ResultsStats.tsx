import { useScrollReveal } from "../../hooks/useScrollReveal";

interface StatItem {
  main: string;
  suffix?: string;
  subtitle: string;
  label: string;
}

interface ResultsStatsProps {
  items: StatItem[];
}

const ResultsStats = ({ items }: ResultsStatsProps) => {
  const ref = useScrollReveal();

  const topRow = items.slice(0, 3);
  const bottomRow = items.slice(3, 6);

  const renderStat = (item: StatItem, i: number, arr: StatItem[]) => (
    <div key={i} className="flex items-center">
      <div className="flex-1 flex flex-col items-center text-center py-10 px-4">
        <div className="mb-1">
          <span className="text-gold font-light" style={{ fontSize: "clamp(48px, 6vw, 72px)" }}>
            {item.main}
          </span>
          {item.suffix && (
            <span className="text-gold/70 font-light" style={{ fontSize: "clamp(20px, 3vw, 32px)" }}>
              {item.suffix}
            </span>
          )}
        </div>
        <div className="text-gold/80 text-base font-light mb-2">{item.subtitle}</div>
        <div className="text-white/50 text-sm">{item.label}</div>
      </div>
      {i < arr.length - 1 && (
        <div className="w-px self-stretch" style={{ background: "linear-gradient(180deg, transparent 10%, rgba(224,167,118,0.3) 50%, transparent 90%)" }} />
      )}
    </div>
  );

  return (
    <section className="section-padding bg-navy relative">
      <div className="container-main" ref={ref}>
        <div className="text-center mb-16 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-4">Results and Metrics</p>
          <h2 className="text-white font-light mb-4" style={{ fontSize: "clamp(26px,4vw,38px)" }}>
            Our Results Speak for Themselves
          </h2>
          <div className="gold-separator">
            <div className="dot" /><div className="dot-lg" /><div className="dot" />
          </div>
        </div>

        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {topRow.map((item, i) => renderStat(item, i, topRow))}
          </div>

          {/* Row separator with dots */}
          <div className="flex items-center gap-3 my-2">
            <div className="flex-1 h-px" style={{ background: "rgba(224,167,118,0.2)" }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ background: "rgba(224,167,118,0.4)" }} />
            <div className="flex-1 h-px" style={{ background: "rgba(224,167,118,0.2)" }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ background: "rgba(224,167,118,0.4)" }} />
            <div className="flex-1 h-px" style={{ background: "rgba(224,167,118,0.2)" }} />
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {bottomRow.map((item, i) => renderStat(item, i, bottomRow))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsStats;
