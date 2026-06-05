/**
 * Sandbox context creation for the Isolate runtime.
 *
 * A sandboxed vm context is created per tool call. The context provides a
 * minimal set of safe globals and explicitly excludes `process`, `require`,
 * `fs`, `child_process`, and other Node.js host APIs that could leak
 * environment variables or allow filesystem/subprocess access.
 *
 * The credential bridge (`__bridge__`) and call arguments (`__args__`) are
 * the only channels through which external state enters the sandbox.
 */

import vm from "node:vm";

type ConsoleMethod = "log" | "error" | "warn" | "info" | "debug";

const PREFIXED_METHODS: ConsoleMethod[] = ["log", "error", "warn", "info", "debug"];

function createPrefixedConsole(prefix: string): Record<ConsoleMethod, (...args: unknown[]) => void> {
  const console_: Pick<Console, ConsoleMethod> = console;
  return Object.fromEntries(
    PREFIXED_METHODS.map((method) => [method, (...args: unknown[]) => console_[method](prefix, ...args)]),
  ) as Record<ConsoleMethod, (...args: unknown[]) => void>;
}

const sandboxConsole = createPrefixedConsole("[sandbox]");

export interface SandboxOptions {
  /**
   * Additional globals to expose inside the vm context.
   * Use sparingly; every addition is a potential escape hatch.
   */
  extraGlobals?: Record<string, unknown>;
}

/**
 * Creates a fresh, restricted vm context.
 *
 * Accessible globals:
 *   console, JSON, Math, Date, Promise, Array, Object, String, Number,
 *   Boolean, Error, TypeError, RangeError, Map, Set, WeakMap, WeakSet,
 *   Symbol, typed arrays, ArrayBuffer, URL, URLSearchParams,
 *   TextEncoder, TextDecoder, setTimeout, clearTimeout, setInterval,
 *   clearInterval, parseInt, parseFloat, isNaN, isFinite, encodeURI,
 *   decodeURI, encodeURIComponent, decodeURIComponent, Infinity, NaN,
 *   undefined.
 *
 * Deliberately excluded:
 *   process, require, global, Buffer, __dirname, __filename,
 *   fs, child_process, net, http, https, os, crypto (node:crypto),
 *   and any other Node.js built-in that exposes host resources.
 *
 * @param options - Optional extra globals to inject.
 * @returns A contextified vm sandbox object.
 */
export function createSandboxContext(options: SandboxOptions = {}): vm.Context {
  const sandbox: Record<string, unknown> = {
    // Safe builtins
    console: sandboxConsole,
    JSON,
    Math,
    Date,
    Promise,
    Array,
    Object,
    String,
    Number,
    Boolean,
    Error,
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError,
    Map,
    Set,
    WeakMap,
    WeakSet,
    WeakRef,
    Symbol,
    BigInt,

    // Typed arrays
    ArrayBuffer,
    SharedArrayBuffer,
    DataView,
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    BigInt64Array,
    BigUint64Array,

    // Web-compatible globals
    URL,
    URLSearchParams,
    TextEncoder,
    TextDecoder,

    // Timers (these are host-side and safe to expose)
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,

    // Standard globals
    parseInt,
    parseFloat,
    isNaN,
    isFinite,
    encodeURI,
    decodeURI,
    encodeURIComponent,
    decodeURIComponent,
    Infinity,
    NaN,
    undefined,

    // Explicitly do NOT add:
    //   process        — would expose process.env (credential leak)
    //   require        — would allow arbitrary module imports
    //   global         — alias for Node.js global; exposes process
    //   Buffer         — not needed in sandboxed operations
    //   __dirname      — filesystem information leak
    //   __filename     — filesystem information leak
    //   fetch          — injected separately per-operation via bridge (see bridge.ts)
    //   crypto         — would allow subtle attacks; excluded for now

    ...options.extraGlobals,
  };

  return vm.createContext(sandbox);
}
