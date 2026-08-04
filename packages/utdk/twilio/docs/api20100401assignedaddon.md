# Api20100401AssignedAddOn

4 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listIncomingPhoneNumberAssignedAddOn`

Retrieve a list of Add-on installations currently assigned to this Number. — [Provider docs](https://support.twilio.com)

```ts
twilio.listIncomingPhoneNumberAssignedAddOn(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resources to read. */
  AccountSid: string;
  /** The SID of the Phone Number to which the Add-on is assigned. */
  ResourceSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; assigned_add_ons?: (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json` · `ListIncomingPhoneNumberAssignedAddOn`</sub>

## `twilio.createIncomingPhoneNumberAssignedAddOn`

Assign an Add-on installation to the Number specified. — [Provider docs](https://support.twilio.com)

```ts
twilio.createIncomingPhoneNumberAssignedAddOn(input: {
  /** The SID that identifies the Add-on installation. */
  InstalledAddOnSid: string;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
  AccountSid: string;
  /** The SID of the Phone Number to assign the Add-on. */
  ResourceSid: string;
}): Promise<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json` · `CreateIncomingPhoneNumberAssignedAddOn`</sub>

## `twilio.deleteIncomingPhoneNumberAssignedAddOn`

Remove the assignment of an Add-on installation from the Number specified. — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteIncomingPhoneNumberAssignedAddOn(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resources to delete. */
  AccountSid: string;
  /** The SID of the Phone Number to which the Add-on is assigned. */
  ResourceSid: string;
  /** The Twilio-provided string that uniquely identifies the resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json` · `DeleteIncomingPhoneNumberAssignedAddOn`</sub>

## `twilio.fetchIncomingPhoneNumberAssignedAddOn`

Fetch an instance of an Add-on installation currently assigned to this Number. — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchIncomingPhoneNumberAssignedAddOn(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resource to fetch. */
  AccountSid: string;
  /** The SID of the Phone Number to which the Add-on is assigned. */
  ResourceSid: string;
  /** The Twilio-provided string that uniquely identifies the resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json` · `FetchIncomingPhoneNumberAssignedAddOn`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
