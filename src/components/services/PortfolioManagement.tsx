import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import marbleMono1 from "@/assets/marble-mono-1-v3.jpg";
import marbleMono2 from "@/assets/marble-mono-2.jpg";
import marbleMono3 from "@/assets/marble-mono-3-v2.jpg";
import marbleMono4 from "@/assets/marble-mono-4-v2.jpg";

const stageTextures = [marbleMono1, marbleMono2, marbleMono3, marbleMono4];

interface Step {
  number: string;
  title: string;
  timeline: string;
  result: string;
  activities: string[];
}

interface PortfolioManagementProps {
  title: string;
  description: string;
  steps: Step[];
  ctaLink?: string;
  ctaLabel?: string;
  ctaVariant?: "outline" | "filled";
}

const PortfolioManagement = ({
  title,
  description,
  steps,
  ctaLink = "/#contact",
  ctaLabel = "Start a dialogue",
  ctaVariant = "filled",
}: PortfolioManagementProps) => {
  const { t } = useTranslation();
  return (
    <section className="portfolio-management-section">
      <div className="container-main section-padding">
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(320px,38%)_minmax(0,62%)]">
          <div className="lg:sticky lg:top-24 text-center flex flex-col items-center">
            <p className="eyebrow mb-4">{t("portfolioManagement.eyebrow")}</p>
            <h2 className="portfolio-management-title mb-5 whitespace-pre-line">{title}</h2>
            <div className="gold-separator mb-6">
              <div className="dot" />
              <div className="dot-lg" />
              <div className="dot" />
            </div>
            <p className="portfolio-management-description mb-10 max-w-sm">{description}</p>
            <Link
              to={ctaLink}
              className={`${ctaVariant === "filled" ? "btn-gold" : "btn-outline-gold"} inline-block px-10 py-4 text-[14px] rounded-lg`}
            >
              {ctaLabel}
            </Link>
          </div>

          <div className="flex flex-col gap-8">
            {steps.map((step, idx) => (
              <article
                key={`${step.number}-${step.title}`}
                className={`portfolio-stage-card${idx < steps.length - 1 ? ' portfolio-stage-card--has-arrow' : ''}`}
                style={{ ['--stage-texture' as string]: `url(${stageTextures[idx % stageTextures.length]})` }}
              >
                <div className="portfolio-stage-card__inner">
                  <div className="flex flex-col h-full">
                    <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-2">
                      <span className="portfolio-stage-label">Stage {step.number}</span>
                      <span className="portfolio-stage-timeline">{step.timeline}</span>
                    </div>

                    <div className="portfolio-stage-title-row">
                      {idx < steps.length - 1 && (
                        <span className="portfolio-stage-arrow" aria-hidden="true">
                          <span className="portfolio-stage-arrow__line" />
                          <span className="portfolio-stage-arrow__head" />
                        </span>
                      )}
                      <h3 className="portfolio-stage-title whitespace-pre-line">{step.title}</h3>
                    </div>

                    {step.result && (
                      <div className="portfolio-stage-result">
                        <span className="portfolio-stage-result-label">Result:</span>
                        <p className="portfolio-stage-result-text">{step.result}</p>
                      </div>
                    )}
                  </div>

                  <div className="portfolio-stage-activities">
                    <p className="portfolio-stage-activities-label">Activities:</p>
                    <ul className="space-y-2.5">
                      {step.activities.map((item, index) => (
                        <li key={index} className="portfolio-stage-activity">
                          <span className="portfolio-stage-bullet">◆</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioManagement;
