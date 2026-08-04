# Api20100401Trigger

5 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listUsageTrigger`

Retrieve a list of usage-triggers belonging to the account used to make the request — [Provider docs](https://support.twilio.com)

```ts
twilio.listUsageTrigger(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageTrigger resources to read. */
  AccountSid: string;
  Recurring?: UsageTriggerEnumRecurring;
  TriggerBy?: UsageTriggerEnumTriggerField;
  /** The usage category of the UsageTriggers to read. Must be a supported [usage categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories). */
  UsageCategory?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; usage_triggers?: (ApiV2010AccountUsageUsageTrigger)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json` · `ListUsageTrigger`</sub>

## `twilio.createUsageTrigger`

Create a new UsageTrigger — [Provider docs](https://support.twilio.com)

```ts
twilio.createUsageTrigger(input: {
  /** The URL we should call using `callback_method` when the trigger fires. */
  CallbackUrl: string;
  /** The usage value at which the trigger should fire.  For convenience, you can use an offset value such as `+30` to specify a trigger_value that is 30 units more than the current usage value. Be sure to urlencode a `+` as `%2B`. */
  TriggerValue: string;
  /** The usage category that the trigger should watch.  Use one of the supported [usage categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) for this value. */
  UsageCategory: string;
  /** The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is `POST`. */
  CallbackMethod?: "GET" | "POST";
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  FriendlyName?: string;
  Recurring?: UsageTriggerEnumRecurring;
  TriggerBy?: UsageTriggerEnumTriggerField;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
  AccountSid: string;
}): Promise<ApiV2010AccountUsageUsageTrigger>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json` · `CreateUsageTrigger`</sub>

## `twilio.deleteUsageTrigger`

[Provider docs](https://support.twilio.com)

```ts
twilio.deleteUsageTrigger(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageTrigger resources to delete. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the UsageTrigger resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json` · `DeleteUsageTrigger`</sub>

## `twilio.fetchUsageTrigger`

Fetch and instance of a usage-trigger — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchUsageTrigger(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageTrigger resource to fetch. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the UsageTrigger resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountUsageUsageTrigger>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json` · `FetchUsageTrigger`</sub>

## `twilio.updateUsageTrigger`

Update an instance of a usage trigger — [Provider docs](https://support.twilio.com)

```ts
twilio.updateUsageTrigger(input: {
  /** The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is `POST`. */
  CallbackMethod?: "GET" | "POST";
  /** The URL we should call using `callback_method` when the trigger fires. */
  CallbackUrl?: string;
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  FriendlyName?: string;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageTrigger resources to update. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the UsageTrigger resource to update. */
  Sid: string;
}): Promise<ApiV2010AccountUsageUsageTrigger>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json` · `UpdateUsageTrigger`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
