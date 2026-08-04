# AuthN Mappings

5 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listAuthNMappings`

List all AuthN Mappings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAuthNMappings(input: {
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  sort?: AuthNMappingsSort;
  /** Filter all mappings by the given string. */
  filter?: string;
  resource_type?: AuthNMappingResourceType;
}): Promise<AuthNMappingsResponse>
```

<sub>`GET /api/v2/authn_mappings` · `ListAuthNMappings`</sub>

## `datadog.createAuthNMapping`

Create an AuthN Mapping — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createAuthNMapping(input: {
  data: AuthNMappingCreateData;
}): Promise<AuthNMappingResponse>
```

<sub>`POST /api/v2/authn_mappings` · `CreateAuthNMapping`</sub>

## `datadog.deleteAuthNMapping`

Delete an AuthN Mapping — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteAuthNMapping(input: {
  /** The UUID of the AuthN Mapping. */
  authn_mapping_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/authn_mappings/{authn_mapping_id}` · `DeleteAuthNMapping`</sub>

## `datadog.getAuthNMapping`

Get an AuthN Mapping by UUID — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAuthNMapping(input: {
  /** The UUID of the AuthN Mapping. */
  authn_mapping_id: string;
}): Promise<AuthNMappingResponse>
```

<sub>`GET /api/v2/authn_mappings/{authn_mapping_id}` · `GetAuthNMapping`</sub>

## `datadog.updateAuthNMapping`

Edit an AuthN Mapping — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateAuthNMapping(input: {
  data: AuthNMappingUpdateData;
  /** The UUID of the AuthN Mapping. */
  authn_mapping_id: string;
}): Promise<AuthNMappingResponse>
```

<sub>`PATCH /api/v2/authn_mappings/{authn_mapping_id}` · `UpdateAuthNMapping`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
