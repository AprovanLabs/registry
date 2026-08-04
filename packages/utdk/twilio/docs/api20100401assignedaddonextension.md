# Api20100401AssignedAddOnExtension

2 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listIncomingPhoneNumberAssignedAddOnExtension`

Retrieve a list of Extensions for the Assigned Add-on. — [Provider docs](https://support.twilio.com)

```ts
twilio.listIncomingPhoneNumberAssignedAddOnExtension(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resources to read. */
  AccountSid: string;
  /** The SID of the Phone Number to which the Add-on is assigned. */
  ResourceSid: string;
  /** The SID that uniquely identifies the assigned Add-on installation. */
  AssignedAddOnSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; extensions?: (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions.json` · `ListIncomingPhoneNumberAssignedAddOnExtension`</sub>

## `twilio.fetchIncomingPhoneNumberAssignedAddOnExtension`

Fetch an instance of an Extension for the Assigned Add-on. — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchIncomingPhoneNumberAssignedAddOnExtension(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resource to fetch. */
  AccountSid: string;
  /** The SID of the Phone Number to which the Add-on is assigned. */
  ResourceSid: string;
  /** The SID that uniquely identifies the assigned Add-on installation. */
  AssignedAddOnSid: string;
  /** The Twilio-provided string that uniquely identifies the resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions/{Sid}.json` · `FetchIncomingPhoneNumberAssignedAddOnExtension`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
