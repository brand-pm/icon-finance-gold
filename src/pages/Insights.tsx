import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { useScrollReveal } from "../hooks/useScrollReveal";
import marbleHero from "../assets/marble-mono-1.jpg";

const categories = [
  "All",
  "Wealth Management",
  "Family Office",
  "Structuring & Tax",
  "M&A & Corporate",
  "Special Solutions",
];

const articles = [
  {
    slug: "interest-rate-cycles-2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    category: "Wealth Management",
    title: "Interest Rate Cycles and What They Mean for Private Portfolios in 2025",
    date: "Apr 14, 2025 · 4 min read",
  },
  {
    slug: "family-constitution-governance",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    category: "Family Office",
    title: "Building a Family Constitution: Why Governance Matters More Than Returns",
    date: "Apr 7, 2025 · 5 min read",
  },
  {
    slug: "crs-2025-international",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    category: "Structuring & Tax",
    title: "CRS in 2025: What Has Changed and What It Means for International Asset Holders",
    date: "Mar 28, 2025 · 6 min read",
  },
  {
    slug: "selling-business-mistakes",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
    category: "M&A & Corporate",
    title: "Selling Your Business: The Five Mistakes Owners Make Before Going to Market",
    date: "Mar 21, 2025 · 5 min read",
  },
  {
    slug: "art-as-asset-class",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600&q=80",
    category: "Special Solutions",
    title: "Art as an Asset Class: How Collectors Are Integrating Works Into Wealth Strategy",
    date: "Mar 14, 2025 · 4 min read",
  },
  {
    slug: "private-credit-high-rate",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=600&q=80",
    category: "Wealth Management",
    title: "Private Credit in a High-Rate Environment: Opportunity or Overreach?",
    date: "Mar 7, 2025 · 5 min read",
  },
  {
    slug: "shared-family-office-model",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    category: "Family Office",
    title: "The Shared Family Office Model: When It Works and When It Doesn't",
    date: "Feb 28, 2025 · 4 min read",
  },
  {
    slug: "malta-vs-cyprus-holding",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    category: "Structuring & Tax",
    title: "Malta vs Cyprus: Choosing the Right EU Holding Jurisdiction in 2025",
    date: "Feb 21, 2025 · 6 min read",
  },
  {
    slug: "philanthropic-foundations-poland",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80",
    category: "Special Solutions",
    title: "Philanthropic Foundations in Poland: A Practical Guide for Wealthy Families",
    date: "Feb 14, 2025 · 5 min read",
  },
];

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const gridRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-offwhite">
      <Header />

      {/* HERO */}
      <section
        className="relative w-full flex items-center"
        style={{
          minHeight: "35vh",
          backgroundImage: `url(${marbleHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Top fade for navbar readability */}
        <div
          className="absolute inset-x-0 top-0 h-40 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,15,30,0.95) 0%, rgba(10,15,30,0.6) 60%, rgba(10,15,30,0) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(15,22,45,0.92), rgba(15,22,45,0.85))",
          }}
        />
        <div className="container-main relative z-20 pt-24 pb-10 md:pb-12">
          <div className="max-w-3xl">
            <p className="eyebrow text-gold mb-4 md:mb-6">Insights & Analysis</p>
            <h1
              className="text-white font-light leading-[1.1] mb-5 md:mb-6"
              style={{ fontSize: "clamp(28px,5.5vw,60px)" }}
            >
              Perspectives on Wealth, Markets, and Strategy
            </h1>
            <div className="gold-separator !justify-start mb-5 md:mb-6">
              <div className="dot" />
              <div className="dot-lg" />
              <div className="dot" />
            </div>
            <p className="text-white/75 text-[15px] md:text-lg leading-relaxed max-w-2xl">
              Expert commentary from the Icon Finance team on markets, structuring,
              family office, and the forces shaping private wealth.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-20 z-30 bg-offwhite/95 backdrop-blur-md border-b border-charcoal/10">
        <div className="container-main">
          <div className="flex gap-5 md:gap-8 overflow-x-auto py-4 md:py-5 scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative whitespace-nowrap text-[12px] md:text-[12px] uppercase tracking-[0.12em] font-medium transition-colors duration-300 pb-2 min-h-[44px] flex items-center ${
                    active ? "text-gold" : "text-slate hover:text-charcoal"
                  }`}
                >
                  {cat}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ARTICLE GRID */}
      <section className="section-padding bg-offwhite" ref={gridRef}>
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((a, i) => (
              <Link
                to={`/insights/${a.slug}`}
                key={a.slug}
                className="bg-white opacity-0 animate-fade-up cursor-pointer group border border-charcoal/[0.06] border-b-[3px] border-b-transparent hover:border-b-gold transition-all duration-300"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: "grayscale(100%)" }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-gold text-[11px] uppercase tracking-[0.14em] font-semibold mb-3">
                    {a.category}
                  </p>
                  <h3 className="text-charcoal text-[18px] font-medium leading-[1.4] mb-4 group-hover:text-gold transition-colors duration-300 line-clamp-3">
                    {a.title}
                  </h3>
                  <p className="text-slate text-[14px]">{a.date}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center items-center gap-2 mt-16">
            <button className="px-3 py-2 text-slate hover:text-gold transition-colors text-sm">
              ←
            </button>
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`w-10 h-10 text-sm transition-colors ${
                  n === 1
                    ? "bg-charcoal text-white"
                    : "text-charcoal hover:text-gold"
                }`}
              >
                {n}
              </button>
            ))}
            <span className="text-slate px-2">...</span>
            <button className="px-3 py-2 text-slate hover:text-gold transition-colors text-sm">
              →
            </button>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-navy py-20" ref={ctaRef}>
        <div className="container-main text-center opacity-0 animate-fade-up">
          <h2
            className="text-white font-light mb-6"
            style={{ fontSize: "clamp(28px,4.5vw,42px)" }}
          >
            Want Our Analysis Delivered Directly?
          </h2>
          <div className="gold-separator mb-8">
            <div className="dot" />
            <div className="dot-lg" />
            <div className="dot" />
          </div>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            We publish market perspectives and expert commentary for clients and
            subscribers. Reach out to be added to our distribution list.
          </p>
          <Link
            to="/contact"
            className="inline-block btn-gold px-10 py-4 text-[13px] font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* CONTACT FORM */}
      <Contact />

      <Footer />
    </div>
  );
};

export default Insights;
