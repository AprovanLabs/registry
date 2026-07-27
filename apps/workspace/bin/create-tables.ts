import {
  DynamoDBClient,
  CreateTableCommand,
  UpdateTimeToLiveCommand,
  ResourceInUseException,
} from "@aws-sdk/client-dynamodb";
import { ALL_TABLES } from "../src/db/schema.js";

const endpoint = process.env["DYNAMO_ENDPOINT"];
const region = process.env["AWS_REGION"] ?? "us-east-1";

const client = new DynamoDBClient({
  endpoint,
  region,
  credentials: endpoint
    ? {
        accessKeyId: process.env["AWS_ACCESS_KEY_ID"] ?? "local",
        secretAccessKey: process.env["AWS_SECRET_ACCESS_KEY"] ?? "local",
      }
    : undefined,
});

async function createTable(
  tableName: string,
  input: (typeof ALL_TABLES)[number]["createInput"],
  ttlAttribute: string | undefined,
): Promise<void> {
  try {
    await client.send(new CreateTableCommand(input));
    process.stdout.write(`  created ${tableName}\n`);
  } catch (err) {
    if (err instanceof ResourceInUseException) {
      process.stdout.write(`  exists   ${tableName} (skipped)\n`);
    } else {
      throw err;
    }
  }

  if (ttlAttribute) {
    await client.send(
      new UpdateTimeToLiveCommand({
        TableName: tableName,
        TimeToLiveSpecification: {
          AttributeName: ttlAttribute,
          Enabled: true,
        },
      }),
    );
    process.stdout.write(`  ttl      ${tableName} (attribute=${ttlAttribute})\n`);
  }
}

async function main(): Promise<void> {
  process.stdout.write(`Creating tables (endpoint=${endpoint ?? "AWS default"})…\n`);
  for (const schema of ALL_TABLES) {
    await createTable(schema.tableName, schema.createInput, schema.ttlAttribute);
  }
  process.stdout.write("Done.\n");
}

main().catch((err) => {
  process.stderr.write(`Fatal: ${err instanceof Error ? err.message : String(err)}\n`);
  process.exit(1);
});
