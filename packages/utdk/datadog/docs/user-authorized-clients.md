# User Authorized Clients

4 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listUserAuthorizedClients`

List user authorized clients — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listUserAuthorizedClients(input: {
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  /** Filter results by client name, app title, or app description. */
  filter?: string;
  /** Filter results by the user-level disabled status. */
  "filter[disabled]"?: string;
  /** Comma-separated list of related resources to include. Options: `oauth2_client`, `oauth2_client.app`. */
  include?: string;
}): Promise<UserAuthorizedClientsResponse>
```

<sub>`GET /api/v2/user_authorized_clients` · `ListUserAuthorizedClients`</sub>

## `datadog.deleteUserAuthorizedClient`

Delete a user authorized client — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteUserAuthorizedClient(input: {
  /** The ID of the user authorized client. */
  user_authorized_client_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/user_authorized_clients/{user_authorized_client_id}` · `DeleteUserAuthorizedClient`</sub>

## `datadog.getUserAuthorizedClient`

Get a user authorized client — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getUserAuthorizedClient(input: {
  /** The ID of the user authorized client. */
  user_authorized_client_id: string;
}): Promise<UserAuthorizedClientResponse>
```

<sub>`GET /api/v2/user_authorized_clients/{user_authorized_client_id}` · `GetUserAuthorizedClient`</sub>

## `datadog.deleteUserAuthorizedClientsByClient`

Delete all user authorized clients for a client — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteUserAuthorizedClientsByClient(input: {
  /** The ID of the OAuth2 client. */
  client_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/user_authorized_clients/client/{client_id}` · `DeleteUserAuthorizedClientsByClient`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
