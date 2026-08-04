# Single Sign On Settings

5 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getSsoIntegrations`

Get All SSO Integrations — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSsoIntegrations(input: {
  /** If this parameter is set to `true`, the response will include the `completed_integration` field. */
  si?: boolean;
}): Promise<(SsoIntegration)[]>
```

<sub>`GET /sso/integrations` · `GET_sso-integrations`</sub>

## `sendgrid.postSsoIntegrations`

Create an SSO Integration — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postSsoIntegrations(input: {
  /** Indicates if the integration is complete. */
  completed_integration?: boolean;
  /** Indicates if the integration is enabled. */
  enabled: boolean;
  /** An identifier provided by your IdP to identify Twilio SendGrid in the SAML interaction. This is called the "SAML Issuer ID" in the Twilio SendGrid UI. */
  entity_id: string;
  /** The name of your integration. This name can be anything that makes sense for your organization (eg. Twilio SendGrid) */
  name: string;
  /** The IdP's SAML POST endpoint. This endpoint should receive requests and initiate an SSO login flow. This is called the "Embed Link" in the Twilio SendGrid UI. */
  signin_url: string;
  /** This URL is relevant only for an IdP-initiated authentication flow. If a user authenticates from their IdP, this URL will return them to their IdP when logging out. */
  signout_url: string;
}): Promise<SsoIntegration>
```

<sub>`POST /sso/integrations` · `POST_sso-integrations`</sub>

## `sendgrid.deleteSsoIntegrationsId`

Delete an SSO Integration — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteSsoIntegrationsId(input: {
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /sso/integrations/{id}` · `DELETE_sso-integrations-id`</sub>

## `sendgrid.getSsoIntegrationsId`

Get an SSO Integration — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSsoIntegrationsId(input: {
  id: string;
  /** If this parameter is set to `true`, the response will include the `completed_integration` field. */
  si?: boolean;
}): Promise<SsoIntegration>
```

<sub>`GET /sso/integrations/{id}` · `GET_sso-integrations-id`</sub>

## `sendgrid.patchSsoIntegrationsId`

Update an SSO Integration — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchSsoIntegrationsId(input: {
  /** Indicates if the integration is complete. */
  completed_integration?: boolean;
  /** Indicates if the integration is enabled. */
  enabled: boolean;
  /** An identifier provided by your IdP to identify Twilio SendGrid in the SAML interaction. This is called the "SAML Issuer ID" in the Twilio SendGrid UI. */
  entity_id: string;
  /** The name of your integration. This name can be anything that makes sense for your organization (eg. Twilio SendGrid) */
  name: string;
  /** The IdP's SAML POST endpoint. This endpoint should receive requests and initiate an SSO login flow. This is called the "Embed Link" in the Twilio SendGrid UI. */
  signin_url: string;
  /** This URL is relevant only for an IdP-initiated authentication flow. If a user authenticates from their IdP, this URL will return them to their IdP when logging out. */
  signout_url: string;
  id: string;
  /** If this parameter is set to `true`, the response will include the `completed_integration` field. */
  si?: boolean;
}): Promise<SsoIntegration>
```

<sub>`PATCH /sso/integrations/{id}` · `PATCH_sso-integrations-id`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
