# Mailbox

6 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getMailMessage`

Get one mail message

```ts
pipedrive.getMailMessage(input: {
  /** The ID of the mail message to fetch */
  id: number;
  /** Whether to include the full message body or not. `0` = Don't include, `1` = Include. */
  include_body?: 0 | 1;
}): Promise<{ success?: boolean; statusCode?: number; statusText?: string; service?: string } & { data?: { id?: number; from?: ({ id?: number; email_address?: string; name?: string; linked_person_id?: number; linked_person_name?: string; mail_message_party_id?: number })[]; to?: ({ id?: number; email_address?: string; name?: string; linked_person_id?: number; linked_person_name?: string; mail_message_party_i...>
```

<sub>`GET /mailbox/mailMessages/{id}` · `getMailMessage`</sub>

## `pipedrive.getMailThreads`

Get mail threads

```ts
pipedrive.getMailThreads(input: {
  /** The type of folder to fetch */
  folder: "inbox" | "drafts" | "sent" | "archive";
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
}): Promise<{ success?: boolean } & { data?: ({ id?: number; account_id?: string; user_id?: number; subject?: string; snippet?: string; read_flag?: 0 | 1; mail_tracking_status?: string | null; has_attachments_flag?: 0 | 1; has_inline_attachments_flag?: 0 | 1; has_real_attachments_flag?: 0 | 1; deleted_flag?: 0 | 1; synced_flag?: 0 | 1; smart_bcc_flag?: 0 | 1; mail_link_tracking_enabled_flag?: 0 | 1 } & { par...>
```

<sub>`GET /mailbox/mailThreads` · `getMailThreads`</sub>

## `pipedrive.deleteMailThread`

Delete mail thread

```ts
pipedrive.deleteMailThread(input: {
  /** The ID of the mail thread */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number } }>
```

<sub>`DELETE /mailbox/mailThreads/{id}` · `deleteMailThread`</sub>

## `pipedrive.getMailThread`

Get one mail thread

```ts
pipedrive.getMailThread(input: {
  /** The ID of the mail thread */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number; account_id?: string; user_id?: number; subject?: string; snippet?: string; read_flag?: 0 | 1; mail_tracking_status?: string | null; has_attachments_flag?: 0 | 1; has_inline_attachments_flag?: 0 | 1; has_real_attachments_flag?: 0 | 1; deleted_flag?: 0 | 1; synced_flag?: 0 | 1; smart_bcc_flag?: 0 | 1; mail_link_tracking_enabled_flag?: 0 | 1 } & { part...>
```

<sub>`GET /mailbox/mailThreads/{id}` · `getMailThread`</sub>

## `pipedrive.updateMailThreadDetails`

Update mail thread details

```ts
pipedrive.updateMailThreadDetails(input: {
  /** The ID of the deal this thread is associated with */
  deal_id?: number;
  /** The ID of the lead this thread is associated with */
  lead_id?: string;
  /** Whether this thread is shared with other users in your company */
  shared_flag?: 0 | 1;
  /** Whether this thread is read or unread */
  read_flag?: 0 | 1;
  /** Whether this thread is archived or not. You can only archive threads that belong to Inbox folder. Archived threads will disappear from Inbox. */
  archived_flag?: 0 | 1;
  /** The ID of the mail thread */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number; account_id?: string; user_id?: number; subject?: string; snippet?: string; read_flag?: 0 | 1; mail_tracking_status?: string | null; has_attachments_flag?: 0 | 1; has_inline_attachments_flag?: 0 | 1; has_real_attachments_flag?: 0 | 1; deleted_flag?: 0 | 1; synced_flag?: 0 | 1; smart_bcc_flag?: 0 | 1; mail_link_tracking_enabled_flag?: 0 | 1 } & { part...>
```

<sub>`PUT /mailbox/mailThreads/{id}` · `updateMailThreadDetails`</sub>

## `pipedrive.getMailThreadMessages`

Get all mail messages of mail thread

```ts
pipedrive.getMailThreadMessages(input: {
  /** The ID of the mail thread */
  id: number;
}): Promise<{ success?: boolean } & { data?: ({ id?: number; account_id?: string; user_id?: number; subject?: string; snippet?: string; read_flag?: 0 | 1; mail_tracking_status?: string | null; has_attachments_flag?: 0 | 1; has_inline_attachments_flag?: 0 | 1; has_real_attachments_flag?: 0 | 1; deleted_flag?: 0 | 1; synced_flag?: 0 | 1; smart_bcc_flag?: 0 | 1; mail_link_tracking_enabled_flag?: 0 | 1 } & { fro...>
```

<sub>`GET /mailbox/mailThreads/{id}/mailMessages` · `getMailThreadMessages`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
