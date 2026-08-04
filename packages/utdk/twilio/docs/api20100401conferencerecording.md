# Api20100401ConferenceRecording

4 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listConferenceRecording`

Retrieve a list of recordings belonging to the call used to make the request — [Provider docs](https://support.twilio.com)

```ts
twilio.listConferenceRecording(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference Recording resources to read. */
  AccountSid: string;
  /** The Conference SID that identifies the conference associated with the recording to read. */
  ConferenceSid: string;
  /** The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date. */
  DateCreated?: string;
  /** The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date. */
  "DateCreated<"?: string;
  /** The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date. */
  "DateCreated>"?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; recordings?: (ApiV2010AccountConferenceConferenceRecording)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings.json` · `ListConferenceRecording`</sub>

## `twilio.deleteConferenceRecording`

Delete a recording from your account — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteConferenceRecording(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference Recording resources to delete. */
  AccountSid: string;
  /** The Conference SID that identifies the conference associated with the recording to delete. */
  ConferenceSid: string;
  /** The Twilio-provided string that uniquely identifies the Conference Recording resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json` · `DeleteConferenceRecording`</sub>

## `twilio.fetchConferenceRecording`

Fetch an instance of a recording for a call — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchConferenceRecording(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference Recording resource to fetch. */
  AccountSid: string;
  /** The Conference SID that identifies the conference associated with the recording to fetch. */
  ConferenceSid: string;
  /** The Twilio-provided string that uniquely identifies the Conference Recording resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountConferenceConferenceRecording>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json` · `FetchConferenceRecording`</sub>

## `twilio.updateConferenceRecording`

Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid. — [Provider docs](https://support.twilio.com)

```ts
twilio.updateConferenceRecording(input: {
  Status: ConferenceRecordingEnumStatus;
  /** Whether to record during a pause. Can be: `skip` or `silence` and the default is `silence`. `skip` does not record during the pause period, while `silence` will replace the actual audio of the call with silence during the pause period. This parameter only applies when setting `status` is set to `paused`. */
  PauseBehavior?: string;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference Recording resource to update. */
  AccountSid: string;
  /** The Conference SID that identifies the conference associated with the recording to update. */
  ConferenceSid: string;
  /** The Twilio-provided string that uniquely identifies the Conference Recording resource to update. Use `Twilio.CURRENT` to reference the current active recording. */
  Sid: string;
}): Promise<ApiV2010AccountConferenceConferenceRecording>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json` · `UpdateConferenceRecording`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
