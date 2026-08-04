# Comments

10 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.commentsList`

```ts
posthog.commentsList(): Promise<{ next?: string | null; previous?: string | null; results: ({ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "...>
```

<sub>`GET /api/projects/{project_id}/comments/` · `comments_list`</sub>

## `posthog.commentsCreate`

```ts
posthog.commentsCreate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; deleted?: boolean | null; ...>
```

<sub>`POST /api/projects/{project_id}/comments/` · `comments_create`</sub>

## `posthog.commentsDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.commentsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/comments/{id}/` · `comments_destroy`</sub>

## `posthog.commentsRetrieve`

```ts
posthog.commentsRetrieve(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; deleted?: boolean | null; ...>
```

<sub>`GET /api/projects/{project_id}/comments/{id}/` · `comments_retrieve`</sub>

## `posthog.commentsPartialUpdate`

```ts
posthog.commentsPartialUpdate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; deleted?: boolean | null; ...>
```

<sub>`PATCH /api/projects/{project_id}/comments/{id}/` · `comments_partial_update`</sub>

## `posthog.commentsUpdate`

```ts
posthog.commentsUpdate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; deleted?: boolean | null; ...>
```

<sub>`PUT /api/projects/{project_id}/comments/{id}/` · `comments_update`</sub>

## `posthog.commentsCompleteCreate`

Mark a task-comment as complete. Sets completed_at and completed_by. 400 if the comment is not a task or is already complete.

```ts
posthog.commentsCompleteCreate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; deleted?: boolean | null; ...>
```

<sub>`POST /api/projects/{project_id}/comments/{id}/complete/` · `comments_complete_create`</sub>

## `posthog.commentsReopenCreate`

Reopen a completed task-comment. Clears completed_at and completed_by. 400 if the comment is not a task or is already open.

```ts
posthog.commentsReopenCreate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; deleted?: boolean | null; ...>
```

<sub>`POST /api/projects/{project_id}/comments/{id}/reopen/` · `comments_reopen_create`</sub>

## `posthog.commentsThreadRetrieve`

```ts
posthog.commentsThreadRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/comments/{id}/thread/` · `comments_thread_retrieve`</sub>

## `posthog.commentsCountRetrieve`

```ts
posthog.commentsCountRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/comments/count/` · `comments_count_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
