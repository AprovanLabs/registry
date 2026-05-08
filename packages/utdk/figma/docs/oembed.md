# OEmbed

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/figma`

## Operations

### `figma.getOEmbed`

- **HTTP**: `GET /v1/oembed`
- **What it does**: Get oEmbed data
- **OpenAPI operationId**: `getOEmbed`
- **Path params**: None
- **Query params**: `url`, `maxwidth`, `maxheight`
- **Response codes**: `200`, `400`, `404`, `429`, `501`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ url: string; maxwidth?: number; maxheight?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ version: string; type: string; title: string; key?: string; url: string; provider_name: string; provider_url: string; cache_age: number; width: number; height: number; html: string; is_published_site?: boolean; folder...`
- OpenAPI response codes: `200`, `400`, `404`, `429`, `501`

```ts
import figma from "@utdk/figma";

type GetOEmbedInput = Parameters<typeof figma.getOEmbed> extends [infer T, ...unknown[]] ? T : undefined;
type GetOEmbedOutput = Awaited<ReturnType<typeof figma.getOEmbed>>;

const input: GetOEmbedInput = {} as { url: string; maxwidth?: number; maxheight?: number };
const result: GetOEmbedOutput = await figma.getOEmbed(input);

// Result shape (from schema): { version: string; type: string; title: string; key?: string; url: string; provider_name: string; provider_url: string; cache_age: number; width: number; height: number; html: string; is_published_site?: boolean; folder...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
