# Otp

7 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiOtpV1Authenticate`

Authenticate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOtpV1Authenticate(input: {
  /** The `email_id` or `phone_id` involved in the given authentication. */
  method_id: string;
  /** The code to authenticate. */
  code: string;
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
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the User. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiOtpV1AuthenticateResponse>
```

<sub>`POST /v1/otps/authenticate` · `api_otp_v1_Authenticate`</sub>

## `stytch.apiOtpV1OtpEmailLoginOrCreate`

Loginorcreate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOtpV1OtpEmailLoginOrCreate(input: {
  /** The email address of the user to send the one-time passcode to. You may use sandbox@stytch.com to test this endpoint, see [Testing](https://stytch.com/docs/home#resources_testing) for more detail. */
  email: string;
  /** Set the expiration for the one-time passcode, in minutes. The minimum expiration is 1 minute and the maximum is 10 minutes. The default expiration is 2 minutes. */
  expiration_minutes?: number;
  /** Provided attributes to help with fraud detection. These values are pulled and passed into Stytch endpoints by your application. */
  attributes?: ApiAttributeV1Attributes;
  /** Flag for whether or not to save a user as pending vs active in Stytch. Defaults to false.         If true, users will be saved with status pending in Stytch's backend until authenticated.         If false, users will be created as active. An example usage of         a true flag would be to require users to verify their phone by entering the OTP code before creating         an account for them. */
  create_user_as_pending?: boolean;
  /** Used to determine which language to use when sending the user this delivery method. Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English. */
  locale?: ApiOtpV1OtpEmailLoginOrCreateRequestLocale;
  /** Use a custom template for login emails. By default, it will use your default email template. Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “Magic links - Login”. */
  login_template_id?: string;
  /** Use a custom template for sign-up emails. By default, it will use your default email template. Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “Magic links - Sign-up”. */
  signup_template_id?: string;
}): Promise<ApiOtpV1OtpEmailLoginOrCreateResponse>
```

<sub>`POST /v1/otps/email/login_or_create` · `api_otp_v1_otp_email_LoginOrCreate`</sub>

## `stytch.apiOtpV1OtpEmailSend`

Send — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOtpV1OtpEmailSend(input: {
  /** The email address of the user to send the one-time passcode to. You may use sandbox@stytch.com to test this endpoint, see [Testing](https://stytch.com/docs/home#resources_testing) for more detail. */
  email: string;
  /** Set the expiration for the one-time passcode, in minutes. The minimum expiration is 1 minute and the maximum is 10 minutes. The default expiration is 2 minutes. */
  expiration_minutes?: number;
  /** Provided attributes to help with fraud detection. These values are pulled and passed into Stytch endpoints by your application. */
  attributes?: ApiAttributeV1Attributes;
  /** Used to determine which language to use when sending the user this delivery method. Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English. */
  locale?: ApiOtpV1OtpEmailSendRequestLocale;
  /** The unique ID of a specific User. You may use an `external_id` here if one is set for the user. */
  user_id?: string;
  /** The `session_token` associated with a User's existing Session. */
  session_token?: string;
  /** The `session_jwt` associated with a User's existing Session. */
  session_jwt?: string;
  /** Use a custom template for login emails. By default, it will use your default email template. Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “OTP - Login”. */
  login_template_id?: string;
  /** Use a custom template for sign-up emails. By default, it will use your default email template. Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “OTP - Sign-up”. */
  signup_template_id?: string;
}): Promise<ApiOtpV1OtpEmailSendResponse>
```

<sub>`POST /v1/otps/email/send` · `api_otp_v1_otp_email_Send`</sub>

## `stytch.apiOtpV1OtpSmsLoginOrCreate`

