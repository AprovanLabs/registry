# B2B Impersonation

1 operation · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiB2BImpersonationV1Authenticate`

Authenticate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BImpersonationV1Authenticate(input: {
  /** The Member Impersonation token to authenticate. Expires in 5 minutes by default. */
  impersonation_token: string;
}): Promise<ApiB2BImpersonationV1AuthenticateResponse>
```

<sub>`POST /v1/b2b/impersonation/authenticate` · `api_b2b_impersonation_v1_Authenticate`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
