import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import marbleHero from "../assets/marble-mono-1.jpg";
import { sanityClient, urlFor, formatPostDate, type PostListItem } from "@/lib/sanity";
import NewsletterCta from "../components/NewsletterCta";

const POSTS_QUERY = `*[_type == "post" && language == $lang] | order(publishedAt desc){
  _id, title, "slug": slug.current, category, coverImage, excerpt, readTime, publishedAt, language
}`;

const Insights = () => {
  const { t, i18n } = useTranslation();
  const localize = useLocalizedPath();
  const [activeCategory, setActiveCategory] = useState("all");
  const gridRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const lang = i18n.language?.split("-")[0] || "en";

  const { data: articles = [], isLoading } = useQuery({
    queryKey: ["posts", lang],
    queryFn: () => sanityClient.fetch<PostListItem[]>(POSTS_QUERY, { lang }),
  });

  const categoryKeys = ["all", "wealth", "family", "structuring", "ma", "special"] as const;
  const filtered = activeCategory === "all" ? articles : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-offwhite">
      <Seo pageKey="insights" />
      <Header />

      <section className="relative w-full flex items-center" style={{ minHeight: "35vh", backgroundImage: `url(${marbleHero})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-x-0 top-0 h-40 z-10" style={{ background: "linear-gradient(to bottom, hsl(var(--navy) / 0.95) 0%, hsl(var(--navy) / 0.6) 60%, hsl(var(--navy) / 0) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(hsl(var(--navy) / 0.78), hsl(var(--navy) / 0.7))" }} />
        <div className="container-main relative z-20 pt-24 pb-10 md:pb-12">
          <div className="max-w-3xl">
            <p className="eyebrow text-gold mb-4 md:mb-6">{t("insights.hero.eyebrow")}</p>
            <h1 className="text-white font-light leading-[1.1] mb-5 md:mb-6" style={{ fontSize: "clamp(28px,5.5vw,60px)" }}>
              {t("insights.hero.title")}
            </h1>
            <div className="gold-separator !justify-start mb-5 md:mb-6"><div className="dot" /><div className="dot-lg" /><div className="dot" /></div>
            <p className="text-white/75 text-[15px] md:text-lg leading-relaxed max-w-2xl">{t("insights.hero.description")}</p>
          </div>
        </div>
      </section>

      <div className="sticky top-20 z-30 bg-offwhite/95 backdrop-blur-md border-b border-charcoal/10">
        <div className="container-main">
          <div className="flex gap-5 md:gap-8 overflow-x-auto py-4 md:py-5 scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0">
            {categoryKeys.map((key) => {
              const active = activeCategory === key;
              return (
                <button key={key} onClick={() => setActiveCategory(key)} className={`relative whitespace-nowrap text-[12px] md:text-[12px] uppercase tracking-[0.12em] font-medium transition-colors duration-300 pb-2 min-h-[44px] flex items-center ${active ? "text-gold" : "text-slate hover:text-charcoal"}`}>
                  {t(`insights.categories.${key}`)}
                  {active && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="section-padding bg-offwhite" ref={gridRef}>
        <div className="container-main">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-slate text-[16px] mb-6">{t("insights.emptyState.message")}</p>
              {lang !== "en" && (
                <Link
                  to="/en/insights"
                  className="inline-block px-8 py-3 border border-charcoal text-charcoal text-sm font-medium uppercase tracking-wider hover:bg-charcoal hover:text-white transition-all duration-300"
                >
                  {t("insights.emptyState.browseEnglish")}
                </Link>
              )}
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((a, i) => (
                  <Link to={localize(`/insights/${a.slug}`)} key={a._id} className="bg-white opacity-0 animate-fade-up cursor-pointer group border border-charcoal/[0.06] border-b-[3px] border-b-transparent hover:border-b-gold transition-all duration-300" style={{ animationDelay: `${i * 0.05}s` }}>
                    <div className="aspect-video overflow-hidden relative">
                      {a.coverImage && (
                        <>
                          <div
                            className="absolute inset-0 z-10 mix-blend-color group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"
                            style={{ background: "linear-gradient(135deg, #0F162D 0%, #E0A776 100%)" }}
                          />
                          <img src={urlFor(a.coverImage).width(800).auto("format").url()} alt={a.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                        </>
                      )}
                    </div>
                    <div className="p-6">
                      <p className="text-gold text-[11px] uppercase tracking-[0.14em] font-semibold mb-3">{t(`insights.categories.${a.category}`)}</p>
                      <h3 className="text-charcoal text-[18px] font-medium leading-[1.4] mb-4 group-hover:text-gold transition-colors duration-300 line-clamp-3">{a.title}</h3>
                      <p className="text-slate text-[14px]">{formatPostDate(a.publishedAt, a.readTime)}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex justify-center items-center gap-2 mt-16">
                <button className="px-3 py-2 text-slate hover:text-gold transition-colors text-sm">←</button>
                {[1, 2, 3].map((n) => (
                  <button key={n} className={`w-10 h-10 text-sm transition-colors ${n === 1 ? "bg-gold text-navy" : "text-charcoal hover:text-gold"}`}>{n}</button>
                ))}
                <span className="text-slate px-2">...</span>
                <button className="px-3 py-2 text-slate hover:text-gold transition-colors text-sm">→</button>
              </div>
            </>
          )}
        </div>
      </section>

      <NewsletterCta ctaRef={ctaRef} />


      <Contact />
      <Footer />
    </div>
  );
};

export default Insights;