Loginorcreate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOtpV1OtpSmsLoginOrCreate(input: {
  /** The phone number to use for one-time passcodes. The phone number should be in E.164 format (i.e. +1XXXXXXXXXX). You may use +10000000000 to test this endpoint, see [Testing](https://stytch.com/docs/home#resources_testing) for more detail. */
  phone_number: string;
  /** Set the expiration for the one-time passcode, in minutes. The minimum expiration is 1 minute and the maximum is 10 minutes. The default expiration is 2 minutes. */
  expiration_minutes?: number;
  /** Provided attributes to help with fraud detection. These values are pulled and passed into Stytch endpoints by your application. */
  attributes?: ApiAttributeV1Attributes;
  /** Flag for whether or not to save a user as pending vs active in Stytch. Defaults to false.         If true, users will be saved with status pending in Stytch's backend until authenticated.         If false, users will be created as active. An example usage of         a true flag would be to require users to verify their phone by entering the OTP code before creating         an account for them. */
  create_user_as_pending?: boolean;
  /** Used to determine which language to use when sending the user this delivery method. Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English. */
  locale?: ApiOtpV1OtpSmsLoginOrCreateRequestLocale;
}): Promise<ApiOtpV1OtpSmsLoginOrCreateResponse>
```

<sub>`POST /v1/otps/sms/login_or_create` · `api_otp_v1_otp_sms_LoginOrCreate`</sub>

## `stytch.apiOtpV1OtpSmsSend`

Send — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOtpV1OtpSmsSend(input: {
  /** The phone number to use for one-time passcodes. The phone number should be in E.164 format (i.e. +1XXXXXXXXXX). You may use +10000000000 to test this endpoint, see [Testing](https://stytch.com/docs/home#resources_testing) for more detail. */
  phone_number: string;
  /** Set the expiration for the one-time passcode, in minutes. The minimum expiration is 1 minute and the maximum is 10 minutes. The default expiration is 2 minutes. */
  expiration_minutes?: number;
  /** Provided attributes to help with fraud detection. These values are pulled and passed into Stytch endpoints by your application. */
  attributes?: ApiAttributeV1Attributes;
  /** Used to determine which language to use when sending the user this delivery method. Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English. */
  locale?: ApiOtpV1OtpSmsSendRequestLocale;
  /** The unique ID of a specific User. You may use an `external_id` here if one is set for the user. */
  user_id?: string;
  /** The `session_token` associated with a User's existing Session. */
  session_token?: string;
  /** The `session_jwt` associated with a User's existing Session. */
  session_jwt?: string;
}): Promise<ApiOtpV1OtpSmsSendResponse>
```

<sub>`POST /v1/otps/sms/send` · `api_otp_v1_otp_sms_Send`</sub>

## `stytch.apiOtpV1OtpWhatsappLoginOrCreate`

Loginorcreate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOtpV1OtpWhatsappLoginOrCreate(input: {
  /** The phone number to use for one-time passcodes. The phone number should be in E.164 format (i.e. +1XXXXXXXXXX). You may use +10000000000 to test this endpoint, see [Testing](https://stytch.com/docs/home#resources_testing) for more detail. */
  phone_number: string;
  /** Set the expiration for the one-time passcode, in minutes. The minimum expiration is 1 minute and the maximum is 10 minutes. The default expiration is 2 minutes. */
  expiration_minutes?: number;
  /** Provided attributes to help with fraud detection. These values are pulled and passed into Stytch endpoints by your application. */
  attributes?: ApiAttributeV1Attributes;
  /** Flag for whether or not to save a user as pending vs active in Stytch. Defaults to false.         If true, users will be saved with status pending in Stytch's backend until authenticated.         If false, users will be created as active. An example usage of         a true flag would be to require users to verify their phone by entering the OTP code before creating         an account for them. */
  create_user_as_pending?: boolean;
  /** Used to determine which language to use when sending the user this delivery method. Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English. */
  locale?: ApiOtpV1OtpWhatsappLoginOrCreateRequestLocale;
}): Promise<ApiOtpV1OtpWhatsappLoginOrCreateResponse>
```

<sub>`POST /v1/otps/whatsapp/login_or_create` · `api_otp_v1_otp_whatsapp_LoginOrCreate`</sub>

## `stytch.apiOtpV1OtpWhatsappSend`

Send — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOtpV1OtpWhatsappSend(input: {
  /** The phone number to use for one-time passcodes. The phone number should be in E.164 format (i.e. +1XXXXXXXXXX). You may use +10000000000 to test this endpoint, see [Testing](https://stytch.com/docs/home#resources_testing) for more detail. */
  phone_number: string;
  /** Set the expiration for the one-time passcode, in minutes. The minimum expiration is 1 minute and the maximum is 10 minutes. The default expiration is 2 minutes. */
  expiration_minutes?: number;
  /** Provided attributes to help with fraud detection. These values are pulled and passed into Stytch endpoints by your application. */
  attributes?: ApiAttributeV1Attributes;
  /** Used to determine which language to use when sending the user this delivery method. Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English. */
  locale?: ApiOtpV1OtpWhatsappSendRequestLocale;
  /** The unique ID of a specific User. You may use an `external_id` here if one is set for the user. */
  user_id?: string;
  /** The `session_token` associated with a User's existing Session. */
  session_token?: string;
  /** The `session_jwt` associated with a User's existing Session. */
  session_jwt?: string;
}): Promise<ApiOtpV1OtpWhatsappSendResponse>
```

<sub>`POST /v1/otps/whatsapp/send` · `api_otp_v1_otp_whatsapp_Send`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
