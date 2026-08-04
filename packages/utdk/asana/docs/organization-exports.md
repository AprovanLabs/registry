# Organization Exports

2 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.createOrganizationExport`

Create an organization export request — [Provider docs](https://asana.com/support)

```ts
asana.createOrganizationExport(input: {
  data?: OrganizationExportRequest;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_at" | "download_url" | "organization" | "organization.name" | "state")[];
}): Promise<{ data?: OrganizationExportResponse }>
```

<sub>`POST /organization_exports` · `createOrganizationExport`</sub>

## `asana.getOrganizationExport`

Get details on an org export request — [Provider docs](https://asana.com/support)

```ts
asana.getOrganizationExport(input: {
  /** Globally unique identifier for the organization export. */
  organization_export_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_at" | "download_url" | "organization" | "organization.name" | "state")[];
}): Promise<{ data?: OrganizationExportResponse }>
```

<sub>`GET /organization_exports/{organization_export_gid}` · `getOrganizationExport`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
