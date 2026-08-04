# Productions

11 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.publicListOrders`

List Orders

```ts
elevenlabs.publicListOrders(input: {
  /** Maximum number of orders to return per page. */
  page_size?: number;
  /** Number of orders to skip for pagination. */
  offset?: number;
  /** Filter orders by one or more statuses. */
  status?: (OrderState)[] | null;
  /** Filter orders created on or after this date. */
  start_date?: string | null;
  /** Filter orders created on or before this date. */
  end_date?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ListOrdersResponse>
```

<sub>`GET /v1/productions/orders` · `public_list_orders`</sub>

## `elevenlabs.publicCreateOrder`

Create Order

```ts
elevenlabs.publicCreateOrder(input: {
  body?: CreateOrderRequest | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<CreateOrderResponse>
```

<sub>`POST /v1/productions/orders` · `public_create_order`</sub>

## `elevenlabs.publicGetOrder`

Get Order

```ts
elevenlabs.publicGetOrder(input: {
  /** The ID of the order. */
  order_id: OrderId;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<OrderResponse>
```

<sub>`GET /v1/productions/orders/{order_id}` · `public_get_order`</sub>

## `elevenlabs.publicUpdateOrder`

Update Order

```ts
elevenlabs.publicUpdateOrder(input: {
  request: UpdateOrderRequest;
  /** The ID of the order. */
  order_id: OrderId;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<UpdateOrderResponse>
```

<sub>`PATCH /v1/productions/orders/{order_id}` · `public_update_order`</sub>

## `elevenlabs.publicGetOrderDeliverables`

Get Order Deliverables

```ts
elevenlabs.publicGetOrderDeliverables(input: {
  /** The ID of the order. */
  order_id: OrderId;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<OrderDeliverablesResponse>
```

<sub>`GET /v1/productions/orders/{order_id}/deliverables` · `public_get_order_deliverables`</sub>

## `elevenlabs.publicUpsertOrderItem`

Upsert Order Item

```ts
elevenlabs.publicUpsertOrderItem(input: {
  request: UpsertOrderItemRequest;
  /** The ID of the order. */
  order_id: OrderId;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<UpsertOrderItemResponse>
```

<sub>`POST /v1/productions/orders/{order_id}/items` · `public_upsert_order_item`</sub>

## `elevenlabs.publicRemoveOrderItem`

Remove Order Item

```ts
elevenlabs.publicRemoveOrderItem(input: {
  /** The ID of the order. */
  order_id: OrderId;
  /** The ID of the order item. */
  item_id: ItemId;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<RemoveOrderItemResponse>
```

<sub>`DELETE /v1/productions/orders/{order_id}/items/{item_id}` · `public_remove_order_item`</sub>

## `elevenlabs.publicRegisterMedia`

Register Media

```ts
elevenlabs.publicRegisterMedia(input: {
  /** The language code of the media content (e.g. 'en', 'es-ES'). Must be a supported source language for some order item kind. */
  declared_language: string;
  /** The media file to upload. Mutually exclusive with media_url. */
  media?: string | null;
  /** A URL to fetch the media file from. Mutually exclusive with media. */
  media_url?: string | null;
  /** The filename for URL-sourced media (e.g. 'example.mp4'). Required when using media_url. */
  media_url_filename?: string | null;
  /** The MIME type for URL-sourced media (e.g. 'video/mp4'). Required when using media_url. */
  media_url_content_type?: string | null;
  /** The ID of the order to which this media will be attached. */
  order_id: OrderId;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<RegisterMediaResponse>
```

<sub>`POST /v1/productions/orders/{order_id}/media` · `public_register_media`</sub>

## `elevenlabs.publicGetMediaInfo`

Get Media Info

```ts
elevenlabs.publicGetMediaInfo(input: {
  /** The ID of the order. */
  order_id: OrderId;
  /** The ID of the media file. */
  media_id: MediaId;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<OrderMediaResponse>
```

<sub>`GET /v1/productions/orders/{order_id}/media/{media_id}` · `public_get_media_info`</sub>

## `elevenlabs.publicSubmitOrder`

Submit Order

```ts
elevenlabs.publicSubmitOrder(input: {
  /** The ID of the order. */
  order_id: OrderId;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SubmitOrderResponse>
```

<sub>`POST /v1/productions/orders/{order_id}/submit` · `public_submit_order`</sub>

## `elevenlabs.publicGetAvailableLanguages`

Get Available Languages

```ts
elevenlabs.publicGetAvailableLanguages(input: {
  /** The kind of order item. */
  order_item_kind: OrderItemKind;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<LanguagesResponse>
```

<sub>`GET /v1/productions/orders/languages/{order_item_kind}` · `public_get_available_languages`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
