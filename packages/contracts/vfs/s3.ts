/**
 * S3-compatible object store engine for the @utdk/vfs contract.
 *
 * Maps relative vfs paths to `s3://<bucket>/<prefix>/<path>` keys. AWS
 * credentials arrive as a JSON bearer secret
 * (`{"accessKeyId","secretAccessKey","sessionToken"?}`); bucket, optional
 * key prefix, region, and endpoint ride the client/binding options (same
 * split as Snowflake account/warehouse on sql.query args).
 *
 * Etags are S3 object ETags (quotes stripped for the contract surface).
 * Conditional writes use native `If-Match` / `If-Match: *` on PutObject
 * (412 → 409). Delete pays a HeadObject first so `deleted` is truthful
 * (S3 DeleteObject succeeds for absent keys).
 */

import {
  DeleteObjectCommand,
  GetObjectCommand,
  HeadObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
  type S3ClientConfig,
} from "@aws-sdk/client-s3";
import {
  DEFAULT_LIST_LIMIT,
  VfsError,
  validateListArgs,
  validateWriteArgs,
  vfsRelativePath,
  type VfsClient,
  type VfsDeleteArgs,
  type VfsDeleteResult,
  type VfsListArgs,
  type VfsListResult,
  type VfsReadArgs,
  type VfsReadResult,
  type VfsStat,
  type VfsStatArgs,
  type VfsWriteArgs,
  type VfsWriteResult,
} from "./index.js";

export interface AwsCredentials {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken?: string;
}

export interface S3VfsConfig {
  bucket: string;
  /** Prepended to every vfs path (no leading/trailing slashes). */
  prefix?: string;
  region?: string;
  /** S3-compatible endpoint (MinIO, R2, local compose). */
  endpoint?: string;
  forcePathStyle?: boolean;
}

export interface S3VfsDeps {
  /** Injection point for tests. */
  client?: Pick<S3Client, "send">;
}

/** Parse the bearer secret into static AWS credentials. */
export function parseAwsCredentials(secret: string): AwsCredentials {
  let parsed: unknown;
  try {
    parsed = JSON.parse(secret);
  } catch {
    throw new VfsError(
      's3 credentials must be JSON: {"accessKeyId":"...","secretAccessKey":"...","sessionToken"?}',
      400,
    );
  }
  if (
    typeof parsed !== "object" ||
    parsed === null ||
    typeof (parsed as AwsCredentials).accessKeyId !== "string" ||
    typeof (parsed as AwsCredentials).secretAccessKey !== "string"
  ) {
    throw new VfsError(
      's3 credentials must be JSON: {"accessKeyId":"...","secretAccessKey":"...","sessionToken"?}',
      400,
    );
  }
  const record = parsed as AwsCredentials;
  return {
    accessKeyId: record.accessKeyId,
    secretAccessKey: record.secretAccessKey,
    sessionToken:
      typeof record.sessionToken === "string" && record.sessionToken
        ? record.sessionToken
        : undefined,
  };
}

export function requireS3Option(value: unknown, name: string): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new VfsError(`s3 requires { ${name}: "..." } in binding options`, 400);
  }
  return value.trim();
}

/** Strip surrounding quotes S3 returns on ETag headers. */
export function normalizeEtag(etag: string | undefined): string | undefined {
  if (!etag) return undefined;
  return etag.replace(/^"+|"+$/gu, "");
}

function normalizeConfigPrefix(prefix: string | undefined): string {
  if (!prefix) return "";
  return prefix.replace(/^\/+|\/+$/gu, "");
}

function objectKey(config: S3VfsConfig, vfsPath: string): string {
  const root = normalizeConfigPrefix(config.prefix);
  if (!vfsPath) return root;
  return root ? `${root}/${vfsPath}` : vfsPath;
}

function listPrefix(config: S3VfsConfig, vfsPrefix: string): string {
  const base = objectKey(config, vfsPrefix);
  return base ? `${base}/` : "";
}

function isNotFound(err: unknown): boolean {
  if (!err || typeof err !== "object") return false;
  const record = err as { name?: string; Code?: string; $metadata?: { httpStatusCode?: number } };
  const code = record.name ?? record.Code;
  const status = record.$metadata?.httpStatusCode;
  return code === "NoSuchKey" || code === "NotFound" || code === "404" || status === 404;
}

