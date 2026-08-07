/**
 * Application-layer encryption for credential payloads — defense in depth on
 * top of DynamoDB SSE, so a principal with raw table read (backup, IAM
 * mistake, injection) still cannot recover secrets.
 *
 * Envelope format (string, stored in the item's `payload` attribute):
 *
 *   enc:v1:<backend>:<b64 wrapped-key>:<b64 iv>:<b64 ciphertext||gcm-tag>
 *
 * Backends (picked once at startup, most secure available wins):
 *   - `keystore` — a `KeyProvider` was supplied. AES-256-GCM with a key the
 *               provider returns (may prompt); the key is cached for the
 *               process lifetime so a prompt happens at most once.
 *   - `kms`   — CREDENTIALS_KMS_KEY_ID set. Per-payload AES-256-GCM data key
 *               from KMS GenerateDataKey; the wrapped key rides the envelope
 *               and is unwrapped via KMS Decrypt (LRU-cached).
 *   - `local` — CREDENTIALS_CIPHER_SECRET set. Static AES-256-GCM key
 *               derived with scrypt; for dev / self-hosted without KMS.
 *   - `none`  — neither set: plaintext passthrough (dev default).
 *
 * Reads always accept both plaintext-JSON legacy values and envelopes, so
 * enabling encryption is a lazy migration: every write (create, OAuth
 * refresh persist) re-stores encrypted; old rows decrypt as themselves.
 */

import { createCipheriv, createDecipheriv, createHash, randomBytes, scryptSync } from "node:crypto";
import type { KMSClient } from "@aws-sdk/client-kms";

const PREFIX = "enc:v1:";
const ALGO = "aes-256-gcm";
const IV_BYTES = 12;
const KEY_BYTES = 32;

export interface CredentialCipher {
  readonly backend: "kms" | "local" | "none" | "keystore";
  encrypt(plaintext: string): Promise<string>;
  decrypt(stored: string): Promise<string>;
}

/** Supplies a 32-byte AES key. May prompt; callers must tolerate latency. */
export interface KeyProvider {
  getKey(): Promise<Buffer>;
  readonly id: string;
}

export type GetCredentialCipherOptions = {
  /** When set, preferred over env-based kms/local/none selection. */
  keyProvider?: KeyProvider;
  /**
   * When true, refuse the plaintext `none` backend (local workspaces must
   * not silently store credentials in the clear).
   */
  requireEncryption?: boolean;
};

function seal(key: Buffer, plaintext: string, backend: string, wrappedKey: Buffer): string {
  const iv = randomBytes(IV_BYTES);
  const cipher = createCipheriv(ALGO, key, iv);
  const ciphertext = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final(), cipher.getAuthTag()]);
  return [
    PREFIX + backend,
    wrappedKey.toString("base64"),
    iv.toString("base64"),
    ciphertext.toString("base64"),
  ].join(":");
}

function open(key: Buffer, ivB64: string, payloadB64: string): string {
  const iv = Buffer.from(ivB64, "base64");
  const blob = Buffer.from(payloadB64, "base64");
  const tag = blob.subarray(blob.length - 16);
  const ciphertext = blob.subarray(0, blob.length - 16);
  const decipher = createDecipheriv(ALGO, key, iv);
  decipher.setAuthTag(tag);
  return Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString("utf8");
}

function parseEnvelope(stored: string): { backend: string; wrappedKey: string; iv: string; payload: string } | null {
  if (!stored.startsWith(PREFIX)) return null;
  const parts = stored.slice(PREFIX.length).split(":");
  if (parts.length !== 4) return null;
  const [backend, wrappedKey, iv, payload] = parts;
  return { backend: backend!, wrappedKey: wrappedKey!, iv: iv!, payload: payload! };
}

// ---------------------------------------------------------------------------
// Keystore backend (external KeyProvider)
// ---------------------------------------------------------------------------

export class KeystoreCipher implements CredentialCipher {
  readonly backend = "keystore" as const;
  private key: Buffer | undefined;
  private keyPromise: Promise<Buffer> | undefined;

  constructor(private readonly provider: KeyProvider) {}

  private resolveKey(): Promise<Buffer> {
    if (this.key) return Promise.resolve(this.key);
    this.keyPromise ??= this.provider.getKey().then((raw) => {
      if (raw.length !== KEY_BYTES) {
        throw new Error(
          `KeyProvider "${this.provider.id}" must return ${KEY_BYTES} bytes, got ${raw.length}`,
        );
      }
      this.key = raw;
      return raw;
    });
    return this.keyPromise;
  }

  async encrypt(plaintext: string): Promise<string> {
    const key = await this.resolveKey();
    return seal(key, plaintext, "keystore", Buffer.alloc(0));
  }

  async decrypt(stored: string): Promise<string> {
    const envelope = parseEnvelope(stored);
    if (!envelope) return stored;
    const key = await this.resolveKey();
    return open(key, envelope.iv, envelope.payload);
  }
}

/** In-memory KeyProvider for tests — no platform keystore required. */
export class InMemoryKeyProvider implements KeyProvider {
  readonly id: string;
  private readonly key: Buffer;

