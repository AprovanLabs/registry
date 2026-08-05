import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it, vi } from "vitest";
import { parseScriptDependencies, rewriteDefaultExport } from "../src/imports.js";
import { scanToolsAccess } from "../src/tools-scan.js";
import { withPolicy } from "../src/policy.js";
import { createNamespaceProxy, createRuntimeGlobals, createToolsGlobal } from "../src/proxy.js";
import { AliasResolutionError } from "../src/types.js";
import { instrument } from "../src/transport.js";
import {
  TransportError,
  type RuntimeEvent,
  type Transport,
  type TransportCallOptions,
} from "../src/types.js";

const packageRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

function recordingTransport(
  impl: (
    provider: string,
    operation: string,
    args: Record<string, unknown>,
    options?: TransportCallOptions,
  ) => Promise<unknown> = () => Promise.resolve("ok"),
): Transport & {
  calls: Array<{
    provider: string;
    operation: string;
    args: Record<string, unknown>;
    options?: TransportCallOptions;
  }>;
} {
  const calls: Array<{
    provider: string;
    operation: string;
    args: Record<string, unknown>;
    options?: TransportCallOptions;
  }> = [];
  return {
    calls,
    call(provider, operation, args, options) {
      calls.push({ provider, operation, args, options });
      return impl(provider, operation, args, options);
    },
  };
}

