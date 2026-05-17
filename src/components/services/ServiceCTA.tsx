import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import ContactForm from "../ContactForm";

interface ServiceCTAProps {
  title: string;
  description: string;
}

const MIN_MESSAGE_LENGTH = 50;
const PHONE_REGEX = /^[+\d][\d\s\-()]{5,}$/;

type Errors = Partial<Record<"firstName" | "lastName" | "email" | "phone" | "subject" | "message", string>>;

const ServiceCTA = ({ title, description }: ServiceCTAProps) => {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  return (
    <section className="relative marble-texture-strong" style={{ background: "#F5F3F0" }} ref={ref}>
      <div className="container-main grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-28">
        <div className="opacity-0 animate-fade-up text-center flex flex-col items-center" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-4">{t("serviceCTA.eyebrow")}</p>
          <h2 className="text-charcoal font-light mb-6" style={{ fontSize: "clamp(26px,4vw,36px)" }}>
            {title}
          </h2>
          <div className="gold-separator mb-6">
            <div className="line" /><div className="dot" /><div className="dot-lg" /><div className="dot" /><div className="line" />
          </div>
          <p className="text-slate text-sm leading-relaxed max-w-md">{description}</p>
        </div>

        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <ContactForm
            heading={t("serviceCTA.formTitle")}
            subheading={t("serviceCTA.formSubtitle")}
            className="shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
