# Customers

5 operations · `@utdk/mercury`

```ts
import mercury from "@utdk/mercury";
```

## `mercury.listCustomers`

List all customers

```ts
mercury.listCustomers(input: {
  /** Maximum number of results to return. Allowed range: 1 to 1000. Defaults to 1000 */
  limit?: number;
  /** The ID of the customer to start the page after (exclusive). When provided, results will begin with the customer immediately following this ID. Use this for standard forward pagination to get the next page of results. Cannot be combined with end_before. */
  start_after?: string;
  /** The ID of the customer to end the page before (exclusive). When provided, results will end just before this ID and work backwards. Use this for reverse pagination or to retrieve previous pages. Cannot be combined with start_after. */
  end_before?: string;
  /** Sort order. Can be 'asc' or 'desc'. Defaults to 'asc' */
  order?: "asc" | "desc";
}): Promise<ApiV1ArCustomerPaginatedResponseData>
```

<sub>`GET /ar/customers` · `listCustomers`</sub>

## `mercury.createCustomer`

Create a customer

```ts
mercury.createCustomer(input: {
  address?: ApiV1ArCustomerAddressInput & unknown | null;
  email: Email & unknown;
  /**  The name of the customer. */
  name: string;
}): Promise<ApiV1ArCustomerResponseData>
```

<sub>`POST /ar/customers` · `createCustomer`</sub>

## `mercury.deleteCustomer`

Delete a customer

```ts
mercury.deleteCustomer(input: {
  /** The customer who will receive the invoice. Use the /api/v1/ar/customers endpoint to list your customers and find the corresponding id, or create a new customer first. */
  customerId: string;
}): Promise<undefined>
```

<sub>`DELETE /ar/customers/{customerId}` · `deleteCustomer`</sub>

## `mercury.getCustomer`

Get a customer

```ts
mercury.getCustomer(input: {
  /** The customer who will receive the invoice. Use the /api/v1/ar/customers endpoint to list your customers and find the corresponding id, or create a new customer first. */
  customerId: string;
}): Promise<ApiV1ArCustomerResponseData>
```

<sub>`GET /ar/customers/{customerId}` · `getCustomer`</sub>

## `mercury.updateCustomer`

Update a customer

```ts
mercury.updateCustomer(input: {
  address?: ApiV1ArCustomerAddressInput & unknown | null;
  email: Email & unknown;
  /**  The name of the customer. */
  name: string;
  /**  Open invoices for the customer will be resent with updated data  when this is true. */
  resendOpenInvoices: boolean;
  /** The customer who will receive the invoice. Use the /api/v1/ar/customers endpoint to list your customers and find the corresponding id, or create a new customer first. */
  customerId: string;
}): Promise<ApiV1ArCustomerResponseData>
```

<sub>`POST /ar/customers/{customerId}` · `updateCustomer`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
