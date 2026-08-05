/**
 * @utdk/remote — vendor-neutral UTDK remote client.
 *
 * Namespace proxies, gateway transport, execution policy, pagination, and
 * specifier parsing. No DOM, no sandbox host, no `@aprovan/*` dependencies.
 *
 * Composition: `manifest → createRuntimeGlobals(deps, instrument(withPolicy(transport)))`.
 */

export {
  AliasResolutionError,
  RuntimeTimeoutError,
  TransportError,
  type ManifestPolicy,
  type RateLimitPolicy,
  type RetryPolicy,
  type ProviderAliasMap,
  type RuntimeDependency,
  type RuntimeEvent,
  type RuntimeEventListener,
  type RuntimeManifest,
  type RuntimePolicy,
  type Transport,
  type TransportCallOptions,
} from "./types.js";

export {
  createNamespaceProxy,
  createRuntimeGlobals,
  createToolsGlobal,
  extractConfigurePin,
  ROOT_OPERATION,
  type NamespaceProxy,
  type ToolsGlobal,
} from "./proxy.js";

export {
  buildProviderAliasMap,
  deriveGlobalAlias,
  parseScriptDependencies,
  rewriteDefaultExport,
  scanToolsAccess,
  type ParsedScript,
  type ToolsAccessScan,
} from "./imports.js";

export { resolvePolicy, withPolicy, type PolicyHooks } from "./policy.js";

export {
  createGatewayTransport,
  instrument,
  type GatewayTransportOptions,
} from "./transport.js";

export { allPages, paginate, type PaginateOptions } from "./paginate.js";
