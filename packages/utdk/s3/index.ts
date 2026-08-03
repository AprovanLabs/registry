/**
 * `utdk/s3` — S3-compatible object store provider.
 *
 * Handwritten (object stores don't fit the OpenAPI-generated mold) but honors
 * the standard UTDK provider contract: `createS3Client({ headers, bucket, … })`
 * returns the five vfs operations, with AWS static credentials injected as
 * `Authorization: Bearer <json>`. The engine and result contract live in
 * `@utdk/vfs`.
 */

import {
  vfsToolEntries,
  secretFromHeaders,
  type VfsClient,
  type VfsClientOptions,
} from "@utdk/vfs";
import { createS3Vfs, parseAwsCredentials, requireS3Option } from "@utdk/vfs/s3";
import { createLazyClient } from "../client.js";

export type {
  VfsReadArgs,
  VfsReadResult,
  VfsWriteArgs,
  VfsWriteResult,
  VfsDeleteArgs,
  VfsDeleteResult,
  VfsListArgs,
  VfsListResult,
  VfsStatArgs,
  VfsStat,
} from "@utdk/vfs";

export interface S3ClientOptions extends VfsClientOptions {
  /** Binding option: target bucket (required). */
  bucket?: string;
  /** Binding option: key prefix prepended to every vfs path. */
  prefix?: string;
  /** Binding option: AWS region (default us-east-1). */
  region?: string;
  /** Binding option: custom endpoint for MinIO / R2 / local compose. */
  endpoint?: string;
  forcePathStyle?: boolean;
}

export async function createS3Client(options: S3ClientOptions = {}): Promise<VfsClient> {
  const credentials = parseAwsCredentials(
    secretFromHeaders(options.headers, "s3", "AWS credentials JSON"),
  );
  return createS3Vfs(credentials, {
    bucket: requireS3Option(options.bucket, "bucket"),
    prefix: typeof options.prefix === "string" ? options.prefix : undefined,
    region: typeof options.region === "string" ? options.region : undefined,
    endpoint: typeof options.endpoint === "string" ? options.endpoint : undefined,
    forcePathStyle: options.forcePathStyle,
  });
}

const defaultClient = createLazyClient(() => createS3Client());

export default defaultClient;

/** Discovery entries for GET /tools. */
export const tools = vfsToolEntries("s3");
