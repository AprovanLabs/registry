# Api20100401Application

5 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listApplication`

Retrieve a list of applications representing an application within the requesting account — [Provider docs](https://support.twilio.com)

```ts
twilio.listApplication(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Application resources to read. */
  AccountSid: string;
  /** The string that identifies the Application resources to read. */
  FriendlyName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; applications?: (ApiV2010AccountApplication)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Applications.json` · `ListApplication`</sub>

## `twilio.createApplication`

Create a new application within your account — [Provider docs](https://support.twilio.com)

```ts
twilio.createApplication(input: {
  /** The API version to use to start a new TwiML session. Can be: `2010-04-01` or `2008-08-01`. The default value is the account's default API version. */
  ApiVersion?: string;
  /** The URL we should call when the phone number assigned to this application receives a call. */
  VoiceUrl?: string;
  /** The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`. */
  VoiceMethod?: "GET" | "POST";
  /** The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`. */
  VoiceFallbackUrl?: string;
  /** The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
  VoiceFallbackMethod?: "GET" | "POST";
  /** The URL we should call using the `status_callback_method` to send status information to your application. */
  StatusCallback?: string;
  /** The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`. */
  StatusCallbackMethod?: "GET" | "POST";
  /** Whether we should look up the caller's caller-ID name from the CNAM database (additional charges apply). Can be: `true` or `false`. */
  VoiceCallerIdLookup?: boolean;
  /** The URL we should call when the phone number receives an incoming SMS message. */
  SmsUrl?: string;
  /** The HTTP method we should use to call `sms_url`. Can be: `GET` or `POST`. */
  SmsMethod?: "GET" | "POST";
  /** The URL that we should call when an error occurs while retrieving or executing the TwiML from `sms_url`. */
  SmsFallbackUrl?: string;
  /** The HTTP method we should use to call `sms_fallback_url`. Can be: `GET` or `POST`. */
  SmsFallbackMethod?: "GET" | "POST";
  /** The URL we should call using a POST method to send status information about SMS messages sent by the application. */
  SmsStatusCallback?: string;
  /** The URL we should call using a POST method to send message status information to your application. */
  MessageStatusCallback?: string;
  /** A descriptive string that you create to describe the new application. It can be up to 64 characters long. */
  FriendlyName?: string;
  /** Whether to allow other Twilio accounts to dial this applicaton using Dial verb. Can be: `true` or `false`. */
  PublicApplicationConnectEnabled?: boolean;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
  AccountSid: string;
}): Promise<ApiV2010AccountApplication>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Applications.json` · `CreateApplication`</sub>

## `twilio.deleteApplication`

Delete the application by the specified application sid — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteApplication(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Application resources to delete. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the Application resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json` · `DeleteApplication`</sub>

## `twilio.fetchApplication`

Fetch the application specified by the provided sid — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchApplication(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Application resource to fetch. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the Application resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountApplication>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json` · `FetchApplication`</sub>

## `twilio.updateApplication`

Updates the application's properties — [Provider docs](https://support.twilio.com)

```ts
twilio.updateApplication(input: {
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  FriendlyName?: string;
  /** The API version to use to start a new TwiML session. Can be: `2010-04-01` or `2008-08-01`. The default value is your account's default API version. */
  ApiVersion?: string;
  /** The URL we should call when the phone number assigned to this application receives a call. */
  VoiceUrl?: string;
  /** The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`. */
  VoiceMethod?: "GET" | "POST";
  /** The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`. */
  VoiceFallbackUrl?: string;
  /** The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
  VoiceFallbackMethod?: "GET" | "POST";
  /** The URL we should call using the `status_callback_method` to send status information to your application. */
  StatusCallback?: string;
  /** The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`. */
  StatusCallbackMethod?: "GET" | "POST";
  /** Whether we should look up the caller's caller-ID name from the CNAM database (additional charges apply). Can be: `true` or `false`. */
  VoiceCallerIdLookup?: boolean;
  /** The URL we should call when the phone number receives an incoming SMS message. */
  SmsUrl?: string;
  /** The HTTP method we should use to call `sms_url`. Can be: `GET` or `POST`. */
  SmsMethod?: "GET" | "POST";
  /** The URL that we should call when an error occurs while retrieving or executing the TwiML from `sms_url`. */
  SmsFallbackUrl?: string;
  /** The HTTP method we should use to call `sms_fallback_url`. Can be: `GET` or `POST`. */
  SmsFallbackMethod?: "GET" | "POST";
  /** Same as message_status_callback: The URL we should call using a POST method to send status information about SMS messages sent by the application. Deprecated, included for backwards compatibility. */
  SmsStatusCallback?: string;
  /** The URL we should call using a POST method to send message status information to your application. */
  MessageStatusCallback?: string;
  /** Whether to allow other Twilio accounts to dial this applicaton using Dial verb. Can be: `true` or `false`. */
  PublicApplicationConnectEnabled?: boolean;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Application resources to update. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the Application resource to update. */
  Sid: string;
}): Promise<ApiV2010AccountApplication>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json` · `UpdateApplication`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
