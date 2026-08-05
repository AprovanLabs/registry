/**
 * MCP sandbox execution tool tests (grant-enforcement §5): `run_script` is
 * registered through the generic `McpExtensions` hook, refuses to register
 * under `authMode: "none"`, dispatches `tools.<namespace>` calls through the
 * same pipeline as `call_tool` (so a namespace hidden from `list_tools` is
 * unreachable from inside a submitted script too), and honours an optional
 * `narrowedTo` argument.
 */

import { afterEach, describe, expect, it } from "vitest";
import { buildMcpServer, resetMcpCatalog, setMcpCatalogForTesting } from "../src/mcp/server.js";
import {
  createSandboxMcpExtensions,
  withSandboxTool,
  SANDBOX_TOOL_NAME,
} from "../src/mcp/sandbox-tool.js";
import { adminCtx, ctx, fakeProviderModule, makeDispatchEnv, type DispatchEnv } from "./helpers.js";
import type { CallContext, McpExtensions } from "../src/config/types.js";

let env: DispatchEnv;

afterEach(async () => {
  await env?.close();
  resetMcpCatalog();
});

const bearer = (token: string) => ({ type: "bearer_token" as const, token });

/** Drive a Server's request handler directly (no transport round-trip). */
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

async function listServerTools(server: Awaited<ReturnType<typeof buildMcpServer>>) {
  const internals = server as unknown as {
    _requestHandlers: Map<string, (req: unknown, extra: unknown) => Promise<unknown>>;
  };
  const handler = internals._requestHandlers.get("tools/list")!;
  return handler({ method: "tools/list", params: {} }, { signal: new AbortController().signal }) as Promise<{
    tools: Array<{ name: string }>;
  }>;
}

function makeServer(callerCtx: CallContext, extensions?: McpExtensions) {
  return buildMcpServer(
    {
      dispatcher: env.dispatcher,
      resolveDeps: env.deps,
      ...(extensions ? { extensions } : {}),
    },
    callerCtx,
  );
}

async function callRunScript(
  server: Awaited<ReturnType<typeof buildMcpServer>>,
  args: Record<string, unknown>,
) {
  const result = await callServerTool(server, SANDBOX_TOOL_NAME, args);
  const text = result.content[0]?.text ?? "";
  return { isError: result.isError ?? false, text };
}

describe("mcp sandbox tool — registration", () => {
  it("is not registered at all when authMode is \"none\"", async () => {
    env = await makeDispatchEnv({ authMode: "none" });
    setMcpCatalogForTesting([]);
    const extensions = createSandboxMcpExtensions({ dispatcher: env.dispatcher, resolveDeps: env.deps });
    expect(extensions.tools).toBeUndefined();
    expect(extensions.handleTool).toBeUndefined();

    const server = await makeServer(ctx({ source: { type: "mcp" } }), extensions);
    const listed = await listServerTools(server);
    expect(listed.tools.map((t) => t.name)).not.toContain(SANDBOX_TOOL_NAME);
  });

  it("is registered under governed auth modes, alongside meta-tools and host extensions", async () => {
    env = await makeDispatchEnv({ authMode: "oidc" });
    setMcpCatalogForTesting([]);
    const extensions = withSandboxTool(
      { dispatcher: env.dispatcher, resolveDeps: env.deps },
      { tools: [{ name: "fs_read", description: "Read a file", inputSchema: { type: "object" } }] },
    );
    const server = await makeServer(adminCtx({ source: { type: "mcp" } }), extensions);
    const listed = await listServerTools(server);
    const names = listed.tools.map((t) => t.name);
    expect(names).toContain(SANDBOX_TOOL_NAME);
    expect(names).toContain("fs_read");
    expect(names).toContain("call_tool");
  });
});

