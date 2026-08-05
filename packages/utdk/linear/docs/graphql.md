# GraphQL

`@utdk/linear` · 1203 types · 165 queries, 372 mutations, 80 subscriptions

## Execution

All GraphQL traffic goes through the passthrough client method — compose queries/mutations yourself; nothing is pre-generated per root field.

```ts
import linear from "@utdk/linear";

await linear.executeGraphQl({ query: "…", variables: { /* … */ } });
```

## Entry points

Root fields only — not an exhaustive catalog. Per-type fields belong in `schema_lookup`.

- **Query** (165): `administrableTeams`, `agentActivities`, `agentActivity`, `agentSession`, `agentSessionSandbox`, `agentSessions`, `agentSkill`, `agentSkills`, `applicationInfo`, `archivedIntegrations`, `archivedTeams`, `attachment` — *+153 more; use `schema_lookup` with no `type` for the full list*
- **Mutation** (372): `agentActivityCreate`, `agentActivityCreatePrompt`, `agentActivityDeleteQueued`, `agentActivitySendQueued`, `agentSessionCreate`, `agentSessionCreateOnComment`, `agentSessionCreateOnIssue`, `agentSessionUpdate`, `agentSessionUpdateExternalUrl`, `agentSkillCreate`, `agentSkillDelete`, `agentSkillUpdate` — *+360 more; use `schema_lookup` with no `type` for the full list*
- **Subscription** (80): `agentActivityArchived`, `agentActivityCreated`, `agentActivityUpdated`, `agentSessionCreated`, `agentSessionUpdated`, `aiConversationUpdated`, `aiPromptProgressCreated`, `aiPromptProgressUpdated`, `commentArchived`, `commentCreated`, `commentDeleted`, `commentUnarchived` — *+68 more; use `schema_lookup` with no `type` for the full list*

## Pagination

Relay cursor pagination — `65` `*Connection` types expose `edges`/`nodes` with `PageInfo` (`hasNextPage`, `endCursor`, …). List fields take `first`/`after` (forward) or `last`/`before` (backward).

## IDs & nodes

Global object identification via the `Node` interface (`Node.id: ID!`). Fetch individual records through root `…(id:)` fields where present.

## Authentication & scopes

Bearer token on the GraphQL HTTP endpoint (`Authorization: Bearer <token>`). SDL exposes scope-related types (`IntegrationHasScopesPayload`, `ProductIntelligenceScope`).

## Deprecation

76 deprecated field/argument/enum value(s) in the SDL — each carries a `deprecationReason`; use `schema_lookup` for per-field replacements.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
