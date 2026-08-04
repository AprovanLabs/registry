# Event Filter

4 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.eventFilterRetrieve`

Returns the event filter config for the team, or null if not yet created.

```ts
posthog.eventFilterRetrieve(): Promise<{ id: string; mode?: "disabled" | "dry_run" | "live"; filter_tree?: unknown; test_cases?: unknown; created_at: string; updated_at: string }>
```

<sub>`GET /api/projects/{project_id}/event_filter/` · `event_filter_retrieve`</sub>

## `posthog.eventFilterCreate`

Create or update the event filter config.

```ts
posthog.eventFilterCreate(): Promise<{ id: string; mode?: "disabled" | "dry_run" | "live"; filter_tree?: unknown; test_cases?: unknown; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/event_filter/` · `event_filter_create`</sub>

## `posthog.eventFilterMetricsRetrieve`

Single event filter per team. GET /event_filter/ — returns the config (or null if not yet created) POST /event_filter/ — creates or updates the config (upsert) GET /event_filter/metrics/ — time-series metrics GET /event_filter/metrics/totals/ — aggregate totals

```ts
posthog.eventFilterMetricsRetrieve(): Promise<{ labels: (string)[]; series: ({ name: string; values: (number)[] })[] }>
```

<sub>`GET /api/projects/{project_id}/event_filter/metrics/` · `event_filter_metrics_retrieve`</sub>

## `posthog.eventFilterMetricsTotalsRetrieve`

Single event filter per team. GET /event_filter/ — returns the config (or null if not yet created) POST /event_filter/ — creates or updates the config (upsert) GET /event_filter/metrics/ — time-series metrics GET /event_filter/metrics/totals/ — aggregate totals

```ts
posthog.eventFilterMetricsTotalsRetrieve(): Promise<{ totals: { [key: string]: number | undefined } }>
```

<sub>`GET /api/projects/{project_id}/event_filter/metrics/totals/` · `event_filter_metrics_totals_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
