# Pronunciation Dictionary

9 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.getPronunciationDictionariesMetadata`

Get Pronunciation Dictionaries

```ts
elevenlabs.getPronunciationDictionariesMetadata(input: {
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
  /** How many pronunciation dictionaries to return at maximum. Can not exceed 100, defaults to 30. */
  page_size?: number;
  /** Which field to sort by, one of 'created_at_unix' or 'name'. */
  sort?: "creation_time_unix" | "name" | null;
  /** Which direction to sort the voices in. 'ascending' or 'descending'. */
  sort_direction?: string | null;
  /** Whether to include archived pronunciation dictionaries in the response. */
  include_archived?: boolean;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetPronunciationDictionariesMetadataResponseModel>
```

<sub>`GET /v1/pronunciation-dictionaries` · `get_pronunciation_dictionaries_metadata`</sub>

## `elevenlabs.getPronunciationDictionaryVersionPls`

Get A Pls File With A Pronunciation Dictionary Version Rules

```ts
elevenlabs.getPronunciationDictionaryVersionPls(input: {
  /** The id of the pronunciation dictionary */
  dictionary_id: string;
  /** The id of the pronunciation dictionary version */
  version_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`GET /v1/pronunciation-dictionaries/{dictionary_id}/{version_id}/download` · `get_pronunciation_dictionary_version_pls`</sub>

## `elevenlabs.getPronunciationDictionaryMetadata`

Get Metadata For A Pronunciation Dictionary

```ts
elevenlabs.getPronunciationDictionaryMetadata(input: {
  /** The id of the pronunciation dictionary */
  pronunciation_dictionary_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetPronunciationDictionaryWithRulesResponseModel>
```

<sub>`GET /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}` · `get_pronunciation_dictionary_metadata`</sub>

## `elevenlabs.patchPronunciationDictionary`

Update Pronunciation Dictionary

```ts
elevenlabs.patchPronunciationDictionary(input: {
  /** Whether to archive the pronunciation dictionary. */
  archived?: boolean;
  /** The name of the pronunciation dictionary, used for identification only. */
  name?: string;
  /** The id of the pronunciation dictionary */
  pronunciation_dictionary_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetPronunciationDictionaryMetadataResponseModel>
```

<sub>`PATCH /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}` · `patch_pronunciation_dictionary`</sub>

## `elevenlabs.addRules`

Add Rules To The Pronunciation Dictionary

```ts
elevenlabs.addRules(input: {
  /** List of pronunciation rules. Rule can be either:     an alias rule: {'string_to_replace': 'a', 'type': 'alias', 'alias': 'b', }     or a phoneme rule: {'string_to_replace': 'a', 'type': 'phoneme', 'phoneme': 'b', 'alphabet': 'ipa' } */
  rules: (PronunciationDictionaryAliasRuleRequestModel | PronunciationDictionaryPhonemeRuleRequestModel)[];
  /** The id of the pronunciation dictionary */
  pronunciation_dictionary_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<PronunciationDictionaryRulesResponseModel>
```

<sub>`POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/add-rules` · `add_rules`</sub>

## `elevenlabs.removeRules`

Remove Rules From The Pronunciation Dictionary

```ts
elevenlabs.removeRules(input: {
  /** List of strings to remove from the pronunciation dictionary. */
  rule_strings: (string)[];
  /** The id of the pronunciation dictionary */
  pronunciation_dictionary_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<PronunciationDictionaryRulesResponseModel>
```

<sub>`POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/remove-rules` · `remove_rules`</sub>

## `elevenlabs.setRules`

Set Rules On The Pronunciation Dictionary

```ts
elevenlabs.setRules(input: {
  /** List of pronunciation rules. Rule can be either:     an alias rule: {'string_to_replace': 'a', 'type': 'alias', 'alias': 'b', }     or a phoneme rule: {'string_to_replace': 'a', 'type': 'phoneme', 'phoneme': 'b', 'alphabet': 'ipa' } */
  rules: (PronunciationDictionaryAliasRuleRequestModel | PronunciationDictionaryPhonemeRuleRequestModel)[];
  /** The id of the pronunciation dictionary */
  pronunciation_dictionary_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<PronunciationDictionaryRulesResponseModel>
```

<sub>`POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/set-rules` · `set_rules`</sub>

## `elevenlabs.addFromFile`

Add A Pronunciation Dictionary

```ts
elevenlabs.addFromFile(input: {
  /** The name of the pronunciation dictionary, used for identification only. */
  name: string;
  /** A lexicon .pls file which we will use to initialize the project with. */
  file?: string | null;
  /** A description of the pronunciation dictionary, used for identification only. */
  description?: string | null;
  /** Should be one of 'admin', 'editor' or 'viewer'. If not provided, defaults to no access. */
  workspace_access?: "admin" | "editor" | "commenter" | "viewer" | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AddPronunciationDictionaryResponseModel>
```

<sub>`POST /v1/pronunciation-dictionaries/add-from-file` · `add_from_file`</sub>

## `elevenlabs.addFromRules`

Add A Pronunciation Dictionary

```ts
elevenlabs.addFromRules(input: {
  /** List of pronunciation rules. Rule can be either:     an alias rule: {'string_to_replace': 'a', 'type': 'alias', 'alias': 'b', }     or a phoneme rule: {'string_to_replace': 'a', 'type': 'phoneme', 'phoneme': 'b', 'alphabet': 'ipa' } */
  rules: (PronunciationDictionaryAliasRuleRequestModel | PronunciationDictionaryPhonemeRuleRequestModel)[];
  /** The name of the pronunciation dictionary, used for identification only. */
  name: string;
  /** A description of the pronunciation dictionary, used for identification only. */
  description?: string | null;
  /** Should be one of 'admin', 'editor' or 'viewer'. If not provided, defaults to no access. */
  workspace_access?: "admin" | "editor" | "commenter" | "viewer" | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AddPronunciationDictionaryResponseModel>
```

<sub>`POST /v1/pronunciation-dictionaries/add-from-rules` · `add_from_rules`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
