# Api

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.apiTest`

Checks API calling code. — [API reference](https://api.slack.com/methods/api.test)

```ts
slack.apiTest(input: {
  /** Error response to return */
  error?: string;
  /** example property to return */
  foo?: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: { [key: string]: unknown } | undefined }>
```

<sub>`GET /api.test` · `api_test`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
