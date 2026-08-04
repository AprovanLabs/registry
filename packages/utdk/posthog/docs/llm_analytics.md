# Llm Analytics

55 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.llmAnalyticsClusteringConfigList`

Team-level clustering configuration (event filters for automated pipelines).

```ts
posthog.llmAnalyticsClusteringConfigList(): Promise<{ event_filters: ({ [key: string]: unknown })[]; created_at: string; updated_at: string }>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/clustering_config/` · `llm_analytics_clustering_config_list`</sub>

## `posthog.llmAnalyticsClusteringConfigSetEventFiltersCreate`

Team-level clustering configuration (event filters for automated pipelines).

```ts
posthog.llmAnalyticsClusteringConfigSetEventFiltersCreate(): Promise<{ event_filters: ({ [key: string]: unknown })[]; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/clustering_config/set_event_filters/` · `llm_analytics_clustering_config_set_event_filters_create`</sub>

## `posthog.llmAnalyticsClusteringJobsList`

CRUD for clustering job configurations (max 10 per team).

```ts
posthog.llmAnalyticsClusteringJobsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; analysis_level: "trace" | "generation" | "evaluation"; event_filters?: unknown; enabled?: boolean; created_at: string; updated_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/clustering_jobs/` · `llm_analytics_clustering_jobs_list`</sub>

## `posthog.llmAnalyticsClusteringJobsCreate`

CRUD for clustering job configurations (max 10 per team).

```ts
posthog.llmAnalyticsClusteringJobsCreate(): Promise<{ id: string; name: string; analysis_level: "trace" | "generation" | "evaluation"; event_filters?: unknown; enabled?: boolean; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/clustering_jobs/` · `llm_analytics_clustering_jobs_create`</sub>

## `posthog.llmAnalyticsClusteringJobsDestroy`

CRUD for clustering job configurations (max 10 per team).

```ts
posthog.llmAnalyticsClusteringJobsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/llm_analytics/clustering_jobs/{id}/` · `llm_analytics_clustering_jobs_destroy`</sub>

## `posthog.llmAnalyticsClusteringJobsRetrieve`

CRUD for clustering job configurations (max 10 per team).

```ts
posthog.llmAnalyticsClusteringJobsRetrieve(): Promise<{ id: string; name: string; analysis_level: "trace" | "generation" | "evaluation"; event_filters?: unknown; enabled?: boolean; created_at: string; updated_at: string }>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/clustering_jobs/{id}/` · `llm_analytics_clustering_jobs_retrieve`</sub>

## `posthog.llmAnalyticsClusteringJobsPartialUpdate`

CRUD for clustering job configurations (max 10 per team).

```ts
posthog.llmAnalyticsClusteringJobsPartialUpdate(): Promise<{ id: string; name: string; analysis_level: "trace" | "generation" | "evaluation"; event_filters?: unknown; enabled?: boolean; created_at: string; updated_at: string }>
```

<sub>`PATCH /api/projects/{project_id}/llm_analytics/clustering_jobs/{id}/` · `llm_analytics_clustering_jobs_partial_update`</sub>

## `posthog.llmAnalyticsClusteringJobsUpdate`

CRUD for clustering job configurations (max 10 per team).

```ts
posthog.llmAnalyticsClusteringJobsUpdate(): Promise<{ id: string; name: string; analysis_level: "trace" | "generation" | "evaluation"; event_filters?: unknown; enabled?: boolean; created_at: string; updated_at: string }>
```

<sub>`PUT /api/projects/{project_id}/llm_analytics/clustering_jobs/{id}/` · `llm_analytics_clustering_jobs_update`</sub>

## `posthog.llmAnalyticsClusteringRunsCreate`

Trigger a new clustering workflow run. This endpoint validates the request parameters and starts a Temporal workflow to perform trace clustering with the specified configuration.

```ts
posthog.llmAnalyticsClusteringRunsCreate(): Promise<{ lookback_days?: number; max_samples?: number; embedding_normalization?: "none" | "l2"; dimensionality_reduction_method?: "none" | "umap" | "pca"; dimensionality_reduction_ndims?: number; clustering_method?: "hdbscan" | "kmeans"; min_cluster_size_fraction?: number; hdbscan_min_samples?: number; kmeans_min_k?: number; kmeans_max_k?: number; run_label?: string; visualization_method?: "umap" | "pca...>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/clustering_runs/` · `llm_analytics_clustering_runs_create`</sub>

## `posthog.llmAnalyticsEvaluationConfigRetrieve`

Get the evaluation config for this team

```ts
posthog.llmAnalyticsEvaluationConfigRetrieve(): Promise<{ active_provider_key: { id: string; provider: "openai" | "anthropic" | "gemini" | "openrouter" | "fireworks" | "azure_openai" | "together_ai" | "minimax" | "zeabur"; name: string; state: "unknown" | "ok" | "invalid" | "error"; error_message: string | null; api_key?: string; api_key_masked: string; azure_endpoint?: string; api_version?: string; azure_endpoint_display: string | null; api_version_d...>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/evaluation_config/` · `llm_analytics_evaluation_config_retrieve`</sub>

## `posthog.llmAnalyticsEvaluationConfigSetActiveKeyCreate`

Set the active provider key for evaluations

```ts
posthog.llmAnalyticsEvaluationConfigSetActiveKeyCreate(): Promise<{ active_provider_key: { id: string; provider: "openai" | "anthropic" | "gemini" | "openrouter" | "fireworks" | "azure_openai" | "together_ai" | "minimax" | "zeabur"; name: string; state: "unknown" | "ok" | "invalid" | "error"; error_message: string | null; api_key?: string; api_key_masked: string; azure_endpoint?: string; api_version?: string; azure_endpoint_display: string | null; api_version_d...>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/evaluation_config/set_active_key/` · `llm_analytics_evaluation_config_set_active_key_create`</sub>

## `posthog.llmAnalyticsEvaluationReportsList`

CRUD for evaluation report configurations + report run history.

```ts
posthog.llmAnalyticsEvaluationReportsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; evaluation: string; frequency?: "scheduled" | "every_n"; rrule?: string; starts_at: string | null; timezone_name: string; next_delivery_date: string | null; delivery_targets?: unknown; max_sample_size?: number; enabled?: boolean; deleted: boolean; last_delivered_at: string | null; report_prompt_guidance?: str...>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/evaluation_reports/` · `llm_analytics_evaluation_reports_list`</sub>

## `posthog.llmAnalyticsEvaluationReportsCreate`

CRUD for evaluation report configurations + report run history.

```ts
posthog.llmAnalyticsEvaluationReportsCreate(): Promise<{ id: string; evaluation: string; frequency?: "scheduled" | "every_n"; rrule?: string; starts_at: string | null; timezone_name: string; next_delivery_date: string | null; delivery_targets?: unknown; max_sample_size?: number; enabled?: boolean; deleted: boolean; last_delivered_at: string | null; report_prompt_guidance?: string; trigger_threshold?: number | null; cooldown_minutes?: number; daily_ru...>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/evaluation_reports/` · `llm_analytics_evaluation_reports_create`</sub>

## `posthog.llmAnalyticsEvaluationReportsDestroy`

Evaluation report configs are deleted only when their evaluation is deleted. Use PATCH enabled=false to stop delivery.

```ts
posthog.llmAnalyticsEvaluationReportsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/llm_analytics/evaluation_reports/{id}/` · `llm_analytics_evaluation_reports_destroy`</sub>

## `posthog.llmAnalyticsEvaluationReportsRetrieve`

CRUD for evaluation report configurations + report run history.

```ts
posthog.llmAnalyticsEvaluationReportsRetrieve(): Promise<{ id: string; evaluation: string; frequency?: "scheduled" | "every_n"; rrule?: string; starts_at: string | null; timezone_name: string; next_delivery_date: string | null; delivery_targets?: unknown; max_sample_size?: number; enabled?: boolean; deleted: boolean; last_delivered_at: string | null; report_prompt_guidance?: string; trigger_threshold?: number | null; cooldown_minutes?: number; daily_ru...>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/evaluation_reports/{id}/` · `llm_analytics_evaluation_reports_retrieve`</sub>

## `posthog.llmAnalyticsEvaluationReportsPartialUpdate`

CRUD for evaluation report configurations + report run history.

```ts
posthog.llmAnalyticsEvaluationReportsPartialUpdate(): Promise<{ id: string; evaluation: string; frequency?: "scheduled" | "every_n"; rrule?: string; starts_at: string | null; timezone_name: string; next_delivery_date: string | null; delivery_targets?: unknown; max_sample_size?: number; enabled?: boolean; deleted: boolean; last_delivered_at: string | null; report_prompt_guidance?: string; trigger_threshold?: number | null; cooldown_minutes?: number; daily_ru...>
```

<sub>`PATCH /api/projects/{project_id}/llm_analytics/evaluation_reports/{id}/` · `llm_analytics_evaluation_reports_partial_update`</sub>

## `posthog.llmAnalyticsEvaluationReportsUpdate`

CRUD for evaluation report configurations + report run history.

```ts
posthog.llmAnalyticsEvaluationReportsUpdate(): Promise<{ id: string; evaluation: string; frequency?: "scheduled" | "every_n"; rrule?: string; starts_at: string | null; timezone_name: string; next_delivery_date: string | null; delivery_targets?: unknown; max_sample_size?: number; enabled?: boolean; deleted: boolean; last_delivered_at: string | null; report_prompt_guidance?: string; trigger_threshold?: number | null; cooldown_minutes?: number; daily_ru...>
```

<sub>`PUT /api/projects/{project_id}/llm_analytics/evaluation_reports/{id}/` · `llm_analytics_evaluation_reports_update`</sub>

## `posthog.llmAnalyticsEvaluationReportsGenerateCreate`

Trigger immediate report generation.

```ts
posthog.llmAnalyticsEvaluationReportsGenerateCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/evaluation_reports/{id}/generate/` · `llm_analytics_evaluation_reports_generate_create`</sub>

## `posthog.llmAnalyticsEvaluationReportsRunsList`

List report runs (history) for this report.

```ts
posthog.llmAnalyticsEvaluationReportsRunsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; report: string; content: { evaluation_target?: "generation" | "trace"; title?: string; sections?: ({ title?: string; content?: string })[]; citations?: ({ generation_id?: string; trace_id?: string; reason?: string })[]; generation_status?: "completed" | "metrics_unavailable"; metrics?: { output_type?: "boolea...>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/evaluation_reports/{id}/runs/` · `llm_analytics_evaluation_reports_runs_list`</sub>

## `posthog.llmAnalyticsModelsRetrieve`

List available models for a provider.

```ts
posthog.llmAnalyticsModelsRetrieve(): Promise<{ models: ({ id: string })[] }>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/models/` · `llm_analytics_models_retrieve`</sub>

## `posthog.llmAnalyticsParserRecipesList`

```ts
posthog.llmAnalyticsParserRecipesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; source: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founde...>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/parser_recipes/` · `llm_analytics_parser_recipes_list`</sub>

## `posthog.llmAnalyticsParserRecipesCreate`

```ts
posthog.llmAnalyticsParserRecipesCreate(): Promise<{ id: string; name: string; source: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null...>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/parser_recipes/` · `llm_analytics_parser_recipes_create`</sub>

## `posthog.llmAnalyticsParserRecipesDestroy`

```ts
posthog.llmAnalyticsParserRecipesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/llm_analytics/parser_recipes/{id}/` · `llm_analytics_parser_recipes_destroy`</sub>

## `posthog.llmAnalyticsParserRecipesRetrieve`

```ts
posthog.llmAnalyticsParserRecipesRetrieve(): Promise<{ id: string; name: string; source: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null...>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/parser_recipes/{id}/` · `llm_analytics_parser_recipes_retrieve`</sub>

## `posthog.llmAnalyticsParserRecipesPartialUpdate`

```ts
posthog.llmAnalyticsParserRecipesPartialUpdate(): Promise<{ id: string; name: string; source: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null...>
```

<sub>`PATCH /api/projects/{project_id}/llm_analytics/parser_recipes/{id}/` · `llm_analytics_parser_recipes_partial_update`</sub>

## `posthog.llmAnalyticsProviderKeyValidationsCreate`

Validate LLM provider API keys without persisting them

```ts
posthog.llmAnalyticsProviderKeyValidationsCreate(): Promise<{ [key: string]: unknown }>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/provider_key_validations/` · `llm_analytics_provider_key_validations_create`</sub>

## `posthog.llmAnalyticsProviderKeysList`

```ts
posthog.llmAnalyticsProviderKeysList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; provider: "openai" | "anthropic" | "gemini" | "openrouter" | "fireworks" | "azure_openai" | "together_ai" | "minimax" | "zeabur"; name: string; state: "unknown" | "ok" | "invalid" | "error"; error_message: string | null; api_key?: string; api_key_masked: string; azure_endpoint?: string; api_version?: string; ...>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/provider_keys/` · `llm_analytics_provider_keys_list`</sub>

## `posthog.llmAnalyticsProviderKeysCreate`

```ts
posthog.llmAnalyticsProviderKeysCreate(): Promise<{ id: string; provider: "openai" | "anthropic" | "gemini" | "openrouter" | "fireworks" | "azure_openai" | "together_ai" | "minimax" | "zeabur"; name: string; state: "unknown" | "ok" | "invalid" | "error"; error_message: string | null; api_key?: string; api_key_masked: string; azure_endpoint?: string; api_version?: string; azure_endpoint_display: string | null; api_version_display: string | null; ...>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/provider_keys/` · `llm_analytics_provider_keys_create`</sub>

## `posthog.llmAnalyticsProviderKeysDestroy`

```ts
posthog.llmAnalyticsProviderKeysDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/llm_analytics/provider_keys/{id}/` · `llm_analytics_provider_keys_destroy`</sub>

## `posthog.llmAnalyticsProviderKeysRetrieve`

```ts
posthog.llmAnalyticsProviderKeysRetrieve(): Promise<{ id: string; provider: "openai" | "anthropic" | "gemini" | "openrouter" | "fireworks" | "azure_openai" | "together_ai" | "minimax" | "zeabur"; name: string; state: "unknown" | "ok" | "invalid" | "error"; error_message: string | null; api_key?: string; api_key_masked: string; azure_endpoint?: string; api_version?: string; azure_endpoint_display: string | null; api_version_display: string | null; ...>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/provider_keys/{id}/` · `llm_analytics_provider_keys_retrieve`</sub>

## `posthog.llmAnalyticsProviderKeysPartialUpdate`

```ts
posthog.llmAnalyticsProviderKeysPartialUpdate(): Promise<{ id: string; provider: "openai" | "anthropic" | "gemini" | "openrouter" | "fireworks" | "azure_openai" | "together_ai" | "minimax" | "zeabur"; name: string; state: "unknown" | "ok" | "invalid" | "error"; error_message: string | null; api_key?: string; api_key_masked: string; azure_endpoint?: string; api_version?: string; azure_endpoint_display: string | null; api_version_display: string | null; ...>
```

<sub>`PATCH /api/projects/{project_id}/llm_analytics/provider_keys/{id}/` · `llm_analytics_provider_keys_partial_update`</sub>

## `posthog.llmAnalyticsProviderKeysUpdate`

```ts
posthog.llmAnalyticsProviderKeysUpdate(): Promise<{ id: string; provider: "openai" | "anthropic" | "gemini" | "openrouter" | "fireworks" | "azure_openai" | "together_ai" | "minimax" | "zeabur"; name: string; state: "unknown" | "ok" | "invalid" | "error"; error_message: string | null; api_key?: string; api_key_masked: string; azure_endpoint?: string; api_version?: string; azure_endpoint_display: string | null; api_version_display: string | null; ...>
```

<sub>`PUT /api/projects/{project_id}/llm_analytics/provider_keys/{id}/` · `llm_analytics_provider_keys_update`</sub>

## `posthog.llmAnalyticsProviderKeysDependentConfigsRetrieve`

Get evaluations using this key and alternative keys for replacement.

```ts
posthog.llmAnalyticsProviderKeysDependentConfigsRetrieve(): Promise<{ id: string; provider: "openai" | "anthropic" | "gemini" | "openrouter" | "fireworks" | "azure_openai" | "together_ai" | "minimax" | "zeabur"; name: string; state: "unknown" | "ok" | "invalid" | "error"; error_message: string | null; api_key?: string; api_key_masked: string; azure_endpoint?: string; api_version?: string; azure_endpoint_display: string | null; api_version_display: string | null; ...>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/provider_keys/{id}/dependent_configs/` · `llm_analytics_provider_keys_dependent_configs_retrieve`</sub>

## `posthog.llmAnalyticsProviderKeysValidateCreate`

```ts
posthog.llmAnalyticsProviderKeysValidateCreate(): Promise<{ id: string; provider: "openai" | "anthropic" | "gemini" | "openrouter" | "fireworks" | "azure_openai" | "together_ai" | "minimax" | "zeabur"; name: string; state: "unknown" | "ok" | "invalid" | "error"; error_message: string | null; api_key?: string; api_key_masked: string; azure_endpoint?: string; api_version?: string; azure_endpoint_display: string | null; api_version_display: string | null; ...>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/provider_keys/{id}/validate/` · `llm_analytics_provider_keys_validate_create`</sub>

## `posthog.llmAnalyticsReviewQueueItemsList`

```ts
posthog.llmAnalyticsReviewQueueItemsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; queue_id: string; queue_name: string; trace_id: string; created_at: string; updated_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | ...>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/review_queue_items/` · `llm_analytics_review_queue_items_list`</sub>

## `posthog.llmAnalyticsReviewQueueItemsCreate`

```ts
posthog.llmAnalyticsReviewQueueItemsCreate(): Promise<{ id: string; queue_id: string; queue_name: string; trace_id: string; created_at: string; updated_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder"...>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/review_queue_items/` · `llm_analytics_review_queue_items_create`</sub>

## `posthog.llmAnalyticsReviewQueueItemsDestroy`

```ts
posthog.llmAnalyticsReviewQueueItemsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/llm_analytics/review_queue_items/{id}/` · `llm_analytics_review_queue_items_destroy`</sub>

## `posthog.llmAnalyticsReviewQueueItemsRetrieve`

```ts
posthog.llmAnalyticsReviewQueueItemsRetrieve(): Promise<{ id: string; queue_id: string; queue_name: string; trace_id: string; created_at: string; updated_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder"...>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/review_queue_items/{id}/` · `llm_analytics_review_queue_items_retrieve`</sub>

## `posthog.llmAnalyticsReviewQueueItemsPartialUpdate`

```ts
posthog.llmAnalyticsReviewQueueItemsPartialUpdate(): Promise<{ id: string; queue_id: string; queue_name: string; trace_id: string; created_at: string; updated_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder"...>
```

<sub>`PATCH /api/projects/{project_id}/llm_analytics/review_queue_items/{id}/` · `llm_analytics_review_queue_items_partial_update`</sub>

## `posthog.llmAnalyticsReviewQueuesList`

```ts
posthog.llmAnalyticsReviewQueuesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; pending_item_count: number; created_at: string; updated_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_...>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/review_queues/` · `llm_analytics_review_queues_list`</sub>

## `posthog.llmAnalyticsReviewQueuesCreate`

```ts
posthog.llmAnalyticsReviewQueuesCreate(): Promise<{ id: string; name: string; pending_item_count: number; created_at: string; updated_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership...>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/review_queues/` · `llm_analytics_review_queues_create`</sub>

## `posthog.llmAnalyticsReviewQueuesDestroy`

```ts
posthog.llmAnalyticsReviewQueuesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/llm_analytics/review_queues/{id}/` · `llm_analytics_review_queues_destroy`</sub>

## `posthog.llmAnalyticsReviewQueuesRetrieve`

```ts
posthog.llmAnalyticsReviewQueuesRetrieve(): Promise<{ id: string; name: string; pending_item_count: number; created_at: string; updated_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership...>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/review_queues/{id}/` · `llm_analytics_review_queues_retrieve`</sub>

## `posthog.llmAnalyticsReviewQueuesPartialUpdate`

```ts
posthog.llmAnalyticsReviewQueuesPartialUpdate(): Promise<{ id: string; name: string; pending_item_count: number; created_at: string; updated_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership...>
```

<sub>`PATCH /api/projects/{project_id}/llm_analytics/review_queues/{id}/` · `llm_analytics_review_queues_partial_update`</sub>

## `posthog.llmAnalyticsScoreDefinitionsList`

```ts
posthog.llmAnalyticsScoreDefinitionsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description: string; kind: "categorical" | "numeric" | "boolean"; archived: boolean; current_version: number; current_version_id: string | null; config: { options: ({ key: string; label: string })[]; selection_mode?: "single" | "multiple"; min_selections?: number | null; max_selections?: number ...>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/score_definitions/` · `llm_analytics_score_definitions_list`</sub>

## `posthog.llmAnalyticsScoreDefinitionsCreate`

```ts
posthog.llmAnalyticsScoreDefinitionsCreate(): Promise<{ id: string; name: string; description: string; kind: "categorical" | "numeric" | "boolean"; archived: boolean; current_version: number; current_version_id: string | null; config: { options: ({ key: string; label: string })[]; selection_mode?: "single" | "multiple"; min_selections?: number | null; max_selections?: number | null } | { min?: number | null; max?: number | null; step?: number | null...>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/score_definitions/` · `llm_analytics_score_definitions_create`</sub>

## `posthog.llmAnalyticsScoreDefinitionsRetrieve`

```ts
posthog.llmAnalyticsScoreDefinitionsRetrieve(): Promise<{ id: string; name: string; description: string; kind: "categorical" | "numeric" | "boolean"; archived: boolean; current_version: number; current_version_id: string | null; config: { options: ({ key: string; label: string })[]; selection_mode?: "single" | "multiple"; min_selections?: number | null; max_selections?: number | null } | { min?: number | null; max?: number | null; step?: number | null...>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/score_definitions/{id}/` · `llm_analytics_score_definitions_retrieve`</sub>

## `posthog.llmAnalyticsScoreDefinitionsPartialUpdate`

```ts
posthog.llmAnalyticsScoreDefinitionsPartialUpdate(): Promise<{ id: string; name: string; description: string; kind: "categorical" | "numeric" | "boolean"; archived: boolean; current_version: number; current_version_id: string | null; config: { options: ({ key: string; label: string })[]; selection_mode?: "single" | "multiple"; min_selections?: number | null; max_selections?: number | null } | { min?: number | null; max?: number | null; step?: number | null...>
```

<sub>`PATCH /api/projects/{project_id}/llm_analytics/score_definitions/{id}/` · `llm_analytics_score_definitions_partial_update`</sub>

## `posthog.llmAnalyticsScoreDefinitionsNewVersionCreate`

```ts
posthog.llmAnalyticsScoreDefinitionsNewVersionCreate(): Promise<{ id: string; name: string; description: string; kind: "categorical" | "numeric" | "boolean"; archived: boolean; current_version: number; current_version_id: string | null; config: { options: ({ key: string; label: string })[]; selection_mode?: "single" | "multiple"; min_selections?: number | null; max_selections?: number | null } | { min?: number | null; max?: number | null; step?: number | null...>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/score_definitions/{id}/new_version/` · `llm_analytics_score_definitions_new_version_create`</sub>

## `posthog.llmAnalyticsTraceReviewsList`

```ts
posthog.llmAnalyticsTraceReviewsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; trace_id: string; trace_url: string; comment: string | null; created_at: string; updated_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown...>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/trace_reviews/` · `llm_analytics_trace_reviews_list`</sub>

## `posthog.llmAnalyticsTraceReviewsCreate`

```ts
posthog.llmAnalyticsTraceReviewsCreate(): Promise<{ id: string; trace_id: string; trace_url: string; comment: string | null; created_at: string; updated_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "fou...>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/trace_reviews/` · `llm_analytics_trace_reviews_create`</sub>

## `posthog.llmAnalyticsTraceReviewsDestroy`

```ts
posthog.llmAnalyticsTraceReviewsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/llm_analytics/trace_reviews/{id}/` · `llm_analytics_trace_reviews_destroy`</sub>

## `posthog.llmAnalyticsTraceReviewsRetrieve`

```ts
posthog.llmAnalyticsTraceReviewsRetrieve(): Promise<{ id: string; trace_id: string; trace_url: string; comment: string | null; created_at: string; updated_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "fou...>
```

<sub>`GET /api/projects/{project_id}/llm_analytics/trace_reviews/{id}/` · `llm_analytics_trace_reviews_retrieve`</sub>

## `posthog.llmAnalyticsTraceReviewsPartialUpdate`

```ts
posthog.llmAnalyticsTraceReviewsPartialUpdate(): Promise<{ id: string; trace_id: string; trace_url: string; comment: string | null; created_at: string; updated_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "fou...>
```

<sub>`PATCH /api/projects/{project_id}/llm_analytics/trace_reviews/{id}/` · `llm_analytics_trace_reviews_partial_update`</sub>

## `posthog.llmAnalyticsTranslateCreate`

Translate text to target language.

```ts
posthog.llmAnalyticsTranslateCreate(): Promise<{ [key: string]: unknown }>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/translate/` · `llm_analytics_translate_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
