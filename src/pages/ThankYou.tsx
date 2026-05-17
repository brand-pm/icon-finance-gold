import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import marbleHero from "../assets/marble-mono-1.jpg";

const ThankYou = () => {
  const { t } = useTranslation();
  const localize = useLocalizedPath();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Seo pageKey="thankYou" />
      <Helmet>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <Header />
      <main className="flex-1">
        <section className="relative bg-navy overflow-hidden pt-32 pb-24">
          <div className="absolute inset-0">
            <img
              src={marbleHero}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(10,15,30,0.85) 0%, rgba(10,15,30,0.95) 100%)",
              }}
            />
          </div>
          <div className="container-main relative z-10 max-w-2xl mx-auto text-center">
            <p className="eyebrow text-gold mb-6">{t("thankYou.eyebrow")}</p>
            <h1
              className="text-gold font-light leading-[1.15] mb-6"
              style={{ fontSize: "clamp(32px,5.5vw,52px)" }}
            >
              {t("thankYou.title")}
            </h1>
            <div className="gold-separator mx-auto mb-8">
              <div className="line" />
              <div className="dot" />
              <div className="dot-lg" />
              <div className="dot" />
              <div className="line" />
            </div>
            <p className="text-white/75 text-base lg:text-lg leading-relaxed mb-10">
              {t("thankYou.body")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={localize("/")}
                className="btn-gold px-8 py-4 inline-block text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {t("thankYou.ctaPrimary")}
              </Link>
              <Link
                to={localize("/expertise")}
                className="btn-outline-gold px-8 py-4 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {t("thankYou.ctaSecondary")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
