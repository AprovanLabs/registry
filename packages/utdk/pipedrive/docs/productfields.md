# ProductFields

6 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.deleteProductFields`

Delete multiple product fields in bulk

```ts
pipedrive.deleteProductFields(input: {
  /** The comma-separated field IDs to delete */
  ids: string;
}): Promise<{ success?: boolean; data?: { id?: (number)[] } }>
```

<sub>`DELETE /productFields` · `deleteProductFields`</sub>

## `pipedrive.getProductFields`

Get all product fields

```ts
pipedrive.getProductFields(input: {
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
}): Promise<{ success?: boolean; data?: ({ name: string; options?: ({ [key: string]: unknown })[]; field_type: "varchar" | "varchar_auto" | "text" | "double" | "monetary" | "date" | "set" | "enum" | "user" | "org" | "people" | "phone" | "time" | "timerange" | "daterange" | "address" } & { id?: number; key?: string; order_nr?: number; add_time?: string; update_time?: string; last_updated_by_user_id?: number; ...>
```

<sub>`GET /productFields` · `getProductFields`</sub>

## `pipedrive.addProductField`

Add a new product field

```ts
pipedrive.addProductField(input: {
  /** The name of the field */
  name: string;
  /** When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{"label":"red"}, {"label":"blue"}, {"label":"lilac"}]` */
  options?: ({ [key: string]: unknown })[];
  /** The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (up to 65k characters)</td><tr><td>`double`</td><td>Numeric value</td><tr><td>`monetary`</td><td>Monetary field (has a numeric value and a currency value)</td><tr><td>`date`</td><td>Date (format YYYY-MM-DD)</td><tr><td>`set`</td><td>Options field with a possibility of having multiple chosen options</td><tr><td>`enum`</td><td>Options field with a single possible chosen option</td><tr><td>`user`</td><td>User field (contains a user ID of another Pipedrive user)</td><tr><td>`org`</td><td>Organization field (contains an organization ID which is stored on the same account)</td><tr><td>`people`</td><td>Person field (contains a product ID which is stored on the same account)</td><tr><td>`phone`</td><td>Phone field (up to 255 numbers and/or characters)</td><tr><td>`time`</td><td>Time field (format HH:MM:SS)</td><tr><td>`timerange`</td><td>Time-range field (has a start time and end time value, both HH:MM:SS)</td><tr><td>`daterange`</td><td>Date-range field (has a start date and end date value, both YYYY-MM-DD)</td><tr><td>`address`</td><td>Address field</dd></table> */
  field_type: "varchar" | "varchar_auto" | "text" | "double" | "monetary" | "date" | "set" | "enum" | "user" | "org" | "people" | "phone" | "time" | "timerange" | "daterange" | "address";
}): Promise<{ success?: boolean; data?: { name: string; options?: ({ [key: string]: unknown })[]; field_type: "varchar" | "varchar_auto" | "text" | "double" | "monetary" | "date" | "set" | "enum" | "user" | "org" | "people" | "phone" | "time" | "timerange" | "daterange" | "address" } & { id?: number; key?: string; order_nr?: number; add_time?: string; update_time?: string; last_updated_by_user_id?: number; c...>
```

<sub>`POST /productFields` · `addProductField`</sub>

## `pipedrive.deleteProductField`

Delete a product field

```ts
pipedrive.deleteProductField(input: {
  /** The ID of the product field */
  id: number;
}): Promise<{ success?: boolean; data?: { id?: number } }>
```

<sub>`DELETE /productFields/{id}` · `deleteProductField`</sub>

## `pipedrive.getProductField`

Get one product field

```ts
pipedrive.getProductField(input: {
  /** The ID of the product field */
  id: number;
}): Promise<{ success?: boolean; data?: { name: string; options?: ({ [key: string]: unknown })[]; field_type: "varchar" | "varchar_auto" | "text" | "double" | "monetary" | "date" | "set" | "enum" | "user" | "org" | "people" | "phone" | "time" | "timerange" | "daterange" | "address" } & { id?: number; key?: string; order_nr?: number; add_time?: string; update_time?: string; last_updated_by_user_id?: number; c...>
```

<sub>`GET /productFields/{id}` · `getProductField`</sub>

## `pipedrive.updateProductField`

Update a product field

```ts
pipedrive.updateProductField(input: {
  /** The name of the field */
  name?: string;
  /** When `field_type` is either set or enum, possible options on update must be supplied as an array of objects each containing id and label, for example: [{"id":1, "label":"red"},{"id":2, "label":"blue"},{"id":3, "label":"lilac"}] */
  options?: ({ [key: string]: unknown })[];
  /** The ID of the product field */
  id: number;
}): Promise<{ success?: boolean; data?: { name: string; options?: ({ [key: string]: unknown })[]; field_type: "varchar" | "varchar_auto" | "text" | "double" | "monetary" | "date" | "set" | "enum" | "user" | "org" | "people" | "phone" | "time" | "timerange" | "daterange" | "address" } & { id?: number; key?: string; order_nr?: number; add_time?: string; update_time?: string; last_updated_by_user_id?: number; c...>
```

<sub>`PUT /productFields/{id}` · `updateProductField`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
