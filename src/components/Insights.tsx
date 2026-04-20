import { useScrollReveal } from "../hooks/useScrollReveal";
import { useTranslation } from "react-i18next";
import insight1 from "../assets/insight-1.jpg";
import insight2 from "../assets/insight-2.jpg";
import insight3 from "../assets/insight-3.jpg";

const articleMeta = [
  { key: "a1", date: "Sep 10, 2025", read: 3, image: insight1 },
  { key: "a2", date: "Aug 28, 2025", read: 5, image: insight2 },
  { key: "a3", date: "Jul 15, 2025", read: 4, image: insight3 },
] as const;

const Insights = () => {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section id="insights" className="section-padding bg-offwhite" ref={ref}>
      <div className="container-main">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <p className="eyebrow mb-4">{t("insightsTeaser.eyebrow")}</p>
          <h2 className="text-charcoal font-light mb-4" style={{ fontSize: "clamp(28px,5vw,42px)" }}>
            {t("insightsTeaser.title")}
          </h2>
          <div className="gold-separator">
            <div className="dot" /><div className="dot-lg" /><div className="dot" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {articleMeta.map((a, i) => {
            const title = t(`insightsTeaser.articles.${a.key}.title`);
            const category = t(`insightsTeaser.articles.${a.key}.category`);
            return (
              <div
                key={a.key}
                className="bg-white opacity-0 animate-fade-up cursor-pointer group"
                style={{ border: "1px solid rgba(0,0,0,0.06)", animationDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <div
                    className="absolute inset-0 z-10 mix-blend-color group-hover:opacity-0 transition-opacity duration-500"
                    style={{ background: "linear-gradient(135deg, #0F162D 0%, #E0A776 100%)" }}
                  />
                  <img
                    src={a.image}
                    alt={title}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gold text-[10px] uppercase tracking-[0.12em] font-semibold mb-3">
                    {category}
                  </p>
                  <h3 className="text-charcoal text-[17px] font-medium leading-[1.4] mb-3 group-hover:text-gold transition-colors">
                    {title}
                  </h3>
                  <p className="text-slate text-[13px]">{a.date} • {a.read} {t("insightsTeaser.minRead")}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 border border-charcoal text-charcoal text-sm font-medium uppercase tracking-wider hover:bg-charcoal hover:text-white transition-all duration-300">
            {t("insightsTeaser.showMore")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Insights;
