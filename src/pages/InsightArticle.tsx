import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const toc = [
  { id: "rate-environment", label: "The Rate Environment in Context" },
  { id: "fixed-income", label: "Impact on Fixed Income Allocations" },
  { id: "equity", label: "Equity Implications" },
  { id: "considerations", label: "What Private Clients Should Consider" },
  { id: "summary", label: "Summary" },
];

const related = [
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
];

const InsightArticle = () => {
  const [activeId, setActiveId] = useState<string>(toc[0].id);

  useEffect(() => {
    const onScroll = () => {
      const offset = 200;
      let current = toc[0].id;
      for (const item of toc) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top - offset <= 0) {
          current = item.id;
        }
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-offwhite">
      <Header />

      {/* HERO */}
      <section className="bg-navy pt-32 pb-16">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold text-[12px] uppercase tracking-[0.14em] font-semibold mb-6">
              Wealth Management
            </p>
            <h1
              className="text-white font-light leading-[1.15] mb-6"
              style={{ fontSize: "clamp(30px,4.5vw,48px)" }}
            >
              Interest Rate Cycles and What They Mean for Private Portfolios in 2025
            </h1>
            <p className="text-slate text-[14px] mb-12">Apr 14, 2025 · 4 min read</p>

            <div className="max-w-[560px] mx-auto">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Interest Rate Cycles"
                className="w-full h-auto"
                style={{ filter: "grayscale(100%)" }}
              />
              <div className="h-[2px] bg-gold w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="section-padding bg-offwhite">
        <div className="container-main">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* LEFT — sticky sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-10">
                <div>
                  <p className="text-gold text-[11px] uppercase tracking-[0.14em] font-semibold mb-5">
                    Table of Contents
                  </p>
                  <ul className="space-y-3">
                    {toc.map((item) => {
                      const active = activeId === item.id;
                      return (
                        <li key={item.id}>
                          <button
                            onClick={() => scrollTo(item.id)}
                            className={`text-left text-[13px] leading-relaxed pl-3 border-l-2 transition-all duration-300 w-full ${
                              active
                                ? "border-gold text-gold"
                                : "border-transparent text-slate hover:border-gold hover:text-gold"
                            }`}
                          >
                            {item.label}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="h-px bg-charcoal/10" />

                <div>
                  <p className="text-gold text-[11px] uppercase tracking-[0.14em] font-semibold mb-5">
                    Share Article
                  </p>
                  <div className="flex gap-5">
                    {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="text-slate hover:text-gold transition-colors duration-300"
                        aria-label="Share"
                      >
                        <Icon size={18} strokeWidth={1.5} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* RIGHT — content */}
            <article className="lg:col-span-3 max-w-3xl">
              <div className="prose-article space-y-6 text-charcoal">
                <h2
                  id="rate-environment"
                  className="text-charcoal font-light scroll-mt-28"
                  style={{ fontSize: "clamp(24px,3vw,32px)" }}
                >
                  The Rate Environment in Context
                </h2>
                <p className="text-charcoal/80 text-[16px] leading-[1.8]">
                  The interest rate cycle of 2022–2024 represented one of the most aggressive tightening
                  periods in modern monetary history. For private wealth clients accustomed to a decade of
                  near-zero rates, the adjustment required fundamental rethinking of portfolio positioning —
                  from fixed income duration to real asset allocation and liquidity management.
                </p>

                <h2
                  id="fixed-income"
                  className="text-charcoal font-light pt-6 scroll-mt-28"
                  style={{ fontSize: "clamp(24px,3vw,32px)" }}
                >
                  Impact on Fixed Income Allocations
                </h2>
                <p className="text-charcoal/80 text-[16px] leading-[1.8]">
                  For the first time in over a decade, high-quality fixed income instruments are generating
                  real returns. Investment-grade bonds, government securities, and money market instruments
                  now offer yields that compete meaningfully with equity risk premiums — particularly for
                  clients with capital preservation as a primary objective.
                </p>

                <blockquote
                  className="my-10 py-6 px-8 bg-charcoal/[0.04] border-l-4 border-gold italic text-charcoal"
                  style={{ fontSize: "20px", lineHeight: "1.6" }}
                >
                  "For the first time in a decade, holding cash and short-duration bonds is not a
                  concession — it is a legitimate strategic position."
                </blockquote>

                <p className="text-charcoal/80 text-[16px] leading-[1.8]">
                  The practical implication for portfolio construction is significant. Clients who previously
                  needed to reach into lower-quality credit or illiquid alternatives to generate income can
                  now achieve their yield targets with considerably less risk. This is a meaningful structural
                  shift, not a temporary anomaly.
                </p>

                <h2
                  id="equity"
                  className="text-charcoal font-light pt-6 scroll-mt-28"
                  style={{ fontSize: "clamp(24px,3vw,32px)" }}
                >
                  Equity Implications
                </h2>
                <p className="text-charcoal/80 text-[16px] leading-[1.8]">
                  Higher rates have repriced growth equities significantly, while value and dividend-oriented
                  sectors have benefited from the rotation. For private clients with concentrated equity
                  positions — particularly in technology or growth companies — the environment has underscored
                  the importance of diversification and tactical rebalancing.
                </p>

                <h2
                  id="considerations"
                  className="text-charcoal font-light pt-6 scroll-mt-28"
                  style={{ fontSize: "clamp(24px,3vw,32px)" }}
                >
                  What Private Clients Should Consider
                </h2>
                <p className="text-charcoal/80 text-[16px] leading-[1.8]">
                  The most important question for private wealth clients is not where rates will go next —
                  it is whether their current portfolio was built for a rate environment that no longer
                  exists. Many portfolios constructed between 2010 and 2021 were optimised for a world of
                  cheap money. That world has changed.
                </p>

                <ul className="space-y-3 py-2">
                  {[
                    "Review fixed income duration and quality",
                    "Assess real asset allocations in context of inflation",
                    "Evaluate liquidity needs across a 3–5 year horizon",
                    "Consider tax implications of any rebalancing",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-charcoal/80 text-[16px] leading-[1.7]"
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-gold mt-[10px] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h2
                  id="summary"
                  className="text-charcoal font-light pt-6 scroll-mt-28"
                  style={{ fontSize: "clamp(24px,3vw,32px)" }}
                >
                  Summary
                </h2>
                <p className="text-charcoal/80 text-[16px] leading-[1.8]">
                  Rate cycles end. The question is always timing — and private clients with long investment
                  horizons are best served by portfolios built for resilience across cycles, not optimised
                  for any single environment. The current moment offers a genuine opportunity to reset
                  allocations with a clear head and realistic return expectations.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* KEEP READING */}
      <section className="bg-navy py-20">
        <div className="container-main">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-gold text-[12px] uppercase tracking-[0.14em] font-semibold mb-4">
                Insights & Analysis
              </p>
              <h2 className="text-white font-light" style={{ fontSize: "clamp(28px,4vw,40px)" }}>
                Keep Reading
              </h2>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-gold text-[12px] uppercase tracking-wider font-medium hover:text-white transition-colors"
            >
              Show more <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {related.map((a) => (
              <Link
                to={`/insights/${a.slug}`}
                key={a.slug}
                className="bg-white group cursor-pointer border border-white/[0.06] border-b-[3px] border-b-transparent hover:border-b-gold transition-all duration-300"
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
        </div>
      </section>

      {/* CONTACT */}
      <Contact />
      <Footer />
    </div>
  );
};

export default InsightArticle;
