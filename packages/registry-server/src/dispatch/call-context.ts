/**
 * CallContext construction helpers — run-scoped narrowing validation
 * (grant-enforcement §4) and resource-grant checks (iw9-c stream 3).
 */

import { ServiceError } from "../kernel/index.js";
import type { ProfileService } from "../profiles/service.js";
import type { CallContext } from "../config/types.js";
import type {
  ResourceGrantRow,
  ResourceGrantStore,
  ResourceGrantSubject,
} from "../storage/types.js";
import { matchesResourcePattern } from "./resource-pattern.js";

export interface NarrowingDeps {
  authMode: "oidc" | "api-key" | "none";
  profileService: ProfileService;
}

export interface ResourceAccessDeps {
  authMode: "oidc" | "api-key" | "none";
  resourceGrants: ResourceGrantStore;
}

/** Subjects the call context carries for resource-grant joins. */
export function resourceGrantSubjects(ctx: CallContext): ResourceGrantSubject[] {
  const subjects: ResourceGrantSubject[] = [
    { kind: "user", id: ctx.principal },
    ...ctx.groupIds.map((id) => ({ kind: "group" as const, id })),
  ];
  if (ctx.actor?.kind === "app") {
    subjects.push({ kind: "app-install", id: ctx.actor.id });
  }
  return subjects;
}

/**
 * Extend the grant-enforcement predicate with resource-pattern checks.
 *
 * When the principal holds no active resource grants for `capability`, the
 * call is unconstrained on the resource dimension (profile grants already
 * decided capability access). When one or more resource grants exist for
 * that capability, the resource must match at least one
 * (`resourcePattern: null` = any resource; otherwise `matchesResourcePattern`).
 *
 * Admins are not exempt — apps are separate principals (invariant 4); the
 * resource dimension always applies when grants exist.
 */
export async function assertResourceAccess(
  deps: ResourceAccessDeps,
  ctx: CallContext,
  capability: string,
  resource?: string,
): Promise<void> {
  if (deps.authMode === "none") return;

  const subjects = resourceGrantSubjects(ctx);
  const grants = await deps.resourceGrants.listForSubjects(ctx.tenantId, subjects);
  const forCapability = grants.filter((grant) => grant.capability === capability);
  if (forCapability.length === 0) return;

  if (resourceGrantCovers(forCapability, resource)) return;

  throw new ServiceError(
    resource === undefined
      ? `Capability "${capability}" requires a resource covered by a standing grant; no resource was provided.`
      : `Resource "${resource}" is outside the granted patterns for capability "${capability}".`,
    403,
  );
}

function resourceGrantCovers(grants: ResourceGrantRow[], resource?: string): boolean {
  for (const grant of grants) {
    if (grant.resourcePattern === null) return true;
    if (resource !== undefined && matchesResourcePattern(grant.resourcePattern, resource)) {
      return true;
    }
  }
  return false;
}

/**
 * Validate and normalize `narrowedTo` on a CallContext. A superset of the
 * principal's grant is a 400 naming the offending entries — never a silent
 * intersection. Stamps `grantedProviders` when narrowing is active.
 */
export async function finalizeCallContext(
  deps: NarrowingDeps,
  ctx: CallContext,
): Promise<CallContext> {
  if (!ctx.narrowedTo || ctx.narrowedTo.length === 0) return ctx;

  const narrowedTo = [...new Set(ctx.narrowedTo)];
  for (const provider of narrowedTo) {
    if (typeof provider !== "string" || provider.length === 0) {
      throw new ServiceError("narrowedTo entries must be non-empty provider names.", 400);
    }
  }

  const granted = await deps.profileService.grantedProviderNames(ctx);
  const grantedProviders = [...granted].sort();

  if (deps.authMode !== "none" && ctx.role !== "admin") {
    const offending = narrowedTo.filter((provider) => !granted.has(provider));
    if (offending.length > 0) {
      throw new ServiceError(
        `narrowedTo includes providers not granted to this caller: ${offending.join(", ")}. ` +
          `Granted providers: ${grantedProviders.join(", ") || "(none)"}.`,
        400,
      );
    }
  }

  return { ...ctx, narrowedTo, grantedProviders };
}
