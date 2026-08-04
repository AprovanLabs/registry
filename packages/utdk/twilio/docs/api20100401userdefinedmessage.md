# Api20100401UserDefinedMessage

1 operation · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.createUserDefinedMessage`

Create a new User Defined Message for the given Call SID. — [Provider docs](https://support.twilio.com)

```ts
twilio.createUserDefinedMessage(input: {
  /** The User Defined Message in the form of URL-encoded JSON string. */
  Content: string;
  /** A unique string value to identify API call. This should be a unique string value per API call and can be a randomly generated. */
  IdempotencyKey?: string;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created User Defined Message. */
  AccountSid: string;
  /** The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the User Defined Message is associated with. */
  CallSid: string;
}): Promise<ApiV2010AccountCallUserDefinedMessage>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessages.json` · `CreateUserDefinedMessage`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
