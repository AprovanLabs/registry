/**
 * Credential storage with AES-256-GCM encryption.
 *
 * Each workspace has a key derived from `GATEWAY_WORKSPACE_KEY` env var.
 * Credentials are encrypted at rest; the plaintext is never persisted.
 *
 * Supported credential types: bearer_token, api_key, oauth2_client, oauth2_authcode
 *
 * Storage: in-memory by default; opt-in file persistence via GATEWAY_STORE_PATH.
 */

import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from "crypto";
import { readFileSync, writeFileSync, existsSync } from "fs";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type CredentialType =
  | "bearer_token"
  | "api_key"
  | "oauth2_client"
  | "oauth2_authcode";

export interface BearerTokenPayload {
  type: "bearer_token";
  token: string;
}

export interface ApiKeyPayload {
  type: "api_key";
  value: string;
  /** Header to inject (default: X-Api-Key) */
  headerName?: string;
}

export interface OAuth2ClientPayload {
  type: "oauth2_client";
  clientId: string;
  clientSecret: string;
  tokenUrl: string;
  scopes?: string[];
}

export interface OAuth2AuthCodePayload {
  type: "oauth2_authcode";
  clientId: string;
  clientSecret: string;
  tokenUrl: string;
  code: string;
  redirectUri: string;
  codeVerifier?: string;
  scopes?: string[];
}

export type CredentialPayload =
  | BearerTokenPayload
  | ApiKeyPayload
  | OAuth2ClientPayload
  | OAuth2AuthCodePayload;

export interface Credential {
  id: string;
  workspaceId: string;
  provider: string;
  label?: string;
  type: CredentialType;
  /** AES-256-GCM encrypted JSON of CredentialPayload */
  encryptedPayload: string;
  /** Base64 IV used during encryption */
  iv: string;
  /** Base64 auth tag from GCM */
  authTag: string;
  createdAt: string;
  updatedAt: string;
}

export interface CredentialInput {
  provider: string;
  label?: string;
  payload: CredentialPayload;
}

export interface CredentialRecord {
  id: string;
  workspaceId: string;
  provider: string;
  label?: string;
  type: CredentialType;
  createdAt: string;
  updatedAt: string;
}

// ---------------------------------------------------------------------------
// Crypto helpers
// ---------------------------------------------------------------------------

const ALGORITHM = "aes-256-gcm";
const KEY_LENGTH = 32; // bytes for AES-256
const IV_LENGTH = 12;  // bytes (96-bit IV recommended for GCM)
const SALT = "utdk-gateway-v1"; // fixed salt; per-workspace keys differ by workspaceKey content

function deriveKey(workspaceKey: string): Buffer {
  return scryptSync(workspaceKey, SALT, KEY_LENGTH);
}

function encrypt(plaintext: string, key: Buffer): { iv: string; ciphertext: string; authTag: string } {
  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv(ALGORITHM, key, iv);
  const encrypted = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  return {
    iv: iv.toString("base64"),
    ciphertext: encrypted.toString("base64"),
    authTag: cipher.getAuthTag().toString("base64"),
  };
}

function decrypt(ciphertext: string, iv: string, authTag: string, key: Buffer): string {
  const decipher = createDecipheriv(ALGORITHM, key, Buffer.from(iv, "base64"));
  decipher.setAuthTag(Buffer.from(authTag, "base64"));
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(ciphertext, "base64")),
    decipher.final(),
  ]);
  return decrypted.toString("utf8");
}

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

type StoreMap = Map<string, Credential>;

interface SerializedStore {
  credentials: Credential[];
}

export class CredentialStore {
  private readonly store: StoreMap = new Map();
  private readonly workspaceKey: string;
  private readonly storePath: string | undefined;

  constructor(workspaceKey: string, storePath?: string) {
    this.workspaceKey = workspaceKey;
    this.storePath = storePath;
    if (storePath && existsSync(storePath)) {
      this.load(storePath);
    }
  }

