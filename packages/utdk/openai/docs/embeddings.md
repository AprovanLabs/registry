# Embeddings

1 operation · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.createEmbedding`

Creates an embedding vector representing the input text. — [Provider docs](https://help.openai.com/)

```ts
openai.createEmbedding(input: {
  /** Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a single request, pass an array of strings or array of token arrays. The input must not exceed the max input tokens for the model (8192 tokens for `text-embedding-ada-002`), cannot be an empty string, and any array must be 2048 dimensions or less. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens. Some models may also impose a limit on total number of tokens summed across inputs.  */
  input: string | (string)[] | (number)[] | ((number)[])[];
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.  */
  model: string | "text-embedding-ada-002" | "text-embedding-3-small" | "text-embedding-3-large";
  /** The format to return the embeddings in. Can be either `float` or [`base64`](https://pypi.org/project/pybase64/). */
  encoding_format?: "float" | "base64";
  /** The number of dimensions the resulting output embeddings should have. Only supported in `text-embedding-3` and later models.  */
  dimensions?: number;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).  */
  user?: string;
}): Promise<CreateEmbeddingResponse>
```

<sub>`POST /embeddings` · `createEmbedding`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
