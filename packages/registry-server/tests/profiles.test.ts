/**
 * Acceptance tests for the profiles capability — one test per scenario in
 * specs/profiles/spec.md, plus the resolution properties tech-plan D4 makes
 * normative.
 */

import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { resolveProfile } from "../src/profiles/resolve.js";
import { ServiceError } from "../src/kernel/index.js";
import { adminCtx, ctx, makeEnv, type TestEnv } from "./helpers.js";

let env: TestEnv;

beforeEach(async () => {
  env = await makeEnv();
});

afterEach(async () => {
  await env.close();
});

const bearer = (token: string) => ({ type: "bearer_token" as const, token });

describe("profile schema (write-time validation)", () => {
  it("duplicate name rejected, naming the existing profile", async () => {
    await env.profiles.create(adminCtx(), {
      name: "docs",
      target: { kind: "interface", interface: "sql" },
      provider: "postgres",
    });
    await expect(
      env.profiles.create(adminCtx(), {
        name: "docs",
        target: { kind: "interface", interface: "sql" },
        provider: "snowflake",
      }),
    ).rejects.toThrow(/sql profile named "docs" already exists/u);
  });

  it("interface profile validates its provider, listing compat providers", async () => {
    await expect(
      env.profiles.create(adminCtx(), {
        name: "docs",
        target: { kind: "interface", interface: "sql" },
        provider: "github",
      }),
    ).rejects.toThrow(/github does not implement sql.*postgres.*snowflake/su);
  });

  it("nonexistent credential reference fails at write time", async () => {
    await expect(
      env.profiles.create(adminCtx(), {
        name: "docs",
        target: { kind: "interface", interface: "sql" },
        provider: "postgres",
        credentialId: "nope",
      }),
    ).rejects.toThrow(/Credential nope does not exist/u);
  });

  it("provider-mismatched credential reference fails at write time naming the mismatch", async () => {
    const cred = await env.credentials.create("t1", "user-1", {
      provider: "github",
      payload: bearer("gh"),
    });
    await expect(
      env.profiles.create(adminCtx(), {
        name: "docs",
        target: { kind: "interface", interface: "sql" },
        provider: "postgres",
        credentialId: cred.id,
      }),
    ).rejects.toThrow(/belongs to github, not postgres/u);
  });

  it("creator recorded on credentials (created_by dimension)", async () => {
    const row = await env.credentials.create("t1", "principal-p", {
      provider: "github",
      payload: bearer("gh"),
    });
    expect(row.createdBy).toBe("principal-p");
    const listed = await env.credentials.list("t1");
    expect(listed[0]?.createdBy).toBe("principal-p");
  });
});

