#!/usr/bin/env node
const args = process.argv.slice(2);
const shout = args.includes("--shout");
const name = args.find((a) => !a.startsWith("--")) ?? "world";

const greeting = `Hello, ${name}! 👋`;
console.log(shout ? greeting.toUpperCase() : greeting);