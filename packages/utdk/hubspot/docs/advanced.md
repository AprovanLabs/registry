# Advanced

2 operations · `@utdk/hubspot`

```ts
import hubspot from "@utdk/hubspot";
```

## `hubspot.post.crm.v3.objects.contacts.gdprDeletePurge`

Permanently delete a contact (GDPR-compliant)

```ts
hubspot.post.crm.v3.objects.contacts.gdprDeletePurge(input: {
  /** The name of a property whose values are unique for this object. An alternative to identifying a contact by ID. */
  idProperty?: string;
  /** The ID of the contact to permanently delete. */
  objectId: string;
}): Promise<undefined>
```

<sub>`POST /crm/v3/objects/contacts/gdpr-delete` · `post-/crm/v3/objects/contacts/gdpr-delete_purge`</sub>

## `hubspot.post.crm.v3.objects.contacts.mergeMerge`

Merge two contacts

```ts
hubspot.post.crm.v3.objects.contacts.mergeMerge(input: {
  /** The object ID of the record that the merge will not set as the current value after the merge. */
  objectIdToMerge: string;
  /** The object ID of the record that the merge will generally set as the current value after the merge. */
  primaryObjectId: string;
}): Promise<SimplePublicObject>
```

<sub>`POST /crm/v3/objects/contacts/merge` · `post-/crm/v3/objects/contacts/merge_merge`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
