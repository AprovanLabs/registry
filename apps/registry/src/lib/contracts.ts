/**
 * Contract/interface data access for the catalog site.
 *
 * Enumerates the contract packages under `packages/contracts/` (by the
 * `utdk.contract` manifest marker), parses each contract's `compat.json`
 * through the shared `@utdk/common/compat` loader, executes each contract's
 * tool-entry factory for operation metadata, and inverts the compat data
 * into a provider → entries index for provider pages.
 *
 * Same off-disk posture as lib/registry.ts: the site renders what exists in
 * the tree at build time, and a missing `packages/contracts/` directory
 * fails the build loudly.
 */

import { existsSync } from "node:fs";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { loadCompatDocuments } from "@utdk/common/compat";
import type { CompatDocument, CompatEntry } from "@utdk/common/compat";
import { getRegistryCatalog } from "./registry";
import { agentToolEntries } from "@utdk/agent";
import { eventsToolEntries } from "@utdk/events";
import { keyvalueToolEntries } from "@utdk/keyvalue";
import { llmToolEntries } from "@utdk/llm";
import { sandboxToolEntries } from "@utdk/sandbox";
import { sqlToolEntries } from "@utdk/sql";
import { telemetryToolEntries } from "@utdk/telemetry";
import { vcsToolEntries } from "@utdk/vcs";
import { vfsToolEntries } from "@utdk/vfs";
// The llm compat list IS the chat-provider registry (compatSource
// indirection, D5). Snapshot in lib/llm-compat.ts — not the product server.
import { listLlmProviders } from "./llm-compat";

export type ToolEntry = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
};

export type ContractOperation = {
  /** Operation name without the interface prefix (e.g. "query"). */
  name: string;
  description: string;
  requiredArgs: string[];
};

export type ContractCompatEntry = CompatEntry & {
  /** True when the adapter module exists in the generated catalogue. */
  available: boolean;
  /** Catalog provider page path when the provider has one. */
  providerPath: string | null;
};

export type ContractInfo = {
  /** Contract id from the utdk.contract marker (e.g. "vcs"). */
  id: string;
  packageName: string;
  version: string | null;
  label: string;
  description: string | null;
  npmUrl: string;
  /** Operation surface from the contract's tool-entry factory. */
  operations: ContractOperation[];
  /** Compat entries; empty for contracts with no committed implementations. */
  compat: ContractCompatEntry[];
  /** Whether compat comes from a generated source (e.g. the chat-provider registry). */
  compatSource: string | null;
  availableCount: number;
  plannedCount: number;
};

const workspaceRoot = findWorkspaceRoot(process.cwd());
const contractsRoot = path.join(workspaceRoot, "packages", "contracts");
const providersRoot = path.join(workspaceRoot, "packages", "utdk");

/**
 * Tool-entry factories, executed at build time with the interface id as the
 * namespace — one source of truth for the operation surface (the same
 * factories provider modules use for their `tools` export).
 */
const TOOL_ENTRY_FACTORIES: Record<string, () => ToolEntry[]> = {
  sql: () =>
    sqlToolEntries("sql", {
      placeholder: "backend-specific ($1, ?, :name)",
      params: "positional",
      connectionOptions: [],
    }),
  llm: () => llmToolEntries("llm"),
  sandbox: () =>
    sandboxToolEntries("sandbox", {
      label: "the bound sandbox host",
      capabilities: {
        persist: true,
        ports: true,
        hashes: true,
        scopedSecrets: true,
        services: true,
        watch: true,
      },
    }),
  vcs: () => vcsToolEntries("vcs"),
  agent: () => agentToolEntries("agent"),
  keyvalue: () => keyvalueToolEntries("keyvalue"),
  events: () => eventsToolEntries("events"),
  vfs: () => vfsToolEntries("vfs"),
  telemetry: () => telemetryToolEntries("telemetry"),
};

function findWorkspaceRoot(startDirectory: string): string {
  let currentDirectory = path.resolve(startDirectory);

  while (true) {
    if (existsSync(path.join(currentDirectory, "packages", "utdk"))) {
      return currentDirectory;
    }

    const parentDirectory = path.dirname(currentDirectory);

    if (parentDirectory === currentDirectory) {
      throw new Error("Could not locate workspace root containing packages/utdk.");
    }

    currentDirectory = parentDirectory;
  }
}

/** A module is "on disk" when its directory in the catalogue has an index.ts. */
function providerModuleOnDisk(module: string): boolean {
  return existsSync(path.join(providersRoot, ...module.split("/"), "index.ts"));
}

function toOperations(entries: ToolEntry[], interfaceId: string): ContractOperation[] {
  return entries.map((entry) => {
    const required = (entry.inputSchema as { required?: unknown }).required;
    return {
      name: entry.name.startsWith(`${interfaceId}.`)
        ? entry.name.slice(interfaceId.length + 1)
        : entry.name,
      description: entry.description,
      requiredArgs: Array.isArray(required) ? required.map(String) : [],
    };
  });
}

function toDisplayLabel(id: string): string {
  return id.charAt(0).toUpperCase() + id.slice(1);
}

