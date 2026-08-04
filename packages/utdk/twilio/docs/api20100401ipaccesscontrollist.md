# Api20100401IpAccessControlList

5 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listSipIpAccessControlList`

Retrieve a list of IpAccessControlLists that belong to the account used to make the request — [Provider docs](https://support.twilio.com)

```ts
twilio.listSipIpAccessControlList(input: {
  /** The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
  AccountSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; ip_access_control_lists?: (ApiV2010AccountSipSipIpAccessControlList)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json` · `ListSipIpAccessControlList`</sub>

## `twilio.createSipIpAccessControlList`

Create a new IpAccessControlList resource — [Provider docs](https://support.twilio.com)

```ts
twilio.createSipIpAccessControlList(input: {
  /** A human readable descriptive text that describes the IpAccessControlList, up to 255 characters long. */
  FriendlyName: string;
  /** The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
  AccountSid: string;
}): Promise<ApiV2010AccountSipSipIpAccessControlList>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json` · `CreateSipIpAccessControlList`</sub>

## `twilio.deleteSipIpAccessControlList`

Delete an IpAccessControlList from the requested account — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteSipIpAccessControlList(input: {
  /** The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
  AccountSid: string;
  /** A 34 character string that uniquely identifies the resource to delete. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json` · `DeleteSipIpAccessControlList`</sub>

## `twilio.fetchSipIpAccessControlList`

Fetch a specific instance of an IpAccessControlList — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchSipIpAccessControlList(input: {
  /** The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
  AccountSid: string;
  /** A 34 character string that uniquely identifies the resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountSipSipIpAccessControlList>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json` · `FetchSipIpAccessControlList`</sub>

## `twilio.updateSipIpAccessControlList`

Rename an IpAccessControlList — [Provider docs](https://support.twilio.com)

```ts
twilio.updateSipIpAccessControlList(input: {
  /** A human readable descriptive text, up to 255 characters long. */
  FriendlyName: string;
  /** The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
  AccountSid: string;
  /** A 34 character string that uniquely identifies the resource to udpate. */
  Sid: string;
}): Promise<ApiV2010AccountSipSipIpAccessControlList>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json` · `UpdateSipIpAccessControlList`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
