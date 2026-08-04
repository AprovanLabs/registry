# Admin.Emoji

5 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.adminEmojiAdd`

Add an emoji. — [API reference](https://api.slack.com/methods/admin.emoji.add)

```ts
slack.adminEmojiAdd(input: {
  /** The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included. */
  name: string;
  /** Authentication token. Requires scope: `admin.teams:write` */
  token: string;
  /** The URL of a file to use as an image for the emoji. Square images under 128KB and with transparent backgrounds work best. */
  url: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.emoji.add` · `admin_emoji_add`</sub>

## `slack.adminEmojiAddAlias`

Add an emoji alias. — [API reference](https://api.slack.com/methods/admin.emoji.addAlias)

```ts
slack.adminEmojiAddAlias(input: {
  /** The alias of the emoji. */
  alias_for: string;
  /** The name of the emoji to be aliased. Colons (`:myemoji:`) around the value are not required, although they may be included. */
  name: string;
  /** Authentication token. Requires scope: `admin.teams:write` */
  token: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.emoji.addAlias` · `admin_emoji_addAlias`</sub>

## `slack.adminEmojiList`

List emoji for an Enterprise Grid organization. — [API reference](https://api.slack.com/methods/admin.emoji.list)

```ts
slack.adminEmojiList(input: {
  /** Authentication token. Requires scope: `admin.teams:read` */
  token: string;
  /** Set `cursor` to `next_cursor` returned by the previous call to list items in the next page */
  cursor?: string;
  /** The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
  limit?: number;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /admin.emoji.list` · `admin_emoji_list`</sub>

## `slack.adminEmojiRemove`

Remove an emoji across an Enterprise Grid organization — [API reference](https://api.slack.com/methods/admin.emoji.remove)

```ts
slack.adminEmojiRemove(input: {
  /** The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included. */
  name: string;
  /** Authentication token. Requires scope: `admin.teams:write` */
  token: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.emoji.remove` · `admin_emoji_remove`</sub>

## `slack.adminEmojiRename`

Rename an emoji. — [API reference](https://api.slack.com/methods/admin.emoji.rename)

```ts
slack.adminEmojiRename(input: {
  /** The name of the emoji to be renamed. Colons (`:myemoji:`) around the value are not required, although they may be included. */
  name: string;
  /** The new name of the emoji. */
  new_name: string;
  /** Authentication token. Requires scope: `admin.teams:write` */
  token: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.emoji.rename` · `admin_emoji_rename`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
