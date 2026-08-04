# Session Recordings

4 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.sessionRecordingsSharingList`

```ts
posthog.sessionRecordingsSharingList(): Promise<({ created_at: string; enabled?: boolean; access_token: string | null; settings?: unknown; password_required?: boolean; share_passwords: ({ id: number; created_at: string; note?: string | null; created_by_email: string; is_active: boolean })[]; user_access_level: string | null })[]>
```

<sub>`GET /api/projects/{project_id}/session_recordings/{recording_id}/sharing/` · `session_recordings_sharing_list`</sub>

## `posthog.sessionRecordingsSharingPasswordsCreate`

Create a new password for the sharing configuration.

```ts
posthog.sessionRecordingsSharingPasswordsCreate(): Promise<{ created_at: string; enabled?: boolean; access_token: string | null; settings?: unknown; password_required?: boolean; share_passwords: ({ id: number; created_at: string; note?: string | null; created_by_email: string; is_active: boolean })[]; user_access_level: string | null }>
```

<sub>`POST /api/projects/{project_id}/session_recordings/{recording_id}/sharing/passwords/` · `session_recordings_sharing_passwords_create`</sub>

## `posthog.sessionRecordingsSharingPasswordsDestroy`

Delete a password from the sharing configuration.

```ts
posthog.sessionRecordingsSharingPasswordsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/session_recordings/{recording_id}/sharing/passwords/{password_id}/` · `session_recordings_sharing_passwords_destroy`</sub>

## `posthog.sessionRecordingsSharingRefreshCreate`

```ts
posthog.sessionRecordingsSharingRefreshCreate(): Promise<{ created_at: string; enabled?: boolean; access_token: string | null; settings?: unknown; password_required?: boolean; share_passwords: ({ id: number; created_at: string; note?: string | null; created_by_email: string; is_active: boolean })[]; user_access_level: string | null }>
```

<sub>`POST /api/projects/{project_id}/session_recordings/{recording_id}/sharing/refresh/` · `session_recordings_sharing_refresh_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
