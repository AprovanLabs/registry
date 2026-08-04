# AnswerPreCheckoutQuery

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postAnswerprecheckoutquery`

Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an [Update](https://core.telegram.org/bots/api/#update) with the field *pre\_checkout\_query*. Use this method to respond to such pre-checkout queries. On success, True is returned. **Note:** The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent. — [API reference](https://core.telegram.org/bots/api/#answerprecheckoutquery)

```ts
telegram.postAnswerprecheckoutquery(): Promise<{ ok: boolean; result: boolean }>
```

<sub>`POST /answerPreCheckoutQuery` · `post_answerprecheckoutquery`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
