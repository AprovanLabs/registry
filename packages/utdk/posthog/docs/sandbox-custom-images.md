# Sandbox Custom Images

7 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.sandboxCustomImagesList`

API for custom sandbox base images, built on top of the VM sandbox base via an image-builder agent. Custom images only run on the Modal VM runtime, so every action is gated on the `tasks-modal-vm-sandbox` flag (org-enabled with `user_created` in its origin_products payload).

```ts
posthog.sandboxCustomImagesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description: string; repository?: string; private?: boolean; status: string; version: number; modal_image_name: string; spec?: { [key: string]: unknown }; spec_yaml?: string; scan_result?: { [key: string]: unknown }; build_log?: string; error: string; builder_task_id?: string | null; created_by?...>
```

<sub>`GET /api/projects/{project_id}/sandbox_custom_images/` · `sandbox_custom_images_list`</sub>

## `posthog.sandboxCustomImagesCreate`

Create a draft custom image and start its interactive image-builder agent task. The returned builder_task_id points at the conversation.

```ts
posthog.sandboxCustomImagesCreate(): Promise<{ id: string; name: string; description: string; repository?: string; private?: boolean; status: string; version: number; modal_image_name: string; spec?: { [key: string]: unknown }; spec_yaml?: string; scan_result?: { [key: string]: unknown }; build_log?: string; error: string; builder_task_id?: string | null; created_by?: { id: number; uuid: string; distinct_id: string; first_name: string; last...>
```

<sub>`POST /api/projects/{project_id}/sandbox_custom_images/` · `sandbox_custom_images_create`</sub>

## `posthog.sandboxCustomImagesDestroy`

API for custom sandbox base images, built on top of the VM sandbox base via an image-builder agent. Custom images only run on the Modal VM runtime, so every action is gated on the `tasks-modal-vm-sandbox` flag (org-enabled with `user_created` in its origin_products payload).

```ts
posthog.sandboxCustomImagesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/sandbox_custom_images/{id}/` · `sandbox_custom_images_destroy`</sub>

## `posthog.sandboxCustomImagesRetrieve`

API for custom sandbox base images, built on top of the VM sandbox base via an image-builder agent. Custom images only run on the Modal VM runtime, so every action is gated on the `tasks-modal-vm-sandbox` flag (org-enabled with `user_created` in its origin_products payload).

```ts
posthog.sandboxCustomImagesRetrieve(): Promise<{ id: string; name: string; description: string; repository?: string; private?: boolean; status: string; version: number; modal_image_name: string; spec?: { [key: string]: unknown }; spec_yaml?: string; scan_result?: { [key: string]: unknown }; build_log?: string; error: string; builder_task_id?: string | null; created_by?: { id: number; uuid: string; distinct_id: string; first_name: string; last...>
```

<sub>`GET /api/projects/{project_id}/sandbox_custom_images/{id}/` · `sandbox_custom_images_retrieve`</sub>

## `posthog.sandboxCustomImagesPartialUpdate`

Rename or update the description of a custom image. Only mutable metadata (name, description) is editable; the build spec and status are managed by the build flow.

```ts
posthog.sandboxCustomImagesPartialUpdate(): Promise<{ id: string; name: string; description: string; repository?: string; private?: boolean; status: string; version: number; modal_image_name: string; spec?: { [key: string]: unknown }; spec_yaml?: string; scan_result?: { [key: string]: unknown }; build_log?: string; error: string; builder_task_id?: string | null; created_by?: { id: number; uuid: string; distinct_id: string; first_name: string; last...>
```

<sub>`PATCH /api/projects/{project_id}/sandbox_custom_images/{id}/` · `sandbox_custom_images_partial_update`</sub>

## `posthog.sandboxCustomImagesBuildCreate`

Persist the image spec (from the request body or the builder agent's sandbox), run the security scan, and on pass build and publish the image.

```ts
posthog.sandboxCustomImagesBuildCreate(): Promise<{ id: string; name: string; description: string; repository?: string; private?: boolean; status: string; version: number; modal_image_name: string; spec?: { [key: string]: unknown }; spec_yaml?: string; scan_result?: { [key: string]: unknown }; build_log?: string; error: string; builder_task_id?: string | null; created_by?: { id: number; uuid: string; distinct_id: string; first_name: string; last...>
```

<sub>`POST /api/projects/{project_id}/sandbox_custom_images/{id}/build/` · `sandbox_custom_images_build_create`</sub>

## `posthog.sandboxCustomImagesBuilderTaskCreate`

Revive (or reuse) the image's builder agent session. When the previous session has ended, a fresh one is started seeded with the stored spec — use this to update an existing image.

```ts
posthog.sandboxCustomImagesBuilderTaskCreate(): Promise<{ id: string; name: string; description: string; repository?: string; private?: boolean; status: string; version: number; modal_image_name: string; spec?: { [key: string]: unknown }; spec_yaml?: string; scan_result?: { [key: string]: unknown }; build_log?: string; error: string; builder_task_id?: string | null; created_by?: { id: number; uuid: string; distinct_id: string; first_name: string; last...>
```

<sub>`POST /api/projects/{project_id}/sandbox_custom_images/{id}/builder_task/` · `sandbox_custom_images_builder_task_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
