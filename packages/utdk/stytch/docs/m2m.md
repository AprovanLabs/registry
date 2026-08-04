# M2M

5 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiM2MV1M2MClientsCreate`

Create — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiM2MV1M2MClientsCreate(input: {
  /** An array of scopes assigned to the client. */
  scopes: (string)[];
  /** If provided, the ID of the client to create. If not provided, Stytch will generate this value for you. The `client_id` must be unique within your project. */
  client_id?: string;
  /** If provided, the stored secret of the client to create. If not provided, Stytch will generate this value for you. If provided, the `client_secret` must be at least 8 characters long and pass entropy requirements. */
  client_secret?: string;
  /** A human-readable name for the client. */
  client_name?: string;
  /** A human-readable description for the client. */
  client_description?: string;
  /** The `trusted_metadata` field contains an arbitrary JSON object of application-specific data. See the [Metadata](https://stytch.com/docs/api/metadata) reference for complete field behavior details. */
  trusted_metadata?: { [key: string]: unknown };
}): Promise<ApiM2MV1M2MClientsCreateResponse>
```

<sub>`POST /v1/m2m/clients` · `api_m2m_v1_m2m_clients_Create`</sub>

## `stytch.apiM2MV1M2MClientsDelete`

Delete — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiM2MV1M2MClientsDelete(input: {
  /** The ID of the client. */
  client_id: string;
}): Promise<ApiM2MV1M2MClientsDeleteResponse>
```

<sub>`DELETE /v1/m2m/clients/{client_id}` · `api_m2m_v1_m2m_clients_Delete`</sub>

## `stytch.apiM2MV1M2MClientsGet`

Get — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiM2MV1M2MClientsGet(input: {
  /** The ID of the client. */
  client_id: string;
}): Promise<ApiM2MV1M2MClientsGetResponse>
```

<sub>`GET /v1/m2m/clients/{client_id}` · `api_m2m_v1_m2m_clients_Get`</sub>

## `stytch.apiM2MV1M2MClientsUpdate`

Update — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiM2MV1M2MClientsUpdate(input: {
  /** A human-readable name for the client. */
  client_name?: string;
  /** A human-readable description for the client. */
  client_description?: string;
  /** The status of the client - either `active` or `inactive`. */
  status?: ApiM2MV1M2MClientsUpdateRequestStatus;
  /** An array of scopes assigned to the client. */
  scopes?: (string)[];
  /** The `trusted_metadata` field contains an arbitrary JSON object of application-specific data. See the [Metadata](https://stytch.com/docs/api/metadata) reference for complete field behavior details. */
  trusted_metadata?: { [key: string]: unknown };
  /** The ID of the client. */
  client_id: string;
}): Promise<ApiM2MV1M2MClientsUpdateResponse>
```

<sub>`PUT /v1/m2m/clients/{client_id}` · `api_m2m_v1_m2m_clients_Update`</sub>

## `stytch.apiM2MV1M2MClientsSearch`

Search — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiM2MV1M2MClientsSearch(input: {
  /** The `cursor` field allows you to paginate through your results. Each result array is limited to 1000 results. If your query returns more than 1000 results, you will need to paginate the responses using the `cursor`. If you receive a response that includes a non-null `next_cursor` in the `results_metadata` object, repeat the search call with the `next_cursor` value set to the `cursor` field to retrieve the next page of results. Continue to make search calls until the `next_cursor` in the response is null. */
  cursor?: string;
  /** The number of search results to return per page. The default limit is 100. A maximum of 1000 results can be returned by a single search request. If the total size of your result set is greater than one page size, you must paginate the response. See the `cursor` field. */
  limit?: number;
  /** The optional query object contains the operator, i.e. `AND` or `OR`, and the operands that will filter your results. Only an operator is required. If you include no operands, no filtering will be applied. If you include no query object, it will return all results with no filtering applied. */
  query?: ApiM2MV1M2MSearchQuery;
}): Promise<ApiM2MV1M2MClientsSearchResponse>
```

<sub>`POST /v1/m2m/clients/search` · `api_m2m_v1_m2m_clients_Search`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
