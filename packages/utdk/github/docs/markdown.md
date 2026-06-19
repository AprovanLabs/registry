# Markdown

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.markdown.render`

- **HTTP**: `POST /markdown`
- **What it does**: Render a Markdown document
- **OpenAPI operationId**: `markdown/render`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ text: string; mode?: "markdown" | "gfm"; context?: string }`
- Client transport options: None

**Outputs**

- Client return type: `string`
- OpenAPI response codes: `200`, `304`

```ts
import github from "@utdk/github";

type MarkdownRenderInput = Parameters<typeof github.markdown.render> extends [infer T, ...unknown[]] ? T : undefined;
type MarkdownRenderOutput = Awaited<ReturnType<typeof github.markdown.render>>;

const input: MarkdownRenderInput = {} as { text: string; mode?: "markdown" | "gfm"; context?: string };
const result: MarkdownRenderOutput = await github.markdown.render(input);

// Result shape (from schema): string
```

### `github.markdown.renderRaw`

- **HTTP**: `POST /markdown/raw`
- **What it does**: Render a Markdown document in raw mode
- **OpenAPI operationId**: `markdown/render-raw`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body?: string }`
- Client transport options: None

**Outputs**

- Client return type: `string`
- OpenAPI response codes: `200`, `304`

```ts
import github from "@utdk/github";

type MarkdownRenderRawInput = Parameters<typeof github.markdown.renderRaw> extends [infer T, ...unknown[]] ? T : undefined;
type MarkdownRenderRawOutput = Awaited<ReturnType<typeof github.markdown.renderRaw>>;

const input: MarkdownRenderRawInput = {} as { body?: string };
const result: MarkdownRenderRawOutput = await github.markdown.renderRaw(input);

// Result shape (from schema): string
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
