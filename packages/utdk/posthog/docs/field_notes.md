# Field Notes

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.fieldNotesList`

Create, read, update, and resolve toolbar field notes — UI feedback a user points at on their own site, surfaced to coding agents over MCP.

```ts
posthog.fieldNotesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; comment: string; field_note_status?: "pending" | "acknowledged" | "resolved" | "dismissed"; resolution?: string | null; url: string; host: string; pathname?: string | null; selector: string; element_text?: string | null; element_chain?: string | null; element_context?: { [key: string]: unknown }; viewport?: {...>
```

<sub>`GET /api/projects/{project_id}/field_notes/` · `field_notes_list`</sub>

## `posthog.fieldNotesCreate`

Create, read, update, and resolve toolbar field notes — UI feedback a user points at on their own site, surfaced to coding agents over MCP.

```ts
posthog.fieldNotesCreate(): Promise<{ id: string; comment: string; field_note_status?: "pending" | "acknowledged" | "resolved" | "dismissed"; resolution?: string | null; url: string; host: string; pathname?: string | null; selector: string; element_text?: string | null; element_chain?: string | null; element_context?: { [key: string]: unknown }; viewport?: { [key: string]: unknown } | null; screenshot_url?: string | null; created_a...>
```

<sub>`POST /api/projects/{project_id}/field_notes/` · `field_notes_create`</sub>

## `posthog.fieldNotesDestroy`

Create, read, update, and resolve toolbar field notes — UI feedback a user points at on their own site, surfaced to coding agents over MCP.

```ts
posthog.fieldNotesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/field_notes/{id}/` · `field_notes_destroy`</sub>

## `posthog.fieldNotesRetrieve`

Create, read, update, and resolve toolbar field notes — UI feedback a user points at on their own site, surfaced to coding agents over MCP.

```ts
posthog.fieldNotesRetrieve(): Promise<{ id: string; comment: string; field_note_status?: "pending" | "acknowledged" | "resolved" | "dismissed"; resolution?: string | null; url: string; host: string; pathname?: string | null; selector: string; element_text?: string | null; element_chain?: string | null; element_context?: { [key: string]: unknown }; viewport?: { [key: string]: unknown } | null; screenshot_url?: string | null; created_a...>
```

<sub>`GET /api/projects/{project_id}/field_notes/{id}/` · `field_notes_retrieve`</sub>

## `posthog.fieldNotesPartialUpdate`

Create, read, update, and resolve toolbar field notes — UI feedback a user points at on their own site, surfaced to coding agents over MCP.

```ts
posthog.fieldNotesPartialUpdate(): Promise<{ id: string; comment: string; field_note_status?: "pending" | "acknowledged" | "resolved" | "dismissed"; resolution?: string | null; url: string; host: string; pathname?: string | null; selector: string; element_text?: string | null; element_chain?: string | null; element_context?: { [key: string]: unknown }; viewport?: { [key: string]: unknown } | null; screenshot_url?: string | null; created_a...>
```

<sub>`PATCH /api/projects/{project_id}/field_notes/{id}/` · `field_notes_partial_update`</sub>

## `posthog.fieldNotesUpdate`

Create, read, update, and resolve toolbar field notes — UI feedback a user points at on their own site, surfaced to coding agents over MCP.

```ts
posthog.fieldNotesUpdate(): Promise<{ id: string; comment: string; field_note_status?: "pending" | "acknowledged" | "resolved" | "dismissed"; resolution?: string | null; url: string; host: string; pathname?: string | null; selector: string; element_text?: string | null; element_chain?: string | null; element_context?: { [key: string]: unknown }; viewport?: { [key: string]: unknown } | null; screenshot_url?: string | null; created_a...>
```

<sub>`PUT /api/projects/{project_id}/field_notes/{id}/` · `field_notes_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
