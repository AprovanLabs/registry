/**
 * Credential domain service — the cipher-aware layer over the storage rows.
 * Payloads are sealed with the credentialCipher envelope (kms/local/none) on
 * write and opened on read; `created_by` is populated from the calling
 * context (profiles spec "Credential owner dimension").
 */

import { UniqueConstraintError } from "../storage/index.js";
import { getCredentialCipher } from "./cipher.js";
import {
  exchangeAuthorizationCode,
  OAuthClientResolutionError,
  prepareOAuthPayloadForStorage,
  redactTenantCredentialPayload,
} from "./oauth.js";
import {
  credentialLevelValues,
  defaultLevelForType,
  effectiveLevel,
  isCredentialLevel,
  type CredentialLevel,
  type CredentialPayload,
  type CredentialType,
  type OAuth2AuthCodePayload,
} from "./types.js";
import type {
  CredentialProvisionInput,
  CredentialRow,
  CredentialStore,
  ProvisionedCredential,
} from "../storage/types.js";

export interface CredentialInput {
  provider: string;
  label?: string;
  payload: CredentialPayload;
  /** Validated against the closed `CredentialLevel` vocabulary at create. */
  level?: string;
}

/** `RegistryStorage.provisionCredential` — injected so this stays storage-agnostic. */
export type ProvisionCredentialFn = (
  tenantId: string,
  input: CredentialProvisionInput,
) => Promise<ProvisionedCredential>;

export class CredentialResolutionError extends Error {
  readonly status = 400;
}

// ---------------------------------------------------------------------------
// Resolution contract (IW-9 F3 tech-plan "Interfaces & Data", D4/D4a/D5) —
// published from the package root so consumers (workspace dispatch, iw9-c
// approval routing) type against it without reading resolution internals.
// ---------------------------------------------------------------------------

/**
 * The invoker's identity for credential selection — `CallContext.principal`
 * plus any non-user via-path (`CallContext.actor`), named for the published
 * contract. Resolution that can reach a `user-oauth` row always receives one.
 */
export interface CredentialInvoker {
  /** Authenticated user sub. */
  sub: string;
  /** Via-path, when dispatch originates from a granted non-user subject. */
  actor?: { kind: "app" | "workflow" | "agent"; id: string };
}

/** The inputs of one resolution, as consumers state them (tech-plan D5). */
export interface CredentialResolutionRequest {
  tenantId: string;
  provider: string;
  invoker: CredentialInvoker;
  /** Explicit pin (profile/interface); loud on mismatch, never a fallback. */
  credentialId?: string;
  /** Display/audit only at this layer. */
  profileName?: string;
}

/**
 * Resolution output — id + level (+ owner for user-level) so dispatch/audit
 * callers read the level without a second fetch (spec "Resolved output names
 * the level").
 */
export interface ResolvedCredential {
  id: string;
  level: CredentialLevel;
  /** Present iff level === "user-oauth". */
  owner?: string;
  payload: CredentialPayload;
}

/**
 * Fail-closed "not connected" (tech-plan D5) — machine-distinguishable from
 * `CredentialResolutionError` (400, config bug) so iw9-c can react with a
 * per-user connect prompt. Thrown when selection lands on user level and the
 * invoker holds no connection; never a silent fallback to another user's
 * credential, never a silent workspace downgrade.
 */
export class CredentialNotConnectedError extends Error {
  readonly code = "credential_not_connected" as const;
  readonly status = 403 as const;
  readonly requiredLevel = "user-oauth" as const;

  constructor(readonly provider: string) {
    super(
      `${provider} resolves at user level here and this user has no ${provider} connection — connect your own ${provider} account.`,
    );
  }
}

/** ResolvedCredential shape from a row + its decrypted payload. */
function toResolvedCredential(
  row: CredentialRow,
  payload: CredentialPayload,
): ResolvedCredential {
  const level = effectiveLevel(row.type, row.level);
  return {
    id: row.id,
    level,
    ...(level === "user-oauth" && row.createdBy !== undefined ? { owner: row.createdBy } : {}),
    payload,
  };
}

