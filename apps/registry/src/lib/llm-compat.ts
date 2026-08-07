/**
 * Snapshot of the chat-provider registry for catalog build-time compat
 * composition (llm contract's `compatSource: "chat-provider-registry"`).
 *
 * The live registry lives in the product server (`server/workspace/src/llm.ts`
 * in aprovan). This file is a build-time snapshot so the catalog site does not
 * import from `apps/workspace` — that tree is deleted in stream 10 after
 * cutover soak. Update when chat providers change upstream.
 */

export interface LlmChatProvider {
  /** Chat-facing provider id — also the credential-store key. */
  id: string;
  label: string;
  /** UTDK module that executes chat operations for this provider. */
  module: string;
  /** OpenAI-compat API root; undefined = the module's own spec server. */
  baseUrl?: string;
  defaultModel: string;
}

function envOverride(id: string, key: "BASE_URL" | "DEFAULT_MODEL"): string | undefined {
  const slug = id.toUpperCase().replace(/[^A-Z0-9]+/gu, "_");
  return process.env[`LLM_${slug}_${key}`] || undefined;
}

const CHAT_PROVIDERS: LlmChatProvider[] = [
  {
    id: "openai",
    label: "OpenAI",
    module: "openai",
    defaultModel: "gpt-5.1",
  },
  {
    id: "anthropic",
    label: "Claude",
    module: "openai",
    baseUrl: "https://api.anthropic.com/v1",
    defaultModel: "claude-sonnet-5",
  },
  {
    id: "gemini",
    label: "Gemini",
    module: "openai",
    baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai",
    defaultModel: "gemini-2.5-flash",
  },
  {
    id: "synthetic.new",
    label: "Synthetic.new",
    module: "openai",
    baseUrl: "https://api.synthetic.new/openai/v1",
    defaultModel: "hf:zai-org/GLM-5.2",
  },
  {
    id: "openrouter",
    label: "OpenRouter",
    module: "openai",
    baseUrl: "https://openrouter.ai/api/v1",
    defaultModel: "openrouter/auto",
  },
  {
    id: "apple",
    label: "Apple on-device",
    module: "openai",
    baseUrl: "http://127.0.0.1:0/v1",
    defaultModel: "apple-on-device",
  },
];

export function listLlmProviders(): LlmChatProvider[] {
  return CHAT_PROVIDERS.map((provider) => ({
    ...provider,
    baseUrl: envOverride(provider.id, "BASE_URL") ?? provider.baseUrl,
    defaultModel: envOverride(provider.id, "DEFAULT_MODEL") ?? provider.defaultModel,
  }));
}
