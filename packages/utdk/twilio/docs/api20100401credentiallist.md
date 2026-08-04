# Api20100401CredentialList

5 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listSipCredentialList`

Get All Credential Lists — [Provider docs](https://support.twilio.com)

```ts
twilio.listSipCredentialList(input: {
  /** The unique id of the Account that is responsible for this resource. */
  AccountSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; credential_lists?: (ApiV2010AccountSipSipCredentialList)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json` · `ListSipCredentialList`</sub>

## `twilio.createSipCredentialList`

Create a Credential List — [Provider docs](https://support.twilio.com)

```ts
twilio.createSipCredentialList(input: {
  /** A human readable descriptive text that describes the CredentialList, up to 64 characters long. */
  FriendlyName: string;
  /** The unique id of the Account that is responsible for this resource. */
  AccountSid: string;
}): Promise<ApiV2010AccountSipSipCredentialList>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json` · `CreateSipCredentialList`</sub>

## `twilio.deleteSipCredentialList`

Delete a Credential List — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteSipCredentialList(input: {
  /** The unique id of the Account that is responsible for this resource. */
  AccountSid: string;
  /** The credential list Sid that uniquely identifies this resource */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json` · `DeleteSipCredentialList`</sub>

## `twilio.fetchSipCredentialList`

Get a Credential List — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchSipCredentialList(input: {
  /** The unique id of the Account that is responsible for this resource. */
  AccountSid: string;
  /** The credential list Sid that uniquely identifies this resource */
  Sid: string;
}): Promise<ApiV2010AccountSipSipCredentialList>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json` · `FetchSipCredentialList`</sub>

## `twilio.updateSipCredentialList`

Update a Credential List — [Provider docs](https://support.twilio.com)

```ts
twilio.updateSipCredentialList(input: {
  /** A human readable descriptive text for a CredentialList, up to 64 characters long. */
  FriendlyName: string;
  /** The unique id of the Account that is responsible for this resource. */
  AccountSid: string;
  /** The credential list Sid that uniquely identifies this resource */
  Sid: string;
}): Promise<ApiV2010AccountSipSipCredentialList>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json` · `UpdateSipCredentialList`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
