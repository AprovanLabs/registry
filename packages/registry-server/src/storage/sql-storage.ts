/**
 * The one store implementation, written against the `SqlClient` seam. Every
 * driver (sqlite/libsql/dsql) reuses this file — dialect differences live in
 * the client adapters, not here.
 */

import { randomBytes } from "node:crypto";
import {
  effectiveLevel,
  isCredentialLevel,
  type CredentialLevel,
} from "../credentials/types.js";
import { SCHEMA_DDL } from "./schema.js";
import { UniqueConstraintError, type SqlClient } from "./sql-client.js";
import type {
  ApiKeyRow,
  ApiKeyStore,
  AuditRow,
  AuditStore,
  CredentialProvisionInput,
  CredentialRow,
  CredentialRowWithPayload,
  CredentialStore,
  CredentialType,
  GrantStore,
  GrantSubject,
  ProfileGrantRow,
  ProfileLimits,
  ProfileRow,
  ProfileStore,
  ProfileTargetKind,
  ProvisionedCredential,
  RegistryStorage,
  ResourceGrantCreateInput,
  ResourceGrantRow,
  ResourceGrantStore,
  ResourceGrantSubject,
  TenantRow,
  TenantStore,
} from "./types.js";

/**
 * Time-then-sequence-prefixed ids: `ORDER BY created_at, id` is exact
 * insertion order even for same-millisecond writes — "first credential,
 * creation order" is a semantic the zero-config fallback depends on.
 */
let idSequence = 0;
const newId = (): string =>
  Date.now().toString(16).padStart(12, "0") +
  (idSequence = (idSequence + 1) & 0xffff).toString(16).padStart(4, "0") +
  randomBytes(4).toString("hex");
const now = (): string => new Date().toISOString();

type Row = Record<string, unknown>;

const str = (v: unknown): string => String(v);
const optStr = (v: unknown): string | undefined =>
  v === null || v === undefined ? undefined : String(v);
const optNum = (v: unknown): number | undefined =>
  v === null || v === undefined ? undefined : Number(v);

// ---------------------------------------------------------------------------

class SqlTenantStore implements TenantStore {
  constructor(private readonly db: SqlClient) {}

  async ensure(id: string, displayName?: string): Promise<TenantRow> {
    const existing = await this.get(id);
    if (existing) return existing;
    const createdAt = now();
    try {
      await this.db.run(
        "INSERT INTO tenants (id, display_name, created_at) VALUES (?, ?, ?)",
        [id, displayName ?? null, createdAt],
      );
    } catch (err) {
      // Lost a concurrent race — the row exists, which is what we wanted.
      if (!(err instanceof UniqueConstraintError)) throw err;
    }
    return (await this.get(id))!;
  }

  async get(id: string): Promise<TenantRow | undefined> {
    const rows = await this.db.all<Row>(
      "SELECT id, display_name, created_at FROM tenants WHERE id = ?",
      [id],
    );
    const row = rows[0];
    if (!row) return undefined;
    return {
      id: str(row["id"]),
      ...(optStr(row["display_name"]) !== undefined
        ? { displayName: optStr(row["display_name"]) }
        : {}),
      createdAt: str(row["created_at"]),
    };
  }

  async list(): Promise<TenantRow[]> {
    const rows = await this.db.all<Row>(
      "SELECT id, display_name, created_at FROM tenants ORDER BY created_at",
    );
    return rows.map((row) => ({
      id: str(row["id"]),
      ...(optStr(row["display_name"]) !== undefined
        ? { displayName: optStr(row["display_name"]) }
        : {}),
      createdAt: str(row["created_at"]),
    }));
  }
}

// ---------------------------------------------------------------------------

function storedLevel(value: unknown): CredentialLevel | undefined {
  const raw = optStr(value);
  return raw !== undefined && isCredentialLevel(raw) ? raw : undefined;
}

