# Variables

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/figma`

## Operations

### `figma.postVariables`

- **HTTP**: `POST /v1/files/{file_key}/variables`
- **What it does**: Create/modify/delete variables
- **OpenAPI operationId**: `postVariables`
- **Path params**: `file_key`
- **Query params**: None
- **Response codes**: `200`, `400`, `401`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ variableCollections?: ({ action: "CREATE"; id?: string; name: string; initialModeId?: string; hiddenFromPublishing?: boolean; parentVariableCollectionId?: string; initialModeIdToParentModeIdMapping?: { [key: string]: string | undefined } } | { action: "UPDATE"; id: string; name?: string; hiddenFromPublishing?: boolean } | { action: "DELETE"; id: string })[]; variableModes?: ({ action: "CREATE"; id?: string; name: string; variableCollectionId: string } | { action: "UPDATE"; id: string; name?: string; variableCollectionId: string } | { action: "DELETE"; id: string })[]; variables?: ({ action: "CREATE"; id?: string; name: string; variableCollectionId: string; resolvedType: "BOOLEAN" | "FLOAT" | "STRING" | "COLOR"; description?: string; hiddenFromPublishing?: boolean; scopes?: ("ALL_SCOPES" | "TEXT_CONTENT" | "CORNER_RADIUS" | "WIDTH_HEIGHT" | "GAP" | "ALL_FILLS" | "FRAME_FILL" | "SHAPE_FILL" | "TEXT_FILL" | "STROKE_COLOR" | "STROKE_FLOAT" | "EFFECT_FLOAT" | "EFFECT_COLOR" | "OPACITY" | "FONT_FAMILY" | "FONT_STYLE" | "FONT_WEIGHT" | "FONT_SIZE" | "LINE_HEIGHT" | "LETTER_SPACING" | "PARAGRAPH_SPACING" | "PARAGRAPH_INDENT" | "FONT_VARIATIONS")[]; codeSyntax?: { WEB?: string; ANDROID?: string; iOS?: string } } | { action: "UPDATE"; id: string; name?: string; description?: string; hiddenFromPublishing?: boolean; scopes?: ("ALL_SCOPES" | "TEXT_CONTENT" | "CORNER_RADIUS" | "WIDTH_HEIGHT" | "GAP" | "ALL_FILLS" | "FRAME_FILL" | "SHAPE_FILL" | "TEXT_FILL" | "STROKE_COLOR" | "STROKE_FLOAT" | "EFFECT_FLOAT" | "EFFECT_COLOR" | "OPACITY" | "FONT_FAMILY" | "FONT_STYLE" | "FONT_WEIGHT" | "FONT_SIZE" | "LINE_HEIGHT" | "LETTER_SPACING" | "PARAGRAPH_SPACING" | "PARAGRAPH_INDENT" | "FONT_VARIATIONS")[]; codeSyntax?: { WEB?: string; ANDROID?: string; iOS?: string } } | { action: "DELETE"; id: string })[]; variableModeValues?: ({ variableId: string; modeId: string; value: boolean | number | string | { r: number; g: number; b: number } | { r: number; g: number; b: number; a: number } | { type: "VARIABLE_ALIAS"; id: string } | null })[]; file_key: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ status: 200; error: false; meta: { tempIdToRealId: { [key: string]: string | undefined } } }`
- OpenAPI response codes: `200`, `400`, `401`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type PostVariablesInput = Parameters<typeof figma.postVariables> extends [infer T, ...unknown[]] ? T : undefined;
type PostVariablesOutput = Awaited<ReturnType<typeof figma.postVariables>>;

