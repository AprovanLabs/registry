# Contacts

15 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.listContacts`

List all contacts — [Provider docs](https://developers.intercom.com)

```ts
intercom.listContacts(options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ContactList>
```

<sub>`GET /contacts` · `ListContacts`</sub>

## `intercom.createContact`

Create contact — [Provider docs](https://developers.intercom.com)

```ts
intercom.createContact(input: {
  body?: CreateContactRequest;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Contact>
```

<sub>`POST /contacts` · `CreateContact`</sub>

## `intercom.deleteContact`

Delete a contact — [Provider docs](https://developers.intercom.com)

```ts
intercom.deleteContact(input: {
  /** contact_id */
  contact_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ContactDeleted>
```

<sub>`DELETE /contacts/{contact_id}` · `DeleteContact`</sub>

## `intercom.showContact`

Get a contact — [Provider docs](https://developers.intercom.com)

```ts
intercom.showContact(input: {
  /** contact_id */
  contact_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Contact>
```

<sub>`GET /contacts/{contact_id}` · `ShowContact`</sub>

## `intercom.updateContact`

Update a contact — [Provider docs](https://developers.intercom.com)

```ts
intercom.updateContact(input: {
  body?: UpdateContactRequest;
  /** id */
  contact_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Contact>
```

<sub>`PUT /contacts/{contact_id}` · `UpdateContact`</sub>

## `intercom.archiveContact`

Archive contact — [Provider docs](https://developers.intercom.com)

```ts
intercom.archiveContact(input: {
  /** contact_id */
  contact_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ContactArchived>
```

<sub>`POST /contacts/{contact_id}/archive` · `ArchiveContact`</sub>

## `intercom.blockContact`

Block contact — [Provider docs](https://developers.intercom.com)

```ts
intercom.blockContact(input: {
  /** contact_id */
  contact_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ContactBlocked>
```

<sub>`POST /contacts/{contact_id}/block` · `BlockContact`</sub>

## `intercom.listCompaniesForAContact`

List attached companies for contact — [Provider docs](https://developers.intercom.com)

```ts
intercom.listCompaniesForAContact(input: {
  /** The unique identifier for the contact which is given by Intercom */
  contact_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ContactAttachedCompanies>
```

<sub>`GET /contacts/{contact_id}/companies` · `listCompaniesForAContact`</sub>

## `intercom.listSegmentsForAContact`

List attached segments for contact — [Provider docs](https://developers.intercom.com)

```ts
intercom.listSegmentsForAContact(input: {
  /** The unique identifier for the contact which is given by Intercom */
  contact_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ContactSegments>
```

<sub>`GET /contacts/{contact_id}/segments` · `listSegmentsForAContact`</sub>

## `intercom.listSubscriptionsForAContact`

List subscriptions for a contact — [Provider docs](https://developers.intercom.com)

```ts
intercom.listSubscriptionsForAContact(input: {
  /** The unique identifier for the contact which is given by Intercom */
  contact_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<SubscriptionTypeList>
```

<sub>`GET /contacts/{contact_id}/subscriptions` · `listSubscriptionsForAContact`</sub>

## `intercom.listTagsForAContact`

List tags attached to a contact — [Provider docs](https://developers.intercom.com)

```ts
intercom.listTagsForAContact(input: {
  /** The unique identifier for the contact which is given by Intercom */
  contact_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<TagList>
```

<sub>`GET /contacts/{contact_id}/tags` · `listTagsForAContact`</sub>

## `intercom.unarchiveContact`

Unarchive contact — [Provider docs](https://developers.intercom.com)

```ts
intercom.unarchiveContact(input: {
  /** contact_id */
  contact_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ContactUnarchived>
```

<sub>`POST /contacts/{contact_id}/unarchive` · `UnarchiveContact`</sub>

## `intercom.showContactByExternalId`

Get a contact by External ID — [Provider docs](https://developers.intercom.com)

```ts
intercom.showContactByExternalId(input: {
  /** The external ID of the user that you want to retrieve */
  external_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Contact>
```

<sub>`GET /contacts/find_by_external_id/{external_id}` · `ShowContactByExternalId`</sub>

## `intercom.mergeContact`

Merge a lead and a user — [Provider docs](https://developers.intercom.com)

```ts
intercom.mergeContact(input: {
  /** The unique identifier for the contact to merge away from. Must be a lead. */
  from: string;
  /** The unique identifier for the contact to merge into. Must be a user. */
  into: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Contact>
```

<sub>`POST /contacts/merge` · `MergeContact`</sub>

## `intercom.searchContacts`

Search contacts — [Provider docs](https://developers.intercom.com)

```ts
intercom.searchContacts(input: {
  query: SingleFilterSearchRequest | MultipleFilterSearchRequest;
  pagination?: StartingAfterPaging;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ContactList>
```

<sub>`POST /contacts/search` · `SearchContacts`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