function toCredentialRow(row: Row): CredentialRow {
  const type = str(row["type"]) as CredentialType;
  return {
    id: str(row["id"]),
    tenantId: str(row["tenant_id"]),
    provider: str(row["provider"]),
    ...(optStr(row["label"]) !== undefined ? { label: optStr(row["label"]) } : {}),
    type,
    level: effectiveLevel(type, storedLevel(row["level"])),
    ...(optStr(row["created_by"]) !== undefined ? { createdBy: optStr(row["created_by"]) } : {}),
    createdAt: str(row["created_at"]),
    updatedAt: str(row["updated_at"]),
  };
}

const CRED_COLS =
  "id, tenant_id, provider, label, type, level, created_by, created_at, updated_at";

class SqlCredentialStore implements CredentialStore {
  constructor(private readonly db: SqlClient) {}

  async create(
    tenantId: string,
    input: {
      provider: string;
      label?: string;
      type: CredentialType;
      payload: string;
      createdBy?: string;
      level?: CredentialLevel;
    },
  ): Promise<CredentialRow> {
    const id = newId();
    const ts = now();
    const level = input.level ?? effectiveLevel(input.type);
    await this.db.run(
      `INSERT INTO credentials (id, tenant_id, provider, label, type, payload, created_by, level, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        tenantId,
        input.provider,
        input.label ?? null,
        input.type,
        input.payload,
        input.createdBy ?? null,
        level,
        ts,
        ts,
      ],
    );
    return {
      id,
      tenantId,
      provider: input.provider,
      ...(input.label !== undefined ? { label: input.label } : {}),
      type: input.type,
      level,
      ...(input.createdBy !== undefined ? { createdBy: input.createdBy } : {}),
      createdAt: ts,
      updatedAt: ts,
    };
  }

  async list(tenantId: string): Promise<CredentialRow[]> {
    const rows = await this.db.all<Row>(
      `SELECT ${CRED_COLS} FROM credentials WHERE tenant_id = ? ORDER BY created_at, id`,
      [tenantId],
    );
    return rows.map(toCredentialRow);
  }

  async get(tenantId: string, id: string): Promise<CredentialRow | undefined> {
    const rows = await this.db.all<Row>(
      `SELECT ${CRED_COLS} FROM credentials WHERE tenant_id = ? AND id = ?`,
      [tenantId, id],
    );
    return rows[0] ? toCredentialRow(rows[0]) : undefined;
  }

  async getWithPayload(
    tenantId: string,
    id: string,
  ): Promise<CredentialRowWithPayload | undefined> {
    const rows = await this.db.all<Row>(
      `SELECT ${CRED_COLS}, payload FROM credentials WHERE tenant_id = ? AND id = ?`,
      [tenantId, id],
    );
    const row = rows[0];
    if (!row) return undefined;
    return { ...toCredentialRow(row), payload: str(row["payload"]) };
  }

  async firstForProvider(
    tenantId: string,
    provider: string,
  ): Promise<CredentialRowWithPayload | undefined> {
    const rows = await this.db.all<Row>(
      `SELECT ${CRED_COLS}, payload FROM credentials
       WHERE tenant_id = ? AND provider = ? ORDER BY created_at, id LIMIT 1`,
      [tenantId, provider],
    );
    const row = rows[0];
    if (!row) return undefined;
    return { ...toCredentialRow(row), payload: str(row["payload"]) };
  }

  async updatePayload(tenantId: string, id: string, payload: string): Promise<void> {
    await this.db.run(
      "UPDATE credentials SET payload = ?, updated_at = ? WHERE tenant_id = ? AND id = ?",
      [payload, now(), tenantId, id],
    );
  }

  async delete(tenantId: string, id: string): Promise<boolean> {
    const result = await this.db.run(
      "DELETE FROM credentials WHERE tenant_id = ? AND id = ?",
      [tenantId, id],
    );
    return result.changes > 0;
  }
}

// ---------------------------------------------------------------------------

function toProfileRow(row: Row): ProfileRow {
  return {
    id: str(row["id"]),
    tenantId: str(row["tenant_id"]),
    name: str(row["name"]),
    targetKind: str(row["target_kind"]) as ProfileTargetKind,
    targetId: str(row["target_id"]),
    ...(optStr(row["provider"]) !== undefined ? { provider: optStr(row["provider"]) } : {}),
    ...(optStr(row["credential_id"]) !== undefined
      ? { credentialId: optStr(row["credential_id"]) }
      : {}),
    ...(optStr(row["version"]) !== undefined ? { version: optStr(row["version"]) } : {}),
    options: JSON.parse(str(row["options"] ?? "{}")) as Record<string, unknown>,
    ...(optStr(row["limits"]) !== undefined
      ? { limits: JSON.parse(str(row["limits"])) as ProfileLimits }
      : {}),
    createdBy: str(row["created_by"]),
    createdAt: str(row["created_at"]),
    updatedAt: str(row["updated_at"]),
  };
}

const PROFILE_COLS =
  "id, tenant_id, name, target_kind, target_id, provider, credential_id, version, options, limits, created_by, created_at, updated_at";

class SqlProfileStore implements ProfileStore {
  constructor(private readonly db: SqlClient) {}

  async create(
    tenantId: string,
    input: Omit<ProfileRow, "id" | "tenantId" | "createdAt" | "updatedAt"> & { id?: string },
  ): Promise<ProfileRow> {
    const id = input.id ?? newId();
    const ts = now();
    await this.db.run(
      `INSERT INTO profiles (id, tenant_id, name, target_kind, target_id, provider, credential_id, version, options, limits, created_by, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        tenantId,
        input.name,
        input.targetKind,
        input.targetId,
        input.provider ?? null,
        input.credentialId ?? null,
        input.version ?? null,
        JSON.stringify(input.options ?? {}),
        input.limits ? JSON.stringify(input.limits) : null,
        input.createdBy,
        ts,
        ts,
      ],
    );
    return (await this.getById(tenantId, id))!;
  }

