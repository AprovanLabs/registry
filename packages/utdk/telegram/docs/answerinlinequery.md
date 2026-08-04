# AnswerInlineQuery

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postAnswerinlinequery`

Use this method to send answers to an inline query. On success, *True* is returned. No more than **50** results per query are allowed. — [API reference](https://core.telegram.org/bots/api/#answerinlinequery)

```ts
telegram.postAnswerinlinequery(): Promise<{ ok: boolean; result: boolean }>
```

<sub>`POST /answerInlineQuery` · `post_answerinlinequery`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
