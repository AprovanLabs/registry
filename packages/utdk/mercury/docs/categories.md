# Categories

3 operations · `@utdk/mercury`

```ts
import mercury from "@utdk/mercury";
```

## `mercury.listCategories`

List all categories

```ts
mercury.listCategories(input: {
  /** Maximum number of results to return. Allowed range: 1 to 1000. Defaults to 1000 */
  limit?: number;
  /** Sort order. Can be 'asc' or 'desc'. Defaults to 'asc' */
  order?: "asc" | "desc";
  /** The ID of the category to start the page after (exclusive). When provided, results will begin with the category immediately following this ID. Use this for standard forward pagination to get the next page of results. Cannot be combined with end_before. */
  start_after?: string;
  /** The ID of the category to end the page before (exclusive). When provided, results will end just before this ID and work backwards. Use this for reverse pagination or to retrieve previous pages. Cannot be combined with start_after. */
  end_before?: string;
}): Promise<CategoriesPaginatedResponse>
```

<sub>`GET /categories` · `listCategories`</sub>

## `mercury.editCategory`

Edit a category

```ts
mercury.editCategory(input: {
  name?: CategoryName & unknown | null;
  /**  Whether this category is applicable to card transactions */
  visibleForCardSpend?: boolean | null;
  /**  Whether this category is applicable to all other transaction kinds */
  visibleForOther?: boolean | null;
  /**  Whether this category is applicable to expense reimbursement transactions */
  visibleForReimbursements?: boolean | null;
  /** ID for the category */
  expenseCategoryId: string;
}): Promise<CategoryData>
```

<sub>`POST /categories/{expenseCategoryId}/edit` · `editCategory`</sub>

## `mercury.createCategory`

Create a new category

```ts
mercury.createCategory(input: {
  name: CategoryName & unknown;
  /**  Whether this category is applicable to card transactions */
  visibleForCardSpend: boolean;
  /**  Whether this category is applicable to all other transaction kinds */
  visibleForOther: boolean;
  /**  Whether this category is applicable to expense reimbursement transactions */
  visibleForReimbursements: boolean;
}): Promise<CategoryData>
```

<sub>`POST /categories/create` · `createCategory`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
