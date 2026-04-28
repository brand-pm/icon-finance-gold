import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface ServiceCTAProps {
  title: string;
  description: string;
}

const MIN_MESSAGE_LENGTH = 50;
const PHONE_REGEX = /^[+\d][\d\s\-()]{5,}$/;

type Errors = Partial<Record<"firstName" | "lastName" | "email" | "phone" | "subject" | "message", string>>;

const ServiceCTA = ({ title, description }: ServiceCTAProps) => {
  const { t } = useTranslation();
  const [data, setData] = useState({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const ref = useScrollReveal();

  const labelClass = "block text-white/70 text-xs uppercase tracking-wider mb-2";
  const inputBase =
    "w-full bg-transparent border px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors";
  const inputOk = "border-white/15 focus:border-gold";
  const inputErr = "border-red-400/60 focus:border-red-400";
  const cls = (key: keyof Errors) => `${inputBase} ${errors[key] ? inputErr : inputOk}`;

  const stripDigits = (v: string) => v.replace(/\d/g, "");

  const setName = (key: "firstName" | "lastName", raw: string) => {
    const cleaned = stripDigits(raw);
    setData((p) => ({ ...p, [key]: cleaned }));
    if (raw !== cleaned) {
      setErrors((p) => ({ ...p, [key]: t("common.nameNoDigits") }));
    } else if (errors[key]) {
      setErrors((p) => ({ ...p, [key]: undefined }));
    }
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!data.firstName.trim()) e.firstName = t("common.required");
    if (!data.lastName.trim()) e.lastName = t("common.required");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) e.email = t("common.invalidEmail");
    if (data.phone.trim() && !PHONE_REGEX.test(data.phone.trim())) e.phone = t("contactTeaser.phoneInvalid");
    if (!data.subject) e.subject = t("common.required");
    if (data.message.trim().length < MIN_MESSAGE_LENGTH) e.message = t("common.messageMin");
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) {
      toast.error(Object.values(v)[0]!);
      return;
    }
    toast.success(t("common.formSuccess"));
    setData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
    setErrors({});
  };

  const ErrMsg = ({ msg }: { msg?: string }) =>
    msg ? <p className="mt-1.5 text-xs text-red-300">{msg}</p> : null;

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

        <div
          data-radius-block
          className="bg-navy opacity-0 animate-fade-up"
          style={{ padding: "40px", animationDelay: "0.2s", boxShadow: "0 30px 60px -20px rgba(0,0,0,0.35)" }}
        >
          <h3 className="font-light mb-3" style={{ fontSize: "28px", color: "#E0A776" }}>
            {t("serviceCTA.formTitle")}
          </h3>
          <p className="mb-8" style={{ fontSize: "14px", color: "#9CA3AF" }}>
            {t("serviceCTA.formSubtitle")}
          </p>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>{t("serviceCTA.firstName")}</label>
                <input
                  type="text"
                  maxLength={80}
                  placeholder={t("common.placeholderFirstName")}
                  className={cls("firstName")}
                  value={data.firstName}
                  onChange={(e) => setName("firstName", e.target.value)}
                />
                <ErrMsg msg={errors.firstName} />
              </div>
              <div>
                <label className={labelClass}>{t("serviceCTA.lastName")}</label>
                <input
                  type="text"
                  maxLength={80}
                  placeholder={t("common.placeholderLastName")}
                  className={cls("lastName")}
                  value={data.lastName}
                  onChange={(e) => setName("lastName", e.target.value)}
                />
                <ErrMsg msg={errors.lastName} />
              </div>
            </div>

            <div>
              <label className={labelClass}>{t("serviceCTA.email")}</label>
              <input
                type="email"
                maxLength={255}
                placeholder={t("common.placeholderEmail")}
                className={cls("email")}
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                  if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                }}
              />
              <ErrMsg msg={errors.email} />
            </div>

            <div>
              <label className={labelClass}>{t("serviceCTA.phone")}</label>
              <input
                type="tel"
                maxLength={40}
                placeholder=""
                className={cls("phone")}
                value={data.phone}
                onChange={(e) => {
                  setData({ ...data, phone: e.target.value });
                  if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
                }}
              />
              <ErrMsg msg={errors.phone} />
            </div>

            <div>
              <label className={labelClass}>{t("serviceCTA.subject")}</label>
              <select
                className={`${cls("subject")} appearance-none cursor-pointer`}
                value={data.subject}
                onChange={(e) => {
                  setData({ ...data, subject: e.target.value });
                  if (errors.subject) setErrors((p) => ({ ...p, subject: undefined }));
                }}
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
              <ErrMsg msg={errors.subject} />
            </div>

            <div>
              <label className={labelClass}>{t("serviceCTA.message")}</label>
              <textarea
                rows={4}
                maxLength={2000}
                placeholder={t("serviceCTA.messagePlaceholder")}
                className={`${cls("message")} resize-none`}
                value={data.message}
                onChange={(e) => {
                  setData({ ...data, message: e.target.value });
                  if (errors.message) setErrors((p) => ({ ...p, message: undefined }));
                }}
              />
              <ErrMsg msg={errors.message} />
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
