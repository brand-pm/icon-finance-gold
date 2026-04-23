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

const inputClass =
  "w-full p-4 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] text-white placeholder:text-white/40 text-base md:text-sm outline-none focus:border-gold transition-colors duration-300";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState<string | null>(null);
  const ref = useScrollReveal();
  const { t } = useTranslation();

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const raw = e.target.value;
    const hadDigits = /\d/.test(raw);
    const cleaned = raw.replace(/\d/g, "");
    setMessage(cleaned);
    if (hadDigits) {
      setMessageError(t("common.messageNoDigits"));
    } else if (cleaned.trim().length > 0 && cleaned.trim().length < MIN_MESSAGE_LENGTH) {
      setMessageError(null);
    } else {
      setMessageError(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim().length < MIN_MESSAGE_LENGTH) {
      const err = t("common.messageMin");
      setMessageError(err);
      toast.error(err);
      return;
    }
    toast.success(t("common.formSuccess"));
    setMessage("");
    setSubject("");
    setMessageError(null);
  };

  const remaining = Math.max(0, MIN_MESSAGE_LENGTH - message.trim().length);

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
            <p className="text-slate text-base max-w-md">
              {t("contactTeaser.subtitle")}
            </p>
          </div>

          <div data-radius-block className="bg-navy p-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-gold text-[28px] font-light mb-2">{t("contactTeaser.formTitle")}</h3>
            <p className="text-white/70 text-sm mb-8">
              {t("contactTeaser.formSubtitle")}
            </p>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder={t("contactTeaser.firstName")} className={inputClass} />
                <input type="text" placeholder={t("contactTeaser.lastName")} className={inputClass} />
              </div>
              <input type="email" placeholder={t("contactTeaser.email")} className={inputClass} />
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`${inputClass} ${!subject ? "text-white/40" : ""}`}
              >
                <option value="" disabled>{t("contactTeaser.subject")}</option>
                {subjectKeys.map((key) => (
                  <option key={key} value={key} className="bg-navy text-white">
                    {t(`contactTeaser.subjects.${key}`)}
                  </option>
                ))}
              </select>
              <div>
                <textarea
                  rows={4}
                  maxLength={2000}
                  placeholder={t("contactTeaser.messagePlaceholder")}
                  value={message}
                  onChange={handleMessageChange}
                  className={`${inputClass} resize-none ${messageError ? "border-red-400/60" : ""}`}
                  aria-invalid={!!messageError}
                  aria-describedby="contact-msg-help"
                />
                <div id="contact-msg-help" className="flex items-center justify-between mt-1.5 text-xs">
                  <span className={messageError ? "text-red-300" : "text-white/40"}>
                    {messageError ?? "\u00A0"}
                  </span>
                  <span className={remaining > 0 ? "text-white/40" : "text-gold/80"}>
                    {t("common.messageCounter", { count: message.trim().length })}
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="w-full btn-gold py-4 text-[13px] font-medium"
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
