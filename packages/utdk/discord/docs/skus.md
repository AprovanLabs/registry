# Skus

2 operations · `@utdk/discord`

```ts
import discord from "@utdk/discord";
```

## `discord.getSkuSubscriptions`

Returns all subscriptions containing the SKU, filtered by user. — [Provider docs](https://discord.com/developers/docs)

```ts
discord.getSkuSubscriptions(input: {
  sku_id: SnowflakeType;
  before?: SnowflakeType;
  after?: SnowflakeType;
  limit?: number;
  user_id?: SnowflakeType;
}): Promise<(SubscriptionResponse)[]>
```

<sub>`GET /skus/{sku_id}/subscriptions` · `get_sku_subscriptions`</sub>

## `discord.getSkuSubscription`

Get a subscription by its ID. — [Provider docs](https://discord.com/developers/docs)

```ts
discord.getSkuSubscription(input: {
  sku_id: SnowflakeType;
  subscription_id: SnowflakeType;
  user_id?: SnowflakeType;
}): Promise<SubscriptionResponse>
```

<sub>`GET /skus/{sku_id}/subscriptions/{subscription_id}` · `get_sku_subscription`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
