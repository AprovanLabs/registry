# Announcements

4 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.announcementsList`

```ts
posthog.announcementsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; short_id: string; message: string; status: "pending" | "sending" | "sent" | "partially_failed" | "failed"; total_channels: number; sent_count: number; failed_count: number; sent_at: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; las...>
```

<sub>`GET /api/projects/{project_id}/announcements/` · `announcements_list`</sub>

## `posthog.announcementsCreate`

```ts
posthog.announcementsCreate(): Promise<{ id: string; short_id: string; message: string; status: "pending" | "sending" | "sent" | "partially_failed" | "failed"; total_channels: number; sent_count: number; failed_count: number; sent_at: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgeho...>
```

<sub>`POST /api/projects/{project_id}/announcements/` · `announcements_create`</sub>

## `posthog.announcementsRetrieve`

```ts
posthog.announcementsRetrieve(): Promise<{ id: string; short_id: string; message: string; status: "pending" | "sending" | "sent" | "partially_failed" | "failed"; total_channels: number; sent_count: number; failed_count: number; sent_at: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgeho...>
```

<sub>`GET /api/projects/{project_id}/announcements/{short_id}/` · `announcements_retrieve`</sub>

## `posthog.announcementsChannelsList`

Slack channels the SupportHog bot can post to, labeled by customer account name.

```ts
posthog.announcementsChannelsList(): Promise<({ id: string; name: string; is_member: boolean; customer_name: string | null })[]>
```

<sub>`GET /api/projects/{project_id}/announcements/channels/` · `announcements_channels_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
