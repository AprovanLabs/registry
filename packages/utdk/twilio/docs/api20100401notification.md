# Api20100401Notification

2 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listNotification`

Retrieve a list of notifications belonging to the account used to make the request — [Provider docs](https://support.twilio.com)

```ts
twilio.listNotification(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Notification resources to read. */
  AccountSid: string;
  /** Only read notifications of the specified log level. Can be:  `0` to read only ERROR notifications or `1` to read only WARNING notifications. By default, all notifications are read. */
  Log?: number;
  /** Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date. */
  MessageDate?: string;
  /** Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date. */
  "MessageDate<"?: string;
  /** Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date. */
  "MessageDate>"?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; notifications?: (ApiV2010AccountNotification)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Notifications.json` · `ListNotification`</sub>

## `twilio.fetchNotification`

Fetch a notification belonging to the account used to make the request — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchNotification(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Notification resource to fetch. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the Notification resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountNotificationInstance>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Notifications/{Sid}.json` · `FetchNotification`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