  async update(
    tenantId: string,
    id: string,
    patch: Partial<
      Pick<ProfileRow, "name" | "provider" | "credentialId" | "version" | "options" | "limits">
    >,
  ): Promise<ProfileRow | undefined> {
    const existing = await this.getById(tenantId, id);
    if (!existing) return undefined;
    const merged = { ...existing, ...patch };
    await this.db.run(
      `UPDATE profiles SET name = ?, provider = ?, credential_id = ?, version = ?, options = ?, limits = ?, updated_at = ?
       WHERE tenant_id = ? AND id = ?`,
      [
        merged.name,
        merged.provider ?? null,
        // An explicit `credentialId: undefined` in the patch clears the pin.
        "credentialId" in patch ? (patch.credentialId ?? null) : (existing.credentialId ?? null),
        "version" in patch ? (patch.version ?? null) : (existing.version ?? null),
        JSON.stringify(merged.options ?? {}),
        "limits" in patch
          ? patch.limits
            ? JSON.stringify(patch.limits)
            : null
          : existing.limits
            ? JSON.stringify(existing.limits)
            : null,
        now(),
        tenantId,
        id,
      ],
    );
    return this.getById(tenantId, id);
  }

  async delete(tenantId: string, id: string): Promise<boolean> {
    // Grants die with the profile — a recreated profile starts ungranted.
    await this.db.run("DELETE FROM profile_grants WHERE tenant_id = ? AND profile_id = ?", [
      tenantId,
      id,
    ]);
    const result = await this.db.run("DELETE FROM profiles WHERE tenant_id = ? AND id = ?", [
      tenantId,
      id,
    ]);
    return result.changes > 0;
  }

  async getById(tenantId: string, id: string): Promise<ProfileRow | undefined> {
    const rows = await this.db.all<Row>(
      `SELECT ${PROFILE_COLS} FROM profiles WHERE tenant_id = ? AND id = ?`,
      [tenantId, id],
    );
    return rows[0] ? toProfileRow(rows[0]) : undefined;
  }

