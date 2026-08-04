# API Key Permissions

1 operation · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getScopes`

Retrieve a list of scopes for which this user has access. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getScopes(options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ scopes: (string)[] }>
```

<sub>`GET /scopes` · `GET_scopes`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
