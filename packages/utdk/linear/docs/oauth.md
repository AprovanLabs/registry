# OAuth

2 operations · `@utdk/linear`

```ts
import linear from "@utdk/linear";
```

## `linear.revokeOAuthToken`

Revoke an OAuth access token — [Provider docs](https://developers.linear.app)

```ts
linear.revokeOAuthToken(input: {
  /** The access token to revoke */
  access_token: string;
}): Promise<{ [key: string]: unknown }>
```

<sub>`POST /oauth/revoke` · `revokeOAuthToken`</sub>

## `linear.exchangeOAuthToken`

Exchange authorization code for access token — [Provider docs](https://developers.linear.app)

```ts
linear.exchangeOAuthToken(input: {
  /** Authorization code received from the OAuth callback */
  code: string;
  /** Redirect URI used in the authorization request */
  redirect_uri: string;
  /** Application client ID */
  client_id: string;
  /** Application client secret */
  client_secret: string;
  /** OAuth grant type */
  grant_type: "authorization_code";
}): Promise<TokenResponse>
```

<sub>`POST /oauth/token` · `exchangeOAuthToken`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
