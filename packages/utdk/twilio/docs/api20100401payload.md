# Api20100401Payload

3 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listRecordingAddOnResultPayload`

Retrieve a list of payloads belonging to the AddOnResult — [Provider docs](https://support.twilio.com)

```ts
twilio.listRecordingAddOnResultPayload(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult Payload resources to read. */
  AccountSid: string;
  /** The SID of the recording to which the AddOnResult resource that contains the payloads to read belongs. */
  ReferenceSid: string;
  /** The SID of the AddOnResult to which the payloads to read belongs. */
  AddOnResultSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; payloads?: (ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads.json` · `ListRecordingAddOnResultPayload`</sub>

## `twilio.deleteRecordingAddOnResultPayload`

Delete a payload from the result along with all associated Data — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteRecordingAddOnResultPayload(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult Payload resources to delete. */
  AccountSid: string;
  /** The SID of the recording to which the AddOnResult resource that contains the payloads to delete belongs. */
  ReferenceSid: string;
  /** The SID of the AddOnResult to which the payloads to delete belongs. */
  AddOnResultSid: string;
  /** The Twilio-provided string that uniquely identifies the Recording AddOnResult Payload resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json` · `DeleteRecordingAddOnResultPayload`</sub>

## `twilio.fetchRecordingAddOnResultPayload`

Fetch an instance of a result payload — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchRecordingAddOnResultPayload(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult Payload resource to fetch. */
  AccountSid: string;
  /** The SID of the recording to which the AddOnResult resource that contains the payload to fetch belongs. */
  ReferenceSid: string;
  /** The SID of the AddOnResult to which the payload to fetch belongs. */
  AddOnResultSid: string;
  /** The Twilio-provided string that uniquely identifies the Recording AddOnResult Payload resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json` · `FetchRecordingAddOnResultPayload`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
