import { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import logo from "../assets/logo.svg";

const navItems = ["Services", "Expertise", "Insights", "About"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-main h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="Icon Finance & Wealth Management" className="h-10" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] text-white/70 hover:text-gold transition-colors duration-300 uppercase tracking-wider font-medium"
            >
              {item}
            </a>
          ))}
          <div className="flex items-center gap-1 text-white/70 cursor-pointer hover:text-gold transition-colors">
            <Globe size={14} />
            <span className="text-[13px]">EN</span>
            <ChevronDown size={12} />
          </div>
          <a href="#contact" className="btn-gold px-6 py-3 inline-block">
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

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-navy/98 backdrop-blur-lg z-40 animate-slide-in-right">
          <nav className="flex flex-col items-center gap-8 pt-16">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-white/80 hover:text-gold transition-colors uppercase tracking-wider"
              >
                {item}
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
