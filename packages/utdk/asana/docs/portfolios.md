# Portfolios

13 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getPortfolios`

Get multiple portfolios — [Provider docs](https://asana.com/support)

```ts
asana.getPortfolios(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** The workspace or organization to filter portfolios on. */
  workspace: string;
  /** The user who owns the portfolio. Currently, API users can only get a list of portfolios that they themselves own, unless the request is made from a Service Account. In the case of a Service Account, if this parameter is specified, then all portfolios owned by this parameter are returned. Otherwise, all portfolios across the workspace are returned. */
  owner?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("archived" | "color" | "created_at" | "created_by" | "created_by.name" | "current_status_update" | "current_status_update.resource_subtype" | "current_status_update.title" | "custom_field_settings" | "custom_field_settings.custom_field" | "custom_field_settings.custom_field.asana_created_field" | "custom_field_settings.custom_field.created_by" | "custom_field_settings.custom_field.created_by.name" | "custom_field_settings.custom_field.currency_code" | "custom_field_settings.custom_field.custom_label" | "custom_field_settings.custom_field.custom_label_position" | "custom_field_settings.custom_field.date_value" | "custom_field_settings.custom_field.date_value.date" | "custom_field_settings.custom_field.date_value.date_time" | "custom_field_settings.custom_field.default_access_level" | "custom_field_settings.custom_field.description" | "custom_field_settings.custom_field.display_value" | "custom_field_settings.custom_field.enabled" | "custom_field_settings.custom_field.enum_options" | "custom_field_settings.custom_field.enum_options.color" | "custom_field_settings.custom_field.enum_options.enabled" | "custom_field_settings.custom_field.enum_options.name" | "custom_field_settings.custom_field.enum_value" | "custom_field_settings.custom_field.enum_value.color" | "custom_field_settings.custom_field.enum_value.enabled" | "custom_field_settings.custom_field.enum_value.name" | "custom_field_settings.custom_field.format" | "custom_field_settings.custom_field.has_notifications_enabled" | "custom_field_settings.custom_field.html_text_value" | "custom_field_settings.custom_field.id_prefix" | "custom_field_settings.custom_field.input_restrictions" | "custom_field_settings.custom_field.is_formula_field" | "custom_field_settings.custom_field.is_global_to_workspace" | "custom_field_settings.custom_field.is_value_read_only" | "custom_field_settings.custom_field.multi_enum_values" | "custom_field_settings.custom_field.multi_enum_values.color" | "custom_field_settings.custom_field.multi_enum_values.enabled" | "custom_field_settings.custom_field.multi_enum_values.name" | "custom_field_settings.custom_field.name" | "custom_field_settings.custom_field.number_value" | "custom_field_settings.custom_field.people_value" | "custom_field_settings.custom_field.people_value.name" | "custom_field_settings.custom_field.precision" | "custom_field_settings.custom_field.privacy_setting" | "custom_field_settings.custom_field.reference_value" | "custom_field_settings.custom_field.reference_value.name" | "custom_field_settings.custom_field.representation_type" | "custom_field_settings.custom_field.resource_subtype" | "custom_field_settings.custom_field.text_value" | "custom_field_settings.custom_field.type" | "custom_field_settings.is_important" | "custom_field_settings.parent" | "custom_field_settings.parent.name" | "custom_field_settings.project" | "custom_field_settings.project.name" | "custom_fields" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.representation_type" | "custom_fields.text_value" | "custom_fields.type" | "default_access_level" | "due_on" | "members" | "members.name" | "name" | "offset" | "owner" | "owner.name" | "path" | "permalink_url" | "privacy_setting" | "project_templates" | "project_templates.name" | "public" | "start_on" | "uri" | "workspace" | "workspace.name")[];
}): Promise<{ data?: (PortfolioCompact)[]; next_page?: NextPage }>
```

<sub>`GET /portfolios` · `getPortfolios`</sub>

## `asana.createPortfolio`

Create a portfolio — [Provider docs](https://asana.com/support)

```ts
asana.createPortfolio(input: {
  data?: PortfolioRequest;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("archived" | "color" | "created_at" | "created_by" | "created_by.name" | "current_status_update" | "current_status_update.resource_subtype" | "current_status_update.title" | "custom_field_settings" | "custom_field_settings.custom_field" | "custom_field_settings.custom_field.asana_created_field" | "custom_field_settings.custom_field.created_by" | "custom_field_settings.custom_field.created_by.name" | "custom_field_settings.custom_field.currency_code" | "custom_field_settings.custom_field.custom_label" | "custom_field_settings.custom_field.custom_label_position" | "custom_field_settings.custom_field.date_value" | "custom_field_settings.custom_field.date_value.date" | "custom_field_settings.custom_field.date_value.date_time" | "custom_field_settings.custom_field.default_access_level" | "custom_field_settings.custom_field.description" | "custom_field_settings.custom_field.display_value" | "custom_field_settings.custom_field.enabled" | "custom_field_settings.custom_field.enum_options" | "custom_field_settings.custom_field.enum_options.color" | "custom_field_settings.custom_field.enum_options.enabled" | "custom_field_settings.custom_field.enum_options.name" | "custom_field_settings.custom_field.enum_value" | "custom_field_settings.custom_field.enum_value.color" | "custom_field_settings.custom_field.enum_value.enabled" | "custom_field_settings.custom_field.enum_value.name" | "custom_field_settings.custom_field.format" | "custom_field_settings.custom_field.has_notifications_enabled" | "custom_field_settings.custom_field.html_text_value" | "custom_field_settings.custom_field.id_prefix" | "custom_field_settings.custom_field.input_restrictions" | "custom_field_settings.custom_field.is_formula_field" | "custom_field_settings.custom_field.is_global_to_workspace" | "custom_field_settings.custom_field.is_value_read_only" | "custom_field_settings.custom_field.multi_enum_values" | "custom_field_settings.custom_field.multi_enum_values.color" | "custom_field_settings.custom_field.multi_enum_values.enabled" | "custom_field_settings.custom_field.multi_enum_values.name" | "custom_field_settings.custom_field.name" | "custom_field_settings.custom_field.number_value" | "custom_field_settings.custom_field.people_value" | "custom_field_settings.custom_field.people_value.name" | "custom_field_settings.custom_field.precision" | "custom_field_settings.custom_field.privacy_setting" | "custom_field_settings.custom_field.reference_value" | "custom_field_settings.custom_field.reference_value.name" | "custom_field_settings.custom_field.representation_type" | "custom_field_settings.custom_field.resource_subtype" | "custom_field_settings.custom_field.text_value" | "custom_field_settings.custom_field.type" | "custom_field_settings.is_important" | "custom_field_settings.parent" | "custom_field_settings.parent.name" | "custom_field_settings.project" | "custom_field_settings.project.name" | "custom_fields" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.representation_type" | "custom_fields.text_value" | "custom_fields.type" | "default_access_level" | "due_on" | "members" | "members.name" | "name" | "owner" | "owner.name" | "permalink_url" | "privacy_setting" | "project_templates" | "project_templates.name" | "public" | "start_on" | "workspace" | "workspace.name")[];
}): Promise<{ data?: PortfolioResponse }>
```

<sub>`POST /portfolios` · `createPortfolio`</sub>

## `asana.deletePortfolio`

Delete a portfolio — [Provider docs](https://asana.com/support)

```ts
asana.deletePortfolio(input: {
  /** Globally unique identifier for the portfolio. */
  portfolio_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /portfolios/{portfolio_gid}` · `deletePortfolio`</sub>

## `asana.getPortfolio`

Get a portfolio — [Provider docs](https://asana.com/support)

```ts
asana.getPortfolio(input: {
  /** Globally unique identifier for the portfolio. */
  portfolio_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("archived" | "color" | "created_at" | "created_by" | "created_by.name" | "current_status_update" | "current_status_update.resource_subtype" | "current_status_update.title" | "custom_field_settings" | "custom_field_settings.custom_field" | "custom_field_settings.custom_field.asana_created_field" | "custom_field_settings.custom_field.created_by" | "custom_field_settings.custom_field.created_by.name" | "custom_field_settings.custom_field.currency_code" | "custom_field_settings.custom_field.custom_label" | "custom_field_settings.custom_field.custom_label_position" | "custom_field_settings.custom_field.date_value" | "custom_field_settings.custom_field.date_value.date" | "custom_field_settings.custom_field.date_value.date_time" | "custom_field_settings.custom_field.default_access_level" | "custom_field_settings.custom_field.description" | "custom_field_settings.custom_field.display_value" | "custom_field_settings.custom_field.enabled" | "custom_field_settings.custom_field.enum_options" | "custom_field_settings.custom_field.enum_options.color" | "custom_field_settings.custom_field.enum_options.enabled" | "custom_field_settings.custom_field.enum_options.name" | "custom_field_settings.custom_field.enum_value" | "custom_field_settings.custom_field.enum_value.color" | "custom_field_settings.custom_field.enum_value.enabled" | "custom_field_settings.custom_field.enum_value.name" | "custom_field_settings.custom_field.format" | "custom_field_settings.custom_field.has_notifications_enabled" | "custom_field_settings.custom_field.html_text_value" | "custom_field_settings.custom_field.id_prefix" | "custom_field_settings.custom_field.input_restrictions" | "custom_field_settings.custom_field.is_formula_field" | "custom_field_settings.custom_field.is_global_to_workspace" | "custom_field_settings.custom_field.is_value_read_only" | "custom_field_settings.custom_field.multi_enum_values" | "custom_field_settings.custom_field.multi_enum_values.color" | "custom_field_settings.custom_field.multi_enum_values.enabled" | "custom_field_settings.custom_field.multi_enum_values.name" | "custom_field_settings.custom_field.name" | "custom_field_settings.custom_field.number_value" | "custom_field_settings.custom_field.people_value" | "custom_field_settings.custom_field.people_value.name" | "custom_field_settings.custom_field.precision" | "custom_field_settings.custom_field.privacy_setting" | "custom_field_settings.custom_field.reference_value" | "custom_field_settings.custom_field.reference_value.name" | "custom_field_settings.custom_field.representation_type" | "custom_field_settings.custom_field.resource_subtype" | "custom_field_settings.custom_field.text_value" | "custom_field_settings.custom_field.type" | "custom_field_settings.is_important" | "custom_field_settings.parent" | "custom_field_settings.parent.name" | "custom_field_settings.project" | "custom_field_settings.project.name" | "custom_fields" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.representation_type" | "custom_fields.text_value" | "custom_fields.type" | "default_access_level" | "due_on" | "members" | "members.name" | "name" | "owner" | "owner.name" | "permalink_url" | "privacy_setting" | "project_templates" | "project_templates.name" | "public" | "start_on" | "workspace" | "workspace.name")[];
}): Promise<{ data?: PortfolioResponse }>
```

<sub>`GET /portfolios/{portfolio_gid}` · `getPortfolio`</sub>

## `asana.updatePortfolio`

Update a portfolio — [Provider docs](https://asana.com/support)

```ts
asana.updatePortfolio(input: {
  data?: PortfolioUpdateRequest;
  /** Globally unique identifier for the portfolio. */
  portfolio_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("archived" | "color" | "created_at" | "created_by" | "created_by.name" | "current_status_update" | "current_status_update.resource_subtype" | "current_status_update.title" | "custom_field_settings" | "custom_field_settings.custom_field" | "custom_field_settings.custom_field.asana_created_field" | "custom_field_settings.custom_field.created_by" | "custom_field_settings.custom_field.created_by.name" | "custom_field_settings.custom_field.currency_code" | "custom_field_settings.custom_field.custom_label" | "custom_field_settings.custom_field.custom_label_position" | "custom_field_settings.custom_field.date_value" | "custom_field_settings.custom_field.date_value.date" | "custom_field_settings.custom_field.date_value.date_time" | "custom_field_settings.custom_field.default_access_level" | "custom_field_settings.custom_field.description" | "custom_field_settings.custom_field.display_value" | "custom_field_settings.custom_field.enabled" | "custom_field_settings.custom_field.enum_options" | "custom_field_settings.custom_field.enum_options.color" | "custom_field_settings.custom_field.enum_options.enabled" | "custom_field_settings.custom_field.enum_options.name" | "custom_field_settings.custom_field.enum_value" | "custom_field_settings.custom_field.enum_value.color" | "custom_field_settings.custom_field.enum_value.enabled" | "custom_field_settings.custom_field.enum_value.name" | "custom_field_settings.custom_field.format" | "custom_field_settings.custom_field.has_notifications_enabled" | "custom_field_settings.custom_field.html_text_value" | "custom_field_settings.custom_field.id_prefix" | "custom_field_settings.custom_field.input_restrictions" | "custom_field_settings.custom_field.is_formula_field" | "custom_field_settings.custom_field.is_global_to_workspace" | "custom_field_settings.custom_field.is_value_read_only" | "custom_field_settings.custom_field.multi_enum_values" | "custom_field_settings.custom_field.multi_enum_values.color" | "custom_field_settings.custom_field.multi_enum_values.enabled" | "custom_field_settings.custom_field.multi_enum_values.name" | "custom_field_settings.custom_field.name" | "custom_field_settings.custom_field.number_value" | "custom_field_settings.custom_field.people_value" | "custom_field_settings.custom_field.people_value.name" | "custom_field_settings.custom_field.precision" | "custom_field_settings.custom_field.privacy_setting" | "custom_field_settings.custom_field.reference_value" | "custom_field_settings.custom_field.reference_value.name" | "custom_field_settings.custom_field.representation_type" | "custom_field_settings.custom_field.resource_subtype" | "custom_field_settings.custom_field.text_value" | "custom_field_settings.custom_field.type" | "custom_field_settings.is_important" | "custom_field_settings.parent" | "custom_field_settings.parent.name" | "custom_field_settings.project" | "custom_field_settings.project.name" | "custom_fields" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.representation_type" | "custom_fields.text_value" | "custom_fields.type" | "default_access_level" | "due_on" | "members" | "members.name" | "name" | "owner" | "owner.name" | "permalink_url" | "privacy_setting" | "project_templates" | "project_templates.name" | "public" | "start_on" | "workspace" | "workspace.name")[];
}): Promise<{ data?: PortfolioResponse }>
```

<sub>`PUT /portfolios/{portfolio_gid}` · `updatePortfolio`</sub>

## `asana.addCustomFieldSettingForPortfolio`

Add a custom field to a portfolio — [Provider docs](https://asana.com/support)

```ts
asana.addCustomFieldSettingForPortfolio(input: {
  data?: AddCustomFieldSettingRequest;
  /** Globally unique identifier for the portfolio. */
  portfolio_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: CustomFieldSettingResponse }>
```

<sub>`POST /portfolios/{portfolio_gid}/addCustomFieldSetting` · `addCustomFieldSettingForPortfolio`</sub>

## `asana.addItemForPortfolio`

Add a portfolio item — [Provider docs](https://asana.com/support)

```ts
asana.addItemForPortfolio(input: {
  data?: PortfolioAddItemRequest;
  /** Globally unique identifier for the portfolio. */
  portfolio_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`POST /portfolios/{portfolio_gid}/addItem` · `addItemForPortfolio`</sub>

## `asana.addMembersForPortfolio`

Add users to a portfolio — [Provider docs](https://asana.com/support)

```ts
asana.addMembersForPortfolio(input: {
  data?: AddMembersRequest;
  /** Globally unique identifier for the portfolio. */
  portfolio_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("archived" | "color" | "created_at" | "created_by" | "created_by.name" | "current_status_update" | "current_status_update.resource_subtype" | "current_status_update.title" | "custom_field_settings" | "custom_field_settings.custom_field" | "custom_field_settings.custom_field.asana_created_field" | "custom_field_settings.custom_field.created_by" | "custom_field_settings.custom_field.created_by.name" | "custom_field_settings.custom_field.currency_code" | "custom_field_settings.custom_field.custom_label" | "custom_field_settings.custom_field.custom_label_position" | "custom_field_settings.custom_field.date_value" | "custom_field_settings.custom_field.date_value.date" | "custom_field_settings.custom_field.date_value.date_time" | "custom_field_settings.custom_field.default_access_level" | "custom_field_settings.custom_field.description" | "custom_field_settings.custom_field.display_value" | "custom_field_settings.custom_field.enabled" | "custom_field_settings.custom_field.enum_options" | "custom_field_settings.custom_field.enum_options.color" | "custom_field_settings.custom_field.enum_options.enabled" | "custom_field_settings.custom_field.enum_options.name" | "custom_field_settings.custom_field.enum_value" | "custom_field_settings.custom_field.enum_value.color" | "custom_field_settings.custom_field.enum_value.enabled" | "custom_field_settings.custom_field.enum_value.name" | "custom_field_settings.custom_field.format" | "custom_field_settings.custom_field.has_notifications_enabled" | "custom_field_settings.custom_field.html_text_value" | "custom_field_settings.custom_field.id_prefix" | "custom_field_settings.custom_field.input_restrictions" | "custom_field_settings.custom_field.is_formula_field" | "custom_field_settings.custom_field.is_global_to_workspace" | "custom_field_settings.custom_field.is_value_read_only" | "custom_field_settings.custom_field.multi_enum_values" | "custom_field_settings.custom_field.multi_enum_values.color" | "custom_field_settings.custom_field.multi_enum_values.enabled" | "custom_field_settings.custom_field.multi_enum_values.name" | "custom_field_settings.custom_field.name" | "custom_field_settings.custom_field.number_value" | "custom_field_settings.custom_field.people_value" | "custom_field_settings.custom_field.people_value.name" | "custom_field_settings.custom_field.precision" | "custom_field_settings.custom_field.privacy_setting" | "custom_field_settings.custom_field.reference_value" | "custom_field_settings.custom_field.reference_value.name" | "custom_field_settings.custom_field.representation_type" | "custom_field_settings.custom_field.resource_subtype" | "custom_field_settings.custom_field.text_value" | "custom_field_settings.custom_field.type" | "custom_field_settings.is_important" | "custom_field_settings.parent" | "custom_field_settings.parent.name" | "custom_field_settings.project" | "custom_field_settings.project.name" | "custom_fields" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.representation_type" | "custom_fields.text_value" | "custom_fields.type" | "default_access_level" | "due_on" | "members" | "members.name" | "name" | "owner" | "owner.name" | "permalink_url" | "privacy_setting" | "project_templates" | "project_templates.name" | "public" | "start_on" | "workspace" | "workspace.name")[];
}): Promise<{ data?: PortfolioResponse }>
```

<sub>`POST /portfolios/{portfolio_gid}/addMembers` · `addMembersForPortfolio`</sub>

## `asana.duplicatePortfolio`

Duplicate a portfolio — [Provider docs](https://asana.com/support)

```ts
asana.duplicatePortfolio(input: {
  data?: PortfolioDuplicateRequest;
  /** Globally unique identifier for the portfolio. */
  portfolio_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("new_graph_export" | "new_graph_export.completed_at" | "new_graph_export.created_at" | "new_graph_export.download_url" | "new_portfolio" | "new_portfolio.name" | "new_project" | "new_project.name" | "new_project_template" | "new_project_template.name" | "new_resource_export" | "new_resource_export.completed_at" | "new_resource_export.created_at" | "new_resource_export.download_url" | "new_task" | "new_task.created_by" | "new_task.name" | "new_task.resource_subtype" | "resource_subtype" | "status")[];
}): Promise<{ data?: JobResponse }>
```

<sub>`POST /portfolios/{portfolio_gid}/duplicate` · `duplicatePortfolio`</sub>

## `asana.getItemsForPortfolio`

Get portfolio items — [Provider docs](https://asana.com/support)

```ts
asana.getItemsForPortfolio(input: {
  /** Globally unique identifier for the portfolio. */
  portfolio_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("offset" | "path" | "uri")[];
}): Promise<{ data?: (PortfolioItemCompact)[]; next_page?: NextPage }>
```

<sub>`GET /portfolios/{portfolio_gid}/items` · `getItemsForPortfolio`</sub>

## `asana.removeCustomFieldSettingForPortfolio`

Remove a custom field from a portfolio — [Provider docs](https://asana.com/support)

```ts
asana.removeCustomFieldSettingForPortfolio(input: {
  data?: RemoveCustomFieldSettingRequest;
  /** Globally unique identifier for the portfolio. */
  portfolio_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`POST /portfolios/{portfolio_gid}/removeCustomFieldSetting` · `removeCustomFieldSettingForPortfolio`</sub>

## `asana.removeItemForPortfolio`

Remove a portfolio item — [Provider docs](https://asana.com/support)

```ts
asana.removeItemForPortfolio(input: {
  data?: PortfolioRemoveItemRequest;
  /** Globally unique identifier for the portfolio. */
  portfolio_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`POST /portfolios/{portfolio_gid}/removeItem` · `removeItemForPortfolio`</sub>

## `asana.removeMembersForPortfolio`

Remove users from a portfolio — [Provider docs](https://asana.com/support)

```ts
asana.removeMembersForPortfolio(input: {
  data?: RemoveMembersRequest;
  /** Globally unique identifier for the portfolio. */
  portfolio_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("archived" | "color" | "created_at" | "created_by" | "created_by.name" | "current_status_update" | "current_status_update.resource_subtype" | "current_status_update.title" | "custom_field_settings" | "custom_field_settings.custom_field" | "custom_field_settings.custom_field.asana_created_field" | "custom_field_settings.custom_field.created_by" | "custom_field_settings.custom_field.created_by.name" | "custom_field_settings.custom_field.currency_code" | "custom_field_settings.custom_field.custom_label" | "custom_field_settings.custom_field.custom_label_position" | "custom_field_settings.custom_field.date_value" | "custom_field_settings.custom_field.date_value.date" | "custom_field_settings.custom_field.date_value.date_time" | "custom_field_settings.custom_field.default_access_level" | "custom_field_settings.custom_field.description" | "custom_field_settings.custom_field.display_value" | "custom_field_settings.custom_field.enabled" | "custom_field_settings.custom_field.enum_options" | "custom_field_settings.custom_field.enum_options.color" | "custom_field_settings.custom_field.enum_options.enabled" | "custom_field_settings.custom_field.enum_options.name" | "custom_field_settings.custom_field.enum_value" | "custom_field_settings.custom_field.enum_value.color" | "custom_field_settings.custom_field.enum_value.enabled" | "custom_field_settings.custom_field.enum_value.name" | "custom_field_settings.custom_field.format" | "custom_field_settings.custom_field.has_notifications_enabled" | "custom_field_settings.custom_field.html_text_value" | "custom_field_settings.custom_field.id_prefix" | "custom_field_settings.custom_field.input_restrictions" | "custom_field_settings.custom_field.is_formula_field" | "custom_field_settings.custom_field.is_global_to_workspace" | "custom_field_settings.custom_field.is_value_read_only" | "custom_field_settings.custom_field.multi_enum_values" | "custom_field_settings.custom_field.multi_enum_values.color" | "custom_field_settings.custom_field.multi_enum_values.enabled" | "custom_field_settings.custom_field.multi_enum_values.name" | "custom_field_settings.custom_field.name" | "custom_field_settings.custom_field.number_value" | "custom_field_settings.custom_field.people_value" | "custom_field_settings.custom_field.people_value.name" | "custom_field_settings.custom_field.precision" | "custom_field_settings.custom_field.privacy_setting" | "custom_field_settings.custom_field.reference_value" | "custom_field_settings.custom_field.reference_value.name" | "custom_field_settings.custom_field.representation_type" | "custom_field_settings.custom_field.resource_subtype" | "custom_field_settings.custom_field.text_value" | "custom_field_settings.custom_field.type" | "custom_field_settings.is_important" | "custom_field_settings.parent" | "custom_field_settings.parent.name" | "custom_field_settings.project" | "custom_field_settings.project.name" | "custom_fields" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.representation_type" | "custom_fields.text_value" | "custom_fields.type" | "default_access_level" | "due_on" | "members" | "members.name" | "name" | "owner" | "owner.name" | "permalink_url" | "privacy_setting" | "project_templates" | "project_templates.name" | "public" | "start_on" | "workspace" | "workspace.name")[];
}): Promise<{ data?: PortfolioResponse }>
```

<sub>`POST /portfolios/{portfolio_gid}/removeMembers` · `removeMembersForPortfolio`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
