import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface OpportunityCategory {
  name: string;
  dark?: boolean;
  items: { title: string; description: string }[];
}

interface InvestmentOpportunitiesProps {
  categories: OpportunityCategory[];
}

const InvestmentOpportunities = ({ categories }: InvestmentOpportunitiesProps) => {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-offwhite">
      <div className="container-main" ref={ref}>
        {/* Header */}
        <div
          className="text-center mb-16 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <p className="eyebrow mb-4">{t("sectionLabels.assetClasses")}</p>
          <h2
            className="text-charcoal font-light"
            style={{
              fontSize: "clamp(26px,4vw,38px)",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            {t("sectionLabels.opportunitiesTitle")}
          </h2>
          <div className="gold-separator mt-8">
            <div className="dot" />
            <div className="dot-lg" />
            <div className="dot" />
          </div>
        </div>

        {/* Categories */}
        <div
          className="grid md:grid-cols-2 gap-8 items-stretch opacity-0 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          {categories.map((cat, ci) => {
            const isDark = !!cat.dark;
            return (
              <div
                key={ci}
                data-radius-block
                className={`h-full flex flex-col relative overflow-hidden ${
                  isDark ? "bg-navy" : "bg-white"
                }`}
                style={{
                  border: isDark
                    ? "1px solid rgba(224,167,118,0.18)"
                    : "1px solid rgba(15,22,45,0.08)",
                  boxShadow: isDark
                    ? "0 30px 60px -30px rgba(0,0,0,0.6)"
                    : "0 30px 60px -40px rgba(15,22,45,0.18)",
                  padding: "clamp(32px, 4vw, 56px)",
                }}
              >
                {/* Top accent bar */}
                <div
                  aria-hidden
                  className="absolute top-0 left-0 right-0"
                  style={{
                    height: "3px",
                    background:
                      "linear-gradient(90deg, transparent 0%, #E0A776 50%, transparent 100%)",
                    opacity: isDark ? 0.9 : 0.7,
                  }}
                />

                {/* Category title with eyebrow */}
                <div className="mb-10">
                  <p
                    className="uppercase tracking-[0.24em] mb-3"
                    style={{
                      fontSize: "11px",
                      color: isDark
                        ? "rgba(224,167,118,0.7)"
                        : "rgba(224,167,118,0.85)",
                      fontWeight: 500,
                    }}
                  >
                    {String(ci + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
                  </p>
                  <h3
                    className={`font-light leading-tight ${
                      isDark ? "text-gold" : "text-charcoal"
                    }`}
                    style={{ fontSize: "clamp(24px, 3vw, 32px)" }}
                  >
                    {cat.name}
                  </h3>
                  {/* Mini gold underline */}
                  <div
                    className="mt-5"
                    style={{
                      width: "48px",
                      height: "1px",
                      background: "#E0A776",
                      opacity: isDark ? 0.8 : 0.6,
                    }}
                  />
                </div>

                {/* Items list */}
                <ul className="flex-1 flex flex-col">
                  {cat.items.map((item, i) => {
                    const isLast = i === cat.items.length - 1;
                    return (
                      <li
                        key={i}
                        className="flex items-start gap-4 py-4"
                        style={{
                          borderBottom: isLast
                            ? "none"
                            : isDark
                            ? "1px solid rgba(255,255,255,0.06)"
                            : "1px solid rgba(15,22,45,0.06)",
                        }}
                      >
                        {/* Gold diamond marker */}
                        <div
                          aria-hidden
                          className="flex-shrink-0 mt-2"
                          style={{
                            width: "8px",
                            height: "8px",
                            background: "#E0A776",
                            transform: "rotate(45deg)",
                            opacity: isDark ? 1 : 0.85,
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <h4
                            className={`mb-1 ${
                              isDark ? "text-white" : "text-charcoal"
                            }`}
                            style={{
                              fontSize: "15px",
                              fontWeight: 500,
                              letterSpacing: "0.01em",
                            }}
                          >
                            {item.title}
                          </h4>
                          {item.description && (
                            <p
                              className="leading-relaxed"
                              style={{
                                fontSize: "13.5px",
                                color: isDark
                                  ? "rgba(255,255,255,0.55)"
                                  : "#6B7280",
                              }}
                            >
                              {item.description}
                            </p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;