describe("named profile resolution", () => {
  it('sql profile "docs" routes through the profile: provider, credential, merged options', async () => {
    const cred = await env.credentials.create("t1", "user-1", {
      provider: "postgres",
      payload: bearer("pg-token"),
    });
    await env.profiles.create(adminCtx(), {
      name: "docs",
      target: { kind: "interface", interface: "sql" },
      provider: "postgres",
      credentialId: cred.id,
      options: { database: "docs" },
    });
    const resolved = await resolveProfile(env.deps, adminCtx(), "sql", "docs");
    expect(resolved.provider).toBe("postgres");
    expect(resolved.module).toBe("postgres");
    expect(resolved.credential?.id).toBe(cred.id);
    expect(resolved.credential?.payload).toEqual(bearer("pg-token"));
    expect(resolved.options).toEqual({ database: "docs" });
    expect(resolved.defaultsFor).toEqual(["query"]);
    expect(resolved.timeoutMs).toBe(60_000);
  });

  it("missing named profile fails 404 listing the names that exist, resolving no credential", async () => {
    await env.profiles.create(adminCtx(), {
      name: "docs",
      target: { kind: "interface", interface: "sql" },
      provider: "postgres",
    });
    await env.profiles.create(adminCtx(), {
      name: "analytics",
      target: { kind: "interface", interface: "sql" },
      provider: "postgres",
    });
    const firstForProvider = vi.spyOn(env.credentials, "firstForProvider");
    const resolveById = vi.spyOn(env.credentials, "resolveById");
    const error = await resolveProfile(env.deps, adminCtx(), "sql", "staging").catch((e) => e);
    expect(error).toBeInstanceOf(ServiceError);
    expect(error.status).toBe(404);
    expect(error.message).toMatch(/No sql profile named "staging"/u);
    expect(error.message).toMatch(/"analytics", "docs"/u);
    expect(firstForProvider).not.toHaveBeenCalled();
    expect(resolveById).not.toHaveBeenCalled();
  });

  it("deleted pinned credential fails loudly naming profile and credential — no other credential", async () => {
    const pinned = await env.credentials.create("t1", "user-1", {
      provider: "postgres",
      payload: bearer("pinned"),
    });
    // A second credential exists — the failure must NOT fall back to it.
    await env.credentials.create("t1", "user-1", {
      provider: "postgres",
      payload: bearer("other"),
    });
    await env.profiles.create(adminCtx(), {
      name: "docs",
      target: { kind: "interface", interface: "sql" },
      provider: "postgres",
      credentialId: pinned.id,
    });
    await env.credentials.delete("t1", pinned.id);
    const error = await resolveProfile(env.deps, adminCtx(), "sql", "docs").catch((e) => e);
    expect(error).toBeInstanceOf(ServiceError);
    expect(error.message).toMatch(/Profile "docs"/u);
    expect(error.message).toContain(pinned.id);
    expect(error.message).toMatch(/Re-link a credential/u);
  });

  it("label is never a resolution key: profile name equal to a label still 404s listing real names", async () => {
    await env.credentials.create("t1", "user-1", {
      provider: "github",
      label: "work",
      payload: bearer("a"),
    });
    await env.credentials.create("t1", "user-1", {
      provider: "github",
      label: "work",
      payload: bearer("b"),
    });
    const error = await resolveProfile(env.deps, adminCtx(), "github", "work").catch((e) => e);
    expect(error).toBeInstanceOf(ServiceError);
    expect(error.status).toBe(404);
    expect(error.message).toMatch(/No github profile named "work"/u);
  });
});

