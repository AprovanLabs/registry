# Store

4 operations · `@utdk/petstore`

```ts
import petstore from "@utdk/petstore";
```

## `petstore.getInventory`

Returns pet inventories by status. — [Provider docs](https://swagger.io)

```ts
petstore.getInventory(): Promise<{ [key: string]: number | undefined }>
```

<sub>`GET /store/inventory` · `getInventory`</sub>

## `petstore.placeOrder`

Place an order for a pet. — [Provider docs](https://swagger.io)

```ts
petstore.placeOrder(input: {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  /** Order Status */
  status?: "placed" | "approved" | "delivered";
  complete?: boolean;
}): Promise<Order>
```

<sub>`POST /store/order` · `placeOrder`</sub>

## `petstore.deleteOrder`

Delete purchase order by identifier. — [Provider docs](https://swagger.io)

```ts
petstore.deleteOrder(input: {
  /** ID of the order that needs to be deleted */
  orderId: number;
}): Promise<undefined>
```

<sub>`DELETE /store/order/{orderId}` · `deleteOrder`</sub>

## `petstore.getOrderById`

Find purchase order by ID. — [Provider docs](https://swagger.io)

```ts
petstore.getOrderById(input: {
  /** ID of order that needs to be fetched */
  orderId: number;
}): Promise<Order>
```

<sub>`GET /store/order/{orderId}` · `getOrderById`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
