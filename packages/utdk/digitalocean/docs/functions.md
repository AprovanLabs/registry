# Functions

13 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.functionsListNamespaces`

List Namespaces

```ts
digitalocean.functionsListNamespaces(): Promise<{ namespaces?: (NamespaceInfo)[] }>
```

<sub>`GET /v2/functions/namespaces` · `functions_list_namespaces`</sub>

## `digitalocean.functionsCreateNamespace`

Create Namespace

```ts
digitalocean.functionsCreateNamespace(input: {
  /** The [datacenter region](https://docs.digitalocean.com/products/platform/availability-matrix/#available-datacenters) in which to create the namespace. */
  region: string;
  /** The namespace's unique name. */
  label: string;
}): Promise<{ namespace?: NamespaceInfo }>
```

<sub>`POST /v2/functions/namespaces` · `functions_create_namespace`</sub>

## `digitalocean.functionsDeleteNamespace`

Delete Namespace

```ts
digitalocean.functionsDeleteNamespace(input: {
  /** The ID of the namespace to be managed. */
  namespace_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/functions/namespaces/{namespace_id}` · `functions_delete_namespace`</sub>

## `digitalocean.functionsGetNamespace`

Get Namespace

```ts
digitalocean.functionsGetNamespace(input: {
  /** The ID of the namespace to be managed. */
  namespace_id: string;
}): Promise<{ namespace?: NamespaceInfo }>
```

<sub>`GET /v2/functions/namespaces/{namespace_id}` · `functions_get_namespace`</sub>

## `digitalocean.functionsAccessKeyList`

List Namespace Access Keys

```ts
digitalocean.functionsAccessKeyList(input: {
  /** The ID of the namespace to be managed. */
  namespace_id: string;
}): Promise<{ access_keys?: (AccessKey)[]; count?: number }>
```

<sub>`GET /v2/functions/namespaces/{namespace_id}/keys` · `functionsAccessKey_list`</sub>

## `digitalocean.functionsAccessKeyCreate`

Create a Namespace Access Key

```ts
digitalocean.functionsAccessKeyCreate(input: {
  /** The access key's name. */
  name: string;
  /** The duration after which the access key expires, specified as a human-readable duration string in the format `<int>h` (hours) or `<int>d` (days). Minimum value is `1h`. If omitted, the key will never expire. */
  expires_in?: string;
  /** The ID of the namespace to be managed. */
  namespace_id: string;
}): Promise<{ access_key?: AccessKeyCreateResponse }>
```

<sub>`POST /v2/functions/namespaces/{namespace_id}/keys` · `functionsAccessKey_create`</sub>

## `digitalocean.functionsAccessKeyDelete`

Delete a Namespace Access Key

```ts
digitalocean.functionsAccessKeyDelete(input: {
  /** The ID of the namespace to be managed. */
  namespace_id: string;
  /** The ID of the access key to be managed. */
  key_id: string;
}): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /v2/functions/namespaces/{namespace_id}/keys/{key_id}` · `functionsAccessKey_delete`</sub>

## `digitalocean.functionsAccessKeyUpdate`

Update a Namespace Access Key

```ts
digitalocean.functionsAccessKeyUpdate(input: {
  /** The new name for the access key. */
  name: string;
  /** The ID of the namespace to be managed. */
  namespace_id: string;
  /** The ID of the access key to be managed. */
  key_id: string;
}): Promise<{ access_key?: AccessKey }>
```

<sub>`PUT /v2/functions/namespaces/{namespace_id}/keys/{key_id}` · `functionsAccessKey_update`</sub>

## `digitalocean.functionsListTriggers`

List Triggers

```ts
digitalocean.functionsListTriggers(input: {
  /** The ID of the namespace to be managed. */
  namespace_id: string;
}): Promise<{ triggers?: (TriggerInfo)[] }>
```

<sub>`GET /v2/functions/namespaces/{namespace_id}/triggers` · `functions_list_triggers`</sub>

## `digitalocean.functionsCreateTrigger`

Create Trigger

```ts
digitalocean.functionsCreateTrigger(input: {
  /** The trigger's unique name within the namespace. */
  name: string;
  /** Name of function(action) that exists in the given namespace. */
  function: string;
  /** One of different type of triggers. Currently only SCHEDULED is supported. */
  type: string;
  /** Indicates weather the trigger is paused or unpaused. */
  is_enabled: boolean;
  scheduled_details: ScheduledDetails;
  /** The ID of the namespace to be managed. */
  namespace_id: string;
}): Promise<{ trigger?: TriggerInfo }>
```

<sub>`POST /v2/functions/namespaces/{namespace_id}/triggers` · `functions_create_trigger`</sub>

## `digitalocean.functionsDeleteTrigger`

Delete Trigger

```ts
digitalocean.functionsDeleteTrigger(input: {
  /** The ID of the namespace to be managed. */
  namespace_id: string;
  /** The name of the trigger to be managed. */
  trigger_name: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/functions/namespaces/{namespace_id}/triggers/{trigger_name}` · `functions_delete_trigger`</sub>

## `digitalocean.functionsGetTrigger`

Get Trigger

```ts
digitalocean.functionsGetTrigger(input: {
  /** The ID of the namespace to be managed. */
  namespace_id: string;
  /** The name of the trigger to be managed. */
  trigger_name: string;
}): Promise<{ trigger?: TriggerInfo }>
```

<sub>`GET /v2/functions/namespaces/{namespace_id}/triggers/{trigger_name}` · `functions_get_trigger`</sub>

## `digitalocean.functionsUpdateTrigger`

Update Trigger

```ts
digitalocean.functionsUpdateTrigger(input: {
  /** Indicates weather the trigger is paused or unpaused. */
  is_enabled?: boolean;
  scheduled_details?: ScheduledDetails;
  /** The ID of the namespace to be managed. */
  namespace_id: string;
  /** The name of the trigger to be managed. */
  trigger_name: string;
}): Promise<{ trigger?: TriggerInfo }>
```

<sub>`PUT /v2/functions/namespaces/{namespace_id}/triggers/{trigger_name}` · `functions_update_trigger`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
