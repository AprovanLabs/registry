import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

// Deploy targets:
//  - aprovan.com/registry → PUBLIC_SITE_URL=https://aprovan.com PUBLIC_BASE_PATH=/registry
//  - GitHub Pages         → GITHUB_ACTIONS defaults below (legacy)
//  - local dev            → base "/"
const site =
  process.env.PUBLIC_SITE_URL ?? "https://aprovanlabs.github.io/registry";
const base =
  process.env.PUBLIC_BASE_PATH ?? (isGithubActions ? "/registry" : "/");

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      dedupe: ["react", "react-dom"],
    },
  },
});
