import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ContactForm from "./ContactForm";

const Contact = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  return (
    <section id="contact" className="section-padding bg-offwhite marble-texture" ref={ref}>
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-0 items-center">
          <div className="relative flex flex-col items-center justify-center p-12 text-center opacity-0 animate-fade-up motion-reduce:animate-none">
            <p className="eyebrow mb-4">{t("contactTeaser.eyebrow")}</p>
            <h2 className="text-charcoal font-light mb-6" style={{ fontSize: "clamp(28px,5vw,42px)" }}>
              {t("contactTeaser.title")}
            </h2>
            <div className="gold-separator mb-6">
              <div className="dot" /><div className="dot-lg" /><div className="dot" />
            </div>
            <p className="text-slate text-base max-w-md">{t("contactTeaser.subtitle")}</p>
          </div>

          <div className="opacity-0 animate-fade-up motion-reduce:animate-none" style={{ animationDelay: "0.2s" }}>
            <ContactForm
              heading={t("contactTeaser.formTitle")}
              subheading={t("contactTeaser.formSubtitle")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
