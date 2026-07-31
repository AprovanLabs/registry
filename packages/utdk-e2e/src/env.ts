/**
 * Credential loading for the UTDK E2E suite.
 *
 * Reads a dotenv file (no dependency — the format we need is a handful of
 * lines) and resolves each provider's declared auth descriptor into the single
 * shape every flow needs: an HTTP header name plus value.
 *
 * Both transports collapse to that pair:
 *   - direct SDK  → `ApiKey({ headerName, value })` from `@utdk/common/auth`
 *   - gateway     → `{ type: "api_key", name: headerName, value }` on the
 *                   `POST /tools/:provider/:operation` body
 *
 * Basic auth and OAuth are folded in here too (base64 encode / refresh-token
 * exchange) so no flow has to special-case them.
 */

import { readFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { AuthDescriptor, ProviderProbe } from "./matrix.js";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = resolve(packageRoot, "..", "..");

/**
 * Candidate credential files, in precedence order. All are gitignored by the
 * repo's `.env.*` rule; `.env.example` is the committed template.
 */
const ENV_FILES = [
  process.env["UTDK_E2E_ENV_FILE"],
  join(packageRoot, ".env"),
  join(repoRoot, ".env.e2e"),
].filter((path): path is string => typeof path === "string" && path.length > 0);

/**
 * Minimal dotenv parser: `KEY=value`, `#` comments, optional surrounding
 * quotes, and `\n` escapes inside double quotes (needed for PEM-style keys).
 */
export function parseDotenv(source: string): Record<string, string> {
  const values: Record<string, string> = {};

  for (const rawLine of source.split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const separator = line.indexOf("=");
    if (separator === -1) continue;

    const key = line.slice(0, separator).trim().replace(/^export\s+/, "");
    let value = line.slice(separator + 1).trim();

    if (value.startsWith('"') && value.endsWith('"') && value.length >= 2) {
      value = value.slice(1, -1).replace(/\\n/g, "\n");
    } else if (value.startsWith("'") && value.endsWith("'") && value.length >= 2) {
      value = value.slice(1, -1);
    }

    values[key] = value;
  }

  return values;
}

let loaded: Record<string, string> | undefined;

/**
 * Load credentials once per process. Real environment variables win over the
 * file so CI can inject secrets without writing one.
 */
export function loadEnv(): Record<string, string> {
  if (loaded) return loaded;

  const fromFiles: Record<string, string> = {};
  for (const path of ENV_FILES) {
    if (!existsSync(path)) continue;
    Object.assign(fromFiles, parseDotenv(readFileSync(path, "utf8")));
    break;
  }

  const merged: Record<string, string> = { ...fromFiles };
  for (const [key, value] of Object.entries(process.env)) {
    if (typeof value === "string" && value.length > 0) merged[key] = value;
  }

  loaded = merged;
  return merged;
}

/** Which env file (if any) supplied credentials — for diagnostics. */
export function envFileInUse(): string | undefined {
  return ENV_FILES.find((path) => existsSync(path));
}

function read(env: Record<string, string>, key: string): string | undefined {
  const value = env[key];
  // Treat the scaffold's empty assignments and obvious placeholders as absent
  // so an unfilled `.env` skips cleanly instead of failing with a 401.
  if (!value) return undefined;
  if (/^(<.*>|changeme|todo|placeholder|xxx+)$/i.test(value.trim())) return undefined;
  return value;
}

// ---------------------------------------------------------------------------
// Credential resolution
// ---------------------------------------------------------------------------

/** A resolved credential, reduced to the header every transport can carry. */
export interface ResolvedCredential {
  header: string;
  value: string;
}

export type CredentialResolution =
  | { status: "ready"; credential: ResolvedCredential | undefined }
  | { status: "missing"; missing: string[] };

/**
 * Google access tokens live an hour, so the suite stores a refresh token and
 * exchanges it per run. Cached per client-id so the twelve Google sub-providers
 * share one exchange.
 */
const accessTokenCache = new Map<string, { token: string; expiresAt: number }>();

async function exchangeRefreshToken(options: {
  cacheKey: string;
  tokenUrl: string;
  clientId: string;
  clientSecret: string;
  refreshToken: string;
}): Promise<string> {
  const cached = accessTokenCache.get(options.cacheKey);
  if (cached && Date.now() < cached.expiresAt - 60_000) return cached.token;

  const response = await fetch(options.tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: options.clientId,
      client_secret: options.clientSecret,
      refresh_token: options.refreshToken,
    }).toString(),
  });

  if (!response.ok) {
    throw new Error(
      `Refresh-token exchange failed (${response.status}): ${await response.text()}`,
    );
  }

  const data = (await response.json()) as { access_token?: string; expires_in?: number };
  if (!data.access_token) throw new Error("Refresh-token exchange returned no access_token");

  accessTokenCache.set(options.cacheKey, {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in ?? 3600) * 1_000,
  });

  return data.access_token;
}

