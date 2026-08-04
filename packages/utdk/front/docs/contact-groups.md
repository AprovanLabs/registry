# Contact Groups

10 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listGroups`

List groups — [Provider docs](https://community.front.com)

```ts
front.listGroups(): Promise<{ _links?: { self?: string }; _results?: (ContactListResponses)[] }>
```

<sub>`GET /contact_groups` · `list-groups`</sub>

## `front.createGroup`

Create group — [Provider docs](https://community.front.com)

```ts
front.createGroup(input: {
  /** Name of the contact list */
  name: string;
}): Promise<undefined>
```

<sub>`POST /contact_groups` · `create-group`</sub>

## `front.deleteGroup`

Delete group — [Provider docs](https://community.front.com)

```ts
front.deleteGroup(input: {
  /** The contact group ID */
  contact_group_id: string;
}): Promise<undefined>
```

<sub>`DELETE /contact_groups/{contact_group_id}` · `delete-group`</sub>

## `front.removeContactsFromGroup`

Remove contacts from group — [Provider docs](https://community.front.com)

```ts
front.removeContactsFromGroup(input: {
  /** List of IDs of the contacts to remove from the requested contact list. Alternatively, you can supply the contact source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  contact_ids: (ResourceId)[];
  /** The contact group ID */
  contact_group_id: string;
}): Promise<undefined>
```

<sub>`DELETE /contact_groups/{contact_group_id}/contacts` · `remove-contacts-from-group`</sub>

## `front.listContactsInGroup`

List contacts in group — [Provider docs](https://community.front.com)

```ts
front.listContactsInGroup(input: {
  /** The contact group ID */
  contact_group_id: string;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (ContactResponse)[] }>
```

<sub>`GET /contact_groups/{contact_group_id}/contacts` · `list-contacts-in-group`</sub>

## `front.addContactsToGroup`

Add contacts to group — [Provider docs](https://community.front.com)

```ts
front.addContactsToGroup(input: {
  /** List of IDs of the contacts to add in the requested contact list. Alternatively, you can supply the contact source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  contact_ids: (ResourceId)[];
  /** The contact group ID */
  contact_group_id: string;
}): Promise<undefined>
```

<sub>`POST /contact_groups/{contact_group_id}/contacts` · `add-contacts-to-group`</sub>

## `front.listTeammateGroups`

List teammate groups — [Provider docs](https://community.front.com)

```ts
front.listTeammateGroups(input: {
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (ContactListResponses)[] }>
```

<sub>`GET /teammates/{teammate_id}/contact_groups` · `list-teammate-groups`</sub>

## `front.createTeammateGroup`

Create teammate group — [Provider docs](https://community.front.com)

```ts
front.createTeammateGroup(input: {
  /** Name of the contact list */
  name: string;
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
}): Promise<undefined>
```

<sub>`POST /teammates/{teammate_id}/contact_groups` · `create-teammate-group`</sub>

## `front.listTeamGroups`

List team groups — [Provider docs](https://community.front.com)

```ts
front.listTeamGroups(input: {
  /** The team ID */
  team_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (ContactListResponses)[] }>
```

<sub>`GET /teams/{team_id}/contact_groups` · `list-team-groups`</sub>

## `front.createTeamGroup`

Create team group — [Provider docs](https://community.front.com)

```ts
front.createTeamGroup(input: {
  /** Name of the contact list */
  name: string;
  /** The team ID */
  team_id: string;
}): Promise<undefined>
```

<sub>`POST /teams/{team_id}/contact_groups` · `create-team-group`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
