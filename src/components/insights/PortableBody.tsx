import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import { slugify } from "@/lib/sanity";

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => {
      const text = ((value?.children ?? []) as Array<{ text?: string }>)
        .map((c) => c.text ?? "")
        .join("");
      const id = slugify(text);
      return (
        <h2
          id={id}
          className="font-light pt-6 scroll-mt-28"
          style={{ fontSize: "clamp(24px,3vw,32px)", color: "#E0A776" }}
        >
          {children}
        </h2>
      );
    },
    h3: ({ children }) => (
      <h3 className="text-charcoal font-light pt-4" style={{ fontSize: "clamp(20px,2.4vw,24px)" }}>
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="my-10 py-6 px-8 bg-charcoal/[0.04] border-l-4 border-gold italic text-charcoal"
        style={{ fontSize: "20px", lineHeight: "1.6" }}
      >
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-charcoal/80 text-[16px] leading-[1.8]">{children}</p>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a href={value?.href} className="text-gold underline hover:text-gold/80" target="_blank" rel="noreferrer">
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-semibold text-charcoal">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(1200).auto("format").url()}
            alt={value.alt ?? ""}
            className="w-full h-auto"
            loading="lazy"
          />
          {value.alt && <figcaption className="text-slate text-[13px] mt-2 text-center">{value.alt}</figcaption>}
        </figure>
      );
    },
  },
};

export const PortableBody = ({ value }: { value: unknown }) => {
  if (!value) return null;
  return (
    <div className="prose-article space-y-6 text-charcoal">
      <PortableText value={value as Parameters<typeof PortableText>[0]["value"]} components={components} />
    </div>
  );
};
