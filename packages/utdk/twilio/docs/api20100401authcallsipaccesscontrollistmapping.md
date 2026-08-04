# Api20100401AuthCallsIpAccessControlListMapping

4 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listSipAuthCallsIpAccessControlListMapping`

Retrieve a list of IP Access Control List mappings belonging to the domain used in the request — [Provider docs](https://support.twilio.com)

```ts
twilio.listSipAuthCallsIpAccessControlListMapping(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IpAccessControlListMapping resources to read. */
  AccountSid: string;
  /** The SID of the SIP domain that contains the resources to read. */
  DomainSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; contents?: (ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json` · `ListSipAuthCallsIpAccessControlListMapping`</sub>

## `twilio.createSipAuthCallsIpAccessControlListMapping`

Create a new IP Access Control List mapping — [Provider docs](https://support.twilio.com)

```ts
twilio.createSipAuthCallsIpAccessControlListMapping(input: {
  /** The SID of the IpAccessControlList resource to map to the SIP domain. */
  IpAccessControlListSid: string;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
  AccountSid: string;
  /** The SID of the SIP domain that will contain the new resource. */
  DomainSid: string;
}): Promise<ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json` · `CreateSipAuthCallsIpAccessControlListMapping`</sub>

## `twilio.deleteSipAuthCallsIpAccessControlListMapping`

Delete an IP Access Control List mapping from the requested domain — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteSipAuthCallsIpAccessControlListMapping(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IpAccessControlListMapping resources to delete. */
  AccountSid: string;
  /** The SID of the SIP domain that contains the resources to delete. */
  DomainSid: string;
  /** The Twilio-provided string that uniquely identifies the IpAccessControlListMapping resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json` · `DeleteSipAuthCallsIpAccessControlListMapping`</sub>

## `twilio.fetchSipAuthCallsIpAccessControlListMapping`

Fetch a specific instance of an IP Access Control List mapping — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchSipAuthCallsIpAccessControlListMapping(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IpAccessControlListMapping resource to fetch. */
  AccountSid: string;
  /** The SID of the SIP domain that contains the resource to fetch. */
  DomainSid: string;
  /** The Twilio-provided string that uniquely identifies the IpAccessControlListMapping resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json` · `FetchSipAuthCallsIpAccessControlListMapping`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
