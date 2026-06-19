# Apps

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.apps.getAuthenticated`

- **HTTP**: `GET /app`
- **What it does**: Get the authenticated app
- **OpenAPI operationId**: `apps/get-authenticated`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ [key: string]: unknown }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; slug?: string; node_id: string; client_id?: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: st...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type AppsGetAuthenticatedInput = Parameters<typeof github.apps.getAuthenticated> extends [infer T, ...unknown[]] ? T : undefined;
type AppsGetAuthenticatedOutput = Awaited<ReturnType<typeof github.apps.getAuthenticated>>;

const result: AppsGetAuthenticatedOutput = await github.apps.getAuthenticated();

// Result shape (from schema): { id: number; slug?: string; node_id: string; client_id?: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: st...
```

### `github.apps.createFromManifest`

- **HTTP**: `POST /app-manifests/{code}/conversions`
- **What it does**: Create a GitHub App from a manifest
- **OpenAPI operationId**: `apps/create-from-manifest`
- **Path params**: `code`
- **Query params**: None
- **Response codes**: `201`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ code: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`, `404`, `422`

```ts
import github from "@utdk/github";

type AppsCreateFromManifestInput = Parameters<typeof github.apps.createFromManifest> extends [infer T, ...unknown[]] ? T : undefined;
type AppsCreateFromManifestOutput = Awaited<ReturnType<typeof github.apps.createFromManifest>>;

