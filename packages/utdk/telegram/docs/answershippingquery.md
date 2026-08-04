# AnswerShippingQuery

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postAnswershippingquery`

If you sent an invoice requesting a shipping address and the parameter *is\_flexible* was specified, the Bot API will send an [Update](https://core.telegram.org/bots/api/#update) with a *shipping\_query* field to the bot. Use this method to reply to shipping queries. On success, True is returned. — [API reference](https://core.telegram.org/bots/api/#answershippingquery)

```ts
telegram.postAnswershippingquery(): Promise<{ ok: boolean; result: boolean }>
```

<sub>`POST /answerShippingQuery` · `post_answershippingquery`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
