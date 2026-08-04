# Categories

2 operations · `@utdk/spotify`

```ts
import spotify from "@utdk/spotify";
```

## `spotify.getCategories`

Get Several Browse Categories — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getCategories(input: {
  /** The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language.<br/> _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._  */
  locale?: string;
  /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
  limit?: number;
  /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
  offset?: number;
}): Promise<{ categories: PagingObject & { items?: (CategoryObject)[] } }>
```

<sub>`GET /browse/categories` · `get-categories`</sub>

## `spotify.getACategory`

Get Single Browse Category — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getACategory(input: {
  /** The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.  */
  category_id: string;
  /** The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language.<br/> _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._  */
  locale?: string;
}): Promise<CategoryObject>
```

<sub>`GET /browse/categories/{category_id}` · `get-a-category`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
