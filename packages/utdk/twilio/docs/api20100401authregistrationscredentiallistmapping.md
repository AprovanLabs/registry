# Api20100401AuthRegistrationsCredentialListMapping

4 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listSipAuthRegistrationsCredentialListMapping`

Retrieve a list of credential list mappings belonging to the domain used in the request — [Provider docs](https://support.twilio.com)

```ts
twilio.listSipAuthRegistrationsCredentialListMapping(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialListMapping resources to read. */
  AccountSid: string;
  /** The SID of the SIP domain that contains the resources to read. */
  DomainSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; contents?: (ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings.json` · `ListSipAuthRegistrationsCredentialListMapping`</sub>

## `twilio.createSipAuthRegistrationsCredentialListMapping`

Create a new credential list mapping resource — [Provider docs](https://support.twilio.com)

```ts
twilio.createSipAuthRegistrationsCredentialListMapping(input: {
  /** The SID of the CredentialList resource to map to the SIP domain. */
  CredentialListSid: string;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
  AccountSid: string;
  /** The SID of the SIP domain that will contain the new resource. */
  DomainSid: string;
}): Promise<ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings.json` · `CreateSipAuthRegistrationsCredentialListMapping`</sub>

## `twilio.deleteSipAuthRegistrationsCredentialListMapping`

Delete a credential list mapping from the requested domain — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteSipAuthRegistrationsCredentialListMapping(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialListMapping resources to delete. */
  AccountSid: string;
  /** The SID of the SIP domain that contains the resources to delete. */
  DomainSid: string;
  /** The Twilio-provided string that uniquely identifies the CredentialListMapping resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings/{Sid}.json` · `DeleteSipAuthRegistrationsCredentialListMapping`</sub>

## `twilio.fetchSipAuthRegistrationsCredentialListMapping`

Fetch a specific instance of a credential list mapping — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchSipAuthRegistrationsCredentialListMapping(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialListMapping resource to fetch. */
  AccountSid: string;
  /** The SID of the SIP domain that contains the resource to fetch. */
  DomainSid: string;
  /** The Twilio-provided string that uniquely identifies the CredentialListMapping resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings/{Sid}.json` · `FetchSipAuthRegistrationsCredentialListMapping`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
