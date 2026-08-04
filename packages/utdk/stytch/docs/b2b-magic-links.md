# B2B Magic Links

3 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiB2BMagicV1B2BMagicLinksDiscoveryAuthenticate`

Authenticate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BMagicV1B2BMagicLinksDiscoveryAuthenticate(input: {
  /** The Discovery Email Magic Link token to authenticate. */
  discovery_magic_links_token: string;
  /** A base64url encoded one time secret used to validate that the request starts and ends on the same device. */
  pkce_code_verifier?: string;
}): Promise<ApiB2BMagicV1B2BMagicLinksDiscoveryAuthenticateResponse>
```

<sub>`POST /v1/b2b/magic_links/discovery/authenticate` · `api_b2b_magic_v1_b2b_magic_links_discovery_Authenticate`</sub>

## `stytch.apiB2BMagicV1B2BMagicLinksEmailInvite`

Invite — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BMagicV1B2BMagicLinksEmailInvite(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** The email address of the Member. */
  email_address: string;
  /** The URL that the Member clicks from the invite Email Magic Link. This URL should be an endpoint in the backend server that verifies   the request by querying Stytch's authenticate endpoint and finishes the invite flow. If this value is not passed, the default `invite_redirect_url`   that you set in your Dashboard is used. If you have not set a default `invite_redirect_url`, an error is returned. */
  invite_redirect_url?: string;
  /** The `member_id` of the Member who sends the invite. */
  invited_by_member_id?: string;
  /** The name of the Member. */
  name?: string;
  /** An arbitrary JSON object for storing application-specific data or identity-provider-specific data. */
  trusted_metadata?: { [key: string]: unknown };
  /** An arbitrary JSON object of application-specific data. These fields can be edited directly by the   frontend SDK, and should not be used to store critical information. See the [Metadata resource](https://stytch.com/docs/b2b/api/metadata)   for complete field behavior details. */
  untrusted_metadata?: { [key: string]: unknown };
  /** Use a custom template for invite emails. By default, it will use your default email template. Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “Magic Links - Invite”. */
  invite_template_id?: string;
  /** Used to determine which language to use when sending the user this delivery method. Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English. */
  locale?: ApiB2BMagicV1MagicLinksEmailInviteRequestLocale;
  /** Roles to explicitly assign to this Member. See the [RBAC guide](https://stytch.com/docs/b2b/guides/rbac/role-assignment)    for more information about role assignment. */
  roles?: (string)[];
  /** The expiration time, in minutes, for an invite email. If not accepted within this time frame, the invite will need to be resent. Defaults to 10080 (1 week) with a minimum of 5 and a maximum of 10080. */
  invite_expiration_minutes?: number;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiB2BMagicV1B2BMagicLinksEmailInviteResponse>
```

<sub>`POST /v1/b2b/magic_links/email/invite` · `api_b2b_magic_v1_b2b_magic_links_email_Invite`</sub>

## `stytch.apiB2BMagicV1B2BMagicLinksEmailLoginOrSignup`

Loginorsignup — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BMagicV1B2BMagicLinksEmailLoginOrSignup(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** The email address of the Member. */
  email_address: string;
  /** The URL that the Member clicks from the login Email Magic Link. This URL should be an endpoint in the backend server that   verifies the request by querying Stytch's authenticate endpoint and finishes the login. If this value is not passed, the default login   redirect URL that you set in your Dashboard is used. If you have not set a default login redirect URL, an error is returned. */
  login_redirect_url?: string;
  /** The URL the Member clicks from the signup Email Magic Link. This URL should be an endpoint in the backend server that verifies   the request by querying Stytch's authenticate endpoint and finishes the login. If this value is not passed, the default sign-up redirect URL   that you set in your Dashboard is used. If you have not set a default sign-up redirect URL, an error is returned. */
  signup_redirect_url?: string;
  /** A base64url encoded SHA256 hash of a one time secret used to validate that the request starts and ends on the same device. */
  pkce_code_challenge?: string;
  /** Use a custom template for login emails. By default, it will use your default email template. Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “Magic Links - Login”. */
  login_template_id?: string;
  /** Use a custom template for signup emails. By default, it will use your default email template. The template must be from Stytch's built-in customizations or a custom HTML email for “Magic Links - Signup”. */
  signup_template_id?: string;
  /** Used to determine which language to use when sending the user this delivery method. Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English. */
  locale?: ApiB2BMagicV1MagicLinksEmailLoginOrSignupRequestLocale;
  /** The expiration time, in minutes, for a login Email Magic Link. If not authenticated within this time frame, the email will need to be resent. Defaults to 60 (1 hour) with a minimum of 5 and a maximum of 10080 (1 week). */
  login_expiration_minutes?: number;
  /** The expiration time, in minutes, for a signup Email Magic Link. If not authenticated within this time frame, the email will need to be resent. Defaults to 60 (1 hour) with a minimum of 5 and a maximum of 10080 (1 week). */
  signup_expiration_minutes?: number;
}): Promise<ApiB2BMagicV1B2BMagicLinksEmailLoginOrSignupResponse>
```

<sub>`POST /v1/b2b/magic_links/email/login_or_signup` · `api_b2b_magic_v1_b2b_magic_links_email_LoginOrSignup`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
