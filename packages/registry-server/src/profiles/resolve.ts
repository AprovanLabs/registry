/**
 * `resolveProfile()` — the normative resolution algorithm (tech-plan
 * "Profile resolution algorithm", steps 1–6). This is the ONLY place a
 * namespace turns into (provider, credential, options, limits):
 *
 * 1. classify the namespace (native handled by dispatch before this runs)
 * 2. name = profileName ?? "default"
 * 3. look up the stored profile row
 * 4. row present → authorize (grants; admin passes; auth-none passes),
 *    validate compat, resolve the pinned credential LOUDLY
 * 5. row absent + default name + authMode "none" → ungoverned-mode fallback
 *    (credentialless compat entry first, else first compat provider with a
 *    tenant credential; provider targets: first tenant credential) — only
 *    reachable when grants are not enforced
 * 6. row absent + named → 404 listing the names that DO exist. No fallback,
 *    ever.
 */

import { ServiceError } from "../kernel/index.js";
import {
  findInterface,
  findLlmAlias,
  type InterfaceCatalog,
  type InterfaceCompat,
} from "../catalog/types.js";
import {
  assertProbeAvailable,
  type AvailabilityProbeRunner,
} from "../catalog/availability-probe.js";
import { CredentialResolutionError, type CredentialService } from "../credentials/service.js";
import { ProfileService } from "./service.js";
import { resolveProviderVersion, type GetProviderVersioning } from "./versioning.js";
import type { CallContext } from "../config/types.js";
import type { CredentialPayload } from "../credentials/types.js";
import type { ProfileLimits, ProfileStore } from "../storage/types.js";

export interface ResolveDeps {
  catalog: InterfaceCatalog;
  profiles: ProfileStore;
  profileService: ProfileService;
  credentials: CredentialService;
  /** Catalogue guard — is this a known utdk provider id? */
  isKnownProvider: (id: string) => boolean;
  /** Provider API-version metadata (graphql-schema-surface D4); undefined = unversioned. */
  getProviderVersioning: GetProviderVersioning;
  /** Whether grants are enforced ("none" skips enforcement). */
  authMode: "oidc" | "api-key" | "none";
  /** Host-registered runners for `availabilityProbe` compat entries. */
  runAvailabilityProbe?: AvailabilityProbeRunner;
}

export interface ResolvedTarget {
  kind: "interface" | "provider";
  id: string;
}

export interface ResolvedProfile {
  target: ResolvedTarget;
  /** Interface targets: the compat entry that executes. */
  compat?: InterfaceCompat;
  /** Concrete executing provider id (also the credential-store key). */
  provider: string;
  /** Module name for the executor (names the client factory). */
  module: string;
  /** Import specifier when the module is not in the utdk catalogue. */
  moduleSpecifier?: string;
  /** API root override (transport, split out of options). */
  baseUrl?: string;
  /** Resolved API version (graphql-schema-surface D4); same field `baseUrl` was derived from. */
  version?: string;
  credential?: { id: string; payload: CredentialPayload };
  options: Record<string, unknown>;
  limits?: ProfileLimits;
  profileId?: string;
  /** The resolved profile name ("default" for bare dispatch; undefined for pure fallback). */
  profileName?: string;
  /** Interface dispatch timeout. */
  timeoutMs?: number;
  /** Operations that receive option defaults as missing args. */
  defaultsFor: string[];
  /** True when the compat entry needs no credential (dispatch short-circuits). */
  credentialless?: boolean;
}

const targetLabel = (target: ResolvedTarget): string => target.id;

/** Executing provider for a stored profile row (canonical credential key). */
function executingProviderForRow(target: ResolvedTarget, row: { provider?: string }): string {
  return target.kind === "interface" ? (row.provider ?? "") : target.id;
}

/**
 * Grant + run-scoped narrowing — one gate (grant-enforcement §4).
 * Narrowing applies even when grants are skipped (admin / auth-none).
 */
async function authorizeCaller(
  deps: ResolveDeps,
  ctx: CallContext,
  row: { id: string; provider?: string },
  target: ResolvedTarget,
  profileName: string,
): Promise<void> {
  const executingProvider = executingProviderForRow(target, row);

  if (deps.authMode !== "none" && ctx.role !== "admin") {
    const granted = await deps.profileService.resolveGrantedProfileIds(ctx);
    if (!granted.has(row.id)) {
      throw new ServiceError(
        `Profile "${profileName}" (${targetLabel(target)}) is not granted to this caller. ` +
          `Ask a workspace admin to grant it.`,
        403,
      );
    }
  }

  if (ctx.narrowedTo && !ctx.narrowedTo.includes(executingProvider)) {
    throw new ServiceError(
      `Provider "${executingProvider}" is outside this run's narrowed scope ` +
        `[${ctx.narrowedTo.join(", ")}].`,
      403,
    );
  }
}

function assertWithinNarrowedTo(ctx: CallContext, executingProvider: string): void {
  if (ctx.narrowedTo && !ctx.narrowedTo.includes(executingProvider)) {
    throw new ServiceError(
      `Provider "${executingProvider}" is outside this run's narrowed scope ` +
        `[${ctx.narrowedTo.join(", ")}].`,
      403,
    );
  }
}

