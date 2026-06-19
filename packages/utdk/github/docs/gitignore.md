# Gitignore

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.gitignore.getAllTemplates`

- **HTTP**: `GET /gitignore/templates`
- **What it does**: Get all gitignore templates
- **OpenAPI operationId**: `gitignore/get-all-templates`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ [key: string]: unknown }`
- Client transport options: None

**Outputs**

- Client return type: `(string)[]`
- OpenAPI response codes: `200`, `304`

```ts
import github from "@utdk/github";

type GitignoreGetAllTemplatesInput = Parameters<typeof github.gitignore.getAllTemplates> extends [infer T, ...unknown[]] ? T : undefined;
type GitignoreGetAllTemplatesOutput = Awaited<ReturnType<typeof github.gitignore.getAllTemplates>>;

const result: GitignoreGetAllTemplatesOutput = await github.gitignore.getAllTemplates();

// Result shape (from schema): (string)[]
```

### `github.gitignore.getTemplate`

- **HTTP**: `GET /gitignore/templates/{name}`
- **What it does**: Get a gitignore template
- **OpenAPI operationId**: `gitignore/get-template`
- **Path params**: `name`
- **Query params**: None
- **Response codes**: `200`, `304`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; source: string }`
- OpenAPI response codes: `200`, `304`

```ts
import github from "@utdk/github";

type GitignoreGetTemplateInput = Parameters<typeof github.gitignore.getTemplate> extends [infer T, ...unknown[]] ? T : undefined;
type GitignoreGetTemplateOutput = Awaited<ReturnType<typeof github.gitignore.getTemplate>>;

const input: GitignoreGetTemplateInput = {} as { name: string };
const result: GitignoreGetTemplateOutput = await github.gitignore.getTemplate(input);

// Result shape (from schema): { name: string; source: string }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