describe("mcp sandbox tool — dispatch parity with call_tool", () => {
  it("a granted namespace is reachable from inside a submitted script", async () => {
    env = await makeDispatchEnv({ authMode: "oidc" });
    setMcpCatalogForTesting([]);
    const { mod, calls } = fakeProviderModule("createGithubClient");
    env.executor.setModuleForTesting("@utdk/clients/github", mod);
    // Connecting the credential provisions a granted `default` profile for
    // the connecting principal (grant-enforcement §3).
    await env.credentials.create("t1", "user-1", { provider: "github", payload: bearer("gh") });

    const extensions = createSandboxMcpExtensions({ dispatcher: env.dispatcher, resolveDeps: env.deps });
    const server = await makeServer(ctx({ source: { type: "mcp" } }), extensions);

    const { isError, text } = await callRunScript(server, {
      namespaces: ["github"],
      source: `
        export default async function run() {
          const r = await tools.github.repos.get({ owner: "o", repo: "r" });
          return r;
        }
      `,
    });
    expect(isError).toBe(false);
    expect(JSON.parse(text)).toEqual({ echoed: { owner: "o", repo: "r" } });
    expect(calls[0]?.headers).toEqual({ Authorization: "Bearer gh" });
  });

  it("a namespace hidden from list_tools is unreachable from inside a submitted script (confused-deputy case)", async () => {
    env = await makeDispatchEnv({ authMode: "oidc" });
    setMcpCatalogForTesting([]);
    const { mod } = fakeProviderModule("createGithubClient");
    env.executor.setModuleForTesting("@utdk/clients/github", mod);
    // Connected by "admin" — the connecting principal, not "user-1".
    await env.credentials.create("t1", "admin", { provider: "github", payload: bearer("gh") });

    const extensions = createSandboxMcpExtensions({ dispatcher: env.dispatcher, resolveDeps: env.deps });
    const memberServer = await makeServer(ctx({ source: { type: "mcp" } }), extensions);

    const { isError, text } = await callRunScript(memberServer, {
      namespaces: ["github"],
      source: `
        export default async function run() {
          return await tools.github.repos.get({ owner: "o", repo: "r" });
        }
      `,
    });
    expect(isError).toBe(true);
    expect(text).toMatch(/not granted/iu);
  });

  it("the script can catch the same 403 dispatch would return directly", async () => {
    env = await makeDispatchEnv({ authMode: "oidc" });
    setMcpCatalogForTesting([]);
    const { mod } = fakeProviderModule("createGithubClient");
    env.executor.setModuleForTesting("@utdk/clients/github", mod);
    await env.credentials.create("t1", "admin", { provider: "github", payload: bearer("gh") });

    const extensions = createSandboxMcpExtensions({ dispatcher: env.dispatcher, resolveDeps: env.deps });
    const memberServer = await makeServer(ctx({ source: { type: "mcp" } }), extensions);

    const { isError, text } = await callRunScript(memberServer, {
      namespaces: ["github"],
      source: `
        export default async function run() {
          try {
            await tools.github.repos.get({ owner: "o", repo: "r" });
            return "unreachable";
          } catch (err) {
            return "caught: " + err.message;
          }
        }
      `,
    });
    expect(isError).toBe(false);
    expect(JSON.parse(text)).toMatch(/caught:.*not granted/iu);
  });
});

describe("mcp sandbox tool — narrowing", () => {
  async function grantTwoProviders() {
    const { mod: githubMod, calls: githubCalls } = fakeProviderModule("createGithubClient");
    const { mod: slackMod, calls: slackCalls } = fakeProviderModule("createSlackClient");
    env.executor.setModuleForTesting("@utdk/clients/github", githubMod);
    env.executor.setModuleForTesting("@utdk/clients/slack", slackMod);
    await env.credentials.create("t1", "user-1", { provider: "github", payload: bearer("gh") });
    await env.credentials.create("t1", "user-1", { provider: "slack", payload: bearer("sl") });
    return { githubCalls, slackCalls };
  }

  it("a narrowed run can reach an in-scope namespace but not a granted-but-excluded one", async () => {
    env = await makeDispatchEnv({ authMode: "oidc" });
    setMcpCatalogForTesting([]);
    await grantTwoProviders();

    const extensions = createSandboxMcpExtensions({ dispatcher: env.dispatcher, resolveDeps: env.deps });
    const server = await makeServer(ctx({ source: { type: "mcp" } }), extensions);

    const allowed = await callRunScript(server, {
      namespaces: ["github"],
      narrowedTo: ["github"],
      source: `export default async () => await tools.github.repos.get({ owner: "o", repo: "r" });`,
    });
    expect(allowed.isError).toBe(false);

    const excluded = await callRunScript(server, {
      namespaces: ["slack"],
      narrowedTo: ["github"],
      source: `export default async () => await tools.slack.repos.get({ owner: "o", repo: "r" });`,
    });
    expect(excluded.isError).toBe(true);
    expect(excluded.text).toMatch(/outside this run's narrowed scope/iu);
  });

  it("a narrowing request that is a superset of the caller's grant is rejected, not silently clamped", async () => {
    env = await makeDispatchEnv({ authMode: "oidc" });
    setMcpCatalogForTesting([]);
    await grantTwoProviders();

    const extensions = createSandboxMcpExtensions({ dispatcher: env.dispatcher, resolveDeps: env.deps });
    const server = await makeServer(ctx({ source: { type: "mcp" } }), extensions);

    const { isError, text } = await callRunScript(server, {
      namespaces: ["github"],
      narrowedTo: ["github", "not-granted-provider"],
      source: `export default async () => "unreachable";`,
    });
    expect(isError).toBe(true);
    expect(text).toMatch(/narrowedTo includes providers not granted/iu);
  });
});
