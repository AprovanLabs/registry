# Vector Stores

16 operations · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.listVectorStores`

Returns a list of vector stores. — [Provider docs](https://help.openai.com/)

```ts
openai.listVectorStores(input: {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
  limit?: number;
  /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  */
  order?: "asc" | "desc";
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
  after?: string;
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  */
  before?: string;
}): Promise<ListVectorStoresResponse>
```

<sub>`GET /vector_stores` · `listVectorStores`</sub>

## `openai.createVectorStore`

Create a vector store. — [Provider docs](https://help.openai.com/)

```ts
openai.createVectorStore(input: {
  /** A list of [File](/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files. */
  file_ids?: (string)[];
  /** The name of the vector store. */
  name?: string;
  expires_after?: VectorStoreExpirationAfter;
  /** The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. Only applicable if `file_ids` is non-empty. */
  chunking_strategy?: AutoChunkingStrategyRequestParam | StaticChunkingStrategyRequestParam;
  metadata?: Metadata;
}): Promise<VectorStoreObject>
```

<sub>`POST /vector_stores` · `createVectorStore`</sub>

## `openai.deleteVectorStore`

Delete a vector store. — [Provider docs](https://help.openai.com/)

```ts
openai.deleteVectorStore(input: {
  /** The ID of the vector store to delete. */
  vector_store_id: string;
}): Promise<DeleteVectorStoreResponse>
```

<sub>`DELETE /vector_stores/{vector_store_id}` · `deleteVectorStore`</sub>

## `openai.getVectorStore`

Retrieves a vector store. — [Provider docs](https://help.openai.com/)

```ts
openai.getVectorStore(input: {
  /** The ID of the vector store to retrieve. */
  vector_store_id: string;
}): Promise<VectorStoreObject>
```

<sub>`GET /vector_stores/{vector_store_id}` · `getVectorStore`</sub>

## `openai.modifyVectorStore`

Modifies a vector store. — [Provider docs](https://help.openai.com/)

```ts
openai.modifyVectorStore(input: {
  /** The name of the vector store. */
  name?: string | null;
  expires_after?: VectorStoreExpirationAfter & unknown;
  metadata?: Metadata;
  /** The ID of the vector store to modify. */
  vector_store_id: string;
}): Promise<VectorStoreObject>
```

<sub>`POST /vector_stores/{vector_store_id}` · `modifyVectorStore`</sub>

## `openai.createVectorStoreFileBatch`

Create a vector store file batch. — [Provider docs](https://help.openai.com/)

```ts
openai.createVectorStoreFileBatch(input: {
  /** A list of [File](/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files. */
  file_ids: (string)[];
  chunking_strategy?: ChunkingStrategyRequestParam;
  attributes?: VectorStoreFileAttributes;
  /** The ID of the vector store for which to create a File Batch.  */
  vector_store_id: string;
}): Promise<VectorStoreFileBatchObject>
```

<sub>`POST /vector_stores/{vector_store_id}/file_batches` · `createVectorStoreFileBatch`</sub>

## `openai.getVectorStoreFileBatch`

Retrieves a vector store file batch. — [Provider docs](https://help.openai.com/)

```ts
openai.getVectorStoreFileBatch(input: {
  /** The ID of the vector store that the file batch belongs to. */
  vector_store_id: string;
  /** The ID of the file batch being retrieved. */
  batch_id: string;
}): Promise<VectorStoreFileBatchObject>
```

<sub>`GET /vector_stores/{vector_store_id}/file_batches/{batch_id}` · `getVectorStoreFileBatch`</sub>

## `openai.cancelVectorStoreFileBatch`

Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible. — [Provider docs](https://help.openai.com/)

```ts
openai.cancelVectorStoreFileBatch(input: {
  /** The ID of the vector store that the file batch belongs to. */
  vector_store_id: string;
  /** The ID of the file batch to cancel. */
  batch_id: string;
}): Promise<VectorStoreFileBatchObject>
```

<sub>`POST /vector_stores/{vector_store_id}/file_batches/{batch_id}/cancel` · `cancelVectorStoreFileBatch`</sub>

## `openai.listFilesInVectorStoreBatch`

Returns a list of vector store files in a batch. — [Provider docs](https://help.openai.com/)

```ts
openai.listFilesInVectorStoreBatch(input: {
  /** The ID of the vector store that the files belong to. */
  vector_store_id: string;
  /** The ID of the file batch that the files belong to. */
  batch_id: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
  limit?: number;
  /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  */
  order?: "asc" | "desc";
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
  after?: string;
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  */
  before?: string;
  /** Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`. */
  filter?: "in_progress" | "completed" | "failed" | "cancelled";
}): Promise<ListVectorStoreFilesResponse>
```

<sub>`GET /vector_stores/{vector_store_id}/file_batches/{batch_id}/files` · `listFilesInVectorStoreBatch`</sub>

## `openai.listVectorStoreFiles`

Returns a list of vector store files. — [Provider docs](https://help.openai.com/)

```ts
openai.listVectorStoreFiles(input: {
  /** The ID of the vector store that the files belong to. */
  vector_store_id: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
  limit?: number;
  /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  */
  order?: "asc" | "desc";
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
  after?: string;
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  */
  before?: string;
  /** Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`. */
  filter?: "in_progress" | "completed" | "failed" | "cancelled";
}): Promise<ListVectorStoreFilesResponse>
```

<sub>`GET /vector_stores/{vector_store_id}/files` · `listVectorStoreFiles`</sub>

## `openai.createVectorStoreFile`

Create a vector store file by attaching a [File](/docs/api-reference/files) to a [vector store](/docs/api-reference/vector-stores/object). — [Provider docs](https://help.openai.com/)

```ts
openai.createVectorStoreFile(input: {
  /** A [File](/docs/api-reference/files) ID that the vector store should use. Useful for tools like `file_search` that can access files. */
  file_id: string;
  chunking_strategy?: ChunkingStrategyRequestParam;
  attributes?: VectorStoreFileAttributes;
  /** The ID of the vector store for which to create a File.  */
  vector_store_id: string;
}): Promise<VectorStoreFileObject>
```

<sub>`POST /vector_stores/{vector_store_id}/files` · `createVectorStoreFile`</sub>

## `openai.deleteVectorStoreFile`

Delete a vector store file. This will remove the file from the vector store but the file itself will not be deleted. To delete the file, use the [delete file](/docs/api-reference/files/delete) endpoint. — [Provider docs](https://help.openai.com/)

```ts
openai.deleteVectorStoreFile(input: {
  /** The ID of the vector store that the file belongs to. */
  vector_store_id: string;
  /** The ID of the file to delete. */
  file_id: string;
}): Promise<DeleteVectorStoreFileResponse>
```

<sub>`DELETE /vector_stores/{vector_store_id}/files/{file_id}` · `deleteVectorStoreFile`</sub>

## `openai.getVectorStoreFile`

Retrieves a vector store file. — [Provider docs](https://help.openai.com/)

```ts
openai.getVectorStoreFile(input: {
  /** The ID of the vector store that the file belongs to. */
  vector_store_id: string;
  /** The ID of the file being retrieved. */
  file_id: string;
}): Promise<VectorStoreFileObject>
```

<sub>`GET /vector_stores/{vector_store_id}/files/{file_id}` · `getVectorStoreFile`</sub>

## `openai.updateVectorStoreFileAttributes`

Update attributes on a vector store file. — [Provider docs](https://help.openai.com/)

```ts
openai.updateVectorStoreFileAttributes(input: {
  attributes: VectorStoreFileAttributes;
  /** The ID of the vector store the file belongs to. */
  vector_store_id: string;
  /** The ID of the file to update attributes. */
  file_id: string;
}): Promise<VectorStoreFileObject>
```

<sub>`POST /vector_stores/{vector_store_id}/files/{file_id}` · `updateVectorStoreFileAttributes`</sub>

## `openai.retrieveVectorStoreFileContent`

Retrieve the parsed contents of a vector store file. — [Provider docs](https://help.openai.com/)

```ts
openai.retrieveVectorStoreFileContent(input: {
  /** The ID of the vector store. */
  vector_store_id: string;
  /** The ID of the file within the vector store. */
  file_id: string;
}): Promise<VectorStoreFileContentResponse>
```

<sub>`GET /vector_stores/{vector_store_id}/files/{file_id}/content` · `retrieveVectorStoreFileContent`</sub>

## `openai.searchVectorStore`

Search a vector store for relevant chunks based on a query and file attributes filter. — [Provider docs](https://help.openai.com/)

```ts
openai.searchVectorStore(input: {
  /** A query string for a search */
  query: string | (string)[];
  /** Whether to rewrite the natural language query for vector search. */
  rewrite_query?: boolean;
  /** The maximum number of results to return. This number should be between 1 and 50 inclusive. */
  max_num_results?: number;
  /** A filter to apply based on file attributes. */
  filters?: ComparisonFilter | CompoundFilter;
  /** Ranking options for search. */
  ranking_options?: { ranker?: "auto" | "default-2024-11-15"; score_threshold?: number };
  /** The ID of the vector store to search. */
  vector_store_id: string;
}): Promise<VectorStoreSearchResultsPage>
```

<sub>`POST /vector_stores/{vector_store_id}/search` · `searchVectorStore`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
