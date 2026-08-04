# Models

3 operations · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.listModels`

Lists the currently available models, and provides basic information about each one such as the owner and availability. — [Provider docs](https://help.openai.com/)

```ts
openai.listModels(): Promise<ListModelsResponse>
```

<sub>`GET /models` · `listModels`</sub>

## `openai.deleteModel`

Delete a fine-tuned model. You must have the Owner role in your organization to delete a model. — [Provider docs](https://help.openai.com/)

```ts
openai.deleteModel(input: {
  /** The model to delete */
  model: string;
}): Promise<DeleteModelResponse>
```

<sub>`DELETE /models/{model}` · `deleteModel`</sub>

## `openai.retrieveModel`

Retrieves a model instance, providing basic information about the model such as the owner and permissioning. — [Provider docs](https://help.openai.com/)

```ts
openai.retrieveModel(input: {
  /** The ID of the model to use for this request */
  model: string;
}): Promise<Model>
```

<sub>`GET /models/{model}` · `retrieveModel`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
