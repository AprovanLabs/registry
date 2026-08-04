# Api20100401ConnectApp

4 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listConnectApp`

Retrieve a list of connect-apps belonging to the account used to make the request — [Provider docs](https://support.twilio.com)

```ts
twilio.listConnectApp(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ConnectApp resources to read. */
  AccountSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; connect_apps?: (ApiV2010AccountConnectApp)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/ConnectApps.json` · `ListConnectApp`</sub>

## `twilio.deleteConnectApp`

Delete an instance of a connect-app — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteConnectApp(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ConnectApp resource to fetch. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the ConnectApp resource to fetch. */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json` · `DeleteConnectApp`</sub>

## `twilio.fetchConnectApp`

Fetch an instance of a connect-app — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchConnectApp(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ConnectApp resource to fetch. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the ConnectApp resource to fetch. */
  Sid: string;
}): Promise<ApiV2010AccountConnectApp>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json` · `FetchConnectApp`</sub>

## `twilio.updateConnectApp`

Update a connect-app with the specified parameters — [Provider docs](https://support.twilio.com)

```ts
twilio.updateConnectApp(input: {
  /** The URL to redirect the user to after we authenticate the user and obtain authorization to access the Connect App. */
  AuthorizeRedirectUrl?: string;
  /** The company name to set for the Connect App. */
  CompanyName?: string;
  /** The HTTP method to use when calling `deauthorize_callback_url`. */
  DeauthorizeCallbackMethod?: "GET" | "POST";
  /** The URL to call using the `deauthorize_callback_method` to de-authorize the Connect App. */
  DeauthorizeCallbackUrl?: string;
  /** A description of the Connect App. */
  Description?: string;
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  FriendlyName?: string;
  /** A public URL where users can obtain more information about this Connect App. */
  HomepageUrl?: string;
  /** A comma-separated list of the permissions you will request from the users of this ConnectApp.  Can include: `get-all` and `post-all`. */
  Permissions?: (ConnectAppEnumPermission)[];
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ConnectApp resources to update. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the ConnectApp resource to update. */
  Sid: string;
}): Promise<ApiV2010AccountConnectApp>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json` · `UpdateConnectApp`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
