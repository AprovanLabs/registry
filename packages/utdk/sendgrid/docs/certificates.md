# Certificates

5 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.postSsoCertificates`

Create an SSO Certificate — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postSsoCertificates(input: {
  /** Indicates if the certificate is enabled. */
  enabled?: boolean;
  /** An ID that matches a certificate to a specific IdP integration. This is the `id` returned by the "Get All SSO Integrations" endpoint. */
  integration_id: string;
  /** This public certificate allows SendGrid to verify that SAML requests it receives are signed by an IdP that it recognizes. */
  public_certificate: string;
}): Promise<SsoCertificateBody>
```

<sub>`POST /sso/certificates` · `POST_sso-certificates`</sub>

## `sendgrid.deleteSsoCertificatesCertId`

Delete an SSO Certificate — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteSsoCertificatesCertId(input: {
  cert_id: string;
}): Promise<SsoCertificateBody>
```

<sub>`DELETE /sso/certificates/{cert_id}` · `DELETE_sso-certificates-cert_id`</sub>

## `sendgrid.getSsoCertificatesCertId`

Get an SSO Certificate — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSsoCertificatesCertId(input: {
  cert_id: string;
}): Promise<SsoCertificateBody>
```

<sub>`GET /sso/certificates/{cert_id}` · `GET_sso-certificates-cert_id`</sub>

## `sendgrid.patchSsoCertificatesCertId`

Update SSO Certificate — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchSsoCertificatesCertId(input: {
  /** Indicates whether or not the certificate is enabled. */
  enabled?: boolean;
  /** An ID that matches a certificate to a specific IdP integration. */
  integration_id?: string;
  /** This public certificate allows SendGrid to verify that SAML requests it receives are signed by an IdP that it recognizes. */
  public_certificate?: string;
  cert_id: string;
}): Promise<unknown>
```

<sub>`PATCH /sso/certificates/{cert_id}` · `PATCH_sso-certificates-cert_id`</sub>

## `sendgrid.getSsoIntegrationsIntegrationIdCertificates`

Get All SSO Certificates by Integration — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSsoIntegrationsIntegrationIdCertificates(input: {
  /** An ID that matches a certificate to a specific IdP integration. */
  integration_id: string;
}): Promise<(SsoCertificateBody)[]>
```

<sub>`GET /sso/integrations/{integration_id}/certificates` · `GET_sso-integrations-integration_id-certificates`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
