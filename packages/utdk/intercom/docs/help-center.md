# Help Center

7 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.listAllCollections`

List all collections — [Provider docs](https://developers.intercom.com)

```ts
intercom.listAllCollections(options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<CollectionList>
```

<sub>`GET /help_center/collections` · `listAllCollections`</sub>

## `intercom.createCollection`

Create a collection — [Provider docs](https://developers.intercom.com)

```ts
intercom.createCollection(input: {
  /** The name of the collection. For multilingual collections, this will be the name of the default language's content. */
  name: string;
  /** The description of the collection. For multilingual collections, this will be the description of the default language's content. */
  description?: string;
  translated_content?: GroupTranslatedContent;
  /** The id of the parent collection. If `null` then it will be created as the first level collection. */
  parent_id?: string | null;
  /** The id of the help center where the collection will be created. If `null` then it will be created in the default help center. */
  help_center_id?: number | null;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Collection>
```

<sub>`POST /help_center/collections` · `createCollection`</sub>

## `intercom.deleteCollection`

Delete a collection — [Provider docs](https://developers.intercom.com)

```ts
intercom.deleteCollection(input: {
  /** The unique identifier for the collection which is given by Intercom. */
  collection_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<DeletedCollectionObject>
```

<sub>`DELETE /help_center/collections/{collection_id}` · `deleteCollection`</sub>

## `intercom.retrieveCollection`

Retrieve a collection — [Provider docs](https://developers.intercom.com)

```ts
intercom.retrieveCollection(input: {
  /** The unique identifier for the collection which is given by Intercom. */
  collection_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Collection>
```

<sub>`GET /help_center/collections/{collection_id}` · `retrieveCollection`</sub>

## `intercom.updateCollection`

Update a collection — [Provider docs](https://developers.intercom.com)

```ts
intercom.updateCollection(input: {
  /** The name of the collection. For multilingual collections, this will be the name of the default language's content. */
  name?: string;
  /** The description of the collection. For multilingual collections, this will be the description of the default language's content. */
  description?: string;
  translated_content?: GroupTranslatedContent;
  /** The id of the parent collection. If `null` then it will be updated as the first level collection. */
  parent_id?: string | null;
  /** The unique identifier for the collection which is given by Intercom. */
  collection_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Collection>
```

<sub>`PUT /help_center/collections/{collection_id}` · `updateCollection`</sub>

## `intercom.listHelpCenters`

List all Help Centers — [Provider docs](https://developers.intercom.com)

```ts
intercom.listHelpCenters(options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<HelpCenterList>
```

<sub>`GET /help_center/help_centers` · `listHelpCenters`</sub>

## `intercom.retrieveHelpCenter`

Retrieve a Help Center — [Provider docs](https://developers.intercom.com)

```ts
intercom.retrieveHelpCenter(input: {
  /** The unique identifier for the collection which is given by Intercom. */
  help_center_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<HelpCenter>
```

<sub>`GET /help_center/help_centers/{help_center_id}` · `retrieveHelpCenter`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
