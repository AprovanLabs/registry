/**
 * @aprovan/registry-server — the multi-tenant execution plane.
 *
 * Library-first: `createRegistryServer(options)` returns `{ router, dispatch,
 * runScript, stores, telemetry, close }`. The standalone entrypoint
 * (`./standalone`) and the `aprovan/registry` Docker image are thin wrappers
 * over this same constructor.
 */

// Core contexts + construction contract
export type {
  CallContext,
  TelemetrySource,
  RegistryServerOptions,
  RegistryServer,
  DispatchResult,
  RunScriptOptions,
  McpExtensions,
  McpExtensionTool,
} from "./config/types.js";
export { optionsFromEnv, type StandaloneConfig } from "./config/env.js";

// Service kernel (the contract product services import from the package)
export {
  ServiceError,
  NativeServiceRegistry,
  type ServiceContext,
  type CoreService,
  type CoreServiceMeta,
  type ToolEntry,
} from "./kernel/index.js";

// Storage
export * from "./storage/index.js";

// Catalog
export {
  findInterface,
  findLlmAlias,
  type InterfaceCatalog,
  type InterfaceDef,
  type InterfaceCompat,
  type LlmAlias,
} from "./catalog/types.js";
export { defaultCatalog, defaultLlmAliases } from "./catalog/default.js";

// Tenancy
export { TenantService, DEFAULT_TENANT_ID } from "./tenancy/index.js";

// Auth
export { AuthError, type AuthAdapter, type Authn, type TenantResolver } from "./auth/types.js";

// Telemetry
export {
  RegistryTelemetry,
  type RegistryTelemetryOptions,
  type DispatchSpanRecord,
} from "./telemetry/index.js";

// Credentials
export {
  getCredentialCipher,
  resetCredentialCipher,
  type CredentialCipher,
} from "./credentials/cipher.js";
export {
  OAuthExchangeError,
  createOAuthTokenCache,
  resetOAuthTokenCache,
  resolveToInjectable,
  exchangeAuthorizationCode,
  refreshAccessToken,
  clientCredentialsGrant,
  type OAuthTokenCache,
  type OAuthTokenSet,
  type ResolveOAuthOptions,
} from "./credentials/oauth.js";
export {
  CredentialService,
  CredentialResolutionError,
  type CredentialInput,
} from "./credentials/service.js";
export type {
  CredentialPayload,
  InjectableCredential,
  BearerTokenPayload,
  ApiKeyPayload,
  OAuth2ClientPayload,
  OAuth2AuthCodePayload,
} from "./credentials/types.js";

// Sandbox
export {
  runScriptInSandbox,
  transformWorkflowModule,
  configureSandbox,
  type SandboxRunOptions,
  type SandboxConfig,
} from "./sandbox/quickjs.js";

// Profiles
export {
  ProfileService,
  type ProfileCreateInput,
  type ProfileUpdateInput,
} from "./profiles/service.js";
export {
  resolveProfile,
  type ResolvedProfile,
  type ResolveDeps,
  type ResolvedTarget,
} from "./profiles/resolve.js";