  async getByName(
    tenantId: string,
    targetKind: ProfileTargetKind,
    targetId: string,
    name: string,
  ): Promise<ProfileRow | undefined> {
    const rows = await this.db.all<Row>(
      `SELECT ${PROFILE_COLS} FROM profiles
       WHERE tenant_id = ? AND target_kind = ? AND target_id = ? AND name = ?`,
      [tenantId, targetKind, targetId, name],
    );
    return rows[0] ? toProfileRow(rows[0]) : undefined;
  }

  async list(
    tenantId: string,
    filter?: { targetKind?: ProfileTargetKind; targetId?: string },
  ): Promise<ProfileRow[]> {
    const clauses = ["tenant_id = ?"];
    const params: unknown[] = [tenantId];
    if (filter?.targetKind) {
      clauses.push("target_kind = ?");
      params.push(filter.targetKind);
    }
    if (filter?.targetId) {
      clauses.push("target_id = ?");
      params.push(filter.targetId);
    }
    const rows = await this.db.all<Row>(
      `SELECT ${PROFILE_COLS} FROM profiles WHERE ${clauses.join(" AND ")} ORDER BY target_id, name`,
      params,
    );
    return rows.map(toProfileRow);
  }

  async namesForTarget(
    tenantId: string,
    targetKind: ProfileTargetKind,
    targetId: string,
  ): Promise<string[]> {
    const rows = await this.db.all<Row>(
      `SELECT name FROM profiles WHERE tenant_id = ? AND target_kind = ? AND target_id = ? ORDER BY name`,
      [tenantId, targetKind, targetId],
    );
    return rows.map((row) => str(row["name"]));
  }
}

// ---------------------------------------------------------------------------

function toGrantRow(row: Row): ProfileGrantRow {
  return {
    tenantId: str(row["tenant_id"]),
    profileId: str(row["profile_id"]),
    subjectKind: str(row["subject_kind"]) as ProfileGrantRow["subjectKind"],
    subjectId: str(row["subject_id"]),
    grantedBy: str(row["granted_by"]),
    createdAt: str(row["created_at"]),
  };
}

class SqlGrantStore implements GrantStore {
  constructor(private readonly db: SqlClient) {}

