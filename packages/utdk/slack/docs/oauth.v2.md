# Oauth.V2

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.oauthV2Access`

Exchanges a temporary OAuth verifier code for an access token. — [API reference](https://api.slack.com/methods/oauth.v2.access)

```ts
slack.oauthV2Access(input: {
  /** Issued when you created your application. */
  client_id?: string;
  /** Issued when you created your application. */
  client_secret?: string;
  /** The `code` param returned via the OAuth callback. */
  code: string;
  /** This must match the originally submitted URI (if one was sent). */
  redirect_uri?: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /oauth.v2.access` · `oauth_v2_access`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
