import { PublishCommand, SNSClient } from "@aws-sdk/client-sns";
import { ReceiveMessageCommand, SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { EventsError } from "../index.js";
import {
  credentialsFromSecret,
  generateEventId,
  sqsEmit,
  sqsList,
} from "../sqs.js";

const QUEUE_URL = "https://sqs.us-east-1.amazonaws.com/123456789012/events";
const TOPIC_ARN = "arn:aws:sns:us-east-1:123456789012:events";
const CREDS = JSON.stringify({
  accessKeyId: "AKIATEST",
  secretAccessKey: "secret",
});

function mockSqsClient(
  handler: (command: SendMessageCommand | ReceiveMessageCommand) => unknown,
): SQSClient {
  return { send: vi.fn(async (command) => handler(command)) } as unknown as SQSClient;
}

function mockSnsClient(handler: (command: PublishCommand) => unknown): SNSClient {
  return { send: vi.fn(async (command) => handler(command)) } as unknown as SNSClient;
}

describe("credentialsFromSecret", () => {
  it("parses JSON AWS credentials", () => {
    expect(credentialsFromSecret(CREDS)).toEqual({
      accessKeyId: "AKIATEST",
      secretAccessKey: "secret",
    });
  });

  it("rejects malformed secrets", () => {
    expect(() => credentialsFromSecret("not-json")).toThrow(EventsError);
    expect(() => credentialsFromSecret("{}")).toThrow(/accessKeyId/u);
  });
});

describe("generateEventId", () => {
  it("is lexicographically ordered by time", () => {
    const a = generateEventId(1_000);
    const b = generateEventId(2_000);
    expect(a < b).toBe(true);
  });
});

describe("sqsEmit", () => {
  let sentBody: string | undefined;
  let snsPublished = false;

  beforeEach(() => {
    sentBody = undefined;
    snsPublished = false;
  });

  it("sends an envelope to SQS and returns contract fields", async () => {
    const sqsClient = mockSqsClient((command) => {
      if (command instanceof SendMessageCommand) {
        sentBody = command.input.MessageBody;
        return { MessageId: "sqs-msg-1" };
      }
      throw new Error("unexpected command");
    });

    const result = await sqsEmit(
      CREDS,
      { channel: "orders", type: "order.created", payload: { id: 7 }, queue_url: QUEUE_URL },
      undefined,
      { sqsClient },
    );

    expect(result.channel).toBe("orders");
    expect(result.id).toMatch(/^\d{13}-[a-f0-9]{8}$/u);
    expect(result.timestamp).toBeTruthy();
    const envelope = JSON.parse(sentBody!) as Record<string, unknown>;
    expect(envelope).toMatchObject({
      id: result.id,
      channel: "orders",
      type: "order.created",
      payload: { id: 7 },
    });
  });

  it("optionally publishes to SNS when topic_arn is set", async () => {
    const sqsClient = mockSqsClient((command) => {
      if (command instanceof SendMessageCommand) {
        sentBody = command.input.MessageBody;
        return {};
      }
      throw new Error("unexpected");
    });
    const snsClient = mockSnsClient((command) => {
      if (command instanceof PublishCommand) {
        snsPublished = true;
        expect(command.input.TopicArn).toBe(TOPIC_ARN);
        expect(command.input.Message).toBe(sentBody);
        return { MessageId: "sns-1" };
      }
      throw new Error("unexpected");
    });

    await sqsEmit(
      CREDS,
      {
        channel: "orders",
        type: "order.created",
        queue_url: QUEUE_URL,
        topic_arn: TOPIC_ARN,
      },
      undefined,
      { sqsClient, snsClient },
    );
    expect(snsPublished).toBe(true);
  });

  it("requires queue_url", async () => {
    const sqsClient = mockSqsClient(() => ({}));
    await expect(
      sqsEmit(CREDS, { channel: "orders", type: "t" }, undefined, { sqsClient }),
    ).rejects.toThrow(/queue_url/u);
  });
});

describe("sqsList", () => {
  const makeMessage = (event: {
    id: string;
    channel: string;
    type: string;
    payload?: unknown;
    timestamp: string;
  }) => ({
    Body: JSON.stringify(event),
    MessageId: `sqs-${event.id}`,
  });

  it("returns channel events oldest-first and maps after as exclusive id filter", async () => {
    const messages = [
      makeMessage({
        id: "0000000001000-aaaaaaaa",
        channel: "orders",
        type: "a",
        timestamp: "2026-01-01T00:00:00.000Z",
      }),
      makeMessage({
        id: "0000000002000-bbbbbbbb",
        channel: "orders",
        type: "b",
        timestamp: "2026-01-02T00:00:00.000Z",
      }),
      makeMessage({
        id: "0000000003000-cccccccc",
        channel: "other",
        type: "c",
        timestamp: "2026-01-03T00:00:00.000Z",
      }),
    ];
    const sqsClient = mockSqsClient((command) => {
      if (command instanceof ReceiveMessageCommand) {
        expect(command.input.VisibilityTimeout).toBe(0);
        return { Messages: messages };
      }
      throw new Error("unexpected");
    });

    const result = await sqsList(
      CREDS,
      { channel: "orders", after: "0000000001000-aaaaaaaa", queue_url: QUEUE_URL },
      undefined,
      { sqsClient },
    );

    expect(result.channel).toBe("orders");
    expect(result.events.map((e) => e.id)).toEqual(["0000000002000-bbbbbbbb"]);
    expect(result.cursor).toBeUndefined();
  });

  it("returns an empty list for an unknown channel", async () => {
    const sqsClient = mockSqsClient((command) => {
      if (command instanceof ReceiveMessageCommand) {
        return {
          Messages: [
            makeMessage({
              id: "0000000001000-aaaaaaaa",
              channel: "other",
              type: "a",
              timestamp: "2026-01-01T00:00:00.000Z",
            }),
          ],
        };
      }
      throw new Error("unexpected");
    });

    const result = await sqsList(
      CREDS,
      { channel: "missing", queue_url: QUEUE_URL },
      undefined,
      { sqsClient },
    );
    expect(result.events).toEqual([]);
  });

  it("rejects after and cursor together", async () => {
    const sqsClient = mockSqsClient(() => ({}));
    await expect(
      sqsList(
        CREDS,
        { channel: "orders", after: "1", cursor: "opaque", queue_url: QUEUE_URL },
        undefined,
        { sqsClient },
      ),
    ).rejects.toThrow(/mutually exclusive/u);
  });

  it("returns an opaque cursor when more events may remain", async () => {
    const messages = Array.from({ length: 12 }, (_, i) =>
      makeMessage({
        id: `000000000${String(i).padStart(4, "0")}-aaaaaaaa`,
        channel: "orders",
        type: "t",
        timestamp: "2026-01-01T00:00:00.000Z",
      }),
    );
    let receiveCalls = 0;
    const sqsClient = mockSqsClient((command) => {
      if (command instanceof ReceiveMessageCommand) {
        receiveCalls += 1;
        return { Messages: receiveCalls === 1 ? messages.slice(0, 10) : messages.slice(10) };
      }
      throw new Error("unexpected");
    });

    const result = await sqsList(
      CREDS,
      { channel: "orders", limit: 5, queue_url: QUEUE_URL },
      undefined,
      { sqsClient },
    );

    expect(result.events).toHaveLength(5);
    expect(result.cursor).toBeTruthy();
    expect(() => Buffer.from(result.cursor!, "base64url").toString("utf8")).not.toThrow();
  });
});

describe("emit then list", () => {
  it("observes an emitted event on the same channel", async () => {
    const store: string[] = [];
    const sqsClient = mockSqsClient((command) => {
      if (command instanceof SendMessageCommand) {
        store.push(command.input.MessageBody!);
        return {};
      }
      if (command instanceof ReceiveMessageCommand) {
        return {
          Messages: store.map((body, index) => ({
            Body: body,
            MessageId: `m-${index}`,
          })),
        };
      }
      throw new Error("unexpected");
    });

    const emitted = await sqsEmit(
      CREDS,
      { channel: "probe", type: "ping", payload: { ok: true }, queue_url: QUEUE_URL },
      undefined,
      { sqsClient },
    );
    const listed = await sqsList(
      CREDS,
      { channel: "probe", queue_url: QUEUE_URL },
      undefined,
      { sqsClient },
    );

    expect(listed.events.some((event) => event.id === emitted.id)).toBe(true);
    expect(listed.events[0]?.type).toBe("ping");
    expect(listed.events[0]?.payload).toEqual({ ok: true });
  });
});
