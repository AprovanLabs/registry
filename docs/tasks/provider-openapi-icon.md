# Provider OpenAPI Icon

## Plan

1. Extend bundler provider option typings to support an OpenAPI icon override from the registry.
2. Emit `utdk.openapi.icon` in generated provider `package.json` files when an icon exists in the OpenAPI doc.
3. Prefer the registry override over the OpenAPI-provided icon and cover the precedence with focused tests.

## Progress

- [completed] Traced the existing provider option flow and confirmed `utdk.openapi` is the correct place to store icon metadata.
- [completed] Added `options.openapi.icon` support so registry data can override the OpenAPI-provided icon.
- [completed] Emit `utdk.openapi.icon` from OpenAPI extension fields such as `info.x-logo.url` when available.
- [completed] Verified with targeted `bundler` tests and `tsc` typecheck.
