# Magic

2 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiMagicV1Create`

Create — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiMagicV1Create(input: {
  /** The unique ID of a specific User. You may use an `external_id` here if one is set for the user. */
  user_id: string;
  /** Set the expiration for the Magic Link `token` in minutes. By default, it expires in 1 hour. The minimum expiration is 5 minutes and the maximum is 7 days (10080 mins). */
  expiration_minutes?: number;
  /** Provided attributes to help with fraud detection. These values are pulled and passed into Stytch endpoints by your application. */
  attributes?: ApiAttributeV1Attributes;
}): Promise<ApiMagicV1CreateResponse>
```

<sub>`POST /v1/magic_links` · `api_magic_v1_Create`</sub>

## `stytch.apiMagicV1Authenticate`

Authenticate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiMagicV1Authenticate(input: {
  /** The Magic Link `token` from the `?token=` query parameter in the URL.        The redirect URL will look like `https://example.com/authenticate?stytch_token_type=magic_links&token=rM_kw42CWBhsHLF62V75jELMbvJ87njMe3tFVj7Qupu7`        In the redirect URL, the `stytch_token_type` will be `magic_link`. See [here](https://stytch.com/docs/workspace-management/redirect-urls) for more detail. */
  token: string;
  /** Provided attributes to help with fraud detection. These values are pulled and passed into Stytch endpoints by your application. */
  attributes?: ApiAttributeV1Attributes;
  /** Specify optional security settings. */
  options?: ApiMagicV1Options;
  /** The `session_token` associated with a User's existing Session. */
  session_token?: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will not be created. */
  session_duration_minutes?: number;
  /** The `session_jwt` associated with a User's existing Session. */
  session_jwt?: string;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To delete a key, supply a null value.    Custom claims made with reserved claims ("iss", "sub", "aud", "exp", "nbf", "iat", "jti") will be ignored. Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** A base64url encoded one time secret used to validate that the request starts and ends on the same device. */
  code_verifier?: string;
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the User. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiMagicV1AuthenticateResponse>
```

<sub>`POST /v1/magic_links/authenticate` · `api_magic_v1_Authenticate`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
