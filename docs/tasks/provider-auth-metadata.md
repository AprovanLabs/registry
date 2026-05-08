# Provider Auth Metadata

## Plan

1. Extend bundler registry typings so provider `options.auth` can store one or more UTCP auth configurations.
2. Forward the primary configured auth method into UTCP manual call template discovery without breaking existing single-auth usage.
3. Add focused tests for auth option selection and UTCP config wiring.
4. Populate auth metadata for `github`, `google/books`, `openai`, and `datadog` from their checked-in OpenAPI docs.

## Progress

- [completed] Traced the current provider option flow and confirmed auth metadata is dropped before UTCP sees it.
- [completed] Add typed auth support, update targeted registry entries, and verify with bundler tests and typecheck.
- [completed] Emit auth metadata into generated provider `package.json` files and add a leaf `package.json` for nested providers such as `google/books`.
