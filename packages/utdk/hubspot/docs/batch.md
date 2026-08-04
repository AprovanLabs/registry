# Batch

5 operations · `@utdk/hubspot`

```ts
import hubspot from "@utdk/hubspot";
```

## `hubspot.post.crm.v3.objects.contacts.batch.archiveArchive`

Archive a batch of contacts

```ts
hubspot.post.crm.v3.objects.contacts.batch.archiveArchive(input: {
  inputs: (SimplePublicObjectId)[];
}): Promise<undefined>
```

<sub>`POST /crm/v3/objects/contacts/batch/archive` · `post-/crm/v3/objects/contacts/batch/archive_archive`</sub>

## `hubspot.post.crm.v3.objects.contacts.batch.createCreate`

Create a batch of contacts

```ts
hubspot.post.crm.v3.objects.contacts.batch.createCreate(input: {
  inputs: (SimplePublicObjectBatchInputForCreate)[];
}): Promise<BatchResponseSimplePublicObject>
```

<sub>`POST /crm/v3/objects/contacts/batch/create` · `post-/crm/v3/objects/contacts/batch/create_create`</sub>

## `hubspot.post.crm.v3.objects.contacts.batch.readRead`

Retrieve a batch of contacts

```ts
hubspot.post.crm.v3.objects.contacts.batch.readRead(input: {
  /** When using a custom unique value property to retrieve records, the name of the property. Do not include this parameter if retrieving by record ID. */
  idProperty?: string;
  inputs: (SimplePublicObjectId)[];
  /** Key-value pairs for setting properties for the new object. */
  properties: (string)[];
  /** Key-value pairs for setting properties for the new object and their histories. */
  propertiesWithHistory: (string)[];
  /** Whether to return only results that have been archived. */
  archived?: boolean;
}): Promise<BatchResponseSimplePublicObject>
```

<sub>`POST /crm/v3/objects/contacts/batch/read` · `post-/crm/v3/objects/contacts/batch/read_read`</sub>

## `hubspot.post.crm.v3.objects.contacts.batch.updateUpdate`

Update a batch of contacts

```ts
hubspot.post.crm.v3.objects.contacts.batch.updateUpdate(input: {
  inputs: (SimplePublicObjectBatchInput)[];
}): Promise<BatchResponseSimplePublicObject>
```

<sub>`POST /crm/v3/objects/contacts/batch/update` · `post-/crm/v3/objects/contacts/batch/update_update`</sub>

## `hubspot.post.crm.v3.objects.contacts.batch.upsertUpsert`

Create or update a batch of contacts

```ts
hubspot.post.crm.v3.objects.contacts.batch.upsertUpsert(input: {
  inputs: (SimplePublicObjectBatchInputUpsert)[];
}): Promise<BatchResponseSimplePublicUpsertObject>
```

<sub>`POST /crm/v3/objects/contacts/batch/upsert` · `post-/crm/v3/objects/contacts/batch/upsert_upsert`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
