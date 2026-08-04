# Oauth

3 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.authorize`

Requesting authorization

```ts
pipedrive.authorize(input: {
  /** The client ID provided to you by the Pipedrive Marketplace when you register your app */
  client_id: string;
  /** The callback URL you provided when you registered your app. Authorization code will be sent to that URL (if it matches with the value you entered in the registration form) if a user approves the app install. Or, if a customer declines, the corresponding error will also be sent to this URL. */
  redirect_uri: string;
  /** You may pass any random string as the state parameter and the same string will be returned to your app after a user authorizes access. It may be used to store the user's session ID from your app or distinguish different responses. Using state may increase security; see RFC-6749.  */
  state?: string;
}): Promise<undefined>
```

<sub>`GET /oauth/authorize` · `authorize`</sub>

## `pipedrive.getTokens`

Getting the tokens

```ts
pipedrive.getTokens(input: {
  /** Since you are trying to exchange an authorization code for a pair of tokens, you must use the value "authorization_code" */
  grant_type?: "authorization_code" | "refresh_token";
  /** The authorization code that you received after the user confirmed app installation */
  code?: string;
  /** The callback URL you provided when you registered your app */
  redirect_uri?: string;
}, options: { headers: { Authorization: string } }): Promise<{ access_token?: string; token_type?: string; refresh_token?: string; scope?: string; expires_in?: number; api_domain?: string }>
```

<sub>`POST /oauth/token` · `get-tokens`</sub>

## `pipedrive.refreshTokens`

Refreshing the tokens

```ts
pipedrive.refreshTokens(input: {
  /** Since you are trying to exchange an authorization code for a pair of tokens, you must use the value "authorization_code" */
  grant_type?: "authorization_code" | "refresh_token";
  /** The authorization code that you received after the user confirmed app installation */
  code?: string;
  /** The callback URL you provided when you registered your app */
  redirect_uri?: string;
}, options: { headers: { Authorization: string } }): Promise<{ access_token?: string; token_type?: string; refresh_token?: string; scope?: string; expires_in?: number; api_domain?: string }>
```

<sub>`POST /oauth/token/` · `refresh-tokens`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
