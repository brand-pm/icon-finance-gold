import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLocalizedPath, useCurrentLanguage } from "@/i18n/useLocalizedPath";
import { sanityClient, urlFor, formatPostDate, type PostListItem } from "@/lib/sanity";

const POSTS_QUERY = `*[_type == "post" && language == $lang] | order(publishedAt desc)[0...3]{
  _id, title, "slug": slug.current, category, coverImage, excerpt, readTime, publishedAt
}`;

const Insights = () => {
  const ref = useScrollReveal();
  const { t } = useTranslation();
  const localize = useLocalizedPath();
  const lang = useCurrentLanguage();

  const { data: articles = [], isLoading } = useQuery({
    queryKey: ["posts", "teaser", lang],
    queryFn: () => sanityClient.fetch<PostListItem[]>(POSTS_QUERY, { lang }),
  });

  // Hide entire section if no articles in current language (after loading)
  if (!isLoading && articles.length === 0) {
    return null;
  }

  return (
    <section id="insights" className="section-padding bg-offwhite" ref={ref}>
      <div className="container-main">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <p className="eyebrow mb-4">{t("insightsTeaser.eyebrow")}</p>
          <h2 className="text-charcoal font-light mb-4" style={{ fontSize: "clamp(28px,5vw,42px)" }}>
            {t("insightsTeaser.title")}
          </h2>
          <div className="gold-separator">
            <div className="dot" /><div className="dot-lg" /><div className="dot" />
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12 mb-12">
            <p className="text-slate text-[15px]">No articles published yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {articles.map((a, i) => {
              const category = t(`insights.categories.${a.category}`);
              return (
                <Link
                  to={localize(`/insights/${a.slug}`)}
                  key={a._id}
                  className="bg-white opacity-0 animate-fade-up cursor-pointer group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_hsl(var(--charcoal)/0.18),0_0_0_1px_hsl(var(--gold)/0.18)]"
                  style={{ border: "1px solid hsl(var(--charcoal) / 0.06)", animationDelay: `${i * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <div
                      className="absolute inset-0 z-10 mix-blend-color group-hover:opacity-0 transition-opacity duration-500"
                      style={{ background: "linear-gradient(135deg, #0F162D 0%, #E0A776 100%)" }}
                    />
                    {a.coverImage && (
                      <img
                        src={urlFor(a.coverImage).width(800).auto("format").url()}
                        alt={a.title}
                        loading="lazy"
                        width={800}
                        height={512}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-gold text-[10px] uppercase tracking-[0.12em] font-semibold mb-3">
                      {category}
                    </p>
                    <h3 className="text-charcoal text-[17px] font-medium leading-[1.4] mb-3 group-hover:text-gold transition-colors line-clamp-3">
                      {a.title}
                    </h3>
                    <p className="text-slate text-[13px]">{formatPostDate(a.publishedAt, a.readTime)}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        <div className="text-center">
          <Link
            to={localize("/insights")}
            className="inline-block px-8 py-3 border border-charcoal text-charcoal text-sm font-medium uppercase tracking-wider hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            {t("insightsTeaser.showMore")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Insights;
