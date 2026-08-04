# Contacts API   Lists

10 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.deleteContactdbLists`

Delete Multiple lists — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteContactdbLists(input: {
  body?: (number)[];
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<unknown>
```

<sub>`DELETE /contactdb/lists` · `DELETE_contactdb-lists`</sub>

## `sendgrid.getContactdbLists`

Retrieve all lists — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getContactdbLists(options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ lists: (ContactdbList)[] }>
```

<sub>`GET /contactdb/lists` · `GET_contactdb-lists`</sub>

## `sendgrid.postContactdbLists`

Create a List — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postContactdbLists(input: {
  name: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<ContactdbList>
```

<sub>`POST /contactdb/lists` · `POST_contactdb-lists`</sub>

## `sendgrid.deleteContactdbListsListId`

Delete a List — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteContactdbListsListId(input: {
  body?: unknown;
  list_id: string;
  /** Adds the ability to delete all contacts on the list in addition to deleting the list. */
  delete_contacts?: true | false;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<unknown>
```

<sub>`DELETE /contactdb/lists/{list_id}` · `DELETE_contactdb-lists-list_id`</sub>

## `sendgrid.getContactdbListsListId`

Retrieve a single list — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getContactdbListsListId(input: {
  /** The ID of the list to retrieve. */
  list_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<ContactdbList>
```

<sub>`GET /contactdb/lists/{list_id}` · `GET_contactdb-lists-list_id`</sub>

## `sendgrid.patchContactdbListsListId`

Update a List — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchContactdbListsListId(input: {
  /** The new name for your list.  */
  name: string;
  /** The ID of the list you are updating. */
  list_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ id?: number; name?: string; recipient_count?: number }>
```

<sub>`PATCH /contactdb/lists/{list_id}` · `PATCH_contactdb-lists-list_id`</sub>

## `sendgrid.getContactdbListsListIdRecipients`

Retrieve all recipients on a List — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getContactdbListsListIdRecipients(input: {
  /** The ID of the list whose recipients you are requesting. */
  list_id: number;
  /** Page index of first recipient to return (must be a positive integer) */
  page?: number;
  /** Number of recipients to return at a time (must be a positive integer between 1 and 1000) */
  page_size?: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ recipients?: (ContactdbRecipient)[] }>
```

<sub>`GET /contactdb/lists/{list_id}/recipients` · `GET_contactdb-lists-list_id-recipients`</sub>

## `sendgrid.postContactdbListsListIdRecipients`

Add Multiple Recipients to a List — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postContactdbListsListIdRecipients(input: {
  body?: (number)[];
  /** The id of the list of recipients you want to retrieve. */
  list_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<unknown>
```

<sub>`POST /contactdb/lists/{list_id}/recipients` · `POST_contactdb-lists-list_id-recipients`</sub>

## `sendgrid.deleteContactdbListsListIdRecipientsRecipientId`

Delete a Single Recipient from a Single List — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteContactdbListsListIdRecipientsRecipientId(input: {
  body?: unknown;
  /** The ID of the list you are taking this recipient away from. */
  list_id: number;
  /** The ID of the recipient to take off the list. */
  recipient_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<unknown>
```

<sub>`DELETE /contactdb/lists/{list_id}/recipients/{recipient_id}` · `DELETE_contactdb-lists-list_id-recipients-recipient_id`</sub>

## `sendgrid.postContactdbListsListIdRecipientsRecipientId`

Add a Single Recipient to a List — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postContactdbListsListIdRecipientsRecipientId(input: {
  /** The ID of the list that you want to add the recipient to. */
  list_id: number;
  /** The ID of the recipient you are adding to the list. */
  recipient_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<unknown>
```

<sub>`POST /contactdb/lists/{list_id}/recipients/{recipient_id}` · `POST_contactdb-lists-list_id-recipients-recipient_id`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
