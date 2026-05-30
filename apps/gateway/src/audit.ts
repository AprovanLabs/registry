/**
 * In-memory audit log for gateway tool calls.
 *
 * Keeps a ring buffer of the last MAX_ENTRIES requests.
 * Each entry captures: who called what, when, and whether it succeeded.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface AuditEntry {
  id: string;
  ts: string;
  requestId: string;
  workspaceId: string;
  callerId: string;
  provider: string;
  operation: string;
  /** HTTP status code (200, 403, 500, …) */
  status: number;
  durationMs?: number;
  /** Human-readable label derived from status */
  result: "success" | "forbidden" | "error";
}

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

const MAX_ENTRIES = 500;

export class AuditStore {
  private readonly entries: AuditEntry[] = [];

  append(entry: Omit<AuditEntry, "id" | "ts" | "result">): void {
    const id = crypto.randomUUID();
    const ts = new Date().toISOString();
    const result =
      entry.status === 403 ? "forbidden" : entry.status < 400 ? "success" : "error";

    this.entries.push({ id, ts, result, ...entry });

    // Evict oldest when over capacity
    if (this.entries.length > MAX_ENTRIES) {
      this.entries.splice(0, this.entries.length - MAX_ENTRIES);
    }
  }

  /**
   * Return the N most-recent entries, optionally filtered.
   */
  recent(opts: {
    workspaceId: string;
    limit?: number;
    callerId?: string;
    provider?: string;
  }): AuditEntry[] {
    const { workspaceId, limit = 100, callerId, provider } = opts;

    // Walk newest-first so we can honour the limit efficiently
    const results: AuditEntry[] = [];
    for (let i = this.entries.length - 1; i >= 0 && results.length < limit; i--) {
      const e = this.entries[i]!;
      if (e.workspaceId !== workspaceId) continue;
      if (callerId !== undefined && e.callerId !== callerId) continue;
      if (provider !== undefined && e.provider !== provider) continue;
      results.push(e);
    }
    return results;
  }
}

// ---------------------------------------------------------------------------
// Singleton
// ---------------------------------------------------------------------------

let _store: AuditStore | undefined;

export function getAuditStore(): AuditStore {
  if (!_store) {
    _store = new AuditStore();
  }
  return _store;
}

export function resetAuditStore(): void {
  _store = undefined;
}