describe("default-name resolution and ungoverned-mode fallback", () => {
  it("bare interface call uses the default profile when present — fallback not consulted", async () => {
    const snow = await env.credentials.create("t1", "user-1", {
      provider: "snowflake",
      payload: bearer("snow"),
    });
    await env.credentials.create("t1", "user-1", {
      provider: "postgres",
      payload: bearer("pg"),
    });
    await env.profiles.create(adminCtx(), {
      name: "default",
      target: { kind: "interface", interface: "sql" },
      provider: "snowflake",
      credentialId: snow.id,
    });
    const resolved = await resolveProfile(env.deps, adminCtx(), "sql");
    expect(resolved.provider).toBe("snowflake");
    expect(resolved.credential?.id).toBe(snow.id);
    expect(resolved.profileName).toBe("default");
  });

  it("credentialless implementation wins ungoverned fallback over a vendor with a credential", async () => {
    const none = await makeEnv({ authMode: "none" });
    try {
      await none.credentials.create("t1", "user-1", {
        provider: "openai",
        payload: bearer("oa"),
      });
      const resolved = await resolveProfile(none.deps, ctx(), "agent");
      expect(resolved.provider).toBe("native");
      expect(resolved.credentialless).toBe(true);
      expect(resolved.credential).toBeUndefined();
    } finally {
      await none.close();
    }
  });

  it("ungoverned-mode interface fallback picks the first compat provider with a tenant credential", async () => {
    const none = await makeEnv({ authMode: "none" });
    try {
      await none.credentials.create("t1", "user-1", {
        provider: "snowflake",
        payload: bearer("snow"),
      });
      const resolved = await resolveProfile(none.deps, ctx(), "sql");
      expect(resolved.provider).toBe("snowflake");
      expect(resolved.profileId).toBeUndefined();
    } finally {
      await none.close();
    }
  });

  it("ungoverned-mode with nothing to resolve fails listing compat providers and the profiles.create fix", async () => {
    const none = await makeEnv({ authMode: "none" });
    try {
      const error = await resolveProfile(none.deps, ctx(), "sql").catch((e) => e);
      expect(error).toBeInstanceOf(ServiceError);
      expect(error.status).toBe(400);
      expect(error.message).toMatch(/postgres.*snowflake/su);
      expect(error.message).toMatch(/profiles\.create/u);
    } finally {
      await none.close();
    }
  });

  it("provider target ungoverned-mode resolves the first tenant credential; none is legal", async () => {
    const none = await makeEnv({ authMode: "none" });
    try {
      const first = await none.credentials.create("t1", "user-1", {
        provider: "github",
        payload: bearer("first"),
      });
      await none.credentials.create("t1", "user-1", {
        provider: "github",
        payload: bearer("second"),
      });
      const resolved = await resolveProfile(none.deps, ctx(), "github");
      expect(resolved.credential?.id).toBe(first.id);

      const bare = await resolveProfile(none.deps, ctx(), "slack");
      expect(bare.credential).toBeUndefined();
    } finally {
      await none.close();
    }
  });

  it("llm alias namespaces are provider targets carrying the alias module and baseUrl", async () => {
    const none = await makeEnv({ authMode: "none" });
    try {
      const resolved = await resolveProfile(none.deps, ctx(), "anthropic");
      expect(resolved.target).toEqual({ kind: "provider", id: "anthropic" });
      expect(resolved.module).toBe("openai");
      expect(resolved.baseUrl).toBe("https://api.anthropic.com/v1");
    } finally {
      await none.close();
    }
  });

  it("unavailable compat entry refuses at bind time with the reason", async () => {
    const error = await env.profiles
      .create(adminCtx(), {
        name: "default",
        target: { kind: "interface", interface: "sql" },
        provider: "duckdb",
      })
      .catch((e) => e);
    expect(error.status).toBe(501);
    expect(error.message).toMatch(/declared but not yet built/u);
  });
});

