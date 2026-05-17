import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import heroBg from "../assets/hero-cubes.webp";

const statsConfig = [
  { display: "100+", labelKey: "clients" },
  { display: "17+", labelKey: "experience" },
  { display: "5+", labelKey: "jurisdictions" },
] as const;

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center text-center px-4 py-10 md:py-12 min-h-[160px] md:min-h-[200px]">
    <div
      className="text-gold font-light leading-none tabular-nums whitespace-nowrap"
      style={{ fontSize: "clamp(38px, 5vw, 56px)", fontVariantNumeric: "tabular-nums" }}
    >
      {value}
    </div>
    <div className="text-[12px] md:text-[13px] text-white/55 mt-3 tracking-wide">
      {label}
    </div>
  </div>
);

const Hero = () => {
  const localize = useLocalizedPath();
  const { t } = useTranslation();
  return (
  <section
    className="relative flex items-center overflow-hidden pt-20 pb-16 lg:pb-20"
    style={{ minHeight: '70vh', backgroundColor: '#070D20' }}
  >
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.1 }}
        fetchPriority="high"
        decoding="async"
      />
    </div>

    <div className="container-main relative z-10 w-full">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full py-12 lg:py-0">
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          
          <h1
            className="text-gold font-light leading-[1.15] mb-5 md:mb-6 max-w-[18ch] hyphens-auto"
            style={{ fontSize: "clamp(26px,4.2vw,52px)", wordBreak: "normal", overflowWrap: "break-word" }}
          >
            {t("hero.title")}
          </h1>
          <p className="text-white/70 text-[15px] md:text-base max-w-lg mb-8 md:mb-10 leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <Link to={localize("/contact")} className="btn-gold px-6 md:px-8 py-2.5 md:py-3">{t("hero.ctaPrimary")}</Link>
            <Link to={localize("/expertise")} className="btn-outline-gold px-6 md:px-8 py-2.5 md:py-3">{t("hero.ctaSecondary")}</Link>
          </div>
        </div>

        <div
          className="relative grid grid-cols-3 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {statsConfig.map((stat, i) => (
            <div key={i} className="relative">
              <StatCard value={stat.display} label={t(`hero.stats.${stat.labelKey}`)} />
              {i < statsConfig.length - 1 && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute top-[15%] bottom-[15%] right-0 w-px"
                  style={{ background: "linear-gradient(180deg, transparent 0%, rgba(224,167,118,0.35) 50%, transparent 100%)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
