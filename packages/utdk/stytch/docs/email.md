# Email

3 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiB2BMagicV1B2BMagicLinksEmailDiscoverySend`

Send — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BMagicV1B2BMagicLinksEmailDiscoverySend(input: {
  /** The email address of the Member. */
  email_address: string;
  /** The URL that the end user clicks from the discovery Magic Link. This URL should be an endpoint in the backend server that   verifies the request by querying Stytch's discovery authenticate endpoint and continues the flow. If this value is not passed, the default   discovery redirect URL that you set in your Dashboard is used. If you have not set a default discovery redirect URL, an error is returned. */
  discovery_redirect_url?: string;
  /** A base64url encoded SHA256 hash of a one time secret used to validate that the request starts and ends on the same device. */
  pkce_code_challenge?: string;
  /** Use a custom template for discovery emails. By default, it will use your default email template. Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “Magic Links - Login”. */
  login_template_id?: string;
  /** Used to determine which language to use when sending the user this delivery method. Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English. */
  locale?: ApiB2BMagicV1MagicLinksEmailDiscoverySendRequestLocale;
  /** The expiration time, in minutes, for an discovery magic link email. If not accepted within this time frame, the email will need to be resent. Defaults to 60 (1 hour) with a minimum of 5 and a maximum of 10080 (1 week). */
  discovery_expiration_minutes?: number;
}): Promise<ApiB2BMagicV1B2BMagicLinksEmailDiscoverySendResponse>
```

<sub>`POST /v1/b2b/magic_links/email/discovery/send` · `api_b2b_magic_v1_b2b_magic_links_email_discovery_Send`</sub>

## `stytch.apiB2BOtpV1B2BOtpEmailDiscoveryAuthenticate`

Authenticate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BOtpV1B2BOtpEmailDiscoveryAuthenticate(input: {
  /** The email address of the Member. */
  email_address: string;
  /** The code to authenticate. */
  code: string;
}): Promise<ApiB2BOtpV1B2BOtpEmailDiscoveryAuthenticateResponse>
```

<sub>`POST /v1/b2b/otps/email/discovery/authenticate` · `api_b2b_otp_v1_b2b_otp_email_discovery_Authenticate`</sub>

## `stytch.apiB2BOtpV1B2BOtpEmailDiscoverySend`

Send — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BOtpV1B2BOtpEmailDiscoverySend(input: {
  /** The email address to start the discovery flow for. */
  email_address: string;
  /** Use a custom template for login emails. By default, it will use your default email template. Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “OTP - Login”. */
  login_template_id?: string;
  /** Used to determine which language to use when sending the user this delivery method. Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English. */
  locale?: ApiB2BOtpV1OtpEmailDiscoverySendRequestLocale;
  /** The expiration time, in minutes, for a discovery OTP email. If not accepted within this time frame, the OTP will need to be resent. Defaults to 10 with a minimum of 2 and a maximum of 15. */
  discovery_expiration_minutes?: number;
}): Promise<ApiB2BOtpV1B2BOtpEmailDiscoverySendResponse>
```

<sub>`POST /v1/b2b/otps/email/discovery/send` · `api_b2b_otp_v1_b2b_otp_email_discovery_Send`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
