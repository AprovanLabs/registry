import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import AstroPWA from "@vite-pwa/astro";
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

// @vite-pwa/astro derives the *service worker*'s registration scope from
// Astro's `base` automatically (see its astro:config:setup hook), but the
// web app *manifest*'s start_url/scope fields are a separate concern that
// the plugin does not infer from `base` — set them explicitly so the
// installed app opens at /registry/ (not "/") under the prod build.
const manifestScope = base.endsWith("/") ? base : `${base}/`;

// Same-origin (aprovan.com) paths this app must never let the service
// worker touch: gateway calls, SSE hook streams, and other apps' live
// pages. The SW's own scope already keeps it from *controlling*
// navigations to these paths, but pages inside our scope can still issue
// fetch()/EventSource calls to them — those pass through the active SW's
// fetch handler regardless of scope, so we deny them explicitly too.
//
// NOTE: workbox-build serializes every `runtimeCaching[].urlPattern`
// callback below via Function#toString() straight into the standalone
// sw.js it emits — the function body ships with no access to this
// module's scope. So these patterns can't be shared as a closed-over
// constant; each callback re-states the three prefixes as literal
// regexes. `navigateFallbackDenylist` is the one exception: workbox-build
// serializes each RegExp's own `.toString()` directly, so referencing
// this array there is fine.
const NETWORK_ONLY_PATTERNS = [/^\/api\//, /^\/apps\//, /^\/hooks\//];

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [
    react(),
    AstroPWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Aprovan Registry",
        short_name: "Registry",
        description:
          "Browse published UTDK packages, copy package names, inspect generated docs, and connect MCP clients.",
        start_url: manifestScope,
        scope: manifestScope,
        display: "standalone",
        background_color: "#ffffff",
        // Matches --background in the dark theme (src/styles/global.css:
        // .dark { --background: oklch(0.145 0 0); } → #0a0a0a).
        theme_color: "#0a0a0a",
        icons: [
          { src: "icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icon-512.png", sizes: "512x512", type: "image/png" },
          {
            src: "maskable-icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          { src: "apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
      },
      workbox: {
        // The catalog has 329+ package pages — do NOT precache all of them.
        // Only the core shell (top-level pages + hashed JS/CSS/font assets)
        // goes into the install-time precache; everything else (package
        // detail pages, admin/account pages, etc.) is fetched on first
        // visit and, for hashed assets, cached at runtime by the CacheFirst
        // rule below.
        globPatterns: [
          "index.html",
          "apps/index.html",
          "playground/index.html",
          "_astro/**/*.{js,css,woff2}",
        ],
        // ScriptPlayground dynamically imports its ~4MB code-editor chunk on
        // demand — it isn't referenced by playground/index.html's own
        // <script> tags, so it doesn't belong in the install-time shell and
        // would blow past the default 2MB per-file cap. It's picked up by
        // the CacheFirst _astro/* runtime rule the first time it's loaded.
        globIgnores: ["**/editor.*.js"],
        // Default 2MB cap is intentionally left as-is: no core-shell asset
        // (index/apps/playground's own JS+CSS, all well under 100KB each)
        // needs it raised.
        //
        // CRITICAL: vite-plugin-pwa defaults `navigateFallback` to the
        // precached index.html — an SPA convention that, on this MULTI-PAGE
        // site, short-circuited every in-scope navigation to the home page
        // (curl served /account/credentials fine; browsers rendered home).
        // A static multi-page site must never SPA-fallback: navigations go
        // through the NetworkFirst runtime route below instead.
        navigateFallback: null,
        navigateFallbackDenylist: NETWORK_ONLY_PATTERNS,
        runtimeCaching: [
          {
            // Explicit denylist, evaluated first: always hit the network,
            // never read or write any cache. The SW's own registration
            // scope (base path) already keeps it from *controlling*
            // navigations to these prefixes, but a controlled page under
            // our scope can still fetch()/EventSource them — this route
            // guarantees those calls pass straight through untouched.
            urlPattern: ({ url }) =>
              /^\/api\//.test(url.pathname) ||
              /^\/apps\//.test(url.pathname) ||
              /^\/hooks\//.test(url.pathname),
            handler: "NetworkOnly",
          },
          {
            // Same-origin page navigations: try the network first (so
            // deploys show up immediately) and fall back to cache when
            // offline or slow. Scope already confines this to our base
            // path; the denylist repeats above so this rule is correct
            // standalone too.
            urlPattern: ({ request, sameOrigin, url }) =>
              sameOrigin &&
              request.mode === "navigate" &&
              !/^\/api\//.test(url.pathname) &&
              !/^\/apps\//.test(url.pathname) &&
              !/^\/hooks\//.test(url.pathname),
            handler: "NetworkFirst",
            options: {
              cacheName: "registry-pages",
              networkTimeoutSeconds: 3,
              expiration: { maxEntries: 64, maxAgeSeconds: 60 * 60 * 24 },
            },
          },
          {
            // Content-hashed build assets are immutable — safe to serve
            // straight from cache and only hit the network the first time.
            urlPattern: ({ sameOrigin, url }) =>
              sameOrigin && url.pathname.includes("/_astro/"),
            handler: "CacheFirst",
            options: {
              cacheName: "registry-assets",
              expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      dedupe: ["react", "react-dom"],
    },
  },
});
