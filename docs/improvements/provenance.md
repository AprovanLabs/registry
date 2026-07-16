# Provenance & Ownership — Design

_Status: design accepted, phase 1 implemented (2026-07-16)._

## Problem

Registry packages need a visible chain of ownership. Traditionally that's the
URL (Go: `import "github.com/google/uuid"`). We want the URL-grade
verifiability **without** making users type domains: the default experience is
a clean alias (`@utdk/github`, isolate global `github`), and the domain is the
provable backing record.

We also ingest specs through aggregators (APIs.guru). The aggregator is an
ingest detail — links and attribution must always point at the vendor.

## Model

Every provider entry / generated package carries a provenance record:

```jsonc
{
  "source": "apis-guru",              // how we ingested it (or "manual")
  "originDomain": "github.com",       // the owning domain — the identity anchor
  "originSpecUrl": "https://raw.githubusercontent.com/github/rest-api-description/…",
  "service": "api.github.com",        // sub-service under the domain
  "retrievedAt": "2026-07-16T…"
}
```

**The chain reads:** alias → origin domain → origin spec URL.
`github` is the alias; `github.com` is the owner; the spec URL is the
verifiable artifact published by that owner.

## Aliasing rules (Go-inspired, TypeScript-shaped)

1. **Central registry, clean defaults.** `data/registry.json` is the central
   alias map. The default alias is the origin domain minus TLD
   (`github.com → github`); services become namespaces
   (`twilio.com:api → twilio/api` → `@utdk/twilio` subpath `twilio/api`).
2. **Domain collisions fall back to the full domain** (`github.io →
   github-io`) — an alias is never ambiguous.
3. **Domain-form resolution (future).** A domain identifier resolves through
   the same map to the same package: requesting `synthetic.new` in the
   registry/gateway resolves to whatever alias `synthetic.new` owns (e.g.
   `@utdk/synthetic`). This is a *lookup convenience*, not a second package —
   one artifact, two ways to name it. Implementation: a `domains → alias`
   index endpoint on the registry (`/catalog/domains.json`) + support in the
   utdk-cli/gateway resolver.
4. **AI-first ergonomics.** Models should think at the namespace level:
   `await github.getRepos({ username: "JacobSampson" })`. The alias is stable,
   short, and pre-mapped to its source — no import ceremony in the isolate
   runtime.

## Claiming / verification (future)

- **Unverified (default):** provenance recorded from ingest; displayed as
  "Source: github.com" with links.
- **Claimed:** a vendor proves domain control (well-known file or DNS TXT
  containing the registry-issued token) → entry marked `verified`, vendor can
  override branding/docs/aliases for their domain.
- Disputes resolve toward the domain owner, like Go module paths.

## Display requirements (registry web)

- Provider pages show the chain: alias · owner domain (linked) · original
  spec (linked) · ingested via (plain text, not linked).
- Never render an `apis.guru` or `raw.githubusercontent.com/APIs-guru/...`
  URL as the "source" of a package.

## Implemented in phase 1

- `provenance` + `branding` on registry entries (ingest script populates).
- Generated `package.json` `utdk.provenance` / `utdk.branding` blocks;
  `homepage` prefers the vendor site.
- Clean-alias naming rules in the ingest script (1, 2 above).

## Later phases

- `/catalog/domains.json` + gateway/CLI domain-form resolution (3).
- Domain claiming + verification flow.
