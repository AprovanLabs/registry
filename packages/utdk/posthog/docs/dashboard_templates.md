# Dashboard Templates

8 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.dashboardTemplatesList`

```ts
posthog.dashboardTemplatesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; template_name?: string | null; dashboard_description?: string | null; dashboard_filters?: unknown; tags?: unknown[] | null; tiles?: unknown; variables?: unknown; deleted?: boolean | null; created_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_...>
```

<sub>`GET /api/projects/{project_id}/dashboard_templates/` · `dashboard_templates_list`</sub>

## `posthog.dashboardTemplatesCreate`

```ts
posthog.dashboardTemplatesCreate(): Promise<{ id: string; template_name?: string | null; dashboard_description?: string | null; dashboard_filters?: unknown; tags?: unknown[] | null; tiles?: unknown; variables?: unknown; deleted?: boolean | null; created_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_...>
```

<sub>`POST /api/projects/{project_id}/dashboard_templates/` · `dashboard_templates_create`</sub>

## `posthog.dashboardTemplatesDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.dashboardTemplatesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/dashboard_templates/{id}/` · `dashboard_templates_destroy`</sub>

## `posthog.dashboardTemplatesRetrieve`

```ts
posthog.dashboardTemplatesRetrieve(): Promise<{ id: string; template_name?: string | null; dashboard_description?: string | null; dashboard_filters?: unknown; tags?: unknown[] | null; tiles?: unknown; variables?: unknown; deleted?: boolean | null; created_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_...>
```

<sub>`GET /api/projects/{project_id}/dashboard_templates/{id}/` · `dashboard_templates_retrieve`</sub>

## `posthog.dashboardTemplatesPartialUpdate`

```ts
posthog.dashboardTemplatesPartialUpdate(): Promise<{ id: string; template_name?: string | null; dashboard_description?: string | null; dashboard_filters?: unknown; tags?: unknown[] | null; tiles?: unknown; variables?: unknown; deleted?: boolean | null; created_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_...>
```

<sub>`PATCH /api/projects/{project_id}/dashboard_templates/{id}/` · `dashboard_templates_partial_update`</sub>

## `posthog.dashboardTemplatesUpdate`

```ts
posthog.dashboardTemplatesUpdate(): Promise<{ id: string; template_name?: string | null; dashboard_description?: string | null; dashboard_filters?: unknown; tags?: unknown[] | null; tiles?: unknown; variables?: unknown; deleted?: boolean | null; created_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_...>
```

<sub>`PUT /api/projects/{project_id}/dashboard_templates/{id}/` · `dashboard_templates_update`</sub>

## `posthog.dashboardTemplatesCopyBetweenProjectsCreate`

Copy a team template to this project

```ts
posthog.dashboardTemplatesCopyBetweenProjectsCreate(): Promise<{ id: string; template_name?: string | null; dashboard_description?: string | null; dashboard_filters?: unknown; tags?: unknown[] | null; tiles?: unknown; variables?: unknown; deleted?: boolean | null; created_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_...>
```

<sub>`POST /api/projects/{project_id}/dashboard_templates/copy_between_projects/` · `dashboard_templates_copy_between_projects_create`</sub>

## `posthog.dashboardTemplatesJsonSchemaRetrieve`

```ts
posthog.dashboardTemplatesJsonSchemaRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/dashboard_templates/json_schema/` · `dashboard_templates_json_schema_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
