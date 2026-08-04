/**
 * Deep namespace proxies — the "assumed import" mechanism shared by the
 * registry playground and patchwork widgets.
 *
 * A proxy rooted at a provider (optionally under a dot-path prefix) resolves
 * arbitrary nested member access to a callable, so `github.repos.list(args)`
 * becomes `transport.call("github", "repos.list", args)` with no generated
 * client code.
 *
 * Depth-0 invocation configures and returns a node (tools-global D2); depth ≥ 1
 * dispatches. Configuration payload shape is owned by profiles-unified; this
 * package only establishes the call-signature seam and optionally pins a
 * profile name onto subsequent calls via {@link TransportCallOptions.profile}.
 */

import type { RuntimeDependency, Transport, TransportCallOptions } from "./types.js";

/** @deprecated Prefer an explicit `.default` path; kept for callers that still name it. */
export const ROOT_OPERATION = "default";

export type NamespaceProxy = ((
  ...args: unknown[]
) => NamespaceProxy | Promise<unknown>) &
  Record<string, unknown>;

function extractProfile(config: unknown): string | undefined {
  if (typeof config === "string" && config) return config;
  if (config && typeof config === "object" && !Array.isArray(config)) {
    const record = config as Record<string, unknown>;
    if (typeof record["name"] === "string" && record["name"]) return record["name"];
    if (typeof record["profile"] === "string" && record["profile"]) {
      return record["profile"];
    }
  }
  return undefined;
}

/**
 * Create a callable deep proxy for one provider namespace.
 *
 * @param provider - UTDK provider name, e.g. "github".
 * @param transport - Where calls are sent.
 * @param pathPrefix - Dot-path prepended to every access, e.g. "s3" for
 *   `import s3 from "aws/s3"`.
 */
export function createNamespaceProxy(
  provider: string,
  transport: Transport,
  pathPrefix = "",
  options?: TransportCallOptions,
): NamespaceProxy {
  function nested(path: string, callOptions: TransportCallOptions | undefined): NamespaceProxy {
    const invoke = (...args: unknown[]) => {
      // Depth-0 configure: return a (possibly profile-pinned) node, no dispatch.
      if (!path) {
        const pinned = extractProfile(args[0]);
        const nextOptions =
          pinned !== undefined
            ? { ...callOptions, profile: pinned }
            : callOptions;
        return nested(pathPrefix, nextOptions);
      }

      const callArgs =
        args[0] && typeof args[0] === "object" && !Array.isArray(args[0])
          ? (args[0] as Record<string, unknown>)
          : {};
      return transport.call(provider, path, callArgs, callOptions);
    };

    return new Proxy(invoke, {
      get(_target, property: string | symbol) {
        if (typeof property === "symbol") return undefined;
        // Keep promise-detection (`then`) off the root so `await proxy`
        // doesn't recurse; nested `.then` is still reachable as an operation.
        if (path === "" && property === "then") return undefined;
        return nested(path ? `${path}.${property}` : property, callOptions);
      },
    }) as NamespaceProxy;
  }

  return nested(pathPrefix, options);
}

/**
 * Build the global bindings for a manifest's dependencies, keyed by the
 * script-local identifier: `{ s3: <proxy aws/s3>, github: <proxy github> }`.
 */
export function createRuntimeGlobals(
  dependencies: RuntimeDependency[],
  transport: Transport,
): Record<string, NamespaceProxy> {
  const globals: Record<string, NamespaceProxy> = {};
  for (const dependency of dependencies) {
    globals[dependency.identifier] = createNamespaceProxy(
      dependency.provider,
      transport,
      dependency.path,
    );
  }
  return globals;
}
