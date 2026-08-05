/**
 * Hosted startup wiring for platform OAuth apps (platform-oauth-apps §2).
 *
 * Reads `PLATFORM_OAUTH_<PROVIDER>_CLIENT_{ID,SECRET}` from the environment
 * (KMS-wrapped secrets supported — see `unwrapPlatformOAuthSecret`) and wires
 * the §1 lookup seam. Self-host deployments with `platformApp: true` in the
 * public registry but no env secrets boot cleanly and fall back to BYO.
 */

import { loadRegistryProviders } from "@aprovan/utdk-bundler/provider";
import {
  wirePlatformOAuthSecrets,
  type PlatformSecretAccessAudit,
} from "../credentials/platform-secrets.js";

export interface WirePlatformOAuthAtStartupOptions {
  env?: NodeJS.ProcessEnv;
  log?: (line: string) => void;
  accessAudit?: PlatformSecretAccessAudit;
}

/** Load registry flags + env secrets and wire `setPlatformOAuthLookup`. */
export async function wirePlatformOAuthAtStartup(
  options: WirePlatformOAuthAtStartupOptions = {},
): Promise<void> {
  const providers = await loadRegistryProviders();
  const platformProviders = providers
    .filter((entry) => entry.platformApp === true)
    .map((entry) => entry.name);
  await wirePlatformOAuthSecrets({
    ...(options.env !== undefined ? { env: options.env } : {}),
    platformProviders,
    ...(options.log !== undefined ? { log: options.log } : {}),
    ...(options.accessAudit !== undefined ? { accessAudit: options.accessAudit } : {}),
  });
}
