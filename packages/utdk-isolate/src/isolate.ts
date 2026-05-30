/**
 * Isolate — sandboxed Node.js vm execution runtime for @utdk tool calls.
 *
 * Each call to `execute()` runs in a fresh `vm.createContext()` sandbox:
 *   - No access to `process.env`, `fs`, `child_process`, `require`, or any
 *     other Node.js host API that could leak credentials or touch the disk.
 *   - Credentials are injected by the gateway at call time via a controlled
 *     bridge object (`__bridge__`). The sandbox script only calls the bridge;
 *     it never receives raw credential strings.
 *   - Module cache is isolated per call (new context each time, no
 *     cross-call state leakage).
 *   - Timeout is enforced via `Promise.race`; runaway async operations are
 *     rejected with a `TimeoutError`.
 *
 * For synchronous CPU spin-loops an additional `vm.Script` timeout guard is
 * applied; the async watchdog covers everything else.
 *
 * ## Architecture
 *
 * ```
 *  caller
 *    │
 *    ▼
 *  Isolate.execute(options)
 *    │
 *    ├─ [host]  dynamically import provider module
 *    ├─ [host]  resolve auth provider from credentials + utdk.auth config
 *    ├─ [host]  create provider client with auth provider
 *    ├─ [host]  resolve operation function (dot-notation path)
 *    ├─ [host]  create bridge  { call(args) => operationFn(args) }
 *    │
 *    ├─ [vm]   createContext(minimal globals + __bridge__ + __args__)
 *    └─ [vm]   run `__bridge__.call(__args__)` inside sandbox
 *                 └─ [host, via bridge] call provider with credentials
 *                       └─ [network] HTTP request with injected auth headers
 * ```
 *
 * ## ESM / vm.Module note
 *
 * Node.js 20+ supports `vm.SourceTextModule` (ESM) with the
 * `--experimental-vm-modules` flag. The current implementation uses the
 * stable `vm.Script` API for the thin orchestration script, which is
 * sufficient because:
 *   - The script is one line (`__bridge__.call(__args__)`).
 *   - Full provider code runs outside the sandbox (in host context) behind
 *     the bridge abstraction.
 *
 * If future requirements call for running provider code itself inside an ESM
 * module sandbox, upgrade to `vm.SourceTextModule` with a custom linker
 * (see `upgrade notes` in the README).
 */

import vm from "node:vm";
import {
  createBridge,
  extractAuthConfigs,
  loadProviderClient,
  resolveAuthProvider,
  resolveOperation,
} from "./bridge.js";
import { createSandboxContext } from "./sandbox.js";
import { TimeoutError, type ExecuteOptions, type ExecuteResult } from "./types.js";

/** Script executed inside the sandbox for every tool call. */
const SANDBOX_SCRIPT = new vm.Script("__bridge__.call(__args__)");

/**
 * Sandboxed execution runtime for @utdk tool calls.
 *
 * @example
 * ```typescript
 * const isolate = new Isolate();
 * const result = await isolate.execute({
 *   module: '@utdk/github',
 *   operation: 'users.getByUsername',
 *   args: { username: 'octocat' },
 *   credentials: { GITHUB_TOKEN: '<injected-by-gateway>' },
 *   timeout: 10_000,
 * });
 * console.log(result.data, `(${result.durationMs}ms)`);
 * ```
 */
export class Isolate {
  /**
   * Executes a single @utdk tool call inside a fresh vm sandbox.
   *
   * Steps:
   * 1. Dynamically import the provider module (host context, cached by Node.js).
   * 2. Resolve an `AuthProvider` from the supplied credentials and the
   *    provider's `utdk.auth` config. Credentials are NEVER written to
   *    `process.env`.
   * 3. Instantiate the provider client with the auth provider.
   * 4. Resolve the operation function via dot-notation path.
   * 5. Create a bridge and a fresh vm context.
   * 6. Run the sandbox script `__bridge__.call(__args__)` inside the context.
   * 7. Race the execution against the timeout.
   *
   * @throws `TimeoutError` if execution exceeds `options.timeout`.
   * @throws `TypeError`    if the operation path does not resolve to a function.
   * @throws `Error`        on provider loading or HTTP failures.
   */
  async execute(options: ExecuteOptions): Promise<ExecuteResult> {
    const {
      module: moduleName,
      operation,
      args = {},
      credentials = {},
      timeout = 30_000,
    } = options;

    const startMs = performance.now();

    // ------------------------------------------------------------------
    // Step 1: Load the provider module in HOST context
    // ------------------------------------------------------------------
    // Dynamic import is Node.js-cached so repeated calls to the same
    // provider do not re-parse the module. The provider runs in host
    // context (not in the sandbox) — it is trusted code.
    const providerModule = (await import(moduleName)) as Record<string, unknown>;

    // ------------------------------------------------------------------
    // Step 2: Resolve auth provider from credentials
    // ------------------------------------------------------------------
    const authConfigs = extractAuthConfigs(providerModule);
    const auth = resolveAuthProvider(credentials, authConfigs);

    // ------------------------------------------------------------------
    // Step 3: Create the provider client with credential injection
    // ------------------------------------------------------------------
    const client = await loadProviderClient(providerModule, auth);

    // ------------------------------------------------------------------
    // Step 4: Resolve the operation function
    // ------------------------------------------------------------------
    const operationFn = resolveOperation(client, operation);

    // ------------------------------------------------------------------
    // Step 5: Create the credential bridge and sandboxed vm context
    // ------------------------------------------------------------------
    // The bridge is created in host context and passed into the sandbox.
    // The sandbox script can only call bridge.call(args) — it cannot
    // reach process.env, require, fs, or any host API.
    const bridge = createBridge({ operation: operationFn });

    const context = createSandboxContext({
      extraGlobals: {
        __bridge__: bridge,
        __args__: args,
      },
    });

    // ------------------------------------------------------------------
    // Step 6 + 7: Run inside sandbox, race against timeout
    // ------------------------------------------------------------------
    const data = await this._runWithTimeout(context, timeout);

    const durationMs = performance.now() - startMs;
    return { data, durationMs };
  }

  /**
   * Runs `SANDBOX_SCRIPT` in the given context and races against a timeout.
   *
   * The synchronous `vm.Script` timeout (`timeout` option in runInContext)
   * guards against infinite synchronous loops. The async watchdog (Promise.race)
   * guards against long-running await chains.
   */
  private _runWithTimeout(context: vm.Context, timeoutMs: number): Promise<unknown> {
    // The synchronous portion of the script (if any) is bounded by the vm timeout.
    // For the async portion we use Promise.race.
    let resultPromise: Promise<unknown>;

    try {
      // runInContext returns whatever the script evaluates to.
      // For our one-liner that calls an async bridge method, this is a Promise.
      const scriptResult = SANDBOX_SCRIPT.runInContext(context, {
        // Guard against synchronous infinite loops / busy spins.
        // This only applies to the synchronous execution phase; async
        // continuations are handled by the Promise.race below.
        timeout: timeoutMs,
      }) as unknown;

      resultPromise = Promise.resolve(scriptResult);
    } catch (err) {
      return Promise.reject(err);
    }

    // Async watchdog
    const timeoutPromise = new Promise<never>((_, reject) => {
      const timer = setTimeout(() => {
        reject(new TimeoutError(timeoutMs));
      }, timeoutMs);

      // Don't keep the process alive if only the timer is pending
      if (typeof (timer as NodeJS.Timeout).unref === "function") {
        (timer as NodeJS.Timeout).unref();
      }
    });

    return Promise.race([resultPromise, timeoutPromise]);
  }
}
