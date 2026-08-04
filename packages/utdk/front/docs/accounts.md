# Accounts

8 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listAccounts`

List Accounts — [Provider docs](https://community.front.com)

```ts
front.listAccounts(input: {
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
  /** Field used to sort the accounts. Either `created_at` or `updated_at`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (AccountResponse)[] }>
```

<sub>`GET /accounts` · `list-accounts`</sub>

## `front.createAccount`

Create account — [Provider docs](https://community.front.com)

```ts
front.createAccount(input: {
  /** Name of the Account */
  name?: string;
  /** Account description */
  description?: string;
  /** List of domains associated with the Account */
  domains?: (string)[];
  /** ID of the Account in an external system */
  external_id?: string;
  /** Custom fields for this account */
  custom_fields?: CustomFieldParameter;
}): Promise<AccountResponse>
```

<sub>`POST /accounts` · `create-account`</sub>

## `front.deleteAnAccount`

Delete an account — [Provider docs](https://community.front.com)

```ts
front.deleteAnAccount(input: {
  /** The Account ID. Alternatively, you can supply the account domain or external ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  account_id: string;
}): Promise<undefined>
```

<sub>`DELETE /accounts/{account_id}` · `delete-an-account`</sub>

## `front.fetchAnAccount`

Fetch an account — [Provider docs](https://community.front.com)

```ts
front.fetchAnAccount(input: {
  /** The Account ID. Alternatively, you can supply the account domain or external ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  account_id: string;
}): Promise<AccountResponse>
```

<sub>`GET /accounts/{account_id}` · `fetch-an-account`</sub>

## `front.updateAccount`

Update account — [Provider docs](https://community.front.com)

```ts
front.updateAccount(input: {
  /** Name of the Account */
  name?: string;
  /** Account description */
  description?: string;
  /** List of domains associated with the Account */
  domains?: (string)[];
  /** Custom fields for this account. If you want to keep all custom fields the same when updating this resource, do not include any custom fields in the update. If you want to update custom fields, make sure to include all custom fields, not just the fields you want to add or update. If you send only the custom fields you want to update, the other custom fields will be erased. You can retrieve the existing custom fields before making the update to note the current fields. */
  custom_fields?: CustomFieldParameter;
  /** The Account ID. Alternatively, you can supply the account domain or external ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  account_id: string;
}): Promise<AccountResponse>
```

<sub>`PATCH /accounts/{account_id}` · `update-account`</sub>

## `front.removeContactFromAccount`

Remove contact from Account — [Provider docs](https://community.front.com)

```ts
front.removeContactFromAccount(input: {
  /** The contact IDs to include. Alternatively, you can supply the contact source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  contact_ids: (ResourceId)[];
  /** The Account ID. Alternatively, you can supply the account domain or external ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  account_id: string;
}): Promise<undefined>
```

<sub>`DELETE /accounts/{account_id}/contacts` · `remove-contact-from-account`</sub>

## `front.listAccountContacts`

List account contacts — [Provider docs](https://community.front.com)

```ts
front.listAccountContacts(input: {
  /** The Account ID. Alternatively, you can supply the account domain or external ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  account_id: string;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Field used to sort the contacts. Either `created_at` or `updated_at`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (ContactResponse)[] }>
```

<sub>`GET /accounts/{account_id}/contacts` · `list-account-contacts`</sub>

## `front.addContactToAccount`

Add contact to Account — [Provider docs](https://community.front.com)

```ts
front.addContactToAccount(input: {
  /** The contact IDs to include. Alternatively, you can supply the contact source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  contact_ids: (ResourceId)[];
  /** The Account ID. Alternatively, you can supply the account domain or external ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  account_id: string;
}): Promise<undefined>
```

<sub>`POST /accounts/{account_id}/contacts` · `add-contact-to-account`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
