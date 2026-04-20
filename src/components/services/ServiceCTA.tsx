import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface ServiceCTAProps {
  title: string;
  description: string;
}

const ServiceCTA = ({ title, description }: ServiceCTAProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
  });
  const ref = useScrollReveal();

  const labelClass = "block text-white/70 text-xs uppercase tracking-wider mb-2";
  const inputClass =
    "w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors";

  return (
    <section className="relative marble-texture-strong" style={{ background: "#F5F3F0" }} ref={ref}>
      <div className="container-main grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-28">
        <div className="opacity-0 animate-fade-up text-center flex flex-col items-center" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-4">{t("serviceCTA.eyebrow")}</p>
          <h2 className="text-charcoal font-light mb-6" style={{ fontSize: "clamp(26px,4vw,36px)" }}>
            {title}
          </h2>
          <div className="gold-separator mb-6">
            <div className="line" />
            <div className="dot" />
            <div className="dot-lg" />
            <div className="dot" />
            <div className="line" />
          </div>
          <p className="text-slate text-sm leading-relaxed max-w-md">{description}</p>
        </div>

        <div
          data-radius-block
          className="bg-navy opacity-0 animate-fade-up"
          style={{
            padding: "40px",
            animationDelay: "0.2s",
            boxShadow: "0 30px 60px -20px rgba(0,0,0,0.35)",
          }}
        >
          <h3 className="font-light mb-3" style={{ fontSize: "28px", color: "#E0A776" }}>
            {t("serviceCTA.formTitle")}
          </h3>
          <p className="mb-8" style={{ fontSize: "14px", color: "#9CA3AF" }}>
            {t("serviceCTA.formSubtitle")}
          </p>
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>{t("serviceCTA.firstName")}</label>
                <input
                  type="text"
                  placeholder={t("common.placeholderFirstName")}
                  className={inputClass}
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div>
                <label className={labelClass}>{t("serviceCTA.lastName")}</label>
                <input
                  type="text"
                  placeholder={t("common.placeholderLastName")}
                  className={inputClass}
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>{t("serviceCTA.email")}</label>
              <input
                type="email"
                placeholder={t("common.placeholderEmail")}
                className={inputClass}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className={labelClass}>{t("serviceCTA.subject")}</label>
              <select
                className={`${inputClass} appearance-none cursor-pointer`}
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1L6 6L11 1' stroke='%23E0A776' stroke-width='1.5'/></svg>\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                  paddingRight: "40px",
                }}
              >
                <option value="" className="bg-navy">{t("common.selectSubject")}</option>
                <option value="wealth" className="bg-navy">{t("contactTeaser.subjects.wealthManagement")}</option>
                <option value="family" className="bg-navy">{t("contactTeaser.subjects.familyOffice")}</option>
                <option value="structuring" className="bg-navy">{t("contactTeaser.subjects.structuringTax")}</option>
                <option value="ma" className="bg-navy">{t("services.maConsulting.title")}</option>
                <option value="other" className="bg-navy">{t("contactTeaser.subjects.other")}</option>
              </select>
            </div>

            <button type="submit" className="btn-gold w-full py-4 text-[12px] mt-2">
              {t("serviceCTA.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