describe("profiles are the allow-listing unit", () => {
  it("ungranted member is refused 403 naming the profile, before any credential read", async () => {
    const cred = await env.credentials.create("t1", "admin", {
      provider: "postgres",
      payload: bearer("pg"),
    });
    await env.profiles.create(adminCtx(), {
      name: "docs",
      target: { kind: "interface", interface: "sql" },
      provider: "postgres",
      credentialId: cred.id,
    });
    const resolveById = vi.spyOn(env.credentials, "resolveById");
    const firstForProvider = vi.spyOn(env.credentials, "firstForProvider");
    const error = await resolveProfile(env.deps, ctx(), "sql", "docs").catch((e) => e);
    expect(error).toBeInstanceOf(ServiceError);
    expect(error.status).toBe(403);
    expect(error.message).toMatch(/Profile "docs" \(sql\) is not granted to this caller/u);
    expect(resolveById).not.toHaveBeenCalled();
    expect(firstForProvider).not.toHaveBeenCalled();
  });

  it("group grant admits the caller via a single grants query", async () => {
    const profile = await env.profiles.create(adminCtx(), {
      name: "docs",
      target: { kind: "interface", interface: "sql" },
      provider: "postgres",
    });
    await env.profiles.grant(adminCtx(), profile.id, { kind: "group", id: "analysts" });
    const grantedSpy = vi.spyOn(env.storage.grants, "grantedProfileIds");
    const resolved = await resolveProfile(
      env.deps,
      ctx({ groupIds: ["eng", "analysts"] }),
      "sql",
      "docs",
    );
    expect(resolved.profileId).toBe(profile.id);
    expect(grantedSpy).toHaveBeenCalledTimes(1);
  });

  it("actor identity (workflow) admits via its grant", async () => {
    const profile = await env.profiles.create(adminCtx(), {
      name: "docs",
      target: { kind: "interface", interface: "sql" },
      provider: "postgres",
    });
    await env.profiles.grant(adminCtx(), profile.id, { kind: "workflow", id: "wf-9" });
    const resolved = await resolveProfile(
      env.deps,
      ctx({ actor: { kind: "workflow", id: "wf-9" } }),
      "sql",
      "docs",
    );
    expect(resolved.profileId).toBe(profile.id);
  });

  it("admins pass without grants; auth-none skips enforcement", async () => {
    await env.profiles.create(adminCtx(), {
      name: "docs",
      target: { kind: "interface", interface: "sql" },
      provider: "postgres",
    });
    await expect(resolveProfile(env.deps, adminCtx(), "sql", "docs")).resolves.toBeDefined();

    const none = await makeEnv({ authMode: "none" });
    try {
      await none.profiles.create(adminCtx(), {
        name: "docs",
        target: { kind: "interface", interface: "sql" },
        provider: "postgres",
      });
      await expect(resolveProfile(none.deps, ctx(), "sql", "docs")).resolves.toBeDefined();
    } finally {
      await none.close();
    }
  });

  it("governed tenant with a connected credential but no default profile is refused 403", async () => {
    await env.credentials.create("t1", "user-1", {
      provider: "postgres",
      payload: bearer("pg"),
    });
    const firstForProvider = vi.spyOn(env.credentials, "firstForProvider");
    const error = await resolveProfile(env.deps, ctx(), "sql").catch((e) => e);
    expect(error).toBeInstanceOf(ServiceError);
    expect(error.status).toBe(403);
    expect(error.message).toBe(
      'No default profile for sql. Ask a workspace admin to grant a profile.',
    );
    expect(firstForProvider).not.toHaveBeenCalled();
  });

  it("connecting a credential provisions a granted default profile for its provider target (§3)", async () => {
    // Unlike the interface case above, a provider-target `default` row is
    // provisioned in the SAME transaction as the credential (tech-plan D3) —
    // the connecting principal ("user-1", matching ctx()) can dispatch it
    // immediately, with no admin step.
    const cred = await env.credentials.create("t1", "user-1", {
      provider: "github",
      payload: bearer("gh"),
    });
    const resolved = await resolveProfile(env.deps, ctx(), "github");
    expect(resolved.credential?.id).toBe(cred.id);
    expect(resolved.profileId).toBeDefined();

    // A caller NOT granted (didn't connect it) still gets the 403 — the
    // provisioned row is grant-checked like any other stored profile.
    const error = await resolveProfile(env.deps, ctx({ principal: "someone-else" }), "github").catch(
      (e) => e,
    );
    expect(error.status).toBe(403);
  });

  it("authMode none with connected credential and no row resolves via ungoverned fallback", async () => {
    const none = await makeEnv({ authMode: "none" });
    try {
      await none.credentials.create("t1", "user-1", {
        provider: "postgres",
        payload: bearer("pg"),
      });
      const resolved = await resolveProfile(none.deps, ctx(), "sql");
      expect(resolved.provider).toBe("postgres");
      expect(resolved.credential?.payload).toEqual(bearer("pg"));
    } finally {
      await none.close();
    }
  });

  it("an explicit stored default profile IS grant-checked; ungoverned fallback only in auth-none", async () => {
    await env.credentials.create("t1", "user-1", {
      provider: "postgres",
      payload: bearer("pg"),
    });
    // Governed mode: no stored profile → 403, not a credential.
    const governed = await resolveProfile(env.deps, ctx(), "sql").catch((e) => e);
    expect(governed.status).toBe(403);
    // Ungoverned mode: synthesized fallback still works without a grant.
    const none = await makeEnv({ authMode: "none" });
    try {
      await none.credentials.create("t1", "user-1", {
        provider: "postgres",
        payload: bearer("pg"),
      });
      await expect(resolveProfile(none.deps, ctx(), "sql")).resolves.toBeDefined();
    } finally {
      await none.close();
    }
    // Stored default: member without a grant is refused.
    await env.profiles.create(adminCtx(), {
      name: "default",
      target: { kind: "interface", interface: "sql" },
      provider: "postgres",
    });
    const error = await resolveProfile(env.deps, ctx(), "sql").catch((e) => e);
    expect(error.status).toBe(403);
  });
});

