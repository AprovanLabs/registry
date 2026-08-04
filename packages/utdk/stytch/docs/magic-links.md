# Magic Links

4 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiMagicV1MagicLinksEmailInvite`

Invite — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiMagicV1MagicLinksEmailInvite(input: {
  /** The email address of the User to send the invite Magic Link to. */
  email: string;
  /** Use a custom template for invite emails. By default, it will use your default email template. Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “Magic links - Invite”. */
  invite_template_id?: string;
  /** Provided attributes to help with fraud detection. These values are pulled and passed into Stytch endpoints by your application. */
  attributes?: ApiAttributeV1Attributes;
  /** The name of the user. Each field in the name object is optional. */
  name?: ApiUserV1Name;
  /** The URL the end user clicks from the Email Magic Link. This should be a URL that your app receives and parses and subsequently sends an API request to authenticate the Magic Link and log in the User. If this value is not passed, the default invite redirect URL that you set in your Dashboard is used. If you have not set a default sign-up redirect URL, an error is returned. */
  invite_magic_link_url?: string;
  /** Set the expiration for the email magic link, in minutes. By default, it expires in 1 hour. The minimum expiration is 5 minutes and the maximum is 7 days (10080 mins). */
  invite_expiration_minutes?: number;
  /** Used to determine which language to use when sending the user this delivery method. Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English. */
  locale?: ApiMagicV1MagicLinksEmailInviteRequestLocale;
  /** The `trusted_metadata` field contains an arbitrary JSON object of application-specific data. See the [Metadata](https://stytch.com/docs/api/metadata) reference for complete field behavior details. */
  trusted_metadata?: { [key: string]: unknown };
  /** The `untrusted_metadata` field contains an arbitrary JSON object of application-specific data. Untrusted metadata can be edited by end users directly via the SDK, and **cannot be used to store critical information.** See the [Metadata](https://stytch.com/docs/api/metadata) reference for complete field behavior details. */
  untrusted_metadata?: { [key: string]: unknown };
}): Promise<ApiMagicV1MagicLinksEmailInviteResponse>
```

<sub>`POST /v1/magic_links/email/invite` · `api_magic_v1_magic_links_email_Invite`</sub>

## `stytch.apiMagicV1MagicLinksEmailLoginOrCreate`

Loginorcreate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiMagicV1MagicLinksEmailLoginOrCreate(input: {
  /** The email address of the end user. */
  email: string;
  /** The URL the end user clicks from the login Email Magic Link. This should be a URL that your app receives and parses and subsequently send an API request to authenticate the Magic Link and log in the User. If this value is not passed, the default login redirect URL that you set in your Dashboard is used. If you have not set a default login redirect URL, an error is returned. */
  login_magic_link_url?: string;
  /** The URL the end user clicks from the sign-up Email Magic Link. This should be a URL that your app receives and parses and subsequently send an API request to authenticate the Magic Link and sign-up the User. If this value is not passed, the default sign-up redirect URL that you set in your Dashboard is used. If you have not set a default sign-up redirect URL, an error is returned. */
  signup_magic_link_url?: string;
  /** Set the expiration for the login email magic link, in minutes. By default, it expires in 1 hour. The minimum expiration is 5 minutes and the maximum is 7 days (10080 mins). */
  login_expiration_minutes?: number;
  /** Set the expiration for the sign-up email magic link, in minutes. By default, it expires in 1 week. The minimum expiration is 5 minutes and the maximum is 7 days (10080 mins). */
  signup_expiration_minutes?: number;
  /** Use a custom template for login emails. By default, it will use your default email template. Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “Magic links - Login”. */
  login_template_id?: string;
  /** Use a custom template for sign-up emails. By default, it will use your default email template. Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “Magic links - Sign-up”. */
  signup_template_id?: string;
  /** Provided attributes to help with fraud detection. These values are pulled and passed into Stytch endpoints by your application. */
  attributes?: ApiAttributeV1Attributes;
  /** Flag for whether or not to save a user as pending vs active in Stytch. Defaults to false.         If true, users will be saved with status pending in Stytch's backend until authenticated.         If false, users will be created as active. An example usage of         a true flag would be to require users to verify their phone by entering the OTP code before creating         an account for them. */
  create_user_as_pending?: boolean;
  /** A base64url encoded SHA256 hash of a one time secret used to validate that the request starts and ends on the same device. */
  code_challenge?: string;
  /** Used to determine which language to use when sending the user this delivery method. Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English. */
  locale?: ApiMagicV1MagicLinksEmailLoginOrCreateRequestLocale;
}): Promise<ApiMagicV1MagicLinksEmailLoginOrCreateResponse>
```

<sub>`POST /v1/magic_links/email/login_or_create` · `api_magic_v1_magic_links_email_LoginOrCreate`</sub>

## `stytch.apiMagicV1MagicLinksEmailRevokeInvite`

Revokeinvite — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiMagicV1MagicLinksEmailRevokeInvite(input: {
  /** The email of the user. */
  email: string;
}): Promise<ApiMagicV1MagicLinksEmailRevokeInviteResponse>
```

<sub>`POST /v1/magic_links/email/revoke_invite` · `api_magic_v1_magic_links_email_RevokeInvite`</sub>

## `stytch.apiMagicV1MagicLinksEmailSend`

Send — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiMagicV1MagicLinksEmailSend(input: {
  /** The email address of the User to send the Magic Link to. */
  email: string;
  /** Use a custom template for login emails. By default, it will use your default email template. Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “Magic links - Login”. */
  login_template_id?: string;
  /** Provided attributes to help with fraud detection. These values are pulled and passed into Stytch endpoints by your application. */
  attributes?: ApiAttributeV1Attributes;
  /** The URL the end user clicks from the login Email Magic Link. This should be a URL that your app receives and parses and subsequently send an API request to authenticate the Magic Link and log in the User. If this value is not passed, the default login redirect URL that you set in your Dashboard is used. If you have not set a default login redirect URL, an error is returned. */
  login_magic_link_url?: string;
  /** The URL the end user clicks from the sign-up Email Magic Link. This should be a URL that your app receives and parses and subsequently send an API request to authenticate the Magic Link and sign-up the User. If this value is not passed, the default sign-up redirect URL that you set in your Dashboard is used. If you have not set a default sign-up redirect URL, an error is returned. */
  signup_magic_link_url?: string;
  /** Set the expiration for the login email magic link, in minutes. By default, it expires in 1 hour. The minimum expiration is 5 minutes and the maximum is 7 days (10080 mins). */
  login_expiration_minutes?: number;
  /** Set the expiration for the sign-up email magic link, in minutes. By default, it expires in 1 week. The minimum expiration is 5 minutes and the maximum is 7 days (10080 mins). */
  signup_expiration_minutes?: number;
  /** A base64url encoded SHA256 hash of a one time secret used to validate that the request starts and ends on the same device. */
  code_challenge?: string;
  /** The unique ID of a specific User. You may use an `external_id` here if one is set for the user. */
  user_id?: string;
  /** The `session_token` of the user to associate the email with. */
  session_token?: string;
  /** The `session_jwt` of the user to associate the email with. */
  session_jwt?: string;
  /** Used to determine which language to use when sending the user this delivery method. Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English. */
  locale?: ApiMagicV1MagicLinksEmailSendRequestLocale;
  /** Use a custom template for sign-up emails. By default, it will use your default email template. Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “Magic links - Sign-up”. */
  signup_template_id?: string;
}): Promise<ApiMagicV1MagicLinksEmailSendResponse>
```

<sub>`POST /v1/magic_links/email/send` · `api_magic_v1_magic_links_email_Send`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
