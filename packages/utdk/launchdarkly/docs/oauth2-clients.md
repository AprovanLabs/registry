# OAuth2 Clients

5 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getOAuthClients`

Get clients — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getOAuthClients(): Promise<ClientCollection>
```

<sub>`GET /api/v2/oauth/clients` · `getOAuthClients`</sub>

## `launchdarkly.createOAuth2Client`

Create a LaunchDarkly OAuth 2.0 client — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createOAuth2Client(input: {
  /** The name of your new LaunchDarkly OAuth 2.0 client. */
  name?: string;
  /** The redirect URI for your new OAuth 2.0 application. This should be an absolute URL conforming with the standard HTTPS protocol. */
  redirectUri?: string;
  /** Description of your OAuth 2.0 client. */
  description?: string;
}): Promise<Client>
```

<sub>`POST /api/v2/oauth/clients` · `createOAuth2Client`</sub>

## `launchdarkly.deleteOAuthClient`

Delete OAuth 2.0 client — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteOAuthClient(input: {
  /** The client ID */
  clientId: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/oauth/clients/{clientId}` · `deleteOAuthClient`</sub>

## `launchdarkly.getOAuthClientById`

Get client by ID — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getOAuthClientById(input: {
  /** The client ID */
  clientId: string;
}): Promise<Client>
```

<sub>`GET /api/v2/oauth/clients/{clientId}` · `getOAuthClientById`</sub>

## `launchdarkly.patchOAuthClient`

Patch client by ID — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchOAuthClient(input: {
  body: JsonPatch;
  /** The client ID */
  clientId: string;
}): Promise<Client>
```

<sub>`PATCH /api/v2/oauth/clients/{clientId}` · `patchOAuthClient`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
