# IP Access Management

6 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getAccessSettingsActivity`

Retrieve all recent access attempts — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getAccessSettingsActivity(input: {
  /** Limits the number of IPs to return. */
  limit?: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ result: ({ allowed: boolean; auth_method: string; first_at: number; ip: string; last_at: number; location: string })[] }>
```

<sub>`GET /access_settings/activity` · `GET_access_settings-activity`</sub>

## `sendgrid.deleteAccessSettingsWhitelist`

Remove one or more IPs from the allow list — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteAccessSettingsWhitelist(input: {
  /** An array of the IDs of the IP address that you want to remove from your allow list. */
  ids?: (number)[];
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /access_settings/whitelist` · `DELETE_access_settings-whitelist`</sub>

## `sendgrid.getAccessSettingsWhitelist`

Retrieve a list of currently allowed IPs — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getAccessSettingsWhitelist(options?: { headers?: { "on-behalf-of"?: string } }): Promise<IpAccessResponse>
```

<sub>`GET /access_settings/whitelist` · `GET_access_settings-whitelist`</sub>

## `sendgrid.postAccessSettingsWhitelist`

Add one or more IPs to the allow list — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postAccessSettingsWhitelist(input: {
  /** An array containing the IP(s) you want to allow. */
  ips: ({ ip: string })[];
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<IpAccessResponse>
```

<sub>`POST /access_settings/whitelist` · `POST_access_settings-whitelist`</sub>

## `sendgrid.deleteAccessSettingsWhitelistRuleId`

Remove a specific IP from the allowed list — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteAccessSettingsWhitelistRuleId(input: {
  /** The ID of the allowed IP address that you want to retrieve. */
  rule_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /access_settings/whitelist/{rule_id}` · `DELETE_access_settings-whitelist-rule_id`</sub>

## `sendgrid.getAccessSettingsWhitelistRuleId`

Retrieve a specific allowed IP — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getAccessSettingsWhitelistRuleId(input: {
  /** The ID of the allowed IP address that you want to retrieve. */
  rule_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<IpAccessResponse>
```

<sub>`GET /access_settings/whitelist/{rule_id}` · `GET_access_settings-whitelist-rule_id`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
