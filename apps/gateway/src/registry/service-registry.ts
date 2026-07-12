/**
 * ServiceRegistry — gateway-native service catalog and call router.
 *
 * Tracks registered service backends (MCP, UTCP, HTTP) and their tool
 * metadata. The `call()` method is the hot path used by
 * `POST /tools/:provider/:operation` to route calls to the correct backend.
 *
 * Population (APR-338): startup loaders call `registerBackend()` once the
 * MCP/UTCP config is resolved. This module only tracks and routes — it does
 * not spawn processes or open connections.
 */

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

/** Abstraction over any callable service backend (UTCP, HTTP, MCP wrapper). */
export interface ServiceBackend {
  call(service: string, procedure: string, args: unknown[]): Promise<unknown>;
}

/** Tool metadata for catalog endpoints and prompt generation. */
export interface ServiceToolInfo {
  /** Full dotted name, e.g. "weather.get_forecast" */
  name: string;
  /** Namespace portion, e.g. "weather" */
  namespace: string;
  /** Procedure name within the namespace, e.g. "get_forecast" */
  procedure: string;
  description?: string;
  /** JSON Schema for the call arguments */
  parameters?: Record<string, unknown>;
  /** JSON Schema for the response payload */
  outputs?: Record<string, unknown>;
}

/** Search options for tool discovery. */
export interface SearchServicesOptions {
  query?: string;
  namespace?: string;
  limit?: number;
}

// ---------------------------------------------------------------------------
// ServiceRegistry
// ---------------------------------------------------------------------------

interface RegistryEntry {
  info: ServiceToolInfo;
  backend: ServiceBackend;
}

export class ServiceRegistry {
  private readonly entries = new Map<string, RegistryEntry>();
  private readonly generalBackends: ServiceBackend[] = [];

  /**
   * Register a backend together with the tools it handles.
   *
   * Each entry in `toolInfos` is mapped by `info.name` to `backend` so
   * `call()` can route directly to the right backend without trying all of
   * them first. Pass `toolInfos` as an empty array to register a catch-all
   * backend that will be tried after the named entries.
   */
  registerBackend(backend: ServiceBackend, toolInfos: ServiceToolInfo[]): void {
    for (const info of toolInfos) {
      this.entries.set(info.name, { info, backend });
    }
    if (toolInfos.length === 0) {
      this.generalBackends.push(backend);
    }
  }

  /**
   * Register tools using the simpler MCP-style format:
   * `{ toolName: { description, inputSchema } }` keyed under `namespace`.
   *
   * Requires an associated backend that can handle calls for this namespace.
   * APR-338 should prefer `registerBackend(backend, toolInfos)` for precise
   * routing; use this helper when iterating over an MCP `ListTools` response.
   */
  registerTools(
    tools: Record<string, { description?: string; inputSchema?: unknown }>,
    namespace: string,
    backend: ServiceBackend,
  ): void {
    const infos: ServiceToolInfo[] = [];
    for (const [toolName, tool] of Object.entries(tools)) {
      infos.push({
        name: `${namespace}.${toolName}`,
        namespace,
        procedure: toolName,
        description: tool.description,
        parameters: tool.inputSchema as Record<string, unknown> | undefined,
      });
    }
    this.registerBackend(backend, infos);
  }

  /**
   * Route a call to the registered backend.
   *
   * Lookup order:
   * 1. Exact `namespace.procedure` match → call its specific backend.
   * 2. General backends (registered with empty toolInfos) in order.
   * 3. Throw if nothing handled the call.
   */
  async call(namespace: string, procedure: string, args: unknown): Promise<unknown> {
    const key = `${namespace}.${procedure}`;
    const entry = this.entries.get(key);
    if (entry) {
      return entry.backend.call(namespace, procedure, [args]);
    }

    for (const backend of this.generalBackends) {
      try {
        return await backend.call(namespace, procedure, [args]);
      } catch {
        // Try next general backend
      }
    }

    const available = Array.from(this.entries.keys()).slice(0, 10).join(", ");
    throw new Error(
      `Service not found: ${namespace}.${procedure}` +
        (available ? `. Available: ${available}` : ""),
    );
  }

  /** True when at least one tool is registered under the given namespace. */
  hasNamespace(namespace: string): boolean {
    for (const { info } of this.entries.values()) {
      if (info.namespace === namespace) return true;
    }
    return this.generalBackends.length > 0;
  }

  /** All unique registered namespaces. */
  getNamespaces(): string[] {
    const ns = new Set<string>();
    for (const { info } of this.entries.values()) {
      ns.add(info.namespace);
    }
    return Array.from(ns);
  }

  /** Full tool catalog (all registered tools). */
  getServiceInfo(): ServiceToolInfo[] {
    return Array.from(this.entries.values()).map((e) => e.info);
  }

  /** Search the catalog by query string and/or namespace. */
  searchServices(opts: SearchServicesOptions = {}): ServiceToolInfo[] {
    const { query, namespace, limit = 20 } = opts;
    let results = this.getServiceInfo();

    if (namespace) {
      results = results.filter((i) => i.namespace === namespace);
    }

    if (query) {
      const q = query.toLowerCase();
      const keywords = q.split(/\s+/).filter(Boolean);
      results = results
        .map((info) => {
          const text = `${info.name} ${info.namespace} ${info.procedure} ${info.description ?? ""}`.toLowerCase();
          const score = keywords.filter((kw) => text.includes(kw)).length / keywords.length;
          return { info, score };
        })
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .map(({ info }) => info);
    }

    return results.slice(0, limit);
  }

  /** True when the exact tool `namespace.procedure` is registered. */
  has(namespace: string, procedure: string): boolean {
    return this.entries.has(`${namespace}.${procedure}`);
  }

  /** Total number of registered tools. */
  get size(): number {
    return this.entries.size;
  }

  /** Clear all state (used in tests). */
  reset(): void {
    this.entries.clear();
    this.generalBackends.length = 0;
  }
}

// ---------------------------------------------------------------------------
// Module-scoped singleton
// ---------------------------------------------------------------------------

let _registry: ServiceRegistry | undefined;

/** Return the process-scoped ServiceRegistry instance (created on first call). */
export function getServiceRegistry(): ServiceRegistry {
  if (!_registry) {
    _registry = new ServiceRegistry();
  }
  return _registry;
}

/** Replace the singleton (used in tests). */
export function setServiceRegistry(registry: ServiceRegistry): void {
  _registry = registry;
}

/** Reset the singleton to a fresh empty registry (used in tests). */
export function resetServiceRegistry(): void {
  _registry = undefined;
}
