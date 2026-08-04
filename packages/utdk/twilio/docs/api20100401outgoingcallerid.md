# Api20100401OutgoingCallerId

4 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listOutgoingCallerId`

Retrieve a list of outgoing-caller-ids belonging to the account used to make the request — [Provider docs](https://support.twilio.com)

```ts
twilio.listOutgoingCallerId(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the OutgoingCallerId resources to read. */
  AccountSid: string;
  /** The phone number of the OutgoingCallerId resources to read. */
  PhoneNumber?: string;
  /** The string that identifies the OutgoingCallerId resources to read. */
  FriendlyName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; outgoing_caller_ids?: (ApiV2010AccountOutgoingCallerId)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json` · `ListOutgoingCallerId`</sub>

## `twilio.deleteOutgoingCallerId`

Delete the caller-id specified from the account — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteOutgoingCallerId(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the OutgoingCallerId resources to delete. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the OutgoingCallerId resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json` · `DeleteOutgoingCallerId`</sub>

## `twilio.fetchOutgoingCallerId`

Fetch an outgoing-caller-id belonging to the account used to make the request — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchOutgoingCallerId(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the OutgoingCallerId resource to fetch. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the OutgoingCallerId resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountOutgoingCallerId>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json` · `FetchOutgoingCallerId`</sub>

## `twilio.updateOutgoingCallerId`

Updates the caller-id — [Provider docs](https://support.twilio.com)

```ts
twilio.updateOutgoingCallerId(input: {
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  FriendlyName?: string;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the OutgoingCallerId resources to update. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the OutgoingCallerId resource to update. */
  Sid: string;
}): Promise<ApiV2010AccountOutgoingCallerId>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json` · `UpdateOutgoingCallerId`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
