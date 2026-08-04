# User

17 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiUserV1Create`

Create — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiUserV1Create(input: {
  /** The email address of the end user. */
  email?: string;
  /** The name of the user. Each field in the name object is optional. */
  name?: ApiUserV1Name;
  attributes?: ApiAttributeV1Attributes;
  /** The phone number to use for one-time passcodes. The phone number should be in E.164 format (i.e. +1XXXXXXXXXX). You may use +10000000000 to test this endpoint, see [Testing](https://stytch.com/docs/home#resources_testing) for more detail. */
  phone_number?: string;
  /** Flag for whether or not to save a user as pending vs active in Stytch. Defaults to false.         If true, users will be saved with status pending in Stytch's backend until authenticated.         If false, users will be created as active. An example usage of         a true flag would be to require users to verify their phone by entering the OTP code before creating         an account for them. */
  create_user_as_pending?: boolean;
  /** The `trusted_metadata` field contains an arbitrary JSON object of application-specific data. See the [Metadata](https://stytch.com/docs/api/metadata) reference for complete field behavior details. */
  trusted_metadata?: { [key: string]: unknown };
  /** The `untrusted_metadata` field contains an arbitrary JSON object of application-specific data. Untrusted metadata can be edited by end users directly via the SDK, and **cannot be used to store critical information.** See the [Metadata](https://stytch.com/docs/api/metadata) reference for complete field behavior details. */
  untrusted_metadata?: { [key: string]: unknown };
  /** An identifier that can be used in API calls wherever a user_id is expected. This is a string consisting of alphanumeric, `.`, `_`, `-`, or `|` characters with a maximum length of 128 characters. */
  external_id?: string;
  /** Roles to explicitly assign to this User.    See the [RBAC guide](https://stytch.com/docs/guides/rbac/role-assignment) for more information about role assignment. */
  roles?: (string)[];
}): Promise<ApiUserV1CreateResponse>
```

<sub>`POST /v1/users` · `api_user_v1_Create`</sub>

## `stytch.apiUserV1Delete`

Delete — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiUserV1Delete(input: {
  /** The unique ID of a specific User. You may use an `external_id` here if one is set for the user. */
  user_id: string;
}): Promise<ApiUserV1DeleteResponse>
```

<sub>`DELETE /v1/users/{user_id}` · `api_user_v1_Delete`</sub>

## `stytch.apiUserV1Get`

Get — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiUserV1Get(input: {
  /** The unique ID of a specific User. You may use an `external_id` here if one is set for the user. */
  user_id: string;
}): Promise<ApiUserV1GetResponse>
```

<sub>`GET /v1/users/{user_id}` · `api_user_v1_Get`</sub>

## `stytch.apiUserV1Update`

Update — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiUserV1Update(input: {
  /** The name of the user. Each field in the name object is optional. */
  name?: ApiUserV1Name;
  /** Provided attributes to help with fraud detection. These values are pulled and passed into Stytch endpoints by your application. */
  attributes?: ApiAttributeV1Attributes;
  /** The `trusted_metadata` field contains an arbitrary JSON object of application-specific data. See the [Metadata](https://stytch.com/docs/api/metadata) reference for complete field behavior details. */
  trusted_metadata?: { [key: string]: unknown };
  /** The `untrusted_metadata` field contains an arbitrary JSON object of application-specific data. Untrusted metadata can be edited by end users directly via the SDK, and **cannot be used to store critical information.** See the [Metadata](https://stytch.com/docs/api/metadata) reference for complete field behavior details. */
  untrusted_metadata?: { [key: string]: unknown };
  /** An identifier that can be used in API calls wherever a user_id is expected. This is a string consisting of alphanumeric, `.`, `_`, `-`, or `|` characters with a maximum length of 128 characters. */
  external_id?: string;
  /** Roles to explicitly assign to this User.    See the [RBAC guide](https://stytch.com/docs/guides/rbac/role-assignment) for more information about role assignment. */
  roles?: (string)[];
  /** The unique ID of a specific User. You may use an `external_id` here if one is set for the user. */
  user_id: string;
}): Promise<ApiUserV1UpdateResponse>
```

<sub>`PUT /v1/users/{user_id}` · `api_user_v1_Update`</sub>

## `stytch.apiUserV1ConnectedApps`

Connectedapps — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiUserV1ConnectedApps(input: {
  /** The unique ID of a specific User. You may use an `external_id` here if one is set for the user. */
  user_id: string;
}): Promise<ApiUserV1ConnectedAppsResponse>
```

<sub>`GET /v1/users/{user_id}/connected_apps` · `api_user_v1_ConnectedApps`</sub>

## `stytch.apiUserV1Revoke`

Revoke — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiUserV1Revoke(input: {
  body: ApiUserV1RevokeRequest;
  /** The unique ID of a specific User. You may use an `external_id` here if one is set for the user. */
  user_id: string;
  /** The ID of the Connected App. */
  connected_app_id: string;
}): Promise<ApiUserV1RevokeResponse>
```

<sub>`POST /v1/users/{user_id}/connected_apps/{connected_app_id}/revoke` · `api_user_v1_Revoke`</sub>

## `stytch.apiUserV1ExchangePrimaryFactor`

Exchangeprimaryfactor — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiUserV1ExchangePrimaryFactor(input: {
  /** The email address to exchange to. */
  email_address?: string;
  /** The phone number to exchange to. The phone number should be in E.164 format (i.e. +1XXXXXXXXXX). */
  phone_number?: string;
  /** The unique ID of a specific User. You may use an `external_id` here if one is set for the user. */
  user_id: string;
}): Promise<ApiUserV1ExchangePrimaryFactorResponse>
```

