/**
 * Registry top bar: the shared `@aprovan/ui/shell` AppHeader with the
 * canonical app family (Home / Chat / Apps / Registry) from `aprovanApps`,
 * registry-internal navigation, and the session area. Chat and the home page
 * render the same AppHeader off the same helper, so a new top-level
 * destination shows up on every surface at once — while the registry still
 * builds and runs standalone (the header only links out to its siblings).
 */

import { AppHeader, aprovanApps, type AppNavLink } from "@aprovan/ui/shell";
import * as React from "react";

/**
 * The family nav with registry-internal links merged in. An internal link
 * whose label matches a family entry *replaces* it in place: the registry
 * hosts Apps itself, so that entry should be a same-origin link under this
 * build's base path (and can mark itself current) rather than bouncing
 * through aprovan.com. Everything else is appended after the family.
 *
 * Exactly one entry should ever render as current: the most specific match.
 * `aprovanApps("Registry")` unconditionally marks the family's Registry
 * entry current, but `internal` links (MCP, Playground, Apps, ...) compute
 * their own `current` from the active route (see BaseLayout.astro). When one
 * of those wins, it's strictly more specific than the family entry, so the
 * Registry entry must yield — otherwise both light up together (e.g. on
 * /registry/mcp, "Registry" and "MCP" both render current). On pages with no
 * matching internal link (the registry home page, or any route none of the
 * internal links claim) nothing strips it, so Registry stays current there.
 */
function registryNav(internal: AppNavLink[]): AppNavLink[] {
  // The nav carries destinations within the working surfaces: the aprovan
  // Home and patchwork Chat entries are dropped; Apps and Registry stay.
  const family = aprovanApps("Registry").filter(
    (link) => link.label !== "Home" && link.label !== "Chat",
  );
  const overrides = new Map(internal.map((link) => [link.label, link]));
  const merged = [
    ...family.map((link) => overrides.get(link.label) ?? link),
    ...internal.filter(
      (link) => !family.some((entry) => entry.label === link.label),
    ),
  ];

  const hasMoreSpecificCurrent = internal.some((link) => link.current);
  return merged.map((link) =>
    link.label === "Registry" && link.current && hasMoreSpecificCurrent
      ? { ...link, current: false }
      : link,
  );
}

export function RegistryHeader({
  homeHref,
  links = [],
}: {
  homeHref: string;
  links?: AppNavLink[];
}) {
  return (
    <AppHeader
      homeHref={homeHref}
      links={registryNav(links)}
      logo={
        <img
          alt=""
          className="size-6"
          src="https://github.com/AprovanLabs/aprovan.com/raw/refs/heads/main/docs/assets/social-icon.png"
        />
      }
      name="registry"
    />
  );
}