/**
 * Split the merged option bag into the API root and the option defaults that
 * get folded into call arguments — `baseUrl` is transport, not an argument.
 */
function splitOptions(
  merged: Record<string, unknown>,
  compatBaseUrl?: string,
): { options: Record<string, unknown>; baseUrl?: string } {
  const { baseUrl, ...options } = merged;
  const resolved = typeof baseUrl === "string" && baseUrl ? baseUrl : compatBaseUrl;
  return { options, ...(resolved ? { baseUrl: resolved } : {}) };
}

export async function resolveProfile(
  deps: ResolveDeps,
  ctx: CallContext,
  namespace: string,
  profileName?: string,
): Promise<ResolvedProfile> {
  // Step 1 — classify. (Native services never reach here; dispatch stops first.)
  if (namespace.includes(":")) {
    throw new ServiceError(
      `Unknown tool namespace "${namespace}": instance-namespace colon syntax is gone — ` +
        `dispatch with the base namespace and a profile (the "profile" field on the wire, ` +
        `or client("${namespace.slice(namespace.indexOf(":") + 1)}") in scripts).`,
      404,
    );
  }
  const interfaceDef = findInterface(deps.catalog, namespace);
  const llmAlias = interfaceDef ? undefined : findLlmAlias(deps.catalog, namespace);
  let target: ResolvedTarget;
  if (interfaceDef) {
    target = { kind: "interface", id: namespace };
  } else if (llmAlias || deps.isKnownProvider(namespace)) {
    target = { kind: "provider", id: namespace };
  } else {
    throw new ServiceError(
      `Unknown tool namespace "${namespace}": not a registered native service, a cataloged ` +
        `interface, an LLM alias, or a provider in the UTDK catalogue.`,
      404,
    );
  }

  // Step 2 — the default name is the only implicit one.
  const name = profileName ?? "default";

  // Step 3
  const row = await deps.profiles.getByName(ctx.tenantId, target.kind, target.id, name);

  const aliasBase = llmAlias
    ? {
        module: llmAlias.module,
        ...(llmAlias.baseUrl ? { baseUrl: llmAlias.baseUrl } : {}),
      }
    : { module: target.id };

  // Step 4 — stored profile.
  if (row) {
    // 4a. AUTHORIZE + run narrowing — one gate.
    await authorizeCaller(deps, ctx, row, target, name);

    // 4b. Interface target: find the executing compat entry.
    let compat: InterfaceCompat | undefined;
    if (target.kind === "interface") {
      compat = interfaceDef!.compat.find((entry) => entry.provider === row.provider);
      if (!compat) {
        throw new ServiceError(
          `${name} is bound to ${row.provider ?? "(no provider)"}, which does not implement ${target.id}`,
          400,
        );
      }
      if (compat.unavailable) {
        throw new ServiceError(
          `${target.id} resolves to ${compat.provider}: ${compat.unavailable}`,
          501,
        );
      }
      if (compat.availabilityProbe) {
        await assertProbeAvailable(
          compat.availabilityProbe,
          deps.runAvailabilityProbe,
          `${target.id} / ${compat.provider}`,
        );
      }
    } else if (llmAlias?.availabilityProbe) {
      await assertProbeAvailable(
        llmAlias.availabilityProbe,
        deps.runAvailabilityProbe,
        llmAlias.id,
      );
    }

    const executingProvider = target.kind === "interface" ? compat!.provider : target.id;

    // 4b2. API version — the endpoint and the schema for this call derive
    // from ONE field (graphql-schema-surface D4); a profile setting both
    // `version` and `baseUrl` is a loud 400, not silent drift.
    const explicitBaseUrl =
      typeof row.options["baseUrl"] === "string" ? (row.options["baseUrl"] as string) : undefined;
    const versionResolution = resolveProviderVersion(
      executingProvider,
      deps.getProviderVersioning(executingProvider),
      row.version,
      explicitBaseUrl,
    );

    // 4c. Credential — pinned id resolves loudly; never falls back.
    let credential: { id: string; payload: CredentialPayload } | undefined;
    if (row.credentialId) {
      try {
        const resolved = await deps.credentials.resolveById(
          ctx.tenantId,
          row.credentialId,
          executingProvider,
        );
        credential = { id: resolved.id, payload: resolved.payload };
      } catch (err) {
        const detail =
          err instanceof CredentialResolutionError ? err.message : String(err);
        throw new ServiceError(
          `Profile "${name}" (${targetLabel(target)}) pins credential ${row.credentialId}, which cannot be used: ` +
            `${detail}. Re-link a credential on the profile.`,
          400,
        );
      }
    } else if (compat?.credentialless) {
      credential = undefined;
    } else {
      credential = await deps.credentials.firstForProvider(ctx.tenantId, executingProvider);
    }

    // 4d. options = compat.defaults ⊕ row.options (row wins); baseUrl split out.
    const merged = { ...(compat?.defaults ?? {}), ...row.options };
    const { options, baseUrl: fallbackBaseUrl } = splitOptions(
      merged,
      compat?.baseUrl ?? aliasBase.baseUrl,
    );
    const baseUrl = versionResolution.baseUrl ?? fallbackBaseUrl;

    return {
      target,
      ...(compat ? { compat } : {}),
      provider: executingProvider,
      module: target.kind === "interface" ? compat!.module : aliasBase.module,
      ...(target.kind === "interface" && compat!.moduleSpecifier
        ? { moduleSpecifier: compat!.moduleSpecifier }
        : {}),
      ...(baseUrl ? { baseUrl } : {}),
      ...(versionResolution.version ? { version: versionResolution.version } : {}),
      ...(credential ? { credential } : {}),
      options,
      ...(row.limits ? { limits: row.limits } : {}),
      profileId: row.id,
      profileName: name,
      ...(target.kind === "interface" ? { timeoutMs: interfaceDef!.timeoutMs } : {}),
      defaultsFor: target.kind === "interface" ? interfaceDef!.defaultsFor : [],
      ...(compat?.credentialless ? { credentialless: true } : {}),
    };
  }

  // Step 6 — a named miss is loud and lists what exists. No fallback, ever.
  if (name !== "default") {
    const names = await deps.profiles.namesForTarget(ctx.tenantId, target.kind, target.id);
    const listing =
      names.length > 0
        ? `Profiles for ${targetLabel(target)}: ${names.map((n) => `"${n}"`).join(", ")}.`
        : `No profiles exist for ${targetLabel(target)} — create one with profiles.create.`;
    throw new ServiceError(
      `No ${targetLabel(target)} profile named "${name}". ${listing}`,
      404,
    );
  }

  // Governed tenants must have a granted default profile — no silent fallback.
  if (deps.authMode !== "none") {
    throw new ServiceError(
      `No default profile for ${targetLabel(target)}. Ask a workspace admin to grant a profile.`,
      403,
    );
  }

  // Step 5 — ungoverned-mode fallback for the default name only.
  if (target.kind === "interface") {
    const def = interfaceDef!;
    let compat = def.compat.find((entry) => entry.credentialless);
    let credential: { id: string; payload: CredentialPayload } | undefined;
    if (!compat) {
      // First compat entry with a tenant credential, in catalog order.
      const credentials = await deps.credentials.list(ctx.tenantId);
      const connected = new Set(credentials.map((row) => row.provider));
      compat = def.compat.find((entry) => connected.has(entry.provider));
    }
    if (!compat) {
      throw new ServiceError(
        `Interface ${target.id} has no "default" profile and no connected compatible provider. ` +
          `Connect a credential for one of: ${def.compat.map((c) => c.provider).join(", ")} — ` +
          `or create a profile with profiles.create { name: "default", target: { kind: "interface", interface: "${target.id}" }, provider: … }.`,
        400,
      );
    }
    if (compat.unavailable) {
      throw new ServiceError(
        `${target.id} resolves to ${compat.provider}: ${compat.unavailable}`,
        501,
      );
    }
    if (compat.availabilityProbe) {
      await assertProbeAvailable(
        compat.availabilityProbe,
        deps.runAvailabilityProbe,
        `${target.id} / ${compat.provider}`,
      );
    }
    assertWithinNarrowedTo(ctx, compat.provider);
    if (!compat.credentialless) {
      credential = await deps.credentials.firstForProvider(ctx.tenantId, compat.provider);
    }
    const { options, baseUrl } = splitOptions({ ...(compat.defaults ?? {}) }, compat.baseUrl);
    return {
      target,
      compat,
      provider: compat.provider,
      module: compat.module,
      ...(compat.moduleSpecifier ? { moduleSpecifier: compat.moduleSpecifier } : {}),
      ...(baseUrl ? { baseUrl } : {}),
      ...(credential ? { credential } : {}),
      options,
      timeoutMs: def.timeoutMs,
      defaultsFor: def.defaultsFor,
      ...(compat.credentialless ? { credentialless: true } : {}),
    };
  }

  // Provider target: first tenant credential (may be none — ephemeral
  // request-supplied credentials remain legal on the HTTP surface).
  if (llmAlias?.availabilityProbe) {
    await assertProbeAvailable(
      llmAlias.availabilityProbe,
      deps.runAvailabilityProbe,
      llmAlias.id,
    );
  }
  assertWithinNarrowedTo(ctx, target.id);
  const credential = await deps.credentials.firstForProvider(ctx.tenantId, target.id);
  const versionResolution = resolveProviderVersion(
    target.id,
    deps.getProviderVersioning(target.id),
    undefined,
    aliasBase.baseUrl,
  );
  const { options, baseUrl: fallbackBaseUrl } = splitOptions({}, aliasBase.baseUrl);
  const baseUrl = versionResolution.baseUrl ?? fallbackBaseUrl;
  return {
    target,
    provider: target.id,
    module: aliasBase.module,
    ...(baseUrl ? { baseUrl } : {}),
    ...(versionResolution.version ? { version: versionResolution.version } : {}),
    ...(credential ? { credential } : {}),
    options,
    defaultsFor: [],
  };
}
