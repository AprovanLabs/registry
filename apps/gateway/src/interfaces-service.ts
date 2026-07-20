/**
 * `interfaces` core service — inspect and bind generic interfaces from any
 * surface (chat, widgets, scripts, registry UI). Like every core service it
 * rides tool discovery, so "switch my LLM to Claude" is a normal tool call.
 */

import { getCredentialStore } from "./credentials.js";
import {
  listInterfaces,
  readBindings,
  resolveInterface,
  writeBinding,
} from "./interfaces.js";
import { ServiceError, type CoreService } from "./services.js";

export const interfacesService: CoreService = {
  tools: [
    {
      name: "interfaces.list",
      operation: "list",
      description:
        "List generic interfaces (llm, …): compatible providers, which are connected, and the workspace's current binding. Scripts call interfaces as namespaces (llm.createChatCompletion) and the binding picks the implementation.",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "interfaces.bind",
      operation: "bind",
      description:
        "Bind an interface to a compatible provider for this workspace (e.g. { interface: 'llm', provider: 'anthropic', options: { model: 'claude-sonnet-5' } }). Calls through the interface then use that provider's credential and connection.",
      inputSchema: {
        type: "object",
        properties: {
          interface: { type: "string" },
          provider: { type: "string" },
          options: { type: "object", description: "Option overrides (e.g. { model })" },
        },
        required: ["interface", "provider"],
      },
    },
    {
      name: "interfaces.unbind",
      operation: "unbind",
      description:
        "Remove an interface binding; the interface falls back to the first connected compatible provider.",
      inputSchema: {
        type: "object",
        properties: { interface: { type: "string" } },
        required: ["interface"],
      },
    },
  ],

  async call(ctx, procedure, args) {
    // Bindings are workspace configuration; app sessions cannot manage them.
    if (ctx.appScope && procedure !== "list") {
      throw new ServiceError("interface bindings are not manageable by app sessions", 403);
    }
    switch (procedure) {
      case "list": {
        const [bindings, credentials] = await Promise.all([
          readBindings(ctx.workspaceId),
          getCredentialStore().list(ctx.workspaceId),
        ]);
        const connected = new Set(credentials.map((credential) => credential.provider));
        return {
          interfaces: listInterfaces().map((def) => ({
            id: def.id,
            label: def.label,
            description: def.description,
            binding: bindings[def.id] ?? null,
            compat: def.compat.map((entry) => ({
              provider: entry.provider,
              label: entry.label,
              defaults: entry.defaults ?? {},
              connected: connected.has(entry.provider),
            })),
          })),
        };
      }
      case "bind": {
        const interfaceId = String(args["interface"] ?? "");
        const provider = String(args["provider"] ?? "");
        const def = resolveInterface(interfaceId);
        if (!def) throw new ServiceError(`Unknown interface: ${interfaceId}`, 404);
        if (!def.compat.some((entry) => entry.provider === provider)) {
          throw new ServiceError(
            `${provider} does not implement ${interfaceId}. Compatible: ${def.compat.map((c) => c.provider).join(", ")}`,
            400,
          );
        }
        const options =
          args["options"] && typeof args["options"] === "object" && !Array.isArray(args["options"])
            ? (args["options"] as Record<string, unknown>)
            : undefined;
        await writeBinding(ctx.workspaceId, interfaceId, { provider, options });
        return { interface: interfaceId, provider, options: options ?? {} };
      }
      case "unbind": {
        const interfaceId = String(args["interface"] ?? "");
        if (!resolveInterface(interfaceId)) {
          throw new ServiceError(`Unknown interface: ${interfaceId}`, 404);
        }
        await writeBinding(ctx.workspaceId, interfaceId, null);
        return { interface: interfaceId, unbound: true };
      }
      default:
        throw new ServiceError(`Unknown interfaces procedure: ${procedure}`, 404);
    }
  },
};
