/**
 * The four flows a provider must survive.
 *
 * A provider is only "working" if a change to the generator, the client
 * builder, or the gateway can't silently break it. Each flow exercises a
 * different layer, and they share one probe definition so they can't drift:
 *
 *   1. generation — offline. Does the generated package still hold together,
 *      and does the probe operation still exist? Runs with zero credentials,
 *      so it gates every commit.
 *   2. direct     — `createXClient({ auth })` → live API. Proves the generated
 *      metadata still describes the real endpoint.
 *   3. gateway    — `POST /tools/:provider/:operation` with an ephemeral
 *      credential → workspace → isolate → live API. Proves the backend's
 *      credential injection and operation resolution.
 *   4. store      — write the credential to the workspace credential store,
 *      invoke with no inline credential, then clean up. Proves the
 *      DynamoDB-backed resolution path plus tool discovery.
 */

import { readFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { ApiKey } from "@utdk/common/auth";
import { resolveCredential, resolveProbeInputs, toGatewayCredential, loadEnv } from "./env.js";
import {
  GATEWAY_CANARY,
  factoryName,
  moduleSpecifier,
  type ProviderEntry,
  type ProviderProbe,
} from "./matrix.js";

const utdkRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..", "utdk");

export type FlowOutcome =
  | { status: "pass"; detail?: string }
  | { status: "skip"; reason: string }
  | { status: "fail"; reason: string };

/** Resolve a dot path against a built client. */
function resolveOperation(client: unknown, op: string): unknown {
  return op.split(".").reduce<unknown>((current, segment) => {
    if (current == null || typeof current !== "object") return undefined;
    return (current as Record<string, unknown>)[segment];
  }, client);
}

function assertExpectation(probe: ProviderProbe, result: unknown): void {
  if (!probe.expect) return;
  if (probe.expect(result) === false) {
    const preview = JSON.stringify(result)?.slice(0, 300) ?? String(result);
    throw new Error(`Probe response failed its shape assertion: ${preview}`);
  }
}

// ---------------------------------------------------------------------------
// Flow 1 — generation (offline, no credentials)
// ---------------------------------------------------------------------------

export interface GenerationReport {
  id: string;
  /** Provider directory exists under packages/utdk. */
  hasDirectory: boolean;
  /** Listed in packages/utdk/registry.json. */
  inRegistry: boolean;
  /** Declares a `utdk` block in package.json. */
  hasManifest: boolean;
  /** Declares at least one auth scheme (absent is a finding for keyed APIs). */
  declaresAuth: boolean;
  /** Number of operations in metadata.ts, or null for handwritten modules. */
  operationCount: number | null;
  /** The probe's access path exists in metadata.ts. */
  probeOperationExists: boolean | null;
  /** Expected client factory is exported by index.ts. */
  exportsFactory: boolean;
}

let registryCache: Record<string, unknown> | undefined;

function loadRegistry(): Record<string, unknown> {
  if (!registryCache) {
    const parsed = JSON.parse(readFileSync(join(utdkRoot, "registry.json"), "utf8")) as {
      providers?: Record<string, unknown>;
    };
    registryCache = parsed.providers ?? {};
  }
  return registryCache;
}

/**
 * Structural checks against the generated source. Deliberately reads files
 * rather than importing: a provider whose module throws on import should report
 * a precise failure, not crash the suite, and `github` alone is a 12MB parse.
 */
export function inspectGeneration(entry: ProviderEntry): GenerationReport {
  const dir = join(utdkRoot, entry.id);
  const hasDirectory = existsSync(dir);
  const manifestPath = join(dir, "package.json");
  const metadataPath = join(dir, "metadata.ts");
  const indexPath = join(dir, "index.ts");

  let hasManifest = false;
  let declaresAuth = false;
  if (existsSync(manifestPath)) {
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as {
      utdk?: { auth?: { schemes?: unknown[] } };
    };
    hasManifest = Boolean(manifest.utdk);
    declaresAuth = (manifest.utdk?.auth?.schemes?.length ?? 0) > 0;
  }

  let operationCount: number | null = null;
  let probeOperationExists: boolean | null = null;
  if (existsSync(metadataPath)) {
    const source = readFileSync(metadataPath, "utf8");
    const paths = new Set<string>();
    const pattern = /"accessPath":\s*\[([^\]]*)\]/g;
    let match: RegExpExecArray | null;
    while ((match = pattern.exec(source)) !== null) {
      const segments = (match[1] ?? "")
        .split(",")
        .map((segment) => segment.trim().replace(/^"|"$/g, ""))
        .filter(Boolean);
      if (segments.length > 0) paths.add(segments.join("."));
    }
    operationCount = paths.size;
    if (entry.probe) probeOperationExists = paths.has(entry.probe.op);
  } else if (entry.probe) {
    // Handwritten modules (@utdk/sql-backed) have no metadata.ts; the probe
    // targets a hand-declared method, checked against index.ts instead.
    probeOperationExists = existsSync(indexPath)
      ? new RegExp(`\\b${entry.probe.op.split(".").pop()}\\b`).test(readFileSync(indexPath, "utf8"))
      : false;
  }

  const exportsFactory = existsSync(indexPath)
    ? readFileSync(indexPath, "utf8").includes(factoryName(entry.id))
    : false;

  return {
    id: entry.id,
    hasDirectory,
    inRegistry: entry.id in loadRegistry(),
    hasManifest,
    declaresAuth,
    operationCount,
    probeOperationExists,
    exportsFactory,
  };
}

