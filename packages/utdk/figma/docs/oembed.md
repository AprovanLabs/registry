# OEmbed

1 operation · `@utdk/figma`

```ts
import figma from "@utdk/figma";
```

## `figma.getOEmbed`

Get oEmbed data — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getOEmbed(input: {
  /** The URL of the Figma file or published Make site to retrieve oEmbed data for. */
  url: string;
  /** Maximum width of the embed in pixels. Defaults to 800. The response width will be adjusted to maintain a 16:9 aspect ratio with maxheight. */
  maxwidth?: number;
  /** Maximum height of the embed in pixels. Defaults to 450. The response height will be adjusted to maintain a 16:9 aspect ratio with maxwidth. */
  maxheight?: number;
}): Promise<{ version: string; type: string; title: string; key?: string; url: string; provider_name: string; provider_url: string; cache_age: number; width: number; height: number; html: string; is_published_site?: boolean; folder_name?: string; thumbnail_url?: string; thumbnail_width?: number; thumbnail_height?: number }>
```

<sub>`GET /v1/oembed` · `getOEmbed`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
