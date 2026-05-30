/**
 * Named API keys for programmatic callers.
 *
 * An API key lets a non-human caller authenticate with the gateway without
 * knowing the admin secret.  Each key has:
 *   - a human-readable name
 *   - a stable callerId (used for permission grants)
 *   - an opaque secret value (shown once at creation; stored as a SHA-256 hash)
 *   - optional scoped permissions baked in at creation time
 *
 * Callers exchange the key secret for a JWT via POST /auth/token/apikey.
 */

import { randomBytes, createHash } from "crypto";
import { readFileSync, writeFileSync, existsSync } from "fs";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ApiKey {
  id: string;
  workspaceId: string;
  name: string;
  /** Stable caller identity used in permission grants */
  callerId: string;
  /** SHA-256 hex of the raw secret (never stored plain) */
  secretHash: string;
  createdAt: string;
  createdBy: string;
  /** ISO expiry date, or null = never expires */
  expiresAt: string | null;
}

/** Returned once at creation, then discarded from the store */
export interface ApiKeyWithSecret extends ApiKey {
  secret: string;
}

export interface CreateApiKeyInput {
  name: string;
  createdBy: string;
  /** Seconds until expiry; omit / 0 = never */
  expiresInSeconds?: number;
}

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

interface SerializedStore {
  keys: ApiKey[];
}

export class ApiKeyStore {
  private readonly store: Map<string, ApiKey> = new Map();
  private readonly storePath: string | undefined;

  constructor(storePath?: string) {
    this.storePath = storePath;
    if (storePath && existsSync(storePath)) {
      this.load(storePath);
    }
  }

  private load(path: string): void {
    try {
      const raw = readFileSync(path, "utf8");
      const data = JSON.parse(raw) as SerializedStore;
      for (const key of data.keys) {
        this.store.set(key.id, key);
      }
    } catch {
      // Start fresh on parse error
    }
  }

  private persist(): void {
    if (!this.storePath) return;
    const data: SerializedStore = { keys: Array.from(this.store.values()) };
    writeFileSync(this.storePath, JSON.stringify(data, null, 2), "utf8");
  }

  private makeId(): string {
    return randomBytes(12).toString("hex");
  }

  private hashSecret(secret: string): string {
    return createHash("sha256").update(secret).digest("hex");
  }

  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------

  create(workspaceId: string, input: CreateApiKeyInput): ApiKeyWithSecret {
    const secret = `utdk_${randomBytes(24).toString("hex")}`;
    const id = this.makeId();
    const callerId = `apikey:${id}`;
    const expiresAt =
      input.expiresInSeconds && input.expiresInSeconds > 0
        ? new Date(Date.now() + input.expiresInSeconds * 1000).toISOString()
        : null;

    const key: ApiKey = {
      id,
      workspaceId,
      name: input.name,
      callerId,
      secretHash: this.hashSecret(secret),
      createdAt: new Date().toISOString(),
      createdBy: input.createdBy,
      expiresAt,
    };

    this.store.set(id, key);
    this.persist();

    return { ...key, secret };
  }

  list(workspaceId: string): ApiKey[] {
    const results: ApiKey[] = [];
    for (const key of this.store.values()) {
      if (key.workspaceId === workspaceId) results.push(key);
    }
    return results;
  }

  revoke(workspaceId: string, id: string): boolean {
    const key = this.store.get(id);
    if (!key || key.workspaceId !== workspaceId) return false;
    this.store.delete(id);
    this.persist();
    return true;
  }

  /**
   * Verify a raw secret and return the matching key (if valid and not expired).
   */
  verify(workspaceId: string, secret: string): ApiKey | null {
    const hash = this.hashSecret(secret);
    for (const key of this.store.values()) {
      if (key.workspaceId !== workspaceId) continue;
      if (key.secretHash !== hash) continue;
      if (key.expiresAt && new Date(key.expiresAt) < new Date()) return null;
      return key;
    }
    return null;
  }
}

// ---------------------------------------------------------------------------
// Singleton
// ---------------------------------------------------------------------------

let _store: ApiKeyStore | undefined;

export function getApiKeyStore(): ApiKeyStore {
  if (!_store) {
    const storePath = process.env["GATEWAY_APIKEYS_PATH"];
    _store = new ApiKeyStore(storePath);
  }
  return _store;
}

export function resetApiKeyStore(): void {
  _store = undefined;
}
