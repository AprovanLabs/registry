# User Interviews

7 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.userInterviewsList`

```ts
posthog.userInterviewsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing...>
```

<sub>`GET /api/projects/{project_id}/user_interviews/` · `user_interviews_list`</sub>

## `posthog.userInterviewsCreate`

```ts
posthog.userInterviewsCreate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; created_at: string; interv...>
```

<sub>`POST /api/projects/{project_id}/user_interviews/` · `user_interviews_create`</sub>

## `posthog.userInterviewsDestroy`

```ts
posthog.userInterviewsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/user_interviews/{id}/` · `user_interviews_destroy`</sub>

## `posthog.userInterviewsRetrieve`

```ts
posthog.userInterviewsRetrieve(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; created_at: string; interv...>
```

<sub>`GET /api/projects/{project_id}/user_interviews/{id}/` · `user_interviews_retrieve`</sub>

## `posthog.userInterviewsPartialUpdate`

```ts
posthog.userInterviewsPartialUpdate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; created_at: string; interv...>
```

<sub>`PATCH /api/projects/{project_id}/user_interviews/{id}/` · `user_interviews_partial_update`</sub>

## `posthog.userInterviewsUpdate`

```ts
posthog.userInterviewsUpdate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; created_at: string; interv...>
```

<sub>`PUT /api/projects/{project_id}/user_interviews/{id}/` · `user_interviews_update`</sub>

## `posthog.userInterviewsSearchCreate`

Search interview responses by semantic similarity

```ts
posthog.userInterviewsSearchCreate(): Promise<({ interview_id: string; document_type: "transcript" | "summary"; similarity: number; content_snippet: string; interviewee_identifier: string; topic_id: string | null; created_at: string })[]>
```

<sub>`POST /api/projects/{project_id}/user_interviews/search/` · `user_interviews_search_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
