/**
 * Credential-free provider operations — what lets the public playground run
 * for a signed-out visitor.
 *
 * Some provider endpoints are readable by anyone (GitHub's public REST API is
 * the canonical case: CORS-enabled, 60 req/hour per client IP). Those calls
 * need no workspace credential, so routing them through the gateway would buy
 * nothing and would force a sign-in gate onto the registry's primary CTA.
 * Instead the browser dispatches them straight to the provider — the gateway
 * keeps its authentication exactly as strict as it is today, and no
 * server-side proxy is introduced.
 *
 * Two halves live here:
 *
 *  - {@link CREDENTIAL_FREE_ALLOWLIST} — the *policy*: which
 *    `provider` + `sdkPath` pairs we assert are safe to call anonymously.
 *    Hand-curated and deliberately small; adding a provider is a data edit.
 *  - {@link CredentialFreeManifest} — the *routing table*: base URL, HTTP
 *    method, path template and parameter locations, joined at build time from
 *    the generated OpenAPI documents in `packages/utdk/<provider>/openapi.json`
 *    (see `pages/catalog/credential-free.json.ts`). Nothing about any specific
 *    provider is hardcoded in the dispatch path.
 *
 * `InterfaceCompat.credentialless` in `@aprovan/registry-server` expresses the
 * same idea server-side, but no catalog entry sets it today, so the browser
 * cannot derive this from catalog data yet. When the catalog starts declaring
 * it, this allowlist should become a fallback for entries the catalog does not
 * cover rather than the source of truth.
 */

export type ParameterLocation = "query" | "path" | "header" | "cookie";

export interface CredentialFreeParameter {
  name: string;
  location: ParameterLocation;
}

/** One dispatchable credential-free operation, resolved against its spec. */
export interface CredentialFreeRoute {
  /** Registry provider id — the `tools.<namespace>` root. */
  provider: string;
  /** UTDK sdk path, e.g. `users.getByUsername`. */
  operation: string;
  /** Uppercase HTTP method. */
  method: string;
  /** API root from the spec's `servers[0].url`, no trailing slash. */
  baseUrl: string;
  /** Path template with `{name}` placeholders, e.g. `/users/{username}`. */
  path: string;
  parameters: CredentialFreeParameter[];
  /** Request-body property names (empty for GET/HEAD). */
  bodyFields: string[];
  /**
   * Extra request headers. Kept to CORS-safelisted headers only so anonymous
   * calls never trigger a preflight the provider may not answer.
   */
  headers?: Record<string, string>;
  /** Shown to the user when the provider rate-limits the anonymous call. */
  rateLimitHint?: string;
}

export interface CredentialFreeManifest {
  routes: CredentialFreeRoute[];
  generatedAt: string;
}

export interface CredentialFreeProviderPolicy {
  /** Registry provider id — must match a directory in `packages/utdk/`. */
  provider: string;
  /**
   * CORS-safelisted headers only (`Accept`, `Accept-Language`,
   * `Content-Language`, `Range`, and simple `Content-Type` values). Anything
   * else forces an OPTIONS preflight, which most public APIs will reject.
   */
  headers?: Record<string, string>;
  rateLimitHint?: string;
  /** UTDK sdk paths callable with no credential. */
  operations: string[];
}

/**
 * The allowlist. Every entry is a claim that the operation returns useful data
 * to an anonymous caller — verified against the live API, not inferred.
 *
 * Read-only GETs only, on purpose: an anonymous write has nowhere to write to,
 * and a JSON request body would force a CORS preflight.
 */
export const CREDENTIAL_FREE_ALLOWLIST: CredentialFreeProviderPolicy[] = [
  {
    provider: "github",
    // `Accept` is CORS-safelisted, so this stays a simple request.
    headers: { Accept: "application/vnd.github+json" },
    rateLimitHint:
      "GitHub allows 60 unauthenticated requests per hour per IP address. Sign in and connect a GitHub credential to raise the limit, or try again later.",
    operations: [
      "users.getByUsername",
      "users.listFollowersForUser",
      "users.listFollowingForUser",
      "repos.get",
      "repos.listForUser",
      "repos.listCommits",
      "repos.listContributors",
      "repos.listLanguages",
      "repos.listReleases",
      "repos.listTags",
      "repos.getReadme",
      "orgs.get",
      "orgs.listForUser",
      "gists.listForUser",
      "licenses.get",
      "search.repos",
      "search.users",
      "rateLimit.get",
      "meta.get",
    ],
  },
];

/** Stable key for the routing table: `provider.sdkPath`. */
export function routeKey(provider: string, operation: string): string {
  return `${provider}.${operation}`;
}

// ---------------------------------------------------------------------------
// Static analysis of which namespaces a script needs a credential for
// ---------------------------------------------------------------------------

