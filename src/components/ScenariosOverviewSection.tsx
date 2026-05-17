import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLocalizedPath } from "../i18n/useLocalizedPath";
import { scenariosOverviewCards } from "../data/scenariosOverview";

const ScenariosOverviewSection = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();
  const localize = useLocalizedPath();

  return (
    <section className="section-padding bg-offwhite marble-texture">
      <div className="container-main" ref={ref}>
        {/* Header */}
        <div
          className="text-center mb-12 md:mb-16 opacity-0 animate-fade-up flex flex-col items-center"
          style={{ animationDelay: "0.1s" }}
        >
          <p className="eyebrow mb-4">{t("scenariosOverview.eyebrow")}</p>
          <h2 className="text-charcoal font-light mb-4" style={{ fontSize: "clamp(26px,4vw,38px)" }}>
            {t("scenariosOverview.heading")}
          </h2>
          <div className="gold-separator mb-6">
            <div className="line" />
            <div className="dot" />
            <div className="dot-lg" />
            <div className="dot" />
            <div className="line" />
          </div>
          <p className="text-slate text-base max-w-[720px] mx-auto">
            {t("scenariosOverview.subheading")}
          </p>
        </div>

        {/* Cards: 3 + 2 layout. Use 6-col grid on lg so the second row's 2 cards (col-span-3 each) center naturally. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 items-stretch">
          {scenariosOverviewCards.map((card, i) => {
            // First 3 cards: each spans 2 of 6 cols (3 per row).
            // Last 2 cards: each spans 3 of 6 cols (2 per row, centered).
            const lgSpan = i < 3 ? "lg:col-span-2" : "lg:col-span-3";
            return (
              <article
                key={card.id}
                className={`flex flex-col h-full opacity-0 animate-fade-up group ${lgSpan}`}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  padding: "32px",
                  animationDelay: `${0.1 + i * 0.1}s`,
                  transition: "border-color 200ms ease, box-shadow 200ms ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#E0A776";
                  el.style.boxShadow = "0 8px 24px -12px rgba(224,167,118,0.25)";
                  const arrow = el.querySelector<HTMLElement>("[data-arrow]");
                  if (arrow) arrow.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#E5E7EB";
                  el.style.boxShadow = "none";
                  const arrow = el.querySelector<HTMLElement>("[data-arrow]");
                  if (arrow) arrow.style.transform = "translateX(0)";
                }}
              >
                <p
                  style={{
                    color: "#E0A776",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  {t(card.tagKey)}
                </p>
                <h3
                  className="text-navy font-light"
                  style={{
                    fontSize: "clamp(20px,1.6vw,22px)",
                    lineHeight: 1.35,
                    marginBottom: "16px",
                  }}
                >
                  {t(card.titleKey)}
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-6">
                  {t(card.descriptionKey)}
                </p>

                <div className="mt-auto pt-4">
                  <Link
                    to={localize(card.href)}
                    style={{
                      color: "#E0A776",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {t("scenariosOverview.seeMore")}
                    <span
                      data-arrow
                      style={{ transition: "transform 200ms ease", display: "inline-block" }}
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScenariosOverviewSection;
