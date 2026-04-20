/**
 * Generates public/sitemap.xml with hreflang alternates
 * for all static routes across all supported languages.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@sanity/client";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SITE = "https://iconfinance.io";
const LANGS = ["en", "pl", "uk", "ru"];
const DEFAULT_LANG = "en";

const SANITY_PROJECT_ID = "yqrl1o3x";
const SANITY_DATASET = "production";
const SANITY_API_VERSION = "2024-01-01";

// Static routes (paths after /:lang). Empty string = home.
const ROUTES = [
  "",
  "about",
  "expertise",
  "services/wealth-management",
  "services/family-office",
  "services/structuring-tax",
  "services/ma-consulting",
  "services/special-solutions",
  "contact",
  "insights",
  "privacy-policy",
  "cookie-policy",
  "terms",
];

// Priority + changefreq per route
const META = {
  "": { priority: "1.0", changefreq: "weekly" },
  about: { priority: "0.8", changefreq: "monthly" },
  expertise: { priority: "0.8", changefreq: "monthly" },
  contact: { priority: "0.7", changefreq: "monthly" },
  insights: { priority: "0.9", changefreq: "weekly" },
  "privacy-policy": { priority: "0.3", changefreq: "yearly" },
  "cookie-policy": { priority: "0.3", changefreq: "yearly" },
  terms: { priority: "0.3", changefreq: "yearly" },
};
const DEFAULT_META = { priority: "0.7", changefreq: "monthly" };

const url = (lang, route) =>
  `${SITE}/${lang}${route ? "/" + route : ""}`;

const today = new Date().toISOString().slice(0, 10);

function urlBlock(route, lastmod, meta) {
  return LANGS.map((lang) => {
    const alternates = LANGS.map(
      (l) =>
        `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(l, route)}" />`
    ).join("\n");
    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(
      DEFAULT_LANG,
      route
    )}" />`;
    return `  <url>
    <loc>${url(lang, route)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
${alternates}
${xDefault}
  </url>`;
  }).join("\n");
}

async function fetchInsights() {
  const client = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    apiVersion: SANITY_API_VERSION,
    useCdn: true,
  });
  // Published posts only (drafts have _id starting with "drafts."), with a slug and publishedAt in the past.
  const query = `*[_type == "post"
      && !(_id in path("drafts.**"))
      && defined(slug.current)
      && defined(publishedAt)
      && publishedAt <= now()
    ]{
      "slug": slug.current,
      publishedAt,
      _updatedAt
    }`;
  try {
    const posts = await client.fetch(query);
    return Array.isArray(posts) ? posts : [];
  } catch (err) {
    console.warn(
      `⚠ Could not fetch insights from Sanity (${err?.message ?? err}). Sitemap will only include static routes.`
    );
    return [];
  }
}

const staticBlocks = ROUTES.map((route) =>
  urlBlock(route, today, META[route] ?? DEFAULT_META)
);

const posts = await fetchInsights();
const insightMeta = { priority: "0.7", changefreq: "monthly" };
const insightBlocks = posts.map((p) => {
  const lastmod = (p._updatedAt ?? p.publishedAt ?? new Date().toISOString()).slice(0, 10);
  return urlBlock(`insights/${p.slug}`, lastmod, insightMeta);
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...staticBlocks, ...insightBlocks].join("\n")}
</urlset>
`;

const outPath = resolve(__dirname, "../public/sitemap.xml");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, xml, "utf8");
console.log(
  `✓ sitemap.xml generated: ${ROUTES.length} static + ${posts.length} insights × ${LANGS.length} langs = ${
    (ROUTES.length + posts.length) * LANGS.length
  } URLs`
);

