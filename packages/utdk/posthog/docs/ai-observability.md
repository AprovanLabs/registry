# AI Observability

20 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.llmAnalyticsPersonalSpendList`

Return a structured personal LLM spend analysis for the requesting user. Pass `date_from` / `date_to` (absolute like `2026-04-23` or relative like `-7d`) to bound the window — defaults to the last 30 days, max 90 days. The `product=<ai_product>` query param is required and scopes the tool / model / day / trace breakdowns to a single product; supported values: posthog_code. `by_product` is always returned for cross-product visibility. `by_day` returns a day-ascending spend series for the scoped product. Pass `bucket_minutes` (5, 15, 30, or 60; the window may span at most 600 buckets) to additionally get `by_bucket`, a time-ascending series with per-bucket cost split into uncached input / output / cache read / cache creation components. Use `refresh=true` to bypass the 5-minute response cache.

```ts
posthog.llmAnalyticsPersonalSpendList(): Promise<({ summary: { date_from: string; date_to: string; product: string; total_cost_usd: number; event_count: number; scoped_cost_usd: number; scoped_event_count: number }; by_product: { items: ({ product: string | null; event_count: number; cost_usd: number })[]; truncated: boolean }; by_tool: { items: ({ tool: string | null; generation_count: number; cost_usd: number; share_of_scoped: number; avg_inp...>
```

<sub>`GET /api/llm_analytics/@me/spend/` · `llm_analytics_personal_spend_list`</sub>

## `posthog.datasetItemsList`

List a dataset's current items or its exact contents at a prior revision.

```ts
posthog.datasetItemsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; dataset: string; external_id: string | null; version: number; version_id: string; dataset_revision: number; dataset_revision_id: string; archived: boolean; input: { [key: string]: unknown } | (unknown)[] | string | number | boolean; expected_output: { [key: string]: unknown } | (unknown)[] | string | number |...>
```

<sub>`GET /api/projects/{project_id}/dataset_items/` · `dataset_items_list`</sub>

## `posthog.datasetItemsCreate`

Create an item and its first immutable version. An identical external ID retry returns the existing item. If the matching item is archived, the submitted content is restored as a new active version.

```ts
posthog.datasetItemsCreate(): Promise<{ id: string; dataset: string; external_id: string | null; version: number; version_id: string; dataset_revision: number; dataset_revision_id: string; archived: boolean; input: { [key: string]: unknown } | (unknown)[] | string | number | boolean; expected_output: { [key: string]: unknown } | (unknown)[] | string | number | boolean | null; source_output: unknown | null; metadata: { [key: string]: ...>
```

<sub>`POST /api/projects/{project_id}/dataset_items/` · `dataset_items_create`</sub>

## `posthog.datasetItemsRetrieve`

Retrieve the current version of an active or archived item.

```ts
posthog.datasetItemsRetrieve(): Promise<{ id: string; dataset: string; external_id: string | null; version: number; version_id: string; dataset_revision: number; dataset_revision_id: string; archived: boolean; input: { [key: string]: unknown } | (unknown)[] | string | number | boolean; expected_output: { [key: string]: unknown } | (unknown)[] | string | number | boolean | null; source_output: unknown | null; metadata: { [key: string]: ...>
```

<sub>`GET /api/projects/{project_id}/dataset_items/{dataset_item_id}/` · `dataset_items_retrieve`</sub>

## `posthog.datasetItemsPartialUpdate`

Create a new immutable item version from editable fields.

```ts
posthog.datasetItemsPartialUpdate(): Promise<{ id: string; dataset: string; external_id: string | null; version: number; version_id: string; dataset_revision: number; dataset_revision_id: string; archived: boolean; input: { [key: string]: unknown } | (unknown)[] | string | number | boolean; expected_output: { [key: string]: unknown } | (unknown)[] | string | number | boolean | null; source_output: unknown | null; metadata: { [key: string]: ...>
```

<sub>`PATCH /api/projects/{project_id}/dataset_items/{dataset_item_id}/` · `dataset_items_partial_update`</sub>

## `posthog.datasetItemsArchive`

Archive an active item by creating a new immutable version.

```ts
posthog.datasetItemsArchive(): Promise<{ id: string; dataset: string; external_id: string | null; version: number; version_id: string; dataset_revision: number; dataset_revision_id: string; archived: boolean; input: { [key: string]: unknown } | (unknown)[] | string | number | boolean; expected_output: { [key: string]: unknown } | (unknown)[] | string | number | boolean | null; source_output: unknown | null; metadata: { [key: string]: ...>
```

<sub>`POST /api/projects/{project_id}/dataset_items/{dataset_item_id}/archive/` · `dataset_items_archive`</sub>

## `posthog.datasetItemsRestore`

Restore an archived item by copying content into a new immutable version.

```ts
posthog.datasetItemsRestore(): Promise<{ id: string; dataset: string; external_id: string | null; version: number; version_id: string; dataset_revision: number; dataset_revision_id: string; archived: boolean; input: { [key: string]: unknown } | (unknown)[] | string | number | boolean; expected_output: { [key: string]: unknown } | (unknown)[] | string | number | boolean | null; source_output: unknown | null; metadata: { [key: string]: ...>
```

<sub>`POST /api/projects/{project_id}/dataset_items/{dataset_item_id}/restore/` · `dataset_items_restore`</sub>

## `posthog.datasetItemsVersionsList`

List every immutable version of an item, newest first.

```ts
posthog.datasetItemsVersionsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; dataset: string; external_id: string | null; version: number; version_id: string; dataset_revision: number; dataset_revision_id: string; archived: boolean; input: { [key: string]: unknown } | (unknown)[] | string | number | boolean; expected_output: { [key: string]: unknown } | (unknown)[] | string | number |...>
```

<sub>`GET /api/projects/{project_id}/dataset_items/{dataset_item_id}/versions/` · `dataset_items_versions_list`</sub>

## `posthog.datasetsList`

List active datasets by default, or archived datasets when requested.

```ts
posthog.datasetsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description: string; metadata: { [key: string]: unknown }; archived: boolean; current_revision: number | null; current_revision_id: string | null; created_at: string; updated_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: ...>
```

<sub>`GET /api/projects/{project_id}/datasets/` · `datasets_list`</sub>

## `posthog.datasetsCreate`

Create an empty dataset. Its first revision is created with its first item.

```ts
posthog.datasetsCreate(): Promise<{ id: string; name: string; description: string; metadata: { [key: string]: unknown }; archived: boolean; current_revision: number | null; current_revision_id: string | null; created_at: string; updated_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config:...>
```

<sub>`POST /api/projects/{project_id}/datasets/` · `datasets_create`</sub>

## `posthog.datasetsRetrieve`

Retrieve an active or archived dataset.

```ts
posthog.datasetsRetrieve(): Promise<{ id: string; name: string; description: string; metadata: { [key: string]: unknown }; archived: boolean; current_revision: number | null; current_revision_id: string | null; created_at: string; updated_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config:...>
```

<sub>`GET /api/projects/{project_id}/datasets/{id}/` · `datasets_retrieve`</sub>

## `posthog.datasetsPartialUpdate`

Update descriptive dataset fields without changing its revision.

```ts
posthog.datasetsPartialUpdate(): Promise<{ id: string; name: string; description: string; metadata: { [key: string]: unknown }; archived: boolean; current_revision: number | null; current_revision_id: string | null; created_at: string; updated_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config:...>
```

<sub>`PATCH /api/projects/{project_id}/datasets/{id}/` · `datasets_partial_update`</sub>

## `posthog.datasetsArchive`

Archive a dataset. Archived datasets remain readable and reject item mutations.

```ts
posthog.datasetsArchive(): Promise<{ id: string; name: string; description: string; metadata: { [key: string]: unknown }; archived: boolean; current_revision: number | null; current_revision_id: string | null; created_at: string; updated_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config:...>
```

<sub>`POST /api/projects/{project_id}/datasets/{id}/archive/` · `datasets_archive`</sub>

## `posthog.datasetsRestore`

Restore an archived dataset without changing its item states.

```ts
posthog.datasetsRestore(): Promise<{ id: string; name: string; description: string; metadata: { [key: string]: unknown }; archived: boolean; current_revision: number | null; current_revision_id: string | null; created_at: string; updated_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config:...>
```

<sub>`POST /api/projects/{project_id}/datasets/{id}/restore/` · `datasets_restore`</sub>

## `posthog.datasetsRevisionsList`

List immutable dataset revisions, newest first.

```ts
posthog.datasetsRevisionsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; dataset_id: string; revision: number; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | ...>
```

<sub>`GET /api/projects/{project_id}/datasets/{id}/revisions/` · `datasets_revisions_list`</sub>

## `posthog.llmAnalyticsEvaluationSummaryCreate`

Generate an AI-powered summary of evaluation results. This endpoint analyzes evaluation runs and identifies patterns in passing and failing evaluations, providing actionable recommendations. Data is fetched server-side by evaluation ID to ensure data integrity. **Use Cases:** - Understand why evaluations are passing or failing - Identify systematic issues in LLM responses - Get recommendations for improving response quality - Review patterns across many evaluation runs at once

```ts
posthog.llmAnalyticsEvaluationSummaryCreate(): Promise<{ overall_assessment: string; pass_patterns: ({ title: string; description: string; frequency: string; example_generation_ids: (string)[] })[]; fail_patterns: ({ title: string; description: string; frequency: string; example_generation_ids: (string)[] })[]; na_patterns: (unknown)[]; recommendations: (string)[]; statistics: { total_analyzed: number; pass_count: number; fail_count: number; na_count...>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/evaluation_summary/` · `llm_analytics_evaluation_summary_create`</sub>

## `posthog.llmAnalyticsOfflineEvaluationsExperimentItemsCreate`

```ts
posthog.llmAnalyticsOfflineEvaluationsExperimentItemsCreate(): Promise<{ results: ((unknown)[])[] }>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/offline_evaluations/experiment_items/` · `llm_analytics_offline_evaluations_experiment_items_create`</sub>

## `posthog.llmAnalyticsSummarizationCreate`

Generate an AI-powered summary of an LLM trace or event. This endpoint analyzes the provided trace/event, generates a line-numbered text representation, and uses an LLM to create a concise summary with line references. **Two ways to use this endpoint:** 1. **By ID (recommended):** Pass `trace_id` or `generation_id` with an optional `date_from`/`date_to`. The backend fetches the data automatically. `summarize_type` is inferred. 2. **By data:** Pass the full trace/event data blob in `data` with `summarize_type`. This is how the frontend uses it. **Summary Format:** - Title (concise, max 10 words) - Mermaid flow diagram showing the main flow - 3-10 summary bullets with line references - "Interesting Notes" section for failures, successes, or unusual patterns - Line references in [L45] or [L45-52] format pointing to relevant sections The response includes the structured summary, the text representation, and metadata.

```ts
posthog.llmAnalyticsSummarizationCreate(): Promise<{ summary: { title: string; flow_diagram: string; summary_bullets: ({ text: string; line_refs: string })[]; interesting_notes: ({ text: string; line_refs: string })[] }; text_repr: string; metadata?: unknown }>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/summarization/` · `llm_analytics_summarization_create`</sub>

## `posthog.llmAnalyticsSummarizationBatchCheckCreate`

Check which traces have cached summaries available. This endpoint allows batch checking of multiple trace IDs to see which ones have cached summaries. Returns only the traces that have cached summaries with their titles. **Use Cases:** - Load cached summaries on session view load - Avoid unnecessary LLM calls for already-summarized traces - Display summary previews without generating new summaries

```ts
posthog.llmAnalyticsSummarizationBatchCheckCreate(): Promise<{ summaries: ({ trace_id: string; title: string; cached?: boolean })[] }>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/summarization/batch_check/` · `llm_analytics_summarization_batch_check_create`</sub>

## `posthog.llmAnalyticsTextReprCreate`

Generate a human-readable text representation of an LLM trace event. This endpoint converts AI observability events ($ai_generation, $ai_span, $ai_embedding, or $ai_trace) into formatted text representations suitable for display, logging, or analysis. **Supported Event Types:** - `$ai_generation`: Individual LLM API calls with input/output messages - `$ai_span`: Logical spans with state transitions - `$ai_embedding`: Embedding generation events (text input → vector) - `$ai_trace`: Full traces with hierarchical structure **Options:** - `max_length`: Maximum character count (default: 2000000) - `truncated`: Enable middle-content truncation within events (default: true) - `truncate_buffer`: Characters at start/end when truncating (default: 1000) - `include_markers`: Use interactive markers vs plain text indicators (default: true) - Frontend: set true for `<<<TRUNCATED|base64|...>>>` markers - Backend/LLM: set false for `... (X chars truncated) ...` text - `collapsed`: Show summary vs full trace tree (default: false) - `include_hierarchy`: Include tree structure for traces (default: true) - `max_depth`: Maximum depth for hierarchical rendering (default: unlimited) - `tools_collapse_threshold`: Number of tools before auto-collapsing list (default: 5) - Tool lists >5 items show `<<<TOOLS_EXPANDABLE|...>>>` marker for frontend - Or `[+] AVAILABLE TOOLS: N` for backend when `include_markers: false` - `include_line_numbers`: Prefix each line with line number like L001:, L010: (default: false) **Use Cases:** - Frontend display: `truncated: true, include_markers: true, include_line_numbers: true` - Backend LLM context (summary): `truncated: true, include_markers: false, collapsed: true` - Backend LLM context (full): `truncated: false` The response includes the formatted text and metadata about the rendering.

```ts
posthog.llmAnalyticsTextReprCreate(): Promise<{ text: string; metadata: { event_type?: string; event_id?: string; trace_id?: string; rendering: string; char_count: number; truncated: boolean; error?: string } }>
```

<sub>`POST /api/projects/{project_id}/llm_analytics/text_repr/` · `llm_analytics_text_repr_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
