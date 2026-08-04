# Accounts

8 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.accountsList`

```ts
posthog.accountsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; external_id?: string | null; properties?: { [key: string]: unknown } | null; tags?: (string)[]; notebooks: (string)[]; slack_summary_cadence?: "daily" | "weekly" | "monthly" | null; created_at: string; created_by: number | null; updated_at: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/accounts/` · `accounts_list`</sub>

## `posthog.accountsCreate`

```ts
posthog.accountsCreate(): Promise<{ id: string; name: string; external_id?: string | null; properties?: { [key: string]: unknown } | null; tags?: (string)[]; notebooks: (string)[]; slack_summary_cadence?: "daily" | "weekly" | "monthly" | null; created_at: string; created_by: number | null; updated_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/accounts/` · `accounts_create`</sub>

## `posthog.accountsDestroy`

```ts
posthog.accountsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/accounts/{id}/` · `accounts_destroy`</sub>

## `posthog.accountsRetrieve`

```ts
posthog.accountsRetrieve(): Promise<{ id: string; name: string; external_id?: string | null; properties?: { [key: string]: unknown } | null; tags?: (string)[]; notebooks: (string)[]; slack_summary_cadence?: "daily" | "weekly" | "monthly" | null; created_at: string; created_by: number | null; updated_at: string | null }>
```

<sub>`GET /api/projects/{project_id}/accounts/{id}/` · `accounts_retrieve`</sub>

## `posthog.accountsPartialUpdate`

```ts
posthog.accountsPartialUpdate(): Promise<{ id: string; name: string; external_id?: string | null; properties?: { [key: string]: unknown } | null; tags?: (string)[]; notebooks: (string)[]; slack_summary_cadence?: "daily" | "weekly" | "monthly" | null; created_at: string; created_by: number | null; updated_at: string | null }>
```

<sub>`PATCH /api/projects/{project_id}/accounts/{id}/` · `accounts_partial_update`</sub>

## `posthog.accountsUpdate`

```ts
posthog.accountsUpdate(): Promise<{ id: string; name: string; external_id?: string | null; properties?: { [key: string]: unknown } | null; tags?: (string)[]; notebooks: (string)[]; slack_summary_cadence?: "daily" | "weekly" | "monthly" | null; created_at: string; created_by: number | null; updated_at: string | null }>
```

<sub>`PUT /api/projects/{project_id}/accounts/{id}/` · `accounts_update`</sub>

## `posthog.accountsSummariesList`

```ts
posthog.accountsSummariesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; slack_channel_id: string; cadence: "daily" | "weekly" | "monthly"; period_start: string; period_end: string; content: string; message_count: number; messages: ({ author: string; sent_at: string; permalink: string })[]; generated_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/accounts/{id}/summaries/` · `accounts_summaries_list`</sub>

## `posthog.accountsSupportTicketsList`

```ts
posthog.accountsSupportTicketsList(): Promise<({ id: string; ticket_number: number; status: string; last_message_at: string | null; last_message_text: string | null; deep_link: string })[]>
```

<sub>`GET /api/projects/{project_id}/accounts/{id}/support_tickets/` · `accounts_support_tickets_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
