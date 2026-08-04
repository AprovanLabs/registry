# Filters

7 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.deleteFilters`

Delete multiple filters in bulk

```ts
pipedrive.deleteFilters(input: {
  /** The comma-separated filter IDs to delete */
  ids: string;
}): Promise<{ success?: boolean } & { data?: { id?: (number)[] } }>
```

<sub>`DELETE /filters` · `deleteFilters`</sub>

## `pipedrive.getFilters`

Get all filters

```ts
pipedrive.getFilters(input: {
  /** The types of filters to fetch */
  type?: "deals" | "leads" | "org" | "people" | "products" | "activity" | "projects";
}): Promise<{ success?: boolean } & { data?: ({ id?: number; name?: string; filter_code?: string | null; is_editable?: boolean; active_flag?: boolean; type?: "deals" | "leads" | "org" | "people" | "products" | "activity" | "projects"; temporary_flag?: boolean | null; user_id?: number; add_time?: string; update_time?: string | null; visible_to?: "1" | "3" | "5" | "7"; last_used_time?: string | null; custom_vi...>
```

<sub>`GET /filters` · `getFilters`</sub>

## `pipedrive.addFilter`

Add a new filter

```ts
pipedrive.addFilter(input: {
  /** The name of the filter */
  name: string;
  /** The conditions of the filter as a JSON object. Please note that a maximum of 16 conditions is allowed per filter and `date` values must be supplied in the `YYYY-MM-DD` format. It requires a minimum structure as follows: `{"glue":"and","conditions":[{"glue":"and","conditions": [CONDITION_OBJECTS]},{"glue":"or","conditions":[CONDITION_OBJECTS]}]}`. Replace `CONDITION_OBJECTS` with JSON objects of the following structure: `{"object":"","field_id":"", "operator":"","value":"", "extra_value":""}` or leave the array empty. Depending on the object type you should use another API endpoint to get `field_id`. There are five types of objects you can choose from: `"person"`, `"deal"`, `"organization"`, `"product"`, `"activity"` and you can use these types of operators depending on what type of a field you have: `"IS NOT NULL"`, `"IS NULL"`, `"<="`, `">="`, `"<"`, `">"`, `"!="`, `"="`, `"LIKE '$%'"`, `"LIKE '%$%'"`, `"NOT LIKE '$%'"`. To get a better understanding of how filters work try creating them directly from the Pipedrive application. */
  conditions: { [key: string]: unknown };
  /** The type of filter to create */
  type: "deals" | "leads" | "org" | "people" | "products" | "activity" | "projects";
  /** If set to `true`, each condition in the response includes a `field_code` field identifying the field by its code name */
  include_field_code?: boolean;
}): Promise<{ success?: boolean } & { data?: { id?: number; name?: string; filter_code?: string | null; is_editable?: boolean; active_flag?: boolean; type?: "deals" | "leads" | "org" | "people" | "products" | "activity" | "projects"; temporary_flag?: boolean | null; user_id?: number; add_time?: string; update_time?: string | null; visible_to?: "1" | "3" | "5" | "7"; last_used_time?: string | null; custom_vie...>
```

<sub>`POST /filters` · `addFilter`</sub>

## `pipedrive.deleteFilter`

Delete a filter

```ts
pipedrive.deleteFilter(input: {
  /** The ID of the filter */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number } }>
```

<sub>`DELETE /filters/{id}` · `deleteFilter`</sub>

## `pipedrive.getFilter`

Get one filter

```ts
pipedrive.getFilter(input: {
  /** The ID of the filter */
  id: number;
  /** If set to `true`, each condition in the response includes a `field_code` field identifying the field by its code name */
  include_field_code?: boolean;
}): Promise<{ success?: boolean } & { data?: { id?: number; name?: string; filter_code?: string | null; is_editable?: boolean; active_flag?: boolean; type?: "deals" | "leads" | "org" | "people" | "products" | "activity" | "projects"; temporary_flag?: boolean | null; user_id?: number; add_time?: string; update_time?: string | null; visible_to?: "1" | "3" | "5" | "7"; last_used_time?: string | null; custom_vie...>
```

<sub>`GET /filters/{id}` · `getFilter`</sub>

## `pipedrive.updateFilter`

Update filter

```ts
pipedrive.updateFilter(input: {
  /** The name of the filter */
  name?: string;
  /** The conditions of the filter as a JSON object. Please note that a maximum of 16 conditions is allowed per filter and `date` values must be supplied in the `YYYY-MM-DD` format. It requires a minimum structure as follows: `{"glue":"and","conditions":[{"glue":"and","conditions": [CONDITION_OBJECTS]},{"glue":"or","conditions":[CONDITION_OBJECTS]}]}`. Replace `CONDITION_OBJECTS` with JSON objects of the following structure: `{"object":"","field_id":"", "operator":"","value":"", "extra_value":""}` or leave the array empty. Depending on the object type you should use another API endpoint to get `field_id`. There are five types of objects you can choose from: `"person"`, `"deal"`, `"organization"`, `"product"`, `"activity"` and you can use these types of operators depending on what type of a field you have: `"IS NOT NULL"`, `"IS NULL"`, `"<="`, `">="`, `"<"`, `">"`, `"!="`, `"="`, `"LIKE '$%'"`, `"LIKE '%$%'"`, `"NOT LIKE '$%'"`. To get a better understanding of how filters work try creating them directly from the Pipedrive application. */
  conditions: { [key: string]: unknown };
  /** The ID of the filter */
  id: number;
  /** If set to `true`, each condition in the response includes a `field_code` field identifying the field by its code name */
  include_field_code?: boolean;
}): Promise<{ success?: boolean } & { data?: { id?: number; name?: string; filter_code?: string | null; is_editable?: boolean; active_flag?: boolean; type?: "deals" | "leads" | "org" | "people" | "products" | "activity" | "projects"; temporary_flag?: boolean | null; user_id?: number; add_time?: string; update_time?: string | null; visible_to?: "1" | "3" | "5" | "7"; last_used_time?: string | null; custom_vie...>
```

<sub>`PUT /filters/{id}` · `updateFilter`</sub>

## `pipedrive.getFilterHelpers`

Get all filter helpers

```ts
pipedrive.getFilterHelpers(): Promise<{ [key: string]: unknown }>
```

<sub>`GET /filters/helpers` · `getFilterHelpers`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
