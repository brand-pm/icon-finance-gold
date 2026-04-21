import { useScrollReveal } from "../../hooks/useScrollReveal";

interface StatItem {
  prefix?: string;
  main: string;
  suffix?: string;
  subtitle: string;
  label: string;
}

interface ResultsStatsProps {
  items: StatItem[];
  eyebrow?: string;
  title?: string;
}

const ResultsStats = ({ items, eyebrow = "Results and Metrics", title = "Our Results Speak for Themselves" }: ResultsStatsProps) => {
  const ref = useScrollReveal();

  const topRow = items.slice(0, 3);
  const bottomRow = items.slice(3, 6);

  const renderStat = (item: StatItem, i: number, arr: StatItem[]) => (
    <div key={i} className="flex items-center">
      <div className="flex-1 flex flex-col items-center text-center py-8 px-8 min-w-0 w-full">
        {/* Value line */}
        <div className="flex items-baseline justify-center leading-none w-full max-w-full">
          {item.prefix && (
            <span className="text-gold font-light shrink-0" style={{ fontSize: "clamp(20px, 2vw, 28px)", marginBottom: "0.15em" }}>
              {item.prefix}
            </span>
          )}
          <span
            className="text-gold block min-w-0"
            style={{
              fontSize: "clamp(24px, 3.4vw, 44px)",
              fontWeight: 300,
              lineHeight: 1.1,
              wordBreak: "break-word",
              overflowWrap: "break-word",
              hyphens: "auto",
            }}
            lang="auto"
          >
            {item.main}
          </span>
          {item.suffix && (
            <span className={`text-gold/70 font-light shrink-0 ${item.suffix === '+' ? 'self-start' : 'self-end'}`} style={{ fontSize: "clamp(16px, 1.8vw, 22px)", ...(item.suffix === '+' ? { marginTop: "0.15em" } : { marginBottom: "0.15em" }) }}>
              {item.suffix}
            </span>
          )}
        </div>
        {/* Subtitle — gold italic, tight to number */}
        {item.subtitle && (
          <div className="text-gold font-light italic" style={{ fontSize: "clamp(16px, 2vw, 22px)", marginTop: "4px", lineHeight: 1.2 }}>
            {item.subtitle}
          </div>
        )}
        {/* Label — white */}
        <div className="text-white/70 text-sm mt-3 max-w-[260px]">{item.label}</div>
      </div>
      {i < arr.length - 1 && (
        <div className="hidden md:block w-px self-stretch" style={{ background: "linear-gradient(180deg, transparent 10%, rgba(224,167,118,0.25) 50%, transparent 90%)" }} />
      )}
    </div>
  );

  return (
    <section className="section-padding bg-navy relative">
      <div className="container-main" ref={ref}>
        <div className="text-center mb-16 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="text-white font-light mb-4" style={{ fontSize: "clamp(26px,4vw,38px)" }}>
            {title}
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

          {/* Row separator with diamond dots */}
          <div className="flex items-center gap-0 my-1">
            <div className="flex-1 h-px" style={{ background: "rgba(224,167,118,0.15)" }} />
            <div className="w-1.5 h-1.5 rotate-45 mx-1" style={{ background: "rgba(224,167,118,0.4)" }} />
            <div className="flex-1 h-px" style={{ background: "rgba(224,167,118,0.15)" }} />
            <div className="w-1.5 h-1.5 rotate-45 mx-1" style={{ background: "rgba(224,167,118,0.4)" }} />
            <div className="flex-1 h-px" style={{ background: "rgba(224,167,118,0.15)" }} />
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
