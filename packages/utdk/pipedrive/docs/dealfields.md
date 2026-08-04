# DealFields

6 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.deleteDealFields`

Delete multiple deal fields in bulk

```ts
pipedrive.deleteDealFields(input: {
  /** The comma-separated field IDs to delete */
  ids: string;
}): Promise<{ success?: boolean } & { data?: { id?: (number)[] } }>
```

<sub>`DELETE /dealFields` · `deleteDealFields`</sub>

## `pipedrive.getDealFields`

Get all deal fields

```ts
pipedrive.getDealFields(input: {
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
}): Promise<{ success?: boolean } & unknown & { data?: ({ id?: number | null; key?: string; name?: string; order_nr?: number; field_type?: "address" | "date" | "daterange" | "double" | "enum" | "monetary" | "org" | "people" | "phone" | "set" | "text" | "time" | "timerange" | "user" | "varchar" | "varchar_auto" | "visible_to"; add_time?: string; update_time?: string | null; last_updated_by_user_id?: number | ...>
```

<sub>`GET /dealFields` · `getDealFields`</sub>

## `pipedrive.addDealField`

Add a new deal field

```ts
pipedrive.addDealField(input: {
  /** The name of the field */
  name: string;
  /** When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. Example: `[{"label":"New Item"}]` */
  options?: ({ [key: string]: unknown })[];
  /** Whether the field is available in the 'add new' modal or not (both in the web and mobile app) */
  add_visible_flag?: boolean;
  /** The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`address`</td><td>Address field</td></tr><tr><td>`date`</td><td>Date (format YYYY-MM-DD)</td></tr><tr><td>`daterange`</td><td>Date-range field (has a start date and end date value, both YYYY-MM-DD)</td></tr><tr><td>`double`</td><td>Numeric value</td></tr><tr><td>`enum`</td><td>Options field with a single possible chosen option</td></tr><tr></tr><tr><td>`monetary`</td><td>Monetary field (has a numeric value and a currency value)</td></tr><tr><td>`org`</td><td>Organization field (contains an organization ID which is stored on the same account)</td></tr><tr><td>`people`</td><td>Person field (contains a person ID which is stored on the same account)</td></tr><tr><td>`phone`</td><td>Phone field (up to 255 numbers and/or characters)</td></tr><tr><td>`set`</td><td>Options field with a possibility of having multiple chosen options</td></tr><tr><td>`text`</td><td>Long text (up to 65k characters)</td></tr><tr><td>`time`</td><td>Time field (format HH:MM:SS)</td></tr><tr><td>`timerange`</td><td>Time-range field (has a start time and end time value, both HH:MM:SS)</td></tr><tr><td>`user`</td><td>User field (contains a user ID of another Pipedrive user)</td></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td></tr><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td></tr><tr><td>`visible_to`</td><td>System field that keeps item's visibility setting</td></tr></table> */
  field_type: "address" | "date" | "daterange" | "double" | "enum" | "monetary" | "org" | "people" | "phone" | "set" | "text" | "time" | "timerange" | "user" | "varchar" | "varchar_auto" | "visible_to";
}): Promise<{ success?: boolean } & { data?: { id?: number | null; key?: string; name?: string; order_nr?: number; field_type?: "address" | "date" | "daterange" | "double" | "enum" | "monetary" | "org" | "people" | "phone" | "set" | "text" | "time" | "timerange" | "user" | "varchar" | "varchar_auto" | "visible_to"; add_time?: string; update_time?: string | null; last_updated_by_user_id?: number | null; creat...>
```

<sub>`POST /dealFields` · `addDealField`</sub>

## `pipedrive.deleteDealField`

Delete a deal field

```ts
pipedrive.deleteDealField(input: {
  /** The ID of the field */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number } }>
```

<sub>`DELETE /dealFields/{id}` · `deleteDealField`</sub>

## `pipedrive.getDealField`

Get one deal field

```ts
pipedrive.getDealField(input: {
  /** The ID of the field */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number | null; key?: string; name?: string; order_nr?: number; field_type?: "address" | "date" | "daterange" | "double" | "enum" | "monetary" | "org" | "people" | "phone" | "set" | "text" | "time" | "timerange" | "user" | "varchar" | "varchar_auto" | "visible_to"; add_time?: string; update_time?: string | null; last_updated_by_user_id?: number | null; creat...>
```

<sub>`GET /dealFields/{id}` · `getDealField`</sub>

## `pipedrive.updateDealField`

Update a deal field

```ts
pipedrive.updateDealField(input: {
  /** The name of the field */
  name?: string;
  /** When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: `[{"id":123,"label":"Existing Item"},{"label":"New Item"}]` */
  options?: ({ [key: string]: unknown })[];
  /** Whether the field is available in 'add new' modal or not (both in web and mobile app) */
  add_visible_flag?: boolean;
  /** The ID of the field */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number | null; key?: string; name?: string; order_nr?: number; field_type?: "address" | "date" | "daterange" | "double" | "enum" | "monetary" | "org" | "people" | "phone" | "set" | "text" | "time" | "timerange" | "user" | "varchar" | "varchar_auto" | "visible_to"; add_time?: string; update_time?: string | null; last_updated_by_user_id?: number | null; creat...>
```

<sub>`PUT /dealFields/{id}` · `updateDealField`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
