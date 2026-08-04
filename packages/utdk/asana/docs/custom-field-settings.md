# Custom Field Settings

4 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getCustomFieldSettingsForGoal`

Get a goal's custom fields — [Provider docs](https://asana.com/support)

```ts
asana.getCustomFieldSettingsForGoal(input: {
  /** Globally unique identifier for the goal. */
  goal_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("custom_field" | "custom_field.asana_created_field" | "custom_field.created_by" | "custom_field.created_by.name" | "custom_field.currency_code" | "custom_field.custom_label" | "custom_field.custom_label_position" | "custom_field.date_value" | "custom_field.date_value.date" | "custom_field.date_value.date_time" | "custom_field.default_access_level" | "custom_field.description" | "custom_field.display_value" | "custom_field.enabled" | "custom_field.enum_options" | "custom_field.enum_options.color" | "custom_field.enum_options.enabled" | "custom_field.enum_options.name" | "custom_field.enum_value" | "custom_field.enum_value.color" | "custom_field.enum_value.enabled" | "custom_field.enum_value.name" | "custom_field.format" | "custom_field.has_notifications_enabled" | "custom_field.html_text_value" | "custom_field.id_prefix" | "custom_field.input_restrictions" | "custom_field.is_formula_field" | "custom_field.is_global_to_workspace" | "custom_field.is_value_read_only" | "custom_field.multi_enum_values" | "custom_field.multi_enum_values.color" | "custom_field.multi_enum_values.enabled" | "custom_field.multi_enum_values.name" | "custom_field.name" | "custom_field.number_value" | "custom_field.people_value" | "custom_field.people_value.name" | "custom_field.precision" | "custom_field.privacy_setting" | "custom_field.reference_value" | "custom_field.reference_value.name" | "custom_field.representation_type" | "custom_field.resource_subtype" | "custom_field.text_value" | "custom_field.type" | "is_important" | "offset" | "parent" | "parent.name" | "path" | "project" | "project.name" | "uri")[];
}): Promise<{ data?: (CustomFieldSettingResponse)[]; next_page?: NextPage }>
```

<sub>`GET /goals/{goal_gid}/custom_field_settings` · `getCustomFieldSettingsForGoal`</sub>

## `asana.getCustomFieldSettingsForPortfolio`

Get a portfolio's custom fields — [Provider docs](https://asana.com/support)

```ts
asana.getCustomFieldSettingsForPortfolio(input: {
  /** Globally unique identifier for the portfolio. */
  portfolio_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("custom_field" | "custom_field.asana_created_field" | "custom_field.created_by" | "custom_field.created_by.name" | "custom_field.currency_code" | "custom_field.custom_label" | "custom_field.custom_label_position" | "custom_field.date_value" | "custom_field.date_value.date" | "custom_field.date_value.date_time" | "custom_field.default_access_level" | "custom_field.description" | "custom_field.display_value" | "custom_field.enabled" | "custom_field.enum_options" | "custom_field.enum_options.color" | "custom_field.enum_options.enabled" | "custom_field.enum_options.name" | "custom_field.enum_value" | "custom_field.enum_value.color" | "custom_field.enum_value.enabled" | "custom_field.enum_value.name" | "custom_field.format" | "custom_field.has_notifications_enabled" | "custom_field.html_text_value" | "custom_field.id_prefix" | "custom_field.input_restrictions" | "custom_field.is_formula_field" | "custom_field.is_global_to_workspace" | "custom_field.is_value_read_only" | "custom_field.multi_enum_values" | "custom_field.multi_enum_values.color" | "custom_field.multi_enum_values.enabled" | "custom_field.multi_enum_values.name" | "custom_field.name" | "custom_field.number_value" | "custom_field.people_value" | "custom_field.people_value.name" | "custom_field.precision" | "custom_field.privacy_setting" | "custom_field.reference_value" | "custom_field.reference_value.name" | "custom_field.representation_type" | "custom_field.resource_subtype" | "custom_field.text_value" | "custom_field.type" | "is_important" | "offset" | "parent" | "parent.name" | "path" | "project" | "project.name" | "uri")[];
}): Promise<{ data?: (CustomFieldSettingResponse)[]; next_page?: NextPage }>
```

<sub>`GET /portfolios/{portfolio_gid}/custom_field_settings` · `getCustomFieldSettingsForPortfolio`</sub>

## `asana.getCustomFieldSettingsForProject`

Get a project's custom fields — [Provider docs](https://asana.com/support)

```ts
asana.getCustomFieldSettingsForProject(input: {
  /** Globally unique identifier for the project. */
  project_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("custom_field" | "custom_field.asana_created_field" | "custom_field.created_by" | "custom_field.created_by.name" | "custom_field.currency_code" | "custom_field.custom_label" | "custom_field.custom_label_position" | "custom_field.date_value" | "custom_field.date_value.date" | "custom_field.date_value.date_time" | "custom_field.default_access_level" | "custom_field.description" | "custom_field.display_value" | "custom_field.enabled" | "custom_field.enum_options" | "custom_field.enum_options.color" | "custom_field.enum_options.enabled" | "custom_field.enum_options.name" | "custom_field.enum_value" | "custom_field.enum_value.color" | "custom_field.enum_value.enabled" | "custom_field.enum_value.name" | "custom_field.format" | "custom_field.has_notifications_enabled" | "custom_field.html_text_value" | "custom_field.id_prefix" | "custom_field.input_restrictions" | "custom_field.is_formula_field" | "custom_field.is_global_to_workspace" | "custom_field.is_value_read_only" | "custom_field.multi_enum_values" | "custom_field.multi_enum_values.color" | "custom_field.multi_enum_values.enabled" | "custom_field.multi_enum_values.name" | "custom_field.name" | "custom_field.number_value" | "custom_field.people_value" | "custom_field.people_value.name" | "custom_field.precision" | "custom_field.privacy_setting" | "custom_field.reference_value" | "custom_field.reference_value.name" | "custom_field.representation_type" | "custom_field.resource_subtype" | "custom_field.text_value" | "custom_field.type" | "is_important" | "offset" | "parent" | "parent.name" | "path" | "project" | "project.name" | "uri")[];
}): Promise<{ data?: (CustomFieldSettingResponse)[]; next_page?: NextPage }>
```

<sub>`GET /projects/{project_gid}/custom_field_settings` · `getCustomFieldSettingsForProject`</sub>

## `asana.getCustomFieldSettingsForTeam`

Get a team's custom fields — [Provider docs](https://asana.com/support)

```ts
asana.getCustomFieldSettingsForTeam(input: {
  /** Globally unique identifier for the team. */
  team_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("custom_field" | "custom_field.asana_created_field" | "custom_field.created_by" | "custom_field.created_by.name" | "custom_field.currency_code" | "custom_field.custom_label" | "custom_field.custom_label_position" | "custom_field.date_value" | "custom_field.date_value.date" | "custom_field.date_value.date_time" | "custom_field.default_access_level" | "custom_field.description" | "custom_field.display_value" | "custom_field.enabled" | "custom_field.enum_options" | "custom_field.enum_options.color" | "custom_field.enum_options.enabled" | "custom_field.enum_options.name" | "custom_field.enum_value" | "custom_field.enum_value.color" | "custom_field.enum_value.enabled" | "custom_field.enum_value.name" | "custom_field.format" | "custom_field.has_notifications_enabled" | "custom_field.html_text_value" | "custom_field.id_prefix" | "custom_field.input_restrictions" | "custom_field.is_formula_field" | "custom_field.is_global_to_workspace" | "custom_field.is_value_read_only" | "custom_field.multi_enum_values" | "custom_field.multi_enum_values.color" | "custom_field.multi_enum_values.enabled" | "custom_field.multi_enum_values.name" | "custom_field.name" | "custom_field.number_value" | "custom_field.people_value" | "custom_field.people_value.name" | "custom_field.precision" | "custom_field.privacy_setting" | "custom_field.reference_value" | "custom_field.reference_value.name" | "custom_field.representation_type" | "custom_field.resource_subtype" | "custom_field.text_value" | "custom_field.type" | "is_important" | "parent" | "parent.name" | "project" | "project.name")[];
}): Promise<{ data?: (CustomFieldSettingResponse)[] }>
```

<sub>`GET /teams/{team_gid}/custom_field_settings` · `getCustomFieldSettingsForTeam`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
