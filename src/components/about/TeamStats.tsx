import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface Stat {
  n: string;
  label: string;
}

const TeamStats = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();
  const eyebrow = t("about.teamStats.eyebrow");
  const items = t("about.teamStats.items", { returnObjects: true }) as Stat[];

  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section
      className="section-padding marble-texture"
      style={{ background: "linear-gradient(180deg, #EDE9E4 0%, #F5F3F0 100%)" }}
    >
      <div className="container-main" ref={ref}>
        <div
          className="text-center mb-12 opacity-0 animate-fade-up flex flex-col items-center"
          style={{ animationDelay: "0.1s" }}
        >
          <p className="eyebrow mb-4">{eyebrow}</p>
          <div className="gold-separator">
            <div className="line" />
            <div className="dot" />
            <div className="dot-lg" />
            <div className="dot" />
            <div className="line" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 items-center opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {items.map((it, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-6 relative"
              style={{
                borderLeft: i > 0 ? "1px solid rgba(224,167,118,0.25)" : undefined,
              }}
            >
              <div
                className="text-gold font-light leading-none mb-3"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(48px,7vw,72px)" }}
              >
                {it.n}
              </div>
              <p className="text-charcoal text-sm tracking-wide uppercase" style={{ letterSpacing: "0.12em" }}>
                {it.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamStats;
