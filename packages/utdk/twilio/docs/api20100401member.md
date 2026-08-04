# Api20100401Member

3 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listMember`

Retrieve the members of the queue — [Provider docs](https://support.twilio.com)

```ts
twilio.listMember(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Member resource(s) to read. */
  AccountSid: string;
  /** The SID of the Queue in which to find the members */
  QueueSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; queue_members?: (ApiV2010AccountQueueMember)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members.json` · `ListMember`</sub>

## `twilio.fetchMember`

Fetch a specific member from the queue — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchMember(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Member resource(s) to fetch. */
  AccountSid: string;
  /** The SID of the Queue in which to find the members to fetch. */
  QueueSid: string;
  /** The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resource(s) to fetch. */
  CallSid: string;
}): Promise<ApiV2010AccountQueueMember>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json` · `FetchMember`</sub>

## `twilio.updateMember`

Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL — [Provider docs](https://support.twilio.com)

```ts
twilio.updateMember(input: {
  /** The absolute URL of the Queue resource. */
  Url: string;
  /** How to pass the update request data. Can be `GET` or `POST` and the default is `POST`. `POST` sends the data as encoded form data and `GET` sends the data as query parameters. */
  Method?: "GET" | "POST";
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Member resource(s) to update. */
  AccountSid: string;
  /** The SID of the Queue in which to find the members to update. */
  QueueSid: string;
  /** The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resource(s) to update. */
  CallSid: string;
}): Promise<ApiV2010AccountQueueMember>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json` · `UpdateMember`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
