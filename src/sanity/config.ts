import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { postSchema } from "./schemas/post";
import { SANITY_PROJECT_ID, SANITY_DATASET } from "@/lib/sanity";

export const sanityConfig = defineConfig({
  name: "default",
  title: "Icon Finance - Insights",
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: { types: [postSchema] },
});
