import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.svg";
import footerBg from "../assets/footer-bg.svg";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";

const Footer = () => {
  const { t } = useTranslation();
  const localize = useLocalizedPath();

  const footerCols = [
    {
      titleKey: "footer.services",
      links: [
        { labelKey: "services.wealthManagement.title", to: "/services/wealth-management" },
        { labelKey: "services.familyOffice.title", to: "/services/family-office" },
        { labelKey: "services.structuringTax.title", to: "/services/structuring-tax" },
        { labelKey: "services.maConsulting.title", to: "/services/ma-consulting" },
        { labelKey: "services.specialSolutions.title", to: "/services/special-solutions" },
      ],
    },
    {
      titleKey: "footer.navigate",
      links: [
        { labelKey: "nav.about", to: "/about" },
        // { labelKey: "nav.insights", to: "/insights" }, // hidden by audit P3 — route + key preserved
        { labelKey: "nav.contact", to: "/contact" },
      ],
    },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(to left, #0C1120, #0F1528, #12192F)" }}
    >
      <img
        src={footerBg}
        alt=""
        className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />

      <div className="container-main relative z-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          <div>
            <Link to={localize("/")} className="inline-block mb-5 -ml-[13px]">
              <img src={logo} alt="Icon Finance & Wealth Management" className="h-[46px] block" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">{t("footer.tagline")}</p>
          </div>

          {footerCols.map((col, i) => (
            <div key={col.titleKey + i}>
              <h4 className="eyebrow text-gold text-[11px] mb-6">{t(col.titleKey)}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.labelKey + link.to}>
                    <Link
                      to={localize(link.to)}
                      className="text-white/60 text-sm hover:text-gold transition-colors duration-300"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="eyebrow text-gold text-[11px] mb-6">{t("footer.contactEyebrow")}</h4>
            <address className="not-italic space-y-5 text-sm">
              <div>
                <p className="text-gold text-[10px] uppercase mb-1.5" style={{ letterSpacing: "0.15em" }}>
                  {t("footer.officeLabel")}
                </p>
                <p className="text-white/60 leading-relaxed">{t("footer.address")}</p>
              </div>
              <div>
                <p className="text-gold text-[10px] uppercase mb-1.5" style={{ letterSpacing: "0.15em" }}>
                  {t("footer.phoneLabel")}
                </p>
                <a
                  href="tel:+48538354262"
                  className="text-white/60 hover:text-gold transition-colors duration-300"
                >
                  +48 538 354 262
                </a>
              </div>
              <div>
                <p className="text-gold text-[10px] uppercase mb-1.5" style={{ letterSpacing: "0.15em" }}>
                  {t("footer.emailLabel")}
                </p>
                <a
                  href="mailto:info@iconfinance.io"
                  className="text-white/60 hover:text-gold transition-colors duration-300 break-all"
                >
                  info@iconfinance.io
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-6 mt-12 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p className="text-slate text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Icon Finance. {t("footer.rights")}
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2">
            <Link to={localize("/privacy-policy")} className="text-slate text-xs md:text-sm hover:text-white transition-colors whitespace-nowrap">
              {t("footer.privacy")}
            </Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("cookieconsent:open"))}
              className="text-slate text-xs md:text-sm hover:text-white transition-colors whitespace-nowrap"
            >
              {t("footer.cookies")}
            </button>
            <Link to={localize("/terms")} className="text-slate text-xs md:text-sm hover:text-white transition-colors whitespace-nowrap">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
