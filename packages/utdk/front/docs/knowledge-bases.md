# Knowledge Bases

11 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listKnowledgeBases`

List knowledge bases — [Provider docs](https://community.front.com)

```ts
front.listKnowledgeBases(): Promise<{ _links?: { self?: string }; _results?: (KnowledgeBaseSlimResponse)[] }>
```

<sub>`GET /knowledge_bases` · `list-knowledge-bases`</sub>

## `front.createAKnowledgeBase`

Create a knowledge base — [Provider docs](https://community.front.com)

```ts
front.createAKnowledgeBase(input: {
  /** Name of the knowledge base */
  name: string;
  /** Determines if the knowledge base is publicly available or private only to your company */
  type?: "internal" | "external";
}): Promise<KnowledgeBaseResponse>
```

<sub>`POST /knowledge_bases` · `create-a-knowledge-base`</sub>

## `front.getAKnowledgeBase`

Get a knowledge base — [Provider docs](https://community.front.com)

```ts
front.getAKnowledgeBase(input: {
  /** The ID of the knowledge base to fetch */
  knowledge_base_id: string;
}): Promise<KnowledgeBaseSlimResponse>
```

<sub>`GET /knowledge_bases/{knowledge_base_id}` · `get-a-knowledge-base`</sub>

## `front.createArticleInAKnowledgeBaseInDefaultLocale`

Create article in a knowledge base in default locale — [Provider docs](https://community.front.com)

```ts
front.createArticleInAKnowledgeBaseInDefaultLocale(input: {
  /** ID of the category this article belongs to */
  category_id?: string;
  /** Teammate ID of the article author */
  author_id?: string;
  /** Subject of the article */
  subject?: string;
  /** HTML content of the article */
  content?: string;
  /** Article status */
  status?: "draft" | "published";
  /** The ID of the knowledge base to create the article in */
  knowledge_base_id: string;
}): Promise<KnowledgeBaseArticleResponse>
```

<sub>`POST /knowledge_bases/{knowledge_base_id}/articles` · `create-article-in-a-knowledge-base-in-default-locale`</sub>

## `front.createKnowledgeBaseCategoryInDefaultLocale`

Create knowledge base category in default locale — [Provider docs](https://community.front.com)

```ts
front.createKnowledgeBaseCategoryInDefaultLocale(input: {
  /** ID of the parent category */
  parent_category_id?: string;
  /** Name of the knowledge base category */
  name: string;
  /** Description of the knowledge base category */
  description?: string;
  /** The ID of the knowledge base to create the category in */
  knowledge_base_id: string;
}): Promise<KnowledgeBaseCategoryResponse>
```

<sub>`POST /knowledge_bases/{knowledge_base_id}/categories` · `create-knowledge-base-category-in-default-locale`</sub>

## `front.getAKnowledgeBaseWithContentInDefaultLocale`

Get a knowledge base with content in default locale — [Provider docs](https://community.front.com)

```ts
front.getAKnowledgeBaseWithContentInDefaultLocale(input: {
  /** The ID of the knowledge base to fetch */
  knowledge_base_id: string;
}): Promise<KnowledgeBaseResponse>
```

<sub>`GET /knowledge_bases/{knowledge_base_id}/content` · `get-a-knowledge-base-with-content-in-default-locale`</sub>

## `front.updateKnowledgeBaseInDefaultLocale`

Update knowledge base in default locale — [Provider docs](https://community.front.com)

```ts
front.updateKnowledgeBaseInDefaultLocale(input: {
  /** Name of the knowledge base */
  name?: string;
  /** The ID of the knowledge base to update */
  knowledge_base_id: string;
}): Promise<KnowledgeBaseResponse>
```

<sub>`PATCH /knowledge_bases/{knowledge_base_id}/content` · `update-knowledge-base-in-default-locale`</sub>

## `front.createArticleInAKnowledgeBaseInSpecifiedLocale`

Create article in a knowledge base in specified locale — [Provider docs](https://community.front.com)

```ts
front.createArticleInAKnowledgeBaseInSpecifiedLocale(input: {
  /** ID of the category this article belongs to */
  category_id?: string;
  /** Teammate ID of the article author */
  author_id?: string;
  /** Subject of the article */
  subject?: string;
  /** HTML content of the article */
  content?: string;
  /** Article status */
  status?: "draft" | "published";
  /** The ID of the knowledge base to create the article in */
  knowledge_base_id: string;
  /** The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the article's content */
  locale: string;
}): Promise<KnowledgeBaseArticleResponse>
```

<sub>`POST /knowledge_bases/{knowledge_base_id}/locales/{locale}/articles` · `create-article-in-a-knowledge-base-in-specified-locale`</sub>

## `front.createKnowledgeBaseCategoryInSpecifiedLocale`

Create knowledge base category in specified locale — [Provider docs](https://community.front.com)

```ts
front.createKnowledgeBaseCategoryInSpecifiedLocale(input: {
  /** ID of the parent category */
  parent_category_id?: string;
  /** Name of the knowledge base category */
  name: string;
  /** Description of the knowledge base category */
  description?: string;
  /** The ID of the knowledge base to create the category in */
  knowledge_base_id: string;
  /** The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the category's content */
  locale: string;
}): Promise<KnowledgeBaseCategoryResponse>
```

<sub>`POST /knowledge_bases/{knowledge_base_id}/locales/{locale}/categories` · `create-knowledge-base-category-in-specified-locale`</sub>

## `front.getAKnowledgeBaseWithContentInSpecifiedLocale`

Get a knowledge base with content in specified locale — [Provider docs](https://community.front.com)

```ts
front.getAKnowledgeBaseWithContentInSpecifiedLocale(input: {
  /** The ID of the knowledge base to fetch */
  knowledge_base_id: string;
  /** The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the content to fetch */
  locale: string;
}): Promise<KnowledgeBaseResponse>
```

<sub>`GET /knowledge_bases/{knowledge_base_id}/locales/{locale}/content` · `get-a-knowledge-base-with-content-in-specified-locale`</sub>

## `front.updateKnowledgeBaseInSpecifiedLocale`

Update knowledge base in specified locale — [Provider docs](https://community.front.com)

```ts
front.updateKnowledgeBaseInSpecifiedLocale(input: {
  /** Name of the knowledge base */
  name?: string;
  /** The ID of the knowledge base to update */
  knowledge_base_id: string;
  /** The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the updated content */
  locale: string;
}): Promise<KnowledgeBaseResponse>
```

<sub>`PATCH /knowledge_bases/{knowledge_base_id}/locales/{locale}/content` · `update-knowledge-base-in-specified-locale`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
