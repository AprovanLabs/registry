# Api20100401Account

4 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listAccount`

Retrieves a collection of Accounts belonging to the account used to make the request — [Provider docs](https://support.twilio.com)

```ts
twilio.listAccount(input: {
  /** Only return the Account resources with friendly names that exactly match this name. */
  FriendlyName?: string;
  Status?: AccountEnumStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; accounts?: (ApiV2010Account)[] }>
```

<sub>`GET /2010-04-01/Accounts.json` · `ListAccount`</sub>

## `twilio.createAccount`

Create a new Twilio Subaccount from the account making the request — [Provider docs](https://support.twilio.com)

```ts
twilio.createAccount(input: {
  /** A human readable description of the account to create, defaults to `SubAccount Created at {YYYY-MM-DD HH:MM meridian}` */
  FriendlyName?: string;
}): Promise<ApiV2010Account>
```

<sub>`POST /2010-04-01/Accounts.json` · `CreateAccount`</sub>

## `twilio.fetchAccount`

Fetch the account specified by the provided Account Sid — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchAccount(input: {
  /** The Account Sid that uniquely identifies the account to fetch */
  Sid: string;
}): Promise<ApiV2010Account>
```

<sub>`GET /2010-04-01/Accounts/{Sid}.json` · `FetchAccount`</sub>

## `twilio.updateAccount`

Modify the properties of a given Account — [Provider docs](https://support.twilio.com)

```ts
twilio.updateAccount(input: {
  /** Update the human-readable description of this Account */
  FriendlyName?: string;
  Status?: AccountEnumStatus;
  /** The Account Sid that uniquely identifies the account to update */
  Sid: string;
}): Promise<ApiV2010Account>
```

<sub>`POST /2010-04-01/Accounts/{Sid}.json` · `UpdateAccount`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
