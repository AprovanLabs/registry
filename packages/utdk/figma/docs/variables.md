# Variables

3 operations · `@utdk/figma`

```ts
import figma from "@utdk/figma";
```

## `figma.postVariables`

Create/modify/delete variables — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.postVariables(input: {
  /** For creating, updating, and deleting variable collections. */
  variableCollections?: (VariableCollectionChange)[];
  /** For creating, updating, and deleting modes within variable collections. */
  variableModes?: (VariableModeChange)[];
  /** For creating, updating, and deleting variables. */
  variables?: (VariableChange)[];
  /** For setting a specific value, given a variable and a mode. */
  variableModeValues?: (VariableModeValue)[];
  /** File to modify variables in. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
  file_key: string;
}): Promise<{ status: 200; error: false; meta: { tempIdToRealId: { [key: string]: string | undefined } } }>
```

<sub>`POST /v1/files/{file_key}/variables` · `postVariables`</sub>

## `figma.getLocalVariables`

Get local variables — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getLocalVariables(input: {
  /** File to get variables from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
  file_key: string;
}): Promise<{ status: 200; error: false; meta: { variables: { [key: string]: LocalVariable | undefined }; variableCollections: { [key: string]: LocalVariableCollection | undefined } } }>
```

<sub>`GET /v1/files/{file_key}/variables/local` · `getLocalVariables`</sub>

## `figma.getPublishedVariables`

Get published variables — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getPublishedVariables(input: {
  /** File to get variables from. This must be a main file key, not a branch key, as it is not possible to publish from branches. */
  file_key: string;
}): Promise<{ status: 200; error: false; meta: { variables: { [key: string]: PublishedVariable | undefined }; variableCollections: { [key: string]: PublishedVariableCollection | undefined } } }>
```

<sub>`GET /v1/files/{file_key}/variables/published` · `getPublishedVariables`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
