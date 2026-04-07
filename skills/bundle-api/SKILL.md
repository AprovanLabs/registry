---
name: bundle-api
description: Bundle OpenAPI schemas into a deployed library.
disable-model-invocation: true
---

```sh
# Generate a new UTDK library version
pnpm --filter @aprovan/utdk-bundler generate github

# Phase 1: cache docs references and normalized source material
pnpm --filter @aprovan/utdk-bundler generate load-docs github

# Phase 2: render README/docs/package metadata from cached artifacts
pnpm --filter @aprovan/utdk-bundler generate augment-docs github
```
