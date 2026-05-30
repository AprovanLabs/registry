/**
 * Per-tool permission grants.
 *
 * Workspace admins configure which tool operations a caller (identified by callerId)
 * may invoke. The permission store is in-memory with optional file persistence.
 *
 * A permission entry grants `callerId` the right to call `provider:operation`
 * (or `provider:*` as a wildcard for all operations of a provider).
 */

import { randomBytes } from "crypto";
import { readFileSync, writeFileSync, existsSync } from "fs";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Permission {
  id: string;
  workspaceId: string;
  callerId: string;
  provider: string;
  /** Operation name or "*" for all operations under the provider */
  operation: string;
  grantedAt: string;
  grantedBy: string;
}

export interface GrantInput {
  callerId: string;
  provider: string;
  operation: string;
  grantedBy: string;
}

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

interface SerializedStore {
  permissions: Permission[];
}

export class PermissionStore {
  private readonly store: Map<string, Permission> = new Map();
  private readonly storePath: string | undefined;

  constructor(storePath?: string) {
    this.storePath = storePath;
    if (storePath && existsSync(storePath)) {
      this.load(storePath);
    }
  }

  private load(path: string): void {
    try {
      const raw = readFileSync(path, "utf8");
      const data = JSON.parse(raw) as SerializedStore;
      for (const perm of data.permissions) {
        this.store.set(perm.id, perm);
      }
    } catch {
      // Start fresh on parse error
    }
  }

  private persist(): void {
    if (!this.storePath) return;
    const data: SerializedStore = { permissions: Array.from(this.store.values()) };
    writeFileSync(this.storePath, JSON.stringify(data, null, 2), "utf8");
  }

  private makeId(): string {
    return randomBytes(12).toString("hex");
  }

  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------

  grant(workspaceId: string, input: GrantInput): Permission {
    const perm: Permission = {
      id: this.makeId(),
      workspaceId,
      callerId: input.callerId,
      provider: input.provider,
      operation: input.operation,
      grantedAt: new Date().toISOString(),
      grantedBy: input.grantedBy,
    };
    this.store.set(perm.id, perm);
    this.persist();
    return perm;
  }

  revoke(workspaceId: string, id: string): boolean {
    const perm = this.store.get(id);
    if (!perm || perm.workspaceId !== workspaceId) return false;
    this.store.delete(id);
    this.persist();
    return true;
  }

  list(workspaceId: string, callerId?: string): Permission[] {
    const results: Permission[] = [];
    for (const perm of this.store.values()) {
      if (perm.workspaceId !== workspaceId) continue;
      if (callerId !== undefined && perm.callerId !== callerId) continue;
      results.push(perm);
    }
    return results;
  }

  /**
   * Check whether `callerId` is allowed to call `provider:operation`.
   *
   * A permission grants access if:
   * - `perm.callerId === callerId`
   * - `perm.provider === provider`
   * - `perm.operation === operation` OR `perm.operation === "*"`
   */
  check(workspaceId: string, callerId: string, provider: string, operation: string): boolean {
    for (const perm of this.store.values()) {
      if (perm.workspaceId !== workspaceId) continue;
      if (perm.callerId !== callerId) continue;
      if (perm.provider !== provider) continue;
      if (perm.operation === operation || perm.operation === "*") return true;
    }
    return false;
  }
}

// ---------------------------------------------------------------------------
// Singleton factory
// ---------------------------------------------------------------------------

let _store: PermissionStore | undefined;

export function getPermissionStore(): PermissionStore {
  if (!_store) {
    const storePath = process.env["GATEWAY_PERMISSIONS_PATH"];
    _store = new PermissionStore(storePath);
  }
  return _store;
}

export function resetPermissionStore(): void {
  _store = undefined;
}
