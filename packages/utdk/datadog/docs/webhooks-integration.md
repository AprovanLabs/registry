# Webhooks Integration

5 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getAllAuthMethods`

Get all auth methods — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAllAuthMethods(input: {
  include?: WebhooksAuthMethodProtocol;
}): Promise<WebhooksAuthMethodsResponse>
```

<sub>`GET /api/v2/integration/webhooks/configuration/auth-method` · `GetAllAuthMethods`</sub>

## `datadog.createOAuth2ClientCredentials`

Create an OAuth2 client credentials auth method — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createOAuth2ClientCredentials(input: {
  data: WebhooksOAuth2ClientCredentialsCreateData;
}): Promise<WebhooksOAuth2ClientCredentialsResponse>
```

<sub>`POST /api/v2/integration/webhooks/configuration/auth-method/oauth2-client-credentials` · `CreateOAuth2ClientCredentials`</sub>

## `datadog.deleteOAuth2ClientCredentials`

Delete an OAuth2 client credentials auth method — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteOAuth2ClientCredentials(input: {
  /** The UUID of the auth method. */
  auth_method_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/webhooks/configuration/auth-method/oauth2-client-credentials/{auth_method_id}` · `DeleteOAuth2ClientCredentials`</sub>

## `datadog.getOAuth2ClientCredentials`

Get an OAuth2 client credentials auth method — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOAuth2ClientCredentials(input: {
  /** The UUID of the auth method. */
  auth_method_id: string;
}): Promise<WebhooksOAuth2ClientCredentialsResponse>
```

<sub>`GET /api/v2/integration/webhooks/configuration/auth-method/oauth2-client-credentials/{auth_method_id}` · `GetOAuth2ClientCredentials`</sub>

## `datadog.updateOAuth2ClientCredentials`

Update an OAuth2 client credentials auth method — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateOAuth2ClientCredentials(input: {
  data: WebhooksOAuth2ClientCredentialsUpdateData;
  /** The UUID of the auth method. */
  auth_method_id: string;
}): Promise<WebhooksOAuth2ClientCredentialsResponse>
```

<sub>`PATCH /api/v2/integration/webhooks/configuration/auth-method/oauth2-client-credentials/{auth_method_id}` · `UpdateOAuth2ClientCredentials`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
