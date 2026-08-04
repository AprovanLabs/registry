# Api20100401IncomingPhoneNumber

5 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listIncomingPhoneNumber`

Retrieve a list of incoming-phone-numbers belonging to the account used to make the request. — [Provider docs](https://support.twilio.com)

```ts
twilio.listIncomingPhoneNumber(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IncomingPhoneNumber resources to read. */
  AccountSid: string;
  /** Whether to include phone numbers new to the Twilio platform. Can be: `true` or `false` and the default is `true`. */
  Beta?: boolean;
  /** A string that identifies the IncomingPhoneNumber resources to read. */
  FriendlyName?: string;
  /** The phone numbers of the IncomingPhoneNumber resources to read. You can specify partial numbers and use '*' as a wildcard for any digit. */
  PhoneNumber?: string;
  /** Whether to include phone numbers based on their origin. Can be: `twilio` or `hosted`. By default, phone numbers of all origin are included. */
  Origin?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; incoming_phone_numbers?: (ApiV2010AccountIncomingPhoneNumber)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json` · `ListIncomingPhoneNumber`</sub>

## `twilio.createIncomingPhoneNumber`

Purchase a phone-number for the account. — [Provider docs](https://support.twilio.com)

```ts
twilio.createIncomingPhoneNumber(input: {
  /** The API version to use for incoming calls made to the new phone number. The default is `2010-04-01`. */
  ApiVersion?: string;
  /** A descriptive string that you created to describe the new phone number. It can be up to 64 characters long. By default, this is a formatted version of the new phone number. */
  FriendlyName?: string;
  /** The SID of the application that should handle SMS messages sent to the new phone number. If an `sms_application_sid` is present, we ignore all of the `sms_*_url` urls and use those set on the application. */
  SmsApplicationSid?: string;
  /** The HTTP method that we should use to call `sms_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`. */
  SmsFallbackMethod?: "GET" | "POST";
  /** The URL that we should call when an error occurs while requesting or executing the TwiML defined by `sms_url`. */
  SmsFallbackUrl?: string;
  /** The HTTP method that we should use to call `sms_url`. Can be: `GET` or `POST` and defaults to `POST`. */
  SmsMethod?: "GET" | "POST";
  /** The URL we should call when the new phone number receives an incoming SMS message. */
  SmsUrl?: string;
  /** The URL we should call using the `status_callback_method` to send status information to your application. */
  StatusCallback?: string;
  /** The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST` and defaults to `POST`. */
  StatusCallbackMethod?: "GET" | "POST";
  /** The SID of the application we should use to handle calls to the new phone number. If a `voice_application_sid` is present, we ignore all of the voice urls and use only those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa. */
  VoiceApplicationSid?: string;
  /** Whether to lookup the caller's name from the CNAM database and post it to your app. Can be: `true` or `false` and defaults to `false`. */
  VoiceCallerIdLookup?: boolean;
  /** The HTTP method that we should use to call `voice_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`. */
  VoiceFallbackMethod?: "GET" | "POST";
  /** The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`. */
  VoiceFallbackUrl?: string;
  /** The HTTP method that we should use to call `voice_url`. Can be: `GET` or `POST` and defaults to `POST`. */
  VoiceMethod?: "GET" | "POST";
  /** The URL that we should call to answer a call to the new phone number. The `voice_url` will not be called if a `voice_application_sid` or a `trunk_sid` is set. */
  VoiceUrl?: string;
  EmergencyStatus?: IncomingPhoneNumberEnumEmergencyStatus;
  /** The SID of the emergency address configuration to use for emergency calling from the new phone number. */
  EmergencyAddressSid?: string;
  /** The SID of the Trunk we should use to handle calls to the new phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use only those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa. */
  TrunkSid?: string;
  /** The SID of the Identity resource that we should associate with the new phone number. Some regions require an identity to meet local regulations. */
  IdentitySid?: string;
  /** The SID of the Address resource we should associate with the new phone number. Some regions require addresses to meet local regulations. */
  AddressSid?: string;
  VoiceReceiveMode?: IncomingPhoneNumberEnumVoiceReceiveMode;
  /** The SID of the Bundle resource that you associate with the phone number. Some regions require a Bundle to meet local Regulations. */
  BundleSid?: string;
  /** The phone number to purchase specified in [E.164](https://www.twilio.com/docs/glossary/what-e164) format.  E.164 phone numbers consist of a + followed by the country code and subscriber number without punctuation characters. For example, +14155551234. */
  PhoneNumber?: string;
  /** The desired area code for your new incoming phone number. Can be any three-digit, US or Canada area code. We will provision an available phone number within this area code for you. **You must provide an `area_code` or a `phone_number`.** (US and Canada only). */
  AreaCode?: string;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
  AccountSid: string;
}): Promise<ApiV2010AccountIncomingPhoneNumber>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json` · `CreateIncomingPhoneNumber`</sub>

## `twilio.deleteIncomingPhoneNumber`

Delete a phone-numbers belonging to the account used to make the request. — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteIncomingPhoneNumber(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IncomingPhoneNumber resources to delete. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the IncomingPhoneNumber resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json` · `DeleteIncomingPhoneNumber`</sub>

## `twilio.fetchIncomingPhoneNumber`

Fetch an incoming-phone-number belonging to the account used to make the request. — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchIncomingPhoneNumber(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IncomingPhoneNumber resource to fetch. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the IncomingPhoneNumber resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountIncomingPhoneNumber>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json` · `FetchIncomingPhoneNumber`</sub>

## `twilio.updateIncomingPhoneNumber`

Update an incoming-phone-number instance. — [Provider docs](https://support.twilio.com)

```ts
twilio.updateIncomingPhoneNumber(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IncomingPhoneNumber resource to update.  For more information, see [Exchanging Numbers Between Subaccounts](https://www.twilio.com/docs/iam/api/subaccounts#exchanging-numbers). */
  AccountSid?: string;
  /** The API version to use for incoming calls made to the phone number. The default is `2010-04-01`. */
  ApiVersion?: string;
  /** A descriptive string that you created to describe this phone number. It can be up to 64 characters long. By default, this is a formatted version of the phone number. */
  FriendlyName?: string;
  /** The SID of the application that should handle SMS messages sent to the number. If an `sms_application_sid` is present, we ignore all of the `sms_*_url` urls and use those set on the application. */
  SmsApplicationSid?: string;
  /** The HTTP method that we should use to call `sms_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`. */
  SmsFallbackMethod?: "GET" | "POST";
  /** The URL that we should call when an error occurs while requesting or executing the TwiML defined by `sms_url`. */
  SmsFallbackUrl?: string;
  /** The HTTP method that we should use to call `sms_url`. Can be: `GET` or `POST` and defaults to `POST`. */
  SmsMethod?: "GET" | "POST";
  /** The URL we should call when the phone number receives an incoming SMS message. */
  SmsUrl?: string;
  /** The URL we should call using the `status_callback_method` to send status information to your application. */
  StatusCallback?: string;
  /** The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST` and defaults to `POST`. */
  StatusCallbackMethod?: "GET" | "POST";
  /** The SID of the application we should use to handle phone calls to the phone number. If a `voice_application_sid` is present, we ignore all of the voice urls and use only those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa. */
  VoiceApplicationSid?: string;
  /** Whether to lookup the caller's name from the CNAM database and post it to your app. Can be: `true` or `false` and defaults to `false`. */
  VoiceCallerIdLookup?: boolean;
  /** The HTTP method that we should use to call `voice_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`. */
  VoiceFallbackMethod?: "GET" | "POST";
  /** The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`. */
  VoiceFallbackUrl?: string;
  /** The HTTP method that we should use to call `voice_url`. Can be: `GET` or `POST` and defaults to `POST`. */
  VoiceMethod?: "GET" | "POST";
  /** The URL that we should call to answer a call to the phone number. The `voice_url` will not be called if a `voice_application_sid` or a `trunk_sid` is set. */
  VoiceUrl?: string;
  EmergencyStatus?: IncomingPhoneNumberEnumEmergencyStatus;
  /** The SID of the emergency address configuration to use for emergency calling from this phone number. */
  EmergencyAddressSid?: string;
  /** The SID of the Trunk we should use to handle phone calls to the phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use only those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa. */
  TrunkSid?: string;
  VoiceReceiveMode?: IncomingPhoneNumberEnumVoiceReceiveMode;
  /** The SID of the Identity resource that we should associate with the phone number. Some regions require an identity to meet local regulations. */
  IdentitySid?: string;
  /** The SID of the Address resource we should associate with the phone number. Some regions require addresses to meet local regulations. */
  AddressSid?: string;
  /** The SID of the Bundle resource that you associate with the phone number. Some regions require a Bundle to meet local Regulations. */
  BundleSid?: string;
  /** The Twilio-provided string that uniquely identifies the IncomingPhoneNumber resource to update. */
  Sid: string;
}, options: { params: { AccountSid: string } }): Promise<ApiV2010AccountIncomingPhoneNumber>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json` · `UpdateIncomingPhoneNumber`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
