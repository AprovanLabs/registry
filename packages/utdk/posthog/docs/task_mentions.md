# Task Mentions

1 operation · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.taskMentionsList`

List mentions of the requester

```ts
posthog.taskMentionsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; message_id: string; task_id: string; task_title: string; channel_id: string | null; channel_name: string | null; author?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedgehog_config?: { [key: string]: unknown } | nu...>
```

<sub>`GET /api/projects/{project_id}/task_mentions/` · `task_mentions_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
