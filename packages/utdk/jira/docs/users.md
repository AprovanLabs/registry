# Users

13 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.removeUser`

Delete user — [Provider docs](http://www.atlassian.com)

```ts
jira.removeUser(input: {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/user` · `removeUser`</sub>

## `jira.getUser`

Get user — [Provider docs](http://www.atlassian.com)

```ts
jira.getUser(input: {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required. */
  accountId?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details. */
  username?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details. */
  key?: string;
  /** Use [expand](#expansion) to include additional information about users in the response. This parameter accepts a comma-separated list. Expand options include:   *  `groups` includes all groups and nested groups to which the user belongs.  *  `applicationRoles` includes details of all the applications to which the user has access. */
  expand?: string;
}): Promise<User>
```

<sub>`GET /rest/api/3/user` · `getUser`</sub>

## `jira.createUser`

Create user — [Provider docs](http://www.atlassian.com)

```ts
jira.createUser(input: {
  /** Deprecated, do not use. */
  applicationKeys?: (string)[];
  /** This property is no longer available. If the user has an Atlassian account, their display name is not changed. If the user does not have an Atlassian account, they are sent an email asking them set up an account. */
  displayName?: string;
  /** The email address for the user. */
  emailAddress: string;
  /** This property is no longer available. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
  /** This property is no longer available. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  name?: string;
  /** This property is no longer available. If the user has an Atlassian account, their password is not changed. If the user does not have an Atlassian account, they are sent an email asking them set up an account. */
  password?: string;
  /** Products the new user has access to. Valid products are: jira-core, jira-servicedesk, jira-product-discovery, jira-software. To create a user without product access, set this field to be an empty array. */
  products: (string)[];
  /** The URL of the user. */
  self?: string;
  [key: string]: unknown;
}): Promise<User>
```

<sub>`POST /rest/api/3/user` · `createUser`</sub>

## `jira.bulkGetUsers`

Bulk get users — [Provider docs](http://www.atlassian.com)

```ts
jira.bulkGetUsers(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: (string)[];
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: (string)[];
  /** The account ID of a user. To specify multiple users, pass multiple `accountId` parameters. For example, `accountId=5b10a2844c20165700ede21g&accountId=5b10ac8d82e05b22cc7d4ef5`. */
  accountId: (string)[];
}): Promise<PageBeanUser>
```

<sub>`GET /rest/api/3/user/bulk` · `bulkGetUsers`</sub>

## `jira.bulkGetUsersMigration`

Get account IDs for users — [Provider docs](http://www.atlassian.com)

```ts
jira.bulkGetUsersMigration(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** Username of a user. To specify multiple users, pass multiple copies of this parameter. For example, `username=fred&username=barney`. Required if `key` isn't provided. Cannot be provided if `key` is present. */
  username?: (string)[];
  /** Key of a user. To specify multiple users, pass multiple copies of this parameter. For example, `key=fred&key=barney`. Required if `username` isn't provided. Cannot be provided if `username` is present. */
  key?: (string)[];
}): Promise<(UserMigrationBean)[]>
```

<sub>`GET /rest/api/3/user/bulk/migration` · `bulkGetUsersMigration`</sub>

## `jira.resetUserColumns`

Reset user default columns — [Provider docs](http://www.atlassian.com)

```ts
jira.resetUserColumns(input: {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/user/columns` · `resetUserColumns`</sub>

## `jira.getUserDefaultColumns`

Get user default columns — [Provider docs](http://www.atlassian.com)

```ts
jira.getUserDefaultColumns(input: {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;
  /** This parameter is no longer available See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
}): Promise<(ColumnItem)[]>
```

<sub>`GET /rest/api/3/user/columns` · `getUserDefaultColumns`</sub>

## `jira.setUserColumns`

Set user default columns — [Provider docs](http://www.atlassian.com)

```ts
jira.setUserColumns(input: {
  columns?: (string)[];
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/user/columns` · `setUserColumns`</sub>

## `jira.getUserEmail`

Get user email — [Provider docs](http://www.atlassian.com)

```ts
jira.getUserEmail(input: {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, `5b10ac8d82e05b22cc7d4ef5`. */
  accountId: string;
}): Promise<UnrestrictedUserEmail>
```

<sub>`GET /rest/api/3/user/email` · `getUserEmail`</sub>

## `jira.getUserEmailBulk`

Get user email bulk — [Provider docs](http://www.atlassian.com)

```ts
jira.getUserEmailBulk(input: {
  /** The account IDs of the users for which emails are required. An `accountId` is an identifier that uniquely identifies the user across all Atlassian products. For example, `5b10ac8d82e05b22cc7d4ef5`. Note, this should be treated as an opaque identifier (that is, do not assume any structure in the value). */
  accountId: (string)[];
}): Promise<UnrestrictedUserEmail>
```

<sub>`GET /rest/api/3/user/email/bulk` · `getUserEmailBulk`</sub>

## `jira.getUserGroups`

Get user groups — [Provider docs](http://www.atlassian.com)

```ts
jira.getUserGroups(input: {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
}): Promise<(GroupName)[]>
```

<sub>`GET /rest/api/3/user/groups` · `getUserGroups`</sub>

## `jira.getAllUsersDefault`

Get all users default — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllUsersDefault(input: {
  /** The index of the first item to return. */
  startAt?: number;
  /** The maximum number of items to return (limited to 1000). */
  maxResults?: number;
  expand?: string;
}): Promise<(User)[]>
```

<sub>`GET /rest/api/3/users` · `getAllUsersDefault`</sub>

## `jira.getAllUsers`

Get all users — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllUsers(input: {
  /** The index of the first item to return. */
  startAt?: number;
  /** The maximum number of items to return (limited to 1000). */
  maxResults?: number;
  expand?: string;
}): Promise<(User)[]>
```

<sub>`GET /rest/api/3/users/search` · `getAllUsers`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
