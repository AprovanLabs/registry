# Contacts

13 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.deleteMcContacts`

Delete Contacts — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteMcContacts(input: {
  /** Must be set to `"true"` to delete all contacts. */
  delete_all_contacts?: string;
  /** A comma-separated list of contact IDs. */
  ids?: string;
}): Promise<{ job_id: { [key: string]: unknown } }>
```

<sub>`DELETE /marketing/contacts` · `DELETE_mc-contacts`</sub>

## `sendgrid.getMcContats`

Get Sample Contacts — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMcContats(): Promise<{ _metadata?: Selfmetadata; contact_count?: number; result?: (ContactDetails3)[] }>
```

<sub>`GET /marketing/contacts` · `GET_mc-contats`</sub>

## `sendgrid.putMcContacts`

Add or Update a Contact — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.putMcContacts(input: {
  /** One or more contacts objects that you intend to upsert. The available fields for a contact, including the required `email` field are described below. */
  contacts: (ContactRequest)[];
  /** An array of List ID strings that this contact will be added to. */
  list_ids?: (string)[];
}): Promise<{ job_id?: string }>
```

<sub>`PUT /marketing/contacts` · `PUT_mc-contacts`</sub>

## `sendgrid.getMcContactsId`

Get a Contact by ID — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMcContactsId(input: {
  id: string;
}): Promise<ContactDetails3>
```

<sub>`GET /marketing/contacts/{id}` · `GET_mc-contacts-id`</sub>

## `sendgrid.postMarketingContactsBatch`

Get Batched Contacts by IDs — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postMarketingContactsBatch(input: {
  ids: (string)[];
}): Promise<{ result?: (ContactDetails3)[] }>
```

<sub>`POST /marketing/contacts/batch` · `POST_marketing-contacts-batch`</sub>

## `sendgrid.getMcContactsCount`

Get Total Contact Count — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMcContactsCount(): Promise<{ billable_breakdown?: { breakdown?: { [key: string]: unknown }; total?: number }; billable_count?: number; contact_count: number }>
```

<sub>`GET /marketing/contacts/count` · `GET_mc-contacts-count`</sub>

## `sendgrid.getMarketingContactsExports`

Get All Existing Exports — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMarketingContactsExports(): Promise<{ _metadata?: { next?: string; prev?: string; self?: string }; result?: ({ _metadata?: { next?: string; prev?: string; self?: string }; completed_at?: string; created_at?: string; expires_at?: string; export_type?: string; id?: string; lists?: ({ ID?: string; Name?: string })[]; segments?: ({ ID?: string; Name?: string })[]; status?: string; urls?: (string)[]; user_id?: string })[] }>
```

<sub>`GET /marketing/contacts/exports` · `GET_marketing-contacts-exports`</sub>

## `sendgrid.postMcContactsExports`

Export Contacts — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postMcContactsExports(input: {
  /** File type for export file. Choose from `json` or `csv`. */
  file_type?: "csv" | "json";
  /** IDs of the contact lists you want to export. */
  list_ids?: (string)[];
  /** The maximum size of an export file in MB. Note that when this option is specified, multiple output files may be returned from the export. */
  max_file_size?: number;
  notifications?: { email?: boolean };
  /** IDs of the contact segments you want to export. */
  segment_ids?: (string)[];
}): Promise<{ _metadata: Metadata2; id?: string }>
```

<sub>`POST /marketing/contacts/exports` · `POST_mc-contacts-exports`</sub>

## `sendgrid.getMcContactsExportsId`

Export Contacts Status — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMcContactsExportsId(input: {
  id: string;
}): Promise<ContactExport>
```

<sub>`GET /marketing/contacts/exports/{id}` · `GET_mc-contacts-exports-id`</sub>

## `sendgrid.putMcContactsImports`

Import Contacts — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.putMcContactsImports(input: {
  /** Import file header to reserved/custom field mapping. */
  field_mappings: (string | unknown)[];
  /** Upload file type. */
  file_type: "csv";
  /** All contacts will be added to each of the specified lists. */
  list_ids?: (string)[];
}): Promise<{ job_id?: string; upload_headers?: ({ header: string; value: string })[]; upload_uri?: string }>
```

<sub>`PUT /marketing/contacts/imports` · `PUT_mc-contacts-imports`</sub>

## `sendgrid.getMarketingContactsImportsId`

Import Contacts Status — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMarketingContactsImportsId(input: {
  id: string;
}): Promise<ContactImport>
```

<sub>`GET /marketing/contacts/imports/{id}` · `GET_marketing-contacts-imports-id`</sub>

## `sendgrid.postMcContactsSearch`

Search Contacts — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postMcContactsSearch(input: {
  query: string;
}): Promise<{ _metadata?: Selfmetadata; contact_count: number; result?: (ContactDetails3)[] }>
```

<sub>`POST /marketing/contacts/search` · `POST_mc-contacts-search`</sub>

## `sendgrid.postMarketingContactsSearchEmails`

Get Contacts by Emails — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postMarketingContactsSearchEmails(input: {
  /** One or more primary emails and/or alternate emails to search through your contacts for. */
  emails: (string)[];
}): Promise<{ result?: { [key: string]: unknown } }>
```

<sub>`POST /marketing/contacts/search/emails` · `POST_marketing-contacts-search-emails`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
