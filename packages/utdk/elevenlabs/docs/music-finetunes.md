# Music Finetunes

5 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.getFinetunes`

Get Music Finetunes

```ts
elevenlabs.getFinetunes(input: {
  /** Used for fetching the next page. Cursor is returned in the response. */
  cursor?: string | null;
  /** How many finetunes to return. Max 100, default 50. */
  page_size?: number;
  /** Filter by visibility. 'private' returns private finetunes; 'workspace' returns workspace-shared finetunes; 'public' returns public finetunes, which are currently ElevenLabs curated finetunes. Omit to return all accessible finetunes. */
  visibility?: FinetuneVisibility | null;
  /** Filter by creator. 'self' returns finetunes you created; 'workspace' returns finetunes created by workspace teammates; 'elevenlabs' returns ElevenLabs curated finetunes. Omit to return finetunes from all creators. */
  created_by?: FinetuneCreatedBy | null;
  /** Sort by field (created_at or name) */
  sort?: "created_at" | "name";
  /** Sort direction (asc or desc) */
  sort_direction?: "asc" | "desc";
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<MusicFinetunePageResponseModel>
```

<sub>`GET /v1/music/finetunes` · `get_finetunes`</sub>

## `elevenlabs.createFinetune`

Create Music Finetune

```ts
elevenlabs.createFinetune(input: {
  /** Name for the finetune (5-200 characters). */
  name: string;
  /** Primary musical genre of the finetune. */
  primary_genre: string;
  /** Audio files to train on. */
  files?: (string)[];
  /** Tags to associate with the finetune. */
  tags?: (string)[];
  /** Finetune visibility. Only 'private' and 'workspace' can be set. */
  visibility?: "private" | "workspace" | null;
  /** The model to create a finetune for. */
  model_id?: "music_v1" | "music_v2";
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<MusicFinetuneResponseModel>
```

<sub>`POST /v1/music/finetunes` · `create_finetune`</sub>

## `elevenlabs.deleteFinetune`

Delete Music Finetune

```ts
elevenlabs.deleteFinetune(input: {
  finetune_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<MusicFinetuneResponseModel>
```

<sub>`DELETE /v1/music/finetunes/{finetune_id}` · `delete_finetune`</sub>

## `elevenlabs.getFinetune`

Get Music Finetune

```ts
elevenlabs.getFinetune(input: {
  finetune_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<MusicFinetuneResponseModel>
```

<sub>`GET /v1/music/finetunes/{finetune_id}` · `get_finetune`</sub>

## `elevenlabs.updateFinetune`

Update Music Finetune

```ts
elevenlabs.updateFinetune(input: {
  /** Updated name for the finetune. */
  name?: string | null;
  /** Replacement set of tags. */
  tags?: (string)[] | null;
  /** Updated primary musical genre. */
  primary_genre?: string | null;
  /** Finetune visibility. Only 'private' and 'workspace' can be set. */
  visibility?: "private" | "workspace" | null;
  finetune_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<MusicFinetuneResponseModel>
```

<sub>`PATCH /v1/music/finetunes/{finetune_id}` · `update_finetune`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
