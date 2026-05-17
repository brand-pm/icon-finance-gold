import { useTranslation } from "react-i18next";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
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
          <div className="opacity-0 animate-fade-up motion-reduce:animate-none" style={{ animationDelay: "0.1s" }}>
            <p className="eyebrow text-gold mb-4 md:mb-6">{t("contactPage.hero.eyebrow")}</p>
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
  const detailBlocks = t("contactPage.details.blocks", { returnObjects: true }) as Array<{ title: string; body: string }>;

  return (
    <section id="contact-form" ref={ref} className="relative marble-texture-strong section-padding" style={{ background: "#F5F3F0" }}>
      <div className="container-main grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="opacity-0 animate-fade-up motion-reduce:animate-none flex flex-col" style={{ animationDelay: "0.1s" }}>
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
                    <a href={`tel:${tel}`} className="text-slate text-base leading-relaxed max-w-md whitespace-pre-line hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">
                      {b.body}
                    </a>
                  );
                }
                if (isEmail) {
                  return (
                    <a href={`mailto:${b.body.trim()}`} className="text-slate text-base leading-relaxed max-w-md whitespace-pre-line hover:text-gold transition-colors break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">
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

        <div
          className="opacity-0 animate-fade-up motion-reduce:animate-none"
          style={{ animationDelay: "0.2s", boxShadow: "0 30px 60px -20px rgba(0,0,0,0.35)" }}
        >
          <ContactForm
            heading={t("contactPage.form.title")}
            subheading={t("contactPage.form.subtitle")}
          />
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
        <div className="opacity-0 animate-fade-up motion-reduce:animate-none">
          <h2 className="text-white font-light mb-6" style={{ fontSize: "clamp(28px,4vw,40px)" }}>{t("contactPage.bottomCTA.title")}</h2>
          <div className="gold-separator mx-auto mb-8"><div className="line" /><div className="dot" /><div className="dot-lg" /><div className="dot" /><div className="line" /></div>
          <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-10">{t("contactPage.bottomCTA.description")}</p>
          <button onClick={scrollToForm} className="btn-gold px-8 py-4 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">{t("contactPage.bottomCTA.button")}</button>
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
