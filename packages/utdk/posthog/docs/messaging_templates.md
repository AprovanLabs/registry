# Messaging Templates

7 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.messagingTemplatesList`

```ts
posthog.messagingTemplatesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description?: string; created_at: string; updated_at: string; content?: { templating?: "liquid"; email?: { subject?: string; text?: string; html?: string; design?: { counters?: { [key: string]: unknown }; schemaVersion: number; body: { id?: string; rows: ({ [key: string]: unknown })[]; headers?:...>
```

<sub>`GET /api/projects/{project_id}/messaging_templates/` · `messaging_templates_list`</sub>

## `posthog.messagingTemplatesCreate`

```ts
posthog.messagingTemplatesCreate(): Promise<{ id: string; name: string; description?: string; created_at: string; updated_at: string; content?: { templating?: "liquid"; email?: { subject?: string; text?: string; html?: string; design?: { counters?: { [key: string]: unknown }; schemaVersion: number; body: { id?: string; rows: ({ [key: string]: unknown })[]; headers?: ({ [key: string]: unknown })[]; footers?: ({ [key: string]: unknown })[]; ...>
```

<sub>`POST /api/projects/{project_id}/messaging_templates/` · `messaging_templates_create`</sub>

## `posthog.messagingTemplatesDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.messagingTemplatesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/messaging_templates/{id}/` · `messaging_templates_destroy`</sub>

## `posthog.messagingTemplatesRetrieve`

```ts
posthog.messagingTemplatesRetrieve(): Promise<{ id: string; name: string; description?: string; created_at: string; updated_at: string; content?: { templating?: "liquid"; email?: { subject?: string; text?: string; html?: string; design?: { counters?: { [key: string]: unknown }; schemaVersion: number; body: { id?: string; rows: ({ [key: string]: unknown })[]; headers?: ({ [key: string]: unknown })[]; footers?: ({ [key: string]: unknown })[]; ...>
```

<sub>`GET /api/projects/{project_id}/messaging_templates/{id}/` · `messaging_templates_retrieve`</sub>

## `posthog.messagingTemplatesPartialUpdate`

```ts
posthog.messagingTemplatesPartialUpdate(): Promise<{ id: string; name: string; description?: string; created_at: string; updated_at: string; content?: { templating?: "liquid"; email?: { subject?: string; text?: string; html?: string; design?: { counters?: { [key: string]: unknown }; schemaVersion: number; body: { id?: string; rows: ({ [key: string]: unknown })[]; headers?: ({ [key: string]: unknown })[]; footers?: ({ [key: string]: unknown })[]; ...>
```

<sub>`PATCH /api/projects/{project_id}/messaging_templates/{id}/` · `messaging_templates_partial_update`</sub>

## `posthog.messagingTemplatesUpdate`

```ts
posthog.messagingTemplatesUpdate(): Promise<{ id: string; name: string; description?: string; created_at: string; updated_at: string; content?: { templating?: "liquid"; email?: { subject?: string; text?: string; html?: string; design?: { counters?: { [key: string]: unknown }; schemaVersion: number; body: { id?: string; rows: ({ [key: string]: unknown })[]; headers?: ({ [key: string]: unknown })[]; footers?: ({ [key: string]: unknown })[]; ...>
```

<sub>`PUT /api/projects/{project_id}/messaging_templates/{id}/` · `messaging_templates_update`</sub>

## `posthog.messagingTemplatesDesignPartialUpdate`

```ts
posthog.messagingTemplatesDesignPartialUpdate(): Promise<{ id: string; name: string; description?: string; created_at: string; updated_at: string; content?: { templating?: "liquid"; email?: { subject?: string; text?: string; html?: string; design?: { counters?: { [key: string]: unknown }; schemaVersion: number; body: { id?: string; rows: ({ [key: string]: unknown })[]; headers?: ({ [key: string]: unknown })[]; footers?: ({ [key: string]: unknown })[]; ...>
```

<sub>`PATCH /api/projects/{project_id}/messaging_templates/{id}/design/` · `messaging_templates_design_partial_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
