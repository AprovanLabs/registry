/**
 * Pure URL-style resource-pattern matcher (iw9-c resource-grants).
 *
 * Shape cf. Cloudflare OS `matchesResourceUrlPattern`: literal segments,
 * `*` = one segment, `**` / trailing `*` = suffix wildcard, case-insensitive
 * host. No regex, no network I/O.
 */

/** Split a host into DNS labels (empty host → empty list). */
function hostLabels(host: string): string[] {
  if (!host) return [];
  return host.split(".").filter((label) => label.length > 0);
}

/** Split a path into segments, dropping empty pieces from leading/trailing `/`. */
function pathSegments(pathname: string): string[] {
  if (!pathname || pathname === "/") return [];
  return pathname.split("/").filter((segment) => segment.length > 0);
}

/**
 * Match host labels: `*` matches exactly one label; literals compare
 * case-insensitively. No partial-label matches.
 */
function matchHost(patternHost: string, resourceHost: string): boolean {
  const pattern = hostLabels(patternHost.toLowerCase());
  const resource = hostLabels(resourceHost.toLowerCase());
  if (pattern.length !== resource.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i]!;
    const r = resource[i]!;
    if (p === "*") continue;
    if (p !== r) return false;
  }
  return true;
}

/**
 * Match path segments. `*` matches one segment; `**` or a trailing `*`
 * (final segment is exactly `*`) matches zero or more remaining segments.
 * Literals must equal a whole segment — never a prefix/suffix of one.
 */
function matchPath(patternPath: string, resourcePath: string): boolean {
  const pattern = pathSegments(patternPath);
  const resource = pathSegments(resourcePath);
  return matchSegments(pattern, resource);
}

function matchSegments(pattern: string[], resource: string[]): boolean {
  let pi = 0;
  let ri = 0;
  while (pi < pattern.length && ri < resource.length) {
    const p = pattern[pi]!;
    const trailingSuffix =
      p === "**" || (p === "*" && pi === pattern.length - 1);
    if (trailingSuffix) {
      // Consume the rest of the resource; any further pattern segments fail.
      return pi === pattern.length - 1;
    }
    if (p === "*") {
      pi += 1;
      ri += 1;
      continue;
    }
    if (p !== resource[ri]) return false;
    pi += 1;
    ri += 1;
  }
  if (pi < pattern.length) {
    const rest = pattern.slice(pi);
    // Remaining pattern may only be a single suffix wildcard.
    return rest.length === 1 && (rest[0] === "**" || rest[0] === "*");
  }
  return ri === resource.length;
}

function tryParseUrl(value: string): URL | undefined {
  try {
    return new URL(value);
  } catch {
    return undefined;
  }
}

/**
 * Return true when `resource` is covered by `pattern`.
 *
 * Both sides prefer URL parsing (scheme + host + path). Non-URL strings fall
 * back to `/`-segment matching on the raw string (e.g. opaque identifiers).
 */
export function matchesResourcePattern(pattern: string, resource: string): boolean {
  if (pattern === resource) return true;

  const patternUrl = tryParseUrl(pattern);
  const resourceUrl = tryParseUrl(resource);

  if (patternUrl && resourceUrl) {
    if (patternUrl.protocol.toLowerCase() !== resourceUrl.protocol.toLowerCase()) {
      return false;
    }
    if (!matchHost(patternUrl.hostname, resourceUrl.hostname)) return false;
    // mailto: and similar put the address in pathname; username/password unused.
    return matchPath(patternUrl.pathname, resourceUrl.pathname);
  }

  // Opaque / non-URL patterns: treat the whole string as a path of segments.
  return matchSegments(pathSegments(pattern), pathSegments(resource));
}
