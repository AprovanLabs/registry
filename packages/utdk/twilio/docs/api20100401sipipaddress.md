# Api20100401SipIpAddress

5 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listSipIpAddress`

Read multiple IpAddress resources. — [Provider docs](https://support.twilio.com)

```ts
twilio.listSipIpAddress(input: {
  /** The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
  AccountSid: string;
  /** The IpAccessControlList Sid that identifies the IpAddress resources to read. */
  IpAccessControlListSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; ip_addresses?: (ApiV2010AccountSipSipIpAccessControlListSipIpAddress)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json` · `ListSipIpAddress`</sub>

## `twilio.createSipIpAddress`

Create a new IpAddress resource. — [Provider docs](https://support.twilio.com)

```ts
twilio.createSipIpAddress(input: {
  /** A human readable descriptive text for this resource, up to 255 characters long. */
  FriendlyName: string;
  /** An IP address in dotted decimal notation from which you want to accept traffic. Any SIP requests from this IP address will be allowed by Twilio. IPv4 only supported today. */
  IpAddress: string;
  /** An integer representing the length of the CIDR prefix to use with this IP address when accepting traffic. By default the entire IP address is used. */
  CidrPrefixLength?: number;
  /** The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
  AccountSid: string;
  /** The IpAccessControlList Sid with which to associate the created IpAddress resource. */
  IpAccessControlListSid: string;
}): Promise<ApiV2010AccountSipSipIpAccessControlListSipIpAddress>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json` · `CreateSipIpAddress`</sub>

## `twilio.deleteSipIpAddress`

Delete an IpAddress resource. — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteSipIpAddress(input: {
  /** The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
  AccountSid: string;
  /** The IpAccessControlList Sid that identifies the IpAddress resources to delete. */
  IpAccessControlListSid: string;
  /** A 34 character string that uniquely identifies the resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json` · `DeleteSipIpAddress`</sub>

## `twilio.fetchSipIpAddress`

Read one IpAddress resource. — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchSipIpAddress(input: {
  /** The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
  AccountSid: string;
  /** The IpAccessControlList Sid that identifies the IpAddress resources to fetch. */
  IpAccessControlListSid: string;
  /** A 34 character string that uniquely identifies the IpAddress resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountSipSipIpAccessControlListSipIpAddress>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json` · `FetchSipIpAddress`</sub>

## `twilio.updateSipIpAddress`

Update an IpAddress resource. — [Provider docs](https://support.twilio.com)

```ts
twilio.updateSipIpAddress(input: {
  /** An IP address in dotted decimal notation from which you want to accept traffic. Any SIP requests from this IP address will be allowed by Twilio. IPv4 only supported today. */
  IpAddress?: string;
  /** A human readable descriptive text for this resource, up to 255 characters long. */
  FriendlyName?: string;
  /** An integer representing the length of the CIDR prefix to use with this IP address when accepting traffic. By default the entire IP address is used. */
  CidrPrefixLength?: number;
  /** The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
  AccountSid: string;
  /** The IpAccessControlList Sid that identifies the IpAddress resources to update. */
  IpAccessControlListSid: string;
  /** A 34 character string that identifies the IpAddress resource to update. */
  Sid: string;
}): Promise<ApiV2010AccountSipSipIpAccessControlListSipIpAddress>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json` · `UpdateSipIpAddress`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
