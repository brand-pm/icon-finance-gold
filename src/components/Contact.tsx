import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { useScrollReveal } from "../hooks/useScrollReveal";

const subjectKeys = [
  "wealthManagement",
  "familyOffice",
  "structuringTax",
  "corporateServices",
  "specialSolutions",
  "other",
] as const;

const MIN_MESSAGE_LENGTH = 50;

const inputBase =
  "w-full p-4 bg-[rgba(255,255,255,0.06)] border text-white placeholder:text-white/40 text-base md:text-sm outline-none transition-colors duration-300";
const inputOk = "border-[rgba(255,255,255,0.15)] focus:border-gold";
const inputErr = "border-red-400/60 focus:border-red-400";

type Errors = Partial<Record<"firstName" | "lastName" | "email" | "subject" | "message", string>>;

const Contact = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();
  const [data, setData] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});

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
    setData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  const cls = (key: keyof Errors) => `${inputBase} ${errors[key] ? inputErr : inputOk}`;
  const ErrMsg = ({ msg }: { msg?: string }) =>
    msg ? <p className="mt-1.5 text-xs text-red-300">{msg}</p> : null;

  return (
    <section id="contact" className="section-padding bg-offwhite marble-texture" ref={ref}>
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative flex flex-col items-center justify-center p-12 text-center opacity-0 animate-fade-up">
            <p className="eyebrow mb-4">{t("contactTeaser.eyebrow")}</p>
            <h2 className="text-charcoal font-light mb-6" style={{ fontSize: "clamp(28px,5vw,42px)" }}>
              {t("contactTeaser.title")}
            </h2>
            <div className="gold-separator mb-6">
              <div className="dot" /><div className="dot-lg" /><div className="dot" />
            </div>
            <p className="text-slate text-base max-w-md">{t("contactTeaser.subtitle")}</p>
          </div>

          <div data-radius-block className="bg-navy p-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-gold text-[28px] font-light mb-2">{t("contactTeaser.formTitle")}</h3>
            <p className="text-white/70 text-sm mb-8">{t("contactTeaser.formSubtitle")}</p>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    maxLength={80}
                    placeholder={t("contactTeaser.firstName")}
                    className={cls("firstName")}
                    value={data.firstName}
                    onChange={(e) => setName("firstName", e.target.value)}
                  />
                  <ErrMsg msg={errors.firstName} />
                </div>
                <div>
                  <input
                    type="text"
                    maxLength={80}
                    placeholder={t("contactTeaser.lastName")}
                    className={cls("lastName")}
                    value={data.lastName}
                    onChange={(e) => setName("lastName", e.target.value)}
                  />
                  <ErrMsg msg={errors.lastName} />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  maxLength={255}
                  placeholder={t("contactTeaser.email")}
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
                <select
                  value={data.subject}
                  onChange={(e) => {
                    setData({ ...data, subject: e.target.value });
                    if (errors.subject) setErrors((p) => ({ ...p, subject: undefined }));
                  }}
                  className={`${cls("subject")} ${!data.subject ? "text-white/40" : ""}`}
                >
                  <option value="" disabled>{t("contactTeaser.subject")}</option>
                  {subjectKeys.map((key) => (
                    <option key={key} value={key} className="bg-navy text-white">
                      {t(`contactTeaser.subjects.${key}`)}
                    </option>
                  ))}
                </select>
                <ErrMsg msg={errors.subject} />
              </div>
              <div>
                <textarea
                  rows={4}
                  maxLength={2000}
                  placeholder={t("contactTeaser.messagePlaceholder")}
                  value={data.message}
                  onChange={(e) => {
                    setData({ ...data, message: e.target.value });
                    if (errors.message) setErrors((p) => ({ ...p, message: undefined }));
                  }}
                  className={`${cls("message")} resize-none`}
                />
                <ErrMsg msg={errors.message} />
              </div>
              <button type="submit" className="w-full btn-gold py-4 text-[13px] font-medium">
                {t("contactTeaser.send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