function assertLevelCompatible(level: CredentialLevel, type: CredentialType): void {
  const compatible =
    (level === "workspace-token" && (type === "bearer_token" || type === "api_key")) ||
    (level === "workspace-oauth" && (type === "oauth2_client" || type === "oauth2_authcode")) ||
    (level === "user-oauth" && type === "oauth2_authcode");
  if (!compatible) {
    throw new CredentialResolutionError(
      `Credential level ${level} is incompatible with payload type ${type}`,
    );
  }
}

function resolveCreateLevel(type: CredentialType, requested: string | undefined): CredentialLevel {
  if (requested === undefined) return defaultLevelForType(type);
  if (!isCredentialLevel(requested)) {
    throw new CredentialResolutionError(
      `Invalid credential level ${JSON.stringify(requested)}; allowed values: ${credentialLevelValues().join(", ")}`,
    );
  }
  return requested;
}

export class CredentialService {
  /**
   * `provisionCredential` is `RegistryStorage.provisionCredential` — every
   * `create()` call routes through it so the `default` profile + grant are
   * written in the SAME transaction as the credential (grant-enforcement
   * tech-plan D3, §3 tasks 3.1/3.2). Every construction site MUST wire it;
   * a credential store without it reopens the hole §1 closed.
   */
  constructor(
    private readonly store: CredentialStore,
    private readonly provisionCredential: ProvisionCredentialFn,
  ) {}

  /**
   * Create a credential. Authorization-code payloads exchange their one-time
   * code up front (codes expire in minutes) so the stored payload carries
   * live tokens. Provisions the `default` profile + grant to `createdBy` in
   * the same transaction as the credential write (tech-plan D3).
   */
  async create(
    tenantId: string,
    createdBy: string,
    input: CredentialInput,
  ): Promise<CredentialRow> {
    const level = resolveCreateLevel(input.payload.type, input.level);
    assertLevelCompatible(level, input.payload.type);
    if (level === "user-oauth" && !createdBy) {
      throw new CredentialResolutionError(
        "user-oauth credentials require an owner (createdBy)",
      );
    }

    let payload = input.payload;
    try {
      if (payload.type === "oauth2_authcode" || payload.type === "oauth2_client") {
        const { resolution, payload: stored } = prepareOAuthPayloadForStorage(
          input.provider,
          payload,
        );
        if (payload.type === "oauth2_authcode" && payload.code && !payload.accessToken) {
          try {
            const tokens = await exchangeAuthorizationCode(input.provider, {
              ...payload,
              clientId: resolution.clientId,
              clientSecret: resolution.clientSecret,
            });
            const exchanged: OAuth2AuthCodePayload = {
              ...(stored as OAuth2AuthCodePayload),
              code: "",
              accessToken: tokens.accessToken,
              ...(tokens.refreshToken ? { refreshToken: tokens.refreshToken } : {}),
              ...(tokens.expiresAt !== undefined ? { expiresAt: tokens.expiresAt } : {}),
            };
            payload = exchanged;
          } catch {
            // Store as-is; call-time resolution reports the provider's error.
            payload = stored;
          }
        } else {
          payload = stored;
        }
      }
    } catch (err) {
      if (err instanceof OAuthClientResolutionError) {
        throw new CredentialResolutionError(err.message);
      }
      throw err;
    }

    try {
      const { credential } = await this.provisionCredential(tenantId, {
        provider: input.provider,
        ...(input.label !== undefined ? { label: input.label } : {}),
        type: payload.type,
        payload: await getCredentialCipher().encrypt(JSON.stringify(payload)),
        createdBy,
        level,
      });
      return credential;
    } catch (err) {
      if (err instanceof UniqueConstraintError) {
        throw new CredentialResolutionError(
          `${input.provider} is already connected`,
        );
      }
      throw err;
    }
  }

  list(tenantId: string): Promise<CredentialRow[]> {
    return this.store.list(tenantId);
  }

  get(tenantId: string, id: string): Promise<CredentialRow | undefined> {
    return this.store.get(tenantId, id);
  }

