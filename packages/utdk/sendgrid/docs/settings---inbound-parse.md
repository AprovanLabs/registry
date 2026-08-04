# Settings   Inbound Parse

4 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.postUserWebhooksParseSettings`

Create a parse setting — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postUserWebhooksParseSettings(input: {
  /** A specific and unique domain or subdomain that you have created to use exclusively to parse your incoming email. For example, `parse.yourdomain.com`. */
  hostname?: string;
  /** Indicates if you would like SendGrid to post the original MIME-type content of your parsed email. When this parameter is set to `true`, SendGrid will send a JSON payload of the content of your email. */
  send_raw?: boolean;
  /** Indicates if you would like SendGrid to check the content parsed from your emails for spam before POSTing them to your domain. */
  spam_check?: boolean;
  /** The public URL where you would like SendGrid to POST the data parsed from your email. Any emails sent with the given hostname provided (whose MX records have been updated to point to SendGrid) will be parsed and POSTed to this URL. */
  url?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<ParseSetting>
```

<sub>`POST /user/webhooks/parse/settings` · `POST_user-webhooks-parse-settings`</sub>

## `sendgrid.deleteUserWebhooksParseSettingsHostname`

Delete a parse setting — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteUserWebhooksParseSettingsHostname(input: {
  /** The hostname associated with the inbound parse setting that you would like to retrieve. */
  hostname: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /user/webhooks/parse/settings/{hostname}` · `DELETE_user-webhooks-parse-settings-hostname`</sub>

## `sendgrid.getUserWebhooksParseSettingsHostname`

Retrieve a specific parse setting — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getUserWebhooksParseSettingsHostname(input: {
  /** The hostname associated with the inbound parse setting that you would like to retrieve. */
  hostname: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<ParseSetting>
```

<sub>`GET /user/webhooks/parse/settings/{hostname}` · `GET_user-webhooks-parse-settings-hostname`</sub>

## `sendgrid.patchUserWebhooksParseSettingsHostname`

Update a parse setting — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchUserWebhooksParseSettingsHostname(input: {
  /** A specific and unique domain or subdomain that you have created to use exclusively to parse your incoming email. For example, `parse.yourdomain.com`. */
  hostname?: string;
  /** Indicates if you would like SendGrid to post the original MIME-type content of your parsed email. When this parameter is set to `true`, SendGrid will send a JSON payload of the content of your email. */
  send_raw?: boolean;
  /** Indicates if you would like SendGrid to check the content parsed from your emails for spam before POSTing them to your domain. */
  spam_check?: boolean;
  /** The public URL where you would like SendGrid to POST the data parsed from your email. Any emails sent with the given hostname provided (whose MX records have been updated to point to SendGrid) will be parsed and POSTed to this URL. */
  url?: string;
}, options: { params: { hostname: string }; headers?: { "on-behalf-of"?: string } }): Promise<ParseSetting>
```

<sub>`PATCH /user/webhooks/parse/settings/{hostname}` · `PATCH_user-webhooks-parse-settings-hostname`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
