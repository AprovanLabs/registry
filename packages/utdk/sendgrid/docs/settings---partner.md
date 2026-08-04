# Settings   Partner

3 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getPartnerSettings`

Returns a list of all partner settings. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getPartnerSettings(input: {
  /** The number of settings to return per page. */
  limit?: number;
  /** The paging offset. */
  offset?: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ result?: ({ description: string; enabled: boolean; name: string; title: string })[] }>
```

<sub>`GET /partner_settings` · `GET_partner_settings`</sub>

## `sendgrid.getPartnerSettingsNewRelic`

Returns all New Relic partner settings. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getPartnerSettingsNewRelic(options?: { headers?: { "on-behalf-of"?: string } }): Promise<PartnerSettingsNewRelic>
```

<sub>`GET /partner_settings/new_relic` · `GET_partner_settings-new_relic`</sub>

## `sendgrid.patchPartnerSettingsNewRelic`

Updates New Relic partner settings. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchPartnerSettingsNewRelic(input: {
  /** Indicates if your subuser statistics will be sent to your New Relic Dashboard. */
  enable_subuser_statistics?: boolean;
  /** Indicates if this partner setting is enabled. */
  enabled?: boolean;
  /** The license key for your New Relic account. */
  license_key?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<PartnerSettingsNewRelic>
```

<sub>`PATCH /partner_settings/new_relic` · `PATCH_partner_settings-new_relic`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
