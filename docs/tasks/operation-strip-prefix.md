# Operation Strip Prefix

## Plan

1. Add typed registry support for provider operation options, including `options.operations.stripPrefix`.
2. Reuse a single prefix-stripping helper across generated type rendering, runtime metadata generation, and client access-path derivation.
3. Normalize emitted provider OpenAPI documents so operation IDs shown in generated docs match the stripped runtime names.
4. Add focused tests for provider options, OpenAPI normalization, and generated metadata/access-path behavior.

## Progress

- [completed] Trace the current provider option flow and wire `stripPrefix` into bundler generation.
- [completed] Add focused tests, regenerate affected providers, and run targeted verification.
