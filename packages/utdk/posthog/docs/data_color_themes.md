# Data Color Themes

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.dataColorThemesList`

```ts
posthog.dataColorThemesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; name: string; colors?: unknown; is_global: boolean; created_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organizati...>
```

<sub>`GET /api/projects/{project_id}/data_color_themes/` · `data_color_themes_list`</sub>

## `posthog.dataColorThemesCreate`

```ts
posthog.dataColorThemesCreate(): Promise<{ id: number; name: string; colors?: unknown; is_global: boolean; created_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marke...>
```

<sub>`POST /api/projects/{project_id}/data_color_themes/` · `data_color_themes_create`</sub>

## `posthog.dataColorThemesDestroy`

```ts
posthog.dataColorThemesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/data_color_themes/{id}/` · `data_color_themes_destroy`</sub>

## `posthog.dataColorThemesRetrieve`

```ts
posthog.dataColorThemesRetrieve(): Promise<{ id: number; name: string; colors?: unknown; is_global: boolean; created_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marke...>
```

<sub>`GET /api/projects/{project_id}/data_color_themes/{id}/` · `data_color_themes_retrieve`</sub>

## `posthog.dataColorThemesPartialUpdate`

```ts
posthog.dataColorThemesPartialUpdate(): Promise<{ id: number; name: string; colors?: unknown; is_global: boolean; created_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marke...>
```

<sub>`PATCH /api/projects/{project_id}/data_color_themes/{id}/` · `data_color_themes_partial_update`</sub>

## `posthog.dataColorThemesUpdate`

```ts
posthog.dataColorThemesUpdate(): Promise<{ id: number; name: string; colors?: unknown; is_global: boolean; created_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marke...>
```

<sub>`PUT /api/projects/{project_id}/data_color_themes/{id}/` · `data_color_themes_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
