# Connected Apps

5 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiConnectedappsV1ConnectedAppsClientsCreate`

Create — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiConnectedappsV1ConnectedAppsClientsCreate(input: {
  /** The type of Connected App. Supported values are `first_party`, `first_party_public`, `third_party`, and `third_party_public`. */
  client_type: ApiConnectedappsV1ConnectedAppsClientsCreateRequestClientType;
  /** A human-readable name for the client. */
  client_name?: string;
  /** A human-readable description for the client. */
  client_description?: string;
  /** Array of redirect URI values for use in OAuth Authorization flows. */
  redirect_urls?: (string)[];
  /** Valid for first party clients only. If `true`, an authorization token granted to this Client can be exchanged for a full Stytch session. */
  full_access_allowed?: boolean;
  /** The number of minutes before the access token expires. The default is 60 minutes. */
  access_token_expiry_minutes?: number;
  /** The custom audience for the access token. */
  access_token_custom_audience?: string;
  /** The content of the access token custom claims template. The template must be a valid JSON object. */
  access_token_template_content?: string;
  /** Array of redirect URI values for use in OIDC Logout flows. */
  post_logout_redirect_urls?: (string)[];
  /** The logo URL of the Connected App, if any. */
  logo_url?: string;
  /** Valid for first party clients only. If true, the client does not need to request explicit user consent for the `offline_access` scope. */
  bypass_consent_for_offline_access?: boolean;
  id_token_template_content?: string;
}): Promise<ApiConnectedappsV1ConnectedAppsClientsCreateResponse>
```

<sub>`POST /v1/connected_apps/clients` · `api_connectedapps_v1_connected_apps_clients_Create`</sub>

## `stytch.apiConnectedappsV1ConnectedAppsClientsDelete`

Delete — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiConnectedappsV1ConnectedAppsClientsDelete(input: {
  /** The ID of the client. */
  client_id: string;
}): Promise<ApiConnectedappsV1ConnectedAppsClientsDeleteResponse>
```

<sub>`DELETE /v1/connected_apps/clients/{client_id}` · `api_connectedapps_v1_connected_apps_clients_Delete`</sub>

## `stytch.apiConnectedappsV1ConnectedAppsClientsGet`

Get — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiConnectedappsV1ConnectedAppsClientsGet(input: {
  /** The ID of the Connected App client. */
  client_id: string;
}): Promise<ApiConnectedappsV1ConnectedAppsClientsGetResponse>
```

<sub>`GET /v1/connected_apps/clients/{client_id}` · `api_connectedapps_v1_connected_apps_clients_Get`</sub>

## `stytch.apiConnectedappsV1ConnectedAppsClientsUpdate`

Update — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiConnectedappsV1ConnectedAppsClientsUpdate(input: {
  /** A human-readable name for the client. */
  client_name?: string;
  /** A human-readable description for the client. */
  client_description?: string;
  /** Array of redirect URI values for use in OAuth Authorization flows. */
  redirect_urls?: (string)[];
  /** Valid for first party clients only. If `true`, an authorization token granted to this Client can be exchanged for a full Stytch session. */
  full_access_allowed?: boolean;
  /** The number of minutes before the access token expires. The default is 60 minutes. */
  access_token_expiry_minutes?: number;
  /** The custom audience for the access token. */
  access_token_custom_audience?: string;
  /** The content of the access token custom claims template. The template must be a valid JSON object. */
  access_token_template_content?: string;
  /** Array of redirect URI values for use in OIDC Logout flows. */
  post_logout_redirect_urls?: (string)[];
  /** The logo URL of the Connected App, if any. */
  logo_url?: string;
  /** Valid for first party clients only. If true, the client does not need to request explicit user consent for the `offline_access` scope. */
  bypass_consent_for_offline_access?: boolean;
  id_token_template_content?: string;
  /** The ID of the client. */
  client_id: string;
}): Promise<ApiConnectedappsV1ConnectedAppsClientsUpdateResponse>
```

<sub>`PUT /v1/connected_apps/clients/{client_id}` · `api_connectedapps_v1_connected_apps_clients_Update`</sub>

## `stytch.apiConnectedappsV1ConnectedAppsClientsSearch`

Search — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiConnectedappsV1ConnectedAppsClientsSearch(input: {
  /** The `cursor` field allows you to paginate through your results. Each result array is limited to 1000 results. If your query returns more than 1000 results, you will need to paginate the responses using the `cursor`. If you receive a response that includes a non-null `next_cursor` in the `results_metadata` object, repeat the search call with the `next_cursor` value set to the `cursor` field to retrieve the next page of results. Continue to make search calls until the `next_cursor` in the response is null. */
  cursor?: string;
  /** The number of search results to return per page. The default limit is 100. A maximum of 1000 results can be returned by a single search request. If the total size of your result set is greater than one page size, you must paginate the response. See the `cursor` field. */
  limit?: number;
}): Promise<ApiConnectedappsV1ConnectedAppsClientsSearchResponse>
```

<sub>`POST /v1/connected_apps/clients/search` · `api_connectedapps_v1_connected_apps_clients_Search`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
