/**
 * Playground compilation glue: TypeScript source → sandbox-ready body +
 * runtime dependencies.
 *
 * `@utdk/remote` is compiler-agnostic; the app strips TS types with
 * sucrase (imports preserved), then hands the source to
 * `parseScriptDependencies` / `rewriteDefaultExport` from `@utdk/remote`.
 */

import {
  parseScriptDependencies,
  rewriteDefaultExport,
  type RuntimeDependency,
} from "@utdk/remote";
import { transform } from "sucrase";

export interface CompiledScript {
  /** Executable JS body: types stripped, imports removed, default export bound. */
  body: string;
  dependencies: RuntimeDependency[];
}

/** Dependencies and scan completeness — cheap enough to run on every keystroke. */
export function detectDependencies(source: string): {
  dependencies: RuntimeDependency[];
  unresolved: boolean;
} {
  const javascript = transform(source, {
    transforms: ["typescript"],
    disableESTransforms: true,
  }).code;
  const parsed = parseScriptDependencies(javascript);
  return { dependencies: parsed.dependencies, unresolved: parsed.unresolved };
}

export function compileScript(source: string): CompiledScript {
  const javascript = transform(source, {
    transforms: ["typescript"],
    disableESTransforms: true,
  }).code;

  const { dependencies, body } = parseScriptDependencies(javascript);
  return { dependencies, body: rewriteDefaultExport(body) };
}

/**
 * Default editor contents — the north-star script, runnable as-is with no
 * credentials: GitHub's public endpoints work unauthenticated, and the
 * `{ chart }` return renders in the run view's viz runtime.
 */
export const SAMPLE_SCRIPT = `export default async function report({ username }) {
  // Public GitHub data — no credential needed
  const user = await tools.github.users.getByUsername({ username });
  const repos = await tools.github.repos.listForUser({
    username,
    per_page: 6,
    sort: 'updated',
  });

  console.log(\`\${user.login} has \${user.public_repos} public repos\`);

  // Returning { chart } renders as a live chart below the run
  return {
    chart: {
      type: 'bar',
      title: \`\${user.login} — stars on recently updated repos\`,
      labels: repos.map((r) => r.name),
      series: [{ label: 'stars', values: repos.map((r) => r.stargazers_count ?? 0) }],
    },
  };
}
`;

// ---------------------------------------------------------------------------
// Built-in namespaces — core services, generic interfaces, and LLM chat
// aliases. These aren't registry catalog packages (no OpenAPI spec, no
// generated bundle) but they're first-class script namespaces: the sandbox
// proxies them through the gateway like any provider. Declaring them here
// gives the editor real types and the dependency panel a label instead of
// "unregistered".
// ---------------------------------------------------------------------------

export interface BuiltinNamespace {
  /** Provider id — also the import specifier ("vfs", "synthetic.new"). */
  id: string;
  /** Identifier bare workflow scripts use (sanitized: synthetic.new → synthetic_new). */
  identifier: string;
  label: string;
  description: string;
  /** Ambient module types mounted in the editor. */
  types: string;
}

const CHAT_TYPES = `declare const client: {
  /** OpenAI-compatible chat completion. */
  createChatCompletion(args: {
    model?: string;
    messages: Array<{ role: "system" | "user" | "assistant" | "tool"; content: string }>;
    temperature?: number;
    max_tokens?: number;
    [option: string]: unknown;
  }): Promise<{ choices: Array<{ message: { role: string; content: string } }>; model?: string }>;
  listModels(args?: Record<string, never>): Promise<{ data: Array<{ id: string }> }>;
};
export default client;
`;

const SQL_TYPES = `declare const client: {
  /** Run SQL against the workspace's bound backend (postgres/snowflake/databricks). */
  query(args: {
    sql: string;
    params?: unknown[] | Record<string, unknown>;
    timeout_ms?: number;
    [option: string]: unknown;
  }): Promise<{ columns: Array<{ name: string; type: string }>; rows: unknown[][]; rowCount: number; truncated: boolean }>;
};
export default client;
`;

const anyNamespace = (doc: string) => `/** ${doc} */
declare const client: { [operation: string]: (args?: Record<string, unknown>) => Promise<any> };
export default client;
`;

