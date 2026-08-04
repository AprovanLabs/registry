# Single Use Token

1 operation · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.getSingleUseToken`

Create Single Use Token

```ts
elevenlabs.getSingleUseToken(input: {
  token_type: SingleUseTokenType;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SingleUseTokenResponseModel>
```

<sub>`POST /v1/single-use-token/{token_type}` · `get_single_use_token`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
