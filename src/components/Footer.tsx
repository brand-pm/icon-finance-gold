import logo from "../assets/logo.svg";

const footerCols = [
  {
    title: "Services",
    links: ["Wealth Management", "Family Office", "Structuring & Tax", "M&A Consulting", "Special Solutions"],
  },
  {
    title: "About Us",
    links: ["Insights", "Team", "Partners", "Offices", "Contacts"],
  },
  {
    title: "Expertise",
    links: ["Industries", "International experience", "Our competencies"],
  },
];

const Footer = () => (
  <footer className="bg-footer relative overflow-hidden">
    {/* Watermark */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[20vw] font-black text-white/[0.03] leading-none select-none pointer-events-none tracking-tighter">
      ICON
    </div>

    <div className="container-main relative z-10 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <img src={logo} alt="Icon Finance & Wealth Management" className="h-[46px] mb-4" />
          <p className="text-white/50 text-sm leading-relaxed">
            Preserving and growing wealth across generations with integrity and expertise.
          </p>
        </div>

        {/* Columns */}
        {footerCols.map((col) => (
          <div key={col.title}>
            <h4 className="eyebrow text-[11px] mb-6">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 text-sm hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
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
