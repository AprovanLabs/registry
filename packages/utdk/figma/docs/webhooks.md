# Webhooks

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/figma`

## Operations

### `figma.getTeamWebhooks`

- **HTTP**: `GET /v2/teams/{team_id}/webhooks`
- **What it does**: [Deprecated] Get team webhooks
- **OpenAPI operationId**: `getTeamWebhooks`
- **Path params**: `team_id`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ team_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ webhooks: ({ id: string; event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT" | "DEV_MODE_STATUS_UPDATE"; team_id: string; context: string; context_id: string...`
- OpenAPI response codes: `200`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetTeamWebhooksInput = Parameters<typeof figma.getTeamWebhooks> extends [infer T, ...unknown[]] ? T : undefined;
type GetTeamWebhooksOutput = Awaited<ReturnType<typeof figma.getTeamWebhooks>>;

const input: GetTeamWebhooksInput = {} as { team_id: string };
const result: GetTeamWebhooksOutput = await figma.getTeamWebhooks(input);

// Result shape (from schema): { webhooks: ({ id: string; event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT" | "DEV_MODE_STATUS_UPDATE"; team_id: string; context: string; context_id: string...
```

### `figma.getWebhooks`

- **HTTP**: `GET /v2/webhooks`
- **What it does**: Get webhooks by context or plan
- **OpenAPI operationId**: `getWebhooks`
- **Path params**: None
- **Query params**: `context`, `context_id`, `plan_api_id`, `cursor`
- **Response codes**: `200`, `400`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ context?: string; context_id?: string; plan_api_id?: string; cursor?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ webhooks: ({ id: string; event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT" | "DEV_MODE_STATUS_UPDATE"; team_id: string; context: string; context_id: string...`
- OpenAPI response codes: `200`, `400`, `403`

```ts
import figma from "@utdk/figma";

type GetWebhooksInput = Parameters<typeof figma.getWebhooks> extends [infer T, ...unknown[]] ? T : undefined;
type GetWebhooksOutput = Awaited<ReturnType<typeof figma.getWebhooks>>;

const input: GetWebhooksInput = {} as { context?: string; context_id?: string; plan_api_id?: string; cursor?: string };
const result: GetWebhooksOutput = await figma.getWebhooks(input);

// Result shape (from schema): { webhooks: ({ id: string; event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT" | "DEV_MODE_STATUS_UPDATE"; team_id: string; context: string; context_id: string...
```

### `figma.postWebhook`

- **HTTP**: `POST /v2/webhooks`
- **What it does**: Create a webhook
- **OpenAPI operationId**: `postWebhook`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT" | "DEV_MODE_STATUS_UPDATE"; team_id?: string; context: string; context_id: string; endpoint: string; passcode: string; status?: "ACTIVE" | "PAUSED"; description?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: string; event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT" | "DEV_MODE_STATUS_UPDATE"; team_id: string; context: string; context_id: string; plan_api_id...`
- OpenAPI response codes: `200`, `400`, `403`, `429`, `500`

```ts
import figma from "@utdk/figma";

type PostWebhookInput = Parameters<typeof figma.postWebhook> extends [infer T, ...unknown[]] ? T : undefined;
type PostWebhookOutput = Awaited<ReturnType<typeof figma.postWebhook>>;

