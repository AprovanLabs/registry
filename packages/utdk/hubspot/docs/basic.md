# Basic

5 operations · `@utdk/hubspot`

```ts
import hubspot from "@utdk/hubspot";
```

## `hubspot.get.crm.v3.objects.contactsGetPage`

Retrieve contacts

```ts
hubspot.get.crm.v3.objects.contactsGetPage(input: {
  /** The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results. */
  after?: string;
  /** Whether to return only results that have been archived. */
  archived?: boolean;
  /** A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored. */
  associations?: (string)[];
  /** The maximum number of results to display per page. */
  limit?: number;
  /** A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored. */
  properties?: (string)[];
  /** A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of contacts that can be read by a single request. */
  propertiesWithHistory?: (string)[];
}): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging>
```

<sub>`GET /crm/v3/objects/contacts` · `get-/crm/v3/objects/contacts_getPage`</sub>

## `hubspot.post.crm.v3.objects.contactsCreate`

Create a contact

```ts
hubspot.post.crm.v3.objects.contactsCreate(input: {
  associations: (PublicAssociationsForObject)[];
  /** Key-value pairs for setting properties for the new object. */
  properties: { [key: string]: string | undefined };
}): Promise<SimplePublicObject>
```

<sub>`POST /crm/v3/objects/contacts` · `post-/crm/v3/objects/contacts_create`</sub>

## `hubspot.delete.crm.v3.objects.contacts.contactIdArchive`

Archive a contact

```ts
hubspot.delete.crm.v3.objects.contacts.contactIdArchive(input: {
  contactId: string;
}): Promise<undefined>
```

<sub>`DELETE /crm/v3/objects/contacts/{contactId}` · `delete-/crm/v3/objects/contacts/{contactId}_archive`</sub>

## `hubspot.get.crm.v3.objects.contacts.contactIdGetById`

Retrieve a contact

```ts
hubspot.get.crm.v3.objects.contacts.contactIdGetById(input: {
  contactId: string;
  /** Whether to return only results that have been archived. */
  archived?: boolean;
  /** A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored. */
  associations?: (string)[];
  /** The name of a property whose values are unique for this object type */
  idProperty?: string;
  /** A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored. */
  properties?: (string)[];
  /** A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. */
  propertiesWithHistory?: (string)[];
}): Promise<SimplePublicObjectWithAssociations>
```

<sub>`GET /crm/v3/objects/contacts/{contactId}` · `get-/crm/v3/objects/contacts/{contactId}_getById`</sub>

## `hubspot.patch.crm.v3.objects.contacts.contactIdUpdate`

Update a contact

```ts
hubspot.patch.crm.v3.objects.contacts.contactIdUpdate(input: {
  /** Key value pairs representing the properties of the object. */
  properties: { [key: string]: string | undefined };
  contactId: string;
  /** The name of a property whose values are unique for this object type */
  idProperty?: string;
}): Promise<SimplePublicObject>
```

<sub>`PATCH /crm/v3/objects/contacts/{contactId}` · `patch-/crm/v3/objects/contacts/{contactId}_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
