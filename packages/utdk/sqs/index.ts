/**
 * `utdk/sqs` — Amazon SQS events provider.
 *
 * Handwritten (message queues don't fit the OpenAPI-generated mold) but honors
 * the standard UTDK provider contract: `createSqsClient({ headers })` returns
 * the operation surface, with AWS credentials injected as
 * `Authorization: Bearer <json credentials>`. The events engine and result
 * contract live in `@utdk/events`.
 *
 * Binding options: `queue_url` (required), optional `topic_arn` (SNS publish on
 * emit), `region` (defaults from the queue URL hostname).
 */

import {
  eventsToolEntries,
  secretFromHeaders,
  type EventsClient,
  type EventsClientOptions,
  type EventsEmitArgs,
  type EventsEmitResult,
  type EventsListArgs,
  type EventsListResult,
} from "@utdk/events";
import { sqsEmit, sqsList, type SqsConnectionArgs } from "@utdk/events/sqs";
import { createLazyClient } from "../client.js";

export type {
  EventsEmitArgs,
  EventsEmitResult,
  EventsListArgs,
  EventsListResult,
} from "@utdk/events";

export interface SqsClient extends EventsClient {}

export interface SqsClientOptions extends EventsClientOptions {
  /** Binding defaults merged into every call (queue_url, topic_arn, region). */
  binding?: Partial<SqsConnectionArgs>;
}

export async function createSqsClient(options: SqsClientOptions = {}): Promise<SqsClient> {
  const secret = secretFromHeaders(options.headers, "sqs", "AWS credentials JSON");
  const binding = options.binding;
  return {
    emit: async (args) =>
      sqsEmit(secret, { ...binding, ...args } as EventsEmitArgs & SqsConnectionArgs, binding),
    list: async (args) =>
      sqsList(secret, { ...binding, ...args } as EventsListArgs & SqsConnectionArgs, binding),
  };
}

const defaultClient = createLazyClient(() => createSqsClient());

export default defaultClient;

/** Discovery entries for GET /tools. */
export const tools = eventsToolEntries("sqs");
