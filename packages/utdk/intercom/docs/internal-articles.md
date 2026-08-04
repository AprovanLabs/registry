# Internal Articles

6 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.listInternalArticles`

List all articles — [Provider docs](https://developers.intercom.com)

```ts
intercom.listInternalArticles(options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<InternalArticleList>
```

<sub>`GET /internal_articles` · `listInternalArticles`</sub>

## `intercom.createInternalArticle`

Create an internal article — [Provider docs](https://developers.intercom.com)

```ts
intercom.createInternalArticle(input: {
  /** The title of the article. */
  title: string;
  /** The content of the article. */
  body?: string;
  /** The id of the author of the article. */
  author_id: number;
  /** The id of the owner of the article. */
  owner_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<InternalArticle>
```

<sub>`POST /internal_articles` · `createInternalArticle`</sub>

## `intercom.deleteInternalArticle`

Delete an internal article — [Provider docs](https://developers.intercom.com)

```ts
intercom.deleteInternalArticle(input: {
  /** The unique identifier for the internal article which is given by Intercom. */
  internal_article_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<DeletedInternalArticleObject>
```

<sub>`DELETE /internal_articles/{internal_article_id}` · `deleteInternalArticle`</sub>

## `intercom.retrieveInternalArticle`

Retrieve an internal article — [Provider docs](https://developers.intercom.com)

```ts
intercom.retrieveInternalArticle(input: {
  /** The unique identifier for the article which is given by Intercom. */
  internal_article_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<InternalArticle>
```

<sub>`GET /internal_articles/{internal_article_id}` · `retrieveInternalArticle`</sub>

## `intercom.updateInternalArticle`

Update an internal article — [Provider docs](https://developers.intercom.com)

```ts
intercom.updateInternalArticle(input: {
  /** The title of the article. */
  title?: string;
  /** The content of the article. */
  body?: string;
  /** The id of the author of the article. */
  author_id?: number;
  /** The id of the author of the article. */
  owner_id?: number;
  /** The unique identifier for the internal article which is given by Intercom. */
  internal_article_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<InternalArticle>
```

<sub>`PUT /internal_articles/{internal_article_id}` · `updateInternalArticle`</sub>

## `intercom.searchInternalArticles`

Search for internal articles — [Provider docs](https://developers.intercom.com)

```ts
intercom.searchInternalArticles(input: {
  /** The ID of the folder to search in. */
  folder_id?: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<InternalArticleSearchResponse>
```

<sub>`GET /internal_articles/search` · `searchInternalArticles`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
