# Data Attributes

3 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.lisDataAttributes`

List all data attributes — [Provider docs](https://developers.intercom.com)

```ts
intercom.lisDataAttributes(input: {
  /** Specify the data attribute model to return. */
  model?: "contact" | "company" | "conversation";
  /** Include archived attributes in the list. By default we return only non archived data attributes. */
  include_archived?: boolean;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<DataAttributeList>
```

<sub>`GET /data_attributes` · `lisDataAttributes`</sub>

## `intercom.createDataAttribute`

Create a data attribute — [Provider docs](https://developers.intercom.com)

```ts
intercom.createDataAttribute(input: {
  body?: CreateDataAttributeRequest;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<DataAttribute>
```

<sub>`POST /data_attributes` · `createDataAttribute`</sub>

## `intercom.updateDataAttribute`

Update a data attribute — [Provider docs](https://developers.intercom.com)

```ts
intercom.updateDataAttribute(input: {
  body?: UpdateDataAttributeRequest;
  /** The data attribute id */
  data_attribute_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<DataAttribute>
```

<sub>`PUT /data_attributes/{data_attribute_id}` · `updateDataAttribute`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
