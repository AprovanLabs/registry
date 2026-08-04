# Articles

6 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.listArticles`

List all articles — [Provider docs](https://developers.intercom.com)

```ts
intercom.listArticles(options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ArticleList>
```

<sub>`GET /articles` · `listArticles`</sub>

## `intercom.createArticle`

Create an article — [Provider docs](https://developers.intercom.com)

```ts
intercom.createArticle(input: {
  /** The title of the article.For multilingual articles, this will be the title of the default language's content. */
  title: string;
  /** The description of the article. For multilingual articles, this will be the description of the default language's content. */
  description?: string;
  /** The content of the article. For multilingual articles, this will be the body of the default language's content. */
  body?: string;
  /** The id of the author of the article. For multilingual articles, this will be the id of the author of the default language's content. Must be a teammate on the help center's workspace. */
  author_id: number;
  /** Whether the article will be `published` or will be a `draft`. Defaults to draft. For multilingual articles, this will be the state of the default language's content. */
  state?: "published" | "draft";
  /** The id of the article's parent collection or section. An article without this field stands alone. */
  parent_id?: number;
  /** The type of parent, which can either be a `collection` or `section`. */
  parent_type?: string;
  translated_content?: ArticleTranslatedContent;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Article>
```

<sub>`POST /articles` · `createArticle`</sub>

## `intercom.deleteArticle`

Delete an article — [Provider docs](https://developers.intercom.com)

```ts
intercom.deleteArticle(input: {
  /** The unique identifier for the article which is given by Intercom. */
  article_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<DeletedArticleObject>
```

<sub>`DELETE /articles/{article_id}` · `deleteArticle`</sub>

## `intercom.retrieveArticle`

Retrieve an article — [Provider docs](https://developers.intercom.com)

```ts
intercom.retrieveArticle(input: {
  /** The unique identifier for the article which is given by Intercom. */
  article_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Article>
```

<sub>`GET /articles/{article_id}` · `retrieveArticle`</sub>

## `intercom.updateArticle`

Update an article — [Provider docs](https://developers.intercom.com)

```ts
intercom.updateArticle(input: {
  /** The title of the article.For multilingual articles, this will be the title of the default language's content. */
  title?: string;
  /** The description of the article. For multilingual articles, this will be the description of the default language's content. */
  description?: string;
  /** The content of the article. For multilingual articles, this will be the body of the default language's content. */
  body?: string;
  /** The id of the author of the article. For multilingual articles, this will be the id of the author of the default language's content. Must be a teammate on the help center's workspace. */
  author_id?: number;
  /** Whether the article will be `published` or will be a `draft`. Defaults to draft. For multilingual articles, this will be the state of the default language's content. */
  state?: "published" | "draft";
  /** The id of the article's parent collection or section. An article without this field stands alone. */
  parent_id?: string;
  /** The type of parent, which can either be a `collection` or `section`. */
  parent_type?: string;
  translated_content?: ArticleTranslatedContent;
  /** The unique identifier for the article which is given by Intercom. */
  article_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Article>
```

<sub>`PUT /articles/{article_id}` · `updateArticle`</sub>

## `intercom.searchArticles`

Search for articles — [Provider docs](https://developers.intercom.com)

```ts
intercom.searchArticles(input: {
  /** The phrase within your articles to search for. */
  phrase?: string;
  /** The state of the Articles returned. One of `published`, `draft` or `all`. */
  state?: string;
  /** The ID of the Help Center to search in. */
  help_center_id?: number;
  /** Return a highlighted version of the matching content within your articles. Refer to the response schema for more details. */
  highlight?: boolean;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ArticleSearchResponse>
```

<sub>`GET /articles/search` · `searchArticles`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
