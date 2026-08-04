# Contact Lists

10 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listContactLists`

List contact lists — [Provider docs](https://community.front.com)

```ts
front.listContactLists(): Promise<{ _links?: { self?: string }; _results?: (ContactListResponses)[] }>
```

<sub>`GET /contact_lists` · `list-contact-lists`</sub>

## `front.createContactList`

Create contact list — [Provider docs](https://community.front.com)

```ts
front.createContactList(input: {
  /** Name of the contact list */
  name: string;
}): Promise<undefined>
```

<sub>`POST /contact_lists` · `create-contact-list`</sub>

## `front.deleteContactList`

Delete contact list — [Provider docs](https://community.front.com)

```ts
front.deleteContactList(input: {
  /** The contact list ID */
  contact_list_id: string;
}): Promise<undefined>
```

<sub>`DELETE /contact_lists/{contact_list_id}` · `delete-contact-list`</sub>

## `front.removeContactsFromContactList`

Remove contacts from contact list — [Provider docs](https://community.front.com)

```ts
front.removeContactsFromContactList(input: {
  /** List of IDs of the contacts to remove from the requested contact list. Alternatively, you can supply the contact source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  contact_ids: (ResourceId)[];
  /** The contact list ID */
  contact_list_id: string;
}): Promise<undefined>
```

<sub>`DELETE /contact_lists/{contact_list_id}/contacts` · `remove-contacts-from-contact-list`</sub>

## `front.listContactsInContactList`

List contacts in contact list — [Provider docs](https://community.front.com)

```ts
front.listContactsInContactList(input: {
  /** The contact list ID */
  contact_list_id: string;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (ContactResponse)[] }>
```

<sub>`GET /contact_lists/{contact_list_id}/contacts` · `list-contacts-in-contact-list`</sub>

## `front.addContactsToContactList`

Add contacts to contact list — [Provider docs](https://community.front.com)

```ts
front.addContactsToContactList(input: {
  /** List of IDs of the contacts to add in the requested contact list. Alternatively, you can supply the contact source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  contact_ids: (ResourceId)[];
  /** The contact list ID */
  contact_list_id: string;
}): Promise<undefined>
```

<sub>`POST /contact_lists/{contact_list_id}/contacts` · `add-contacts-to-contact-list`</sub>

## `front.listTeammateContactLists`

List teammate contact lists — [Provider docs](https://community.front.com)

```ts
front.listTeammateContactLists(input: {
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (ContactListResponses)[] }>
```

<sub>`GET /teammates/{teammate_id}/contact_lists` · `list-teammate-contact-lists`</sub>

## `front.createTeammateContactList`

Create teammate contact list — [Provider docs](https://community.front.com)

```ts
front.createTeammateContactList(input: {
  /** Name of the contact list */
  name: string;
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
}): Promise<undefined>
```

<sub>`POST /teammates/{teammate_id}/contact_lists` · `create-teammate-contact-list`</sub>

## `front.listTeamContactLists`

List team contact lists — [Provider docs](https://community.front.com)

```ts
front.listTeamContactLists(input: {
  /** The team ID */
  team_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (ContactListResponses)[] }>
```

<sub>`GET /teams/{team_id}/contact_lists` · `list-team-contact-lists`</sub>

## `front.createTeamContactList`

Create team contact list — [Provider docs](https://community.front.com)

```ts
front.createTeamContactList(input: {
  /** Name of the contact list */
  name: string;
  /** The team ID */
  team_id: string;
}): Promise<undefined>
```

<sub>`POST /teams/{team_id}/contact_lists` · `create-team-contact-list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
