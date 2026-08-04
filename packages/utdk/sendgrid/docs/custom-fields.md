# Custom Fields

4 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getMcFieldDefinitions`

Get All Field Definitions — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMcFieldDefinitions(): Promise<{ _metadata?: Metadata; custom_fields: (CustomFieldDefinitionsResponse)[]; reserved_fields: ReservedFieldDefinitionsResponse }>
```

<sub>`GET /marketing/field_definitions` · `GET_mc-field_definitions`</sub>

## `sendgrid.postMcFieldDefinitions`

Create Custom Field Definition — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postMcFieldDefinitions(input: {
  field_type: "Text" | "Number" | "Date";
  name: string;
}): Promise<CustomFieldDefinitionsResponse & { _metadata?: Metadata }>
```

<sub>`POST /marketing/field_definitions` · `POST_mc-field_definitions`</sub>

## `sendgrid.deleteMcFieldDefinitionsCustomFieldId`

Delete Custom Field Definition — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteMcFieldDefinitionsCustomFieldId(input: {
  custom_field_id: string;
}): Promise<undefined>
```

<sub>`DELETE /marketing/field_definitions/{custom_field_id}` · `DELETE_mc-field_definitions-custom_field_id`</sub>

## `sendgrid.patchMcFieldDefinitionsCustomFieldId`

Update Custom Field Definition — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchMcFieldDefinitionsCustomFieldId(input: {
  name: string;
  custom_field_id: string;
}): Promise<CustomFieldDefinitionsResponse & { _metadata?: Metadata }>
```

<sub>`PATCH /marketing/field_definitions/{custom_field_id}` · `PATCH_mc-field_definitions-custom_field_id`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
