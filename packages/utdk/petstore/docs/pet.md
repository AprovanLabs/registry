# Pet

8 operations · `@utdk/petstore`

```ts
import petstore from "@utdk/petstore";
```

## `petstore.addPet`

Add a new pet to the store. — [Provider docs](https://swagger.io)

```ts
petstore.addPet(input: {
  id?: number;
  name: string;
  category?: Category;
  photoUrls: (string)[];
  tags?: (Tag)[];
  /** pet status in the store */
  status?: "available" | "pending" | "sold";
}): Promise<Pet>
```

<sub>`POST /pet` · `addPet`</sub>

## `petstore.updatePet`

Update an existing pet. — [Provider docs](https://swagger.io)

```ts
petstore.updatePet(input: {
  id?: number;
  name: string;
  category?: Category;
  photoUrls: (string)[];
  tags?: (Tag)[];
  /** pet status in the store */
  status?: "available" | "pending" | "sold";
}): Promise<Pet>
```

<sub>`PUT /pet` · `updatePet`</sub>

## `petstore.deletePet`

Deletes a pet. — [Provider docs](https://swagger.io)

```ts
petstore.deletePet(input: {
  /** Pet id to delete */
  petId: number;
}, options?: { headers?: { api_key?: string } }): Promise<undefined>
```

<sub>`DELETE /pet/{petId}` · `deletePet`</sub>

## `petstore.getPetById`

Find pet by ID. — [Provider docs](https://swagger.io)

```ts
petstore.getPetById(input: {
  /** ID of pet to return */
  petId: number;
}): Promise<Pet>
```

<sub>`GET /pet/{petId}` · `getPetById`</sub>

## `petstore.updatePetWithForm`

Updates a pet in the store with form data. — [Provider docs](https://swagger.io)

```ts
petstore.updatePetWithForm(input: {
  /** ID of pet that needs to be updated */
  petId: number;
  /** Name of pet that needs to be updated */
  name?: string;
  /** Status of pet that needs to be updated */
  status?: string;
}): Promise<Pet>
```

<sub>`POST /pet/{petId}` · `updatePetWithForm`</sub>

## `petstore.uploadFile`

Uploads an image. — [Provider docs](https://swagger.io)

```ts
petstore.uploadFile(input: {
  body?: string;
  /** ID of pet to update */
  petId: number;
  /** Additional Metadata */
  additionalMetadata?: string;
}): Promise<ApiResponse>
```

<sub>`POST /pet/{petId}/uploadImage` · `uploadFile`</sub>

## `petstore.findPetsByStatus`

Finds Pets by status. — [Provider docs](https://swagger.io)

```ts
petstore.findPetsByStatus(input: {
  /** Status values that need to be considered for filter */
  status: "available" | "pending" | "sold";
}): Promise<(Pet)[]>
```

<sub>`GET /pet/findByStatus` · `findPetsByStatus`</sub>

## `petstore.findPetsByTags`

Finds Pets by tags. — [Provider docs](https://swagger.io)

```ts
petstore.findPetsByTags(input: {
  /** Tags to filter by */
  tags: (string)[];
}): Promise<(Pet)[]>
```

<sub>`GET /pet/findByTags` · `findPetsByTags`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
