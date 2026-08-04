# 0001. Tool response envelope and output schemas

- **Status**: accepted
- **Date**: 2026-08-03
- **Origin**: `utdk-output-schemas` (stream 2)

## Context

The workspace gateway answers successful tool calls with a JSON envelope `{ data, meta }`.
`meta` carries dispatch metadata (request id, duration); `data` is the operation's return
value. UTDK is adding an optional `outputSchema` slot on tool entries so callers can know
what an operation returns before invoking it.

Without a single written contract, consumers guess how to unwrap the envelope — and they
guess differently. Two first-party unwrap paths exist today:

1. **Widget bridge** (`aprovan/packages/compiler/src/mount/bridge.ts`): unwraps only when the
   parsed body is an object with exactly two keys, `data` and `meta`. If an operation's
   own return value is a `{ data, … }` object (or any other shape that is not the gateway
   envelope), it passes through intact.

2. **Web client** (`aprovan/client/web/src/lib/tools.ts`): on every successful response,
   returns `body.data` unconditionally. Any operation whose real result is keyed `data` is
   silently stripped one level.

Streaming operations are a third shape: the gateway bypasses the JSON envelope entirely and
returns a byte stream (SSE or raw `ReadableStream`), so no static JSON schema can describe
the on-the-wire body.

## Decision

1. **Output schemas describe the unwrapped value.** When an operation declares an
   `outputSchema` and the gateway wraps the result as `{ data, meta }`, the schema describes
   the value at `data`, not the envelope.

2. **Errors are out of band.** A failed operation does not use the success envelope. Failure
   travels as a thrown error or an `{ error }` JSON body with a non-OK HTTP status. The
   operation's `outputSchema` does not describe error bodies.

3. **Streams bypass the envelope.** An operation that returns a stream is identified with a
   streaming marker on its tool entry and carries no `outputSchema`. The response is a
   `ReadableStream` (or SSE) whose element shape depends on the runtime value, not the
   operation identity.

4. **Divergent unwrap implementations are documented, not fixed here.** The widget bridge's
   two-key guard and the web client's unconditional `body.data` are both intentional
   workarounds for the same envelope, applied with different safety trade-offs. Converging
   them to one shared unwrap helper is scoped to the `tools-global` change in the workspace
   repo, which centralises the `tools` namespace proxy and transport.

## Alternatives

- **Schematise the envelope**: rejected — `meta` is dispatch metadata, not operation output;
  schemas would mislead every consumer and UI renderer.

- **Schematise stream element types**: rejected — the gateway does not wrap streams in
  `{ data, meta }`; the on-the-wire shape varies by provider and runtime value.

- **Document per consumer**: rejected — that is the current state and produced the two
  divergent unwrap rules above.

## Consequences

- Catalog, MCP, and interface consumers can attach `outputSchema` to tool entries with a
  single, referenceable rule: schema = value inside `data`.

- Error handling and success typing stay separate; consumers must not parse error bodies
  against `outputSchema`.

- Streaming operations are discoverable via a marker instead of a misleading or absent
  schema.

- Until `tools-global` lands, widget code and web UI code may observe different unwrap
  behaviour for operations whose return value itself contains a `data` key. New consumers
  should follow the two-key guard rule (unwrap only when `data` and `meta` are the sole
  keys) rather than the unconditional `body.data` rule.

- If the envelope shape changes, this ADR must be superseded before any consumer or schema
  producer is updated.
