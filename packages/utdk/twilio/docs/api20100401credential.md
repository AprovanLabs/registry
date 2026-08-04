# Api20100401Credential

5 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listSipCredential`

Retrieve a list of credentials. — [Provider docs](https://support.twilio.com)

```ts
twilio.listSipCredential(input: {
  /** The unique id of the Account that is responsible for this resource. */
  AccountSid: string;
  /** The unique id that identifies the credential list that contains the desired credentials. */
  CredentialListSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; credentials?: (ApiV2010AccountSipSipCredentialListSipCredential)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json` · `ListSipCredential`</sub>

## `twilio.createSipCredential`

Create a new credential resource. — [Provider docs](https://support.twilio.com)

```ts
twilio.createSipCredential(input: {
  /** The username that will be passed when authenticating SIP requests. The username should be sent in response to Twilio's challenge of the initial INVITE. It can be up to 32 characters long. */
  Username: string;
  /** The password that the username will use when authenticating SIP requests. The password must be a minimum of 12 characters, contain at least 1 digit, and have mixed case. (eg `IWasAtSignal2018`) */
  Password: string;
  /** The unique id of the Account that is responsible for this resource. */
  AccountSid: string;
  /** The unique id that identifies the credential list to include the created credential. */
  CredentialListSid: string;
}): Promise<ApiV2010AccountSipSipCredentialListSipCredential>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json` · `CreateSipCredential`</sub>

## `twilio.deleteSipCredential`

Delete a credential resource. — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteSipCredential(input: {
  /** The unique id of the Account that is responsible for this resource. */
  AccountSid: string;
  /** The unique id that identifies the credential list that contains the desired credentials. */
  CredentialListSid: string;
  /** The unique id that identifies the resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json` · `DeleteSipCredential`</sub>

## `twilio.fetchSipCredential`

Fetch a single credential. — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchSipCredential(input: {
  /** The unique id of the Account that is responsible for this resource. */
  AccountSid: string;
  /** The unique id that identifies the credential list that contains the desired credential. */
  CredentialListSid: string;
  /** The unique id that identifies the resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountSipSipCredentialListSipCredential>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json` · `FetchSipCredential`</sub>

## `twilio.updateSipCredential`

Update a credential resource. — [Provider docs](https://support.twilio.com)

```ts
twilio.updateSipCredential(input: {
  /** The password that the username will use when authenticating SIP requests. The password must be a minimum of 12 characters, contain at least 1 digit, and have mixed case. (eg `IWasAtSignal2018`) */
  Password?: string;
  /** The unique id of the Account that is responsible for this resource. */
  AccountSid: string;
  /** The unique id that identifies the credential list that includes this credential. */
  CredentialListSid: string;
  /** The unique id that identifies the resource to update. */
  Sid: string;
}): Promise<ApiV2010AccountSipSipCredentialListSipCredential>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json` · `UpdateSipCredential`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
