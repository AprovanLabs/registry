# Customer Profile Configs

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.customerProfileConfigsList`

```ts
posthog.customerProfileConfigsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; scope: "person" | "group_0" | "group_1" | "group_2" | "group_3" | "group_4"; content?: unknown; sidebar?: unknown; created_at: string; updated_at: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/customer_profile_configs/` · `customer_profile_configs_list`</sub>

## `posthog.customerProfileConfigsCreate`

```ts
posthog.customerProfileConfigsCreate(): Promise<{ id: string; scope: "person" | "group_0" | "group_1" | "group_2" | "group_3" | "group_4"; content?: unknown; sidebar?: unknown; created_at: string; updated_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/customer_profile_configs/` · `customer_profile_configs_create`</sub>

## `posthog.customerProfileConfigsDestroy`

```ts
posthog.customerProfileConfigsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/customer_profile_configs/{id}/` · `customer_profile_configs_destroy`</sub>

## `posthog.customerProfileConfigsRetrieve`

```ts
posthog.customerProfileConfigsRetrieve(): Promise<{ id: string; scope: "person" | "group_0" | "group_1" | "group_2" | "group_3" | "group_4"; content?: unknown; sidebar?: unknown; created_at: string; updated_at: string | null }>
```

<sub>`GET /api/projects/{project_id}/customer_profile_configs/{id}/` · `customer_profile_configs_retrieve`</sub>

## `posthog.customerProfileConfigsPartialUpdate`

```ts
posthog.customerProfileConfigsPartialUpdate(): Promise<{ id: string; scope: "person" | "group_0" | "group_1" | "group_2" | "group_3" | "group_4"; content?: unknown; sidebar?: unknown; created_at: string; updated_at: string | null }>
```

<sub>`PATCH /api/projects/{project_id}/customer_profile_configs/{id}/` · `customer_profile_configs_partial_update`</sub>

## `posthog.customerProfileConfigsUpdate`

```ts
posthog.customerProfileConfigsUpdate(): Promise<{ id: string; scope: "person" | "group_0" | "group_1" | "group_2" | "group_3" | "group_4"; content?: unknown; sidebar?: unknown; created_at: string; updated_at: string | null }>
```

<sub>`PUT /api/projects/{project_id}/customer_profile_configs/{id}/` · `customer_profile_configs_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
