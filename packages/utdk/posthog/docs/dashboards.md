# Dashboards

30 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.dashboardsList`

```ts
posthog.dashboardsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; name: string | null; description: string; pinned: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organizati...>
```

<sub>`GET /api/projects/{project_id}/dashboards/` · `dashboards_list`</sub>

## `posthog.dashboardsCreate`

```ts
posthog.dashboardsCreate(): Promise<{ id: number; name?: string | null; description?: string; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "ma...>
```

<sub>`POST /api/projects/{project_id}/dashboards/` · `dashboards_create`</sub>

## `posthog.dashboardsCollaboratorsList`

```ts
posthog.dashboardsCollaboratorsList(): Promise<({ id: string; dashboard_id: number; user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; level: 21...>
```

<sub>`GET /api/projects/{project_id}/dashboards/{dashboard_id}/collaborators/` · `dashboards_collaborators_list`</sub>

## `posthog.dashboardsCollaboratorsCreate`

```ts
posthog.dashboardsCollaboratorsCreate(): Promise<{ id: string; dashboard_id: number; user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; level: 21 ...>
```

<sub>`POST /api/projects/{project_id}/dashboards/{dashboard_id}/collaborators/` · `dashboards_collaborators_create`</sub>

## `posthog.dashboardsCollaboratorsDestroy`

```ts
posthog.dashboardsCollaboratorsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/dashboards/{dashboard_id}/collaborators/{user__uuid}/` · `dashboards_collaborators_destroy`</sub>

## `posthog.dashboardsSharingList`

```ts
posthog.dashboardsSharingList(): Promise<({ created_at: string; enabled?: boolean; access_token: string | null; settings?: unknown; password_required?: boolean; share_passwords: ({ id: number; created_at: string; note?: string | null; created_by_email: string; is_active: boolean })[]; user_access_level: string | null })[]>
```

<sub>`GET /api/projects/{project_id}/dashboards/{dashboard_id}/sharing/` · `dashboards_sharing_list`</sub>

## `posthog.dashboardsSharingPasswordsCreate`

Create a new password for the sharing configuration.

```ts
posthog.dashboardsSharingPasswordsCreate(): Promise<{ created_at: string; enabled?: boolean; access_token: string | null; settings?: unknown; password_required?: boolean; share_passwords: ({ id: number; created_at: string; note?: string | null; created_by_email: string; is_active: boolean })[]; user_access_level: string | null }>
```

<sub>`POST /api/projects/{project_id}/dashboards/{dashboard_id}/sharing/passwords/` · `dashboards_sharing_passwords_create`</sub>

## `posthog.dashboardsSharingPasswordsDestroy`

Delete a password from the sharing configuration.

```ts
posthog.dashboardsSharingPasswordsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/dashboards/{dashboard_id}/sharing/passwords/{password_id}/` · `dashboards_sharing_passwords_destroy`</sub>

## `posthog.dashboardsSharingRefreshCreate`

```ts
posthog.dashboardsSharingRefreshCreate(): Promise<{ created_at: string; enabled?: boolean; access_token: string | null; settings?: unknown; password_required?: boolean; share_passwords: ({ id: number; created_at: string; note?: string | null; created_by_email: string; is_active: boolean })[]; user_access_level: string | null }>
```

<sub>`POST /api/projects/{project_id}/dashboards/{dashboard_id}/sharing/refresh/` · `dashboards_sharing_refresh_create`</sub>

## `posthog.dashboardsDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.dashboardsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/dashboards/{id}/` · `dashboards_destroy`</sub>

## `posthog.dashboardsRetrieve`

```ts
posthog.dashboardsRetrieve(): Promise<{ id: number; name?: string | null; description?: string; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "ma...>
```

<sub>`GET /api/projects/{project_id}/dashboards/{id}/` · `dashboards_retrieve`</sub>

## `posthog.dashboardsPartialUpdate`

```ts
posthog.dashboardsPartialUpdate(): Promise<{ id: number; name?: string | null; description?: string; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "ma...>
```

<sub>`PATCH /api/projects/{project_id}/dashboards/{id}/` · `dashboards_partial_update`</sub>

## `posthog.dashboardsUpdate`

```ts
posthog.dashboardsUpdate(): Promise<{ id: number; name?: string | null; description?: string; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "ma...>
```

<sub>`PUT /api/projects/{project_id}/dashboards/{id}/` · `dashboards_update`</sub>

## `posthog.dashboardsCopyTileCreate`

Copy an existing dashboard tile to another dashboard (insight, text card, or widget tile).

```ts
posthog.dashboardsCopyTileCreate(): Promise<{ id: number; name?: string | null; description?: string; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "ma...>
```

<sub>`POST /api/projects/{project_id}/dashboards/{id}/copy_tile/` · `dashboards_copy_tile_create`</sub>

## `posthog.dashboardsCreateTextTileCreate`

Add a markdown text tile to a dashboard. Text tiles render as markdown blocks on the dashboard — useful as section headings, dividers, or annotations between insight tiles to give the dashboard structure.

```ts
posthog.dashboardsCreateTextTileCreate(): Promise<{ id?: number; insight: { id: number; short_id: string; name?: string | null; derived_name?: string | null; query?: { embedded?: boolean | null; full?: boolean | null; hidePersonsModal?: boolean | null; hideTooltipOnScroll?: boolean | null; kind?: string; showCorrelationTable?: boolean | null; showFilters?: boolean | null; showHeader?: boolean | null; showLastComputation?: boolean | null; showLas...>
```

<sub>`POST /api/projects/{project_id}/dashboards/{id}/create_text_tile/` · `dashboards_create_text_tile_create`</sub>

## `posthog.dashboardsDeleteTile`

Soft-delete a single tile from a dashboard. Works for text, insight, and button tiles. The underlying Insight, Text, or ButtonTile object is preserved — only the dashboard tile is hidden. To delete the entire dashboard, use the dashboard delete endpoint instead.

```ts
posthog.dashboardsDeleteTile(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/dashboards/{id}/delete_tile/` · `dashboards_delete_tile`</sub>

## `posthog.dashboardsMoveTilePartialUpdate`

```ts
posthog.dashboardsMoveTilePartialUpdate(): Promise<{ id: number; name?: string | null; description?: string; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "ma...>
```

<sub>`PATCH /api/projects/{project_id}/dashboards/{id}/move_tile/` · `dashboards_move_tile_partial_update`</sub>

## `posthog.dashboardsMoveTileCreate`

```ts
posthog.dashboardsMoveTileCreate(): Promise<{ id: number; name?: string | null; description?: string; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "ma...>
```

<sub>`POST /api/projects/{project_id}/dashboards/{id}/move_tile/` · `dashboards_move_tile_create`</sub>

## `posthog.dashboardsReorderTilesCreate`

```ts
posthog.dashboardsReorderTilesCreate(): Promise<{ id: number; name?: string | null; description?: string; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "ma...>
```

<sub>`POST /api/projects/{project_id}/dashboards/{id}/reorder_tiles/` · `dashboards_reorder_tiles_create`</sub>

## `posthog.dashboardsRunInsightsRetrieve`

Run all insights on a dashboard and return their results.

```ts
posthog.dashboardsRunInsightsRetrieve(): Promise<{ results: ({ id?: number; insight: { id: number; short_id: string; name: string | null; derived_name: string | null; result: unknown } })[] }>
```

<sub>`GET /api/projects/{project_id}/dashboards/{id}/run_insights/` · `dashboards_run_insights_retrieve`</sub>

## `posthog.dashboardsRunWidgetsRetrieve`

```ts
posthog.dashboardsRunWidgetsRetrieve(): Promise<{ results: ({ tile_id: number; widget_type: string | null; result: unknown; error: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/dashboards/{id}/run_widgets/` · `dashboards_run_widgets_retrieve`</sub>

## `posthog.dashboardsStreamTilesRetrieve`

Stream dashboard metadata and tiles via Server-Sent Events. Sends metadata first, then tiles as they are rendered.

```ts
posthog.dashboardsStreamTilesRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/dashboards/{id}/stream_tiles/` · `dashboards_stream_tiles_retrieve`</sub>

## `posthog.dashboardsSubscribeNudgeCreate`

Send the requesting user an in-app notification suggesting they subscribe to this dashboard. Deduplicated server-side: at most one notification per user and dashboard, ever, so repeat calls return 200 with created=false.

```ts
posthog.dashboardsSubscribeNudgeCreate(): Promise<{ created: boolean }>
```

<sub>`POST /api/projects/{project_id}/dashboards/{id}/subscribe_nudge/` · `dashboards_subscribe_nudge_create`</sub>

## `posthog.dashboardsUpdateTextTileCreate`

Update the markdown body, layout, or color of an existing text tile on a dashboard.

```ts
posthog.dashboardsUpdateTextTileCreate(): Promise<{ id?: number; insight: { id: number; short_id: string; name?: string | null; derived_name?: string | null; query?: { embedded?: boolean | null; full?: boolean | null; hidePersonsModal?: boolean | null; hideTooltipOnScroll?: boolean | null; kind?: string; showCorrelationTable?: boolean | null; showFilters?: boolean | null; showHeader?: boolean | null; showLastComputation?: boolean | null; showLas...>
```

<sub>`POST /api/projects/{project_id}/dashboards/{id}/update_text_tile/` · `dashboards_update_text_tile_create`</sub>

## `posthog.dashboardsUpdateWidgetsBatch`

Update the settings of existing widgets in place, atomically — config, name, and description. Each entry targets a widget by its tile_id and reuses the same write path as the dashboard PATCH endpoint. The widget_type is immutable. This edits widget settings only (config, name, description); tile placement (layouts, show_description) is a dashboard concern — use the dashboard PATCH endpoint or reorder_tiles for that. All updates succeed or fail together. To add new widgets, use the widgets/batch POST endpoint; to remove one, use delete_tile.

```ts
posthog.dashboardsUpdateWidgetsBatch(): Promise<{ tiles: ({ id?: number; insight: { id: number; short_id: string; name?: string | null; derived_name?: string | null; query?: { embedded?: boolean | null; full?: boolean | null; hidePersonsModal?: boolean | null; hideTooltipOnScroll?: boolean | null; kind?: string; showCorrelationTable?: boolean | null; showFilters?: boolean | null; showHeader?: boolean | null; showLastComputation?: boolean | nul...>
```

<sub>`PATCH /api/projects/{project_id}/dashboards/{id}/widgets/batch_update/` · `dashboards_update_widgets_batch`</sub>

## `posthog.dashboardsWidgetsBatchCreate`

Add multiple widget tiles to a dashboard in one atomic request.

```ts
posthog.dashboardsWidgetsBatchCreate(): Promise<{ tiles: ({ id?: number; insight: { id: number; short_id: string; name?: string | null; derived_name?: string | null; query?: { embedded?: boolean | null; full?: boolean | null; hidePersonsModal?: boolean | null; hideTooltipOnScroll?: boolean | null; kind?: string; showCorrelationTable?: boolean | null; showFilters?: boolean | null; showHeader?: boolean | null; showLastComputation?: boolean | nul...>
```

<sub>`POST /api/projects/{project_id}/dashboards/{id}/widgets/batch/` · `dashboards_widgets_batch_create`</sub>

## `posthog.dashboardsBulkUpdateTagsCreate`

Bulk update tags on multiple objects. PAT access: this action has no ``required_scopes=`` on the decorator — inheriting viewsets must add ``"bulk_update_tags"`` to their ``scope_object_write_actions`` list to accept personal API keys. Without that opt-in, ``APIScopePermission`` rejects PAT requests with "This action does not support personal API key access". Done per-viewset so granting ``<scope>:write`` for one resource doesn't leak access to sibling resources that share this mixin. Accepts: - {"ids": [...], "action": "add"|"remove"|"set", "tags": ["tag1", "tag2"]} Actions: - "add": Add tags to existing tags on each object - "remove": Remove specific tags from each object - "set": Replace all tags on each object with the provided list

```ts
posthog.dashboardsBulkUpdateTagsCreate(): Promise<{ updated: ({ id: number; tags: (string)[] })[]; skipped: ({ id: number; reason: string })[] }>
```

<sub>`POST /api/projects/{project_id}/dashboards/bulk_update_tags/` · `dashboards_bulk_update_tags_create`</sub>

## `posthog.dashboardsCreateFromTemplateJsonCreate`

```ts
posthog.dashboardsCreateFromTemplateJsonCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/dashboards/create_from_template_json/` · `dashboards_create_from_template_json_create`</sub>

## `posthog.dashboardsCreateUnlistedDashboardCreate`

Creates an unlisted dashboard from template by tag. Enforces uniqueness (one per tag per team). Returns 409 if unlisted dashboard with this tag already exists.

```ts
posthog.dashboardsCreateUnlistedDashboardCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/dashboards/create_unlisted_dashboard/` · `dashboards_create_unlisted_dashboard_create`</sub>

## `posthog.dashboardsWidgetCatalogRetrieve`

List registered dashboard widget types and per-type config_schema documentation for agents.

```ts
posthog.dashboardsWidgetCatalogRetrieve(): Promise<{ results: ({ widget_type: "activity_events_list"; group_id: string; group_label: string; label: string; description: string; config_schema: { dateRange?: { date_from?: "-1M" | "-30M" | "-1h" | "-3h" | "-24h" | "-7d" | "-14d" | "-30d" | "-90d" | null } | null; filterTestAccounts?: boolean | null; widgetFilters?: { [key: string]: { filterId: string; propertyName: string; optionId: string; operator...>
```

<sub>`GET /api/projects/{project_id}/dashboards/widget_catalog/` · `dashboards_widget_catalog_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
