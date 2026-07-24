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
import { HeaderSession } from "./HeaderSession";

/**
 * The family nav with registry-internal links merged in. An internal link
 * whose label matches a family entry *replaces* it in place: the registry
 * hosts Apps itself, so that entry should be a same-origin link under this
 * build's base path (and can mark itself current) rather than bouncing
 * through aprovan.com. Everything else is appended after the family.
 */
function registryNav(internal: AppNavLink[]): AppNavLink[] {
  const family = aprovanApps("Registry");
  const overrides = new Map(internal.map((link) => [link.label, link]));
  return [
    ...family.map((link) => overrides.get(link.label) ?? link),
    ...internal.filter(
      (link) => !family.some((entry) => entry.label === link.label),
    ),
  ];
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
    >
      <HeaderSession />
    </AppHeader>
  );
}
