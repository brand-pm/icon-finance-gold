import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe, ChevronDown, TrendingUp, Users, Shield, Briefcase, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const navItems = [
  { label: "Services", href: "#services", hasMega: true },
  { label: "Expertise", href: "#expertise" },
  { label: "Insights", href: "#insights" },
  { label: "About", href: "#about" },
];

const serviceColumns = [
  {
    icon: TrendingUp,
    title: "Wealth Management",
    description: "Independent investment management for entrepreneurs and families",
    link: "/services/wealth-management",
    items: ["Investment Strategy", "Portfolio Management", "Alternative Investments", "Consolidated Reporting"],
  },
  {
    icon: Users,
    title: "Family Office",
    description: "Full-service family office design and operations",
    link: "/services/family-office",
    items: ["Single Family Office", "Shared Family Office", "Virtual Family Office", "Family Governance"],
  },
  {
    icon: Shield,
    title: "Structuring & Tax",
    description: "International structuring and tax planning for complex wealth",
    link: "/services/structuring-tax",
    items: ["Wealth Structuring", "Tax Planning", "Trusts & Foundations", "Estate Planning"],
  },
  {
    icon: Briefcase,
    title: "M&A Consulting",
    description: "Corporate advisory for acquisitions, exits, and capital raising",
    link: "/services/ma-consulting",
    items: ["M&A Advisory", "Exit Strategies", "Capital Raising", "Due Diligence"],
  },
  {
    icon: Star,
    title: "Special Solutions",
    description: "Bespoke solutions for unique assets and complex situations",
    link: "/services/special-solutions",
    items: ["Real Estate", "Art & Collectibles", "Philanthropy", "ESG Investing"],
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
        <a href="#" className="flex items-center">
          <img src={logo} alt="Icon Finance & Wealth Management" className="h-[46px]" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.hasMega ? (
              <div
                key={item.label}
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
                className="h-20 flex items-center"
              >
                <button
                  className={`flex items-center gap-1 text-[13px] transition-colors duration-300 uppercase tracking-wider font-medium ${
                    megaOpen ? "text-gold" : "text-white/70 hover:text-gold"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
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
          <a href="#contact" className="text-[13px] text-gold hover:text-white transition-colors duration-300 uppercase tracking-wider font-medium">
            Start a dialogue →
          </a>
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
        <div className="container-main py-12">
          <div className="grid grid-cols-5 gap-0">
            {serviceColumns.map((col, i) => {
              const Icon = col.icon;
              const isActive = hoveredCol === i;
              return (
                <Link
                  key={col.title}
                  to={col.link}
                  onClick={() => setMegaOpen(false)}
                  onMouseEnter={() => setHoveredCol(i)}
                  onMouseLeave={() => setHoveredCol(null)}
                  className={`group px-6 py-2 border-l transition-all duration-300 ${
                    isActive ? "border-gold bg-white/[0.02]" : "border-white/5"
                  }`}
                >
                  <Icon
                    size={28}
                    className={`mb-4 transition-colors duration-300 ${
                      isActive ? "text-gold" : "text-gold/70"
                    }`}
                    strokeWidth={1.5}
                  />
                  <h3
                    className={`text-[15px] font-medium mb-2 transition-colors duration-300 ${
                      isActive ? "text-gold" : "text-white"
                    }`}
                  >
                    {col.title}
                  </h3>
                  <p className="text-[12px] text-white/50 leading-relaxed mb-5 min-h-[48px]">
                    {col.description}
                  </p>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="text-[12px] text-white/65 hover:text-gold transition-colors duration-200 uppercase tracking-wide"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Link>
              );
            })}
          </div>

          {/* Gold divider */}
          <div className="mt-10 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          {/* CTA strip */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-[14px] text-white/70">
              Not sure where to start? <span className="text-white">Let's talk.</span>
            </p>
            <a
              href="#contact"
              onClick={() => setMegaOpen(false)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy text-[12px] uppercase tracking-wider font-medium hover:bg-gold/90 transition-colors duration-300"
            >
              Start a Dialogue
              <ArrowRight size={14} />
            </a>
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
