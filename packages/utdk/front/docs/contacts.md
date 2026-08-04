# Contacts

11 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listContacts`

List contacts — [Provider docs](https://community.front.com)

```ts
front.listContacts(input: {
  /** [Search query object](https://dev.frontapp.com/docs/query-object-q) with the optional properties `updated_after` and `updated_before`, whose value should be a timestamp in seconds with up to 3 decimal places. */
  q?: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
  /** Field used to sort the contacts. Either `created_at` or `updated_at`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (ContactResponse)[] }>
```

<sub>`GET /contacts` · `list-contacts`</sub>

## `front.createContact`

Create contact — [Provider docs](https://community.front.com)

```ts
front.createContact(input: {
  /** Contact name */
  name?: string;
  /** Contact description */
  description?: string;
  /** Binary data of avatar. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB. */
  avatar?: string;
  /** List of all the links of the contact */
  links?: (string)[];
  /** List of all the group names the contact belongs to. It will automatically create missing groups. ⚠️ Deprecated. Use `list_names` instead. */
  group_names?: (string)[];
  /** List of all the contact list names the contact belongs to. It will automatically create missing groups */
  list_names?: (string)[];
  /** Custom fields for this contact. If you want to keep all custom fields the same when updating this resource, do not include any custom fields in the update. If you want to update custom fields, make sure to include all custom fields, not just the fields you want to add or update. If you send only the custom fields you want to update, the other custom fields will be erased. You can retrieve the existing custom fields before making the update to note the current fields. */
  custom_fields?: CustomFieldParameter;
  /** List of the handles for this contact. Each handle object should include `handle` and `source` fields. */
  handles: (ContactHandle)[];
}): Promise<ContactResponse>
```

<sub>`POST /contacts` · `create-contact`</sub>

## `front.deleteAContact`

Delete a contact — [Provider docs](https://community.front.com)

```ts
front.deleteAContact(input: {
  /** The contact ID. Alternatively, you can supply the contact's source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  contact_id: string;
}): Promise<undefined>
```

<sub>`DELETE /contacts/{contact_id}` · `delete-a-contact`</sub>

## `front.getContact`

Get contact — [Provider docs](https://community.front.com)

```ts
front.getContact(input: {
  /** The contact ID. Alternatively, you can supply the contact's source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  contact_id: string;
}): Promise<ContactResponse>
```

<sub>`GET /contacts/{contact_id}` · `get-contact`</sub>

## `front.updateAContact`

Update a contact — [Provider docs](https://community.front.com)

```ts
front.updateAContact(input: {
  /** Contact name */
  name?: string;
  /** Contact description */
  description?: string;
  /** Binary data of avatar. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB. */
  avatar?: string;
  /** List of all the links of the contact */
  links?: (string)[];
  /** List of all the group names the contact belongs to. It will automatically create missing groups. ⚠️ Deprecated. Use `list_names` instead. */
  group_names?: (string)[];
  /** List of all the contact list names the contact belongs to. It will automatically create missing groups */
  list_names?: (string)[];
  /** Custom fields for this contact. If you want to keep all custom fields the same when updating this resource, do not include any custom fields in the update. If you want to update custom fields, make sure to include all custom fields, not just the fields you want to add or update. If you send only the custom fields you want to update, the other custom fields will be erased. You can retrieve the existing custom fields before making the update to note the current fields. */
  custom_fields?: CustomFieldParameter;
  /** The contact ID. Alternatively, you can supply the contact's source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  contact_id: string;
}): Promise<undefined>
```

<sub>`PATCH /contacts/{contact_id}` · `update-a-contact`</sub>

## `front.listContactConversations`

List contact conversations — [Provider docs](https://community.front.com)

```ts
front.listContactConversations(input: {
  /** The Contact ID. Alternatively, you can supply the contact's source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  contact_id: string;
  /** [Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `statuses`, whose value should be a list of conversation statuses (`assigned`, `unassigned`, `archived`, or `trashed`). If ticketing is enabled, this endpoint accepts either `status_categories` (`open`, `waiting`, `resolved`) or `status_ids` as an alternative. */
  q?: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (ConversationResponse)[] }>
```

<sub>`GET /contacts/{contact_id}/conversations` · `list-contact-conversations`</sub>

## `front.mergeContacts`

Merge contacts — [Provider docs](https://community.front.com)

```ts
front.mergeContacts(input: {
  /** Optional contact ID to merge the other contacts into. */
  target_contact_id?: string;
  /** Array of all the contact IDs of the contacts to be merged.  If a target contact id is provided and that contact id is not in this array, the length of this array must be between 1 and 49.  If no target contact id is provided or it is contained in this array, the length must be between 2 and 50. */
  contact_ids: (string)[];
}): Promise<ContactResponse>
```

<sub>`POST /contacts/merge` · `merge-contacts`</sub>

## `front.listTeammateContacts`

List teammate contacts — [Provider docs](https://community.front.com)

```ts
front.listTeammateContacts(input: {
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
  /** [Search query object](https://dev.frontapp.com/docs/query-object-q) with the optional properties `updated_after` and `updated_before`, whose value should be a timestamp in seconds with up to 3 decimal places. */
  q?: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
  /** Field used to sort the contacts. Either `created_at` or `updated_at`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (ContactResponse)[] }>
```

<sub>`GET /teammates/{teammate_id}/contacts` · `list-teammate-contacts`</sub>

## `front.createTeammateContact`

Create teammate contact — [Provider docs](https://community.front.com)

```ts
front.createTeammateContact(input: {
  /** Contact name */
  name?: string;
  /** Contact description */
  description?: string;
  /** Binary data of avatar. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB. */
  avatar?: string;
  /** List of all the links of the contact */
  links?: (string)[];
  /** List of all the group names the contact belongs to. It will automatically create missing groups. ⚠️ Deprecated. Use `list_names` instead. */
  group_names?: (string)[];
  /** List of all the contact list names the contact belongs to. It will automatically create missing groups */
  list_names?: (string)[];
  /** Custom fields for this contact. If you want to keep all custom fields the same when updating this resource, do not include any custom fields in the update. If you want to update custom fields, make sure to include all custom fields, not just the fields you want to add or update. If you send only the custom fields you want to update, the other custom fields will be erased. You can retrieve the existing custom fields before making the update to note the current fields. */
  custom_fields?: CustomFieldParameter;
  /** List of the handles for this contact. Each handle object should include `handle` and `source` fields. */
  handles: (ContactHandle)[];
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
}): Promise<ContactResponse>
```

<sub>`POST /teammates/{teammate_id}/contacts` · `create-teammate-contact`</sub>

## `front.listTeamContacts`

List team contacts — [Provider docs](https://community.front.com)

```ts
front.listTeamContacts(input: {
  /** The team ID */
  team_id: string;
  /** [Search query object](https://dev.frontapp.com/docs/query-object-q) with the optional properties `updated_after` and `updated_before`, whose value should be a timestamp in seconds with up to 3 decimal places. */
  q?: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
  /** Field used to sort the contacts. Either `created_at` or `updated_at`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (ContactResponse)[] }>
```

<sub>`GET /teams/{team_id}/contacts` · `list-team-contacts`</sub>

## `front.createTeamContact`

Create team contact — [Provider docs](https://community.front.com)

```ts
front.createTeamContact(input: {
  /** Contact name */
  name?: string;
  /** Contact description */
  description?: string;
  /** Binary data of avatar. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB. */
  avatar?: string;
  /** List of all the links of the contact */
  links?: (string)[];
  /** List of all the group names the contact belongs to. It will automatically create missing groups. ⚠️ Deprecated. Use `list_names` instead. */
  group_names?: (string)[];
  /** List of all the contact list names the contact belongs to. It will automatically create missing groups */
  list_names?: (string)[];
  /** Custom fields for this contact. If you want to keep all custom fields the same when updating this resource, do not include any custom fields in the update. If you want to update custom fields, make sure to include all custom fields, not just the fields you want to add or update. If you send only the custom fields you want to update, the other custom fields will be erased. You can retrieve the existing custom fields before making the update to note the current fields. */
  custom_fields?: CustomFieldParameter;
  /** List of the handles for this contact. Each handle object should include `handle` and `source` fields. */
  handles: (ContactHandle)[];
  /** The team ID */
  team_id: string;
}): Promise<ContactResponse>
```

<sub>`POST /teams/{team_id}/contacts` · `create-team-contact`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