function isPreconditionFailed(err: unknown): boolean {
  if (!err || typeof err !== "object") return false;
  const record = err as { name?: string; Code?: string; $metadata?: { httpStatusCode?: number } };
  const code = record.name ?? record.Code;
  const status = record.$metadata?.httpStatusCode;
  return code === "PreconditionFailed" || code === "412" || status === 412;
}

async function streamToBytes(body: unknown): Promise<Uint8Array> {
  if (!body) return new Uint8Array();
  if (body instanceof Uint8Array) return body;
  if (typeof body === "string") return new TextEncoder().encode(body);
  const chunks: Uint8Array[] = [];
  for await (const chunk of body as AsyncIterable<Uint8Array | string>) {
    chunks.push(typeof chunk === "string" ? new TextEncoder().encode(chunk) : chunk);
  }
  const total = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const out = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    out.set(chunk, offset);
    offset += chunk.length;
  }
  return out;
}

function bodyToContent(bytes: Uint8Array): { encoding: "utf8" | "base64"; content: string } {
  try {
    const text = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
    return { encoding: "utf8", content: text };
  } catch {
    return { encoding: "base64", content: Buffer.from(bytes).toString("base64") };
  }
}

function statFromHead(path: string, head: { ContentLength?: number; ETag?: string; LastModified?: Date }): VfsStat {
  return {
    path,
    kind: "file",
    size: head.ContentLength,
    etag: normalizeEtag(head.ETag),
    modifiedAt: head.LastModified?.toISOString(),
  };
}

function createS3Client(credentials: AwsCredentials, config: S3VfsConfig): S3Client {
  const clientConfig: S3ClientConfig = {
    credentials,
    region: config.region ?? "us-east-1",
  };
  if (config.endpoint) {
    clientConfig.endpoint = config.endpoint;
    clientConfig.forcePathStyle = config.forcePathStyle ?? true;
  }
  return new S3Client(clientConfig);
}

function immediateChild(vfsPrefix: string, pathUnderRoot: string): string | null {
  const normalized = pathUnderRoot.replace(/\/+$/u, "");
  if (!normalized) return null;
  if (vfsPrefix) {
    if (normalized === vfsPrefix) return null;
    if (!normalized.startsWith(`${vfsPrefix}/`)) return null;
    const tail = normalized.slice(vfsPrefix.length + 1);
    const segment = tail.split("/")[0];
    return segment ? `${vfsPrefix}/${segment}` : null;
  }
  const segment = normalized.split("/")[0];
  return segment || null;
}

