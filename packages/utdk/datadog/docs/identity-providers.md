# Identity Providers

3 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listIdentityProviders`

List identity providers — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listIdentityProviders(): Promise<IdentityProvidersResponse>
```

<sub>`GET /api/v2/identity_providers` · `ListIdentityProviders`</sub>

## `datadog.updateIdentityProvider`

Update an identity provider — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIdentityProvider(input: {
  data: IdentityProviderUpdateData;
  /** The ID of the identity provider. */
  idp_id: string;
}): Promise<IdentityProviderResponse>
```

<sub>`PATCH /api/v2/identity_providers/{idp_id}` · `UpdateIdentityProvider`</sub>

## `datadog.listIdentityProviderUsers`

List users with an identity provider override — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listIdentityProviderUsers(input: {
  /** The ID of the identity provider. */
  idp_id: string;
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  /** User attribute to order results by. Options include `email` and `name`. */
  sort?: string;
  sort_dir?: QuerySortOrder;
  /** Filter users by the given string. Defaults to no filtering. */
  filter?: string;
  /** Filter on status attribute. Comma-separated list, with possible values `Active`, `Pending`, and `Disabled`. Defaults to no filtering. */
  "filter[status]"?: string;
}): Promise<UsersResponse>
```

<sub>`GET /api/v2/identity_providers/{idp_id}/users` · `ListIdentityProviderUsers`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
