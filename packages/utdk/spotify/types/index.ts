import type { AlbumObject, ArtistObject, AudioAnalysisObject, AudioFeaturesObject, AudiobookObject, CategoryObject, ChapterObject, CurrentlyPlayingContextObject, CursorPagingPlayHistoryObject, CursorPagingSimplifiedArtistObject, DeviceObject, EpisodeObject, ImageObject, PagingArtistDiscographyAlbumObject, PagingArtistObject, PagingFeaturedPlaylistObject, PagingObject, PagingPlaylistObject, PagingPlaylistTrackObject, PagingSavedAlbumObject, PagingSavedEpisodeObject, PagingSavedShowObject, PagingSavedTrackObject, PagingSimplifiedAlbumObject, PagingSimplifiedAudiobookObject, PagingSimplifiedChapterObject, PagingSimplifiedEpisodeObject, PagingSimplifiedShowObject, PagingSimplifiedTrackObject, PagingTrackObject, PlaylistObject, PrivateUserObject, PublicUserObject, QueueObject, RecommendationsObject, ShowObject, SimplifiedShowObject, TrackObject } from "./schemas.js";

export type SpotifyClient = {
  /**
   * Get Album 
   */
  getAnAlbum: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the album.  */
    id: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
  }) => Promise<AlbumObject>;

  /**
   * Get Several Albums 
   */
  getMultipleAlbums: (input: {
    /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.  */
    ids: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
  }) => Promise<{ albums: (AlbumObject)[] }>;

  /**
   * Get Album Tracks 
   */
  getAnAlbumsTracks: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the album.  */
    id: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
    /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
    limit?: number;
    /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
    offset?: number;
  }) => Promise<PagingSimplifiedTrackObject>;

  /**
   * Get Artist 
   */
  getAnArtist: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.  */
    id: string;
  }) => Promise<ArtistObject>;

  /**
   * Get Several Artists 
   */
  getMultipleArtists: (input: {
    /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the artists. Maximum: 50 IDs.  */
    ids: string;
  }) => Promise<{ artists: (ArtistObject)[] }>;

  /**
   * Get Artist's Albums 
   */
  getAnArtistsAlbums: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.  */
    id: string;
    /** A comma-separated list of keywords that will be used to filter the response. If not supplied, all album types will be returned. <br/> Valid values are:<br/>- `album`<br/>- `single`<br/>- `appears_on`<br/>- `compilation`<br/>For example: `include_groups=album,single`.  */
    include_groups?: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
    /** The maximum number of items to return. Default: 5. Minimum: 1. Maximum: 10.  */
    limit?: number;
    /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
    offset?: number;
  }) => Promise<PagingArtistDiscographyAlbumObject>;

  /**
   * Get Artist's Top Tracks 
   */
  getAnArtistsTopTracks: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.  */
    id: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
  }) => Promise<{ tracks: (TrackObject)[] }>;

  /**
   * Get Artist's Related Artists 
   */
  getAnArtistsRelatedArtists: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.  */
    id: string;
  }) => Promise<{ artists: (ArtistObject)[] }>;

  /**
   * Get Show 
   */
  getAShow: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the show.  */
    id: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
  }) => Promise<ShowObject>;

  /**
   * Get Several Shows 
   */
  getMultipleShows: (input: {
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
    /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs.  */
    ids: string;
  }) => Promise<{ shows: (SimplifiedShowObject)[] }>;

  /**
   * Get Show Episodes 
   */
  getAShowsEpisodes: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the show.  */
    id: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
    /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
    limit?: number;
    /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
    offset?: number;
  }) => Promise<PagingSimplifiedEpisodeObject>;

  /**
   * Get Episode 
   */
  getAnEpisode: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode. */
    id: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
  }) => Promise<EpisodeObject>;

  /**
   * Get Several Episodes 
   */
  getMultipleEpisodes: (input: {
    /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the episodes. Maximum: 50 IDs.  */
    ids: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
  }) => Promise<{ episodes: (EpisodeObject)[] }>;

  /**
   * Get an Audiobook 
   */
  getAnAudiobook: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.  */
    id: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
  }) => Promise<AudiobookObject>;

  /**
   * Get Several Audiobooks 
   */
  getMultipleAudiobooks: (input: {
    /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.  */
    ids: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
  }) => Promise<{ audiobooks: (AudiobookObject)[] }>;

  /**
   * Get Audiobook Chapters 
   */
  getAudiobookChapters: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.  */
    id: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
    /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
    limit?: number;
    /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
    offset?: number;
  }) => Promise<PagingSimplifiedChapterObject>;

  /**
   * Get User's Saved Audiobooks 
   */
  getUsersSavedAudiobooks: (input: {
    /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
    limit?: number;
    /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
    offset?: number;
  }) => Promise<PagingSimplifiedAudiobookObject>;

  /**
   * Save Audiobooks for Current User 
   */
  saveAudiobooksUser: (input: {
    /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.  */
    ids: string;
  }) => Promise<undefined>;

  /**
   * Remove User's Saved Audiobooks 
   */
  removeAudiobooksUser: (input: {
    /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.  */
    ids: string;
  }) => Promise<undefined>;

  /**
   * Check User's Saved Audiobooks 
   */
  checkUsersSavedAudiobooks: (input: {
    /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.  */
    ids: string;
  }) => Promise<(boolean)[]>;

  /**
   * Get a Chapter 
   */
  getAChapter: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the chapter.  */
    id: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
  }) => Promise<ChapterObject>;

  /**
   * Get Several Chapters 
   */
  getSeveralChapters: (input: {
    /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU`. Maximum: 50 IDs.  */
    ids: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
  }) => Promise<{ chapters: (ChapterObject)[] }>;

  /**
   * Get Track 
   */
  getTrack: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.  */
    id: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
  }) => Promise<TrackObject>;

  /**
   * Get Several Tracks 
   */
  getSeveralTracks: (input: {
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
    /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.  */
    ids: string;
  }) => Promise<{ tracks: (TrackObject)[] }>;

  /**
   * Search for Item 
   */
  search: (input: {
    /** Your search query.  You can narrow down your search using field filters. The available filters are `album`, `artist`, `track`, `year`, `upc`, `tag:hipster`, `tag:new`, `isrc`, and `genre`. Each field filter only applies to certain result types.  The `artist` and `year` filters can be used while searching albums, artists and tracks. You can filter on a single `year` or a range (e.g. 1955-1960).<br /> The `album` filter can be used while searching albums and tracks.<br /> The `genre` filter can be used while searching artists and tracks.<br /> The `isrc` and `track` filters can be used while searching tracks.<br /> The `upc`, `tag:new` and `tag:hipster` filters can only be used while searching albums. The `tag:new` filter will return albums released in the past two weeks and `tag:hipster` can be used to return only albums with the lowest 10% popularity.<br />  */
    q: string;
    /** A comma-separated list of item types to search across. Search results include hits from all the specified item types. For example: `q=abacab&type=album,track` returns both albums and tracks matching "abacab".  */
    type: ("album" | "artist" | "playlist" | "track" | "show" | "episode" | "audiobook")[];
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
    /** The maximum number of results to return in each item type.  */
    limit?: number;
    /** The index of the first result to return. Use with limit to get the next page of search results.  */
    offset?: number;
    /** If `include_external=audio` is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  */
    include_external?: "audio";
  }) => Promise<{ tracks?: PagingTrackObject; artists?: PagingArtistObject; albums?: PagingSimplifiedAlbumObject; playlists?: PagingPlaylistObject; shows?: PagingSimplifiedShowObject; episodes?: PagingSimplifiedEpisodeObject; audiobooks?: PagingSimplifiedAudiobookObject }>;

  /**
   * Get Current User's Profile 
   */
  getCurrentUsersProfile: () => Promise<PrivateUserObject>;

  /**
   * Get Playlist 
   */
  getPlaylist: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
    playlist_id: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
    /** Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the playlist''s description and URI: `fields=description,uri`. A dot separator can be used to specify non-reoccurring fields, while parentheses can be used to specify reoccurring fields within objects. For example, to get just the added date and user ID of the adder: `fields=tracks.items(added_at,added_by.id)`. Use multiple parentheses to drill down into nested objects, for example: `fields=tracks.items(track(name,href,album(name,href)))`. Fields can be excluded by prefixing them with an exclamation mark, for example: `fields=tracks.items(track(name,href,album(!name,href)))`  */
    fields?: string;
    /** A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/> _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/> In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.  */
    additional_types?: string;
  }) => Promise<PlaylistObject>;

  /**
   * Change Playlist Details 
   */
  changePlaylistDetails: (input: {
    /** The new name for the playlist, for example `"My New Playlist Title"`  */
    name?: string;
    /** The playlist's public/private status (if it should be added to the user's profile or not): `true` the playlist will be public, `false` the playlist will be private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)  */
    public?: boolean;
    /** If `true`, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. <br/> _**Note**: You can only set `collaborative` to `true` on non-public playlists._  */
    collaborative?: boolean;
    /** Value for playlist description as displayed in Spotify Clients and in the Web API.  */
    description?: string;
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
    playlist_id: string;
    [key: string]: unknown;
  }) => Promise<undefined>;

  /**
   * Get Playlist Items [DEPRECATED] 
   */
  getPlaylistsTracks: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
    playlist_id: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
    /** Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the total number of items and the request limit:<br/>`fields=total,limit`<br/>A dot separator can be used to specify non-reoccurring fields, while parentheses can be used to specify reoccurring fields within objects. For example, to get just the added date and user ID of the adder:<br/>`fields=items(added_at,added_by.id)`<br/>Use multiple parentheses to drill down into nested objects, for example:<br/>`fields=items(track(name,href,album(name,href)))`<br/>Fields can be excluded by prefixing them with an exclamation mark, for example:<br/>`fields=items.track.album(!external_urls,images)`  */
    fields?: string;
    /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
    limit?: number;
    /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
    offset?: number;
    /** A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/> _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/> In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.  */
    additional_types?: string;
  }) => Promise<PagingPlaylistTrackObject>;

  /**
   * Add Items to Playlist [DEPRECATED] 
   */
  addTracksToPlaylist: (input: {
    /** A JSON array of the [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}`<br/>A maximum of 100 items can be added in one request. _**Note**: if the `uris` parameter is present in the query string, any URIs listed here in the body will be ignored._  */
    uris?: (string)[];
    /** The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0` ; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}`  */
    position?: number;
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
    playlist_id: string;
    [key: string]: unknown;
  }, options?: { query?: { position?: number; uris?: string } }) => Promise<{ snapshot_id?: string }>;

  /**
   * Update Playlist Items [DEPRECATED] 
   */
  reorderOrReplacePlaylistsTracks: (input: {
    uris?: (string)[];
    /** The position of the first item to be reordered.  */
    range_start?: number;
    /** The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0.  */
    insert_before?: number;
    /** The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2.  */
    range_length?: number;
    /** The playlist's snapshot ID against which you want to make the changes.  */
    snapshot_id?: string;
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
    playlist_id: string;
    [key: string]: unknown;
  }, options?: { query?: { uris?: string } }) => Promise<{ snapshot_id?: string }>;

  /**
   * Remove Playlist Items [DEPRECATED] 
   */
  removeTracksPlaylist: (input: {
    /** An array of objects containing [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) of the tracks or episodes to remove. For example: `{ "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }`. A maximum of 100 objects can be sent at once.  */
    tracks: ({ uri?: string })[];
    /** The playlist's snapshot ID against which you want to make the changes. The API will validate that the specified items exist and in the specified positions and make the changes, even if more recent changes have been made to the playlist.  */
    snapshot_id?: string;
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
    playlist_id: string;
  }) => Promise<{ snapshot_id?: string }>;

  /**
   * Get Playlist Items 
   */
  getPlaylistsItems: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
    playlist_id: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
    /** Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the total number of items and the request limit:<br/>`fields=total,limit`<br/>A dot separator can be used to specify non-reoccurring fields, while parentheses can be used to specify reoccurring fields within objects. For example, to get just the added date and user ID of the adder:<br/>`fields=items(added_at,added_by.id)`<br/>Use multiple parentheses to drill down into nested objects, for example:<br/>`fields=items(track(name,href,album(name,href)))`<br/>Fields can be excluded by prefixing them with an exclamation mark, for example:<br/>`fields=items.track.album(!external_urls,images)`  */
    fields?: string;
    /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
    limit?: number;
    /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
    offset?: number;
    /** A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/> _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/> In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.  */
    additional_types?: string;
  }) => Promise<PagingPlaylistTrackObject>;

  /**
   * Add Items to Playlist 
   */
  addItemsToPlaylist: (input: {
    /** A JSON array of the [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}`<br/>A maximum of 100 items can be added in one request. _**Note**: if the `uris` parameter is present in the query string, any URIs listed here in the body will be ignored._  */
    uris?: (string)[];
    /** The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0` ; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}`  */
    position?: number;
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
    playlist_id: string;
    [key: string]: unknown;
  }, options?: { query?: { position?: number; uris?: string } }) => Promise<{ snapshot_id?: string }>;

  /**
   * Update Playlist Items 
   */
  reorderOrReplacePlaylistsItems: (input: {
    uris?: (string)[];
    /** The position of the first item to be reordered.  */
    range_start?: number;
    /** The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0.  */
    insert_before?: number;
    /** The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2.  */
    range_length?: number;
    /** The playlist's snapshot ID against which you want to make the changes.  */
    snapshot_id?: string;
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
    playlist_id: string;
    [key: string]: unknown;
  }, options?: { query?: { uris?: string } }) => Promise<{ snapshot_id?: string }>;

  /**
   * Remove Playlist Items 
   */
  removeItemsPlaylist: (input: {
    /** An array of objects containing [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) of the tracks or episodes to remove. For example: `{ "items": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }`. A maximum of 100 objects can be sent at once.  */
    items: ({ uri?: string })[];
    /** The playlist's snapshot ID against which you want to make the changes. The API will validate that the specified items exist and in the specified positions and make the changes, even if more recent changes have been made to the playlist.  */
    snapshot_id?: string;
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
    playlist_id: string;
  }) => Promise<{ snapshot_id?: string }>;

  /**
   * Get Current User's Playlists 
   */
  getAListOfCurrentUsersPlaylists: (input: {
    /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
    limit?: number;
    /** 'The index of the first playlist to return. Default: 0 (the first object). Maximum offset: 100.000\. Use with `limit` to get the next set of playlists.'  */
    offset?: number;
  }) => Promise<PagingPlaylistObject>;

  /**
   * Create Playlist 
   */
  createPlaylist: (input: {
    /** The name for the new playlist, for example `"Your Coolest Playlist"`. This name does not need to be unique; a user may have several playlists with the same name.  */
    name: string;
    /** Defaults to `true`. The playlist's public/private status (if it should be added to the user's profile or not): `true` the playlist will be public, `false` the playlist will be private. To be able to create private playlists, the user must have granted the `playlist-modify-private` [scope](/documentation/web-api/concepts/scopes/#list-of-scopes). For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)  */
    public?: boolean;
    /** Defaults to `false`. If `true` the playlist will be collaborative. _**Note**: to create a collaborative playlist you must also set `public` to `false`. To create collaborative playlists you must have granted `playlist-modify-private` and `playlist-modify-public` [scopes](/documentation/web-api/concepts/scopes/#list-of-scopes)._  */
    collaborative?: boolean;
    /** value for playlist description as displayed in Spotify Clients and in the Web API.  */
    description?: string;
    [key: string]: unknown;
  }) => Promise<PlaylistObject>;

  /**
   * Save Items to Library 
   */
  saveLibraryItems: (input: {
    /** A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 40 URIs.  Supported URI types: - `spotify:track:{id}` - `spotify:album:{id}` - `spotify:episode:{id}` - `spotify:show:{id}` - `spotify:audiobook:{id}` - `spotify:user:{id}` - `spotify:playlist:{id}`  */
    uris: string;
  }) => Promise<undefined>;

  /**
   * Remove Items from Library 
   */
  removeLibraryItems: (input: {
    /** A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 40 URIs.  Supported URI types: - `spotify:track:{id}` - `spotify:album:{id}` - `spotify:episode:{id}` - `spotify:show:{id}` - `spotify:audiobook:{id}` - `spotify:user:{id}` - `spotify:playlist:{id}`  */
    uris: string;
  }) => Promise<undefined>;

  /**
   * Check User's Saved Items 
   */
  checkLibraryContains: (input: {
    /** A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 40 URIs.  Supported URI types: - `spotify:track:{id}` - `spotify:album:{id}` - `spotify:episode:{id}` - `spotify:show:{id}` - `spotify:audiobook:{id}` - `spotify:artist:{id}` - `spotify:user:{id}` - `spotify:playlist:{id}`  */
    uris: string;
  }) => Promise<(boolean)[]>;

  /**
   * Get User's Saved Albums 
   */
  getUsersSavedAlbums: (input: {
    /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
    limit?: number;
    /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
    offset?: number;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
  }) => Promise<PagingSavedAlbumObject>;

  /**
   * Save Albums for Current User 
   */
  saveAlbumsUser: (input: {
    /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._  */
    ids?: (string)[];
    [key: string]: unknown;
  }, options: { query: { ids: string } }) => Promise<undefined>;

  /**
   * Remove Users' Saved Albums 
   */
  removeAlbumsUser: (input: {
    /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._  */
    ids?: (string)[];
    [key: string]: unknown;
  }, options: { query: { ids: string } }) => Promise<undefined>;

  /**
   * Check User's Saved Albums 
   */
  checkUsersSavedAlbums: (input: {
    /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.  */
    ids: string;
  }) => Promise<(boolean)[]>;

  /**
   * Get User's Saved Tracks 
   */
  getUsersSavedTracks: (input: {
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
    /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
    limit?: number;
    /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
    offset?: number;
  }) => Promise<PagingSavedTrackObject>;

  /**
   * Save Tracks for Current User 
   */
  saveTracksUser: (input: {
    /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `timestamped_ids` is present in the body, any IDs listed in the query parameters (deprecated) or the `ids` field in the body will be ignored._  */
    ids?: (string)[];
    /** A JSON array of objects containing track IDs with their corresponding timestamps. Each object must include a track ID and an `added_at` timestamp. This allows you to specify when tracks were added to maintain a specific chronological order in the user's library.<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `timestamped_ids` is present in the body, any IDs listed in the query parameters (deprecated) or the `ids` field in the body will be ignored._  */
    timestamped_ids?: ({ id: string; added_at: string })[];
    [key: string]: unknown;
  }) => Promise<undefined>;

  /**
   * Remove User's Saved Tracks 
   */
  removeTracksUser: (input: {
    /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._  */
    ids?: (string)[];
    [key: string]: unknown;
  }, options: { query: { ids: string } }) => Promise<undefined>;

  /**
   * Check User's Saved Tracks 
   */
  checkUsersSavedTracks: (input: {
    /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.  */
    ids: string;
  }) => Promise<(boolean)[]>;

  /**
   * Get User's Saved Episodes 
   */
  getUsersSavedEpisodes: (input: {
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
    /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
    limit?: number;
    /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
    offset?: number;
  }) => Promise<PagingSavedEpisodeObject>;

  /**
   * Save Episodes for Current User 
   */
  saveEpisodesUser: (input: {
    /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._  */
    ids?: (string)[];
    [key: string]: unknown;
  }, options: { query: { ids: string } }) => Promise<undefined>;

  /**
   * Remove User's Saved Episodes 
   */
  removeEpisodesUser: (input: {
    /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._  */
    ids?: (string)[];
    [key: string]: unknown;
  }, options: { query: { ids: string } }) => Promise<undefined>;

  /**
   * Check User's Saved Episodes 
   */
  checkUsersSavedEpisodes: (input: {
    /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the episodes. Maximum: 50 IDs.  */
    ids: string;
  }) => Promise<(boolean)[]>;

  /**
   * Get User's Saved Shows 
   */
  getUsersSavedShows: (input: {
    /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
    limit?: number;
    /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
    offset?: number;
  }) => Promise<PagingSavedShowObject>;

  /**
   * Save Shows for Current User 
   */
  saveShowsUser: (input: {
    /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs.  */
    ids: string;
  }) => Promise<undefined>;

  /**
   * Remove User's Saved Shows 
   */
  removeShowsUser: (input: {
    /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs.  */
    ids: string;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
  }) => Promise<undefined>;

  /**
   * Check User's Saved Shows 
   */
  checkUsersSavedShows: (input: {
    /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs.  */
    ids: string;
  }) => Promise<(boolean)[]>;

  /**
   * Get User's Top Items 
   */
  getUsersTopArtistsAndTracks: (input: {
    /** The type of entity to return. Valid values: `artists` or `tracks`  */
    type: "artists" | "tracks";
    /** Over what time frame the affinities are computed. Valid values: `long_term` (calculated from ~1 year of data and including all new data as it becomes available), `medium_term` (approximately last 6 months), `short_term` (approximately last 4 weeks). Default: `medium_term`  */
    time_range?: string;
    /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
    limit?: number;
    /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
    offset?: number;
  }) => Promise<PagingObject & { items?: (ArtistObject | TrackObject)[] }>;

  /**
   * Get User's Profile 
   */
  getUsersProfile: (input: {
    /** The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).  */
    user_id: string;
  }) => Promise<PublicUserObject>;

  /**
   * Get User's Playlists 
   */
  getListUsersPlaylists: (input: {
    /** The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).  */
    user_id: string;
    /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
    limit?: number;
    /** The index of the first playlist to return. Default: 0 (the first object). Maximum offset: 100.000\. Use with `limit` to get the next set of playlists.  */
    offset?: number;
  }) => Promise<PagingPlaylistObject>;

  /**
   * Create Playlist for user 
   */
  createPlaylistForUser: (input: {
    /** The name for the new playlist, for example `"Your Coolest Playlist"`. This name does not need to be unique; a user may have several playlists with the same name.  */
    name: string;
    /** Defaults to `true`. The playlist's public/private status (if it should be added to the user's profile or not): `true` the playlist will be public, `false` the playlist will be private. To be able to create private playlists, the user must have granted the `playlist-modify-private` [scope](/documentation/web-api/concepts/scopes/#list-of-scopes). For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)  */
    public?: boolean;
    /** Defaults to `false`. If `true` the playlist will be collaborative. _**Note**: to create a collaborative playlist you must also set `public` to `false`. To create collaborative playlists you must have granted `playlist-modify-private` and `playlist-modify-public` [scopes](/documentation/web-api/concepts/scopes/#list-of-scopes)._  */
    collaborative?: boolean;
    /** value for playlist description as displayed in Spotify Clients and in the Web API.  */
    description?: string;
    /** The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).  */
    user_id: string;
    [key: string]: unknown;
  }) => Promise<PlaylistObject>;

  /**
   * Follow Playlist 
   */
  followPlaylist: (input: {
    /** Defaults to `true`. If `true` the playlist will be included in user's public playlists (added to profile), if `false` it will remain private. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)  */
    public?: boolean;
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
    playlist_id: string;
    [key: string]: unknown;
  }) => Promise<undefined>;

  /**
   * Unfollow Playlist 
   */
  unfollowPlaylist: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
    playlist_id: string;
  }) => Promise<undefined>;

  /**
   * Get Featured Playlists 
   */
  getFeaturedPlaylists: (input: {
    /** The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language.<br/> _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._  */
    locale?: string;
    /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
    limit?: number;
    /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
    offset?: number;
  }) => Promise<PagingFeaturedPlaylistObject>;

  /**
   * Get Several Browse Categories 
   */
  getCategories: (input: {
    /** The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language.<br/> _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._  */
    locale?: string;
    /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
    limit?: number;
    /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
    offset?: number;
  }) => Promise<{ categories: PagingObject & { items?: (CategoryObject)[] } }>;

  /**
   * Get Single Browse Category 
   */
  getACategory: (input: {
    /** The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.  */
    category_id: string;
    /** The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language.<br/> _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._  */
    locale?: string;
  }) => Promise<CategoryObject>;

  /**
   * Get Category's Playlists 
   */
  getACategoriesPlaylists: (input: {
    /** The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.  */
    category_id: string;
    /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
    limit?: number;
    /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
    offset?: number;
  }) => Promise<PagingFeaturedPlaylistObject>;

  /**
   * Get Playlist Cover Image 
   */
  getPlaylistCover: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
    playlist_id: string;
  }) => Promise<(ImageObject)[]>;

  /**
   * Add Custom Playlist Cover Image 
   */
  uploadCustomPlaylistCover: (input: {
    /** Base64 encoded JPEG image data, maximum payload size is 256 KB. */
    body?: string;
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
    playlist_id: string;
  }) => Promise<undefined>;

  /**
   * Get New Releases 
   */
  getNewReleases: (input: {
    /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
    limit?: number;
    /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
    offset?: number;
  }) => Promise<{ albums: PagingSimplifiedAlbumObject }>;

  /**
   * Get Followed Artists 
   */
  getFollowed: (input: {
    /** The ID type: currently only `artist` is supported.  */
    type: "artist";
    /** The last artist ID retrieved from the previous request.  */
    after?: string;
    /** The maximum number of items to return. Default: 20\. Minimum: 1\. Maximum: 50\.  */
    limit?: number;
  }) => Promise<{ artists: CursorPagingSimplifiedArtistObject }>;

  /**
   * Follow Artists or Users 
   */
  followArtistsUsers: (input: {
    /** A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._  */
    ids: (string)[];
    /** The ID type.  */
    type: "artist" | "user";
    [key: string]: unknown;
  }, options: { query: { ids: string } }) => Promise<undefined>;

  /**
   * Unfollow Artists or Users 
   */
  unfollowArtistsUsers: (input: {
    /** A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._  */
    ids?: (string)[];
    /** The ID type: either `artist` or `user`.  */
    type: "artist" | "user";
    [key: string]: unknown;
  }, options: { query: { ids: string } }) => Promise<undefined>;

  /**
   * Check If User Follows Artists or Users 
   */
  checkCurrentUserFollows: (input: {
    /** The ID type: either `artist` or `user`.  */
    type: "artist" | "user";
    /** A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) to check. For example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be sent in one request.  */
    ids: string;
  }) => Promise<(boolean)[]>;

  /**
   * Check if Current User Follows Playlist 
   */
  checkIfUserFollowsPlaylist: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
    playlist_id: string;
    /** **Deprecated** A single item list containing current user's [Spotify Username](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 1 id.  */
    ids?: string;
  }) => Promise<(boolean)[]>;

  /**
   * Get Several Tracks' Audio Features 
   */
  getSeveralAudioFeatures: (input: {
    /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the tracks. Maximum: 100 IDs.  */
    ids: string;
  }) => Promise<{ audio_features: (AudioFeaturesObject)[] }>;

  /**
   * Get Track's Audio Features 
   */
  getAudioFeatures: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.  */
    id: string;
  }) => Promise<AudioFeaturesObject>;

  /**
   * Get Track's Audio Analysis 
   */
  getAudioAnalysis: (input: {
    /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.  */
    id: string;
  }) => Promise<AudioAnalysisObject>;

  /**
   * Get Recommendations 
   */
  getRecommendations: (input: {
    /** The target size of the list of recommended tracks. For seeds with unusually small pools or when highly restrictive filtering is applied, it may be impossible to generate the requested number of recommended tracks. Debugging information for such cases is available in the response. Default: 20\. Minimum: 1\. Maximum: 100.  */
    limit?: number;
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
    /** A comma separated list of [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for seed artists.  Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.<br/> _**Note**: only required if `seed_genres` and `seed_tracks` are not set_.  */
    seed_artists: string;
    /** A comma separated list of any genres in the set of [available genre seeds](/documentation/web-api/reference/get-recommendation-genres). Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.<br/> _**Note**: only required if `seed_artists` and `seed_tracks` are not set_.  */
    seed_genres: string;
    /** A comma separated list of [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for a seed track.  Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.<br/> _**Note**: only required if `seed_artists` and `seed_genres` are not set_.  */
    seed_tracks: string;
    /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
    min_acousticness?: number;
    /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
    max_acousticness?: number;
    /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
    target_acousticness?: number;
    /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
    min_danceability?: number;
    /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
    max_danceability?: number;
    /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
    target_danceability?: number;
    /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
    min_duration_ms?: number;
    /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
    max_duration_ms?: number;
    /** Target duration of the track (ms) */
    target_duration_ms?: number;
    /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
    min_energy?: number;
    /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
    max_energy?: number;
    /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
    target_energy?: number;
    /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
    min_instrumentalness?: number;
    /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
    max_instrumentalness?: number;
    /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
    target_instrumentalness?: number;
    /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
    min_key?: number;
    /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
    max_key?: number;
    /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
    target_key?: number;
    /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
    min_liveness?: number;
    /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
    max_liveness?: number;
    /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
    target_liveness?: number;
    /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
    min_loudness?: number;
    /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
    max_loudness?: number;
    /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
    target_loudness?: number;
    /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
    min_mode?: number;
    /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
    max_mode?: number;
    /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
    target_mode?: number;
    /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
    min_popularity?: number;
    /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
    max_popularity?: number;
    /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
    target_popularity?: number;
    /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
    min_speechiness?: number;
    /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
    max_speechiness?: number;
    /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
    target_speechiness?: number;
    /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
    min_tempo?: number;
    /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
    max_tempo?: number;
    /** Target tempo (BPM) */
    target_tempo?: number;
    /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
    min_time_signature?: number;
    /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
    max_time_signature?: number;
    /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
    target_time_signature?: number;
    /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
    min_valence?: number;
    /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
    max_valence?: number;
    /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
    target_valence?: number;
  }) => Promise<RecommendationsObject>;

  /**
   * Get Available Genre Seeds 
   */
  getRecommendationGenres: () => Promise<{ genres: (string)[] }>;

  /**
   * Get Playback State 
   */
  getInformationAboutTheUsersCurrentPlayback: (input: {
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
    /** A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/> _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/> In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.  */
    additional_types?: string;
  }) => Promise<CurrentlyPlayingContextObject>;

  /**
   * Transfer Playback 
   */
  transferAUsersPlayback: (input: {
    /** A JSON array containing the ID of the device on which playback should be started/transferred.<br/>For example:`{device_ids:["74ASZWbe4lXaubB36ztrGX"]}`<br/>_**Note**: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return `400 Bad Request`_  */
    device_ids: (string)[];
    /** **true**: ensure playback happens on new device.<br/>**false** or not provided: keep the current playback state.  */
    play?: boolean;
    [key: string]: unknown;
  }) => Promise<undefined>;

  /**
   * Get Available Devices 
   */
  getAUsersAvailableDevices: () => Promise<{ devices: (DeviceObject)[] }>;

  /**
   * Get Currently Playing Track 
   */
  getTheUsersCurrentlyPlayingTrack: (input: {
    /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
    market?: string;
    /** A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/> _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/> In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.  */
    additional_types?: string;
  }) => Promise<CurrentlyPlayingContextObject>;

  /**
   * Start/Resume Playback 
   */
  startAUsersPlayback: (input: {
    /** Optional. Spotify URI of the context to play. Valid contexts are albums, artists & playlists. `{context_uri:"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"}`  */
    context_uri?: string;
    /** Optional. A JSON array of the Spotify track URIs to play. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]}`  */
    uris?: (string)[];
    /** Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object "position" is zero based and can’t be negative. Example: `"offset": {"position": 5}` "uri" is a string representing the uri of the item to start at. Example: `"offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"}`  */
    offset?: { [key: string]: unknown };
    /** integer */
    position_ms?: number;
    /** The id of the device this command is targeting. If not supplied, the user's currently active device is the target. */
    device_id?: string;
    [key: string]: unknown;
  }) => Promise<undefined>;

  /**
   * Pause Playback 
   */
  pauseAUsersPlayback: (input: {
    /** The id of the device this command is targeting. If not supplied, the user's currently active device is the target.  */
    device_id?: string;
  }) => Promise<undefined>;

  /**
   * Skip To Next 
   */
  skipUsersPlaybackToNextTrack: (input: {
    /** The id of the device this command is targeting. If not supplied, the user's currently active device is the target. */
    device_id?: string;
  }) => Promise<undefined>;

  /**
   * Skip To Previous 
   */
  skipUsersPlaybackToPreviousTrack: (input: {
    /** The id of the device this command is targeting. If not supplied, the user's currently active device is the target.  */
    device_id?: string;
  }) => Promise<undefined>;

  /**
   * Seek To Position 
   */
  seekToPositionInCurrentlyPlayingTrack: (input: {
    /** The position in milliseconds to seek to. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song.  */
    position_ms: number;
    /** The id of the device this command is targeting. If not supplied, the user's currently active device is the target.  */
    device_id?: string;
  }) => Promise<undefined>;

  /**
   * Set Repeat Mode 
   */
  setRepeatModeOnUsersPlayback: (input: {
    /** **track**, **context** or **off**.<br/> **track** will repeat the current track.<br/> **context** will repeat the current context.<br/> **off** will turn repeat off.  */
    state: string;
    /** The id of the device this command is targeting. If not supplied, the user's currently active device is the target.  */
    device_id?: string;
  }) => Promise<undefined>;

  /**
   * Set Playback Volume 
   */
  setVolumeForUsersPlayback: (input: {
    /** The volume to set. Must be a value from 0 to 100 inclusive.  */
    volume_percent: number;
    /** The id of the device this command is targeting. If not supplied, the user's currently active device is the target.  */
    device_id?: string;
  }) => Promise<undefined>;

  /**
   * Toggle Playback Shuffle 
   */
  toggleShuffleForUsersPlayback: (input: {
    /** **true** : Shuffle user's playback.<br/> **false** : Do not shuffle user's playback.  */
    state: boolean;
    /** The id of the device this command is targeting. If not supplied, the user's currently active device is the target.  */
    device_id?: string;
  }) => Promise<undefined>;

  /**
   * Get Recently Played Tracks 
   */
  getRecentlyPlayed: (input: {
    /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
    limit?: number;
    /** A Unix timestamp in milliseconds. Returns all items after (but not including) this cursor position. If `after` is specified, `before` must not be specified.  */
    after?: number;
    /** A Unix timestamp in milliseconds. Returns all items before (but not including) this cursor position. If `before` is specified, `after` must not be specified.  */
    before?: number;
  }) => Promise<CursorPagingPlayHistoryObject>;

  /**
   * Get the User's Queue 
   */
  getQueue: () => Promise<QueueObject>;

  /**
   * Add Item to Playback Queue 
   */
  addToQueue: (input: {
    /** The uri of the item to add to the queue. Must be a track or an episode uri.  */
    uri: string;
    /** The id of the device this command is targeting. If not supplied, the user's currently active device is the target.  */
    device_id?: string;
  }) => Promise<undefined>;

  /**
   * Get Available Markets 
   */
  getAvailableMarkets: () => Promise<{ markets?: (string)[] }>;
};

export * from "./schemas.js";
