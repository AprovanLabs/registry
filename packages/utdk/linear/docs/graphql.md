# GraphQL

1 operation · `@utdk/linear`

```ts
import linear from "@utdk/linear";
```

## `linear.executeGraphQl`

Execute a GraphQL query or mutation — [Provider docs](https://developers.linear.app)

```ts
linear.executeGraphQl(input: {
  /** The GraphQL query or mutation string */
  query: string;
  /** Variables to pass to the GraphQL query */
  variables?: { [key: string]: unknown };
  /** Name of the operation to execute (for multi-operation documents) */
  operationName?: string;
}): Promise<GraphQlResponse>
```

<sub>`POST /graphql` · `executeGraphQL`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
