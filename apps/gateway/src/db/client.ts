import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

let _client: DynamoDBDocumentClient | undefined;

export function getDynamoDocClient(): DynamoDBDocumentClient {
  if (!_client) {
    const base = new DynamoDBClient({
      endpoint: process.env["DYNAMO_ENDPOINT"],
      region: process.env["AWS_REGION"] ?? "us-east-1",
      credentials:
        process.env["DYNAMO_ENDPOINT"]
          ? {
              accessKeyId: process.env["AWS_ACCESS_KEY_ID"] ?? "local",
              secretAccessKey: process.env["AWS_SECRET_ACCESS_KEY"] ?? "local",
            }
          : undefined,
    });
    _client = DynamoDBDocumentClient.from(base);
  }
  return _client;
}

export function resetDynamoDocClient(): void {
  _client = undefined;
}
