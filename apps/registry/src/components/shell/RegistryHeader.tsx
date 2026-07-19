/**
 * Registry top bar: the shared `@aprovan/ui/shell` AppHeader with
 * registry-internal navigation, the app-family switch (Home / Chat), and the
 * session area. Chat and the home page render the same AppHeader, so all
 * three surfaces share one shell — while the registry still builds and runs
 * standalone (the header only links out to its siblings).
 */

import { AppHeader, type AppNavLink } from "@aprovan/ui/shell";
import * as React from "react";
import { HeaderSession } from "./HeaderSession";

const APP_FAMILY: AppNavLink[] = [
  { label: "Home", href: "https://aprovan.com/" },
  { label: "Chat", href: "https://aprovan.com/chat/" },
];

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
      links={[...links, ...APP_FAMILY]}
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
