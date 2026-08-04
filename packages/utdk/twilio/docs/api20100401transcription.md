# Api20100401Transcription

3 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listTranscription`

Retrieve a list of transcriptions belonging to the account used to make the request — [Provider docs](https://support.twilio.com)

```ts
twilio.listTranscription(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resources to read. */
  AccountSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; transcriptions?: (ApiV2010AccountTranscription)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Transcriptions.json` · `ListTranscription`</sub>

## `twilio.deleteTranscription`

Delete a transcription from the account used to make the request — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteTranscription(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resources to delete. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the Transcription resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json` · `DeleteTranscription`</sub>

## `twilio.fetchTranscription`

Fetch an instance of a Transcription — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchTranscription(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resource to fetch. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the Transcription resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountTranscription>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json` · `FetchTranscription`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
