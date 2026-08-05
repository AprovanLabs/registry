/**
 * Platform OAuth app secrets (platform-oauth-apps tech-plan D2/D4).
 *
 * Secrets are loaded from `PLATFORM_OAUTH_<PROVIDER>_CLIENT_ID` /
 * `PLATFORM_OAUTH_<PROVIDER>_CLIENT_SECRET` at hosted startup only. They live
 * under the `platform-oauth:` key prefix in an in-memory store — never in the
 * tenant credential table — and are accessed only through this module.
 */

import { getCredentialCipher } from "./cipher.js";
import { setPlatformOAuthLookup, type PlatformOAuthCredentials } from "./oauth.js";

/** Storage key prefix — tenant credential reads must never reach this namespace. */
export const PLATFORM_OAUTH_STORE_PREFIX = "platform-oauth:";

export interface PlatformOAuthSecretRow {
  provider: string;
  clientId: string;
  clientSecret: string;
}

export type PlatformSecretAccessAudit = (provider: string, storeKey: string) => void;

class PlatformOAuthSecretStore {
  private readonly secrets = new Map<string, PlatformOAuthSecretRow>();
  private accessAudit: PlatformSecretAccessAudit | undefined;

  setAccessAudit(fn: PlatformSecretAccessAudit): void {
    this.accessAudit = fn;
  }

  put(provider: string, clientId: string, clientSecret: string): void {
    this.secrets.set(`${PLATFORM_OAUTH_STORE_PREFIX}${provider}`, {
      provider,
      clientId,
      clientSecret,
    });
  }

  get(provider: string): PlatformOAuthSecretRow | undefined {
    const storeKey = `${PLATFORM_OAUTH_STORE_PREFIX}${provider}`;
    const row = this.secrets.get(storeKey);
    if (row) {
      this.accessAudit?.(provider, storeKey);
    }
    return row;
  }

  clear(): void {
    this.secrets.clear();
  }

  /** Test helper — store keys only (prefix + provider id, no secret material). */
  keys(): string[] {
    return [...this.secrets.keys()];
  }
}

let secretStore = new PlatformOAuthSecretStore();

export function getPlatformOAuthSecretStore(): PlatformOAuthSecretStore {
  return secretStore;
}

export function resetPlatformOAuthSecretStore(): void {
  secretStore.clear();
  secretStore = new PlatformOAuthSecretStore();
}

function providerToEnvSuffix(provider: string): string {
  return provider.toUpperCase().replace(/\//g, "_");
}

export function platformOAuthEnvKeys(provider: string): {
  clientId: string;
  clientSecret: string;
} {
  const suffix = providerToEnvSuffix(provider);
  return {
    clientId: `PLATFORM_OAUTH_${suffix}_CLIENT_ID`,
    clientSecret: `PLATFORM_OAUTH_${suffix}_CLIENT_SECRET`,
  };
}

/**
 * Unwrap a platform OAuth client secret from env. Accepts plaintext (local),
 * credential-cipher envelopes (`enc:v1:`), or a KMS ciphertext blob (base64).
 */
export async function unwrapPlatformOAuthSecret(raw: string): Promise<string> {
  const trimmed = raw.trim();
  if (!trimmed) return trimmed;
  if (trimmed.startsWith("enc:v1:")) {
    return getCredentialCipher().decrypt(trimmed);
  }
  const kmsKeyId = process.env["CREDENTIALS_KMS_KEY_ID"];
  if (kmsKeyId && /^[A-Za-z0-9+/]+=*$/.test(trimmed) && trimmed.length >= 44) {
    try {
      const { KMSClient, DecryptCommand } = await import("@aws-sdk/client-kms");
      const client = new KMSClient({});
      const result = await client.send(
        new DecryptCommand({ CiphertextBlob: Buffer.from(trimmed, "base64") }),
      );
      return Buffer.from(result.Plaintext!).toString("utf8");
    } catch {
      // Not a KMS blob — treat as plaintext.
    }
  }
  return trimmed;
}

export interface WirePlatformOAuthOptions {
  env?: NodeJS.ProcessEnv;
  /** Provider ids flagged `platformApp` in registry.json. */
  platformProviders: string[];
  log?: (line: string) => void;
  accessAudit?: PlatformSecretAccessAudit;
}

const loggedMissingSecrets = new Set<string>();

export function resetPlatformOAuthStartupLogs(): void {
  loggedMissingSecrets.clear();
}

/**
 * Load platform OAuth secrets from env for flagged providers and wire
 * `setPlatformOAuthLookup`. Providers flagged without secrets log once at
 * startup and fall through to BYO — boot never fails (self-host case).
 */
export async function wirePlatformOAuthSecrets(options: WirePlatformOAuthOptions): Promise<void> {
  const env = options.env ?? process.env;
  const log = options.log ?? ((line) => process.stderr.write(`${line}\n`));
  if (options.accessAudit) {
    secretStore.setAccessAudit(options.accessAudit);
  }

  for (const provider of options.platformProviders) {
    const keys = platformOAuthEnvKeys(provider);
    const clientId = env[keys.clientId];
    const clientSecretRaw = env[keys.clientSecret];
    if (clientId && clientSecretRaw) {
      const clientSecret = await unwrapPlatformOAuthSecret(clientSecretRaw);
      secretStore.put(provider, clientId.trim(), clientSecret);
      log(
        JSON.stringify({
          ts: new Date().toISOString(),
          type: "platform_oauth_secret_loaded",
          provider,
          key: `${PLATFORM_OAUTH_STORE_PREFIX}${provider}`,
        }),
      );
    } else if (!loggedMissingSecrets.has(provider)) {
      loggedMissingSecrets.add(provider);
      log(
        JSON.stringify({
          ts: new Date().toISOString(),
          type: "platform_oauth_secret_missing",
          provider,
          message:
            `Provider ${provider} is flagged platformApp but no PLATFORM_OAUTH_* secret is configured — ` +
            "tenants must supply their own OAuth app (BYO).",
        }),
      );
    }
  }

  setPlatformOAuthLookup((provider): PlatformOAuthCredentials | undefined => {
    const row = secretStore.get(provider);
    if (!row) return undefined;
    return { clientId: row.clientId, clientSecret: row.clientSecret };
  });
}
