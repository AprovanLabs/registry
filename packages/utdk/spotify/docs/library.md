# Library

3 operations · `@utdk/spotify`

```ts
import spotify from "@utdk/spotify";
```

## `spotify.removeLibraryItems`

Remove Items from Library — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.removeLibraryItems(input: {
  /** A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 40 URIs.  Supported URI types: - `spotify:track:{id}` - `spotify:album:{id}` - `spotify:episode:{id}` - `spotify:show:{id}` - `spotify:audiobook:{id}` - `spotify:user:{id}` - `spotify:playlist:{id}`  */
  uris: string;
}): Promise<undefined>
```

<sub>`DELETE /me/library` · `remove-library-items`</sub>

## `spotify.saveLibraryItems`

Save Items to Library — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.saveLibraryItems(input: {
  /** A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 40 URIs.  Supported URI types: - `spotify:track:{id}` - `spotify:album:{id}` - `spotify:episode:{id}` - `spotify:show:{id}` - `spotify:audiobook:{id}` - `spotify:user:{id}` - `spotify:playlist:{id}`  */
  uris: string;
}): Promise<undefined>
```

<sub>`PUT /me/library` · `save-library-items`</sub>

## `spotify.checkLibraryContains`

Check User's Saved Items — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.checkLibraryContains(input: {
  /** A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 40 URIs.  Supported URI types: - `spotify:track:{id}` - `spotify:album:{id}` - `spotify:episode:{id}` - `spotify:show:{id}` - `spotify:audiobook:{id}` - `spotify:artist:{id}` - `spotify:user:{id}` - `spotify:playlist:{id}`  */
  uris: string;
}): Promise<(boolean)[]>
```

<sub>`GET /me/library/contains` · `check-library-contains`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
