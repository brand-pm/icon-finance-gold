import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../hooks/useScrollReveal";

const ServicesIntro = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-padding bg-offwhite">
      <div className="container-main max-w-3xl mx-auto text-center opacity-0 animate-fade-up motion-reduce:animate-none">
        <p className="eyebrow mb-4">{t("servicesIntro.eyebrow")}</p>
        <h2
          className="text-charcoal font-light mb-6"
          style={{ fontSize: "clamp(28px,4.5vw,40px)" }}
        >
          {t("servicesIntro.title")}
        </h2>
        <div className="gold-separator mx-auto mb-8">
          <div className="line" />
          <div className="dot" />
          <div className="dot-lg" />
          <div className="dot" />
          <div className="line" />
        </div>
        <p className="text-slate text-base lg:text-lg leading-relaxed">
          {t("servicesIntro.body")}
        </p>
      </div>
    </section>
  );
};

export default ServicesIntro;
