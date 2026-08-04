# Single Session Summaries

2 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.singleSessionSummariesList`

List stored AI-generated session summaries for the team, one row per session (latest summary kept). Use to discover which sessions have been summarized and to filter for sessions with specific problems — `has_exceptions=true`, `outcome=failure`, or a custom `session_ids` narrowing. Returns lightweight rows without the full summary JSON; use the retrieve endpoint for the per-segment / per-action detail.

```ts
posthog.singleSessionSummariesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; session_id: string; distinct_id: string | null; session_start_time: string | null; session_duration: number | null; session_outcome: { [key: string]: unknown } | null; exception_count: number; has_exceptions: boolean; model_used: string | null; visual_confirmation: boolean; extra_summary_context: { [key: stri...>
```

<sub>`GET /api/projects/{project_id}/single_session_summaries/` · `single_session_summaries_list`</sub>

## `posthog.singleSessionSummariesRetrieve`

Get the latest stored AI summary for a single session by `session_id`. Returns the full `summary` JSON (segments with named timeline, per-action `abandonment` / `confusion` / `exception` flags, segment outcomes, headline `session_outcome`, optional `sentiment`), the `exception_event_ids` array, the `extra_summary_context` (e.g. `focus_area`) used at generation time, and the `run_metadata` (LLM model used, whether visual confirmation was applied). 404 if no summary has been generated for this session yet — to trigger generation, use the existing `session-recording-summarize` flow rather than this endpoint.

```ts
posthog.singleSessionSummariesRetrieve(): Promise<{ id: string; session_id: string; distinct_id: string | null; session_start_time: string | null; session_duration: number | null; summary: { [key: string]: unknown }; exception_event_ids: (string)[]; extra_summary_context: { [key: string]: unknown } | null; run_metadata: { [key: string]: unknown } | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; fir...>
```

<sub>`GET /api/projects/{project_id}/single_session_summaries/{session_id}/` · `single_session_summaries_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
