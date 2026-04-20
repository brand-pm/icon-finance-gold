import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const SANITY_PROJECT_ID = "yqrl1o3x";
export const SANITY_DATASET = "production";
export const SANITY_API_VERSION = "2024-01-01";

export const sanityClient: SanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0];

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export type Category = "wealth" | "family" | "structuring" | "ma" | "special";

export interface PostListItem {
  _id: string;
  title: string;
  slug: string;
  category: Category;
  coverImage?: SanityImageSource;
  excerpt?: string;
  readTime: number;
  publishedAt: string;
}

export interface Post extends PostListItem {
  tableOfContents?: string[];
  body?: unknown;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  wealth: "Wealth Management",
  family: "Family Office",
  structuring: "Structuring & Tax",
  ma: "M&A & Corporate",
  special: "Special Solutions",
};

export function formatPostDate(iso: string, readTime: number): string {
  const d = new Date(iso);
  const date = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  return `${date} · ${readTime} min read`;
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