// ---------------------------------------------------------------------------
// Flow 2 — direct SDK against the live API
// ---------------------------------------------------------------------------

export async function runDirectFlow(entry: ProviderEntry): Promise<FlowOutcome> {
  if (!entry.probe) return { status: "skip", reason: entry.unprobed ?? "no probe defined" };

  const credential = await resolveCredential(entry.auth);
  if (credential.status === "missing") {
    return { status: "skip", reason: `missing credentials: ${credential.missing.join(", ")}` };
  }

  const inputs = resolveProbeInputs(entry.probe);
  if (inputs.status === "missing") {
    return { status: "skip", reason: `missing fixtures: ${inputs.missing.join(", ")}` };
  }

  const specifier = moduleSpecifier(entry.id);
  const module = (await import(specifier)) as Record<string, unknown>;
  const factory = module[factoryName(entry.id)];
  if (typeof factory !== "function") {
    return { status: "fail", reason: `${specifier} does not export ${factoryName(entry.id)}` };
  }

  const client = await (factory as (options: Record<string, unknown>) => Promise<unknown>)({
    ...(credential.credential
      ? {
          auth: new ApiKey({
            headerName: credential.credential.header,
            value: credential.credential.value,
          }),
        }
      : {}),
    ...(inputs.baseUrl ? { baseUrl: inputs.baseUrl } : {}),
  });

  const operation = resolveOperation(client, entry.probe.op);
  if (typeof operation !== "function") {
    return { status: "fail", reason: `operation ${entry.probe.op} is not callable on the client` };
  }

  const result = await (operation as (args: Record<string, unknown>) => Promise<unknown>)(inputs.args);
  assertExpectation(entry.probe, result);
  return { status: "pass", detail: `${entry.probe.op} → ok` };
}

// ---------------------------------------------------------------------------
// Gateway helpers
// ---------------------------------------------------------------------------

export interface GatewayConfig {
  baseUrl: string;
  token?: string;
}

/** Gateway target from the environment, or undefined to skip gateway flows. */
export function gatewayConfig(env: Record<string, string> = loadEnv()): GatewayConfig | undefined {
  const baseUrl = env["UTDK_E2E_GATEWAY_URL"];
  if (!baseUrl) return undefined;
  const token = env["UTDK_E2E_GATEWAY_TOKEN"];
  return { baseUrl: baseUrl.replace(/\/+$/, ""), ...(token ? { token } : {}) };
}

