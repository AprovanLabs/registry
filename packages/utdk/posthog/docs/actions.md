# Actions

8 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.actionsList`

```ts
posthog.actionsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; name?: string | null; description?: string; tags?: (unknown)[]; post_to_slack?: boolean; slack_message_format?: string; steps?: ({ event?: string | null; properties?: unknown[] | null; selector?: string | null; selector_regex: string | null; tag_name?: string | null; text?: string | null; text_matching?: "con...>
```

<sub>`GET /api/projects/{project_id}/actions/` · `actions_list`</sub>

## `posthog.actionsCreate`

```ts
posthog.actionsCreate(): Promise<{ id: number; name?: string | null; description?: string; tags?: (unknown)[]; post_to_slack?: boolean; slack_message_format?: string; steps?: ({ event?: string | null; properties?: unknown[] | null; selector?: string | null; selector_regex: string | null; tag_name?: string | null; text?: string | null; text_matching?: "contains" | "regex" | "exact" | null; href?: string | null; href_matching?: "c...>
```

<sub>`POST /api/projects/{project_id}/actions/` · `actions_create`</sub>

## `posthog.actionsDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.actionsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/actions/{id}/` · `actions_destroy`</sub>

## `posthog.actionsRetrieve`

```ts
posthog.actionsRetrieve(): Promise<{ id: number; name?: string | null; description?: string; tags?: (unknown)[]; post_to_slack?: boolean; slack_message_format?: string; steps?: ({ event?: string | null; properties?: unknown[] | null; selector?: string | null; selector_regex: string | null; tag_name?: string | null; text?: string | null; text_matching?: "contains" | "regex" | "exact" | null; href?: string | null; href_matching?: "c...>
```

<sub>`GET /api/projects/{project_id}/actions/{id}/` · `actions_retrieve`</sub>

## `posthog.actionsPartialUpdate`

```ts
posthog.actionsPartialUpdate(): Promise<{ id: number; name?: string | null; description?: string; tags?: (unknown)[]; post_to_slack?: boolean; slack_message_format?: string; steps?: ({ event?: string | null; properties?: unknown[] | null; selector?: string | null; selector_regex: string | null; tag_name?: string | null; text?: string | null; text_matching?: "contains" | "regex" | "exact" | null; href?: string | null; href_matching?: "c...>
```

<sub>`PATCH /api/projects/{project_id}/actions/{id}/` · `actions_partial_update`</sub>

## `posthog.actionsUpdate`

```ts
posthog.actionsUpdate(): Promise<{ id: number; name?: string | null; description?: string; tags?: (unknown)[]; post_to_slack?: boolean; slack_message_format?: string; steps?: ({ event?: string | null; properties?: unknown[] | null; selector?: string | null; selector_regex: string | null; tag_name?: string | null; text?: string | null; text_matching?: "contains" | "regex" | "exact" | null; href?: string | null; href_matching?: "c...>
```

<sub>`PUT /api/projects/{project_id}/actions/{id}/` · `actions_update`</sub>

## `posthog.actionsReferencesList`

```ts
posthog.actionsReferencesList(): Promise<({ type: string; id: string; name: string; url: string; created_at: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "s...>
```

<sub>`GET /api/projects/{project_id}/actions/{id}/references/` · `actions_references_list`</sub>

## `posthog.actionsBulkUpdateTagsCreate`

Bulk update tags on multiple objects. PAT access: this action has no ``required_scopes=`` on the decorator — inheriting viewsets must add ``"bulk_update_tags"`` to their ``scope_object_write_actions`` list to accept personal API keys. Without that opt-in, ``APIScopePermission`` rejects PAT requests with "This action does not support personal API key access". Done per-viewset so granting ``<scope>:write`` for one resource doesn't leak access to sibling resources that share this mixin. Accepts: - {"ids": [...], "action": "add"|"remove"|"set", "tags": ["tag1", "tag2"]} Actions: - "add": Add tags to existing tags on each object - "remove": Remove specific tags from each object - "set": Replace all tags on each object with the provided list

```ts
posthog.actionsBulkUpdateTagsCreate(): Promise<{ updated: ({ id: number; tags: (string)[] })[]; skipped: ({ id: number; reason: string })[] }>
```

<sub>`POST /api/projects/{project_id}/actions/bulk_update_tags/` · `actions_bulk_update_tags_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
