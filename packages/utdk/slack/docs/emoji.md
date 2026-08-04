# Emoji

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.emojiList`

Lists custom emoji for a team. — [API reference](https://api.slack.com/methods/emoji.list)

```ts
slack.emojiList(input: {
  /** Authentication token. Requires scope: `emoji:read` */
  token: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /emoji.list` · `emoji_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
