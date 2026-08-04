# Forms

10 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listForms`

List forms — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listForms(): Promise<FormsResponse>
```

<sub>`GET /api/v2/forms` · `ListForms`</sub>

## `datadog.createForm`

Create a form — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createForm(input: {
  data: CreateFormData;
}): Promise<FormResponse>
```

<sub>`POST /api/v2/forms` · `CreateForm`</sub>

## `datadog.deleteForm`

Delete a form — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteForm(input: {
  /** The ID of the form. */
  form_id: string;
}): Promise<DeleteFormResponse>
```

<sub>`DELETE /api/v2/forms/{form_id}` · `DeleteForm`</sub>

## `datadog.getForm`

Get a form — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getForm(input: {
  /** The ID of the form. */
  form_id: string;
  /** The version of the form to retrieve. Use 'latest' for the most recent draft, 'published' for the last published version, or a specific version number. */
  version?: string;
}): Promise<FormResponse>
```

<sub>`GET /api/v2/forms/{form_id}` · `GetForm`</sub>

## `datadog.updateForm`

Update a form — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateForm(input: {
  data: UpdateFormData;
  /** The ID of the form. */
  form_id: string;
}): Promise<FormResponse>
```

<sub>`PATCH /api/v2/forms/{form_id}` · `UpdateForm`</sub>

## `datadog.cloneForm`

Clone a form — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.cloneForm(input: {
  data: CloneFormData;
  /** The ID of the form to clone. */
  form_id: string;
}): Promise<FormResponse>
```

<sub>`POST /api/v2/forms/{form_id}/clone` · `CloneForm`</sub>

## `datadog.publishForm`

Publish a form version — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.publishForm(input: {
  data: PublishFormData;
  /** The ID of the form. */
  form_id: string;
}): Promise<FormPublicationResponse>
```

<sub>`POST /api/v2/forms/{form_id}/publish` · `PublishForm`</sub>

## `datadog.upsertFormVersion`

Create or update a form version — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.upsertFormVersion(input: {
  data: UpsertFormVersionData;
  /** The ID of the form. */
  form_id: string;
}): Promise<FormVersionResponse>
```

<sub>`POST /api/v2/forms/{form_id}/versions` · `UpsertFormVersion`</sub>

## `datadog.upsertAndPublishFormVersion`

Upsert and publish a form version — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.upsertAndPublishFormVersion(input: {
  data: UpsertAndPublishFormVersionData;
  /** The ID of the form. */
  form_id: string;
}): Promise<FormResponse>
```

<sub>`POST /api/v2/forms/{form_id}/versions/upsert_and_publish` · `UpsertAndPublishFormVersion`</sub>

## `datadog.createAndPublishForm`

Create and publish a form — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createAndPublishForm(input: {
  data: CreateFormData;
}): Promise<FormResponse>
```

<sub>`POST /api/v2/forms/create_and_publish` · `CreateAndPublishForm`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
