# PromoteChatMember

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postPromotechatmember`

Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass *False* for all boolean parameters to demote a user. Returns *True* on success. — [API reference](https://core.telegram.org/bots/api/#promotechatmember)

```ts
telegram.postPromotechatmember(): Promise<{ ok: boolean; result: boolean }>
```

<sub>`POST /promoteChatMember` · `post_promotechatmember`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
