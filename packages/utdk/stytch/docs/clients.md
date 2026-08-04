# Clients

6 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiConnectedappsV1ConnectedAppsClientsSecretsRotate`

Rotate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiConnectedappsV1ConnectedAppsClientsSecretsRotate(input: {
  body: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateRequest;
  /** The ID of the client. */
  client_id: string;
}): Promise<ApiConnectedappsV1ConnectedAppsClientsSecretsRotateResponse>
```

<sub>`POST /v1/connected_apps/clients/{client_id}/secrets/rotate` · `api_connectedapps_v1_connected_apps_clients_secrets_Rotate`</sub>

## `stytch.apiConnectedappsV1ConnectedAppsClientsSecretsRotateCancel`

Rotatecancel — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiConnectedappsV1ConnectedAppsClientsSecretsRotateCancel(input: {
  body: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateCancelRequest;
  /** The ID of the client. */
  client_id: string;
}): Promise<ApiConnectedappsV1ConnectedAppsClientsSecretsRotateCancelResponse>
```

<sub>`POST /v1/connected_apps/clients/{client_id}/secrets/rotate/cancel` · `api_connectedapps_v1_connected_apps_clients_secrets_RotateCancel`</sub>

## `stytch.apiConnectedappsV1ConnectedAppsClientsSecretsRotateStart`

Rotatestart — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiConnectedappsV1ConnectedAppsClientsSecretsRotateStart(input: {
  body: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateStartRequest;
  /** The ID of the client. */
  client_id: string;
}): Promise<ApiConnectedappsV1ConnectedAppsClientsSecretsRotateStartResponse>
```

<sub>`POST /v1/connected_apps/clients/{client_id}/secrets/rotate/start` · `api_connectedapps_v1_connected_apps_clients_secrets_RotateStart`</sub>

## `stytch.apiM2MV1M2MClientsSecretsRotate`

Rotate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiM2MV1M2MClientsSecretsRotate(input: {
  body: ApiM2MV1M2MClientsSecretsRotateRequest;
  /** The ID of the client. */
  client_id: string;
}): Promise<ApiM2MV1M2MClientsSecretsRotateResponse>
```

<sub>`POST /v1/m2m/clients/{client_id}/secrets/rotate` · `api_m2m_v1_m2m_clients_secrets_Rotate`</sub>

## `stytch.apiM2MV1M2MClientsSecretsRotateCancel`

Rotatecancel — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiM2MV1M2MClientsSecretsRotateCancel(input: {
  body: ApiM2MV1M2MClientsSecretsRotateCancelRequest;
  /** The ID of the client. */
  client_id: string;
}): Promise<ApiM2MV1M2MClientsSecretsRotateCancelResponse>
```

<sub>`POST /v1/m2m/clients/{client_id}/secrets/rotate/cancel` · `api_m2m_v1_m2m_clients_secrets_RotateCancel`</sub>

## `stytch.apiM2MV1M2MClientsSecretsRotateStart`

Rotatestart — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiM2MV1M2MClientsSecretsRotateStart(input: {
  body: ApiM2MV1M2MClientsSecretsRotateStartRequest;
  /** The ID of the client. */
  client_id: string;
}): Promise<ApiM2MV1M2MClientsSecretsRotateStartResponse>
```

<sub>`POST /v1/m2m/clients/{client_id}/secrets/rotate/start` · `api_m2m_v1_m2m_clients_secrets_RotateStart`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
