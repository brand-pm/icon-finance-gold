import { useScrollReveal } from "../hooks/useScrollReveal";
import { useTranslation } from "react-i18next";
import whyUsIcon from "../assets/why-us-icon.svg";

const cardKeys = ["c1", "c2", "c3", "c4"] as const;

const WhyUs = () => {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-offwhite marble-texture" ref={ref}>
      <div className="container-main">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <p className="eyebrow mb-4">{t("whyUs.eyebrow")}</p>
          <h2 className="text-charcoal font-light mb-4" style={{ fontSize: "clamp(28px,5vw,42px)" }}>
            {t("whyUs.title")}
          </h2>
          <p className="text-slate text-base max-w-[560px] mx-auto">
            {t("whyUs.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {cardKeys.map((key, i) => (
            <div
              key={key}
              className="bg-white p-8 flex flex-col items-center text-center opacity-0 animate-fade-up"
              style={{
                border: "1px solid rgba(224,167,118,0.15)",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div className="text-gold font-light text-5xl opacity-90 mb-4">{`0${i + 1}`}</div>
              <h3 className="text-charcoal text-lg font-medium mb-3">{t(`whyUs.cards.${key}.title`)}</h3>
              <p className="text-slate text-sm leading-relaxed mb-6">{t(`whyUs.cards.${key}.desc`)}</p>
              <img src={whyUsIcon} alt="" aria-hidden="true" width={32} height={16} className="block mt-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
