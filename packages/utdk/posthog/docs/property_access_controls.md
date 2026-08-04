# Property Access Controls

3 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.propertyAccessControlsDestroy`

Delete a property access control rule. The rule is identified by `property_definition_id` plus an optional `organization_member` or `role` query parameter. Omitting both targets deletes the default rule.

```ts
posthog.propertyAccessControlsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/property_access_controls/` · `property_access_controls_destroy`</sub>

## `posthog.propertyAccessControlsRetrieve`

Get all property access control rules for a property definition.

```ts
posthog.propertyAccessControlsRetrieve(): Promise<{ access_controls: ({ id: string; access_level: "read_write" | "read" | "none"; organization_member: string | null; role: string | null; created_by: number | null; created_at: string; updated_at: string })[]; available_access_levels: (string)[]; default_access_level: string }>
```

<sub>`GET /api/projects/{project_id}/property_access_controls/` · `property_access_controls_retrieve`</sub>

## `posthog.propertyAccessControlsCreate`

Create or update a property access control rule.

```ts
posthog.propertyAccessControlsCreate(): Promise<{ id: string; access_level: "read_write" | "read" | "none"; organization_member: string | null; role: string | null; created_by: number | null; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/property_access_controls/` · `property_access_controls_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
