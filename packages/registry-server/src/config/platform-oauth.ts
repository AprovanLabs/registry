/**
 * Hosted startup wiring for platform OAuth apps (platform-oauth-apps §2).
 *
 * Reads `PLATFORM_OAUTH_<PROVIDER>_CLIENT_{ID,SECRET}` from the environment
 * (KMS-wrapped secrets supported — see `unwrapPlatformOAuthSecret`) and wires
 * the §1 lookup seam. Self-host deployments with `platformApp: true` in the
 * public registry but no env secrets boot cleanly and fall back to BYO.
 */

import {
  getPlatformOAuthSecretStore,
  wirePlatformOAuthSecrets,
  type PlatformSecretAccessAudit,
} from "../credentials/platform-secrets.js";
import { loadRegistryManifest } from "./registry-manifest.js";

export interface WirePlatformOAuthAtStartupOptions {
  env?: NodeJS.ProcessEnv;
  log?: (line: string) => void;
  accessAudit?: PlatformSecretAccessAudit;
}

/**
 * Load registry flags + env secrets and wire `setPlatformOAuthLookup`.
 * Returns the subset of `platformApp`-flagged providers that actually got a
 * secret loaded — the providers that will really see `origin: "platform"`
 * calls, and therefore need a rate-limit pool (§4, `server.ts`).
 */
export async function wirePlatformOAuthAtStartup(
  options: WirePlatformOAuthAtStartupOptions = {},
): Promise<string[]> {
  const providers = await loadRegistryManifest(options.env);
  const platformProviders = providers
    .filter((entry) => entry.platformApp === true)
    .map((entry) => entry.name);
  await wirePlatformOAuthSecrets({
    ...(options.env !== undefined ? { env: options.env } : {}),
    platformProviders,
    ...(options.log !== undefined ? { log: options.log } : {}),
    ...(options.accessAudit !== undefined ? { accessAudit: options.accessAudit } : {}),
  });
  const store = getPlatformOAuthSecretStore();
  return platformProviders.filter((provider) => store.has(provider));
}
