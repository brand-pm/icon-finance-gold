import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Mail } from "lucide-react";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const localize = useLocalizedPath();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-navy">
      <Seo pageKey="notFound" />
      <Header />

      <main className="flex-1 flex items-center justify-center relative overflow-hidden pt-24 pb-20">
        {/* Decorative gold glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(var(--gold) / 0.08) 0%, transparent 60%)",
          }}
        />

        <div className="container-main relative z-10">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            {/* Eyebrow */}
            <p className="eyebrow text-gold mb-6">{t("notFound.eyebrow")}</p>

            {/* Big 404 */}
            <div
              className="font-light text-gold leading-none mb-2 select-none"
              style={{ fontSize: "clamp(96px, 20vw, 220px)" }}
            >
              404
            </div>

            {/* Gold separator */}
            <div className="gold-separator my-6" />

            {/* Title */}
            <h1
              className="text-white font-light leading-[1.1] mb-5"
              style={{ fontSize: "clamp(28px, 4.5vw, 48px)" }}
            >
              {t("notFound.title")}
            </h1>

            {/* Description */}
            <p className="text-white/70 max-w-xl mx-auto mb-4 leading-relaxed">
              {t("notFound.description")}
            </p>

            {/* Requested path */}
            <p className="text-white/40 text-sm mb-10 font-mono">
              {t("notFound.pathLabel")}:{" "}
              <span className="text-gold/70">{location.pathname}</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link to={localize("/")} className="btn-gold inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                {t("notFound.primaryCta")}
              </Link>
              <Link
                to={localize("/contact")}
                className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors border-b border-gold/40 hover:border-white/60 pb-1"
              >
                <Mail className="w-4 h-4" />
                {t("notFound.secondaryCta")}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
