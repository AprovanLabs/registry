# Api20100401Yearly

1 operation · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listUsageRecordYearly`

[Provider docs](https://support.twilio.com)

```ts
twilio.listUsageRecordYearly(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageRecord resources to read. */
  AccountSid: string;
  /** The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved. */
  Category?: string;
  /** Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. You can also specify offsets from the current date, such as: `-30days`, which will set the start date to be 30 days before the current date. */
  StartDate?: string;
  /** Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.  You can also specify offsets from the current date, such as: `+30days`, which will set the end date to 30 days from the current date. */
  EndDate?: string;
  /** Whether to include usage from the master account and all its subaccounts. Can be: `true` (the default) to include usage from the master account and all subaccounts or `false` to retrieve usage from only the specified account. */
  IncludeSubaccounts?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; usage_records?: (ApiV2010AccountUsageUsageRecordUsageRecordYearly)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Usage/Records/Yearly.json` · `ListUsageRecordYearly`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
