/**
 * Protected-credential-envelope scenarios for KeystoreCipher / KeyProvider.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  getCredentialCipher,
  InMemoryKeyProvider,
  KeystoreCipher,
  resetCredentialCipher,
  type KeyProvider,
} from "../cipher.js";
import { CredentialService } from "../service.js";
import { createStorage } from "../../storage/index.js";
import type { RegistryStorage } from "../../storage/types.js";

afterEach(() => {
  resetCredentialCipher();
  delete process.env["CREDENTIALS_CIPHER_SECRET"];
  delete process.env["CREDENTIALS_KMS_KEY_ID"];
});

describe("KeystoreCipher / KeyProvider", () => {
  it("seal and unseal with a provided key (stored bytes are not plaintext)", async () => {
    const plaintext = '{"type":"bearer_token","token":"secret-tok"}';
    const cipher = new KeystoreCipher(new InMemoryKeyProvider());
    expect(cipher.backend).toBe("keystore");
    const sealed = await cipher.encrypt(plaintext);
    expect(sealed.startsWith("enc:v1:keystore:")).toBe(true);
    expect(sealed).not.toContain("secret-tok");
    expect(sealed).not.toBe(plaintext);
    expect(await cipher.decrypt(sealed)).toBe(plaintext);
  });

  it("in-memory provider satisfies the seam without a platform keystore", async () => {
    const provider = new InMemoryKeyProvider(Buffer.alloc(32, 7), "test-mem");
    expect(provider.id).toBe("test-mem");
    const cipher = new KeystoreCipher(provider);
    const sealed = await cipher.encrypt("hello");
    expect(await cipher.decrypt(sealed)).toBe("hello");
    // Legacy plaintext still passes through on decrypt.
    expect(await cipher.decrypt('{"plain":true}')).toBe('{"plain":true}');
  });

  it("key provider is consulted at most once per process lifetime", async () => {
    let calls = 0;
    const provider: KeyProvider = {
      id: "counting",
      async getKey() {
        calls += 1;
        return Buffer.alloc(32, 9);
      },
    };
    const cipher = new KeystoreCipher(provider);
    await cipher.encrypt("a");
    await cipher.encrypt("b");
    await cipher.decrypt(await cipher.encrypt("c"));
    expect(calls).toBe(1);
  });
});

describe("credential cipher selection", () => {
  it("prefers a supplied key provider over env backends", async () => {
    process.env["CREDENTIALS_CIPHER_SECRET"] = "env-secret";
    resetCredentialCipher();
    const provider = new InMemoryKeyProvider();
    const cipher = getCredentialCipher({ keyProvider: provider });
    expect(cipher.backend).toBe("keystore");
    const sealed = await cipher.encrypt("payload");
    expect(sealed.startsWith("enc:v1:keystore:")).toBe(true);
  });

  it("leaves env-based selection unchanged when no key provider is supplied", () => {
    process.env["CREDENTIALS_CIPHER_SECRET"] = "env-secret";
    resetCredentialCipher();
    expect(getCredentialCipher().backend).toBe("local");

    delete process.env["CREDENTIALS_CIPHER_SECRET"];
    resetCredentialCipher();
    expect(getCredentialCipher().backend).toBe("none");
  });

  it("refuses plaintext when requireEncryption is set and no key provider is configured", () => {
    resetCredentialCipher();
    expect(() => getCredentialCipher({ requireEncryption: true })).toThrow(/key provider/i);
  });

  it("allow requireEncryption when a key provider is supplied", () => {
    resetCredentialCipher();
    const cipher = getCredentialCipher({
      keyProvider: new InMemoryKeyProvider(),
      requireEncryption: true,
    });
    expect(cipher.backend).toBe("keystore");
  });
});

describe("store surface with keystore backend", () => {
  let storage: RegistryStorage;
  let credentials: CredentialService;

  beforeEach(async () => {
    resetCredentialCipher();
    getCredentialCipher({ keyProvider: new InMemoryKeyProvider() });
    storage = await createStorage({ driver: "sqlite", url: "file::memory:" });
    credentials = new CredentialService(storage.credentials, storage.provisionCredential);
  });

  afterEach(async () => {
    await storage.close();
  });

  it("listing and filtering by creator behave as with other backends", async () => {
    const a = await credentials.create("t1", "alice", {
      provider: "github",
      payload: { type: "bearer_token", token: "tok-a" },
    });
    const b = await credentials.create("t1", "bob", {
      provider: "slack",
      payload: { type: "bearer_token", token: "tok-b" },
    });

    const listed = await credentials.list("t1");
    expect(listed.map((r) => r.id).sort()).toEqual([a.id, b.id].sort());

    const byAlice = listed.filter((r) => r.createdBy === "alice");
    expect(byAlice).toHaveLength(1);
    expect(byAlice[0]!.id).toBe(a.id);

    const raw = await storage.credentials.getWithPayload("t1", a.id);
    expect(raw?.payload.startsWith("enc:v1:keystore:")).toBe(true);
    expect(raw?.payload).not.toContain("tok-a");

    expect(await credentials.getPayload("t1", a.id)).toEqual({
      type: "bearer_token",
      token: "tok-a",
    });
    expect(await credentials.getPayload("t1", b.id)).toEqual({
      type: "bearer_token",
      token: "tok-b",
    });
  });
});

describe("KeystoreCipher key caching across instances via getCredentialCipher", () => {
  it("reuses the cached keystore cipher so the provider is not re-prompted", async () => {
    const getKey = vi.fn(async () => Buffer.alloc(32, 1));
    const provider: KeyProvider = { id: "once", getKey };
    resetCredentialCipher();
    const first = getCredentialCipher({ keyProvider: provider });
    await first.encrypt("one");
    const second = getCredentialCipher({ keyProvider: provider });
    await second.encrypt("two");
    expect(first).toBe(second);
    expect(getKey).toHaveBeenCalledTimes(1);
  });
});
