/**
 * Resource grants (iw9-c stream 3): matcher scenarios, CRUD round-trip, and
 * MCP/sandbox dispatch deny/allow through the shared assertResourceAccess
 * predicate (not a second gate).
 */

import { afterEach, describe, expect, it } from "vitest";
import {
  assertResourceAccess,
  matchesResourcePattern,
} from "../../index.js";
import { buildMcpServer, resetMcpCatalog, setMcpCatalogForTesting } from "../../mcp/server.js";
import {
  createSandboxMcpExtensions,
  SANDBOX_TOOL_NAME,
} from "../../mcp/sandbox-tool.js";
import { createOAuthTokenCache } from "../../credentials/oauth.js";
import { Dispatcher } from "../index.js";
import { RateLimiter } from "../limits.js";
import { ProviderExecutor } from "../../executor/index.js";
import { NativeServiceRegistry } from "../../kernel/index.js";
import { RegistryTelemetry } from "../../telemetry/index.js";
import {
  SimpleSpanProcessor,
  InMemorySpanExporter,
} from "@opentelemetry/sdk-trace-base";
import {
  adminCtx,
  ctx,
  fakeProviderModule,
  makeEnv,
  TEST_CATALOG,
  type DispatchEnv,
} from "../../../tests/helpers.js";
import type { CallContext } from "../../config/types.js";
import type { ResourceGrantRow } from "../../storage/types.js";

let env: DispatchEnv;

afterEach(async () => {
  await env?.close();
  resetMcpCatalog();
});

const bearer = (token: string) => ({ type: "bearer_token" as const, token });

async function makeResourceDispatchEnv(): Promise<DispatchEnv> {
  const base = await makeEnv({ authMode: "oidc" });
  const executor = new ProviderExecutor();
  const natives = new NativeServiceRegistry();
  const limiter = new RateLimiter();
  const exporter = new InMemorySpanExporter();
  const telemetry = new RegistryTelemetry({
    spanProcessor: new SimpleSpanProcessor(exporter),
  });
  await telemetry.ready();
  const dispatcher = new Dispatcher({
    catalog: TEST_CATALOG,
    natives,
    credentials: base.credentials,
    resolveDeps: base.deps,
    executor,
    limiter,
    telemetry,
    audit: base.storage.audit,
    oauthCache: createOAuthTokenCache(),
    resourceGrants: base.storage.resourceGrants,
  });
  return { ...base, dispatcher, executor, natives, limiter, telemetry, exporter };
}

async function callServerTool(
  server: Awaited<ReturnType<typeof buildMcpServer>>,
  name: string,
  args: Record<string, unknown>,
) {
  const internals = server as unknown as {
    _requestHandlers: Map<string, (req: unknown, extra: unknown) => Promise<unknown>>;
  };
  const handler = internals._requestHandlers.get("tools/call")!;
  return handler(
    { method: "tools/call", params: { name, arguments: args } },
    { signal: new AbortController().signal },
  ) as Promise<{ content: Array<{ type: string; text: string }>; isError?: boolean }>;
}

function makeServer(callerCtx: CallContext) {
  return buildMcpServer(
    {
      dispatcher: env.dispatcher,
      resolveDeps: env.deps,
      extensions: createSandboxMcpExtensions({
        dispatcher: env.dispatcher,
        resolveDeps: env.deps,
        resourceGrants: env.storage.resourceGrants,
      }),
    },
    callerCtx,
  );
}

describe("matchesResourcePattern", () => {
  it("Wildcard host segment", () => {
    expect(
      matchesResourcePattern(
        "https://*.github.com/aprovan/**",
        "https://api.github.com/aprovan/registry/issues",
      ),
    ).toBe(true);
  });

  it("No partial-segment match", () => {
    expect(
      matchesResourcePattern(
        "https://github.com/aprovan-labs/**",
        "https://github.com/aprovan-labs-evil/x",
      ),
    ).toBe(false);
  });

  it("literal path match and case-insensitive host", () => {
    expect(
      matchesResourcePattern("https://API.GitHub.com/aprovan/x", "https://api.github.com/aprovan/x"),
    ).toBe(true);
  });

  it("single-segment * does not span slashes", () => {
    expect(
      matchesResourcePattern("https://github.com/*/readme", "https://github.com/aprovan/readme"),
    ).toBe(true);
    expect(
      matchesResourcePattern(
        "https://github.com/*/readme",
        "https://github.com/aprovan/nested/readme",
      ),
    ).toBe(false);
  });

  it("trailing * is a suffix wildcard", () => {
    expect(
      matchesResourcePattern("https://github.com/aprovan/*", "https://github.com/aprovan/a/b"),
    ).toBe(true);
  });
});

