# Contacts API   Recipients

12 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.deleteContactdbRecipients`

Delete Recipients — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteContactdbRecipients(input: {
  body?: (string)[];
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /contactdb/recipients` · `DELETE_contactdb-recipients`</sub>

## `sendgrid.getContactdbRecipients`

Retrieve recipients — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getContactdbRecipients(input: {
  /** Page index of first recipients to return (must be a positive integer) */
  page?: number;
  /** Number of recipients to return at a time (must be a positive integer between 1 and 1000) */
  page_size?: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ recipients: ({ [key: string]: unknown })[] }>
```

<sub>`GET /contactdb/recipients` · `GET_contactdb-recipients`</sub>

## `sendgrid.patchContactdbRecipients`

Update Recipient — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchContactdbRecipients(input: {
  body?: ({ email: string; first_name?: string; last_name?: string })[];
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<ContactdbRecipientResponse>
```

<sub>`PATCH /contactdb/recipients` · `PATCH_contactdb-recipients`</sub>

## `sendgrid.postContactdbRecipients`

Add recipients — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postContactdbRecipients(input: {
  body?: ({ age?: number; email: string; first_name?: string; last_name?: string })[];
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<ContactdbRecipientResponse>
```

<sub>`POST /contactdb/recipients` · `POST_contactdb-recipients`</sub>

## `sendgrid.deleteContactdbRecipientsRecipientId`

Delete a Recipient — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteContactdbRecipientsRecipientId(input: {
  /** The ID of the recipient that you want to retrieve. */
  recipient_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /contactdb/recipients/{recipient_id}` · `DELETE_contactdb-recipients-recipient_id`</sub>

## `sendgrid.getContactdbRecipientsRecipientId`

Retrieve a single recipient — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getContactdbRecipientsRecipientId(input: {
  /** The ID of the recipient that you want to retrieve. */
  recipient_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<ContactdbRecipient>
```

<sub>`GET /contactdb/recipients/{recipient_id}` · `GET_contactdb-recipients-recipient_id`</sub>

## `sendgrid.getContactdbRecipientsRecipientIdLists`

Retrieve the lists that a recipient is on — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getContactdbRecipientsRecipientIdLists(input: {
  /** The ID of the recipient for whom you are retrieving lists. */
  recipient_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ lists?: (ContactdbList)[] }>
```

<sub>`GET /contactdb/recipients/{recipient_id}/lists` · `GET_contactdb-recipients-recipient_id-lists`</sub>

## `sendgrid.getContactdbRecipientsBillableCount`

Retrieve the count of billable recipients — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getContactdbRecipientsBillableCount(options?: { headers?: { "on-behalf-of"?: string } }): Promise<ContactdbRecipientCount>
```

<sub>`GET /contactdb/recipients/billable_count` · `GET_contactdb-recipients-billable_count`</sub>

## `sendgrid.getContactdbRecipientsCount`

Retrieve a Count of Recipients — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getContactdbRecipientsCount(options?: { headers?: { "on-behalf-of"?: string } }): Promise<ContactdbRecipientCount>
```

<sub>`GET /contactdb/recipients/count` · `GET_contactdb-recipients-count`</sub>

## `sendgrid.getContactdbRecipientsSearch`

Search recipients — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getContactdbRecipientsSearch(input: {
  "{field_name}"?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ recipients?: (ContactdbRecipient)[] }>
```

<sub>`GET /contactdb/recipients/search` · `GET_contactdb-recipients-search`</sub>

## `sendgrid.postContactdbRecipientsSearch`

Search recipients — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postContactdbRecipientsSearch(input: {
  conditions: (unknown)[];
  list_id: number;
}): Promise<{ recipient_count?: number; recipients?: ({ created_at?: number; custom_fields?: ({ id?: number; name?: string; type?: string; value?: number | string })[]; email?: string; first_name?: string; id?: string; last_clicked?: number; last_emailed?: number; last_opened?: number; updated_at?: number })[] }>
```

<sub>`POST /contactdb/recipients/search` · `POST_contactdb-recipients-search`</sub>

## `sendgrid.getContactdbStatus`

Get Recipient Upload Status — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getContactdbStatus(options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ status?: ({ ""?: string; id?: string; value?: string })[] }>
```

<sub>`GET /contactdb/status` · `GET_contactdb-status`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
