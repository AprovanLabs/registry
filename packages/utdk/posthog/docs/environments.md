# Environments

22 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.environmentsList`

Deprecated: use /api/environments/{id}/ instead.

```ts
posthog.environmentsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; uuid: string; organization: string; project_id: number; api_token: string; name: string; completed_snippet_onboarding: boolean; has_completed_onboarding_for: unknown; ingested_event: boolean; is_demo: boolean; timezone: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asma...>
```

<sub>`GET /api/projects/{project_id}/environments/` · `environments_list`</sub>

## `posthog.environmentsCreate`

Deprecated: use /api/environments/{id}/ instead.

```ts
posthog.environmentsCreate(): Promise<{ id: number; uuid: string; name?: string; access_control?: boolean; organization: string; project_id: number; api_token: string; secret_api_token: string | null; secret_api_token_backup: string | null; created_at: string; updated_at: string; ingested_event: boolean; default_modifiers: { [key: string]: unknown }; person_on_events_querying_enabled: boolean; user_access_level: string | null; app_ur...>
```

<sub>`POST /api/projects/{project_id}/environments/` · `environments_create`</sub>

## `posthog.environmentsDestroy`

Deprecated: use /api/environments/{id}/ instead.

```ts
posthog.environmentsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/environments/{id}/` · `environments_destroy`</sub>

## `posthog.environmentsRetrieve`

Deprecated: use /api/environments/{id}/ instead.

```ts
posthog.environmentsRetrieve(): Promise<{ id: number; uuid: string; name?: string; access_control?: boolean; organization: string; project_id: number; api_token: string; secret_api_token: string | null; secret_api_token_backup: string | null; created_at: string; updated_at: string; ingested_event: boolean; default_modifiers: { [key: string]: unknown }; person_on_events_querying_enabled: boolean; user_access_level: string | null; app_ur...>
```

<sub>`GET /api/projects/{project_id}/environments/{id}/` · `environments_retrieve`</sub>

## `posthog.environmentsPartialUpdate`

Deprecated: use /api/environments/{id}/ instead.

```ts
posthog.environmentsPartialUpdate(): Promise<{ id: number; uuid: string; name?: string; access_control?: boolean; organization: string; project_id: number; api_token: string; secret_api_token: string | null; secret_api_token_backup: string | null; created_at: string; updated_at: string; ingested_event: boolean; default_modifiers: { [key: string]: unknown }; person_on_events_querying_enabled: boolean; user_access_level: string | null; app_ur...>
```

<sub>`PATCH /api/projects/{project_id}/environments/{id}/` · `environments_partial_update`</sub>

## `posthog.environmentsUpdate`

Deprecated: use /api/environments/{id}/ instead.

```ts
posthog.environmentsUpdate(): Promise<{ id: number; uuid: string; name?: string; access_control?: boolean; organization: string; project_id: number; api_token: string; secret_api_token: string | null; secret_api_token_backup: string | null; created_at: string; updated_at: string; ingested_event: boolean; default_modifiers: { [key: string]: unknown }; person_on_events_querying_enabled: boolean; user_access_level: string | null; app_ur...>
```

<sub>`PUT /api/projects/{project_id}/environments/{id}/` · `environments_update`</sub>

## `posthog.environmentsActivityRetrieve`

Deprecated: use /api/environments/{id}/ instead.

```ts
posthog.environmentsActivityRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/environments/{id}/activity/` · `environments_activity_retrieve`</sub>

## `posthog.environmentsAddProductIntentPartialUpdate`

Deprecated: use /api/environments/{id}/ instead.

```ts
posthog.environmentsAddProductIntentPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/environments/{id}/add_product_intent/` · `environments_add_product_intent_partial_update`</sub>

## `posthog.environmentsCompleteProductOnboardingPartialUpdate`

Deprecated: use /api/environments/{id}/ instead.

```ts
posthog.environmentsCompleteProductOnboardingPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/environments/{id}/complete_product_onboarding/` · `environments_complete_product_onboarding_partial_update`</sub>

## `posthog.environmentsDeleteSecretTokenBackupPartialUpdate`

Deprecated: use /api/environments/{id}/ instead.

```ts
posthog.environmentsDeleteSecretTokenBackupPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/environments/{id}/delete_secret_token_backup/` · `environments_delete_secret_token_backup_partial_update`</sub>

## `posthog.environmentsEvaluationContextSuggestionsDestroy`

Hide an evaluation context name from the flag editor's suggestion list, or restore it. POST hides the name; DELETE restores it. The underlying context row and any flags already using it are never modified — this only controls what gets suggested.

```ts
posthog.environmentsEvaluationContextSuggestionsDestroy(): Promise<{ success: boolean; name: string; hidden_from_suggestions: boolean }>
```

<sub>`DELETE /api/projects/{project_id}/environments/{id}/evaluation_context_suggestions/` · `environments_evaluation_context_suggestions_destroy`</sub>

## `posthog.environmentsEvaluationContextSuggestionsCreate`

Hide an evaluation context name from the flag editor's suggestion list, or restore it. POST hides the name; DELETE restores it. The underlying context row and any flags already using it are never modified — this only controls what gets suggested.

```ts
posthog.environmentsEvaluationContextSuggestionsCreate(): Promise<{ success: boolean; name: string; hidden_from_suggestions: boolean }>
```

<sub>`POST /api/projects/{project_id}/environments/{id}/evaluation_context_suggestions/` · `environments_evaluation_context_suggestions_create`</sub>

## `posthog.environmentsEventIngestionRestrictionsRetrieve`

Deprecated: use /api/environments/{id}/ instead.

```ts
posthog.environmentsEventIngestionRestrictionsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/environments/{id}/event_ingestion_restrictions/` · `environments_event_ingestion_restrictions_retrieve`</sub>

## `posthog.environmentsExperimentsConfigRetrieve`

Manage experiment configuration for this environment.

```ts
posthog.environmentsExperimentsConfigRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/environments/{id}/experiments_config/` · `environments_experiments_config_retrieve`</sub>

## `posthog.environmentsExperimentsConfigPartialUpdate`

Manage experiment configuration for this environment.

```ts
posthog.environmentsExperimentsConfigPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/environments/{id}/experiments_config/` · `environments_experiments_config_partial_update`</sub>

## `posthog.environmentsGenerateConversationsPublicTokenCreate`

Deprecated: use /api/environments/{id}/ instead.

```ts
posthog.environmentsGenerateConversationsPublicTokenCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/environments/{id}/generate_conversations_public_token/` · `environments_generate_conversations_public_token_create`</sub>

## `posthog.environmentsIsGeneratingDemoDataRetrieve`

Deprecated: use /api/environments/{id}/ instead.

```ts
posthog.environmentsIsGeneratingDemoDataRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/environments/{id}/is_generating_demo_data/` · `environments_is_generating_demo_data_retrieve`</sub>

## `posthog.environmentsLogsConfigRetrieve`

Manage logs product configuration for this environment. Members can read; writing requires project admin, matching the admin-only settings UI.

```ts
posthog.environmentsLogsConfigRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/environments/{id}/logs_config/` · `environments_logs_config_retrieve`</sub>

## `posthog.environmentsLogsConfigPartialUpdate`

Manage logs product configuration for this environment. Members can read; writing requires project admin, matching the admin-only settings UI.

```ts
posthog.environmentsLogsConfigPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/environments/{id}/logs_config/` · `environments_logs_config_partial_update`</sub>

## `posthog.environmentsResetTokenPartialUpdate`

Deprecated: use /api/environments/{id}/ instead.

```ts
posthog.environmentsResetTokenPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/environments/{id}/reset_token/` · `environments_reset_token_partial_update`</sub>

## `posthog.environmentsRotateSecretTokenPartialUpdate`

Deprecated: use /api/environments/{id}/ instead.

```ts
posthog.environmentsRotateSecretTokenPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/environments/{id}/rotate_secret_token/` · `environments_rotate_secret_token_partial_update`</sub>

## `posthog.environmentsSettingsAsOfRetrieve`

Return the team settings as of the provided timestamp. Query params: - at: ISO8601 datetime (required) - scope: optional, one or multiple keys to filter the returned settings

```ts
posthog.environmentsSettingsAsOfRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/environments/{id}/settings_as_of/` · `environments_settings_as_of_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
