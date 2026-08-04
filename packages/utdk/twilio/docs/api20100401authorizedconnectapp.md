# Api20100401AuthorizedConnectApp

2 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listAuthorizedConnectApp`

Retrieve a list of authorized-connect-apps belonging to the account used to make the request — [Provider docs](https://support.twilio.com)

```ts
twilio.listAuthorizedConnectApp(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AuthorizedConnectApp resources to read. */
  AccountSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; authorized_connect_apps?: (ApiV2010AccountAuthorizedConnectApp)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps.json` · `ListAuthorizedConnectApp`</sub>

## `twilio.fetchAuthorizedConnectApp`

Fetch an instance of an authorized-connect-app — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchAuthorizedConnectApp(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AuthorizedConnectApp resource to fetch. */
  AccountSid: string;
  /** The SID of the Connect App to fetch. */
  ConnectAppSid: string;
}): Promise<ApiV2010AccountAuthorizedConnectApp>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps/{ConnectAppSid}.json` · `FetchAuthorizedConnectApp`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
