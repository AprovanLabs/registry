# Oauth

2 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiOauthV1Attach`

Attach — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOauthV1Attach(input: {
  /** The OAuth provider's name. */
  provider: string;
  /** The unique ID of a specific User. You may use an `external_id` here if one is set for the user. */
  user_id?: string;
  /** The `session_token` associated with a User's existing Session. */
  session_token?: string;
  /** The `session_jwt` associated with a User's existing Session. */
  session_jwt?: string;
}): Promise<ApiOauthV1AttachResponse>
```

<sub>`POST /v1/oauth/attach` · `api_oauth_v1_Attach`</sub>

## `stytch.apiOauthV1Authenticate`

Authenticate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOauthV1Authenticate(input: {
  /** The OAuth `token` from the `?token=` query parameter in the URL.        The redirect URL will look like `https://example.com/authenticate?stytch_token_type=oauth&token=rM_kw42CWBhsHLF62V75jELMbvJ87njMe3tFVj7Qupu7`        In the redirect URL, the `stytch_token_type` will be `oauth`. See [here](https://stytch.com/docs/workspace-management/redirect-urls) for more detail. */
  token: string;
  /** Reuse an existing session instead of creating a new one. If you provide us with a `session_token`, then we'll update the session represented by this session token with this OAuth factor. If this `session_token` belongs to a different user than the OAuth token, the session_jwt will be ignored. This endpoint will error if both `session_token` and `session_jwt` are provided. */
  session_token?: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will not be created. */
  session_duration_minutes?: number;
  /** Reuse an existing session instead of creating a new one. If you provide us with a `session_jwt`, then we'll update the session represented by this JWT with this OAuth factor. If this `session_jwt` belongs to a different user than the OAuth token, the session_jwt will be ignored. This endpoint will error if both `session_token` and `session_jwt` are provided. */
  session_jwt?: string;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To delete a key, supply a null value.    Custom claims made with reserved claims ("iss", "sub", "aud", "exp", "nbf", "iat", "jti") will be ignored. Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** A base64url encoded one time secret used to validate that the request starts and ends on the same device. */
  code_verifier?: string;
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the User. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiOauthV1AuthenticateResponse>
```

<sub>`POST /v1/oauth/authenticate` · `api_oauth_v1_Authenticate`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
