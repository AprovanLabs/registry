# OrganizationRelationships

5 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getOrganizationRelationships`

Get all relationships for organization

```ts
pipedrive.getOrganizationRelationships(input: {
  /** The ID of the organization to get relationships for */
  org_id: number;
}): Promise<{ success?: boolean } & { data?: ({ id?: number; type?: string; rel_owner_org_id?: { name?: string; people_count?: number; owner_id?: number; address?: string | null; cc_email?: string | null } & { value?: number }; rel_linked_org_id?: { name?: string; people_count?: number; owner_id?: number; address?: string | null; cc_email?: string | null } & { value?: number }; add_time?: string; update_time...>
```

<sub>`GET /organizationRelationships` · `getOrganizationRelationships`</sub>

## `pipedrive.addOrganizationRelationship`

Create an organization relationship

```ts
pipedrive.addOrganizationRelationship(input: {
  /** The ID of the base organization for the returned calculated values */
  org_id?: number;
  /** The type of organization relationship */
  type: "parent" | "related";
  /** The owner of the relationship. If type is `parent`, then the owner is the parent and the linked organization is the daughter. */
  rel_owner_org_id: number;
  /** The linked organization in the relationship. If type is `parent`, then the linked organization is the daughter. */
  rel_linked_org_id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number; type?: string; rel_owner_org_id?: { name?: string; people_count?: number; owner_id?: number; address?: string | null; cc_email?: string | null } & { value?: number }; rel_linked_org_id?: { name?: string; people_count?: number; owner_id?: number; address?: string | null; cc_email?: string | null } & { value?: number }; add_time?: string; update_time?...>
```

<sub>`POST /organizationRelationships` · `addOrganizationRelationship`</sub>

## `pipedrive.deleteOrganizationRelationship`

Delete an organization relationship

```ts
pipedrive.deleteOrganizationRelationship(input: {
  /** The ID of the organization relationship */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number } }>
```

<sub>`DELETE /organizationRelationships/{id}` · `deleteOrganizationRelationship`</sub>

## `pipedrive.getOrganizationRelationship`

Get one organization relationship

```ts
pipedrive.getOrganizationRelationship(input: {
  /** The ID of the organization relationship */
  id: number;
  /** The ID of the base organization for the returned calculated values */
  org_id?: number;
}): Promise<{ success?: boolean } & { data?: { id?: number; type?: string; rel_owner_org_id?: { name?: string; people_count?: number; owner_id?: number; address?: string | null; cc_email?: string | null } & { value?: number }; rel_linked_org_id?: { name?: string; people_count?: number; owner_id?: number; address?: string | null; cc_email?: string | null } & { value?: number }; add_time?: string; update_time?...>
```

<sub>`GET /organizationRelationships/{id}` · `getOrganizationRelationship`</sub>

## `pipedrive.updateOrganizationRelationship`

Update an organization relationship

```ts
pipedrive.updateOrganizationRelationship(input: {
  /** The ID of the base organization for the returned calculated values */
  org_id?: number;
  /** The type of organization relationship */
  type?: "parent" | "related";
  /** The owner of this relationship. If type is `parent`, then the owner is the parent and the linked organization is the daughter. */
  rel_owner_org_id?: number;
  /** The linked organization in this relationship. If type is `parent`, then the linked organization is the daughter. */
  rel_linked_org_id?: number;
  /** The ID of the organization relationship */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number; type?: string; rel_owner_org_id?: { name?: string; people_count?: number; owner_id?: number; address?: string | null; cc_email?: string | null } & { value?: number }; rel_linked_org_id?: { name?: string; people_count?: number; owner_id?: number; address?: string | null; cc_email?: string | null } & { value?: number }; add_time?: string; update_time?...>
```

<sub>`PUT /organizationRelationships/{id}` · `updateOrganizationRelationship`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
