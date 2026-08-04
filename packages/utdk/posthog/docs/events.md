# Events

3 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.eventsList`

This endpoint allows you to list and filter events. It is effectively deprecated and is kept only for backwards compatibility. If you ever ask about it you will be advised to not use it... If you want to ad-hoc list or aggregate events, use the Query endpoint instead. If you want to export all events or many pages of events you should use our CDP/Batch Exports products instead.

```ts
posthog.eventsList(): Promise<{ next?: string | null; results?: ({ id: string; distinct_id: string; properties: { [key: string]: unknown }; event: string; timestamp: string; person: { [key: string]: unknown } | null; elements: ({ event: string; text?: string | null; tag_name?: string | null; attr_class?: unknown[] | null; href?: string | null; attr_id?: string | null; nth_child?: number | null; nth_of_type?: number | null; at...>
```

<sub>`GET /api/projects/{project_id}/events/` · `events_list`</sub>

## `posthog.eventsRetrieve`

```ts
posthog.eventsRetrieve(): Promise<{ [key: string]: unknown }>
```

<sub>`GET /api/projects/{project_id}/events/{id}/` · `events_retrieve`</sub>

## `posthog.eventsValuesRetrieve`

```ts
posthog.eventsValuesRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/events/values/` · `events_values_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
