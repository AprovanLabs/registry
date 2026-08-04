# Contacts API   Custom Fields

5 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getContactdbCustomFields`

Retrieve all custom fields — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getContactdbCustomFields(options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ custom_fields: (ContactdbCustomFieldWithId)[] }>
```

<sub>`GET /contactdb/custom_fields` · `GET_contactdb-custom_fields`</sub>

## `sendgrid.postContactdbCustomFields`

Create a Custom Field — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postContactdbCustomFields(input: {
  name?: string;
  type?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<ContactdbCustomFieldWithId>
```

<sub>`POST /contactdb/custom_fields` · `POST_contactdb-custom_fields`</sub>

## `sendgrid.deleteContactdbCustomFieldsCustomFieldId`

Delete a Custom Field — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteContactdbCustomFieldsCustomFieldId(input: {
  /** The ID of the custom field that you want to retrieve. */
  custom_field_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<GlobalErrorResponseSchema>
```

<sub>`DELETE /contactdb/custom_fields/{custom_field_id}` · `DELETE_contactdb-custom_fields-custom_field_id`</sub>

## `sendgrid.getContactdbCustomFieldsCustomFieldId`

Retrieve a Custom Field — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getContactdbCustomFieldsCustomFieldId(input: {
  /** The ID of the custom field that you want to retrieve. */
  custom_field_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<ContactdbCustomFieldWithId>
```

<sub>`GET /contactdb/custom_fields/{custom_field_id}` · `GET_contactdb-custom_fields-custom_field_id`</sub>

## `sendgrid.getContactdbReservedFields`

Retrieve reserved fields — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getContactdbReservedFields(options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ reserved_fields?: ({ name?: string; type?: string })[] }>
```

<sub>`GET /contactdb/reserved_fields` · `GET_contactdb-reserved_fields`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
