# Session Summaries

3 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.retrieveSessionSummariesConfig`

Retrieve the team's session summaries configuration (product context used to tailor single-session replay summaries).

```ts
posthog.retrieveSessionSummariesConfig(): Promise<{ product_context?: string; custom_tags?: { [key: string]: string | undefined } }>
```

<sub>`GET /api/projects/{project_id}/session_summaries/config/` · `retrieve_session_summaries_config`</sub>

## `posthog.updateSessionSummariesConfig`

Update the team's session summaries configuration (product context used to tailor single-session replay summaries).

```ts
posthog.updateSessionSummariesConfig(): Promise<{ product_context?: string; custom_tags?: { [key: string]: string | undefined } }>
```

<sub>`PATCH /api/projects/{project_id}/session_summaries/config/` · `update_session_summaries_config`</sub>

## `posthog.createSessionSummaries`

Generate AI summary for a group of session recordings to find patterns and generate a notebook.

```ts
posthog.createSessionSummaries(): Promise<{ session_ids: (string)[]; focus_area?: string }>
```

<sub>`POST /api/projects/{project_id}/session_summaries/create_session_summaries/` · `create_session_summaries`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
