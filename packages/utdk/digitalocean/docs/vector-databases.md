# Vector Databases

11 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.vectorDatabasesList`

List All Vector Databases

```ts
digitalocean.vectorDatabasesList(input: {
  page?: number;
  per_page?: number;
}): Promise<VectordbListVectorDBsResponse>
```

<sub>`GET /v2/vector-databases` · `vectorDatabases_list`</sub>

## `digitalocean.vectorDatabasesCreate`

Create a New Vector Database

```ts
digitalocean.vectorDatabasesCreate(input: {
  /** Required. Human-readable name for the database. */
  name?: string;
  /** Required. ID of the project to create the vector database in. */
  project_id?: string;
  /** Required. Region slug where the database will be provisioned. */
  region?: string;
  /** Required. Resource tier: small, medium, or large. */
  size?: string;
  /** A set of arbitrary tags to organize your vector database */
  tags?: (string)[];
}): Promise<VectordbCreateVectorDbResponse>
```

<sub>`POST /v2/vector-databases` · `vectorDatabases_create`</sub>

## `digitalocean.vectorDatabasesDelete`

Delete a Vector Database

```ts
digitalocean.vectorDatabasesDelete(input: {
  /** ID of the vector database. */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/vector-databases/{id}` · `vectorDatabases_delete`</sub>

## `digitalocean.vectorDatabasesGet`

Retrieve an Existing Vector Database

```ts
digitalocean.vectorDatabasesGet(input: {
  /** ID of the vector database. */
  id: string;
}): Promise<VectordbGetVectorDbResponse>
```

<sub>`GET /v2/vector-databases/{id}` · `vectorDatabases_get`</sub>

## `digitalocean.vectorDatabasesUpdate`

Update a Vector Database

```ts
digitalocean.vectorDatabasesUpdate(input: {
  config?: VectordbVectorDbConfig;
  /** ID of the vector database. */
  id?: string;
  /** Optional. New project UUID to assign the database to. */
  project_id?: string;
}, options: { params: { id: string } }): Promise<VectordbUpdateVectorDbResponse>
```

<sub>`PUT /v2/vector-databases/{id}` · `vectorDatabases_update`</sub>

## `digitalocean.vectorDatabasesListBackups`

List Backups for a Vector Database

```ts
digitalocean.vectorDatabasesListBackups(input: {
  /** Required. ID of the vector database. */
  id: string;
}): Promise<VectordbListBackupsResponse>
```

<sub>`GET /v2/vector-databases/{id}/backups` · `vectorDatabases_list_backups`</sub>

## `digitalocean.vectorDatabasesGetRestoreStatus`

Retrieve the Status of a Restore

```ts
digitalocean.vectorDatabasesGetRestoreStatus(input: {
  /** Required. ID of the vector database. */
  id: string;
  /** Required. ID of the backup being restored. */
  backup_id: string;
}): Promise<VectordbGetRestoreStatusResponse>
```

<sub>`GET /v2/vector-databases/{id}/backups/{backup_id}/restore` · `vectorDatabases_get_restore_status`</sub>

## `digitalocean.vectorDatabasesPostRestoreBackup`

Restore a Vector Database from a Backup

```ts
digitalocean.vectorDatabasesPostRestoreBackup(input: {
  /** Required. ID of the backup to restore from. */
  backup_id?: string;
  /** Required. ID of the vector database. */
  id?: string;
}, options: { params: { id: string; backup_id: string } }): Promise<VectordbRestoreBackupResponse>
```

<sub>`POST /v2/vector-databases/{id}/backups/{backup_id}/restore` · `vectorDatabases_post_restore_backup`</sub>

## `digitalocean.vectorDatabasesGetCredentials`

Retrieve Admin Credentials for a Vector Database

```ts
digitalocean.vectorDatabasesGetCredentials(input: {
  /** ID of the vector database. */
  id: string;
}): Promise<VectordbGetVectorDbAdminCredentialsResponse>
```

<sub>`GET /v2/vector-databases/{id}/credentials` · `vectorDatabases_get_credentials`</sub>

## `digitalocean.vectorDatabasesPostResize`

Resize a Vector Database

```ts
digitalocean.vectorDatabasesPostResize(input: {
  /** Required. ID of the vector database to resize. */
  id?: string;
  /** Required. Target resource tier: small, medium, or large. */
  size?: string;
}, options: { params: { id: string } }): Promise<VectordbResizeVectorDbResponse>
```

<sub>`POST /v2/vector-databases/{id}/resize` · `vectorDatabases_post_resize`</sub>

## `digitalocean.vectorDatabasesUpdateTags`

Update Tags on a Vector Database

```ts
digitalocean.vectorDatabasesUpdateTags(input: {
  /** Required. ID of the vector database to update tags for. */
  id?: string;
  /** Tags to set on the vector database. Replaces all existing tags. */
  tags?: (string)[];
}, options: { params: { id: string } }): Promise<VectordbUpdateVectorDbTagsResponse>
```

<sub>`PUT /v2/vector-databases/{id}/tags` · `vectorDatabases_update_tags`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