/** Build a vfs client backed by an S3-compatible bucket. */
export function createS3Vfs(
  credentials: AwsCredentials,
  config: S3VfsConfig,
  deps: S3VfsDeps = {},
): VfsClient {
  if (!config.bucket?.trim()) {
    throw new VfsError('s3 requires { bucket: "..." } in binding options', 400);
  }
  const bucket = config.bucket.trim();
  const client = deps.client ?? createS3Client(credentials, config);
  const send = client.send.bind(client);

  return {
    async read(args: VfsReadArgs): Promise<VfsReadResult> {
      const path = vfsRelativePath(args.path);
      try {
        const response = await send(
          new GetObjectCommand({
            Bucket: bucket,
            Key: objectKey(config, path),
          }),
        );
        const bytes = await streamToBytes(response.Body);
        const { encoding, content } = bodyToContent(bytes);
        return {
          path,
          encoding,
          content,
          size: bytes.length,
          etag: normalizeEtag(response.ETag),
        };
      } catch (err) {
        if (isNotFound(err)) throw new VfsError(`file not found: ${path}`, 404);
        throw new VfsError(
          `s3 read failed: ${err instanceof Error ? err.message : String(err)}`,
          502,
        );
      }
    },

    async write(args: VfsWriteArgs): Promise<VfsWriteResult> {
      validateWriteArgs(args);
      const path = vfsRelativePath(args.path);
      const key = objectKey(config, path);
      const encoding = args.encoding ?? "utf8";
      const body =
        encoding === "base64"
          ? Buffer.from(args.content, "base64")
          : Buffer.from(args.content, "utf8");

      if (args.ifMatch === "*") {
        try {
          await send(new HeadObjectCommand({ Bucket: bucket, Key: key }));
        } catch (err) {
          if (isNotFound(err)) {
            throw new VfsError(`ifMatch "*" failed: file does not exist: ${path}`, 409);
          }
          throw err;
        }
      }

      const command = new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: body,
        ...(args.ifMatch && args.ifMatch !== "*"
          ? { IfMatch: args.ifMatch.includes('"') ? args.ifMatch : `"${args.ifMatch}"` }
          : args.ifMatch === "*"
            ? { IfMatch: "*" }
            : {}),
      });

      try {
        const response = await send(command);
        return {
          path,
          kind: "file",
          size: body.length,
          etag: normalizeEtag(response.ETag),
        };
      } catch (err) {
        if (isPreconditionFailed(err)) {
          throw new VfsError(`ifMatch failed for ${path}`, 409);
        }
        throw new VfsError(
          `s3 write failed: ${err instanceof Error ? err.message : String(err)}`,
          502,
        );
      }
    },

    async delete(args: VfsDeleteArgs): Promise<VfsDeleteResult> {
      const path = vfsRelativePath(args.path);
      const key = objectKey(config, path);
      let existed = false;
      try {
        await send(new HeadObjectCommand({ Bucket: bucket, Key: key }));
        existed = true;
      } catch (err) {
        if (!isNotFound(err)) {
          throw new VfsError(
            `s3 delete failed: ${err instanceof Error ? err.message : String(err)}`,
            502,
          );
        }
      }
      if (existed) {
        await send(new DeleteObjectCommand({ Bucket: bucket, Key: key }));
      }
      return { path, deleted: existed };
    },

    async list(args: VfsListArgs = {}): Promise<VfsListResult> {
      validateListArgs(args);
      const vfsPrefix = args.prefix ? vfsRelativePath(args.prefix, "prefix") : "";
      const limit = args.limit ?? DEFAULT_LIST_LIMIT;
      const recursive = args.recursive === true;
      const s3Prefix = listPrefix(config, vfsPrefix);
      const root = normalizeConfigPrefix(config.prefix);
      const rootPrefix = root ? `${root}/` : "";

      const response = await send(
        new ListObjectsV2Command({
          Bucket: bucket,
          Prefix: s3Prefix,
          Delimiter: recursive ? undefined : "/",
          MaxKeys: limit,
          ContinuationToken: args.cursor,
        }),
      );

      const entries = new Map<string, VfsStat>();

      for (const common of response.CommonPrefixes ?? []) {
        const key = common.Prefix ?? "";
        const relative = rootPrefix && key.startsWith(rootPrefix) ? key.slice(rootPrefix.length) : key;
        const path = immediateChild(vfsPrefix, relative);
        if (path) entries.set(path, { path, kind: "directory" });
      }

      for (const object of response.Contents ?? []) {
        const key = object.Key ?? "";
        if (!key || key.endsWith("/")) continue;
        const relative = rootPrefix && key.startsWith(rootPrefix) ? key.slice(rootPrefix.length) : key;
        const path = immediateChild(vfsPrefix, relative);
        if (!path || entries.has(path)) continue;
        entries.set(path, {
          path,
          kind: "file",
          size: object.Size,
          etag: normalizeEtag(object.ETag),
          modifiedAt: object.LastModified?.toISOString(),
        });
      }

      const sorted = [...entries.values()].sort((left, right) => left.path.localeCompare(right.path));
      return {
        entries: sorted.slice(0, limit),
        cursor: response.IsTruncated ? response.NextContinuationToken : undefined,
      };
    },

    async stat(args: VfsStatArgs): Promise<VfsStat> {
      const path = vfsRelativePath(args.path);
      const key = objectKey(config, path);
      try {
        const head = await send(new HeadObjectCommand({ Bucket: bucket, Key: key }));
        return statFromHead(path, head);
      } catch (err) {
        if (!isNotFound(err)) {
          throw new VfsError(
            `s3 stat failed: ${err instanceof Error ? err.message : String(err)}`,
            502,
          );
        }
      }

      const listing = await send(
        new ListObjectsV2Command({
          Bucket: bucket,
          Prefix: `${key}/`,
          MaxKeys: 1,
        }),
      );
      if ((listing.Contents?.length ?? 0) > 0 || (listing.CommonPrefixes?.length ?? 0) > 0) {
        return { path, kind: "directory" };
      }
      throw new VfsError(`path not found: ${path}`, 404);
    },
  };
}
