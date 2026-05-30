# @utdk/isolate

Sandboxed Node.js execution runtime for `@utdk/*` tool calls.

## Overview

`@utdk/isolate` runs provider tool calls inside restricted [`vm.createContext()`](https://nodejs.org/api/vm.html) sandboxes, preventing credential leakage and unauthorized host filesystem access.

**Security properties:**
- No `process.env` access from inside the sandbox
- No `require`, `fs`, `child_process`, `global`, or `Buffer`
- Credentials injected at call time via a controlled bridge (not baked into module scope)
- Module cache isolated per execution (new context per call, no cross-call state leakage)
- Timeout enforcement kills runaway async operations

## Usage

```typescript
import { Isolate } from '@utdk/isolate';

const isolate = new Isolate();
const result = await isolate.execute({
  module: '@utdk/github',
  operation: 'users.getByUsername',
  args: { username: 'octocat' },
  credentials: { GITHUB_TOKEN: '<injected-by-gateway>' },
  timeout: 10_000,
});

console.log(result.data);     // { login: 'octocat', ... }
console.log(result.durationMs); // e.g. 42.5
```

## API

### `new Isolate()`

Creates a new isolate instance. Stateless; the same instance can be reused across many calls.

### `isolate.execute(options): Promise<ExecuteResult>`

Executes a single tool call in a sandboxed context.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `module` | `string` | required | Provider module specifier, e.g. `@utdk/github` |
| `operation` | `string` | required | Dot-notation path, e.g. `users.getByUsername` |
| `args` | `Record<string, unknown>` | `{}` | Arguments passed to the operation |
| `credentials` | `Record<string, string>` | `{}` | Credentials injected via bridge (e.g. `{ GITHUB_TOKEN: '...' }`) |
| `timeout` | `number` | `30_000` | Timeout in milliseconds |

Returns `{ data: unknown; durationMs: number }`.

Throws `TimeoutError` if execution exceeds the timeout.

## Credential Injection

Credentials are resolved using the provider's `utdk.auth` configuration from its `package.json`:

| Auth type | Pattern | Mapping |
|-----------|---------|---------|
| `api_key` | `"Bearer ${TOKEN_NAME}"` | → `BearerToken(credentials[TOKEN_NAME])` |
| `api_key` | `"${TOKEN_NAME}"` | → `ApiKey({ value: credentials[TOKEN_NAME] })` |
| `oauth2` | any | → `BearerToken(credentials[*_ACCESS_TOKEN])` (gateway pre-resolves OAuth2) |
| fallback | — | → `BearerToken(firstCredentialValue)` |

Credentials are **never** written to `process.env`. They flow only through the auth provider's `applyToRequest(headers)` method.

## Performance

Context creation using `vm.createContext()` and script execution via `vm.Script.runInContext()` adds minimal overhead over a direct call. Typical measurements:

| Component | Overhead |
|-----------|----------|
| `vm.createContext()` | ~0.5–2ms per call |
| `vm.Script.runInContext()` | ~0.1ms |
| Bridge + auth resolution | ~0.1ms |
| **Total sandbox overhead** | **~1–3ms** (vs direct call) |

The dominant cost is always the provider's HTTP request, not the sandbox.

## Architecture

```
caller
  │
  ▼
Isolate.execute(options)
  │
  ├─ [host]  import(module)              ← Node.js-cached, runs in host
  ├─ [host]  resolveAuthProvider(credentials, utdk.auth)
  ├─ [host]  loadProviderClient(module, auth)
  ├─ [host]  resolveOperation(client, 'users.getByUsername')
  ├─ [host]  createBridge({ operation })
  │
  ├─ [vm]   createContext({ __bridge__, __args__, safe globals })
  └─ [vm]   vm.Script: `__bridge__.call(__args__)`
               └─ [host, via bridge] operationFn(args)
                     └─ [network] HTTP with injected auth headers
```

The sandbox context is **created fresh per call** — no shared mutable state between executions.

## ESM / vm.Module upgrade path

The current implementation uses `vm.Script` (stable API) for the thin orchestration script inside the sandbox. This is sufficient because:
- The script is a single expression: `__bridge__.call(__args__)`
- Provider code runs in the host context (behind the bridge), not inside the sandbox

To run provider code itself inside an ESM sandbox (for stronger isolation), upgrade to `vm.SourceTextModule`:

```typescript
// Requires: node --experimental-vm-modules
import { SourceTextModule, createContext } from 'node:vm';

const mod = new SourceTextModule(providerSourceCode, { context });
await mod.link(customLinker);  // linker must block fs/process imports
await mod.evaluate({ timeout: 5_000 });
```

This requires `--experimental-vm-modules` and a custom linker that blocks dangerous Node.js built-in imports (`fs`, `child_process`, `process`, etc.).

## Requirements

- Node.js ≥ 20
- `@utdk/common` (workspace dependency)