describe("resource_grants store CRUD", () => {
  it("round-trips create / get / list / revoke", async () => {
    env = await makeResourceDispatchEnv();
    const created = await env.storage.resourceGrants.create("t1", {
      subject: { kind: "user", id: "user-1" },
      capability: "email.send",
      resourcePattern: "mailto:*@aprovan.com",
      credentialLevel: "workspace-oauth",
      grantedBy: "admin",
    });

    expect(created.id).toBeTruthy();
    expect(created.resourcePattern).toBe("mailto:*@aprovan.com");
    expect(created.revokedAt).toBeUndefined();

    const got = await env.storage.resourceGrants.get("t1", created.id);
    expect(got).toEqual(created);

    const listed = await env.storage.resourceGrants.list("t1", {
      subject: { kind: "user", id: "user-1" },
      capability: "email.send",
    });
    expect(listed).toHaveLength(1);
    expect(listed[0]?.id).toBe(created.id);

    const forSubjects = await env.storage.resourceGrants.listForSubjects("t1", [
      { kind: "user", id: "user-1" },
    ]);
    expect(forSubjects.map((row: ResourceGrantRow) => row.id)).toContain(created.id);

    expect(await env.storage.resourceGrants.revoke("t1", created.id)).toBe(true);
    const revoked = await env.storage.resourceGrants.get("t1", created.id);
    expect(revoked?.revokedAt).toBeTruthy();
    expect(
      await env.storage.resourceGrants.listForSubjects("t1", [{ kind: "user", id: "user-1" }]),
    ).toHaveLength(0);
    expect(await env.storage.resourceGrants.revoke("t1", created.id)).toBe(false);
  });
});

describe("assertResourceAccess (shared predicate)", () => {
  it("allows when no resource grants exist for the capability", async () => {
    env = await makeResourceDispatchEnv();
    await expect(
      assertResourceAccess(
        { authMode: "oidc", resourceGrants: env.storage.resourceGrants },
        ctx(),
        "email.send",
        "mailto:anyone@example.com",
      ),
    ).resolves.toBeUndefined();
  });

  it("denies a resource outside the pattern and allows one inside", async () => {
    env = await makeResourceDispatchEnv();
    await env.storage.resourceGrants.create("t1", {
      subject: { kind: "user", id: "user-1" },
      capability: "github.repos.get",
      resourcePattern: "https://*.github.com/aprovan/**",
      credentialLevel: "workspace-token",
      grantedBy: "admin",
    });

    await expect(
      assertResourceAccess(
        { authMode: "oidc", resourceGrants: env.storage.resourceGrants },
        ctx(),
        "github.repos.get",
        "https://api.github.com/aprovan/registry/issues",
      ),
    ).resolves.toBeUndefined();

    await expect(
      assertResourceAccess(
        { authMode: "oidc", resourceGrants: env.storage.resourceGrants },
        ctx(),
        "github.repos.get",
        "https://api.github.com/other/repo",
      ),
    ).rejects.toMatchObject({ status: 403 });
  });

  it("admins are not exempt when resource grants exist", async () => {
    env = await makeResourceDispatchEnv();
    await env.storage.resourceGrants.create("t1", {
      subject: { kind: "user", id: "user-1" },
      capability: "email.send",
      resourcePattern: "mailto:*@aprovan.com",
      credentialLevel: "workspace-oauth",
      grantedBy: "admin",
    });
    await expect(
      assertResourceAccess(
        { authMode: "oidc", resourceGrants: env.storage.resourceGrants },
        adminCtx({ principal: "user-1" }),
        "email.send",
        "mailto:bob@example.org",
      ),
    ).rejects.toMatchObject({ status: 403 });
  });
});

describe("MCP/sandbox dispatch resource enforcement", () => {
  it("denies a resource outside the pattern and allows one inside it", async () => {
    env = await makeResourceDispatchEnv();
    setMcpCatalogForTesting([]);
    const { mod, calls } = fakeProviderModule("createGithubClient");
    env.executor.setModuleForTesting("@utdk/clients/github", mod);
    await env.credentials.create("t1", "user-1", { provider: "github", payload: bearer("gh") });

    await env.storage.resourceGrants.create("t1", {
      subject: { kind: "user", id: "user-1" },
      capability: "github.repos.get",
      resourcePattern: "https://*.github.com/aprovan/**",
      credentialLevel: "workspace-token",
      grantedBy: "admin",
    });

    const server = await makeServer(ctx({ source: { type: "mcp" } }));

    const denied = await callServerTool(server, SANDBOX_TOOL_NAME, {
      namespaces: ["github"],
      source: `
        export default async function run() {
          return await tools.github.repos.get({
            owner: "other",
            repo: "x",
            resource: "https://api.github.com/other/x",
          });
        }
      `,
    });
    expect(denied.isError ?? false).toBe(true);
    expect(denied.content[0]?.text).toMatch(/outside the granted patterns/i);
    expect(calls).toHaveLength(0);

    const allowed = await callServerTool(server, SANDBOX_TOOL_NAME, {
      namespaces: ["github"],
      source: `
        export default async function run() {
          return await tools.github.repos.get({
            owner: "aprovan",
            repo: "registry",
            resource: "https://api.github.com/aprovan/registry",
          });
        }
      `,
    });
    expect(allowed.isError ?? false).toBe(false);
    expect(JSON.parse(allowed.content[0]?.text ?? "null")).toEqual({
      echoed: {
        owner: "aprovan",
        repo: "registry",
        resource: "https://api.github.com/aprovan/registry",
      },
    });
    expect(calls).toHaveLength(1);
  });
});
