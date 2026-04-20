import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, type SupportedLanguage } from "@/i18n/config";

interface SeoProps {
  /** Key under `seo.pages` in the locale, e.g. "home", "wealthManagement". */
  pageKey: string;
}

const SITE_ORIGIN =
  typeof window !== "undefined" && window.location?.origin
    ? window.location.origin
    : "https://iconfinance.com";

/** Maps i18n lang code → hreflang value (uk uses /ua/ in URL but hreflang = "uk"). */
const HREFLANG: Record<SupportedLanguage, string> = {
  en: "en",
  pl: "pl",
  uk: "uk",
  ru: "ru",
};

const Seo = ({ pageKey }: SeoProps) => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  const currentLang = (
    SUPPORTED_LANGUAGES.includes(i18n.language as SupportedLanguage)
      ? i18n.language
      : DEFAULT_LANGUAGE
  ) as SupportedLanguage;

  const title = t(`seo.pages.${pageKey}.title`);
  const description = t(`seo.pages.${pageKey}.description`);
  const siteName = t("seo.siteName");

  // Strip the leading lang segment from pathname → "/about", "/services/wealth-management", or ""
  const parts = pathname.split("/").filter(Boolean);
  const restPath = SUPPORTED_LANGUAGES.includes(parts[0] as SupportedLanguage)
    ? parts.slice(1).join("/")
    : parts.join("/");
  const subPath = restPath ? `/${restPath}` : "";

  const buildUrl = (lang: SupportedLanguage) => `${SITE_ORIGIN}/${lang}${subPath}`;
  const canonical = buildUrl(currentLang);

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* hreflang alternates */}
      {SUPPORTED_LANGUAGES.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={HREFLANG[lang]}
          href={buildUrl(lang)}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={buildUrl(DEFAULT_LANGUAGE)} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={currentLang} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;