describe("package constraints", () => {
  it("declares no @aprovan/* dependencies", () => {
    const manifest = JSON.parse(
      readFileSync(join(packageRoot, "package.json"), "utf8"),
    ) as {
      dependencies?: Record<string, string>;
      peerDependencies?: Record<string, string>;
      optionalDependencies?: Record<string, string>;
      devDependencies?: Record<string, string>;
    };

    for (const [field, entries] of Object.entries({
      dependencies: manifest.dependencies,
      peerDependencies: manifest.peerDependencies,
      optionalDependencies: manifest.optionalDependencies,
      devDependencies: manifest.devDependencies,
    })) {
      for (const name of Object.keys(entries ?? {})) {
        expect(name.startsWith("@aprovan/"), `${field} contains ${name}`).toBe(
          false,
        );
      }
    }
  });

  it("contains no DOM or iframe host code", () => {
    const srcDir = join(packageRoot, "src");
    const files = readdirSync(srcDir).filter((name) => name.endsWith(".ts"));
    expect(files.length).toBeGreaterThan(0);

    const forbidden =
      /\bdocument\b|\bwindow\b|\biframe\b|createElement\s*\(\s*["']iframe["']|service-result|srcdoc/i;

    for (const file of files) {
      const source = readFileSync(join(srcDir, file), "utf8");
      expect(source, `${file} must not reference DOM/iframe host APIs`).not.toMatch(
        forbidden,
      );
    }
  });
});

describe("scanToolsAccess", () => {
  it("ignores uses attribute semantics — only source matters", () => {
    const result = scanToolsAccess(
      `// uses="keyvalue events"\nawait tools.llm.createChatCompletion({ messages: [] });`,
    );
    expect(result.namespaces).toEqual(["llm"]);
    expect(result.unresolved).toBe(false);
  });

  it("ignores tools member access inside string literals", () => {
    const result = scanToolsAccess(`
      const hint = "tools.github is not a call";
      await tools.vfs.read({ path: "/x" });
    `);
    expect(result.namespaces).toEqual(["vfs"]);
    expect(result.unresolved).toBe(false);
  });

  it("sorts and deduplicates namespace names", () => {
    const result = scanToolsAccess(`
      await tools.zfs.read({ path: "/a" });
      await tools.vfs.read({ path: "/b" });
      await tools.vfs.read({ path: "/c" });
    `);
    expect(result.namespaces).toEqual(["vfs", "zfs"]);
    expect(result.unresolved).toBe(false);
  });
});

describe("parseScriptDependencies", () => {
  it("derives dependencies from tools member access", () => {
    const source = [
      `export default async function run() {`,
      `  await tools.vfs.read({ path: "/x" });`,
      `  await tools.github.repos.get({ owner: "a", repo: "b" });`,
      `}`,
    ].join("\n");

    const { dependencies, body, unresolved } = parseScriptDependencies(source);

    expect(dependencies).toEqual([
      { identifier: "github", specifier: "tools.github", provider: "github", path: "" },
      { identifier: "vfs", specifier: "tools.vfs", provider: "vfs", path: "" },
    ]);
    expect(unresolved).toBe(false);
    expect(body).toBe(source);
  });

  it("counts configured access once and flags dynamic access", () => {
    const configured = parseScriptDependencies(
      `await tools.github({ name: "work" }).repos.get({ owner: "a", repo: "b" });`,
    );
    expect(configured.dependencies.map((d) => d.provider)).toEqual(["github"]);

    const dynamic = parseScriptDependencies(`await tools[ns].call();`);
    expect(dynamic.unresolved).toBe(true);
  });

  it("ignores shadowed local tools bindings", () => {
    const source = [
      `function inner() {`,
      `  const tools = { local: true };`,
      `  return tools.local;`,
      `}`,
      `await tools.vfs.read({ path: "/x" });`,
    ].join("\n");

    const { dependencies } = parseScriptDependencies(source);
    expect(dependencies.map((d) => d.provider)).toEqual(["vfs"]);
  });

  it("strips legacy imports from the body", () => {
    const source = `import github from '@utdk/github';\n\nexport default async function run() {}`;
    const { body } = parseScriptDependencies(source);
    expect(body).not.toContain("import");
    expect(body.split("\n")).toHaveLength(source.split("\n").length);
  });

  it("rewrites export default to a sandbox binding", () => {
    const body = rewriteDefaultExport("export default async function run() { return 1; }");
    expect(body).toBe("const __default__ = async function run() { return 1; }");
  });

  it("resolves scanned aliases to canonical provider names", () => {
    const aliases = new Map([["googleDrive", "google/drive"]]);
    const { dependencies } = parseScriptDependencies(
      `await tools.googleDrive.files.list({});`,
      aliases,
    );

    expect(dependencies).toEqual([
      {
        identifier: "googleDrive",
        specifier: "tools.googleDrive",
        provider: "google/drive",
        path: "",
      },
    ]);
  });

  it("errors on unknown aliases when an alias map is provided", () => {
    const aliases = new Map([["github", "github"]]);
    expect(() =>
      parseScriptDependencies(`await tools.unknownAlias.call({});`, aliases),
    ).toThrow(AliasResolutionError);
    expect(() =>
      parseScriptDependencies(`await tools.unknownAlias.call({});`, aliases),
    ).toThrow(/tools\.search\(\)/);
  });
});

describe("createNamespaceProxy", () => {
  it("routes nested member calls to the transport", async () => {
    const transport = recordingTransport();
    const github = createNamespaceProxy("github", transport);

    await (github as any).repos.list({ per_page: 10 });
    await (github as any).users.getByUsername({ username: "octocat" });

    expect(transport.calls.map(({ provider, operation, args }) => ({
      provider,
      operation,
      args,
    }))).toEqual([
      { provider: "github", operation: "repos.list", args: { per_page: 10 } },
      { provider: "github", operation: "users.getByUsername", args: { username: "octocat" } },
    ]);
  });

  it("returns a configured node at depth 0 without dispatching", async () => {
    const transport = recordingTransport();
    const github = createNamespaceProxy("github", transport);

    const configured = github({ name: "work" });
    expect(configured).toBeDefined();
    expect(transport.calls).toEqual([]);

    await (configured as any).repos.get({ owner: "o" });
    expect(transport.calls).toHaveLength(1);
    expect(transport.calls[0]?.operation).toBe("repos.get");
    expect(transport.calls[0]?.options?.profile).toBe("work");
  });

  it("accepts client(name) and client({ name, options }) without awaiting", async () => {
    const transport = recordingTransport();
    const github = createNamespaceProxy("github", transport);

    const work = (github as any).client("work");
    const fast = (github as any).client({ name: "fast", options: { effort: "low" } });
    expect(transport.calls).toEqual([]);

    await work.repos.get({ owner: "o" });
    await fast.repos.list({});
    // Reuse the same configured node — profile resolves once per call.
    await work.repos.get({ owner: "p" });

    expect(transport.calls).toEqual([
      {
        provider: "github",
        operation: "repos.get",
        args: { owner: "o" },
        options: { profile: "work" },
      },
      {
        provider: "github",
        operation: "repos.list",
        args: {},
        options: { profile: "fast", callSiteOptions: { effort: "low" } },
      },
      {
        provider: "github",
        operation: "repos.get",
        args: { owner: "p" },
        options: { profile: "work" },
      },
    ]);
  });

  it("pins a string name at depth 0", async () => {
    const transport = recordingTransport();
    const github = createNamespaceProxy("github", transport);
    await (github("work") as any).repos.get({});
    expect(transport.calls[0]?.options?.profile).toBe("work");
  });

  it("honors path prefixes and treats empty configure as a no-op pin", async () => {
    const transport = recordingTransport();
    const s3 = createNamespaceProxy("aws", transport, "s3");
    const github = createNamespaceProxy("github", transport);

    await (s3 as any).getFileUrl({ fileName: "a.mp4" });
    const bare = github();
    await (bare as any).repos.get({});

    expect(transport.calls.map(({ provider, operation, args, options }) => ({
      provider,
      operation,
      args,
      profile: options?.profile,
    }))).toEqual([
      { provider: "aws", operation: "s3.getFileUrl", args: { fileName: "a.mp4" }, profile: undefined },
      { provider: "github", operation: "repos.get", args: {}, profile: undefined },
    ]);
  });

  it("builds globals keyed by script identifier", async () => {
    const transport = recordingTransport();
    const globals = createRuntimeGlobals(
      [{ identifier: "slack", specifier: "slack", provider: "slack", path: "" }],
      transport,
    );

    await (globals["slack"] as any).postMessage({ channel: "#x" });
    expect(transport.calls[0]).toMatchObject({
      provider: "slack",
      operation: "postMessage",
      args: { channel: "#x" },
    });
  });
});

describe("createToolsGlobal", () => {
  it("dispatches slash-named providers under their canonical name", async () => {
    const transport = recordingTransport();
    const tools = createToolsGlobal(
      new Map([
        ["github", "github"],
        ["googleDrive", "google/drive"],
      ]),
      transport,
    );

    await (tools.googleDrive as any).files.list({});

    expect(transport.calls).toEqual([
      { provider: "google/drive", operation: "files.list", args: {}, options: undefined },
    ]);
  });

  it("errors on unknown aliases instead of returning undefined", () => {
    const tools = createToolsGlobal(new Map([["github", "github"]]), recordingTransport());

    expect(() => tools.unknownAlias).toThrow(AliasResolutionError);
    expect(() => tools.unknownAlias).toThrow(/tools\.search\(\)/);
  });
});

describe("withPolicy", () => {
  it("retries transient failures with backoff and reports retries", async () => {
    vi.useFakeTimers();
    let attempts = 0;
    const transport: Transport = {
      call: () => {
        attempts += 1;
        return attempts < 3
          ? Promise.reject(new TransportError("boom", 500))
          : Promise.resolve("recovered");
      },
    };
    const onRetry = vi.fn();
    const wrapped = withPolicy(
      transport,
      { retry: { attempts: 3, baseDelayMs: 10, maxDelayMs: 50 } },
      { onRetry },
    );

    const pending = wrapped.call("github", "repos.list", {});
    await vi.runAllTimersAsync();

    await expect(pending).resolves.toBe("recovered");
    expect(attempts).toBe(3);
    expect(onRetry).toHaveBeenCalledTimes(2);
    vi.useRealTimers();
  });

  it("does not retry client errors", async () => {
    let attempts = 0;
    const transport: Transport = {
      call: () => {
        attempts += 1;
        return Promise.reject(new TransportError("forbidden", 403));
      },
    };
    const wrapped = withPolicy(transport, { retry: { attempts: 3, baseDelayMs: 1 } });

    await expect(wrapped.call("github", "repos.list", {})).rejects.toThrow("forbidden");
    expect(attempts).toBe(1);
  });

  it("applies per-provider overrides on top of global policy", async () => {
    let attempts = 0;
    const transport: Transport = {
      call: () => {
        attempts += 1;
        return Promise.reject(new TransportError("flaky", 503));
      },
    };
    const wrapped = withPolicy(transport, {
      retry: { attempts: 1 },
      providers: { slack: { retry: { attempts: 2, baseDelayMs: 1 } } },
    });

    await expect(wrapped.call("slack", "postMessage", {})).rejects.toThrow("flaky");
    expect(attempts).toBe(2);
  });
});

describe("instrument", () => {
  it("emits paired call events with duration", async () => {
    const events: RuntimeEvent[] = [];
    const transport = instrument(recordingTransport(), (event) => events.push(event));

    await transport.call("github", "repos.list", { a: 1 });

    expect(events.map((event) => event.type)).toEqual(["call:start", "call:end"]);
    const end = events[1] as Extract<RuntimeEvent, { type: "call:end" }>;
    expect(end.ok).toBe(true);
    expect(end.provider).toBe("github");
    expect(end.durationMs).toBeGreaterThanOrEqual(0);
  });

  it("marks failed calls and rethrows", async () => {
    const events: RuntimeEvent[] = [];
    const failing: Transport = {
      call: () => Promise.reject(new Error("nope")),
    };
    const transport = instrument(failing, (event) => events.push(event));

    await expect(transport.call("slack", "postMessage", {})).rejects.toThrow("nope");
    const end = events[1] as Extract<RuntimeEvent, { type: "call:end" }>;
    expect(end.ok).toBe(false);
    expect(end.error).toBe("nope");
  });
});
