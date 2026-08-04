# Issue Priorities

8 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getPriorities`

Get priorities — [Provider docs](http://www.atlassian.com)

```ts
jira.getPriorities(): Promise<(Priority)[]>
```

<sub>`GET /rest/api/3/priority` · `getPriorities`</sub>

## `jira.createPriority`

Create priority — [Provider docs](http://www.atlassian.com)

```ts
jira.createPriority(input: {
  /** The ID for the avatar for the priority. Either the iconUrl or avatarId must be defined, but not both. This parameter is nullable and will become mandatory once the iconUrl parameter is deprecated. */
  avatarId?: number;
  /** The description of the priority. */
  description?: string | null;
  /** The URL of an icon for the priority. Accepted protocols are HTTP and HTTPS. Built in icons can also be used. Either the iconUrl or avatarId must be defined, but not both. */
  iconUrl?: "/images/icons/priorities/blocker.png" | "/images/icons/priorities/critical.png" | "/images/icons/priorities/high.png" | "/images/icons/priorities/highest.png" | "/images/icons/priorities/low.png" | "/images/icons/priorities/lowest.png" | "/images/icons/priorities/major.png" | "/images/icons/priorities/medium.png" | "/images/icons/priorities/minor.png" | "/images/icons/priorities/trivial.png" | "/images/icons/priorities/blocker_new.png" | "/images/icons/priorities/critical_new.png" | "/images/icons/priorities/high_new.png" | "/images/icons/priorities/highest_new.png" | "/images/icons/priorities/low_new.png" | "/images/icons/priorities/lowest_new.png" | "/images/icons/priorities/major_new.png" | "/images/icons/priorities/medium_new.png" | "/images/icons/priorities/minor_new.png" | "/images/icons/priorities/trivial_new.png" | null;
  /** The name of the priority. Must be unique. */
  name: string;
  /** The status color of the priority in 3-digit or 6-digit hexadecimal format. */
  statusColor: string;
  [key: string]: unknown;
}): Promise<PriorityId>
```

<sub>`POST /rest/api/3/priority` · `createPriority`</sub>

## `jira.deletePriority`

Delete priority — [Provider docs](http://www.atlassian.com)

```ts
jira.deletePriority(input: {
  /** The ID of the issue priority. */
  id: string;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/priority/{id}` · `deletePriority`</sub>

## `jira.getPriority`

Get priority — [Provider docs](http://www.atlassian.com)

```ts
jira.getPriority(input: {
  /** The ID of the issue priority. */
  id: string;
}): Promise<Priority>
```

<sub>`GET /rest/api/3/priority/{id}` · `getPriority`</sub>

## `jira.updatePriority`

Update priority — [Provider docs](http://www.atlassian.com)

```ts
jira.updatePriority(input: {
  /** The ID for the avatar for the priority. This parameter is nullable and both iconUrl and avatarId cannot be defined. */
  avatarId?: number;
  /** The description of the priority. */
  description?: string | null;
  /** The URL of an icon for the priority. Accepted protocols are HTTP and HTTPS. Built in icons can also be used. Both iconUrl and avatarId cannot be defined. */
  iconUrl?: "/images/icons/priorities/blocker.png" | "/images/icons/priorities/critical.png" | "/images/icons/priorities/high.png" | "/images/icons/priorities/highest.png" | "/images/icons/priorities/low.png" | "/images/icons/priorities/lowest.png" | "/images/icons/priorities/major.png" | "/images/icons/priorities/medium.png" | "/images/icons/priorities/minor.png" | "/images/icons/priorities/trivial.png" | "/images/icons/priorities/blocker_new.png" | "/images/icons/priorities/critical_new.png" | "/images/icons/priorities/high_new.png" | "/images/icons/priorities/highest_new.png" | "/images/icons/priorities/low_new.png" | "/images/icons/priorities/lowest_new.png" | "/images/icons/priorities/major_new.png" | "/images/icons/priorities/medium_new.png" | "/images/icons/priorities/minor_new.png" | "/images/icons/priorities/trivial_new.png" | null;
  /** The name of the priority. Must be unique. */
  name?: string | null;
  /** The status color of the priority in 3-digit or 6-digit hexadecimal format. */
  statusColor?: string | null;
  /** The ID of the issue priority. */
  id: string;
  [key: string]: unknown;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/priority/{id}` · `updatePriority`</sub>

## `jira.setDefaultPriority`

Set default priority — [Provider docs](http://www.atlassian.com)

```ts
jira.setDefaultPriority(input: {
  /** The ID of the new default issue priority. Must be an existing ID or null. Setting this to null erases the default priority setting. */
  id: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/priority/default` · `setDefaultPriority`</sub>

## `jira.movePriorities`

Move priorities — [Provider docs](http://www.atlassian.com)

```ts
jira.movePriorities(input: {
  /** The ID of the priority. Required if `position` isn't provided. */
  after?: string;
  /** The list of issue IDs to be reordered. Cannot contain duplicates nor after ID. */
  ids: (string)[];
  /** The position for issue priorities to be moved to. Required if `after` isn't provided. */
  position?: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/priority/move` · `movePriorities`</sub>

## `jira.searchPriorities`

Search priorities — [Provider docs](http://www.atlassian.com)

```ts
jira.searchPriorities(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: string;
  /** The maximum number of items to return per page. */
  maxResults?: string;
  /** The list of priority IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=2&id=3`. */
  id?: (string)[];
  /** The list of projects IDs. To include multiple IDs, provide an ampersand-separated list. For example, `projectId=10010&projectId=10111`. */
  projectId?: (string)[];
  /** The name of priority to search for. */
  priorityName?: string;
  /** Whether only the default priority is returned. */
  onlyDefault?: boolean;
  /** Use `schemes` to return the associated priority schemes for each priority. Limited to returning first 15 priority schemes per priority. */
  expand?: string;
}): Promise<PageBeanPriority>
```

<sub>`GET /rest/api/3/priority/search` · `searchPriorities`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
