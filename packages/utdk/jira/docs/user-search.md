# User Search

8 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.findBulkAssignableUsers`

Find users assignable to projects — [Provider docs](http://www.atlassian.com)

```ts
jira.findBulkAssignableUsers(input: {
  /** A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified. */
  query?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** A query string that is matched exactly against user `accountId`. Required, unless `query` is specified. */
  accountId?: string;
  /** A list of project keys (case sensitive). This parameter accepts a comma-separated list. */
  projectKeys: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<(User)[]>
```

<sub>`GET /rest/api/3/user/assignable/multiProjectSearch` · `findBulkAssignableUsers`</sub>

## `jira.findAssignableUsers`

Find users assignable to issues — [Provider docs](http://www.atlassian.com)

```ts
jira.findAssignableUsers(input: {
  /** A query string that is matched against user attributes, such as `displayName`, and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `username` or `accountId` is specified. */
  query?: string;
  /** The sessionId of this request. SessionId is the same until the assignee is set. */
  sessionId?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** A query string that is matched exactly against user `accountId`. Required, unless `query` is specified. */
  accountId?: string;
  /** The project ID or project key (case sensitive). Required, unless `issueKey` or `issueId` is specified. */
  project?: string;
  /** The key of the issue. Required, unless `issueId` or `project` is specified. */
  issueKey?: string;
  /** The ID of the issue. Required, unless `issueKey` or `project` is specified. */
  issueId?: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return. This operation may return less than the maximum number of items even if more are available. The operation fetches users up to the maximum and then, from the fetched users, returns only the users that can be assigned to the issue. */
  maxResults?: number;
  /** The ID of the transition. */
  actionDescriptorId?: number;
  recommend?: boolean;
  accountType?: (string)[];
  appType?: (string)[];
}): Promise<(User)[]>
```

<sub>`GET /rest/api/3/user/assignable/search` · `findAssignableUsers`</sub>

## `jira.findUsersWithAllPermissions`

Find users with permissions — [Provider docs](http://www.atlassian.com)

```ts
jira.findUsersWithAllPermissions(input: {
  /** A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified. */
  query?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** A query string that is matched exactly against user `accountId`. Required, unless `query` is specified. */
  accountId?: string;
  /** A comma separated list of permissions. Permissions can be specified as any:   *  permission returned by [Get all permissions](#api-rest-api-3-permissions-get).  *  custom project permission added by Connect apps.  *  (deprecated) one of the following:           *  ASSIGNABLE\_USER      *  ASSIGN\_ISSUE      *  ATTACHMENT\_DELETE\_ALL      *  ATTACHMENT\_DELETE\_OWN      *  BROWSE      *  CLOSE\_ISSUE      *  COMMENT\_DELETE\_ALL      *  COMMENT\_DELETE\_OWN      *  COMMENT\_EDIT\_ALL      *  COMMENT\_EDIT\_OWN      *  COMMENT\_ISSUE      *  CREATE\_ATTACHMENT      *  CREATE\_ISSUE      *  DELETE\_ISSUE      *  EDIT\_ISSUE      *  LINK\_ISSUE      *  MANAGE\_WATCHER\_LIST      *  MODIFY\_REPORTER      *  MOVE\_ISSUE      *  PROJECT\_ADMIN      *  RESOLVE\_ISSUE      *  SCHEDULE\_ISSUE      *  SET\_ISSUE\_SECURITY      *  TRANSITION\_ISSUE      *  VIEW\_VERSION\_CONTROL      *  VIEW\_VOTERS\_AND\_WATCHERS      *  VIEW\_WORKFLOW\_READONLY      *  WORKLOG\_DELETE\_ALL      *  WORKLOG\_DELETE\_OWN      *  WORKLOG\_EDIT\_ALL      *  WORKLOG\_EDIT\_OWN      *  WORK\_ISSUE */
  permissions: string;
  /** The issue key for the issue. */
  issueKey?: string;
  /** The project key for the project (case sensitive). */
  projectKey?: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<(User)[]>
```

<sub>`GET /rest/api/3/user/permission/search` · `findUsersWithAllPermissions`</sub>

## `jira.findUsersForPicker`

Find users for picker — [Provider docs](http://www.atlassian.com)

```ts
jira.findUsersForPicker(input: {
  /** A query string that is matched against user attributes, such as `displayName`, and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. */
  query: string;
  /** The maximum number of items to return. The total number of matched users is returned in `total`. */
  maxResults?: number;
  /** Include the URI to the user's avatar. */
  showAvatar?: boolean;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  exclude?: (string)[];
  /** A list of account IDs to exclude from the search results. This parameter accepts a comma-separated list. Multiple account IDs can also be provided using an ampersand-separated list. For example, `excludeAccountIds=5b10a2844c20165700ede21g,5b10a0effa615349cb016cd8&excludeAccountIds=5b10ac8d82e05b22cc7d4ef5`. Cannot be provided with `exclude`. */
  excludeAccountIds?: (string)[];
  avatarSize?: string;
  excludeConnectUsers?: boolean;
}): Promise<FoundUsers>
```

<sub>`GET /rest/api/3/user/picker` · `findUsersForPicker`</sub>

## `jira.findUsers`

Find users — [Provider docs](http://www.atlassian.com)

```ts
jira.findUsers(input: {
  /** A query string that is matched against user attributes ( `displayName`, and `emailAddress`) to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` or `property` is specified. */
  query?: string;
  username?: string;
  /** A query string that is matched exactly against a user `accountId`. Required, unless `query` or `property` is specified. */
  accountId?: string;
  /** The index of the first item to return in a page of filtered results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** A query string used to search properties. Property keys are specified by path, so property keys containing dot (.) or equals (=) characters cannot be used. The query string cannot be specified using a JSON object. Example: To search for the value of `nested` from `{"something":{"nested":1,"other":2}}` use `thepropertykey.something.nested=1`. Required, unless `accountId` or `query` is specified. */
  property?: string;
}): Promise<(User)[]>
```

<sub>`GET /rest/api/3/user/search` · `findUsers`</sub>

## `jira.findUsersByQuery`

Find users by query — [Provider docs](http://www.atlassian.com)

```ts
jira.findUsersByQuery(input: {
  /** The search query. */
  query: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageBeanUser>
```

<sub>`GET /rest/api/3/user/search/query` · `findUsersByQuery`</sub>

## `jira.findUserKeysByQuery`

Find user keys by query — [Provider docs](http://www.atlassian.com)

```ts
jira.findUserKeysByQuery(input: {
  /** The search query. */
  query: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResult?: number;
}): Promise<PageBeanUserKey>
```

<sub>`GET /rest/api/3/user/search/query/key` · `findUserKeysByQuery`</sub>

## `jira.findUsersWithBrowsePermission`

Find users with browse permission — [Provider docs](http://www.atlassian.com)

```ts
jira.findUsersWithBrowsePermission(input: {
  /** A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified. */
  query?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** A query string that is matched exactly against user `accountId`. Required, unless `query` is specified. */
  accountId?: string;
  /** The issue key for the issue. Required, unless `projectKey` is specified. */
  issueKey?: string;
  /** The project key for the project (case sensitive). Required, unless `issueKey` is specified. */
  projectKey?: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<(User)[]>
```

<sub>`GET /rest/api/3/user/viewissue/search` · `findUsersWithBrowsePermission`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
