import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface Stat {
  n: string;
  label: string;
}

const TeamStats = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();
  const stats = t("about.teamStats.items", { returnObjects: true }) as Stat[];

  if (!Array.isArray(stats) || stats.length === 0) return null;

  return (
    <section ref={ref} className="bg-navy section-padding">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center opacity-0 animate-fade-up" style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
              <div className="text-gold font-light leading-none mb-4" style={{ fontSize: "clamp(56px,7vw,84px)" }}>{s.n}</div>
              <div className="w-10 h-px bg-gold/50 mx-auto mb-4" />
              <p className="text-white/70 text-sm uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamStats;
