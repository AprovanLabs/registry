import {
  DeleteObjectCommand,
  GetObjectCommand,
  HeadObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { describe, expect, it, vi } from "vitest";
import { VfsError } from "../index.js";
import {
  createS3Vfs,
  normalizeEtag,
  parseAwsCredentials,
  requireS3Option,
} from "../s3.js";

const creds = { accessKeyId: "AKIA", secretAccessKey: "secret" };
const config = { bucket: "my-bucket", prefix: "ws" };

type SendHandler = (command: unknown) => Promise<unknown>;

function mockClient(handler: SendHandler) {
  return { send: vi.fn(handler) };
}

const statusOf = async (fn: () => Promise<unknown>): Promise<number> => {
  try {
    await fn();
  } catch (error) {
    if (error instanceof VfsError) return error.status;
    throw error;
  }
  throw new Error("expected a VfsError");
};

describe("parseAwsCredentials", () => {
  it("parses a JSON bearer secret", () => {
    expect(
      parseAwsCredentials(
        JSON.stringify({ accessKeyId: "A", secretAccessKey: "B", sessionToken: "C" }),
      ),
    ).toEqual({ accessKeyId: "A", secretAccessKey: "B", sessionToken: "C" });
  });

  it("rejects malformed secrets with 400", () => {
    expect(() => parseAwsCredentials("not-json")).toThrow(VfsError);
    expect(() => parseAwsCredentials("{}")).toThrow(/accessKeyId/u);
  });
});

describe("normalizeEtag", () => {
  it("strips surrounding quotes from S3 ETags", () => {
    expect(normalizeEtag('"abc123"')).toBe("abc123");
    expect(normalizeEtag("abc123")).toBe("abc123");
  });
});

describe("requireS3Option", () => {
  it("requires a non-empty string", () => {
    expect(requireS3Option("bucket-1", "bucket")).toBe("bucket-1");
    expect(() => requireS3Option("", "bucket")).toThrow(/bucket/u);
  });
});

describe("createS3Vfs", () => {
  it("round-trips write then read", async () => {
    const store = new Map<string, { body: Uint8Array; etag: string }>();
    const client = mockClient(async (command) => {
      if (command instanceof PutObjectCommand) {
        const etag = `"etag-${store.size + 1}"`;
        store.set(command.input.Key!, { body: command.input.Body as Uint8Array, etag });
        return { ETag: etag };
      }
      if (command instanceof GetObjectCommand) {
        const entry = store.get(command.input.Key!);
        if (!entry) {
          const err = new Error("NoSuchKey");
          err.name = "NoSuchKey";
          throw err;
        }
        return { Body: entry.body, ETag: entry.etag, ContentLength: entry.body.length };
      }
      throw new Error(`unexpected ${command.constructor.name}`);
    });

    const vfs = createS3Vfs(creds, config, { client });
    const written = await vfs.write({ path: "notes/hello.txt", content: "hello" });
    expect(written).toMatchObject({ path: "notes/hello.txt", kind: "file", etag: "etag-1" });

    const read = await vfs.read({ path: "notes/hello.txt" });
    expect(read).toMatchObject({
      path: "notes/hello.txt",
      encoding: "utf8",
      content: "hello",
      etag: "etag-1",
    });
    expect((client.send.mock.calls[0]![0] as PutObjectCommand).input.Key).toBe("ws/notes/hello.txt");
  });

  it("maps ifMatch etag mismatch to 409", async () => {
    const client = mockClient(async (command) => {
      if (command instanceof PutObjectCommand) {
        const err = new Error("PreconditionFailed");
        err.name = "PreconditionFailed";
        throw err;
      }
      throw new Error("unexpected");
    });
    const vfs = createS3Vfs(creds, config, { client });
    expect(
      await statusOf(() =>
        vfs.write({ path: "a.txt", content: "x", ifMatch: "stale" }),
      ),
    ).toBe(409);
  });

  it('rejects ifMatch "*" when the object is absent with 409', async () => {
    const client = mockClient(async (command) => {
      if (command instanceof HeadObjectCommand) {
        const err = new Error("NotFound");
        err.name = "NotFound";
        throw err;
      }
      throw new Error("unexpected");
    });
    const vfs = createS3Vfs(creds, config, { client });
    expect(
      await statusOf(() => vfs.write({ path: "missing.txt", content: "x", ifMatch: "*" })),
    ).toBe(409);
  });

  it("reports deleted:false for an absent file", async () => {
    const client = mockClient(async (command) => {
      if (command instanceof HeadObjectCommand) {
        const err = new Error("NotFound");
        err.name = "NotFound";
        throw err;
      }
      throw new Error("unexpected");
    });
    const vfs = createS3Vfs(creds, config, { client });
    await expect(vfs.delete({ path: "gone.txt" })).resolves.toEqual({
      path: "gone.txt",
      deleted: false,
    });
  });

  it("stats a directory prefix", async () => {
    const client = mockClient(async (command) => {
      if (command instanceof HeadObjectCommand) {
        const err = new Error("NotFound");
        err.name = "NotFound";
        throw err;
      }
      if (command instanceof ListObjectsV2Command) {
        return { Contents: [{ Key: "ws/dir/child.txt", Size: 3, ETag: '"e1"' }] };
      }
      throw new Error("unexpected");
    });
    const vfs = createS3Vfs(creds, config, { client });
    await expect(vfs.stat({ path: "dir" })).resolves.toEqual({ path: "dir", kind: "directory" });
  });

  it("lists immediate children with a delimiter", async () => {
    const client = mockClient(async (command) => {
      if (command instanceof ListObjectsV2Command) {
        expect(command.input.Delimiter).toBe("/");
        expect(command.input.Prefix).toBe("ws/");
        return {
          CommonPrefixes: [{ Prefix: "ws/a/" }],
          Contents: [{ Key: "ws/b.txt", Size: 1, ETag: '"e2"' }],
        };
      }
      throw new Error("unexpected");
    });
    const vfs = createS3Vfs(creds, config, { client });
    const page = await vfs.list();
    expect(page.entries.map((entry) => entry.path)).toEqual(["a", "b.txt"]);
    expect(page.entries.find((entry) => entry.path === "a")?.kind).toBe("directory");
  });

  it("returns 404 for read/stat on a missing path", async () => {
    const client = mockClient(async (command) => {
      if (command instanceof GetObjectCommand || command instanceof HeadObjectCommand) {
        const err = new Error("NoSuchKey");
        err.name = "NoSuchKey";
        throw err;
      }
      if (command instanceof ListObjectsV2Command) {
        return {};
      }
      throw new Error("unexpected");
    });
    const vfs = createS3Vfs(creds, config, { client });
    expect(await statusOf(() => vfs.read({ path: "nope.txt" }))).toBe(404);
    expect(await statusOf(() => vfs.stat({ path: "nope.txt" }))).toBe(404);
  });
});
