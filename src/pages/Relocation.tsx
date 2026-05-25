import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceHero from "../components/services/ServiceHero";
import Philosophy from "../components/services/Philosophy";
import InvestmentOpportunities from "../components/services/InvestmentOpportunities";
import ServiceCTA from "../components/services/ServiceCTA";
import heroImg from "../assets/expertise-international.jpg";

const CANONICAL_ORIGIN = "https://iconfinance.io";

type BlockKey = "block1" | "block2" | "block3" | "block4";
const BLOCK_KEYS: BlockKey[] = ["block1", "block2", "block3", "block4"];

const Relocation = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  if (lang !== "ru" && lang !== "uk") {
    return <Navigate to={`/${lang || "en"}`} replace />;
  }

  const currentLang = lang as "ru" | "uk";
  const canonical = `${CANONICAL_ORIGIN}/${currentLang}/relocation`;
  const base = "relocation";

  // Map 4 blocks -> Philosophy cards (number + title + body)
  const philosophyItems = BLOCK_KEYS.map((k, i) => ({
    number: String(i + 1).padStart(2, "0"),
    title: t(`${base}.${k}.title`),
    description: t(`${base}.${k}.body`),
  }));

  // Map 4 blocks -> InvestmentOpportunities categories (name + bullet items)
  const opportunityCategories = BLOCK_KEYS.map((k, i) => {
    const items = t(`${base}.${k}.items`, { returnObjects: true }) as string[];
    return {
      name: t(`${base}.${k}.title`),
      dark: i % 2 === 1,
      items: items.map((it) => ({ title: it, description: "" })),
    };
  });

  return (
    <div className="min-h-screen">
      <Helmet>
        <html lang={currentLang} />
        <title>{t(`${base}.seo.title`)}</title>
        <meta name="description" content={t(`${base}.seo.description`)} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="ru" href={`${CANONICAL_ORIGIN}/ru/relocation`} />
        <link rel="alternate" hrefLang="uk" href={`${CANONICAL_ORIGIN}/uk/relocation`} />
        <meta property="og:title" content={t(`${base}.seo.title`)} />
        <meta property="og:description" content={t(`${base}.seo.description`)} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={currentLang} />
      </Helmet>

      <Header />

      <ServiceHero
        eyebrow={t(`${base}.hero.eyebrow`)}
        title={t(`${base}.hero.title`)}
        description={t(`${base}.hero.subtitle`)}
        image={heroImg}
        imageAlt={t(`${base}.hero.title`)}
      />

      <Philosophy
        sectionTitle={t(`${base}.philosophy.title`)}
        subtitle={t(`${base}.philosophy.subtitle`)}
        items={philosophyItems}
      />

      <InvestmentOpportunities categories={opportunityCategories} />

      <ServiceCTA
        title={t(`${base}.finalCta.title`)}
        description={t(`${base}.finalCta.subtitle`)}
      />

      <Footer />
    </div>
  );
};

export default Relocation;
