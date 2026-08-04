import { describe, expect, it } from "vitest";
import { relabelEntries } from "../src/http/discovery.js";

describe("relabelEntries outputSchema slot", () => {
  it("preserves outputSchema through discovery relabelling", () => {
    const schema = {
      type: "object",
      properties: { path: { type: "string" } },
      required: ["path"],
    };
    const relabelled = relabelEntries("vfs", [
      {
        name: "vfs.read",
        description: "Read a file",
        inputSchema: { type: "object", properties: {} },
        outputSchema: schema,
      },
    ]);
    expect(relabelled).toHaveLength(1);
    expect(relabelled[0]!.outputSchema).toEqual(schema);
    expect(relabelled[0]!.streaming).toBeUndefined();
  });

  it("omits outputSchema when absent rather than setting a placeholder", () => {
    const relabelled = relabelEntries("vfs", [
      {
        name: "vfs.read",
        description: "Read a file",
        inputSchema: { type: "object", properties: { path: { type: "string" } } },
      },
    ]);
    expect(relabelled).toHaveLength(1);
    expect(Object.prototype.hasOwnProperty.call(relabelled[0], "outputSchema")).toBe(false);
    expect(Object.prototype.hasOwnProperty.call(relabelled[0], "streaming")).toBe(false);
  });

  it("preserves streaming marker when present", () => {
    const relabelled = relabelEntries("llm", [
      {
        name: "llm.stream",
        description: "Stream tokens",
        inputSchema: { type: "object", properties: {} },
        streaming: true,
      },
    ]);
    expect(relabelled[0]!.streaming).toBe(true);
    expect(Object.prototype.hasOwnProperty.call(relabelled[0], "outputSchema")).toBe(false);
  });
});
