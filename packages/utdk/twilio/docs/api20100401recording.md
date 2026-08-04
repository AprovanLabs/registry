# Api20100401Recording

3 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listRecording`

Retrieve a list of recordings belonging to the account used to make the request — [Provider docs](https://support.twilio.com)

```ts
twilio.listRecording(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resources to read. */
  AccountSid: string;
  /** Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings that were created on or after midnight of this date. */
  DateCreated?: string;
  /** Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings that were created on or after midnight of this date. */
  "DateCreated<"?: string;
  /** Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings that were created on or after midnight of this date. */
  "DateCreated>"?: string;
  /** The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resources to read. */
  CallSid?: string;
  /** The Conference SID that identifies the conference associated with the recording to read. */
  ConferenceSid?: string;
  /** A boolean parameter indicating whether to retrieve soft deleted recordings or not. Recordings metadata are kept after deletion for a retention period of 40 days. */
  IncludeSoftDeleted?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; recordings?: (ApiV2010AccountRecording)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Recordings.json` · `ListRecording`</sub>

## `twilio.deleteRecording`

Delete a recording from your account — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteRecording(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resources to delete. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the Recording resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json` · `DeleteRecording`</sub>

## `twilio.fetchRecording`

Fetch an instance of a recording — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchRecording(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resource to fetch. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the Recording resource to fetch. */
  Sid: string;
  /** A boolean parameter indicating whether to retrieve soft deleted recordings or not. Recordings metadata are kept after deletion for a retention period of 40 days. */
  IncludeSoftDeleted?: boolean;
}): Promise<ApiV2010AccountRecording>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json` · `FetchRecording`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
