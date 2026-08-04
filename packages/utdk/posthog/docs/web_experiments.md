# Web Experiments

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.webExperimentsList`

```ts
posthog.webExperimentsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; name: string; created_at?: string; feature_flag_key: string; variants: unknown })[] }>
```

<sub>`GET /api/projects/{project_id}/web_experiments/` · `web_experiments_list`</sub>

## `posthog.webExperimentsCreate`

```ts
posthog.webExperimentsCreate(): Promise<{ id: number; name: string; created_at?: string; feature_flag_key: string; variants: unknown }>
```

<sub>`POST /api/projects/{project_id}/web_experiments/` · `web_experiments_create`</sub>

## `posthog.webExperimentsDestroy`

```ts
posthog.webExperimentsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/web_experiments/{id}/` · `web_experiments_destroy`</sub>

## `posthog.webExperimentsRetrieve`

```ts
posthog.webExperimentsRetrieve(): Promise<{ id: number; name: string; created_at?: string; feature_flag_key: string; variants: unknown }>
```

<sub>`GET /api/projects/{project_id}/web_experiments/{id}/` · `web_experiments_retrieve`</sub>

## `posthog.webExperimentsPartialUpdate`

```ts
posthog.webExperimentsPartialUpdate(): Promise<{ id: number; name: string; created_at?: string; feature_flag_key: string; variants: unknown }>
```

<sub>`PATCH /api/projects/{project_id}/web_experiments/{id}/` · `web_experiments_partial_update`</sub>

## `posthog.webExperimentsUpdate`

```ts
posthog.webExperimentsUpdate(): Promise<{ id: number; name: string; created_at?: string; feature_flag_key: string; variants: unknown }>
```

<sub>`PUT /api/projects/{project_id}/web_experiments/{id}/` · `web_experiments_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
