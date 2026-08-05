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
 * dispatches. Configuration accepts the former `client(name)` /
 * `client({ name, options })` shapes — either as a depth-0 call or via the
 * reserved `.client` property — and pins `profile` / call-site `options` onto
 * subsequent calls through {@link TransportCallOptions}.
 */

import type {
  ProviderAliasMap,
  RuntimeDependency,
  Transport,
  TransportCallOptions,
} from "./types.js";
import { AliasResolutionError } from "./types.js";

/** @deprecated Prefer an explicit `.default` path; kept for callers that still name it. */
export const ROOT_OPERATION = "default";

export type NamespaceProxy = ((
  ...args: unknown[]
) => NamespaceProxy | Promise<unknown>) &
  Record<string, unknown>;

interface ConfigurePin {
  profile?: string;
  options?: Record<string, unknown>;
}

/**
 * Parse a depth-0 / `.client` configure argument into a profile pin and
 * optional call-site options. Accepts `name`, `{ name, options }`, and the
 * legacy `{ profile }` spelling.
 */
export function extractConfigurePin(config: unknown): ConfigurePin {
  if (config === undefined || config === null) return {};
  if (typeof config === "string") {
    return config ? { profile: config } : {};
  }
  if (typeof config !== "object" || Array.isArray(config)) return {};
  const record = config as Record<string, unknown>;
  const profile =
    typeof record["name"] === "string" && record["name"]
      ? record["name"]
      : typeof record["profile"] === "string" && record["profile"]
        ? record["profile"]
        : undefined;
  const options =
    record["options"] &&
    typeof record["options"] === "object" &&
    !Array.isArray(record["options"])
      ? (record["options"] as Record<string, unknown>)
      : undefined;
  return {
    ...(profile !== undefined ? { profile } : {}),
    ...(options !== undefined ? { options } : {}),
  };
}

function mergePin(
  base: TransportCallOptions | undefined,
  pin: ConfigurePin,
): TransportCallOptions | undefined {
  if (pin.profile === undefined && pin.options === undefined) return base;
  return {
    ...base,
    ...(pin.profile !== undefined ? { profile: pin.profile } : {}),
    ...(pin.options !== undefined
      ? { callSiteOptions: { ...base?.callSiteOptions, ...pin.options } }
      : {}),
  };
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
        return nested(pathPrefix, mergePin(callOptions, extractConfigurePin(args[0])));
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
        // Reserved configure surface — same shapes as depth-0, no await.
        if (path === "" && property === "client") {
          return (config?: unknown) =>
            nested(pathPrefix, mergePin(callOptions, extractConfigurePin(config)));
        }
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

export type ToolsGlobal = Record<string, NamespaceProxy>;

/**
 * Build the full `tools` global from an alias map. Each alias binds to a
 * namespace proxy rooted at its canonical provider name; unknown aliases
 * throw rather than returning `undefined`.
 */
export function createToolsGlobal(
  aliases: ProviderAliasMap,
  transport: Transport,
): ToolsGlobal {
  const tools: Record<string, NamespaceProxy> = {};
  for (const [alias, provider] of aliases) {
    tools[alias] = createNamespaceProxy(provider, transport);
  }

  return new Proxy(tools, {
    get(target, property, receiver) {
      if (typeof property === "symbol") {
        return Reflect.get(target, property, receiver);
      }
      const key = String(property);
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        return target[key];
      }
      throw new AliasResolutionError(key);
    },
  });
}
