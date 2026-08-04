# Add Ons

8 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.addonsGetApp`

List Available Add-On Applications

```ts
digitalocean.addonsGetApp(): Promise<{ apps?: (AddonsAppInfo)[] }>
```

<sub>`GET /v2/add-ons/apps` · `addons_get_app`</sub>

## `digitalocean.addonsGetAppMetadata`

Get Metadata for an Add-On Application

```ts
digitalocean.addonsGetAppMetadata(input: {
  /** The slug identifier for the application whose metadata is being requested. */
  app_slug: string;
}): Promise<{ metadata?: (AddonsAppMetadata)[] }>
```

<sub>`GET /v2/add-ons/apps/{app_slug}/metadata` · `addons_get_app_metadata`</sub>

## `digitalocean.addonsList`

List all Add-On Resources

```ts
digitalocean.addonsList(): Promise<{ resources?: (AddonsResource)[] }>
```

<sub>`GET /v2/add-ons/saas` · `addons_list`</sub>

## `digitalocean.addonsCreate`

Create/Provision a New Add-on Resource

```ts
digitalocean.addonsCreate(input: {
  /** The slug identifier for the application associated with the resource. */
  app_slug: string;
  /** The slug identifier for the plan associated with the resource. */
  plan_slug: string;
  /** The name of the addon resource. */
  name: string;
  /** Metadata associated with the resource, set by the user. Metadata expected varies per app, and can be verified with a GET request to "/v2/add-ons/apps/{app_slug}/metadata" */
  metadata: (AddonsResourceMetadata)[];
  /** ID of the droplet to be linked to this resource, if applicable. */
  linked_droplet_id?: number;
  /** UUID of the fleet/project to which this resource will belong. */
  fleet_uuid?: string;
}): Promise<{ resource?: AddonsResource }>
```

<sub>`POST /v2/add-ons/saas` · `addons_create`</sub>

## `digitalocean.addonsDelete`

Delete/Deprovision an Add-on Resource

```ts
digitalocean.addonsDelete(input: {
  /** A unique identifier for the add-on resource. */
  resource_uuid: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/add-ons/saas/{resource_uuid}` · `addons_delete`</sub>

## `digitalocean.addonsGet`

Get details on an Add-On Resource

```ts
digitalocean.addonsGet(input: {
  /** The UUID of the add-on resource to retrieve. */
  resource_uuid: string;
}): Promise<{ resource?: AddonsResource }>
```

<sub>`GET /v2/add-ons/saas/{resource_uuid}` · `addons_get`</sub>

## `digitalocean.addonsPatch`

Update the name for an Add-On Resource

```ts
digitalocean.addonsPatch(input: {
  /** The new name for the add-on resource. */
  name: string;
  /** The UUID of the add-on resource to rename. */
  resource_uuid: string;
}): Promise<{ resource?: AddonsResource }>
```

<sub>`PATCH /v2/add-ons/saas/{resource_uuid}` · `addons_patch`</sub>

## `digitalocean.addonsPatchPlan`

Update the plan for an Add-On Resource

```ts
digitalocean.addonsPatchPlan(input: {
  /** The slug identifier for the new plan to apply to the add-on resource. */
  plan_slug: string;
  /** The UUID of the add-on resource to update. */
  resource_uuid: string;
}): Promise<{ resource?: AddonsResource }>
```

<sub>`PATCH /v2/add-ons/saas/{resource_uuid}/plan` · `addons_patch_plan`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