  private load(path: string): void {
    try {
      const raw = readFileSync(path, "utf8");
      const data = JSON.parse(raw) as SerializedStore;
      for (const cred of data.credentials) {
        this.store.set(cred.id, cred);
      }
    } catch {
      // Ignore parse errors on startup; start fresh
    }
  }

  private persist(): void {
    if (!this.storePath) return;
    const data: SerializedStore = { credentials: Array.from(this.store.values()) };
    writeFileSync(this.storePath, JSON.stringify(data, null, 2), "utf8");
  }

  private makeId(): string {
    return randomBytes(12).toString("hex");
  }

  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------

  create(workspaceId: string, input: CredentialInput): CredentialRecord {
    const key = deriveKey(this.workspaceKey);
    const { iv, ciphertext, authTag } = encrypt(JSON.stringify(input.payload), key);
    const now = new Date().toISOString();
    const cred: Credential = {
      id: this.makeId(),
      workspaceId,
      provider: input.provider,
      label: input.label,
      type: input.payload.type,
      encryptedPayload: ciphertext,
      iv,
      authTag,
      createdAt: now,
      updatedAt: now,
    };
    this.store.set(cred.id, cred);
    this.persist();
    return this.toRecord(cred);
  }

  list(workspaceId: string): CredentialRecord[] {
    const results: CredentialRecord[] = [];
    for (const cred of this.store.values()) {
      if (cred.workspaceId === workspaceId) {
        results.push(this.toRecord(cred));
      }
    }
    return results;
  }

  get(workspaceId: string, id: string): CredentialRecord | undefined {
    const cred = this.store.get(id);
    if (!cred || cred.workspaceId !== workspaceId) return undefined;
    return this.toRecord(cred);
  }

  delete(workspaceId: string, id: string): boolean {
    const cred = this.store.get(id);
    if (!cred || cred.workspaceId !== workspaceId) return false;
    this.store.delete(id);
    this.persist();
    return true;
  }

  /** Decrypt and return the raw payload for a given credential. Internal use only. */
  getPayload(workspaceId: string, id: string): CredentialPayload | undefined {
    const cred = this.store.get(id);
    if (!cred || cred.workspaceId !== workspaceId) return undefined;
    const key = deriveKey(this.workspaceKey);
    const raw = decrypt(cred.encryptedPayload, cred.iv, cred.authTag, key);
    return JSON.parse(raw) as CredentialPayload;
  }

  /**
   * Find and decrypt the first credential for a given provider in the workspace.
   * Used by the tool proxy to inject credentials at call time.
   */
  resolveForProvider(workspaceId: string, provider: string): CredentialPayload | undefined {
    for (const cred of this.store.values()) {
      if (cred.workspaceId === workspaceId && cred.provider === provider) {
        const key = deriveKey(this.workspaceKey);
        const raw = decrypt(cred.encryptedPayload, cred.iv, cred.authTag, key);
        return JSON.parse(raw) as CredentialPayload;
      }
    }
    return undefined;
  }

  private toRecord(cred: Credential): CredentialRecord {
    return {
      id: cred.id,
      workspaceId: cred.workspaceId,
      provider: cred.provider,
      label: cred.label,
      type: cred.type,
      createdAt: cred.createdAt,
      updatedAt: cred.updatedAt,
    };
  }
}

// ---------------------------------------------------------------------------
// Singleton factory
// ---------------------------------------------------------------------------

let _store: CredentialStore | undefined;

export function getCredentialStore(): CredentialStore {
  if (!_store) {
    const workspaceKey = process.env["GATEWAY_WORKSPACE_KEY"] ?? "dev-insecure-key";
    const storePath = process.env["GATEWAY_STORE_PATH"];
    _store = new CredentialStore(workspaceKey, storePath);
  }
  return _store;
}

/** Reset the singleton (used in tests). */
export function resetCredentialStore(): void {
  _store = undefined;
}
