# Library Analytics

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/figma`

## Operations

### `figma.getLibraryAnalyticsComponentActions`

- **HTTP**: `GET /v1/analytics/libraries/{file_key}/component/actions`
- **What it does**: Get library analytics component action data.
- **OpenAPI operationId**: `getLibraryAnalyticsComponentActions`
- **Path params**: `file_key`
- **Query params**: `cursor`, `group_by`, `start_date`, `end_date`
- **Response codes**: `200`, `400`, `401`, `403`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string; cursor?: string; group_by: "component" | "team"; start_date?: string; end_date?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ rows: ({ week: string; component_key: string; component_name: string; component_set_key?: string; component_set_name?: string; detachments: number; insertions: number })[] | ({ week: string; team_name: string; workspa...`
- OpenAPI response codes: `200`, `400`, `401`, `403`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetLibraryAnalyticsComponentActionsInput = Parameters<typeof figma.getLibraryAnalyticsComponentActions> extends [infer T, ...unknown[]] ? T : undefined;
type GetLibraryAnalyticsComponentActionsOutput = Awaited<ReturnType<typeof figma.getLibraryAnalyticsComponentActions>>;

const input: GetLibraryAnalyticsComponentActionsInput = {} as { file_key: string; cursor?: string; group_by: "component" | "team"; start_date?: string; end_date?: string };
const result: GetLibraryAnalyticsComponentActionsOutput = await figma.getLibraryAnalyticsComponentActions(input);

// Result shape (from schema): { rows: ({ week: string; component_key: string; component_name: string; component_set_key?: string; component_set_name?: string; detachments: number; insertions: number })[] | ({ week: string; team_name: string; workspa...
```

### `figma.getLibraryAnalyticsComponentUsages`

- **HTTP**: `GET /v1/analytics/libraries/{file_key}/component/usages`
- **What it does**: Get library analytics component usage data.
- **OpenAPI operationId**: `getLibraryAnalyticsComponentUsages`
- **Path params**: `file_key`
- **Query params**: `cursor`, `group_by`
- **Response codes**: `200`, `400`, `401`, `403`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string; cursor?: string; group_by: "component" | "file" }`
- Client transport options: None

**Outputs**

- Client return type: `{ rows: ({ component_key: string; component_name: string; component_set_key?: string; component_set_name?: string; usages: number; teams_using: number; files_using: number })[] | ({ file_name: string; team_name: string;...`
- OpenAPI response codes: `200`, `400`, `401`, `403`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetLibraryAnalyticsComponentUsagesInput = Parameters<typeof figma.getLibraryAnalyticsComponentUsages> extends [infer T, ...unknown[]] ? T : undefined;
type GetLibraryAnalyticsComponentUsagesOutput = Awaited<ReturnType<typeof figma.getLibraryAnalyticsComponentUsages>>;

const input: GetLibraryAnalyticsComponentUsagesInput = {} as { file_key: string; cursor?: string; group_by: "component" | "file" };
const result: GetLibraryAnalyticsComponentUsagesOutput = await figma.getLibraryAnalyticsComponentUsages(input);

// Result shape (from schema): { rows: ({ component_key: string; component_name: string; component_set_key?: string; component_set_name?: string; usages: number; teams_using: number; files_using: number })[] | ({ file_name: string; team_name: string;...
```

### `figma.getLibraryAnalyticsStyleActions`

- **HTTP**: `GET /v1/analytics/libraries/{file_key}/style/actions`
- **What it does**: Get library analytics style action data.
- **OpenAPI operationId**: `getLibraryAnalyticsStyleActions`
- **Path params**: `file_key`
- **Query params**: `cursor`, `group_by`, `start_date`, `end_date`
- **Response codes**: `200`, `400`, `401`, `403`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string; cursor?: string; group_by: "style" | "team"; start_date?: string; end_date?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ rows: ({ week: string; style_key: string; style_name: string; style_type: string; detachments: number; insertions: number })[] | ({ week: string; team_name: string; workspace_name?: string; detachments: number; insert...`
- OpenAPI response codes: `200`, `400`, `401`, `403`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetLibraryAnalyticsStyleActionsInput = Parameters<typeof figma.getLibraryAnalyticsStyleActions> extends [infer T, ...unknown[]] ? T : undefined;
type GetLibraryAnalyticsStyleActionsOutput = Awaited<ReturnType<typeof figma.getLibraryAnalyticsStyleActions>>;

const input: GetLibraryAnalyticsStyleActionsInput = {} as { file_key: string; cursor?: string; group_by: "style" | "team"; start_date?: string; end_date?: string };
const result: GetLibraryAnalyticsStyleActionsOutput = await figma.getLibraryAnalyticsStyleActions(input);

