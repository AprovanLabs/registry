# Knowledge Base Categories

7 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.deleteAKnowledgeBaseCategory`

Delete a knowledge base category — [Provider docs](https://community.front.com)

```ts
front.deleteAKnowledgeBaseCategory(input: {
  /** The ID of the category to delete */
  category_id: string;
}): Promise<undefined>
```

<sub>`DELETE /knowledge_base_categories/{category_id}` · `delete-a-knowledge-base-category`</sub>

## `front.getAKnowledgeBaseCategory`

Get a knowledge base category — [Provider docs](https://community.front.com)

```ts
front.getAKnowledgeBaseCategory(input: {
  /** The ID of the category to fetch */
  category_id: string;
}): Promise<KnowledgeBaseCategorySlimResponse>
```

<sub>`GET /knowledge_base_categories/{category_id}` · `get-a-knowledge-base-category`</sub>

## `front.getKnowledgeBaseCategoryContentInDefaultLocale`

Get knowledge base category content in default locale — [Provider docs](https://community.front.com)

```ts
front.getKnowledgeBaseCategoryContentInDefaultLocale(input: {
  /** The ID of the category to fetch */
  category_id: string;
}): Promise<KnowledgeBaseCategoryResponse>
```

<sub>`GET /knowledge_base_categories/{category_id}/content` · `get-knowledge-base-category-content-in-default-locale`</sub>

## `front.updateKnowledgeBaseCategoryInDefaultLocale`

Update knowledge base category in default locale — [Provider docs](https://community.front.com)

```ts
front.updateKnowledgeBaseCategoryInDefaultLocale(input: {
  /** Name of the knowledge base category */
  name?: string;
  /** Description of the knowledge base category */
  description?: string;
  /** The ID of the category to update */
  category_id: string;
}): Promise<KnowledgeBaseCategoryResponse>
```

<sub>`PATCH /knowledge_base_categories/{category_id}/content` · `update-knowledge-base-category-in-default-locale`</sub>

## `front.getKnowledgeBaseCategoryWithContentInSpecifiedLocale`

Get knowledge base category with content in specified locale — [Provider docs](https://community.front.com)

```ts
front.getKnowledgeBaseCategoryWithContentInSpecifiedLocale(input: {
  /** The ID of the category to fetch */
  category_id: string;
  /** The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the content to fetch */
  locale: string;
}): Promise<KnowledgeBaseCategoryResponse>
```

<sub>`GET /knowledge_base_categories/{category_id}/locales/{locale}/content` · `get-knowledge-base-category-with-content-in-specified-locale`</sub>

## `front.updateKnowledgeBaseCategoryInSpecifiedLocale`

Update knowledge base category in specified locale — [Provider docs](https://community.front.com)

```ts
front.updateKnowledgeBaseCategoryInSpecifiedLocale(input: {
  /** Name of the knowledge base category */
  name?: string;
  /** Description of the knowledge base category */
  description?: string;
  /** The ID of the category to update */
  category_id: string;
  /** The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the updated content */
  locale: string;
}): Promise<KnowledgeBaseCategoryResponse>
```

<sub>`PATCH /knowledge_base_categories/{category_id}/locales/{locale}/content` · `update-knowledge-base-category-in-specified-locale`</sub>

## `front.listCategoriesInAKnowledgeBase`

List categories in a knowledge base — [Provider docs](https://community.front.com)

```ts
front.listCategoriesInAKnowledgeBase(input: {
  /** The ID of the knowledge base */
  knowledge_base_id: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (KnowledgeBaseCategorySlimResponse)[] }>
```

<sub>`GET /knowledge_bases/{knowledge_base_id}/categories` · `list-categories-in-a-knowledge-base`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
