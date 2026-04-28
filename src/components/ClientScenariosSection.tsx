import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLocalizedPath } from "../i18n/useLocalizedPath";
import type { Scenario } from "../data/clientScenarios";

interface ClientScenariosSectionProps {
  headingKey: string;
  subheadingKey: string;
  scenarios: Scenario[];
}

const CARD_TITLE_SERIF = "Georgia, 'Playfair Display', 'Times New Roman', serif";

const ClientScenariosSection = ({ headingKey, subheadingKey, scenarios }: ClientScenariosSectionProps) => {
  const { t } = useTranslation();
  const ref = useScrollReveal();
  const localize = useLocalizedPath();

  return (
    <section className="section-padding" style={{ background: "#FFFFFF" }}>
      <div className="container-main" ref={ref}>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 opacity-0 animate-fade-up flex flex-col items-center" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-4">{t("scenarios.label")}</p>
          <h2 className="text-charcoal font-light mb-4" style={{ fontSize: "clamp(26px,4vw,38px)" }}>
            {t(headingKey)}
          </h2>
          <div className="gold-separator mb-6">
            <div className="line" /><div className="dot" /><div className="dot-lg" /><div className="dot" /><div className="line" />
          </div>
          <p className="text-slate text-base max-w-[720px] mx-auto">{t(subheadingKey)}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {scenarios.map((s, i) => (
            <article
              key={s.id}
              className="flex flex-col h-full opacity-0 animate-fade-up group"
              style={{
                background: "#FAFAFA",
                border: "1px solid #E5E7EB",
                padding: "32px",
                borderRadius: 0,
                animationDelay: `${0.2 + i * 0.1}s`,
                transition: "border-color 200ms ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#E0A877";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#E5E7EB";
              }}
            >
              <div className="lg:p-2">
                <p
                  style={{
                    color: "#E0A877",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  {t(s.tagKey)}
                </p>
                <h3
                  style={{
                    fontFamily: CARD_TITLE_SERIF,
                    fontWeight: 400,
                    fontSize: "clamp(20px,1.6vw,24px)",
                    color: "#0C172D",
                    lineHeight: 1.3,
                    marginBottom: "24px",
                  }}
                >
                  {t(s.titleKey)}
                </h3>

                {[
                  { label: t("scenarios.situation"), body: t(s.situationKey) },
                  { label: t("scenarios.approach"), body: t(s.approachKey) },
                  { label: t("scenarios.outcome"), body: t(s.outcomeKey) },
                ].map((row, idx) => (
                  <div key={idx} style={{ marginBottom: idx === 2 ? "20px" : "18px" }}>
                    <p
                      style={{
                        color: "#E0A877",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "6px",
                      }}
                    >
                      {row.label}
                    </p>
                    <p style={{ color: "#33363D", fontSize: "14px", lineHeight: 1.6 }}>{row.body}</p>
                  </div>
                ))}
              </div>

              <p
                className="mt-auto"
                style={{
                  color: "#6C7282",
                  fontSize: "11px",
                  fontStyle: "italic",
                  lineHeight: 1.5,
                  paddingTop: "20px",
                  borderTop: "1px solid #E5E7EB",
                }}
              >
                {t("scenarios.disclaimer")}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Link to={localize("/contact")} className="btn-gold inline-flex items-center justify-center px-8 py-4">
            {t("scenarios.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientScenariosSection;
