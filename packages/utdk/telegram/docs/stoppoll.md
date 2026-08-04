# StopPoll

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postStoppoll`

Use this method to stop a poll which was sent by the bot. On success, the stopped [Poll](https://core.telegram.org/bots/api/#poll) with the final results is returned. — [API reference](https://core.telegram.org/bots/api/#stoppoll)

```ts
telegram.postStoppoll(): Promise<{ ok: boolean; result: { allows_multiple_answers: boolean; close_date?: number; correct_option_id?: number; explanation?: string; explanation_entities?: ({ language?: string; length: number; offset: number; type: "mention" | "hashtag" | "cashtag" | "bot_command" | "url" | "email" | "phone_number" | "bold" | "italic" | "underline" | "strikethrough" | "code" | "pre" | "text_link" | "text_mention"; ...>
```

<sub>`POST /stopPoll` · `post_stoppoll`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
