# Api20100401ValidationRequest

1 operation · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.createValidationRequest`

[Provider docs](https://support.twilio.com)

```ts
twilio.createValidationRequest(input: {
  /** The phone number to verify in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number. */
  PhoneNumber: string;
  /** A descriptive string that you create to describe the new caller ID resource. It can be up to 64 characters long. The default value is a formatted version of the phone number. */
  FriendlyName?: string;
  /** The number of seconds to delay before initiating the verification call. Can be an integer between `0` and `60`, inclusive. The default is `0`. */
  CallDelay?: number;
  /** The digits to dial after connecting the verification call. */
  Extension?: string;
  /** The URL we should call using the `status_callback_method` to send status information about the verification process to your application. */
  StatusCallback?: string;
  /** The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`, and the default is `POST`. */
  StatusCallbackMethod?: "GET" | "POST";
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for the new caller ID resource. */
  AccountSid: string;
}): Promise<ApiV2010AccountValidationRequest>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json` · `CreateValidationRequest`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
