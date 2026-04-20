import { defineField, defineType } from "sanity";

export const postSchema = defineType({
  name: "post",
  title: "Insight Article",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (R) => R.required().max(200) }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Wealth Management", value: "wealth" },
          { title: "Family Office", value: "family" },
          { title: "Structuring & Tax", value: "structuring" },
          { title: "M&A & Corporate", value: "ma" },
          { title: "Special Solutions", value: "special" },
        ],
        layout: "dropdown",
      },
      validation: (R) => R.required(),
    }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3, validation: (R) => R.max(300) }),
    defineField({
      name: "readTime",
      title: "Read Time (minutes)",
      type: "number",
      validation: (R) => R.required().min(1).max(60),
    }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime", validation: (R) => R.required() }),
    defineField({
      name: "tableOfContents",
      title: "Table of Contents",
      type: "array",
      of: [{ type: "string" }],
      description: "Section headings shown in the sidebar TOC",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [{ name: "href", type: "url", title: "URL" }],
              },
            ],
          },
        },
        { type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string", title: "Alt text" }] },
      ],
    }),
  ],
  preview: {
    select: { title: "title", media: "coverImage", subtitle: "category" },
  },
});
