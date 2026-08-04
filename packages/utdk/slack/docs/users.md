# Users

10 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.usersConversations`

List conversations the calling user may access. — [API reference](https://api.slack.com/methods/users.conversations)

```ts
slack.usersConversations(input: {
  /** Authentication token. Requires scope: `conversations:read` */
  token?: string;
  /** Browse conversations by a specific user ID's membership. Non-public channels are restricted to those where the calling user shares membership. */
  user?: string;
  /** Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im` */
  types?: string;
  /** Set to `true` to exclude archived channels from the list */
  exclude_archived?: boolean;
  /** The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000. */
  limit?: number;
  /** Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail. */
  cursor?: string;
}): Promise<{ channels: (ObjsConversation)[]; ok: DefsOkTrue; response_metadata?: { next_cursor: string }; [key: string]: unknown }>
```

<sub>`GET /users.conversations` · `users_conversations`</sub>

## `slack.usersDeletePhoto`

Delete the user profile photo — [API reference](https://api.slack.com/methods/users.deletePhoto)

```ts
slack.usersDeletePhoto(input: {
  /** Authentication token. Requires scope: `users.profile:write` */
  token: string;
}): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /users.deletePhoto` · `users_deletePhoto`</sub>

## `slack.usersGetPresence`

Gets user presence information. — [API reference](https://api.slack.com/methods/users.getPresence)

```ts
slack.usersGetPresence(input: {
  /** Authentication token. Requires scope: `users:read` */
  token: string;
  /** User to get presence info on. Defaults to the authed user. */
  user?: string;
}): Promise<{ auto_away?: boolean; connection_count?: number; last_activity?: number; manual_away?: boolean; ok: DefsOkTrue; online?: boolean; presence: string; [key: string]: unknown }>
```

<sub>`GET /users.getPresence` · `users_getPresence`</sub>

## `slack.usersIdentity`

Get a user's identity. — [API reference](https://api.slack.com/methods/users.identity)

```ts
slack.usersIdentity(input: {
  /** Authentication token. Requires scope: `identity.basic` */
  token?: string;
}): Promise<unknown>
```

<sub>`GET /users.identity` · `users_identity`</sub>

## `slack.usersInfo`

Gets information about a user. — [API reference](https://api.slack.com/methods/users.info)

```ts
slack.usersInfo(input: {
  /** Authentication token. Requires scope: `users:read` */
  token: string;
  /** Set this to `true` to receive the locale for this user. Defaults to `false` */
  include_locale?: boolean;
  /** User to get info on */
  user?: string;
}): Promise<{ ok: DefsOkTrue; user: ObjsUser; [key: string]: unknown }>
```

<sub>`GET /users.info` · `users_info`</sub>

## `slack.usersList`

Lists all users in a Slack team. — [API reference](https://api.slack.com/methods/users.list)

```ts
slack.usersList(input: {
  /** Authentication token. Requires scope: `users:read` */
  token?: string;
  /** The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. Providing no `limit` value will result in Slack attempting to deliver you the entire result set. If the collection is too large you may experience `limit_required` or HTTP 500 errors. */
  limit?: number;
  /** Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail. */
  cursor?: string;
  /** Set this to `true` to receive the locale for users. Defaults to `false` */
  include_locale?: boolean;
}): Promise<{ cache_ts: number; members: (ObjsUser)[]; ok: DefsOkTrue; response_metadata?: ObjsResponseMetadata }>
```

<sub>`GET /users.list` · `users_list`</sub>

## `slack.usersLookupByEmail`

Find a user with an email address. — [API reference](https://api.slack.com/methods/users.lookupByEmail)

```ts
slack.usersLookupByEmail(input: {
  /** Authentication token. Requires scope: `users:read.email` */
  token: string;
  /** An email address belonging to a user in the workspace */
  email: string;
}): Promise<{ ok: DefsOkTrue; user: ObjsUser; [key: string]: unknown }>
```

<sub>`GET /users.lookupByEmail` · `users_lookupByEmail`</sub>

## `slack.usersSetActive`

Marked a user as active. Deprecated and non-functional. — [API reference](https://api.slack.com/methods/users.setActive)

```ts
slack.usersSetActive(options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /users.setActive` · `users_setActive`</sub>

## `slack.usersSetPhoto`

Set the user profile photo — [API reference](https://api.slack.com/methods/users.setPhoto)

```ts
slack.usersSetPhoto(input: {
  /** Width/height of crop box (always square) */
  crop_w?: string;
  /** X coordinate of top-left corner of crop box */
  crop_x?: string;
  /** Y coordinate of top-left corner of crop box */
  crop_y?: string;
  /** File contents via `multipart/form-data`. */
  image?: string;
  /** Authentication token. Requires scope: `users.profile:write` */
  token: string;
}): Promise<{ ok: DefsOkTrue; profile: { avatar_hash: string; image_1024: string; image_192: string; image_24: string; image_32: string; image_48: string; image_512: string; image_72: string; image_original: string } }>
```

<sub>`POST /users.setPhoto` · `users_setPhoto`</sub>

## `slack.usersSetPresence`

Manually sets user presence. — [API reference](https://api.slack.com/methods/users.setPresence)

```ts
slack.usersSetPresence(input: {
  /** Either `auto` or `away` */
  presence: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /users.setPresence` · `users_setPresence`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
