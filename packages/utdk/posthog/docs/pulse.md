# Pulse

9 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.pulseBriefConfigsList`

```ts
posthog.pulseBriefConfigsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; focus_prompt?: string; anchors?: { dashboards?: (number)[]; insights?: (string)[] }; settings?: { min_abs_change_pct?: number; min_baseline_value?: number; max_anchor_insights?: number; fallback_dashboard_count?: number; confidence_threshold?: number; max_opportunities?: number; max_annotations?...>
```

<sub>`GET /api/projects/{project_id}/pulse/brief_configs/` · `pulse_brief_configs_list`</sub>

## `posthog.pulseBriefConfigsCreate`

```ts
posthog.pulseBriefConfigsCreate(): Promise<{ id: string; name: string; focus_prompt?: string; anchors?: { dashboards?: (number)[]; insights?: (string)[] }; settings?: { min_abs_change_pct?: number; min_baseline_value?: number; max_anchor_insights?: number; fallback_dashboard_count?: number; confidence_threshold?: number; max_opportunities?: number; max_annotations?: number }; enabled?: boolean; deleted?: boolean; created_at: string; creat...>
```

<sub>`POST /api/projects/{project_id}/pulse/brief_configs/` · `pulse_brief_configs_create`</sub>

## `posthog.pulseBriefConfigsDestroy`

```ts
posthog.pulseBriefConfigsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/pulse/brief_configs/{id}/` · `pulse_brief_configs_destroy`</sub>

## `posthog.pulseBriefConfigsRetrieve`

```ts
posthog.pulseBriefConfigsRetrieve(): Promise<{ id: string; name: string; focus_prompt?: string; anchors?: { dashboards?: (number)[]; insights?: (string)[] }; settings?: { min_abs_change_pct?: number; min_baseline_value?: number; max_anchor_insights?: number; fallback_dashboard_count?: number; confidence_threshold?: number; max_opportunities?: number; max_annotations?: number }; enabled?: boolean; deleted?: boolean; created_at: string; creat...>
```

<sub>`GET /api/projects/{project_id}/pulse/brief_configs/{id}/` · `pulse_brief_configs_retrieve`</sub>

## `posthog.pulseBriefConfigsPartialUpdate`

```ts
posthog.pulseBriefConfigsPartialUpdate(): Promise<{ id: string; name: string; focus_prompt?: string; anchors?: { dashboards?: (number)[]; insights?: (string)[] }; settings?: { min_abs_change_pct?: number; min_baseline_value?: number; max_anchor_insights?: number; fallback_dashboard_count?: number; confidence_threshold?: number; max_opportunities?: number; max_annotations?: number }; enabled?: boolean; deleted?: boolean; created_at: string; creat...>
```

<sub>`PATCH /api/projects/{project_id}/pulse/brief_configs/{id}/` · `pulse_brief_configs_partial_update`</sub>

## `posthog.pulseBriefConfigsUpdate`

```ts
posthog.pulseBriefConfigsUpdate(): Promise<{ id: string; name: string; focus_prompt?: string; anchors?: { dashboards?: (number)[]; insights?: (string)[] }; settings?: { min_abs_change_pct?: number; min_baseline_value?: number; max_anchor_insights?: number; fallback_dashboard_count?: number; confidence_threshold?: number; max_opportunities?: number; max_annotations?: number }; enabled?: boolean; deleted?: boolean; created_at: string; creat...>
```

<sub>`PUT /api/projects/{project_id}/pulse/brief_configs/{id}/` · `pulse_brief_configs_update`</sub>

## `posthog.pulseBriefsList`

```ts
posthog.pulseBriefsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; config: string | null; status: "generating" | "ready" | "quiet" | "failed"; trigger: "on_demand" | "scheduled"; period: { period_type: "last_n_days" | "since_last_run"; days?: number }; sources_used: (string)[]; error: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: st...>
```

<sub>`GET /api/projects/{project_id}/pulse/briefs/` · `pulse_briefs_list`</sub>

## `posthog.pulseBriefsRetrieve`

```ts
posthog.pulseBriefsRetrieve(): Promise<{ id: string; config: string | null; status: "generating" | "ready" | "quiet" | "failed"; trigger: "on_demand" | "scheduled"; period: { period_type: "last_n_days" | "since_last_run"; days?: number }; sections: ({ kind: string; title: string; markdown: string; citations: ({ type: string; ref: string; label: string; url: string })[]; confidence: number })[]; sources_used: (string)[]; error: string ...>
```

<sub>`GET /api/projects/{project_id}/pulse/briefs/{id}/` · `pulse_briefs_retrieve`</sub>

## `posthog.pulseBriefsGenerateCreate`

```ts
posthog.pulseBriefsGenerateCreate(): Promise<{ id: string; config: string | null; status: "generating" | "ready" | "quiet" | "failed"; trigger: "on_demand" | "scheduled"; period: { period_type: "last_n_days" | "since_last_run"; days?: number }; sections: ({ kind: string; title: string; markdown: string; citations: ({ type: string; ref: string; label: string; url: string })[]; confidence: number })[]; sources_used: (string)[]; error: string ...>
```

<sub>`POST /api/projects/{project_id}/pulse/briefs/generate/` · `pulse_briefs_generate_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
