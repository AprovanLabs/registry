# TinyFn UTDK Package

## Plan

1. Add a dedicated `@utdk/fn` package entry that follows the existing lazy async client pattern.
2. Generate a full TinyFn catalog from `tmp/tinyfn.html` so every discovered category and tool has a stable place in the API surface.
3. Implement a strong first local subset for `math` and `color`, with ergonomic primitive-or-object inputs where that improves usage.
4. Add focused tests for catalog loading, lazy execution, and representative function behavior.

## Progress

- [in_progress] Add the `@utdk/fn` package surface and catalog generator.
- [pending] Implement the first local `math` and `color` subsets behind the async abstraction.
- [pending] Add targeted tests and verify package typecheck behavior.
