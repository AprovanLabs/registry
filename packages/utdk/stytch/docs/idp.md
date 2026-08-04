# Idp

2 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiIdpV1IdpOauthAuthorize`

Authorize — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiIdpV1IdpOauthAuthorize(input: {
  /** Indicates whether the user granted the requested scopes. */
  consent_granted: boolean;
  /** An array of scopes requested by the client. */
  scopes: (string)[];
  /** The ID of the Connected App client. */
  client_id: string;
  /** The callback URI used to redirect the user after authentication. This is the same URI provided at the start of the OAuth flow.  This field is required when using the `authorization_code` grant. */
  redirect_uri: string;
  /** The OAuth 2.0 response type. For authorization code flows this value is `code`. */
  response_type: string;
  /** The unique ID of a specific User. You may use an `external_id` here if one is set for the user. */
  user_id?: string;
  /** The `session_token` associated with a User's existing Session. */
  session_token?: string;
  /** The `session_jwt` associated with a User's existing Session. */
  session_jwt?: string;
  /** Space separated list that specifies how the Authorization Server should prompt the user for reauthentication and consent. Only `consent` is supported today. */
  prompt?: string;
  /** An opaque value used to maintain state between the request and callback. */
  state?: string;
  /** A string used to associate a client session with an ID token to mitigate replay attacks. */
  nonce?: string;
  /** A base64url encoded challenge derived from the code verifier for PKCE flows. */
  code_challenge?: string;
  resources?: (string)[];
}): Promise<ApiIdpV1IdpOauthAuthorizeResponse>
```

<sub>`POST /v1/idp/oauth/authorize` · `api_idp_v1_idp_oauth_Authorize`</sub>

## `stytch.apiIdpV1IdpOauthAuthorizeStart`

Authorizestart — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiIdpV1IdpOauthAuthorizeStart(input: {
  /** The ID of the Connected App client. */
  client_id: string;
  /** The callback URI used to redirect the user after authentication. This is the same URI provided at the start of the OAuth flow.  This field is required when using the `authorization_code` grant. */
  redirect_uri: string;
  /** The OAuth 2.0 response type. For authorization code flows this value is `code`. */
  response_type: string;
  /** An array of scopes requested by the client. */
  scopes: (string)[];
  /** The unique ID of a specific User. You may use an `external_id` here if one is set for the user. */
  user_id?: string;
  /** The `session_token` associated with a User's existing Session. */
  session_token?: string;
  /** The `session_jwt` associated with a User's existing Session. */
  session_jwt?: string;
  /** Space separated list that specifies how the Authorization Server should prompt the user for reauthentication and consent. Only `consent` is supported today. */
  prompt?: string;
}): Promise<ApiIdpV1IdpOauthAuthorizeStartResponse>
```

<sub>`POST /v1/idp/oauth/authorize/start` · `api_idp_v1_idp_oauth_AuthorizeStart`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
