# Teams

7 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.createTeam`

Create a team — [Provider docs](https://asana.com/support)

```ts
asana.createTeam(input: {
  data?: TeamRequest;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("custom_field_settings" | "custom_field_settings.custom_field" | "custom_field_settings.custom_field.asana_created_field" | "custom_field_settings.custom_field.created_by" | "custom_field_settings.custom_field.created_by.name" | "custom_field_settings.custom_field.currency_code" | "custom_field_settings.custom_field.custom_label" | "custom_field_settings.custom_field.custom_label_position" | "custom_field_settings.custom_field.date_value" | "custom_field_settings.custom_field.date_value.date" | "custom_field_settings.custom_field.date_value.date_time" | "custom_field_settings.custom_field.default_access_level" | "custom_field_settings.custom_field.description" | "custom_field_settings.custom_field.display_value" | "custom_field_settings.custom_field.enabled" | "custom_field_settings.custom_field.enum_options" | "custom_field_settings.custom_field.enum_options.color" | "custom_field_settings.custom_field.enum_options.enabled" | "custom_field_settings.custom_field.enum_options.name" | "custom_field_settings.custom_field.enum_value" | "custom_field_settings.custom_field.enum_value.color" | "custom_field_settings.custom_field.enum_value.enabled" | "custom_field_settings.custom_field.enum_value.name" | "custom_field_settings.custom_field.format" | "custom_field_settings.custom_field.has_notifications_enabled" | "custom_field_settings.custom_field.html_text_value" | "custom_field_settings.custom_field.id_prefix" | "custom_field_settings.custom_field.input_restrictions" | "custom_field_settings.custom_field.is_formula_field" | "custom_field_settings.custom_field.is_global_to_workspace" | "custom_field_settings.custom_field.is_value_read_only" | "custom_field_settings.custom_field.multi_enum_values" | "custom_field_settings.custom_field.multi_enum_values.color" | "custom_field_settings.custom_field.multi_enum_values.enabled" | "custom_field_settings.custom_field.multi_enum_values.name" | "custom_field_settings.custom_field.name" | "custom_field_settings.custom_field.number_value" | "custom_field_settings.custom_field.people_value" | "custom_field_settings.custom_field.people_value.name" | "custom_field_settings.custom_field.precision" | "custom_field_settings.custom_field.privacy_setting" | "custom_field_settings.custom_field.reference_value" | "custom_field_settings.custom_field.reference_value.name" | "custom_field_settings.custom_field.representation_type" | "custom_field_settings.custom_field.resource_subtype" | "custom_field_settings.custom_field.text_value" | "custom_field_settings.custom_field.type" | "custom_field_settings.is_important" | "custom_field_settings.parent" | "custom_field_settings.parent.name" | "custom_field_settings.project" | "custom_field_settings.project.name" | "description" | "edit_team_name_or_description_access_level" | "edit_team_visibility_or_trash_team_access_level" | "endorsed" | "guest_invite_management_access_level" | "html_description" | "join_request_management_access_level" | "member_invite_management_access_level" | "name" | "organization" | "organization.name" | "permalink_url" | "team_content_management_access_level" | "team_member_removal_access_level" | "visibility")[];
}): Promise<{ data?: TeamResponse }>
```

<sub>`POST /teams` · `createTeam`</sub>

## `asana.getTeam`

Get a team — [Provider docs](https://asana.com/support)

```ts
asana.getTeam(input: {
  /** Globally unique identifier for the team. */
  team_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("custom_field_settings" | "custom_field_settings.custom_field" | "custom_field_settings.custom_field.asana_created_field" | "custom_field_settings.custom_field.created_by" | "custom_field_settings.custom_field.created_by.name" | "custom_field_settings.custom_field.currency_code" | "custom_field_settings.custom_field.custom_label" | "custom_field_settings.custom_field.custom_label_position" | "custom_field_settings.custom_field.date_value" | "custom_field_settings.custom_field.date_value.date" | "custom_field_settings.custom_field.date_value.date_time" | "custom_field_settings.custom_field.default_access_level" | "custom_field_settings.custom_field.description" | "custom_field_settings.custom_field.display_value" | "custom_field_settings.custom_field.enabled" | "custom_field_settings.custom_field.enum_options" | "custom_field_settings.custom_field.enum_options.color" | "custom_field_settings.custom_field.enum_options.enabled" | "custom_field_settings.custom_field.enum_options.name" | "custom_field_settings.custom_field.enum_value" | "custom_field_settings.custom_field.enum_value.color" | "custom_field_settings.custom_field.enum_value.enabled" | "custom_field_settings.custom_field.enum_value.name" | "custom_field_settings.custom_field.format" | "custom_field_settings.custom_field.has_notifications_enabled" | "custom_field_settings.custom_field.html_text_value" | "custom_field_settings.custom_field.id_prefix" | "custom_field_settings.custom_field.input_restrictions" | "custom_field_settings.custom_field.is_formula_field" | "custom_field_settings.custom_field.is_global_to_workspace" | "custom_field_settings.custom_field.is_value_read_only" | "custom_field_settings.custom_field.multi_enum_values" | "custom_field_settings.custom_field.multi_enum_values.color" | "custom_field_settings.custom_field.multi_enum_values.enabled" | "custom_field_settings.custom_field.multi_enum_values.name" | "custom_field_settings.custom_field.name" | "custom_field_settings.custom_field.number_value" | "custom_field_settings.custom_field.people_value" | "custom_field_settings.custom_field.people_value.name" | "custom_field_settings.custom_field.precision" | "custom_field_settings.custom_field.privacy_setting" | "custom_field_settings.custom_field.reference_value" | "custom_field_settings.custom_field.reference_value.name" | "custom_field_settings.custom_field.representation_type" | "custom_field_settings.custom_field.resource_subtype" | "custom_field_settings.custom_field.text_value" | "custom_field_settings.custom_field.type" | "custom_field_settings.is_important" | "custom_field_settings.parent" | "custom_field_settings.parent.name" | "custom_field_settings.project" | "custom_field_settings.project.name" | "description" | "edit_team_name_or_description_access_level" | "edit_team_visibility_or_trash_team_access_level" | "endorsed" | "guest_invite_management_access_level" | "html_description" | "join_request_management_access_level" | "member_invite_management_access_level" | "name" | "organization" | "organization.name" | "permalink_url" | "team_content_management_access_level" | "team_member_removal_access_level" | "visibility")[];
}): Promise<{ data?: TeamResponse }>
```

<sub>`GET /teams/{team_gid}` · `getTeam`</sub>

## `asana.updateTeam`

Update a team — [Provider docs](https://asana.com/support)

```ts
asana.updateTeam(input: {
  data?: TeamRequest;
  /** Globally unique identifier for the team. */
  team_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("custom_field_settings" | "custom_field_settings.custom_field" | "custom_field_settings.custom_field.asana_created_field" | "custom_field_settings.custom_field.created_by" | "custom_field_settings.custom_field.created_by.name" | "custom_field_settings.custom_field.currency_code" | "custom_field_settings.custom_field.custom_label" | "custom_field_settings.custom_field.custom_label_position" | "custom_field_settings.custom_field.date_value" | "custom_field_settings.custom_field.date_value.date" | "custom_field_settings.custom_field.date_value.date_time" | "custom_field_settings.custom_field.default_access_level" | "custom_field_settings.custom_field.description" | "custom_field_settings.custom_field.display_value" | "custom_field_settings.custom_field.enabled" | "custom_field_settings.custom_field.enum_options" | "custom_field_settings.custom_field.enum_options.color" | "custom_field_settings.custom_field.enum_options.enabled" | "custom_field_settings.custom_field.enum_options.name" | "custom_field_settings.custom_field.enum_value" | "custom_field_settings.custom_field.enum_value.color" | "custom_field_settings.custom_field.enum_value.enabled" | "custom_field_settings.custom_field.enum_value.name" | "custom_field_settings.custom_field.format" | "custom_field_settings.custom_field.has_notifications_enabled" | "custom_field_settings.custom_field.html_text_value" | "custom_field_settings.custom_field.id_prefix" | "custom_field_settings.custom_field.input_restrictions" | "custom_field_settings.custom_field.is_formula_field" | "custom_field_settings.custom_field.is_global_to_workspace" | "custom_field_settings.custom_field.is_value_read_only" | "custom_field_settings.custom_field.multi_enum_values" | "custom_field_settings.custom_field.multi_enum_values.color" | "custom_field_settings.custom_field.multi_enum_values.enabled" | "custom_field_settings.custom_field.multi_enum_values.name" | "custom_field_settings.custom_field.name" | "custom_field_settings.custom_field.number_value" | "custom_field_settings.custom_field.people_value" | "custom_field_settings.custom_field.people_value.name" | "custom_field_settings.custom_field.precision" | "custom_field_settings.custom_field.privacy_setting" | "custom_field_settings.custom_field.reference_value" | "custom_field_settings.custom_field.reference_value.name" | "custom_field_settings.custom_field.representation_type" | "custom_field_settings.custom_field.resource_subtype" | "custom_field_settings.custom_field.text_value" | "custom_field_settings.custom_field.type" | "custom_field_settings.is_important" | "custom_field_settings.parent" | "custom_field_settings.parent.name" | "custom_field_settings.project" | "custom_field_settings.project.name" | "description" | "edit_team_name_or_description_access_level" | "edit_team_visibility_or_trash_team_access_level" | "endorsed" | "guest_invite_management_access_level" | "html_description" | "join_request_management_access_level" | "member_invite_management_access_level" | "name" | "organization" | "organization.name" | "permalink_url" | "team_content_management_access_level" | "team_member_removal_access_level" | "visibility")[];
}): Promise<{ data?: TeamResponse }>
```

<sub>`PUT /teams/{team_gid}` · `updateTeam`</sub>

## `asana.addUserForTeam`

Add a user to a team — [Provider docs](https://asana.com/support)

```ts
asana.addUserForTeam(input: {
  data?: TeamAddUserRequest;
  /** Globally unique identifier for the team. */
  team_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("is_admin" | "is_guest" | "is_limited_access" | "team" | "team.name" | "user" | "user.name")[];
}): Promise<{ data?: TeamMembershipResponse }>
```

<sub>`POST /teams/{team_gid}/addUser` · `addUserForTeam`</sub>

## `asana.removeUserForTeam`

Remove a user from a team — [Provider docs](https://asana.com/support)

```ts
asana.removeUserForTeam(input: {
  data?: TeamRemoveUserRequest;
  /** Globally unique identifier for the team. */
  team_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`POST /teams/{team_gid}/removeUser` · `removeUserForTeam`</sub>

## `asana.getTeamsForUser`

Get teams for a user — [Provider docs](https://asana.com/support)

```ts
asana.getTeamsForUser(input: {
  /** A string identifying a user. This can either be the string "me", an email, or the gid of a user. */
  user_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** The workspace or organization to filter teams on. */
  organization: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("custom_field_settings" | "custom_field_settings.custom_field" | "custom_field_settings.custom_field.asana_created_field" | "custom_field_settings.custom_field.created_by" | "custom_field_settings.custom_field.created_by.name" | "custom_field_settings.custom_field.currency_code" | "custom_field_settings.custom_field.custom_label" | "custom_field_settings.custom_field.custom_label_position" | "custom_field_settings.custom_field.date_value" | "custom_field_settings.custom_field.date_value.date" | "custom_field_settings.custom_field.date_value.date_time" | "custom_field_settings.custom_field.default_access_level" | "custom_field_settings.custom_field.description" | "custom_field_settings.custom_field.display_value" | "custom_field_settings.custom_field.enabled" | "custom_field_settings.custom_field.enum_options" | "custom_field_settings.custom_field.enum_options.color" | "custom_field_settings.custom_field.enum_options.enabled" | "custom_field_settings.custom_field.enum_options.name" | "custom_field_settings.custom_field.enum_value" | "custom_field_settings.custom_field.enum_value.color" | "custom_field_settings.custom_field.enum_value.enabled" | "custom_field_settings.custom_field.enum_value.name" | "custom_field_settings.custom_field.format" | "custom_field_settings.custom_field.has_notifications_enabled" | "custom_field_settings.custom_field.html_text_value" | "custom_field_settings.custom_field.id_prefix" | "custom_field_settings.custom_field.input_restrictions" | "custom_field_settings.custom_field.is_formula_field" | "custom_field_settings.custom_field.is_global_to_workspace" | "custom_field_settings.custom_field.is_value_read_only" | "custom_field_settings.custom_field.multi_enum_values" | "custom_field_settings.custom_field.multi_enum_values.color" | "custom_field_settings.custom_field.multi_enum_values.enabled" | "custom_field_settings.custom_field.multi_enum_values.name" | "custom_field_settings.custom_field.name" | "custom_field_settings.custom_field.number_value" | "custom_field_settings.custom_field.people_value" | "custom_field_settings.custom_field.people_value.name" | "custom_field_settings.custom_field.precision" | "custom_field_settings.custom_field.privacy_setting" | "custom_field_settings.custom_field.reference_value" | "custom_field_settings.custom_field.reference_value.name" | "custom_field_settings.custom_field.representation_type" | "custom_field_settings.custom_field.resource_subtype" | "custom_field_settings.custom_field.text_value" | "custom_field_settings.custom_field.type" | "custom_field_settings.is_important" | "custom_field_settings.parent" | "custom_field_settings.parent.name" | "custom_field_settings.project" | "custom_field_settings.project.name" | "description" | "edit_team_name_or_description_access_level" | "edit_team_visibility_or_trash_team_access_level" | "endorsed" | "guest_invite_management_access_level" | "html_description" | "join_request_management_access_level" | "member_invite_management_access_level" | "name" | "offset" | "organization" | "organization.name" | "path" | "permalink_url" | "team_content_management_access_level" | "team_member_removal_access_level" | "uri" | "visibility")[];
}): Promise<{ data?: (TeamCompact)[]; next_page?: NextPage }>
```

<sub>`GET /users/{user_gid}/teams` · `getTeamsForUser`</sub>

## `asana.getTeamsForWorkspace`

Get teams in a workspace — [Provider docs](https://asana.com/support)

```ts
asana.getTeamsForWorkspace(input: {
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("custom_field_settings" | "custom_field_settings.custom_field" | "custom_field_settings.custom_field.asana_created_field" | "custom_field_settings.custom_field.created_by" | "custom_field_settings.custom_field.created_by.name" | "custom_field_settings.custom_field.currency_code" | "custom_field_settings.custom_field.custom_label" | "custom_field_settings.custom_field.custom_label_position" | "custom_field_settings.custom_field.date_value" | "custom_field_settings.custom_field.date_value.date" | "custom_field_settings.custom_field.date_value.date_time" | "custom_field_settings.custom_field.default_access_level" | "custom_field_settings.custom_field.description" | "custom_field_settings.custom_field.display_value" | "custom_field_settings.custom_field.enabled" | "custom_field_settings.custom_field.enum_options" | "custom_field_settings.custom_field.enum_options.color" | "custom_field_settings.custom_field.enum_options.enabled" | "custom_field_settings.custom_field.enum_options.name" | "custom_field_settings.custom_field.enum_value" | "custom_field_settings.custom_field.enum_value.color" | "custom_field_settings.custom_field.enum_value.enabled" | "custom_field_settings.custom_field.enum_value.name" | "custom_field_settings.custom_field.format" | "custom_field_settings.custom_field.has_notifications_enabled" | "custom_field_settings.custom_field.html_text_value" | "custom_field_settings.custom_field.id_prefix" | "custom_field_settings.custom_field.input_restrictions" | "custom_field_settings.custom_field.is_formula_field" | "custom_field_settings.custom_field.is_global_to_workspace" | "custom_field_settings.custom_field.is_value_read_only" | "custom_field_settings.custom_field.multi_enum_values" | "custom_field_settings.custom_field.multi_enum_values.color" | "custom_field_settings.custom_field.multi_enum_values.enabled" | "custom_field_settings.custom_field.multi_enum_values.name" | "custom_field_settings.custom_field.name" | "custom_field_settings.custom_field.number_value" | "custom_field_settings.custom_field.people_value" | "custom_field_settings.custom_field.people_value.name" | "custom_field_settings.custom_field.precision" | "custom_field_settings.custom_field.privacy_setting" | "custom_field_settings.custom_field.reference_value" | "custom_field_settings.custom_field.reference_value.name" | "custom_field_settings.custom_field.representation_type" | "custom_field_settings.custom_field.resource_subtype" | "custom_field_settings.custom_field.text_value" | "custom_field_settings.custom_field.type" | "custom_field_settings.is_important" | "custom_field_settings.parent" | "custom_field_settings.parent.name" | "custom_field_settings.project" | "custom_field_settings.project.name" | "description" | "edit_team_name_or_description_access_level" | "edit_team_visibility_or_trash_team_access_level" | "endorsed" | "guest_invite_management_access_level" | "html_description" | "join_request_management_access_level" | "member_invite_management_access_level" | "name" | "offset" | "organization" | "organization.name" | "path" | "permalink_url" | "team_content_management_access_level" | "team_member_removal_access_level" | "uri" | "visibility")[];
}): Promise<{ data?: (TeamCompact)[]; next_page?: NextPage }>
```

<sub>`GET /workspaces/{workspace_gid}/teams` · `getTeamsForWorkspace`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
