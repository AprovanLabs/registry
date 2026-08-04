# Case Management Type

4 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getAllCaseTypes`

Get all case types — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAllCaseTypes(): Promise<CaseTypesResponse>
```

<sub>`GET /api/v2/cases/types` · `GetAllCaseTypes`</sub>

## `datadog.createCaseType`

Create a case type — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCaseType(input: {
  data: CaseTypeCreate;
}): Promise<CaseTypeResponse>
```

<sub>`POST /api/v2/cases/types` · `CreateCaseType`</sub>

## `datadog.deleteCaseType`

Delete a case type — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCaseType(input: {
  /** The UUID of the case type. */
  case_type_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cases/types/{case_type_id}` · `DeleteCaseType`</sub>

## `datadog.updateCaseType`

Update a case type — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCaseType(input: {
  data: CaseTypeUpdate;
  /** The UUID of the case type. */
  case_type_id: string;
}): Promise<CaseTypeResponse>
```

<sub>`PUT /api/v2/cases/types/{case_type_id}` · `UpdateCaseType`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
