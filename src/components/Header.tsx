import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.svg";
import wealthImg from "../assets/infinity-symbol.png";
import familyImg from "../assets/family-office-symbol.png";
import structuringImg from "../assets/structuring-tax-symbol.png";
import maImg from "../assets/corporate-services-symbol.png";
import specialImg from "../assets/special-solutions-symbol.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";

const Header = () => {
  const { t } = useTranslation();
  const localize = useLocalizedPath();

  const navItems = [
    { labelKey: "nav.services", href: "#services", hasMega: true },
    { labelKey: "nav.expertise", href: "/expertise" },
    { labelKey: "nav.insights", href: "/insights" },
    { labelKey: "nav.about", href: "/about" },
  ];

  const serviceColumns = [
    {
      number: "01",
      titleKey: "services.wealthManagement.title",
      descKey: "services.wealthManagement.description",
      link: "/services/wealth-management",
      image: wealthImg,
    },
    {
      number: "02",
      titleKey: "services.familyOffice.title",
      descKey: "services.familyOffice.description",
      link: "/services/family-office",
      image: familyImg,
    },
    {
      number: "03",
      titleKey: "services.structuringTax.title",
      descKey: "services.structuringTax.description",
      link: "/services/structuring-tax",
      image: structuringImg,
    },
    {
      number: "04",
      titleKey: "services.maConsulting.title",
      descKey: "services.maConsulting.description",
      link: "/services/ma-consulting",
      image: maImg,
    },
    {
      number: "05",
      titleKey: "services.specialSolutions.title",
      descKey: "services.specialSolutions.description",
      link: "/services/special-solutions",
      image: specialImg,
    },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  // Strip lang prefix for active checks
  const pathWithoutLang = (() => {
    const parts = location.pathname.split("/").filter(Boolean);
    return "/" + parts.slice(1).join("/");
  })();
  const isServiceActive = pathWithoutLang.startsWith("/services/");
  const isActive = (href: string) =>
    href.startsWith("/") && (pathWithoutLang === href || pathWithoutLang.startsWith(href + "/"));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${
        scrolled || megaOpen || mobileOpen ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-main h-full flex items-center justify-between">
        {/* Logo */}
        <Link to={localize("/")} className="flex items-center">
          <img src={logo} alt="Icon Finance & Wealth Management" className="h-[46px]" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.hasMega ? (
              <div
                key={item.labelKey}
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
                className="h-20 flex items-center relative"
              >
                <button
                  className={`flex items-center gap-1 text-[13px] transition-colors duration-300 uppercase tracking-wider font-medium ${
                    megaOpen || isServiceActive ? "text-gold" : "text-white/70 hover:text-gold"
                  }`}
                >
                  {t(item.labelKey)}
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isServiceActive && (
                  <span className="absolute bottom-5 left-0 right-4 h-[2px] bg-gold" />
                )}
              </div>
            ) : (
              <Link
                key={item.labelKey}
                to={localize(item.href)}
                className={`relative h-20 flex items-center text-[13px] transition-colors duration-300 uppercase tracking-wider font-medium ${
                  isActive(item.href) ? "text-gold" : "text-white/70 hover:text-gold"
                }`}
              >
                {t(item.labelKey)}
                {isActive(item.href) && (
                  <span className="absolute bottom-5 left-0 right-0 h-[2px] bg-gold" />
                )}
              </Link>
            ),
          )}
          <LanguageSwitcher variant="desktop" />
          <Link
            to={localize("/contact")}
            className="text-[13px] text-gold hover:text-white transition-colors duration-300 uppercase tracking-wider font-medium"
          >
            {t("nav.startDialogue")} →
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mega Menu Dropdown */}
      <div
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
        className={`hidden lg:block absolute left-0 top-20 w-full bg-navy border-t border-white/5 shadow-2xl transition-all duration-200 ease-out ${
          megaOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ backgroundColor: "#0F162D" }}
      >
        <div className="w-full">
          <div className="grid grid-cols-5">
            {serviceColumns.map((col, i) => {
              const active = hoveredCol === i;
              return (
                <Link
                  key={col.titleKey}
                  to={localize(col.link)}
                  onClick={() => setMegaOpen(false)}
                  onMouseEnter={() => setHoveredCol(i)}
                  onMouseLeave={() => setHoveredCol(null)}
                  className="group relative block overflow-hidden border-r border-gold/10 last:border-r-0"
                  style={{ height: "320px" }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${col.image})`, filter: "grayscale(100%)" }}
                  />
                  <div
                    className="absolute inset-0 transition-all duration-500"
                    style={{
                      background: active
                        ? "linear-gradient(180deg, rgba(15,22,45,0.35) 0%, rgba(224,167,118,0.78) 100%)"
                        : "linear-gradient(180deg, rgba(15,22,45,0.55) 0%, rgba(15,22,45,0.96) 100%)",
                    }}
                  />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <div
                      className={`text-[10px] tracking-[0.24em] mb-2 transition-colors duration-300 ${
                        active ? "text-white" : "text-gold"
                      }`}
                    >
                      {col.number}
                    </div>
                    <h3 className="text-white text-[16px] font-medium mb-2 leading-tight">
                      {t(col.titleKey)}
                    </h3>
                    <p
                      className={`text-[11px] leading-[1.55] mb-4 transition-colors duration-300 ${
                        active ? "text-white/90" : "text-white/55"
                      }`}
                    >
                      {t(col.descKey)}
                    </p>
                    <div
                      className={`inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 ${
                        active ? "text-white opacity-100 translate-x-0" : "text-gold opacity-0 -translate-x-2"
                      }`}
                    >
                      {t("megaMenu.explore")} <ArrowRight size={12} />
                    </div>
                  </div>
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gold transition-transform duration-500 origin-left ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

        </div>
      </div>

      {/* Mobile panel */}
      {createPortal(
        <div
          className={`lg:hidden fixed left-0 right-0 bottom-0 top-20 z-[60] bg-navy transition-opacity duration-200 ${
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto pb-24">
              <nav className="flex flex-col">
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className={`w-full flex items-center justify-between px-6 py-4 border-b border-white/10 text-[15px] font-medium transition-colors ${
                    isServiceActive ? "text-gold" : "text-white"
                  }`}
                >
                  <span>{t("nav.services")}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-gold" : "text-white/60"}`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="bg-white/[0.03] border-b border-white/10">
                    {serviceColumns.map((col) => (
                      <Link
                        key={col.titleKey}
                        to={localize(col.link)}
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="flex items-center gap-3 px-6 py-3.5 border-b border-white/5 last:border-b-0 text-white hover:text-gold transition-colors"
                      >
                        <span className="text-gold/70 text-[12px] w-6">{col.number}</span>
                        <span className="text-[14px]">{t(col.titleKey)}</span>
                      </Link>
                    ))}
                  </div>
                )}

                {navItems
                  .filter((item) => !item.hasMega)
                  .map((item) => (
                    <Link
                      key={item.labelKey}
                      to={localize(item.href)}
                      onClick={() => setMobileOpen(false)}
                      className={`px-6 py-4 border-b border-white/10 text-[15px] font-medium transition-colors ${
                        isActive(item.href) ? "text-gold" : "text-white hover:text-gold"
                      }`}
                    >
                      {t(item.labelKey)}
                    </Link>
                  ))}

                <Link
                  to={localize("/contact")}
                  onClick={() => setMobileOpen(false)}
                  className={`px-6 py-4 border-b border-white/10 text-[15px] font-medium transition-colors ${
                    isActive("/contact") ? "text-gold" : "text-white hover:text-gold"
                  }`}
                >
                  {t("nav.contact")}
                </Link>

                <LanguageSwitcher variant="mobile" />
              </nav>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-navy border-t border-white/10 p-4">
              <Link
                to={localize("/contact")}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-gold text-navy py-3.5 text-[14px] font-semibold rounded"
              >
                {t("nav.startDialogue")}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </header>
  );
};

export default Header;
