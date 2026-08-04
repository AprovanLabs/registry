# Organizations

1 operation · `@utdk/zendesk`

```ts
import zendesk from "@utdk/zendesk";
```

## `zendesk.listOrganizations`

List organizations — [Provider docs](https://developer.zendesk.com/api-reference)

```ts
zendesk.listOrganizations(input: {
  page?: number;
  per_page?: number;
}): Promise<OrganizationList>
```

<sub>`GET /organizations` · `listOrganizations`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