// Result shape (from schema): { rows: ({ week: string; style_key: string; style_name: string; style_type: string; detachments: number; insertions: number })[] | ({ week: string; team_name: string; workspace_name?: string; detachments: number; insert...
```

### `figma.getLibraryAnalyticsStyleUsages`

- **HTTP**: `GET /v1/analytics/libraries/{file_key}/style/usages`
- **What it does**: Get library analytics style usage data.
- **OpenAPI operationId**: `getLibraryAnalyticsStyleUsages`
- **Path params**: `file_key`
- **Query params**: `cursor`, `group_by`
- **Response codes**: `200`, `400`, `401`, `403`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string; cursor?: string; group_by: "style" | "file" }`
- Client transport options: None

**Outputs**

- Client return type: `{ rows: ({ style_key: string; style_name: string; style_type: string; usages: number; teams_using: number; files_using: number })[] | ({ file_name: string; team_name: string; workspace_name?: string; usages: number })[]...`
- OpenAPI response codes: `200`, `400`, `401`, `403`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetLibraryAnalyticsStyleUsagesInput = Parameters<typeof figma.getLibraryAnalyticsStyleUsages> extends [infer T, ...unknown[]] ? T : undefined;
type GetLibraryAnalyticsStyleUsagesOutput = Awaited<ReturnType<typeof figma.getLibraryAnalyticsStyleUsages>>;

const input: GetLibraryAnalyticsStyleUsagesInput = {} as { file_key: string; cursor?: string; group_by: "style" | "file" };
const result: GetLibraryAnalyticsStyleUsagesOutput = await figma.getLibraryAnalyticsStyleUsages(input);

// Result shape (from schema): { rows: ({ style_key: string; style_name: string; style_type: string; usages: number; teams_using: number; files_using: number })[] | ({ file_name: string; team_name: string; workspace_name?: string; usages: number })[]...
```

### `figma.getLibraryAnalyticsVariableActions`

- **HTTP**: `GET /v1/analytics/libraries/{file_key}/variable/actions`
- **What it does**: Get library analytics variable action data.
- **OpenAPI operationId**: `getLibraryAnalyticsVariableActions`
- **Path params**: `file_key`
- **Query params**: `cursor`, `group_by`, `start_date`, `end_date`
- **Response codes**: `200`, `400`, `401`, `403`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string; cursor?: string; group_by: "variable" | "team"; start_date?: string; end_date?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ rows: ({ week: string; variable_key: string; variable_name: string; variable_type: string; collection_key: string; collection_name: string; detachments: number; insertions: number })[] | ({ week: string; team_name: st...`
- OpenAPI response codes: `200`, `400`, `401`, `403`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetLibraryAnalyticsVariableActionsInput = Parameters<typeof figma.getLibraryAnalyticsVariableActions> extends [infer T, ...unknown[]] ? T : undefined;
type GetLibraryAnalyticsVariableActionsOutput = Awaited<ReturnType<typeof figma.getLibraryAnalyticsVariableActions>>;

const input: GetLibraryAnalyticsVariableActionsInput = {} as { file_key: string; cursor?: string; group_by: "variable" | "team"; start_date?: string; end_date?: string };
const result: GetLibraryAnalyticsVariableActionsOutput = await figma.getLibraryAnalyticsVariableActions(input);

// Result shape (from schema): { rows: ({ week: string; variable_key: string; variable_name: string; variable_type: string; collection_key: string; collection_name: string; detachments: number; insertions: number })[] | ({ week: string; team_name: st...
```

### `figma.getLibraryAnalyticsVariableUsages`

- **HTTP**: `GET /v1/analytics/libraries/{file_key}/variable/usages`
- **What it does**: Get library analytics variable usage data.
- **OpenAPI operationId**: `getLibraryAnalyticsVariableUsages`
- **Path params**: `file_key`
- **Query params**: `cursor`, `group_by`
- **Response codes**: `200`, `400`, `401`, `403`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string; cursor?: string; group_by: "variable" | "file" }`
- Client transport options: None

**Outputs**

- Client return type: `{ rows: ({ variable_key: string; variable_name: string; variable_type: string; collection_key: string; collection_name: string; usages: number; teams_using: number; files_using: number })[] | ({ file_name: string; team_...`
- OpenAPI response codes: `200`, `400`, `401`, `403`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetLibraryAnalyticsVariableUsagesInput = Parameters<typeof figma.getLibraryAnalyticsVariableUsages> extends [infer T, ...unknown[]] ? T : undefined;
type GetLibraryAnalyticsVariableUsagesOutput = Awaited<ReturnType<typeof figma.getLibraryAnalyticsVariableUsages>>;

const input: GetLibraryAnalyticsVariableUsagesInput = {} as { file_key: string; cursor?: string; group_by: "variable" | "file" };
const result: GetLibraryAnalyticsVariableUsagesOutput = await figma.getLibraryAnalyticsVariableUsages(input);

// Result shape (from schema): { rows: ({ variable_key: string; variable_name: string; variable_type: string; collection_key: string; collection_name: string; usages: number; teams_using: number; files_using: number })[] | ({ file_name: string; team_...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
