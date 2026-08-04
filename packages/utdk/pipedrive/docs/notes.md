# Notes

10 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getNotes`

Get all notes

```ts
pipedrive.getNotes(input: {
  /** The ID of the user whose notes to fetch. If omitted, notes by all users will be returned. */
  user_id?: number;
  /** The ID of the lead which notes to fetch. If omitted, notes about all leads will be returned. */
  lead_id?: string;
  /** The ID of the deal which notes to fetch. If omitted, notes about all deals will be returned. */
  deal_id?: number;
  /** The ID of the person whose notes to fetch. If omitted, notes about all persons will be returned. */
  person_id?: number;
  /** The ID of the organization which notes to fetch. If omitted, notes about all organizations will be returned. */
  org_id?: number;
  /** The ID of the project which notes to fetch. If omitted, notes about all projects will be returned. */
  project_id?: number;
  /** The ID of the task which notes to fetch. If omitted, notes about all tasks will be returned. */
  task_id?: number;
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
  /** The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `content`, `add_time`, `update_time`. */
  sort?: string;
  /** The date in format of YYYY-MM-DD from which notes to fetch */
  start_date?: string;
  /** The date in format of YYYY-MM-DD until which notes to fetch to */
  end_date?: string;
  /** If set, only notes with an `update_time` later than or equal to this time are returned. In RFC3339 format, e.g. 2025-01-01T10:20:00Z. */
  updated_since?: string;
  /** If set, the results are filtered by note to lead pinning state */
  pinned_to_lead_flag?: 0 | 1;
  /** If set, the results are filtered by note to deal pinning state */
  pinned_to_deal_flag?: 0 | 1;
  /** If set, the results are filtered by note to organization pinning state */
  pinned_to_organization_flag?: 0 | 1;
  /** If set, the results are filtered by note to person pinning state */
  pinned_to_person_flag?: 0 | 1;
  /** If set, the results are filtered by note to project pinning state */
  pinned_to_project_flag?: 0 | 1;
  /** If set, the results are filtered by note to task pinning state */
  pinned_to_task_flag?: 0 | 1;
}): Promise<{ success?: boolean; data?: ({ id?: number; active_flag?: boolean; add_time?: string; content?: string; deal?: { title?: string }; lead_id?: string; deal_id?: number; last_update_user_id?: number; org_id?: number; organization?: { name?: string }; person?: { name?: string }; person_id?: number; project_id?: number; project?: { title?: string }; task_id?: number; task?: { title?: string }; pinned_...>
```

<sub>`GET /notes` · `getNotes`</sub>

## `pipedrive.addNote`

Add a note

```ts
pipedrive.addNote(input: {
  /** The content of the note in HTML format. Subject to sanitization on the back-end. */
  content: string;
  /** The ID of the lead the note will be attached to. This property is required unless one of (`deal_id/person_id/org_id/project_id/task_id`) is specified. */
  lead_id?: string;
  /** The ID of the deal the note will be attached to. This property is required unless one of (`lead_id/person_id/org_id/project_id/task_id`) is specified. */
  deal_id?: number;
  /** The ID of the person this note will be attached to. This property is required unless one of (`deal_id/lead_id/org_id/project_id/task_id`) is specified. */
  person_id?: number;
  /** The ID of the organization this note will be attached to. This property is required unless one of (`deal_id/lead_id/person_id/project_id/task_id`) is specified. */
  org_id?: number;
  /** The ID of the project the note will be attached to. This property is required unless one of (`deal_id/lead_id/person_id/org_id/task_id`) is specified. */
  project_id?: number;
  /** The ID of the task the note will be attached to. This property is required unless one of (`deal_id/lead_id/person_id/org_id/project_id`) is specified. */
  task_id?: number;
  /** The ID of the user who will be marked as the author of the note. Only an admin can change the author. */
  user_id?: number;
  /** The optional creation date & time of the note in UTC. Can be set in the past or in the future. Format: YYYY-MM-DD HH:MM:SS */
  add_time?: string;
  /** If set, the results are filtered by note to lead pinning state (`lead_id` is also required) */
  pinned_to_lead_flag?: 0 | 1;
  /** If set, the results are filtered by note to deal pinning state (`deal_id` is also required) */
  pinned_to_deal_flag?: 0 | 1;
  /** If set, the results are filtered by note to organization pinning state (`org_id` is also required) */
  pinned_to_organization_flag?: 0 | 1;
  /** If set, the results are filtered by note to person pinning state (`person_id` is also required) */
  pinned_to_person_flag?: 0 | 1;
  /** If set, the results are filtered by note to project pinning state (`project_id` is also required) */
  pinned_to_project_flag?: 0 | 1;
  /** If set, the results are filtered by note to task pinning state (`task_id` is also required) */
  pinned_to_task_flag?: 0 | 1;
  [key: string]: unknown;
}): Promise<{ success?: boolean; data?: { id?: number; active_flag?: boolean; add_time?: string; content?: string; deal?: { title?: string }; lead_id?: string; deal_id?: number; last_update_user_id?: number; org_id?: number; organization?: { name?: string }; person?: { name?: string }; person_id?: number; project_id?: number; project?: { title?: string }; task_id?: number; task?: { title?: string }; pinned_t...>
```

<sub>`POST /notes` · `addNote`</sub>

## `pipedrive.deleteNote`

Delete a note

```ts
pipedrive.deleteNote(input: {
  /** The ID of the note */
  id: number;
}): Promise<{ success?: boolean; data?: boolean }>
```

<sub>`DELETE /notes/{id}` · `deleteNote`</sub>

## `pipedrive.getNote`

Get one note

```ts
pipedrive.getNote(input: {
  /** The ID of the note */
  id: number;
}): Promise<{ success?: boolean; data?: { id?: number; active_flag?: boolean; add_time?: string; content?: string; deal?: { title?: string }; lead_id?: string; deal_id?: number; last_update_user_id?: number; org_id?: number; organization?: { name?: string }; person?: { name?: string }; person_id?: number; project_id?: number; project?: { title?: string }; task_id?: number; task?: { title?: string }; pinned_t...>
```

<sub>`GET /notes/{id}` · `getNote`</sub>

## `pipedrive.updateNote`

Update a note

```ts
pipedrive.updateNote(input: {
  /** The content of the note in HTML format. Subject to sanitization on the back-end. */
  content?: string;
  /** The ID of the lead the note will be attached to */
  lead_id?: string;
  /** The ID of the deal the note will be attached to */
  deal_id?: number;
  /** The ID of the person the note will be attached to */
  person_id?: number;
  /** The ID of the organization the note will be attached to */
  org_id?: number;
  /** The ID of the project the note will be attached to */
  project_id?: number;
  /** The ID of the task the note will be attached to */
  task_id?: number;
  /** The ID of the user who will be marked as the author of the note. Only an admin can change the author. */
  user_id?: number;
  /** The optional creation date & time of the note in UTC. Can be set in the past or in the future. Format: YYYY-MM-DD HH:MM:SS */
  add_time?: string;
  /** If set, the results are filtered by note to lead pinning state (`lead_id` is also required) */
  pinned_to_lead_flag?: 0 | 1;
  /** If set, the results are filtered by note to deal pinning state (`deal_id` is also required) */
  pinned_to_deal_flag?: 0 | 1;
  /** If set, the results are filtered by note to organization pinning state (`org_id` is also required) */
  pinned_to_organization_flag?: 0 | 1;
  /** If set, the results are filtered by note to person pinning state (`person_id` is also required) */
  pinned_to_person_flag?: 0 | 1;
  /** If set, the results are filtered by note to project pinning state (`project_id` is also required) */
  pinned_to_project_flag?: 0 | 1;
  /** If set, the results are filtered by note to task pinning state (`task_id` is also required) */
  pinned_to_task_flag?: 0 | 1;
  /** The ID of the note */
  id: number;
}): Promise<{ success?: boolean; data?: { id?: number; active_flag?: boolean; add_time?: string; content?: string; deal?: { title?: string }; lead_id?: string; deal_id?: number; last_update_user_id?: number; org_id?: number; organization?: { name?: string }; person?: { name?: string }; person_id?: number; project_id?: number; project?: { title?: string }; task_id?: number; task?: { title?: string }; pinned_t...>
```

<sub>`PUT /notes/{id}` · `updateNote`</sub>

## `pipedrive.getNoteComments`

Get all comments for a note

```ts
pipedrive.getNoteComments(input: {
  /** The ID of the note */
  id: number;
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
}): Promise<{ success?: boolean; data?: ({ uuid?: string; active_flag?: boolean; add_time?: string; update_time?: string; content?: string; object_id?: string; object_type?: string; user_id?: number; updater_id?: number; company_id?: number })[]; additional_data?: { pagination?: { next_start?: number; start?: number; limit?: number; more_items_in_collection?: boolean } } }>
```

<sub>`GET /notes/{id}/comments` · `getNoteComments`</sub>

## `pipedrive.addNoteComment`

Add a comment to a note

```ts
pipedrive.addNoteComment(input: {
  /** The content of the comment in HTML format. Subject to sanitization on the back-end. */
  content: string;
  /** The ID of the note */
  id: number;
}): Promise<{ success?: boolean; data?: { uuid?: string; active_flag?: boolean; add_time?: string; update_time?: string; content?: string; object_id?: string; object_type?: string; user_id?: number; updater_id?: number; company_id?: number } }>
```

<sub>`POST /notes/{id}/comments` · `addNoteComment`</sub>

## `pipedrive.deleteComment`

Delete a comment related to a note

```ts
pipedrive.deleteComment(input: {
  /** The ID of the note */
  id: number;
  /** The ID of the comment */
  commentId: string;
}): Promise<{ success?: boolean; data?: boolean }>
```

<sub>`DELETE /notes/{id}/comments/{commentId}` · `deleteComment`</sub>

## `pipedrive.getComment`

Get one comment

```ts
pipedrive.getComment(input: {
  /** The ID of the note */
  id: number;
  /** The ID of the comment */
  commentId: string;
}): Promise<{ success?: boolean; data?: { uuid?: string; active_flag?: boolean; add_time?: string; update_time?: string; content?: string; object_id?: string; object_type?: string; user_id?: number; updater_id?: number; company_id?: number } }>
```

<sub>`GET /notes/{id}/comments/{commentId}` · `getComment`</sub>

## `pipedrive.updateCommentForNote`

Update a comment related to a note

```ts
pipedrive.updateCommentForNote(input: {
  /** The content of the comment in HTML format. Subject to sanitization on the back-end. */
  content: string;
  /** The ID of the note */
  id: number;
  /** The ID of the comment */
  commentId: string;
}): Promise<{ success?: boolean; data?: { uuid?: string; active_flag?: boolean; add_time?: string; update_time?: string; content?: string; object_id?: string; object_type?: string; user_id?: number; updater_id?: number; company_id?: number } }>
```

<sub>`PUT /notes/{id}/comments/{commentId}` · `updateCommentForNote`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
