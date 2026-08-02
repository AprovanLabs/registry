/**
 * Shared test harness: an in-memory storage + a small synthetic catalog that
 * exercises every resolution shape (interface with credentialless entry,
 * interface without, llm aliases, plain providers).
 */

import { CredentialService } from "../src/credentials/service.js";
import { ProfileService } from "../src/profiles/service.js";
import { createStorage } from "../src/storage/index.js";
import type { ResolveDeps } from "../src/profiles/resolve.js";
import type { CallContext } from "../src/config/types.js";
import type { InterfaceCatalog } from "../src/catalog/types.js";
import type { RegistryStorage } from "../src/storage/types.js";

export const TEST_CATALOG: InterfaceCatalog = {
  interfaces: [
    {
      id: "sql",
      label: "SQL",
      description: "Query relational databases",
      timeoutMs: 60_000,
      defaultsFor: ["query"],
      compat: [
        { provider: "postgres", label: "PostgreSQL", module: "postgres" },
        { provider: "snowflake", label: "Snowflake", module: "snowflake" },
        {
          provider: "duckdb",
          label: "DuckDB",
          module: "duckdb",
          unavailable: "declared but not yet built",
        },
      ],
    },
    {
      id: "agent",
      label: "Agents",
      description: "Run agents",
      timeoutMs: 300_000,
      defaultsFor: ["run"],
      compat: [
        {
          provider: "native",
          label: "Native runner",
          module: "native",
          credentialless: true,
        },
        { provider: "openai", label: "OpenAI", module: "openai" },
      ],
    },
  ],
  llmAliases: [
    {
      id: "anthropic",
      label: "Claude",
      module: "openai",
      baseUrl: "https://api.anthropic.com/v1",
      defaultModel: "claude-sonnet-5",
    },
    { id: "openai", label: "OpenAI", module: "openai", defaultModel: "gpt-5.1" },
  ],
};

export const KNOWN_PROVIDERS = new Set([
  "github",
  "postgres",
  "snowflake",
  "openai",
  "slack",
]);

export interface TestEnv {
  storage: RegistryStorage;
  credentials: CredentialService;
  profiles: ProfileService;
  deps: ResolveDeps;
  close(): Promise<void>;
}

export async function makeEnv(
  options: { authMode?: "oidc" | "api-key" | "none"; catalog?: InterfaceCatalog } = {},
): Promise<TestEnv> {
  const storage = await createStorage({ driver: "sqlite", url: "file::memory:" });
  const catalog = options.catalog ?? TEST_CATALOG;
  const credentials = new CredentialService(storage.credentials);
  const profiles = new ProfileService(storage.profiles, storage.grants, credentials, catalog);
  const deps: ResolveDeps = {
    catalog,
    profiles: storage.profiles,
    profileService: profiles,
    credentials,
    isKnownProvider: (id) => KNOWN_PROVIDERS.has(id),
    authMode: options.authMode ?? "oidc",
  };
  return { storage, credentials, profiles, deps, close: () => storage.close() };
}

export function ctx(overrides: Partial<CallContext> = {}): CallContext {
  return {
    tenantId: "t1",
    principal: "user-1",
    source: { type: "tool" },
    role: "member",
    groupIds: [],
    ...overrides,
  };
}

export const adminCtx = (overrides: Partial<CallContext> = {}): CallContext =>
  ctx({ role: "admin", ...overrides });
