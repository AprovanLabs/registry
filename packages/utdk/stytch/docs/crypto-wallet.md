# Crypto Wallet

2 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiCryptoWalletV1Authenticate`

Authenticate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiCryptoWalletV1Authenticate(input: {
  /** The type of wallet to authenticate. Currently `ethereum` and `solana` are supported. Wallets for any EVM-compatible chains (such as Polygon or BSC) are also supported and are grouped under the `ethereum` type. */
  crypto_wallet_type: string;
  /** The crypto wallet address to authenticate. */
  crypto_wallet_address: string;
  /** The signature from the message challenge. */
  signature: string;
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
}): Promise<ApiCryptoWalletV1AuthenticateResponse>
```

<sub>`POST /v1/crypto_wallets/authenticate` · `api_crypto_wallet_v1_Authenticate`</sub>

## `stytch.apiCryptoWalletV1AuthenticateStart`

Authenticatestart — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiCryptoWalletV1AuthenticateStart(input: {
  /** The type of wallet to authenticate. Currently `ethereum` and `solana` are supported. Wallets for any EVM-compatible chains (such as Polygon or BSC) are also supported and are grouped under the `ethereum` type. */
  crypto_wallet_type: string;
  /** The crypto wallet address to authenticate. */
  crypto_wallet_address: string;
  /** The unique ID of a specific User. You may use an `external_id` here if one is set for the user. */
  user_id?: string;
  /** The `session_token` associated with a User's existing Session. */
  session_token?: string;
  /** The `session_jwt` associated with a User's existing Session. */
  session_jwt?: string;
  /** The parameters for a Sign In With Ethereum (SIWE) message. May only be passed if the `crypto_wallet_type` is `ethereum`. */
  siwe_params?: ApiCryptoWalletV1SiweParams;
}): Promise<ApiCryptoWalletV1AuthenticateStartResponse>
```

<sub>`POST /v1/crypto_wallets/authenticate/start` · `api_crypto_wallet_v1_AuthenticateStart`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