export interface NamespaceUsage {
  /** Operation sdk paths reached through `tools.<ns>.a.b(...)`. */
  operations: Set<string>;
  /**
   * True when the namespace is touched in a way we cannot resolve statically
   * (aliased into a variable, passed around, computed member access). Such a
   * namespace is treated as credentialed — we cannot prove otherwise.
   */
  opaque: boolean;
}

/** Blank out string literals and comments, preserving offsets. */
function blankLiteralsAndComments(source: string): string {
  let out = "";
  let i = 0;
  while (i < source.length) {
    const ch = source[i]!;
    const next = source[i + 1];

    if (ch === "/" && next === "/") {
      while (i < source.length && source[i] !== "\n") {
        out += " ";
        i += 1;
      }
      continue;
    }
    if (ch === "/" && next === "*") {
      out += "  ";
      i += 2;
      while (i < source.length && !(source[i] === "*" && source[i + 1] === "/")) {
        out += source[i] === "\n" ? "\n" : " ";
        i += 1;
      }
      if (i < source.length) {
        out += "  ";
        i += 2;
      }
      continue;
    }
    if (ch === "'" || ch === '"' || ch === "`") {
      // Template literals keep their `${...}` interpolations live so a call
      // inside one is still seen.
      const quote = ch;
      out += " ";
      i += 1;
      while (i < source.length) {
        if (source[i] === "\\") {
          out += "  ";
          i += 2;
          continue;
        }
        if (quote === "`" && source[i] === "$" && source[i + 1] === "{") {
          out += "  ";
          i += 2;
          let depth = 1;
          while (i < source.length && depth > 0) {
            if (source[i] === "{") depth += 1;
            if (source[i] === "}") depth -= 1;
            out += depth === 0 ? " " : source[i]!;
            i += 1;
          }
          continue;
        }
        const closing = source[i] === quote;
        out += source[i] === "\n" ? "\n" : " ";
        i += 1;
        if (closing) break;
      }
      continue;
    }

    out += ch;
    i += 1;
  }
  return out;
}

const TOOLS_ROOT = /\btools\s*\.\s*([A-Za-z_$][\w$]*)/gu;
const TOOLS_CALL =
  /\btools\s*\.\s*([A-Za-z_$][\w$]*)((?:\s*\.\s*[A-Za-z_$][\w$]*)+)\s*\(/gu;

/**
 * Which operations each `tools.<namespace>` is used for, and whether any use
 * escapes static resolution. Conservative by construction: anything it cannot
 * pin down is reported as `opaque`, which callers must treat as "needs a
 * credential".
 */
export function scanNamespaceUsage(source: string): Map<string, NamespaceUsage> {
  const code = blankLiteralsAndComments(source);
  const usage = new Map<string, NamespaceUsage>();
  const entry = (namespace: string): NamespaceUsage => {
    let existing = usage.get(namespace);
    if (!existing) {
      existing = { operations: new Set<string>(), opaque: false };
      usage.set(namespace, existing);
    }
    return existing;
  };

  const resolved = new Set<number>();
  TOOLS_CALL.lastIndex = 0;
  for (let match = TOOLS_CALL.exec(code); match; match = TOOLS_CALL.exec(code)) {
    const [, namespace, tail] = match;
    resolved.add(match.index);
    const operation = tail!
      .split(".")
      .map((segment) => segment.trim())
      .filter(Boolean)
      .join(".");
    entry(namespace!).operations.add(operation);
  }

  TOOLS_ROOT.lastIndex = 0;
  for (let match = TOOLS_ROOT.exec(code); match; match = TOOLS_ROOT.exec(code)) {
    const namespace = match[1]!;
    const record = entry(namespace);
    if (!resolved.has(match.index)) record.opaque = true;
  }

  // `tools[expr]` — dynamic namespace access. `parseScriptDependencies`
  // rejects it before we ever get here, but if it did slip through we can no
  // longer prove anything about any namespace.
  if (/\btools\s*\[/u.test(code)) {
    for (const record of usage.values()) record.opaque = true;
  }

  return usage;
}

/**
 * Namespaces in `source` that this run cannot satisfy without a workspace
 * credential. Empty means the whole script is dispatchable anonymously.
 *
 * `extraNamespaces` folds in the runtime dependency list so a namespace the
 * scanner missed still counts as credentialed.
 */
export function namespacesNeedingCredentials(
  source: string,
  isCredentialFree: (provider: string, operation: string) => boolean,
  extraNamespaces: Iterable<string> = [],
): string[] {
  const usage = scanNamespaceUsage(source);
  const needed = new Set<string>();

  for (const [namespace, record] of usage) {
    if (record.opaque || record.operations.size === 0) {
      needed.add(namespace);
      continue;
    }
    for (const operation of record.operations) {
      if (!isCredentialFree(namespace, operation)) needed.add(namespace);
    }
  }

  for (const namespace of extraNamespaces) {
    if (!usage.has(namespace)) needed.add(namespace);
  }

  return [...needed].sort();
}
