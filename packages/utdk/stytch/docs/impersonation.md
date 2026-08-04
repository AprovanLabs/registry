# Impersonation

1 operation · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiImpersonationV1Authenticate`

Authenticate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiImpersonationV1Authenticate(input: {
  /** The User Impersonation token to authenticate. Expires in 5 minutes by default. */
  impersonation_token: string;
}): Promise<ApiImpersonationV1AuthenticateResponse>
```

<sub>`POST /v1/impersonation/authenticate` · `api_impersonation_v1_Authenticate`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
