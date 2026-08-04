# LeadLabels

4 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getLeadLabels`

Get all lead labels

```ts
pipedrive.getLeadLabels(): Promise<{ success?: boolean; data?: ({ id?: string; name?: string; color?: "blue" | "brown" | "dark-gray" | "gray" | "green" | "orange" | "pink" | "purple" | "red" | "yellow"; add_time?: string; update_time?: string })[] }>
```

<sub>`GET /leadLabels` · `getLeadLabels`</sub>

## `pipedrive.addLeadLabel`

Add a lead label

```ts
pipedrive.addLeadLabel(input: {
  /** The name of the lead label */
  name: string;
  /** The color of the label. Only a subset of colors can be used. */
  color: "blue" | "brown" | "dark-gray" | "gray" | "green" | "orange" | "pink" | "purple" | "red" | "yellow";
}): Promise<{ success?: boolean; data?: { id?: string; name?: string; color?: "blue" | "brown" | "dark-gray" | "gray" | "green" | "orange" | "pink" | "purple" | "red" | "yellow"; add_time?: string; update_time?: string } }>
```

<sub>`POST /leadLabels` · `addLeadLabel`</sub>

## `pipedrive.deleteLeadLabel`

Delete a lead label

```ts
pipedrive.deleteLeadLabel(input: {
  /** The ID of the lead label */
  id: string;
}): Promise<{ success?: boolean; data?: { id?: string } }>
```

<sub>`DELETE /leadLabels/{id}` · `deleteLeadLabel`</sub>

## `pipedrive.updateLeadLabel`

Update a lead label

```ts
pipedrive.updateLeadLabel(input: {
  /** The name of the lead label */
  name?: string;
  /** The color of the label. Only a subset of colors can be used. */
  color?: "blue" | "brown" | "dark-gray" | "gray" | "green" | "orange" | "pink" | "purple" | "red" | "yellow";
  /** The ID of the lead label */
  id: string;
}): Promise<{ success?: boolean; data?: { id?: string; name?: string; color?: "blue" | "brown" | "dark-gray" | "gray" | "green" | "orange" | "pink" | "purple" | "red" | "yellow"; add_time?: string; update_time?: string } }>
```

<sub>`PATCH /leadLabels/{id}` · `updateLeadLabel`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