  constructor(key?: Buffer, id = "in-memory") {
    this.key = key ?? randomBytes(KEY_BYTES);
    if (this.key.length !== KEY_BYTES) {
      throw new Error(`InMemoryKeyProvider requires a ${KEY_BYTES}-byte key`);
    }
    this.id = id;
  }

  async getKey(): Promise<Buffer> {
    return this.key;
  }
}

// ---------------------------------------------------------------------------
// KMS backend
// ---------------------------------------------------------------------------

type Kms = typeof import("@aws-sdk/client-kms") & { client: KMSClient };

class KmsCipher implements CredentialCipher {
  readonly backend = "kms" as const;
  private readonly keyCache = new Map<string, Buffer>();
  /**
   * The SDK arrives with the first encrypt/decrypt, not with the class: the
   * `local` and `none` backends below are the whole of local mode, and local
   * mode must not load @aws-sdk (see db/client.ts).
   */
  private kms: Promise<Kms> | undefined;

  constructor(private readonly keyId: string) {}

  private load(): Promise<Kms> {
    this.kms ??= import("@aws-sdk/client-kms").then((mod) => ({
      ...mod,
      client: new mod.KMSClient({}),
    }));
    return this.kms;
  }

  async encrypt(plaintext: string): Promise<string> {
    const { client, GenerateDataKeyCommand } = await this.load();
    const generated = await client.send(
      new GenerateDataKeyCommand({ KeyId: this.keyId, KeySpec: "AES_256" }),
    );
    const key = Buffer.from(generated.Plaintext!);
    const wrapped = Buffer.from(generated.CiphertextBlob!);
    try {
      return seal(key, plaintext, "kms", wrapped);
    } finally {
      key.fill(0);
    }
  }

  async decrypt(stored: string): Promise<string> {
    const envelope = parseEnvelope(stored);
    if (!envelope) return stored;
    const cacheKey = createHash("sha256").update(envelope.wrappedKey).digest("hex");
    let key = this.keyCache.get(cacheKey);
    if (!key) {
      const { client, DecryptCommand } = await this.load();
      const result = await client.send(
        new DecryptCommand({ CiphertextBlob: Buffer.from(envelope.wrappedKey, "base64") }),
      );
      key = Buffer.from(result.Plaintext!);
      // Bounded cache: data keys are per-payload, so entries ~= credentials.
      if (this.keyCache.size > 512) this.keyCache.clear();
      this.keyCache.set(cacheKey, key);
    }
    return open(key, envelope.iv, envelope.payload);
  }
}

// ---------------------------------------------------------------------------
// Local static-key backend
// ---------------------------------------------------------------------------

class LocalCipher implements CredentialCipher {
  readonly backend = "local" as const;
  private readonly key: Buffer;

  constructor(secret: string) {
    this.key = scryptSync(secret, "aprovan-credential-cipher", 32);
  }

  async encrypt(plaintext: string): Promise<string> {
    return seal(this.key, plaintext, "local", Buffer.alloc(0));
  }

  async decrypt(stored: string): Promise<string> {
    const envelope = parseEnvelope(stored);
    if (!envelope) return stored;
    return open(this.key, envelope.iv, envelope.payload);
  }
}

class NoopCipher implements CredentialCipher {
  readonly backend = "none" as const;
  async encrypt(plaintext: string): Promise<string> {
    return plaintext;
  }
  async decrypt(stored: string): Promise<string> {
    if (stored.startsWith(PREFIX)) {
      throw new Error(
        "Encrypted credential encountered but no cipher is configured — set CREDENTIALS_KMS_KEY_ID or CREDENTIALS_CIPHER_SECRET",
      );
    }
    return stored;
  }
}

// ---------------------------------------------------------------------------
// Selection
// ---------------------------------------------------------------------------

let cipher: CredentialCipher | undefined;

function selectFromEnv(): CredentialCipher {
  const kmsKeyId = process.env["CREDENTIALS_KMS_KEY_ID"];
  const localSecret = process.env["CREDENTIALS_CIPHER_SECRET"];
  return kmsKeyId
    ? new KmsCipher(kmsKeyId)
    : localSecret
      ? new LocalCipher(localSecret)
      : new NoopCipher();
}

/**
 * Resolve the process credential cipher.
 *
 * A supplied `keyProvider` is preferred over env-based kms/local/none.
 * Without one, selection is unchanged from the prior env-only behaviour.
 */
export function getCredentialCipher(options?: GetCredentialCipherOptions): CredentialCipher {
  if (options?.keyProvider) {
    if (cipher?.backend !== "keystore") {
      cipher = new KeystoreCipher(options.keyProvider);
    }
  } else if (!cipher) {
    cipher = selectFromEnv();
  }

  if (options?.requireEncryption && cipher.backend === "none") {
    throw new Error(
      "Local workspace requires a key provider; none was supplied and no CREDENTIALS_KMS_KEY_ID or CREDENTIALS_CIPHER_SECRET is set",
    );
  }

  return cipher;
}

/** Tests: reset the cached cipher (env-driven selection re-runs). */
export function resetCredentialCipher(): void {
  cipher = undefined;
}
