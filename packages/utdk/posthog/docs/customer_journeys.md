# Customer Journeys

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.customerJourneysList`

```ts
posthog.customerJourneysList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; insight: number; name: string; description?: string | null; created_at: string; created_by: number | null; updated_at: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/customer_journeys/` · `customer_journeys_list`</sub>

## `posthog.customerJourneysCreate`

```ts
posthog.customerJourneysCreate(): Promise<{ id: string; insight: number; name: string; description?: string | null; created_at: string; created_by: number | null; updated_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/customer_journeys/` · `customer_journeys_create`</sub>

## `posthog.customerJourneysDestroy`

```ts
posthog.customerJourneysDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/customer_journeys/{id}/` · `customer_journeys_destroy`</sub>

## `posthog.customerJourneysRetrieve`

```ts
posthog.customerJourneysRetrieve(): Promise<{ id: string; insight: number; name: string; description?: string | null; created_at: string; created_by: number | null; updated_at: string | null }>
```

<sub>`GET /api/projects/{project_id}/customer_journeys/{id}/` · `customer_journeys_retrieve`</sub>

## `posthog.customerJourneysPartialUpdate`

```ts
posthog.customerJourneysPartialUpdate(): Promise<{ id: string; insight: number; name: string; description?: string | null; created_at: string; created_by: number | null; updated_at: string | null }>
```

<sub>`PATCH /api/projects/{project_id}/customer_journeys/{id}/` · `customer_journeys_partial_update`</sub>

## `posthog.customerJourneysUpdate`

```ts
posthog.customerJourneysUpdate(): Promise<{ id: string; insight: number; name: string; description?: string | null; created_at: string; created_by: number | null; updated_at: string | null }>
```

<sub>`PUT /api/projects/{project_id}/customer_journeys/{id}/` · `customer_journeys_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
