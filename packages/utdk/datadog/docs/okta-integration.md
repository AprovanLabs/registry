# Okta Integration

5 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listOktaAccounts`

List Okta accounts — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOktaAccounts(): Promise<OktaAccountsResponse>
```

<sub>`GET /api/v2/integrations/okta/accounts` · `ListOktaAccounts`</sub>

## `datadog.createOktaAccount`

Add Okta account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createOktaAccount(input: {
  data: OktaAccount;
}): Promise<OktaAccountResponse>
```

<sub>`POST /api/v2/integrations/okta/accounts` · `CreateOktaAccount`</sub>

## `datadog.deleteOktaAccount`

Delete Okta account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteOktaAccount(input: {
  /** None */
  account_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integrations/okta/accounts/{account_id}` · `DeleteOktaAccount`</sub>

## `datadog.getOktaAccount`

Get Okta account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOktaAccount(input: {
  /** None */
  account_id: string;
}): Promise<OktaAccountResponse>
```

<sub>`GET /api/v2/integrations/okta/accounts/{account_id}` · `GetOktaAccount`</sub>

## `datadog.updateOktaAccount`

Update Okta account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateOktaAccount(input: {
  data: OktaAccountUpdateRequestData;
  /** None */
  account_id: string;
}): Promise<OktaAccountResponse>
```

<sub>`PATCH /api/v2/integrations/okta/accounts/{account_id}` · `UpdateOktaAccount`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
