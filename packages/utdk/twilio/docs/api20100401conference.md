# Api20100401Conference

3 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listConference`

Retrieve a list of conferences belonging to the account used to make the request — [Provider docs](https://support.twilio.com)

```ts
twilio.listConference(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference resource(s) to read. */
  AccountSid: string;
  /** Only include conferences that were created on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read conferences that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read conferences that were created on or after midnight of this date. */
  DateCreated?: string;
  /** Only include conferences that were created on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read conferences that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read conferences that were created on or after midnight of this date. */
  "DateCreated<"?: string;
  /** Only include conferences that were created on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read conferences that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read conferences that were created on or after midnight of this date. */
  "DateCreated>"?: string;
  /** Only include conferences that were last updated on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were last updated on this date. You can also specify an inequality, such as `DateUpdated<=YYYY-MM-DD`, to read conferences that were last updated on or before midnight of this date, and `DateUpdated>=YYYY-MM-DD` to read conferences that were last updated on or after midnight of this date. */
  DateUpdated?: string;
  /** Only include conferences that were last updated on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were last updated on this date. You can also specify an inequality, such as `DateUpdated<=YYYY-MM-DD`, to read conferences that were last updated on or before midnight of this date, and `DateUpdated>=YYYY-MM-DD` to read conferences that were last updated on or after midnight of this date. */
  "DateUpdated<"?: string;
  /** Only include conferences that were last updated on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were last updated on this date. You can also specify an inequality, such as `DateUpdated<=YYYY-MM-DD`, to read conferences that were last updated on or before midnight of this date, and `DateUpdated>=YYYY-MM-DD` to read conferences that were last updated on or after midnight of this date. */
  "DateUpdated>"?: string;
  /** The string that identifies the Conference resources to read. */
  FriendlyName?: string;
  Status?: ConferenceEnumStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; conferences?: (ApiV2010AccountConference)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Conferences.json` · `ListConference`</sub>

## `twilio.fetchConference`

Fetch an instance of a conference — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchConference(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference resource(s) to fetch. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the Conference resource to fetch */
  Sid: string;
}): Promise<ApiV2010AccountConference>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json` · `FetchConference`</sub>

## `twilio.updateConference`

[Provider docs](https://support.twilio.com)

```ts
twilio.updateConference(input: {
  Status?: ConferenceEnumUpdateStatus;
  /** The URL we should call to announce something into the conference. The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs. */
  AnnounceUrl?: string;
  /** The HTTP method used to call `announce_url`. Can be: `GET` or `POST` and the default is `POST` */
  AnnounceMethod?: "GET" | "POST";
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference resource(s) to update. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the Conference resource to update */
  Sid: string;
}): Promise<ApiV2010AccountConference>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json` · `UpdateConference`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
