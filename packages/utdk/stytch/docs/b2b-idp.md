# B2B Idp

2 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiB2BIdpV1B2BIdpOauthAuthorize`

Authorize — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BIdpV1B2BIdpOauthAuthorize(input: {
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
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id?: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id?: string;
  /** A secret token for a given Stytch Session. */
  session_token?: string;
  /** The JSON Web Token (JWT) for a given Stytch Session. */
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
}): Promise<ApiB2BIdpV1B2BIdpOauthAuthorizeResponse>
```

<sub>`POST /v1/b2b/idp/oauth/authorize` · `api_b2b_idp_v1_b2b_idp_oauth_Authorize`</sub>

## `stytch.apiB2BIdpV1B2BIdpOauthAuthorizeStart`

Authorizestart — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BIdpV1B2BIdpOauthAuthorizeStart(input: {
  /** The ID of the Connected App client. */
  client_id: string;
  /** The callback URI used to redirect the user after authentication. This is the same URI provided at the start of the OAuth flow.  This field is required when using the `authorization_code` grant. */
  redirect_uri: string;
  /** The OAuth 2.0 response type. For authorization code flows this value is `code`. */
  response_type: string;
  /** An array of scopes requested by the client. */
  scopes: (string)[];
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id?: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id?: string;
  /** A secret token for a given Stytch Session. */
  session_token?: string;
  /** The JSON Web Token (JWT) for a given Stytch Session. */
  session_jwt?: string;
  /** Space separated list that specifies how the Authorization Server should prompt the user for reauthentication and consent. Only `consent` is supported today. */
  prompt?: string;
}): Promise<ApiB2BIdpV1B2BIdpOauthAuthorizeStartResponse>
```

<sub>`POST /v1/b2b/idp/oauth/authorize/start` · `api_b2b_idp_v1_b2b_idp_oauth_AuthorizeStart`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
