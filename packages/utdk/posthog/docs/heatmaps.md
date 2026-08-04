# Heatmaps

2 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.heatmapsList`

Aggregated heatmap interactions for a page. For type 'click'/'rageclick'/'mousemove' each result is a point with relative x, absolute client-y, and a count. For type 'scrolldepth' the response is scroll-depth buckets instead (cumulative reach down the page).

```ts
posthog.heatmapsList(): Promise<({ results: ({ count: number; pointer_y: number; pointer_relative_x: number; pointer_target_fixed: boolean })[]; fold?: { total_count: number; below_fold_count: number; pct_below_fold: number; median_viewport_height: number | null } | null; has_more?: boolean })[]>
```

<sub>`GET /api/projects/{project_id}/heatmaps/` · `heatmaps_list`</sub>

## `posthog.heatmapsEventsRetrieve`

Drill into the individual session interactions behind one or more heatmap coordinates. Pass the 'points' you want to inspect (from the heatmaps list response) to get the underlying per-session events, so you can jump to the session recordings that produced a hotspot.

```ts
posthog.heatmapsEventsRetrieve(): Promise<{ results: ({ session_id?: string | null; distinct_id: string; timestamp: string; pointer_relative_x: number; pointer_y: number; current_url: string; type: string })[]; total_count: number; has_more: boolean }>
```

<sub>`GET /api/projects/{project_id}/heatmaps/events/` · `heatmaps_events_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
