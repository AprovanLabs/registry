# Streamlit Apps

15 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.streamlitAppsList`

List streamlit apps

```ts
posthog.streamlitAppsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ created_by?: { id: number; uuid: string; distinct_id: string | null; first_name: string; last_name: string; email: string; is_email_verified: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization: string | null } | null; id: string; short_id: string; name: string; description: string; c...>
```

<sub>`GET /api/projects/{project_id}/streamlit_apps/` · `streamlit_apps_list`</sub>

## `posthog.streamlitAppsCreate`

Create a streamlit app

```ts
posthog.streamlitAppsCreate(): Promise<{ created_by?: { id: number; uuid: string; distinct_id: string | null; first_name: string; last_name: string; email: string; is_email_verified: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization: string | null } | null; active_version?: { created_by?: { id: number; uuid: string; distinct_id: string | null; first_name: string; last_name: string; email: string;...>
```

<sub>`POST /api/projects/{project_id}/streamlit_apps/` · `streamlit_apps_create`</sub>

## `posthog.streamlitAppsDestroy`

Delete a streamlit app

```ts
posthog.streamlitAppsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/streamlit_apps/{short_id}/` · `streamlit_apps_destroy`</sub>

## `posthog.streamlitAppsRetrieve`

Retrieve a streamlit app

```ts
posthog.streamlitAppsRetrieve(): Promise<{ created_by?: { id: number; uuid: string; distinct_id: string | null; first_name: string; last_name: string; email: string; is_email_verified: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization: string | null } | null; active_version?: { created_by?: { id: number; uuid: string; distinct_id: string | null; first_name: string; last_name: string; email: string;...>
```

<sub>`GET /api/projects/{project_id}/streamlit_apps/{short_id}/` · `streamlit_apps_retrieve`</sub>

## `posthog.streamlitAppsPartialUpdate`

Partially update a streamlit app

```ts
posthog.streamlitAppsPartialUpdate(): Promise<{ created_by?: { id: number; uuid: string; distinct_id: string | null; first_name: string; last_name: string; email: string; is_email_verified: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization: string | null } | null; active_version?: { created_by?: { id: number; uuid: string; distinct_id: string | null; first_name: string; last_name: string; email: string;...>
```

<sub>`PATCH /api/projects/{project_id}/streamlit_apps/{short_id}/` · `streamlit_apps_partial_update`</sub>

## `posthog.streamlitAppsUpdate`

Update a streamlit app

```ts
posthog.streamlitAppsUpdate(): Promise<{ created_by?: { id: number; uuid: string; distinct_id: string | null; first_name: string; last_name: string; email: string; is_email_verified: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization: string | null } | null; active_version?: { created_by?: { id: number; uuid: string; distinct_id: string | null; first_name: string; last_name: string; email: string;...>
```

<sub>`PUT /api/projects/{project_id}/streamlit_apps/{short_id}/` · `streamlit_apps_update`</sub>

## `posthog.streamlitAppsActivateVersionCreate`

Activate an existing app version

```ts
posthog.streamlitAppsActivateVersionCreate(): Promise<{ active_version: { created_by?: { id: number; uuid: string; distinct_id: string | null; first_name: string; last_name: string; email: string; is_email_verified: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization: string | null } | null; id: string; version_number: number; zip_hash: string; snapshot_id: string | null; created_at: string } }>
```

<sub>`POST /api/projects/{project_id}/streamlit_apps/{short_id}/activate_version/` · `streamlit_apps_activate_version_create`</sub>

## `posthog.streamlitAppsConnectInfoRetrieve`

Get iframe connection info for a running app

```ts
posthog.streamlitAppsConnectInfoRetrieve(): Promise<{ iframe_url: string; expires_in: number }>
```

<sub>`GET /api/projects/{project_id}/streamlit_apps/{short_id}/connect_info/` · `streamlit_apps_connect_info_retrieve`</sub>

## `posthog.streamlitAppsCreateVersionFromSourceCreate`

Create an app version from source code

```ts
posthog.streamlitAppsCreateVersionFromSourceCreate(): Promise<{ created_by?: { id: number; uuid: string; distinct_id: string | null; first_name: string; last_name: string; email: string; is_email_verified: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization: string | null } | null; id: string; version_number: number; zip_hash: string; snapshot_id: string | null; created_at: string }>
```

<sub>`POST /api/projects/{project_id}/streamlit_apps/{short_id}/create_version_from_source/` · `streamlit_apps_create_version_from_source_create`</sub>

## `posthog.streamlitAppsRestartCreate`

Restart the app sandbox

```ts
posthog.streamlitAppsRestartCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/streamlit_apps/{short_id}/restart/` · `streamlit_apps_restart_create`</sub>

## `posthog.streamlitAppsStartCreate`

Start the app sandbox

```ts
posthog.streamlitAppsStartCreate(): Promise<{ created_by?: { id: number; uuid: string; distinct_id: string | null; first_name: string; last_name: string; email: string; is_email_verified: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization: string | null } | null; active_version?: { created_by?: { id: number; uuid: string; distinct_id: string | null; first_name: string; last_name: string; email: string;...>
```

<sub>`POST /api/projects/{project_id}/streamlit_apps/{short_id}/start/` · `streamlit_apps_start_create`</sub>

## `posthog.streamlitAppsStatusRetrieve`

Get app sandbox status

```ts
posthog.streamlitAppsStatusRetrieve(): Promise<{ status: string; restart_count: number; last_error: string; started_at: string | null; last_activity_at: string | null; version_number?: number | null }>
```

<sub>`GET /api/projects/{project_id}/streamlit_apps/{short_id}/status/` · `streamlit_apps_status_retrieve`</sub>

## `posthog.streamlitAppsStopCreate`

Stop the app sandbox

```ts
posthog.streamlitAppsStopCreate(): Promise<{ created_by?: { id: number; uuid: string; distinct_id: string | null; first_name: string; last_name: string; email: string; is_email_verified: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization: string | null } | null; active_version?: { created_by?: { id: number; uuid: string; distinct_id: string | null; first_name: string; last_name: string; email: string;...>
```

<sub>`POST /api/projects/{project_id}/streamlit_apps/{short_id}/stop/` · `streamlit_apps_stop_create`</sub>

## `posthog.streamlitAppsUploadVersionCreate`

Upload a new app version

```ts
posthog.streamlitAppsUploadVersionCreate(): Promise<{ created_by?: { id: number; uuid: string; distinct_id: string | null; first_name: string; last_name: string; email: string; is_email_verified: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization: string | null } | null; id: string; version_number: number; zip_hash: string; snapshot_id: string | null; created_at: string }>
```

<sub>`POST /api/projects/{project_id}/streamlit_apps/{short_id}/upload_version/` · `streamlit_apps_upload_version_create`</sub>

## `posthog.streamlitAppsVersionsRetrieve`

List app versions

```ts
posthog.streamlitAppsVersionsRetrieve(): Promise<{ results: ({ created_by?: { id: number; uuid: string; distinct_id: string | null; first_name: string; last_name: string; email: string; is_email_verified: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization: string | null } | null; id: string; version_number: number; zip_hash: string; snapshot_id: string | null; created_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/streamlit_apps/{short_id}/versions/` · `streamlit_apps_versions_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
