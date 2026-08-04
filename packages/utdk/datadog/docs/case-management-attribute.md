# Case Management Attribute

5 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getAllCustomAttributeConfigsByCaseType`

Get all custom attributes config of case type — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAllCustomAttributeConfigsByCaseType(input: {
  /** The UUID of the case type. */
  case_type_id: string;
}): Promise<CustomAttributeConfigsResponse>
```

<sub>`GET /api/v2/cases/types/{case_type_id}/custom_attributes` · `GetAllCustomAttributeConfigsByCaseType`</sub>

## `datadog.createCustomAttributeConfig`

Create custom attribute config for a case type — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCustomAttributeConfig(input: {
  data: CustomAttributeConfigCreate;
  /** The UUID of the case type. */
  case_type_id: string;
}): Promise<CustomAttributeConfigResponse>
```

<sub>`POST /api/v2/cases/types/{case_type_id}/custom_attributes` · `CreateCustomAttributeConfig`</sub>

## `datadog.deleteCustomAttributeConfig`

Delete custom attributes config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCustomAttributeConfig(input: {
  /** The UUID of the case type. */
  case_type_id: string;
  /** Case Custom attribute's UUID */
  custom_attribute_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cases/types/{case_type_id}/custom_attributes/{custom_attribute_id}` · `DeleteCustomAttributeConfig`</sub>

## `datadog.updateCustomAttributeConfig`

Update custom attribute config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCustomAttributeConfig(input: {
  data: CustomAttributeConfigUpdate;
  /** The UUID of the case type. */
  case_type_id: string;
  /** Case Custom attribute's UUID */
  custom_attribute_id: string;
}): Promise<CustomAttributeConfigResponse>
```

<sub>`PUT /api/v2/cases/types/{case_type_id}/custom_attributes/{custom_attribute_id}` · `UpdateCustomAttributeConfig`</sub>

## `datadog.getAllCustomAttributes`

Get all custom attributes — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAllCustomAttributes(): Promise<CustomAttributeConfigsResponse>
```

<sub>`GET /api/v2/cases/types/custom_attributes` · `GetAllCustomAttributes`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
