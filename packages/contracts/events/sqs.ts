/**
 * Amazon SQS events engine — append-only channels over a shared queue.
 *
 * Each workspace binding points at one SQS queue (and optionally an SNS topic
 * for fan-out on emit). Channels are logical partitions inside the queue:
 * every message body is a JSON envelope `{ id, channel, type, payload,
 * timestamp }` with matching `channel` / `type` / `eventId` message
 * attributes for filtering.
 *
 * Credential: bearer token is JSON
 * `{ "accessKeyId": "...", "secretAccessKey": "...", "sessionToken"?: "..." }`.
 * Connection options (usually set via the events interface binding):
 * `queue_url` (required), optional `topic_arn`, `region`.
 *
 * SQS limitations vs Redis Streams:
 * - `list` scans the queue (ReceiveMessage with VisibilityTimeout=0 peek
 *   semantics) and filters client-side — not a native per-channel read.
 * - Event ids are adapter-assigned (`<ms-padded>-<random>`) for
 *   lexicographic ordering; SQS MessageId is not used as the contract id.
 * - At-least-once delivery; duplicates possible on emit and list.
 */

import {
  PublishCommand,
  type PublishCommandInput,
  SNSClient,
} from "@aws-sdk/client-sns";
import {
  ReceiveMessageCommand,
  SendMessageCommand,
  type Message,
  type ReceiveMessageCommandInput,
  type SendMessageCommandInput,
  SQSClient,
} from "@aws-sdk/client-sqs";
import {
  DEFAULT_LIST_LIMIT,
  EventsError,
  validateEmitArgs,
  validateListArgs,
  type EventRecord,
  type EventsEmitArgs,
  type EventsEmitResult,
  type EventsListArgs,
  type EventsListResult,
} from "./index.js";

/** Max ReceiveMessage rounds per list call (10 msgs/round). */
const MAX_SCAN_ROUNDS = 10;
const RECEIVE_BATCH = 10;

export interface AwsCredentials {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken?: string;
}

export interface SqsEventsOptions {
  /** Injected for tests. */
  sqsClient?: SQSClient;
  snsClient?: SNSClient;
}

export interface SqsConnectionArgs {
  queue_url?: string;
  topic_arn?: string;
  region?: string;
}

type ResolvedConfig = {
  queueUrl: string;
  topicArn?: string;
  region: string;
};

interface StoredEvent {
  id: string;
  channel: string;
  type: string;
  payload?: unknown;
  timestamp: string;
}

interface ListCursor {
  v: 1;
  /** ReceiveMessage rounds already completed for this listing. */
  rounds: number;
}

/** Parse AWS credentials from the UTDK bearer secret. */
export function credentialsFromSecret(secret: string): AwsCredentials {
  try {
    const parsed = JSON.parse(secret) as Record<string, unknown>;
    if (
      typeof parsed.accessKeyId === "string" &&
      parsed.accessKeyId &&
      typeof parsed.secretAccessKey === "string" &&
      parsed.secretAccessKey
    ) {
      return {
        accessKeyId: parsed.accessKeyId,
        secretAccessKey: parsed.secretAccessKey,
        sessionToken:
          typeof parsed.sessionToken === "string" && parsed.sessionToken
            ? parsed.sessionToken
            : undefined,
      };
    }
  } catch {
    // fall through
  }
  throw new EventsError(
    'sqs credential must be JSON: { "accessKeyId": "...", "secretAccessKey": "...", "sessionToken"?: "..." }',
    400,
  );
}

function optionString(args: Record<string, unknown>, key: string): string | undefined {
  const value = args[key];
  return typeof value === "string" && value ? value : undefined;
}

function regionFromQueueUrl(queueUrl: string): string | undefined {
  const match = /^https:\/\/sqs\.([a-z0-9-]+)\.amazonaws\.com\//iu.exec(queueUrl);
  return match?.[1];
}

function resolveConfig(
  args: EventsEmitArgs | EventsListArgs | (Record<string, unknown> & SqsConnectionArgs),
  binding?: Partial<SqsConnectionArgs>,
): ResolvedConfig {
  const record = args as Record<string, unknown>;
  const queueUrl = optionString(record, "queue_url") ?? binding?.queue_url;
  if (!queueUrl) {
    throw new EventsError(
      'sqs needs queue_url in the call args or the events interface binding (e.g. https://sqs.us-east-1.amazonaws.com/123456789012/my-queue)',
      400,
    );
  }
  const region =
    optionString(record, "region") ??
    binding?.region ??
    regionFromQueueUrl(queueUrl) ??
    "us-east-1";
  const topicArn = optionString(record, "topic_arn") ?? binding?.topic_arn;
  return { queueUrl, topicArn, region };
}

function clientConfig(credentials: AwsCredentials, region: string) {
  return {
    region,
    credentials: {
      accessKeyId: credentials.accessKeyId,
      secretAccessKey: credentials.secretAccessKey,
      ...(credentials.sessionToken ? { sessionToken: credentials.sessionToken } : {}),
    },
  };
}

function sqsClientFor(
  credentials: AwsCredentials,
  config: ResolvedConfig,
  override?: SQSClient,
): SQSClient {
  return override ?? new SQSClient(clientConfig(credentials, config.region));
}

function snsClientFor(
  credentials: AwsCredentials,
  config: ResolvedConfig,
  override?: SNSClient,
): SNSClient {
  return override ?? new SNSClient(clientConfig(credentials, config.region));
}

/** Lexicographically ordered, time-sortable event id. */
export function generateEventId(now = Date.now()): string {
  const ts = now.toString().padStart(13, "0");
  const rand = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
  return `${ts}-${rand}`;
}

