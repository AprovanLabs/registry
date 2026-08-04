# Oauth

2 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.oauthAccess`

Exchanges a temporary OAuth verifier code for an access token. — [API reference](https://api.slack.com/methods/oauth.access)

```ts
slack.oauthAccess(input: {
  /** Issued when you created your application. */
  client_id?: string;
  /** Issued when you created your application. */
  client_secret?: string;
  /** The `code` param returned via the OAuth callback. */
  code?: string;
  /** This must match the originally submitted URI (if one was sent). */
  redirect_uri?: string;
  /** Request the user to add your app only to a single channel. Only valid with a [legacy workspace app](https://api.slack.com/legacy-workspace-apps). */
  single_channel?: boolean;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /oauth.access` · `oauth_access`</sub>

## `slack.oauthToken`

Exchanges a temporary OAuth verifier code for a workspace token. — [API reference](https://api.slack.com/methods/oauth.token)

```ts
slack.oauthToken(input: {
  /** Issued when you created your application. */
  client_id?: string;
  /** Issued when you created your application. */
  client_secret?: string;
  /** The `code` param returned via the OAuth callback. */
  code?: string;
  /** This must match the originally submitted URI (if one was sent). */
  redirect_uri?: string;
  /** Request the user to add your app only to a single channel. */
  single_channel?: boolean;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /oauth.token` · `oauth_token`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
