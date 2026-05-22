// Pure greeting logic — no console, no process. Easy to test in isolation.

/** Build a greeting for `name`, optionally shouted (uppercased). */
export function greet(name: string, shout = false): string {
  const greeting = `Hello, ${name}! 👋`;
  return shout ? greeting.toUpperCase() : greeting;
}

/** Pick the first non-flag argument as the name, defaulting to "world". */
export function resolveName(args: string[]): string {
  return args.find((a) => !a.startsWith("-")) ?? "world";
}
