# Moderations

1 operation · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.createModeration`

Classifies if text and/or image inputs are potentially harmful. Learn more in the [moderation guide](/docs/guides/moderation). — [Provider docs](https://help.openai.com/)

```ts
openai.createModeration(input: {
  /** Input (or inputs) to classify. Can be a single string, an array of strings, or an array of multi-modal input objects similar to other models.  */
  input: string | (string)[] | ({ type: "image_url"; image_url: { url: string } } | { type: "text"; text: string })[];
  /** The content moderation model you would like to use. Learn more in [the moderation guide](/docs/guides/moderation), and learn about available models [here](/docs/models#moderation).  */
  model?: string | "omni-moderation-latest" | "omni-moderation-2024-09-26" | "text-moderation-latest" | "text-moderation-stable";
}): Promise<CreateModerationResponse>
```

<sub>`POST /moderations` · `createModeration`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
