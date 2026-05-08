# Payments

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/figma`

## Operations

### `figma.getPayments`

- **HTTP**: `GET /v1/payments`
- **What it does**: Get payments
- **OpenAPI operationId**: `getPayments`
- **Path params**: None
- **Query params**: `plugin_payment_token`, `user_id`, `community_file_id`, `plugin_id`, `widget_id`
- **Response codes**: `200`, `401`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ plugin_payment_token?: string; user_id?: string; community_file_id?: string; plugin_id?: string; widget_id?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ status: 200; error: false; meta: { user_id: string; resource_id: string; resource_type: "PLUGIN" | "WIDGET" | "COMMUNITY_FILE"; payment_status: { type?: "UNPAID" | "PAID" | "TRIAL" }; date_of_purchase?: string } }`
- OpenAPI response codes: `200`, `401`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetPaymentsInput = Parameters<typeof figma.getPayments> extends [infer T, ...unknown[]] ? T : undefined;
type GetPaymentsOutput = Awaited<ReturnType<typeof figma.getPayments>>;

const input: GetPaymentsInput = {} as { plugin_payment_token?: string; user_id?: string; community_file_id?: string; plugin_id?: string; widget_id?: string };
const result: GetPaymentsOutput = await figma.getPayments(input);

// Result shape (from schema): { status: 200; error: false; meta: { user_id: string; resource_id: string; resource_type: "PLUGIN" | "WIDGET" | "COMMUNITY_FILE"; payment_status: { type?: "UNPAID" | "PAID" | "TRIAL" }; date_of_purchase?: string } }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
