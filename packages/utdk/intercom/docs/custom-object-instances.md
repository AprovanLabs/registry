# Custom Object Instances

5 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.deleteCustomObjectInstancesById`

Delete a Custom Object Instance by External ID — [Provider docs](https://developers.intercom.com)

```ts
intercom.deleteCustomObjectInstancesById(input: {
  /** The unique identifier of the custom object type that defines the structure of the custom object instance. */
  custom_object_type_identifier: string;
  /** The unique identifier for the instance in the external system it originated from. */
  external_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<CustomObjectInstanceDeleted>
```

<sub>`DELETE /custom_object_instances/{custom_object_type_identifier}` · `deleteCustomObjectInstancesById`</sub>

## `intercom.getCustomObjectInstancesByExternalId`

Get Custom Object Instance by External ID — [Provider docs](https://developers.intercom.com)

```ts
intercom.getCustomObjectInstancesByExternalId(input: {
  /** The unique identifier of the custom object type that defines the structure of the custom object instance. */
  custom_object_type_identifier: string;
  /** The unique identifier for the instance in the external system it originated from. */
  external_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<CustomObjectInstance>
```

<sub>`GET /custom_object_instances/{custom_object_type_identifier}` · `getCustomObjectInstancesByExternalId`</sub>

## `intercom.createCustomObjectInstances`

Create or Update a Custom Object Instance — [Provider docs](https://developers.intercom.com)

```ts
intercom.createCustomObjectInstances(input: {
  /** A unique identifier for the Custom Object instance in the external system it originated from. */
  external_id?: string;
  /** The time when the Custom Object instance was created in the external system it originated from. */
  external_created_at?: number | null;
  /** The time when the Custom Object instance was last updated in the external system it originated from. */
  external_updated_at?: number | null;
  /** The custom attributes which are set for the Custom Object instance. */
  custom_attributes?: { [key: string]: string | undefined } | null;
  /** The unique identifier of the custom object type that defines the structure of the custom object instance. */
  custom_object_type_identifier: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<CustomObjectInstance>
```

<sub>`POST /custom_object_instances/{custom_object_type_identifier}` · `createCustomObjectInstances`</sub>

## `intercom.deleteCustomObjectInstancesByExternalId`

Delete a Custom Object Instance by ID — [Provider docs](https://developers.intercom.com)

```ts
intercom.deleteCustomObjectInstancesByExternalId(input: {
  /** The unique identifier of the custom object type that defines the structure of the custom object instance. */
  custom_object_type_identifier: string;
  /** The Intercom defined id of the custom object instance */
  custom_object_instance_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<CustomObjectInstanceDeleted>
```

<sub>`DELETE /custom_object_instances/{custom_object_type_identifier}/{custom_object_instance_id}` · `deleteCustomObjectInstancesByExternalId`</sub>

## `intercom.getCustomObjectInstancesById`

Get Custom Object Instance by ID — [Provider docs](https://developers.intercom.com)

```ts
intercom.getCustomObjectInstancesById(input: {
  /** The unique identifier of the custom object type that defines the structure of the custom object instance. */
  custom_object_type_identifier: string;
  /** The id or external_id of the custom object instance */
  custom_object_instance_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<CustomObjectInstance>
```

<sub>`GET /custom_object_instances/{custom_object_type_identifier}/{custom_object_instance_id}` · `getCustomObjectInstancesById`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