function encodeCursor(cursor: ListCursor): string {
  return Buffer.from(JSON.stringify(cursor), "utf8").toString("base64url");
}

function decodeCursor(raw: string): ListCursor {
  try {
    const parsed = JSON.parse(Buffer.from(raw, "base64url").toString("utf8")) as ListCursor;
    if (parsed?.v === 1 && typeof parsed.rounds === "number" && parsed.rounds >= 0) {
      return parsed;
    }
  } catch {
    // fall through
  }
  throw new EventsError("cursor is not a valid sqs listing token", 400);
}

function parseStoredEvent(message: Message): StoredEvent | undefined {
  if (!message.Body) return undefined;
  try {
    const body = JSON.parse(message.Body) as StoredEvent;
    if (
      typeof body.id === "string" &&
      body.id &&
      typeof body.channel === "string" &&
      typeof body.type === "string" &&
      typeof body.timestamp === "string"
    ) {
      return body;
    }
  } catch {
    return undefined;
  }
  return undefined;
}

function toEventRecord(stored: StoredEvent): EventRecord {
  return {
    id: stored.id,
    channel: stored.channel,
    type: stored.type,
    payload: stored.payload,
    timestamp: stored.timestamp,
  };
}

function mapAwsError(err: unknown, what: string): EventsError {
  const message = err instanceof Error ? err.message : String(err);
  const status =
    typeof err === "object" &&
    err !== null &&
    "$metadata" in err &&
    typeof (err as { $metadata?: { httpStatusCode?: number } }).$metadata?.httpStatusCode ===
      "number"
      ? (err as { $metadata: { httpStatusCode: number } }).$metadata.httpStatusCode
      : 502;
  return new EventsError(`${what} failed: ${message}`, status >= 400 && status < 600 ? status : 502);
}

export async function sqsEmit(
  secret: string,
  args: EventsEmitArgs & SqsConnectionArgs,
  binding?: Partial<SqsConnectionArgs>,
  options: SqsEventsOptions = {},
): Promise<EventsEmitResult> {
  validateEmitArgs(args);
  const credentials = credentialsFromSecret(secret);
  const config = resolveConfig(args, binding);
  const sqs = sqsClientFor(credentials, config, options.sqsClient);
  const id = generateEventId();
  const timestamp = new Date().toISOString();
  const envelope: StoredEvent = {
    id,
    channel: args.channel,
    type: args.type,
    payload: args.payload,
    timestamp,
  };
  const body = JSON.stringify(envelope);
  const input: SendMessageCommandInput = {
    QueueUrl: config.queueUrl,
    MessageBody: body,
    MessageAttributes: {
      channel: { DataType: "String", StringValue: args.channel },
      type: { DataType: "String", StringValue: args.type },
      eventId: { DataType: "String", StringValue: id },
    },
  };
  try {
    await sqs.send(new SendMessageCommand(input));
  } catch (err) {
    throw mapAwsError(err, "sqs SendMessage");
  }

  if (config.topicArn) {
    const sns = snsClientFor(credentials, config, options.snsClient);
    const publish: PublishCommandInput = {
      TopicArn: config.topicArn,
      Message: body,
      MessageAttributes: {
        channel: { DataType: "String", StringValue: args.channel },
        type: { DataType: "String", StringValue: args.type },
        eventId: { DataType: "String", StringValue: id },
      },
    };
    try {
      await sns.send(new PublishCommand(publish));
    } catch (err) {
      throw mapAwsError(err, "sns Publish");
    }
  }

  return { id, channel: args.channel, timestamp };
}

export async function sqsList(
  secret: string,
  args: EventsListArgs & SqsConnectionArgs,
  binding?: Partial<SqsConnectionArgs>,
  options: SqsEventsOptions = {},
): Promise<EventsListResult> {
  validateListArgs(args);
  const credentials = credentialsFromSecret(secret);
  const config = resolveConfig(args, binding);
  const sqs = sqsClientFor(credentials, config, options.sqsClient);
  const limit = args.limit ?? DEFAULT_LIST_LIMIT;
  const startCursor = args.cursor ? decodeCursor(args.cursor) : { v: 1 as const, rounds: 0 };
  const collected: StoredEvent[] = [];
  let rounds = startCursor.rounds;
  let truncatedScan = false;

  while (rounds < startCursor.rounds + MAX_SCAN_ROUNDS) {
    const receive: ReceiveMessageCommandInput = {
      QueueUrl: config.queueUrl,
      MaxNumberOfMessages: RECEIVE_BATCH,
      WaitTimeSeconds: 0,
      VisibilityTimeout: 0,
      MessageAttributeNames: ["All"],
    };
    let messages: Message[];
    try {
      const result = await sqs.send(new ReceiveMessageCommand(receive));
      messages = result.Messages ?? [];
    } catch (err) {
      throw mapAwsError(err, "sqs ReceiveMessage");
    }
    rounds += 1;
    if (messages.length === 0) break;

    for (const message of messages) {
      const stored = parseStoredEvent(message);
      if (!stored || stored.channel !== args.channel) continue;
      if (args.after !== undefined && stored.id <= args.after) continue;
      collected.push(stored);
    }

    if (messages.length < RECEIVE_BATCH) break;
    if (rounds >= startCursor.rounds + MAX_SCAN_ROUNDS) {
      truncatedScan = true;
    }
  }

  collected.sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
  const page = collected.slice(0, limit);
  const events = page.map(toEventRecord);
  const hasMoreInBatch = collected.length > limit;
  const cursor =
    truncatedScan || hasMoreInBatch ? encodeCursor({ v: 1, rounds }) : undefined;

  return { channel: args.channel, events, cursor };
}
