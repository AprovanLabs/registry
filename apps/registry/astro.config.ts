import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: "https://aprovanlabs.github.io/registry",
  base: isGithubActions ? "/registry" : "/",
  output: "static",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
