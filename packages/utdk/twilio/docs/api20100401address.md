# Api20100401Address

5 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listAddress`

[Provider docs](https://support.twilio.com)

```ts
twilio.listAddress(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for the Address resource to read. */
  AccountSid: string;
  /** The `customer_name` of the Address resources to read. */
  CustomerName?: string;
  /** The string that identifies the Address resources to read. */
  FriendlyName?: string;
  /** Whether the address can be associated to a number for emergency calling. */
  EmergencyEnabled?: boolean;
  /** The ISO country code of the Address resources to read. */
  IsoCountry?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; addresses?: (ApiV2010AccountAddress)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Addresses.json` · `ListAddress`</sub>

## `twilio.createAddress`

[Provider docs](https://support.twilio.com)

```ts
twilio.createAddress(input: {
  /** The name to associate with the new address. */
  CustomerName: string;
  /** The number and street address of the new address. */
  Street: string;
  /** The city of the new address. */
  City: string;
  /** The state or region of the new address. */
  Region: string;
  /** The postal code of the new address. */
  PostalCode: string;
  /** The ISO country code of the new address. */
  IsoCountry: string;
  /** A descriptive string that you create to describe the new address. It can be up to 64 characters long for Regulatory Compliance addresses and 32 characters long for Emergency addresses. */
  FriendlyName?: string;
  /** Whether to enable emergency calling on the new address. Can be: `true` or `false`. */
  EmergencyEnabled?: boolean;
  /** Whether we should automatically correct the address. Can be: `true` or `false` and the default is `true`. If empty or `true`, we will correct the address you provide if necessary. If `false`, we won't alter the address you provide. */
  AutoCorrectAddress?: boolean;
  /** The additional number and street address of the address. */
  StreetSecondary?: string;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will be responsible for the new Address resource. */
  AccountSid: string;
}): Promise<ApiV2010AccountAddress>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Addresses.json` · `CreateAddress`</sub>

## `twilio.deleteAddress`

[Provider docs](https://support.twilio.com)

```ts
twilio.deleteAddress(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for the Address resource to delete. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the Address resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json` · `DeleteAddress`</sub>

## `twilio.fetchAddress`

[Provider docs](https://support.twilio.com)

```ts
twilio.fetchAddress(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for the Address resource to fetch. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the Address resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountAddress>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json` · `FetchAddress`</sub>

## `twilio.updateAddress`

[Provider docs](https://support.twilio.com)

```ts
twilio.updateAddress(input: {
  /** A descriptive string that you create to describe the new address. It can be up to 64 characters long for Regulatory Compliance addresses and 32 characters long for Emergency addresses. */
  FriendlyName?: string;
  /** The name to associate with the address. */
  CustomerName?: string;
  /** The number and street address of the address. */
  Street?: string;
  /** The city of the address. */
  City?: string;
  /** The state or region of the address. */
  Region?: string;
  /** The postal code of the address. */
  PostalCode?: string;
  /** Whether to enable emergency calling on the address. Can be: `true` or `false`. */
  EmergencyEnabled?: boolean;
  /** Whether we should automatically correct the address. Can be: `true` or `false` and the default is `true`. If empty or `true`, we will correct the address you provide if necessary. If `false`, we won't alter the address you provide. */
  AutoCorrectAddress?: boolean;
  /** The additional number and street address of the address. */
  StreetSecondary?: string;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for the Address resource to update. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the Address resource to update. */
  Sid: string;
}): Promise<ApiV2010AccountAddress>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json` · `UpdateAddress`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
