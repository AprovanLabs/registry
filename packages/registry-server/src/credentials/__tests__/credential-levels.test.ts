/**
 * Credential level model (iw9-f3 stream 1): vocabulary, create-time matrix,
 * owner rules, D3a uniqueness, and legacy effectiveLevel backfill.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { createSqliteClient } from "../../storage/sql-client.js";
import { createSqlStorage } from "../../storage/sql-storage.js";
import { CredentialResolutionError, CredentialService } from "../service.js";
import {
  effectiveLevel,
  type CredentialPayload,
  type OAuth2AuthCodePayload,
} from "../types.js";
import type { RegistryStorage } from "../../storage/types.js";

const AUTHCODE: OAuth2AuthCodePayload = {
  type: "oauth2_authcode",
  clientId: "cid",
  clientSecret: "csecret",
  tokenUrl: "https://issuer.example/token",
  code: "",
  redirectUri: "https://app.example/callback",
  accessToken: "live-token",
};

let storage: RegistryStorage;
let credentials: CredentialService;
let db: ReturnType<typeof createSqliteClient>;

beforeEach(async () => {
  db = createSqliteClient({ url: "file::memory:" });
  storage = await createSqlStorage(db);
  credentials = new CredentialService(storage.credentials, storage.provisionCredential);
});

afterEach(async () => {
  await storage.close();
});

describe("level round-trip", () => {
  it("returns the stored level on list and get", async () => {
    const created = await credentials.create("t1", "alice", {
      provider: "github",
      payload: { type: "bearer_token", token: "tok" },
      level: "workspace-token",
    });
    expect(created.level).toBe("workspace-token");

    const got = await credentials.get("t1", created.id);
    expect(got?.level).toBe("workspace-token");

    const listed = await credentials.list("t1");
    expect(listed.find((r) => r.id === created.id)?.level).toBe("workspace-token");
  });

  it("defaults oauth2_authcode to user-oauth when level is omitted", async () => {
    const created = await credentials.create("t1", "alice", {
      provider: "github",
      payload: AUTHCODE,
    });
    expect(created.level).toBe("user-oauth");
    expect(created.createdBy).toBe("alice");
  });
});

describe("level validation", () => {
  it("rejects unknown level values naming the allowed vocabulary", async () => {
    await expect(
      credentials.create("t1", "alice", {
        provider: "github",
        payload: { type: "bearer_token", token: "tok" },
        level: "personal",
      }),
    ).rejects.toSatisfy((err: unknown) => {
      expect(err).toBeInstanceOf(CredentialResolutionError);
      expect((err as Error).message).toMatch(/allowed values/u);
      expect((err as Error).message).toMatch(/workspace-token/u);
      expect((err as Error).message).toMatch(/workspace-oauth/u);
      expect((err as Error).message).toMatch(/user-oauth/u);
      return true;
    });
  });

  it("rejects level/payload-type mismatches", async () => {
    await expect(
      credentials.create("t1", "alice", {
        provider: "github",
        payload: { type: "bearer_token", token: "tok" },
        level: "user-oauth",
      }),
    ).rejects.toSatisfy((err: unknown) => {
      expect(err).toBeInstanceOf(CredentialResolutionError);
      expect((err as Error).message).toMatch(/incompatible/u);
      expect((err as Error).message).toMatch(/user-oauth/u);
      expect((err as Error).message).toMatch(/bearer_token/u);
      return true;
    });
  });

  it("accepts oauth2_authcode as an explicit workspace-oauth shared bot", async () => {
    const created = await credentials.create("t1", "alice", {
      provider: "github",
      payload: AUTHCODE,
      level: "workspace-oauth",
    });
    expect(created.level).toBe("workspace-oauth");
  });
});

describe("user-oauth ownership and uniqueness", () => {
  it("rejects user-oauth without an owner", async () => {
    await expect(
      credentials.create("t1", "", {
        provider: "github",
        payload: AUTHCODE,
        level: "user-oauth",
      }),
    ).rejects.toSatisfy((err: unknown) => {
      expect(err).toBeInstanceOf(CredentialResolutionError);
      expect((err as Error).message).toMatch(/owner/u);
      return true;
    });
  });

  it("rejects a duplicate (provider, owner) via the partial unique index", async () => {
    await credentials.create("t1", "alice", {
      provider: "github",
      payload: AUTHCODE,
      level: "user-oauth",
    });
    await expect(
      credentials.create("t1", "alice", {
        provider: "github",
        payload: { ...AUTHCODE, accessToken: "other" },
        level: "user-oauth",
      }),
    ).rejects.toSatisfy((err: unknown) => {
      expect(err).toBeInstanceOf(CredentialResolutionError);
      expect((err as Error).message).toMatch(/github/u);
      expect((err as Error).message).toMatch(/already connected/u);
      expect((err as Error).message).not.toMatch(/UNIQUE constraint/u);
      return true;
    });
  });

  it("allows two distinct owners for the same provider", async () => {
    const a = await credentials.create("t1", "alice", {
      provider: "github",
      payload: AUTHCODE,
      level: "user-oauth",
    });
    const b = await credentials.create("t1", "bob", {
      provider: "github",
      payload: { ...AUTHCODE, accessToken: "bob-tok" },
      level: "user-oauth",
    });
    expect(a.createdBy).toBe("alice");
    expect(b.createdBy).toBe("bob");
    expect(a.level).toBe("user-oauth");
    expect(b.level).toBe("user-oauth");
  });
});

describe("effectiveLevel backfill", () => {
  it("maps all four payload types without ever yielding user-oauth", () => {
    expect(effectiveLevel("bearer_token")).toBe("workspace-token");
    expect(effectiveLevel("api_key")).toBe("workspace-token");
    expect(effectiveLevel("oauth2_client")).toBe("workspace-oauth");
    expect(effectiveLevel("oauth2_authcode")).toBe("workspace-oauth");
  });

  it("preserves an explicit stored level", () => {
    expect(effectiveLevel("oauth2_authcode", "user-oauth")).toBe("user-oauth");
    expect(effectiveLevel("oauth2_authcode", "workspace-oauth")).toBe("workspace-oauth");
  });

  it("backfills legacy NULL level rows on read", async () => {
    const ts = new Date().toISOString();
    const payloads: Array<{ id: string; type: CredentialPayload["type"]; body: string }> = [
      {
        id: "leg-bearer",
        type: "bearer_token",
        body: JSON.stringify({ type: "bearer_token", token: "t" }),
      },
      {
        id: "leg-apikey",
        type: "api_key",
        body: JSON.stringify({ type: "api_key", value: "k" }),
      },
      {
        id: "leg-client",
        type: "oauth2_client",
        body: JSON.stringify({
          type: "oauth2_client",
          clientId: "c",
          clientSecret: "s",
          tokenUrl: "https://issuer.example/token",
        }),
      },
      {
        id: "leg-authcode",
        type: "oauth2_authcode",
        body: JSON.stringify(AUTHCODE),
      },
    ];
    for (const row of payloads) {
      await db.run(
        `INSERT INTO credentials (id, tenant_id, provider, label, type, payload, created_by, level, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [row.id, "t1", "github", null, row.type, row.body, "legacy", null, ts, ts],
      );
    }

    expect((await credentials.get("t1", "leg-bearer"))?.level).toBe("workspace-token");
    expect((await credentials.get("t1", "leg-apikey"))?.level).toBe("workspace-token");
    expect((await credentials.get("t1", "leg-client"))?.level).toBe("workspace-oauth");
    expect((await credentials.get("t1", "leg-authcode"))?.level).toBe("workspace-oauth");
  });
});