const input: PostWebhookInput = {} as { event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT" | "DEV_MODE_STATUS_UPDATE"; team_id?: string; context: string; context_id: string; endpoint: string; passcode: string; status?: "ACTIVE" | "PAUSED"; description?: string };
const result: PostWebhookOutput = await figma.postWebhook(input);

// Result shape (from schema): { id: string; event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT" | "DEV_MODE_STATUS_UPDATE"; team_id: string; context: string; context_id: string; plan_api_id...
```

### `figma.deleteWebhook`

- **HTTP**: `DELETE /v2/webhooks/{webhook_id}`
- **What it does**: Delete a webhook
- **OpenAPI operationId**: `deleteWebhook`
- **Path params**: `webhook_id`
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ webhook_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: string; event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT" | "DEV_MODE_STATUS_UPDATE"; team_id: string; context: string; context_id: string; plan_api_id...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type DeleteWebhookInput = Parameters<typeof figma.deleteWebhook> extends [infer T, ...unknown[]] ? T : undefined;
type DeleteWebhookOutput = Awaited<ReturnType<typeof figma.deleteWebhook>>;

const input: DeleteWebhookInput = {} as { webhook_id: string };
const result: DeleteWebhookOutput = await figma.deleteWebhook(input);

// Result shape (from schema): { id: string; event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT" | "DEV_MODE_STATUS_UPDATE"; team_id: string; context: string; context_id: string; plan_api_id...
```

### `figma.getWebhook`

- **HTTP**: `GET /v2/webhooks/{webhook_id}`
- **What it does**: Get a webhook
- **OpenAPI operationId**: `getWebhook`
- **Path params**: `webhook_id`
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ webhook_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: string; event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT" | "DEV_MODE_STATUS_UPDATE"; team_id: string; context: string; context_id: string; plan_api_id...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetWebhookInput = Parameters<typeof figma.getWebhook> extends [infer T, ...unknown[]] ? T : undefined;
type GetWebhookOutput = Awaited<ReturnType<typeof figma.getWebhook>>;

const input: GetWebhookInput = {} as { webhook_id: string };
const result: GetWebhookOutput = await figma.getWebhook(input);

// Result shape (from schema): { id: string; event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT" | "DEV_MODE_STATUS_UPDATE"; team_id: string; context: string; context_id: string; plan_api_id...
```

### `figma.putWebhook`

- **HTTP**: `PUT /v2/webhooks/{webhook_id}`
- **What it does**: Update a webhook
- **OpenAPI operationId**: `putWebhook`
- **Path params**: `webhook_id`
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT" | "DEV_MODE_STATUS_UPDATE"; endpoint: string; passcode: string; status?: "ACTIVE" | "PAUSED"; description?: string; webhook_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: string; event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT" | "DEV_MODE_STATUS_UPDATE"; team_id: string; context: string; context_id: string; plan_api_id...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type PutWebhookInput = Parameters<typeof figma.putWebhook> extends [infer T, ...unknown[]] ? T : undefined;
type PutWebhookOutput = Awaited<ReturnType<typeof figma.putWebhook>>;

const input: PutWebhookInput = {} as { event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT" | "DEV_MODE_STATUS_UPDATE"; endpoint: string; passcode: string; status?: "ACTIVE" | "PAUSED"; description?: string; webhook_id: string };
const result: PutWebhookOutput = await figma.putWebhook(input);

// Result shape (from schema): { id: string; event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT" | "DEV_MODE_STATUS_UPDATE"; team_id: string; context: string; context_id: string; plan_api_id...
```

### `figma.getWebhookRequests`

- **HTTP**: `GET /v2/webhooks/{webhook_id}/requests`
- **What it does**: Get webhook requests
- **OpenAPI operationId**: `getWebhookRequests`
- **Path params**: `webhook_id`
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ webhook_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ requests: ({ webhook_id: string; request_info: { id: string; endpoint: string; payload: { [key: string]: unknown }; sent_at: string }; response_info: { [key: string]: unknown } | null; error_msg: string | null })[] }`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetWebhookRequestsInput = Parameters<typeof figma.getWebhookRequests> extends [infer T, ...unknown[]] ? T : undefined;
type GetWebhookRequestsOutput = Awaited<ReturnType<typeof figma.getWebhookRequests>>;

const input: GetWebhookRequestsInput = {} as { webhook_id: string };
const result: GetWebhookRequestsOutput = await figma.getWebhookRequests(input);

// Result shape (from schema): { requests: ({ webhook_id: string; request_info: { id: string; endpoint: string; payload: { [key: string]: unknown }; sent_at: string }; response_info: { [key: string]: unknown } | null; error_msg: string | null })[] }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