const input: AppsCreateFromManifestInput = {} as { code: string };
const result: AppsCreateFromManifestOutput = await github.apps.createFromManifest(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.apps.getWebhookConfigForApp`

- **HTTP**: `GET /app/hook/config`
- **What it does**: Get a webhook configuration for an app
- **OpenAPI operationId**: `apps/get-webhook-config-for-app`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ [key: string]: unknown }`
- Client transport options: None

**Outputs**

- Client return type: `{ url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type AppsGetWebhookConfigForAppInput = Parameters<typeof github.apps.getWebhookConfigForApp> extends [infer T, ...unknown[]] ? T : undefined;
type AppsGetWebhookConfigForAppOutput = Awaited<ReturnType<typeof github.apps.getWebhookConfigForApp>>;

const result: AppsGetWebhookConfigForAppOutput = await github.apps.getWebhookConfigForApp();

// Result shape (from schema): { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }
```

### `github.apps.updateWebhookConfigForApp`

- **HTTP**: `PATCH /app/hook/config`
- **What it does**: Update a webhook configuration for an app
- **OpenAPI operationId**: `apps/update-webhook-config-for-app`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type AppsUpdateWebhookConfigForAppInput = Parameters<typeof github.apps.updateWebhookConfigForApp> extends [infer T, ...unknown[]] ? T : undefined;
type AppsUpdateWebhookConfigForAppOutput = Awaited<ReturnType<typeof github.apps.updateWebhookConfigForApp>>;

const input: AppsUpdateWebhookConfigForAppInput = {} as { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number };
const result: AppsUpdateWebhookConfigForAppOutput = await github.apps.updateWebhookConfigForApp(input);

// Result shape (from schema): { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }
```

### `github.apps.listWebhookDeliveries`

- **HTTP**: `GET /app/hook/deliveries`
- **What it does**: List deliveries for an app webhook
- **OpenAPI operationId**: `apps/list-webhook-deliveries`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; cursor?: string; status?: "success" | "failure" }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; guid: string; delivered_at: string; redelivery: boolean; duration: number; status: string; status_code: number; event: string; action: string | null; installation_id: number | null; repository_id: number ...`
- OpenAPI response codes: `200`, `400`, `422`

```ts
import github from "@utdk/github";

type AppsListWebhookDeliveriesInput = Parameters<typeof github.apps.listWebhookDeliveries> extends [infer T, ...unknown[]] ? T : undefined;
type AppsListWebhookDeliveriesOutput = Awaited<ReturnType<typeof github.apps.listWebhookDeliveries>>;

const input: AppsListWebhookDeliveriesInput = {} as { per_page?: number; cursor?: string; status?: "success" | "failure" };
const result: AppsListWebhookDeliveriesOutput = await github.apps.listWebhookDeliveries(input);

// Result shape (from schema): ({ id: number; guid: string; delivered_at: string; redelivery: boolean; duration: number; status: string; status_code: number; event: string; action: string | null; installation_id: number | null; repository_id: number ...
```

### `github.apps.getWebhookDelivery`

- **HTTP**: `GET /app/hook/deliveries/{delivery_id}`
- **What it does**: Get a delivery for an app webhook
- **OpenAPI operationId**: `apps/get-webhook-delivery`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ delivery_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; guid: string; delivered_at: string; redelivery: boolean; duration: number; status: string; status_code: number; event: string; action: string | null; installation_id: number | null; repository_id: number |...`
- OpenAPI response codes: `200`, `400`, `422`

```ts
import github from "@utdk/github";

type AppsGetWebhookDeliveryInput = Parameters<typeof github.apps.getWebhookDelivery> extends [infer T, ...unknown[]] ? T : undefined;
type AppsGetWebhookDeliveryOutput = Awaited<ReturnType<typeof github.apps.getWebhookDelivery>>;

const input: AppsGetWebhookDeliveryInput = {} as { delivery_id: number };
const result: AppsGetWebhookDeliveryOutput = await github.apps.getWebhookDelivery(input);

// Result shape (from schema): { id: number; guid: string; delivered_at: string; redelivery: boolean; duration: number; status: string; status_code: number; event: string; action: string | null; installation_id: number | null; repository_id: number |...
```

### `github.apps.redeliverWebhookDelivery`

- **HTTP**: `POST /app/hook/deliveries/{delivery_id}/attempts`
- **What it does**: Redeliver a delivery for an app webhook
- **OpenAPI operationId**: `apps/redeliver-webhook-delivery`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `400`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ delivery_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `400`, `422`

```ts
import github from "@utdk/github";

type AppsRedeliverWebhookDeliveryInput = Parameters<typeof github.apps.redeliverWebhookDelivery> extends [infer T, ...unknown[]] ? T : undefined;
type AppsRedeliverWebhookDeliveryOutput = Awaited<ReturnType<typeof github.apps.redeliverWebhookDelivery>>;

const input: AppsRedeliverWebhookDeliveryInput = {} as { delivery_id: number };
const result: AppsRedeliverWebhookDeliveryOutput = await github.apps.redeliverWebhookDelivery(input);

// Result shape (from schema): unknown
```

### `github.apps.listInstallationRequestsForAuthenticatedApp`

- **HTTP**: `GET /app/installation-requests`
- **What it does**: List installation requests for the authenticated app
- **OpenAPI operationId**: `apps/list-installation-requests-for-authenticated-app`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id?: string; account: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followe...`
- OpenAPI response codes: `200`, `304`, `401`

```ts
import github from "@utdk/github";

type AppsListInstallationRequestsForAuthenticatedAppInput = Parameters<typeof github.apps.listInstallationRequestsForAuthenticatedApp> extends [infer T, ...unknown[]] ? T : undefined;
type AppsListInstallationRequestsForAuthenticatedAppOutput = Awaited<ReturnType<typeof github.apps.listInstallationRequestsForAuthenticatedApp>>;

const input: AppsListInstallationRequestsForAuthenticatedAppInput = {} as { per_page?: number; page?: number };
const result: AppsListInstallationRequestsForAuthenticatedAppOutput = await github.apps.listInstallationRequestsForAuthenticatedApp(input);

// Result shape (from schema): ({ id: number; node_id?: string; account: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followe...
```

### `github.apps.listInstallations`

- **HTTP**: `GET /app/installations`
- **What it does**: List installations for the authenticated app
- **OpenAPI operationId**: `apps/list-installations`
- **Path params**: None
- **Query params**: `outdated`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number; since?: string; outdated?: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; account: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; fo...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type AppsListInstallationsInput = Parameters<typeof github.apps.listInstallations> extends [infer T, ...unknown[]] ? T : undefined;
type AppsListInstallationsOutput = Awaited<ReturnType<typeof github.apps.listInstallations>>;

const input: AppsListInstallationsInput = {} as { per_page?: number; page?: number; since?: string; outdated?: string };
const result: AppsListInstallationsOutput = await github.apps.listInstallations(input);

// Result shape (from schema): ({ id: number; account: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; fo...
```

### `github.apps.deleteInstallation`

- **HTTP**: `DELETE /app/installations/{installation_id}`
- **What it does**: Delete an installation for the authenticated app
- **OpenAPI operationId**: `apps/delete-installation`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ installation_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type AppsDeleteInstallationInput = Parameters<typeof github.apps.deleteInstallation> extends [infer T, ...unknown[]] ? T : undefined;
type AppsDeleteInstallationOutput = Awaited<ReturnType<typeof github.apps.deleteInstallation>>;

const input: AppsDeleteInstallationInput = {} as { installation_id: number };
const result: AppsDeleteInstallationOutput = await github.apps.deleteInstallation(input);

// Result shape (from schema): unknown
```

### `github.apps.getInstallation`

- **HTTP**: `GET /app/installations/{installation_id}`
- **What it does**: Get an installation for the authenticated app
- **OpenAPI operationId**: `apps/get-installation`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ installation_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; account: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; fol...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type AppsGetInstallationInput = Parameters<typeof github.apps.getInstallation> extends [infer T, ...unknown[]] ? T : undefined;
type AppsGetInstallationOutput = Awaited<ReturnType<typeof github.apps.getInstallation>>;

const input: AppsGetInstallationInput = {} as { installation_id: number };
const result: AppsGetInstallationOutput = await github.apps.getInstallation(input);

// Result shape (from schema): { id: number; account: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; fol...
```

### `github.apps.createInstallationAccessToken`

- **HTTP**: `POST /app/installations/{installation_id}/access_tokens`
- **What it does**: Create an installation access token for an app
- **OpenAPI operationId**: `apps/create-installation-access-token`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ repositories?: (string)[]; repository_ids?: (number)[]; permissions?: { actions?: "read" | "write"; administration?: "read" | "write"; artifact_metadata?: "read" | "write"; attestations?: "read" | "write"; checks?: "read" | "write"; code_quality?: "read" | "write"; codespaces?: "read" | "write"; contents?: "read" | "write"; dependabot_secrets?: "read" | "write"; deployments?: "read" | "write"; discussions?: "read" | "write"; environments?: "read" | "write"; issues?: "read" | "write"; merge_queues?: "read" | "write"; metadata?: "read" | "write"; packages?: "read" | "write"; pages?: "read" | "write"; pull_requests?: "read" | "write"; repository_custom_properties?: "read" | "write"; repository_hooks?: "read" | "write"; repository_projects?: "read" | "write" | "admin"; secret_scanning_alerts?: "read" | "write"; secrets?: "read" | "write"; security_events?: "read" | "write"; single_file?: "read" | "write"; statuses?: "read" | "write"; vulnerability_alerts?: "read" | "write"; workflows?: "write"; custom_properties_for_organizations?: "read" | "write"; members?: "read" | "write"; organization_administration?: "read" | "write"; organization_custom_roles?: "read" | "write"; organization_custom_org_roles?: "read" | "write"; organization_custom_properties?: "read" | "write" | "admin"; organization_copilot_seat_management?: "read" | "write"; organization_copilot_agent_settings?: "read" | "write"; organization_announcement_banners?: "read" | "write"; organization_events?: "read"; organization_hooks?: "read" | "write"; organization_personal_access_tokens?: "read" | "write"; organization_personal_access_token_requests?: "read" | "write"; organization_plan?: "read"; organization_projects?: "read" | "write" | "admin"; organization_packages?: "read" | "write"; organization_secrets?: "read" | "write"; organization_self_hosted_runners?: "read" | "write"; organization_user_blocking?: "read" | "write"; email_addresses?: "read" | "write"; followers?: "read" | "write"; git_ssh_keys?: "read" | "write"; gpg_keys?: "read" | "write"; interaction_limits?: "read" | "write"; profile?: "write"; starring?: "read" | "write"; enterprise_custom_properties_for_organizations?: "read" | "write" | "admin" }; installation_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ token: string; expires_at: string; permissions?: { actions?: "read" | "write"; administration?: "read" | "write"; artifact_metadata?: "read" | "write"; attestations?: "read" | "write"; checks?: "read" | "write"; code_...`
- OpenAPI response codes: `201`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type AppsCreateInstallationAccessTokenInput = Parameters<typeof github.apps.createInstallationAccessToken> extends [infer T, ...unknown[]] ? T : undefined;
type AppsCreateInstallationAccessTokenOutput = Awaited<ReturnType<typeof github.apps.createInstallationAccessToken>>;

const input: AppsCreateInstallationAccessTokenInput = {} as { repositories?: (string)[]; repository_ids?: (number)[]; permissions?: { actions?: "read" | "write"; administration?: "read" | "write"; artifact_metadata?: "read" | "write"; attestations?: "read" | "write"; checks?: "read" | "write"; code_quality?: "read" | "write"; codespaces?: "read" | "write"; contents?: "read" | "write"; dependabot_secrets?: "read" | "write"; deployments?: "read" | "write"; discussions?: "read" | "write"; environments?: "read" | "write"; issues?: "read" | "write"; merge_queues?: "read" | "write"; metadata?: "read" | "write"; packages?: "read" | "write"; pages?: "read" | "write"; pull_requests?: "read" | "write"; repository_custom_properties?: "read" | "write"; repository_hooks?: "read" | "write"; repository_projects?: "read" | "write" | "admin"; secret_scanning_alerts?: "read" | "write"; secrets?: "read" | "write"; security_events?: "read" | "write"; single_file?: "read" | "write"; statuses?: "read" | "write"; vulnerability_alerts?: "read" | "write"; workflows?: "write"; custom_properties_for_organizations?: "read" | "write"; members?: "read" | "write"; organization_administration?: "read" | "write"; organization_custom_roles?: "read" | "write"; organization_custom_org_roles?: "read" | "write"; organization_custom_properties?: "read" | "write" | "admin"; organization_copilot_seat_management?: "read" | "write"; organization_copilot_agent_settings?: "read" | "write"; organization_announcement_banners?: "read" | "write"; organization_events?: "read"; organization_hooks?: "read" | "write"; organization_personal_access_tokens?: "read" | "write"; organization_personal_access_token_requests?: "read" | "write"; organization_plan?: "read"; organization_projects?: "read" | "write" | "admin"; organization_packages?: "read" | "write"; organization_secrets?: "read" | "write"; organization_self_hosted_runners?: "read" | "write"; organization_user_blocking?: "read" | "write"; email_addresses?: "read" | "write"; followers?: "read" | "write"; git_ssh_keys?: "read" | "write"; gpg_keys?: "read" | "write"; interaction_limits?: "read" | "write"; profile?: "write"; starring?: "read" | "write"; enterprise_custom_properties_for_organizations?: "read" | "write" | "admin" }; installation_id: number };
const result: AppsCreateInstallationAccessTokenOutput = await github.apps.createInstallationAccessToken(input);

// Result shape (from schema): { token: string; expires_at: string; permissions?: { actions?: "read" | "write"; administration?: "read" | "write"; artifact_metadata?: "read" | "write"; attestations?: "read" | "write"; checks?: "read" | "write"; code_...
```

### `github.apps.unsuspendInstallation`

- **HTTP**: `DELETE /app/installations/{installation_id}/suspended`
- **What it does**: Unsuspend an app installation
- **OpenAPI operationId**: `apps/unsuspend-installation`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ installation_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type AppsUnsuspendInstallationInput = Parameters<typeof github.apps.unsuspendInstallation> extends [infer T, ...unknown[]] ? T : undefined;
type AppsUnsuspendInstallationOutput = Awaited<ReturnType<typeof github.apps.unsuspendInstallation>>;

const input: AppsUnsuspendInstallationInput = {} as { installation_id: number };
const result: AppsUnsuspendInstallationOutput = await github.apps.unsuspendInstallation(input);

// Result shape (from schema): unknown
```

### `github.apps.suspendInstallation`

- **HTTP**: `PUT /app/installations/{installation_id}/suspended`
- **What it does**: Suspend an app installation
- **OpenAPI operationId**: `apps/suspend-installation`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ installation_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type AppsSuspendInstallationInput = Parameters<typeof github.apps.suspendInstallation> extends [infer T, ...unknown[]] ? T : undefined;
type AppsSuspendInstallationOutput = Awaited<ReturnType<typeof github.apps.suspendInstallation>>;

const input: AppsSuspendInstallationInput = {} as { installation_id: number };
const result: AppsSuspendInstallationOutput = await github.apps.suspendInstallation(input);

// Result shape (from schema): unknown
```

### `github.apps.deleteAuthorization`

- **HTTP**: `DELETE /applications/{client_id}/grant`
- **What it does**: Delete an app authorization
- **OpenAPI operationId**: `apps/delete-authorization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ access_token: string; client_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `422`

```ts
import github from "@utdk/github";

type AppsDeleteAuthorizationInput = Parameters<typeof github.apps.deleteAuthorization> extends [infer T, ...unknown[]] ? T : undefined;
type AppsDeleteAuthorizationOutput = Awaited<ReturnType<typeof github.apps.deleteAuthorization>>;

const input: AppsDeleteAuthorizationInput = {} as { access_token: string; client_id: string };
const result: AppsDeleteAuthorizationOutput = await github.apps.deleteAuthorization(input);

// Result shape (from schema): unknown
```

### `github.apps.deleteToken`

- **HTTP**: `DELETE /applications/{client_id}/token`
- **What it does**: Delete an app token
- **OpenAPI operationId**: `apps/delete-token`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ access_token: string; client_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `422`

```ts
import github from "@utdk/github";

type AppsDeleteTokenInput = Parameters<typeof github.apps.deleteToken> extends [infer T, ...unknown[]] ? T : undefined;
type AppsDeleteTokenOutput = Awaited<ReturnType<typeof github.apps.deleteToken>>;

const input: AppsDeleteTokenInput = {} as { access_token: string; client_id: string };
const result: AppsDeleteTokenOutput = await github.apps.deleteToken(input);

// Result shape (from schema): unknown
```

### `github.apps.resetToken`

- **HTTP**: `PATCH /applications/{client_id}/token`
- **What it does**: Reset a token
- **OpenAPI operationId**: `apps/reset-token`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ access_token: string; client_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; url: string; scopes: (string)[] | null; token: string; token_last_eight: string | null; hashed_token: string | null; app: { client_id: string; name: string; url: string }; note: string | null; note_url: st...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type AppsResetTokenInput = Parameters<typeof github.apps.resetToken> extends [infer T, ...unknown[]] ? T : undefined;
type AppsResetTokenOutput = Awaited<ReturnType<typeof github.apps.resetToken>>;

const input: AppsResetTokenInput = {} as { access_token: string; client_id: string };
const result: AppsResetTokenOutput = await github.apps.resetToken(input);

// Result shape (from schema): { id: number; url: string; scopes: (string)[] | null; token: string; token_last_eight: string | null; hashed_token: string | null; app: { client_id: string; name: string; url: string }; note: string | null; note_url: st...
```

### `github.apps.checkToken`

- **HTTP**: `POST /applications/{client_id}/token`
- **What it does**: Check a token
- **OpenAPI operationId**: `apps/check-token`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ access_token: string; client_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; url: string; scopes: (string)[] | null; token: string; token_last_eight: string | null; hashed_token: string | null; app: { client_id: string; name: string; url: string }; note: string | null; note_url: st...`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type AppsCheckTokenInput = Parameters<typeof github.apps.checkToken> extends [infer T, ...unknown[]] ? T : undefined;
type AppsCheckTokenOutput = Awaited<ReturnType<typeof github.apps.checkToken>>;

const input: AppsCheckTokenInput = {} as { access_token: string; client_id: string };
const result: AppsCheckTokenOutput = await github.apps.checkToken(input);

// Result shape (from schema): { id: number; url: string; scopes: (string)[] | null; token: string; token_last_eight: string | null; hashed_token: string | null; app: { client_id: string; name: string; url: string }; note: string | null; note_url: st...
```

### `github.apps.scopeToken`

- **HTTP**: `POST /applications/{client_id}/token/scoped`
- **What it does**: Create a scoped access token
- **OpenAPI operationId**: `apps/scope-token`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ access_token: string; target?: string; target_id?: number; repositories?: (string)[]; repository_ids?: (number)[]; permissions?: { actions?: "read" | "write"; administration?: "read" | "write"; artifact_metadata?: "read" | "write"; attestations?: "read" | "write"; checks?: "read" | "write"; code_quality?: "read" | "write"; codespaces?: "read" | "write"; contents?: "read" | "write"; dependabot_secrets?: "read" | "write"; deployments?: "read" | "write"; discussions?: "read" | "write"; environments?: "read" | "write"; issues?: "read" | "write"; merge_queues?: "read" | "write"; metadata?: "read" | "write"; packages?: "read" | "write"; pages?: "read" | "write"; pull_requests?: "read" | "write"; repository_custom_properties?: "read" | "write"; repository_hooks?: "read" | "write"; repository_projects?: "read" | "write" | "admin"; secret_scanning_alerts?: "read" | "write"; secrets?: "read" | "write"; security_events?: "read" | "write"; single_file?: "read" | "write"; statuses?: "read" | "write"; vulnerability_alerts?: "read" | "write"; workflows?: "write"; custom_properties_for_organizations?: "read" | "write"; members?: "read" | "write"; organization_administration?: "read" | "write"; organization_custom_roles?: "read" | "write"; organization_custom_org_roles?: "read" | "write"; organization_custom_properties?: "read" | "write" | "admin"; organization_copilot_seat_management?: "read" | "write"; organization_copilot_agent_settings?: "read" | "write"; organization_announcement_banners?: "read" | "write"; organization_events?: "read"; organization_hooks?: "read" | "write"; organization_personal_access_tokens?: "read" | "write"; organization_personal_access_token_requests?: "read" | "write"; organization_plan?: "read"; organization_projects?: "read" | "write" | "admin"; organization_packages?: "read" | "write"; organization_secrets?: "read" | "write"; organization_self_hosted_runners?: "read" | "write"; organization_user_blocking?: "read" | "write"; email_addresses?: "read" | "write"; followers?: "read" | "write"; git_ssh_keys?: "read" | "write"; gpg_keys?: "read" | "write"; interaction_limits?: "read" | "write"; profile?: "write"; starring?: "read" | "write"; enterprise_custom_properties_for_organizations?: "read" | "write" | "admin" }; client_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; url: string; scopes: (string)[] | null; token: string; token_last_eight: string | null; hashed_token: string | null; app: { client_id: string; name: string; url: string }; note: string | null; note_url: st...`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type AppsScopeTokenInput = Parameters<typeof github.apps.scopeToken> extends [infer T, ...unknown[]] ? T : undefined;
type AppsScopeTokenOutput = Awaited<ReturnType<typeof github.apps.scopeToken>>;

const input: AppsScopeTokenInput = {} as { access_token: string; target?: string; target_id?: number; repositories?: (string)[]; repository_ids?: (number)[]; permissions?: { actions?: "read" | "write"; administration?: "read" | "write"; artifact_metadata?: "read" | "write"; attestations?: "read" | "write"; checks?: "read" | "write"; code_quality?: "read" | "write"; codespaces?: "read" | "write"; contents?: "read" | "write"; dependabot_secrets?: "read" | "write"; deployments?: "read" | "write"; discussions?: "read" | "write"; environments?: "read" | "write"; issues?: "read" | "write"; merge_queues?: "read" | "write"; metadata?: "read" | "write"; packages?: "read" | "write"; pages?: "read" | "write"; pull_requests?: "read" | "write"; repository_custom_properties?: "read" | "write"; repository_hooks?: "read" | "write"; repository_projects?: "read" | "write" | "admin"; secret_scanning_alerts?: "read" | "write"; secrets?: "read" | "write"; security_events?: "read" | "write"; single_file?: "read" | "write"; statuses?: "read" | "write"; vulnerability_alerts?: "read" | "write"; workflows?: "write"; custom_properties_for_organizations?: "read" | "write"; members?: "read" | "write"; organization_administration?: "read" | "write"; organization_custom_roles?: "read" | "write"; organization_custom_org_roles?: "read" | "write"; organization_custom_properties?: "read" | "write" | "admin"; organization_copilot_seat_management?: "read" | "write"; organization_copilot_agent_settings?: "read" | "write"; organization_announcement_banners?: "read" | "write"; organization_events?: "read"; organization_hooks?: "read" | "write"; organization_personal_access_tokens?: "read" | "write"; organization_personal_access_token_requests?: "read" | "write"; organization_plan?: "read"; organization_projects?: "read" | "write" | "admin"; organization_packages?: "read" | "write"; organization_secrets?: "read" | "write"; organization_self_hosted_runners?: "read" | "write"; organization_user_blocking?: "read" | "write"; email_addresses?: "read" | "write"; followers?: "read" | "write"; git_ssh_keys?: "read" | "write"; gpg_keys?: "read" | "write"; interaction_limits?: "read" | "write"; profile?: "write"; starring?: "read" | "write"; enterprise_custom_properties_for_organizations?: "read" | "write" | "admin" }; client_id: string };
const result: AppsScopeTokenOutput = await github.apps.scopeToken(input);

// Result shape (from schema): { id: number; url: string; scopes: (string)[] | null; token: string; token_last_eight: string | null; hashed_token: string | null; app: { client_id: string; name: string; url: string }; note: string | null; note_url: st...
```

### `github.apps.getBySlug`

- **HTTP**: `GET /apps/{app_slug}`
- **What it does**: Get an app
- **OpenAPI operationId**: `apps/get-by-slug`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ app_slug: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; slug?: string; node_id: string; client_id?: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: st...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type AppsGetBySlugInput = Parameters<typeof github.apps.getBySlug> extends [infer T, ...unknown[]] ? T : undefined;
type AppsGetBySlugOutput = Awaited<ReturnType<typeof github.apps.getBySlug>>;

const input: AppsGetBySlugInput = {} as { app_slug: string };
const result: AppsGetBySlugOutput = await github.apps.getBySlug(input);

// Result shape (from schema): { id: number; slug?: string; node_id: string; client_id?: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: st...
```

### `github.apps.listReposAccessibleToInstallation`

- **HTTP**: `GET /installation/repositories`
- **What it does**: List repositories accessible to the app installation
- **OpenAPI operationId**: `apps/list-repos-accessible-to-installation`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; spdx_id: string | null; node_id: string; html_url?: string ...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type AppsListReposAccessibleToInstallationInput = Parameters<typeof github.apps.listReposAccessibleToInstallation> extends [infer T, ...unknown[]] ? T : undefined;
type AppsListReposAccessibleToInstallationOutput = Awaited<ReturnType<typeof github.apps.listReposAccessibleToInstallation>>;

const input: AppsListReposAccessibleToInstallationInput = {} as { per_page?: number; page?: number };
const result: AppsListReposAccessibleToInstallationOutput = await github.apps.listReposAccessibleToInstallation(input);

// Result shape (from schema): { total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; spdx_id: string | null; node_id: string; html_url?: string ...
```

### `github.apps.revokeInstallationAccessToken`

- **HTTP**: `DELETE /installation/token`
- **What it does**: Revoke an installation access token
- **OpenAPI operationId**: `apps/revoke-installation-access-token`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ [key: string]: unknown }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type AppsRevokeInstallationAccessTokenInput = Parameters<typeof github.apps.revokeInstallationAccessToken> extends [infer T, ...unknown[]] ? T : undefined;
type AppsRevokeInstallationAccessTokenOutput = Awaited<ReturnType<typeof github.apps.revokeInstallationAccessToken>>;

const result: AppsRevokeInstallationAccessTokenOutput = await github.apps.revokeInstallationAccessToken();

// Result shape (from schema): unknown
```

### `github.apps.getSubscriptionPlanForAccount`

- **HTTP**: `GET /marketplace_listing/accounts/{account_id}`
- **What it does**: Get a subscription plan for an account
- **OpenAPI operationId**: `apps/get-subscription-plan-for-account`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ account_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; type: string; id: number; login: string; organization_billing_email?: string; email?: string | null; marketplace_pending_change?: { is_installed?: boolean; effective_date?: string; unit_count?: number | n...`
- OpenAPI response codes: `200`, `401`, `404`

```ts
import github from "@utdk/github";

type AppsGetSubscriptionPlanForAccountInput = Parameters<typeof github.apps.getSubscriptionPlanForAccount> extends [infer T, ...unknown[]] ? T : undefined;
type AppsGetSubscriptionPlanForAccountOutput = Awaited<ReturnType<typeof github.apps.getSubscriptionPlanForAccount>>;

const input: AppsGetSubscriptionPlanForAccountInput = {} as { account_id: number };
const result: AppsGetSubscriptionPlanForAccountOutput = await github.apps.getSubscriptionPlanForAccount(input);

// Result shape (from schema): { url: string; type: string; id: number; login: string; organization_billing_email?: string; email?: string | null; marketplace_pending_change?: { is_installed?: boolean; effective_date?: string; unit_count?: number | n...
```

### `github.apps.listPlans`

- **HTTP**: `GET /marketplace_listing/plans`
- **What it does**: List plans
- **OpenAPI operationId**: `apps/list-plans`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; accounts_url: string; id: number; number: number; name: string; description: string; monthly_price_in_cents: number; yearly_price_in_cents: number; price_model: "FREE" | "FLAT_RATE" | "PER_UNIT"; has_fre...`
- OpenAPI response codes: `200`, `401`, `404`

```ts
import github from "@utdk/github";

type AppsListPlansInput = Parameters<typeof github.apps.listPlans> extends [infer T, ...unknown[]] ? T : undefined;
type AppsListPlansOutput = Awaited<ReturnType<typeof github.apps.listPlans>>;

const input: AppsListPlansInput = {} as { per_page?: number; page?: number };
const result: AppsListPlansOutput = await github.apps.listPlans(input);

// Result shape (from schema): ({ url: string; accounts_url: string; id: number; number: number; name: string; description: string; monthly_price_in_cents: number; yearly_price_in_cents: number; price_model: "FREE" | "FLAT_RATE" | "PER_UNIT"; has_fre...
```

### `github.apps.listAccountsForPlan`

- **HTTP**: `GET /marketplace_listing/plans/{plan_id}/accounts`
- **What it does**: List accounts for a plan
- **OpenAPI operationId**: `apps/list-accounts-for-plan`
- **Path params**: None
- **Query params**: `direction`
- **Response codes**: `200`, `401`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ plan_id: number; sort?: "created" | "updated"; direction?: "asc" | "desc"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; type: string; id: number; login: string; organization_billing_email?: string; email?: string | null; marketplace_pending_change?: { is_installed?: boolean; effective_date?: string; unit_count?: number | ...`
- OpenAPI response codes: `200`, `401`, `404`, `422`

```ts
import github from "@utdk/github";

type AppsListAccountsForPlanInput = Parameters<typeof github.apps.listAccountsForPlan> extends [infer T, ...unknown[]] ? T : undefined;
type AppsListAccountsForPlanOutput = Awaited<ReturnType<typeof github.apps.listAccountsForPlan>>;

const input: AppsListAccountsForPlanInput = {} as { plan_id: number; sort?: "created" | "updated"; direction?: "asc" | "desc"; per_page?: number; page?: number };
const result: AppsListAccountsForPlanOutput = await github.apps.listAccountsForPlan(input);

// Result shape (from schema): ({ url: string; type: string; id: number; login: string; organization_billing_email?: string; email?: string | null; marketplace_pending_change?: { is_installed?: boolean; effective_date?: string; unit_count?: number | ...
```

### `github.apps.getSubscriptionPlanForAccountStubbed`

- **HTTP**: `GET /marketplace_listing/stubbed/accounts/{account_id}`
- **What it does**: Get a subscription plan for an account (stubbed)
- **OpenAPI operationId**: `apps/get-subscription-plan-for-account-stubbed`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ account_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; type: string; id: number; login: string; organization_billing_email?: string; email?: string | null; marketplace_pending_change?: { is_installed?: boolean; effective_date?: string; unit_count?: number | n...`
- OpenAPI response codes: `200`, `401`, `404`

```ts
import github from "@utdk/github";

type AppsGetSubscriptionPlanForAccountStubbedInput = Parameters<typeof github.apps.getSubscriptionPlanForAccountStubbed> extends [infer T, ...unknown[]] ? T : undefined;
type AppsGetSubscriptionPlanForAccountStubbedOutput = Awaited<ReturnType<typeof github.apps.getSubscriptionPlanForAccountStubbed>>;

const input: AppsGetSubscriptionPlanForAccountStubbedInput = {} as { account_id: number };
const result: AppsGetSubscriptionPlanForAccountStubbedOutput = await github.apps.getSubscriptionPlanForAccountStubbed(input);

// Result shape (from schema): { url: string; type: string; id: number; login: string; organization_billing_email?: string; email?: string | null; marketplace_pending_change?: { is_installed?: boolean; effective_date?: string; unit_count?: number | n...
```

### `github.apps.listPlansStubbed`

- **HTTP**: `GET /marketplace_listing/stubbed/plans`
- **What it does**: List plans (stubbed)
- **OpenAPI operationId**: `apps/list-plans-stubbed`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; accounts_url: string; id: number; number: number; name: string; description: string; monthly_price_in_cents: number; yearly_price_in_cents: number; price_model: "FREE" | "FLAT_RATE" | "PER_UNIT"; has_fre...`
- OpenAPI response codes: `200`, `401`

```ts
import github from "@utdk/github";

type AppsListPlansStubbedInput = Parameters<typeof github.apps.listPlansStubbed> extends [infer T, ...unknown[]] ? T : undefined;
type AppsListPlansStubbedOutput = Awaited<ReturnType<typeof github.apps.listPlansStubbed>>;

const input: AppsListPlansStubbedInput = {} as { per_page?: number; page?: number };
const result: AppsListPlansStubbedOutput = await github.apps.listPlansStubbed(input);

// Result shape (from schema): ({ url: string; accounts_url: string; id: number; number: number; name: string; description: string; monthly_price_in_cents: number; yearly_price_in_cents: number; price_model: "FREE" | "FLAT_RATE" | "PER_UNIT"; has_fre...
```

### `github.apps.listAccountsForPlanStubbed`

- **HTTP**: `GET /marketplace_listing/stubbed/plans/{plan_id}/accounts`
- **What it does**: List accounts for a plan (stubbed)
- **OpenAPI operationId**: `apps/list-accounts-for-plan-stubbed`
- **Path params**: None
- **Query params**: `direction`
- **Response codes**: `200`, `401`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ plan_id: number; sort?: "created" | "updated"; direction?: "asc" | "desc"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; type: string; id: number; login: string; organization_billing_email?: string; email?: string | null; marketplace_pending_change?: { is_installed?: boolean; effective_date?: string; unit_count?: number | ...`
- OpenAPI response codes: `200`, `401`

```ts
import github from "@utdk/github";

type AppsListAccountsForPlanStubbedInput = Parameters<typeof github.apps.listAccountsForPlanStubbed> extends [infer T, ...unknown[]] ? T : undefined;
type AppsListAccountsForPlanStubbedOutput = Awaited<ReturnType<typeof github.apps.listAccountsForPlanStubbed>>;

const input: AppsListAccountsForPlanStubbedInput = {} as { plan_id: number; sort?: "created" | "updated"; direction?: "asc" | "desc"; per_page?: number; page?: number };
const result: AppsListAccountsForPlanStubbedOutput = await github.apps.listAccountsForPlanStubbed(input);

// Result shape (from schema): ({ url: string; type: string; id: number; login: string; organization_billing_email?: string; email?: string | null; marketplace_pending_change?: { is_installed?: boolean; effective_date?: string; unit_count?: number | ...
```

### `github.apps.getOrgInstallation`

- **HTTP**: `GET /orgs/{org}/installation`
- **What it does**: Get an organization installation for the authenticated app
- **OpenAPI operationId**: `apps/get-org-installation`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; account: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; fol...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type AppsGetOrgInstallationInput = Parameters<typeof github.apps.getOrgInstallation> extends [infer T, ...unknown[]] ? T : undefined;
type AppsGetOrgInstallationOutput = Awaited<ReturnType<typeof github.apps.getOrgInstallation>>;

const input: AppsGetOrgInstallationInput = {} as { org: string };
const result: AppsGetOrgInstallationOutput = await github.apps.getOrgInstallation(input);

// Result shape (from schema): { id: number; account: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; fol...
```

### `github.apps.getRepoInstallation`

- **HTTP**: `GET /repos/{owner}/{repo}/installation`
- **What it does**: Get a repository installation for the authenticated app
- **OpenAPI operationId**: `apps/get-repo-installation`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `301`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; account: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; fol...`
- OpenAPI response codes: `200`, `301`, `404`

```ts
import github from "@utdk/github";

type AppsGetRepoInstallationInput = Parameters<typeof github.apps.getRepoInstallation> extends [infer T, ...unknown[]] ? T : undefined;
type AppsGetRepoInstallationOutput = Awaited<ReturnType<typeof github.apps.getRepoInstallation>>;

const input: AppsGetRepoInstallationInput = {} as { owner: string; repo: string };
const result: AppsGetRepoInstallationOutput = await github.apps.getRepoInstallation(input);

// Result shape (from schema): { id: number; account: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; fol...
```

### `github.apps.listInstallationsForAuthenticatedUser`

- **HTTP**: `GET /user/installations`
- **What it does**: List app installations accessible to the user access token
- **OpenAPI operationId**: `apps/list-installations-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; installations: ({ id: number; account: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type AppsListInstallationsForAuthenticatedUserInput = Parameters<typeof github.apps.listInstallationsForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type AppsListInstallationsForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.apps.listInstallationsForAuthenticatedUser>>;

const input: AppsListInstallationsForAuthenticatedUserInput = {} as { per_page?: number; page?: number };
const result: AppsListInstallationsForAuthenticatedUserOutput = await github.apps.listInstallationsForAuthenticatedUser(input);

// Result shape (from schema): { total_count: number; installations: ({ id: number; account: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_...
```

### `github.apps.listInstallationReposForAuthenticatedUser`

- **HTTP**: `GET /user/installations/{installation_id}/repositories`
- **What it does**: List repositories accessible to the user access token
- **OpenAPI operationId**: `apps/list-installation-repos-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ installation_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; repository_selection?: string; repositories: ({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; spdx_id: string | null; node...`
- OpenAPI response codes: `200`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type AppsListInstallationReposForAuthenticatedUserInput = Parameters<typeof github.apps.listInstallationReposForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type AppsListInstallationReposForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.apps.listInstallationReposForAuthenticatedUser>>;

const input: AppsListInstallationReposForAuthenticatedUserInput = {} as { installation_id: number; per_page?: number; page?: number };
const result: AppsListInstallationReposForAuthenticatedUserOutput = await github.apps.listInstallationReposForAuthenticatedUser(input);

// Result shape (from schema): { total_count: number; repository_selection?: string; repositories: ({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; spdx_id: string | null; node...
```

### `github.apps.removeRepoFromInstallationForAuthenticatedUser`

- **HTTP**: `DELETE /user/installations/{installation_id}/repositories/{repository_id}`
- **What it does**: Remove a repository from an app installation
- **OpenAPI operationId**: `apps/remove-repo-from-installation-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ installation_id: number; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type AppsRemoveRepoFromInstallationForAuthenticatedUserInput = Parameters<typeof github.apps.removeRepoFromInstallationForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type AppsRemoveRepoFromInstallationForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.apps.removeRepoFromInstallationForAuthenticatedUser>>;

const input: AppsRemoveRepoFromInstallationForAuthenticatedUserInput = {} as { installation_id: number; repository_id: number };
const result: AppsRemoveRepoFromInstallationForAuthenticatedUserOutput = await github.apps.removeRepoFromInstallationForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.apps.addRepoToInstallationForAuthenticatedUser`

- **HTTP**: `PUT /user/installations/{installation_id}/repositories/{repository_id}`
- **What it does**: Add a repository to an app installation
- **OpenAPI operationId**: `apps/add-repo-to-installation-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ installation_id: number; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type AppsAddRepoToInstallationForAuthenticatedUserInput = Parameters<typeof github.apps.addRepoToInstallationForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type AppsAddRepoToInstallationForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.apps.addRepoToInstallationForAuthenticatedUser>>;

const input: AppsAddRepoToInstallationForAuthenticatedUserInput = {} as { installation_id: number; repository_id: number };
const result: AppsAddRepoToInstallationForAuthenticatedUserOutput = await github.apps.addRepoToInstallationForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.apps.listSubscriptionsForAuthenticatedUser`

- **HTTP**: `GET /user/marketplace_purchases`
- **What it does**: List subscriptions for the authenticated user
- **OpenAPI operationId**: `apps/list-subscriptions-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ billing_cycle: string; next_billing_date: string | null; unit_count: number | null; on_free_trial: boolean; free_trial_ends_on: string | null; updated_at: string | null; account: { url: string; id: number; type: stri...`
- OpenAPI response codes: `200`, `304`, `401`, `404`

```ts
import github from "@utdk/github";

type AppsListSubscriptionsForAuthenticatedUserInput = Parameters<typeof github.apps.listSubscriptionsForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type AppsListSubscriptionsForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.apps.listSubscriptionsForAuthenticatedUser>>;

const input: AppsListSubscriptionsForAuthenticatedUserInput = {} as { per_page?: number; page?: number };
const result: AppsListSubscriptionsForAuthenticatedUserOutput = await github.apps.listSubscriptionsForAuthenticatedUser(input);

// Result shape (from schema): ({ billing_cycle: string; next_billing_date: string | null; unit_count: number | null; on_free_trial: boolean; free_trial_ends_on: string | null; updated_at: string | null; account: { url: string; id: number; type: stri...
```

### `github.apps.listSubscriptionsForAuthenticatedUserStubbed`

- **HTTP**: `GET /user/marketplace_purchases/stubbed`
- **What it does**: List subscriptions for the authenticated user (stubbed)
- **OpenAPI operationId**: `apps/list-subscriptions-for-authenticated-user-stubbed`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ billing_cycle: string; next_billing_date: string | null; unit_count: number | null; on_free_trial: boolean; free_trial_ends_on: string | null; updated_at: string | null; account: { url: string; id: number; type: stri...`
- OpenAPI response codes: `200`, `304`, `401`

```ts
import github from "@utdk/github";

type AppsListSubscriptionsForAuthenticatedUserStubbedInput = Parameters<typeof github.apps.listSubscriptionsForAuthenticatedUserStubbed> extends [infer T, ...unknown[]] ? T : undefined;
type AppsListSubscriptionsForAuthenticatedUserStubbedOutput = Awaited<ReturnType<typeof github.apps.listSubscriptionsForAuthenticatedUserStubbed>>;

const input: AppsListSubscriptionsForAuthenticatedUserStubbedInput = {} as { per_page?: number; page?: number };
const result: AppsListSubscriptionsForAuthenticatedUserStubbedOutput = await github.apps.listSubscriptionsForAuthenticatedUserStubbed(input);

// Result shape (from schema): ({ billing_cycle: string; next_billing_date: string | null; unit_count: number | null; on_free_trial: boolean; free_trial_ends_on: string | null; updated_at: string | null; account: { url: string; id: number; type: stri...
```

### `github.apps.getUserInstallation`

- **HTTP**: `GET /users/{username}/installation`
- **What it does**: Get a user installation for the authenticated app
- **OpenAPI operationId**: `apps/get-user-installation`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; account: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; fol...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type AppsGetUserInstallationInput = Parameters<typeof github.apps.getUserInstallation> extends [infer T, ...unknown[]] ? T : undefined;
type AppsGetUserInstallationOutput = Awaited<ReturnType<typeof github.apps.getUserInstallation>>;

const input: AppsGetUserInstallationInput = {} as { username: string };
const result: AppsGetUserInstallationOutput = await github.apps.getUserInstallation(input);

// Result shape (from schema): { id: number; account: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; fol...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
