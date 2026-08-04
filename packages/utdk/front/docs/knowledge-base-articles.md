# Knowledge Base Articles

9 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.deleteAnArticle`

Delete an article — [Provider docs](https://community.front.com)

```ts
front.deleteAnArticle(input: {
  /** The ID of the article to delete */
  article_id: string;
}): Promise<KnowledgeBaseArticleSlimResponse>
```

<sub>`DELETE /knowledge_base_articles/{article_id}` · `delete-an-article`</sub>

## `front.getAKnowledgeBaseArticle`

Get a knowledge base article — [Provider docs](https://community.front.com)

```ts
front.getAKnowledgeBaseArticle(input: {
  /** The ID of the article to fetch */
  article_id: string;
}): Promise<KnowledgeBaseArticleSlimResponse>
```

<sub>`GET /knowledge_base_articles/{article_id}` · `get-a-knowledge-base-article`</sub>

## `front.getKnowledgeBaseArticleWithContentInDefaultLocale`

Get knowledge base article with content in default locale — [Provider docs](https://community.front.com)

```ts
front.getKnowledgeBaseArticleWithContentInDefaultLocale(input: {
  /** The ID of the article to fetch */
  article_id: string;
}): Promise<KnowledgeBaseArticleResponse>
```

<sub>`GET /knowledge_base_articles/{article_id}/content` · `get-knowledge-base-article-with-content-in-default-locale`</sub>

## `front.updateArticleContentInDefaultLocale`

Update article content in default locale. — [Provider docs](https://community.front.com)

```ts
front.updateArticleContentInDefaultLocale(input: {
  /** Teammate ID of the article author */
  author_id?: string;
  /** Subject of the article */
  subject?: string;
  /** HTML content of the article */
  content?: string;
  /** Article status */
  status?: "draft" | "published";
  /** The ID of the article to update */
  article_id: string;
}): Promise<KnowledgeBaseArticleResponse>
```

<sub>`PATCH /knowledge_base_articles/{article_id}/content` · `update-article-content-in-default-locale`</sub>

## `front.downloadAttachmentFromAnArticle`

Download attachment from an article — [Provider docs](https://community.front.com)

```ts
front.downloadAttachmentFromAnArticle(input: {
  /** The ID of the article */
  article_id: string;
  /** The ID of the file to download */
  attachment_id: string;
}): Promise<string>
```

<sub>`GET /knowledge_base_articles/{article_id}/download/{attachment_id}` · `download-attachment-from-an-article`</sub>

## `front.getKnowledgeBaseArticleWithContentInSpecifiedLocale`

Get knowledge base article with content in specified locale — [Provider docs](https://community.front.com)

```ts
front.getKnowledgeBaseArticleWithContentInSpecifiedLocale(input: {
  /** The ID of the article to fetch */
  article_id: string;
  /** The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the content to fetch */
  locale: string;
}): Promise<KnowledgeBaseArticleResponse>
```

<sub>`GET /knowledge_base_articles/{article_id}/locales/{locale}/content` · `get-knowledge-base-article-with-content-in-specified-locale`</sub>

## `front.updateArticleContentInSpecifiedLocale`

Update article content in specified locale — [Provider docs](https://community.front.com)

```ts
front.updateArticleContentInSpecifiedLocale(input: {
  /** Teammate ID of the article author */
  author_id?: string;
  /** Subject of the article */
  subject?: string;
  /** HTML content of the article */
  content?: string;
  /** Article status */
  status?: "draft" | "published";
  /** The ID of the article to update */
  article_id: string;
  /** The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the updated content */
  locale: string;
}): Promise<KnowledgeBaseArticleResponse>
```

<sub>`PATCH /knowledge_base_articles/{article_id}/locales/{locale}/content` · `update-article-content-in-specified-locale`</sub>

## `front.listArticlesInACategory`

List articles in a category — [Provider docs](https://community.front.com)

```ts
front.listArticlesInACategory(input: {
  /** The ID of the category */
  category_id: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (KnowledgeBaseArticleSlimResponse)[] }>
```

<sub>`GET /knowledge_base_categories/{category_id}/articles` · `list-articles-in-a-category`</sub>

## `front.listArticlesInAKnowledgeBase`

List articles in a knowledge base — [Provider docs](https://community.front.com)

```ts
front.listArticlesInAKnowledgeBase(input: {
  /** The ID of the knowledge base */
  knowledge_base_id: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (KnowledgeBaseArticleSlimResponse)[] }>
```

<sub>`GET /knowledge_bases/{knowledge_base_id}/articles` · `list-articles-in-a-knowledge-base`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
