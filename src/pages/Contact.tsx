import { useState } from "react";

import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";
import marbleHero from "../assets/marble-mono-1.jpg";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative bg-navy overflow-hidden pt-24 pb-12" style={{ minHeight: "35vh" }}>
      <div className="absolute inset-0">
        <img src={marbleHero} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center" }} />
        <div className="absolute inset-x-0 top-0 h-40" style={{ background: "linear-gradient(to bottom, rgba(10,15,30,0.95) 0%, rgba(10,15,30,0.6) 60%, rgba(10,15,30,0) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(15,22,45,0.95) 40%, rgba(15,22,45,0.6) 100%)" }} />
      </div>
      <div className="container-main relative z-10 flex items-center" style={{ minHeight: "28vh" }}>
        <div className="max-w-xl">
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <p className="eyebrow mb-4 md:mb-6">{t("contactPage.hero.eyebrow")}</p>
            <h1 className="text-gold font-light leading-[1.15] mb-5 md:mb-6" style={{ fontSize: "clamp(28px,5vw,48px)" }}>{t("contactPage.hero.title")}</h1>
            <p className="text-white/70 text-[15px] md:text-base max-w-lg leading-relaxed">{t("contactPage.hero.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactBody = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  const detailBlocks = t("contactPage.details.blocks", { returnObjects: true }) as Array<{ title: string; body: string }>;

  const MIN_MESSAGE_LENGTH = 50;
  type Errors = Partial<Record<"firstName" | "lastName" | "email" | "subject" | "message", string>>;
  const [errors, setErrors] = useState<Errors>({});

  const labelClass = "block text-white/70 text-xs uppercase tracking-wider mb-2";
  const inputBase = "w-full bg-transparent border px-4 py-3.5 md:py-3 text-base md:text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors";
  const inputOk = "border-white/15 focus:border-gold";
  const inputErr = "border-red-400/60 focus:border-red-400";
  const cls = (key: keyof Errors) => `${inputBase} ${errors[key] ? inputErr : inputOk}`;

  const stripDigits = (v: string) => v.replace(/\d/g, "");

  const setName = (key: "firstName" | "lastName", raw: string) => {
    const cleaned = stripDigits(raw);
    setFormData((p) => ({ ...p, [key]: cleaned }));
    if (raw !== cleaned) {
      setErrors((p) => ({ ...p, [key]: t("common.nameNoDigits") }));
    } else if (errors[key]) {
      setErrors((p) => ({ ...p, [key]: undefined }));
    }
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!formData.firstName.trim()) e.firstName = t("common.required");
    if (!formData.lastName.trim()) e.lastName = t("common.required");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) e.email = t("common.invalidEmail");
    if (!formData.subject) e.subject = t("common.required");
    if (formData.message.trim().length < MIN_MESSAGE_LENGTH) e.message = t("common.messageMin");
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
    toast.success(t("contactPage.form.success"));
    setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  const ErrMsg = ({ msg }: { msg?: string }) =>
    msg ? <p className="mt-1.5 text-xs text-red-300">{msg}</p> : null;

  return (
    <section id="contact-form" ref={ref} className="relative marble-texture-strong section-padding" style={{ background: "#F5F3F0" }}>
      <div className="container-main grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="opacity-0 animate-fade-up flex flex-col" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-4">{t("contactPage.details.eyebrow")}</p>
          <h2 className="text-charcoal font-light mb-6" style={{ fontSize: "clamp(28px,4vw,38px)" }}>{t("contactPage.details.title")}</h2>
          <div className="gold-separator mb-10"><div className="line" /><div className="dot" /><div className="dot-lg" /><div className="dot" /><div className="line" /></div>

          <div className="flex flex-col">
            {detailBlocks.map((b, i) => {
              const titleLower = b.title.toLowerCase();
              const isPhone = titleLower.includes("phone") || titleLower.includes("телефон") || titleLower.includes("telefon");
              const isEmail = titleLower.includes("email") || titleLower.includes("пошта") || titleLower.includes("e-mail");
              const renderBody = () => {
                if (isPhone) {
                  const tel = b.body.replace(/[^+\d]/g, "");
                  return (
                    <a href={`tel:${tel}`} className="text-slate text-base leading-relaxed max-w-md whitespace-pre-line hover:text-gold transition-colors">
                      {b.body}
                    </a>
                  );
                }
                if (isEmail) {
                  return (
                    <a href={`mailto:${b.body.trim()}`} className="text-slate text-base leading-relaxed max-w-md whitespace-pre-line hover:text-gold transition-colors break-all">
                      {b.body}
                    </a>
                  );
                }
                return <p className="text-slate text-base leading-relaxed max-w-md whitespace-pre-line">{b.body}</p>;
              };
              return (
                <div key={i}>
                  <div className="py-6">
                    <h3 className="text-charcoal font-medium text-base mb-2 uppercase tracking-wider">{b.title}</h3>
                    {renderBody()}
                  </div>
                  {i < detailBlocks.length - 1 && (
                    <div className="gold-separator opacity-70"><div className="line" /><div className="dot" /><div className="dot-lg" /><div className="dot" /><div className="line" /></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div data-radius-block className="bg-navy opacity-0 animate-fade-up" style={{ padding: "40px", animationDelay: "0.2s", boxShadow: "0 30px 60px -20px rgba(0,0,0,0.35)" }}>
          <h3 className="font-light mb-3" style={{ fontSize: "28px", color: "#E0A776" }}>{t("contactPage.form.title")}</h3>
          <p className="mb-8" style={{ fontSize: "14px", color: "#9CA3AF" }}>{t("contactPage.form.subtitle")}</p>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4">
              <div>
                <label className={labelClass}>{t("contactPage.form.firstName")}</label>
                <input
                  type="text"
                  maxLength={80}
                  placeholder={t("common.placeholderFirstName")}
                  className={cls("firstName")}
                  value={formData.firstName}
                  onChange={(e) => setName("firstName", e.target.value)}
                />
                <ErrMsg msg={errors.firstName} />
              </div>
              <div>
                <label className={labelClass}>{t("contactPage.form.lastName")}</label>
                <input
                  type="text"
                  maxLength={80}
                  placeholder={t("common.placeholderLastName")}
                  className={cls("lastName")}
                  value={formData.lastName}
                  onChange={(e) => setName("lastName", e.target.value)}
                />
                <ErrMsg msg={errors.lastName} />
              </div>
            </div>

            <div>
              <label className={labelClass}>{t("contactPage.form.email")}</label>
              <input
                type="email"
                maxLength={255}
                placeholder={t("common.placeholderEmail")}
                className={cls("email")}
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                }}
              />
              <ErrMsg msg={errors.email} />
            </div>

            <div>
              <label className={labelClass}>{t("contactPage.form.subject")}</label>
              <select
                className={`${cls("subject")} appearance-none cursor-pointer`}
                value={formData.subject}
                onChange={(e) => {
                  setFormData({ ...formData, subject: e.target.value });
                  if (errors.subject) setErrors((p) => ({ ...p, subject: undefined }));
                }}
                style={{
                  backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1L6 6L11 1' stroke='%23E0A776' stroke-width='1.5'/></svg>\")",
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
                <option value="special" className="bg-navy">{t("contactTeaser.subjects.specialSolutions")}</option>
                <option value="other" className="bg-navy">{t("contactTeaser.subjects.other")}</option>
              </select>
              <ErrMsg msg={errors.subject} />
            </div>

            <div>
              <label className={labelClass}>{t("contactPage.form.message")}</label>
              <textarea
                rows={4}
                maxLength={2000}
                placeholder={t("contactPage.form.messagePlaceholder")}
                className={`${cls("message")} resize-none`}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors((p) => ({ ...p, message: undefined }));
                }}
              />
              <ErrMsg msg={errors.message} />
            </div>

            <button type="submit" className="btn-gold w-full py-4 text-[12px] mt-2">{t("contactPage.form.submit")}</button>

            <p className="text-white/50 text-xs leading-relaxed mt-1">{t("contactPage.form.footnote")}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

const BottomCTA = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section ref={ref} className="bg-navy section-padding">
      <div className="container-main text-center max-w-2xl mx-auto">
        <div className="opacity-0 animate-fade-up">
          <h2 className="text-white font-light mb-6" style={{ fontSize: "clamp(28px,4vw,40px)" }}>{t("contactPage.bottomCTA.title")}</h2>
          <div className="gold-separator mx-auto mb-8"><div className="line" /><div className="dot" /><div className="dot-lg" /><div className="dot" /><div className="line" /></div>
          <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-10">{t("contactPage.bottomCTA.description")}</p>
          <button onClick={scrollToForm} className="btn-gold px-8 py-4 inline-block">{t("contactPage.bottomCTA.button")}</button>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <div className="min-h-screen">
    <Seo pageKey="contact" />
    <Header />
    <Hero />
    <ContactBody />
    <BottomCTA />
    <Footer />
  </div>
);

export default Contact;
