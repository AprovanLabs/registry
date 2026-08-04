# Users

15 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.anonymizeUsers`

Anonymize users — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.anonymizeUsers(input: {
  data: AnonymizeUsersRequestData;
}): Promise<AnonymizeUsersResponse>
```

<sub>`PUT /api/v2/anonymize_users` · `AnonymizeUsers`</sub>

## `datadog.getCurrentUser`

Get current user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCurrentUser(): Promise<UserResponse>
```

<sub>`GET /api/v2/current_user` · `GetCurrentUser`</sub>

## `datadog.updateCurrentUser`

Update current user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCurrentUser(input: {
  data: UserUpdateData;
}): Promise<UserResponse>
```

<sub>`PATCH /api/v2/current_user` · `UpdateCurrentUser`</sub>

## `datadog.sendInvitations`

Send invitation emails — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.sendInvitations(input: {
  /** List of user invitations. */
  data: (UserInvitationData)[];
}): Promise<UserInvitationsResponse>
```

<sub>`POST /api/v2/user_invitations` · `SendInvitations`</sub>

## `datadog.getInvitation`

Get a user invitation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getInvitation(input: {
  /** The UUID of the user invitation. */
  user_invitation_uuid: string;
}): Promise<UserInvitationResponse>
```

<sub>`GET /api/v2/user_invitations/{user_invitation_uuid}` · `GetInvitation`</sub>

## `datadog.listUsers`

List all users — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listUsers(input: {
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  /** User attribute to order results by. Sort order is ascending by default. Sort order is descending if the field is prefixed by a negative sign, for example `sort=-name`. Options: `name`, `modified_at`, `user_count`. */
  sort?: string;
  sort_dir?: QuerySortOrder;
  /** Filter all users by the given string. Defaults to no filtering. */
  filter?: string;
  /** Filter on status attribute. Comma separated list, with possible values `Active`, `Pending`, and `Disabled`. Defaults to no filtering. */
  "filter[status]"?: string;
}): Promise<UsersResponse>
```

<sub>`GET /api/v2/users` · `ListUsers`</sub>

## `datadog.createUser`

Create a user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createUser(input: {
  data: UserCreateData;
}): Promise<UserResponse>
```

<sub>`POST /api/v2/users` · `CreateUser`</sub>

## `datadog.disableUser`

Disable a user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.disableUser(input: {
  /** The ID of the user. */
  user_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/users/{user_id}` · `DisableUser`</sub>

## `datadog.getUser`

Get user details — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getUser(input: {
  /** The ID of the user. */
  user_id: string;
}): Promise<UserResponse>
```

<sub>`GET /api/v2/users/{user_id}` · `GetUser`</sub>

## `datadog.updateUser`

Update a user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateUser(input: {
  data: UserUpdateData;
  /** The ID of the user. */
  user_id: string;
}): Promise<UserResponse>
```

<sub>`PATCH /api/v2/users/{user_id}` · `UpdateUser`</sub>

## `datadog.getUserIdentityProviders`

Get identity provider overrides for a user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getUserIdentityProviders(input: {
  /** The ID of the user. */
  user_id: string;
}): Promise<UserOverrideIdentityProvidersResponse>
```

<sub>`GET /api/v2/users/{user_id}/identity_providers` · `GetUserIdentityProviders`</sub>

## `datadog.deleteUserInvitations`

Delete a pending user's invitations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteUserInvitations(input: {
  /** The UUID of the user whose pending invitations should be canceled. */
  user_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/users/{user_id}/invitations` · `DeleteUserInvitations`</sub>

## `datadog.listUserOrganizations`

Get a user organization — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listUserOrganizations(input: {
  /** The ID of the user. */
  user_id: string;
}): Promise<UserResponse>
```

<sub>`GET /api/v2/users/{user_id}/orgs` · `ListUserOrganizations`</sub>

## `datadog.listUserPermissions`

Get a user permissions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listUserPermissions(input: {
  /** The ID of the user. */
  user_id: string;
}): Promise<PermissionsResponse>
```

<sub>`GET /api/v2/users/{user_id}/permissions` · `ListUserPermissions`</sub>

## `datadog.updateUserIdentityProviders`

Update identity provider overrides for a user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateUserIdentityProviders(input: {
  data: UserRelationshipIdentityProviderDataList;
  /** The ID of the user. */
  user_id: string;
}): Promise<undefined>
```

<sub>`PATCH /api/v2/users/{user_id}/relationships/identity_providers` · `UpdateUserIdentityProviders`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