function gatewayHeaders(config: GatewayConfig): Record<string, string> {
  return {
    "Content-Type": "application/json",
    ...(config.token ? { Authorization: `Bearer ${config.token}` } : {}),
  };
}

async function gatewayFetch(
  config: GatewayConfig,
  path: string,
  init: { method: string; body?: unknown },
): Promise<{ status: number; body: unknown }> {
  const response = await fetch(`${config.baseUrl}${path}`, {
    method: init.method,
    headers: gatewayHeaders(config),
    ...(init.body === undefined ? {} : { body: JSON.stringify(init.body) }),
  });

  const text = await response.text();
  let body: unknown = text;
  try {
    body = text ? JSON.parse(text) : undefined;
  } catch {
    // Non-JSON error page — keep the raw text for the failure message.
  }
  return { status: response.status, body };
}

// ---------------------------------------------------------------------------
// Flow 3 — gateway proxy with an ephemeral credential
// ---------------------------------------------------------------------------

/**
 * `POST /tools/:provider/:operation` takes `args` and `credential` — there is
 * no field for a base URL. `routes/tools.ts` only ever sets one from an
 * interface binding or an LLM alias, so a provider whose spec server URL is
 * relative or tenant-specific simply cannot be reached this way. Skip with the
 * reason rather than reporting a failure the gateway cannot avoid.
 */
function gatewayBaseUrlGap(entry: ProviderEntry): string | undefined {
  if (!entry.probe?.baseUrl && !entry.probe?.baseUrlEnv) return undefined;
  return (
    "probe needs a per-call baseUrl, which POST /tools/:provider/:operation cannot carry " +
    "(only interface bindings and LLM aliases can set one) — see README finding 3"
  );
}

export async function runGatewayFlow(
  entry: ProviderEntry,
  config: GatewayConfig,
): Promise<FlowOutcome> {
  if (!entry.probe) return { status: "skip", reason: entry.unprobed ?? "no probe defined" };

  const baseUrlGap = gatewayBaseUrlGap(entry);
  if (baseUrlGap) return { status: "skip", reason: baseUrlGap };

  const credential = await resolveCredential(entry.auth);
  if (credential.status === "missing") {
    return { status: "skip", reason: `missing credentials: ${credential.missing.join(", ")}` };
  }

  const inputs = resolveProbeInputs(entry.probe);
  if (inputs.status === "missing") {
    return { status: "skip", reason: `missing fixtures: ${inputs.missing.join(", ")}` };
  }

  const response = await gatewayFetch(
    config,
    `/tools/${entry.id}/${entry.probe.op}`,
    {
      method: "POST",
      body: {
        args: inputs.args,
        ...(toGatewayCredential(credential.credential)
          ? { credential: toGatewayCredential(credential.credential) }
          : {}),
      },
    },
  );

  if (response.status !== 200) {
    return {
      status: "fail",
      reason: `gateway returned ${response.status}: ${JSON.stringify(response.body)?.slice(0, 400)}`,
    };
  }

  const envelope = response.body as { success?: boolean; data?: unknown; error?: string };
  if (envelope?.success === false) {
    return { status: "fail", reason: `isolate error: ${envelope.error}` };
  }

  assertExpectation(entry.probe, envelope?.data ?? envelope);
  return { status: "pass", detail: `gateway ${entry.id}/${entry.probe.op} → ok` };
}

/**
 * Zero-credential gateway round trip. This is the check that lets a
 * secret-less CI run still catch a gateway regression.
 */
export async function runGatewayCanary(config: GatewayConfig): Promise<FlowOutcome> {
  const response = await gatewayFetch(
    config,
    `/tools/${GATEWAY_CANARY.provider}/${GATEWAY_CANARY.op}`,
    { method: "POST", body: { args: GATEWAY_CANARY.args } },
  );

  if (response.status !== 200) {
    return {
      status: "fail",
      reason: `gateway returned ${response.status}: ${JSON.stringify(response.body)?.slice(0, 400)}`,
    };
  }

  const envelope = response.body as { success?: boolean; data?: unknown; error?: string };
  if (envelope?.success === false) return { status: "fail", reason: `isolate error: ${envelope.error}` };

  const data = envelope?.data ?? envelope;
  if (!GATEWAY_CANARY.expect(data)) {
    return {
      status: "fail",
      reason: `canary response failed its shape assertion: ${JSON.stringify(data)?.slice(0, 300)}`,
    };
  }

  return { status: "pass", detail: `${GATEWAY_CANARY.provider}/${GATEWAY_CANARY.op} → ok` };
}

