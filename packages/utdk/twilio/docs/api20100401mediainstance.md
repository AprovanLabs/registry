# Api20100401MediaInstance

2 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.deleteMedia`

Delete the Media resource. — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteMedia(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is associated with the Media resource. */
  AccountSid: string;
  /** The SID of the Message resource that is associated with the Media resource. */
  MessageSid: string;
  /** The unique identifier of the to-be-deleted Media resource. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json` · `DeleteMedia`</sub>

## `twilio.fetchMedia`

Fetch a single Media resource associated with a specific Message resource — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchMedia(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the Media resource. */
  AccountSid: string;
  /** The SID of the Message resource that is associated with the Media resource. */
  MessageSid: string;
  /** The Twilio-provided string that uniquely identifies the Media resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountMessageMedia>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json` · `FetchMedia`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
