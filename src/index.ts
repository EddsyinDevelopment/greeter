import process from "node:process";

const args = process.argv.slice(2);
const shout = args.includes("--shout");
const name = args.find((a: string) => !a.startsWith("--")) ?? "world";

const greeting = `Hello, ${name}! 👋`;
console.log(shout ? greeting.toUpperCase() : greeting);