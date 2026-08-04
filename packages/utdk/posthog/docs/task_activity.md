# Task Activity

2 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.taskActivityList`

List the requester's task activity

```ts
posthog.taskActivityList(): Promise<{ results: ({ id: string; task_id: string; task_title: string; channel_id: string | null; channel_name: string | null; activity_at: string; activity_kind: "awaiting_input" | "completed" | "mention" | "message" | "created"; snippet: string; latest_author?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedg...>
```

<sub>`GET /api/projects/{project_id}/task_activity/` · `task_activity_list`</sub>

## `posthog.taskActivityMarkReadCreate`

Mark task activity read

```ts
posthog.taskActivityMarkReadCreate(): Promise<{ marked_read: number; unread_count: number }>
```

<sub>`POST /api/projects/{project_id}/task_activity/mark_read/` · `task_activity_mark_read_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
