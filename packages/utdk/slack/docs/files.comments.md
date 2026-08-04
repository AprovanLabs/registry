# Files.Comments

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.filesCommentsDelete`

Deletes an existing comment on a file. — [API reference](https://api.slack.com/methods/files.comments.delete)

```ts
slack.filesCommentsDelete(input: {
  /** File to delete a comment from. */
  file?: string;
  /** The comment to delete. */
  id?: string;
}, options?: { headers?: { token?: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /files.comments.delete` · `files_comments_delete`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