export const BUILTIN_NAMESPACES: BuiltinNamespace[] = [
  {
    id: "vfs",
    identifier: "vfs",
    label: "VFS",
    description: "Workspace files",
    types: `declare const client: {
  read(args: { path: string }): Promise<{ path: string; content: string; mimeType?: string }>;
  write(args: { path: string; content: string; mimeType?: string }): Promise<{ path: string }>;
  list(args?: { prefix?: string }): Promise<{ entries: Array<{ path: string }> }>;
  delete(args: { path: string; recursive?: boolean }): Promise<{ deleted: boolean }>;
};
export default client;
`,
  },
  {
    id: "keyvalue",
    identifier: "keyvalue",
    label: "Key value",
    description: "Workspace-scoped KV store",
    types: `declare const client: {
  get(args: { key: string }): Promise<{ key: string; value: any }>;
  set(args: { key: string; value: unknown }): Promise<{ key: string; ok: boolean }>;
  delete(args: { key: string }): Promise<{ key: string; deleted: boolean }>;
  list(args?: { prefix?: string }): Promise<{ keys: string[] }>;
};
export default client;
`,
  },
  {
    id: "events",
    identifier: "events",
    label: "Events",
    description: "Emit + poll event channels",
    types: `declare const client: {
  emit(args: { channel: string; payload?: unknown }): Promise<{ id: string }>;
  list(args: { channel: string; limit?: number }): Promise<{ events: Array<{ id: string; ts: string; payload: any }> }>;
};
export default client;
`,
  },
  {
    id: "llm",
    identifier: "llm",
    label: "LLM",
    description: "Generic chat interface — the workspace (or workflow) binding picks the provider",
    types: CHAT_TYPES,
  },
  {
    id: "sql",
    identifier: "sql",
    label: "SQL",
    description: "Generic SQL interface — the workspace binding picks the backend",
    types: SQL_TYPES,
  },
  ...["openai", "anthropic", "gemini", "openrouter"].map((id) => ({
    id,
    identifier: id,
    label: id,
    description: `${id} chat (OpenAI-compatible)`,
    types: CHAT_TYPES,
  })),
  {
    id: "synthetic.new",
    identifier: "synthetic_new",
    label: "Synthetic.new",
    description: "Synthetic.new chat (OpenAI-compatible)",
    types: CHAT_TYPES,
  },
  {
    id: "workflows",
    identifier: "workflows",
    label: "Workflows",
    description: "Register + run workspace workflows",
    types: anyNamespace("Workflow management (register/list/run/trace)"),
  },
  {
    id: "sync",
    identifier: "sync",
    label: "Sync",
    description: "Source → transform → sink data pipelines",
    types: anyNamespace("Data sync (register/run/list/delete)"),
  },
  {
    id: "registry",
    identifier: "registry",
    label: "Registry",
    description: "Look up available SDKs and operations",
    types: anyNamespace("Registry lookup (providers/search)"),
  },
];

export const BUILTIN_BY_ID = new Map(BUILTIN_NAMESPACES.map((ns) => [ns.id, ns]));
export const BUILTIN_BY_IDENTIFIER = new Map(
  BUILTIN_NAMESPACES.map((ns) => [ns.identifier, ns]),
);

// ---------------------------------------------------------------------------
// Auto-imports for raw workflow scripts. Workflows use bare namespace
// globals (no imports); the playground compiles imports into sandbox
// bindings, so a loaded script gets its import lines synthesized from usage.
// ---------------------------------------------------------------------------

/**
 * Prepend `import x from '<provider>'` for every known namespace the script
 * uses but neither imports nor declares. `catalogProviders` extends the
 * built-in set with registry packages (github, stripe, …).
 */
export function synthesizeWorkflowImports(
  source: string,
  catalogProviders: Iterable<string> = [],
): string {
  const known = new Map<string, string>();
  for (const ns of BUILTIN_NAMESPACES) known.set(ns.identifier, ns.id);
  for (const provider of catalogProviders) {
    if (/^[A-Za-z_$][\w$]*$/u.test(provider) && !known.has(provider)) {
      known.set(provider, provider);
    }
  }

  const imported = new Set(detectDependencies(source).dependencies.map((dep) => dep.identifier));
  const lines: string[] = [];
  for (const [identifier, specifier] of known) {
    if (imported.has(identifier)) continue;
    const used = new RegExp(`\\b${identifier}\\s*\\.`, "u").test(source);
    if (!used) continue;
    const declared = new RegExp(
      `\\b(?:const|let|var|function|class)\\s+${identifier}\\b`,
      "u",
    ).test(source);
    if (declared) continue;
    lines.push(`import ${identifier} from '${specifier}';`);
  }
  if (lines.length === 0) return source;
  return `${lines.join("\n")}\n\n${source}`;
}
