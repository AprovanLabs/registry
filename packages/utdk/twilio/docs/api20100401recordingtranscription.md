# Api20100401RecordingTranscription

3 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listRecordingTranscription`

[Provider docs](https://support.twilio.com)

```ts
twilio.listRecordingTranscription(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resources to read. */
  AccountSid: string;
  /** The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) that created the transcriptions to read. */
  RecordingSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; transcriptions?: (ApiV2010AccountRecordingRecordingTranscription)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions.json` · `ListRecordingTranscription`</sub>

## `twilio.deleteRecordingTranscription`

[Provider docs](https://support.twilio.com)

```ts
twilio.deleteRecordingTranscription(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resources to delete. */
  AccountSid: string;
  /** The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) that created the transcription to delete. */
  RecordingSid: string;
  /** The Twilio-provided string that uniquely identifies the Transcription resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json` · `DeleteRecordingTranscription`</sub>

## `twilio.fetchRecordingTranscription`

[Provider docs](https://support.twilio.com)

```ts
twilio.fetchRecordingTranscription(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resource to fetch. */
  AccountSid: string;
  /** The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) that created the transcription to fetch. */
  RecordingSid: string;
  /** The Twilio-provided string that uniquely identifies the Transcription resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountRecordingRecordingTranscription>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json` · `FetchRecordingTranscription`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