describe("resolveProfile return paths", () => {
  it("enumerates every return and confirms grant-check coverage", async () => {
    const { readFileSync } = await import("node:fs");
    const { fileURLToPath } = await import("node:url");
    const { dirname, join } = await import("node:path");
    const sourcePath = join(
      dirname(fileURLToPath(import.meta.url)),
      "../src/profiles/resolve.ts",
    );
    const source = readFileSync(sourcePath, "utf8");
    const fnStart = source.indexOf("export async function resolveProfile");
    const fnBody = source.slice(fnStart);
    const returns: number[] = [];
    for (const match of fnBody.matchAll(/\breturn\b/g)) {
      returns.push(match.index!);
    }
    expect(returns).toHaveLength(3);

    const step4ReturnIdx = returns[0]!;
    const step4Body = fnBody.slice(0, step4ReturnIdx);
    // The grant + role check itself now lives in the extracted
    // `authorizeCaller` helper (grant-enforcement §4) — step 4 must still
    // call it before its return, and the helper itself must still gate on
    // authMode/role.
    expect(step4Body).toMatch(/authorizeCaller\(/);
    const authorizeFnStart = source.indexOf("async function authorizeCaller");
    const authorizeFnBody = source.slice(authorizeFnStart, fnStart);
    expect(authorizeFnBody).toMatch(/authMode !== "none"/);
    expect(authorizeFnBody).toMatch(/ctx\.role !== "admin"/);

    const governedGate = fnBody.slice(
      fnBody.indexOf("// Governed tenants must have a granted default profile"),
      returns[1],
    );
    expect(governedGate).toMatch(/authMode !== "none"/);
    expect(governedGate).toMatch(/403/);

    const step5Block = fnBody.slice(returns[1], returns[2]! + 50);
    expect(step5Block).not.toMatch(/NOT grant-checked/);
  });

  it("step 4 return: granted member receives credential", async () => {
    const profile = await env.profiles.create(adminCtx(), {
      name: "default",
      target: { kind: "provider", provider: "github" },
    });
    await env.profiles.grant(adminCtx(), profile.id, { kind: "user", id: "user-1" });
    const cred = await env.credentials.create("t1", "user-1", {
      provider: "github",
      payload: bearer("gh"),
    });
    const resolved = await resolveProfile(env.deps, ctx(), "github");
    expect(resolved.credential?.id).toBe(cred.id);
    expect(resolved.profileId).toBe(profile.id);
  });

  it("step 5 interface return: only reachable when authMode is none", async () => {
    await env.credentials.create("t1", "user-1", {
      provider: "snowflake",
      payload: bearer("snow"),
    });
    const governed = await resolveProfile(env.deps, ctx(), "sql").catch((e) => e);
    expect(governed.status).toBe(403);

    const none = await makeEnv({ authMode: "none" });
    try {
      await none.credentials.create("t1", "user-1", {
        provider: "snowflake",
        payload: bearer("snow"),
      });
      const resolved = await resolveProfile(none.deps, ctx(), "sql");
      expect(resolved.provider).toBe("snowflake");
      expect(resolved.profileId).toBeUndefined();
    } finally {
      await none.close();
    }
  });

  it("step 5 provider return: only reachable when authMode is none AND the row was never provisioned", async () => {
    // `credentials.create()` now provisions a granted `default` row (§3), so
    // it resolves via step 4 even under governed auth — see the provisioning
    // test above. Step 5's provider branch survives only for rows that never
    // went through that path (e.g. a driver-level write bypassing the
    // service, exercised here directly against storage).
    await env.storage.credentials.create("t1", {
      provider: "github",
      type: "bearer_token",
      payload: JSON.stringify(bearer("gh")),
      createdBy: "user-1",
    });
    const governed = await resolveProfile(env.deps, ctx(), "github").catch((e) => e);
    expect(governed.status).toBe(403);

    const none = await makeEnv({ authMode: "none" });
    try {
      await none.storage.credentials.create("t1", {
        provider: "github",
        type: "bearer_token",
        payload: JSON.stringify(bearer("gh")),
        createdBy: "user-1",
      });
      const resolved = await resolveProfile(none.deps, ctx(), "github");
      expect(resolved.credential?.payload).toEqual(bearer("gh"));
      expect(resolved.profileId).toBeUndefined();
    } finally {
      await none.close();
    }
  });
});

describe("provider API version (graphql-schema-surface D4)", () => {
  const SHOPIFY_VERSIONING = {
    apiVersions: ["2024-10", "2025-01"],
    defaultVersion: "2025-01",
    versionedBaseUrl: "https://{shop}.myshopify.com/admin/api/{version}/graphql.json",
  };

  it("a pinned version selects its own endpoint via versionedBaseUrl", async () => {
    const versioned = await makeEnv({
      authMode: "none",
      providerVersions: { shopify: SHOPIFY_VERSIONING },
      knownProviders: ["shopify"],
    });
    try {
      await versioned.storage.credentials.create("t1", {
        provider: "shopify",
        type: "bearer_token",
        payload: JSON.stringify(bearer("shop-token")),
        createdBy: "user-1",
      });
      await versioned.storage.profiles.create("t1", {
        name: "default",
        targetKind: "provider",
        targetId: "shopify",
        version: "2024-10",
        options: {},
        createdBy: "user-1",
      });
      const resolved = await resolveProfile(versioned.deps, ctx(), "shopify");
      expect(resolved.version).toBe("2024-10");
      expect(resolved.baseUrl).toBe(
        "https://{shop}.myshopify.com/admin/api/2024-10/graphql.json",
      );
    } finally {
      await versioned.close();
    }
  });

  it("no pinned version resolves the provider's defaultVersion", async () => {
    const versioned = await makeEnv({
      authMode: "none",
      providerVersions: { shopify: SHOPIFY_VERSIONING },
      knownProviders: ["shopify"],
    });
    try {
      await versioned.storage.credentials.create("t1", {
        provider: "shopify",
        type: "bearer_token",
        payload: JSON.stringify(bearer("shop-token")),
        createdBy: "user-1",
      });
      const resolved = await resolveProfile(versioned.deps, ctx(), "shopify");
      expect(resolved.version).toBe("2025-01");
      expect(resolved.baseUrl).toBe(
        "https://{shop}.myshopify.com/admin/api/2025-01/graphql.json",
      );
    } finally {
      await versioned.close();
    }
  });

  it("a version with no schema in apiVersions fails loudly naming the supported set", async () => {
    const versioned = await makeEnv({
      authMode: "none",
      providerVersions: { shopify: SHOPIFY_VERSIONING },
      knownProviders: ["shopify"],
    });
    try {
      await versioned.storage.credentials.create("t1", {
        provider: "shopify",
        type: "bearer_token",
        payload: JSON.stringify(bearer("shop-token")),
        createdBy: "user-1",
      });
      await versioned.storage.profiles.create("t1", {
        name: "default",
        targetKind: "provider",
        targetId: "shopify",
        version: "2023-07",
        options: {},
        createdBy: "user-1",
      });
      const error = await resolveProfile(versioned.deps, ctx(), "shopify").catch((e) => e);
      expect(error).toBeInstanceOf(ServiceError);
      expect(error.status).toBe(400);
      expect(error.message).toMatch(/no API version "2023-07"/u);
      expect(error.message).toMatch(/2024-10, 2025-01/u);
    } finally {
      await versioned.close();
    }
  });

  it("a profile setting baseUrl on a versioned provider is refused 400 — endpoint must be derived", async () => {
    const versioned = await makeEnv({
      authMode: "none",
      providerVersions: { shopify: SHOPIFY_VERSIONING },
      knownProviders: ["shopify"],
    });
    try {
      await versioned.storage.credentials.create("t1", {
        provider: "shopify",
        type: "bearer_token",
        payload: JSON.stringify(bearer("shop-token")),
        createdBy: "user-1",
      });
      await versioned.storage.profiles.create("t1", {
        name: "default",
        targetKind: "provider",
        targetId: "shopify",
        options: { baseUrl: "https://myshop.myshopify.com/admin/api/2024-10/graphql.json" },
        createdBy: "user-1",
      });
      const error = await resolveProfile(versioned.deps, ctx(), "shopify").catch((e) => e);
      expect(error).toBeInstanceOf(ServiceError);
      expect(error.status).toBe(400);
      expect(error.message).toMatch(/derives its endpoint from the resolved API version/u);
      expect(error.message).toMatch(/may not also set "baseUrl"/u);
    } finally {
      await versioned.close();
    }
  });

  it("a pinned version on an unversioned provider fails loudly", async () => {
    const none = await makeEnv({ authMode: "none" });
    try {
      await none.storage.credentials.create("t1", {
        provider: "github",
        type: "bearer_token",
        payload: JSON.stringify(bearer("gh")),
        createdBy: "user-1",
      });
      await none.storage.profiles.create("t1", {
        name: "default",
        targetKind: "provider",
        targetId: "github",
        version: "v4",
        options: {},
        createdBy: "user-1",
      });
      const error = await resolveProfile(none.deps, ctx(), "github").catch((e) => e);
      expect(error).toBeInstanceOf(ServiceError);
      expect(error.status).toBe(400);
      expect(error.message).toMatch(/declares no apiVersions/u);
    } finally {
      await none.close();
    }
  });

  it("unversioned providers are unaffected — baseUrl and options pass through unchanged", async () => {
    const cred = await env.credentials.create("t1", "user-1", {
      provider: "postgres",
      payload: bearer("pg-token"),
    });
    await env.profiles.create(adminCtx(), {
      name: "docs",
      target: { kind: "interface", interface: "sql" },
      provider: "postgres",
      credentialId: cred.id,
      options: { database: "docs" },
    });
    const resolved = await resolveProfile(env.deps, adminCtx(), "sql", "docs");
    expect(resolved.version).toBeUndefined();
    expect(resolved.options).toEqual({ database: "docs" });
  });
});

describe("replaced mechanisms", () => {
  it("colon namespace no longer routes — unknown-namespace error mentions profile dispatch", async () => {
    const error = await resolveProfile(env.deps, adminCtx(), "sql:analytics").catch((e) => e);
    expect(error).toBeInstanceOf(ServiceError);
    expect(error.status).toBe(404);
    expect(error.message).toMatch(/profile/u);
    expect(error.message).toMatch(/client\("analytics"\)/u);
  });

  it("unknown namespaces are refused with an actionable error", async () => {
    const error = await resolveProfile(env.deps, adminCtx(), "not-a-thing").catch((e) => e);
    expect(error.status).toBe(404);
    expect(error.message).toMatch(/Unknown tool namespace "not-a-thing"/u);
  });
});
