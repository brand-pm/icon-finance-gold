import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";

const subjectKeys = [
  "wealthManagement",
  "familyOffice",
  "structuringTax",
  "corporateServices",
  "specialSolutions",
  "other",
] as const;

const MIN_MESSAGE_LENGTH = 50;
const PHONE_REGEX = /^[+\d][\d\s\-()]{5,}$/;

type FieldKey = "firstName" | "lastName" | "email" | "phone" | "subject" | "message" | "consent";
type Errors = Partial<Record<FieldKey, string>>;

const fieldBase =
  "peer w-full px-4 pt-6 pb-2 bg-[rgba(255,255,255,0.06)] border text-white text-base md:text-sm outline-none transition-colors duration-300";
const fieldOk = "border-[rgba(255,255,255,0.15)] focus:border-gold";
const fieldErr = "border-red-400/60 focus:border-red-400";

const FloatingLabel = ({ htmlFor, children, hasValue }: { htmlFor: string; children: React.ReactNode; hasValue: boolean }) => (
  <label
    htmlFor={htmlFor}
    className={`pointer-events-none absolute left-4 transition-all duration-200 ${
      hasValue
        ? "top-1.5 text-[10px] tracking-wider uppercase text-gold"
        : "top-1/2 -translate-y-1/2 text-sm text-white/40"
    } peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:tracking-wider peer-focus:uppercase peer-focus:text-gold`}
  >
    {children}
  </label>
);

const Contact = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();
  const localize = useLocalizedPath();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });
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
    if (data.phone.trim() && !PHONE_REGEX.test(data.phone.trim())) e.phone = t("contactTeaser.phoneInvalid");
    if (!data.subject) e.subject = t("common.required");
    if (data.message.trim().length < MIN_MESSAGE_LENGTH) e.message = t("common.messageMin");
    if (!data.consent) e.consent = t("contactTeaser.consentRequired");
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
    // payload includes phone
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    };
    void payload;
    toast.success(t("common.formSuccess"));
    setData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "", consent: false });
    setErrors({});
  };

  const cls = (key: FieldKey) => `${fieldBase} ${errors[key] ? fieldErr : fieldOk}`;
  const ErrMsg = ({ msg }: { msg?: string }) =>
    msg ? <p className="mt-1.5 text-xs text-red-300">{msg}</p> : null;

  const consentText = t("contactTeaser.consent");
  const privacyLabel = t("contactTeaser.privacyPolicy");
  // consent text uses [Privacy Policy](/privacy-policy) markdown — split it
  const consentMatch = consentText.match(/^(.*)\[([^\]]+)\]\(\/privacy-policy\)(.*)$/);

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
                <div className="relative">
                  <input
                    id="firstName"
                    type="text"
                    maxLength={80}
                    placeholder=" "
                    className={cls("firstName")}
                    value={data.firstName}
                    onChange={(e) => setName("firstName", e.target.value)}
                  />
                  <FloatingLabel htmlFor="firstName" hasValue={!!data.firstName}>
                    {t("contactTeaser.firstName")}
                  </FloatingLabel>
                  <ErrMsg msg={errors.firstName} />
                </div>
                <div className="relative">
                  <input
                    id="lastName"
                    type="text"
                    maxLength={80}
                    placeholder=" "
                    className={cls("lastName")}
                    value={data.lastName}
                    onChange={(e) => setName("lastName", e.target.value)}
                  />
                  <FloatingLabel htmlFor="lastName" hasValue={!!data.lastName}>
                    {t("contactTeaser.lastName")}
                  </FloatingLabel>
                  <ErrMsg msg={errors.lastName} />
                </div>
              </div>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  maxLength={255}
                  placeholder=" "
                  className={cls("email")}
                  value={data.email}
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                    if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                  }}
                />
                <FloatingLabel htmlFor="email" hasValue={!!data.email}>
                  {t("contactTeaser.email")}
                </FloatingLabel>
                <ErrMsg msg={errors.email} />
              </div>
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  maxLength={40}
                  placeholder=" "
                  className={cls("phone")}
                  value={data.phone}
                  onChange={(e) => {
                    setData({ ...data, phone: e.target.value });
                    if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
                  }}
                />
                <FloatingLabel htmlFor="phone" hasValue={!!data.phone}>
                  {t("contactTeaser.phone")}
                </FloatingLabel>
                <ErrMsg msg={errors.phone} />
              </div>
              <div className="relative">
                <select
                  id="subject"
                  value={data.subject}
                  onChange={(e) => {
                    setData({ ...data, subject: e.target.value });
                    if (errors.subject) setErrors((p) => ({ ...p, subject: undefined }));
                  }}
                  className={`${cls("subject")} ${!data.subject ? "text-white/40" : ""}`}
                >
                  <option value="" disabled></option>
                  {subjectKeys.map((key) => (
                    <option key={key} value={key} className="bg-navy text-white">
                      {t(`contactTeaser.subjects.${key}`)}
                    </option>
                  ))}
                </select>
                <FloatingLabel htmlFor="subject" hasValue={!!data.subject}>
                  {t("contactTeaser.subject")}
                </FloatingLabel>
                <ErrMsg msg={errors.subject} />
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  maxLength={2000}
                  placeholder=" "
                  value={data.message}
                  onChange={(e) => {
                    setData({ ...data, message: e.target.value });
                    if (errors.message) setErrors((p) => ({ ...p, message: undefined }));
                  }}
                  className={`${cls("message")} resize-none`}
                />
                <FloatingLabel htmlFor="message" hasValue={!!data.message}>
                  {t("contactTeaser.message")}
                </FloatingLabel>
                <ErrMsg msg={errors.message} />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={data.consent}
                    onChange={(e) => {
                      setData({ ...data, consent: e.target.checked });
                      if (errors.consent && e.target.checked) setErrors((p) => ({ ...p, consent: undefined }));
                    }}
                    className="mt-0.5 h-4 w-4 shrink-0 appearance-none border border-white/30 bg-transparent checked:bg-gold checked:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 cursor-pointer relative
                      checked:after:content-['✓'] checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-navy checked:after:text-[11px] checked:after:font-bold"
                  />
                  <span className="text-white/70 text-xs leading-relaxed">
                    {consentMatch ? (
                      <>
                        {consentMatch[1]}
                        <Link
                          to={localize("/privacy-policy")}
                          className="text-gold hover:underline"
                        >
                          {consentMatch[2]}
                        </Link>
                        {consentMatch[3]}
                      </>
                    ) : (
                      consentText
                    )}
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1.5 text-xs text-gold">{errors.consent}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={!data.consent}
                className="w-full btn-gold py-4 text-[13px] font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
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
