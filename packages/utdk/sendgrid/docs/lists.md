# Lists

7 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getMcLists`

Get All Lists — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMcLists(input: {
  /** Maximum number of elements to return. Defaults to 100, returns 1000 max */
  page_size?: number;
  page_token?: string;
}): Promise<{ _metadata?: Metadata2; result?: (List)[] }>
```

<sub>`GET /marketing/lists` · `GET_mc-lists`</sub>

## `sendgrid.postMcLists`

Create List — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postMcLists(input: {
  /** Your name for your list */
  name: string;
}): Promise<List>
```

<sub>`POST /marketing/lists` · `POST_mc-lists`</sub>

## `sendgrid.deleteListsId`

Delete a list — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteListsId(input: {
  id: string;
  /** Flag indicates that all contacts on the list are also to be deleted. */
  delete_contacts?: boolean;
}): Promise<{ job_id?: string }>
```

<sub>`DELETE /marketing/lists/{id}` · `DELETE_lists-id`</sub>

## `sendgrid.getMcListsId`

Get a List by ID — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMcListsId(input: {
  id: string;
  /** Setting this parameter to the true  will cause the contact_sample to be returned */
  contact_sample?: boolean;
}): Promise<List & { contact_sample?: ContactDetails2 }>
```

<sub>`GET /marketing/lists/{id}` · `GET_mc-lists-id`</sub>

## `sendgrid.patchMcListsId`

Update List — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchMcListsId(input: {
  /** Your name for your list. */
  name?: string;
  id: string;
}): Promise<List>
```

<sub>`PATCH /marketing/lists/{id}` · `PATCH_mc-lists-id`</sub>

## `sendgrid.deleteMcListsIdContacts`

Remove Contacts from a List — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteMcListsIdContacts(input: {
  id: string;
  /** comma separated list of contact ids */
  contact_ids: string;
}): Promise<{ job_id?: string }>
```

<sub>`DELETE /marketing/lists/{id}/contacts` · `DELETE_mc-lists-id-contacts`</sub>

## `sendgrid.getMcListsIdContactsCount`

Get List Contact Count — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMcListsIdContactsCount(input: {
  id: string;
}): Promise<{ billable_count?: number; contact_count?: number }>
```

<sub>`GET /marketing/lists/{id}/contacts/count` · `GET_mc-lists-id-contacts-count`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
