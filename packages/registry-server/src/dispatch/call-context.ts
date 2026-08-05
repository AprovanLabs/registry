/**
 * CallContext construction helpers — run-scoped narrowing validation
 * (grant-enforcement §4).
 */

import { ServiceError } from "../kernel/index.js";
import type { ProfileService } from "../profiles/service.js";
import type { CallContext } from "../config/types.js";

export interface NarrowingDeps {
  authMode: "oidc" | "api-key" | "none";
  profileService: ProfileService;
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
