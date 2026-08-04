# Org Authorized Clients

7 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listOrgAuthorizedClients`

List org authorized clients — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOrgAuthorizedClients(input: {
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  /** Field to sort results by. Options include `oauth2_client.name`. */
  sort?: string;
  /** Filter results by client name, app title, or app description. */
  filter?: string;
  /** Filter results by the OAuth2 client name. */
  "filter[oauth2_client][name]"?: string;
  /** Filter results by the org-level disabled status. */
  "filter[disabled]"?: string;
  /** Comma-separated list of related resources to include. Options: `oauth2_client`, `oauth2_client.app`, `user_authorized_clients.user`. */
  include?: string;
}): Promise<OrgAuthorizedClientsResponse>
```

<sub>`GET /api/v2/org_authorized_clients` · `ListOrgAuthorizedClients`</sub>

## `datadog.deleteOrgAuthorizedClient`

Delete an org authorized client — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteOrgAuthorizedClient(input: {
  /** The ID of the org authorized client. */
  org_authorized_client_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/org_authorized_clients/{org_authorized_client_id}` · `DeleteOrgAuthorizedClient`</sub>

## `datadog.getOrgAuthorizedClient`

Get an org authorized client — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOrgAuthorizedClient(input: {
  /** The ID of the org authorized client. */
  org_authorized_client_id: string;
  /** Comma-separated list of related resources to include. Options: `oauth2_client`, `oauth2_client.app`, `oauth2_client.scopes`, `user_authorized_clients.user`. */
  include?: string;
  /** Filter included user authorized clients by disabled status. */
  "filter[user_authorized_clients][disabled]"?: string;
  /** Filter included user authorized clients by user disabled status. */
  "filter[user_authorized_clients][user][disabled]"?: string;
}): Promise<OrgAuthorizedClientResponse>
```

<sub>`GET /api/v2/org_authorized_clients/{org_authorized_client_id}` · `GetOrgAuthorizedClient`</sub>

## `datadog.updateOrgAuthorizedClient`

Update an org authorized client — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateOrgAuthorizedClient(input: {
  data: OrgAuthorizedClientUpdateData;
  /** The ID of the org authorized client. */
  org_authorized_client_id: string;
}): Promise<OrgAuthorizedClientResponse>
```

<sub>`PATCH /api/v2/org_authorized_clients/{org_authorized_client_id}` · `UpdateOrgAuthorizedClient`</sub>

## `datadog.listOrgAuthorizedClientUserAuthorizations`

List user authorizations for a client — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOrgAuthorizedClientUserAuthorizations(input: {
  /** The ID of the org authorized client. */
  org_authorized_client_id: string;
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  sort?: OrgAuthorizedClientUserAuthorizationsSort;
  /** Filter results by the user authorization disabled status. */
  "filter[disabled]"?: string;
  /** Filter results by user name. */
  "filter[user][name]"?: string;
  /** Filter results by user email. */
  "filter[user][email]"?: string;
  /** Filter results by whether the user is disabled. */
  "filter[user][disabled]"?: string;
}): Promise<UserAuthorizedClientsResponse>
```

<sub>`GET /api/v2/org_authorized_clients/{org_authorized_client_id}/user_authorized_clients` · `ListOrgAuthorizedClientUserAuthorizations`</sub>

## `datadog.deleteOrgAuthorizedClientUserAuthorization`

Delete a user authorization for a client — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteOrgAuthorizedClientUserAuthorization(input: {
  /** The ID of the org authorized client. */
  org_authorized_client_id: string;
  /** The ID of the user authorized client. */
  user_authorized_client_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/org_authorized_clients/{org_authorized_client_id}/user_authorized_clients/{user_authorized_client_id}` · `DeleteOrgAuthorizedClientUserAuthorization`</sub>

## `datadog.deleteOrgAuthorizedClientAllUserAuthorizations`

Delete a user's authorizations for a client — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteOrgAuthorizedClientAllUserAuthorizations(input: {
  /** The ID of the org authorized client. */
  org_authorized_client_id: string;
  /** The ID of the user. */
  user_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/org_authorized_clients/{org_authorized_client_id}/user/{user_id}` · `DeleteOrgAuthorizedClientAllUserAuthorizations`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
