# Roles

5 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getRoles`

Get multiple roles — [Provider docs](https://asana.com/support)

```ts
asana.getRoles(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** The workspace or organization to filter roles on. */
  workspace?: string;
  /** Only return projects whose `archived` field takes on the value of this parameter. */
  archived?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("base_role_type" | "creation_time" | "description" | "is_standard_role" | "modified_at" | "name" | "offset" | "path" | "permissions" | "permissions.allowed_guest_invites" | "permissions.assign_roles" | "permissions.create_and_edit_ai_automations" | "permissions.create_and_edit_ai_teammates" | "permissions.create_app_authorization" | "permissions.create_global_custom_fields" | "permissions.create_goal" | "permissions.create_pat_authorization" | "permissions.create_portfolio" | "permissions.create_project" | "permissions.create_read_only_link" | "permissions.create_team" | "permissions.download_mobile_attachments" | "permissions.export_project_data" | "permissions.import_data" | "permissions.manage_roles" | "permissions.proactive_ai" | "permissions.share_goal_with_domain" | "permissions.share_portfolios_with_org" | "permissions.share_teams_with_org" | "permissions.standard_ai" | "permissions.task_deletion_policy" | "permissions.upload_attachments" | "permissions.view_public_teams" | "permissions.view_shared_with_org_portfolios" | "permissions.view_shared_with_org_projects" | "permissions.view_shared_with_org_tasks" | "uri" | "workspace" | "workspace.name")[];
}): Promise<{ data?: (RbacRoleCompact)[]; next_page?: NextPage }>
```

<sub>`GET /roles` · `getRoles`</sub>

## `asana.createRole`

Create a role — [Provider docs](https://asana.com/support)

```ts
asana.createRole(input: {
  data?: RbacRoleRequest;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("base_role_type" | "creation_time" | "description" | "is_standard_role" | "modified_at" | "name" | "permissions" | "permissions.allowed_guest_invites" | "permissions.assign_roles" | "permissions.create_and_edit_ai_automations" | "permissions.create_and_edit_ai_teammates" | "permissions.create_app_authorization" | "permissions.create_global_custom_fields" | "permissions.create_goal" | "permissions.create_pat_authorization" | "permissions.create_portfolio" | "permissions.create_project" | "permissions.create_read_only_link" | "permissions.create_team" | "permissions.download_mobile_attachments" | "permissions.export_project_data" | "permissions.import_data" | "permissions.manage_roles" | "permissions.proactive_ai" | "permissions.share_goal_with_domain" | "permissions.share_portfolios_with_org" | "permissions.share_teams_with_org" | "permissions.standard_ai" | "permissions.task_deletion_policy" | "permissions.upload_attachments" | "permissions.view_public_teams" | "permissions.view_shared_with_org_portfolios" | "permissions.view_shared_with_org_projects" | "permissions.view_shared_with_org_tasks" | "workspace" | "workspace.name")[];
}): Promise<{ data?: RbacRoleResponse }>
```

<sub>`POST /roles` · `createRole`</sub>

## `asana.deleteRole`

Delete a role — [Provider docs](https://asana.com/support)

```ts
asana.deleteRole(input: {
  /** Globally unique identifier for the role. */
  role_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /roles/{role_gid}` · `deleteRole`</sub>

## `asana.getRole`

Get a role — [Provider docs](https://asana.com/support)

```ts
asana.getRole(input: {
  /** Globally unique identifier for the role. */
  role_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("base_role_type" | "creation_time" | "description" | "is_standard_role" | "modified_at" | "name" | "permissions" | "permissions.allowed_guest_invites" | "permissions.assign_roles" | "permissions.create_and_edit_ai_automations" | "permissions.create_and_edit_ai_teammates" | "permissions.create_app_authorization" | "permissions.create_global_custom_fields" | "permissions.create_goal" | "permissions.create_pat_authorization" | "permissions.create_portfolio" | "permissions.create_project" | "permissions.create_read_only_link" | "permissions.create_team" | "permissions.download_mobile_attachments" | "permissions.export_project_data" | "permissions.import_data" | "permissions.manage_roles" | "permissions.proactive_ai" | "permissions.share_goal_with_domain" | "permissions.share_portfolios_with_org" | "permissions.share_teams_with_org" | "permissions.standard_ai" | "permissions.task_deletion_policy" | "permissions.upload_attachments" | "permissions.view_public_teams" | "permissions.view_shared_with_org_portfolios" | "permissions.view_shared_with_org_projects" | "permissions.view_shared_with_org_tasks" | "workspace" | "workspace.name")[];
}): Promise<{ data?: RbacRoleResponse }>
```

<sub>`GET /roles/{role_gid}` · `getRole`</sub>

## `asana.updateRole`

Update a role — [Provider docs](https://asana.com/support)

```ts
asana.updateRole(input: {
  data?: RbacRoleUpdateRequest;
  /** Globally unique identifier for the role. */
  role_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("base_role_type" | "creation_time" | "description" | "is_standard_role" | "modified_at" | "name" | "permissions" | "permissions.allowed_guest_invites" | "permissions.assign_roles" | "permissions.create_and_edit_ai_automations" | "permissions.create_and_edit_ai_teammates" | "permissions.create_app_authorization" | "permissions.create_global_custom_fields" | "permissions.create_goal" | "permissions.create_pat_authorization" | "permissions.create_portfolio" | "permissions.create_project" | "permissions.create_read_only_link" | "permissions.create_team" | "permissions.download_mobile_attachments" | "permissions.export_project_data" | "permissions.import_data" | "permissions.manage_roles" | "permissions.proactive_ai" | "permissions.share_goal_with_domain" | "permissions.share_portfolios_with_org" | "permissions.share_teams_with_org" | "permissions.standard_ai" | "permissions.task_deletion_policy" | "permissions.upload_attachments" | "permissions.view_public_teams" | "permissions.view_shared_with_org_portfolios" | "permissions.view_shared_with_org_projects" | "permissions.view_shared_with_org_tasks" | "workspace" | "workspace.name")[];
}): Promise<{ data?: RbacRoleResponse }>
```

<sub>`PUT /roles/{role_gid}` · `updateRole`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
