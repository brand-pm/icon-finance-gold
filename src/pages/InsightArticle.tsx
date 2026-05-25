import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import {
  sanityClient,
  urlFor,
  formatPostDate,
  slugify,
  CATEGORY_LABELS,
  type Post,
  type PostListItem,
} from "@/lib/sanity";
import { PortableBody } from "@/components/insights/PortableBody";
import { FallbackBanner } from "@/components/insights/FallbackBanner";

const POST_QUERY = `*[_type == "post" && slug.current == $slug && language == $lang][0]{
  _id, title, "slug": slug.current, category, coverImage, excerpt, readTime, publishedAt,
  tableOfContents, body, language
}`;

const POST_FALLBACK_QUERY = `*[_type == "post" && slug.current == $slug && language == "en"][0]{
  _id, title, "slug": slug.current, category, coverImage, excerpt, readTime, publishedAt,
  tableOfContents, body, language
}`;

const RELATED_QUERY = `{
  "primary": *[_type == "post" && slug.current != $slug && language == $lang]
    | order(publishedAt desc)[0...3]{
      _id, title, "slug": slug.current, category, coverImage, readTime, publishedAt, language
    },
  "fallback": *[_type == "post" && slug.current != $slug && language == "en"]
    | order(publishedAt desc)[0...3]{
      _id, title, "slug": slug.current, category, coverImage, readTime, publishedAt, language
    }
}`;

const InsightArticle = () => {
  const localize = useLocalizedPath();
  const { i18n } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const [activeId, setActiveId] = useState<string>("");

  const lang = i18n.language?.split("-")[0] || "en";

  const { data: post, isLoading, isError } = useQuery({
    queryKey: ["post", slug, lang],
    queryFn: async () => {
      const primary = await sanityClient.fetch<Post | null>(POST_QUERY, { slug, lang });
      if (primary) return primary;
      if (lang !== "en") {
        return sanityClient.fetch<Post | null>(POST_FALLBACK_QUERY, { slug });
      }
      return null;
    },
    enabled: !!slug,
  });

  const { data: relatedData } = useQuery({
    queryKey: ["related", slug, lang],
    queryFn: () =>
      sanityClient.fetch<{ primary: PostListItem[]; fallback: PostListItem[] }>(RELATED_QUERY, {
        slug,
        lang,
      }),
    enabled: !!slug,
  });

  const related: PostListItem[] = (() => {
    if (!relatedData) return [];
    const primary = relatedData.primary ?? [];
    if (primary.length >= 3) return primary.slice(0, 3);
    const seen = new Set(primary.map((p) => p._id));
    const filler = (relatedData.fallback ?? []).filter((p) => !seen.has(p._id));
    return [...primary, ...filler].slice(0, 3);
  })();

  const showFallbackBanner = !!post && lang !== "en" && post.language === "en";

  const toc = (post?.tableOfContents ?? []).map((label) => ({ id: slugify(label), label }));

  useEffect(() => {
    if (toc.length === 0) return;
    const onScroll = () => {
      const offset = 200;
      let current = toc[0].id;
      for (const item of toc) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = item.id;
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [toc]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-offwhite flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
      </div>
    );
  }

  if (isError || !post) {
    return <Navigate to={localize("/404")} replace />;
  }

  const coverUrl = post.coverImage ? urlFor(post.coverImage).width(1200).auto("format").url() : undefined;

  return (
    <div className="min-h-screen bg-offwhite">
      <Seo pageKey="insights" />
      <Header />

      {/* HERO */}
      <section className="bg-navy pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold text-[11px] md:text-[12px] uppercase tracking-[0.14em] font-semibold mb-4 md:mb-6">
              {CATEGORY_LABELS[post.category]}
            </p>
            <h1
              className="text-white font-light leading-[1.15] mb-5 md:mb-6"
              style={{ fontSize: "clamp(26px,4.5vw,48px)" }}
            >
              {post.title}
            </h1>
            <p className="text-slate text-[13px] md:text-[14px] mb-10 md:mb-12">
              {formatPostDate(post.publishedAt, post.readTime)}
            </p>

            {coverUrl && (
              <div className="max-w-[560px] mx-auto">
                <img
                  src={coverUrl}
                  alt={post.title}
                  className="w-full h-auto"
                />
                <div className="h-[2px] bg-gold w-full" />
              </div>
            )}
          </div>
        </div>
      </section>

      {showFallbackBanner && <FallbackBanner enSlug={post.slug} />}

      {/* ARTICLE BODY */}
      <section className="section-padding bg-offwhite">
        <div className="container-main">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* LEFT — sticky sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-10">
                {toc.length > 0 && (
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
                )}

                <div className="h-px bg-charcoal/10" />

                <div>
                  <p className="text-gold text-[11px] uppercase tracking-[0.14em] font-semibold mb-5">
                    Share Article
                  </p>
                  <div className="flex gap-5">
                    {(() => {
                      const shareUrl = typeof window !== "undefined" ? window.location.href : "";
                      const encodedUrl = encodeURIComponent(shareUrl);
                      const encodedTitle = encodeURIComponent(post.title);
                      const shares = [
                        { Icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, label: "Share on Facebook" },
                        { Icon: Twitter, href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, label: "Share on X" },
                        { Icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, label: "Share on LinkedIn" },
                      ];
                      return shares.map(({ Icon, href, label }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate hover:text-gold transition-colors duration-300"
                          aria-label={label}
                        >
                          <Icon size={18} strokeWidth={1.5} />
                        </a>
                      ));
                    })()}
                  </div>
                </div>
              </div>
            </aside>

            {/* RIGHT — content */}
            <article className="lg:col-span-3 max-w-3xl">
              <PortableBody value={post.body} />
            </article>
          </div>
        </div>
      </section>

      {/* KEEP READING */}
      {related.length > 0 && (
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
                to={localize("/insights")}
                className="inline-flex items-center gap-2 text-gold text-[12px] uppercase tracking-wider font-medium hover:text-white transition-colors"
              >
                Show more <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {related.map((a) => (
                <Link
                  to={localize(`/insights/${a.slug}`)}
                  key={a._id}
                  className="bg-white group cursor-pointer border border-white/[0.06] border-b-[3px] border-b-transparent hover:border-b-gold transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    {a.coverImage && (
                      <img
                        src={urlFor(a.coverImage).width(600).auto("format").url()}
                        alt={a.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ filter: "grayscale(100%)" }}
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-gold text-[11px] uppercase tracking-[0.14em] font-semibold mb-3">
                      {CATEGORY_LABELS[a.category]}
                    </p>
                    <h3 className="text-charcoal text-[18px] font-medium leading-[1.4] mb-4 group-hover:text-gold transition-colors duration-300 line-clamp-3">
                      {a.title}
                    </h3>
                    <p className="text-slate text-[14px]">{formatPostDate(a.publishedAt, a.readTime)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT */}
      <Contact />
      <Footer />
    </div>
  );
};

export default InsightArticle;
