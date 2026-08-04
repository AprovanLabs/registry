# Groups

8 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.groupsList`

List all groups of a specific group type. You must pass ?group_type_index= in the URL. To get a list of valid group types, call /api/:project_id/groups_types/. Uses forward-only keyset pagination via the `cursor` parameter. The `previous` field in the response envelope is always null.

```ts
posthog.groupsList(): Promise<({ group_type_index: number; group_key: string; group_properties?: unknown; created_at: string })[]>
```

<sub>`GET /api/projects/{project_id}/groups/` · `groups_list`</sub>

## `posthog.groupsCreate`

```ts
posthog.groupsCreate(): Promise<{ group_type_index: number; group_key: string; group_properties?: unknown; created_at: string }>
```

<sub>`POST /api/projects/{project_id}/groups/` · `groups_create`</sub>

## `posthog.groupsActivityRetrieve`

```ts
posthog.groupsActivityRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/groups/activity/` · `groups_activity_retrieve`</sub>

## `posthog.groupsDeletePropertyCreate`

```ts
posthog.groupsDeletePropertyCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/groups/delete_property/` · `groups_delete_property_create`</sub>

## `posthog.groupsFindRetrieve`

```ts
posthog.groupsFindRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/groups/find/` · `groups_find_retrieve`</sub>

## `posthog.groupsPropertyValuesRetrieve`

```ts
posthog.groupsPropertyValuesRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/groups/property_values/` · `groups_property_values_retrieve`</sub>

## `posthog.groupsRelatedRetrieve`

```ts
posthog.groupsRelatedRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/groups/related/` · `groups_related_retrieve`</sub>

## `posthog.groupsUpdatePropertyCreate`

```ts
posthog.groupsUpdatePropertyCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/groups/update_property/` · `groups_update_property_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