  async grant(
    tenantId: string,
    profileId: string,
    subject: GrantSubject,
    grantedBy: string,
  ): Promise<ProfileGrantRow> {
    const ts = now();
    try {
      await this.db.run(
        `INSERT INTO profile_grants (tenant_id, profile_id, subject_kind, subject_id, granted_by, created_at)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [tenantId, profileId, subject.kind, subject.id, grantedBy, ts],
      );
    } catch (err) {
      if (!(err instanceof UniqueConstraintError)) throw err; // re-grant is idempotent
    }
    return {
      tenantId,
      profileId,
      subjectKind: subject.kind,
      subjectId: subject.id,
      grantedBy,
      createdAt: ts,
    };
  }

  async revoke(tenantId: string, profileId: string, subject: GrantSubject): Promise<boolean> {
    const result = await this.db.run(
      `DELETE FROM profile_grants
       WHERE tenant_id = ? AND profile_id = ? AND subject_kind = ? AND subject_id = ?`,
      [tenantId, profileId, subject.kind, subject.id],
    );
    return result.changes > 0;
  }

  async listForProfile(tenantId: string, profileId: string): Promise<ProfileGrantRow[]> {
    const rows = await this.db.all<Row>(
      `SELECT tenant_id, profile_id, subject_kind, subject_id, granted_by, created_at
       FROM profile_grants WHERE tenant_id = ? AND profile_id = ? ORDER BY created_at`,
      [tenantId, profileId],
    );
    return rows.map(toGrantRow);
  }

  async grantedProfileIds(tenantId: string, subjects: GrantSubject[]): Promise<Set<string>> {
    if (subjects.length === 0) return new Set();
    // ONE indexed query over every subject the caller carries (D12): user id,
    // each group id, and the actor identity — no N+1 membership reads.
    const clause = subjects.map(() => "(subject_kind = ? AND subject_id = ?)").join(" OR ");
    const params: unknown[] = [tenantId];
    for (const subject of subjects) params.push(subject.kind, subject.id);
    const rows = await this.db.all<Row>(
      `SELECT DISTINCT profile_id FROM profile_grants WHERE tenant_id = ? AND (${clause})`,
      params,
    );
    return new Set(rows.map((row) => str(row["profile_id"])));
  }
}

// ---------------------------------------------------------------------------

const RESOURCE_GRANT_COLS =
  "id, tenant_id, subject_kind, subject_id, capability, resource_pattern, credential_level, granted_by, created_at, revoked_at";

function toResourceGrantRow(row: Row): ResourceGrantRow {
  return {
    id: str(row["id"]),
    tenantId: str(row["tenant_id"]),
    subject: {
      kind: str(row["subject_kind"]) as ResourceGrantSubject["kind"],
      id: str(row["subject_id"]),
    },
    capability: str(row["capability"]),
    resourcePattern: row["resource_pattern"] === null || row["resource_pattern"] === undefined
      ? null
      : str(row["resource_pattern"]),
    credentialLevel: str(row["credential_level"]) as ResourceGrantRow["credentialLevel"],
    grantedBy: str(row["granted_by"]),
    createdAt: str(row["created_at"]),
    ...(optStr(row["revoked_at"]) !== undefined ? { revokedAt: optStr(row["revoked_at"]) } : {}),
  };
}

class SqlResourceGrantStore implements ResourceGrantStore {
  constructor(private readonly db: SqlClient) {}

  async create(tenantId: string, input: ResourceGrantCreateInput): Promise<ResourceGrantRow> {
    const id = input.id ?? newId();
    const ts = now();
    await this.db.run(
      `INSERT INTO resource_grants
         (id, tenant_id, subject_kind, subject_id, capability, resource_pattern,
          credential_level, granted_by, created_at, revoked_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NULL)`,
      [
        id,
        tenantId,
        input.subject.kind,
        input.subject.id,
        input.capability,
        input.resourcePattern,
        input.credentialLevel,
        input.grantedBy,
        ts,
      ],
    );
    return {
      id,
      tenantId,
      subject: { kind: input.subject.kind, id: input.subject.id },
      capability: input.capability,
      resourcePattern: input.resourcePattern,
      credentialLevel: input.credentialLevel,
      grantedBy: input.grantedBy,
      createdAt: ts,
    };
  }

  async get(tenantId: string, id: string): Promise<ResourceGrantRow | undefined> {
    const rows = await this.db.all<Row>(
      `SELECT ${RESOURCE_GRANT_COLS} FROM resource_grants WHERE tenant_id = ? AND id = ?`,
      [tenantId, id],
    );
    return rows[0] ? toResourceGrantRow(rows[0]) : undefined;
  }

  async revoke(tenantId: string, id: string): Promise<boolean> {
    const result = await this.db.run(
      `UPDATE resource_grants SET revoked_at = ?
       WHERE tenant_id = ? AND id = ? AND revoked_at IS NULL`,
      [now(), tenantId, id],
    );
    return result.changes > 0;
  }

  async list(
    tenantId: string,
    filter?: {
      subject?: ResourceGrantSubject;
      capability?: string;
      includeRevoked?: boolean;
    },
  ): Promise<ResourceGrantRow[]> {
    const clauses = ["tenant_id = ?"];
    const params: unknown[] = [tenantId];
    if (filter?.subject) {
      clauses.push("subject_kind = ?", "subject_id = ?");
      params.push(filter.subject.kind, filter.subject.id);
    }
    if (filter?.capability !== undefined) {
      clauses.push("capability = ?");
      params.push(filter.capability);
    }
    if (!filter?.includeRevoked) {
      clauses.push("revoked_at IS NULL");
    }
    const rows = await this.db.all<Row>(
      `SELECT ${RESOURCE_GRANT_COLS} FROM resource_grants
       WHERE ${clauses.join(" AND ")} ORDER BY created_at`,
      params,
    );
    return rows.map(toResourceGrantRow);
  }

  async listForSubjects(
    tenantId: string,
    subjects: ResourceGrantSubject[],
  ): Promise<ResourceGrantRow[]> {
    if (subjects.length === 0) return [];
    const clause = subjects.map(() => "(subject_kind = ? AND subject_id = ?)").join(" OR ");
    const params: unknown[] = [tenantId];
    for (const subject of subjects) params.push(subject.kind, subject.id);
    const rows = await this.db.all<Row>(
      `SELECT ${RESOURCE_GRANT_COLS} FROM resource_grants
       WHERE tenant_id = ? AND revoked_at IS NULL AND (${clause})
       ORDER BY created_at`,
      params,
    );
    return rows.map(toResourceGrantRow);
  }
}

// ---------------------------------------------------------------------------

function toApiKeyRow(row: Row): ApiKeyRow {
  return {
    id: str(row["id"]),
    tenantId: str(row["tenant_id"]),
    digest: str(row["digest"]),
    ...(optStr(row["label"]) !== undefined ? { label: optStr(row["label"]) } : {}),
    createdBy: str(row["created_by"]),
    createdAt: str(row["created_at"]),
    ...(optStr(row["revoked_at"]) !== undefined ? { revokedAt: optStr(row["revoked_at"]) } : {}),
  };
}

class SqlApiKeyStore implements ApiKeyStore {
  constructor(private readonly db: SqlClient) {}

  async create(
    tenantId: string,
    input: { digest: string; label?: string; createdBy: string },
  ): Promise<ApiKeyRow> {
    const id = newId();
    const ts = now();
    await this.db.run(
      `INSERT INTO api_keys (id, tenant_id, digest, label, created_by, created_at, revoked_at)
       VALUES (?, ?, ?, ?, ?, ?, NULL)`,
      [id, tenantId, input.digest, input.label ?? null, input.createdBy, ts],
    );
    return {
      id,
      tenantId,
      digest: input.digest,
      ...(input.label !== undefined ? { label: input.label } : {}),
      createdBy: input.createdBy,
      createdAt: ts,
    };
  }

  async findByDigest(digest: string): Promise<ApiKeyRow | undefined> {
    const rows = await this.db.all<Row>(
      `SELECT id, tenant_id, digest, label, created_by, created_at, revoked_at
       FROM api_keys WHERE digest = ?`,
      [digest],
    );
    return rows[0] ? toApiKeyRow(rows[0]) : undefined;
  }

  async list(tenantId: string): Promise<ApiKeyRow[]> {
    const rows = await this.db.all<Row>(
      `SELECT id, tenant_id, digest, label, created_by, created_at, revoked_at
       FROM api_keys WHERE tenant_id = ? ORDER BY created_at`,
      [tenantId],
    );
    return rows.map(toApiKeyRow);
  }

  async revoke(tenantId: string, id: string): Promise<boolean> {
    const result = await this.db.run(
      "UPDATE api_keys SET revoked_at = ? WHERE tenant_id = ? AND id = ? AND revoked_at IS NULL",
      [now(), tenantId, id],
    );
    return result.changes > 0;
  }
}

// ---------------------------------------------------------------------------

class SqlAuditStore implements AuditStore {
  constructor(private readonly db: SqlClient) {}

  async append(row: Omit<AuditRow, "createdAt">): Promise<void> {
    await this.db.run(
      `INSERT INTO audit_log (request_id, tenant_id, principal, namespace, operation, profile_id, status, duration_ms, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        row.requestId,
        row.tenantId,
        row.principal,
        row.namespace,
        row.operation,
        row.profileId ?? null,
        row.status,
        row.durationMs ?? null,
        now(),
      ],
    );
  }

  async query(
    tenantId: string,
    filter?: { since?: string; limit?: number },
  ): Promise<AuditRow[]> {
    const clauses = ["tenant_id = ?"];
    const params: unknown[] = [tenantId];
    if (filter?.since) {
      clauses.push("created_at >= ?");
      params.push(filter.since);
    }
    const limit = Math.max(1, Math.min(filter?.limit ?? 100, 1000));
    const rows = await this.db.all<Row>(
      `SELECT request_id, tenant_id, principal, namespace, operation, profile_id, status, duration_ms, created_at
       FROM audit_log WHERE ${clauses.join(" AND ")} ORDER BY created_at DESC LIMIT ${limit}`,
      params,
    );
    return rows.map((row) => ({
      requestId: str(row["request_id"]),
      tenantId: str(row["tenant_id"]),
      principal: str(row["principal"]),
      namespace: str(row["namespace"]),
      operation: str(row["operation"]),
      ...(optStr(row["profile_id"]) !== undefined ? { profileId: optStr(row["profile_id"]) } : {}),
      status: Number(row["status"]),
      ...(optNum(row["duration_ms"]) !== undefined ? { durationMs: optNum(row["duration_ms"]) } : {}),
      createdAt: str(row["created_at"]),
    }));
  }
}

// ---------------------------------------------------------------------------
// Credential provisioning (grant-enforcement tech-plan D3, §3)
// ---------------------------------------------------------------------------

const DEFAULT_PROFILE_NAME = "default";

/**
 * Create a credential and provision its `default` profile + grant in one
 * transaction. A `default` row for (tenantId, "provider", input.provider) is
 * created bound to the new credential when none exists; an existing row is
 * bound only when it has no credential pinned yet — a pinned `default` is
 * never repointed, and no grant is added when the bind is refused (tasks
 * 3.1/3.3: a second credential for the same provider must not steal it).
 */
async function provisionCredential(
  db: SqlClient,
  tenantId: string,
  input: CredentialProvisionInput,
): Promise<ProvisionedCredential> {
  return db.transaction(async (tx) => {
    const credentialStore = new SqlCredentialStore(tx);
    const profileStore = new SqlProfileStore(tx);
    const grantStore = new SqlGrantStore(tx);

    const credential = await credentialStore.create(tenantId, {
      provider: input.provider,
      ...(input.label !== undefined ? { label: input.label } : {}),
      type: input.type,
      payload: input.payload,
      createdBy: input.createdBy,
      ...(input.level !== undefined ? { level: input.level } : {}),
    });

    const subject: GrantSubject = { kind: "user", id: input.createdBy };
    const existing = await profileStore.getByName(
      tenantId,
      "provider",
      input.provider,
      DEFAULT_PROFILE_NAME,
    );

    if (!existing) {
      const defaultProfile = await profileStore.create(tenantId, {
        name: DEFAULT_PROFILE_NAME,
        targetKind: "provider",
        targetId: input.provider,
        credentialId: credential.id,
        options: {},
        createdBy: input.createdBy,
      });
      const grant = await grantStore.grant(tenantId, defaultProfile.id, subject, input.createdBy);
      return { credential, defaultProfile, grant };
    }

    if (existing.credentialId) {
      // Pinned already — never repoint (task 3.3); no grant follows either.
      return { credential };
    }

    const defaultProfile = await profileStore.update(tenantId, existing.id, {
      credentialId: credential.id,
    });
    const grant = await grantStore.grant(tenantId, existing.id, subject, input.createdBy);
    return { credential, ...(defaultProfile ? { defaultProfile } : {}), grant };
  });
}

/** Build the full facade over one SQL client, creating the schema on boot. */
export async function createSqlStorage(db: SqlClient): Promise<RegistryStorage> {
  await db.exec(SCHEMA_DDL);
  return {
    tenants: new SqlTenantStore(db),
    credentials: new SqlCredentialStore(db),
    profiles: new SqlProfileStore(db),
    grants: new SqlGrantStore(db),
    resourceGrants: new SqlResourceGrantStore(db),
    apiKeys: new SqlApiKeyStore(db),
    audit: new SqlAuditStore(db),
    provisionCredential: (tenantId, input) => provisionCredential(db, tenantId, input),
    close: () => db.close(),
  };
}
