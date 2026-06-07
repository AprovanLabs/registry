import { beforeEach, describe, expect, it, vi } from "vitest";
import { loadProviderTools } from "./utcp.js";

const { close, create, getTools, validateConfig, validateTemplate } = vi.hoisted(() => ({
  validateTemplate: vi.fn((value: unknown) => value),
  validateConfig: vi.fn((value: unknown) => value),
  getTools: vi.fn(async () => []),
  close: vi.fn(async () => undefined),
  create: vi.fn(async () => ({
    getTools,
    close,
  })),
}));

vi.mock("@utcp/http", () => ({
  HttpCallTemplateSerializer: class {
    validateDict(value: unknown): unknown {
      return validateTemplate(value);
    }
  },
}));

vi.mock("@utcp/sdk", () => ({
  UtcpClient: {
    create,
  },
  UtcpClientConfigSerializer: class {
    validateDict(value: unknown): unknown {
      return validateConfig(value);
    }
  },
}));

describe("loadProviderTools", () => {
  beforeEach(() => {
    validateTemplate.mockClear();
    validateConfig.mockClear();
    getTools.mockClear();
    close.mockClear();
    create.mockClear();
  });

  it("omits auth from the UTCP discovery template so variable resolution does not block tool enumeration", async () => {
    await loadProviderTools({
      name: "datadog",
      url: "https://example.com/openapi.yaml",
      fetch_method: "GET",
      options: {
        auth: [
          {
            auth_type: "api_key",
            api_key: "${DD_API_KEY}",
            var_name: "DD-API-KEY",
            location: "header",
          },
        ],
      },
    });

    expect(validateTemplate).toHaveBeenCalledWith(
      expect.not.objectContaining({
        auth: expect.anything(),
      }),
    );
    expect(validateConfig).toHaveBeenCalledWith(
      expect.objectContaining({
        manual_call_templates: [expect.not.objectContaining({ auth: expect.anything() })],
      }),
    );
    expect(getTools).toHaveBeenCalledTimes(1);
    expect(close).toHaveBeenCalledTimes(1);
  });
});
