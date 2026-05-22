import process from "node:process";
import { greet, resolveName } from "./greet.js";

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  console.log(`greeter — a tiny CLI that prints a friendly greeting.

Usage:
  greeter [name] [options]

Arguments:
  name          Name to greet (default: "world")

Options:
  --shout       Uppercase the greeting
  -h, --help    Show this help message

Examples:
  greeter Eddy
  greeter Eddy --shout`);
  process.exit(0);
}

const shout = args.includes("--shout");
const name = resolveName(args);
console.log(greet(name, shout));
