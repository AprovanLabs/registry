# Software Catalog

8 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listCatalogEntity`

Get a list of entities — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCatalogEntity(input: {
  /** Specific offset to use as the beginning of the returned page. */
  "page[offset]"?: number;
  /** Maximum number of entities in the response. */
  "page[limit]"?: number;
  /** Filter entities by UUID. */
  "filter[id]"?: string;
  /** Filter entities by reference */
  "filter[ref]"?: string;
  /** Filter entities by name. */
  "filter[name]"?: string;
  /** Filter entities by kind. */
  "filter[kind]"?: string;
  /** Filter entities by owner. */
  "filter[owner]"?: string;
  "filter[relation][type]"?: RelationType;
  /** Filter entities by excluding snapshotted entities. */
  "filter[exclude_snapshot]"?: string;
  include?: IncludeType;
  /** If true, includes discovered services from APM and USM that do not have entity definitions. */
  includeDiscovered?: boolean;
}): Promise<ListEntityCatalogResponse>
```

<sub>`GET /api/v2/catalog/entity` · `ListCatalogEntity`</sub>

## `datadog.upsertCatalogEntity`

Create or update entities — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.upsertCatalogEntity(input: {
  body: UpsertCatalogEntityRequest;
}): Promise<UpsertCatalogEntityResponse>
```

<sub>`POST /api/v2/catalog/entity` · `UpsertCatalogEntity`</sub>

## `datadog.deleteCatalogEntity`

Delete a single entity — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCatalogEntity(input: {
  /** UUID or Entity Ref. */
  entity_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/catalog/entity/{entity_id}` · `DeleteCatalogEntity`</sub>

## `datadog.previewCatalogEntities`

Preview catalog entities — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.previewCatalogEntities(): Promise<EntityResponseArray>
```

<sub>`POST /api/v2/catalog/entity/preview` · `PreviewCatalogEntities`</sub>

## `datadog.listCatalogKind`

Get a list of entity kinds — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCatalogKind(input: {
  /** Specific offset to use as the beginning of the returned page. */
  "page[offset]"?: number;
  /** Maximum number of kinds in the response. */
  "page[limit]"?: number;
  /** Filter entities by UUID. */
  "filter[id]"?: string;
  /** Filter entities by name. */
  "filter[name]"?: string;
}): Promise<ListKindCatalogResponse>
```

<sub>`GET /api/v2/catalog/kind` · `ListCatalogKind`</sub>

## `datadog.upsertCatalogKind`

Create or update kinds — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.upsertCatalogKind(input: {
  body: UpsertCatalogKindRequest;
}): Promise<UpsertCatalogKindResponse>
```

<sub>`POST /api/v2/catalog/kind` · `UpsertCatalogKind`</sub>

## `datadog.deleteCatalogKind`

Delete a single kind — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCatalogKind(input: {
  /** Entity kind. */
  kind_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/catalog/kind/{kind_id}` · `DeleteCatalogKind`</sub>

## `datadog.listCatalogRelation`

Get a list of entity relations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCatalogRelation(input: {
  /** Specific offset to use as the beginning of the returned page. */
  "page[offset]"?: number;
  /** Maximum number of relations in the response. */
  "page[limit]"?: number;
  "filter[type]"?: RelationType;
  /** Filter relations by the reference of the first entity in the relation. */
  "filter[from_ref]"?: string;
  /** Filter relations by the reference of the second entity in the relation. */
  "filter[to_ref]"?: string;
  include?: RelationIncludeType;
  /** If true, includes relationships discovered by APM and USM. */
  includeDiscovered?: boolean;
}): Promise<ListRelationCatalogResponse>
```

<sub>`GET /api/v2/catalog/relation` · `ListCatalogRelation`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