/** Every env var a descriptor reads, for reporting and scaffold generation. */
export function credentialEnvKeys(auth: AuthDescriptor): string[] {
  switch (auth.kind) {
    case "none":
      return [];
    case "bearer":
      return [auth.env];
    case "apiKey":
      return [auth.env];
    case "basic":
      return [auth.userEnv, auth.passEnv];
    case "oauth2Refresh":
      return [auth.clientIdEnv, auth.clientSecretEnv, auth.refreshTokenEnv];
  }
}

/**
 * Resolve a provider's credential from the environment, or report exactly which
 * variables are missing so the caller can skip with a useful message.
 */
export async function resolveCredential(
  auth: AuthDescriptor,
  env: Record<string, string> = loadEnv(),
): Promise<CredentialResolution> {
  const missing = credentialEnvKeys(auth).filter((key) => read(env, key) === undefined);
  if (missing.length > 0) return { status: "missing", missing };

  switch (auth.kind) {
    case "none":
      return { status: "ready", credential: undefined };

    case "bearer":
      return {
        status: "ready",
        credential: { header: "Authorization", value: `Bearer ${read(env, auth.env)}` },
      };

    case "apiKey": {
      const raw = read(env, auth.env)!;
      return {
        status: "ready",
        credential: {
          header: auth.header,
          // Some APIs want a scheme prefix on a header that is otherwise a
          // plain key (Discord's `Bot <token>`, SendGrid's `Bearer <key>`).
          value: auth.prefix && !raw.startsWith(auth.prefix) ? `${auth.prefix}${raw}` : raw,
        },
      };
    }

    case "basic": {
      const user = read(env, auth.userEnv)!;
      const pass = read(env, auth.passEnv)!;
      const encoded = Buffer.from(`${user}:${pass}`, "utf8").toString("base64");
      return { status: "ready", credential: { header: "Authorization", value: `Basic ${encoded}` } };
    }

    case "oauth2Refresh": {
      const token = await exchangeRefreshToken({
        cacheKey: `${auth.tokenUrl}:${read(env, auth.clientIdEnv)}`,
        tokenUrl: auth.tokenUrl,
        clientId: read(env, auth.clientIdEnv)!,
        clientSecret: read(env, auth.clientSecretEnv)!,
        refreshToken: read(env, auth.refreshTokenEnv)!,
      });
      return { status: "ready", credential: { header: "Authorization", value: `Bearer ${token}` } };
    }
  }
}

/**
 * Convert a resolved credential into the gateway's ephemeral-credential body.
 * The gateway accepts `bearer_token` and `api_key`; anything header-shaped can
 * ride the `api_key` form, including our base64 Basic values.
 */
export function toGatewayCredential(
  credential: ResolvedCredential | undefined,
): { type: "bearer_token"; token: string } | { type: "api_key"; name: string; value: string } | undefined {
  if (!credential) return undefined;

  if (credential.header === "Authorization" && credential.value.startsWith("Bearer ")) {
    return { type: "bearer_token", token: credential.value.slice("Bearer ".length) };
  }

  return { type: "api_key", name: credential.header, value: credential.value };
}

// ---------------------------------------------------------------------------
// Fixtures and tenant base URLs
// ---------------------------------------------------------------------------

/**
 * Resolve a probe's fixture requirements (resource ids the probe needs) and
 * tenant base URL. Returns the missing keys instead of throwing so the test
 * can skip.
 */
export function resolveProbeInputs(
  probe: ProviderProbe,
  env: Record<string, string> = loadEnv(),
): { status: "ready"; args: Record<string, unknown>; baseUrl?: string } | { status: "missing"; missing: string[] } {
  const missing: string[] = [];
  const fixtures: Record<string, string> = {};

  for (const key of probe.needs ?? []) {
    const value = read(env, key);
    if (value === undefined) missing.push(key);
    else fixtures[key] = value;
  }

  let baseUrl: string | undefined = probe.baseUrl;
  if (probe.baseUrlEnv) {
    const value = read(env, probe.baseUrlEnv);
    if (value === undefined) missing.push(probe.baseUrlEnv);
    else baseUrl = probe.baseUrlTemplate ? probe.baseUrlTemplate.replace("{value}", value) : value;
  }

  if (missing.length > 0) return { status: "missing", missing };

  const args = typeof probe.args === "function" ? probe.args(fixtures) : (probe.args ?? {});
  return { status: "ready", args, ...(baseUrl ? { baseUrl } : {}) };
}
