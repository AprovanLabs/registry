import { beforeEach, describe, expect, it, vi } from "vitest";

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

import { loadProviderTools } from "./utcp.js";

describe("loadProviderTools", () => {
  beforeEach(() => {
    validateTemplate.mockClear();
    validateConfig.mockClear();
    getTools.mockClear();
    close.mockClear();
    create.mockClear();
  });

  it("passes the primary configured auth method into UTCP discovery", async () => {
    const primaryAuth = {
      auth_type: "api_key",
      api_key: "${DD_API_KEY}",
      var_name: "DD-API-KEY",
      location: "header",
    };

    await loadProviderTools({
      name: "datadog",
      url: "https://example.com/openapi.yaml",
      http_method: "GET",
      options: {
        auth: [
          primaryAuth,
          {
            auth_type: "api_key",
            api_key: "${DD_APP_KEY}",
            var_name: "DD-APPLICATION-KEY",
            location: "header",
          },
        ],
      },
    });

    expect(validateTemplate).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "datadog",
        auth: primaryAuth,
      }),
    );
    expect(validateConfig).toHaveBeenCalledWith(
      expect.objectContaining({
        manual_call_templates: [expect.objectContaining({ auth: primaryAuth })],
      }),
    );
    expect(getTools).toHaveBeenCalledTimes(1);
    expect(close).toHaveBeenCalledTimes(1);
  });
});
