# Users

8 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getUsersForTeam`

Get users in a team — [Provider docs](https://asana.com/support)

```ts
asana.getUsersForTeam(input: {
  /** Globally unique identifier for the team. */
  team_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("custom_fields" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.representation_type" | "custom_fields.text_value" | "custom_fields.type" | "email" | "name" | "photo" | "photo.image_1024x1024" | "photo.image_128x128" | "photo.image_21x21" | "photo.image_27x27" | "photo.image_36x36" | "photo.image_60x60" | "workspaces" | "workspaces.name")[];
}): Promise<{ data?: (UserCompact)[] }>
```

<sub>`GET /teams/{team_gid}/users` · `getUsersForTeam`</sub>

## `asana.getUsers`

Get multiple users — [Provider docs](https://asana.com/support)

```ts
asana.getUsers(input: {
  /** The workspace or organization ID to filter users on. */
  workspace?: string;
  /** The team ID to filter users on. */
  team?: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("custom_fields" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.representation_type" | "custom_fields.text_value" | "custom_fields.type" | "email" | "name" | "offset" | "path" | "photo" | "photo.image_1024x1024" | "photo.image_128x128" | "photo.image_21x21" | "photo.image_27x27" | "photo.image_36x36" | "photo.image_60x60" | "uri" | "workspaces" | "workspaces.name")[];
}): Promise<{ data?: (UserCompact)[]; next_page?: NextPage }>
```

<sub>`GET /users` · `getUsers`</sub>

## `asana.getUser`

Get a user — [Provider docs](https://asana.com/support)

```ts
asana.getUser(input: {
  /** A string identifying a user. This can either be the string "me", an email, or the gid of a user. */
  user_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** The workspace to filter results on. */
  workspace?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("custom_fields" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.representation_type" | "custom_fields.text_value" | "custom_fields.type" | "email" | "name" | "photo" | "photo.image_1024x1024" | "photo.image_128x128" | "photo.image_21x21" | "photo.image_27x27" | "photo.image_36x36" | "photo.image_60x60" | "workspaces" | "workspaces.name")[];
}): Promise<{ data?: UserResponse }>
```

<sub>`GET /users/{user_gid}` · `getUser`</sub>

## `asana.updateUser`

Update a user — [Provider docs](https://asana.com/support)

```ts
asana.updateUser(input: {
  data?: UserUpdateRequest;
  /** A string identifying a user. This can either be the string "me", an email, or the gid of a user. */
  user_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** The workspace to filter results on. */
  workspace?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("custom_fields" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.representation_type" | "custom_fields.text_value" | "custom_fields.type" | "email" | "name" | "photo" | "photo.image_1024x1024" | "photo.image_128x128" | "photo.image_21x21" | "photo.image_27x27" | "photo.image_36x36" | "photo.image_60x60" | "workspaces" | "workspaces.name")[];
}): Promise<{ data?: UserResponse }>
```

<sub>`PUT /users/{user_gid}` · `updateUser`</sub>

## `asana.getFavoritesForUser`

Get a user's favorites — [Provider docs](https://asana.com/support)

```ts
asana.getFavoritesForUser(input: {
  /** A string identifying a user. This can either be the string "me", an email, or the gid of a user. */
  user_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** The resource type of favorites to be returned. */
  resource_type: "portfolio" | "project" | "tag" | "task" | "user" | "project_template";
  /** The workspace in which to get favorites. */
  workspace: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("name" | "offset" | "path" | "uri")[];
}): Promise<{ data?: (AsanaNamedResource)[]; next_page?: NextPage }>
```

<sub>`GET /users/{user_gid}/favorites` · `getFavoritesForUser`</sub>

## `asana.getUsersForWorkspace`

Get users in a workspace or organization — [Provider docs](https://asana.com/support)

```ts
asana.getUsersForWorkspace(input: {
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("custom_fields" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.representation_type" | "custom_fields.text_value" | "custom_fields.type" | "email" | "name" | "photo" | "photo.image_1024x1024" | "photo.image_128x128" | "photo.image_21x21" | "photo.image_27x27" | "photo.image_36x36" | "photo.image_60x60" | "workspaces" | "workspaces.name")[];
}): Promise<{ data?: (UserCompact)[] }>
```

<sub>`GET /workspaces/{workspace_gid}/users` · `getUsersForWorkspace`</sub>

## `asana.getUserForWorkspace`

Get a user in a workspace or organization — [Provider docs](https://asana.com/support)

```ts
asana.getUserForWorkspace(input: {
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** A string identifying a user. This can either be the string "me", an email, or the gid of a user. */
  user_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("custom_fields" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.representation_type" | "custom_fields.text_value" | "custom_fields.type" | "email" | "name" | "photo" | "photo.image_1024x1024" | "photo.image_128x128" | "photo.image_21x21" | "photo.image_27x27" | "photo.image_36x36" | "photo.image_60x60" | "workspaces" | "workspaces.name")[];
}): Promise<{ data?: UserResponse }>
```

<sub>`GET /workspaces/{workspace_gid}/users/{user_gid}` · `getUserForWorkspace`</sub>

## `asana.updateUserForWorkspace`

Update a user in a workspace or organization — [Provider docs](https://asana.com/support)

```ts
asana.updateUserForWorkspace(input: {
  data?: UserUpdateRequest;
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** A string identifying a user. This can either be the string "me", an email, or the gid of a user. */
  user_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("custom_fields" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.representation_type" | "custom_fields.text_value" | "custom_fields.type" | "email" | "name" | "photo" | "photo.image_1024x1024" | "photo.image_128x128" | "photo.image_21x21" | "photo.image_27x27" | "photo.image_36x36" | "photo.image_60x60" | "workspaces" | "workspaces.name")[];
}): Promise<{ data?: UserResponse }>
```

<sub>`PUT /workspaces/{workspace_gid}/users/{user_gid}` · `updateUserForWorkspace`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
