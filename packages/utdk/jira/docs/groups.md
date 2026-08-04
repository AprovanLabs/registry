# Groups

8 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.removeGroup`

Remove group — [Provider docs](http://www.atlassian.com)

```ts
jira.removeGroup(input: {
  groupname?: string;
  /** The ID of the group. This parameter cannot be used with the `groupname` parameter. */
  groupId?: string;
  /** As a group's name can change, use of `swapGroupId` is recommended to identify a group.   The group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. This parameter cannot be used with the `swapGroupId` parameter. */
  swapGroup?: string;
  /** The ID of the group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. This parameter cannot be used with the `swapGroup` parameter. */
  swapGroupId?: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/group` · `removeGroup`</sub>

## `jira.getGroup`

Get group — [Provider docs](http://www.atlassian.com)

```ts
jira.getGroup(input: {
  /** As a group's name can change, use of `groupId` is recommended to identify a group.   The name of the group. This parameter cannot be used with the `groupId` parameter. */
  groupname?: string;
  /** The ID of the group. This parameter cannot be used with the `groupName` parameter. */
  groupId?: string;
  /** List of fields to expand. */
  expand?: string;
}): Promise<Group>
```

<sub>`GET /rest/api/3/group` · `getGroup`</sub>

## `jira.createGroup`

Create group — [Provider docs](http://www.atlassian.com)

```ts
jira.createGroup(input: {
  /** The name of the group. */
  name: string;
  [key: string]: unknown;
}): Promise<Group>
```

<sub>`POST /rest/api/3/group` · `createGroup`</sub>

## `jira.bulkGetGroups`

Bulk get groups — [Provider docs](http://www.atlassian.com)

```ts
jira.bulkGetGroups(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The ID of a group. To specify multiple IDs, pass multiple `groupId` parameters. For example, `groupId=5b10a2844c20165700ede21g&groupId=5b10ac8d82e05b22cc7d4ef5`. */
  groupId?: (string)[];
  /** The name of a group. To specify multiple names, pass multiple `groupName` parameters. For example, `groupName=administrators&groupName=jira-software-users`. */
  groupName?: (string)[];
  /** The access level of a group. Valid values: 'site-admin', 'admin', 'user'. */
  accessType?: string;
  /** The application key of the product user groups to search for. Valid values: 'jira-servicedesk', 'jira-software', 'jira-product-discovery', 'jira-core'. */
  applicationKey?: string;
}): Promise<PageBeanGroupDetails>
```

<sub>`GET /rest/api/3/group/bulk` · `bulkGetGroups`</sub>

## `jira.getUsersFromGroup`

Get users from group — [Provider docs](http://www.atlassian.com)

```ts
jira.getUsersFromGroup(input: {
  /** As a group's name can change, use of `groupId` is recommended to identify a group.   The name of the group. This parameter cannot be used with the `groupId` parameter. */
  groupname?: string;
  /** The ID of the group. This parameter cannot be used with the `groupName` parameter. */
  groupId?: string;
  /** Include inactive users. */
  includeInactiveUsers?: boolean;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page (number should be between 1 and 50). */
  maxResults?: number;
}): Promise<PageBeanUserDetails>
```

<sub>`GET /rest/api/3/group/member` · `getUsersFromGroup`</sub>

## `jira.removeUserFromGroup`

Remove user from group — [Provider docs](http://www.atlassian.com)

```ts
jira.removeUserFromGroup(input: {
  /** As a group's name can change, use of `groupId` is recommended to identify a group.   The name of the group. This parameter cannot be used with the `groupId` parameter. */
  groupname?: string;
  /** The ID of the group. This parameter cannot be used with the `groupName` parameter. */
  groupId?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/group/user` · `removeUserFromGroup`</sub>

## `jira.addUserToGroup`

Add user to group — [Provider docs](http://www.atlassian.com)

```ts
jira.addUserToGroup(input: {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;
  /** This property is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  name?: string;
  /** As a group's name can change, use of `groupId` is recommended to identify a group.   The name of the group. This parameter cannot be used with the `groupId` parameter. */
  groupname?: string;
  /** The ID of the group. This parameter cannot be used with the `groupName` parameter. */
  groupId?: string;
  [key: string]: unknown;
}): Promise<Group>
```

<sub>`POST /rest/api/3/group/user` · `addUserToGroup`</sub>

## `jira.findGroups`

Find groups — [Provider docs](http://www.atlassian.com)

```ts
jira.findGroups(input: {
  /** This parameter is deprecated, setting it does not affect the results. To find groups containing a particular user, use [Get user groups](#api-rest-api-3-user-groups-get). */
  accountId?: string;
  /** The string to find in group names. */
  query?: string;
  /** As a group's name can change, use of `excludeGroupIds` is recommended to identify a group.   A group to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, `exclude=group1&exclude=group2`. This parameter cannot be used with the `excludeGroupIds` parameter. */
  exclude?: (string)[];
  /** A group ID to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, `excludeId=group1-id&excludeId=group2-id`. This parameter cannot be used with the `excludeGroups` parameter. */
  excludeId?: (string)[];
  /** The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property `jira.ajax.autocomplete.limit`. */
  maxResults?: number;
  /** Whether the search for groups should be case insensitive. */
  caseInsensitive?: boolean;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  userName?: string;
}): Promise<FoundGroups>
```

<sub>`GET /rest/api/3/groups/picker` · `findGroups`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