const input: PostVariablesInput = {} as { variableCollections?: ({ action: "CREATE"; id?: string; name: string; initialModeId?: string; hiddenFromPublishing?: boolean; parentVariableCollectionId?: string; initialModeIdToParentModeIdMapping?: { [key: string]: string | undefined } } | { action: "UPDATE"; id: string; name?: string; hiddenFromPublishing?: boolean } | { action: "DELETE"; id: string })[]; variableModes?: ({ action: "CREATE"; id?: string; name: string; variableCollectionId: string } | { action: "UPDATE"; id: string; name?: string; variableCollectionId: string } | { action: "DELETE"; id: string })[]; variables?: ({ action: "CREATE"; id?: string; name: string; variableCollectionId: string; resolvedType: "BOOLEAN" | "FLOAT" | "STRING" | "COLOR"; description?: string; hiddenFromPublishing?: boolean; scopes?: ("ALL_SCOPES" | "TEXT_CONTENT" | "CORNER_RADIUS" | "WIDTH_HEIGHT" | "GAP" | "ALL_FILLS" | "FRAME_FILL" | "SHAPE_FILL" | "TEXT_FILL" | "STROKE_COLOR" | "STROKE_FLOAT" | "EFFECT_FLOAT" | "EFFECT_COLOR" | "OPACITY" | "FONT_FAMILY" | "FONT_STYLE" | "FONT_WEIGHT" | "FONT_SIZE" | "LINE_HEIGHT" | "LETTER_SPACING" | "PARAGRAPH_SPACING" | "PARAGRAPH_INDENT" | "FONT_VARIATIONS")[]; codeSyntax?: { WEB?: string; ANDROID?: string; iOS?: string } } | { action: "UPDATE"; id: string; name?: string; description?: string; hiddenFromPublishing?: boolean; scopes?: ("ALL_SCOPES" | "TEXT_CONTENT" | "CORNER_RADIUS" | "WIDTH_HEIGHT" | "GAP" | "ALL_FILLS" | "FRAME_FILL" | "SHAPE_FILL" | "TEXT_FILL" | "STROKE_COLOR" | "STROKE_FLOAT" | "EFFECT_FLOAT" | "EFFECT_COLOR" | "OPACITY" | "FONT_FAMILY" | "FONT_STYLE" | "FONT_WEIGHT" | "FONT_SIZE" | "LINE_HEIGHT" | "LETTER_SPACING" | "PARAGRAPH_SPACING" | "PARAGRAPH_INDENT" | "FONT_VARIATIONS")[]; codeSyntax?: { WEB?: string; ANDROID?: string; iOS?: string } } | { action: "DELETE"; id: string })[]; variableModeValues?: ({ variableId: string; modeId: string; value: boolean | number | string | { r: number; g: number; b: number } | { r: number; g: number; b: number; a: number } | { type: "VARIABLE_ALIAS"; id: string } | null })[]; file_key: string };
const result: PostVariablesOutput = await figma.postVariables(input);

// Result shape (from schema): { status: 200; error: false; meta: { tempIdToRealId: { [key: string]: string | undefined } } }
```

### `figma.getLocalVariables`

- **HTTP**: `GET /v1/files/{file_key}/variables/local`
- **What it does**: Get local variables
- **OpenAPI operationId**: `getLocalVariables`
- **Path params**: `file_key`
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ status: 200; error: false; meta: { variables: { [key: string]: { id: string; name: string; key: string; variableCollectionId: string; resolvedType: "BOOLEAN" | "FLOAT" | "STRING" | "COLOR"; valuesByMode: { [key: strin...`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetLocalVariablesInput = Parameters<typeof figma.getLocalVariables> extends [infer T, ...unknown[]] ? T : undefined;
type GetLocalVariablesOutput = Awaited<ReturnType<typeof figma.getLocalVariables>>;

const input: GetLocalVariablesInput = {} as { file_key: string };
const result: GetLocalVariablesOutput = await figma.getLocalVariables(input);

// Result shape (from schema): { status: 200; error: false; meta: { variables: { [key: string]: { id: string; name: string; key: string; variableCollectionId: string; resolvedType: "BOOLEAN" | "FLOAT" | "STRING" | "COLOR"; valuesByMode: { [key: strin...
```

### `figma.getPublishedVariables`

- **HTTP**: `GET /v1/files/{file_key}/variables/published`
- **What it does**: Get published variables
- **OpenAPI operationId**: `getPublishedVariables`
- **Path params**: `file_key`
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ status: 200; error: false; meta: { variables: { [key: string]: { id: string; subscribed_id: string; name: string; key: string; variableCollectionId: string; resolvedDataType: "BOOLEAN" | "FLOAT" | "STRING" | "COLOR"; ...`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetPublishedVariablesInput = Parameters<typeof figma.getPublishedVariables> extends [infer T, ...unknown[]] ? T : undefined;
type GetPublishedVariablesOutput = Awaited<ReturnType<typeof figma.getPublishedVariables>>;

const input: GetPublishedVariablesInput = {} as { file_key: string };
const result: GetPublishedVariablesOutput = await figma.getPublishedVariables(input);

// Result shape (from schema): { status: 200; error: false; meta: { variables: { [key: string]: { id: string; subscribed_id: string; name: string; key: string; variableCollectionId: string; resolvedDataType: "BOOLEAN" | "FLOAT" | "STRING" | "COLOR"; ...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
