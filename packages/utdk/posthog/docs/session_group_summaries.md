# Session Group Summaries

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.sessionGroupSummariesList`

API for retrieving and managing stored group session summaries.

```ts
posthog.sessionGroupSummariesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; title: string; session_count: number; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | ...>
```

<sub>`GET /api/projects/{project_id}/session_group_summaries/` · `session_group_summaries_list`</sub>

## `posthog.sessionGroupSummariesCreate`

API for retrieving and managing stored group session summaries.

```ts
posthog.sessionGroupSummariesCreate(): Promise<{ id: string; title: string; session_ids: (string)[]; summary: unknown; extra_summary_context: unknown; run_metadata: unknown; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | ...>
```

<sub>`POST /api/projects/{project_id}/session_group_summaries/` · `session_group_summaries_create`</sub>

## `posthog.sessionGroupSummariesDestroy`

API for retrieving and managing stored group session summaries.

```ts
posthog.sessionGroupSummariesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/session_group_summaries/{id}/` · `session_group_summaries_destroy`</sub>

## `posthog.sessionGroupSummariesRetrieve`

API for retrieving and managing stored group session summaries.

```ts
posthog.sessionGroupSummariesRetrieve(): Promise<{ id: string; title: string; session_ids: (string)[]; summary: unknown; extra_summary_context: unknown; run_metadata: unknown; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | ...>
```

<sub>`GET /api/projects/{project_id}/session_group_summaries/{id}/` · `session_group_summaries_retrieve`</sub>

## `posthog.sessionGroupSummariesPartialUpdate`

API for retrieving and managing stored group session summaries.

```ts
posthog.sessionGroupSummariesPartialUpdate(): Promise<{ id: string; title: string; session_ids: (string)[]; summary: unknown; extra_summary_context: unknown; run_metadata: unknown; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | ...>
```

<sub>`PATCH /api/projects/{project_id}/session_group_summaries/{id}/` · `session_group_summaries_partial_update`</sub>

## `posthog.sessionGroupSummariesUpdate`

API for retrieving and managing stored group session summaries.

```ts
posthog.sessionGroupSummariesUpdate(): Promise<{ id: string; title: string; session_ids: (string)[]; summary: unknown; extra_summary_context: unknown; run_metadata: unknown; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | ...>
```

<sub>`PUT /api/projects/{project_id}/session_group_summaries/{id}/` · `session_group_summaries_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
