/**
 * `src/ssm-env.ts` unit tests — mocked `SSMClient`, no network/AWS access.
 *
 * Covers the module contract from tech-plan.md: chunking to <=10 names per
 * `GetParameters` call, `WithDecryption: true` always set, missing parameters
 * omitted (not thrown) from the result, and an API/auth failure propagating.
 */

import { GetParametersCommand, SSMClient } from "@aws-sdk/client-ssm";
import { mockClient } from "aws-sdk-client-mock";
import { beforeEach, describe, expect, it } from "vitest";
import { fetchFromSsm } from "../src/ssm-env.js";

const ssmMock = mockClient(SSMClient);

beforeEach(() => {
  ssmMock.reset();
});

describe("fetchFromSsm", () => {
  it("resolves values for parameters SSM has, using the default prefix", async () => {
    ssmMock.on(GetParametersCommand).resolves({
      Parameters: [
        { Name: "/aprovan/test/utdk-creds/GITHUB_TOKEN", Value: "ghp_abc123" },
      ],
    });

    const result = await fetchFromSsm(["GITHUB_TOKEN"], { client: ssmMock as unknown as SSMClient });

    expect(result).toEqual({ GITHUB_TOKEN: "ghp_abc123" });
  });

  it("always requests WithDecryption: true", async () => {
    ssmMock.on(GetParametersCommand).resolves({ Parameters: [] });

    await fetchFromSsm(["GITHUB_TOKEN"], { client: ssmMock as unknown as SSMClient });

    const calls = ssmMock.commandCalls(GetParametersCommand);
    expect(calls.length).toBeGreaterThan(0);
    for (const call of calls) {
      expect(call.args[0].input.WithDecryption).toBe(true);
    }
  });

  it("chunks requests to at most 10 names per GetParameters call", async () => {
    ssmMock.on(GetParametersCommand).resolves({ Parameters: [] });

    const names = Array.from({ length: 25 }, (_, index) => `VAR_${index}`);
    await fetchFromSsm(names, { client: ssmMock as unknown as SSMClient });

    const calls = ssmMock.commandCalls(GetParametersCommand);
    // 25 names at <=10 per call requires at least 3 calls.
    expect(calls.length).toBe(3);
    for (const call of calls) {
      expect(call.args[0].input.Names!.length).toBeLessThanOrEqual(10);
    }
    const totalRequested = calls.reduce((sum, call) => sum + call.args[0].input.Names!.length, 0);
    expect(totalRequested).toBe(25);
  });

  it("omits missing parameters from the result rather than throwing", async () => {
    ssmMock.on(GetParametersCommand).resolves({
      Parameters: [{ Name: "/aprovan/test/utdk-creds/GITHUB_TOKEN", Value: "ghp_abc123" }],
      InvalidParameters: ["/aprovan/test/utdk-creds/MERCURY_API_TOKEN"],
    });

    const result = await fetchFromSsm(["GITHUB_TOKEN", "MERCURY_API_TOKEN"], {
      client: ssmMock as unknown as SSMClient,
    });

    expect(result).toEqual({ GITHUB_TOKEN: "ghp_abc123" });
    expect(result["MERCURY_API_TOKEN"]).toBeUndefined();
  });

  it("returns an empty object when given no names, without calling SSM", async () => {
    const result = await fetchFromSsm([], { client: ssmMock as unknown as SSMClient });

    expect(result).toEqual({});
    expect(ssmMock.commandCalls(GetParametersCommand).length).toBe(0);
  });

  it("propagates an API/auth failure (e.g. AccessDeniedException)", async () => {
    ssmMock.on(GetParametersCommand).rejects(new Error("AccessDeniedException"));

    await expect(
      fetchFromSsm(["GITHUB_TOKEN"], { client: ssmMock as unknown as SSMClient }),
    ).rejects.toThrow("AccessDeniedException");
  });

  it("uses a custom parameterPrefix when given", async () => {
    ssmMock.on(GetParametersCommand).resolves({
      Parameters: [{ Name: "/custom/prefix/GITHUB_TOKEN", Value: "ghp_abc123" }],
    });

    const result = await fetchFromSsm(["GITHUB_TOKEN"], {
      client: ssmMock as unknown as SSMClient,
      parameterPrefix: "/custom/prefix/",
    });

    expect(result).toEqual({ GITHUB_TOKEN: "ghp_abc123" });
    const calls = ssmMock.commandCalls(GetParametersCommand);
    expect(calls[0]!.args[0].input.Names).toEqual(["/custom/prefix/GITHUB_TOKEN"]);
  });
});
