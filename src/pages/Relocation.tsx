import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import InfinitySymbol from "../components/InfinitySymbol";

const CANONICAL_ORIGIN = "https://iconfinance.io";

type BlockKey = "block1" | "block2" | "block3" | "block4";

const Bullets = ({ items, dark }: { items: string[]; dark: boolean }) => (
  <ul className="space-y-4">
    {items.map((it, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="text-gold text-xs mt-2 shrink-0" aria-hidden="true">◆</span>
        <span className={`text-[15px] md:text-base leading-relaxed ${dark ? "text-offwhite/90" : "text-charcoal"}`}>
          {it}
        </span>
      </li>
    ))}
  </ul>
);

const Block = ({ keyName, dark }: { keyName: BlockKey; dark: boolean }) => {
  const { t } = useTranslation();
  const base = `relocation.${keyName}`;
  const items = t(`${base}.items`, { returnObjects: true }) as string[];

  const scrollToForm = () => {
    document.getElementById("relocation-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="section-padding"
      style={dark ? undefined : { background: "#F5F3F0" }}
    >
      <div className={`container-main grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center ${dark ? "bg-navy" : ""}`}>
        {/* Left */}
        <div className="text-center flex flex-col items-center">
          <p
            className={`mb-4 text-[11px] uppercase tracking-[0.15em] font-semibold ${dark ? "text-gold" : "text-charcoal"}`}
          >
            {t(`${base}.eyebrow`)}
          </p>
          <h2
            className={`font-serif font-medium mb-6 ${dark ? "text-offwhite" : "text-navy"}`}
            style={{ fontSize: "clamp(28px,4vw,40px)" }}
          >
            {t(`${base}.title`)}
          </h2>
          <div className="gold-separator mb-8">
            <div className="dot" /><div className="dot-lg" /><div className="dot" />
          </div>
          <p className={`text-lg leading-relaxed max-w-xl ${dark ? "text-offwhite/80" : "text-charcoal"}`}>
            {t(`${base}.body`)}
          </p>
        </div>

        {/* Right */}
        <div>
          <Bullets items={items} dark={dark} />
          <div className="mt-10">
            <button
              type="button"
              onClick={scrollToForm}
              className={`${dark ? "btn-gold" : "btn-outline-gold"} px-8 py-4 inline-block`}
            >
              {t(`${base}.cta`)}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Relocation = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  // Only ru and uk versions exist
  if (lang !== "ru" && lang !== "uk") {
    return <Navigate to={`/${lang || "en"}`} replace />;
  }

  const currentLang = (lang === "uk" ? "uk" : "ru") as "ru" | "uk";
  const canonical = `${CANONICAL_ORIGIN}/${currentLang}/relocation`;

  const scrollToForm = () => {
    document.getElementById("relocation-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <html lang={currentLang} />
        <title>{t("relocation.seo.title")}</title>
        <meta name="description" content={t("relocation.seo.description")} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="ru" href={`${CANONICAL_ORIGIN}/ru/relocation`} />
        <link rel="alternate" hrefLang="uk" href={`${CANONICAL_ORIGIN}/uk/relocation`} />
        <meta property="og:title" content={t("relocation.seo.title")} />
        <meta property="og:description" content={t("relocation.seo.description")} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={currentLang} />
      </Helmet>

      <Header />

      {/* HERO */}
      <section
        className="relative bg-navy marble-texture overflow-hidden pt-32 pb-16"
        style={{ minHeight: "80vh" }}
      >
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px]">
            <div className="opacity-0 animate-fade-up motion-reduce:animate-none" style={{ animationDelay: "0.1s" }}>
              <p className="mb-5 text-[11px] uppercase tracking-[0.15em] font-semibold text-gold">
                {t("relocation.hero.eyebrow")}
              </p>
              <h1
                className="font-serif font-medium text-offwhite leading-[1.1] mb-6"
                style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}
              >
                {t("relocation.hero.title")}
              </h1>
              <div className="gold-separator mb-8 justify-start" style={{ justifyContent: "flex-start" }}>
                <div className="dot" /><div className="dot-lg" /><div className="dot" />
              </div>
              <p className="text-offwhite/80 text-lg leading-relaxed max-w-[600px] mb-10">
                {t("relocation.hero.subtitle")}
              </p>
              <button type="button" onClick={scrollToForm} className="btn-gold px-8 py-4 inline-block">
                {t("relocation.hero.cta")}
              </button>
            </div>
            <div className="hidden lg:block">
              <InfinitySymbol />
            </div>
          </div>
        </div>
      </section>

      {/* Blocks 1-4 with alternating background */}
      <Block keyName="block1" dark={false} />
      <Block keyName="block2" dark={true} />
      <Block keyName="block3" dark={false} />
      <Block keyName="block4" dark={true} />

      {/* Final CTA + Form */}
      <section
        id="relocation-form"
        className="relative bg-navy marble-texture section-padding overflow-hidden"
      >
        <div className="container-main relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <p className="mb-4 text-[11px] uppercase tracking-[0.15em] font-semibold text-gold">
              {t("relocation.finalCta.eyebrow")}
            </p>
            <h2
              className="font-serif font-medium text-offwhite mb-6"
              style={{ fontSize: "clamp(28px,4vw,42px)" }}
            >
              {t("relocation.finalCta.title")}
            </h2>
            <div className="gold-separator mb-8">
              <div className="dot" /><div className="dot-lg" /><div className="dot" />
            </div>
            <p className="text-offwhite/80 text-lg leading-relaxed max-w-xl">
              {t("relocation.finalCta.subtitle")}
            </p>
          </div>
          <div style={{ boxShadow: "0 30px 60px -20px rgba(0,0,0,0.35)" }}>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Relocation;
