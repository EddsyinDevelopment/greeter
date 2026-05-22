import process from "node:process";

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
const name = args.find((a: string) => !a.startsWith("-")) ?? "world";

const greeting = `Hello, ${name}! 👋`;
console.log(shout ? greeting.toUpperCase() : greeting);