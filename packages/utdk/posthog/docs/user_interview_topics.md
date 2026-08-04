# User Interview Topics

22 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.userInterviewTopicsList`

Planned user interview topics: who we want to target and what we want to ask about.

```ts
posthog.userInterviewTopicsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing...>
```

<sub>`GET /api/projects/{project_id}/user_interview_topics/` · `user_interview_topics_list`</sub>

## `posthog.userInterviewTopicsCreate`

Planned user interview topics: who we want to target and what we want to ask about.

```ts
posthog.userInterviewTopicsCreate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; created_at: string; interv...>
```

<sub>`POST /api/projects/{project_id}/user_interview_topics/` · `user_interview_topics_create`</sub>

## `posthog.userInterviewTopicsDestroy`

Planned user interview topics: who we want to target and what we want to ask about.

```ts
posthog.userInterviewTopicsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/user_interview_topics/{id}/` · `user_interview_topics_destroy`</sub>

## `posthog.userInterviewTopicsRetrieve`

Planned user interview topics: who we want to target and what we want to ask about.

```ts
posthog.userInterviewTopicsRetrieve(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; created_at: string; interv...>
```

<sub>`GET /api/projects/{project_id}/user_interview_topics/{id}/` · `user_interview_topics_retrieve`</sub>

## `posthog.userInterviewTopicsPartialUpdate`

Planned user interview topics: who we want to target and what we want to ask about.

```ts
posthog.userInterviewTopicsPartialUpdate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; created_at: string; interv...>
```

<sub>`PATCH /api/projects/{project_id}/user_interview_topics/{id}/` · `user_interview_topics_partial_update`</sub>

## `posthog.userInterviewTopicsUpdate`

Planned user interview topics: who we want to target and what we want to ask about.

```ts
posthog.userInterviewTopicsUpdate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; created_at: string; interv...>
```

<sub>`PUT /api/projects/{project_id}/user_interview_topics/{id}/` · `user_interview_topics_update`</sub>

## `posthog.userInterviewTopicsAddIntervieweeCreate`

Add a single interviewee to this topic. Email-shaped identifiers (including the `Display Name <email@host>` form) are appended to `interviewee_emails`; everything else is appended to `interviewee_distinct_ids`. Idempotent — adding an identifier that's already present leaves the topic unchanged. Returns the updated topic.

```ts
posthog.userInterviewTopicsAddIntervieweeCreate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; created_at: string; interv...>
```

<sub>`POST /api/projects/{project_id}/user_interview_topics/{id}/add_interviewee/` · `user_interview_topics_add_interviewee_create`</sub>

## `posthog.userInterviewTopicsGenerateLinksCreate`

Generate one public interview link per targeted interviewee. Materializes an IntervieweeContext row for every identifier on the topic (without overwriting existing per-person context), and an enabled SharingConfiguration with a unique access token. The URL resolves to the public interview viewer with no PostHog auth required.

```ts
posthog.userInterviewTopicsGenerateLinksCreate(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ interviewee_identifier: string; user_name: string; interview_url: string; agent_context: string })[] }>
```

<sub>`POST /api/projects/{project_id}/user_interview_topics/{id}/generate_links/` · `user_interview_topics_generate_links_create`</sub>

## `posthog.userInterviewTopicsLinksCsvCreate`

Same materialization as generate_links, returned as a downloadable CSV. Intended for users who want to mail-merge the per-person interview links into their own email tooling.

```ts
posthog.userInterviewTopicsLinksCsvCreate(): Promise<string>
```

<sub>`POST /api/projects/{project_id}/user_interview_topics/{id}/links_csv/` · `user_interview_topics_links_csv_create`</sub>

## `posthog.userInterviewTopicsPreviewInviteCreate`

Render the invite email exactly as a specific targeted interviewee would receive it — personalized subject and body — without sending anything and without creating or reading any share links. Pass `interviewee_identifier` to preview for a particular person, or omit it to preview for the first targeted interviewee. The body always shows an illustrative placeholder link (`is_preview_link: true`), never a live interview URL.

```ts
posthog.userInterviewTopicsPreviewInviteCreate(): Promise<{ interviewee_identifier: string; user_name: string; email: string | null; subject: string; html: string; interview_url: string; emailable: boolean; is_preview_link: boolean }>
```

<sub>`POST /api/projects/{project_id}/user_interview_topics/{id}/preview_invite/` · `user_interview_topics_preview_invite_create`</sub>

## `posthog.userInterviewTopicsRemoveIntervieweeCreate`

Remove an interviewee from this topic. Drops the identifier from both `interviewee_emails` and `interviewee_distinct_ids`, and disables any active SharingConfiguration linked to an IntervieweeContext for that identifier on this topic so the removed person can no longer open their interview link. Idempotent — removing an identifier that isn't present is a no-op. Returns the updated topic.

```ts
posthog.userInterviewTopicsRemoveIntervieweeCreate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; created_at: string; interv...>
```

<sub>`POST /api/projects/{project_id}/user_interview_topics/{id}/remove_interviewee/` · `user_interview_topics_remove_interviewee_create`</sub>

## `posthog.userInterviewTopicsSendInvitesCreate`

Generate (if needed) and email a personalized public interview link to every targeted interviewee on this topic whose identifier is an email address. Distinct-ID-only interviewees are skipped and surfaced in the response. Each invite is keyed on the underlying SharingConfiguration so re-runs after token rotation produce a fresh send.

```ts
posthog.userInterviewTopicsSendInvitesCreate(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ interviewee_identifier: string; email?: string | null; interview_url: string; sent: boolean; reason?: string })[] }>
```

<sub>`POST /api/projects/{project_id}/user_interview_topics/{id}/send_invites/` · `user_interview_topics_send_invites_create`</sub>

## `posthog.userInterviewTopicsSharedLinkDestroy`

Revoke this topic's shared (non-personalised) interview link so an already-distributed URL can no longer start interviews. Idempotent — a no-op when no active shared link exists. A subsequent shared_link POST mints a fresh link (rotation).

```ts
posthog.userInterviewTopicsSharedLinkDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/user_interview_topics/{id}/shared_link/` · `user_interview_topics_shared_link_destroy`</sub>

## `posthog.userInterviewTopicsSharedLinkCreate`

Get-or-create a single non-personalised (shared) interview link for this topic. Unlike generate_links, the returned URL is not tied to a specific interviewee — every visitor becomes a new anonymous respondent who self-identifies with a name. Idempotent: repeated calls return the same active link. `distinct_id` and `session_id` query params appended to the URL are captured as best-effort person/session linkage.

```ts
posthog.userInterviewTopicsSharedLinkCreate(): Promise<{ interview_url: string }>
```

<sub>`POST /api/projects/{project_id}/user_interview_topics/{id}/shared_link/` · `user_interview_topics_shared_link_create`</sub>

## `posthog.userInterviewTopicsTestLinkRetrieve`

Return the calling user's personal dogfood interview link for this topic, plus the latest test interview they have recorded against it. Lazily get-or-creates a per-caller IntervieweeContext + enabled SharingConfiguration the first time it's called, then returns the same stable URL on subsequent calls. The caller's identifier is intentionally not added to the topic's targeting arrays — each user dogfoods under their own row, so test calls never mint a public share token on someone else's behalf.

```ts
posthog.userInterviewTopicsTestLinkRetrieve(): Promise<{ interview_url: string; latest_test_interview: { completed_at: string; transcript: string; summary: string } | null }>
```

<sub>`GET /api/projects/{project_id}/user_interview_topics/{id}/test_link/` · `user_interview_topics_test_link_retrieve`</sub>

## `posthog.userInterviewTopicsIntervieweesList`

Per-interviewee extra context for a user interview topic. At most one row per (topic, interviewee_identifier).

```ts
posthog.userInterviewTopicsIntervieweesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing...>
```

<sub>`GET /api/projects/{project_id}/user_interview_topics/{topic_id}/interviewees/` · `user_interview_topics_interviewees_list`</sub>

## `posthog.userInterviewTopicsIntervieweesCreate`

Per-interviewee extra context for a user interview topic. At most one row per (topic, interviewee_identifier).

```ts
posthog.userInterviewTopicsIntervieweesCreate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; created_at: string; interv...>
```

<sub>`POST /api/projects/{project_id}/user_interview_topics/{topic_id}/interviewees/` · `user_interview_topics_interviewees_create`</sub>

## `posthog.userInterviewTopicsIntervieweesDestroy`

Per-interviewee extra context for a user interview topic. At most one row per (topic, interviewee_identifier).

```ts
posthog.userInterviewTopicsIntervieweesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/user_interview_topics/{topic_id}/interviewees/{id}/` · `user_interview_topics_interviewees_destroy`</sub>

## `posthog.userInterviewTopicsIntervieweesRetrieve`

Per-interviewee extra context for a user interview topic. At most one row per (topic, interviewee_identifier).

```ts
posthog.userInterviewTopicsIntervieweesRetrieve(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; created_at: string; interv...>
```

<sub>`GET /api/projects/{project_id}/user_interview_topics/{topic_id}/interviewees/{id}/` · `user_interview_topics_interviewees_retrieve`</sub>

## `posthog.userInterviewTopicsIntervieweesPartialUpdate`

Per-interviewee extra context for a user interview topic. At most one row per (topic, interviewee_identifier).

```ts
posthog.userInterviewTopicsIntervieweesPartialUpdate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; created_at: string; interv...>
```

<sub>`PATCH /api/projects/{project_id}/user_interview_topics/{topic_id}/interviewees/{id}/` · `user_interview_topics_interviewees_partial_update`</sub>

## `posthog.userInterviewTopicsIntervieweesUpdate`

Per-interviewee extra context for a user interview topic. At most one row per (topic, interviewee_identifier).

```ts
posthog.userInterviewTopicsIntervieweesUpdate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; created_at: string; interv...>
```

<sub>`PUT /api/projects/{project_id}/user_interview_topics/{topic_id}/interviewees/{id}/` · `user_interview_topics_interviewees_update`</sub>

## `posthog.userInterviewTopicsIntervieweesBulkCreate`

Create up to 500 interviewee context rows for a topic in a single request. Rows whose (topic, interviewee_identifier) already exists are skipped — the response surfaces an `inserted_count`, a `skipped_count`, and the `skipped_identifiers` so the caller can reconcile. Items must have unique `interviewee_identifier` values within the batch.

```ts
posthog.userInterviewTopicsIntervieweesBulkCreate(): Promise<{ inserted_count: number; skipped_count: number; skipped_identifiers: (string)[] }>
```

<sub>`POST /api/projects/{project_id}/user_interview_topics/{topic_id}/interviewees/bulk/` · `user_interview_topics_interviewees_bulk_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
