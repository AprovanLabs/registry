# Webhooks

7 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getUserWebhooksEventSettings`

Retrieve Event Webhook settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getUserWebhooksEventSettings(options?: { headers?: { "on-behalf-of"?: string } }): Promise<EventWebhookResponse>
```

<sub>`GET /user/webhooks/event/settings` · `GET_user-webhooks-event-settings`</sub>

## `sendgrid.patchUserWebhooksEventSettings`

Update Event Notification Settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchUserWebhooksEventSettings(input: {
  /** Receiving server could not or would not accept message. */
  bounce: boolean;
  /** Recipient clicked on a link within the message. You need to enable Click Tracking for getting this type of event. */
  click: boolean;
  /** Recipient's email server temporarily rejected message. */
  deferred: boolean;
  /** Message has been successfully delivered to the receiving server. */
  delivered: boolean;
  /** You may see the following drop reasons: Invalid SMTPAPI header, Spam Content (if spam checker app enabled), Unsubscribed Address, Bounced Address, Spam Reporting Address, Invalid, Recipient List over Package Quota */
  dropped: boolean;
  /** Indicates if the event webhook is enabled. */
  enabled: boolean;
  /** Recipient resubscribes to specific group by updating preferences. You need to enable Subscription Tracking for getting this type of event. */
  group_resubscribe: boolean;
  /** Recipient unsubscribe from specific group, by either direct link or updating preferences. You need to enable Subscription Tracking for getting this type of event. */
  group_unsubscribe: boolean;
  /** The client ID Twilio SendGrid sends to your OAuth server or service provider to generate an OAuth access token. When passing data in this field, you must also include the oauth_token_url field. */
  oauth_client_id?: string;
  /** This secret is needed only once to create an access token. SendGrid will store this secret, allowing you to update your Client ID and Token URL without passing the secret to SendGrid again.  When passing data in this field, you must also include the oauth_client_id and oauth_token_url fields. */
  oauth_client_secret?: string;
  /** The URL where Twilio SendGrid sends the Client ID and Client Secret to generate an access token. This should be your OAuth server or service provider. When passing data in this field, you must also include the oauth_client_id field. */
  oauth_token_url?: string;
  /** Recipient has opened the HTML message. You need to enable Open Tracking for getting this type of event. */
  open: boolean;
  /** Message has been received and is ready to be delivered. */
  processed: boolean;
  /** Recipient marked a message as spam. */
  spam_report: boolean;
  /** Recipient clicked on message's subscription management link. You need to enable Subscription Tracking for getting this type of event. */
  unsubscribe: boolean;
  /** The URL that you want the event webhook to POST to. */
  url: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<EventWebhookResponse>
```

<sub>`PATCH /user/webhooks/event/settings` · `PATCH_user-webhooks-event-settings`</sub>

## `sendgrid.getUserWebhooksEventSettingsSigned`

Retrieve Signed Webhook Public Key — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getUserWebhooksEventSettingsSigned(options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ public_key: string }>
```

<sub>`GET /user/webhooks/event/settings/signed` · `GET_user-webhooks-event-settings-signed`</sub>

## `sendgrid.patchUserWebhooksEventSettingsSigned`

Enable/Disable Signed Webhook — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchUserWebhooksEventSettingsSigned(input: {
  enabled: boolean;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ public_key: string }>
```

<sub>`PATCH /user/webhooks/event/settings/signed` · `PATCH_user-webhooks-event-settings-signed`</sub>

## `sendgrid.postUserWebhooksEventTest`

Test Event Notification Settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postUserWebhooksEventTest(input: {
  /** The client ID Twilio SendGrid sends to your OAuth server or service provider to generate an OAuth access token. When passing data in this field, you must also include the oauth_client_secret and oauth_token_url fields. */
  oauth_client_id?: string;
  /** This secret is needed only once to create an access token. SendGrid will store this secret, allowing you to update your Client ID and Token URL without passing the secret to SendGrid again.  When passing data in this field, you must also include the oauth_client_id and oauth_token_url fields. */
  oauth_client_secret?: string;
  /** The URL where Twilio SendGrid sends the Client ID and Client Secret to generate an access token. This should be your OAuth server or service provider.  When passing data in this field, you must also include the oauth_client_id and oauth_client_secret fields. */
  oauth_token_url?: string;
  /** The URL where you would like the test notification to be sent. */
  url?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<undefined>
```

<sub>`POST /user/webhooks/event/test` · `POST_user-webhooks-event-test`</sub>

## `sendgrid.getUserWebhooksParseSettings`

Retrieve all parse settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getUserWebhooksParseSettings(options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ result?: (ParseSetting)[] }>
```

<sub>`GET /user/webhooks/parse/settings` · `GET_user-webhooks-parse-settings`</sub>

## `sendgrid.getUserWebhooksParseStats`

Retrieves Inbound Parse Webhook statistics. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getUserWebhooksParseStats(input: {
  /** The number of statistics to return on each page. */
  limit?: string;
  /** The number of statistics to skip. */
  offset?: string;
  /** How you would like the statistics to by grouped.  */
  aggregated_by?: "day" | "week" | "month";
  /** The starting date of the statistics you want to retrieve. Must be in the format YYYY-MM-DD */
  start_date: string;
  /** The end date of the statistics you want to retrieve. Must be in the format YYYY-MM-DD */
  end_date?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<({ date: string; stats: ({ metrics?: { received: number } })[] })[]>
```

<sub>`GET /user/webhooks/parse/stats` · `GET_user-webhooks-parse-stats`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
