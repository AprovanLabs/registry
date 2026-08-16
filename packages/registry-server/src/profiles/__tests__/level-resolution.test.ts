/**
 * Invoker-aware credential resolution (iw9-f3 stream 2): the D4 order (own
 * user-oauth → workspace rows), the fail-closed CredentialNotConnectedError,
 * and the published ResolvedCredential shape — exercised through
 * `CredentialService.resolveForInvoker` directly AND both `resolveProfile`
 * entry points (stored-profile no-pin default, ungoverned-mode fallback).
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { ctx, makeEnv, type TestEnv } from "../../../tests/helpers.js";
import {
  CredentialNotConnectedError,
  CredentialService,
} from "../../credentials/service.js";
import { createSqliteClient } from "../../storage/sql-client.js";
import { createSqlStorage } from "../../storage/sql-storage.js";
import { resolveProfile } from "../resolve.js";
import type { OAuth2AuthCodePayload } from "../../credentials/types.js";
import type { RegistryStorage } from "../../storage/types.js";

const authcode = (token: string): OAuth2AuthCodePayload => ({
  type: "oauth2_authcode",
  clientId: "cid",
  clientSecret: "csecret",
  tokenUrl: "https://issuer.example/token",
  code: "",
  redirectUri: "https://app.example/callback",
  accessToken: token,
});

const bearer = (token: string) => ({ type: "bearer_token" as const, token });

const expectNotConnected = (err: unknown, provider: string): void => {
  expect(err).toBeInstanceOf(CredentialNotConnectedError);
  const notConnected = err as CredentialNotConnectedError;
  expect(notConnected.code).toBe("credential_not_connected");
  expect(notConnected.status).toBe(403);
  expect(notConnected.provider).toBe(provider);
  expect(notConnected.requiredLevel).toBe("user-oauth");
};

describe("CredentialService.resolveForInvoker (unit)", () => {
  let db: ReturnType<typeof createSqliteClient>;
  let storage: RegistryStorage;
  let credentials: CredentialService;

  beforeEach(async () => {
    db = createSqliteClient({ url: "file::memory:" });
    storage = await createSqlStorage(db);
    credentials = new CredentialService(storage.credentials, storage.provisionCredential);
  });

  afterEach(async () => {
    await storage.close();
  });

  it("owner resolves their own connection; result names id, level, and owner", async () => {
    const own = await credentials.create("t1", "alice", {
      provider: "github",
      payload: authcode("alice-tok"),
      level: "user-oauth",
    });
    const resolved = await credentials.resolveForInvoker("t1", "github", { sub: "alice" });
    expect(resolved?.id).toBe(own.id);
    expect(resolved?.level).toBe("user-oauth");
    expect(resolved?.owner).toBe("alice");
    expect((resolved?.payload as OAuth2AuthCodePayload).accessToken).toBe("alice-tok");
  });

  it("the invoker's own user-oauth outranks an earlier workspace credential", async () => {
    // Workspace row created FIRST — creation order alone would pick it.
    const workspace = await credentials.create("t1", "admin", {
      provider: "github",
      payload: bearer("shared"),
      level: "workspace-token",
    });
    const own = await credentials.create("t1", "bob", {
      provider: "github",
      payload: authcode("bob-tok"),
      level: "user-oauth",
    });
    const resolved = await credentials.resolveForInvoker("t1", "github", { sub: "bob" });
    expect(resolved?.id).toBe(own.id);
    expect(resolved?.id).not.toBe(workspace.id);
    expect(resolved?.owner).toBe("bob");
  });

  it("a workspace credential serves an unconnected invoker, with no owner", async () => {
    const workspace = await credentials.create("t1", "admin", {
      provider: "github",
      payload: bearer("shared"),
      level: "workspace-token",
    });
    await credentials.create("t1", "alice", {
      provider: "github",
      payload: authcode("alice-tok"),
      level: "user-oauth",
    });
    const resolved = await credentials.resolveForInvoker("t1", "github", { sub: "carol" });
    expect(resolved?.id).toBe(workspace.id);
    expect(resolved?.level).toBe("workspace-token");
    expect(resolved?.owner).toBeUndefined();
  });

  it("only foreign user-oauth rows: fails closed, machine-distinguishable", async () => {
    await credentials.create("t1", "alice", {
      provider: "github",
      payload: authcode("alice-tok"),
      level: "user-oauth",
    });
    const error = await credentials
      .resolveForInvoker("t1", "github", { sub: "bob" })
      .catch((e: unknown) => e);
    expectNotConnected(error, "github");
  });

  it("no credential exists at all: undefined, NOT a not-connected error", async () => {
    await expect(
      credentials.resolveForInvoker("t1", "github", { sub: "bob" }),
    ).resolves.toBeUndefined();
  });

  it("legacy NULL-level oauth2_authcode rows resolve as workspace-shared for everyone", async () => {
    const ts = new Date().toISOString();
    await db.run(
      `INSERT INTO credentials (id, tenant_id, provider, label, type, payload, created_by, level, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      ["leg-1", "t1", "github", null, "oauth2_authcode", JSON.stringify(authcode("legacy-tok")), "legacy-user", null, ts, ts],
    );

    // The creator does NOT own it as user-oauth (tech-plan D2) …
    const asCreator = await credentials.resolveForInvoker("t1", "github", { sub: "legacy-user" });
    expect(asCreator?.id).toBe("leg-1");
    expect(asCreator?.level).toBe("workspace-oauth");
    expect(asCreator?.owner).toBeUndefined();

    // … and every other member keeps yesterday's shared access.
    const asOther = await credentials.resolveForInvoker("t1", "github", { sub: "bob" });
    expect(asOther?.id).toBe("leg-1");
    expect(asOther?.level).toBe("workspace-oauth");
  });
});

describe("resolveProfile stored-profile no-pin default (step 4c)", () => {
  let env: TestEnv;

  beforeEach(async () => {
    env = await makeEnv({ authMode: "none" });
    // A stored `default` row with NO credential pin — selection is the D4 order.
    await env.storage.profiles.create("t1", {
      name: "default",
      targetKind: "provider",
      targetId: "github",
      options: {},
      createdBy: "admin",
    });
  });

  afterEach(async () => {
    await env.close();
  });

  it("owner resolves their own connection over the workspace credential", async () => {
    const workspace = await env.storage.credentials.create("t1", {
      provider: "github",
      type: "bearer_token",
      payload: JSON.stringify(bearer("shared")),
      createdBy: "admin",
      level: "workspace-token",
    });
    const own = await env.storage.credentials.create("t1", {
      provider: "github",
      type: "oauth2_authcode",
      payload: JSON.stringify(authcode("alice-tok")),
      createdBy: "alice",
      level: "user-oauth",
    });

    const asAlice = await resolveProfile(env.deps, ctx({ principal: "alice" }), "github");
    expect(asAlice.credential?.id).toBe(own.id);
    expect(asAlice.credential?.level).toBe("user-oauth");
    expect(asAlice.credential?.owner).toBe("alice");

    // An unconnected invoker gets the workspace row — never alice's.
    const asBob = await resolveProfile(env.deps, ctx({ principal: "bob" }), "github");
    expect(asBob.credential?.id).toBe(workspace.id);
    expect(asBob.credential?.level).toBe("workspace-token");
    expect(asBob.credential?.owner).toBeUndefined();
  });

  it("fails closed when only a foreign user-oauth row exists", async () => {
    await env.storage.credentials.create("t1", {
      provider: "github",
      type: "oauth2_authcode",
      payload: JSON.stringify(authcode("alice-tok")),
      createdBy: "alice",
      level: "user-oauth",
    });
    const error = await resolveProfile(env.deps, ctx({ principal: "bob" }), "github").catch(
      (e: unknown) => e,
    );
    expectNotConnected(error, "github");
  });

  it("a pinned foreign user-oauth row fails closed — never another user's payload, never a downgrade", async () => {
    // A workspace credential exists — the pin must NOT silently downgrade to it.
    await env.storage.credentials.create("t1", {
      provider: "github",
      type: "bearer_token",
      payload: JSON.stringify(bearer("shared")),
      createdBy: "admin",
      level: "workspace-token",
    });
    const own = await env.storage.credentials.create("t1", {
      provider: "github",
      type: "oauth2_authcode",
      payload: JSON.stringify(authcode("alice-tok")),
      createdBy: "alice",
      level: "user-oauth",
    });
    await env.storage.profiles.create("t1", {
      name: "alice-pin",
      targetKind: "provider",
      targetId: "github",
      credentialId: own.id,
      options: {},
      createdBy: "admin",
    });

    const error = await resolveProfile(
      env.deps,
      ctx({ principal: "bob" }),
      "github",
      "alice-pin",
    ).catch((e: unknown) => e);
    expectNotConnected(error, "github");

    // The owner resolves through the same pin.
    const asAlice = await resolveProfile(env.deps, ctx({ principal: "alice" }), "github", "alice-pin");
    expect(asAlice.credential?.id).toBe(own.id);
    expect(asAlice.credential?.owner).toBe("alice");
  });
});

describe("resolveProfile ungoverned-mode fallback (step 5)", () => {
  let env: TestEnv;

  beforeEach(async () => {
    env = await makeEnv({ authMode: "none" });
  });

  afterEach(async () => {
    await env.close();
  });

  it("provider target: own user-oauth wins, workspace serves the unconnected", async () => {
    const workspace = await env.storage.credentials.create("t1", {
      provider: "github",
      type: "bearer_token",
      payload: JSON.stringify(bearer("shared")),
      createdBy: "admin",
      level: "workspace-token",
    });
    const own = await env.storage.credentials.create("t1", {
      provider: "github",
      type: "oauth2_authcode",
      payload: JSON.stringify(authcode("alice-tok")),
      createdBy: "alice",
      level: "user-oauth",
    });

    const asAlice = await resolveProfile(env.deps, ctx({ principal: "alice" }), "github");
    expect(asAlice.credential?.id).toBe(own.id);
    expect(asAlice.credential?.owner).toBe("alice");

    const asBob = await resolveProfile(env.deps, ctx({ principal: "bob" }), "github");
    expect(asBob.credential?.id).toBe(workspace.id);
    expect(asBob.credential?.owner).toBeUndefined();
  });

  it("provider target: only a foreign user-oauth row fails closed", async () => {
    await env.storage.credentials.create("t1", {
      provider: "slack",
      type: "oauth2_authcode",
      payload: JSON.stringify(authcode("alice-tok")),
      createdBy: "alice",
      level: "user-oauth",
    });
    const error = await resolveProfile(env.deps, ctx({ principal: "bob" }), "slack").catch(
      (e: unknown) => e,
    );
    expectNotConnected(error, "slack");
  });

  it("interface target: the compat fallback resolves the invoker's own connection", async () => {
    await env.storage.credentials.create("t1", {
      provider: "snowflake",
      type: "bearer_token",
      payload: JSON.stringify(bearer("shared")),
      createdBy: "admin",
      level: "workspace-token",
    });
    const own = await env.storage.credentials.create("t1", {
      provider: "snowflake",
      type: "oauth2_authcode",
      payload: JSON.stringify(authcode("alice-tok")),
      createdBy: "alice",
      level: "user-oauth",
    });

    const resolved = await resolveProfile(env.deps, ctx({ principal: "alice" }), "sql");
    expect(resolved.provider).toBe("snowflake");
    expect(resolved.credential?.id).toBe(own.id);
    expect(resolved.credential?.level).toBe("user-oauth");
    expect(resolved.credential?.owner).toBe("alice");
  });
});
