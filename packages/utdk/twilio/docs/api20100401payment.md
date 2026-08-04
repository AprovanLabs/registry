# Api20100401Payment

2 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.createPayments`

create an instance of payments. This will start a new payments session — [Provider docs](https://support.twilio.com)

```ts
twilio.createPayments(input: {
  /** A unique token that will be used to ensure that multiple API calls with the same information do not result in multiple transactions. This should be a unique string value per API call and can be a randomly generated. */
  IdempotencyKey: string;
  /** Provide an absolute or relative URL to receive status updates regarding your Pay session. Read more about the [expected StatusCallback values](https://www.twilio.com/docs/voice/api/payment-resource#statuscallback) */
  StatusCallback: string;
  BankAccountType?: PaymentsEnumBankAccountType;
  /** A positive decimal value less than 1,000,000 to charge against the credit card or bank account. Default currency can be overwritten with `currency` field. Leave blank or set to 0 to tokenize. */
  ChargeAmount?: number;
  /** The currency of the `charge_amount`, formatted as [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format. The default value is `USD` and all values allowed from the Pay Connector are accepted. */
  Currency?: string;
  /** The description can be used to provide more details regarding the transaction. This information is submitted along with the payment details to the Payment Connector which are then posted on the transactions. */
  Description?: string;
  /** A list of inputs that should be accepted. Currently only `dtmf` is supported. All digits captured during a pay session are redacted from the logs. */
  Input?: string;
  /** A positive integer that is used to validate the length of the `PostalCode` inputted by the user. User must enter this many digits. */
  MinPostalCodeLength?: number;
  /** A single-level JSON object used to pass custom parameters to payment processors. (Required for ACH payments). The information that has to be included here depends on the <Pay> Connector. [Read more](https://www.twilio.com/console/voice/pay-connectors). */
  Parameter?: unknown;
  /** This is the unique name corresponding to the Pay Connector installed in the Twilio Add-ons. Learn more about [<Pay> Connectors](https://www.twilio.com/console/voice/pay-connectors). The default value is `Default`. */
  PaymentConnector?: string;
  PaymentMethod?: PaymentsEnumPaymentMethod;
  /** Indicates whether the credit card postal code (zip code) is a required piece of payment information that must be provided by the caller. The default is `true`. */
  PostalCode?: boolean;
  /** Indicates whether the credit card security code is a required piece of payment information that must be provided by the caller. The default is `true`. */
  SecurityCode?: boolean;
  /** The number of seconds that <Pay> should wait for the caller to press a digit between each subsequent digit, after the first one, before moving on to validate the digits captured. The default is `5`, maximum is `600`. */
  Timeout?: number;
  TokenType?: PaymentsEnumTokenType;
  /** Credit card types separated by space that Pay should accept. The default value is `visa mastercard amex` */
  ValidCardTypes?: string;
  /** A comma-separated list of payment information fields that require the caller to enter the same value twice for confirmation. Supported values are `payment-card-number`, `expiration-date`, `security-code`, and `postal-code`. */
  RequireMatchingInputs?: string;
  /** Whether to prompt the caller to confirm their payment information before submitting to the payment gateway. If `true`, the caller will hear the last 4 digits of their card or account number and must press 1 to confirm or 2 to cancel. Default is `false`. */
  Confirmation?: "true" | "false";
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
  AccountSid: string;
  /** The SID of the call that will create the resource. Call leg associated with this sid is expected to provide payment information thru DTMF. */
  CallSid: string;
}): Promise<ApiV2010AccountCallPayments>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments.json` · `CreatePayments`</sub>

## `twilio.updatePayments`

update an instance of payments with different phases of payment flows. — [Provider docs](https://support.twilio.com)

```ts
twilio.updatePayments(input: {
  /** A unique token that will be used to ensure that multiple API calls with the same information do not result in multiple transactions. This should be a unique string value per API call and can be a randomly generated. */
  IdempotencyKey: string;
  /** Provide an absolute or relative URL to receive status updates regarding your Pay session. Read more about the [Update](https://www.twilio.com/docs/voice/api/payment-resource#statuscallback-update) and [Complete/Cancel](https://www.twilio.com/docs/voice/api/payment-resource#statuscallback-cancelcomplete) POST requests. */
  StatusCallback: string;
  Capture?: PaymentsEnumCapture;
  Status?: PaymentsEnumStatus;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will update the resource. */
  AccountSid: string;
  /** The SID of the call that will update the resource. This should be the same call sid that was used to create payments resource. */
  CallSid: string;
  /** The SID of Payments session that needs to be updated. */
  Sid: string;
}): Promise<ApiV2010AccountCallPayments>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments/{Sid}.json` · `UpdatePayments`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