function compatEntriesFor(document: CompatDocument | undefined): {
  entries: CompatEntry[];
  compatSource: string | null;
} {
  if (!document) return { entries: [], compatSource: null };
  if (document.compatSource === "chat-provider-registry") {
    return {
      entries: listLlmProviders().map((provider) => ({
        provider: provider.id,
        label: provider.label,
        module: provider.module,
        ...(provider.baseUrl !== undefined ? { baseUrl: provider.baseUrl } : {}),
        defaults: { model: provider.defaultModel },
      })),
      compatSource: document.compatSource,
    };
  }
  return { entries: document.compat ?? [], compatSource: document.compatSource ?? null };
}

/**
 * Build-time cross-check (catalog-interface-representation spec): an
 * *available* compat entry whose catalogue `module` has no provider on disk
 * is a data error and fails the build. Entries with a `moduleSpecifier`
 * (first-party packages outside the catalogue) and credentialless dispatch
 * short-circuits (`native`) are exempt — their modules deliberately do not
 * live in `packages/utdk/`.
 */
function assertModuleOnDisk(contractId: string, entry: CompatEntry): void {
  if (entry.unavailable !== undefined) return;
  if (entry.moduleSpecifier !== undefined) return;
  if (entry.credentialless === true) return;
  if (!providerModuleOnDisk(entry.module)) {
    throw new Error(
      `compat.json for contract "${contractId}" declares available module "${entry.module}" ` +
        `for provider "${entry.provider}", but packages/utdk/${entry.module}/index.ts does not exist. ` +
        `Mark the entry "unavailable" or build the adapter module.`,
    );
  }
}

type ContractManifest = {
  name?: string;
  version?: string;
  description?: string;
  utdk?: { contract?: string };
};

let contractsPromise: Promise<ContractInfo[]> | undefined;

export async function getContracts(): Promise<ContractInfo[]> {
  contractsPromise ??= buildContracts();
  return contractsPromise;
}

async function buildContracts(): Promise<ContractInfo[]> {
  if (!existsSync(contractsRoot)) {
    // Same posture as the packages/utdk guard: the catalog renders what is
    // on disk, and a tree without the contracts directory is a broken build.
    throw new Error(
      `Could not locate the contracts directory: expected ${contractsRoot}.`,
    );
  }

  const compatDocuments = loadCompatDocuments(contractsRoot);
  const catalog = await getRegistryCatalog();
  const catalogPaths = new Set(catalog.entries.map((entry) => entry.providerPath));
  const contracts: ContractInfo[] = [];

  for (const dirent of await readdir(contractsRoot, { withFileTypes: true })) {
    if (!dirent.isDirectory()) continue;
    const manifestPath = path.join(contractsRoot, dirent.name, "package.json");
    if (!existsSync(manifestPath)) continue;
    const manifest = JSON.parse(await readFile(manifestPath, "utf8")) as ContractManifest;
    const id = manifest.utdk?.contract;
    if (typeof id !== "string" || id === "") continue;

    const document = compatDocuments.get(id);
    const { entries, compatSource } = compatEntriesFor(document);
    for (const entry of entries) {
      assertModuleOnDisk(id, entry);
    }

    const compat: ContractCompatEntry[] = entries.map((entry) => ({
      ...entry,
      available: entry.unavailable === undefined,
      // Link only when the catalog actually has a page for the provider id;
      // first-party implementers (bashkit, machine, native) have none, and
      // unavailable entries must never link as if executable.
      providerPath:
        entry.unavailable === undefined && catalogPaths.has(entry.provider) ? entry.provider : null,
    }));

    const packageName = manifest.name ?? `@utdk/${id}`;
    const factory = TOOL_ENTRY_FACTORIES[id];
    const label = document?.interface.label ?? toDisplayLabel(id);

    contracts.push({
      id,
      packageName,
      version: manifest.version ?? null,
      label,
      description: document?.interface.description ?? manifest.description ?? null,
      npmUrl: `https://www.npmjs.com/package/${packageName}`,
      operations: factory ? toOperations(factory(), id) : [],
      compat,
      compatSource,
      availableCount: compat.filter((entry) => entry.available).length,
      plannedCount: compat.filter((entry) => !entry.available).length,
    });
  }

  const order = ["llm", "sql", "sandbox", "vcs", "agent", "keyvalue", "events", "vfs", "telemetry"];
  contracts.sort((left, right) => {
    const l = order.indexOf(left.id);
    const r = order.indexOf(right.id);
    return (l === -1 ? order.length : l) - (r === -1 ? order.length : r) || left.id.localeCompare(right.id);
  });
  return contracts;
}

export type ProviderImplements = {
  contractId: string;
  contractLabel: string;
  contractPackageName: string;
  entry: ContractCompatEntry;
};

/**
 * Inverted index: catalog provider path → the compat entries that name it.
 * Fed to provider pages for the Implements section; providers referenced by
 * no compat entry are simply absent (section omitted, not an empty box).
 */
export async function getProviderImplementsIndex(): Promise<Map<string, ProviderImplements[]>> {
  const contracts = await getContracts();
  const index = new Map<string, ProviderImplements[]>();
  for (const contract of contracts) {
    for (const entry of contract.compat) {
      const row: ProviderImplements = {
        contractId: contract.id,
        contractLabel: contract.label,
        contractPackageName: contract.packageName,
        entry,
      };
      const existing = index.get(entry.provider);
      if (existing) {
        existing.push(row);
      } else {
        index.set(entry.provider, [row]);
      }
    }
  }
  return index;
}

export async function getContract(id: string): Promise<ContractInfo | undefined> {
  const contracts = await getContracts();
  return contracts.find((contract) => contract.id === id);
}
