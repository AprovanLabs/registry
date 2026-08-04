# Api20100401AddOnResult

3 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listRecordingAddOnResult`

Retrieve a list of results belonging to the recording — [Provider docs](https://support.twilio.com)

```ts
twilio.listRecordingAddOnResult(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult resources to read. */
  AccountSid: string;
  /** The SID of the recording to which the result to read belongs. */
  ReferenceSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; add_on_results?: (ApiV2010AccountRecordingRecordingAddOnResult)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults.json` · `ListRecordingAddOnResult`</sub>

## `twilio.deleteRecordingAddOnResult`

Delete a result and purge all associated Payloads — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteRecordingAddOnResult(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult resources to delete. */
  AccountSid: string;
  /** The SID of the recording to which the result to delete belongs. */
  ReferenceSid: string;
  /** The Twilio-provided string that uniquely identifies the Recording AddOnResult resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json` · `DeleteRecordingAddOnResult`</sub>

## `twilio.fetchRecordingAddOnResult`

Fetch an instance of an AddOnResult — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchRecordingAddOnResult(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult resource to fetch. */
  AccountSid: string;
  /** The SID of the recording to which the result to fetch belongs. */
  ReferenceSid: string;
  /** The Twilio-provided string that uniquely identifies the Recording AddOnResult resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountRecordingRecordingAddOnResult>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json` · `FetchRecordingAddOnResult`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
