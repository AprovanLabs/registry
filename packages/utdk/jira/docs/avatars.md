# Avatars

7 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getAllSystemAvatars`

Get system avatars by type — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllSystemAvatars(input: {
  /** The avatar type. */
  type: "issuetype" | "project" | "user" | "priority";
}): Promise<SystemAvatars>
```

<sub>`GET /rest/api/3/avatar/{type}/system` · `getAllSystemAvatars`</sub>

## `jira.getAvatars`

Get avatars — [Provider docs](http://www.atlassian.com)

```ts
jira.getAvatars(input: {
  /** The avatar type. */
  type: "project" | "issuetype" | "priority";
  /** The ID of the item the avatar is associated with. */
  entityId: string;
}): Promise<Avatars>
```

<sub>`GET /rest/api/3/universal_avatar/type/{type}/owner/{entityId}` · `getAvatars`</sub>

## `jira.storeAvatar`

Load avatar — [Provider docs](http://www.atlassian.com)

```ts
jira.storeAvatar(input: {
  body: unknown;
  /** The avatar type. */
  type: "project" | "issuetype" | "priority";
  /** The ID of the item the avatar is associated with. */
  entityId: string;
  /** The X coordinate of the top-left corner of the crop region. */
  x?: number;
  /** The Y coordinate of the top-left corner of the crop region. */
  y?: number;
  /** The length of each side of the crop region. */
  size: number;
}): Promise<Avatar>
```

<sub>`POST /rest/api/3/universal_avatar/type/{type}/owner/{entityId}` · `storeAvatar`</sub>

## `jira.deleteAvatar`

Delete avatar — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteAvatar(input: {
  /** The avatar type. */
  type: "project" | "issuetype" | "priority";
  /** The ID of the item the avatar is associated with. */
  owningObjectId: string;
  /** The ID of the avatar. */
  id: number;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/universal_avatar/type/{type}/owner/{owningObjectId}/avatar/{id}` · `deleteAvatar`</sub>

## `jira.getAvatarImageByType`

Get avatar image by type — [Provider docs](http://www.atlassian.com)

```ts
jira.getAvatarImageByType(input: {
  /** The icon type of the avatar. */
  type: "issuetype" | "project" | "priority";
  /** The size of the avatar image. If not provided the default size is returned. */
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  /** The format to return the avatar image in. If not provided the original content format is returned. */
  format?: "png" | "svg";
}): Promise<StreamingResponseBody>
```

<sub>`GET /rest/api/3/universal_avatar/view/type/{type}` · `getAvatarImageByType`</sub>

## `jira.getAvatarImageById`

Get avatar image by ID — [Provider docs](http://www.atlassian.com)

```ts
jira.getAvatarImageById(input: {
  /** The icon type of the avatar. */
  type: "issuetype" | "project" | "priority";
  /** The ID of the avatar. */
  id: number;
  /** The size of the avatar image. If not provided the default size is returned. */
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  /** The format to return the avatar image in. If not provided the original content format is returned. */
  format?: "png" | "svg";
}): Promise<StreamingResponseBody>
```

<sub>`GET /rest/api/3/universal_avatar/view/type/{type}/avatar/{id}` · `getAvatarImageByID`</sub>

## `jira.getAvatarImageByOwner`

Get avatar image by owner — [Provider docs](http://www.atlassian.com)

```ts
jira.getAvatarImageByOwner(input: {
  /** The icon type of the avatar. */
  type: "issuetype" | "project" | "priority";
  /** The ID of the project or issue type the avatar belongs to. */
  entityId: string;
  /** The size of the avatar image. If not provided the default size is returned. */
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  /** The format to return the avatar image in. If not provided the original content format is returned. */
  format?: "png" | "svg";
}): Promise<StreamingResponseBody>
```

<sub>`GET /rest/api/3/universal_avatar/view/type/{type}/owner/{entityId}` · `getAvatarImageByOwner`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
