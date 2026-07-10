/**
 * Persistent token cache for @utdk/cli Cognito auth.
 *
 * Stores the Cognito refresh/access token under
 *   ${XDG_STATE_HOME:-~/.local/state}/utdk/tokens.json
 * with 0600 permissions (owner-read-write only).
 */

import { existsSync, mkdirSync, unlinkSync, writeFileSync } from "fs";
import { readFileSync } from "fs";
import { homedir } from "os";
import { dirname, join } from "path";

export interface CachedTokens {
  accessToken: string;
  refreshToken: string;
  idToken?: string;
  /** Unix timestamp (seconds) at which accessToken expires. */
  expiresAt: number;
}

function getCachePath(): string {
  const stateHome =
    process.env["XDG_STATE_HOME"] ?? join(homedir(), ".local", "state");
  return join(stateHome, "utdk", "tokens.json");
}

/** Read cached tokens; returns undefined if the cache is missing or corrupt. */
export function readTokens(): CachedTokens | undefined {
  const cachePath = getCachePath();
  if (!existsSync(cachePath)) return undefined;
  try {
    const raw = readFileSync(cachePath, "utf-8");
    return JSON.parse(raw) as CachedTokens;
  } catch {
    return undefined;
  }
}

/** Persist tokens to disk with 0600 permissions. */
export function writeTokens(tokens: CachedTokens): void {
  const cachePath = getCachePath();
  const cacheDir = dirname(cachePath);
  if (!existsSync(cacheDir)) {
    mkdirSync(cacheDir, { recursive: true, mode: 0o700 });
  }
  writeFileSync(cachePath, JSON.stringify(tokens, null, 2), {
    mode: 0o600,
    encoding: "utf-8",
  });
}

/** Delete the token cache file (logout). */
export function clearTokens(): void {
  const cachePath = getCachePath();
  if (existsSync(cachePath)) {
    unlinkSync(cachePath);
  }
}

/** True when accessToken has expired (or will expire within 60 seconds). */
export function isExpired(tokens: CachedTokens): boolean {
  return Math.floor(Date.now() / 1000) >= tokens.expiresAt - 60;
}
