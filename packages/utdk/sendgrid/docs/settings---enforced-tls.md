# Settings   Enforced TLS

2 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getUserSettingsEnforcedTls`

Retrieve current Enforced TLS settings. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getUserSettingsEnforcedTls(options?: { headers?: { "on-behalf-of"?: string } }): Promise<EnforcedTlsRequestResponse>
```

<sub>`GET /user/settings/enforced_tls` · `GET_user-settings-enforced_tls`</sub>

## `sendgrid.patchUserSettingsEnforcedTls`

Update Enforced TLS settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchUserSettingsEnforcedTls(input: {
  /** Indicates if you want to require your recipients to support TLS.  */
  require_tls?: boolean;
  /** Indicates if you want to require your recipients to have a valid certificate. */
  require_valid_cert?: boolean;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<EnforcedTlsRequestResponse>
```

<sub>`PATCH /user/settings/enforced_tls` · `PATCH_user-settings-enforced_tls`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
