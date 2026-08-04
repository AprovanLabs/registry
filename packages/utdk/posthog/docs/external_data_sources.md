# External Data Sources

35 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.externalDataSourcesList`

Create, Read, Update and Delete External data Sources.

```ts
posthog.externalDataSourcesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; created_at: string; created_by: string | null; created_via?: "web" | "api" | "mcp" | "wizard" | "self_driving" | null; status: string; client_secret: string; account_id: string; source_type: "Ashby" | "Supabase" | "CustomerIO" | "Github" | "Stripe" | "Hubspot" | "Postgres" | "Zendesk" | "Snowflake" | "Salesfo...>
```

<sub>`GET /api/projects/{project_id}/external_data_sources/` · `external_data_sources_list`</sub>

## `posthog.externalDataSourcesCreate`

Create, Read, Update and Delete External data Sources.

```ts
posthog.externalDataSourcesCreate(): Promise<{ id: string }>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/` · `external_data_sources_create`</sub>

## `posthog.externalDataSourcesDestroy`

Create, Read, Update and Delete External data Sources.

```ts
posthog.externalDataSourcesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/external_data_sources/{id}/` · `external_data_sources_destroy`</sub>

## `posthog.externalDataSourcesRetrieve`

Create, Read, Update and Delete External data Sources.

```ts
posthog.externalDataSourcesRetrieve(): Promise<{ id: string; created_at: string; created_by: string | null; created_via?: "web" | "api" | "mcp" | "wizard" | "self_driving" | null; status: string; client_secret: string; account_id: string; source_type: "Ashby" | "Supabase" | "CustomerIO" | "Github" | "Stripe" | "Hubspot" | "Postgres" | "Zendesk" | "Snowflake" | "Salesforce" | "MySQL" | "MongoDB" | "MSSQL" | "Vitally" | "BigQuery" | "Chargebee"...>
```

<sub>`GET /api/projects/{project_id}/external_data_sources/{id}/` · `external_data_sources_retrieve`</sub>

## `posthog.externalDataSourcesPartialUpdate`

Create, Read, Update and Delete External data Sources.

```ts
posthog.externalDataSourcesPartialUpdate(): Promise<{ id: string; created_at: string; created_by: string | null; created_via?: "web" | "api" | "mcp" | "wizard" | "self_driving" | null; status: string; client_secret: string; account_id: string; source_type: "Ashby" | "Supabase" | "CustomerIO" | "Github" | "Stripe" | "Hubspot" | "Postgres" | "Zendesk" | "Snowflake" | "Salesforce" | "MySQL" | "MongoDB" | "MSSQL" | "Vitally" | "BigQuery" | "Chargebee"...>
```

<sub>`PATCH /api/projects/{project_id}/external_data_sources/{id}/` · `external_data_sources_partial_update`</sub>

## `posthog.externalDataSourcesUpdate`

Create, Read, Update and Delete External data Sources.

```ts
posthog.externalDataSourcesUpdate(): Promise<{ id: string; created_at: string; created_by: string | null; created_via?: "web" | "api" | "mcp" | "wizard" | "self_driving" | null; status: string; client_secret: string; account_id: string; source_type: "Ashby" | "Supabase" | "CustomerIO" | "Github" | "Stripe" | "Hubspot" | "Postgres" | "Zendesk" | "Snowflake" | "Salesforce" | "MySQL" | "MongoDB" | "MSSQL" | "Vitally" | "BigQuery" | "Chargebee"...>
```

<sub>`PUT /api/projects/{project_id}/external_data_sources/{id}/` · `external_data_sources_update`</sub>

## `posthog.externalDataSourcesBulkUpdateSchemasPartialUpdate`

Create, Read, Update and Delete External data Sources.

```ts
posthog.externalDataSourcesBulkUpdateSchemasPartialUpdate(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; label: string | null; table: { [key: string]: unknown } | null; should_sync?: boolean; last_synced_at: string | null; latest_error: string | null; incremental: boolean; status: string | null; sync_type?: "full_refresh" | "incremental" | "append" | "webhook" | "cdc" | "xmin" | null; incremental_f...>
```

<sub>`PATCH /api/projects/{project_id}/external_data_sources/{id}/bulk_update_schemas/` · `external_data_sources_bulk_update_schemas_partial_update`</sub>

## `posthog.externalDataSourcesCdcStatusRetrieve`

Live CDC health for an existing source: slot/publication existence and WAL lag. Reads from the source DB via the engine adapter. Returns ``{"enabled": false}`` when CDC is off, or the stored config plus live ``slot_exists`` / ``publication_exists`` / ``lag_bytes`` when on. 400s if the source DB is unreachable so the UI can show a degraded/unreachable state.

```ts
posthog.externalDataSourcesCdcStatusRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/external_data_sources/{id}/cdc_status/` · `external_data_sources_cdc_status_retrieve`</sub>

## `posthog.externalDataSourcesCheckCdcPrerequisitesForSourceCreate`

Validate CDC prerequisites for an existing source using its stored credentials. The detail=False ``check_cdc_prerequisites`` action is for the creation wizard, where the client still holds the raw connection config (incl. password) in the form. On the Configuration page the source already exists and secret fields are stripped from API responses — so the client can't supply them. This reads the stored (encrypted) credentials from the DB via the adapter instead. Body params: ``cdc_management_mode`` (``"posthog"`` | ``"self_managed"``), ``cdc_slot_name`` (optional), ``cdc_publication_name`` (optional).

```ts
posthog.externalDataSourcesCheckCdcPrerequisitesForSourceCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/{id}/check_cdc_prerequisites_for_source/` · `external_data_sources_check_cdc_prerequisites_for_source_create`</sub>

## `posthog.externalDataSourcesCreateWebhookCreate`

Create, Read, Update and Delete External data Sources.

```ts
posthog.externalDataSourcesCreateWebhookCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/{id}/create_webhook/` · `external_data_sources_create_webhook_create`</sub>

## `posthog.externalDataSourcesDeleteWebhookCreate`

Create, Read, Update and Delete External data Sources.

```ts
posthog.externalDataSourcesDeleteWebhookCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/{id}/delete_webhook/` · `external_data_sources_delete_webhook_create`</sub>

## `posthog.externalDataSourcesDisableCdcCreate`

Disable CDC on an existing source. Cancels any running CDC extraction workflow, deletes the extraction schedule, delegates engine-side teardown to the source's adapter (drops slot/publication for Postgres; equivalent for other engines), clears ``cdc_*`` keys from ``job_inputs``, soft-deletes companion CDC tables, and sets all CDC schemas to ``sync_type=None``, ``should_sync=False`` so the user must pick a new sync strategy before they resume.

```ts
posthog.externalDataSourcesDisableCdcCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/{id}/disable_cdc/` · `external_data_sources_disable_cdc_create`</sub>

## `posthog.externalDataSourcesEnableCdcCreate`

Enable CDC on an existing source. Provisions engine-side CDC resources via the source's adapter, writes the CDC config into ``source.job_inputs``, and ensures the CDC extraction schedule exists. Re-runs prereq checks server-side so we never trust a stale client-side check. Body params: ``cdc_management_mode`` (``"posthog"`` | ``"self_managed"``), plus engine-specific identifier hints (e.g. ``cdc_slot_name``, ``cdc_publication_name`` for Postgres). Universal tuning fields: ``cdc_auto_drop_slot`` (optional bool), ``cdc_lag_warning_threshold_mb`` (optional int), ``cdc_lag_critical_threshold_mb`` (optional int).

```ts
posthog.externalDataSourcesEnableCdcCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/{id}/enable_cdc/` · `external_data_sources_enable_cdc_create`</sub>

## `posthog.externalDataSourcesJobsRetrieve`

Create, Read, Update and Delete External data Sources.

```ts
posthog.externalDataSourcesJobsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/external_data_sources/{id}/jobs/` · `external_data_sources_jobs_retrieve`</sub>

## `posthog.externalDataSourcesRefreshSchemasCreate`

Fetch current schema/table list from the source and create any new ExternalDataSchema rows (no data sync).

```ts
posthog.externalDataSourcesRefreshSchemasCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/{id}/refresh_schemas/` · `external_data_sources_refresh_schemas_create`</sub>

## `posthog.externalDataSourcesReloadCreate`

Create, Read, Update and Delete External data Sources.

```ts
posthog.externalDataSourcesReloadCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/{id}/reload/` · `external_data_sources_reload_create`</sub>

## `posthog.externalDataSourcesRepairCdcCreate`

Repair CDC on a source whose replication resources were lost. Only proceeds on evidence of breakage (a persisted broken marker, or a live probe showing the slot/publication missing) — repairing a healthy source would drop its slot and force a full re-sync. Cancels running CDC jobs, recreates the engine-side slot/publication against the stored CDC config, resets every active CDC schema to snapshot mode for a full re-sync (changes since the old slot died are unrecoverable), clears the broken markers, and resumes the paused schedules. Idempotent: safe to retry after a partial failure. Concurrent repairs of the same source are rejected with a 409.

```ts
posthog.externalDataSourcesRepairCdcCreate(): Promise<{ success?: boolean; schemas_reset?: number }>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/{id}/repair_cdc/` · `external_data_sources_repair_cdc_create`</sub>

## `posthog.externalDataSourcesResumeCdcCreate`

Resume a CDC source whose extraction schedule was paused by a non-retryable failure that left the replication slot intact (bad credentials, SSL/host errors). Once the user has fixed the root cause, this re-probes the source DB — confirming the connection now succeeds and the slot/publication still exist — then unpauses the extraction schedule so streaming resumes from where it left off. No re-snapshot, so it's the cheap counterpart to Repair CDC. If the slot/publication are actually gone (``cdc_broken``, or a live probe showing them missing), resume is refused — only Repair CDC can recreate them, at the cost of a full re-sync.

```ts
posthog.externalDataSourcesResumeCdcCreate(): Promise<{ success?: boolean }>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/{id}/resume_cdc/` · `external_data_sources_resume_cdc_create`</sub>

## `posthog.externalDataSourcesRevenueAnalyticsConfigPartialUpdate`

Update the revenue analytics configuration and return the full external data source.

```ts
posthog.externalDataSourcesRevenueAnalyticsConfigPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/external_data_sources/{id}/revenue_analytics_config/` · `external_data_sources_revenue_analytics_config_partial_update`</sub>

## `posthog.externalDataSourcesUpdateCdcSettingsCreate`

Update CDC tuning fields without enabling/disabling. Lets users edit ``cdc_auto_drop_slot``, ``cdc_lag_warning_threshold_mb``, and ``cdc_lag_critical_threshold_mb`` independently. These fields are universal across engines. Engine-specific identifiers (slot name, management mode, …) are immutable post-enable — switching them requires disable + enable.

```ts
posthog.externalDataSourcesUpdateCdcSettingsCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/{id}/update_cdc_settings/` · `external_data_sources_update_cdc_settings_create`</sub>

## `posthog.externalDataSourcesUpdateWebhookInputsCreate`

Create, Read, Update and Delete External data Sources.

```ts
posthog.externalDataSourcesUpdateWebhookInputsCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/{id}/update_webhook_inputs/` · `external_data_sources_update_webhook_inputs_create`</sub>

## `posthog.externalDataSourcesWebhookInfoRetrieve`

Create, Read, Update and Delete External data Sources.

```ts
posthog.externalDataSourcesWebhookInfoRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/external_data_sources/{id}/webhook_info/` · `external_data_sources_webhook_info_retrieve`</sub>

## `posthog.externalDataSourcesCheckCdcPrerequisitesCreate`

Validate CDC prerequisites against a live Postgres connection. Used by the source wizard to surface ✅/❌ checks before source creation, and by the self-managed setup popup to verify user-created publications.

```ts
posthog.externalDataSourcesCheckCdcPrerequisitesCreate(): Promise<{ valid?: boolean; errors?: (string)[] }>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/check_cdc_prerequisites/` · `external_data_sources_check_cdc_prerequisites_create`</sub>

## `posthog.externalDataSourcesConnectLinkRetrieve`

Return a secure browser link for connecting a data warehouse source. The link opens a minimal connect page rendering the source's full connection form — OAuth options included — with no table selection and no source creation. The user authenticates in their browser, secrets never pass through the agent, and the agent finishes setup afterwards by passing the stored credential id to data-warehouse-source-setup.

```ts
posthog.externalDataSourcesConnectLinkRetrieve(): Promise<{ source_type: string; auth_method: "oauth" | "credentials"; connect_url: string; instructions: string }>
```

<sub>`GET /api/projects/{project_id}/external_data_sources/connect_link/` · `external_data_sources_connect_link_retrieve`</sub>

## `posthog.externalDataSourcesConnectionsList`

Create, Read, Update and Delete External data Sources.

```ts
posthog.externalDataSourcesConnectionsList(): Promise<({ id: string; prefix: string | null; engine: "duckdb" | "postgres" | "mysql" | "snowflake" | "redshift" | "clickhouse" | null; source_type: "Ashby" | "Supabase" | "CustomerIO" | "Github" | "Stripe" | "Hubspot" | "Postgres" | "Zendesk" | "Snowflake" | "Salesforce" | "MySQL" | "MongoDB" | "MSSQL" | "Vitally" | "BigQuery" | "Chargebee" | "Clerk" | "GoogleAds" | "GoogleSearchConsole" | "TemporalIO" ...>
```

<sub>`GET /api/projects/{project_id}/external_data_sources/connections/` · `external_data_sources_connections_list`</sub>

## `posthog.externalDataSourcesDatabaseSchemaCreate`

Create, Read, Update and Delete External data Sources.

```ts
posthog.externalDataSourcesDatabaseSchemaCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/database_schema/` · `external_data_sources_database_schema_create`</sub>

## `posthog.externalDataSourcesDirectConnectionOptionsList`

Source types the user can add as a direct connection, driven by the direct-SQL capability surface so the picker never drifts from the engines we actually support.

```ts
posthog.externalDataSourcesDirectConnectionOptionsList(): Promise<({ source_type: "Ashby" | "Supabase" | "CustomerIO" | "Github" | "Stripe" | "Hubspot" | "Postgres" | "Zendesk" | "Snowflake" | "Salesforce" | "MySQL" | "MongoDB" | "MSSQL" | "Vitally" | "BigQuery" | "Chargebee" | "Clerk" | "GoogleAds" | "GoogleSearchConsole" | "TemporalIO" | "DoIt" | "GoogleSheets" | "MetaAds" | "Klaviyo" | "Mailchimp" | "Braze" | "Mailjet" | "Redshift" | "Polar" | "RevenueCat" |...>
```

<sub>`GET /api/projects/{project_id}/external_data_sources/direct_connection_options/` · `external_data_sources_direct_connection_options_list`</sub>

## `posthog.externalDataSourcesDraftCustomManifestCreate`

Draft a Custom REST source manifest from API documentation using an LLM. Reads the docs (a URL fetched server-side, or pasted text / OpenAPI spec), asks the model to author a RESTAPIConfig manifest, and validates it against the create-path checks — repairing against validation errors up to a small budget. Returns the manifest for the user to review and tweak in the builder before creating the source; it does NOT create anything. Gated by the `dwh-custom-source-ai-builder` flag, and requires the org to have approved AI data processing, since the docs are sent to the LLM gateway.

```ts
posthog.externalDataSourcesDraftCustomManifestCreate(): Promise<{ draft_status: "ok" | "invalid" | "model_error"; manifest_json: string | null; resource_names: (string)[]; attempts: number; error: string | null }>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/draft_custom_manifest/` · `external_data_sources_draft_custom_manifest_create`</sub>

## `posthog.externalDataSourcesOauthAccountsRetrieve`

List the accounts/properties a connected OAuth integration exposes, in the shared IntegrationAccount shape. The logic lives in each source (via OAuthMixin.get_oauth_accounts); this endpoint just routes by source type, applies the optional search filter, and serializes.

```ts
posthog.externalDataSourcesOauthAccountsRetrieve(): Promise<{ accounts: ({ value: string; display_name: string; is_primary: boolean; badges: (string)[]; group: string | null; secondary_text: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/external_data_sources/oauth_accounts/` · `external_data_sources_oauth_accounts_retrieve`</sub>

## `posthog.externalDataSourcesPreviewResourceCreate`

Read a bounded sample of rows for one resource of a Custom REST source. Lets a manifest author verify `data_selector`, `primary_key`, and the incremental `cursor_path` against live data before creating the source. Only `source_type: "Custom"` is supported — other source types return 400. The read is bounded (single page per resource, capped row count, short timeouts, no redirects). Manifest, validation, and SSRF problems return 400; a live fetch failure returns 200 with `error` set and empty `rows`.

```ts
posthog.externalDataSourcesPreviewResourceCreate(): Promise<{ rows: ({ [key: string]: unknown })[]; row_count: number; columns: ({ name: string; type: string })[]; error: string | null }>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/preview_resource/` · `external_data_sources_preview_resource_create`</sub>

## `posthog.externalDataSourcesSetupCreate`

One-shot data warehouse source setup. Validate credentials, discover available tables, enable them all with sensible sync defaults (incremental where supported, else append, else full refresh), and create the source in a single call — the caller never has to assemble a `schemas` array. For sources that support webhooks (e.g. Stripe), a webhook is auto-registered after creation: on success webhook-capable tables switch to real-time webhook sync (unlocking webhook-only tables); on failure the polling defaults stay in place. For fine-grained table/sync control, use the lower-level `database_schema` + `create` flow instead.

```ts
posthog.externalDataSourcesSetupCreate(): Promise<{ id: string; webhook?: { success: boolean; webhook_url: string | null; error: string | null; pending_inputs: (string)[] } }>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/setup/` · `external_data_sources_setup_create`</sub>

## `posthog.externalDataSourcesSourcePrefixCreate`

Create, Read, Update and Delete External data Sources.

```ts
posthog.externalDataSourcesSourcePrefixCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/source_prefix/` · `external_data_sources_source_prefix_create`</sub>

## `posthog.externalDataSourcesStoreCredentialsCreate`

Validate and store credentials for a data warehouse source without creating the source. Backs the source connect page: the user enters credentials directly in PostHog, they are checked against a live connection, then stashed encrypted in a temporary store. The returned credential id can be passed to `setup` as {'credential_id': <id>} to create the source — so secrets never travel through an agent conversation. The stash is single-use: it is deleted as soon as `setup` consumes it, and expires after 24 hours if never consumed.

```ts
posthog.externalDataSourcesStoreCredentialsCreate(): Promise<{ credential_id: string; source_type: string; created_at: string; expires_at: string }>
```

<sub>`POST /api/projects/{project_id}/external_data_sources/store_credentials/` · `external_data_sources_store_credentials_create`</sub>

## `posthog.externalDataSourcesStoredCredentialsList`

List credentials the requesting user stored via the source connect page that haven't been consumed yet. Returns metadata only (id, source type, timestamps) — never the secrets themselves. Stored credentials are scoped to their creator: only the user who filled the connect page can list or consume them. They are temporary too: they disappear once consumed by `setup` or when they expire. Newest first, so after a user confirms they've finished the connect page, the first entry for the source type is the one to pass to `setup`.

```ts
posthog.externalDataSourcesStoredCredentialsList(): Promise<({ credential_id: string; source_type: string; created_at: string; expires_at: string })[]>
```

<sub>`GET /api/projects/{project_id}/external_data_sources/stored_credentials/` · `external_data_sources_stored_credentials_list`</sub>

## `posthog.externalDataSourcesWizardRetrieve`

Create, Read, Update and Delete External data Sources.

```ts
posthog.externalDataSourcesWizardRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/external_data_sources/wizard/` · `external_data_sources_wizard_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
