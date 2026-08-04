# Users.Profile

2 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.usersProfileGet`

Retrieves a user's profile information. — [API reference](https://api.slack.com/methods/users.profile.get)

```ts
slack.usersProfileGet(input: {
  /** Authentication token. Requires scope: `users.profile:read` */
  token: string;
  /** Include labels for each ID in custom profile fields */
  include_labels?: boolean;
  /** User to retrieve profile info for */
  user?: string;
}): Promise<{ ok: DefsOkTrue; profile: ObjsUserProfile }>
```

<sub>`GET /users.profile.get` · `users_profile_get`</sub>

## `slack.usersProfileSet`

Set the profile information for a user. — [API reference](https://api.slack.com/methods/users.profile.set)

```ts
slack.usersProfileSet(input: {
  /** Name of a single key to set. Usable only if `profile` is not passed. */
  name?: string;
  /** Collection of key:value pairs presented as a URL-encoded JSON hash. At most 50 fields may be set. Each field name is limited to 255 characters. */
  profile?: string;
  /** ID of user to change. This argument may only be specified by team admins on paid teams. */
  user?: string;
  /** Value to set a single key to. Usable only if `profile` is not passed. */
  value?: string;
}, options: { headers: { token: string } }): Promise<{ email_pending?: string; ok: DefsOkTrue; profile: ObjsUserProfile; username: string }>
```

<sub>`POST /users.profile.set` · `users_profile_set`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
