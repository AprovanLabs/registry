# Cards

7 operations · `@utdk/mercury`

```ts
import mercury from "@utdk/mercury";
```

## `mercury.listCards`

List cards

```ts
mercury.listCards(input: {
  /** Filter cards by one or more account IDs. */
  accountId?: (string)[];
  /** Filter cards by one or more statuses. */
  status?: ("active" | "frozen" | "cancelled" | "inactive" | "expired" | "suspended")[];
  /** Filter cards by type (virtual or physical). */
  type?: ("virtual" | "physical")[];
  /** Filter cards by kind (debit or credit). */
  kind?: ("debit" | "credit")[];
  /** Filter cards by one or more cardholder user IDs. */
  userId?: (string)[];
  /** Maximum number of results to return. Allowed range: 1 to 1000. Defaults to 500 */
  limit?: number;
  /** Sort order. Can be 'asc' or 'desc'. Defaults to 'asc' */
  order?: "asc" | "desc";
  /** The ID of the card to start the page after (exclusive). When provided, results will begin with the card immediately following this ID. Use this for standard forward pagination to get the next page of results. Cannot be combined with end_before. */
  start_after?: string;
  /** The ID of the card to end the page before (exclusive). When provided, results will end just before this ID and work backwards. Use this for reverse pagination or to retrieve previous pages. Cannot be combined with start_after. */
  end_before?: string;
}): Promise<CardListResponse>
```

<sub>`GET /cards` · `listCards`</sub>

## `mercury.createCard`

Create a card

```ts
mercury.createCard(input: {
  /**  The deposit account the new card will draw funds from. */
  accountId: string;
  kind: CardKind & unknown;
  /**  Optional user-assigned label for the card. */
  nickname?: string | null;
  spendLimit?: SpendLimit & unknown | null;
  type: CreateCardType & unknown;
  /**  The user to assign as the cardholder. */
  userId: string;
}): Promise<Card>
```

<sub>`POST /cards` · `createCard`</sub>

## `mercury.getCard`

Get a card

```ts
mercury.getCard(input: {
  /** Unique identifier for a card */
  cardId: string;
}): Promise<Card>
```

<sub>`GET /cards/{cardId}` · `getCard`</sub>

## `mercury.updateCard`

Update a card

```ts
mercury.updateCard(input: {
  nickname: NicknameUpdate & unknown;
  spendLimit?: SpendLimit & unknown | null;
  /** Unique identifier for a card */
  cardId: string;
}): Promise<Card>
```

<sub>`POST /cards/{cardId}` · `updateCard`</sub>

## `mercury.cancelCard`

Cancel a card

```ts
mercury.cancelCard(input: {
  /** Unique identifier for a card */
  cardId: string;
}): Promise<Card>
```

<sub>`POST /cards/{cardId}/cancel` · `cancelCard`</sub>

## `mercury.freezeCard`

Freeze a card

```ts
mercury.freezeCard(input: {
  /** Unique identifier for a card */
  cardId: string;
}): Promise<Card>
```

<sub>`POST /cards/{cardId}/freeze` · `freezeCard`</sub>

## `mercury.unfreezeCard`

Unfreeze a card

```ts
mercury.unfreezeCard(input: {
  /** Unique identifier for a card */
  cardId: string;
}): Promise<Card>
```

<sub>`POST /cards/{cardId}/unfreeze` · `unfreezeCard`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
