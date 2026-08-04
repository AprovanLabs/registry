# Admin.Users.Session

2 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.adminUsersSessionInvalidate`

Invalidate a single session for a user by session_id — [API reference](https://api.slack.com/methods/admin.users.session.invalidate)

```ts
slack.adminUsersSessionInvalidate(input: {
  session_id: number;
  /** ID of the team that the session belongs to */
  team_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.users.session.invalidate` · `admin_users_session_invalidate`</sub>

## `slack.adminUsersSessionReset`

Wipes all valid sessions on all devices for a given user — [API reference](https://api.slack.com/methods/admin.users.session.reset)

```ts
slack.adminUsersSessionReset(input: {
  /** Only expire mobile sessions (default: false) */
  mobile_only?: boolean;
  /** The ID of the user to wipe sessions for */
  user_id: string;
  /** Only expire web sessions (default: false) */
  web_only?: boolean;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.users.session.reset` · `admin_users_session_reset`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
