# Api20100401Domain

5 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listSipDomain`

Retrieve a list of domains belonging to the account used to make the request — [Provider docs](https://support.twilio.com)

```ts
twilio.listSipDomain(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the SipDomain resources to read. */
  AccountSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; domains?: (ApiV2010AccountSipSipDomain)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains.json` · `ListSipDomain`</sub>

## `twilio.createSipDomain`

Create a new Domain — [Provider docs](https://support.twilio.com)

```ts
twilio.createSipDomain(input: {
  /** The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and "-" and must end with `sip.twilio.com`. */
  DomainName: string;
  /** A descriptive string that you created to describe the resource. It can be up to 64 characters long. */
  FriendlyName?: string;
  /** The URL we should when the domain receives a call. */
  VoiceUrl?: string;
  /** The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`. */
  VoiceMethod?: "GET" | "POST";
  /** The URL that we should call when an error occurs while retrieving or executing the TwiML from `voice_url`. */
  VoiceFallbackUrl?: string;
  /** The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
  VoiceFallbackMethod?: "GET" | "POST";
  /** The URL that we should call to pass status parameters (such as call ended) to your application. */
  VoiceStatusCallbackUrl?: string;
  /** The HTTP method we should use to call `voice_status_callback_url`. Can be: `GET` or `POST`. */
  VoiceStatusCallbackMethod?: "GET" | "POST";
  /** Whether to allow SIP Endpoints to register with the domain to receive calls. Can be `true` or `false`. `true` allows SIP Endpoints to register with the domain to receive calls, `false` does not. */
  SipRegistration?: boolean;
  /** Whether emergency calling is enabled for the domain. If enabled, allows emergency calls on the domain from phone numbers with validated addresses. */
  EmergencyCallingEnabled?: boolean;
  /** Whether secure SIP is enabled for the domain. If enabled, TLS will be enforced and SRTP will be negotiated on all incoming calls to this sip domain. */
  Secure?: boolean;
  /** The SID of the BYOC Trunk(Bring Your Own Carrier) resource that the Sip Domain will be associated with. */
  ByocTrunkSid?: string;
  /** Whether an emergency caller sid is configured for the domain. If present, this phone number will be used as the callback for the emergency call. */
  EmergencyCallerSid?: string;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
  AccountSid: string;
}): Promise<ApiV2010AccountSipSipDomain>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains.json` · `CreateSipDomain`</sub>

## `twilio.deleteSipDomain`

Delete an instance of a Domain — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteSipDomain(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the SipDomain resources to delete. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the SipDomain resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json` · `DeleteSipDomain`</sub>

## `twilio.fetchSipDomain`

Fetch an instance of a Domain — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchSipDomain(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the SipDomain resource to fetch. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the SipDomain resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountSipSipDomain>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json` · `FetchSipDomain`</sub>

## `twilio.updateSipDomain`

Update the attributes of a domain — [Provider docs](https://support.twilio.com)

```ts
twilio.updateSipDomain(input: {
  /** A descriptive string that you created to describe the resource. It can be up to 64 characters long. */
  FriendlyName?: string;
  /** The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
  VoiceFallbackMethod?: "GET" | "POST";
  /** The URL that we should call when an error occurs while retrieving or executing the TwiML requested by `voice_url`. */
  VoiceFallbackUrl?: string;
  /** The HTTP method we should use to call `voice_url` */
  VoiceMethod?: "GET" | "POST";
  /** The HTTP method we should use to call `voice_status_callback_url`. Can be: `GET` or `POST`. */
  VoiceStatusCallbackMethod?: "GET" | "POST";
  /** The URL that we should call to pass status parameters (such as call ended) to your application. */
  VoiceStatusCallbackUrl?: string;
  /** The URL we should call when the domain receives a call. */
  VoiceUrl?: string;
  /** Whether to allow SIP Endpoints to register with the domain to receive calls. Can be `true` or `false`. `true` allows SIP Endpoints to register with the domain to receive calls, `false` does not. */
  SipRegistration?: boolean;
  /** The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and "-" and must end with `sip.twilio.com`. */
  DomainName?: string;
  /** Whether emergency calling is enabled for the domain. If enabled, allows emergency calls on the domain from phone numbers with validated addresses. */
  EmergencyCallingEnabled?: boolean;
  /** Whether secure SIP is enabled for the domain. If enabled, TLS will be enforced and SRTP will be negotiated on all incoming calls to this sip domain. */
  Secure?: boolean;
  /** The SID of the BYOC Trunk(Bring Your Own Carrier) resource that the Sip Domain will be associated with. */
  ByocTrunkSid?: string;
  /** Whether an emergency caller sid is configured for the domain. If present, this phone number will be used as the callback for the emergency call. */
  EmergencyCallerSid?: string;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the SipDomain resource to update. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the SipDomain resource to update. */
  Sid: string;
}): Promise<ApiV2010AccountSipSipDomain>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json` · `UpdateSipDomain`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
