#!/usr/bin/env node
/**
 * @utdk/cli entry point
 *
 * Thin shim that boots the CLI and maps the resolved exit code to
 * process.exit().  All logic lives in cli.ts.
 */
import { runCli } from "./cli.js";

const exitCode = await runCli(process.argv.slice(2));
process.exit(exitCode);
