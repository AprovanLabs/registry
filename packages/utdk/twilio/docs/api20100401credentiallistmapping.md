# Api20100401CredentialListMapping

4 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listSipCredentialListMapping`

Read multiple CredentialListMapping resources from an account. — [Provider docs](https://support.twilio.com)

```ts
twilio.listSipCredentialListMapping(input: {
  /** The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
  AccountSid: string;
  /** A 34 character string that uniquely identifies the SIP Domain that includes the resource to read. */
  DomainSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; credential_list_mappings?: (ApiV2010AccountSipSipDomainSipCredentialListMapping)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json` · `ListSipCredentialListMapping`</sub>

## `twilio.createSipCredentialListMapping`

Create a CredentialListMapping resource for an account. — [Provider docs](https://support.twilio.com)

```ts
twilio.createSipCredentialListMapping(input: {
  /** A 34 character string that uniquely identifies the CredentialList resource to map to the SIP domain. */
  CredentialListSid: string;
  /** The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
  AccountSid: string;
  /** A 34 character string that uniquely identifies the SIP Domain for which the CredentialList resource will be mapped. */
  DomainSid: string;
}): Promise<ApiV2010AccountSipSipDomainSipCredentialListMapping>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json` · `CreateSipCredentialListMapping`</sub>

## `twilio.deleteSipCredentialListMapping`

Delete a CredentialListMapping resource from an account. — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteSipCredentialListMapping(input: {
  /** The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
  AccountSid: string;
  /** A 34 character string that uniquely identifies the SIP Domain that includes the resource to delete. */
  DomainSid: string;
  /** A 34 character string that uniquely identifies the resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json` · `DeleteSipCredentialListMapping`</sub>

## `twilio.fetchSipCredentialListMapping`

Fetch a single CredentialListMapping resource from an account. — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchSipCredentialListMapping(input: {
  /** The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
  AccountSid: string;
  /** A 34 character string that uniquely identifies the SIP Domain that includes the resource to fetch. */
  DomainSid: string;
  /** A 34 character string that uniquely identifies the resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountSipSipDomainSipCredentialListMapping>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json` · `FetchSipCredentialListMapping`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
