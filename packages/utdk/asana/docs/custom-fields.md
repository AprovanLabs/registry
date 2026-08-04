# Custom Fields

8 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.createCustomField`

Create a custom field — [Provider docs](https://asana.com/support)

```ts
asana.createCustomField(input: {
  data?: CustomFieldCreateRequest;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("asana_created_field" | "created_by" | "created_by.name" | "currency_code" | "custom_label" | "custom_label_position" | "date_value" | "date_value.date" | "date_value.date_time" | "default_access_level" | "description" | "display_value" | "enabled" | "enum_options" | "enum_options.color" | "enum_options.enabled" | "enum_options.name" | "enum_value" | "enum_value.color" | "enum_value.enabled" | "enum_value.name" | "format" | "has_notifications_enabled" | "html_text_value" | "id_prefix" | "input_restrictions" | "is_formula_field" | "is_global_to_workspace" | "is_value_read_only" | "multi_enum_values" | "multi_enum_values.color" | "multi_enum_values.enabled" | "multi_enum_values.name" | "name" | "number_value" | "people_value" | "people_value.name" | "precision" | "privacy_setting" | "reference_value" | "reference_value.name" | "representation_type" | "resource_subtype" | "text_value" | "type")[];
}): Promise<{ data?: CustomFieldResponse }>
```

<sub>`POST /custom_fields` · `createCustomField`</sub>

## `asana.deleteCustomField`

Delete a custom field — [Provider docs](https://asana.com/support)

```ts
asana.deleteCustomField(input: {
  /** Globally unique identifier for the custom field. */
  custom_field_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /custom_fields/{custom_field_gid}` · `deleteCustomField`</sub>

## `asana.getCustomField`

Get a custom field — [Provider docs](https://asana.com/support)

```ts
asana.getCustomField(input: {
  /** Globally unique identifier for the custom field. */
  custom_field_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("asana_created_field" | "created_by" | "created_by.name" | "currency_code" | "custom_label" | "custom_label_position" | "date_value" | "date_value.date" | "date_value.date_time" | "default_access_level" | "description" | "display_value" | "enabled" | "enum_options" | "enum_options.color" | "enum_options.enabled" | "enum_options.name" | "enum_value" | "enum_value.color" | "enum_value.enabled" | "enum_value.name" | "format" | "has_notifications_enabled" | "html_text_value" | "id_prefix" | "input_restrictions" | "is_formula_field" | "is_global_to_workspace" | "is_value_read_only" | "multi_enum_values" | "multi_enum_values.color" | "multi_enum_values.enabled" | "multi_enum_values.name" | "name" | "number_value" | "people_value" | "people_value.name" | "precision" | "privacy_setting" | "reference_value" | "reference_value.name" | "representation_type" | "resource_subtype" | "text_value" | "type")[];
}): Promise<{ data?: CustomFieldResponse }>
```

<sub>`GET /custom_fields/{custom_field_gid}` · `getCustomField`</sub>

## `asana.updateCustomField`

Update a custom field — [Provider docs](https://asana.com/support)

```ts
asana.updateCustomField(input: {
  data?: CustomFieldRequest;
  /** Globally unique identifier for the custom field. */
  custom_field_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("asana_created_field" | "created_by" | "created_by.name" | "currency_code" | "custom_label" | "custom_label_position" | "date_value" | "date_value.date" | "date_value.date_time" | "default_access_level" | "description" | "display_value" | "enabled" | "enum_options" | "enum_options.color" | "enum_options.enabled" | "enum_options.name" | "enum_value" | "enum_value.color" | "enum_value.enabled" | "enum_value.name" | "format" | "has_notifications_enabled" | "html_text_value" | "id_prefix" | "input_restrictions" | "is_formula_field" | "is_global_to_workspace" | "is_value_read_only" | "multi_enum_values" | "multi_enum_values.color" | "multi_enum_values.enabled" | "multi_enum_values.name" | "name" | "number_value" | "people_value" | "people_value.name" | "precision" | "privacy_setting" | "reference_value" | "reference_value.name" | "representation_type" | "resource_subtype" | "text_value" | "type")[];
}): Promise<{ data?: CustomFieldResponse }>
```

<sub>`PUT /custom_fields/{custom_field_gid}` · `updateCustomField`</sub>

## `asana.createEnumOptionForCustomField`

Create an enum option — [Provider docs](https://asana.com/support)

```ts
asana.createEnumOptionForCustomField(input: {
  data?: EnumOptionRequest;
  /** Globally unique identifier for the custom field. */
  custom_field_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("color" | "enabled" | "name")[];
}): Promise<{ data?: EnumOption }>
```

<sub>`POST /custom_fields/{custom_field_gid}/enum_options` · `createEnumOptionForCustomField`</sub>

## `asana.insertEnumOptionForCustomField`

Reorder a custom field's enum — [Provider docs](https://asana.com/support)

```ts
asana.insertEnumOptionForCustomField(input: {
  data?: EnumOptionInsertRequest;
  /** Globally unique identifier for the custom field. */
  custom_field_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("color" | "enabled" | "name")[];
}): Promise<{ data?: EnumOption }>
```

<sub>`POST /custom_fields/{custom_field_gid}/enum_options/insert` · `insertEnumOptionForCustomField`</sub>

## `asana.updateEnumOption`

Update an enum option — [Provider docs](https://asana.com/support)

```ts
asana.updateEnumOption(input: {
  data?: EnumOptionBase;
  /** Globally unique identifier for the enum option. */
  enum_option_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("color" | "enabled" | "name")[];
}): Promise<{ data?: EnumOption }>
```

<sub>`PUT /enum_options/{enum_option_gid}` · `updateEnumOption`</sub>

## `asana.getCustomFieldsForWorkspace`

Get a workspace's custom fields — [Provider docs](https://asana.com/support)

```ts
asana.getCustomFieldsForWorkspace(input: {
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("asana_created_field" | "created_by" | "created_by.name" | "currency_code" | "custom_label" | "custom_label_position" | "date_value" | "date_value.date" | "date_value.date_time" | "default_access_level" | "description" | "display_value" | "enabled" | "enum_options" | "enum_options.color" | "enum_options.enabled" | "enum_options.name" | "enum_value" | "enum_value.color" | "enum_value.enabled" | "enum_value.name" | "format" | "has_notifications_enabled" | "html_text_value" | "id_prefix" | "input_restrictions" | "is_formula_field" | "is_global_to_workspace" | "is_value_read_only" | "multi_enum_values" | "multi_enum_values.color" | "multi_enum_values.enabled" | "multi_enum_values.name" | "name" | "number_value" | "offset" | "path" | "people_value" | "people_value.name" | "precision" | "privacy_setting" | "reference_value" | "reference_value.name" | "representation_type" | "resource_subtype" | "text_value" | "type" | "uri")[];
}): Promise<{ data?: (CustomFieldResponse)[]; next_page?: NextPage }>
```

<sub>`GET /workspaces/{workspace_gid}/custom_fields` · `getCustomFieldsForWorkspace`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