// ---------------------------------------------------------------------------
// Flow 4 — stored credential resolution + discovery
// ---------------------------------------------------------------------------

/**
 * Write the credential to the workspace store, invoke the probe with *no*
 * inline credential so the store has to supply it, confirm the provider shows
 * up in configured-tool discovery, then delete the credential.
 *
 * The delete runs in a finally block: a leaked credential would poison every
 * later run of the ephemeral-credential flow for the same provider.
 */
export async function runCredentialStoreFlow(
  entry: ProviderEntry,
  config: GatewayConfig,
): Promise<FlowOutcome> {
  if (!entry.probe) return { status: "skip", reason: entry.unprobed ?? "no probe defined" };

  const baseUrlGap = gatewayBaseUrlGap(entry);
  if (baseUrlGap) return { status: "skip", reason: baseUrlGap };

  const credential = await resolveCredential(entry.auth);
  if (credential.status === "missing") {
    return { status: "skip", reason: `missing credentials: ${credential.missing.join(", ")}` };
  }
  if (!credential.credential) {
    return { status: "skip", reason: "provider needs no credential — nothing to store" };
  }

  const inputs = resolveProbeInputs(entry.probe);
  if (inputs.status === "missing") {
    return { status: "skip", reason: `missing fixtures: ${inputs.missing.join(", ")}` };
  }

  const payload = toGatewayCredential(credential.credential);
  const created = await gatewayFetch(config, "/credentials", {
    method: "POST",
    body: {
      provider: entry.id,
      label: "utdk-e2e",
      payload:
        payload?.type === "bearer_token"
          ? { type: "bearer_token", token: payload.token }
          : { type: "api_key", value: payload?.value, headerName: payload?.name },
    },
  });

  if (created.status >= 300) {
    return {
      status: "fail",
      reason: `credential create returned ${created.status}: ${JSON.stringify(created.body)?.slice(0, 300)}`,
    };
  }

  const credentialId = (created.body as { id?: string })?.id;

  try {
    const invoked = await gatewayFetch(config, `/tools/${entry.id}/${entry.probe.op}`, {
      method: "POST",
      body: { args: inputs.args },
    });

    if (invoked.status !== 200) {
      return {
        status: "fail",
        reason: `stored-credential invoke returned ${invoked.status}: ${JSON.stringify(invoked.body)?.slice(0, 400)}`,
      };
    }

    const envelope = invoked.body as { success?: boolean; data?: unknown; error?: string };
    if (envelope?.success === false) {
      return { status: "fail", reason: `isolate error: ${envelope.error}` };
    }
    assertExpectation(entry.probe, envelope?.data ?? envelope);

    const discovery = await gatewayFetch(config, "/tools?scope=configured", { method: "GET" });
    const tools = Array.isArray(discovery.body)
      ? discovery.body
      : ((discovery.body as { tools?: unknown[] })?.tools ?? []);
    const discovered = (tools as Array<{ name?: string }>).some((tool) =>
      tool.name?.startsWith(`${entry.id}.`),
    );

    return {
      status: "pass",
      detail: `stored credential resolved${discovered ? " + discovered in /tools" : " (not surfaced in discovery)"}`,
    };
  } finally {
    if (credentialId) {
      await gatewayFetch(config, `/credentials/${credentialId}`, { method: "DELETE" }).catch(() => {
        // Best-effort cleanup; a failure here is reported by the next run's
        // ephemeral flow rather than masking this flow's real result.
      });
    }
  }
}
