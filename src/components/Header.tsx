import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe, ChevronDown, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import wealthImg from "../assets/infinity-symbol.png";
import familyImg from "../assets/family-office-symbol.png";
import structuringImg from "../assets/structuring-tax-symbol.png";
import maImg from "../assets/corporate-services-symbol.png";
import specialImg from "../assets/special-solutions-symbol.png";

const navItems = [
  { label: "Services", href: "#services", hasMega: true },
  { label: "Expertise", href: "/expertise" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

const serviceColumns = [
  {
    number: "01",
    title: "Wealth Management",
    description: "Independent investment management for entrepreneurs and families",
    link: "/services/wealth-management",
    image: wealthImg,
  },
  {
    number: "02",
    title: "Family Office",
    description: "Full-service family office design and operations",
    link: "/services/family-office",
    image: familyImg,
  },
  {
    number: "03",
    title: "Structuring & Tax",
    description: "International structuring and tax planning for complex wealth",
    link: "/services/structuring-tax",
    image: structuringImg,
  },
  {
    number: "04",
    title: "M&A Consulting",
    description: "Corporate advisory for acquisitions, exits, and capital raising",
    link: "/services/ma-consulting",
    image: maImg,
  },
  {
    number: "05",
    title: "Special Solutions",
    description: "Bespoke solutions for unique assets and complex situations",
    link: "/services/special-solutions",
    image: specialImg,
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const isServiceActive = location.pathname.startsWith("/services/");
  const isActive = (href: string) =>
    href.startsWith("/") && (location.pathname === href || location.pathname.startsWith(href + "/"));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        scrolled || megaOpen ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-main h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Icon Finance & Wealth Management" className="h-[46px]" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.hasMega ? (
              <div
                key={item.label}
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
                className="h-20 flex items-center relative"
              >
                <button
                  className={`flex items-center gap-1 text-[13px] transition-colors duration-300 uppercase tracking-wider font-medium ${
                    megaOpen || isServiceActive ? "text-gold" : "text-white/70 hover:text-gold"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isServiceActive && (
                  <span className="absolute bottom-5 left-0 right-4 h-[2px] bg-gold" />
                )}
              </div>
            ) : item.href.startsWith("/") ? (
              <Link
                key={item.label}
                to={item.href}
                className={`relative h-20 flex items-center text-[13px] transition-colors duration-300 uppercase tracking-wider font-medium ${
                  isActive(item.href) ? "text-gold" : "text-white/70 hover:text-gold"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-5 left-0 right-0 h-[2px] bg-gold" />
                )}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] text-white/70 hover:text-gold transition-colors duration-300 uppercase tracking-wider font-medium"
              >
                {item.label}
              </a>
            ),
          )}
          <div className="flex items-center gap-1 text-white/70 cursor-pointer hover:text-gold transition-colors">
            <Globe size={14} />
            <span className="text-[13px]">EN</span>
            <ChevronDown size={12} />
          </div>
          <Link to="/contact" className="text-[13px] text-gold hover:text-white transition-colors duration-300 uppercase tracking-wider font-medium">
            Start a dialogue →
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
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
                  key={col.title}
                  to={col.link}
                  onClick={() => setMegaOpen(false)}
                  onMouseEnter={() => setHoveredCol(i)}
                  onMouseLeave={() => setHoveredCol(null)}
                  className="group relative block overflow-hidden border-r border-gold/10 last:border-r-0"
                  style={{ height: "320px" }}
                >
                  {/* BG image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${col.image})`,
                      filter: "grayscale(100%)",
                    }}
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 transition-all duration-500"
                    style={{
                      background: active
                        ? "linear-gradient(180deg, rgba(15,22,45,0.35) 0%, rgba(224,167,118,0.78) 100%)"
                        : "linear-gradient(180deg, rgba(15,22,45,0.55) 0%, rgba(15,22,45,0.96) 100%)",
                    }}
                  />
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <div
                      className={`text-[10px] tracking-[0.24em] mb-2 transition-colors duration-300 ${
                        active ? "text-white" : "text-gold"
                      }`}
                    >
                      {col.number}
                    </div>
                    <h3 className="text-white text-[16px] font-medium mb-2 leading-tight">
                      {col.title}
                    </h3>
                    <p
                      className={`text-[11px] leading-[1.55] mb-4 transition-colors duration-300 ${
                        active ? "text-white/90" : "text-white/55"
                      }`}
                    >
                      {col.description}
                    </p>
                    <div
                      className={`inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 ${
                        active ? "text-white opacity-100 translate-x-0" : "text-gold opacity-0 -translate-x-2"
                      }`}
                    >
                      Explore <ArrowRight size={12} />
                    </div>
                  </div>
                  {/* Active gold top accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gold transition-transform duration-500 origin-left ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA strip */}
          <div className="bg-[#0A0F1E] border-t border-gold/10">
            <div className="container-main py-5 flex items-center justify-between flex-wrap gap-4">
              <p className="text-[13px] text-white/60">
                Not sure where to start? <span className="text-white">Let's talk.</span>
              </p>
              <Link
                to="/contact"
                onClick={() => setMegaOpen(false)}
                className="inline-flex items-center gap-2 px-7 py-3 bg-gold text-navy text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-gold/90 transition-colors duration-300"
              >
                Start a Dialogue
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-navy/98 backdrop-blur-lg z-40 animate-slide-in-right">
          <nav className="flex flex-col items-center gap-8 pt-16">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-white/80 hover:text-gold transition-colors uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-gold px-8 py-4 mt-4"
            >
              Start a dialogue →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
