# Organizations

90 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.list`

```ts
posthog.list(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; slug: string; logo_media_id?: string | null; created_at: string; updated_at: string; membership_level: 1 | 8 | 15; plugins_access_level: 0 | 3 | 6 | 9; teams: ({ [key: string]: unknown })[]; projects: ({ [key: string]: unknown })[]; available_product_features: unknown[] | null; is_member_join_em...>
```

<sub>`GET /api/organizations/` · `list`</sub>

## `posthog.create`

```ts
posthog.create(): Promise<{ id: string; name: string; slug: string; logo_media_id?: string | null; created_at: string; updated_at: string; membership_level: 1 | 8 | 15; plugins_access_level: 0 | 3 | 6 | 9; teams: ({ [key: string]: unknown })[]; projects: ({ [key: string]: unknown })[]; available_product_features: unknown[] | null; is_member_join_email_enabled: boolean; metadata: { [key: string]: string | undefined }; cust...>
```

<sub>`POST /api/organizations/` · `create`</sub>

## `posthog.destroy`

```ts
posthog.destroy(): Promise<unknown>
```

<sub>`DELETE /api/organizations/{id}/` · `destroy`</sub>

## `posthog.retrieve`

```ts
posthog.retrieve(): Promise<{ id: string; name: string; slug: string; logo_media_id?: string | null; created_at: string; updated_at: string; membership_level: 1 | 8 | 15; plugins_access_level: 0 | 3 | 6 | 9; teams: ({ [key: string]: unknown })[]; projects: ({ [key: string]: unknown })[]; available_product_features: unknown[] | null; is_member_join_email_enabled: boolean; metadata: { [key: string]: string | undefined }; cust...>
```

<sub>`GET /api/organizations/{id}/` · `retrieve`</sub>

## `posthog.partialUpdate`

```ts
posthog.partialUpdate(): Promise<{ id: string; name: string; slug: string; logo_media_id?: string | null; created_at: string; updated_at: string; membership_level: 1 | 8 | 15; plugins_access_level: 0 | 3 | 6 | 9; teams: ({ [key: string]: unknown })[]; projects: ({ [key: string]: unknown })[]; available_product_features: unknown[] | null; is_member_join_email_enabled: boolean; metadata: { [key: string]: string | undefined }; cust...>
```

<sub>`PATCH /api/organizations/{id}/` · `partial_update`</sub>

## `posthog.update`

```ts
posthog.update(): Promise<{ id: string; name: string; slug: string; logo_media_id?: string | null; created_at: string; updated_at: string; membership_level: 1 | 8 | 15; plugins_access_level: 0 | 3 | 6 | 9; teams: ({ [key: string]: unknown })[]; projects: ({ [key: string]: unknown })[]; available_product_features: unknown[] | null; is_member_join_email_enabled: boolean; metadata: { [key: string]: string | undefined }; cust...>
```

<sub>`PUT /api/organizations/{id}/` · `update`</sub>

## `posthog.requestAiAccessCreate`

Notify organization admins that a member is requesting PostHog AI be enabled.

```ts
posthog.requestAiAccessCreate(): Promise<{ success: boolean }>
```

<sub>`POST /api/organizations/{id}/request_ai_access/` · `request_ai_access_create`</sub>

## `posthog.cimdVerificationTokensList`

Manage CIMD verification tokens for an organization. A partner embeds the plaintext token in their CIMD metadata document as `verification_token` inside the `com.posthog` object (the legacy top-level `posthog_verification_token` field still works as a fallback). When PostHog fetches the metadata, matching the token links the partner app to this organization and grants a higher default rate limit for account provisioning. The plaintext value is only available on creation; we store a hash.

```ts
posthog.cimdVerificationTokensList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; label: string; mask_value: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "produc...>
```

<sub>`GET /api/organizations/{organization_id}/cimd_verification_tokens/` · `cimd_verification_tokens_list`</sub>

## `posthog.cimdVerificationTokensCreate`

Manage CIMD verification tokens for an organization. A partner embeds the plaintext token in their CIMD metadata document as `verification_token` inside the `com.posthog` object (the legacy top-level `posthog_verification_token` field still works as a fallback). When PostHog fetches the metadata, matching the token links the partner app to this organization and grants a higher default rate limit for account provisioning. The plaintext value is only available on creation; we store a hash.

```ts
posthog.cimdVerificationTokensCreate(): Promise<{ id: string; label: string; mask_value: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other"...>
```

<sub>`POST /api/organizations/{organization_id}/cimd_verification_tokens/` · `cimd_verification_tokens_create`</sub>

## `posthog.cimdVerificationTokensDestroy`

Manage CIMD verification tokens for an organization. A partner embeds the plaintext token in their CIMD metadata document as `verification_token` inside the `com.posthog` object (the legacy top-level `posthog_verification_token` field still works as a fallback). When PostHog fetches the metadata, matching the token links the partner app to this organization and grants a higher default rate limit for account provisioning. The plaintext value is only available on creation; we store a hash.

```ts
posthog.cimdVerificationTokensDestroy(): Promise<unknown>
```

<sub>`DELETE /api/organizations/{organization_id}/cimd_verification_tokens/{id}/` · `cimd_verification_tokens_destroy`</sub>

## `posthog.cimdVerificationTokensRetrieve`

Manage CIMD verification tokens for an organization. A partner embeds the plaintext token in their CIMD metadata document as `verification_token` inside the `com.posthog` object (the legacy top-level `posthog_verification_token` field still works as a fallback). When PostHog fetches the metadata, matching the token links the partner app to this organization and grants a higher default rate limit for account provisioning. The plaintext value is only available on creation; we store a hash.

```ts
posthog.cimdVerificationTokensRetrieve(): Promise<{ id: string; label: string; mask_value: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other"...>
```

<sub>`GET /api/organizations/{organization_id}/cimd_verification_tokens/{id}/` · `cimd_verification_tokens_retrieve`</sub>

## `posthog.domainsList`

```ts
posthog.domainsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; domain: string; is_verified: boolean; verified_at: string | null; verification_challenge: string; jit_provisioning_enabled?: boolean; sso_enforcement?: string; has_saml: boolean; has_scim: boolean; scim_base_url: string | null; has_id_jag: boolean; identity_provider_config?: string | null })[] }>
```

<sub>`GET /api/organizations/{organization_id}/domains/` · `domains_list`</sub>

## `posthog.domainsCreate`

```ts
posthog.domainsCreate(): Promise<{ id: string; domain: string; is_verified: boolean; verified_at: string | null; verification_challenge: string; jit_provisioning_enabled?: boolean; sso_enforcement?: string; has_saml: boolean; has_scim: boolean; scim_base_url: string | null; has_id_jag: boolean; identity_provider_config?: string | null }>
```

<sub>`POST /api/organizations/{organization_id}/domains/` · `domains_create`</sub>

## `posthog.domainsDestroy`

```ts
posthog.domainsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/organizations/{organization_id}/domains/{id}/` · `domains_destroy`</sub>

## `posthog.domainsRetrieve`

```ts
posthog.domainsRetrieve(): Promise<{ id: string; domain: string; is_verified: boolean; verified_at: string | null; verification_challenge: string; jit_provisioning_enabled?: boolean; sso_enforcement?: string; has_saml: boolean; has_scim: boolean; scim_base_url: string | null; has_id_jag: boolean; identity_provider_config?: string | null }>
```

<sub>`GET /api/organizations/{organization_id}/domains/{id}/` · `domains_retrieve`</sub>

## `posthog.domainsPartialUpdate`

```ts
posthog.domainsPartialUpdate(): Promise<{ id: string; domain: string; is_verified: boolean; verified_at: string | null; verification_challenge: string; jit_provisioning_enabled?: boolean; sso_enforcement?: string; has_saml: boolean; has_scim: boolean; scim_base_url: string | null; has_id_jag: boolean; identity_provider_config?: string | null }>
```

<sub>`PATCH /api/organizations/{organization_id}/domains/{id}/` · `domains_partial_update`</sub>

## `posthog.domainsUpdate`

```ts
posthog.domainsUpdate(): Promise<{ id: string; domain: string; is_verified: boolean; verified_at: string | null; verification_challenge: string; jit_provisioning_enabled?: boolean; sso_enforcement?: string; has_saml: boolean; has_scim: boolean; scim_base_url: string | null; has_id_jag: boolean; identity_provider_config?: string | null }>
```

<sub>`PUT /api/organizations/{organization_id}/domains/{id}/` · `domains_update`</sub>

## `posthog.domainsScimLogsRetrieve`

```ts
posthog.domainsScimLogsRetrieve(): Promise<unknown>
```

<sub>`GET /api/organizations/{organization_id}/domains/{id}/scim/logs/` · `domains_scim_logs_retrieve`</sub>

## `posthog.domainsVerifyCreate`

```ts
posthog.domainsVerifyCreate(): Promise<unknown>
```

<sub>`POST /api/organizations/{organization_id}/domains/{id}/verify/` · `domains_verify_create`</sub>

## `posthog.identityProviderConfigsList`

```ts
posthog.identityProviderConfigsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name?: string; created_at: string; updated_at: string; has_saml: boolean; saml_entity_id?: string | null; saml_acs_url?: string | null; saml_x509_cert?: string | null; has_scim: boolean; scim_enabled?: boolean; scim_bearer_token: string | null; has_id_jag: boolean; id_jag_issuer_url?: string | null; id_jag_jw...>
```

<sub>`GET /api/organizations/{organization_id}/identity_provider_configs/` · `identity_provider_configs_list`</sub>

## `posthog.identityProviderConfigsCreate`

```ts
posthog.identityProviderConfigsCreate(): Promise<{ id: string; name?: string; created_at: string; updated_at: string; has_saml: boolean; saml_entity_id?: string | null; saml_acs_url?: string | null; saml_x509_cert?: string | null; has_scim: boolean; scim_enabled?: boolean; scim_bearer_token: string | null; has_id_jag: boolean; id_jag_issuer_url?: string | null; id_jag_jwks_url?: string | null; id_jag_allowed_clients?: (string)[] }>
```

<sub>`POST /api/organizations/{organization_id}/identity_provider_configs/` · `identity_provider_configs_create`</sub>

## `posthog.identityProviderConfigsDestroy`

```ts
posthog.identityProviderConfigsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/organizations/{organization_id}/identity_provider_configs/{id}/` · `identity_provider_configs_destroy`</sub>

## `posthog.identityProviderConfigsRetrieve`

```ts
posthog.identityProviderConfigsRetrieve(): Promise<{ id: string; name?: string; created_at: string; updated_at: string; has_saml: boolean; saml_entity_id?: string | null; saml_acs_url?: string | null; saml_x509_cert?: string | null; has_scim: boolean; scim_enabled?: boolean; scim_bearer_token: string | null; has_id_jag: boolean; id_jag_issuer_url?: string | null; id_jag_jwks_url?: string | null; id_jag_allowed_clients?: (string)[] }>
```

<sub>`GET /api/organizations/{organization_id}/identity_provider_configs/{id}/` · `identity_provider_configs_retrieve`</sub>

## `posthog.identityProviderConfigsPartialUpdate`

```ts
posthog.identityProviderConfigsPartialUpdate(): Promise<{ id: string; name?: string; created_at: string; updated_at: string; has_saml: boolean; saml_entity_id?: string | null; saml_acs_url?: string | null; saml_x509_cert?: string | null; has_scim: boolean; scim_enabled?: boolean; scim_bearer_token: string | null; has_id_jag: boolean; id_jag_issuer_url?: string | null; id_jag_jwks_url?: string | null; id_jag_allowed_clients?: (string)[] }>
```

<sub>`PATCH /api/organizations/{organization_id}/identity_provider_configs/{id}/` · `identity_provider_configs_partial_update`</sub>

## `posthog.identityProviderConfigsUpdate`

```ts
posthog.identityProviderConfigsUpdate(): Promise<{ id: string; name?: string; created_at: string; updated_at: string; has_saml: boolean; saml_entity_id?: string | null; saml_acs_url?: string | null; saml_x509_cert?: string | null; has_scim: boolean; scim_enabled?: boolean; scim_bearer_token: string | null; has_id_jag: boolean; id_jag_issuer_url?: string | null; id_jag_jwks_url?: string | null; id_jag_allowed_clients?: (string)[] }>
```

<sub>`PUT /api/organizations/{organization_id}/identity_provider_configs/{id}/` · `identity_provider_configs_update`</sub>

## `posthog.identityProviderConfigsScimTokenCreate`

Regenerate the SCIM bearer token for this IdP config.

```ts
posthog.identityProviderConfigsScimTokenCreate(): Promise<{ scim_enabled: boolean; scim_bearer_token: string }>
```

<sub>`POST /api/organizations/{organization_id}/identity_provider_configs/{id}/scim/token/` · `identity_provider_configs_scim_token_create`</sub>

## `posthog.orgOrganizationsIntegrationsList`

ViewSet for organization-level integrations. Provides access to integrations that are scoped to the entire organization (vs. project-level integrations). Examples include Vercel, AWS Marketplace, etc. Creation is handled by the integration installation flows (e.g., Vercel marketplace installation). Users can disconnect integrations via the DELETE endpoint.

```ts
posthog.orgOrganizationsIntegrationsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; kind: "vercel"; integration_id: string | null; config: unknown; created_at: string; updated_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } |...>
```

<sub>`GET /api/organizations/{organization_id}/integrations/` · `org_organizations_integrations_list`</sub>

## `posthog.orgOrganizationIntegrationsDestroy`

ViewSet for organization-level integrations. Provides access to integrations that are scoped to the entire organization (vs. project-level integrations). Examples include Vercel, AWS Marketplace, etc. Creation is handled by the integration installation flows (e.g., Vercel marketplace installation). Users can disconnect integrations via the DELETE endpoint.

```ts
posthog.orgOrganizationIntegrationsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/organizations/{organization_id}/integrations/{id}/` · `org_organization_integrations_destroy`</sub>

## `posthog.orgOrganizationsIntegrationsRetrieve`

ViewSet for organization-level integrations. Provides access to integrations that are scoped to the entire organization (vs. project-level integrations). Examples include Vercel, AWS Marketplace, etc. Creation is handled by the integration installation flows (e.g., Vercel marketplace installation). Users can disconnect integrations via the DELETE endpoint.

```ts
posthog.orgOrganizationsIntegrationsRetrieve(): Promise<{ id: string; kind: "vercel"; integration_id: string | null; config: unknown; created_at: string; updated_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder...>
```

<sub>`GET /api/organizations/{organization_id}/integrations/{id}/` · `org_organizations_integrations_retrieve`</sub>

## `posthog.integrationsEnvironmentMappingPartialUpdate`

ViewSet for organization-level integrations. Provides access to integrations that are scoped to the entire organization (vs. project-level integrations). Examples include Vercel, AWS Marketplace, etc. Creation is handled by the integration installation flows (e.g., Vercel marketplace installation). Users can disconnect integrations via the DELETE endpoint.

```ts
posthog.integrationsEnvironmentMappingPartialUpdate(): Promise<{ id: string; kind: "vercel"; integration_id: string | null; config: unknown; created_at: string; updated_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder...>
```

<sub>`PATCH /api/organizations/{organization_id}/integrations/{id}/environment-mapping/` · `integrations_environment_mapping_partial_update`</sub>

## `posthog.invitesList`

```ts
posthog.invitesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; target_email: string; first_name?: string; emailing_attempt_made: boolean; level?: 1 | 8 | 15; is_expired: boolean; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]:...>
```

<sub>`GET /api/organizations/{organization_id}/invites/` · `invites_list`</sub>

## `posthog.invitesCreate`

```ts
posthog.invitesCreate(): Promise<{ id: string; target_email: string; first_name?: string; emailing_attempt_made: boolean; level?: 1 | 8 | 15; is_expired: boolean; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product...>
```

<sub>`POST /api/organizations/{organization_id}/invites/` · `invites_create`</sub>

## `posthog.invitesDestroy`

```ts
posthog.invitesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/organizations/{organization_id}/invites/{id}/` · `invites_destroy`</sub>

## `posthog.invitesBulkCreate`

```ts
posthog.invitesBulkCreate(): Promise<unknown>
```

<sub>`POST /api/organizations/{organization_id}/invites/bulk/` · `invites_bulk_create`</sub>

## `posthog.invitesDelegateCreate`

Create an onboarding delegation invite: an admin-level invite flagged as a setup delegation. Sends a single dedicated delegation email and records the inviting user as having delegated.

```ts
posthog.invitesDelegateCreate(): Promise<{ id: string; target_email: string; first_name?: string; emailing_attempt_made: boolean; level?: 1 | 8 | 15; is_expired: boolean; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product...>
```

<sub>`POST /api/organizations/{organization_id}/invites/delegate/` · `invites_delegate_create`</sub>

## `posthog.legalDocumentsList`

```ts
posthog.legalDocumentsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; document_type: string; company_name: string; representative_email: string; status: string; created_by: { first_name: string; email: string } | null; created_at: string })[] }>
```

<sub>`GET /api/organizations/{organization_id}/legal_documents/` · `legal_documents_list`</sub>

## `posthog.legalDocumentsCreate`

```ts
posthog.legalDocumentsCreate(): Promise<{ id: string; document_type: string; company_name: string; representative_email: string; status: string; created_by: { first_name: string; email: string } | null; created_at: string }>
```

<sub>`POST /api/organizations/{organization_id}/legal_documents/` · `legal_documents_create`</sub>

## `posthog.legalDocumentsDestroy`

Delete an unsigned legal document. The PandaDoc envelope is voided first so the original signer can no longer complete it; only if that succeeds is the row removed, freeing the unique-per-org-per-type constraint so a fresh document can be generated. Returns 503 if the PandaDoc void fails — the row stays in that case and the frontend should prompt the user to retry. Returns 403 for signed documents (legal artifacts; staff can still delete signed rows from Django admin).

```ts
posthog.legalDocumentsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/organizations/{organization_id}/legal_documents/{id}/` · `legal_documents_destroy`</sub>

## `posthog.legalDocumentsRetrieve`

```ts
posthog.legalDocumentsRetrieve(): Promise<{ id: string; document_type: string; company_name: string; representative_email: string; status: string; created_by: { first_name: string; email: string } | null; created_at: string }>
```

<sub>`GET /api/organizations/{organization_id}/legal_documents/{id}/` · `legal_documents_retrieve`</sub>

## `posthog.legalDocumentsDownloadRetrieve`

Short-lived redirect to the signed PDF in object storage. 404 while the envelope is still out for signature (or if the upload hasn't completed yet). The underlying presigned URL expires in ~60s; clients should hit this endpoint each time they want to view the PDF rather than caching.

```ts
posthog.legalDocumentsDownloadRetrieve(): Promise<unknown>
```

<sub>`GET /api/organizations/{organization_id}/legal_documents/{id}/download/` · `legal_documents_download_retrieve`</sub>

## `posthog.membersList`

```ts
posthog.membersList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "s...>
```

<sub>`GET /api/organizations/{organization_id}/members/` · `members_list`</sub>

## `posthog.membersDestroy`

```ts
posthog.membersDestroy(): Promise<unknown>
```

<sub>`DELETE /api/organizations/{organization_id}/members/{user__uuid}/` · `members_destroy`</sub>

## `posthog.membersPartialUpdate`

```ts
posthog.membersPartialUpdate(): Promise<{ id: string; user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; level?: 1 | 8 | 15; joined_at: s...>
```

<sub>`PATCH /api/organizations/{organization_id}/members/{user__uuid}/` · `members_partial_update`</sub>

## `posthog.membersUpdate`

```ts
posthog.membersUpdate(): Promise<{ id: string; user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; level?: 1 | 8 | 15; joined_at: s...>
```

<sub>`PUT /api/organizations/{organization_id}/members/{user__uuid}/` · `members_update`</sub>

## `posthog.membersGithubLoginRetrieve`

```ts
posthog.membersGithubLoginRetrieve(): Promise<{ github_login: string | null }>
```

<sub>`GET /api/organizations/{organization_id}/members/{user__uuid}/github_login/` · `members_github_login_retrieve`</sub>

## `posthog.membersScopedApiKeysRetrieve`

```ts
posthog.membersScopedApiKeysRetrieve(): Promise<{ id: string; user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; level?: 1 | 8 | 15; joined_at: s...>
```

<sub>`GET /api/organizations/{organization_id}/members/{user__uuid}/scoped_api_keys/` · `members_scoped_api_keys_retrieve`</sub>

## `posthog.oauthApplicationsList`

ViewSet for listing OAuth applications at the organization level (read-only).

```ts
posthog.oauthApplicationsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name?: string; client_id?: string; redirect_uris_list: (string)[]; is_verified?: boolean; created: string; updated: string })[] }>
```

<sub>`GET /api/organizations/{organization_id}/oauth_applications/` · `oauth_applications_list`</sub>

## `posthog.organizationsProjectsList`

Projects for the current organization.

```ts
posthog.organizationsProjectsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; uuid: string; organization: string; project_id: number; api_token: string; name: string; completed_snippet_onboarding: boolean; has_completed_onboarding_for: unknown; ingested_event: boolean; is_demo: boolean; timezone: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asma...>
```

<sub>`GET /api/organizations/{organization_id}/projects/` · `organizations_projects_list`</sub>

## `posthog.organizationsProjectsCreate`

Projects for the current organization.

```ts
posthog.organizationsProjectsCreate(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`POST /api/organizations/{organization_id}/projects/` · `organizations_projects_create`</sub>

## `posthog.organizationsProjectsDestroy`

Projects for the current organization.

```ts
posthog.organizationsProjectsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/organizations/{organization_id}/projects/{id}/` · `organizations_projects_destroy`</sub>

## `posthog.organizationsProjectsRetrieve`

Retrieve a project and its settings.

```ts
posthog.organizationsProjectsRetrieve(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`GET /api/organizations/{organization_id}/projects/{id}/` · `organizations_projects_retrieve`</sub>

## `posthog.organizationsProjectsPartialUpdate`

Update one or more of a project's settings. Only the fields included in the request body are changed.

```ts
posthog.organizationsProjectsPartialUpdate(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`PATCH /api/organizations/{organization_id}/projects/{id}/` · `organizations_projects_partial_update`</sub>

## `posthog.organizationsProjectsUpdate`

Replace a project and its settings. Prefer the PATCH endpoint for partial updates — PUT requires every writable field to be provided.

```ts
posthog.organizationsProjectsUpdate(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`PUT /api/organizations/{organization_id}/projects/{id}/` · `organizations_projects_update`</sub>

## `posthog.organizationsProjectsActivityRetrieve`

Projects for the current organization.

```ts
posthog.organizationsProjectsActivityRetrieve(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`GET /api/organizations/{organization_id}/projects/{id}/activity/` · `organizations_projects_activity_retrieve`</sub>

## `posthog.organizationsProjectsAddProductIntentPartialUpdate`

Projects for the current organization.

```ts
posthog.organizationsProjectsAddProductIntentPartialUpdate(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`PATCH /api/organizations/{organization_id}/projects/{id}/add_product_intent/` · `organizations_projects_add_product_intent_partial_update`</sub>

## `posthog.organizationsProjectsChangeOrganizationCreate`

Projects for the current organization.

```ts
posthog.organizationsProjectsChangeOrganizationCreate(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`POST /api/organizations/{organization_id}/projects/{id}/change_organization/` · `organizations_projects_change_organization_create`</sub>

## `posthog.organizationsProjectsCompleteProductOnboardingPartialUpdate`

Projects for the current organization.

```ts
posthog.organizationsProjectsCompleteProductOnboardingPartialUpdate(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`PATCH /api/organizations/{organization_id}/projects/{id}/complete_product_onboarding/` · `organizations_projects_complete_product_onboarding_partial_update`</sub>

## `posthog.organizationsProjectsDefaultEvaluationContextsDestroy`

Manage default evaluation contexts for a project. Members can read; writing requires project admin, matching the admin-only settings UI.

```ts
posthog.organizationsProjectsDefaultEvaluationContextsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/organizations/{organization_id}/projects/{id}/default_evaluation_contexts/` · `organizations_projects_default_evaluation_contexts_destroy`</sub>

## `posthog.organizationsProjectsDefaultEvaluationContextsRetrieve`

Manage default evaluation contexts for a project. Members can read; writing requires project admin, matching the admin-only settings UI.

```ts
posthog.organizationsProjectsDefaultEvaluationContextsRetrieve(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`GET /api/organizations/{organization_id}/projects/{id}/default_evaluation_contexts/` · `organizations_projects_default_evaluation_contexts_retrieve`</sub>

## `posthog.organizationsProjectsDefaultEvaluationContextsCreate`

Manage default evaluation contexts for a project. Members can read; writing requires project admin, matching the admin-only settings UI.

```ts
posthog.organizationsProjectsDefaultEvaluationContextsCreate(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`POST /api/organizations/{organization_id}/projects/{id}/default_evaluation_contexts/` · `organizations_projects_default_evaluation_contexts_create`</sub>

## `posthog.organizationsProjectsDefaultReleaseConditionsRetrieve`

Manage default release conditions for new feature flags in this project. Members can read; writing requires project admin, matching the admin-only settings UI.

```ts
posthog.organizationsProjectsDefaultReleaseConditionsRetrieve(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`GET /api/organizations/{organization_id}/projects/{id}/default_release_conditions/` · `organizations_projects_default_release_conditions_retrieve`</sub>

## `posthog.organizationsProjectsDefaultReleaseConditionsUpdate`

Manage default release conditions for new feature flags in this project. Members can read; writing requires project admin, matching the admin-only settings UI.

```ts
posthog.organizationsProjectsDefaultReleaseConditionsUpdate(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`PUT /api/organizations/{organization_id}/projects/{id}/default_release_conditions/` · `organizations_projects_default_release_conditions_update`</sub>

## `posthog.organizationsProjectsDeleteSecretTokenBackupPartialUpdate`

Projects for the current organization.

```ts
posthog.organizationsProjectsDeleteSecretTokenBackupPartialUpdate(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`PATCH /api/organizations/{organization_id}/projects/{id}/delete_secret_token_backup/` · `organizations_projects_delete_secret_token_backup_partial_update`</sub>

## `posthog.organizationsProjectsEvaluationContextSuggestionsDestroy`

Hide an evaluation context name from the flag editor's suggestion list, or restore it. POST hides the name; DELETE restores it. The underlying context row and any flags already using it are never modified — this only controls what gets suggested.

```ts
posthog.organizationsProjectsEvaluationContextSuggestionsDestroy(): Promise<{ success: boolean; name: string; hidden_from_suggestions: boolean }>
```

<sub>`DELETE /api/organizations/{organization_id}/projects/{id}/evaluation_context_suggestions/` · `organizations_projects_evaluation_context_suggestions_destroy`</sub>

## `posthog.organizationsProjectsEvaluationContextSuggestionsCreate`

Hide an evaluation context name from the flag editor's suggestion list, or restore it. POST hides the name; DELETE restores it. The underlying context row and any flags already using it are never modified — this only controls what gets suggested.

```ts
posthog.organizationsProjectsEvaluationContextSuggestionsCreate(): Promise<{ success: boolean; name: string; hidden_from_suggestions: boolean }>
```

<sub>`POST /api/organizations/{organization_id}/projects/{id}/evaluation_context_suggestions/` · `organizations_projects_evaluation_context_suggestions_create`</sub>

## `posthog.organizationsProjectsEventIngestionRestrictionsRetrieve`

Projects for the current organization.

```ts
posthog.organizationsProjectsEventIngestionRestrictionsRetrieve(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`GET /api/organizations/{organization_id}/projects/{id}/event_ingestion_restrictions/` · `organizations_projects_event_ingestion_restrictions_retrieve`</sub>

## `posthog.organizationsProjectsExperimentsConfigRetrieve`

Manage experiment configuration for this project.

```ts
posthog.organizationsProjectsExperimentsConfigRetrieve(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`GET /api/organizations/{organization_id}/projects/{id}/experiments_config/` · `organizations_projects_experiments_config_retrieve`</sub>

## `posthog.organizationsProjectsExperimentsConfigPartialUpdate`

Manage experiment configuration for this project.

```ts
posthog.organizationsProjectsExperimentsConfigPartialUpdate(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`PATCH /api/organizations/{organization_id}/projects/{id}/experiments_config/` · `organizations_projects_experiments_config_partial_update`</sub>

## `posthog.organizationsProjectsGenerateConversationsPublicTokenCreate`

Projects for the current organization.

```ts
posthog.organizationsProjectsGenerateConversationsPublicTokenCreate(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`POST /api/organizations/{organization_id}/projects/{id}/generate_conversations_public_token/` · `organizations_projects_generate_conversations_public_token_create`</sub>

## `posthog.organizationsProjectsIsGeneratingDemoDataRetrieve`

Projects for the current organization.

```ts
posthog.organizationsProjectsIsGeneratingDemoDataRetrieve(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`GET /api/organizations/{organization_id}/projects/{id}/is_generating_demo_data/` · `organizations_projects_is_generating_demo_data_retrieve`</sub>

## `posthog.organizationsProjectsLogsConfigRetrieve`

Manage logs product configuration for this project's canonical environment. Members can read; writing requires project admin, matching the admin-only settings UI. Mirrors the env-router action so /api/projects/:id/logs_config/ resolves alongside the legacy /api/environments/:id/logs_config/ alias.

```ts
posthog.organizationsProjectsLogsConfigRetrieve(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`GET /api/organizations/{organization_id}/projects/{id}/logs_config/` · `organizations_projects_logs_config_retrieve`</sub>

## `posthog.organizationsProjectsLogsConfigPartialUpdate`

Manage logs product configuration for this project's canonical environment. Members can read; writing requires project admin, matching the admin-only settings UI. Mirrors the env-router action so /api/projects/:id/logs_config/ resolves alongside the legacy /api/environments/:id/logs_config/ alias.

```ts
posthog.organizationsProjectsLogsConfigPartialUpdate(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`PATCH /api/organizations/{organization_id}/projects/{id}/logs_config/` · `organizations_projects_logs_config_partial_update`</sub>

## `posthog.organizationsProjectsResetTokenPartialUpdate`

Projects for the current organization.

```ts
posthog.organizationsProjectsResetTokenPartialUpdate(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`PATCH /api/organizations/{organization_id}/projects/{id}/reset_token/` · `organizations_projects_reset_token_partial_update`</sub>

## `posthog.organizationsProjectsRotateSecretTokenPartialUpdate`

Projects for the current organization.

```ts
posthog.organizationsProjectsRotateSecretTokenPartialUpdate(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`PATCH /api/organizations/{organization_id}/projects/{id}/rotate_secret_token/` · `organizations_projects_rotate_secret_token_partial_update`</sub>

## `posthog.organizationsProjectsSettingsAsOfRetrieve`

Return the project settings as of the provided timestamp. Query params: - at: ISO8601 datetime (required) - scope: optional, one or multiple keys to filter the returned settings

```ts
posthog.organizationsProjectsSettingsAsOfRetrieve(): Promise<{ id: number; organization: string; name?: string; product_description?: string | null; created_at: string; effective_membership_level: 1 | 8 | 15; has_group_types: boolean; group_types: ({ [key: string]: unknown })[]; live_events_token: string | null; updated_at: string | null; uuid: string; api_token: string; app_urls?: (string | null)[]; anonymize_ips?: boolean; completed_snippet_onboarding?: ...>
```

<sub>`GET /api/organizations/{organization_id}/projects/{id}/settings_as_of/` · `organizations_projects_settings_as_of_retrieve`</sub>

## `posthog.roleExternalReferencesList`

```ts
posthog.roleExternalReferencesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; provider: string; provider_organization_id: string; provider_role_id: string; provider_role_slug?: string | null; provider_role_name: string; role: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_...>
```

<sub>`GET /api/organizations/{organization_id}/role_external_references/` · `role_external_references_list`</sub>

## `posthog.roleExternalReferencesCreate`

```ts
posthog.roleExternalReferencesCreate(): Promise<{ id: string; provider: string; provider_organization_id: string; provider_role_id: string; provider_role_slug?: string | null; provider_role_name: string; role: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | nu...>
```

<sub>`POST /api/organizations/{organization_id}/role_external_references/` · `role_external_references_create`</sub>

## `posthog.roleExternalReferencesDestroy`

```ts
posthog.roleExternalReferencesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/organizations/{organization_id}/role_external_references/{id}/` · `role_external_references_destroy`</sub>

## `posthog.roleExternalReferencesLookupRetrieve`

```ts
posthog.roleExternalReferencesLookupRetrieve(): Promise<{ reference: { id: string; provider: string; provider_organization_id: string; provider_role_id: string; provider_role_slug?: string | null; provider_role_name: string; role: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: u...>
```

<sub>`GET /api/organizations/{organization_id}/role_external_references/lookup/` · `role_external_references_lookup_retrieve`</sub>

## `posthog.rolesList`

Role endpoints disclose member records, so they scope them the same way the members list does when the org restricts member list visibility.

```ts
posthog.rolesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "fo...>
```

<sub>`GET /api/organizations/{organization_id}/roles/` · `roles_list`</sub>

## `posthog.rolesCreate`

Role endpoints disclose member records, so they scope them the same way the members list does when the org restricts member list visibility.

```ts
posthog.rolesCreate(): Promise<{ id: string; name: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | ...>
```

<sub>`POST /api/organizations/{organization_id}/roles/` · `roles_create`</sub>

## `posthog.rolesDestroy`

Role endpoints disclose member records, so they scope them the same way the members list does when the org restricts member list visibility.

```ts
posthog.rolesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/organizations/{organization_id}/roles/{id}/` · `roles_destroy`</sub>

## `posthog.rolesRetrieve`

Role endpoints disclose member records, so they scope them the same way the members list does when the org restricts member list visibility.

```ts
posthog.rolesRetrieve(): Promise<{ id: string; name: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | ...>
```

<sub>`GET /api/organizations/{organization_id}/roles/{id}/` · `roles_retrieve`</sub>

## `posthog.rolesPartialUpdate`

Role endpoints disclose member records, so they scope them the same way the members list does when the org restricts member list visibility.

```ts
posthog.rolesPartialUpdate(): Promise<{ id: string; name: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | ...>
```

<sub>`PATCH /api/organizations/{organization_id}/roles/{id}/` · `roles_partial_update`</sub>

## `posthog.rolesUpdate`

Role endpoints disclose member records, so they scope them the same way the members list does when the org restricts member list visibility.

```ts
posthog.rolesUpdate(): Promise<{ id: string; name: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | ...>
```

<sub>`PUT /api/organizations/{organization_id}/roles/{id}/` · `roles_update`</sub>

## `posthog.rolesRoleMembershipsList`

Role endpoints disclose member records, so they scope them the same way the members list does when the org restricts member list visibility.

```ts
posthog.rolesRoleMembershipsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; role_id: string; organization_member: { id: string; user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "pr...>
```

<sub>`GET /api/organizations/{organization_id}/roles/{role_id}/role_memberships/` · `roles_role_memberships_list`</sub>

## `posthog.rolesRoleMembershipsCreate`

Role endpoints disclose member records, so they scope them the same way the members list does when the org restricts member list visibility.

```ts
posthog.rolesRoleMembershipsCreate(): Promise<{ id: string; role_id: string; organization_member: { id: string; user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "ot...>
```

<sub>`POST /api/organizations/{organization_id}/roles/{role_id}/role_memberships/` · `roles_role_memberships_create`</sub>

## `posthog.rolesRoleMembershipsDestroy`

Role endpoints disclose member records, so they scope them the same way the members list does when the org restricts member list visibility.

```ts
posthog.rolesRoleMembershipsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/organizations/{organization_id}/roles/{role_id}/role_memberships/{id}/` · `roles_role_memberships_destroy`</sub>

## `posthog.rolesRoleMembershipsRetrieve`

Role endpoints disclose member records, so they scope them the same way the members list does when the org restricts member list visibility.

```ts
posthog.rolesRoleMembershipsRetrieve(): Promise<{ id: string; role_id: string; organization_member: { id: string; user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "ot...>
```

<sub>`GET /api/organizations/{organization_id}/roles/{role_id}/role_memberships/{id}/` · `roles_role_memberships_retrieve`</sub>

## `posthog.welcomeCurrentRetrieve`

Aggregated payload for the invited-user welcome screen.

```ts
posthog.welcomeCurrentRetrieve(): Promise<{ organization_name: string; inviter: { name: string; email: string } | null; team_members: ({ name: string; email: string; avatar: string | null; role: string; last_active: "today" | "this_week" | "inactive" | "never" })[]; recent_activity: ({ type: string; actor_name: string; entity_name: string; entity_url: string | null; timestamp: string })[]; popular_dashboards: ({ id: number; name: string;...>
```

<sub>`GET /api/organizations/{organization_id}/welcome/current/` · `welcome_current_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
