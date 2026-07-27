/**
 * Tool-invocation authorization.
 *
 * A caller may invoke `provider:operation` when any of:
 *   1. They hold a direct grant in the Permissions table (callerId match,
 *      exact op or provider `*` wildcard) — APR-320
 *   2. One of their groups holds a matching tool grant — APR-283
 *   3. They are a workspace admin (admins manage grants and need to be able
 *      to exercise tools without a bootstrap grant)
 */

import { checkToolGrant } from "./groups.js";
import type { Principal } from "./middleware/auth.js";
import { getPermissionStore } from "./permissions.js";

export async function mayInvokeTool(
  principal: Principal,
  provider: string,
  operation: string,
): Promise<boolean> {
  if (principal.role === "admin") return true;

  if (
    await getPermissionStore().check(
      principal.workspaceId,
      principal.sub,
      provider,
      operation,
    )
  ) {
    return true;
  }

  if (principal.groupIds.length === 0) return false;
  return checkToolGrant(principal.workspaceId, principal.groupIds, provider, operation);
}