  delete(tenantId: string, id: string): Promise<boolean> {
    return this.store.delete(tenantId, id);
  }

  async getPayload(tenantId: string, id: string): Promise<CredentialPayload | undefined> {
    const row = await this.store.getWithPayload(tenantId, id);
    if (!row) return undefined;
    const payload = JSON.parse(await getCredentialCipher().decrypt(row.payload)) as CredentialPayload;
    return redactTenantCredentialPayload(row.provider, payload);
  }

  /**
   * Resolve one specific credential by id — loud on a miss and on a provider
   * mismatch (a pinned credential that cannot be honoured is a configuration
   * bug, never a silent fallback). Returns `ResolvedCredential` (+ provider)
   * so callers read level/owner without a second fetch.
   */
  async resolveById(
    tenantId: string,
    credentialId: string,
    expectedProvider?: string,
  ): Promise<ResolvedCredential & { provider: string }> {
    const row = await this.store.getWithPayload(tenantId, credentialId);
    if (!row) {
      throw new CredentialResolutionError(
        `Credential ${credentialId} does not exist in this tenant`,
      );
    }
    if (expectedProvider && row.provider !== expectedProvider) {
      throw new CredentialResolutionError(
        `Credential ${credentialId} belongs to ${row.provider}, not ${expectedProvider}`,
      );
    }
    return {
      ...toResolvedCredential(
        row,
        redactTenantCredentialPayload(
          row.provider,
          JSON.parse(await getCredentialCipher().decrypt(row.payload)) as CredentialPayload,
        ),
      ),
      provider: row.provider,
    };
  }

  /**
   * Invoker-aware un-pinned selection (tech-plan D4/D4a) — the additive
   * sibling of `firstForProvider`, and the only selection primitive
   * `resolveProfile` calls after IW-9 F3. Order: the invoker's own
   * `user-oauth` row for the provider first, else the first workspace-level
   * row in creation order. Other users' `user-oauth` rows are invisible; when
   * they are ALL that exists for the provider, fail closed with
   * `CredentialNotConnectedError` (never another user's payload, never a
   * silent downgrade). No rows at all → undefined (nothing connected — the
   * pre-existing legal outcome).
   */
  async resolveForInvoker(
    tenantId: string,
    provider: string,
    invoker: CredentialInvoker,
  ): Promise<ResolvedCredential | undefined> {
    const rows = (await this.store.list(tenantId)).filter((row) => row.provider === provider);
    const own = rows.find(
      (row) =>
        effectiveLevel(row.type, row.level) === "user-oauth" && row.createdBy === invoker.sub,
    );
    const chosen = own ?? rows.find((row) => effectiveLevel(row.type, row.level) !== "user-oauth");
    if (!chosen) {
      // Rows exist but every one is another user's connection — fail closed.
      if (rows.length > 0) throw new CredentialNotConnectedError(provider);
      return undefined;
    }
    const withPayload = await this.store.getWithPayload(tenantId, chosen.id);
    if (!withPayload) return undefined; // deleted between list and read
    return toResolvedCredential(
      withPayload,
      redactTenantCredentialPayload(
        provider,
        JSON.parse(await getCredentialCipher().decrypt(withPayload.payload)) as CredentialPayload,
      ),
    );
  }

  /** First credential for the provider, creation order — the zero-config pick. */
  async firstForProvider(
    tenantId: string,
    provider: string,
  ): Promise<{ id: string; payload: CredentialPayload } | undefined> {
    const row = await this.store.firstForProvider(tenantId, provider);
    if (!row) return undefined;
    return {
      id: row.id,
      payload: redactTenantCredentialPayload(
        provider,
        JSON.parse(await getCredentialCipher().decrypt(row.payload)) as CredentialPayload,
      ),
    };
  }

  async updatePayload(tenantId: string, id: string, payload: CredentialPayload): Promise<void> {
    await this.store.updatePayload(
      tenantId,
      id,
      await getCredentialCipher().encrypt(JSON.stringify(payload)),
    );
  }
}
