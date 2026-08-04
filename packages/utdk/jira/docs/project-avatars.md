# Project Avatars

4 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.updateProjectAvatar`

Set project avatar — [Provider docs](http://www.atlassian.com)

```ts
jira.updateProjectAvatar(input: {
  /** The file name of the avatar icon. Returned for system avatars. */
  fileName?: string;
  /** The ID of the avatar. */
  id: string;
  /** Whether the avatar can be deleted. */
  isDeletable?: boolean;
  /** Whether the avatar is used in Jira. For example, shown as a project's avatar. */
  isSelected?: boolean;
  /** Whether the avatar is a system avatar. */
  isSystemAvatar?: boolean;
  /** The owner of the avatar. For a system avatar the owner is null (and nothing is returned). For non-system avatars this is the appropriate identifier, such as the ID for a project or the account ID for a user. */
  owner?: string;
  /** The list of avatar icon URLs. */
  urls?: { [key: string]: string | undefined };
  /** The ID or (case-sensitive) key of the project. */
  projectIdOrKey: string;
  [key: string]: unknown;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/project/{projectIdOrKey}/avatar` · `updateProjectAvatar`</sub>

## `jira.deleteProjectAvatar`

Delete project avatar — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteProjectAvatar(input: {
  /** The project ID or (case-sensitive) key. */
  projectIdOrKey: string;
  /** The ID of the avatar. */
  id: number;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/project/{projectIdOrKey}/avatar/{id}` · `deleteProjectAvatar`</sub>

## `jira.createProjectAvatar`

Load project avatar — [Provider docs](http://www.atlassian.com)

```ts
jira.createProjectAvatar(input: {
  body: unknown;
  /** The ID or (case-sensitive) key of the project. */
  projectIdOrKey: string;
  /** The X coordinate of the top-left corner of the crop region. */
  x?: number;
  /** The Y coordinate of the top-left corner of the crop region. */
  y?: number;
  /** The length of each side of the crop region. */
  size?: number;
}): Promise<Avatar>
```

<sub>`POST /rest/api/3/project/{projectIdOrKey}/avatar2` · `createProjectAvatar`</sub>

## `jira.getAllProjectAvatars`

Get all project avatars — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllProjectAvatars(input: {
  /** The ID or (case-sensitive) key of the project. */
  projectIdOrKey: string;
}): Promise<ProjectAvatars>
```

<sub>`GET /rest/api/3/project/{projectIdOrKey}/avatars` · `getAllProjectAvatars`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
