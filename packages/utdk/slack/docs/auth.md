# Auth

2 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.authRevoke`

Revokes a token. — [API reference](https://api.slack.com/methods/auth.revoke)

```ts
slack.authRevoke(input: {
  /** Authentication token. Requires scope: `none` */
  token: string;
  /** Setting this parameter to `1` triggers a _testing mode_ where the specified token will not actually be revoked. */
  test?: boolean;
}): Promise<{ ok: DefsOkTrue; revoked: boolean }>
```

<sub>`GET /auth.revoke` · `auth_revoke`</sub>

## `slack.authTest`

Checks authentication & identity. — [API reference](https://api.slack.com/methods/auth.test)

```ts
slack.authTest(options: { headers: { token: string } }): Promise<{ bot_id?: DefsBotId; is_enterprise_install?: boolean; ok: DefsOkTrue; team: string; team_id: DefsTeam; url: string; user: string; user_id: DefsUserId }>
```

<sub>`GET /auth.test` · `auth_test`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
