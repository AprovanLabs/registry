# Activity Logs

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/figma`

## Operations

### `figma.getActivityLogs`

- **HTTP**: `GET /v1/activity_logs`
- **What it does**: Get activity logs
- **OpenAPI operationId**: `getActivityLogs`
- **Path params**: None
- **Query params**: `events`, `start_time`, `end_time`, `limit`, `order`
- **Response codes**: `200`, `400`, `401`, `403`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ events?: string; start_time?: number; end_time?: number; limit?: number; order?: "asc" | "desc" }`
- Client transport options: None

**Outputs**

- Client return type: `{ status?: 200; error?: false; meta?: { activity_logs?: ({ id: string; timestamp: number; actor: { [key: string]: unknown } | null; action: { type: string; details: { [key: string]: unknown } | null }; entity: { type: "...`
- OpenAPI response codes: `200`, `400`, `401`, `403`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetActivityLogsInput = Parameters<typeof figma.getActivityLogs> extends [infer T, ...unknown[]] ? T : undefined;
type GetActivityLogsOutput = Awaited<ReturnType<typeof figma.getActivityLogs>>;

const input: GetActivityLogsInput = {} as { events?: string; start_time?: number; end_time?: number; limit?: number; order?: "asc" | "desc" };
const result: GetActivityLogsOutput = await figma.getActivityLogs(input);

// Result shape (from schema): { status?: 200; error?: false; meta?: { activity_logs?: ({ id: string; timestamp: number; actor: { [key: string]: unknown } | null; action: { type: string; details: { [key: string]: unknown } | null }; entity: { type: "...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
