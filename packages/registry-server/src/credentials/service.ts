/**
 * Credential domain service — the cipher-aware layer over the storage rows.
 * Payloads are sealed with the credentialCipher envelope (kms/local/none) on
 * write and opened on read; `created_by` is populated from the calling
 * context (profiles spec "Credential owner dimension").
 */

import { getCredentialCipher } from "./cipher.js";
import {
  exchangeAuthorizationCode,
  OAuthClientResolutionError,
  prepareOAuthPayloadForStorage,
  redactTenantCredentialPayload,
} from "./oauth.js";
import type { CredentialPayload, OAuth2AuthCodePayload } from "./types.js";
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
}

/** `RegistryStorage.provisionCredential` — injected so this stays storage-agnostic. */
export type ProvisionCredentialFn = (
  tenantId: string,
  input: CredentialProvisionInput,
) => Promise<ProvisionedCredential>;

export class CredentialResolutionError extends Error {
  readonly status = 400;
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
    const { credential } = await this.provisionCredential(tenantId, {
      provider: input.provider,
      ...(input.label !== undefined ? { label: input.label } : {}),
      type: payload.type,
      payload: await getCredentialCipher().encrypt(JSON.stringify(payload)),
      createdBy,
    });
    return credential;
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
   * bug, never a silent fallback).
   */
  async resolveById(
    tenantId: string,
    credentialId: string,
    expectedProvider?: string,
  ): Promise<{ id: string; provider: string; payload: CredentialPayload }> {
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
      id: row.id,
      provider: row.provider,
      payload: redactTenantCredentialPayload(
        row.provider,
        JSON.parse(await getCredentialCipher().decrypt(row.payload)) as CredentialPayload,
      ),
    };
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
