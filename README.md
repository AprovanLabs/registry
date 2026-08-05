# Aprovan Registry

Generate, manage, and serve high-quality 3rd party integrations.

## Modules

_While the registry prefers TypeScript as the first-party supported language, all design decisions are open for implementation in other languages._

- [packages/utdk](packages/utdk): Serve and manage permissions/credentials for user-level access to 3rd party applications.
    - Supports exposing 3rd party applications as MCP toolkits
    - Optionally search available tools via management endpoints and tools
    - A built-in, Isolate runtime allows running sandboxed tools as TypeScript modules
- [packages/runtime](packages/runtime): The shared sandbox runtime (`@aprovan/runtime`) — the formal boundary between the registry (execution plane: SDKs, gateway, credentials, telemetry) and patchwork (UI plane: generative widgets).
    - Declared dependencies become namespace proxies (`github.repos.list(...)`) whose calls route through the gateway, where credentials are injected server-side
    - Execution policy (retries, backoff, rate limits, timeouts) configured globally, per provider, or per call
    - A `RuntimeEvent` stream (call spans, retries, logs) feeds live execution views; a browser iframe sandbox speaks the same postMessage protocol as patchwork widgets
- [packages/bundler](packages/bundler): Combine scraped 3rd party OpenAPI specs and associated documentation to auto-generate versioned 3rd party MCP clients. We rely on UTCP for it's method of service external APIs as a single source and a UTCP code mode-inspired method using Isolates for the actual execution.
    - [providers.json](./docs/data/providers.json) provides a set of potential UTCP-documented APIs.
- [apps/registry](apps/registry): Registry web app for searching versioned 3rd party APIs and registering integration credentials.
    - View and consume 3rd party API docs as regular MCP tool endpoints _or_ as an SDK for the sandboxed Isolate runtime
- [apps/tailor](apps/tailor): Generate single-file scripts in a web app which reference the UTDK-generated SDK tooling.
    - Integrates neatly with the UTDK SDK docs by relying on a UTDK MCP endpoint to search documentation as TypeScript files

## License

[MIT](LICENSE) © Aprovan Labs.

Generated provider clients under `packages/utdk/<provider>` are derived from each
vendor's own OpenAPI specification and carry that spec's license, declared in the
package's `package.json`. They are not covered by the MIT license above.