<sub>`PUT /v1/users/{user_id}/exchange_primary_factor` · `api_user_v1_ExchangePrimaryFactor`</sub>

## `stytch.apiUserV1DeleteExternalId`

Deleteexternalid — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiUserV1DeleteExternalId(input: {
  user_id: string;
}): Promise<ApiUserV1DeleteExternalIdResponse>
```

<sub>`DELETE /v1/users/{user_id}/external_id` · `api_user_v1_DeleteExternalId`</sub>

## `stytch.apiUserV1DeleteBiometricRegistration`

Deletebiometricregistration — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiUserV1DeleteBiometricRegistration(input: {
  /** The `biometric_registration_id` to be deleted. */
  biometric_registration_id: string;
}): Promise<ApiUserV1DeleteBiometricRegistrationResponse>
```

<sub>`DELETE /v1/users/biometric_registrations/{biometric_registration_id}` · `api_user_v1_DeleteBiometricRegistration`</sub>

## `stytch.apiUserV1DeleteCryptoWallet`

Deletecryptowallet — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiUserV1DeleteCryptoWallet(input: {
  /** The `crypto_wallet_id` to be deleted. */
  crypto_wallet_id: string;
}): Promise<ApiUserV1DeleteCryptoWalletResponse>
```

<sub>`DELETE /v1/users/crypto_wallets/{crypto_wallet_id}` · `api_user_v1_DeleteCryptoWallet`</sub>

## `stytch.apiUserV1DeleteEmail`

Deleteemail — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiUserV1DeleteEmail(input: {
  /** The `email_id` to be deleted. */
  email_id: string;
}): Promise<ApiUserV1DeleteEmailResponse>
```

<sub>`DELETE /v1/users/emails/{email_id}` · `api_user_v1_DeleteEmail`</sub>

## `stytch.apiUserV1DeleteOAuthRegistration`

Deleteoauthregistration — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiUserV1DeleteOAuthRegistration(input: {
  /** The `oauth_user_registration_id` to be deleted. */
  oauth_user_registration_id: string;
}): Promise<ApiUserV1DeleteOAuthRegistrationResponse>
```

<sub>`DELETE /v1/users/oauth/{oauth_user_registration_id}` · `api_user_v1_DeleteOAuthRegistration`</sub>

## `stytch.apiUserV1DeletePassword`

Deletepassword — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiUserV1DeletePassword(input: {
  /** The `password_id` to be deleted. */
  password_id: string;
}): Promise<ApiUserV1DeletePasswordResponse>
```

<sub>`DELETE /v1/users/passwords/{password_id}` · `api_user_v1_DeletePassword`</sub>

## `stytch.apiUserV1DeletePhoneNumber`

Deletephonenumber — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiUserV1DeletePhoneNumber(input: {
  /** The `phone_id` to be deleted. */
  phone_id: string;
}): Promise<ApiUserV1DeletePhoneNumberResponse>
```

<sub>`DELETE /v1/users/phone_numbers/{phone_id}` · `api_user_v1_DeletePhoneNumber`</sub>

## `stytch.apiUserV1Search`

Search — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiUserV1Search(input: {
  /** The `cursor` field allows you to paginate through your results. Each result array is limited to 1000 results. If your query returns more than 1000 results, you will need to paginate the responses using the `cursor`. If you receive a response that includes a non-null `next_cursor` in the `results_metadata` object, repeat the search call with the `next_cursor` value set to the `cursor` field to retrieve the next page of results. Continue to make search calls until the `next_cursor` in the response is null. */
  cursor?: string;
  /** The number of search results to return per page. The default limit is 100. A maximum of 1000 results can be returned by a single search request. If the total size of your result set is greater than one page size, you must paginate the response. See the `cursor` field. */
  limit?: number;
  /** The optional query object contains the operator, i.e. `AND` or `OR`, and the operands that will filter your results. Only an operator is required. If you include no operands, no filtering will be applied. If you include no query object, it will return all results with no filtering applied. */
  query?: ApiUserV1SearchUsersQuery;
}): Promise<ApiUserV1SearchResponse>
```

<sub>`POST /v1/users/search` · `api_user_v1_Search`</sub>

## `stytch.apiUserV1DeleteTotp`

Deletetotp — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiUserV1DeleteTotp(input: {
  /** The `totp_id` to be deleted. */
  totp_id: string;
}): Promise<ApiUserV1DeleteTotpResponse>
```

<sub>`DELETE /v1/users/totps/{totp_id}` · `api_user_v1_DeleteTOTP`</sub>

## `stytch.apiUserV1DeleteWebAuthnRegistration`

Deletewebauthnregistration — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiUserV1DeleteWebAuthnRegistration(input: {
  /** The `webauthn_registration_id` to be deleted. */
  webauthn_registration_id: string;
}): Promise<ApiUserV1DeleteWebAuthnRegistrationResponse>
```

<sub>`DELETE /v1/users/webauthn_registrations/{webauthn_registration_id}` · `api_user_v1_DeleteWebAuthnRegistration`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
