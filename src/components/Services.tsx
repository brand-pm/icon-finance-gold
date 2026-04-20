import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import { useScrollReveal } from "../hooks/useScrollReveal";
import infinityImg from "../assets/infinity-symbol.png";
import familyImg from "../assets/family-office-symbol.png";
import structuringImg from "../assets/structuring-tax-symbol.png";
import corporateImg from "../assets/corporate-services-symbol.png";
import specialImg from "../assets/special-solutions-symbol.png";

const tabsMeta = [
  { key: "wealthManagement", image: infinityImg, link: "/services/wealth-management" },
  { key: "familyOffice", image: familyImg, link: "/services/family-office" },
  { key: "structuringTax", image: structuringImg, link: "/services/structuring-tax" },
  { key: "maConsulting", image: corporateImg, link: "/services/ma-consulting" },
  { key: "specialSolutions", image: specialImg, link: "/services/special-solutions" },
] as const;

const Services = () => {
  const [active, setActive] = useState(0);
  const ref = useScrollReveal();
  const { t } = useTranslation();
  const localize = useLocalizedPath();

  const current = tabsMeta[active];
  const items = t(`servicesSection.tabs.${current.key}.items`, { returnObjects: true }) as string[];

  return (
    <section id="services" className="section-padding relative marble-texture">
      <div className="container-main" ref={ref}>
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <p className="eyebrow mb-4">{t("servicesSection.eyebrow")}</p>
          <h2
            className="text-charcoal font-light mb-4"
            style={{ fontSize: "clamp(28px,5vw,42px)" }}
          >
            {t("servicesSection.title")}
          </h2>
          <p className="text-slate text-base max-w-[520px] mx-auto mb-6">
            {t("servicesSection.subtitle")}
          </p>
          <div className="gold-separator">
            <div className="dot" /><div className="dot-lg" /><div className="dot" />
          </div>
        </div>

        <div className="services-shell grid lg:grid-cols-[220px_1fr_420px] gap-0">
          <div className="services-tabs-panel py-6 px-2 lg:border-r lg:border-border/70">
            {tabsMeta.map((tab, i) => (
              <button
                key={tab.key}
                onClick={() => setActive(i)}
                className={`services-tab-button ${
                  i === active ? "services-tab-button--active" : "services-tab-button--inactive"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span className={`services-tab-marker ${i === active ? "opacity-100" : "opacity-0"}`}>◆</span>
                  {t(`servicesSection.tabs.${tab.key}.name`)}
                </span>
                <span className={`services-tab-chevron ${i === active ? "opacity-100" : "opacity-0"}`}>›</span>
              </button>
            ))}
          </div>

          <div
            className="opacity-0 animate-fade-up flex flex-col justify-center px-8 py-10 md:px-10 lg:px-12"
            key={active}
            style={{ animationDelay: "0.1s" }}
          >
            <h3
              className="text-charcoal font-light mb-5"
              style={{ fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.2 }}
            >
              {t(`servicesSection.tabs.${current.key}.title`)}
            </h3>
            <p className="text-slate text-[15px] leading-[1.75] mb-10 max-w-[720px]">
              {t(`servicesSection.tabs.${current.key}.desc`)}
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-6 mb-10">
              {items.map((item, i) => (
                <div key={i} className="flex flex-col gap-1.5 min-w-[150px]">
                  <span className="text-gold font-light text-2xl">0{i + 1}</span>
                  <span className="text-charcoal text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to={localize(current.link)}
              className="btn-gold px-8 py-3 inline-block text-[12px] self-start text-white"
            >
              {t("servicesSection.learnMore")}
            </Link>
          </div>

          <div className="services-image-panel flex items-center justify-center overflow-hidden">
            <img
              key={active}
              src={current.image}
              alt={t(`servicesSection.tabs.${current.key}.alt`)}
              loading="lazy"
              width={1024}
              height={1024}
              className="service-symbol-image animate-scale-in"
              style={{ animation: "scale-in 0.5s ease-out forwards" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
