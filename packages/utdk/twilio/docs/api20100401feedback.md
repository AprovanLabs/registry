# Api20100401Feedback

1 operation · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.createMessageFeedback`

Create Message Feedback to confirm a tracked user action was performed by the recipient of the associated Message — [Provider docs](https://support.twilio.com)

```ts
twilio.createMessageFeedback(input: {
  Outcome?: MessageFeedbackEnumOutcome;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the Message resource for which to create MessageFeedback. */
  AccountSid: string;
  /** The SID of the Message resource for which to create MessageFeedback. */
  MessageSid: string;
}): Promise<ApiV2010AccountMessageMessageFeedback>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Feedback.json` · `CreateMessageFeedback`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
