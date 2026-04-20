import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { spawnSync } from "node:child_process";
import { componentTagger } from "lovable-tagger";

// Generates public/sitemap.xml before the build starts.
const sitemapPlugin = (): Plugin => ({
  name: "generate-sitemap",
  apply: "build",
  buildStart() {
    const result = spawnSync(
      process.execPath,
      [path.resolve(__dirname, "scripts/generate-sitemap.mjs")],
      { stdio: "inherit" }
    );
    if (result.status !== 0) {
      this.error("Failed to generate sitemap.xml");
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), sitemapPlugin(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "react/compiler-runtime": path.resolve(__dirname, "./src/shims/react-compiler-runtime.js"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
