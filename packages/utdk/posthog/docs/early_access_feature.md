# Early Access Feature

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.earlyAccessFeatureList`

```ts
posthog.earlyAccessFeatureList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | "all" | "" | null; bucketing_identifier?: "dist...>
```

<sub>`GET /api/projects/{project_id}/early_access_feature/` · `early_access_feature_list`</sub>

## `posthog.earlyAccessFeatureCreate`

```ts
posthog.earlyAccessFeatureCreate(): Promise<{ id: string; name: string; description?: string; stage: "draft" | "concept" | "alpha" | "beta" | "general-availability" | "archived"; documentation_url?: string; payload?: unknown; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: un...>
```

<sub>`POST /api/projects/{project_id}/early_access_feature/` · `early_access_feature_create`</sub>

## `posthog.earlyAccessFeatureDestroy`

```ts
posthog.earlyAccessFeatureDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/early_access_feature/{id}/` · `early_access_feature_destroy`</sub>

## `posthog.earlyAccessFeatureRetrieve`

```ts
posthog.earlyAccessFeatureRetrieve(): Promise<{ id: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | "all" | "" | null; bucketing_identifier?: "distinct_id" | "device_id" | "" | null; evaluation_contexts: (string)[] }; name...>
```

<sub>`GET /api/projects/{project_id}/early_access_feature/{id}/` · `early_access_feature_retrieve`</sub>

## `posthog.earlyAccessFeaturePartialUpdate`

```ts
posthog.earlyAccessFeaturePartialUpdate(): Promise<{ id: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | "all" | "" | null; bucketing_identifier?: "distinct_id" | "device_id" | "" | null; evaluation_contexts: (string)[] }; name...>
```

<sub>`PATCH /api/projects/{project_id}/early_access_feature/{id}/` · `early_access_feature_partial_update`</sub>

## `posthog.earlyAccessFeatureUpdate`

```ts
posthog.earlyAccessFeatureUpdate(): Promise<{ id: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | "all" | "" | null; bucketing_identifier?: "distinct_id" | "device_id" | "" | null; evaluation_contexts: (string)[] }; name...>
```

<sub>`PUT /api/projects/{project_id}/early_access_feature/{id}/` · `early_access_feature_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
