# Network Device Monitoring

7 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listDevices`

Get the list of devices — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listDevices(input: {
  /** Size for a given page. The maximum allowed value is 500. Defaults to 50. */
  "page[size]"?: number;
  /** Specific page number to return. Defaults to 0. */
  "page[number]"?: number;
  /** The field to sort the devices by. Defaults to `name`. */
  sort?: string;
  /** Filter devices by tag. */
  "filter[tag]"?: string;
}): Promise<ListDevicesResponse>
```

<sub>`GET /api/v2/ndm/devices` · `ListDevices`</sub>

## `datadog.getDevice`

Get the device details — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getDevice(input: {
  /** The id of the device to fetch. */
  device_id: string;
}): Promise<GetDeviceResponse>
```

<sub>`GET /api/v2/ndm/devices/{device_id}` · `GetDevice`</sub>

## `datadog.getInterfaces`

Get the list of interfaces of the device — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getInterfaces(input: {
  /** The ID of the device to get interfaces from. */
  device_id: string;
  /** Whether to get the IP addresses of the interfaces. */
  get_ip_addresses?: boolean;
}): Promise<GetInterfacesResponse>
```

<sub>`GET /api/v2/ndm/interfaces` · `GetInterfaces`</sub>

## `datadog.listDeviceUserTags`

Get the list of tags for a device — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listDeviceUserTags(input: {
  /** The id of the device to fetch tags for. */
  device_id: string;
}): Promise<ListTagsResponse>
```

<sub>`GET /api/v2/ndm/tags/devices/{device_id}` · `ListDeviceUserTags`</sub>

## `datadog.updateDeviceUserTags`

Update the tags for a device — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateDeviceUserTags(input: {
  data?: ListTagsResponseData;
  /** The id of the device to update tags for. */
  device_id: string;
}): Promise<ListTagsResponse>
```

<sub>`PATCH /api/v2/ndm/tags/devices/{device_id}` · `UpdateDeviceUserTags`</sub>

## `datadog.listInterfaceUserTags`

List tags for an interface — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listInterfaceUserTags(input: {
  /** The ID of the interface for which to retrieve tags. */
  interface_id: string;
}): Promise<ListInterfaceTagsResponse>
```

<sub>`GET /api/v2/ndm/tags/interfaces/{interface_id}` · `ListInterfaceUserTags`</sub>

## `datadog.updateInterfaceUserTags`

Update the tags for an interface — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateInterfaceUserTags(input: {
  data?: ListInterfaceTagsResponseData;
  /** The ID of the interface for which to update tags. */
  interface_id: string;
}): Promise<ListInterfaceTagsResponse>
```

<sub>`PATCH /api/v2/ndm/tags/interfaces/{interface_id}` · `UpdateInterfaceUserTags`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
