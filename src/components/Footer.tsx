import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import footerBg from "../assets/footer-bg.svg";

const footerCols = [
  {
    title: "Services",
    links: [
      { label: "Wealth Management", to: "/services/wealth-management" },
      { label: "Family Office", to: "/services/family-office" },
      { label: "Structuring & Tax", to: "/services/structuring-tax" },
      { label: "M&A Consulting", to: "/services/ma-consulting" },
      { label: "Special Solutions", to: "/services/special-solutions" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "About", to: "/about" },
      { label: "Insights", to: "/insights" },
      { label: "Contacts", to: "/contact" },
    ],
  },
  {
    title: "Expertise",
    links: [
      { label: "Industries", to: "/expertise" },
      { label: "International experience", to: "/expertise" },
      { label: "Our competencies", to: "/expertise" },
    ],
  },
];

const Footer = () => (
  <footer className="relative overflow-hidden" style={{ background: "linear-gradient(to left, #0C1120, #0F1528, #12192F)" }}>
    <img
      src={footerBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
    />

    <div className="container-main relative z-10 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <Link to="/" className="inline-block">
            <img src={logo} alt="Icon Finance & Wealth Management" className="h-[46px] mb-4" />
          </Link>
          <p className="text-white/50 text-sm leading-relaxed">
            Preserving and growing wealth across generations with integrity and expertise.
          </p>
        </div>

        {footerCols.map((col) => (
          <div key={col.title}>
            <h4 className="eyebrow text-[11px] mb-6">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/60 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/[0.08] pt-6 mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate text-sm">Copyright © 2025 Icon Finance. All rights reserved.</p>
        <div className="flex gap-6">
          {["Privacy Policy", "Cookie Policy", "Terms and Conditions"].map((item) => (
            <a key={item} href="#" className="text-slate text-sm hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
