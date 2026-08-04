# Image Actions

3 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.imageActionsList`

List All Actions for an Image

```ts
digitalocean.imageActionsList(input: {
  /** A unique number that can be used to identify and reference a specific image. */
  image_id: number;
}): Promise<{ actions?: (Action)[] } & Pagination & Meta>
```

<sub>`GET /v2/images/{image_id}/actions` · `imageActions_list`</sub>

## `digitalocean.imageActionsPost`

Initiate an Image Action

```ts
digitalocean.imageActionsPost(input: {
  body?: ImageActionBase | ImageActionTransfer;
  /** A unique number that can be used to identify and reference a specific image. */
  image_id: number;
}): Promise<Action>
```

<sub>`POST /v2/images/{image_id}/actions` · `imageActions_post`</sub>

## `digitalocean.imageActionsGet`

Retrieve an Existing Action

```ts
digitalocean.imageActionsGet(input: {
  /** A unique number that can be used to identify and reference a specific image. */
  image_id: number;
  /** A unique numeric ID that can be used to identify and reference an action. */
  action_id: number;
}): Promise<Action>
```

<sub>`GET /v2/images/{image_id}/actions/{action_id}` · `imageActions_get`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
