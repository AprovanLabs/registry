# Reminders

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.remindersList`

```ts
posthog.remindersList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; organization: string; team?: number | null; title: string; message?: string; resource_type?: string | null; resource_id?: string | null; scheduled_at?: string | null; recurrence_interval?: "daily" | "weekly" | "monthly" | "yearly" | "" | null; cron_expression?: string | null; timezone?: string; end_date?: str...>
```

<sub>`GET /api/reminders/` · `reminders_list`</sub>

## `posthog.remindersCreate`

```ts
posthog.remindersCreate(): Promise<{ id: string; organization: string; team?: number | null; title: string; message?: string; resource_type?: string | null; resource_id?: string | null; scheduled_at?: string | null; recurrence_interval?: "daily" | "weekly" | "monthly" | "yearly" | "" | null; cron_expression?: string | null; timezone?: string; end_date?: string | null; next_fire_at: string | null; last_fired_at: string | null; stat...>
```

<sub>`POST /api/reminders/` · `reminders_create`</sub>

## `posthog.remindersDestroy`

```ts
posthog.remindersDestroy(): Promise<unknown>
```

<sub>`DELETE /api/reminders/{id}/` · `reminders_destroy`</sub>

## `posthog.remindersRetrieve`

```ts
posthog.remindersRetrieve(): Promise<{ id: string; organization: string; team?: number | null; title: string; message?: string; resource_type?: string | null; resource_id?: string | null; scheduled_at?: string | null; recurrence_interval?: "daily" | "weekly" | "monthly" | "yearly" | "" | null; cron_expression?: string | null; timezone?: string; end_date?: string | null; next_fire_at: string | null; last_fired_at: string | null; stat...>
```

<sub>`GET /api/reminders/{id}/` · `reminders_retrieve`</sub>

## `posthog.remindersPartialUpdate`

```ts
posthog.remindersPartialUpdate(): Promise<{ id: string; organization: string; team?: number | null; title: string; message?: string; resource_type?: string | null; resource_id?: string | null; scheduled_at?: string | null; recurrence_interval?: "daily" | "weekly" | "monthly" | "yearly" | "" | null; cron_expression?: string | null; timezone?: string; end_date?: string | null; next_fire_at: string | null; last_fired_at: string | null; stat...>
```

<sub>`PATCH /api/reminders/{id}/` · `reminders_partial_update`</sub>

## `posthog.remindersUpdate`

```ts
posthog.remindersUpdate(): Promise<{ id: string; organization: string; team?: number | null; title: string; message?: string; resource_type?: string | null; resource_id?: string | null; scheduled_at?: string | null; recurrence_interval?: "daily" | "weekly" | "monthly" | "yearly" | "" | null; cron_expression?: string | null; timezone?: string; end_date?: string | null; next_fire_at: string | null; last_fired_at: string | null; stat...>
```

<sub>`PUT /api/reminders/{id}/` · `reminders_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
