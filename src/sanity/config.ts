import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { documentInternationalization } from "@sanity/document-internationalization";
import { postSchema } from "./schemas/post";
import { SANITY_PROJECT_ID, SANITY_DATASET } from "@/lib/sanity";

export const sanityConfig = defineConfig({
  name: "default",
  title: "Icon Finance - Insights",
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  basePath: "/studio",
  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: "en", title: "English" },
        { id: "ru", title: "Русский" },
        { id: "uk", title: "Українська" },
        { id: "pl", title: "Polski" },
      ],
      schemaTypes: ["post"],
    }),
  ],
  schema: { types: [postSchema] },
});
