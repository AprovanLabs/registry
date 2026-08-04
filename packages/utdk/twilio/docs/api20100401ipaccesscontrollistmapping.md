# Api20100401IpAccessControlListMapping

4 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listSipIpAccessControlListMapping`

Retrieve a list of IpAccessControlListMapping resources. — [Provider docs](https://support.twilio.com)

```ts
twilio.listSipIpAccessControlListMapping(input: {
  /** The unique id of the Account that is responsible for this resource. */
  AccountSid: string;
  /** A 34 character string that uniquely identifies the SIP domain. */
  DomainSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; ip_access_control_list_mappings?: (ApiV2010AccountSipSipDomainSipIpAccessControlListMapping)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json` · `ListSipIpAccessControlListMapping`</sub>

## `twilio.createSipIpAccessControlListMapping`

Create a new IpAccessControlListMapping resource. — [Provider docs](https://support.twilio.com)

```ts
twilio.createSipIpAccessControlListMapping(input: {
  /** The unique id of the IP access control list to map to the SIP domain. */
  IpAccessControlListSid: string;
  /** The unique id of the Account that is responsible for this resource. */
  AccountSid: string;
  /** A 34 character string that uniquely identifies the SIP domain. */
  DomainSid: string;
}): Promise<ApiV2010AccountSipSipDomainSipIpAccessControlListMapping>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json` · `CreateSipIpAccessControlListMapping`</sub>

## `twilio.deleteSipIpAccessControlListMapping`

Delete an IpAccessControlListMapping resource. — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteSipIpAccessControlListMapping(input: {
  /** The unique id of the Account that is responsible for this resource. */
  AccountSid: string;
  /** A 34 character string that uniquely identifies the SIP domain. */
  DomainSid: string;
  /** A 34 character string that uniquely identifies the resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json` · `DeleteSipIpAccessControlListMapping`</sub>

## `twilio.fetchSipIpAccessControlListMapping`

Fetch an IpAccessControlListMapping resource. — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchSipIpAccessControlListMapping(input: {
  /** The unique id of the Account that is responsible for this resource. */
  AccountSid: string;
  /** A 34 character string that uniquely identifies the SIP domain. */
  DomainSid: string;
  /** A 34 character string that uniquely identifies the resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountSipSipDomainSipIpAccessControlListMapping>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json` · `FetchSipIpAccessControlListMapping`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
