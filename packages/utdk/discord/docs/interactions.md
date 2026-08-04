# Interactions

1 operation · `@utdk/discord`

```ts
import discord from "@utdk/discord";
```

## `discord.createInteractionResponse`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createInteractionResponse(input: {
  body: ApplicationCommandAutocompleteCallbackRequest | CreateMessageInteractionCallbackRequest | LaunchActivityInteractionCallbackRequest | ModalInteractionCallbackRequest | PongInteractionCallbackRequest | SocialLayerSkuPurchaseEligibilityInteractionCallbackRequest | UpdateMessageInteractionCallbackRequest;
  interaction_id: SnowflakeType;
  interaction_token: string;
  with_response?: boolean;
}): Promise<InteractionCallbackResponse>
```

<sub>`POST /interactions/{interaction_id}/{interaction_token}/callback` · `create_interaction_response`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
