# Api20100401UserDefinedMessageSubscription

2 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.createUserDefinedMessageSubscription`

Subscribe to User Defined Messages for a given Call SID. — [Provider docs](https://support.twilio.com)

```ts
twilio.createUserDefinedMessageSubscription(input: {
  /** The URL we should call using the `method` to send user defined events to your application. URLs must contain a valid hostname (underscores are not permitted). */
  Callback: string;
  /** A unique string value to identify API call. This should be a unique string value per API call and can be a randomly generated. */
  IdempotencyKey?: string;
  /** The HTTP method Twilio will use when requesting the above `Url`. Either `GET` or `POST`. Default is `POST`. */
  Method?: "GET" | "POST";
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that subscribed to the User Defined Messages. */
  AccountSid: string;
  /** The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the User Defined Messages subscription is associated with. This refers to the Call SID that is producing the user defined messages. */
  CallSid: string;
}): Promise<ApiV2010AccountCallUserDefinedMessageSubscription>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions.json` · `CreateUserDefinedMessageSubscription`</sub>

## `twilio.deleteUserDefinedMessageSubscription`

Delete a specific User Defined Message Subscription. — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteUserDefinedMessageSubscription(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that subscribed to the User Defined Messages. */
  AccountSid: string;
  /** The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the User Defined Message Subscription is associated with. This refers to the Call SID that is producing the User Defined Messages. */
  CallSid: string;
  /** The SID that uniquely identifies this User Defined Message Subscription. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions/{Sid}.json` · `DeleteUserDefinedMessageSubscription`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
